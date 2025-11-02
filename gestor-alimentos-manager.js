// Gestor de Base de Datos de Alimentos integrado en la app
class GestorAlimentosManager {
    constructor() {
        this.baseDatosCompleta = [];
        this.baseDatosFiltrada = [];
        this.indiceEdicion = -1;
        this.init();
    }

    async init() {
        // Intentar cargar desde Firestore primero
        await this.cargarDesdeFirestore();
        
        // Si no hay datos en Firestore, cargar desde localStorage o base-datos-alimentos.js
        if (!this.baseDatosCompleta || this.baseDatosCompleta.length === 0) {
            const datosGuardados = localStorage.getItem('baseDatosAlimentosPersonalizada');
            if (datosGuardados) {
                try {
                    const datosPersonalizados = JSON.parse(datosGuardados);
                    // Solo usar localStorage si baseDatosAlimentos no está definida
                    if (!window.baseDatosAlimentos) {
                        window.baseDatosAlimentos = datosPersonalizados;
                        console.log('📦 Base de datos personalizada cargada desde localStorage');
                    } else {
                        console.log('📦 Base de datos cargada desde base-datos-alimentos.js (localStorage ignorado para preservar campos nuevos)');
                    }
                } catch (e) {
                    console.error('Error al cargar base de datos desde localStorage:', e);
                }
            }
            
            if (window.baseDatosAlimentos) {
                this.cargarBaseDatos();
                // Guardar la base inicial en Firestore para sincronizar
                await this.guardarEnFirestore();
            }
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
            const user = window.authManager?.getCurrentUser();
            if (!user) {
                console.log('📦 Usuario no autenticado, saltando carga desde Firestore');
                return;
            }

            const db = window.dietaService?.db || firebase.firestore();
            const docRef = db.collection('alimentos').doc('base-datos');
            const doc = await docRef.get();

            if (doc.exists) {
                const data = doc.data();
                if (data.alimentos && Array.isArray(data.alimentos)) {
                    this.baseDatosCompleta = data.alimentos;
                    this.baseDatosFiltrada = this.baseDatosCompleta;
                    window.baseDatosAlimentos = this.baseDatosCompleta;
                    this.cargarBaseDatos();
                    console.log('📦 Base de datos cargada desde Firestore');
                }
            }
        } catch (e) {
            console.error('Error al cargar desde Firestore:', e);
        }
    }

    async guardarEnFirestore() {
        try {
            const user = window.authManager?.getCurrentUser();
            if (!user) {
                console.log('💾 Usuario no autenticado, saltando guardado en Firestore');
                return;
            }

            // Limpiar datos: eliminar campos undefined
            const baseDatosLimpia = this.baseDatosCompleta.map(alimento => {
                const limpio = {};
                for (const key in alimento) {
                    if (alimento[key] !== undefined) {
                        limpio[key] = alimento[key];
                    }
                }
                return limpio;
            });

            const db = window.dietaService?.db || firebase.firestore();
            await db.collection('alimentos').doc('base-datos').set({
                alimentos: baseDatosLimpia,
                fechaActualizacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log('💾 Base de datos guardada en Firestore');
        } catch (e) {
            console.error('Error al guardar en Firestore:', e);
        }
    }

    mostrarInterfaz() {
        const contenido = document.getElementById('gestorAlimentosContent');
        if (!contenido) return;

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
            const parsed = parseFloat(valor);
            return isNaN(parsed) ? 0 : parsed;
        };
        
        // Calcular calorías si no se proporcionan
        const calcularCalorias = (prot, hid, grasa) => {
            return Math.round((prot * 4) + (hid * 4) + (grasa * 9));
        };
        
        const proteinas = normalizarValor(alimento.proteínas);
        const hidratos = normalizarValor(alimento.hidratos);
        const grasas = normalizarValor(alimento.grasas);
        const calorias = calcularCalorias(proteinas, hidratos, grasas);
        
        return {
            ALIMENTO: alimento.nombre || alimento.ALIMENTO,
            MACRONUTRIENTE_PRINCIPAL: alimento.categoria_principal || alimento.MACRONUTRIENTE_PRINCIPAL,
            CLASIFICACIÓN: alimento.subcategoria || alimento.CLASIFICACIÓN,
            UNIDAD: alimento.presentacion || alimento.UNIDAD || '',
            PESO_POR_UNIDAD: alimento.peso || alimento.PESO_POR_UNIDAD || '',
            MARCA_REGISTRADA: alimento.marca || alimento.MARCA_REGISTRADA || '',
            NOMBRE_DEL_PRODUCTO: alimento.producto || alimento.NOMBRE_DEL_PRODUCTO || '',
            OTRAS_NOTAS: alimento.notas || alimento.OTRAS_NOTAS || '',
            CALORÍAS: calorias,
            PROTEÍNAS: proteinas,
            GRASAS: grasas,
            GRASAS_SATURADAS: normalizarValor(alimento.grasas_saturadas),
            HIDRATOS: hidratos,
            AZÚCARES: normalizarValor(alimento.azucares)
        };
    }

    recargarAlimentosDB() {
        if (window.alimentosDB && window.baseDatosAlimentos) {
            window.alimentosDB.recargar(window.baseDatosAlimentos);
            console.log('✅ Base de datos de alimentos recargada en alimentosDB');
        }
    }

    guardarAlimento(event) {
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
        this.guardarEnFirestore();
    }

    eliminarAlimento(index) {
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
        this.guardarEnFirestore();
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

// Instancia global
window.gestorAlimentosManager = new GestorAlimentosManager();

