/**
 * Gestor de Notificaciones (Toast)
 * Reemplaza los alerts nativos con notificaciones elegantes
 */
class ToastManager {
    constructor() {
        this.container = document.getElementById('toast-container');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    }

    show(message, type = 'info', title = '') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Iconos según tipo
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        // Títulos por defecto si no se proveen
        const defaultTitles = {
            success: '¡Éxito!',
            error: 'Error',
            warning: 'Atención',
            info: 'Información'
        };

        const finalTitle = title || defaultTitles[type];
        const icon = icons[type];

        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-content">
                <div class="toast-title">${finalTitle}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;

        this.container.appendChild(toast);

        // Auto remover después de 4 segundos
        setTimeout(() => {
            toast.classList.add('hiding');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 4000);

        // Permitir remover al click
        toast.addEventListener('click', () => {
            toast.classList.add('hiding');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        });
    }

    success(message, title) { this.show(message, 'success', title); }
    error(message, title) { this.show(message, 'error', title); }
    warning(message, title) { this.show(message, 'warning', title); }
    info(message, title) { this.show(message, 'info', title); }
}

window.toastManager = new ToastManager();

// Sobrescribir window.alert para usar toasts (opcional, pero consistente)
window.alert = (msg) => window.toastManager.info(msg);

