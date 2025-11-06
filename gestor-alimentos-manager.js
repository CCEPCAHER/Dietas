// Gestor de Base de Datos de Alimentos integrado en la app
class GestorAlimentosManager {
    constructor() {
        this.baseDatosCompleta = [];
        this.baseDatosFiltrada = [];
        this.indiceEdicion = -1;
        this.inicializado = false;
        this.inicializando = false;
        
        // Escuchar cuando el usuario se autentica para recargar desde Firestore
        window.addEventListener('userLoggedIn', () => {
            console.log('🔄 Usuario autenticado, recargando alimentos desde Firestore...');
            this.recargarDesdeFirestore();
        });
        
        // Inicializar de forma asíncrona sin bloquear
        this.init().catch(error => {
            console.error('Error al inicializar GestorAlimentosManager:', error);
        });
    }
    
    // Método para recargar desde Firestore cuando el usuario se autentica
    async recargarDesdeFirestore() {
        try {
            console.log('🔄 Recargando alimentos desde Firestore...');
            const cargado = await this.cargarDesdeFirestore();
            if (cargado && this.baseDatosCompleta.length > 0) {
                this.baseDatosFiltrada = this.baseDatosCompleta;
                window.baseDatosAlimentos = this.baseDatosCompleta;
                console.log(`✅ ${this.baseDatosCompleta.length} alimentos recargados desde Firestore`);
                
                // Recargar la interfaz si está visible
                const contenido = document.getElementById('gestorAlimentosContent');
                if (contenido && contenido.innerHTML.includes('gestor-table-container')) {
                    this.mostrarInterfaz();
                }
                
                // Recargar en alimentosDB
                this.recargarAlimentosDB();
            } else {
                console.log('📦 No hay datos en Firestore para recargar');
            }
        } catch (error) {
            console.error('❌ Error al recargar desde Firestore:', error);
        }
    }

    async init() {
        // Evitar múltiples inicializaciones simultáneas
        if (this.inicializando) {
            return;
        }
        
        if (this.inicializado) {
            return;
        }
        
        this.inicializando = true;
        
        try {
            // Intentar cargar desde Firestore primero
            await this.cargarDesdeFirestore();
            
            // Si no hay datos en Firestore, cargar desde localStorage o base-datos-alimentos.js
            if (!this.baseDatosCompleta || this.baseDatosCompleta.length === 0) {
                console.log('📦 No hay datos en Firestore, intentando cargar desde otras fuentes...');
                
                // Intentar cargar desde base-datos-alimentos.js primero
                if (window.baseDatosAlimentos && Array.isArray(window.baseDatosAlimentos) && window.baseDatosAlimentos.length > 0) {
                    this.cargarBaseDatos();
                    console.log(`📦 ${this.baseDatosCompleta.length} alimentos cargados desde base-datos-alimentos.js`);
                    
                    // Guardar la base inicial en Firestore para sincronizar
                    await this.guardarEnFirestore();
                    this.inicializado = true;
                    this.inicializando = false;
                    return;
                }
                
                // Si no hay base-datos-alimentos.js, intentar localStorage
                const datosGuardados = localStorage.getItem('baseDatosAlimentosPersonalizada');
                if (datosGuardados) {
                    try {
                        const datosPersonalizados = JSON.parse(datosGuardados);
                        if (Array.isArray(datosPersonalizados) && datosPersonalizados.length > 0) {
                            this.baseDatosCompleta = datosPersonalizados;
                            this.baseDatosFiltrada = this.baseDatosCompleta;
                            window.baseDatosAlimentos = this.baseDatosCompleta;
                            console.log(`📦 ${this.baseDatosCompleta.length} alimentos cargados desde localStorage`);
                            
                            // Guardar en Firestore para sincronizar
                            await this.guardarEnFirestore();
                            this.inicializado = true;
                            this.inicializando = false;
                            return;
                        }
                    } catch (e) {
                        console.error('Error al cargar base de datos desde localStorage:', e);
                    }
                }
                
                console.warn('⚠️ No se encontraron alimentos en ninguna fuente');
            } else {
                console.log(`✅ ${this.baseDatosCompleta.length} alimentos cargados desde Firestore`);
            }
            
            this.inicializado = true;
        } catch (error) {
            console.error('Error en init():', error);
            // Fallback a base-datos-alimentos.js si hay error
            if (window.baseDatosAlimentos && Array.isArray(window.baseDatosAlimentos) && window.baseDatosAlimentos.length > 0) {
                this.cargarBaseDatos();
                console.log(`📦 ${this.baseDatosCompleta.length} alimentos cargados desde base-datos-alimentos.js (fallback)`);
                this.inicializado = true;
            }
        } finally {
            this.inicializando = false;
        }
    }

    cargarBaseDatos() {
        this.baseDatosCompleta = JSON.parse(JSON.stringify(window.baseDatosAlimentos || []));
        this.baseDatosFiltrada = this.baseDatosCompleta;
    }
    
