// Gestor de interfaz para clientes
class ClienteManager {
    constructor() {
        this.clienteActual = null;
        this.init();
    }

    init() {
        console.log('Inicializando ClienteManager...');
        this.crearInterfazClientes();
        this.setupEventListeners();
        console.log('ClienteManager inicializado');
    }

    crearInterfazClientes() {
        // Verificar si ya existe para no duplicar
        if (document.getElementById('clientesSection')) {
            console.log('La sección de clientes ya existe');
            return;
        }

        const mainContainer = document.querySelector('.container');
        if (!mainContainer) {
            console.error('No se encontró el contenedor principal');
            return;
        }

        // Crear sección de clientes
        const clienteSection = document.createElement('div');
        clienteSection.id = 'clientesSection';
        clienteSection.className = 'clientes-section oculto';
        clienteSection.innerHTML = `
            <div class="clientes-header">
                <h2>👥 Gestión de Clientes</h2>
                <div class="clientes-controls">
                    <input type="text" id="buscarCliente" placeholder="🔍 Buscar por nombre, email, teléfono o DNI..." class="buscar-input">
                    <button id="btnNuevoCliente" class="btn-nuevo-cliente">➕ Nuevo Cliente</button>
                </div>
            </div>
            <div id="clientesList" class="clientes-list"></div>
        `;
        
        // Insertar después del título principal
        const titulo = mainContainer.querySelector('h1');
        if (titulo) {
            titulo.insertAdjacentElement('afterend', clienteSection);
        } else {
            mainContainer.insertBefore(clienteSection, mainContainer.firstChild);
        }

        // Crear modales (si no existen)
        if (!document.getElementById('clienteModal')) {
            const clienteModal = document.createElement('div');
            clienteModal.id = 'clienteModal';
            clienteModal.className = 'modal';
            clienteModal.innerHTML = `
                <div class="modal-content modal-large">
                    <span class="close-modal">&times;</span>
                    <div id="clienteModalContent"></div>
                </div>
            `;
            document.body.appendChild(clienteModal);
        }

        if (!document.getElementById('dietaEditableModal')) {
            const dietaModal = document.createElement('div');
            dietaModal.id = 'dietaEditableModal';
            dietaModal.className = 'modal';
            dietaModal.innerHTML = `
                <div class="modal-content modal-extra-large">
                    <span class="close-modal">&times;</span>
                    <h2>📝 Dieta Personalizada - Editable</h2>
                    <div id="dietaEditableContent"></div>
                    <div class="dieta-actions">
                        <button id="btnGuardarDietaEditada" class="btn-guardar">💾 Guardar Dieta</button>
                        <button id="btnGenerarPDFEditado" class="btn-download">📥 Generar PDF</button>
                    </div>
                </div>
            `;
            document.body.appendChild(dietaModal);
        }

        console.log('Interfaz de clientes creada correctamente');
    }

