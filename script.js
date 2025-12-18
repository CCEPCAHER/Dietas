
// Variables globales
let datosUsuario = {};
window.datosUsuario = datosUsuario; // Exportar para uso en otros módulos

/**
 * Actualiza la referencia global de datos del usuario asegurando que
 * tanto la variable local `datosUsuario` como `window.datosUsuario`
 * apunten al mismo objeto. Se usa cuando los datos provienen de otras
 * fuentes (por ejemplo, al cargar una dieta guardada).
 * @param {object} nuevosDatos
 */
window.actualizarDatosUsuarioGlobal = function (nuevosDatos = {}) {
    datosUsuario = { ...nuevosDatos };
    window.datosUsuario = datosUsuario;
    return datosUsuario;
};

/**
 * Sincroniza el plan semanal que se está editando en la tabla manual con
 * el objeto `datosUsuario`, asegurando que al guardar o exportar se
 * persistan los cambios realizados en cada día.
 */
function sincronizarPlanManualConDatosUsuario() {
    if (!window.tablaEditable) {
        return;
    }

    try {
        // Asegurar que existe la estructura planSemana
        if (!window.tablaEditable.planSemana) {
            window.tablaEditable.planSemana = {};
        }

        // Guardar el día actualmente visible antes de clonar datos
        if (typeof window.tablaEditable.obtenerDatos === 'function' && window.tablaEditable.diaActual) {
            window.tablaEditable.planSemana[window.tablaEditable.diaActual] = window.tablaEditable.obtenerDatos();
        }

        // Clonar en profundidad para evitar referencias compartidas
        const planClonado = JSON.parse(JSON.stringify(window.tablaEditable.planSemana));
        datosUsuario.planSemana = planClonado;
        datosUsuario.modoGeneracion = 'manual';
        window.datosUsuario = datosUsuario;
        actualizarEstructuraPlanExport();
    } catch (error) {
        console.error('⚠️ Error al sincronizar el plan manual con datosUsuario:', error);
    }
}

window.sincronizarPlanManualConDatosUsuario = sincronizarPlanManualConDatosUsuario;

function calcularMacronutrientes() {
    // Usar el módulo refactorizado de cálculos de macronutrientes
    if (!window.MacronutrientesCalculator) {
        console.error('MacronutrientesCalculator no está disponible');
        return;
    }

    // Obtener referencias a elementos del formulario
    const formulario = {
        edad: document.getElementById('edad'),
        sexo: document.getElementById('sexo'),
        altura: document.getElementById('altura'),
        peso: document.getElementById('peso'),
        objetivo: document.getElementById('objetivo'),
        tipoPersona: document.getElementById('tipoPersona'),
        actividadFisicaDeporte: document.getElementById('actividadFisicaDeporte'),
        tipoTermogenico: document.getElementById('tipoTermogenico'),
        superavitEntreno: document.getElementById('superavitEntreno'),
        superavitDescanso: document.getElementById('superavitDescanso')
    };

    // Calcular usando el módulo refactorizado
    datosUsuario = window.MacronutrientesCalculator.calcularMacronutrientes(datosUsuario, formulario);

    // Actualizar referencia global
    window.datosUsuario = datosUsuario;

    // Actualizar campos del formulario
    const calorias = datosUsuario.calorias || 0;
    const proteinas = datosUsuario.proteinas || 0;
    const grasas = datosUsuario.grasas || 0;
    const carbohidratos = datosUsuario.carbohidratos || 0;

    document.getElementById('calorias').value = calorias;
    document.getElementById('proteinas').value = proteinas;
    document.getElementById('grasas').value = grasas;
    document.getElementById('carbohidratos').value = carbohidratos;

    // Actualizar gráficos si están visibles
    // COMENTADO: Gráficos eliminados por problemas en móviles/tablets
    // actualizarGraficosMacronutrientes();
}

// Función para actualizar los gráficos cuando cambian los macronutrientes
// COMENTADO: Gráficos eliminados por problemas en móviles/tablets
function actualizarGraficosMacronutrientes() {
    // Función deshabilitada - gráficos eliminados
    return;
    /*
    // Solo actualizar si los resultados están visibles
    const resultadosDiv = document.getElementById('resultados');
    if (!resultadosDiv || resultadosDiv.classList.contains('oculto')) {
        return; // Los gráficos no están visibles, no actualizar
    }
    
    const macros = {
        proteinas: datosUsuario.proteinas || 0,
        grasas: datosUsuario.grasas || 0,
        carbohidratos: datosUsuario.carbohidratos || 0
    };
    
    const calorias = datosUsuario.calorias || 0;
    
    // Actualizar gráfico circular de macronutrientes
    if (window.statisticsManager) {
        const dashboardVisual = document.getElementById('dashboard-visual');
        if (dashboardVisual && dashboardVisual.style.display !== 'none') {
            // Si tenemos objetivos específicos por día (entreno/descanso), calculamos un promedio visual
            let macrosParaGrafico = { ...macros };
            if (datosUsuario.objetivosNutricionales && datosUsuario.objetivosNutricionales.entreno) {
                const entreno = datosUsuario.objetivosNutricionales.entreno;
                const descanso = datosUsuario.objetivosNutricionales.descanso;
                
                // Promedio simple para visualización general
                macrosParaGrafico.proteinas = Math.round((entreno.proteinas + descanso.proteinas) / 2);
                macrosParaGrafico.grasas = Math.round((entreno.grasas + descanso.grasas) / 2);
                macrosParaGrafico.carbohidratos = Math.round((entreno.carbohidratos + descanso.carbohidratos) / 2);
            }
            
            window.statisticsManager.renderMacrosChart(macrosParaGrafico);
        }
    }
    
    // Actualizar KPI cards si están disponibles (solo en desktop)
    if (window.advancedCharts && !window.advancedCharts.isMobileDevice()) {
        const kpiContainer = document.getElementById('kpi-cards-container');
        if (kpiContainer) {
            window.advancedCharts.createKPICards(macros, calorias);
        }
    }
    
    // Actualizar otros gráficos avanzados si hay plan generado
    if (window.advancedCharts && window.planSemanaGenerado && window.planSemanaGenerado.length > 0) {
        setTimeout(() => {
            window.advancedCharts.renderAllCharts(macros, calorias, window.planSemanaGenerado);
        }, 100);
    }
    */
}

// Hacer función global para uso desde otros módulos
window.mostrarResultados = function () {
    try {
        const resultadosDiv = document.getElementById('resultados');

        if (!resultadosDiv) {
            console.error('❌ Elemento resultados no encontrado');
            return;
        }

        const fechaHoy = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const fechaGenElem = document.getElementById('fecha-generacion');
        if (fechaGenElem) {
            fechaGenElem.textContent = fechaHoy;
        }

        // Ejecutar funciones con manejo de errores individual
        try {
            mostrarTablaMacros();
        } catch (error) {
            console.error('Error en mostrarTablaMacros:', error);
        }

        try {
            mostrarInfoUsuario();
        } catch (error) {
            console.error('Error en mostrarInfoUsuario:', error);
        }

        try {
            mostrarDistribucionEntrenos();
        } catch (error) {
            console.error('Error en mostrarDistribucionEntrenos:', error);
        }

        try {
            mostrarCalculosDetallados();
        } catch (error) {
            console.error('Error en mostrarCalculosDetallados:', error);
        }

        // Actualizar Gráfico de Dashboard
        // COMENTADO: Gráficos eliminados por problemas en móviles/tablets
        /*
        try {
            const dashboardVisual = document.getElementById('dashboard-visual');
            if (dashboardVisual && window.statisticsManager) {
                // Mostrar el dashboard primero
                dashboardVisual.style.display = 'block';
                dashboardVisual.style.visibility = 'visible';
                dashboardVisual.style.opacity = '1';
                
                // Obtener datos promedio para el gráfico
                const macros = {
                    proteinas: datosUsuario.proteinas || 0,
                    grasas: datosUsuario.grasas || 0,
                    carbohidratos: datosUsuario.carbohidratos || 0
                };
                
                // Si tenemos objetivos específicos por día (entreno/descanso), calculamos un promedio visual
                if (datosUsuario.objetivosNutricionales && datosUsuario.objetivosNutricionales.entreno) {
                    const entreno = datosUsuario.objetivosNutricionales.entreno;
                    const descanso = datosUsuario.objetivosNutricionales.descanso;
                    
                    // Promedio simple para visualización general
                    macros.proteinas = Math.round((entreno.proteinas + descanso.proteinas) / 2);
                    macros.grasas = Math.round((entreno.grasas + descanso.grasas) / 2);
                    macros.carbohidratos = Math.round((entreno.carbohidratos + descanso.carbohidratos) / 2);
                }
                
                // Esperar un momento para que el DOM se actualice antes de renderizar el gráfico
                setTimeout(() => {
                    window.statisticsManager.renderMacrosChart(macros);
                }, 100);
                
                // Renderizar gráficos avanzados si están disponibles
                if (window.advancedCharts && datosUsuario.planSemana) {
                    const calorias = datosUsuario.calorias || 0;
                    setTimeout(() => {
                        window.advancedCharts.renderAllCharts(macros, calorias, datosUsuario.planSemanaArray || []);
                    }, 500);
                }
            }
        } catch (error) {
            console.error('Error al renderizar gráfico:', error);
        }
        */

        try {
            mostrarMacronutrientesDistribucion();
        } catch (error) {
            console.error('Error en mostrarMacronutrientesDistribucion:', error);
        }

        try {
            mostrarPlanAlimentacion();

            // Después de mostrar el plan, renderizar gráficos avanzados
            // COMENTADO: Gráficos eliminados por problemas en móviles/tablets
            /*
            if (window.advancedCharts && window.planSemanaGenerado) {
                datosUsuario.planSemanaArray = window.planSemanaGenerado;
                
                setTimeout(() => {
                    const macros = {
                        proteinas: datosUsuario.proteinas || 0,
                        grasas: datosUsuario.grasas || 0,
                        carbohidratos: datosUsuario.carbohidratos || 0
                    };
                    const calorias = datosUsuario.calorias || 0;
                    window.advancedCharts.renderAllCharts(macros, calorias, window.planSemanaGenerado);
                }, 800);
            }
            */
        } catch (error) {
            console.error('Error en mostrarPlanAlimentacion:', error);
            // Si hay error, mostrar mensaje de error en el div
            const planDiv = document.getElementById('plan-alimentacion');
            if (planDiv) {
                planDiv.innerHTML = `
                    <div class="mensaje-error-modulo">
                        <h3>⚠️ Error al mostrar el plan</h3>
                        <p>Hubo un problema al cargar el plan de alimentación.</p>
                        <p style="margin-top: 10px; font-size: 12px; color: #666;">
                            Error: ${error.message}
                        </p>
                    </div>
                `;
            }
        }

        try {
            mostrarProhibiciones();
        } catch (error) {
            console.error('Error en mostrarProhibiciones:', error);
        }

        resultadosDiv.classList.remove('oculto');

        setTimeout(() => {
            try {
                window.inicializarBotones();
            } catch (error) {
                console.error('Error en inicializarBotones:', error);
            }
        }, 100);

        if (window.toastManager) {
            window.toastManager.success('Plan de alimentación generado correctamente', '¡Listo!');
        } else if (window.mostrarNotificacion) {
            mostrarNotificacion('✅ Plan de alimentación generado correctamente', 'success');
        }
    } catch (error) {
        console.error('❌ Error crítico en mostrarResultados:', error);
        if (window.toastManager) {
            window.toastManager.error('Error al mostrar resultados: ' + error.message);
        } else if (window.mostrarNotificacion) {
            mostrarNotificacion('❌ Error al mostrar resultados: ' + error.message, 'error');
        }
    }
};

// Alias para compatibilidad
const mostrarResultados = window.mostrarResultados;

// Funciones de visualización de tablas refactorizadas al módulo UIRenderer
function mostrarTablaMacros() {
    if (window.UIRenderer) {
        window.UIRenderer.mostrarTablaMacros(datosUsuario);
    } else {
        console.error('UIRenderer no está disponible');
    }
}

function obtenerConsumidoActual() {
    return window.UIRenderer ? window.UIRenderer.obtenerConsumidoActual() : { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
}

function obtenerEstadoMacro(consumido, objetivo) {
    return window.UIRenderer ? window.UIRenderer.obtenerEstadoMacro(consumido, objetivo) : '<span style="color:#999;">-</span>';
}

function actualizarConsumidoEnTabla() {
    if (window.UIRenderer) {
        window.UIRenderer.actualizarConsumidoEnTabla();
    }
}

function colorearFilaMacro(rowId, consumido, objetivo) {
    if (window.UIRenderer) {
        window.UIRenderer.colorearFilaMacro(rowId, consumido, objetivo);
    }
}

function configurarActualizacionMacros() {
    if (window.UIRenderer) {
        window.UIRenderer.configurarActualizacionMacros();
    }
}

function ajustarMacroManual(macro, valor) {
    const numValor = parseFloat(valor);
    if (isNaN(numValor) || numValor < 0) {
        alert('Por favor introduce un valor numérico válido');
        return;
    }

    // Guardar valores actuales antes de modificar
    const caloriasActuales = datosUsuario.calorias || 0;
    const proteinasActuales = datosUsuario.proteinas || 0;
    const grasasActuales = datosUsuario.grasas || 0;
    const carbohidratosActuales = datosUsuario.carbohidratos || 0;

    // Calcular calorías actuales de cada macro
    const caloriasProteinas = proteinasActuales * 4;
    const caloriasGrasas = grasasActuales * 9;
    const caloriasCarbohidratos = carbohidratosActuales * 4;
    const caloriasTotalesMacros = caloriasProteinas + caloriasGrasas + caloriasCarbohidratos;

    // Actualizar el valor seleccionado
    const seleccionadoElem = document.getElementById(`seleccionado-${macro}`);

    if (macro === 'calorias') {
        // Si se editan las calorías, ajustar proporcionalmente todos los macros
        seleccionadoElem.textContent = Math.round(numValor) + ' kcal';
        datosUsuario.calorias = Math.round(numValor);

        // Calcular factor de ajuste
        const factorAjuste = caloriasTotalesMacros > 0 ? numValor / caloriasTotalesMacros : 1;

        // Ajustar proporcionalmente cada macro
        datosUsuario.proteinas = Math.round((proteinasActuales * factorAjuste) * 10) / 10;
        datosUsuario.grasas = Math.round((grasasActuales * factorAjuste) * 10) / 10;
        datosUsuario.carbohidratos = Math.round((carbohidratosActuales * factorAjuste) * 10) / 10;

        // Actualizar visualización de otros macros
        const protElem = document.getElementById('seleccionado-proteinas');
        const grasElem = document.getElementById('seleccionado-grasas');
        const carbElem = document.getElementById('seleccionado-carbohidratos');
        const protInput = document.getElementById('ajuste-proteinas');
        const grasInput = document.getElementById('ajuste-grasas');
        const carbInput = document.getElementById('ajuste-carbohidratos');

        if (protElem) protElem.textContent = datosUsuario.proteinas.toFixed(1) + 'g';
        if (grasElem) grasElem.textContent = datosUsuario.grasas.toFixed(1) + 'g';
        if (carbElem) carbElem.textContent = datosUsuario.carbohidratos.toFixed(1) + 'g';
        if (protInput) protInput.value = datosUsuario.proteinas.toFixed(1);
        if (grasInput) grasInput.value = datosUsuario.grasas.toFixed(1);
        if (carbInput) carbInput.value = datosUsuario.carbohidratos.toFixed(1);

        // Recalcular porcentajes
        actualizarPorcentajesMacros();
    } else {
        // Si se edita un macro específico, recalcular los otros para mantener el balance
        seleccionadoElem.textContent = numValor.toFixed(1) + 'g';
        datosUsuario[macro] = numValor;

        // Calcular calorías del macro editado
        let caloriasMacroEditado = 0;
        if (macro === 'proteinas') {
            caloriasMacroEditado = numValor * 4;
        } else if (macro === 'grasas') {
            caloriasMacroEditado = numValor * 9;
        } else if (macro === 'carbohidratos') {
            caloriasMacroEditado = numValor * 4;
        }

        // Calcular calorías restantes para distribuir entre los otros dos macros
        const caloriasRestantes = caloriasActuales - caloriasMacroEditado;

        // Obtener porcentajes actuales (sin el macro editado)
        const porcentajeCarbs = datosUsuario.porcentajeCarbs || 50;
        const porcentajeGrasas = datosUsuario.porcentajeGrasas || 30;
        const porcentajeProteinas = datosUsuario.porcentajeProteinas || 20;

        // Calcular porcentajes relativos de los otros dos macros
        let porcentajeOtro1 = 0;
        let porcentajeOtro2 = 0;
        let macroOtro1 = '';
        let macroOtro2 = '';

        if (macro === 'proteinas') {
            // Ajustar grasas y carbohidratos
            const totalPorcentaje = porcentajeGrasas + porcentajeCarbs;
            if (totalPorcentaje > 0) {
                porcentajeOtro1 = (porcentajeGrasas / totalPorcentaje) * 100;
                porcentajeOtro2 = (porcentajeCarbs / totalPorcentaje) * 100;
            } else {
                porcentajeOtro1 = 50;
                porcentajeOtro2 = 50;
            }
            macroOtro1 = 'grasas';
            macroOtro2 = 'carbohidratos';
        } else if (macro === 'grasas') {
            // Ajustar proteínas y carbohidratos
            const totalPorcentaje = porcentajeProteinas + porcentajeCarbs;
            if (totalPorcentaje > 0) {
                porcentajeOtro1 = (porcentajeProteinas / totalPorcentaje) * 100;
                porcentajeOtro2 = (porcentajeCarbs / totalPorcentaje) * 100;
            } else {
                porcentajeOtro1 = 50;
                porcentajeOtro2 = 50;
            }
            macroOtro1 = 'proteinas';
            macroOtro2 = 'carbohidratos';
        } else if (macro === 'carbohidratos') {
            // Ajustar proteínas y grasas
            const totalPorcentaje = porcentajeProteinas + porcentajeGrasas;
            if (totalPorcentaje > 0) {
                porcentajeOtro1 = (porcentajeProteinas / totalPorcentaje) * 100;
                porcentajeOtro2 = (porcentajeGrasas / totalPorcentaje) * 100;
            } else {
                porcentajeOtro1 = 50;
                porcentajeOtro2 = 50;
            }
            macroOtro1 = 'proteinas';
            macroOtro2 = 'grasas';
        }

        // Distribuir calorías restantes proporcionalmente
        const caloriasOtro1 = (caloriasRestantes * porcentajeOtro1) / 100;
        const caloriasOtro2 = (caloriasRestantes * porcentajeOtro2) / 100;

        // Convertir calorías a gramos
        let gramosOtro1 = 0;
        let gramosOtro2 = 0;

        if (macroOtro1 === 'proteinas' || macroOtro1 === 'carbohidratos') {
            gramosOtro1 = caloriasOtro1 / 4;
        } else {
            gramosOtro1 = caloriasOtro1 / 9;
        }

        if (macroOtro2 === 'proteinas' || macroOtro2 === 'carbohidratos') {
            gramosOtro2 = caloriasOtro2 / 4;
        } else {
            gramosOtro2 = caloriasOtro2 / 9;
        }

        // Actualizar valores
        datosUsuario[macroOtro1] = Math.round(gramosOtro1 * 10) / 10;
        datosUsuario[macroOtro2] = Math.round(gramosOtro2 * 10) / 10;

        // Actualizar visualización de otros macros
        const otro1Elem = document.getElementById(`seleccionado-${macroOtro1}`);
        const otro2Elem = document.getElementById(`seleccionado-${macroOtro2}`);
        const otro1Input = document.getElementById(`ajuste-${macroOtro1}`);
        const otro2Input = document.getElementById(`ajuste-${macroOtro2}`);

        if (otro1Elem) otro1Elem.textContent = datosUsuario[macroOtro1].toFixed(1) + 'g';
        if (otro2Elem) otro2Elem.textContent = datosUsuario[macroOtro2].toFixed(1) + 'g';
        if (otro1Input) otro1Input.value = datosUsuario[macroOtro1].toFixed(1);
        if (otro2Input) otro2Input.value = datosUsuario[macroOtro2].toFixed(1);

        // Recalcular porcentajes
        actualizarPorcentajesMacros();
    }

    // Actualizar gráficos
    // COMENTADO: Gráficos eliminados por problemas en móviles/tablets
    // if (typeof actualizarGraficosMacronutrientes === 'function') {
    //     actualizarGraficosMacronutrientes();
    // }

    // Notificar cambio
    console.log(`✅ Macro ${macro} ajustado a: ${numValor}`);
    console.log(`📊 Nuevos valores:`, {
        calorias: datosUsuario.calorias,
        proteinas: datosUsuario.proteinas,
        grasas: datosUsuario.grasas,
        carbohidratos: datosUsuario.carbohidratos
    });

    // Opcional: mostrar notificación visual
    if (window.mostrarNotificacion) {
        window.mostrarNotificacion(`✅ ${macro} ajustado a ${numValor}${macro === 'calorias' ? ' kcal' : 'g'}. Los otros macros se han balanceado automáticamente.`, 'success');
    }
}

function actualizarPorcentajesMacros() {
    // Recalcular porcentajes cuando cambian las calorías
    const { calorias, proteinas, grasas, carbohidratos } = datosUsuario;

    if (calorias > 0) {
        const proteinasPercent = Math.round((proteinas * 4 / calorias) * 100);
        const grasasPercent = Math.round((grasas * 9 / calorias) * 100);
        const carbohidratosPercent = Math.round((carbohidratos * 4 / calorias) * 100);

        // Actualizar en la tabla
        const filas = {
            'macro-proteinas': proteinasPercent,
            'macro-grasas': grasasPercent,
            'macro-carbohidratos': carbohidratosPercent
        };

        Object.entries(filas).forEach(([rowId, percent]) => {
            const row = document.getElementById(rowId);
            if (row) {
                const cell = row.querySelector('td:nth-child(5)');
                if (cell) cell.textContent = percent + '%';
            }
        });
    }
}

function mostrarInfoUsuario() {
    const tbody = document.getElementById('tabla-info-body');
    const {
        nombre, fechaRegistro, sexo, edad, peso, altura, tipoPersona,
        actividadFisicaDeporte, tipoTermogenico, objetivo
    } = datosUsuario;

    // Validar que tipoPersona exista
    const tipoPersonaFormateado = tipoPersona ? (tipoPersona.charAt(0).toUpperCase() + tipoPersona.slice(1).replace('-', ' ')) : 'No especificado';

    // Formatear sexo
    const sexoFormateado = sexo === 'masculino' ? 'Hombre' : (sexo === 'femenino' ? 'Mujer' : sexo);

    // Formatear fecha
    const fechaFormateada = fechaRegistro ? new Date(fechaRegistro).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    }) : '';

    // Formatear peso (usar coma para decimales como en Excel)
    const pesoFormateado = peso ? `${parseFloat(peso).toFixed(1).replace('.', ',')} kg` : '';

    // Formatear altura
    const alturaFormateada = altura ? `${altura} cm` : '';

    // Mapeo de descripciones de actividad física
    const descActividad = {
        'sedentario': 'Sedentario: trabajo de escritorio sin ejercicio',
        'ligera': 'Actividad ligera: 1-3 días de entrenamiento semanal o trabajo físico',
        'moderada': 'Actividad moderada: 3-5 días de entrenamiento semanal.',
        'intensa': 'Actividad intensa: 6-7 días de entrenamiento semanal',
        'muy-intensa': 'Actividad muy intensa: doble entrenamiento diario + ejercicios de gran demanda de fuerza'
    };

    // Mapeo de descripciones de efecto termogénico
    const descTermogenico = {
        'sedentaria': 'Persona sedentaria: 10%',
        'no-sedentaria': 'Persona no sedentaria: 15%',
        'culturista': 'Culturista en estado de competición: 20%'
    };

    // Mapeo de objetivos
    const descObjetivo = {
        'aumentar': 'Ganar masa muscular',
        'adelgazar': 'Perder grasa',
        'perder peso': 'Perder grasa',
        'mantener': 'Mantener peso'
    };

    tbody.innerHTML = `
        <tr>
            <td>${nombre || 'Nombre'}</td>
            <td>${fechaFormateada}</td>
            <td>${sexoFormateado}</td>
            <td>${edad || ''}</td>
            <td>${pesoFormateado}</td>
            <td>${alturaFormateada}</td>
            <td>${tipoPersonaFormateado}</td>
            <td>${descActividad[actividadFisicaDeporte] || actividadFisicaDeporte || 'No especificado'}</td>
            <td>${descTermogenico[tipoTermogenico] || 'Persona no sedentaria: 15%'}</td>
            <td>${descObjetivo[objetivo] || objetivo || 'No especificado'}</td>
        </tr>
    `;

    // Agregar calculadora TMB visual después de la tabla
    const tmbContainer = document.getElementById('tmb-calculator');
    if (tmbContainer) {
        // Obtener TMB de datosUsuario
        const tmb = datosUsuario.tmb || 0;

        // Verificar que tmb esté disponible antes de mostrar
        if (!tmb || tmb === 0) {
            tmbContainer.innerHTML = '';
            return;
        }

        // Definir factores de actividad si no están definidos
        const factoresActividad = {
            'sedentaria': { factor: 1.2, desc: 'Sedentaria: poco o ningún ejercicio' },
            'activa': { factor: 1.375, desc: 'Activa: ejercicio ligero 1-3 días/semana' },
            'muy-activa': { factor: 1.55, desc: 'Muy activa: ejercicio moderado 3-5 días/semana' }
        };

        let tmbHTML = `
            <div class="tmb-section">
                <h3>📊 Calculadora de Metabolismo Basal (TMB)</h3>
                <div class="tmb-result">
                    <div class="tmb-value">
                        <span class="tmb-label">Tu TMB es:</span>
                        <span class="tmb-number">${tmb}</span>
                        <span class="tmb-unit">kcal/día</span>
                    </div>
                    <p class="tmb-description">Esta es la cantidad mínima de calorías que tu cuerpo necesita en reposo para funciones vitales.</p>
                </div>
                <div class="gasto-calorico">
                    <h4>Gasto Calórico Total Estimado (TDEE)</h4>
                    <div class="actividad-grid">`;

        Object.keys(factoresActividad).forEach(key => {
            const { factor, desc } = factoresActividad[key];
            const tdee = Math.round(tmb * factor);
            tmbHTML += `
                <div class="actividad-card">
                    <div class="actividad-nivel">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    <div class="actividad-desc">${desc}</div>
                    <div class="actividad-tdee">${tdee} kcal/día</div>
                </div>`;
        });

        tmbHTML += `
                    </div>
                    <p class="tmb-note">💡 Tu plan nutricional está ajustado según tu objetivo y nivel de actividad.</p>
                </div>
            </div>`;

        tmbContainer.innerHTML = tmbHTML;
    }
}