    guardarEnLocalStorage() {
        try {
            localStorage.setItem('baseDatosAlimentosPersonalizada', JSON.stringify(this.baseDatosCompleta));
            console.log('💾 Base de datos guardada en localStorage');
        } catch (e) {
            console.error('Error al guardar en localStorage:', e);
        }
    }

    async cargarDesdeFirestore() {
        try {
            // Verificar si Firebase está disponible
            if (typeof firebase === 'undefined' || !firebase.firestore) {
                console.log('📦 Firebase no está disponible');
                return false;
            }

            const user = window.authManager?.getCurrentUser();
            if (!user) {
                console.log('📦 Usuario no autenticado, saltando carga desde Firestore');
                return false;
            }

            // Intentar obtener la referencia de Firestore de múltiples formas
            let db = null;
            
            if (window.firebaseDb) {
                db = window.firebaseDb;
            } else if (window.dietaService && window.dietaService.db) {
                db = window.dietaService.db;
            } else if (typeof firebase !== 'undefined' && firebase.firestore) {
                db = firebase.firestore();
            }
            
            if (!db) {
                console.log('📦 Firestore no está inicializado');
                return false;
            }

            console.log('📦 Cargando alimentos desde Firestore...');
            const docRef = db.collection('alimentos').doc('base-datos');
            const doc = await docRef.get();

            if (doc.exists) {
                const data = doc.data();
                if (data.alimentos && Array.isArray(data.alimentos) && data.alimentos.length > 0) {
                    // Normalizar los alimentos al formato estándar
                    this.baseDatosCompleta = data.alimentos.map(alimento => {
                        return this.normalizarAlimentoParaMostrar(alimento);
                    });
                    this.baseDatosFiltrada = this.baseDatosCompleta;
                    window.baseDatosAlimentos = this.baseDatosCompleta;
                    console.log(`✅ ${this.baseDatosCompleta.length} alimentos cargados desde Firestore`);
                    return true;
                } else {
                    console.log('📦 Documento existe pero no tiene alimentos');
                }
            } else {
                console.log('📦 Documento "base-datos" no existe en Firestore');
            }
            return false;
        } catch (e) {
            console.error('❌ Error al cargar desde Firestore:', e);
            console.error('Stack trace:', e.stack);
            return false;
        }
    }

    async guardarEnFirestore() {
        try {
            // Verificar si Firebase está disponible
            if (typeof firebase === 'undefined' || !firebase.firestore) {
                console.error('❌ Firebase no está disponible');
                window.mostrarNotificacion?.('❌ Error: Firebase no está disponible', 'error');
                return false;
            }

            const user = window.authManager?.getCurrentUser();
            if (!user) {
                console.warn('⚠️ Usuario no autenticado, saltando guardado en Firestore');
                window.mostrarNotificacion?.('⚠️ Debes iniciar sesión para guardar en Firebase', 'warning');
                return false;
            }

            if (!this.baseDatosCompleta || this.baseDatosCompleta.length === 0) {
                console.warn('⚠️ No hay datos para guardar en Firestore');
                return false;
            }

            // Normalizar y limpiar datos: eliminar campos undefined y asegurar formato correcto
            const baseDatosLimpia = this.baseDatosCompleta.map(alimento => {
                const normalizado = this.normalizarAlimentoParaMostrar(alimento);
                const limpio = {};
                for (const key in normalizado) {
                    if (normalizado[key] !== undefined && normalizado[key] !== null) {
                        limpio[key] = normalizado[key];
                    }
                }
                return limpio;
            });

            // Intentar obtener la referencia de Firestore de múltiples formas
            let db = null;
            
            // Primero intentar con window.firebaseDb (la forma más común)
            if (window.firebaseDb) {
                db = window.firebaseDb;
                console.log('✅ Usando window.firebaseDb');
            } 
            // Si no está disponible, intentar con window.dietaService?.db
            else if (window.dietaService && window.dietaService.db) {
                db = window.dietaService.db;
                console.log('✅ Usando window.dietaService.db');
            }
            // Si no está disponible, intentar con firebase.firestore() directamente
            else if (typeof firebase !== 'undefined' && firebase.firestore) {
                db = firebase.firestore();
                console.log('✅ Usando firebase.firestore() directamente');
            }
            
            if (!db) {
                console.error('❌ Firestore no está inicializado');
                console.log('Opciones disponibles:', {
                    'window.firebaseDb': typeof window.firebaseDb,
                    'window.dietaService?.db': typeof window.dietaService?.db,
                    'firebase.firestore()': typeof firebase !== 'undefined' ? typeof firebase.firestore() : 'undefined'
                });
                window.mostrarNotificacion?.('❌ Error: Firestore no está inicializado. Por favor, recarga la página.', 'error');
                return false;
            }

            console.log(`💾 Guardando ${baseDatosLimpia.length} alimentos en Firestore...`);
            console.log('Usuario autenticado:', user.email);
            console.log('Base de datos:', db);
            
            // Guardar en Firestore
            const docRef = db.collection('alimentos').doc('base-datos');
            await docRef.set({
                alimentos: baseDatosLimpia,
                fechaActualizacion: firebase.firestore.FieldValue.serverTimestamp(),
                totalAlimentos: baseDatosLimpia.length,
                actualizadoPor: user.uid,
                actualizadoPorEmail: user.email
            }, { merge: true });

            console.log(`✅ ${baseDatosLimpia.length} alimentos guardados en Firestore correctamente`);
            console.log('Documento guardado en:', 'alimentos/base-datos');
            
            // Verificar que se guardó correctamente leyendo el documento
            const docVerificado = await docRef.get();
            if (docVerificado.exists) {
                const datosVerificados = docVerificado.data();
                console.log('✅ Verificación: Documento existe en Firestore');
                console.log('Total de alimentos en Firestore:', datosVerificados.totalAlimentos);
            } else {
                console.warn('⚠️ Advertencia: El documento no se encontró después de guardar');
            }
            
            return true;
        } catch (e) {
            console.error('❌ Error al guardar en Firestore:', e);
            console.error('Stack trace:', e.stack);
            console.error('Detalles del error:', {
                message: e.message,
                code: e.code,
                name: e.name
            });
            window.mostrarNotificacion?.(`❌ Error al guardar en Firebase: ${e.message}`, 'error');
            return false;
        }
    }

