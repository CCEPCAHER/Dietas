/**
 * Módulo para funciones de visualización y renderizado de tablas
 * Refactorizado desde script.js para mejor organización
 */

const UIRenderer = {
    /**
     * Muestra la tabla de macronutrientes
     * @param {Object} datosUsuario - Datos del usuario con macronutrientes calculados
     */
    mostrarTablaMacros(datosUsuario = {}) {
        const tbody = document.getElementById('tabla-macros-body');
        if (!tbody) return;


        const { calorias = 0, proteinas = 0, grasas = 0, carbohidratos = 0 } = datosUsuario;

        const proteinasPercent = calorias > 0 ? Math.round((proteinas * 4 / calorias) * 100) : 0;
        const grasasPercent = calorias > 0 ? Math.round((grasas * 9 / calorias) * 100) : 0;
        const carbohidratosPercent = calorias > 0 ? Math.round((carbohidratos * 4 / calorias) * 100) : 0;

        // Obtener consumo real si existe tablaEditable
        let consumido = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (window.tablaEditable) {
            consumido = this.obtenerConsumidoActual();
        }

        tbody.innerHTML = `
            <tr id="macro-calorias">
                <td>CALORÍAS</td>
                <td>${calorias} kcal</td>
                <td><input type="number" class="ajuste-manual-input" id="ajuste-calorias" placeholder="${calorias}" value="${calorias}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('calorias', this.value)"></td>
                <td id="seleccionado-calorias">${calorias} kcal</td>
                <td>100%</td>
                <td id="consumido-calorias" style="font-weight:bold;">${consumido.calorias} kcal</td>
                <td id="estado-calorias">${this.obtenerEstadoMacro(consumido.calorias, calorias)}</td>
            </tr>
            <tr id="macro-proteinas">
                <td>PROTEÍNAS</td>
                <td>${proteinas}g</td>
                <td><input type="number" class="ajuste-manual-input" id="ajuste-proteinas" placeholder="${proteinas}" value="${proteinas}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('proteinas', this.value)"></td>
                <td id="seleccionado-proteinas">${proteinas}g</td>
                <td>${proteinasPercent}%</td>
                <td id="consumido-proteinas" style="font-weight:bold;">${consumido.proteinas}g</td>
                <td id="estado-proteinas">${this.obtenerEstadoMacro(consumido.proteinas, proteinas)}</td>
            </tr>
            <tr id="macro-grasas">
                <td>GRASAS</td>
                <td>${grasas}g</td>
                <td><input type="number" class="ajuste-manual-input" id="ajuste-grasas" placeholder="${grasas}" value="${grasas}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('grasas', this.value)"></td>
                <td id="seleccionado-grasas">${grasas}g</td>
                <td>${grasasPercent}%</td>
                <td id="consumido-grasas" style="font-weight:bold;">${consumido.grasas}g</td>
                <td id="estado-grasas">${this.obtenerEstadoMacro(consumido.grasas, grasas)}</td>
            </tr>
            <tr id="macro-carbohidratos">
                <td>CARBOHIDRATOS</td>
                <td>${carbohidratos}g</td>
                <td><input type="number" class="ajuste-manual-input" id="ajuste-carbohidratos" placeholder="${carbohidratos}" value="${carbohidratos}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('carbohidratos', this.value)"></td>
                <td id="seleccionado-carbohidratos">${carbohidratos}g</td>
                <td>${carbohidratosPercent}%</td>
                <td id="consumido-carbohidratos" style="font-weight:bold;">${consumido.carbohidratos}g</td>
                <td id="estado-carbohidratos">${this.obtenerEstadoMacro(consumido.carbohidratos, carbohidratos)}</td>
            </tr>
        `;

        // Configurar actualización periódica
        this.configurarActualizacionMacros();
    },

    /**
     * Obtiene el consumo actual desde los totales diarios
     */
    obtenerConsumidoActual() {
        if (!window.tablaEditable) {
            return { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        }

        const caloriasElem = document.getElementById('total-diario-calorias');
        const proteinasElem = document.getElementById('total-diario-proteinas');
        const grasasElem = document.getElementById('total-diario-grasas');
        const hidratosElem = document.getElementById('total-diario-hidratos');

        return {
            calorias: caloriasElem ? parseFloat(caloriasElem.textContent) || 0 : 0,
            proteinas: proteinasElem ? parseFloat(proteinasElem.textContent) || 0 : 0,
            grasas: grasasElem ? parseFloat(grasasElem.textContent) || 0 : 0,
            carbohidratos: hidratosElem ? parseFloat(hidratosElem.textContent) || 0 : 0
        };
    },

    /**
     * Obtiene el estado visual de un macro según su consumo vs objetivo
     */
    obtenerEstadoMacro(consumido, objetivo) {
        if (!objetivo || objetivo === 0) return '<span style="color:#999;">-</span>';

        const porcentaje = (consumido / objetivo) * 100;

        if (porcentaje < 80) {
            return `<span style="color:#ffc107;font-weight:bold;">⚠️ ${porcentaje.toFixed(0)}%</span>`;
        } else if (porcentaje >= 80 && porcentaje <= 120) {
            return `<span style="color:#28a745;font-weight:bold;">✅ ${porcentaje.toFixed(0)}%</span>`;
        } else {
            return `<span style="color:#dc3545;font-weight:bold;">🔥 ${porcentaje.toFixed(0)}%</span>`;
        }
    },

    /**
     * Actualiza los valores consumidos en la tabla de macros
     */
    actualizarConsumidoEnTabla() {
        const consumido = this.obtenerConsumidoActual();
        const datosUsuario = window.datosUsuario || {};
        const { calorias = 0, proteinas = 0, grasas = 0, carbohidratos = 0 } = datosUsuario;

        // Actualizar valores consumidos
        const calElem = document.getElementById('consumido-calorias');
        const protElem = document.getElementById('consumido-proteinas');
        const grasElem = document.getElementById('consumido-grasas');
        const carbElem = document.getElementById('consumido-carbohidratos');

        if (calElem) calElem.textContent = Math.round(consumido.calorias) + ' kcal';
        if (protElem) protElem.textContent = consumido.proteinas.toFixed(1) + 'g';
        if (grasElem) grasElem.textContent = consumido.grasas.toFixed(1) + 'g';
        if (carbElem) carbElem.textContent = consumido.carbohidratos.toFixed(1) + 'g';

        // Actualizar estados
        const estadoCal = document.getElementById('estado-calorias');
        const estadoProt = document.getElementById('estado-proteinas');
        const estadoGras = document.getElementById('estado-grasas');
        const estadoCarb = document.getElementById('estado-carbohidratos');

        if (estadoCal) estadoCal.innerHTML = this.obtenerEstadoMacro(consumido.calorias, calorias);
        if (estadoProt) estadoProt.innerHTML = this.obtenerEstadoMacro(consumido.proteinas, proteinas);
        if (estadoGras) estadoGras.innerHTML = this.obtenerEstadoMacro(consumido.grasas, grasas);
        if (estadoCarb) estadoCarb.innerHTML = this.obtenerEstadoMacro(consumido.carbohidratos, carbohidratos);

        // Colorear filas según estado
        this.colorearFilaMacro('macro-calorias', consumido.calorias, calorias);
        this.colorearFilaMacro('macro-proteinas', consumido.proteinas, proteinas);
        this.colorearFilaMacro('macro-grasas', consumido.grasas, grasas);
        this.colorearFilaMacro('macro-carbohidratos', consumido.carbohidratos, carbohidratos);
    },

    /**
     * Colorea una fila de macro según su estado
     */
    colorearFilaMacro(rowId, consumido, objetivo) {
        const row = document.getElementById(rowId);
        if (!row || !objetivo) return;

        const porcentaje = (consumido / objetivo) * 100;

        // Remover colores anteriores
        row.style.background = '';

        if (porcentaje < 80) {
            row.style.background = 'rgba(255, 193, 7, 0.1)';
        } else if (porcentaje > 120) {
            row.style.background = 'rgba(220, 53, 69, 0.1)';
        } else {
            row.style.background = 'rgba(40, 167, 69, 0.1)';
        }
    },

    /**
     * Configura la actualización periódica de macros
     */
    configurarActualizacionMacros() {
        // Actualizar cada 2 segundos cuando esté en modo manual
        if (window.intervalMacros) clearInterval(window.intervalMacros);

        window.intervalMacros = setInterval(() => {
            if (window.tablaEditable) {
                this.actualizarConsumidoEnTabla();
                // Actualizar estadísticas del plan manual
                const datosUsuario = window.datosUsuario || {};
                if (datosUsuario.modoGeneracion === 'manual') {
                    if (typeof window.mostrarEstadisticasPlanManual === 'function') {
                        window.mostrarEstadisticasPlanManual();
                    }
                }
            }
        }, 2000);

        // Actualizar inmediatamente
        setTimeout(() => {
            this.actualizarConsumidoEnTabla();
            const datosUsuario = window.datosUsuario || {};
            if (datosUsuario.modoGeneracion === 'manual') {
                if (typeof window.mostrarEstadisticasPlanManual === 'function') {
                    window.mostrarEstadisticasPlanManual();
                }
            }
        }, 500);
    }
};

// Exportar para uso global
window.UIRenderer = UIRenderer;

