// Sistema avanzado de gráficos para la aplicación de dietas
class AdvancedCharts {
    constructor() {
        this.charts = {};
        this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                     (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }

    // Crear cards KPI con métricas destacadas
    createKPICards(macros, calorias) {
        const container = document.getElementById('dashboard-visual');
        if (!container) return;

        // Crear contenedor de KPI cards si no existe
        let kpiContainer = document.getElementById('kpi-cards-container');
        if (!kpiContainer) {
            kpiContainer = document.createElement('div');
            kpiContainer.id = 'kpi-cards-container';
            kpiContainer.className = 'kpi-cards-grid';
            container.insertBefore(kpiContainer, container.firstChild);
        }

        const imc = datosUsuario.peso / Math.pow(datosUsuario.altura / 100, 2);
        const imcStatus = this.getIMCStatus(imc);
        
        const kpiData = [
            {
                title: 'Calorías Diarias',
                value: Math.round(calorias),
                unit: 'kcal',
                icon: '🔥',
                color: '#f59e0b',
                gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                subtitle: 'Energía total'
            },
            {
                title: 'Proteínas',
                value: Math.round(macros.proteinas),
                unit: 'g',
                icon: '💪',
                color: '#3b82f6',
                gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                subtitle: `${Math.round((macros.proteinas * 4 / calorias) * 100)}% del total`
            },
            {
                title: 'Carbohidratos',
                value: Math.round(macros.carbohidratos),
                unit: 'g',
                icon: '🌾',
                color: '#10b981',
                gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                subtitle: `${Math.round((macros.carbohidratos * 4 / calorias) * 100)}% del total`
            },
            {
                title: 'Grasas',
                value: Math.round(macros.grasas),
                unit: 'g',
                icon: '🥑',
                color: '#f97316',
                gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                subtitle: `${Math.round((macros.grasas * 9 / calorias) * 100)}% del total`
            },
            {
                title: 'IMC',
                value: imc.toFixed(1),
                unit: '',
                icon: '📊',
                color: imcStatus.color,
                gradient: imcStatus.gradient,
                subtitle: imcStatus.label
            }
        ];

        kpiContainer.innerHTML = kpiData.map((kpi, index) => `
            <div class="kpi-card" style="animation-delay: ${index * 0.1}s">
                <div class="kpi-card-icon" style="background: ${kpi.gradient}">
                    <span class="kpi-icon-emoji">${kpi.icon}</span>
                </div>
                <div class="kpi-card-content">
                    <div class="kpi-card-title">${kpi.title}</div>
                    <div class="kpi-card-value">
                        <span class="kpi-value-number">${kpi.value}</span>
                        <span class="kpi-value-unit">${kpi.unit}</span>
                    </div>
                    <div class="kpi-card-subtitle">${kpi.subtitle}</div>
                </div>
                <div class="kpi-card-glow" style="background: ${kpi.gradient}"></div>
            </div>
        `).join('');

        // Animar números
        this.animateNumbers();
    }

    getIMCStatus(imc) {
        if (imc < 18.5) {
            return { label: 'Bajo peso', color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' };
        } else if (imc < 25) {
            return { label: 'Normal', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' };
        } else if (imc < 30) {
            return { label: 'Sobrepeso', color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' };
        } else {
            return { label: 'Obesidad', color: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' };
        }
    }

    animateNumbers() {
        const numbers = document.querySelectorAll('.kpi-value-number');
        numbers.forEach(el => {
            const finalValue = parseFloat(el.textContent);
            const duration = 1500;
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const current = startValue + (finalValue - startValue) * this.easeOutCubic(progress);
                el.textContent = Math.round(current);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            animate();
        });
    }

    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // Gráfico de barras: Calorías por día de la semana
    renderWeeklyCaloriesChart(planSemana) {
        const container = document.getElementById('dashboard-visual');
        if (!container) return;

        let chartContainer = document.getElementById('weekly-calories-chart');
        if (!chartContainer) {
            chartContainer = document.createElement('div');
            chartContainer.id = 'weekly-calories-chart';
            chartContainer.className = 'chart-container card-modern';
            container.appendChild(chartContainer);
        }

        // Calcular calorías por día
        const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        const caloriasPorDia = [];
        const labels = [];

        planSemana.slice(0, 7).forEach((dia, index) => {
            const nombreDia = dia.dia || diasSemana[index];
            let totalCalorias = 0;
            
            if (dia.comidas) {
                Object.values(dia.comidas).forEach(comida => {
                    if (comida && comida.calorias) {
                        totalCalorias += comida.calorias;
                    }
                });
            }
            
            labels.push(nombreDia);
            caloriasPorDia.push(totalCalorias);
        });

        chartContainer.innerHTML = `
            <h3 class="chart-title">📅 Calorías por Día de la Semana</h3>
            <div class="chart-wrapper" style="position: relative; height: 300px; width: 100%;">
                <canvas id="weeklyCaloriesChart"></canvas>
            </div>
        `;

        const ctx = document.getElementById('weeklyCaloriesChart');
        if (!ctx) return;

        // Forzar dimensiones para iOS - esperar a que el contenedor esté visible
        const wrapper = ctx.parentElement;
        const ensureDimensions = () => {
            const wrapperRect = wrapper.getBoundingClientRect();
            const width = wrapperRect.width || wrapper.offsetWidth || 300;
            const height = 300;
            
            ctx.style.width = width + 'px';
            ctx.style.height = height + 'px';
            ctx.style.display = 'block';
            
            if (this.isIOS) {
                ctx.setAttribute('width', width);
                ctx.setAttribute('height', height);
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                ctx.width = width * dpr;
                ctx.height = height * dpr;
                const ctx2d = ctx.getContext('2d');
                if (ctx2d) {
                    ctx2d.scale(dpr, dpr);
                }
            }
        };
        
        // Esperar a que el elemento esté visible
        if (wrapper.offsetWidth > 0) {
            ensureDimensions();
        } else {
            setTimeout(ensureDimensions, 100);
        }

        // Destruir gráfico anterior si existe
        if (this.charts.weeklyCalories) {
            this.charts.weeklyCalories.destroy();
        }

        this.charts.weeklyCalories = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Calorías (kcal)',
                    data: caloriasPorDia,
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                devicePixelRatio: this.isIOS ? 2 : window.devicePixelRatio || 1,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return `Calorías: ${context.parsed.y} kcal`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + ' kcal';
                            },
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });

        // Forzar resize para iOS
        if (this.isIOS) {
            setTimeout(() => {
                this.charts.weeklyCalories.resize();
            }, 100);
        }
    }

    // Gráfico de líneas: Distribución de macronutrientes por comida
    renderMacrosByMealChart(planSemana) {
        const container = document.getElementById('dashboard-visual');
        if (!container) return;

        let chartContainer = document.getElementById('macros-by-meal-chart');
        if (!chartContainer) {
            chartContainer = document.createElement('div');
            chartContainer.id = 'macros-by-meal-chart';
            chartContainer.className = 'chart-container card-modern';
            container.appendChild(chartContainer);
        }

        // Calcular promedios por comida
        const comidas = ['Desayuno', 'Media Mañana', 'Comida', 'Merienda', 'Cena'];
        const comidaKeys = ['desayuno', 'medioDia', 'almuerzo', 'merienda', 'cena'];
        
        const proteinas = [];
        const carbohidratos = [];
        const grasas = [];

        comidas.forEach((_, index) => {
            let totalProt = 0, totalCarb = 0, totalGras = 0;
            let count = 0;

            planSemana.slice(0, 7).forEach(dia => {
                const comida = dia.comidas?.[comidaKeys[index]];
                if (comida) {
                    totalProt += comida.proteinas || 0;
                    totalCarb += comida.carbohidratos || 0;
                    totalGras += comida.grasas || 0;
                    count++;
                }
            });

            proteinas.push(count > 0 ? Math.round(totalProt / count) : 0);
            carbohidratos.push(count > 0 ? Math.round(totalCarb / count) : 0);
            grasas.push(count > 0 ? Math.round(totalGras / count) : 0);
        });

        chartContainer.innerHTML = `
            <h3 class="chart-title">🍽️ Macronutrientes por Comida (Promedio Semanal)</h3>
            <div class="chart-wrapper" style="position: relative; height: 300px; width: 100%;">
                <canvas id="macrosByMealChart"></canvas>
            </div>
        `;

        const ctx = document.getElementById('macrosByMealChart');
        if (!ctx) return;

        // Forzar dimensiones para iOS - esperar a que el contenedor esté visible
        const wrapper = ctx.parentElement;
        const ensureDimensions = () => {
            const wrapperRect = wrapper.getBoundingClientRect();
            const width = wrapperRect.width || wrapper.offsetWidth || 300;
            const height = 300;
            
            ctx.style.width = width + 'px';
            ctx.style.height = height + 'px';
            ctx.style.display = 'block';
            
            if (this.isIOS) {
                ctx.setAttribute('width', width);
                ctx.setAttribute('height', height);
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                ctx.width = width * dpr;
                ctx.height = height * dpr;
                const ctx2d = ctx.getContext('2d');
                if (ctx2d) {
                    ctx2d.scale(dpr, dpr);
                }
            }
        };
        
        // Esperar a que el elemento esté visible
        if (wrapper.offsetWidth > 0) {
            ensureDimensions();
        } else {
            setTimeout(ensureDimensions, 100);
        }

        if (this.charts.macrosByMeal) {
            this.charts.macrosByMeal.destroy();
        }

        this.charts.macrosByMeal = new Chart(ctx, {
            type: 'line',
            data: {
                labels: comidas,
                datasets: [
                    {
                        label: 'Proteínas (g)',
                        data: proteinas,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    },
                    {
                        label: 'Carbohidratos (g)',
                        data: carbohidratos,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    },
                    {
                        label: 'Grasas (g)',
                        data: grasas,
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(255, 206, 86, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                devicePixelRatio: this.isIOS ? 2 : window.devicePixelRatio || 1,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });

        if (this.isIOS) {
            setTimeout(() => {
                this.charts.macrosByMeal.resize();
            }, 100);
        }
    }

    // Detectar si es móvil (iPhone/iPad)
    isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
               (window.innerWidth <= 768);
    }

    // Renderizar todos los gráficos avanzados
    renderAllCharts(macros, calorias, planSemana) {
        if (!planSemana || planSemana.length === 0) {
            console.warn('⚠️ No hay datos del plan para renderizar gráficos');
            return;
        }

        // En móviles (iPhone/iPad), solo mostrar el gráfico circular, no los gráficos avanzados
        if (this.isMobileDevice()) {
            console.log('📱 Dispositivo móvil detectado - ocultando gráficos avanzados');
            // Ocultar contenedores de gráficos avanzados si existen
            const kpiContainer = document.getElementById('kpi-cards-container');
            const weeklyChart = document.getElementById('weekly-calories-chart');
            const macrosByMealChart = document.getElementById('macros-by-meal-chart');
            
            if (kpiContainer) kpiContainer.style.display = 'none';
            if (weeklyChart) weeklyChart.style.display = 'none';
            if (macrosByMealChart) macrosByMealChart.style.display = 'none';
            
            return; // No renderizar gráficos avanzados en móviles
        }

        // Crear KPI cards solo en desktop
        this.createKPICards(macros, calorias);

        // Renderizar gráficos después de un pequeño delay para asegurar que el DOM esté listo
        // Usar requestAnimationFrame para mejor rendimiento en móviles
        requestAnimationFrame(() => {
            setTimeout(() => {
                this.renderWeeklyCaloriesChart(planSemana);
                this.renderMacrosByMealChart(planSemana);
            }, 300);
        });
    }

    // Limpiar todos los gráficos
    destroyAll() {
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.charts = {};
    }
}

// Inicializar instancia global
window.advancedCharts = new AdvancedCharts();