    async mostrarInterfaz() {
        const contenido = document.getElementById('gestorAlimentosContent');
        if (!contenido) {
            console.error('⚠️ No se encontró el elemento gestorAlimentosContent');
            return;
        }
        
        // Asegurar que los datos estén cargados antes de mostrar la interfaz
        if (!this.inicializado || this.inicializando) {
            contenido.innerHTML = `
                <h2 style="text-align: center; margin-bottom: 20px; color: #667eea;">🍎 Gestión de Base de Datos de Alimentos</h2>
                <p style="text-align: center; color: #666; margin-bottom: 30px;">Cargando datos...</p>
            `;
            // Esperar a que termine la inicialización
            await this.init();
        }
        
        // Si aún no hay datos después de inicializar, intentar cargar desde base-datos-alimentos.js
        if (!this.baseDatosCompleta || this.baseDatosCompleta.length === 0) {
            if (window.baseDatosAlimentos && Array.isArray(window.baseDatosAlimentos) && window.baseDatosAlimentos.length > 0) {
                this.cargarBaseDatos();
                console.log(`📦 ${this.baseDatosCompleta.length} alimentos cargados desde base-datos-alimentos.js`);
            } else {
                contenido.innerHTML = `
                    <h2 style="text-align: center; margin-bottom: 20px; color: #667eea;">🍎 Gestión de Base de Datos de Alimentos</h2>
                    <p style="text-align: center; color: #dc3545; margin-bottom: 30px;">⚠️ No se encontraron alimentos. Por favor, recarga la página.</p>
                `;
                return;
            }
        }

        contenido.innerHTML = `
            <div class="gestor-alimentos-container">
                <div class="gestor-stats">
                    <div class="gestor-stat-card">
                        <h3>${this.baseDatosCompleta.length}</h3>
                        <p>Total Alimentos</p>
                    </div>
                    <div class="gestor-stat-card">
                        <h3>${new Set(this.baseDatosCompleta.map(a => a.categoria_principal || a['CATEGORÍA PRINCIPAL'] || 'N/A')).size}</h3>
                        <p>Categorías</p>
                    </div>
                    <div class="gestor-stat-card">
                        <h3>${new Set(this.baseDatosCompleta.map(a => a.subcategoria || a.CLASIFICACIÓN || 'N/A')).size}</h3>
                        <p>Subcategorías</p>
                    </div>
                </div>

                <div class="gestor-controls">
                    <button class="btn btn-success" onclick="window.gestorAlimentosManager.abrirModalAgregar()">➕ Agregar Alimento</button>
                    <button class="btn btn-primary" onclick="window.gestorAlimentosManager.exportarBaseDatos()">📥 Exportar</button>
                    <button class="btn btn-primary" onclick="window.gestorAlimentosManager.importarBaseDatos()">📤 Importar</button>
                    <button class="btn" onclick="window.gestorAlimentosManager.resetearBaseDatos()" style="background: #dc3545; color: white;">🔄 Resetear BD</button>
                    <div class="search-box" style="flex: 1; min-width: 250px;">
                        <input type="text" id="gestorSearchInput" placeholder="🔍 Buscar alimentos..." oninput="window.gestorAlimentosManager.filtrarAlimentos()">
                    </div>
                </div>

                <div class="gestor-filters">
                    <select class="filter-select" id="gestorFilterCategoria" onchange="window.gestorAlimentosManager.filtrarAlimentos()">
                        <option value="">Todas las categorías</option>
                        ${this.generarOpcionesCategoria()}
                    </select>
                </div>

                <div class="gestor-table-container">
                    ${this.generarTabla()}
                </div>
            </div>

            <!-- Modal para agregar/editar -->
            ${this.generarModalAlimento()}
        `;

        // Establecer listeners para inputs del modal
        setTimeout(() => {
            const proteinasInput = document.getElementById('gestorProteínas');
            const hidratosInput = document.getElementById('gestorHidratos');
            const grasasInput = document.getElementById('gestorGrasas');
            const caloriasInput = document.getElementById('gestorCalorias');

            if (proteinasInput && hidratosInput && grasasInput && caloriasInput) {
                [proteinasInput, hidratosInput, grasasInput].forEach(input => {
                    input.addEventListener('input', () => this.actualizarCalorias());
                });
            }
        }, 100);
    }

