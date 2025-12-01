/**
 * Servicio robusto para generación y descarga de PDFs
 * Soporta:
 * - Generación con html2pdf.js
 * - Web Share API para móviles (iOS/Android)
 * - Manejo de errores y fallbacks
 * - Optimización de imágenes
 */

class PDFService {
    constructor() {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    /**
     * Genera y descarga/comparte el PDF
     * @param {HTMLElement} element - Elemento DOM a convertir
     * @param {string} filename - Nombre del archivo
     * @param {Object} options - Opciones de configuración
     */
    async generatePDF(element, filename, options = {}) {
        const orientationOption = options.orientacion || options.orientation || 'portrait';
        const isLandscape = orientationOption === 'l' || orientationOption === 'landscape';

        // A4 = 210mm, con márgenes aproximados de 10mm a cada lado = 190mm de contenido
        // 190mm a 96 DPI = 190 * 3.779527559 = ~718px. Dejamos un poco más (760px) sin cortar bordes.
        const contenidoAnchoPx = isLandscape ? 990 : 780;
        const windowWidthPx = isLandscape ? 1123 : 794; // Ancho total de la hoja A4 a 96 DPI
        const html2canvasWindowWidth = Math.max(windowWidthPx, contenidoAnchoPx + 120);

        const defaultOptions = {
            margin: isLandscape ? [10, 4, 10, 10] : [10, 4, 10, 10], // Márgenes en mm (izquierda, arriba, derecha, abajo)
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
                letterRendering: true,
                scrollY: 0,
                windowWidth: html2canvasWindowWidth
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: isLandscape ? 'landscape' : 'portrait',
                compress: true
            }
        };

        const config = { ...defaultOptions, ...options };

        try {
            window.mostrarNotificacion('⏳ Generando PDF, por favor espere...', 'info');

            // Preparar el elemento (clonar para no afectar el original)
            const elementToPrint = element.cloneNode(true);

            // Asegurar que el elemento tenga el ancho correcto para A4
            // A4 = 210mm o 297mm según orientación. Ajustamos el ancho del contenido restando márgenes.
            elementToPrint.style.width = `${contenidoAnchoPx}px`;
            elementToPrint.style.maxWidth = `${contenidoAnchoPx}px`;
            elementToPrint.style.margin = '0 auto';
            elementToPrint.style.background = 'white';
            elementToPrint.style.padding = '0';
            elementToPrint.style.textAlign = 'center';
            elementToPrint.style.boxSizing = 'border-box';
            elementToPrint.classList.add('pdf-mode');
            
            // Asegurar que los elementos internos también aprovechen el espacio
            const tables = elementToPrint.querySelectorAll('table');
            tables.forEach(table => {
                table.style.width = '100%';
                table.style.maxWidth = '100%';
            });

            // Contenedor temporal fuera de pantalla pero visible para html2canvas
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.left = '-9999px';
            container.style.top = '0';
            container.style.width = `${html2canvasWindowWidth}px`; // Asegurar que hay espacio para centrar
            container.style.padding = '0';
            container.style.display = 'flex';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'flex-start';
            container.appendChild(elementToPrint);
            document.body.appendChild(container);

            // Esperar a que las imágenes carguen
            await this._waitForImages(elementToPrint);

            // Generar el PDF como Blob
            const worker = html2pdf().set(config).from(elementToPrint);

            if (this.isMobile && navigator.share) {
                // Modo Compartir (Móvil)
                const pdfBlob = await worker.output('blob');
                const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

                if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
                    try {
                        await navigator.share({
                            files: [pdfFile],
                            title: 'Plan de Alimentación',
                            text: 'Aquí tienes tu plan de alimentación personalizado.'
                        });
                        window.mostrarNotificacion('✅ PDF compartido correctamente', 'success');
                    } catch (shareError) {
                        if (shareError.name !== 'AbortError') {
                            console.error('Error al compartir:', shareError);
                            // Fallback a descarga normal si falla compartir
                            worker.save();
                            window.mostrarNotificacion('✅ PDF descargado (compartir falló)', 'success');
                        }
                    }
                } else {
                    // Si no soporta compartir archivos, descargar
                    worker.save();
                    window.mostrarNotificacion('✅ PDF descargado correctamente', 'success');
                }
            } else {
                // Modo Escritorio o sin soporte Share
                await worker.save();
                window.mostrarNotificacion('✅ PDF descargado correctamente', 'success');
            }

            // Limpieza
            document.body.removeChild(container);

        } catch (error) {
            console.error('Error generando PDF:', error);
            window.mostrarNotificacion('❌ Error al generar el PDF. Intente de nuevo.', 'error');
        }
    }

    /**
     * Espera a que todas las imágenes dentro del elemento estén cargadas
     */
    async _waitForImages(element) {
        const images = Array.from(element.querySelectorAll('img'));
        const promises = images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve; // Continuar aunque falle una imagen
            });
        });
        await Promise.all(promises);
    }
}

// Exportar instancia global
window.pdfService = new PDFService();
