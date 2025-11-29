/**
 * Utilidades para estructurar datos de exportación (PDF/Excel)
 * Extraído de script.js para asegurar disponibilidad global
 */

(function(window) {
    /**
     * Construye una estructura normalizada del plan semanal para reutilizar en PDF/Excel
     */
    function construirPlanSemanalEstructurado() {
        const datosUsuario = window.datosUsuario || {};
        
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
            if (!datosUsuario || !Array.isArray(datosUsuario.diasEntreno) || datosUsuario.diasEntreno.length === 0) {
                return true;
            }
            const valorDia = normalizar(nombreDia);
            const diasEntrenoNormalizados = datosUsuario.diasEntreno.map(d => normalizar(d));
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
     */
    function actualizarEstructuraPlanExport() {
        const estructura = construirPlanSemanalEstructurado();
        const datosUsuario = window.datosUsuario || {};
        
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
    
    // Exponer globalmente
    window.construirPlanSemanalEstructurado = construirPlanSemanalEstructurado;
    window.actualizarEstructuraPlanExport = actualizarEstructuraPlanExport;
    
    console.log('✅ Export Utils cargado correctamente');

})(window);