    generarOpcionesCategoria() {
        const categorias = [...new Set(this.baseDatosCompleta.map(a => a.categoria_principal || a['CATEGORÍA PRINCIPAL'] || 'N/A'))].sort();
        return categorias.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    }

    generarTabla() {
        let html = `
            <table class="gestor-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Subcategoría</th>
                        <th>Peso</th>
                        <th>Proteínas</th>
                        <th>GS</th>
                        <th>Hidratos</th>
                        <th>Grasas</th>
                        <th>Azúcares</th>
                        <th>Kcal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;

        this.baseDatosFiltrada.forEach((alimento, index) => {
            const nombre = alimento.nombre || alimento.ALIMENTO || 'Sin nombre';
            const categoria = alimento.categoria_principal || alimento.MACRONUTRIENTE_PRINCIPAL || alimento['CATEGORÍA PRINCIPAL'] || '';
            const subcategoria = alimento.subcategoria || alimento.CLASIFICACIÓN || '';
            const peso = alimento.peso || alimento.PESO_POR_UNIDAD || alimento['PESO POR UNIDAD'] || '';
            
            // Leer con soporte para campos normalizados y originales
            const proteinas = parseFloat(alimento.proteínas || alimento.PROTEÍNAS || 0);
            const grasasSaturadas = parseFloat(alimento.grasas_saturadas || alimento.GRASAS_SATURADAS || alimento['GRASAS SATURADAS'] || 0);
            const hidratos = parseFloat(alimento.hidratos || alimento.HIDRATOS || alimento.carbohidratos || 0);
            const grasas = parseFloat(alimento.grasas || alimento.GRASAS || 0);
            const azucar = parseFloat(alimento.azucares || alimento.azucar || alimento.AZÚCARES || 0);
            const calorias = parseFloat(alimento.calorias || alimento.CALORÍAS || 0) || 
                            Math.round((proteinas * 4) + (hidratos * 4) + (grasas * 9));

            const pesoDisplay = peso ? peso : '-';
            const grasasSaturadasDisplay = grasasSaturadas > 0 ? `${grasasSaturadas.toFixed(1)}g` : '-';
            const azucarDisplay = azucar > 0 ? `${azucar.toFixed(1)}g` : '-';

            html += `
                <tr>
                    <td><strong>${nombre}</strong></td>
                    <td>${categoria}</td>
                    <td>${subcategoria}</td>
                    <td>${pesoDisplay}</td>
                    <td>${proteinas.toFixed(1)}g</td>
                    <td>${grasasSaturadasDisplay}</td>
                    <td>${hidratos.toFixed(1)}g</td>
                    <td>${grasas.toFixed(1)}g</td>
                    <td>${azucarDisplay}</td>
                    <td>${calorias} kcal</td>
                    <td>
                        <button class="btn btn-sm" style="background: #667eea; color: white; padding: 6px 12px; margin-right: 5px;" onclick="window.gestorAlimentosManager.editarAlimento(${index})">✏️</button>
                        <button class="btn btn-sm btn-danger" style="padding: 6px 12px;" onclick="window.gestorAlimentosManager.eliminarAlimento(${index})">🗑️</button>
                    </td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        return html;
    }

