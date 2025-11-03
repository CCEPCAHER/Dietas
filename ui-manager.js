// Gestor de UI para autenticación y gestión de dietas
class UIManager {
    constructor() {
        this.modal = null;
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.createAuthModal();
        this.setupEventListeners();
        // Esperar un poco para que Firebase se inicialice
        setTimeout(() => this.checkAuthState(), 100);
    }

    createAuthModal() {
        const modalHTML = `
            <div id="authModal" class="modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div id="loginForm" class="auth-form active">
                        <h2>Iniciar Sesión</h2>
                        <form id="loginFormElement">
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="email" id="loginEmail" required>
                            </div>
                            <div class="form-group">
                                <label>Contraseña:</label>
                                <input type="password" id="loginPassword" required>
                            </div>
                            <button type="submit" class="btn-auth">Iniciar Sesión</button>
                        </form>
                        <div id="loginError" class="error-message"></div>
                    </div>
                </div>
            </div>
        `;

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer.firstElementChild);
        this.modal = document.getElementById('authModal');
    }

    setupEventListeners() {
        // Cerrar modal
        const closeBtn = document.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Login form
        const loginForm = document.getElementById('loginFormElement');
        if (loginForm) {
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.handleLogin();
            });
        }

        // Eventos de autenticación
        window.addEventListener('userLoggedIn', () => {
            this.updateUIForLoggedInUser();
        });

        window.addEventListener('userLoggedOut', () => {
            this.updateUIForLoggedOutUser();
        });
    }

    async handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');

        errorDiv.textContent = '';
        
        const result = await window.authManager.login(email, password);
        
        if (result.success) {
            this.closeModal();
            this.showNotification('✅ Sesión iniciada correctamente', 'success');
        } else {
            errorDiv.textContent = result.error;
            this.showNotification('❌ ' + result.error, 'error');
        }
    }

    openModal() {
        if (this.modal) {
            this.modal.style.display = 'block';
        }
    }

    closeModal() {
        if (this.modal) {
            this.modal.style.display = 'none';
            // Limpiar formularios
            const loginForm = document.getElementById('loginFormElement');
            const loginError = document.getElementById('loginError');
            if (loginForm) loginForm.reset();
            if (loginError) loginError.textContent = '';
        }
    }

    checkAuthState() {
        if (window.authManager.isAuthenticated()) {
            this.updateUIForLoggedInUser();
        } else {
            this.updateUIForLoggedOutUser();
        }
    }

    updateUIForLoggedInUser() {
        const user = window.authManager.getCurrentUser();
        const userInfoDiv = document.getElementById('userInfo');
        if (userInfoDiv) {
            userInfoDiv.innerHTML = `
                <div class="user-menu">
                    <span class="user-name">👤 ${user.email}</span>
                    <button id="btnClientes" class="btn-clientes">👥 Mis Clientes</button>
                    <button id="btnGestorAlimentos" class="btn-gestor-alimentos">🍎 Gestor Alimentos</button>
                    <button id="misDietasBtn" class="btn-dietas">Mis Dietas</button>
                    <button id="logoutBtn" class="btn-logout">Cerrar Sesión</button>
                </div>
            `;
            document.getElementById('logoutBtn').addEventListener('click', this.handleLogout.bind(this));
            document.getElementById('misDietasBtn').addEventListener('click', this.showMisDietas.bind(this));
            document.getElementById('btnGestorAlimentos').addEventListener('click', this.showGestorAlimentos.bind(this));
            
            // Agregar event listener para botón de clientes - con múltiples intentos
            const agregarListenerCliente = () => {
                const btnClientes = document.getElementById('btnClientes');
                if (btnClientes) {
                    // Remover listeners anteriores para evitar duplicados
                    const nuevoBtn = btnClientes.cloneNode(true);
                    btnClientes.parentNode.replaceChild(nuevoBtn, btnClientes);
                    
                    nuevoBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Botón Mis Clientes clicked');
                        
                        if (window.clienteManager) {
                            console.log('Llamando a mostrarSeccionClientes');
                            window.clienteManager.mostrarSeccionClientes();
                        } else {
                            console.error('clienteManager no está disponible');
                            alert('Error: Sistema de clientes no está cargado. Por favor, recarga la página.');
                        }
                    });
                    
                    console.log('Event listener agregado al botón de clientes');
                } else {
                    console.warn('Botón btnClientes no encontrado aún, reintentando...');
                    setTimeout(agregarListenerCliente, 200);
                }
            };
            
            // Intentar inmediatamente y también después de un delay
            agregarListenerCliente();
            setTimeout(agregarListenerCliente, 300);
        }
    }

    updateUIForLoggedOutUser() {
        const userInfoDiv = document.getElementById('userInfo');
        if (userInfoDiv) {
            userInfoDiv.innerHTML = `
                <button id="loginBtn" class="btn-login">Iniciar Sesión</button>
            `;
            document.getElementById('loginBtn').addEventListener('click', () => this.openModal());
        }
    }

    async handleLogout() {
        const result = await window.authManager.logout();
        if (result.success) {
            this.showNotification('👋 Sesión cerrada', 'info');
            // Limpiar datos locales
            window.datosUsuario = {};
        }
    }

    async showMisDietas() {
        const result = await window.dietaService.obtenerDietasUsuario();
        
        if (!result.success) {
            this.showNotification('❌ Error al cargar dietas: ' + result.error, 'error');
            return;
        }

        const dietas = result.dietas;
        
        // Crear modal de dietas guardadas
        const modalHTML = `
            <div id="dietasModal" class="modal">
                <div class="modal-content modal-large">
                    <span class="close-modal">&times;</span>
                    <h2>Mis Dietas Guardadas</h2>
                    <div id="dietasList"></div>
                </div>
            </div>
        `;

        const existingModal = document.getElementById('dietasModal');
        if (existingModal) {
            existingModal.remove();
        }

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer.firstElementChild);
        
        const modal = document.getElementById('dietasModal');
        const dietasList = document.getElementById('dietasList');

        if (dietas.length === 0) {
            dietasList.innerHTML = '<p class="no-dietas">No tienes dietas guardadas aún.</p>';
        } else {
            dietasList.innerHTML = dietas.map(dieta => {
                const fecha = dieta.fechaCreacion?.toDate ? 
                    dieta.fechaCreacion.toDate().toLocaleDateString('es-ES') : 
                    'Fecha no disponible';
                return `
                    <div class="dieta-card">
                        <div class="dieta-info">
                            <h3>${dieta.nombre || 'Dieta sin nombre'}</h3>
                            <p><strong>Objetivo:</strong> ${this.getObjetivoTexto(dieta.objetivo)}</p>
                            <p><strong>Fecha:</strong> ${fecha}</p>
                            <p><strong>Calorías:</strong> ${dieta.calorias} kcal</p>
                        </div>
                        <div class="dieta-actions">
                            <button class="btn-cargar" data-id="${dieta.id}">Cargar</button>
                            <button class="btn-eliminar" data-id="${dieta.id}">Eliminar</button>
                        </div>
                    </div>
                `;
            }).join('');

            // Event listeners para los botones
            dietasList.querySelectorAll('.btn-cargar').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const dietaId = e.target.getAttribute('data-id');
                    await this.cargarDieta(dietaId);
                    modal.style.display = 'none';
                });
            });

            dietasList.querySelectorAll('.btn-eliminar').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const dietaId = e.target.getAttribute('data-id');
                    if (confirm('¿Estás seguro de eliminar esta dieta?')) {
                        await this.eliminarDieta(dietaId);
                    }
                });
            });
        }

        document.querySelector('#dietasModal .close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.style.display = 'block';
    }

    getObjetivoTexto(objetivo) {
        const objetivos = {
            'aumentar': 'Aumentar masa muscular',
            'adelgazar': 'Perder peso',
            'mantener': 'Mantener peso'
        };
        return objetivos[objetivo] || objetivo;
    }

    async cargarDieta(dietaId) {
        const result = await window.dietaService.obtenerDietaPorId(dietaId);
        
        if (!result.success) {
            this.showNotification('❌ Error al cargar dieta: ' + result.error, 'error');
            return;
        }

        const dieta = result.dieta;
        window.datosUsuario = dieta;
        
        // Rellenar el formulario
        document.getElementById('nombre').value = dieta.nombre || '';
        document.getElementById('fechaRegistro').value = dieta.fechaRegistro || '';
        document.getElementById('sexo').value = dieta.sexo || '';
        document.getElementById('edad').value = dieta.edad || '';
        document.getElementById('altura').value = dieta.altura || '';
        document.getElementById('peso').value = dieta.peso || '';
        document.getElementById('tipoPersona').value = dieta.tipoPersona || '';
        document.getElementById('objetivo').value = dieta.objetivo || '';
        document.getElementById('prohibiciones').value = dieta.prohibiciones || '';
        document.getElementById('duracion').value = dieta.duracion || 'semana';

        // Actualizar macros si existen
        if (dieta.calorias) {
            document.getElementById('calorias').value = dieta.calorias;
            document.getElementById('proteinas').value = dieta.proteinas || '';
            document.getElementById('grasas').value = dieta.grasas || '';
            document.getElementById('carbohidratos').value = dieta.carbohidratos || '';
        }

        // Mostrar resultados
        if (window.mostrarResultados) {
            window.mostrarResultados();
        }

        this.showNotification('✅ Dieta cargada correctamente', 'success');
        
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async eliminarDieta(dietaId) {
        const result = await window.dietaService.eliminarDieta(dietaId);
        
        if (result.success) {
            this.showNotification('✅ Dieta eliminada', 'success');
            this.showMisDietas(); // Refrescar lista
        } else {
            this.showNotification('❌ Error: ' + result.error, 'error');
        }
    }

    showGestorAlimentos() {
        // Verificar si ya existe el modal
        let modal = document.getElementById('gestorAlimentosModal');
        
        if (!modal) {
            // Crear modal del gestor de alimentos
            const modalHTML = `
                <div id="gestorAlimentosModal" class="modal">
                    <div class="modal-content modal-extra-large">
                        <span class="close-modal">&times;</span>
                        <div id="gestorAlimentosContent" style="min-height: 600px;">
                            <h2 style="text-align: center; margin-bottom: 20px; color: #667eea;">🍎 Gestión de Base de Datos de Alimentos</h2>
                            <p style="text-align: center; color: #666; margin-bottom: 30px;">Cargando interfaz de administración...</p>
                        </div>
                    </div>
                </div>
            `;
            
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalHTML;
            document.body.appendChild(modalContainer.firstElementChild);
            modal = document.getElementById('gestorAlimentosModal');
            
            // Cerrar modal
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            // Cargar contenido del admin
            this.cargarContenidoGestorAlimentos();
        }
        
        modal.style.display = 'block';
    }

    cargarContenidoGestorAlimentos() {
        // Usar el gestor de alimentos integrado
        if (window.gestorAlimentosManager) {
            window.gestorAlimentosManager.mostrarInterfaz();
        }
    }

    showNotification(mensaje, tipo = 'info') {
        // Reutilizar la función existente si está disponible
        if (window.mostrarNotificacion) {
            window.mostrarNotificacion(mensaje, tipo);
        } else {
            console.log(`[${tipo.toUpperCase()}] ${mensaje}`);
        }
    }
}

// Instancia global - inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.uiManager = new UIManager();
    });
} else {
    window.uiManager = new UIManager();
}

