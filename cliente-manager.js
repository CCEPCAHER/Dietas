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
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                    <button id="btnAtrasClientes" class="btn-volver" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1em;">← Atrás</button>
                    <h2 style="margin: 0;">👥 Gestión de Clientes</h2>
                </div>
                <div class="clientes-controls">
                    <input type="text" id="buscarCliente" placeholder="🔍 Buscar por nombre, email, teléfono o DNI..." class="buscar-input">
                    <button id="btnNuevoCliente" class="btn-nuevo-cliente">➕ Nuevo Cliente</button>
                </div>
            </div>
            <div id="clientesList" class="clientes-list"></div>
        `;

        // Insertar después del título principal
        const mainHeader = mainContainer.querySelector('.main-header');
        const titulo = mainContainer.querySelector('h1');
        if (mainHeader) {
            mainHeader.insertAdjacentElement('afterend', clienteSection);
        } else if (titulo) {
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
            // Botón atrás en sección clientes
            if (e.target && e.target.id === 'btnAtrasClientes') {
                this.volverAFormulario();
            }
            // Botón generar PDF editado (dieta del cliente)
            if (e.target && e.target.id === 'btnGenerarPDFEditado') {
                this.generarPDFDesdeModal();
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
    }

    volverAFormulario() {
        const seccion = document.getElementById('clientesSection');
        const formContainer = document.querySelector('.form-container');
        const resultados = document.getElementById('resultados');

        if (seccion) {
            seccion.classList.add('oculto');
        }
        if (formContainer) {
            formContainer.style.display = '';
        }

        // Scroll a la parte superior
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error al cargar cliente: ' + resultado.error, 'error');
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
                <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
                    <h2 style="color: white; margin: 0 0 10px 0; font-size: 1.8em; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">📋 Ficha del Cliente</h2>
                    <p style="color: white; margin: 0; font-size: 1.1em; opacity: 0.95; font-weight: 500;">${cliente.nombre || 'Cliente sin nombre'}</p>
                </div>
                
                <div class="ficha-seccion">
                    <h3>👤 Datos Personales</h3>
                    <div class="ficha-datos-grid">
                        <div class="info-item">
                            <span class="info-label">📧 Email:</span>
                            <span class="info-value">${cliente.email || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">📞 Teléfono:</span>
                            <span class="info-value">${cliente.telefono || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">🆔 DNI:</span>
                            <span class="info-value">${cliente.dni || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">🎂 Fecha de nacimiento:</span>
                            <span class="info-value">${cliente.fechaNacimiento || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">⚧️ Sexo:</span>
                            <span class="info-value">${cliente.sexo || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">🏃 Tipo de persona:</span>
                            <span class="info-value">${cliente.tipoPersona || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">📍 Dirección:</span>
                            <span class="info-value">${cliente.direccion || 'No especificado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">📅 Fecha de registro:</span>
                            <span class="info-value">${fechaCreacion}</span>
                        </div>
                    </div>
                </div>

                <div class="ficha-seccion">
                    <h3>💊 Datos de Salud</h3>
                    <div class="ficha-datos-grid">
                        <div class="info-item highlight">
                            <span class="info-label">📏 Altura:</span>
                            <span class="info-value">${cliente.altura || 'No especificado'} cm</span>
                        </div>
                        <div class="info-item highlight">
                            <span class="info-label">⚖️ Peso inicial:</span>
                            <span class="info-value">${cliente.pesoInicial || 'No especificado'} kg</span>
                        </div>
                        <div class="info-item highlight">
                            <span class="info-label">⚖️ Peso actual:</span>
                            <span class="info-value">${cliente.pesoActual || 'No especificado'} kg</span>
                        </div>
                        <div class="info-item highlight">
                            <span class="info-label">📊 IMC:</span>
                            <span class="info-value">${cliente.imc || 'No calculado'}</span>
                        </div>
                        <div class="info-item full-width">
                            <span class="info-label">🚫 Alergias:</span>
                            <span class="info-value">${cliente.alergias || 'Ninguna'}</span>
                        </div>
                        <div class="info-item full-width">
                            <span class="info-label">🏥 Patologías:</span>
                            <span class="info-value">${cliente.patologias || 'Ninguna'}</span>
                        </div>
                        <div class="info-item full-width">
                            <span class="info-label">💉 Medicación:</span>
                            <span class="info-value">${cliente.medicacion || 'Ninguna'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">🎯 Objetivo:</span>
                            <span class="info-value">${cliente.objetivo || 'No especificado'}</span>
                        </div>
                    </div>
                </div>

                <div class="ficha-seccion">
                    <h3>📏 Medidas Corporales</h3>
                    <div class="ficha-medidas-container">
                        ${this.generarHTMLMedidas(cliente.medidasIniciales, cliente.historialMedidas)}
                    </div>
                    ${this.generarHTMLProgresoMedidas(cliente.medidasIniciales, cliente.historialMedidas)}
                    <button class="btn-agregar-medidas" onclick="clienteManager.agregarMedidas('${clienteId}')" style="margin-top: 10px;">📏 Registrar Nuevas Medidas</button>
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

        // Renderizar gráficas después de mostrar el modal
        setTimeout(() => {
            this.renderizarGraficas(cliente);
        }, 100);
    }

    generarHTMLMedidas(medidasIniciales, historialMedidas) {
        let html = '';

        if (!medidasIniciales || Object.keys(medidasIniciales).length === 0) {
            html += '<p style="color: #666; font-style: italic;">No hay medidas corporales registradas.</p>';
            return html;
        }

        // Agrupar medidas por categorías
        const categorias = {
            'Torso': ['cintura', 'cadera', 'pecho', 'cuello'],
            'Brazos': ['brazoDer', 'brazoIzq', 'bicepsDer', 'bicepsIzq', 'antebrazoDer', 'antebrazoIzq'],
            'Piernas': ['cuadricepsDer', 'cuadricepsIzq', 'gemeloDer', 'gemeloIzq']
        };

        const labels = {
            cintura: 'Cintura',
            cadera: 'Cadera',
            brazoDer: 'Brazo Der.',
            brazoIzq: 'Brazo Izq.',
            bicepsDer: 'Bíceps Der.',
            bicepsIzq: 'Bíceps Izq.',
            antebrazoDer: 'Antebrazo Der.',
            antebrazoIzq: 'Antebrazo Izq.',
            cuadricepsDer: 'Cuádriceps Der.',
            cuadricepsIzq: 'Cuádriceps Izq.',
            gemeloDer: 'Gemelo Der.',
            gemeloIzq: 'Gemelo Izq.',
            pecho: 'Pecho',
            cuello: 'Cuello'
        };

        const iconosCategoria = {
            'Torso': '🫁',
            'Brazos': '💪',
            'Piernas': '🦵'
        };

        html += '<div style="margin-bottom: 20px;"><h4 style="color: #667eea; margin-bottom: 15px; font-size: 1.1em; font-weight: 600;">Medidas Iniciales</h4>';

        // Crear tarjetas por categoría
        for (const [categoria, medidas] of Object.entries(categorias)) {
            const medidasEnCategoria = medidas.filter(key => medidasIniciales[key] !== null && medidasIniciales[key] !== undefined);

            if (medidasEnCategoria.length > 0) {
                html += `<div style="margin-bottom: 20px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 15px; border-radius: 10px; border-left: 4px solid #2196f3;">
                    <h5 style="color: #1976d2; margin-bottom: 12px; font-size: 1em; font-weight: 700;">${iconosCategoria[categoria]} ${categoria}</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">`;

                medidasEnCategoria.forEach(key => {
                    const value = medidasIniciales[key];
                    html += `<div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #2196f3; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(33, 150, 243, 0.1);">
                        <div style="font-weight: 600; color: #1976d2; font-size: 0.9em; margin-bottom: 5px;">${labels[key]}</div>
                        <div style="font-size: 1.3em; font-weight: 700; color: #333;">${value} cm</div>
                    </div>`;
                });

                html += '</div></div>';
            }
        }
        html += '</div>';

        // Mostrar historial de medidas
        if (historialMedidas && historialMedidas.length > 0) {
            html += '<div style="margin-top: 30px;"><h4 style="color: #667eea; margin-bottom: 15px; font-size: 1.1em; font-weight: 600;">📊 Historial de Medidas</h4>';

            historialMedidas.slice(-3).reverse().forEach((medida, index) => {
                const fecha = medida.fecha?.toDate ?
                    medida.fecha.toDate().toLocaleDateString('es-ES') :
                    'Fecha no disponible';

                html += `<div style="background: linear-gradient(135deg, #f0fff4 0%, #d4f4dd 100%); padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #10b981; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #10b981;">
                        <span style="font-size: 1.2em;">📅</span>
                        <strong style="color: #059669; font-size: 1.1em;">${fecha}</strong>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">`;

                for (const [key, value] of Object.entries(medida)) {
                    if (key !== 'fecha' && key !== 'notas' && value !== null && value !== undefined && labels[key]) {
                        const cambio = medidasIniciales[key] ?
                            (value - medidasIniciales[key]).toFixed(1) : '0';
                        const colorCambio = parseFloat(cambio) > 0 ? '#28a745' : parseFloat(cambio) < 0 ? '#dc3545' : '#666';
                        const icono = parseFloat(cambio) > 0 ? '📈' : parseFloat(cambio) < 0 ? '📉' : '➡️';
                        const signo = parseFloat(cambio) > 0 ? '+' : '';

                        html += `<div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #10b981;">
                            <div style="font-weight: 600; color: #059669; font-size: 0.85em; margin-bottom: 3px;">${labels[key]}</div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 1.2em; font-weight: 700; color: #333;">${value} cm</span>
                                <span style="color: ${colorCambio}; font-weight: 600; font-size: 0.9em;">${icono} ${signo}${cambio}</span>
                            </div>
                        </div>`;
                    }
                }

                if (medida.notas) {
                    html += `<div style="grid-column: 1 / -1; background: white; padding: 12px; border-radius: 8px; border: 1px solid #10b981; margin-top: 10px;">
                        <div style="font-weight: 600; color: #059669; font-size: 0.85em; margin-bottom: 5px;">📝 Notas:</div>
                        <div style="color: #333; font-size: 0.95em;">${medida.notas}</div>
                    </div>`;
                }

                html += '</div></div>';
            });
            html += '</div>';
        }

        return html;
    }

    generarHTMLProgreso(progreso) {
        let html = '';

        // Si hay historial de peso, crear gráfica
        if (progreso && progreso.peso && progreso.peso.length > 0) {
            html += '<div style="margin-bottom: 30px;"><h4 style="color: #667eea; margin-bottom: 10px;">📈 Evolución del Peso</h4>';
            html += '<div class="chart-wrapper"><canvas id="chart-peso" style="max-height: 300px; width: 100%;"></canvas></div></div>';
        }

        if (!progreso || Object.keys(progreso).length === 0) {
            html += '<p style="color: #666; font-style: italic;">No hay registros de progreso aún.</p>';
        }

        return html;
    }

    generarHTMLProgresoMedidas(medidasIniciales, historialMedidas) {
        if (!historialMedidas || historialMedidas.length === 0) {
            return '';
        }

        let html = '<div style="margin-top: 20px;"><h4 style="color: #667eea; margin-bottom: 10px;">📊 Gráfica de Medidas</h4>';
        html += '<div class="charts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">';

        // Crear gráficas para medidas más comunes
        const medidasClave = ['cintura', 'cadera', 'brazoDer', 'bicepsDer', 'cuadricepsDer', 'gemeloDer'];
        const nomMedidas = {
            cintura: 'Cintura',
            cadera: 'Cadera',
            brazoDer: 'Brazo Derecho',
            brazoIzq: 'Brazo Izquierdo',
            bicepsDer: 'Bíceps Derecho',
            cuadricepsDer: 'Cuádriceps Derecho',
            gemeloDer: 'Gemelo Derecho'
        };

        medidasClave.forEach(medida => {
            if (medidasIniciales && medidasIniciales[medida] !== null && medidasIniciales[medida] !== undefined) {
                html += `<div class="chart-wrapper"><canvas id="chart-${medida}" style="max-height: 200px; width: 100%;"></canvas></div>`;
            }
        });

        html += '</div></div>';
        return html;
    }

    renderizarGraficas(cliente) {
        // Graficar peso si existe historial
        if (cliente.progreso && cliente.progreso.peso && cliente.progreso.peso.length > 0) {
            const ctxPeso = document.getElementById('chart-peso');
            if (ctxPeso) {
                const pesos = cliente.progreso.peso.map(p => p.valor || p);
                const fechas = cliente.progreso.peso.map(p => {
                    if (p.fecha && p.fecha.toDate) {
                        return p.fecha.toDate().toLocaleDateString('es-ES');
                    }
                    return 'Fecha no disponible';
                });

                new Chart(ctxPeso, {
                    type: 'line',
                    data: {
                        labels: fechas,
                        datasets: [{
                            label: 'Peso (kg)',
                            data: pesos,
                            borderColor: 'rgb(102, 126, 234)',
                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true, position: 'top' },
                            title: { display: false }
                        },
                        scales: {
                            y: { beginAtZero: false }
                        }
                    }
                });
            }
        }

        // Graficar medidas
        if (cliente.historialMedidas && cliente.historialMedidas.length > 0) {
            const medidasClave = ['cintura', 'cadera', 'brazoDer', 'bicepsDer', 'cuadricepsDer', 'gemeloDer'];
            const nomMedidas = {
                cintura: 'Cintura',
                cadera: 'Cadera',
                brazoDer: 'Brazo Derecho',
                brazoIzq: 'Brazo Izquierdo',
                bicepsDer: 'Bíceps Derecho',
                cuadricepsDer: 'Cuádriceps Derecho',
                gemeloDer: 'Gemelo Derecho'
            };

            medidasClave.forEach(medida => {
                const ctx = document.getElementById(`chart-${medida}`);
                if (ctx && cliente.medidasIniciales && cliente.medidasIniciales[medida] !== null) {
                    const valores = [cliente.medidasIniciales[medida]];
                    const fechas = ['Inicial'];

                    cliente.historialMedidas.forEach(hm => {
                        if (hm[medida] !== null && hm[medida] !== undefined) {
                            valores.push(hm[medida]);
                            const fecha = hm.fecha?.toDate ? hm.fecha.toDate().toLocaleDateString('es-ES') : 'Fecha';
                            fechas.push(fecha);
                        }
                    });

                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: fechas,
                            datasets: [{
                                label: cliente.medidasIniciales[medida] ? 'Evolución' : 'Medida',
                                data: valores,
                                borderColor: '#667eea',
                                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                tension: 0.4,
                                fill: true
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                title: {
                                    display: true,
                                    text: nomMedidas[medida] || medida,
                                    position: 'top',
                                    font: { size: 12, weight: 'bold' }
                                }
                            },
                            scales: {
                                y: { beginAtZero: false }
                            }
                        }
                    });
                }
            });
        }
    }

    generarHTMLConsultas(consultas) {
        if (!consultas || consultas.length === 0) {
            return '<p style="color: #666; font-style: italic; padding: 20px; text-align: center;">No hay consultas registradas aún.</p>';
        }

        return consultas.slice(-5).reverse().map(consulta => {
            const fecha = consulta.fecha?.toDate ?
                consulta.fecha.toDate().toLocaleDateString('es-ES') :
                'Fecha no disponible';
            return `
                <div style="background: white; padding: 20px; margin-bottom: 15px; border-radius: 10px; border-left: 4px solid #667eea; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: all 0.3s ease;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 2px solid #667eea;">
                        <span style="font-size: 1.3em;">📅</span>
                        <strong style="color: #667eea; font-size: 1.1em;">${fecha}</strong>
                    </div>
                    ${consulta.motivo ? `<div style="margin-bottom: 10px;"><strong style="color: #764ba2;">🎯 Motivo:</strong> <span style="color: #555;">${consulta.motivo}</span></div>` : ''}
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0;">
                        <strong style="color: #667eea; display: block; margin-bottom: 8px;">📝 Notas:</strong>
                        <p style="margin: 0; color: #333; line-height: 1.6;">${consulta.notas || 'Sin notas adicionales'}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    generarHTMLDietas(dietas) {
        if (!dietas || dietas.length === 0) {
            return '<p style="color: #666; font-style: italic; padding: 20px; text-align: center;">No hay dietas registradas aún.</p>';
        }

        const objetivoLabels = {
            'aumentar': '💪 Aumentar masa muscular',
            'adelgazar': '🔥 Perder peso',
            'mantener': '⚖️ Mantener peso'
        };

        return dietas.slice(-5).reverse().map(dieta => {
            let fecha = 'Fecha no disponible';
            if (dieta.fecha) {
                if (typeof dieta.fecha.toDate === 'function') {
                    fecha = dieta.fecha.toDate().toLocaleDateString('es-ES');
                } else if (dieta.fecha instanceof Date) {
                    fecha = dieta.fecha.toLocaleDateString('es-ES');
                } else if (dieta.fecha.seconds) {
                    fecha = new Date(dieta.fecha.seconds * 1000).toLocaleDateString('es-ES');
                } else if (typeof dieta.fecha === 'string' || typeof dieta.fecha === 'number') {
                    fecha = new Date(dieta.fecha).toLocaleDateString('es-ES');
                }
            }
            const objetivoLabel = objetivoLabels[dieta.objetivo] || dieta.objetivo || 'No especificado';
            return `
                <div style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); padding: 20px; margin-bottom: 15px; border-radius: 10px; border-left: 4px solid #f39c12; box-shadow: 0 2px 8px rgba(243, 156, 18, 0.15); transition: all 0.3s ease;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #f39c12;">
                        <span style="font-size: 1.3em;">📅</span>
                        <strong style="color: #e67e22; font-size: 1.1em;">${fecha}</strong>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 15px;">
                        <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #f39c12;">
                            <div style="font-weight: 600; color: #e67e22; font-size: 0.85em; margin-bottom: 5px;">🎯 Objetivo</div>
                            <div style="color: #333; font-weight: 600;">${objetivoLabel}</div>
                        </div>
                        <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #f39c12;">
                            <div style="font-weight: 600; color: #e67e22; font-size: 0.85em; margin-bottom: 5px;">🔥 Calorías diarias</div>
                            <div style="color: #333; font-size: 1.2em; font-weight: 700;">${dieta.calorias || 'N/A'} kcal</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
                        <button class="btn-ver-dieta" onclick="clienteManager.verDietaDetalle('${dieta.id}')" style="flex: 1; min-width: 110px; padding: 10px; background: #f39c12; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">📄 Ver Detalle</button>
                        <button class="btn-visualizar-dieta-directo" onclick="clienteManager.visualizarDietaDirecto('${dieta.id}')" style="padding: 10px 15px; background: #3182ce; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;" title="Previsualizar PDF">👁️ Preview</button>
                        <button class="btn-imprimir-dieta-directo" onclick="clienteManager.imprimirDietaDirecto('${dieta.id}')" style="padding: 10px 15px; background: #805ad5; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;" title="Imprimir PDF">🖨️ Imprimir</button>
                        <button class="btn-eliminar-dieta-cliente" onclick="clienteManager.eliminarDietaCliente('${dieta.id}')" style="padding: 10px 15px; background: #e74c3c; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;" title="Eliminar dieta del historial">🗑️</button>
                    </div>
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

                <h4>📏 Medidas Corporales Iniciales (cm)</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Cintura</label>
                        <input type="number" id="clienteCintura" step="0.1" min="50" max="200" placeholder="cm">
                    </div>
                    <div class="form-group">
                        <label>Cadera</label>
                        <input type="number" id="clienteCadera" step="0.1" min="50" max="200" placeholder="cm">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Brazo derecho</label>
                        <input type="number" id="clienteBrazoDer" step="0.1" min="15" max="80" placeholder="cm">
                    </div>
                    <div class="form-group">
                        <label>Brazo izquierdo</label>
                        <input type="number" id="clienteBrazoIzq" step="0.1" min="15" max="80" placeholder="cm">
                    </div>
                </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Bíceps derecho</label>
                            <input type="number" id="clienteBicepsDer" step="0.1" min="15" max="80" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Bíceps izquierdo</label>
                            <input type="number" id="clienteBicepsIzq" step="0.1" min="15" max="80" placeholder="cm">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Antebrazo derecho</label>
                            <input type="number" id="clienteAntebrazoDer" step="0.1" min="15" max="60" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Antebrazo izquierdo</label>
                            <input type="number" id="clienteAntebrazoIzq" step="0.1" min="15" max="60" placeholder="cm">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Cuádriceps derecho</label>
                            <input type="number" id="clienteCuadricepsDer" step="0.1" min="30" max="100" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Cuádriceps izquierdo</label>
                            <input type="number" id="clienteCuadricepsIzq" step="0.1" min="30" max="100" placeholder="cm">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Gemelo derecho</label>
                            <input type="number" id="clienteGemeloDer" step="0.1" min="20" max="60" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Gemelo izquierdo</label>
                            <input type="number" id="clienteGemeloIzq" step="0.1" min="20" max="60" placeholder="cm">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Pecho/Tórax</label>
                            <input type="number" id="clientePecho" step="0.1" min="70" max="200" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Cuello</label>
                            <input type="number" id="clienteCuello" step="0.1" min="25" max="60" placeholder="cm">
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
            // Medidas corporales iniciales
            medidasIniciales: {
                cintura: parseFloat(document.getElementById('clienteCintura').value) || null,
                cadera: parseFloat(document.getElementById('clienteCadera').value) || null,
                brazoDer: parseFloat(document.getElementById('clienteBrazoDer').value) || null,
                brazoIzq: parseFloat(document.getElementById('clienteBrazoIzq').value) || null,
                bicepsDer: parseFloat(document.getElementById('clienteBicepsDer').value) || null,
                bicepsIzq: parseFloat(document.getElementById('clienteBicepsIzq').value) || null,
                antebrazoDer: parseFloat(document.getElementById('clienteAntebrazoDer').value) || null,
                antebrazoIzq: parseFloat(document.getElementById('clienteAntebrazoIzq').value) || null,
                cuadricepsDer: parseFloat(document.getElementById('clienteCuadricepsDer').value) || null,
                cuadricepsIzq: parseFloat(document.getElementById('clienteCuadricepsIzq').value) || null,
                gemeloDer: parseFloat(document.getElementById('clienteGemeloDer').value) || null,
                gemeloIzq: parseFloat(document.getElementById('clienteGemeloIzq').value) || null,
                pecho: parseFloat(document.getElementById('clientePecho').value) || null,
                cuello: parseFloat(document.getElementById('clienteCuello').value) || null
            },
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
            window.mostrarNotificacion?.('✅ Cliente creado correctamente', 'success');
            document.getElementById('clienteModal').style.display = 'none';
            await this.cargarClientes();
        } else {
            window.mostrarNotificacion?.('❌ Error al crear cliente: ' + resultado.error, 'error');
        }
    }

    async generarDietaParaCliente(clienteId) {
        const resultado = await window.clienteService.obtenerClientePorId(clienteId);

        if (!resultado.success) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error al cargar cliente: ' + resultado.error, 'error');
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
        const tp = ['sedentaria', 'activa', 'muy-activa'].includes(tipoActividad) ? tipoActividad : '';
        document.getElementById('tipoPersona').value = tp;
        // Mapear objetivo del cliente al formato del generador
        const mapObjetivo = (obj) => {
            if (!obj) return '';
            const objetivoLower = String(obj).toLowerCase();
            if (objetivoLower.includes('aumentar') || objetivoLower.includes('masa')) return 'aumentar';
            if (objetivoLower.includes('adelgazar') || objetivoLower.includes('perder') || objetivoLower.includes('reducir')) return 'adelgazar';
            if (objetivoLower.includes('mantener')) return 'mantener';
            return obj; // Si no coincide, devolver original
        };
        document.getElementById('objetivo').value = mapObjetivo(cliente.objetivo);

        // Actualizar opciones del select de superávit según el objetivo
        if (typeof window.actualizarSuperavitPorObjetivo === 'function') {
            window.actualizarSuperavitPorObjetivo();

            // REQUISITO: Forzar siempre a 0 al cargar, independientemente del objetivo
            console.log('Forzando superávit a 0 por defecto al cargar cliente');
            const superavitEntreno = document.getElementById('superavitEntreno');
            const superavitDescanso = document.getElementById('superavitDescanso');

            if (superavitEntreno) superavitEntreno.value = '0';
            if (superavitDescanso) superavitDescanso.value = '0';

            // Marcar manualmente como cambiados para que el cálculo inicial use estos valores
            if (superavitEntreno) superavitEntreno.setAttribute('data-manual-set', 'true');
        }
        document.getElementById('prohibiciones').value = cliente.alergias || '';

        // Guardar referencia al cliente
        window.clienteActualDieta = cliente;
        window.clienteIdDieta = clienteId;

        // Mostrar formulario de dieta
        document.querySelector('.form-container').style.display = 'block';
        document.getElementById('clientesSection')?.classList.add('oculto');

        // Scroll al formulario
        document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });

        // Trigger auto-calculation if available
        if (window.triggerManualRecalculation) {
            setTimeout(() => {
                window.triggerManualRecalculation();
            }, 500); // Wait for scroll and display update
        }
    }

    async verDietaDetalle(dietaId) {
        if (!this.clienteActual || !this.clienteActual.historialDietas) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: No se encontró la información del cliente', 'error');
            return;
        }

        const dieta = this.clienteActual.historialDietas.find(d => d.id === dietaId);
        if (!dieta) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: Dieta no encontrada en el historial', 'error');
            return;
        }

        // Cerrar modal de ficha de cliente
        const modal = document.getElementById('clienteModal');
        if (modal) modal.style.display = 'none';

        // Cargar la dieta usando el UIManager
        if (window.uiManager && typeof window.uiManager.cargarDietaDesdeObjeto === 'function') {
            await window.uiManager.cargarDietaDesdeObjeto(dieta, this.clienteActual.id);
        } else {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: El cargador de dietas no está disponible', 'error');
        }
    }
 
    async visualizarDietaDirecto(dietaId) {
        if (!this.clienteActual || !this.clienteActual.historialDietas) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: No se encontró la información del cliente', 'error');
            return;
        }
 
        const dieta = this.clienteActual.historialDietas.find(d => d.id === dietaId);
        if (!dieta) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: Dieta no encontrada en el historial', 'error');
            return;
        }
 
        if (typeof window.generarPDFDesdeDietaObjeto !== 'function') {
            if (window.mostrarNotificacion) window.mostrarNotificacion('⏳ Cargando previsualizador PDF, espera un momento...', 'info');
            // Reintentar cada 200ms hasta por 5 segundos
            for (let i = 0; i < 25; i++) {
                await new Promise(resolve => setTimeout(resolve, 200));
                if (typeof window.generarPDFDesdeDietaObjeto === 'function') {
                    break;
                }
            }
        }
 
        if (typeof window.generarPDFDesdeDietaObjeto === 'function') {
            await window.generarPDFDesdeDietaObjeto(dieta, 'preview');
        } else {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: El visualizador de PDFs no está disponible o sigue cargando. Inténtalo de nuevo.', 'error');
        }
    }
 
    async imprimirDietaDirecto(dietaId) {
        if (!this.clienteActual || !this.clienteActual.historialDietas) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: No se encontró la información del cliente', 'error');
            return;
        }
 
        const dieta = this.clienteActual.historialDietas.find(d => d.id === dietaId);
        if (!dieta) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: Dieta no encontrada en el historial', 'error');
            return;
        }
 
        if (typeof window.generarPDFDesdeDietaObjeto !== 'function') {
            if (window.mostrarNotificacion) window.mostrarNotificacion('⏳ Cargando impresor PDF, espera un momento...', 'info');
            // Reintentar cada 200ms hasta por 5 segundos
            for (let i = 0; i < 25; i++) {
                await new Promise(resolve => setTimeout(resolve, 200));
                if (typeof window.generarPDFDesdeDietaObjeto === 'function') {
                    break;
                }
            }
        }
 
        if (typeof window.generarPDFDesdeDietaObjeto === 'function') {
            await window.generarPDFDesdeDietaObjeto(dieta, 'print');
        } else {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: El impresor de PDFs no está disponible o sigue cargando. Inténtalo de nuevo.', 'error');
        }
    }
 
    async eliminarDietaCliente(dietaId) {
        if (!this.clienteActual || !this.clienteActual.id) {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: No se encontró la información del cliente', 'error');
            return;
        }

        if (!confirm('¿Estás seguro de eliminar esta dieta del historial del cliente?')) {
            return;
        }

        try {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Eliminando dieta...', 'info');
            const result = await window.clienteService.eliminarDietaCliente(this.clienteActual.id, dietaId);

            if (result.success) {
                if (window.mostrarNotificacion) window.mostrarNotificacion('✅ Dieta eliminada del historial', 'success');
                
                // Actualizar la ficha del cliente en memoria
                if (this.clienteActual.historialDietas) {
                    this.clienteActual.historialDietas = this.clienteActual.historialDietas.filter(d => d.id !== dietaId);
                }

                // Refrescar el modal de la ficha del cliente
                await this.mostrarFichaCliente(this.clienteActual.id);
            } else {
                if (window.mostrarNotificacion) window.mostrarNotificacion('❌ Error: ' + result.error, 'error');
            }
        } catch (error) {
            console.error('Error al eliminar dieta de cliente:', error);
            if (window.mostrarNotificacion) window.mostrarNotificacion('❌ Error al eliminar dieta: ' + error.message, 'error');
        }
    }

    async agregarMedidas(clienteId) {
        const modal = document.createElement('div');
        modal.id = 'modalAgregarMedidas';
        modal.className = 'modal';
        modal.style.display = 'block';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 700px;">
                <div class="modal-header">
                    <h2>📏 Registrar Nuevas Medidas Corporales</h2>
                    <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                </div>
                <form id="formAgregarMedidas" class="form-medidas">
                    <div class="form-group">
                        <label>Fecha de medición *</label>
                        <input type="date" id="medidaFecha" required>
                    </div>

                    <h4 style="margin-top: 20px; color: #667eea;">Medidas Corporales (cm)</h4>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Cintura</label>
                            <input type="number" id="medidaCintura" step="0.1" min="50" max="200" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Cadera</label>
                            <input type="number" id="medidaCadera" step="0.1" min="50" max="200" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Brazo derecho</label>
                            <input type="number" id="medidaBrazoDer" step="0.1" min="15" max="80" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Brazo izquierdo</label>
                            <input type="number" id="medidaBrazoIzq" step="0.1" min="15" max="80" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Bíceps derecho</label>
                            <input type="number" id="medidaBicepsDer" step="0.1" min="15" max="80" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Bíceps izquierdo</label>
                            <input type="number" id="medidaBicepsIzq" step="0.1" min="15" max="80" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Antebrazo derecho</label>
                            <input type="number" id="medidaAntebrazoDer" step="0.1" min="15" max="60" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Antebrazo izquierdo</label>
                            <input type="number" id="medidaAntebrazoIzq" step="0.1" min="15" max="60" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Cuádriceps derecho</label>
                            <input type="number" id="medidaCuadricepsDer" step="0.1" min="30" max="100" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Cuádriceps izquierdo</label>
                            <input type="number" id="medidaCuadricepsIzq" step="0.1" min="30" max="100" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Gemelo derecho</label>
                            <input type="number" id="medidaGemeloDer" step="0.1" min="20" max="60" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Gemelo izquierdo</label>
                            <input type="number" id="medidaGemeloIzq" step="0.1" min="20" max="60" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Pecho/Tórax</label>
                            <input type="number" id="medidaPecho" step="0.1" min="70" max="200" placeholder="cm">
                        </div>
                        <div class="form-group">
                            <label>Cuello</label>
                            <input type="number" id="medidaCuello" step="0.1" min="25" max="60" placeholder="cm">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Peso actual (kg)</label>
                            <input type="number" id="medidaPeso" step="0.1" min="40" max="200" placeholder="kg">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Notas adicionales (opcional)</label>
                        <textarea id="medidaNotas" rows="3" placeholder="Observaciones sobre el estado del cliente..."></textarea>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn-guardar">💾 Guardar Medidas</button>
                        <button type="button" class="btn-cancelar" onclick="this.closest('.modal').remove()">Cancelar</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        // Establecer fecha actual por defecto
        document.getElementById('medidaFecha').valueAsDate = new Date();

        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Manejar submit
        document.getElementById('formAgregarMedidas').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.guardarMedidas(clienteId);
        });
    }

    async guardarMedidas(clienteId) {
        const fecha = document.getElementById('medidaFecha').value;
        const medidas = {
            fecha: new Date(fecha),
            cintura: parseFloat(document.getElementById('medidaCintura').value) || null,
            cadera: parseFloat(document.getElementById('medidaCadera').value) || null,
            brazoDer: parseFloat(document.getElementById('medidaBrazoDer').value) || null,
            brazoIzq: parseFloat(document.getElementById('medidaBrazoIzq').value) || null,
            bicepsDer: parseFloat(document.getElementById('medidaBicepsDer').value) || null,
            bicepsIzq: parseFloat(document.getElementById('medidaBicepsIzq').value) || null,
            antebrazoDer: parseFloat(document.getElementById('medidaAntebrazoDer').value) || null,
            antebrazoIzq: parseFloat(document.getElementById('medidaAntebrazoIzq').value) || null,
            cuadricepsDer: parseFloat(document.getElementById('medidaCuadricepsDer').value) || null,
            cuadricepsIzq: parseFloat(document.getElementById('medidaCuadricepsIzq').value) || null,
            gemeloDer: parseFloat(document.getElementById('medidaGemeloDer').value) || null,
            gemeloIzq: parseFloat(document.getElementById('medidaGemeloIzq').value) || null,
            pecho: parseFloat(document.getElementById('medidaPecho').value) || null,
            cuello: parseFloat(document.getElementById('medidaCuello').value) || null,
            peso: parseFloat(document.getElementById('medidaPeso').value) || null,
            notas: document.getElementById('medidaNotas').value
        };

        // Guardar medidas en el cliente
        const resultado = await window.clienteService.agregarMedidasCliente(clienteId, medidas, document.getElementById('medidaPeso').value);

        if (resultado.success) {
            window.mostrarNotificacion?.('✅ Medidas registradas correctamente', 'success');
            document.getElementById('modalAgregarMedidas').remove();
            await this.mostrarFichaCliente(clienteId); // Recargar ficha
        } else {
            window.mostrarNotificacion?.('❌ Error al guardar medidas: ' + resultado.error, 'error');
        }
    }

    agregarProgreso(clienteId) {
        const modal = document.createElement('div');
        modal.id = 'modalAgregarProgreso';
        modal.className = 'modal';
        modal.style.display = 'block';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px;">
                <div class="modal-header">
                    <h2>➕ Agregar Registro de Progreso</h2>
                    <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                </div>
                <form id="formAgregarProgreso" class="form-progreso">
                    <div class="form-group">
                        <label>Fecha *</label>
                        <input type="date" id="progresoFecha" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Peso (kg)</label>
                            <input type="number" id="progresoPeso" step="0.1" min="40" max="200" placeholder="kg">
                        </div>
                        <div class="form-group">
                            <label>IMC</label>
                            <input type="number" id="progresoIMC" step="0.1" min="15" max="50" placeholder="auto">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Notas adicionales (opcional)</label>
                        <textarea id="progresoNotas" rows="3" placeholder="Observaciones, estado general, problemas, etc..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-guardar">💾 Guardar Progreso</button>
                        <button type="button" class="btn-cancelar" onclick="this.closest('.modal').remove()">Cancelar</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);
        document.getElementById('progresoFecha').valueAsDate = new Date();

        // Cerrar al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        // Guardar progreso
        document.getElementById('formAgregarProgreso').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.guardarProgreso(clienteId);
        });

        // Calcular IMC automáticamente si hay peso y altura
        document.getElementById('progresoPeso').addEventListener('input', () => {
            this.calcularIMCAuto(clienteId);
        });
    }

    async calcularIMCAuto(clienteId) {
        try {
            const resultado = await window.clienteService.obtenerClientePorId(clienteId);
            if (resultado.success && resultado.cliente.altura) {
                const peso = parseFloat(document.getElementById('progresoPeso').value);
                const altura = resultado.cliente.altura / 100; // convertir cm a metros
                if (peso && altura) {
                    const imc = (peso / (altura * altura)).toFixed(1);
                    document.getElementById('progresoIMC').value = imc;
                }
            }
        } catch (error) {
            console.error('Error al calcular IMC automático:', error);
        }
    }

    async guardarProgreso(clienteId) {
        const fecha = document.getElementById('progresoFecha').value;
        const peso = parseFloat(document.getElementById('progresoPeso').value);
        const imc = parseFloat(document.getElementById('progresoIMC').value);
        const notas = document.getElementById('progresoNotas').value;

        if (!fecha) {
            window.mostrarNotificacion?.('⚠️ La fecha es obligatoria', 'warning');
            return;
        }

        const progreso = {
            fecha: new Date(fecha),
            valor: peso,
            imc: isNaN(imc) ? null : imc,
            notas: notas
        };

        const resultado = await window.clienteService.agregarProgresoCliente(clienteId, progreso, peso);

        if (resultado.success) {
            window.mostrarNotificacion?.('✅ Progreso registrado correctamente', 'success');
            document.getElementById('modalAgregarProgreso').remove();
            await this.mostrarFichaCliente(clienteId); // Recargar ficha
        } else {
            window.mostrarNotificacion?.('❌ Error al guardar progreso: ' + resultado.error, 'error');
        }
    }

    agregarConsulta(clienteId) {
        const modal = document.createElement('div');
        modal.id = 'modalAgregarConsulta';
        modal.className = 'modal';
        modal.style.display = 'block';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 700px;">
                <div class="modal-header">
                    <h2>➕ Nueva Consulta</h2>
                    <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                </div>
                <form id="formAgregarConsulta" class="form-consulta">
                    <div class="form-group">
                        <label>Fecha de consulta *</label>
                        <input type="date" id="consultaFecha" required>
                    </div>
                    <div class="form-group">
                        <label>Motivo de consulta</label>
                        <input type="text" id="consultaMotivo" placeholder="Ej: Revisión mensual, seguimiento, inicio de plan, etc.">
                    </div>
                    <div class="form-group">
                        <label>Notas y observaciones *</label>
                        <textarea id="consultaNotas" rows="6" required placeholder="Escribe tus observaciones, recomendaciones, cambios, etc..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-guardar">💾 Guardar Consulta</button>
                        <button type="button" class="btn-cancelar" onclick="this.closest('.modal').remove()">Cancelar</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);
        document.getElementById('consultaFecha').valueAsDate = new Date();

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        document.getElementById('formAgregarConsulta').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.guardarConsulta(clienteId);
        });
    }

    async guardarConsulta(clienteId) {
        const fecha = document.getElementById('consultaFecha').value;
        const motivo = document.getElementById('consultaMotivo').value;
        const notas = document.getElementById('consultaNotas').value;

        const consulta = {
            fecha: new Date(fecha),
            motivo: motivo,
            notas: notas
        };

        const resultado = await window.clienteService.agregarConsultaCliente(clienteId, consulta);

        if (resultado.success) {
            window.mostrarNotificacion?.('✅ Consulta registrada correctamente', 'success');
            document.getElementById('modalAgregarConsulta').remove();
            await this.mostrarFichaCliente(clienteId);
        } else {
            window.mostrarNotificacion?.('❌ Error al guardar consulta: ' + resultado.error, 'error');
        }
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
                    <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
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
                            <option value="aumentar" ${cliente.objetivo === 'aumentar' ? 'selected' : ''}>Aumentar masa muscular</option>
                            <option value="adelgazar" ${cliente.objetivo === 'adelgazar' ? 'selected' : ''}>Perder peso</option>
                            <option value="mantener" ${cliente.objetivo === 'mantener' ? 'selected' : ''}>Mantener peso</option>
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
                    if (window.mostrarNotificacion) window.mostrarNotificacion(`✅ Cliente "${clienteNombre}" eliminado correctamente`, 'success');
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
                if (window.mostrarNotificacion) window.mostrarNotificacion(`❌ Error al eliminar cliente: ${error.message}`, 'error');
            }

            // Restaurar botón
            const btn = document.querySelector(`[data-id="${clienteId}"].btn-eliminar-cliente`);
            if (btn) {
                btn.disabled = false;
                btn.textContent = '🗑️ Eliminar';
            }
        }
    }

    // Función para generar PDF desde el modal de dieta editable
    generarPDFDesdeModal() {
        // Verificar que la función unificada esté disponible
        if (typeof window.generarPDFProfesional === 'function') {
            // Detectar si hay una tabla editable en el modal
            const contenidoModal = document.getElementById('dietaEditableContent');
            if (contenidoModal && window.tablaEditable) {
                // Guardar el día actual antes de generar PDF
                if (window.tablaEditable.planSemana && window.tablaEditable.diaActual) {
                    window.tablaEditable.planSemana[window.tablaEditable.diaActual] = window.tablaEditable.obtenerDatos();
                }
                // Usar fuente 'tabla-editable' para que tome los datos del modal
                window.generarPDFProfesional('tabla-editable');
            } else {
                // Si no hay tabla editable, intentar usar fuente principal
                window.generarPDFProfesional('principal');
            }
        } else {
            if (window.mostrarNotificacion) window.mostrarNotificacion('Error: Sistema de generación de PDF no disponible. Recarga la página.', 'error');
        }
    }
}

// Instancia global
window.clienteManager = new ClienteManager();