    generarModalAlimento() {
        return `
            <div id="gestorModalAlimento" class="modal">
                <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
                    <span class="close-modal" onclick="document.getElementById('gestorModalAlimento').style.display='none'">&times;</span>
                    <h2 id="gestorModalTitle">Agregar Nuevo Alimento</h2>
                    
                    <form id="gestorFormAlimento" onsubmit="window.gestorAlimentosManager.guardarAlimento(event)">
                        <div class="form-group">
                            <label>Nombre del alimento *</label>
                            <input type="text" id="gestorNombre" required>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Categoría principal *</label>
                                <select id="gestorCategoria" required>
                                    <option value="">Seleccionar...</option>
                                    <option value="Proteínas">Proteínas</option>
                                    <option value="Hidratos de carbono">Hidratos de carbono</option>
                                    <option value="Grasas">Grasas</option>
                                    <option value="Verduras">Verduras</option>
                                    <option value="Fruta">Fruta</option>
                                    <option value="Fruto seco">Fruto seco</option>
                                    <option value="Semilla">Semilla</option>
                                    <option value="Origen animal">Origen animal</option>
                                    <option value="Carne blanca">Carne blanca</option>
                                    <option value="Carne roja">Carne roja</option>
                                    <option value="Pescado azul">Pescado azul</option>
                                    <option value="Pescado blanco">Pescado blanco</option>
                                    <option value="Pescado semigraso">Pescado semigraso</option>
                                    <option value="Marisco">Marisco</option>
                                    <option value="Embutido">Embutido</option>
                                    <option value="Víscera">Víscera</option>
                                    <option value="Cereal">Cereal</option>
                                    <option value="Pan">Pan</option>
                                    <option value="Pasta">Pasta</option>
                                    <option value="Tubérculo">Tubérculo</option>
                                    <option value="Legumbres">Legumbres</option>
                                    <option value="Postre">Postre</option>
                                    <option value="Bebida">Bebida</option>
                                    <option value="Plato preparado">Plato preparado</option>
                                    <option value="Apto para veganos y vegetarianos">Apto para veganos y vegetarianos</option>
                                    <option value="Otros">Otros</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Subcategoría *</label>
                                <input type="text" id="gestorSubcategoria" list="gestorSubcategorias" required>
                                <datalist id="gestorSubcategorias">
                                    <option value="Carne blanca">
                                    <option value="Carne roja">
                                    <option value="Pescado azul">
                                    <option value="Pescado blanco">
                                    <option value="Marisco">
                                    <option value="Cereal">
                                    <option value="Pan">
                                    <option value="Pasta">
                                    <option value="Tubérculo">
                                    <option value="Legumbres">
                                    <option value="Fruto seco">
                                    <option value="Semilla">
                                    <option value="Postre">
                                    <option value="Bebida">
                                    <option value="Otros">
                                </datalist>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Presentación</label>
                                <input type="text" id="gestorPresentacion" placeholder="Ej: Envase individual">
                            </div>
                            <div class="form-group">
                                <label>Peso</label>
                                <input type="text" id="gestorPeso" placeholder="Ej: 200 g">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Marca</label>
                                <input type="text" id="gestorMarca" placeholder="Nombre de la marca">
                            </div>
                            <div class="form-group">
                                <label>Producto</label>
                                <input type="text" id="gestorProducto" placeholder="Nombre comercial">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Notas</label>
                            <textarea id="gestorNotas" rows="2" placeholder="Información adicional"></textarea>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Proteínas (g por 100g) *</label>
                                <input type="number" id="gestorProteínas" step="0.1" min="0" required>
                            </div>
                            <div class="form-group">
                                <label>Hidratos (g por 100g) *</label>
                                <input type="number" id="gestorHidratos" step="0.1" min="0" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Grasas (g por 100g) *</label>
                                <input type="number" id="gestorGrasas" step="0.1" min="0" required>
                            </div>
                            <div class="form-group">
                                <label>Grasas Saturadas (g por 100g)</label>
                                <input type="number" id="gestorGrasasSaturadas" step="0.1" min="0">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Azúcares (g por 100g)</label>
                                <input type="number" id="gestorAzucar" step="0.1" min="0">
                            </div>
                            <div class="form-group">
                                <label>Calorías</label>
                                <input type="number" id="gestorCalorias" step="1" min="0" placeholder="Auto-calculado" readonly>
                            </div>
                        </div>

                        <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                            <button type="button" class="btn" onclick="document.getElementById('gestorModalAlimento').style.display='none'" style="background: #6c757d; color: white;">Cancelar</button>
                            <button type="submit" class="btn btn-success">💾 Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    actualizarCalorias() {
        const proteinas = parseFloat(document.getElementById('gestorProteínas')?.value) || 0;
        const hidratos = parseFloat(document.getElementById('gestorHidratos')?.value) || 0;
        const grasas = parseFloat(document.getElementById('gestorGrasas')?.value) || 0;
        
        const calorias = (proteinas * 4) + (hidratos * 4) + (grasas * 9);
        const caloriasInput = document.getElementById('gestorCalorias');
        if (caloriasInput) {
            caloriasInput.value = Math.round(calorias);
        }
    }

    filtrarAlimentos() {
        const busqueda = (document.getElementById('gestorSearchInput')?.value || '').toLowerCase();
        const categoria = (document.getElementById('gestorFilterCategoria')?.value || '').toLowerCase();
        
        this.baseDatosFiltrada = this.baseDatosCompleta.filter(alimento => {
            const nombre = (alimento.nombre || alimento.ALIMENTO || '').toLowerCase();
            const cat = (alimento.categoria_principal || alimento['CATEGORÍA PRINCIPAL'] || '').toLowerCase();
            const marca = (alimento.marca || alimento['MARCA REGISTRADA'] || '').toLowerCase();
            const producto = (alimento.producto || alimento['NOMBRE DEL PRODUCTO'] || '').toLowerCase();
            
            const coincideBusqueda = !busqueda || nombre.includes(busqueda) || marca.includes(busqueda) || producto.includes(busqueda);
            const coincideCategoria = !categoria || cat === categoria;
            
            return coincideBusqueda && coincideCategoria;
        });
        
        const container = document.querySelector('.gestor-table-container');
        if (container) {
            container.innerHTML = this.generarTabla();
        }
    }

    abrirModalAgregar() {
        document.getElementById('gestorModalTitle').textContent = 'Agregar Nuevo Alimento';
        document.getElementById('gestorFormAlimento').reset();
        document.getElementById('gestorCalorias').value = 0;
        this.indiceEdicion = -1;
        document.getElementById('gestorModalAlimento').style.display = 'block';
    }

    editarAlimento(index) {
        const alimento = this.baseDatosFiltrada[index];
        const indiceOriginal = this.baseDatosCompleta.indexOf(alimento);
        
        document.getElementById('gestorModalTitle').textContent = 'Editar Alimento';
        document.getElementById('gestorNombre').value = alimento.nombre || alimento.ALIMENTO || '';
        document.getElementById('gestorCategoria').value = alimento.categoria_principal || alimento['CATEGORÍA PRINCIPAL'] || '';
        document.getElementById('gestorSubcategoria').value = alimento.subcategoria || alimento.CLASIFICACIÓN || '';
        document.getElementById('gestorPresentacion').value = alimento.presentacion || alimento.UNIDAD || '';
        document.getElementById('gestorPeso').value = alimento.peso || alimento['PESO POR UNIDAD'] || '';
        document.getElementById('gestorMarca').value = alimento.marca || alimento['MARCA REGISTRADA'] || '';
        document.getElementById('gestorProducto').value = alimento.producto || alimento['NOMBRE DEL PRODUCTO'] || '';
        document.getElementById('gestorNotas').value = alimento.notas || alimento['OTRAS NOTAS'] || '';
        document.getElementById('gestorProteínas').value = alimento.proteínas || alimento.PROTEÍNAS || 0;
        document.getElementById('gestorHidratos').value = alimento.hidratos || alimento.HIDRATOS || 0;
        document.getElementById('gestorGrasas').value = alimento.grasas || alimento.GRASAS || 0;
        document.getElementById('gestorGrasasSaturadas').value = alimento.grasas_saturadas || alimento.GRASAS_SATURADAS || '';
        document.getElementById('gestorAzucar').value = alimento.azucares || alimento.azucar || alimento.AZÚCARES || '';
        
        this.actualizarCalorias();
        this.indiceEdicion = indiceOriginal;
        
        document.getElementById('gestorModalAlimento').style.display = 'block';
    }

    normalizarAlimento(alimento) {
        // Normalizar valores numéricos
        const normalizarValor = (valor) => {
            if (typeof valor === 'number') return valor;
            if (typeof valor === 'string' && valor.trim() === '') return 0;
            if (valor === 'Irrelevante' || valor === null || valor === undefined) return 0;
            const parsed = parseFloat(valor);
            return isNaN(parsed) ? 0 : parsed;
        };
        
        // Calcular calorías si no se proporcionan
        const calcularCalorias = (prot, hid, grasa) => {
            return Math.round((prot * 4) + (hid * 4) + (grasa * 9));
        };
        
        const proteinas = normalizarValor(alimento.proteínas || alimento.PROTEÍNAS);
        const hidratos = normalizarValor(alimento.hidratos || alimento.HIDRATOS || alimento.carbohidratos);
        const grasas = normalizarValor(alimento.grasas || alimento.GRASAS);
        const calorias = normalizarValor(alimento.calorias || alimento.CALORÍAS) || calcularCalorias(proteinas, hidratos, grasas);
        
        return {
            ALIMENTO: alimento.nombre || alimento.ALIMENTO,
            MACRONUTRIENTE_PRINCIPAL: alimento.categoria_principal || alimento.MACRONUTRIENTE_PRINCIPAL || alimento['MACRONUTRIENTE PRINCIPAL'],
            CLASIFICACIÓN: alimento.subcategoria || alimento.CLASIFICACIÓN,
            UNIDAD: alimento.presentacion || alimento.UNIDAD || '',
            PESO_POR_UNIDAD: alimento.peso || alimento.PESO_POR_UNIDAD || alimento['PESO POR UNIDAD'] || '',
            MARCA_REGISTRADA: alimento.marca || alimento.MARCA_REGISTRADA || alimento['MARCA REGISTRADA'] || '',
            NOMBRE_DEL_PRODUCTO: alimento.producto || alimento.NOMBRE_DEL_PRODUCTO || alimento['NOMBRE DEL PRODUCTO'] || '',
            OTRAS_NOTAS: alimento.notas || alimento.descripcion || alimento.OTRAS_NOTAS || alimento['OTRAS NOTAS'] || '',
            CALORÍAS: calorias,
            PROTEÍNAS: proteinas,
            GRASAS: grasas,
            GRASAS_SATURADAS: normalizarValor(alimento.grasas_saturadas || alimento.GRASAS_SATURADAS || alimento['GRASAS SATURADAS']),
            HIDRATOS: hidratos,
            AZÚCARES: normalizarValor(alimento.azucares || alimento.azucar || alimento.AZÚCARES)
        };
    }

    normalizarAlimentoParaMostrar(alimento) {
        // Si ya está en formato estándar, devolverlo tal cual
        if (alimento.ALIMENTO && alimento.PROTEÍNAS !== undefined) {
            return alimento;
        }
        // Si no, normalizarlo
        return this.normalizarAlimento(alimento);
    }

    recargarAlimentosDB() {
        if (window.alimentosDB && window.baseDatosAlimentos) {
            window.alimentosDB.recargar(window.baseDatosAlimentos);
            console.log('✅ Base de datos de alimentos recargada en alimentosDB');
        }
    }

    async guardarAlimento(event) {
        event.preventDefault();
        
        const nuevoAlimento = {
            nombre: document.getElementById('gestorNombre').value,
            categoria_principal: document.getElementById('gestorCategoria').value,
            subcategoria: document.getElementById('gestorSubcategoria').value,
            presentacion: document.getElementById('gestorPresentacion').value || undefined,
            peso: document.getElementById('gestorPeso').value || undefined,
            marca: document.getElementById('gestorMarca').value || undefined,
            producto: document.getElementById('gestorProducto').value || undefined,
            notas: document.getElementById('gestorNotas').value || undefined,
            proteínas: parseFloat(document.getElementById('gestorProteínas').value),
            hidratos: parseFloat(document.getElementById('gestorHidratos').value),
            grasas: parseFloat(document.getElementById('gestorGrasas').value),
            grasas_saturadas: document.getElementById('gestorGrasasSaturadas').value ? parseFloat(document.getElementById('gestorGrasasSaturadas').value) : undefined,
            azucares: document.getElementById('gestorAzucar').value ? parseFloat(document.getElementById('gestorAzucar').value) : undefined
        };
        
        // Normalizar el alimento usando la función crearAlimento de base-datos-alimentos.js
        const alimentoNormalizado = this.normalizarAlimento(nuevoAlimento);
        
        if (this.indiceEdicion >= 0) {
            this.baseDatosCompleta[this.indiceEdicion] = alimentoNormalizado;
            window.mostrarNotificacion?.('✅ Alimento actualizado correctamente', 'success');
        } else {
            this.baseDatosCompleta.push(alimentoNormalizado);
            window.mostrarNotificacion?.('✅ Alimento agregado correctamente', 'success');
        }
        
        // Actualizar base de datos global y guardar en localStorage
        window.baseDatosAlimentos = this.baseDatosCompleta;
        this.guardarEnLocalStorage();
        
        // Recargar la base de datos de alimentosDB para que los nuevos alimentos estén disponibles
        this.recargarAlimentosDB();
        
        document.getElementById('gestorModalAlimento').style.display = 'none';
        this.mostrarInterfaz();
        
        // Guardar en Firestore de forma asíncrona (sin bloquear la UI)
        try {
            console.log('💾 Iniciando guardado en Firestore...');
            const guardadoExitoso = await this.guardarEnFirestore();
            if (guardadoExitoso) {
                console.log('✅ Datos guardados en Firestore correctamente');
                window.mostrarNotificacion?.('✅ Alimento guardado en Firebase correctamente', 'success');
            } else {
                console.warn('⚠️ No se pudo guardar en Firestore');
                window.mostrarNotificacion?.('⚠️ No se pudo guardar en Firebase. Los datos se guardaron localmente.', 'warning');
            }
        } catch (error) {
            console.error('❌ Error al guardar en Firestore:', error);
            window.mostrarNotificacion?.('⚠️ Error al guardar en Firebase. Los datos se guardaron localmente.', 'warning');
        }
        
        // Notificar al servicio de alimentos para que actualice su cache
        if (window.alimentoService) {
            try {
                console.log('💾 Actualizando AlimentoService...');
                const guardadoService = await window.alimentoService.guardarEnFirestore(this.baseDatosCompleta);
                if (guardadoService) {
                    console.log('✅ Datos actualizados en AlimentoService correctamente');
                } else {
                    console.warn('⚠️ No se pudo actualizar AlimentoService');
                }
            } catch (error) {
                console.error('❌ Error al actualizar AlimentoService:', error);
            }
        } else {
            console.warn('⚠️ AlimentoService no está disponible');
        }
    }

    async eliminarAlimento(index) {
        if (!confirm('¿Estás seguro de eliminar este alimento?')) return;
        
        const alimento = this.baseDatosFiltrada[index];
        const indiceOriginal = this.baseDatosCompleta.indexOf(alimento);
        
        this.baseDatosCompleta.splice(indiceOriginal, 1);
        window.baseDatosAlimentos = this.baseDatosCompleta;
        this.guardarEnLocalStorage();
        this.recargarAlimentosDB();
        window.mostrarNotificacion?.('✅ Alimento eliminado correctamente', 'success');
        this.mostrarInterfaz();
        
        // Guardar en Firestore de forma asíncrona (sin bloquear la UI)
        try {
            const guardadoExitoso = await this.guardarEnFirestore();
            if (guardadoExitoso) {
                console.log('✅ Alimento eliminado de Firestore correctamente');
            } else {
                console.warn('⚠️ No se pudo eliminar de Firestore (puede ser que el usuario no esté autenticado)');
            }
        } catch (error) {
            console.error('❌ Error al eliminar de Firestore:', error);
            window.mostrarNotificacion?.('⚠️ Error al eliminar de Firestore. Los datos se eliminaron localmente.', 'warning');
        }
        
        // Notificar al servicio de alimentos para que actualice su cache
        if (window.alimentoService) {
            try {
                const guardadoService = await window.alimentoService.guardarEnFirestore(this.baseDatosCompleta);
                if (guardadoService) {
                    console.log('✅ Datos actualizados en AlimentoService después de eliminar');
                } else {
                    console.warn('⚠️ No se pudo actualizar AlimentoService después de eliminar');
                }
            } catch (error) {
                console.error('❌ Error al actualizar AlimentoService después de eliminar:', error);
            }
        } else {
            console.warn('⚠️ AlimentoService no está disponible');
        }
    }

    exportarBaseDatos() {
        const dataStr = JSON.stringify(this.baseDatosCompleta, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'base-datos-alimentos-export.json';
        link.click();
        URL.revokeObjectURL(url);
        window.mostrarNotificacion?.('✅ Base de datos exportada correctamente', 'success');
    }

    importarBaseDatos() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (Array.isArray(data)) {
                        this.baseDatosCompleta = data;
                        window.baseDatosAlimentos = data;
                        this.guardarEnLocalStorage();
                        this.mostrarInterfaz();
                        window.mostrarNotificacion?.('✅ Base de datos importada correctamente', 'success');
                    } else {
                        window.mostrarNotificacion?.('❌ El archivo no es válido', 'error');
                    }
                } catch (error) {
                    window.mostrarNotificacion?.('❌ Error al leer el archivo', 'error');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    resetearBaseDatos() {
        if (!confirm('¿Estás seguro de resetear la base de datos? Se perderán todas las modificaciones guardadas en localStorage.')) return;
        
        try {
            localStorage.removeItem('baseDatosAlimentosPersonalizada');
            window.location.reload();
        } catch (error) {
            console.error('Error al resetear base de datos:', error);
            window.mostrarNotificacion?.('❌ Error al resetear la base de datos', 'error');
        }
    }
}

// Exportar la clase globalmente INMEDIATAMENTE después de definirla
// Esto asegura que la clase esté disponible incluso si hay errores en la inicialización
(function() {
    'use strict';
    try {
        // Exportar la clase a window
        if (typeof window !== 'undefined') {
            window.GestorAlimentosManager = GestorAlimentosManager;
            console.log('✅ Clase GestorAlimentosManager exportada globalmente');
        }
        
        // Inicializar la instancia global
        if (typeof window !== 'undefined' && !window.gestorAlimentosManager) {
            try {
                window.gestorAlimentosManager = new GestorAlimentosManager();
                console.log('✅ GestorAlimentosManager inicializado');
            } catch (initError) {
                console.error('❌ Error al inicializar GestorAlimentosManager:', initError);
                console.error('Stack trace:', initError.stack);
            }
        }
    } catch (error) {
        console.error('❌ Error al exportar GestorAlimentosManager:', error);
        console.error('Stack trace:', error.stack);
        // Intentar exportar la clase de todas formas
        if (typeof window !== 'undefined' && typeof GestorAlimentosManager !== 'undefined') {
            try {
                window.GestorAlimentosManager = GestorAlimentosManager;
                console.log('✅ Clase GestorAlimentosManager exportada después del error');
            } catch (e) {
                console.error('❌ Error crítico: No se pudo exportar GestorAlimentosManager:', e);
            }
        }
    }
})();