    setupEventListeners() {
        // Buscar cliente (usar delegación de eventos)
        setTimeout(() => {
            const buscarInput = document.getElementById('buscarCliente');
            if (buscarInput) {
                buscarInput.addEventListener('input', (e) => {
                    this.buscarClientes(e.target.value);
                });
            }
        }, 100);

        // Botón nuevo cliente (usar delegación de eventos)
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'btnNuevoCliente') {
                this.mostrarFormularioNuevoCliente();
            }
            if (e.target && e.target.classList.contains('btn-flotante')) {
                this.mostrarFormularioNuevoCliente();
            }
        });

        // Cerrar modales
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-modal')) {
                const modal = e.target.closest('.modal');
                if (modal) modal.style.display = 'none';
            }
        });

        // Botón en menú principal para mostrar clientes
        this.agregarBotonMenu();
        
        // Event listener para cuando el usuario inicia sesión
        window.addEventListener('userLoggedIn', () => {
            setTimeout(() => {
                this.mostrarBotonFlotante();
            }, 200);
        });
        
        // Verificar si ya está logueado
        setTimeout(() => {
            if (window.authManager && window.authManager.isAuthenticated()) {
                this.mostrarBotonFlotante();
            }
        }, 500);
    }
    
    mostrarBotonFlotante() {
        const botonFlotante = document.getElementById('botonCrearClienteFlotante');
        if (botonFlotante) {
            botonFlotante.classList.remove('oculto');
        }
    }

    agregarBotonMenu() {
        const crearBoton = () => {
            if (document.getElementById('btnClientes')) return;
            
            const btn = document.createElement('button');
            btn.id = 'btnClientes';
            btn.className = 'btn-clientes';
            btn.textContent = '👥 Mis Clientes';
            btn.addEventListener('click', () => {
                this.mostrarSeccionClientes();
            });
            
            const userMenu = document.querySelector('.user-menu');
            if (userMenu) {
                userMenu.insertBefore(btn, userMenu.firstChild);
            }
        };
        
        // Intentar agregar inmediatamente
        crearBoton();
        
        // También agregar cuando se actualice el UI
        setTimeout(() => {
            const userMenu = document.querySelector('.user-menu');
            if (userMenu && !document.getElementById('btnClientes')) {
                const btn = document.createElement('button');
                btn.id = 'btnClientes';
                btn.className = 'btn-clientes';
                btn.textContent = '👥 Mis Clientes';
                btn.addEventListener('click', () => {
                    this.mostrarSeccionClientes();
                });
                userMenu.insertBefore(btn, userMenu.firstChild);
            }
        }, 500);
        
        // También agregar al evento de login
        window.addEventListener('userLoggedIn', () => {
            setTimeout(() => {
                const userMenu = document.querySelector('.user-menu');
                if (userMenu && !document.getElementById('btnClientes')) {
                    const btn = document.createElement('button');
                    btn.id = 'btnClientes';
                    btn.className = 'btn-clientes';
                    btn.textContent = '👥 Mis Clientes';
                    btn.addEventListener('click', () => {
                        this.mostrarSeccionClientes();
                    });
                    userMenu.insertBefore(btn, userMenu.firstChild);
                }
            }, 100);
        });
    }

    async mostrarSeccionClientes() {
        console.log('mostrarSeccionClientes llamado');
        const seccion = document.getElementById('clientesSection');
        const formContainer = document.querySelector('.form-container');
        const resultados = document.getElementById('resultados');
        
        console.log('Sección encontrada:', seccion);
        
        if (!seccion) {
            console.error('No se encontró la sección de clientes. Recreando...');
            this.crearInterfazClientes();
            // Intentar de nuevo
            await this.mostrarSeccionClientes();
            return;
        }
        
        seccion.classList.remove('oculto');
        if (formContainer) formContainer.style.display = 'none';
        if (resultados) resultados.classList.add('oculto');
        
        // Asegurar que el botón de buscar está disponible
        setTimeout(() => {
            const buscarInput = document.getElementById('buscarCliente');
            if (buscarInput) {
                buscarInput.addEventListener('input', (e) => {
                    this.buscarClientes(e.target.value);
                });
            }
            
            const btnNuevo = document.getElementById('btnNuevoCliente');
            if (btnNuevo) {
                btnNuevo.addEventListener('click', () => {
                    this.mostrarFormularioNuevoCliente();
                });
            }
        }, 100);
        
        try {
            await this.cargarClientes();
        } catch (error) {
            console.error('Error al cargar clientes:', error);
            const lista = document.getElementById('clientesList');
            if (lista) {
                lista.innerHTML = `<p class="error">Error al cargar clientes: ${error.message}</p>`;
            }
        }
        
        // Scroll a la sección
        setTimeout(() => {
            seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    }

    async cargarClientes() {
        const resultado = await window.clienteService.obtenerClientes();
        const lista = document.getElementById('clientesList');
        
        if (!resultado.success) {
            lista.innerHTML = `<p class="error">Error al cargar clientes: ${resultado.error}</p>`;
            return;
        }

        const clientes = resultado.clientes.filter(c => c.activo !== false);
        
        if (clientes.length === 0) {
            lista.innerHTML = '<p class="no-clientes">No tienes clientes registrados aún. Haz clic en "Nuevo Cliente" para agregar uno.</p>';
            return;
        }

        lista.innerHTML = clientes.map(cliente => {
            const fechaCreacion = cliente.fechaCreacion?.toDate ? 
                cliente.fechaCreacion.toDate().toLocaleDateString('es-ES') : 
                'Fecha no disponible';
            
            return `
                <div class="cliente-card" data-id="${cliente.id}">
                    <div class="cliente-info">
                        <h3>${cliente.nombre || 'Sin nombre'}</h3>
                        <p><strong>Email:</strong> ${cliente.email || 'No especificado'}</p>
                        <p><strong>Teléfono:</strong> ${cliente.telefono || 'No especificado'}</p>
                        <p><strong>DNI:</strong> ${cliente.dni || 'No especificado'}</p>
                        <p><strong>Fecha registro:</strong> ${fechaCreacion}</p>
                        <p><strong>Consultas:</strong> ${cliente.historialConsultas?.length || 0}</p>
                        <p><strong>Dietas:</strong> ${cliente.historialDietas?.length || 0}</p>
                    </div>
                    <div class="cliente-actions">
                        <button class="btn-ver-ficha" data-id="${cliente.id}" title="Ver información completa del cliente">📋 Ver Ficha</button>
                        <button class="btn-generar-dieta" data-id="${cliente.id}" title="Generar una nueva dieta para este cliente">✨ Nueva Dieta</button>
                        <button class="btn-eliminar-cliente" data-id="${cliente.id}" data-nombre="${cliente.nombre || 'Cliente'}" title="Eliminar cliente permanentemente">🗑️ Eliminar</button>
                    </div>
                </div>
            `;
        }).join('');

        // Event listeners
        lista.querySelectorAll('.btn-ver-ficha').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clienteId = e.target.getAttribute('data-id');
                this.mostrarFichaCliente(clienteId);
            });
        });

        lista.querySelectorAll('.btn-generar-dieta').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clienteId = e.target.getAttribute('data-id');
                this.generarDietaParaCliente(clienteId);
            });
        });

        // Event listeners para botones de eliminar
        lista.querySelectorAll('.btn-eliminar-cliente').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clienteId = e.target.getAttribute('data-id');
                const clienteNombre = e.target.getAttribute('data-nombre');
                this.eliminarCliente(clienteId, clienteNombre);
            });
        });
    }

    async buscarClientes(termino) {
        if (!termino || termino.length < 2) {
            await this.cargarClientes();
            return;
        }

        const resultado = await window.clienteService.buscarCliente(termino);
        const lista = document.getElementById('clientesList');
        
        if (!resultado.success) {
            lista.innerHTML = `<p class="error">Error en búsqueda: ${resultado.error}</p>`;
            return;
        }

        const clientes = resultado.clientes.filter(c => c.activo !== false);
        
        if (clientes.length === 0) {
            lista.innerHTML = '<p class="no-clientes">No se encontraron clientes con ese criterio.</p>';
            return;
        }

        lista.innerHTML = clientes.map(cliente => {
            const fechaCreacion = cliente.fechaCreacion?.toDate ? 
                cliente.fechaCreacion.toDate().toLocaleDateString('es-ES') : 
                'Fecha no disponible';
            
            return `
                <div class="cliente-card" data-id="${cliente.id}">
                    <div class="cliente-info">
                        <h3>${cliente.nombre || 'Sin nombre'}</h3>
                        <p><strong>Email:</strong> ${cliente.email || 'No especificado'}</p>
                        <p><strong>Teléfono:</strong> ${cliente.telefono || 'No especificado'}</p>
                        <p><strong>DNI:</strong> ${cliente.dni || 'No especificado'}</p>
                        <p><strong>Fecha registro:</strong> ${fechaCreacion}</p>
                    </div>
                    <div class="cliente-actions">
                        <button class="btn-ver-ficha" data-id="${cliente.id}" title="Ver información completa del cliente">📋 Ver Ficha</button>
                        <button class="btn-generar-dieta" data-id="${cliente.id}" title="Generar una nueva dieta para este cliente">✨ Nueva Dieta</button>
                        <button class="btn-eliminar-cliente" data-id="${cliente.id}" data-nombre="${cliente.nombre || 'Cliente'}" title="Eliminar cliente permanentemente">🗑️ Eliminar</button>
                    </div>
                </div>
            `;
        }).join('');

        // Agregar event listeners
        lista.querySelectorAll('.btn-ver-ficha').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clienteId = e.target.getAttribute('data-id');
                this.mostrarFichaCliente(clienteId);
            });
        });

        lista.querySelectorAll('.btn-generar-dieta').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clienteId = e.target.getAttribute('data-id');
                this.generarDietaParaCliente(clienteId);
            });
        });

        // Event listeners para botones de eliminar en búsqueda
        lista.querySelectorAll('.btn-eliminar-cliente').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clienteId = e.target.getAttribute('data-id');
                const clienteNombre = e.target.getAttribute('data-nombre');
                this.eliminarCliente(clienteId, clienteNombre);
            });
        });
    }

    async mostrarFichaCliente(clienteId) {
        const resultado = await window.clienteService.obtenerClientePorId(clienteId);
        
        if (!resultado.success) {
            alert('Error al cargar cliente: ' + resultado.error);
            return;
        }

        const cliente = resultado.cliente;
        this.clienteActual = cliente;

        const modal = document.getElementById('clienteModal');
        const content = document.getElementById('clienteModalContent');

        const fechaCreacion = cliente.fechaCreacion?.toDate ? 
            cliente.fechaCreacion.toDate().toLocaleDateString('es-ES') : 
            'Fecha no disponible';

        content.innerHTML = `
            <div class="ficha-cliente">
                <h2>📋 Ficha del Cliente</h2>
                
                <div class="ficha-seccion">
                    <h3>Datos Personales</h3>
                    <div class="ficha-datos">
                        <p><strong>Nombre:</strong> ${cliente.nombre || 'No especificado'}</p>
                        <p><strong>Email:</strong> ${cliente.email || 'No especificado'}</p>
                        <p><strong>Teléfono:</strong> ${cliente.telefono || 'No especificado'}</p>
                        <p><strong>DNI:</strong> ${cliente.dni || 'No especificado'}</p>
                        <p><strong>Fecha de nacimiento:</strong> ${cliente.fechaNacimiento || 'No especificado'}</p>
                        <p><strong>Sexo:</strong> ${cliente.sexo || 'No especificado'}</p>
                        <p><strong>Tipo de persona:</strong> ${cliente.tipoPersona || 'No especificado'}</p>
                        <p><strong>Dirección:</strong> ${cliente.direccion || 'No especificado'}</p>
                        <p><strong>Fecha registro:</strong> ${fechaCreacion}</p>
                    </div>
                </div>

                <div class="ficha-seccion">
                    <h3>Datos de Salud</h3>
                    <div class="ficha-datos">
                        <p><strong>Altura:</strong> ${cliente.altura || 'No especificado'} cm</p>
                        <p><strong>Peso inicial:</strong> ${cliente.pesoInicial || 'No especificado'} kg</p>
                        <p><strong>Peso actual:</strong> ${cliente.pesoActual || 'No especificado'} kg</p>
                        <p><strong>IMC:</strong> ${cliente.imc || 'No calculado'}</p>
                        <p><strong>Alergias:</strong> ${cliente.alergias || 'Ninguna'}</p>
                        <p><strong>Patologías:</strong> ${cliente.patologias || 'Ninguna'}</p>
                        <p><strong>Medicación:</strong> ${cliente.medicacion || 'Ninguna'}</p>
                        <p><strong>Objetivo:</strong> ${cliente.objetivo || 'No especificado'}</p>
                    </div>
                </div>

                <div class="ficha-seccion">
                    <h3>📊 Progreso</h3>
                    <div id="progresoContent">
                        ${this.generarHTMLProgreso(cliente.progreso || {})}
                    </div>
                    <button class="btn-agregar-progreso" onclick="clienteManager.agregarProgreso('${clienteId}')">➕ Agregar Registro</button>
                </div>

                <div class="ficha-seccion">
                    <h3>📅 Historial de Consultas</h3>
                    <div id="consultasContent">
                        ${this.generarHTMLConsultas(cliente.historialConsultas || [])}
                    </div>
                    <button class="btn-agregar-consulta" onclick="clienteManager.agregarConsulta('${clienteId}')">➕ Nueva Consulta</button>
                </div>

                <div class="ficha-seccion">
                    <h3>🍽️ Historial de Dietas</h3>
                    <div id="dietasContent">
                        ${this.generarHTMLDietas(cliente.historialDietas || [])}
                    </div>
                </div>

                <div class="ficha-actions">
                    <button class="btn-editar-cliente" onclick="clienteManager.editarCliente('${clienteId}')">✏️ Editar Cliente</button>
                    <button class="btn-generar-dieta" onclick="clienteManager.generarDietaParaCliente('${clienteId}')">✨ Nueva Dieta</button>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    generarHTMLProgreso(progreso) {
        // Implementar visualización de progreso
        return '<p>No hay registros de progreso aún.</p>';
    }

    generarHTMLConsultas(consultas) {
        if (!consultas || consultas.length === 0) {
            return '<p>No hay consultas registradas.</p>';
        }

        return consultas.map(consulta => {
            const fecha = consulta.fecha?.toDate ? 
                consulta.fecha.toDate().toLocaleDateString('es-ES') : 
                'Fecha no disponible';
            return `
                <div class="consulta-item">
                    <p><strong>Fecha:</strong> ${fecha}</p>
                    <p><strong>Notas:</strong> ${consulta.notas || 'Sin notas'}</p>
                </div>
            `;
        }).join('');
    }

    generarHTMLDietas(dietas) {
        if (!dietas || dietas.length === 0) {
            return '<p>No hay dietas registradas.</p>';
        }

        return dietas.map(dieta => {
            const fecha = dieta.fecha?.toDate ? 
                dieta.fecha.toDate().toLocaleDateString('es-ES') : 
                'Fecha no disponible';
            return `
                <div class="dieta-item">
                    <p><strong>Fecha:</strong> ${fecha}</p>
                    <p><strong>Objetivo:</strong> ${dieta.objetivo || 'No especificado'}</p>
                    <p><strong>Calorías:</strong> ${dieta.calorias || 'N/A'} kcal</p>
                    <button class="btn-ver-dieta" onclick="clienteManager.verDietaDetalle('${dieta.id}')">Ver Detalle</button>
                </div>
            `;
        }).join('');
    }

    mostrarFormularioNuevoCliente() {
        const modal = document.getElementById('clienteModal');
        const content = document.getElementById('clienteModalContent');

        content.innerHTML = `
            <h2>➕ Nuevo Cliente</h2>
            <form id="formNuevoCliente" class="form-cliente">
                <h3>Datos Personales</h3>
                <div class="form-group">
                    <label>Nombre completo *</label>
                    <input type="text" id="clienteNombre" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="clienteEmail">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" id="clienteTelefono">
                </div>
                <div class="form-group">
                    <label>DNI</label>
                    <input type="text" id="clienteDNI">
                </div>
                <div class="form-group">
                    <label>Fecha de nacimiento</label>
                    <input type="date" id="clienteFechaNacimiento">
                </div>
                <div class="form-group">
                    <label>Sexo</label>
                    <select id="clienteSexo">
                        <option value="">Seleccionar...</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Tipo de persona (nivel de actividad)</label>
                    <select id="clienteTipoPersona">
                        <option value="">Seleccionar...</option>
                        <option value="sedentaria">Sedentaria</option>
                        <option value="activa">Activa</option>
                        <option value="muy-activa">Muy activa</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <textarea id="clienteDireccion" rows="2"></textarea>
                </div>

                <h3>Datos de Salud</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label>Altura (cm)</label>
                        <input type="number" id="clienteAltura" min="140" max="220">
                    </div>
                    <div class="form-group">
                        <label>Peso inicial (kg)</label>
                        <input type="number" id="clientePesoInicial" step="0.1" min="40" max="200">
                    </div>
                </div>
                <div class="form-group">
                    <label>Alergias</label>
                    <textarea id="clienteAlergias" rows="2" placeholder="Ej: Lactosa, frutos secos..."></textarea>
                </div>
                <div class="form-group">
                    <label>Patologías</label>
                    <textarea id="clientePatologias" rows="2" placeholder="Ej: Diabetes, hipertensión..."></textarea>
                </div>
                <div class="form-group">
                    <label>Medicación</label>
                    <textarea id="clienteMedicacion" rows="2"></textarea>
                </div>
                <div class="form-group">
                    <label>Objetivo</label>
                    <select id="clienteObjetivo">
                        <option value="">Seleccionar...</option>
                        <option value="aumentar">Aumentar masa muscular</option>
                        <option value="adelgazar">Perder peso</option>
                        <option value="mantener">Mantener peso</option>
                    </select>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn-guardar">💾 Guardar Cliente</button>
                    <button type="button" class="btn-cancelar" onclick="document.getElementById('clienteModal').style.display='none'">Cancelar</button>
                </div>
            </form>
        `;

        modal.style.display = 'block';

        document.getElementById('formNuevoCliente').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.guardarNuevoCliente();
        });
    }

    async guardarNuevoCliente() {
        const datosCliente = {
            nombre: document.getElementById('clienteNombre').value,
            email: document.getElementById('clienteEmail').value,
            telefono: document.getElementById('clienteTelefono').value,
            dni: document.getElementById('clienteDNI').value,
            fechaNacimiento: document.getElementById('clienteFechaNacimiento').value,
            sexo: document.getElementById('clienteSexo').value,
            tipoPersona: document.getElementById('clienteTipoPersona').value,
            direccion: document.getElementById('clienteDireccion').value,
            altura: parseInt(document.getElementById('clienteAltura').value) || null,
            pesoInicial: parseFloat(document.getElementById('clientePesoInicial').value) || null,
            pesoActual: parseFloat(document.getElementById('clientePesoInicial').value) || null,
            alergias: document.getElementById('clienteAlergias').value,
            patologias: document.getElementById('clientePatologias').value,
            medicacion: document.getElementById('clienteMedicacion').value,
            objetivo: document.getElementById('clienteObjetivo').value
        };

        if (datosCliente.altura && datosCliente.pesoInicial) {
            datosCliente.imc = (datosCliente.pesoInicial / Math.pow(datosCliente.altura / 100, 2)).toFixed(1);
        }

        const resultado = await window.clienteService.crearCliente(datosCliente);

        if (resultado.success) {
            alert('✅ Cliente creado correctamente');
            document.getElementById('clienteModal').style.display = 'none';
            await this.cargarClientes();
        } else {
            alert('❌ Error al crear cliente: ' + resultado.error);
        }
    }

    async generarDietaParaCliente(clienteId) {
        const resultado = await window.clienteService.obtenerClientePorId(clienteId);
        
        if (!resultado.success) {
            alert('Error al cargar cliente: ' + resultado.error);
            return;
        }

        const cliente = resultado.cliente;
        
        // Cargar datos del cliente en el formulario
        document.getElementById('nombre').value = cliente.nombre || '';
        document.getElementById('fechaRegistro').value = new Date().toISOString().split('T')[0];
        // Mapear valores de sexo a las opciones del formulario (Hombre/Mujer)
        const mapSexo = (sx) => {
            if (!sx) return '';
            const s = String(sx).toLowerCase();
            if (s === 'masculino' || s === 'hombre') return 'Hombre';
            if (s === 'femenino' || s === 'mujer') return 'Mujer';
            return '';
        };
        document.getElementById('sexo').value = mapSexo(cliente.sexo);
        document.getElementById('edad').value = cliente.fechaNacimiento ? 
            Math.floor((new Date() - new Date(cliente.fechaNacimiento)) / (365.25 * 24 * 60 * 60 * 1000)) : '';
        document.getElementById('altura').value = cliente.altura || '';
        document.getElementById('peso').value = cliente.pesoActual || cliente.pesoInicial || '';
        // Establecer nivel de actividad en el selector tipoPersona
        const tipoActividad = (cliente.tipoPersona || '').toLowerCase();
        const tp = ['sedentaria','activa','muy-activa'].includes(tipoActividad) ? tipoActividad : '';
        document.getElementById('tipoPersona').value = tp;
        document.getElementById('objetivo').value = cliente.objetivo || '';
        document.getElementById('prohibiciones').value = cliente.alergias || '';

        // Guardar referencia al cliente
        window.clienteActualDieta = cliente;
        window.clienteIdDieta = clienteId;

        // Mostrar formulario de dieta
        document.querySelector('.form-container').style.display = 'block';
        document.getElementById('clientesSection')?.classList.add('oculto');
        
        // Scroll al formulario
        document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
    }

    async verDietaDetalle(dietaId) {
        // Implementar visualización de dieta detallada
        alert('Función de visualización de dieta en desarrollo');
    }

    agregarProgreso(clienteId) {
        alert('Función de agregar progreso en desarrollo');
    }

    agregarConsulta(clienteId) {
        alert('Función de agregar consulta en desarrollo');
    }

    async editarCliente(clienteId) {
        // Obtener datos actuales del cliente
        const resultado = await window.clienteService.obtenerClientePorId(clienteId);
        
        if (!resultado.success) {
            window.mostrarNotificacion('❌ Error al cargar cliente: ' + resultado.error, 'error');
            return;
        }

        const cliente = resultado.cliente;

        // Crear modal de edición
        const modal = document.createElement('div');
        modal.id = 'modalEditarCliente';
        modal.className = 'modal';
        modal.style.display = 'block';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 700px;">
                <div class="modal-header">
                    <h2>✏️ Editar Cliente: ${cliente.nombre || 'Sin nombre'}</h2>
                    <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
                </div>
                <form id="formEditarCliente" class="form-editar-cliente">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="editNombre">Nombre Completo *</label>
                            <input type="text" id="editNombre" name="nombre" value="${cliente.nombre || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="editEmail">Email *</label>
                            <input type="email" id="editEmail" name="email" value="${cliente.email || ''}" required>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="editTelefono">Teléfono</label>
                            <input type="tel" id="editTelefono" name="telefono" value="${cliente.telefono || ''}">
                        </div>
                        <div class="form-group">
                            <label for="editDNI">DNI</label>
                            <input type="text" id="editDNI" name="dni" value="${cliente.dni || ''}">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="editFechaNacimiento">Fecha de Nacimiento</label>
                            <input type="date" id="editFechaNacimiento" name="fechaNacimiento" value="${cliente.fechaNacimiento || ''}">
                        </div>
                        <div class="form-group">
                            <label for="editSexo">Sexo</label>
                            <select id="editSexo" name="sexo">
                                <option value="">Seleccionar</option>
                                <option value="masculino" ${cliente.sexo === 'masculino' ? 'selected' : ''}>Masculino</option>
                                <option value="femenino" ${cliente.sexo === 'femenino' ? 'selected' : ''}>Femenino</option>
                                <option value="otro" ${cliente.sexo === 'otro' ? 'selected' : ''}>Otro</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editTipoPersona">Tipo de Persona (actividad)</label>
                            <select id="editTipoPersona" name="tipoPersona">
                                <option value="">Seleccionar</option>
                                <option value="sedentaria" ${cliente.tipoPersona === 'sedentaria' ? 'selected' : ''}>Sedentaria</option>
                                <option value="activa" ${cliente.tipoPersona === 'activa' ? 'selected' : ''}>Activa</option>
                                <option value="muy-activa" ${cliente.tipoPersona === 'muy-activa' ? 'selected' : ''}>Muy activa</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="editDireccion">Dirección</label>
                        <input type="text" id="editDireccion" name="direccion" value="${cliente.direccion || ''}">
                    </div>

                    <div class="form-section-header">Datos de Salud</div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="editAltura">Altura (cm)</label>
                            <input type="number" id="editAltura" name="altura" min="0" max="250" value="${cliente.altura || ''}">
                        </div>
                        <div class="form-group">
                            <label for="editPesoInicial">Peso Inicial (kg)</label>
                            <input type="number" id="editPesoInicial" name="pesoInicial" min="0" step="0.1" value="${cliente.pesoInicial || ''}">
                        </div>
                        <div class="form-group">
                            <label for="editPesoActual">Peso Actual (kg)</label>
                            <input type="number" id="editPesoActual" name="pesoActual" min="0" step="0.1" value="${cliente.pesoActual || ''}">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="editAlergias">Alergias</label>
                        <textarea id="editAlergias" name="alergias" rows="2" placeholder="Ej: Lactosa, gluten...">${cliente.alergias || ''}</textarea>
                    </div>

                    <div class="form-group">
                        <label for="editPatologias">Patologías</label>
                        <textarea id="editPatologias" name="patologias" rows="2" placeholder="Ej: Diabetes, hipertensión...">${cliente.patologias || ''}</textarea>
                    </div>

                    <div class="form-group">
                        <label for="editMedicacion">Medicación</label>
                        <textarea id="editMedicacion" name="medicacion" rows="2" placeholder="Lista de medicamentos actuales">${cliente.medicacion || ''}</textarea>
                    </div>

                    <div class="form-group">
                        <label for="editObjetivo">Objetivo</label>
                        <select id="editObjetivo" name="objetivo">
                            <option value="">Seleccionar objetivo</option>
                            <option value="perder-peso" ${cliente.objetivo === 'perder-peso' ? 'selected' : ''}>Perder Peso</option>
                            <option value="ganar-peso" ${cliente.objetivo === 'ganar-peso' ? 'selected' : ''}>Ganar Peso</option>
                            <option value="mantener-peso" ${cliente.objetivo === 'mantener-peso' ? 'selected' : ''}>Mantener Peso</option>
                            <option value="ganar-musculo" ${cliente.objetivo === 'ganar-musculo' ? 'selected' : ''}>Ganar Músculo</option>
                            <option value="mejorar-salud" ${cliente.objetivo === 'mejorar-salud' ? 'selected' : ''}>Mejorar Salud</option>
                        </select>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn-cancelar" onclick="document.getElementById('modalEditarCliente').remove()">Cancelar</button>
                        <button type="submit" class="btn-guardar">💾 Guardar Cambios</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        // Manejar envío del formulario
        const form = document.getElementById('formEditarCliente');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btnGuardar = form.querySelector('.btn-guardar');
            const textoOriginal = btnGuardar.textContent;
            btnGuardar.disabled = true;
            btnGuardar.textContent = '⏳ Guardando...';

            try {
                // Recopilar datos del formulario
                const formData = new FormData(form);
                const datosActualizados = {
                    nombre: formData.get('nombre').trim(),
                    email: formData.get('email').trim(),
                    telefono: formData.get('telefono').trim() || null,
                    dni: formData.get('dni').trim() || null,
                    fechaNacimiento: formData.get('fechaNacimiento') || null,
                    sexo: formData.get('sexo') || null,
                    direccion: formData.get('direccion').trim() || null,
                    tipoPersona: formData.get('tipoPersona') || null,
                    altura: formData.get('altura') ? parseInt(formData.get('altura')) : null,
                    pesoInicial: formData.get('pesoInicial') ? parseFloat(formData.get('pesoInicial')) : null,
                    pesoActual: formData.get('pesoActual') ? parseFloat(formData.get('pesoActual')) : null,
                    alergias: formData.get('alergias').trim() || null,
                    patologias: formData.get('patologias').trim() || null,
                    medicacion: formData.get('medicacion').trim() || null,
                    objetivo: formData.get('objetivo') || null
                };

                // Calcular IMC si hay altura y peso actual
                if (datosActualizados.altura && datosActualizados.pesoActual) {
                    const alturaEnMetros = datosActualizados.altura / 100;
                    datosActualizados.imc = (datosActualizados.pesoActual / (alturaEnMetros * alturaEnMetros)).toFixed(1);
                }

                // Actualizar cliente
                const resultado = await window.clienteService.actualizarCliente(clienteId, datosActualizados);

                if (resultado.success) {
                    window.mostrarNotificacion('✅ Cliente actualizado correctamente', 'success');
                    
                    // Cerrar modal de edición
                    modal.remove();
                    
                    // Recargar ficha del cliente
                    await this.mostrarFichaCliente(clienteId);
                    
                    // Recargar lista de clientes
                    await this.cargarClientes();
                } else {
                    throw new Error(resultado.error || 'Error al actualizar el cliente');
                }
            } catch (error) {
                console.error('Error al editar cliente:', error);
                window.mostrarNotificacion('❌ Error al actualizar cliente: ' + error.message, 'error');
                btnGuardar.disabled = false;
                btnGuardar.textContent = textoOriginal;
            }
        });

        // Cerrar al hacer clic fuera del modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    async eliminarCliente(clienteId, clienteNombre) {
        // Confirmación antes de eliminar
        const confirmacion = confirm(
            `¿Estás seguro de que deseas eliminar al cliente "${clienteNombre}"?\n\n` +
            `Esta acción marcará al cliente como inactivo.\n` +
            `¿Deseas continuar?`
        );

        if (!confirmacion) {
            return;
        }

        // Confirmación adicional
        const confirmacion2 = confirm(
            `⚠️ ÚLTIMA CONFIRMACIÓN\n\n` +
            `Estás a punto de eliminar a "${clienteNombre}".\n` +
            `Esta acción no se puede deshacer.\n\n` +
            `¿Confirmas la eliminación?`
        );

        if (!confirmacion2) {
            return;
        }

        try {
            // Mostrar indicador de carga
            const btn = document.querySelector(`[data-id="${clienteId}"].btn-eliminar-cliente`);
            if (btn) {
                btn.disabled = true;
                btn.textContent = '⏳ Eliminando...';
            }

            const resultado = await window.clienteService.eliminarCliente(clienteId);

            if (resultado.success) {
                // Mostrar notificación de éxito
                if (typeof window.mostrarNotificacion === 'function') {
                    window.mostrarNotificacion(
                        `✅ Cliente "${clienteNombre}" eliminado correctamente`,
                        'success'
                    );
                } else {
                    alert(`✅ Cliente "${clienteNombre}" eliminado correctamente`);
                }

                // Recargar la lista de clientes
                await this.cargarClientes();

                // Cerrar ficha si estaba abierta
                const fichaModal = document.getElementById('clienteModal');
                if (fichaModal && !fichaModal.classList.contains('oculto')) {
                    const clienteFicha = fichaModal.querySelector('[data-id]');
                    if (clienteFicha && clienteFicha.getAttribute('data-id') === clienteId) {
                        fichaModal.classList.add('oculto');
                    }
                }
            } else {
                throw new Error(resultado.error || 'Error al eliminar el cliente');
            }
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            
            // Mostrar error
            if (typeof window.mostrarNotificacion === 'function') {
                window.mostrarNotificacion(
                    `❌ Error al eliminar cliente: ${error.message}`,
                    'error'
                );
            } else {
                alert(`❌ Error al eliminar cliente: ${error.message}`);
            }

            // Restaurar botón
            const btn = document.querySelector(`[data-id="${clienteId}"].btn-eliminar-cliente`);
            if (btn) {
                btn.disabled = false;
                btn.textContent = '🗑️ Eliminar';
            }
        }
    }
}

// Instancia global
window.clienteManager = new ClienteManager();

