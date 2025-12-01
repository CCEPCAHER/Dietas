/**
 * Sistema robusto de carga de librerías PDF y Excel
 * Implementa múltiples CDNs con fallback automático para iOS/iPad
 * @version 2.0
 */

(function () {
    'use strict';

    // Configuración de librerías con múltiples CDNs
    const LIBRARY_CONFIG = {
        html2canvas: {
            name: 'html2canvas',
            urls: [
                'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
                'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js',
                'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js'
            ],
            validator: () => typeof window.html2canvas === 'function'
        },
        jspdf: {
            name: 'jsPDF',
            urls: [
                'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
                'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
                'https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js'
            ],
            validator: () => typeof window.jspdf !== 'undefined' || typeof window.jsPDF !== 'undefined'
        },
        html2pdf: {
            name: 'html2pdf',
            urls: [
                'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
                'https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js',
                'https://unpkg.com/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js'
            ],
            validator: () => typeof window.html2pdf === 'function'
        },
        exceljs: {
            name: 'ExcelJS',
            urls: [
                'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js',
                'https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js',
                'https://unpkg.com/exceljs@4.3.0/dist/exceljs.min.js'
            ],
            validator: () => typeof window.ExcelJS !== 'undefined'
        },
        filesaver: {
            name: 'FileSaver',
            urls: [
                'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
                'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js',
                'https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js'
            ],
            validator: () => typeof window.saveAs === 'function'
        }
    };

    // Estado de carga
    const loadState = {
        loaded: {},
        loading: {},
        failed: {},
        retryCount: {}
    };

    // Configuración
    const CONFIG = {
        timeout: 15000, // 15 segundos timeout (aumentado para iOS)
        maxRetries: 3,
        retryDelay: 1000,
        showNotifications: true
    };

    /**
     * Muestra notificación al usuario
     */
    function notify(message, type = 'info') {
        if (!CONFIG.showNotifications) return;

        if (typeof window.mostrarNotificacion === 'function') {
            window.mostrarNotificacion(message, type);
        } else {
            console.log(`[${type.toUpperCase()}] ${message}`);
        }
    }

    /**
     * Carga un script con timeout y retry
     */
    function loadScript(url, timeout = CONFIG.timeout) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = url;

            let timeoutId;
            let loaded = false;

            // Timeout handler
            timeoutId = setTimeout(() => {
                if (!loaded) {
                    loaded = true;
                    script.remove();
                    reject(new Error(`Timeout loading ${url}`));
                }
            }, timeout);

            // Success handler
            script.onload = () => {
                if (!loaded) {
                    loaded = true;
                    clearTimeout(timeoutId);
                    resolve(url);
                }
            };

            // Error handler
            script.onerror = () => {
                if (!loaded) {
                    loaded = true;
                    clearTimeout(timeoutId);
                    script.remove();
                    reject(new Error(`Failed to load ${url}`));
                }
            };

            // Agregar al DOM
            document.head.appendChild(script);
        });
    }

    /**
     * Intenta cargar una librería desde múltiples CDNs
     */
    async function loadLibraryWithFallback(libraryKey) {
        const config = LIBRARY_CONFIG[libraryKey];
        if (!config) {
            throw new Error(`Unknown library: ${libraryKey}`);
        }

        // Verificar si ya está cargada
        if (config.validator()) {
            console.log(`✅ ${config.name} already loaded`);
            loadState.loaded[libraryKey] = true;
            return true;
        }

        // Verificar si ya se está cargando
        if (loadState.loading[libraryKey]) {
            console.log(`⏳ ${config.name} is already loading, waiting...`);
            return loadState.loading[libraryKey];
        }

        // Crear promesa de carga
        const loadPromise = (async () => {
            const urls = config.urls;
            let lastError;

            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                const cdnName = new URL(url).hostname;

                try {
                    console.log(`🔄 Attempting to load ${config.name} from ${cdnName}...`);
                    await loadScript(url);

                    // Pequeña espera para que la librería se inicialice
                    await new Promise(resolve => setTimeout(resolve, 200));

                    // Validar que realmente se cargó
                    if (config.validator()) {
                        console.log(`✅ ${config.name} loaded successfully from ${cdnName}`);
                        loadState.loaded[libraryKey] = true;
                        delete loadState.loading[libraryKey];
                        return true;
                    } else {
                        throw new Error(`Library loaded but validator failed for ${config.name}`);
                    }
                } catch (error) {
                    console.warn(`⚠️ Failed to load ${config.name} from ${cdnName}:`, error.message);
                    lastError = error;

                    // Si no es el último CDN, esperar un poco antes de intentar el siguiente
                    if (i < urls.length - 1) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    }
                }
            }

            // Todos los CDNs fallaron
            loadState.failed[libraryKey] = true;
            delete loadState.loading[libraryKey];
            throw new Error(`Failed to load ${config.name} from all CDNs. Last error: ${lastError?.message}`);
        })();

        loadState.loading[libraryKey] = loadPromise;
        return loadPromise;
    }

    /**
     * Carga todas las librerías en secuencia
     */
    async function loadAllLibraries(showProgress = true) {
        const libraries = ['html2canvas', 'jspdf', 'html2pdf', 'exceljs', 'filesaver'];
        const total = libraries.length;
        let loaded = 0;

        if (showProgress) {
            notify('📚 Cargando librerías PDF/Excel...', 'info');
        }

        for (const lib of libraries) {
            try {
                await loadLibraryWithFallback(lib);
                loaded++;

                if (showProgress) {
                    const percent = Math.round((loaded / total) * 100);
                    console.log(`📊 Progreso: ${loaded}/${total} (${percent}%)`);
                }
            } catch (error) {
                console.error(`❌ Error loading ${lib}:`, error);

                // Para PDF, si falla html2pdf intentamos solo con html2canvas + jsPDF
                if (lib === 'html2pdf' && loadState.loaded.html2canvas && loadState.loaded.jspdf) {
                    console.log('ℹ️ Usando html2canvas + jsPDF directamente');
                    continue;
                }

                // Para Excel, podemos continuar sin FileSaver si ExcelJS se cargó
                if (lib === 'filesaver' && loadState.loaded.exceljs) {
                    console.log('ℹ️ FileSaver no disponible, usando método alternativo');
                    continue;
                }

                throw error;
            }
        }

        if (showProgress) {
            notify('✅ Librerías cargadas correctamente', 'success');
        }

        return true;
    }

    /**
     * Inicializa el sistema de carga
     */
    async function init() {
        try {
            console.log('🚀 Iniciando sistema de carga de librerías...');
            await loadAllLibraries(true);
            console.log('✅ Sistema de librerías inicializado');

            // Marcar como listo
            window.librariesReady = true;

            // Disparar evento personalizado
            window.dispatchEvent(new Event('librariesLoaded'));

            return true;
        } catch (error) {
            console.error('❌ Error inicializando librerías:', error);
            notify('❌ Error cargando librerías. Por favor, recarga la página.', 'error');
            window.librariesReady = false;
            return false;
        }
    }

    /**
     * Verifica si las librerías necesarias para PDF están listas
     */
    function isPDFReady() {
        return (loadState.loaded.html2pdf || (loadState.loaded.html2canvas && loadState.loaded.jspdf));
    }

    /**
     * Verifica si las librerías necesarias para Excel están listas
     */
    function isExcelReady() {
        return loadState.loaded.exceljs;
    }

    /**
     * Obtiene el estado de carga
     */
    function getLoadState() {
        return {
            loaded: Object.keys(loadState.loaded),
            loading: Object.keys(loadState.loading),
            failed: Object.keys(loadState.failed),
            pdfReady: isPDFReady(),
            excelReady: isExcelReady(),
            allReady: window.librariesReady === true
        };
    }

    /**
     * Reintentar carga de todas las librerías
     */
    async function retryAll() {
        // Limpiar estado
        loadState.failed = {};
        loadState.retryCount = {};

        notify('🔄 Reintentando cargar librerías...', 'info');
        return await init();
    }

    // Exportar API pública
    window.LibraryLoader = {
        init,
        loadLibrary: loadLibraryWithFallback,
        loadAll: loadAllLibraries,
        isPDFReady,
        isExcelReady,
        getState: getLoadState,
        retry: retryAll,
        config: CONFIG
    };

    // Auto-inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM ya está listo, iniciar inmediatamente
        setTimeout(init, 100);
    }

    console.log('📚 Library Loader inicializado');
})();