function mostrarDistribucionEntrenos() {
    const tbody = document.getElementById('tabla-entrenos-body');
    if (!tbody) return;

    const diasEntreno = datosUsuario.diasEntreno || [];
    const diasSemana = [
        { nombre: 'Lunes', valor: 'lunes' },
        { nombre: 'Martes', valor: 'martes' },
        { nombre: 'Miércoles', valor: 'miercoles' },
        { nombre: 'Jueves', valor: 'jueves' },
        { nombre: 'Viernes', valor: 'viernes' },
        { nombre: 'Sábado', valor: 'sabado' },
        { nombre: 'Domingo', valor: 'domingo' }
    ];

    let html = '';
    diasSemana.forEach(dia => {
        const esEntreno = diasEntreno.includes(dia.valor);
        html += `
            <tr>
                <td style="font-weight: 600; padding: 8px;">${dia.nombre}</td>
                <td style="padding: 8px; background: ${esEntreno ? '#dbeafe' : '#f3f4f6'};">
                    ${esEntreno ? '🏋️ ENTRENO' : '😴 DESCANSO'}
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function mostrarCalculosDetallados() {
    const tbody = document.getElementById('tabla-calculos-body');
    if (!tbody) return;

    const {
        tmb, tef, porcentajeTEF, actividadFisicaDeporteKcal,
        gastoBaseEntreno, gastoBaseDescanso,
        superavitEntreno, superavitDescanso,
        superavitEntrenoKcal, superavitDescansoKcal,
        caloriasEntreno, caloriasDescanso,
        actividadFisicaDeporte, tipoTermogenico, objetivo
    } = datosUsuario;

    // Usar valores raw (positivos) para mostrar en UI, pero valores calculados para kcal
    const superavitEntrenoDisplay = superavitEntreno || 0;
    const superavitDescansoDisplay = superavitDescanso || 0;

    if (!tmb) return; // Si no hay cálculos, no mostrar

    // Determinar si es déficit o superávit según el objetivo
    const esDeficit = objetivo === 'adelgazar' || objetivo === 'perder peso' || objetivo === 'perder grasa';
    const etiquetaTipo = esDeficit ? 'Déficit' : 'Superávit';

    // Formatear valores con separadores de miles
    const formatearNumero = (num) => {
        if (!num && num !== 0) return '0';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    // Formatear valores de superávit/déficit (pueden ser negativos)
    const formatearSuperavitDeficit = (num) => {
        if (!num && num !== 0) return '0';
        const formateado = formatearNumero(Math.abs(num));
        return num < 0 ? `-${formateado}` : formateado;
    };

    // Obtener valores de superávit/déficit en kcal (pueden ser negativos si es déficit)
    const superavitEntrenoKcalValor = superavitEntrenoKcal || 0;
    const superavitDescansoKcalValor = superavitDescansoKcal || 0;

    const html = `
        <tr>
            <td style="font-weight: 600;">${etiquetaTipo} día de entreno</td>
            <td>${superavitEntrenoDisplay}%</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">${etiquetaTipo} día de descanso</td>
            <td>${superavitDescansoDisplay}%</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Metabolismo basal</td>
            <td style="font-weight: 700;">${formatearNumero(tmb)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Efecto termogénico de los alimentos</td>
            <td>${formatearNumero(tef)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Actividad física del deporte</td>
            <td>${formatearNumero(actividadFisicaDeporteKcal)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Total gasto calórico día de entreno</td>
            <td style="font-weight: 700;">${formatearNumero(gastoBaseEntreno)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Total gasto calórico día de descanso</td>
            <td style="font-weight: 700;">${formatearNumero(gastoBaseDescanso)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">${etiquetaTipo} día de entreno</td>
            <td>${formatearSuperavitDeficit(superavitEntrenoKcalValor)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">${etiquetaTipo} día de descanso</td>
            <td>${formatearSuperavitDeficit(superavitDescansoKcalValor)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Ingesta calórica total día de entreno</td>
            <td style="font-weight: 700;">${formatearNumero(caloriasEntreno)} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Ingesta calórica total día de descanso</td>
            <td style="font-weight: 700;">${formatearNumero(caloriasDescanso)} kcal</td>
        </tr>
    `;

    tbody.innerHTML = html;
}

function mostrarMacronutrientesDistribucion() {
    const tbody = document.getElementById('tabla-macros-distribucion-body');
    if (!tbody) return;

    const {
        carbsEntrenogkg, grasasEntrenogkg, proteinasEntrenogkg,
        carbsDescansogkg, grasasDescansogkg, proteinasDescansogkg,
        porcentajeCarbs = 50,
        porcentajeGrasas = 30,
        porcentajeProteinas = 20
    } = datosUsuario;

    if (!carbsEntrenogkg) return; // Si no hay cálculos, no mostrar

    // Verificar si los porcentajes suman 100%
    const totalPorcentaje = porcentajeCarbs + porcentajeGrasas + porcentajeProteinas;
    const sumaCorrecta = Math.abs(totalPorcentaje - 100) < 0.01; // Permitir pequeña diferencia por redondeo

    // Construir fila de advertencia si no suma 100%
    let filaAdvertencia = '';
    if (!sumaCorrecta) {
        filaAdvertencia = `
        <tr style="background-color: #fee; border: 2px solid #dc2626;">
            <td colspan="4" style="padding: 10px; text-align: center; font-weight: 700; color: #dc2626; font-size: 1.1em;">
                ⚠️ OJO, EL REPARTO DE MACRONUTRIENTES NO SUMA 100% (Suma actual: ${totalPorcentaje.toFixed(1)}%)
            </td>
        </tr>
        `;
    }

    // Formatear valores g/kg con comas para decimales (formato Excel)
    const formatearGkg = (valor) => {
        if (!valor && valor !== 0) return '0,00';
        const num = parseFloat(valor);
        return num.toFixed(2).replace('.', ',');
    };

    const html = `
        <tr>
            <td style="font-weight: 700; padding: 10px;">HIDRATOS</td>
            <td style="padding: 10px;">
                <input type="number" 
                       id="porcentaje-carbs" 
                       value="${porcentajeCarbs}" 
                       min="0" 
                       max="100" 
                       step="1"
                       style="width: 70px; padding: 5px; border: 2px solid #1e40af; border-radius: 4px; font-weight: 600; text-align: center;"
                       onchange="actualizarDistribucionMacros('carbs', this.value)">
                <span style="font-weight: 600;">%</span>
            </td>
            <td class="valor-entreno" style="padding: 10px; font-weight: 700; color: #1e40af;">${formatearGkg(carbsEntrenogkg)} g/kg</td>
            <td class="valor-descanso" style="padding: 10px; font-weight: 700; color: #374151;">${formatearGkg(carbsDescansogkg)} g/kg</td>
        </tr>
        <tr>
            <td style="font-weight: 700; padding: 10px;">GRASAS</td>
            <td style="padding: 10px;">
                <input type="number" 
                       id="porcentaje-grasas" 
                       value="${porcentajeGrasas}" 
                       min="0" 
                       max="100" 
                       step="1"
                       style="width: 70px; padding: 5px; border: 2px solid #dc2626; border-radius: 4px; font-weight: 600; text-align: center;"
                       onchange="actualizarDistribucionMacros('grasas', this.value)">
                <span style="font-weight: 600;">%</span>
            </td>
            <td class="valor-entreno" style="padding: 10px; font-weight: 700; color: #1e40af;">${formatearGkg(grasasEntrenogkg)} g/kg</td>
            <td class="valor-descanso" style="padding: 10px; font-weight: 700; color: #374151;">${formatearGkg(grasasDescansogkg)} g/kg</td>
        </tr>
        <tr>
            <td style="font-weight: 700; padding: 10px;">PROTEÍNAS</td>
            <td style="padding: 10px;">
                <input type="number" 
                       id="porcentaje-proteinas" 
                       value="${porcentajeProteinas}" 
                       min="0" 
                       max="100" 
                       step="1"
                       style="width: 70px; padding: 5px; border: 2px solid #059669; border-radius: 4px; font-weight: 600; text-align: center;"
                       onchange="actualizarDistribucionMacros('proteinas', this.value)">
                <span style="font-weight: 600;">%</span>
            </td>
            <td class="valor-entreno" style="padding: 10px; font-weight: 700; color: #1e40af;">${formatearGkg(proteinasEntrenogkg)} g/kg</td>
            <td class="valor-descanso" style="padding: 10px; font-weight: 700; color: #374151;">${formatearGkg(proteinasDescansogkg)} g/kg</td>
        </tr>
        ${filaAdvertencia}
    `;

    tbody.innerHTML = html;
}

// Función para actualizar la distribución de macronutrientes cuando se modifica manualmente el porcentaje
window.actualizarDistribucionMacros = function (tipo, valorPorcentaje) {
    const porcentaje = parseFloat(valorPorcentaje);

    if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        alert('Por favor introduce un porcentaje válido entre 0 y 100');
        // Restaurar valor anterior
        const valorAnterior = datosUsuario[`porcentaje${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`] ||
            (tipo === 'carbs' ? 50 : tipo === 'grasas' ? 30 : 20);
        document.getElementById(`porcentaje-${tipo}`).value = valorAnterior;
        return;
    }

    // Actualizar porcentaje en datosUsuario
    if (tipo === 'carbs') {
        datosUsuario.porcentajeCarbs = porcentaje;
    } else if (tipo === 'grasas') {
        datosUsuario.porcentajeGrasas = porcentaje;
    } else if (tipo === 'proteinas') {
        datosUsuario.porcentajeProteinas = porcentaje;
    }

    // Verificar que la suma de porcentajes sea razonable (permitir ajustes flexibles pero mostrar advertencia en visualización)
    const totalPorcentaje = datosUsuario.porcentajeCarbs + datosUsuario.porcentajeGrasas + datosUsuario.porcentajeProteinas;
    if (Math.abs(totalPorcentaje - 100) > 0.01) {
        console.warn(`Los porcentajes suman ${totalPorcentaje.toFixed(1)}%, que no es exactamente 100%. Se mostrará advertencia en la visualización.`);
    }

    // Obtener valores necesarios para recalcular
    const peso = datosUsuario.peso;
    const caloriasEntreno = datosUsuario.caloriasEntreno;
    const caloriasDescanso = datosUsuario.caloriasDescanso;

    if (!peso || !caloriasEntreno || !caloriasDescanso) {
        console.error('No se pueden recalcular los macronutrientes: faltan datos básicos');
        return;
    }

    // Convertir porcentajes a decimales
    const porcentajeCarbs = datosUsuario.porcentajeCarbs / 100;
    const porcentajeGrasas = datosUsuario.porcentajeGrasas / 100;
    const porcentajeProteinas = datosUsuario.porcentajeProteinas / 100;

    // Recalcular gramos desde calorías usando los nuevos porcentajes
    const carbsEntreno = Math.round((caloriasEntreno * porcentajeCarbs) / 4);
    const grasasEntreno = Math.round((caloriasEntreno * porcentajeGrasas) / 9);
    const proteinasEntreno = Math.round((caloriasEntreno * porcentajeProteinas) / 4);

    const carbsDescanso = Math.round((caloriasDescanso * porcentajeCarbs) / 4);
    const grasasDescanso = Math.round((caloriasDescanso * porcentajeGrasas) / 9);
    const proteinasDescanso = Math.round((caloriasDescanso * porcentajeProteinas) / 4);

    // Recalcular g/kg corporal
    const carbsEntrenogkg = (carbsEntreno / peso).toFixed(2);
    const grasasEntrenogkg = (grasasEntreno / peso).toFixed(2);
    const proteinasEntrenogkg = (proteinasEntreno / peso).toFixed(2);

    const carbsDescansogkg = (carbsDescanso / peso).toFixed(2);
    const grasasDescansogkg = (grasasDescanso / peso).toFixed(2);
    const proteinasDescansogkg = (proteinasDescanso / peso).toFixed(2);

    // Actualizar datosUsuario con los nuevos valores
    datosUsuario.carbsEntreno = carbsEntreno;
    datosUsuario.grasasEntreno = grasasEntreno;
    datosUsuario.proteinasEntreno = proteinasEntreno;
    datosUsuario.carbsEntrenogkg = carbsEntrenogkg;
    datosUsuario.grasasEntrenogkg = grasasEntrenogkg;
    datosUsuario.proteinasEntrenogkg = proteinasEntrenogkg;

    datosUsuario.carbsDescanso = carbsDescanso;
    datosUsuario.grasasDescanso = grasasDescanso;
    datosUsuario.proteinasDescanso = proteinasDescanso;
    datosUsuario.carbsDescansogkg = carbsDescansogkg;
    datosUsuario.grasasDescansogkg = grasasDescansogkg;
    datosUsuario.proteinasDescansogkg = proteinasDescansogkg;

    // Recalcular valores promedio para compatibilidad
    const numDiasEntreno = datosUsuario.diasEntreno?.length || 5;
    const numDiasDescanso = 7 - numDiasEntreno;
    datosUsuario.proteinas = Math.round((proteinasEntreno * numDiasEntreno + proteinasDescanso * numDiasDescanso) / 7);
    datosUsuario.grasas = Math.round((grasasEntreno * numDiasEntreno + grasasDescanso * numDiasDescanso) / 7);
    datosUsuario.carbohidratos = Math.round((carbsEntreno * numDiasEntreno + carbsDescanso * numDiasDescanso) / 7);

    // Actualizar la visualización
    mostrarMacronutrientesDistribucion();

    // Verificar el modo de generación para decidir cómo actualizar
    const modoGeneracion = datosUsuario.modoGeneracion || 'automatico';

    if (modoGeneracion === 'automatico') {
        // Si está en modo automático, regenerar completamente el plan con los nuevos macronutrientes
        if (typeof window.mostrarPlanAlimentacion === 'function') {
            window.mostrarPlanAlimentacion();
        }
        // Actualizar la visualización de macros en la tabla principal
        if (typeof window.mostrarTablaMacros === 'function') {
            window.mostrarTablaMacros();
        }
    } else if (modoGeneracion === 'manual' && window.tablaEditable) {
        // Si está en modo manual, actualizar objetivos y recalcular progreso
        // Actualizar la visualización de objetivos en la tabla editable
        if (typeof window.tablaEditable.actualizarObjetivosVisuales === 'function') {
            window.tablaEditable.actualizarObjetivosVisuales();
        }
        // Actualizar los totales diarios que dependen de los objetivos
        if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
            window.tablaEditable.actualizarTotalesDiarios();
        }
        // Recalcular el progreso de cada comida para que refleje los nuevos objetivos
        if (window.tablaEditable.datos) {
            // Iterar sobre todas las comidas y días para recalcular
            Object.keys(window.tablaEditable.datos).forEach(dia => {
                Object.keys(window.tablaEditable.datos[dia]).forEach(comida => {
                    const filas = window.tablaEditable.datos[dia][comida];
                    if (filas && filas.length > 0) {
                        // Recalcular el progreso de esta comida
                        if (typeof window.tablaEditable.actualizarProgresoComida === 'function') {
                            window.tablaEditable.actualizarProgresoComida(comida);
                        }
                    }
                });
            });
        }
        // Actualizar la visualización de macros en la tabla principal
        if (typeof window.mostrarTablaMacros === 'function') {
            window.mostrarTablaMacros();
        }
    }

    // Mostrar notificación según el modo
    if (window.mostrarNotificacion) {
        if (modoGeneracion === 'automatico') {
            window.mostrarNotificacion(`✅ Distribución de macronutrientes actualizada. El plan completo se ha regenerado con los nuevos valores.`, 'success');
        } else {
            window.mostrarNotificacion(`✅ Distribución de macronutrientes actualizada. Los objetivos se han recalculado.`, 'success');
        }
    }

    console.log(`✅ Distribución de macronutrientes actualizada:`, {
        porcentajeCarbs: datosUsuario.porcentajeCarbs + '%',
        porcentajeGrasas: datosUsuario.porcentajeGrasas + '%',
        porcentajeProteinas: datosUsuario.porcentajeProteinas + '%'
    });
};

function mostrarTablaEditable() {
    const planDiv = document.getElementById('plan-alimentacion');

    // Asegurar que tablaEditable esté inicializada - reintentar si no está disponible
    let intentos = 0;
    const maxIntentos = 5;

    const intentarInicializar = () => {
        if (!window.tablaEditable) {
            if (typeof window.inicializarTablaEditable === 'function') {
                console.log('Intentando inicializar TablaEditable...');
                window.inicializarTablaEditable();
            }

            if (!window.tablaEditable && intentos < maxIntentos) {
                intentos++;
                console.log(`Reintentando inicialización (${intentos}/${maxIntentos})...`);
                setTimeout(intentarInicializar, 200);
                return;
            }
        }

        if (!window.tablaEditable) {
            planDiv.innerHTML = `
                <div class="mensaje-error-modulo">
                    <h3>⚠️ Error: Módulo no disponible</h3>
                    <p>
                        El módulo de tabla editable no está cargado correctamente.
                    </p>
                    <p>
                        <strong>Solución:</strong> Recarga la página (Ctrl + F5)
                    </p>
                    <p style="margin-top: 10px; font-size: 12px; color: #666;">
                        Verifica la consola del navegador para más detalles.
                    </p>
                </div>
            `;
            console.error('❌ TablaEditable no está disponible después de', maxIntentos, 'intentos');
            console.error('Verifica que base-datos-alimentos.js esté cargado antes de tabla-editable.js');
            return;
        }

        // TablaEditable está disponible, continuar
        try {
            // Mostrar instrucciones y objetivos
            let html = `
                <div class="banner-modo-manual">
                    <h3>📝 Modo Manual Activado</h3>
                    <p>
                        <strong>Objetivos Nutricionales Diarios:</strong><br>
                        🔥 Calorías: ${datosUsuario.calorias || 0} kcal | 
                        💪 Proteínas: ${datosUsuario.proteinas || 0}g | 
                        🥑 Grasas: ${datosUsuario.grasas || 0}g | 
                        🍚 Hidratos: ${datosUsuario.carbohidratos || 0}g
                    </p>
                    <p>
                        Las tablas incluyen filas vacías para empezar. Escribe el nombre de un alimento para buscar
                        (mínimo 1 carácter). Los valores nutricionales se calcularán automáticamente.
                    </p>
                </div>
            `;

            // Generar la tabla editable
            if (typeof window.tablaEditable.generarTablaHTML === 'function') {
                html += window.tablaEditable.generarTablaHTML();
            } else {
                throw new Error('método generarTablaHTML no disponible');
            }

            planDiv.innerHTML = html;

            if (window.tablaEditable && typeof window.tablaEditable.actualizarSelectoresDia === 'function') {
                setTimeout(() => {
                    window.tablaEditable.actualizarSelectoresDia();
                }, 0);
            }

            // Inicializar tablas después de insertar el HTML
            setTimeout(() => {
                // Verificar si hay datos guardados de una dieta generada automáticamente
                if (datosUsuario.planSemana && Object.keys(datosUsuario.planSemana).length > 0) {
                    // Cargar datos guardados en TablaEditable
                    console.log('📋 Cargando dieta generada automáticamente para edición...', datosUsuario.planSemana);

                    // Marcar que este plan fue generado automáticamente y puede necesitar resetear estadísticas
                    window.tablaEditable.planGeneradoAutomatico = true;

                    // Cargar planSemana en tablaEditable
                    window.tablaEditable.planSemana = datosUsuario.planSemana;

                    // Cargar el primer día disponible
                    const dias = Object.keys(datosUsuario.planSemana);
                    if (dias.length > 0) {
                        const primerDia = dias[0];
                        window.tablaEditable.diaActual = primerDia;

                        // Actualizar selector de día
                        const selectorDia = document.getElementById('selector-dia');
                        const selectorDiaBottom = document.getElementById('selector-dia-bottom');
                        if (selectorDia) {
                            selectorDia.value = primerDia;
                        }
                        if (selectorDiaBottom) {
                            selectorDiaBottom.value = primerDia;
                        }

                        // Cargar datos del primer día
                        const datosDia = datosUsuario.planSemana[primerDia];
                        console.log('📋 Datos del día:', primerDia, datosDia);

                        if (datosDia && typeof window.tablaEditable.cargarDatos === 'function') {
                            // Esperar un poco más para asegurar que los elementos del DOM estén listos
                            setTimeout(() => {
                                // Cargar datos SIN actualizar totales todavía
                                // (los actualizaremos después de actualizar los estilos y objetivos)
                                window.tablaEditable.cargarDatos(datosDia, false);

                                // IMPORTANTE: Actualizar estilos del día ANTES de actualizar totales
                                // Esto asegura que los objetivos se actualicen correctamente antes de calcular el progreso
                                setTimeout(() => {
                                    // Actualizar estilos del día primero (badge, objetivos, etc.)
                                    if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                        window.tablaEditable.actualizarEstilosDia();
                                        console.log('✅ Estilos del día actualizados');
                                    }

                                    // Luego actualizar totales diarios (con los objetivos correctos)
                                    if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                        window.tablaEditable.actualizarTotalesDiarios();
                                        console.log('✅ Totales diarios actualizados');
                                    }

                                    console.log('✅ Dieta cargada correctamente para edición');

                                    // Mostrar estadísticas después de cargar los datos
                                    setTimeout(() => {
                                        mostrarEstadisticasPlanManual();
                                    }, 300);
                                }, 100);
                            }, 50);
                        } else {
                            // Si no hay datos para el primer día, inicializar tablas vacías y actualizar estilos
                            setTimeout(() => {
                                if (typeof window.tablaEditable.inicializarTablasVacias === 'function') {
                                    window.tablaEditable.inicializarTablasVacias(3);
                                }

                                // Actualizar estilos y totales
                                setTimeout(() => {
                                    if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                        window.tablaEditable.actualizarEstilosDia();
                                    }
                                    if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                        window.tablaEditable.actualizarTotalesDiarios();
                                    }
                                }, 100);
                            }, 50);
                        }

                        // Cargar todos los días de la semana
                        dias.forEach(dia => {
                            if (dia !== primerDia && datosUsuario.planSemana[dia]) {
                                window.tablaEditable.planSemana[dia] = datosUsuario.planSemana[dia];
                            }
                        });
                    }
                } else {
                    // Si no hay datos guardados, inicializar tablas vacías
                    console.log('📋 No hay datos guardados, inicializando tablas vacías');
                    if (typeof window.tablaEditable.inicializarTablasVacias === 'function') {
                        window.tablaEditable.inicializarTablasVacias(3); // 3 filas vacías por comida
                        console.log('✅ Tabla editable inicializada correctamente');

                        // IMPORTANTE: Actualizar estilos y totales después de inicializar
                        // Esto asegura que los objetivos y el badge se muestren correctamente desde el inicio
                        setTimeout(() => {
                            // Actualizar estilos del día (badge, objetivos, etc.)
                            if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                window.tablaEditable.actualizarEstilosDia();
                                console.log('✅ Estilos del día actualizados');
                            }

                            // Actualizar totales diarios (asegura que se muestren como 0 si no hay datos)
                            if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                window.tablaEditable.actualizarTotalesDiarios();
                                console.log('✅ Totales diarios actualizados');
                            }

                            // Mostrar estadísticas después de inicializar (aunque estén vacías)
                            setTimeout(() => {
                                mostrarEstadisticasPlanManual();
                            }, 300);
                        }, 150);
                    } else {
                        console.error('❌ Método inicializarTablasVacias no disponible');
                    }
                }
            }, 200);
        } catch (error) {
            console.error('Error al mostrar tabla editable:', error);
            planDiv.innerHTML = `
                <div class="mensaje-error-modulo">
                    <h3>⚠️ Error al generar tabla</h3>
                    <p>Error: ${error.message}</p>
                    <p>Recarga la página (Ctrl + F5) e intenta de nuevo.</p>
                </div>
            `;
        }
    };

    // Empezar intento de inicialización
    intentarInicializar();
}

// Función para generar estadísticas del plan con gráficos visuales
// Función para convertir planSemana de tablaEditable (objeto) al formato array que espera generarEstadisticasPlan
function convertirPlanSemanaParaEstadisticas(planSemanaObjeto) {
    if (!planSemanaObjeto || typeof planSemanaObjeto !== 'object') return [];

    // Mapeo de nombres de días (tablaEditable usa formato "Lunes", generarEstadisticasPlan espera "LUNES")
    const mapeoDias = {
        'Lunes': 'LUNES',
        'Martes': 'MARTES',
        'Miércoles': 'MIERCOLES',
        'Miercoles': 'MIERCOLES',
        'Jueves': 'JUEVES',
        'Viernes': 'VIERNES',
        'Sábado': 'SABADO',
        'Sabado': 'SABADO',
        'Domingo': 'DOMINGO'
    };

    // Mapeo de nombres de comidas (tablaEditable usa formato "Desayuno", generarEstadisticasPlan espera "desayuno")
    const mapeoComidas = {
        'Desayuno': 'desayuno',
        'Media Mañana': 'medioDia',
        'Comida': 'almuerzo',
        'Merienda': 'merienda',
        'Cena': 'cena'
    };

    const planSemanaArray = [];

    // Iterar sobre cada día del planSemanaObjeto
    Object.keys(planSemanaObjeto).forEach(nombreDia => {
        const datosDia = planSemanaObjeto[nombreDia];
        if (!datosDia || typeof datosDia !== 'object') return;

        // Convertir nombre del día
        const diaNormalizado = mapeoDias[nombreDia] || nombreDia.toUpperCase();

        // Convertir estructura de comidas
        const comidas = {};

        Object.keys(datosDia).forEach(nombreComida => {
            const comidaNormalizada = mapeoComidas[nombreComida] || nombreComida.toLowerCase();
            const alimentosComida = datosDia[nombreComida];

            if (Array.isArray(alimentosComida) && alimentosComida.length > 0) {
                // Sumar todos los alimentos de esta comida
                const totalComida = alimentosComida.reduce((total, alimento) => {
                    return {
                        calorias: total.calorias + (alimento.calorias || 0),
                        proteinas: total.proteinas + (alimento.proteinas || 0),
                        grasas: total.grasas + (alimento.grasas || 0),
                        carbohidratos: total.carbohidratos + (alimento.hidratos || 0)
                    };
                }, { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 });

                comidas[comidaNormalizada] = totalComida;
            } else {
                // Si no hay alimentos, usar valores vacíos
                comidas[comidaNormalizada] = {
                    calorias: 0,
                    proteinas: 0,
                    grasas: 0,
                    carbohidratos: 0
                };
            }
        });

        // Asegurar que todas las comidas estén presentes
        if (!comidas.desayuno) comidas.desayuno = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.medioDia) comidas.medioDia = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.almuerzo) comidas.almuerzo = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.merienda) comidas.merienda = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.cena) comidas.cena = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };

        planSemanaArray.push({
            dia: diaNormalizado,
            comidas: comidas
        });
    });

    return planSemanaArray;
}

// Función para verificar si hay alimentos reales en el plan
function tieneAlimentosReales(planSemanaObjeto) {
    if (!planSemanaObjeto || typeof planSemanaObjeto !== 'object') return false;

    // Verificar si hay algún día con alimentos
    for (const nombreDia of Object.keys(planSemanaObjeto)) {
        const datosDia = planSemanaObjeto[nombreDia];
        if (!datosDia || typeof datosDia !== 'object') continue;

        // Verificar si hay alguna comida con alimentos
        for (const nombreComida of Object.keys(datosDia)) {
            const alimentosComida = datosDia[nombreComida];
            if (Array.isArray(alimentosComida) && alimentosComida.length > 0) {
                // Verificar si hay al menos un alimento con datos válidos
                const tieneAlimentoValido = alimentosComida.some(alimento => {
                    return alimento && (
                        (alimento.calorias && alimento.calorias > 0) ||
                        (alimento.proteinas && alimento.proteinas > 0) ||
                        (alimento.grasas && alimento.grasas > 0) ||
                        (alimento.hidratos && alimento.hidratos > 0)
                    );
                });
                if (tieneAlimentoValido) {
                    return true;
                }
            }
        }
    }

    return false;
}

// Función para mostrar estadísticas del plan manual
function mostrarEstadisticasPlanManual() {
    if (!window.tablaEditable || !window.tablaEditable.planSemana) {
        return;
    }

    // Guardar día actual antes de calcular estadísticas
    if (window.tablaEditable.diaActual && typeof window.tablaEditable.obtenerDatos === 'function') {
        window.tablaEditable.planSemana[window.tablaEditable.diaActual] = window.tablaEditable.obtenerDatos();
    }

    // Verificar si realmente hay alimentos antes de generar estadísticas
    const tieneAlimentos = tieneAlimentosReales(window.tablaEditable.planSemana);

    // Convertir planSemana de formato objeto a formato array
    const planSemanaArray = convertirPlanSemanaParaEstadisticas(window.tablaEditable.planSemana);

    if (planSemanaArray.length === 0) {
        return;
    }

    // Si no hay alimentos reales, forzar todos los valores a 0
    if (!tieneAlimentos) {
        // Asegurar que todos los valores sean 0
        planSemanaArray.forEach(dia => {
            Object.keys(dia.comidas).forEach(comida => {
                dia.comidas[comida] = {
                    calorias: 0,
                    proteinas: 0,
                    grasas: 0,
                    carbohidratos: 0
                };
            });
        });
    }

    // Generar HTML de estadísticas
    const htmlEstadisticas = generarEstadisticasPlan(planSemanaArray);

    // Buscar o crear contenedor de estadísticas
    let contenedorEstadisticas = document.getElementById('estadisticas-plan-manual');

    if (!contenedorEstadisticas) {
        // Crear contenedor después de la tabla editable
        const planDiv = document.getElementById('plan-alimentacion');
        if (planDiv) {
            contenedorEstadisticas = document.createElement('div');
            contenedorEstadisticas.id = 'estadisticas-plan-manual';
            planDiv.appendChild(contenedorEstadisticas);
        } else {
            return; // No se puede agregar si no existe el contenedor principal
        }
    }

    // Actualizar contenido
    contenedorEstadisticas.innerHTML = htmlEstadisticas;
}

function generarEstadisticasPlan(planSemana) {
    if (!planSemana || planSemana.length === 0) return '';

    // Función helper para detectar si un día es de descanso
    // Usar window.datosUsuario en lugar de datosUsuario global
    const esDiaDescansoHelper = (nombreDia) => {
        if (!window.datosUsuario || !window.datosUsuario.diasEntreno || window.datosUsuario.diasEntreno.length === 0) {
            return false; // Por defecto, todos los días son de entreno si no hay días de entrenamiento definidos (consistente con esDiaDescanso global)
        }

        // Normalizar el nombre del día
        const normalizar = (texto = '') => texto
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zñ ]/g, '')
            .trim();

        const valorDia = normalizar(nombreDia);
        const diasEntreno = window.datosUsuario.diasEntreno || [];
        const diasEntrenoNormalizados = diasEntreno.map(d => normalizar(d));

        return !diasEntrenoNormalizados.includes(valorDia);
    };

    // Calcular totales por día de entreno y descanso
    let totalEntreno = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0, dias: 0 };
    let totalDescanso = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0, dias: 0 };

    planSemana.forEach(dia => {
        const esDescanso = esDiaDescansoHelper(dia.dia);
        const comidas = dia.comidas;

        let diaTotal = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };

        // Sumar todas las comidas del día
        Object.values(comidas).forEach(comida => {
            if (comida) {
                diaTotal.calorias += comida.calorias || 0;
                diaTotal.proteinas += comida.proteinas || 0;
                diaTotal.grasas += comida.grasas || 0;
                diaTotal.carbohidratos += comida.carbohidratos || 0;
            }
        });

        // Agregar a totales según tipo de día
        if (esDescanso) {
            totalDescanso.calorias += diaTotal.calorias;
            totalDescanso.proteinas += diaTotal.proteinas;
            totalDescanso.grasas += diaTotal.grasas;
            totalDescanso.carbohidratos += diaTotal.carbohidratos;
            totalDescanso.dias++;
        } else {
            totalEntreno.calorias += diaTotal.calorias;
            totalEntreno.proteinas += diaTotal.proteinas;
            totalEntreno.grasas += diaTotal.grasas;
            totalEntreno.carbohidratos += diaTotal.carbohidratos;
            totalEntreno.dias++;
        }
    });

    // Calcular promedios
    const promedioEntreno = {
        calorias: totalEntreno.dias > 0 ? Math.round(totalEntreno.calorias / totalEntreno.dias) : 0,
        proteinas: totalEntreno.dias > 0 ? Math.round(totalEntreno.proteinas / totalEntreno.dias) : 0,
        grasas: totalEntreno.dias > 0 ? Math.round(totalEntreno.grasas / totalEntreno.dias) : 0,
        carbohidratos: totalEntreno.dias > 0 ? Math.round(totalEntreno.carbohidratos / totalEntreno.dias) : 0
    };

    const promedioDescanso = {
        calorias: totalDescanso.dias > 0 ? Math.round(totalDescanso.calorias / totalDescanso.dias) : 0,
        proteinas: totalDescanso.dias > 0 ? Math.round(totalDescanso.proteinas / totalDescanso.dias) : 0,
        grasas: totalDescanso.dias > 0 ? Math.round(totalDescanso.grasas / totalDescanso.dias) : 0,
        carbohidratos: totalDescanso.dias > 0 ? Math.round(totalDescanso.carbohidratos / totalDescanso.dias) : 0
    };

    // Total combinado semanal
    const totalCombinado = {
        calorias: totalEntreno.calorias + totalDescanso.calorias,
        proteinas: totalEntreno.proteinas + totalDescanso.proteinas,
        grasas: totalEntreno.grasas + totalDescanso.grasas,
        carbohidratos: totalEntreno.carbohidratos + totalDescanso.carbohidratos
    };

    const promedioSemanal = {
        calorias: Math.round(totalCombinado.calorias / 7),
        proteinas: Math.round(totalCombinado.proteinas / 7),
        grasas: Math.round(totalCombinado.grasas / 7),
        carbohidratos: Math.round(totalCombinado.carbohidratos / 7)
    };

    // Generar consejos automáticos
    const consejos = generarConsejosAutomaticos(promedioEntreno, promedioDescanso, promedioSemanal);

    // Calcular porcentajes para gráficos
    const maxCalorias = Math.max(promedioEntreno.calorias, promedioDescanso.calorias, promedioSemanal.calorias);
    const porcentajeCalEntreno = maxCalorias > 0 ? (promedioEntreno.calorias / maxCalorias) * 100 : 0;
    const porcentajeCalDescanso = maxCalorias > 0 ? (promedioDescanso.calorias / maxCalorias) * 100 : 0;
    const porcentajeCalSemanal = maxCalorias > 0 ? (promedioSemanal.calorias / maxCalorias) * 100 : 0;

    return `
        <div class="estadisticas-plan-container" style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 2px solid #dee2e6;">
            <h3 style="color: #495057; text-align: center; margin-bottom: 25px; font-size: 1.4em; font-weight: 700; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
                📊 ESTADÍSTICAS DEL PLAN
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 25px;">
                <!-- Día de Entreno -->
                <div class="stat-card" style="background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%); padding: 20px; border-radius: 12px; border: 2px solid #28a745; box-shadow: 0 3px 10px rgba(40,167,69,0.2);">
                    <h4 style="color: #155724; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">
                        💪 DÍA DE ENTRENO
                        <span style="display: block; font-size: 0.85em; font-weight: 500; margin-top: 5px;">(${totalEntreno.dias} días)</span>
                    </h4>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">🔥 Calorías:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.calorias} kcal</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #28a745, #20c997); height: 100%; width: ${porcentajeCalEntreno}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">💪 Proteínas:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.proteinas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: ${Math.min((promedioEntreno.proteinas / 200) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">🥑 Grasas:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.grasas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; width: ${Math.min((promedioEntreno.grasas / 100) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">🍚 Hidratos:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.carbohidratos}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #1e40af, #3b82f6); height: 100%; width: ${Math.min((promedioEntreno.carbohidratos / 300) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(21,87,36,0.3); text-align: center;">
                        <span style="color: #155724; font-weight: 700; font-size: 0.95em;">Total semanal: ${totalEntreno.calorias} kcal</span>
                    </div>
                </div>
                
                <!-- Día de Descanso -->
                <div class="stat-card" style="background: linear-gradient(135deg, #cfe2ff 0%, #b6d4fe 100%); padding: 20px; border-radius: 12px; border: 2px solid #2196f3; box-shadow: 0 3px 10px rgba(33,150,243,0.2);">
                    <h4 style="color: #0d47a1; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">
                        😴 DÍA DE DESCANSO
                        <span style="display: block; font-size: 0.85em; font-weight: 500; margin-top: 5px;">(${totalDescanso.dias} días)</span>
                    </h4>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">🔥 Calorías:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.calorias} kcal</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #2196f3, #42a5f5); height: 100%; width: ${porcentajeCalDescanso}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">💪 Proteínas:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.proteinas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: ${Math.min((promedioDescanso.proteinas / 200) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">🥑 Grasas:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.grasas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; width: ${Math.min((promedioDescanso.grasas / 100) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">🍚 Hidratos:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.carbohidratos}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #1e40af, #3b82f6); height: 100%; width: ${Math.min((promedioDescanso.carbohidratos / 300) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(13,71,161,0.3); text-align: center;">
                        <span style="color: #0d47a1; font-weight: 700; font-size: 0.95em;">Total semanal: ${totalDescanso.calorias} kcal</span>
                    </div>
                </div>
                
                <!-- Total Combinado -->
                <div class="stat-card" style="background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%); padding: 20px; border-radius: 12px; border: 2px solid #ffc107; box-shadow: 0 3px 10px rgba(255,193,7,0.2);">
                    <h4 style="color: #856404; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">
                        📈 PROMEDIO SEMANAL
                        <span style="display: block; font-size: 0.85em; font-weight: 500; margin-top: 5px;">(7 días)</span>
                    </h4>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">🔥 Calorías:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.calorias} kcal</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #ffc107, #ffca28); height: 100%; width: ${porcentajeCalSemanal}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">💪 Proteínas:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.proteinas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: ${Math.min((promedioSemanal.proteinas / 200) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">🥑 Grasas:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.grasas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; width: ${Math.min((promedioSemanal.grasas / 100) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">🍚 Hidratos:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.carbohidratos}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #1e40af, #3b82f6); height: 100%; width: ${Math.min((promedioSemanal.carbohidratos / 300) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(133,100,4,0.3); text-align: center;">
                        <span style="color: #856404; font-weight: 700; font-size: 0.95em;">Total semanal: ${totalCombinado.calorias} kcal</span>
                    </div>
                </div>
            </div>
            
            <!-- Consejos Automáticos -->
            ${consejos}
        </div>
    `;
}

// Función para generar consejos automáticos basados en las estadísticas
function generarConsejosAutomaticos(promedioEntreno, promedioDescanso, promedioSemanal) {
    const consejos = [];

    // Analizar diferencias entre días de entreno y descanso
    const diferenciaCalorias = promedioEntreno.calorias - promedioDescanso.calorias;
    const diferenciaProteinas = promedioEntreno.proteinas - promedioDescanso.proteinas;

    // Consejo sobre diferencia calórica
    if (diferenciaCalorias > 300) {
        consejos.push({
            tipo: 'info',
            icono: '💡',
            titulo: 'Excelente distribución calórica',
            texto: `Tus días de entrenamiento tienen ${diferenciaCalorias} kcal más que los de descanso, lo cual es óptimo para mantener energía durante el ejercicio.`
        });
    } else if (diferenciaCalorias < 100) {
        consejos.push({
            tipo: 'warning',
            icono: '⚠️',
            titulo: 'Considera ajustar las calorías',
            texto: `La diferencia entre días de entreno y descanso es pequeña (${diferenciaCalorias} kcal). Considera aumentar las calorías en días de entrenamiento para mejor rendimiento.`
        });
    }

    // Consejo sobre proteínas
    const objetivoProteinas = datosUsuario.peso ? Math.round(datosUsuario.peso * 2) : 150;
    if (promedioSemanal.proteinas >= objetivoProteinas * 0.9) {
        consejos.push({
            tipo: 'success',
            icono: '✅',
            titulo: 'Proteínas adecuadas',
            texto: `Tu ingesta promedio de ${promedioSemanal.proteinas}g de proteínas es adecuada para mantener y construir masa muscular.`
        });
    } else {
        consejos.push({
            tipo: 'warning',
            icono: '💪',
            titulo: 'Aumenta la ingesta de proteínas',
            texto: `Tu ingesta promedio de ${promedioSemanal.proteinas}g es menor a la recomendada (${objetivoProteinas}g). Considera aumentar alimentos ricos en proteínas.`
        });
    }

    // Consejo sobre distribución de macronutrientes
    const porcentajeProt = (promedioSemanal.proteinas * 4 / promedioSemanal.calorias) * 100;
    const porcentajeCarb = (promedioSemanal.carbohidratos * 4 / promedioSemanal.calorias) * 100;
    const porcentajeGras = (promedioSemanal.grasas * 9 / promedioSemanal.calorias) * 100;

    if (porcentajeProt >= 18 && porcentajeProt <= 25) {
        consejos.push({
            tipo: 'success',
            icono: '🎯',
            titulo: 'Distribución de macronutrientes equilibrada',
            texto: `Tu plan tiene una distribución equilibrada: ${porcentajeProt.toFixed(1)}% proteínas, ${porcentajeCarb.toFixed(1)}% carbohidratos, ${porcentajeGras.toFixed(1)}% grasas.`
        });
    }

    // Consejo sobre hidratos en días de entreno
    if (promedioEntreno.carbohidratos > promedioDescanso.carbohidratos * 1.2) {
        consejos.push({
            tipo: 'info',
            icono: '⚡',
            titulo: 'Buena estrategia de carbohidratos',
            texto: `Los días de entrenamiento tienen más carbohidratos, lo cual ayuda a reponer glucógeno muscular y mejorar el rendimiento.`
        });
    }

    // Consejo sobre objetivo
    const objetivo = datosUsuario.objetivo;
    if (objetivo === 'aumentar' && promedioSemanal.calorias < 2500) {
        consejos.push({
            tipo: 'warning',
            icono: '📈',
            titulo: 'Atención para ganancia de peso',
            texto: 'Para aumentar masa muscular, asegúrate de tener un superávit calórico adecuado. Considera aumentar las calorías si no ves progreso.'
        });
    } else if (objetivo === 'adelgazar' && promedioSemanal.calorias > 2500) {
        consejos.push({
            tipo: 'info',
            icono: '🔥',
            titulo: 'Déficit calórico moderado',
            texto: 'Tu plan tiene un déficit calórico adecuado. Recuerda que la pérdida de peso debe ser gradual (0.5-1kg por semana).'
        });
    }

    // Si no hay consejos, añadir uno genérico positivo
    if (consejos.length === 0) {
        consejos.push({
            tipo: 'success',
            icono: '🌟',
            titulo: 'Plan bien estructurado',
            texto: 'Tu plan nutricional está bien balanceado. Mantén la consistencia y ajusta según tu progreso y sensaciones.'
        });
    }

    // Generar HTML de consejos
    let htmlConsejos = '<div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 12px; border: 2px solid #dee2e6;">';
    htmlConsejos += '<h4 style="color: #495057; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">💡 CONSEJOS Y RECOMENDACIONES</h4>';

    consejos.forEach(consejo => {
        const colorFondo = consejo.tipo === 'success' ? 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)' :
            consejo.tipo === 'warning' ? 'linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%)' :
                'linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)';
        const colorBorde = consejo.tipo === 'success' ? '#28a745' :
            consejo.tipo === 'warning' ? '#ffc107' :
                '#17a2b8';
        const colorTexto = consejo.tipo === 'success' ? '#155724' :
            consejo.tipo === 'warning' ? '#856404' :
                '#0c5460';

        htmlConsejos += `
            <div style="margin-bottom: 15px; padding: 15px; background: ${colorFondo}; border-radius: 10px; border-left: 4px solid ${colorBorde}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: flex; align-items: start; gap: 12px;">
                    <span style="font-size: 1.5em; flex-shrink: 0;">${consejo.icono}</span>
                    <div style="flex: 1;">
                        <h5 style="color: ${colorTexto}; margin: 0 0 8px 0; font-size: 1em; font-weight: 700;">${consejo.titulo}</h5>
                        <p style="color: ${colorTexto}; margin: 0; font-size: 0.9em; line-height: 1.5; opacity: 0.9;">${consejo.texto}</p>
                    </div>
                </div>
            </div>
        `;
    });

    htmlConsejos += '</div>';
    return htmlConsejos;
}

function mostrarPlanAlimentacion() {
    try {
        const planDiv = document.getElementById('plan-alimentacion');
        if (!planDiv) {
            console.error('❌ Elemento plan-alimentacion no encontrado');
            throw new Error('Elemento plan-alimentacion no encontrado');
        }

        const { duracion, modoGeneracion } = datosUsuario;
        let { objetivo } = datosUsuario;

        // Fallback: intentar obtener objetivo del DOM si no está en datosUsuario
        if (!objetivo) {
            const objetivoSelect = document.getElementById('objetivo');
            if (objetivoSelect && objetivoSelect.value) {
                objetivo = objetivoSelect.value;
                datosUsuario.objetivo = objetivo;
                console.log('⚠️ Objetivo recuperado del DOM:', objetivo);
            }
        }

        // Verificar si el modo es manual
        if (modoGeneracion === 'manual') {
            mostrarTablaEditable();
            return;
        }

        // Validar que objetivo exista
        if (!objetivo) {
            console.error('❌ Objetivo no definido en datosUsuario');
            mostrarNotificacion('❌ Error: No se ha definido el objetivo de la dieta', 'error');
            return;
        }

        console.log('🔄 Generando plan de alimentación...', { objetivo, duracion, modoGeneracion });

        // Verificar si hay base de datos ampliada disponible
        let planSemana;
        // Verificar si hay generador y base de datos disponibles
        if (!window.generarPlanVariado || !window.baseDatosAlimentos) {
            console.error('❌ Error: generador variado o base de datos no disponible');
            if (typeof mostrarNotificacion === 'function') {
                mostrarNotificacion('❌ Error crítico: Falta la base de datos de alimentos', 'error');
            }
            throw new Error('Componentes necesarios no disponibles (generarPlanVariado o baseDatosAlimentos)');
        }

        console.log('📊 Usando generador variado con base de datos unificada');

        try {
            planSemana = window.generarPlanVariado(objetivo, duracion);
            console.log('✅ Plan generado:', { dias: planSemana ? planSemana.length : 0 });
        } catch (genError) {
            console.error('❌ Error al generar plan variado:', genError);
            throw new Error('Error al generar el plan: ' + genError.message);
        }

        let htmlPlan = '';

        // Determinar número de semanas según duración
        let semanas;
        if (duracion === 'semana') {
            semanas = 1;
        } else if (duracion === '2semanas') {
            semanas = 2;
        } else if (duracion === '3semanas') {
            semanas = 3;
        } else if (duracion === 'mes') {
            semanas = 4;
        } else {
            semanas = 1; // Por defecto
        }

        for (let semana = 1; semana <= semanas; semana++) {
            if (semanas > 1) {
                htmlPlan += `<h2 style="color: #764ba2; margin-top: 40px; text-align: center;">Semana ${semana}</h2>`;
            }

            const inicioSemana = (semana - 1) * 7;
            const finSemana = semana * 7;
            const semanaActual = planSemana.slice(inicioSemana, finSemana);

            semanaActual.forEach(dia => {
                htmlPlan += generarDiaHTML(dia, false);
            });
        }

        // Generar estadísticas del plan
        htmlPlan += generarEstadisticasPlan(planSemana);

        // Calcular hidratación recomendada
        const hidratacionRecomendada = Math.round((datosUsuario.peso * 0.033 + 0.5) * 10) / 10;
        htmlPlan += `
        <div class="hidratacion-section" style="margin-top: 40px; margin-bottom: 20px; padding: 12px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 8px; border-left: 4px solid #2196f3; page-break-inside: avoid; clear: both;">
            <h3 style="color: #0d47a1; margin-bottom: 6px; font-size: 13pt; font-weight: bold;">
                💧 HIDRATACIÓN DIARIA
            </h3>
            <p style="margin: 3px 0; color: #1565c0; font-size: 9.5pt; font-weight: 600;">
                Recomendación personalizada: <strong>${hidratacionRecomendada}L - ${hidratacionRecomendada + 0.5}L de agua al día</strong>
            </p>
            <p style="margin: 3px 0; color: #1976d2; font-size: 8.5pt; line-height: 1.3;">
                • Bebe agua antes, durante y después del ejercicio • Ajusta según sudoración y clima • La orina debe ser de color amarillo claro
            </p>
        </div>
    `;

        // Agregar nota personalizada al final
        htmlPlan += `
        <div class="nota-personalizada" style="margin-top: 15px; padding: 15px; background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%); border-radius: 8px; border-left: 4px solid #17a2b8;">
            <h3 style="color: #0c5460; margin-bottom: 8px; font-size: 14pt; font-weight: bold; text-align: center;">
                📋 MENÚ PERSONALIZADO
            </h3>
            <p style="margin: 0; color: #0c5460; font-size: 10pt; font-weight: 600; text-align: center; line-height: 1.4;">
                Este plan está diseñado específicamente para tu objetivo de ${datosUsuario.objetivo === 'aumentar' ? 'aumentar masa muscular' : datosUsuario.objetivo === 'adelgazar' ? 'perder peso' : 'mantener peso'}.
            </p>
        </div>
    `;

        planDiv.innerHTML = htmlPlan;

        // Guardar planSemana original para gráficos avanzados
        window.planSemanaGenerado = planSemana;

        // Guardar el planSemana en formato compatible con TablaEditable
        // Convertir array de días a objeto { Dia: { ... } }
        if (planSemana && planSemana.length > 0) {
            const planSemanaEditable = {};

            planSemana.forEach((diaPlan) => {
                let nombreDia = diaPlan.dia || diaPlan.diaSemana;
                if (!nombreDia) return;

                // Normalizar nombre del día a formato TablaEditable (primera letra mayúscula, resto minúsculas)
                // Ejemplo: "LUNES" -> "Lunes", "Lunes" -> "Lunes"
                nombreDia = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1).toLowerCase();

                // Mapeo especial para días con tildes
                const mapaDias = {
                    'Miercoles': 'Miércoles',
                    'Sabado': 'Sábado'
                };
                if (mapaDias[nombreDia]) {
                    nombreDia = mapaDias[nombreDia];
                }

                // Convertir estructura del plan automático a formato TablaEditable
                const datosDia = {
                    'Desayuno': convertirComida(diaPlan.comidas.desayuno),
                    'Media Mañana': convertirComida(diaPlan.comidas.medioDia),
                    'Comida': convertirComida(diaPlan.comidas.almuerzo),
                    'Merienda': convertirComida(diaPlan.comidas.merienda),
                    'Cena': convertirComida(diaPlan.comidas.cena)
                };

                planSemanaEditable[nombreDia] = datosDia;
            });

            // Guardar en datosUsuario para que pueda ser cargado por TablaEditable
            datosUsuario.planSemana = planSemanaEditable;
            window.datosUsuario = datosUsuario;

            // Actualizar estructura para exportación si la función está disponible
            if (typeof window.actualizarEstructuraPlanExport === 'function') {
                window.actualizarEstructuraPlanExport();
            } else if (typeof actualizarEstructuraPlanExport === 'function') {
                actualizarEstructuraPlanExport();
            } else {
                console.warn('⚠️ actualizarEstructuraPlanExport no está definida, saltando paso de exportación');
            }
        }

        console.log('✅ Plan de alimentación mostrado correctamente');
    } catch (error) {
        console.error('❌ Error crítico en mostrarPlanAlimentacion:', error);
        const planDiv = document.getElementById('plan-alimentacion');
        if (planDiv) {
            planDiv.innerHTML = `
                <div class="mensaje-error-modulo">
                    <h3>⚠️ Error al generar el plan</h3>
                    <p>Hubo un problema al generar el plan de alimentación.</p>
                    <p style="margin-top: 10px; font-size: 12px; color: #666;">
                        Error: ${error.message}
                    </p>
                    <p style="margin-top: 10px; font-size: 12px; color: #666;">
                        Por favor, recarga la página (Ctrl + F5) e intenta de nuevo.
                    </p>
                </div>
            `;
        }
        if (window.mostrarNotificacion) {
            window.mostrarNotificacion('❌ Error al generar el plan: ' + error.message, 'error');
        }
        throw error; // Re-lanzar para que el código que llama pueda manejarlo
    }
}

// Función helper para parsear un string formateado de alimento y extraer nombre y cantidad
function parsearAlimentoFormateado(alimentoStr) {
    if (!alimentoStr || typeof alimentoStr !== 'string') {
        return { nombre: '', gramos: 0 };
    }

    // Ejemplos de formatos:
    // "Arroz basmati (1) (76g)"
    // "Barrita proteica (1 unidad)"
    // "Plátano (110g)"
    // "Codorniz (190g)"

    // Intentar extraer cantidad en gramos: buscar el último "(XXg)" en el string
    // Ejemplos: "Arroz basmati (1) (76g)" -> extraer "76g"
    const regexGramos = /\((\d+(?:\.\d+)?)g\)/g;
    const matchesGramos = [...alimentoStr.matchAll(regexGramos)];
    let gramos = 0;

    if (matchesGramos.length > 0) {
        // Tomar el último match (el más específico)
        gramos = parseFloat(matchesGramos[matchesGramos.length - 1][1]);
    } else {
        // Intentar extraer unidades: "(1 unidad)", "(2 unidades)"
        const regexUnidades = /\((\d+)\s*(?:unidad|unidades)\)/i;
        const matchUnidades = alimentoStr.match(regexUnidades);
        if (matchUnidades) {
            const unidades = parseInt(matchUnidades[1]);
            // Convertir unidades a gramos aproximados según el tipo de alimento
            if (alimentoStr.toLowerCase().includes('huevo')) {
                gramos = unidades * 50; // Aproximadamente 50g por huevo
            } else if (alimentoStr.toLowerCase().includes('barrita')) {
                gramos = unidades * 50; // Aproximadamente 50g por barrita
            } else if (alimentoStr.toLowerCase().includes('tortilla')) {
                gramos = unidades * 30; // Aproximadamente 30g por tortilla
            } else {
                gramos = unidades * 50; // Valor por defecto
            }
        }
    }

    // Extraer nombre: todo antes del primer paréntesis
    // Ejemplo: "Arroz basmati (1) (76g)" -> "Arroz basmati"
    const nombre = alimentoStr.split('(')[0].trim();

    return { nombre, gramos };
}

// Función helper para convertir comidas del plan automático al formato TablaEditable
function convertirComida(comida) {
    if (!comida || !comida.alimentos) return [];

    return comida.alimentos.map(alimento => {
        // Los alimentos pueden venir como strings formateados o como objetos
        let nombre, gramos, calorias, proteinas, grasas, hidratos;

        if (typeof alimento === 'string') {
            // Es un string formateado, necesitamos parsearlo
            const parsed = parsearAlimentoFormateado(alimento);
            nombre = parsed.nombre;
            gramos = parsed.gramos;

            // Obtener valores nutricionales desde la base de datos
            if (window.obtenerInfoNutricional && nombre) {
                const info = window.obtenerInfoNutricional(nombre, gramos);
                if (info) {
                    calorias = info.calorias || 0;
                    proteinas = info.proteinas || 0;
                    grasas = info.grasas || 0;
                    hidratos = info.carbohidratos || info.hidratos || 0;
                } else {
                    calorias = proteinas = grasas = hidratos = 0;
                }
            } else {
                calorias = proteinas = grasas = hidratos = 0;
            }
        } else {
            // Es un objeto
            nombre = alimento.nombre || alimento.alimento || '';
            gramos = alimento.gramos || alimento.cantidad || 0;
            calorias = alimento.calorias || 0;
            proteinas = alimento.proteinas || alimento.proteínas || 0;
            grasas = alimento.grasas || 0;
            hidratos = alimento.hidratos || alimento.carbohidratos || 0;
        }

        return {
            alimento: nombre,
            gramos: gramos,
            calorias: calorias,
            proteinas: proteinas,
            grasas: grasas,
            hidratos: hidratos
        };
    });
}

// Función helper para detectar si un día es de descanso
function esDiaDescanso(nombreDia) {
    if (!datosUsuario.diasEntreno || datosUsuario.diasEntreno.length === 0) {
        return false; // Si no hay días seleccionados, todos son de entreno por defecto
    }

    // Normalizar el nombre del día: convertir a minúsculas y quitar tildes para coincidir con los valores del formulario
    // El formulario guarda: "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" (sin tildes)
    const normalizar = (texto = '') => texto
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zñ ]/g, '')
        .trim();

    const valorDia = normalizar(nombreDia);
    // Normalizar también los días de entrenamiento para comparar correctamente
    const diasEntrenoNormalizados = datosUsuario.diasEntreno.map(d => normalizar(d));
    return !diasEntrenoNormalizados.includes(valorDia);
}

function generarDiaHTML(dia, editable = false) {
    const comidas = dia.comidas;
    const editableAttr = editable ? 'data-editable="true"' : '';
    const editarClass = editable ? ' editable-alimento' : '';

    // Detectar si es día de descanso
    const esDescanso = esDiaDescanso(dia.dia);
    const claseDescanso = esDescanso ? ' dia-descanso' : '';
    const badgeDescanso = esDescanso ? '<span class="badge-descanso">😴 DÍA DE DESCANSO</span>' : '<span class="badge-entreno">💪 DÍA DE ENTRENO</span>';

    // Obtener valores nutricionales objetivo según el tipo de día
    const caloriasObjetivo = esDescanso ? (datosUsuario.caloriasDescanso || datosUsuario.calorias) : (datosUsuario.caloriasEntreno || datosUsuario.calorias);
    const proteinasObjetivo = esDescanso ? (datosUsuario.proteinasDescanso || datosUsuario.proteinas) : (datosUsuario.proteinasEntreno || datosUsuario.proteinas);
    const carbohidratosObjetivo = esDescanso ? (datosUsuario.carbsDescanso || datosUsuario.carbohidratos) : (datosUsuario.carbsEntreno || datosUsuario.carbohidratos);
    const grasasObjetivo = esDescanso ? (datosUsuario.grasasDescanso || datosUsuario.grasas) : (datosUsuario.grasasEntreno || datosUsuario.grasas);

    // Calcular el máximo de alimentos para saber cuántas columnas de productos necesitamos
    const maxAlimentos = Math.max(
        comidas.desayuno.alimentos.length,
        comidas.medioDia.alimentos.length,
        comidas.almuerzo.alimentos.length,
        comidas.merienda.alimentos.length,
        comidas.cena.alimentos.length
    );

    // Generar encabezado con las columnas de productos
    let theadThs = '<th>COMIDA</th>';
    for (let i = 0; i < maxAlimentos; i++) {
        theadThs += `<th>Producto ${i + 1}</th>`;
    }
    theadThs += '<th>MACROS</th>';

    // Generar filas para cada tipo de comida
    const filasComidas = `
        <tr>
            <td class="nombre-comida">🍳 DESAYUNO</td>
            ${comidas.desayuno.alimentos.map(alimento => `<td>${alimento}</td>`).join('')}
            ${Array(maxAlimentos - comidas.desayuno.alimentos.length).fill('<td></td>').join('')}
            <td class="macros-celda">
                <div class="macros-comida">
                    ${comidas.desayuno.calorias} kcal<br>
                    P:${comidas.desayuno.proteinas}g C:${comidas.desayuno.carbohidratos}g G:${comidas.desayuno.grasas}g
                </div>
            </td>
        </tr>
        <tr>
            <td class="nombre-comida">🥤 MEDIA<br/>MAÑANA</td>
            ${comidas.medioDia.alimentos.map(alimento => `<td>${alimento}</td>`).join('')}
            ${Array(maxAlimentos - comidas.medioDia.alimentos.length).fill('<td></td>').join('')}
            <td class="macros-celda">
                <div class="macros-comida">
                    ${comidas.medioDia.calorias} kcal<br>
                    P:${comidas.medioDia.proteinas}g C:${comidas.medioDia.carbohidratos}g G:${comidas.medioDia.grasas}g
                </div>
            </td>
        </tr>
        <tr>
            <td class="nombre-comida">🍽️ COMIDA</td>
            ${comidas.almuerzo.alimentos.map(alimento => `<td>${alimento}</td>`).join('')}
            ${Array(maxAlimentos - comidas.almuerzo.alimentos.length).fill('<td></td>').join('')}
            <td class="macros-celda">
                <div class="macros-comida">
                    ${comidas.almuerzo.calorias} kcal<br>
                    P:${comidas.almuerzo.proteinas}g C:${comidas.almuerzo.carbohidratos}g G:${comidas.almuerzo.grasas}g
                </div>
            </td>
        </tr>
        <tr>
            <td class="nombre-comida">🥙 MERIENDA</td>
            ${comidas.merienda.alimentos.map(alimento => `<td>${alimento}</td>`).join('')}
            ${Array(maxAlimentos - comidas.merienda.alimentos.length).fill('<td></td>').join('')}
            <td class="macros-celda">
                <div class="macros-comida">
                    ${comidas.merienda.calorias} kcal<br>
                    P:${comidas.merienda.proteinas}g C:${comidas.merienda.carbohidratos}g G:${comidas.merienda.grasas}g
                </div>
            </td>
        </tr>
        <tr>
            <td class="nombre-comida">🌙 CENA</td>
            ${comidas.cena.alimentos.map(alimento => `<td>${alimento}</td>`).join('')}
            ${Array(maxAlimentos - comidas.cena.alimentos.length).fill('<td></td>').join('')}
            <td class="macros-celda">
                <div class="macros-comida">
                    ${comidas.cena.calorias} kcal<br>
                    P:${comidas.cena.proteinas}g C:${comidas.cena.carbohidratos}g G:${comidas.cena.grasas}g
                </div>
            </td>
        </tr>
    `;

    // Calcular totales del día
    const totalCalorias = comidas.desayuno.calorias + comidas.medioDia.calorias + comidas.almuerzo.calorias + comidas.merienda.calorias + comidas.cena.calorias;
    const totalProteinas = comidas.desayuno.proteinas + comidas.medioDia.proteinas + comidas.almuerzo.proteinas + comidas.merienda.proteinas + comidas.cena.proteinas;
    const totalCarbohidratos = comidas.desayuno.carbohidratos + comidas.medioDia.carbohidratos + comidas.almuerzo.carbohidratos + comidas.merienda.carbohidratos + comidas.cena.carbohidratos;
    const totalGrasas = comidas.desayuno.grasas + comidas.medioDia.grasas + comidas.almuerzo.grasas + comidas.merienda.grasas + comidas.cena.grasas;

    return `
        <div class="dia-plan${claseDescanso}">
            <h3 class="dia-titulo-header">
                ${dia.dia}
                ${badgeDescanso}
            </h3>
            <div class="resumen-dia${esDescanso ? ' resumen-descanso' : ' resumen-entreno'}" style="margin-bottom: 10px; padding: 8px; border-radius: 6px; font-size: 0.9em;">
                <strong>Objetivo del día:</strong>
                <span style="margin-left: 8px;">
                    🔥 ${caloriasObjetivo} kcal | 
                    💪 ${proteinasObjetivo}g P | 
                    🍚 ${carbohidratosObjetivo}g C | 
                    🥑 ${grasasObjetivo}g G
                </span>
                <span style="margin-left: 12px; font-weight: 600;">
                    (Actual: ${totalCalorias} kcal | ${totalProteinas}g P | ${totalCarbohidratos}g C | ${totalGrasas}g G)
                </span>
            </div>
            
            <table class="tabla-comidas">
                <thead>
                    <tr>
                        ${theadThs}
                    </tr>
                </thead>
                <tbody>
                    ${filasComidas}
                </tbody>
            </table>
        </div>
    `;
}

function mostrarProhibiciones() {
    const prohibicionesDiv = document.getElementById('prohibiciones-info');
    const { prohibiciones } = datosUsuario;

    if (prohibiciones && prohibiciones.trim() !== '') {
        prohibicionesDiv.innerHTML = `
            <h3>⚠️ Alimentos a evitar</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #dc3545;">
                <p style="margin: 0; color: #dc3545; font-weight: 600;">Alergias y prohibiciones declaradas:</p>
                <p style="margin-top: 10px; font-size: 1.1em;">${prohibiciones}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                <p style="margin: 0; color: #856404;"><strong>Importante:</strong> Todos los alimentos mencionados en este plan han sido seleccionados teniendo en cuenta tus restricciones. Verifica siempre las etiquetas de los productos.</p>
            </div>
        `;
    } else {
        prohibicionesDiv.innerHTML = `
            <h3>✅ Sin restricciones</h3>
            <div style="background: #d4edda; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745;">
                <p style="margin: 0; color: #155724;">No se han declarado alergias ni prohibiciones alimentarias.</p>
                <p style="margin-top: 10px; color: #155724;">Si desarrollas alguna intolerancia o alergia, comunícalo inmediatamente y actualiza tu plan.</p>
            </div>
        `;
    }
}
// Función para recalcular ingestas cuando cambian los superávits
function recalcularIngestasPorSuperavit() {
    // Esta función recalcula las ingestas pero no los macronutrientes base
    // Los gráficos se actualizan desde calcularMacronutrientes() o desde los event listeners
    // Verificar que la dieta ya esté creada (hay resultados visibles)
    const resultadosDiv = document.getElementById('resultados');
    if (!resultadosDiv || resultadosDiv.classList.contains('oculto')) {
        return; // Si no hay dieta creada, no hacer nada
    }

    // Verificar que datosUsuario tenga los datos necesarios
    if (!window.datosUsuario || !window.datosUsuario.tmb) {
        return; // Si no hay datos calculados, no hacer nada
    }

    try {
        // Obtener los nuevos valores de superávit
        const superavitEntrenoInput = document.getElementById('superavitEntreno');
        const superavitDescansoInput = document.getElementById('superavitDescanso');

        if (!superavitEntrenoInput || !superavitDescansoInput) {
            return;
        }

        const nuevoSuperavitEntreno = parseFloat(superavitEntrenoInput.value || 5);
        const nuevoSuperavitDescanso = parseFloat(superavitDescansoInput.value || 5);

        // Recalcular usando el módulo de cálculos
        if (!window.MacronutrientesCalculator) {
            console.error('MacronutrientesCalculator no está disponible');
            return;
        }

        // Obtener referencias a elementos del formulario
        const formulario = {
            edad: document.getElementById('edad'),
            sexo: document.getElementById('sexo'),
            altura: document.getElementById('altura'),
            peso: document.getElementById('peso'),
            objetivo: document.getElementById('objetivo'),
            tipoPersona: document.getElementById('tipoPersona'),
            actividadFisicaDeporte: document.getElementById('actividadFisicaDeporte'),
            tipoTermogenico: document.getElementById('tipoTermogenico'),
            superavitEntreno: superavitEntrenoInput,
            superavitDescanso: superavitDescansoInput
        };

        // Recalcular macronutrientes con los nuevos valores
        window.datosUsuario = window.MacronutrientesCalculator.calcularMacronutrientes(
            window.datosUsuario,
            formulario
        );

        // Actualizar la tabla de cálculos detallados
        if (typeof mostrarCalculosDetallados === 'function') {
            mostrarCalculosDetallados();
        }

        // Actualizar la tabla de macronutrientes
        if (typeof mostrarMacronutrientesDistribucion === 'function') {
            mostrarMacronutrientesDistribucion();
        }

        // Actualizar la tabla de macros principal
        if (typeof mostrarTablaMacros === 'function') {
            mostrarTablaMacros();
        }

        // Si hay tabla editable (modo manual), actualizar los objetivos calóricos y totales
        if (window.tablaEditable) {
            // Actualizar estilos del día (esto actualiza los objetivos mostrados)
            if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                window.tablaEditable.actualizarEstilosDia();
            }
            // Actualizar totales diarios para recalcular el progreso con los nuevos objetivos
            if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                window.tablaEditable.actualizarTotalesDiarios();
            }
        }

        console.log('✅ Ingestas recalculadas por cambio de superávit');
    } catch (error) {
        console.error('❌ Error al recalcular ingestas por superávit:', error);
    }
}

/**
 * Actualiza las opciones del select de superávit según el objetivo
 * @param {HTMLSelectElement} selectElement - Elemento select a actualizar
 * @param {string} objetivo - Objetivo seleccionado ('aumentar', 'adelgazar', 'mantener')
 * @returns {string} Valor por defecto sugerido
 */
function actualizarOpcionesSuperavit(selectElement, objetivo) {
    if (!selectElement) {
        return '0';
    }

    // Guardar el valor actual antes de limpiar
    const valorActual = selectElement.value;

    // Limpiar opciones existentes (excepto la primera si es placeholder)
    selectElement.innerHTML = '';

    // Definir opciones y valores por defecto según el objetivo
    let opciones = [];
    let valorPorDefecto = '0';

    switch (objetivo) {
        case 'aumentar':
            // Para aumentar: superávit positivo (5% a 30% típicamente)
            opciones = ['0', '5', '10', '15', '20', '25', '30', '35', '40'];
            valorPorDefecto = '10'; // Superávit moderado por defecto
            break;
        case 'adelgazar':
            // Para adelgazar: déficit (0% a 30% típicamente)
            opciones = ['0', '5', '10', '15', '20', '25', '30'];
            valorPorDefecto = '15'; // Déficit moderado por defecto
            break;
        case 'mantener':
        default:
            // Para mantener: rango completo (puede ser déficit o superávit)
            opciones = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'];
            valorPorDefecto = '0'; // Mantener equilibrio por defecto
            break;
    }

    // Agregar opciones al select
    opciones.forEach(valor => {
        const option = document.createElement('option');
        option.value = valor;
        option.textContent = `${valor}%`;
        if (valor === valorPorDefecto) {
            option.selected = true;
        }
        selectElement.appendChild(option);
    });

    // Si el valor actual existe en las nuevas opciones, mantenerlo
    // PERO solo si NO hemos cambiado de "grupo" de objetivo (ej: de adelgazar a aumentar)
    // Para simplificar, si el objetivo cambió (lo cual es probable si llamamos a esta función),
    // forzamos el valor por defecto para asegurar que el cambio se note.
    
    // EXCEPCIÓN: Si el valor actual es 0, intentamos mantenerlo si es 'mantener', 
    // pero si cambiamos a 'adelgazar' o 'aumentar', sugerimos el valor por defecto.
    
    if (opciones.includes(valorActual) && valorActual !== '0') {
        // selectElement.value = valorActual; 
        // return valorActual;
        // COMENTADO: Forzar cambio para que el usuario vea el efecto del nuevo objetivo
    }

    selectElement.value = valorPorDefecto;
    return valorPorDefecto;
}

window.actualizarSuperavitPorObjetivo = function () {
    try {
        const objetivoSelect = document.getElementById('objetivo');
        const superavitEntrenoSelect = document.getElementById('superavitEntreno');
        const superavitDescansoSelect = document.getElementById('superavitDescanso');
        const labelEntreno = document.querySelector('label[for="superavitEntreno"]');
        const labelDescanso = document.querySelector('label[for="superavitDescanso"]');

        if (!objetivoSelect || !superavitEntrenoSelect || !superavitDescansoSelect) {
            return;
        }

        const objetivo = objetivoSelect.value;

        // Actualizar etiquetas según el objetivo
        let textoEntreno = '';
        let textoDescanso = '';

        switch (objetivo) {
            case 'aumentar':
                textoEntreno = 'Superávit día entrenamiento (%):';
                textoDescanso = 'Superávit día descanso (%):';
                break;
            case 'adelgazar':
                textoEntreno = 'Déficit día entrenamiento (%):';
                textoDescanso = 'Déficit día descanso (%):';
                break;
            case 'mantener':
                textoEntreno = 'Déficit/Superávit día entrenamiento (%):';
                textoDescanso = 'Déficit/Superávit día descanso (%):';
                break;
            default:
                textoEntreno = 'Déficit/Superávit día entrenamiento (%):';
                textoDescanso = 'Déficit/Superávit día descanso (%):';
        }

        // Actualizar etiquetas
        if (labelEntreno) {
            const tooltipIcon = labelEntreno.querySelector('.tooltip-icon');
            labelEntreno.innerHTML = textoEntreno;
            if (tooltipIcon) {
                labelEntreno.appendChild(tooltipIcon);
            } else {
                const icon = document.createElement('span');
                icon.className = 'tooltip-icon';
                icon.setAttribute('data-tooltip', 'Se actualiza automáticamente según el objetivo seleccionado.');
                icon.textContent = 'ℹ️';
                labelEntreno.appendChild(icon);
            }
        }

        if (labelDescanso) {
            const tooltipIcon = labelDescanso.querySelector('.tooltip-icon');
            labelDescanso.innerHTML = textoDescanso;
            if (tooltipIcon) {
                labelDescanso.appendChild(tooltipIcon);
            } else {
                const icon = document.createElement('span');
                icon.className = 'tooltip-icon';
                icon.setAttribute('data-tooltip', 'Se actualiza automáticamente según el objetivo seleccionado.');
                icon.textContent = 'ℹ️';
                labelDescanso.appendChild(icon);
            }
        }

        // Actualizar opciones disponibles según el objetivo y aplicar inmediatamente los valores sugeridos
        const valorPorDefectoEntreno = actualizarOpcionesSuperavit(superavitEntrenoSelect, objetivo);
        const valorPorDefectoDescanso = actualizarOpcionesSuperavit(superavitDescansoSelect, objetivo);
        superavitEntrenoSelect.value = valorPorDefectoEntreno;
        superavitDescansoSelect.value = valorPorDefectoDescanso;

        // Usar la función centralizada para actualizar todo
        // Pasar skipObjetivoCheck=true para evitar verificar el objetivo de nuevo (ya lo acabamos de actualizar)
        // Esto actualiza macros, tablas, gráficos, etc.
        actualizarTodoAutomaticamente(true);
    } catch (error) {
        console.error('❌ Error al actualizar superávit por objetivo:', error);
    }
};

/**
 * Función centralizada para actualizar todos los cálculos, gráficos y tablas
 * cuando cambia cualquier campo del formulario, incluso después de crear la dieta.
 * Funciona como Excel: cualquier cambio actualiza todo lo relacionado.
 * @param {boolean} skipObjetivoCheck - Si es true, no verifica cambios en el objetivo (para evitar bucles)
 */
function actualizarTodoAutomaticamente(skipObjetivoCheck = false) {
    // Verificar si hay una dieta creada (resultados visibles)
    const resultadosDiv = document.getElementById('resultados');
    const dietaCreada = resultadosDiv && !resultadosDiv.classList.contains('oculto');

    try {
        // Si el objetivo cambió y no estamos en modo skip, actualizar opciones de superávit primero
        if (!skipObjetivoCheck) {
            const objetivoSelect = document.getElementById('objetivo');
            if (objetivoSelect && objetivoSelect.dataset.objetivoAnterior !== objetivoSelect.value) {
                objetivoSelect.dataset.objetivoAnterior = objetivoSelect.value;
                // Llamar a actualizarSuperavitPorObjetivo que actualizará las opciones y luego llamará a esta función
                window.actualizarSuperavitPorObjetivo();
                return; // actualizarSuperavitPorObjetivo ya llama a actualizarTodoAutomaticamente(true)
            }
        }

        // Si no hay dieta creada, solo recalcular macros básicos
        if (!dietaCreada) {
            calcularMacronutrientes();
            return;
        }

        // Recalcular macronutrientes con los nuevos valores
        calcularMacronutrientes();

        // Actualizar todas las tablas
        if (typeof mostrarInfoUsuario === 'function') {
            mostrarInfoUsuario();
        }

        if (typeof mostrarCalculosDetallados === 'function') {
            mostrarCalculosDetallados();
        }

        if (typeof mostrarTablaMacros === 'function') {
            mostrarTablaMacros();
        }

        if (typeof mostrarMacronutrientesDistribucion === 'function') {
            mostrarMacronutrientesDistribucion();
        }

        if (typeof mostrarDistribucionEntrenos === 'function') {
            mostrarDistribucionEntrenos();
        }

        // Actualizar plan de alimentación si existe
        // Nota: Si el plan fue generado automáticamente, se regenerará con el nuevo objetivo
        // Si el plan fue editado manualmente, se mantendrá pero con nuevos objetivos calóricos
        if (typeof mostrarPlanAlimentacion === 'function') {
            try {
                console.log('🔄 Regenerando plan de alimentación con nuevo objetivo...');
                // Asegurar que el objetivo esté actualizado en datosUsuario antes de regenerar
                const objetivoSelect = document.getElementById('objetivo');
                if (objetivoSelect && objetivoSelect.value) {
                    datosUsuario.objetivo = objetivoSelect.value;
                    window.datosUsuario = datosUsuario;
                    console.log(`📋 Objetivo actualizado en datosUsuario: ${datosUsuario.objetivo}`);
                }
                mostrarPlanAlimentacion();
                console.log('✅ Plan de alimentación regenerado');
            } catch (error) {
                console.error('❌ Error al actualizar plan de alimentación:', error);
            }
        }

        // Si hay tabla editable (modo manual), actualizar los objetivos calóricos
        if (window.tablaEditable) {
            // Actualizar estilos del día (esto actualiza los objetivos mostrados)
            if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                window.tablaEditable.actualizarEstilosDia();
            }
            // Actualizar totales diarios para recalcular el progreso con los nuevos objetivos
            if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                window.tablaEditable.actualizarTotalesDiarios();
            }
        }

        // Actualizar gráficos
        // COMENTADO: Gráficos eliminados por problemas en móviles/tablets
        // setTimeout(() => {
        //     actualizarGraficosMacronutrientes();
        // }, 200);

        console.log('✅ Todo actualizado automáticamente (incluyendo plan de alimentación)');
    } catch (error) {
        console.error('❌ Error al actualizar automáticamente:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Event listener para el selector de objetivo
    const objetivoSelect = document.getElementById('objetivo');
    if (objetivoSelect) {
        // Guardar el valor inicial para detectar cambios
        objetivoSelect.dataset.objetivoAnterior = objetivoSelect.value;

        objetivoSelect.addEventListener('change', function () {
            actualizarTodoAutomaticamente();
        });

        // Si ya hay un objetivo seleccionado al cargar la página, actualizar valores
        if (objetivoSelect.value) {
            // Esperar un momento para que todos los elementos estén listos
            setTimeout(() => {
                window.actualizarSuperavitPorObjetivo();
            }, 100);
        }
    }

    // Event listeners para los selects de superávit
    const superavitEntrenoInput = document.getElementById('superavitEntreno');
    const superavitDescansoInput = document.getElementById('superavitDescanso');

    if (superavitEntrenoInput) {
        superavitEntrenoInput.addEventListener('change', function () {
            actualizarTodoAutomaticamente();
        });
    }

    if (superavitDescansoInput) {
        superavitDescansoInput.addEventListener('change', function () {
            actualizarTodoAutomaticamente();
        });
    }

    // Event listeners para todos los campos que afectan los cálculos
    const camposCalculo = [
        'edad',
        'sexo',
        'altura',
        'peso',
        'tipoPersona',
        'actividadFisicaDeporte',
        'tipoTermogenico'
    ];

    camposCalculo.forEach(campoId => {
        const campo = document.getElementById(campoId);
        if (campo) {
            // Usar 'input' para campos de texto/número y 'change' para selects
            const evento = campo.tagName === 'SELECT' ? 'change' : 'input';

            campo.addEventListener(evento, function () {
                // Debounce: esperar 300ms después del último cambio para evitar cálculos excesivos
                clearTimeout(campo.dataset.timeoutId);
                campo.dataset.timeoutId = setTimeout(() => {
                    actualizarTodoAutomaticamente();
                }, 300);
            });
        }
    });

    // Event listeners para los checkboxes de días de entrenamiento
    const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]');
    diasEntrenoCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            // Actualizar cuando cambian los días de entrenamiento
            actualizarTodoAutomaticamente();
        });
    });

    // Event listener para el formulario
    const dietForm = document.getElementById('dietForm');
    if (dietForm) {
        dietForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Obtener referencia al botón de submit
            const submitButton = document.querySelector('#dietForm button[type="submit"]');

            // Deshabilitar botón y mostrar estado de carga visual (sin overlay todavía)
            if (submitButton) {
                submitButton.classList.add('btn-loading');
                submitButton.disabled = true;
            }

            try {
                // Validar que el usuario esté autenticado
                if (!window.authManager || !window.authManager.isAuthenticated()) {
                    // Restaurar botón
                    if (submitButton) {
                        submitButton.classList.remove('btn-loading');
                        submitButton.disabled = false;
                    }
                    window.uiManager?.openModal();
                    mostrarNotificacion('⚠️ Debes iniciar sesión para generar dietas', 'error');
                    return;
                }

                // Recopilar intolerancias seleccionadas
                const checkboxesIntolerancias = document.querySelectorAll('input[name="intolerancia"]:checked');
                const intolerancias = Array.from(checkboxesIntolerancias).map(cb => cb.value);

                // Recopilar preferencias dietéticas seleccionadas
                const checkboxesPreferencias = document.querySelectorAll('input[name="preferencia"]:checked');
                const preferencias = Array.from(checkboxesPreferencias).map(cb => cb.value);

                // Combinar intolerancias y prohibiciones adicionales
                const prohibicionesElement = document.getElementById('prohibiciones');
                const prohibicionesAdicionales = prohibicionesElement ? prohibicionesElement.value : '';
                const todasLasProhibiciones = [...intolerancias, prohibicionesAdicionales].filter(p => p.trim() !== '').join(', ');

                // Obtener días de entrenamiento seleccionados
                const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]:checked');
                const diasEntreno = Array.from(diasEntrenoCheckboxes).map(cb => cb.value);
                const numDiasEntreno = diasEntreno.length;

                // Obtener actividad física del deporte
                const actividadFisicaDeporte = document.getElementById('actividadFisicaDeporte')?.value || 'moderada';

                // Validar coherencia entre días de entrenamiento y nivel de actividad
                const rangosActividad = {
                    'sedentario': { min: 0, max: 2, descripcion: '0-2 días' },
                    'ligera': { min: 1, max: 3, descripcion: '1-3 días' },
                    'moderada': { min: 3, max: 5, descripcion: '3-5 días' },
                    'intensa': { min: 6, max: 7, descripcion: '6-7 días' },
                    'muy-intensa': { min: 6, max: 7, descripcion: '6-7 días' }
                };

                const rangoEsperado = rangosActividad[actividadFisicaDeporte];
                if (rangoEsperado && (numDiasEntreno < rangoEsperado.min || numDiasEntreno > rangoEsperado.max)) {
                    const actividadTexto = {
                        'sedentario': 'Sedentaria',
                        'ligera': 'Ligera (1-3 días)',
                        'moderada': 'Moderada (3-5 días)',
                        'intensa': 'Intensa (6-7 días)',
                        'muy-intensa': 'Muy intensa (6-7 días)'
                    }[actividadFisicaDeporte] || actividadFisicaDeporte;

                    // Ocultar loading overlay si está visible
                    if (window.hideLoadingOverlay) {
                        window.hideLoadingOverlay();
                    }

                    // Restaurar botón
                    if (submitButton) {
                        submitButton.classList.remove('btn-loading');
                        submitButton.disabled = false;
                    }

                    mostrarNotificacion(
                        `⚠️ Inconsistencia detectada: Has seleccionado "${actividadTexto}" pero has marcado ${numDiasEntreno} día(s) de entrenamiento. ` +
                        `Para esta actividad, el rango esperado es ${rangoEsperado.descripcion}. ` +
                        `Por favor, ajusta los días de entrenamiento o cambia el nivel de actividad antes de generar el plan.`,
                        'error'
                    );
                    return; // Detener la generación de la dieta
                }

                // Validar que los campos requeridos existan antes de acceder
                const nombreElem = document.getElementById('nombre');
                const fechaRegistroElem = document.getElementById('fechaRegistro');
                const sexoElem = document.getElementById('sexo');
                const edadElem = document.getElementById('edad');
                const alturaElem = document.getElementById('altura');
                const pesoElem = document.getElementById('peso');
                const tipoPersonaElem = document.getElementById('tipoPersona');
                const objetivoElem = document.getElementById('objetivo');
                const modoGeneracionElem = document.getElementById('modoGeneracion');
                const duracionElem = document.getElementById('duracion');
                const tipoTermogenicoElem = document.getElementById('tipoTermogenico');
                const superavitEntrenoElem = document.getElementById('superavitEntreno');
                const superavitDescansoElem = document.getElementById('superavitDescanso');

                if (!nombreElem || !fechaRegistroElem || !sexoElem || !edadElem || !alturaElem || !pesoElem || !tipoPersonaElem || !objetivoElem || !duracionElem) {
                    // Asegurar que el loading overlay esté oculto
                    if (window.hideLoadingOverlay) {
                        window.hideLoadingOverlay();
                    }
                    // Restaurar botón
                    if (submitButton) {
                        submitButton.classList.remove('btn-loading');
                        submitButton.disabled = false;
                    }
                    mostrarNotificacion('❌ Error: Faltan campos requeridos en el formulario', 'error');
                    console.error('Campos faltantes:', {
                        nombre: !!nombreElem,
                        fechaRegistro: !!fechaRegistroElem,
                        sexo: !!sexoElem,
                        edad: !!edadElem,
                        altura: !!alturaElem,
                        peso: !!pesoElem,
                        tipoPersona: !!tipoPersonaElem,
                        objetivo: !!objetivoElem,
                        duracion: !!duracionElem
                    });
                    return;
                }

                // Limpiar ID de dieta cargada cuando se genera una nueva dieta
                window.dietaIdCargada = null;
                console.log('🆕 Generando nueva dieta - ID de dieta cargada limpiado');

                datosUsuario = {
                    nombre: nombreElem.value,
                    fechaRegistro: fechaRegistroElem.value,
                    sexo: sexoElem.value,
                    edad: parseInt(edadElem.value) || 0,
                    altura: parseFloat(alturaElem.value) || 0,
                    peso: parseFloat(pesoElem.value) || 0,
                    tipoPersona: tipoPersonaElem.value,
                    objetivo: objetivoElem.value,
                    modoGeneracion: modoGeneracionElem ? (modoGeneracionElem.value || 'automatico') : 'automatico',
                    prohibiciones: todasLasProhibiciones,
                    intolerancias: intolerancias,
                    preferencias: preferencias, // Guardar preferencias dietéticas
                    duracion: duracionElem.value,
                    diasEntreno: diasEntreno,
                    actividadFisicaDeporte: actividadFisicaDeporte,
                    tipoTermogenico: tipoTermogenicoElem ? tipoTermogenicoElem.value : 'no-sedentaria',
                    superavitEntreno: superavitEntrenoElem ? parseFloat(superavitEntrenoElem.value || 5) : 5,
                    superavitDescanso: superavitDescansoElem ? parseFloat(superavitDescansoElem.value || 5) : 5
                };

                // Calcular macronutrientes con manejo de errores
                try {
                    calcularMacronutrientes();
                } catch (error) {
                    console.error('❌ Error al calcular macronutrientes:', error);
                    // Asegurar que el loading overlay esté oculto
                    if (window.hideLoadingOverlay) {
                        window.hideLoadingOverlay();
                    }
                    // Restaurar botón
                    if (submitButton) {
                        submitButton.classList.remove('btn-loading');
                        submitButton.disabled = false;
                    }
                    mostrarNotificacion('❌ Error al calcular macronutrientes: ' + error.message, 'error');
                    return;
                }

                // Actualizar referencia global
                window.datosUsuario = datosUsuario;

                // Marcar operación crítica para prevenir reload del Service Worker
                if (window.marcarOperacionCritica) {
                    window.marcarOperacionCritica(true);
                }

                // Update loading message - SOLO DESPUÉS de todas las validaciones
                window.showLoadingOverlay('Calculando macronutrientes...');
                await new Promise(resolve => setTimeout(resolve, 300));

                window.showLoadingOverlay('Generando plan de alimentación...');

                // Timeout de seguridad para evitar carga infinita (30 segundos)
                const timeoutId = setTimeout(() => {
                    console.error('⏱️ Timeout: La generación del plan está tardando demasiado');
                    mostrarNotificacion('⏱️ La generación está tardando más de lo esperado. Por favor, intenta de nuevo.', 'error');
                    window.hideLoadingOverlay();
                    const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.classList.remove('btn-loading');
                        submitBtn.disabled = false;
                    }
                    if (window.marcarOperacionCritica) {
                        window.marcarOperacionCritica(false);
                    }
                }, 30000); // 30 segundos

                try {
                    await new Promise(resolve => setTimeout(resolve, 300));

                    // Generar el plan ANTES de mostrar resultados
                    console.log('🔄 Iniciando generación del plan...');
                    if (typeof window.mostrarPlanAlimentacion === 'function') {
                        try {
                            window.mostrarPlanAlimentacion();
                            console.log('✅ Plan generado correctamente');
                        } catch (planError) {
                            console.error('❌ Error al generar el plan:', planError);
                            clearTimeout(timeoutId);
                            window.hideLoadingOverlay();
                            const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                            if (submitBtn) {
                                submitBtn.classList.remove('btn-loading');
                                submitBtn.disabled = false;
                            }
                            if (window.marcarOperacionCritica) {
                                window.marcarOperacionCritica(false);
                            }
                            mostrarNotificacion('❌ Error al generar el plan: ' + planError.message, 'error');
                            return; // Salir temprano si hay error
                        }
                    } else {
                        console.warn('⚠️ mostrarPlanAlimentacion no está disponible');
                        clearTimeout(timeoutId);
                        window.hideLoadingOverlay();
                        const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                        if (submitBtn) {
                            submitBtn.classList.remove('btn-loading');
                            submitBtn.disabled = false;
                        }
                        if (window.marcarOperacionCritica) {
                            window.marcarOperacionCritica(false);
                        }
                        mostrarNotificacion('❌ Error: Función de generación no disponible', 'error');
                        return;
                    }

                    // Esperar un momento antes de mostrar resultados para asegurar que todo esté listo
                    await new Promise(resolve => setTimeout(resolve, 100));

                    // Mostrar resultados con manejo de errores
                    if (window.mostrarResultados) {
                        try {
                            window.mostrarResultados();
                            // Cancelar timeout si todo salió bien
                            clearTimeout(timeoutId);
                            // Hide loading after results are shown
                            setTimeout(() => {
                                window.hideLoadingOverlay();
                                // Restore submit button
                                const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                                if (submitBtn) {
                                    submitBtn.classList.remove('btn-loading');
                                    submitBtn.disabled = false;
                                }
                            }, 500);
                        } catch (resultadosError) {
                            console.error('❌ Error al mostrar resultados:', resultadosError);
                            clearTimeout(timeoutId);
                            window.hideLoadingOverlay();
                            const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                            if (submitBtn) {
                                submitBtn.classList.remove('btn-loading');
                                submitBtn.disabled = false;
                            }
                            if (window.marcarOperacionCritica) {
                                window.marcarOperacionCritica(false);
                            }
                            mostrarNotificacion('❌ Error al mostrar resultados: ' + resultadosError.message, 'error');
                        }
                    } else {
                        console.error('❌ mostrarResultados no está disponible');
                        clearTimeout(timeoutId);
                        mostrarNotificacion('❌ Error: No se puede mostrar el plan de alimentación', 'error');
                        window.hideLoadingOverlay();
                        const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                        if (submitBtn) {
                            submitBtn.classList.remove('btn-loading');
                            submitBtn.disabled = false;
                        }
                        if (window.marcarOperacionCritica) {
                            window.marcarOperacionCritica(false);
                        }
                    }
                } catch (error) {
                    console.error('❌ Error crítico al generar o mostrar resultados:', error);
                    clearTimeout(timeoutId);
                    mostrarNotificacion('❌ Error al generar el plan: ' + error.message, 'error');
                    window.hideLoadingOverlay();
                    const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.classList.remove('btn-loading');
                        submitBtn.disabled = false;
                    }
                    if (window.marcarOperacionCritica) {
                        window.marcarOperacionCritica(false);
                    }
                } finally {
                    // Desmarcar operación crítica después de un delay para asegurar que todo se haya renderizado
                    // Solo si no se ha desmarcado ya en los catch anteriores
                    setTimeout(() => {
                        if (window.marcarOperacionCritica) {
                            window.marcarOperacionCritica(false);
                        }
                    }, 2000); // Esperar 2 segundos después de mostrar resultados
                }
            } catch (error) {
                console.error('❌ Error crítico al procesar formulario:', error);
                mostrarNotificacion('❌ Error crítico al generar el plan: ' + error.message, 'error');
                window.hideLoadingOverlay();
                // Restore submit button
                const submitBtn = document.querySelector('#dietForm button[type="submit"]');
                if (submitBtn) {
                    submitBtn.classList.remove('btn-loading');
                    submitBtn.disabled = false;
                }
                // Asegurar que se desmarque la operación crítica incluso si hay error
                if (window.marcarOperacionCritica) {
                    window.marcarOperacionCritica(false);
                }
            }
        });
    }

    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });

    const hoy = new Date();
    const fechaInput = document.getElementById('fechaRegistro');
    if (fechaInput) {
        fechaInput.valueAsDate = hoy;
    }

    // ============================================
    // ENHANCED UX: Real-time validation & feedback
    // ============================================

    // Real-time form validation
    const formInputs = document.querySelectorAll('#dietForm input, #dietForm select, #dietForm textarea');
    formInputs.forEach(input => {
        // Validate on blur
        input.addEventListener('blur', function () {
            validateField(this);
        });

        // Validate on input (for immediate feedback)
        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                validateField(this);
            }
        });
    });

    // Function to validate individual field
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        // Remove previous validation messages
        const existingMessage = formGroup.querySelector('.field-error-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Check validity
        if (field.validity.valid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');

            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'field-error-message';
            errorMessage.textContent = getValidationMessage(field);
            formGroup.appendChild(errorMessage);
        }
    }

    // Get validation message for field
    function getValidationMessage(field) {
        if (field.validity.valueMissing) {
            return 'Este campo es obligatorio';
        }
        if (field.validity.rangeOverflow) {
            return `El valor máximo es ${field.max}`;
        }
        if (field.validity.rangeUnderflow) {
            return `El valor mínimo es ${field.min}`;
        }
        if (field.validity.typeMismatch) {
            return 'El formato no es válido';
        }
        return 'Por favor, corrige este campo';
    }

    // Loading overlay management
    window.showLoadingOverlay = function (message = 'Generando plan de alimentación...') {
        const overlay = document.getElementById('loadingOverlay');
        const messageEl = document.getElementById('loadingMessage');
        if (overlay) {
            if (messageEl) messageEl.textContent = message;
            overlay.classList.add('active');
        }
    };

    window.hideLoadingOverlay = function () {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    };

    // Enhanced submit button feedback
    const submitButton = document.querySelector('#dietForm button[type="submit"]');
    // COMENTADO: Este event listener causaba que el loading overlay se mostrara antes de las validaciones
    // El loading overlay ahora se muestra solo después de pasar todas las validaciones en el event listener principal
    /*
    if (submitButton && dietForm) {
        dietForm.addEventListener('submit', function() {
            // Show loading state
            submitButton.classList.add('btn-loading');
            submitButton.disabled = true;
            window.showLoadingOverlay('Generando tu plan personalizado...');
        });
    }
    */

    // Inicialización de tooltips
    const tooltipIcons = document.querySelectorAll('.tooltip-icon');
    tooltipIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.opacity = '1';
        });
        icon.addEventListener('mouseleave', function () {
            this.style.opacity = '0.7';
        });
    });

    // Add smooth transitions to cards
    const cards = document.querySelectorAll('.card-modern');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    // }); // Removed premature close

window.inicializarBotones = function() {
    // Botón guardar dieta
    const btnGuardar = document.getElementById('btnGuardar');
    if (btnGuardar) {
        btnGuardar.replaceWith(btnGuardar.cloneNode(true));
        const nuevoBtnGuardar = document.getElementById('btnGuardar');

        nuevoBtnGuardar.addEventListener('click', async function () {
            const boton = this;
            const textoOriginal = boton.innerHTML;

            if (!window.authManager || !window.authManager.isAuthenticated()) {
                window.uiManager?.openModal();
                mostrarNotificacion('⚠️ Debes iniciar sesión para guardar dietas', 'error');
                return;
            }

            // Verificar si hay una dieta cargada (tiene ID)
            const dietaIdCargada = window.dietaIdCargada || null;
            let accion = 'crear'; // Por defecto crear nueva

            if (dietaIdCargada) {
                // Preguntar al usuario qué quiere hacer
                const respuesta = confirm(
                    'Ya tienes una dieta cargada.\n\n' +
                    '¿Qué deseas hacer?\n\n' +
                    '• Aceptar: Actualizar la dieta existente\n' +
                    '• Cancelar: Crear una nueva dieta con los cambios'
                );

                if (respuesta) {
                    // Usuario quiere actualizar
                    accion = 'actualizar';
                } else {
                    // Usuario quiere crear nueva
                    accion = 'crear';
                    // Limpiar el ID para que se cree una nueva
                    window.dietaIdCargada = null;
                }
            }

            boton.innerHTML = accion === 'actualizar' ? '⏳ Actualizando...' : '⏳ Guardando...';
            boton.disabled = true;

            try {
                // Sincronizar plan manual antes de guardar (si aplica)
                if (datosUsuario.modoGeneracion === 'manual' && window.tablaEditable) {
                    sincronizarPlanManualConDatosUsuario();
                }

                // Si hay un cliente asociado, guardar en su historial
                if (window.clienteIdDieta && window.clienteService) {
                    await window.clienteService.agregarDieta(window.clienteIdDieta, datosUsuario);
                }

                // Asegurar que el ID esté en datosUsuario si hay una dieta cargada
                if (dietaIdCargada && !datosUsuario.id) {
                    datosUsuario.id = dietaIdCargada;
                    console.log(`💾 ID agregado a datosUsuario antes de guardar: ${dietaIdCargada}`);
                }

                let resultado;
                if (accion === 'actualizar' && dietaIdCargada) {
                    // Actualizar dieta existente
                    console.log(`🔄 Actualizando dieta existente con ID: ${dietaIdCargada}`);
                    console.log(`📋 ID en datosUsuario: ${datosUsuario.id || 'NO TIENE'}`);
                    console.log(`📋 ID en window.dietaIdCargada: ${window.dietaIdCargada || 'NO TIENE'}`);

                    // Usar el ID de dietaIdCargada como fuente de verdad
                    const idParaActualizar = dietaIdCargada || datosUsuario.id || window.dietaIdCargada;
                    if (!idParaActualizar) {
                        throw new Error('No se puede actualizar: ID de dieta no encontrado');
                    }

                    resultado = await window.dietaService.actualizarDieta(idParaActualizar, datosUsuario);

                    // Mantener el ID después de actualizar
                    if (resultado.success) {
                        window.dietaIdCargada = idParaActualizar;
                        datosUsuario.id = idParaActualizar;
                    }
                } else {
                    // Crear nueva dieta
                    console.log(`➕ Creando nueva dieta`);
                    // Asegurar que no hay ID en datosUsuario para crear nueva
                    delete datosUsuario.id;
                    window.dietaIdCargada = null;

                    resultado = await window.dietaService.guardarDieta(datosUsuario);

                    // Si se creó exitosamente, guardar el nuevo ID
                    if (resultado.success && resultado.dietaId) {
                        window.dietaIdCargada = resultado.dietaId;
                        datosUsuario.id = resultado.dietaId;
                        console.log(`✅ Nueva dieta creada con ID: ${resultado.dietaId}`);
                    }
                }

                if (resultado.success) {
                    const mensaje = accion === 'actualizar'
                        ? '✅ Dieta actualizada correctamente'
                        : '✅ Dieta guardada correctamente';
                    mostrarNotificacion(mensaje, 'success');
                    boton.innerHTML = '✅ Guardado';
                    setTimeout(() => {
                        boton.innerHTML = textoOriginal;
                        boton.disabled = false;
                    }, 2000);
                } else {
                    mostrarNotificacion('❌ Error al guardar: ' + resultado.error, 'error');
                    boton.innerHTML = textoOriginal;
                    boton.disabled = false;
                }
            } catch (error) {
                console.error('Error:', error);
                mostrarNotificacion('❌ Error al guardar dieta', 'error');
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
            }
        });
    }

    // Botón editar dieta
    const btnEditarDieta = document.getElementById('btnEditarDieta');
    if (btnEditarDieta) {
        btnEditarDieta.replaceWith(btnEditarDieta.cloneNode(true));
        const nuevoBtnEditar = document.getElementById('btnEditarDieta');

        nuevoBtnEditar.addEventListener('click', function () {
            // Usar el nuevo sistema de tabla editable para edición
            if (window.tablaEditable) {
                // Cambiar al modo manual si no está ya activado
                const modoActual = datosUsuario.modoGeneracion || 'automatico';
                if (modoActual !== 'manual') {
                    datosUsuario.modoGeneracion = 'manual';
                    mostrarTablaEditable();
                    mostrarNotificacion('✏️ Modo edición activado. Puedes editar alimentos directamente en las tablas.', 'info');
                } else {
                    mostrarTablaEditable();
                    mostrarNotificacion('✏️ Modo edición ya activado. Haz clic en cualquier fila para editar.', 'info');
                }
            } else {
                mostrarNotificacion('⚠️ Sistema de edición no disponible. Recarga la página.', 'error');
            }
        });
    }

    // Botón actualizar dieta
    const btnActualizarDieta = document.getElementById('btnActualizarDieta');
    if (btnActualizarDieta) {
        btnActualizarDieta.replaceWith(btnActualizarDieta.cloneNode(true));
        const nuevoBtnActualizar = document.getElementById('btnActualizarDieta');

        nuevoBtnActualizar.addEventListener('click', async function () {
            try {
                // Mostrar loading
                window.showLoadingOverlay('Actualizando dieta con nuevos valores...');

                // Recalcular macronutrientes con los valores actuales del formulario
                calcularMacronutrientes();
                recalcularIngestasPorSuperavit();

                // Esperar un momento para que los cálculos se completen
                await new Promise(resolve => setTimeout(resolve, 300));

                // Regenerar el plan de alimentación
                if (typeof window.mostrarPlanAlimentacion === 'function') {
                    window.mostrarPlanAlimentacion();

                    // Actualizar todas las tablas y visualizaciones
                    if (typeof mostrarMacronutrientesDistribucion === 'function') {
                        mostrarMacronutrientesDistribucion();
                    }
                    if (typeof mostrarCalculosDetallados === 'function') {
                        mostrarCalculosDetallados();
                    }
                    if (typeof mostrarTablaMacros === 'function') {
                        mostrarTablaMacros();
                    }
                    if (typeof mostrarInfoUsuario === 'function') {
                        mostrarInfoUsuario();
                    }
                    if (typeof mostrarDistribucionEntrenos === 'function') {
                        mostrarDistribucionEntrenos();
                    }

                    // Actualizar gráficos
                    // COMENTADO: Gráficos eliminados por problemas en móviles/tablets
                    setTimeout(() => {
                        // actualizarGraficosMacronutrientes();
                        window.hideLoadingOverlay();
                        mostrarNotificacion('✅ Dieta actualizada correctamente con los nuevos valores', 'success');
                    }, 800);
                } else {
                    window.hideLoadingOverlay();
                    mostrarNotificacion('⚠️ No se puede actualizar la dieta. Por favor, genera una nueva dieta.', 'error');
                }
            } catch (error) {
                console.error('❌ Error al actualizar la dieta:', error);
                window.hideLoadingOverlay();
                mostrarNotificacion('❌ Error al actualizar la dieta: ' + error.message, 'error');
            }
        });
    }

    // ============================================
    // FUNCIONES AUXILIARES PARA GENERACIÓN DE PDF
    // ============================================

    /**
     * Obtiene los datos según la fuente especificada
     * @param {string} fuente - 'principal' o 'tabla-editable'
     * @returns {{datos: object, contenidoOriginal: HTMLElement|null, error: string|null}}
     */
    function obtenerDatosPDF(fuente) {
        if (fuente === 'principal') {
            if (!datosUsuario || !datosUsuario.nombre) {
                return { datos: null, contenidoOriginal: null, error: 'Error: No hay datos de dieta para generar el PDF.' };
            }
            return {
                datos: datosUsuario,
                contenidoOriginal: document.getElementById('pdf-content'),
                error: null
            };
        } else if (fuente === 'tabla-editable') {
            if (!window.tablaEditable) {
                return { datos: null, contenidoOriginal: null, error: 'Error: No hay datos de tabla editable disponibles.' };
            }
            const cab = window.tablaEditable.obtenerCabeceraExport();
            return {
                datos: {
                    nombre: cab.nombre,
                    edad: cab.edad,
                    altura: cab.altura,
                    peso: cab.peso,
                    imc: cab.imc,
                    sexo: cab.sexo,
                    tipoPersona: cab.tipoPersona,
                    objetivo: cab.objetivo,
                    diasEntreno: window.tablaEditable.planSemana ? Object.keys(window.tablaEditable.planSemana) : []
                },
                contenidoOriginal: null,
                error: null
            };
        }
        return { datos: null, contenidoOriginal: null, error: 'Error: Fuente de datos no reconocida.' };
    }

    /**
     * Genera el CSS para el PDF (minimalista, blanco y negro)
     * @param {Object} tamanosFuente - Tamaños de fuente dinámicos (opcional)
     * @returns {string}
     */
    function generarCSSPDF(tamanosFuente = null) {
        // Usar tamaños dinámicos si están disponibles, sino usar valores por defecto
        const tamanos = tamanosFuente || window.tamanosFuentePDF || {
            tamanoItemAlimento: 7.6,
            tamanoTituloComida: 7.8,
            tamanoHeader: 8.4,
            tamanoSubtitulo: 8.0
        };
        return `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html {
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                text-size-adjust: 100%;
            }
            body {
                font-family: 'Arial', 'Helvetica', sans-serif;
                font-size: 10.2pt;
                line-height: 1.6;
                color: #000;
                background: #fff;
                padding: 2mm 8mm 3mm 8mm;
                margin-bottom: 0;
                padding-bottom: 3mm;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            body.layout-landscape {
                padding: 0.5mm 5mm 3mm 5mm;
                max-height: 210mm;
                margin-bottom: 0;
                padding-bottom: 3mm;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .plan-tabla-editable {
                flex: 1;
                display: flex;
                flex-direction: column;
                min-height: 0;
            }
            .plan-tabla-editable table {
                max-height: 182mm;
                height: auto;
                flex: 1;
            }
            @media screen and (max-width: 800px) {
                body {
                    font-size: 9pt;
                    padding: 1.5mm 6mm 6mm 6mm;
                }
                body.layout-landscape {
                    padding: 1mm 5mm 4mm 5mm;
                }
                .titulo-principal {
                    font-size: 12pt !important;
                }
                .nombre-profesional {
                    font-size: 10pt !important;
                }
                .cliente-nombre {
                    font-size: 9pt !important;
                }
                table {
                    font-size: 6.5pt !important;
                }
                th, td {
                    padding: 2px !important;
                    font-size: 6.5pt !important;
                }
                .tabla-plan-semanal th,
                .tabla-plan-semanal td {
                    font-size: 6.5pt !important;
                    padding: 1px !important;
                }
                .celda-dia .item-alimento {
                    font-size: 6pt !important;
                }
                .titulo-comida {
                    font-size: 6.5pt !important;
                }
            }
            .header {
                margin-bottom: 0.5mm;
                position: relative;
                margin-top: 0;
                width: 100%;
                padding: 0;
            }
            .header-top-row {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;
                gap: 4mm;
                padding: 0 2mm;
            }
            .contacto-left {
                font-size: 6.8pt;
                color: #000;
                font-weight: 600;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
                gap: 0.4mm;
                line-height: 1.2;
                padding-left: 0;
            }
            .contacto-left span { white-space: nowrap; }
            .titulo-block {
                flex: 1;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 0.4mm;
            }
            .logo-header-right {
                display: flex;
                align-items: flex-start;
                justify-content: flex-end;
                min-width: 28mm;
            }
            .logo-pdf {
                width: 25mm;
                height: auto;
                max-height: 20mm;
                object-fit: contain;
            }
            .titulo-principal {
                font-size: 14pt;
                font-weight: 800;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                margin: 1mm 0 0 0;
                padding: 0;
                color: #000;
                text-align: center;
                line-height: 0.95;
            }
            .header-content {
                text-align: center;
                position: relative;
                margin: 0;
                padding: 0;
            }
            .nombre-profesional {
                font-size: 11pt;
                font-weight: 700;
                margin: 0.5mm 0 0 0;
                padding: 0;
                color: #000;
                line-height: 0.95;
            }
            .especialidades {
                font-size: 6pt;
                color: #000;
                font-weight: 600;
                text-transform: uppercase;
                margin: 1.2mm 0 4mm 0;
                padding: 0;
                line-height: 1;
            }
            .cliente-info {
                margin-bottom: 0.5mm;
                padding-bottom: 0.3mm;
                border-bottom: 1px solid #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1mm;
                text-align: center;
                width: 100%;
            }
            .cliente-nombre {
                font-weight: 700;
                font-size: 10pt;
                color: #000;
                line-height: 1.2;
                white-space: nowrap;
                width: 100%;
            }
            .cliente-datos {
                font-size: 7.2pt;
                color: #000;
                font-weight: 500;
                line-height: 1.3;
                width: 100%;
                text-align: center;
            }
            .recordatorio-agua {
                color: #4FC3F7;
                font-weight: 700;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 4px 0;
                font-size: 7.6pt;
            }
            th {
                border: 1px solid #000;
                padding: 4px;
                text-align: left;
                font-weight: 700;
                background: #fff;
                color: #000;
                font-size: 8.4pt;
            }
            td {
                border: 1px solid #666;
                padding: 3px;
                text-align: left;
                background: #fff;
                color: #000;
                font-size: 7.4pt;
                line-height: 1.2;
            }
            .plan-tabla-editable { 
                width: 100%; 
                margin-top: 4px;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 0;
            }
            .pdf-semana {
                margin-bottom: 10px;
                page-break-after: always;
                page-break-inside: avoid;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 0;
            }
            .pdf-semana:last-of-type { 
                page-break-after: auto; 
            }
            .titulo-semana {
                font-size: 14pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 4px;
                flex-shrink: 0;
            }
            .tabla-plan-semanal {
                width: 100%;
                max-width: 100%;
                border-collapse: collapse;
                table-layout: fixed;
                margin: 0 auto;
                page-break-inside: avoid;
                flex-shrink: 0;
                max-height: 182mm;
                height: auto;
                border-bottom: 2px solid #000 !important;
            }
            .plan-tabla-editable {
                width: 100%;
                max-height: 182mm;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                flex: 1;
            }
            .pdf-semana {
                width: 100%;
                max-height: 182mm;
                overflow: hidden;
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .pdf-semana table {
                flex: 1;
                height: 100%;
            }
            .tabla-plan-semanal th,
            .tabla-plan-semanal td {
                border: 1px solid #666;
                padding: ${Math.max(1, tamanos.tamanoItemAlimento * 0.1)}px ${Math.max(1, tamanos.tamanoItemAlimento * 0.08)}px;
                font-size: ${tamanos.tamanoItemAlimento}pt;
                vertical-align: top;
                word-wrap: break-word;
                overflow-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: ${Math.max(1.1, Math.min(1.3, 1.0 + (tamanos.tamanoItemAlimento - 6) * 0.02))};
            }
            .tabla-plan-semanal tbody tr:last-child td {
                border-bottom: 2px solid #000 !important;
            }
            .tabla-plan-semanal tbody tr:last-child th {
                border-bottom: 2px solid #000 !important;
            }
            .tabla-plan-semanal th {
                background: #fff;
                font-weight: 700;
                text-align: center;
                padding: ${Math.max(2, tamanos.tamanoHeader * 0.15)}px ${Math.max(1, tamanos.tamanoHeader * 0.1)}px;
                font-size: ${tamanos.tamanoHeader}pt;
                line-height: ${Math.max(1.1, Math.min(1.2, 1.0 + (tamanos.tamanoHeader - 6) * 0.015))};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .tabla-plan-semanal th,
            .tabla-plan-semanal td {
                width: ${Math.round((100 / 7) * 100) / 100}%;
            }
            .tabla-plan-semanal .subtitulo-dia {
                display: block;
                font-size: ${tamanos.tamanoSubtitulo}pt;
                margin-top: 2px;
                font-weight: 600;
            }
            .celda-dia {
                min-height: 12px;
                height: auto;
                word-break: break-word;
                vertical-align: top;
                padding: ${Math.max(1, tamanos.tamanoItemAlimento * 0.1)}px ${Math.max(1, tamanos.tamanoItemAlimento * 0.08)}px;
                overflow: hidden;
            }
            .celda-dia .item-alimento {
                display: block;
                margin-left: 6px;
                margin-bottom: 1px;
                position: relative;
                font-size: ${tamanos.tamanoItemAlimento}pt;
                line-height: ${Math.max(1.1, Math.min(1.3, 1.0 + (tamanos.tamanoItemAlimento - 6) * 0.02))};
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            .celda-dia .item-alimento::before {
                content: '•';
                position: absolute;
                left: -8px;
            }
            .celda-dia .item-alimento:last-child {
                margin-bottom: 0;
            }
            .celda-vacia {
                color: #888;
                font-style: italic;
            }
            .titulo-comida {
                display: block;
                font-weight: 700;
                margin-bottom: ${Math.max(1, Math.min(2, tamanos.tamanoTituloComida * 0.12))}px;
                font-size: ${tamanos.tamanoTituloComida}pt;
                line-height: ${Math.max(1.1, Math.min(1.25, 1.0 + (tamanos.tamanoTituloComida - 6) * 0.02))};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            /* Estilos anteriores mantenidos para compatibilidad */
            .dia-plan {
                margin: 8px 0;
                page-break-inside: avoid;
                border: 1px solid #000;
                padding: 8px;
                display: block;
                width: 100%;
            }
            .dia-titulo,
            .dia-titulo-header {
                font-weight: 700;
                font-size: 11pt;
                text-transform: uppercase;
                margin-bottom: 6px;
                border-bottom: 1px solid #000;
                padding-bottom: 4px;
                line-height: 1.2;
                display: block;
            }
            .comida-row { margin: 8px 0; line-height: 1.5; }
            .comida-nombre {
                font-weight: 600;
                font-size: 10.5pt;
            }
            .comida-row .comida-nombre + * {
                font-size: 10pt;
                line-height: 1.5;
            }
            h2, h3 {
                color: #000;
                font-weight: 700;
                margin: 12px 0 8px 0;
                font-size: 13pt;
                line-height: 1.3;
            }
            .section {
                margin: 20px 0;
                page-break-inside: avoid;
            }
            @media print {
                body { padding: 15mm; }
                .dia-plan { page-break-inside: avoid; }
                .hidratacion-section {
                    margin-top: 50px !important;
                    margin-bottom: 30px !important;
                    page-break-inside: avoid;
                    page-break-before: auto;
                    clear: both;
                }
            }
            .hidratacion-section {
                margin-top: 40px;
                margin-bottom: 20px;
                page-break-inside: avoid;
                clear: both;
            }
        `;
    }

    /**
     * Genera el header del PDF con información profesional y del cliente
     * @param {object} datos - Datos del cliente
     * @param {string} fecha - Fecha formateada
     * @returns {Promise<string>}
     */
    async function generarHeaderPDF(datos, fecha) {
        const nombreCliente = datos.nombre || 'Cliente';
        const subtags = [];
        if (datos.edad) subtags.push(`Edad: ${datos.edad}`);
        if (datos.altura) subtags.push(`Altura: ${datos.altura} cm`);
        if (datos.peso) subtags.push(`Peso: ${datos.peso} kg`);
        if (datos.imc) subtags.push(`IMC: ${datos.imc}`);
        if (datos.sexo) subtags.push(`Sexo: ${datos.sexo}`);
        if (datos.tipoPersona) subtags.push(`Tipo: ${datos.tipoPersona}`);
        if (datos.objetivo) subtags.push(`Objetivo: ${datos.objetivo}`);

        // Convertir logo a base64
        let logoBase64 = '';
        try {
            logoBase64 = await convertirImagenABase64('iconofit.png');
        } catch (e) {
            console.warn('No se pudo cargar el logo:', e);
        }

        const logoHTML = logoBase64 ? `<img src="${logoBase64}" alt="Logo" class="logo-pdf">` : '';
        const infoCliente = subtags.join(' · ');
        const recordatorioHidratacion = 'Hidratación: Consumir entre 2-3 litros de agua al día.';

        return `
            <div class="header">
                <div class="header-top-row">
                    <div class="contacto-left">
                        <span>📝 ${fecha}</span>
                        <span>📧 Maikafit1977@gmail.com</span>
                        <span>📞 +34 650 229 987</span>
                    </div>
                    <div class="titulo-block">
                        <div class="titulo-principal">PLAN DE ALIMENTACIÓN PERSONALIZADO</div>
                        <div class="nombre-profesional">MAIKA PORCUNA</div>
                        <div class="especialidades">Nutrición · Dietética · Suplementación · Nutrición Deportiva</div>
                    </div>
                    ${logoHTML ? `<div class="logo-header-right">${logoHTML}</div>` : '<div class="logo-header-right"></div>'}
                </div>
            </div>
            <div class="cliente-info">
                <div class="cliente-nombre">${nombreCliente}</div>
                <div class="cliente-datos">${infoCliente} · <span class="recordatorio-agua">${recordatorioHidratacion}</span></div>
            </div>
        `;
    }

    /**
     * Procesa el contenido HTML eliminando elementos no deseados y aplicando estilos minimalistas
     * @param {HTMLElement} clone - Clon del elemento original
     * @returns {HTMLElement}
     */
    function procesarContenidoParaPDF(clone) {
        // Remover tabs y contenido no necesario
        clone.querySelectorAll('.tabs, .tab-content:not(.active), .tmb-section, .tmb-calculator, #tmb-calculator').forEach(el => el.remove());

        // Remover completamente la tabla de macronutrientes del PDF
        const macroTable = clone.querySelector('.macro-table');
        if (macroTable) macroTable.remove();

        const tablaMacros = clone.querySelector('#tabla-macros, .tabla-macros');
        if (tablaMacros) {
            const macroTableContainer = tablaMacros.closest('.macro-table') || tablaMacros.parentElement;
            if (macroTableContainer) macroTableContainer.remove();
        }

        // Remover tabla de información del usuario si existe (datos duplicados)
        const infoUsuarioTable = clone.querySelector('.info-usuario-table, #info-usuario-table');
        if (infoUsuarioTable) {
            infoUsuarioTable.remove();
        }

        // Convertir a texto simple sin colores - MINIMALISTA BLANCO Y NEGRO
        clone.querySelectorAll('*').forEach(el => {
            el.style.color = '#000';
            el.style.backgroundColor = '#fff';
            el.style.background = '#fff';
            el.style.borderColor = '#000';
            el.style.border = el.style.border ? el.style.border.replace(/rgb\(\d+,\s*\d+,\s*\d+\)|#[a-fA-F0-9]{3,6}/g, '#000') : '1px solid #000';
            el.style.boxShadow = 'none';
            el.style.textShadow = 'none';
            el.style.filter = 'none';

            if (el.tagName === 'TH') {
                el.style.backgroundColor = '#fff';
                el.style.border = '1px solid #000';
                el.style.fontWeight = '700';
                el.style.color = '#000';
            }
            if (el.tagName === 'TD') {
                el.style.backgroundColor = '#fff';
                el.style.border = '1px solid #666';
                el.style.color = '#000';
            }
            if (el.tagName === 'H2' || el.tagName === 'H3') {
                el.style.color = '#000';
                el.style.borderColor = '#000';
            }
        });

        return clone;
    }

    /**
     * Construye una estructura normalizada del plan semanal para reutilizar en PDF/Excel
     * @returns {{diasBase: string[], comidas: string[], semanas: Array, formatoAlimento: Function, esDiaDescanso: Function}|null}
     */
    function construirPlanSemanalEstructurado() {
        const diasBase = window.tablaEditable?.dias || ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        const comidas = window.tablaEditable?.comidas || ['Desayuno', 'Media Mañana', 'Comida', 'Merienda', 'Cena'];
        const planEditable = window.tablaEditable?.planSemana;
        const planDatosUsuario = datosUsuario?.planSemana;

        const tieneDatos = (obj) => obj && typeof obj === 'object' && Object.keys(obj).length > 0;
        const plan = tieneDatos(planEditable) ? planEditable : (tieneDatos(planDatosUsuario) ? planDatosUsuario : {});

        const normalizar = (texto = '') => texto
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zñ ]/g, '')
            .trim();

        const esDiaDescanso = (nombreDia) => {
            if (!window.datosUsuario || !Array.isArray(window.datosUsuario.diasEntreno) || window.datosUsuario.diasEntreno.length === 0) {
                return false; // Si no hay días seleccionados, todos son de entreno por defecto (consistente con esDiaDescanso global)
            }
            const valorDia = normalizar(nombreDia);
            const diasEntrenoNormalizados = window.datosUsuario.diasEntreno.map(d => normalizar(d));
            return !diasEntrenoNormalizados.includes(valorDia);
        };

        const formatoAlimento = (item = {}) => {
            const gramos = item.gramos != null && item.gramos !== '' ? `${item.gramos}g` : '';
            const nombre = item.alimento || item.nombre || '';

            if (gramos && nombre) return `${gramos} ${nombre}`;
            if (nombre) return nombre;
            if (gramos) return gramos;
            return '';
        };

        const agrupados = {};
        diasBase.forEach(dia => agrupados[normalizar(dia)] = []);

        Object.entries(plan).forEach(([nombreDiaOriginal, datosDia]) => {
            const nombreNormalizado = normalizar(nombreDiaOriginal.split('-')[0]);
            if (!agrupados[nombreNormalizado]) {
                agrupados[nombreNormalizado] = [];
            }
            agrupados[nombreNormalizado].push({ nombre: nombreDiaOriginal, datos: datosDia });
        });

        const semanasCantidad = Math.max(1, ...Object.values(agrupados).map(arr => arr.length || 0));
        const semanas = [];
        let hayContenido = false;

        for (let semana = 0; semana < semanasCantidad; semana++) {
            const columnas = diasBase.map(dia => {
                const lista = agrupados[normalizar(dia)] || [];
                const entrada = lista[semana] || (semana === 0 && plan[dia] ? { nombre: dia, datos: plan[dia] } : null);
                const datosDia = entrada?.datos || null;

                const alimentosPorComida = {};
                comidas.forEach(comida => {
                    const items = datosDia && Array.isArray(datosDia[comida]) ? datosDia[comida] : [];
                    if (items.length > 0) {
                        hayContenido = true;
                    }
                    alimentosPorComida[comida] = items;
                });

                const titulo = entrada ? entrada.nombre : dia;
                return {
                    diaBase: dia,
                    titulo,
                    esDescanso: esDiaDescanso(titulo),
                    alimentosPorComida
                };
            });

            semanas.push({ indice: semana + 1, columnas });
        }

        if (!hayContenido) {
            return null;
        }

        return { diasBase, comidas, semanas, formatoAlimento, esDiaDescanso };
    }

    /**
     * Actualiza una representación consistente del plan semanal para otros módulos (ej. Excel)
     * @returns {ReturnType<typeof construirPlanSemanalEstructurado>}
     */
    function actualizarEstructuraPlanExport() {
        const estructura = construirPlanSemanalEstructurado();
        if (estructura) {
            const resumenPlano = {
                diasBase: estructura.diasBase.slice(),
                comidas: estructura.comidas.slice(),
                semanas: estructura.semanas.map(semana => ({
                    indice: semana.indice,
                    columnas: semana.columnas.map(col => {
                        const alimentosPorComida = {};
                        estructura.comidas.forEach(comida => {
                            const items = col.alimentosPorComida[comida] || [];
                            alimentosPorComida[comida] = items.map(item => estructura.formatoAlimento(item));
                        });
                        return {
                            diaBase: col.diaBase,
                            titulo: col.titulo,
                            esDescanso: col.esDescanso,
                            alimentosPorComida
                        };
                    })
                }))
            };
            datosUsuario.planExcelDatos = resumenPlano;
            window.datosUsuario = datosUsuario;
        } else if (datosUsuario.planExcelDatos) {
            delete datosUsuario.planExcelDatos;
        }
        return estructura;
    }
    window.actualizarEstructuraPlanExport = actualizarEstructuraPlanExport;

    /**
     * Calcula el tamaño de fuente dinámico basado en la cantidad de contenido
     * @param {Object} estructura - Estructura del plan semanal
     * @returns {Object} - Tamaños de fuente calculados
     */
    function calcularTamanosFuenteDinamicos(estructura) {
        const { diasBase, comidas, semanas } = estructura;

        // Contar total de alimentos en todas las celdas
        let totalAlimentos = 0;
        let maxAlimentosPorCelda = 0;

        semanas.forEach(semana => {
            semana.columnas.forEach(col => {
                comidas.forEach(comida => {
                    const items = col.alimentosPorComida[comida] || [];
                    totalAlimentos += items.length;
                    if (items.length > maxAlimentosPorCelda) {
                        maxAlimentosPorCelda = items.length;
                    }
                });
            });
        });

        // Calcular densidad: alimentos por celda promedio
        const totalCeldas = semanas.length * diasBase.length * comidas.length;
        const densidadAlimentos = totalCeldas > 0 ? totalAlimentos / totalCeldas : 0;

        // Tamaños base para A4 horizontal (297mm x 210mm)
        // Altura disponible aproximada: ~195mm (descontando header y márgenes mínimos)
        // Ancho disponible: ~287mm

        // Calcular tamaño de fuente basado en densidad y distribución
        // Objetivo: ajustar dinámicamente para mejor legibilidad y uso del espacio

        // Calcular altura promedio de contenido por celda (estimación)
        const alturaEstimadaPorCelda = (totalAlimentos / totalCeldas) * 4; // ~4mm por alimento

        // Tamaño base inicial - ajustado para que quepa en una sola hoja
        // Altura disponible: ~182mm (descontando header ~25mm y margen inferior 3mm)
        // Ancho disponible: ~287mm / 7 días = ~41mm por columna
        const alturaDisponiblePorCelda = 182 / 5; // ~36.4mm por fila de comida
        const anchoDisponiblePorCelda = 287 / 7; // ~41mm por columna

        // Calcular espacio disponible estimado por celda (en mm)
        const espacioDisponible = alturaDisponiblePorCelda * anchoDisponiblePorCelda; // mm²

        // Calcular espacio ocupado estimado
        const espacioOcupado = alturaEstimadaPorCelda * anchoDisponiblePorCelda;
        const porcentajeUso = espacioOcupado > 0 ? (espacioOcupado / espacioDisponible) * 100 : 0;

        // Calcular tamaño base - 10.0pt como tamaño base
        let tamanoBase = 10.0; // Tamaño base fijado en 10.0pt

        // Ajuste según densidad de alimentos
        if (densidadAlimentos < 1.0) {
            tamanoBase = Math.min(12.0, 11.0 + (1.0 - densidadAlimentos) * 1.0);
        } else if (densidadAlimentos < 2.0) {
            tamanoBase = Math.min(11.5, 11.0 + (2.0 - densidadAlimentos) * 0.5);
        } else if (densidadAlimentos < 3.0) {
            tamanoBase = 10.0;
        } else if (densidadAlimentos < 4.0) {
            tamanoBase = Math.max(9.0, 10.0 - (densidadAlimentos - 3.0) * 0.5);
        } else {
            tamanoBase = Math.max(8.5, 9.0 - (densidadAlimentos - 4.0) * 0.3);
        }

        // Ajuste según máximo de alimentos por celda
        if (maxAlimentosPorCelda > 8) {
            tamanoBase = Math.max(8.5, tamanoBase - 0.8);
        } else if (maxAlimentosPorCelda > 6) {
            tamanoBase = Math.max(9.0, tamanoBase - 0.5);
        } else if (maxAlimentosPorCelda <= 2 && densidadAlimentos < 2.0) {
            tamanoBase = Math.min(12.0, tamanoBase + 1.0);
        } else if (maxAlimentosPorCelda <= 3 && densidadAlimentos < 2.5) {
            tamanoBase = Math.min(11.5, tamanoBase + 0.8);
        }

        // Ajuste según altura estimada (para evitar desbordamiento)
        if (alturaEstimadaPorCelda > 35) {
            tamanoBase = Math.max(8.5, tamanoBase - 0.8);
        } else if (alturaEstimadaPorCelda > 30) {
            tamanoBase = Math.max(9.0, tamanoBase - 0.5);
        } else if (alturaEstimadaPorCelda < 15 && densidadAlimentos < 2.5) {
            tamanoBase = Math.min(11.5, tamanoBase + 0.8);
        }

        console.log(`📊 Cálculo dinámico: densidad=${densidadAlimentos.toFixed(2)}, maxPorCelda=${maxAlimentosPorCelda}, alturaEst=${alturaEstimadaPorCelda.toFixed(1)}mm, usoEspacio=${porcentajeUso.toFixed(1)}%, tamañoBase=${tamanoBase.toFixed(1)}pt`);

        // Redondear a 1 decimal
        tamanoBase = Math.round(tamanoBase * 10) / 10;

        // Calcular tamaños relativos con mejor proporción
        const tamanoItem = tamanoBase;
        const tamanoTitulo = Math.min(tamanoBase + 1.0, tamanoBase * 1.15); // Máximo 15% más grande
        const tamanoHeader = Math.min(tamanoBase + 1.5, tamanoBase * 1.25); // Máximo 25% más grande
        const tamanoSubtitulo = Math.min(tamanoBase + 0.5, tamanoBase * 1.1); // Máximo 10% más grande

        return {
            tamanoItemAlimento: tamanoItem,
            tamanoTituloComida: tamanoTitulo,
            tamanoHeader: tamanoHeader,
            tamanoSubtitulo: tamanoSubtitulo
        };
    }

    /**
     * Genera el HTML del plan desde tabla editable
     * @returns {string}
     */
    function generarHTMLDesdeTablaEditable() {
        const estructura = construirPlanSemanalEstructurado();
        if (!estructura) {
            return '<div class="plan-tabla-editable"><p style="padding:8px;font-size:9pt;">No hay datos disponibles para generar el plan semanal.</p></div>';
        }

        const { diasBase, comidas, semanas, formatoAlimento, esDiaDescanso } = estructura;

        // Calcular tamaños dinámicos
        const tamanos = calcularTamanosFuenteDinamicos(estructura);

        // Guardar tamaños en window para que el CSS los use
        window.tamanosFuentePDF = tamanos;

        const escapeHTML = (str = '') => String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        let html = '<div class="plan-tabla-editable">';

        semanas.forEach((semana, indice) => {
            html += '<div class="pdf-semana">';
            if (semanas.length > 1) {
                html += `<h2 class="titulo-semana">Semana ${indice + 1}</h2>`;
            }
            html += '<table class="tabla-plan-semanal"><thead><tr>';

            semana.columnas.forEach(col => {
                const icono = col.esDescanso ? '😴' : '💪';
                // Asegurar que el día se muestre correctamente
                const diaNombre = col.diaBase || col.titulo || 'Día';
                const etiquetaDia = `${diaNombre} ${icono}`;
                html += `<th title="${escapeHTML(diaNombre)}">${escapeHTML(etiquetaDia)}</th>`;
            });

            html += '</tr></thead><tbody>';

            comidas.forEach(comida => {
                html += '<tr>';
                semana.columnas.forEach(col => {
                    const items = col.alimentosPorComida[comida] || [];
                    if (!items.length) {
                        html += '<td class="celda-dia celda-vacia">-</td>';
                    } else {
                        const contenido = items
                            .map(item => `<span class="item-alimento">${escapeHTML(formatoAlimento(item))}</span>`)
                            .join(' ');
                        html += `<td class="celda-dia"><span class="titulo-comida">${escapeHTML(comida)}</span>${contenido}</td>`;
                    }
                });
                html += '</tr>';
            });

            html += '</tbody></table></div>';
        });

        html += '</div>';
        // Sin línea final, solo el margen inferior
        return html;
    }

    async function exportarExcelProfesional() {
        try {
            if (!window.ExcelJS || typeof window.ExcelJS.Workbook !== 'function') {
                throw new Error('No se cargó la librería ExcelJS');
            }
            if (typeof window.saveAs !== 'function') {
                throw new Error('No se encontró la función saveAs (FileSaver)');
            }

            // Asegurar que los cálculos estén actualizados antes de exportar
            if (window.MacronutrientesCalculator && typeof window.MacronutrientesCalculator.calcularMacronutrientes === 'function') {
                const formulario = {
                    edad: document.getElementById('edad'),
                    sexo: document.getElementById('sexo'),
                    altura: document.getElementById('altura'),
                    peso: document.getElementById('peso'),
                    objetivo: document.getElementById('objetivo'),
                    tipoPersona: document.getElementById('tipoPersona'),
                    actividadFisicaDeporte: document.getElementById('actividadFisicaDeporte'),
                    tipoTermogenico: document.getElementById('tipoTermogenico'),
                    superavitEntreno: document.getElementById('superavitEntreno'),
                    superavitDescanso: document.getElementById('superavitDescanso')
                };
                // Recalcular para asegurar que caloriasEntreno y caloriasDescanso estén actualizados
                datosUsuario = window.MacronutrientesCalculator.calcularMacronutrientes(datosUsuario, formulario);
                window.datosUsuario = datosUsuario;
            }

            const estructura = actualizarEstructuraPlanExport();
            if (!estructura) {
                mostrarNotificacion?.('⚠️ No hay datos suficientes para exportar a Excel', 'warning');
                return;
            }

            const ExcelJS = window.ExcelJS;
            const workbook = new ExcelJS.Workbook();
            workbook.creator = 'Maika Porcuna';
            workbook.created = new Date();
            workbook.modified = new Date();

            const cabecera = typeof window.tablaEditable?.obtenerCabeceraExport === 'function'
                ? window.tablaEditable.obtenerCabeceraExport()
                : {};

            const diasBase = estructura.diasBase;
            const comidas = estructura.comidas;

            estructura.semanas.forEach((semana, indexSemana) => {
                const sheetName = estructura.semanas.length > 1 ? `Semana ${indexSemana + 1}` : 'Plan Semanal';
                const sheet = workbook.addWorksheet(sheetName, {
                    properties: { defaultRowHeight: 20 },
                    pageSetup: {
                        orientation: 'landscape',
                        paperSize: 9,
                        fitToPage: true,
                        fitToWidth: 1,
                        fitToHeight: 0
                    },
                    views: [{ state: 'frozen', xSplit: 0, ySplit: 5 }]
                });

                const totalColumnas = diasBase.length;

                sheet.mergeCells(1, 1, 1, totalColumnas);
                const tituloCell = sheet.getCell(1, 1);
                tituloCell.value = 'PLAN DE ALIMENTACIÓN PERSONALIZADO';
                tituloCell.font = { bold: true, size: 18 };
                tituloCell.alignment = { horizontal: 'center', vertical: 'middle' };
                sheet.getRow(1).height = 26;

                sheet.mergeCells(2, 1, 2, totalColumnas);
                const infoCell = sheet.getCell(2, 1);
                infoCell.value = `Cliente: ${cabecera.nombre || datosUsuario.nombre || 'Cliente'}    Fecha: ${cabecera.fecha || new Date().toLocaleDateString('es-ES')}`;
                infoCell.font = { bold: true, size: 12 };
                infoCell.alignment = { horizontal: 'center', vertical: 'middle' };

                sheet.mergeCells(3, 1, 3, totalColumnas);
                const metaCell = sheet.getCell(3, 1);
                metaCell.value = `Objetivo: ${cabecera.objetivo || datosUsuario.objetivo || 'N/D'}    Tipo de persona: ${cabecera.tipoPersona || datosUsuario.tipoPersona || 'N/D'}    Sexo: ${cabecera.sexo || datosUsuario.sexo || 'N/D'}`;
                metaCell.font = { size: 11 };
                metaCell.alignment = { horizontal: 'center', vertical: 'middle' };
                sheet.getRow(3).height = 18;

                sheet.addRow([]);

                const headerRow = sheet.addRow(semana.columnas.map(col => col.titulo));
                headerRow.font = { bold: true, size: 12 };
                headerRow.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
                headerRow.height = 28;
                headerRow.eachCell((cell, colNumber) => {
                    const esDescanso = semana.columnas[colNumber - 1]?.esDescanso;
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: esDescanso ? 'FFFDEBD0' : 'FFE8F5E9' }
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FF666666' } },
                        left: { style: 'thin', color: { argb: 'FF666666' } },
                        bottom: { style: 'thin', color: { argb: 'FF666666' } },
                        right: { style: 'thin', color: { argb: 'FF666666' } }
                    };
                });

                // Agregar fila con calorías objetivo por día (entreno/descanso)
                // Asegurar que usamos los valores exactos de datosUsuario (sin fallback a calorias)
                const caloriasObjetivoRow = sheet.addRow(semana.columnas.map(col => {
                    const esDescanso = col.esDescanso;
                    // Usar directamente caloriasEntreno o caloriasDescanso, sin fallback a calorias promedio
                    let caloriasObjetivo = 0;
                    if (esDescanso) {
                        caloriasObjetivo = datosUsuario.caloriasDescanso || 0;
                        // Si no hay valor, calcular desde gasto base + superávit/déficit
                        if (caloriasObjetivo === 0 && datosUsuario.gastoBaseDescanso !== undefined) {
                            caloriasObjetivo = (datosUsuario.gastoBaseDescanso || 0) + (datosUsuario.superavitDescansoKcal || 0);
                        }
                    } else {
                        caloriasObjetivo = datosUsuario.caloriasEntreno || 0;
                        // Si no hay valor, calcular desde gasto base + superávit/déficit
                        if (caloriasObjetivo === 0 && datosUsuario.gastoBaseEntreno !== undefined) {
                            caloriasObjetivo = (datosUsuario.gastoBaseEntreno || 0) + (datosUsuario.superavitEntrenoKcal || 0);
                        }
                    }
                    return `KCAL OBJETIVO: ${caloriasObjetivo}`;
                }));
                caloriasObjetivoRow.font = { bold: true, size: 11, color: { argb: 'FF0000FF' } };
                caloriasObjetivoRow.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
                caloriasObjetivoRow.height = 22;
                caloriasObjetivoRow.eachCell((cell, colNumber) => {
                    const esDescanso = semana.columnas[colNumber - 1]?.esDescanso;
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: esDescanso ? 'FFFFF8E1' : 'FFE8F5E9' }
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FF666666' } },
                        left: { style: 'thin', color: { argb: 'FF666666' } },
                        bottom: { style: 'thin', color: { argb: 'FF666666' } },
                        right: { style: 'thin', color: { argb: 'FF666666' } }
                    };
                });

                comidas.forEach(comida => {
                    const rowData = semana.columnas.map(col => {
                        const items = col.alimentosPorComida[comida] || [];
                        if (!items.length) {
                            return `${comida}:
—`;
                        }
                        const lineas = items.map(item => `• ${estructura.formatoAlimento(item)}`);
                        return `${comida}:
${lineas.join('\n')}`;
                    });

                    const row = sheet.addRow(rowData);
                    row.font = { size: 12 };
                    row.alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
                    row.height = 140;
                    row.eachCell(cell => {
                        cell.border = {
                            top: { style: 'thin', color: { argb: 'FF999999' } },
                            left: { style: 'thin', color: { argb: 'FF999999' } },
                            bottom: { style: 'thin', color: { argb: 'FF999999' } },
                            right: { style: 'thin', color: { argb: 'FF999999' } }
                        };
                    });
                });

                sheet.columns.forEach((col, colIndex) => {
                    col.width = 28;
                    const esDescanso = semana.columnas[colIndex]?.esDescanso;
                    if (esDescanso) {
                        col.eachCell({ includeEmpty: true }, cell => {
                            cell.fill = cell.fill || {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: 'FFFDF7E3' }
                            };
                        });
                    }
                });
            });

            const buffer = await workbook.xlsx.writeBuffer();
            const nombreArchivo = `Plan_Alimentacion_${(datosUsuario.nombre || cabecera.nombre || 'cliente').replace(/\s+/g, '_')}.xlsx`;
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            window.saveAs(blob, nombreArchivo);

            mostrarNotificacion?.('✅ Excel exportado correctamente', 'success');
        } catch (error) {
            console.error('❌ Error al exportar Excel:', error);
            mostrarNotificacion?.('❌ Error al exportar Excel: ' + error.message, 'error');
        }
    }
    window.exportarExcelProfesional = exportarExcelProfesional;

    /**
     * Genera el PDF usando html2canvas y jsPDF
     * @param {string} htmlPDF - HTML completo del documento
     * @param {string} nombreCliente - Nombre del cliente para el archivo
     */
    /**
     * Convierte una imagen a base64
     * @param {string} src - Ruta de la imagen
     * @returns {Promise<string>} - Base64 de la imagen
     */
    function convertirImagenABase64(src) {
        return new Promise((resolve) => {
            // Si ya es base64, retornar directamente
            if (src.startsWith('data:')) {
                resolve(src);
                return;
            }

            // Primero intentar buscar la imagen en el DOM si ya está cargada
            const imagenesEnDOM = document.querySelectorAll('img[src*="' + src + '"], img[src*="iconofit"]');
            for (const imgDOM of imagenesEnDOM) {
                if (imgDOM.complete && imgDOM.naturalWidth > 0 && imgDOM.naturalHeight > 0) {
                    try {
                        const canvas = document.createElement('canvas');
                        canvas.width = imgDOM.naturalWidth;
                        canvas.height = imgDOM.naturalHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(imgDOM, 0, 0);
                        const base64 = canvas.toDataURL('image/png');
                        resolve(base64);
                        return;
                    } catch (e) {
                        // Continuar con el método normal si falla
                    }
                }
            }

            // Intentar primero con fetch (más robusto para archivos locales y remotos)
            const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
            const origin = window.location.origin;
            const protocol = window.location.protocol;
            const hostname = window.location.hostname;
            const pathname = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

            // Generar todas las posibles rutas
            const rutas = [
                src, // Ruta original
                '/' + src, // Desde raíz
                './' + src, // Relativa al directorio actual
                baseUrl + src, // Base URL completa
                origin + '/' + src, // Origin + raíz
                origin + pathname + src, // Origin + pathname
                protocol + '//' + hostname + '/' + src, // Protocolo + hostname + raíz
                protocol + '//' + hostname + pathname + src // Protocolo + hostname + pathname
            ];

            // Eliminar duplicados
            const rutasUnicas = [...new Set(rutas)];

            // Timeout para evitar esperas indefinidas (5 segundos)
            const timeout = setTimeout(() => {
                console.log('Timeout al cargar la imagen:', src);
                resolve(null);
            }, 5000);

            // Función para limpiar timeout y resolver
            const resolver = (result) => {
                clearTimeout(timeout);
                resolve(result);
            };

            // Intentar cargar con fetch primero
            const intentarFetch = async (rutaIndex = 0) => {
                if (rutaIndex >= rutasUnicas.length) {
                    // Si fetch falla con todas las rutas, intentar con Image
                    cargarConImage();
                    return;
                }

                const ruta = rutasUnicas[rutaIndex];
                try {
                    const response = await fetch(ruta);
                    if (response.ok) {
                        const blob = await response.blob();
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            resolver(reader.result); // Base64
                        };
                        reader.onerror = () => {
                            intentarFetch(rutaIndex + 1);
                        };
                        reader.readAsDataURL(blob);
                    } else {
                        intentarFetch(rutaIndex + 1);
                    }
                } catch (e) {
                    intentarFetch(rutaIndex + 1);
                }
            };

            // Método alternativo con Image element
            const cargarConImage = () => {
                const img = new Image();
                img.crossOrigin = 'anonymous';

                // Función para convertir a base64 cuando la imagen se carga
                const convertir = function () {
                    try {
                        // Verificar que la imagen se cargó correctamente
                        if (!img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) {
                            resolver(null);
                            return;
                        }
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        const base64 = canvas.toDataURL('image/png');
                        resolver(base64);
                    } catch (e) {
                        resolver(null);
                    }
                };

                img.onload = convertir;

                let intentoActual = 0;

                img.onerror = function () {
                    intentoActual++;
                    if (intentoActual < rutasUnicas.length) {
                        img.src = rutasUnicas[intentoActual];
                    } else {
                        resolver(null);
                    }
                };

                // Intentar cargar la imagen
                if (src.startsWith('http')) {
                    img.src = src;
                } else {
                    img.src = rutasUnicas[0];
                }
            };

            // Comenzar con fetch
            intentarFetch(0);
        });
    }

    /**
     * Reemplaza todas las imágenes en el HTML con sus versiones base64
     * @param {string} html - HTML original
     * @returns {Promise<string>} - HTML con imágenes en base64
     */
    async function procesarImagenesParaPDF(html) {
        // Buscar todas las imágenes en el HTML usando regex
        const regexImg = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        const matches = [];
        let match;

        while ((match = regexImg.exec(html)) !== null) {
            matches.push({
                fullMatch: match[0],
                src: match[1]
            });
        }

        // Convertir cada imagen a base64
        const promesas = matches.map(async (match) => {
            const src = match.src;
            if (src && !src.startsWith('data:') && !src.startsWith('http')) {
                try {
                    // Intentar diferentes rutas
                    let rutaAbsoluta = src;
                    if (!src.startsWith('/')) {
                        rutaAbsoluta = window.location.origin + '/' + src;
                    }

                    const base64 = await convertirImagenABase64(rutaAbsoluta);
                    if (base64 && base64.startsWith('data:')) {
                        // Reemplazar en el HTML
                        const nuevoTag = match.fullMatch.replace(src, base64);
                        html = html.replace(match.fullMatch, nuevoTag);
                    }
                } catch (e) {
                    console.warn('Error procesando imagen:', src, e);
                }
            }
        });

        await Promise.all(promesas);
        return html;
    }

    async function generarArchivoPDF(htmlPDF, nombreCliente, opciones = {}) {
        // Contenedor temporal para el contenido del PDF
        const container = document.createElement('div');
        container.className = 'pdf-container-temp';

        // Insertar el HTML. Los navegadores modernos manejarán las etiquetas html/head/body 
        // renderizando el contenido correctamente dentro del div.
        // Las etiquetas <style> se aplicarán globalmente mientras el elemento esté en el DOM.
        container.innerHTML = htmlPDF;

        // Asegurar rutas absolutas para imágenes
        const images = container.querySelectorAll('img');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                img.src = new URL(src, window.location.href).href;
            }
        });

        try {
            await window.pdfService.generatePDF(container, nombreCliente, opciones);
        } catch (error) {
            console.error('Error en generarArchivoPDF:', error);
            mostrarNotificacion('❌ Error al generar el PDF', 'error');
        }
    }

    /**
     * Espera a que las librerías PDF estén cargadas (especialmente importante para iOS/iPad y PWA móvil)
     */
    window.esperarLibreriasPDF = async function (maxIntentos = null, intervalo = null) {
        // Detectar iOS/iPad
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        // Detectar móvil/tablet
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);

        // Detectar PWA (standalone mode)
        const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone === true;

        const isStandalone = window.navigator.standalone === true ||
            window.matchMedia('(display-mode: standalone)').matches ||
            window.matchMedia('(display-mode: fullscreen)').matches;

        const isMobileOrPWA = isMobile || isPWA || isStandalone;

        // Ajustar parámetros para móvil/PWA
        const maxIntentosFinal = maxIntentos || (isMobileOrPWA ? 20 : (isIOS ? 15 : 10));
        const intervaloFinal = intervalo || (isMobileOrPWA ? 1000 : (isIOS ? 800 : 500));

        console.log(`📚 Esperando librerías PDF... (iOS: ${isIOS}, Móvil/PWA: ${isMobileOrPWA}, intentos: ${maxIntentosFinal}, intervalo: ${intervaloFinal}ms)`);

        // Si LibraryLoader está disponible, usarlo
        if (window.LibraryLoader && typeof window.LibraryLoader.isPDFReady === 'function') {
            for (let i = 0; i < maxIntentosFinal; i++) {
                if (window.LibraryLoader.isPDFReady()) {
                    console.log('✅ Librerías PDF listas (vía LibraryLoader)');
                    return true;
                }
                if (i % 3 === 0) {
                    console.log(`⏳ Esperando librerías... (intento ${i + 1}/${maxIntentosFinal})`);
                }
                await new Promise(resolve => setTimeout(resolve, intervaloFinal));
            }
            // Si no están listas, intentar cargarlas
            if (window.LibraryLoader.loadAll) {
                try {
                    console.log('🔄 Intentando cargar librerías con LibraryLoader...');
                    await window.LibraryLoader.loadAll(false);
                    if (window.LibraryLoader.isPDFReady()) {
                        console.log('✅ Librerías PDF cargadas exitosamente');
                        return true;
                    }
                } catch (error) {
                    console.warn('⚠️ Error cargando librerías con LibraryLoader:', error);
                }
            }
        }

        // Verificación directa de librerías
        for (let i = 0; i < maxIntentosFinal; i++) {
            const html2pdfReady = typeof window.html2pdf === 'function';
            const html2canvasReady = typeof window.html2canvas === 'function';
            const jsPDFReady = typeof window.jsPDF !== 'undefined' || typeof window.jspdf !== 'undefined';

            // Aceptamos html2pdf O (html2canvas + jsPDF)
            if (html2pdfReady || (html2canvasReady && jsPDFReady)) {
                console.log('✅ Librerías PDF listas (verificación directa)', {
                    html2pdf: html2pdfReady,
                    html2canvas: html2canvasReady,
                    jsPDF: jsPDFReady
                });
                return true;
            }

            if (i % 3 === 0) {
                console.log(`⏳ Esperando librerías... (intento ${i + 1}/${maxIntentosFinal})`, {
                    html2pdf: html2pdfReady,
                    html2canvas: html2canvasReady,
                    jsPDF: jsPDFReady
                });
            }

            await new Promise(resolve => setTimeout(resolve, intervaloFinal));
        }

        console.warn('❌ Librerías PDF no disponibles después de todos los intentos');
        return false;
    }

    /**
     * Función unificada para generar PDF profesional (blanco y negro, minimalista)
     * @param {string} fuente - 'principal' o 'tabla-editable'
     */
    window.generarPDFProfesional = async function (fuente = 'principal') {
        // Mostrar notificación de carga
        mostrarNotificacion('⏳ Verificando librerías PDF...', 'info');

        // Esperar a que las librerías estén cargadas (especialmente importante para iOS/iPad)
        const libreriasListas = await window.esperarLibreriasPDF();

        if (!libreriasListas) {
            // Último intento: verificar directamente
            const html2pdfReady = typeof window.html2pdf === 'function';
            const html2canvasReady = typeof window.html2canvas === 'function';
            const jsPDFReady = typeof window.jsPDF !== 'undefined' || typeof window.jspdf !== 'undefined';

            if (!html2pdfReady && !(html2canvasReady && jsPDFReady)) {
                // Detectar si es móvil/PWA
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
                const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

                let mensaje = 'Error: Las librerías PDF no están cargadas.\n\n';

                if (isMobile || isPWA) {
                    mensaje += 'En modo PWA/móvil, las librerías pueden tardar más en cargar.\n\n';
                    mensaje += 'Por favor:\n';
                    mensaje += '1. Verifica tu conexión a internet\n';
                    mensaje += '2. Espera unos segundos y vuelve a intentar\n';
                    mensaje += '3. Si el problema persiste, recarga la aplicación\n';
                    mensaje += '4. O abre la aplicación en el navegador (no en modo PWA)';
                } else {
                    mensaje += 'Por favor, verifica tu conexión a internet y recarga la página.\n\n';
                    mensaje += 'Si el problema persiste, intenta:\n';
                    mensaje += '1. Limpiar la caché del navegador\n';
                    mensaje += '2. Recargar la página\n';
                    mensaje += '3. Usar otro navegador';
                }

                // Intentar recargar las librerías una vez más
                if (window.LibraryLoader && window.LibraryLoader.retry) {
                    mostrarNotificacion('🔄 Reintentando cargar librerías PDF...', 'info');
                    const retrySuccess = await window.LibraryLoader.retry();
                    if (retrySuccess && window.LibraryLoader.isPDFReady()) {
                        console.log('✅ Librerías cargadas después del reintento');
                        mostrarNotificacion('✅ Librerías PDF cargadas correctamente', 'success');
                        // Continuar con la generación del PDF
                    } else {
                        alert(mensaje);
                        mostrarNotificacion('❌ Error: Librerías PDF no disponibles', 'error');
                        return;
                    }
                } else {
                    alert(mensaje);
                    mostrarNotificacion('❌ Error: Librerías PDF no disponibles', 'error');
                    return;
                }
            }
        }

        // Mostrar notificación de generación
        mostrarNotificacion('⏳ Generando PDF...', 'info');

        // Obtener datos según la fuente
        const { datos, contenidoOriginal, error } = obtenerDatosPDF(fuente);
        if (error) {
            alert(error);
            return;
        }

        // Construir HTML del PDF
        const fecha = new Date().toLocaleDateString('es-ES');
        const nombreCliente = datos.nombre || 'Cliente';
        const headerHTML = await generarHeaderPDF(datos, fecha);

        // Si es tabla editable, calcular tamaños dinámicos ANTES de generar CSS
        let tamanosFuente = null;
        if (fuente === 'tabla-editable') {
            const estructura = construirPlanSemanalEstructurado();
            if (estructura) {
                tamanosFuente = calcularTamanosFuenteDinamicos(estructura);
                // Guardar también en window para que esté disponible
                window.tamanosFuentePDF = tamanosFuente;
                console.log('📊 Tamaños de fuente calculados:', tamanosFuente);
            }
        }

        const cssHTML = generarCSSPDF(tamanosFuente);

        // Siempre usar formato horizontal para maximizar el espacio y evitar recortes
        const bodyClass = 'layout-landscape';

        // Detectar móvil para agregar viewport optimizado
        const esMovilPDF = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent) ||
            (window.innerWidth <= 768) ||
            ('ontouchstart' in window || navigator.maxTouchPoints > 0);

        // Calcular ancho del viewport para móviles
        const orientacionPDF = 'l';
        const pageWidthPDF = 297;
        const mmToPxPDF = 3.779527559;
        const viewportWidth = esMovilPDF ? Math.round(pageWidthPDF * mmToPxPDF) : 'device-width';

        let htmlPDF = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=${viewportWidth}, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <title>Plan de Alimentación - ${nombreCliente}</title>
                <style>${cssHTML}</style>
            </head>
            <body class="${bodyClass}">
                ${headerHTML}
        `;

        // Agregar contenido según la fuente
        if (fuente === 'principal' && contenidoOriginal) {
            // 1. CAPTURAR GRÁFICOS (CANVAS) ANTES DE CLONAR
            // Los canvas se pierden al clonar o usar innerHTML, así que los convertimos a imágenes
            const canvasReales = contenidoOriginal.querySelectorAll('canvas');
            const canvasMap = new Map();

            canvasReales.forEach((canvas, index) => {
                try {
                    if (canvas.width > 0 && canvas.height > 0) {
                        // Crear fondo blanco para evitar transparencia negra en algunos visualizadores PDF
                        const tempCanvas = document.createElement('canvas');
                        tempCanvas.width = canvas.width;
                        tempCanvas.height = canvas.height;
                        const ctx = tempCanvas.getContext('2d');

                        // Rellenar blanco
                        ctx.fillStyle = '#ffffff';
                        ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

                        // Dibujar el canvas original encima
                        ctx.drawImage(canvas, 0, 0);

                        const dataUrl = tempCanvas.toDataURL('image/png');
                        // Usar un ID único basado en el ID del elemento si existe, o generar uno
                        const canvasId = canvas.id || 'canvas-' + index;
                        canvas.setAttribute('data-pdf-id', canvasId);
                        canvasMap.set(canvasId, dataUrl);
                    }
                } catch (e) {
                    console.warn('Error capturando canvas para PDF:', e);
                }
            });

            // Procesar imágenes en el DOM real primero (para obtener imágenes ya cargadas)
            const imagenesReales = contenidoOriginal.querySelectorAll('img[src]');
            const imagenesBase64 = new Map();

            for (const img of imagenesReales) {
                const src = img.getAttribute('src');
                if (src && !src.startsWith('data:') && !src.startsWith('http')) {
                    try {
                        // Intentar obtener la imagen directamente del DOM si ya está cargada
                        let base64 = null;
                        if (img.complete && img.naturalWidth > 0) {
                            // La imagen ya está cargada, convertirla directamente
                            try {
                                const canvas = document.createElement('canvas');
                                canvas.width = img.naturalWidth;
                                canvas.height = img.naturalHeight;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(img, 0, 0);
                                base64 = canvas.toDataURL('image/png');
                            } catch (e) {
                                // Si falla, intentar con la función de conversión
                                base64 = await convertirImagenABase64(src);
                            }
                        } else {
                            // Intentar cargar la imagen
                            base64 = await convertirImagenABase64(src);
                        }

                        if (base64 && base64.startsWith('data:')) {
                            imagenesBase64.set(src, base64);
                        }
                    } catch (e) {
                        console.warn('Error procesando imagen:', src, e);
                    }
                }
            }

            // Ahora clonar y reemplazar las imágenes en el clone
            const clone = contenidoOriginal.cloneNode(true);

            // 2. RESTAURAR GRÁFICOS EN EL CLON
            const canvasClone = clone.querySelectorAll('canvas');
            canvasClone.forEach((canvas, index) => {
                // Buscar por ID primero, luego por atributo data-pdf-id
                const canvasId = canvas.id || canvas.getAttribute('data-pdf-id');
                let dataUrl = canvasId ? canvasMap.get(canvasId) : null;

                // Si no se encuentra, intentar por índice secuencial como fallback
                if (!dataUrl && canvasMap.has('canvas-' + index)) {
                    dataUrl = canvasMap.get('canvas-' + index);
                }

                if (dataUrl) {
                    const img = document.createElement('img');
                    img.src = dataUrl;

                    // Asegurar que la imagen tenga dimensiones explícitas
                    // En móviles, los canvas pueden tener width/height 0 si están ocultos o colapsados
                    // Usamos style.width = '100%' para que se adapte al contenedor
                    img.style.width = '100%';
                    img.style.maxWidth = '600px'; // Limitar ancho máximo para que no explote
                    img.style.height = 'auto';
                    img.className = canvas.className; // Mantener clases
                    img.style.display = 'block';
                    img.style.margin = '0 auto';

                    // Reemplazar canvas con imagen
                    if (canvas.parentNode) {
                        canvas.parentNode.replaceChild(img, canvas);
                    }
                }
            });

            const imagenesClone = clone.querySelectorAll('img[src]');
            for (const img of imagenesClone) {
                const src = img.getAttribute('src');
                if (imagenesBase64.has(src)) {
                    img.setAttribute('src', imagenesBase64.get(src));
                }
            }

            procesarContenidoParaPDF(clone);
            htmlPDF += clone.innerHTML;
            // Sin línea final, solo el margen inferior
        } else if (fuente === 'tabla-editable') {
            htmlPDF += generarHTMLDesdeTablaEditable();
        }

        htmlPDF += `
            </body>
            </html>
        `;

        // Generar y descargar PDF (ahora es async)
        // orientacionPDF ya está declarada arriba, solo usar su valor
        await generarArchivoPDF(htmlPDF, nombreCliente, { orientacion: orientacionPDF });
    };

    // Botón descargar PDF
    const btnDescargar = document.getElementById('btnDescargar');
    if (btnDescargar) {
        btnDescargar.replaceWith(btnDescargar.cloneNode(true));
        const nuevoBtn = document.getElementById('btnDescargar');

        nuevoBtn.addEventListener('click', function () {
            window.generarPDFProfesional('principal');
        });
    }

    // Botón compartir por WhatsApp (solo móvil)
    const btnCompartirWhatsApp = document.getElementById('btnCompartirWhatsApp');
    if (btnCompartirWhatsApp) {
        // Detectar si es dispositivo móvil
        const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (esMovil) {
            btnCompartirWhatsApp.style.display = 'block';

            btnCompartirWhatsApp.replaceWith(btnCompartirWhatsApp.cloneNode(true));
            const nuevoBtnWhatsApp = document.getElementById('btnCompartirWhatsApp');

            nuevoBtnWhatsApp.addEventListener('click', async function () {
                try {
                    mostrarNotificacion('🔄 Verificando librerías PDF...', 'info');

                    // Esperar a que las librerías estén cargadas (especialmente importante para iOS/iPad)
                    const libreriasListas = await window.esperarLibreriasPDF();

                    if (!libreriasListas) {
                        const html2pdfReady = typeof window.html2pdf === 'function';
                        if (!html2pdfReady) {
                            throw new Error('Las librerías PDF no están disponibles. Por favor, recarga la página.');
                        }
                    }

                    mostrarNotificacion('🔄 Generando PDF para compartir...', 'info');

                    // Obtener el contenido del PDF
                    const pdfContent = document.getElementById('pdf-content');
                    if (!pdfContent) {
                        throw new Error('No se encontró el contenido del PDF');
                    }

                    // Verificar que html2pdf esté disponible
                    if (typeof window.html2pdf !== 'function') {
                        throw new Error('La librería html2pdf no está disponible');
                    }

                    // Usar html2pdf para generar el blob directamente
                    // Margen inferior de 3 mm - convertir a pulgadas: 3mm = 0.11811 in
                    const margenInferiorPulgadas = 0.11811; // 3 mm en pulgadas
                    const opt = {
                        margin: [0, 0, margenInferiorPulgadas, 0], // [top, right, bottom, left] - solo margen inferior
                        filename: `Plan_Alimentacion_${datosUsuario.nombre || 'Cliente'}.pdf`,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true },
                        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
                    };

                    // Generar PDF como blob
                    const pdfBlob = await html2pdf().set(opt).from(pdfContent).outputPdf('blob');

                    // Crear archivo desde el blob
                    const filename = `Plan_Alimentacion_${(datosUsuario.nombre || 'Cliente').replace(/\s+/g, '_')}.pdf`;
                    const file = new File([pdfBlob], filename, { type: 'application/pdf' });

                    // Intentar usar Web Share API (soporta WhatsApp en móviles)
                    if (navigator.share && navigator.canShare) {
                        try {
                            if (navigator.canShare({ files: [file] })) {
                                await navigator.share({
                                    files: [file],
                                    title: 'Plan de Alimentación Personalizado',
                                    text: `Plan de alimentación personalizado para ${datosUsuario.nombre || 'cliente'}`
                                });
                                mostrarNotificacion('✅ PDF compartido exitosamente', 'success');
                                return;
                            }
                        } catch (shareError) {
                            console.log('Web Share API no disponible, usando método alternativo');
                        }
                    }

                    // Método alternativo: descargar y abrir WhatsApp
                    const url = URL.createObjectURL(pdfBlob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    // Abrir WhatsApp con mensaje
                    setTimeout(() => {
                        const mensaje = encodeURIComponent(`Te comparto tu plan de alimentación personalizado. El archivo PDF se ha descargado en tu dispositivo.`);
                        const urlWhatsApp = `https://wa.me/?text=${mensaje}`;
                        window.open(urlWhatsApp, '_blank');

                        mostrarNotificacion('📥 PDF descargado. Selecciona WhatsApp y adjunta el archivo descargado', 'info');

                        // Limpiar URL después de un tiempo
                        setTimeout(() => URL.revokeObjectURL(url), 1000);
                    }, 500);

                } catch (error) {
                    console.error('Error al compartir por WhatsApp:', error);
                    mostrarNotificacion('⚠️ Error al compartir. Descarga el PDF y compártelo manualmente.', 'error');

                    // Fallback: descargar el PDF normalmente
                    window.generarPDFProfesional('principal');
                }
            });
        }
    }

    const btnNuevo = document.getElementById('btnNuevo');
    if (btnNuevo) {
        btnNuevo.replaceWith(btnNuevo.cloneNode(true));
        const nuevoBtn2 = document.getElementById('btnNuevo');

        nuevoBtn2.addEventListener('click', function () {
            if (confirm('¿Estás seguro de que quieres crear una nueva dieta? Se perderá la información actual.')) {
                document.getElementById('resultados').classList.add('oculto');
                document.getElementById('dietForm').reset();
                document.getElementById('calorias').value = '';
                document.getElementById('proteinas').value = '';
                document.getElementById('grasas').value = '';
                document.getElementById('carbohidratos').value = '';

                const hoy = new Date();
                const fechaInput = document.getElementById('fechaRegistro');
                if (fechaInput) {
                    fechaInput.valueAsDate = hoy;
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
                mostrarNotificacion('✨ Listo para crear una nueva dieta', 'info');
            }
        });
    }

    const btnDescargarExcel = document.getElementById('btnDescargarExcel');
    if (btnDescargarExcel) {
        btnDescargarExcel.replaceWith(btnDescargarExcel.cloneNode(true));
        const nuevoBtnExcel = document.getElementById('btnDescargarExcel');
        nuevoBtnExcel.addEventListener('click', function () {
            exportarExcelProfesional();
        });
    }
}

// Hacer función global
window.mostrarNotificacion = function (mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;

    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${tipo === 'success' ? '#28a745' : tipo === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 300px;
    `;

    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
};

// Función para mostrar vista previa del PDF con opciones de descarga/compartir
window.mostrarPreviewPDF = function (pdfUrl, pdfBlob, filename) {
    // Crear modal de previsualización
    const modal = document.createElement('div');
    modal.id = 'pdfPreviewModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.3s ease;
    `;

    // Contenedor del modal
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 12px;
        width: 90%;
        max-width: 1000px;
        height: 90%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        overflow: hidden;
    `;

    // Header del modal
    const header = document.createElement('div');
    header.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 12px 12px 0 0;
    `;

    const title = document.createElement('h3');
    title.textContent = '📄 Vista Previa del PDF';
    title.style.cssText = `
        margin: 0;
        font-size: 1.5em;
        font-weight: 600;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.95);
        border: none;
        color: #dc3545;
        font-size: 36px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    `;
    closeBtn.onmouseover = () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 1)';
        closeBtn.style.color = '#c82333';
        closeBtn.style.transform = 'scale(1.1)';
        closeBtn.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.3)';
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.95)';
        closeBtn.style.color = '#dc3545';
        closeBtn.style.transform = 'scale(1)';
        closeBtn.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    };
    closeBtn.onclick = () => {
        URL.revokeObjectURL(pdfUrl);
        document.body.removeChild(modal);
    };

    header.appendChild(title);
    header.appendChild(closeBtn);

    // Visor de PDF
    const pdfViewer = document.createElement('iframe');
    pdfViewer.src = pdfUrl;
    pdfViewer.style.cssText = `
        flex: 1;
        border: none;
        width: 100%;
        background: #f5f5f5;
    `;

    // Footer con botones de acción
    const footer = document.createElement('div');
    footer.style.cssText = `
        padding: 20px;
        background: #f8f9fa;
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
        border-radius: 0 0 12px 12px;
        border-top: 2px solid #e9ecef;
    `;

    // Botón Descargar
    const btnDescargar = document.createElement('button');
    btnDescargar.innerHTML = '💾 Descargar PDF';
    btnDescargar.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    `;
    btnDescargar.onmouseover = () => {
        btnDescargar.style.transform = 'translateY(-2px)';
        btnDescargar.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
    };
    btnDescargar.onmouseout = () => {
        btnDescargar.style.transform = 'translateY(0)';
        btnDescargar.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    };
    btnDescargar.onclick = () => {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = filename;
        a.click();
        mostrarNotificacion('✅ PDF descargado correctamente', 'success');
    };

    // Botón Abrir en Nueva Ventana
    const btnNuevaVentana = document.createElement('button');
    btnNuevaVentana.innerHTML = '🔗 Abrir en Nueva Ventana';
    btnNuevaVentana.style.cssText = `
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
    `;
    btnNuevaVentana.onmouseover = () => {
        btnNuevaVentana.style.transform = 'translateY(-2px)';
        btnNuevaVentana.style.boxShadow = '0 6px 20px rgba(240, 147, 251, 0.5)';
    };
    btnNuevaVentana.onmouseout = () => {
        btnNuevaVentana.style.transform = 'translateY(0)';
        btnNuevaVentana.style.boxShadow = '0 4px 15px rgba(240, 147, 251, 0.4)';
    };
    btnNuevaVentana.onclick = () => {
        window.open(pdfUrl, '_blank');
        mostrarNotificacion('✅ PDF abierto en nueva ventana', 'info');
    };

    // Botón WhatsApp
    const btnWhatsApp = document.createElement('button');
    btnWhatsApp.innerHTML = '📱 Compartir por WhatsApp';
    btnWhatsApp.style.cssText = `
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    `;
    btnWhatsApp.onmouseover = () => {
        btnWhatsApp.style.transform = 'translateY(-2px)';
        btnWhatsApp.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
    };
    btnWhatsApp.onmouseout = () => {
        btnWhatsApp.style.transform = 'translateY(0)';
        btnWhatsApp.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
    };
    btnWhatsApp.onclick = () => {
        // Primero descargar el archivo
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = filename;
        a.click();

        // Mostrar instrucciones
        const mensaje = 'El PDF se ha descargado. Para compartirlo por WhatsApp:\n\n' +
            '1. Abre WhatsApp\n' +
            '2. Selecciona el contacto\n' +
            '3. Toca el ícono de adjuntar (📎)\n' +
            '4. Selecciona "Documento"\n' +
            '5. Busca y selecciona el PDF descargado';

        alert(mensaje);
        mostrarNotificacion('💡 Sigue las instrucciones para compartir', 'info');
    };

// ========================================
// AUTOMATIC CALORIE RECALCULATION
// Auto-recalculates calories when weight, objective, or activity level changes
// ========================================

/**
 * Sets up automatic calorie recalculation when key form fields change.
 * Triggered on changes to: peso, objetivo, tipoPersona, actividadFisicaDeporte
 */
function setupAutoCalculation() {
    console.log('📊 Configurando recálculo automático de calorías...');
    
    // Fields that should trigger recalculation
    const fieldsToWatch = [
        'peso',                    // Weight
        'objetivo',                // Objective (lose, maintain, gain)
        'tipoPersona',             // Activity level
        'actividadFisicaDeporte'   // Physical activity/sport level
    ];
    
    fieldsToWatch.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('change', () => {
                console.log(`🔄 Campo "${fieldId}" cambió, recalculando macronutrientes...`);
                calcularMacronutrientes();
            });
            console.log(`✅ Listener agregado a: ${fieldId}`);
        } else {
            console.warn(`⚠️ No se encontró el elemento: ${fieldId}`);
        }
    });
    
    console.log('✅ Recálculo automático configurado correctamente');
}

// Initialize auto-calculation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAutoCalculation);
} else {
    // DOM already loaded
    setupAutoCalculation();
}

} }); // End DOMContentLoaded
