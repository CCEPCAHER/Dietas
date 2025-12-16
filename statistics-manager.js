class StatisticsManager {
    constructor() {
        this.chartInstance = null;
        this.resizeListener = null;
    }
    
    // Método para limpiar listeners
    cleanup() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            window.removeEventListener('orientationchange', this.resizeListener);
            this.resizeListener = null;
        }
    }

    renderMacrosChart(macros) {
        const ctx = document.getElementById('macrosChart');
        if (!ctx) {
            console.error('❌ Canvas macrosChart no encontrado');
            return;
        }

        // Destruir gráfico anterior si existe
        if (this.chartInstance) {
            this.chartInstance.destroy();
            this.chartInstance = null;
        }
        
        // Limpiar listeners anteriores
        this.cleanup();

        // Detectar iOS/Safari
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                     (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        console.log('📊 Renderizando gráfico de macronutrientes...', { isIOS, macros });

        // Asegurar que el contenedor tenga dimensiones explícitas (crítico para iOS)
        const container = ctx.parentElement;
        if (container) {
            // Forzar dimensiones en PÍXELES para iOS (no porcentajes)
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width || container.offsetWidth || 300;
            const containerHeight = 300; // Altura fija
            
            console.log('📐 Dimensiones del contenedor:', { 
                width: containerWidth, 
                height: containerHeight,
                offsetWidth: container.offsetWidth,
                offsetHeight: container.offsetHeight,
                computedWidth: window.getComputedStyle(container).width,
                computedHeight: window.getComputedStyle(container).height
            });
            
            // Forzar dimensiones explícitas en píxeles (crítico para iOS)
            container.style.width = containerWidth + 'px';
            container.style.height = containerHeight + 'px';
            container.style.minHeight = containerHeight + 'px';
            container.style.maxHeight = containerHeight + 'px';
            container.style.position = 'relative';
            container.style.display = 'block';
            
            // Asegurar que el canvas tenga dimensiones explícitas en píxeles
            ctx.style.width = containerWidth + 'px';
            ctx.style.height = containerHeight + 'px';
            ctx.style.display = 'block';
            ctx.style.position = 'relative';
            ctx.style.visibility = 'visible';
            ctx.style.opacity = '1';
            ctx.style.margin = '0 auto';
            
            // En iOS, establecer atributos width y height directamente en el canvas
            if (isIOS) {
                ctx.setAttribute('width', containerWidth);
                ctx.setAttribute('height', containerHeight);
                // Limitar devicePixelRatio para evitar problemas de renderizado
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                ctx.width = containerWidth * dpr;
                ctx.height = containerHeight * dpr;
                const ctx2d = ctx.getContext('2d');
                if (ctx2d) {
                    ctx2d.scale(dpr, dpr);
                }
            }
            
            // Forzar reflow
            container.offsetHeight;
        }

        const data = {
            labels: [
                `Proteínas (${macros.proteinas}g)`, 
                `Grasas (${macros.grasas}g)`, 
                `Carbohidratos (${macros.carbohidratos}g)`
            ],
            datasets: [{
                data: [macros.proteinas, macros.grasas, macros.carbohidratos],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',  // Azul - Proteínas
                    'rgba(255, 206, 86, 0.8)',  // Amarillo - Grasas
                    'rgba(75, 192, 192, 0.8)'   // Verde - Carbohidratos
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                // Configuración específica para iOS/Safari
                // Limitar devicePixelRatio para evitar problemas de renderizado en iOS
                devicePixelRatio: isIOS ? Math.min(window.devicePixelRatio || 1, 2) : (window.devicePixelRatio || 1),
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14
                            },
                            padding: 20,
                            usePointStyle: true,
                            boxWidth: 12
                        }
                    },
                    title: {
                        display: true,
                        text: 'Distribución de Macronutrientes',
                        font: {
                            family: "'Inter', sans-serif",
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        },
                        align: 'center'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                let value = context.raw;
                                let total = context.chart._metasets[context.datasetIndex].total;
                                let percentage = Math.round((value / total) * 100) + '%';
                                return label + percentage;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                // Centrar el gráfico - usar porcentajes que funcionen bien
                cutout: '65%',
                radius: '85%'
            }
        };
        
        // En iOS, esperar a que el contenedor esté completamente visible antes de crear el gráfico
        const crearGrafico = () => {
            try {
                // Asegurar que el contenedor y canvas sean visibles antes de crear el gráfico
                if (container) {
                    container.style.display = 'block';
                    container.style.visibility = 'visible';
                    container.style.opacity = '1';
                }
                ctx.style.display = 'block';
                ctx.style.visibility = 'visible';
                ctx.style.opacity = '1';
                
                console.log('🎨 Creando gráfico Chart.js...', {
                    containerWidth: container?.offsetWidth,
                    containerHeight: container?.offsetHeight,
                    canvasWidth: ctx.offsetWidth,
                    canvasHeight: ctx.offsetHeight
                });
                
                this.chartInstance = new Chart(ctx, config);
                console.log('✅ Gráfico creado', {
                    chartWidth: this.chartInstance.width,
                    chartHeight: this.chartInstance.height
                });
                
                // Forzar múltiples resize para iOS (a veces necesita varios intentos)
                const forzarResize = () => {
                    if (this.chartInstance && !this.chartInstance.destroyed) {
                        try {
                            this.chartInstance.resize();
                            console.log('✅ Resize ejecutado');
                        } catch (resizeError) {
                            console.warn('⚠️ Error en resize:', resizeError);
                        }
                    }
                };
                
                // Primer resize inmediato
                requestAnimationFrame(() => {
                    forzarResize();
                });
                
                // Múltiples resize para iOS (más agresivo)
                if (isIOS) {
                    // Resize después de varios delays
                    setTimeout(() => {
                        forzarResize();
                        // Forzar actualización del canvas
                        ctx.style.display = 'none';
                        ctx.offsetHeight; // Trigger reflow
                        ctx.style.display = 'block';
                        if (this.chartInstance && !this.chartInstance.destroyed) {
                            this.chartInstance.update('none'); // Actualizar sin animación
                        }
                    }, 100);
                    
                    setTimeout(() => {
                        forzarResize();
                        if (this.chartInstance && !this.chartInstance.destroyed) {
                            this.chartInstance.update('none');
                        }
                    }, 300);
                    
                    setTimeout(() => {
                        forzarResize();
                        if (this.chartInstance && !this.chartInstance.destroyed) {
                            this.chartInstance.update('none');
                        }
                    }, 500);
                } else {
                    // Para otros dispositivos, un solo resize adicional
                    setTimeout(() => {
                        forzarResize();
                    }, 100);
                }
            } catch (error) {
                console.error('❌ Error al crear gráfico:', error);
                // Intentar mostrar un mensaje de error en el contenedor
                const container = ctx.parentElement;
                if (container) {
                    container.innerHTML = `
                        <div style="padding: 20px; text-align: center; color: #dc2626;">
                            <p>⚠️ Error al renderizar el gráfico</p>
                            <p style="font-size: 12px;">${error.message}</p>
                        </div>
                    `;
                }
            }
        };
        
        // En iOS, esperar a que el elemento esté visible
        if (isIOS) {
            // Verificar si el contenedor está visible
            const container = ctx.parentElement;
            if (container) {
                const isVisible = container.offsetWidth > 0 && container.offsetHeight > 0;
                if (isVisible) {
                    // Esperar un frame adicional para asegurar que todo esté listo
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            crearGrafico();
                        });
                    });
                } else {
                    // Si no está visible, esperar y verificar de nuevo
                    setTimeout(() => {
                        crearGrafico();
                    }, 500);
                }
            } else {
                crearGrafico();
            }
        } else {
            crearGrafico();
        }
        
        // Listener para resize en iOS (importante cuando cambia la orientación)
        if (isIOS && !this.resizeListener) {
            this.resizeListener = () => {
                if (this.chartInstance && !this.chartInstance.destroyed) {
                    setTimeout(() => {
                        this.chartInstance.resize();
                    }, 100);
                }
            };
            window.addEventListener('resize', this.resizeListener);
            window.addEventListener('orientationchange', this.resizeListener);
        }
    }
}

window.statisticsManager = new StatisticsManager();

