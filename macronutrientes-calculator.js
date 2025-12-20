/**
 * Módulo para cálculos de macronutrientes y gasto calórico
 * Refactorizado desde script.js para mejor organización
 */

const MacronutrientesCalculator = {
    /**
     * Calcula todos los macronutrientes y valores relacionados
     * @param {Object} datosUsuario - Objeto con datos del usuario
     * @param {Object} formulario - Referencias a elementos del formulario (opcional)
     * @returns {Object} Objeto datosUsuario actualizado con todos los cálculos
     */
    calcularMacronutrientes(datosUsuario = {}, formulario = {}) {
        // Obtener valores del formulario o datosUsuario (prioridad al formulario)
        const edad = parseInt(formulario.edad?.value) || datosUsuario.edad;
        const sexo = formulario.sexo?.value || datosUsuario.sexo;
        const altura = parseFloat(formulario.altura?.value) || datosUsuario.altura;
        const peso = parseFloat(formulario.peso?.value) || datosUsuario.peso;
        const objetivo = formulario.objetivo?.value || datosUsuario.objetivo;
        const tipoPersona = formulario.tipoPersona?.value || datosUsuario.tipoPersona;

        // Obtener valores del formulario (pueden no estar en datosUsuario aún)
        const actividadFisicaDeporte = formulario.actividadFisicaDeporte?.value ||
            datosUsuario.actividadFisicaDeporte || 'moderada';

        // Mapear tipoPersona a tipoTermogenico si no está definido
        let tipoTermogenico = formulario.tipoTermogenico?.value || datosUsuario.tipoTermogenico;
        if (!tipoTermogenico) {
            if (tipoPersona === 'sedentaria') {
                tipoTermogenico = 'sedentaria';
            } else if (tipoPersona === 'activa' || tipoPersona === 'no-sedentaria') {
                tipoTermogenico = 'no-sedentaria';
            } else if (tipoPersona === 'muy-activa') {
                tipoTermogenico = 'culturista';
            } else {
                tipoTermogenico = 'no-sedentaria';
            }
        }

        // Determinar si es déficit o superávit según el objetivo
        const objetivoNormalizado = (objetivo || '').toString().toLowerCase();
        const esDeficit = objetivoNormalizado.includes('adelgazar') ||
            objetivoNormalizado.includes('perder');
        const esMantener = objetivoNormalizado.includes('mantener');

        // DEBUG LOGS
        console.log('--- CALC DEBUG ---');
        console.log('Objetivo Raw:', objetivo);
        console.log('Objetivo Norm:', objetivoNormalizado);
        console.log('Es Deficit:', esDeficit, 'Es Mantener:', esMantener);

        // Definir valores base por defecto según objetivo
        // El usuario solicitó explícitamente que el selector empiece en 0%, 
        // pero que las calorías cambien automáticamente.
        // Para lograr esto, aplicamos un "Factor de Objetivo" interno.
        let defaultSurplus = 0;

        console.log('Default Surplus:', defaultSurplus);

        // Usar valor del formulario si existe, o el default calculado. 
        // NO usar datosUsuario.superavitEntreno para evitar persistencia de valores de otros objetivos.
        const superavitEntrenoRaw = formulario.superavitEntreno?.value ?
            parseFloat(formulario.superavitEntreno.value) : defaultSurplus;

        const superavitDescansoRaw = formulario.superavitDescanso?.value ?
            parseFloat(formulario.superavitDescanso.value) : defaultSurplus;

        // Convertir valores a negativos si es déficit
        const superavitEntreno = esDeficit ? -superavitEntrenoRaw : superavitEntrenoRaw;
        const superavitDescanso = esDeficit ? -superavitDescansoRaw : superavitDescansoRaw;

        console.log('Superavit Entreno:', superavitEntreno);
        console.log('------------------');

        // Obtener días de entrenamiento
        const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]:checked');
        const diasEntreno = Array.from(diasEntrenoCheckboxes).map(cb => cb.value);

        // Calcular TMB base usando fórmula de Mifflin-St Jeor
        const tmbBaseExacta = this._calcularTMBBase(sexo, peso, altura, edad);
        const tmbBase = Math.round(tmbBaseExacta);

        const sexoNormalizado = this._normalizarSexo(sexo);
        const tipoPersonaNormalizado = (tipoPersona || '').toString().toLowerCase();

        // Calcular TMB ajustado
        const factorTipoPersona = this._obtenerFactorTipoPersona(
            sexoNormalizado,
            tipoPersonaNormalizado,
            datosUsuario.factorTipoPersonaPersonalizado
        );
        const tmbAjustadoExacta = tmbBaseExacta * factorTipoPersona;
        const tmb = Math.round(tmbAjustadoExacta);

        // Calcular TEF
        const porcentajeTEF = this._obtenerPorcentajeTEF(tipoTermogenico);
        const tefExacta = tmbAjustadoExacta * porcentajeTEF;
        const tef = Math.round(tefExacta);

        // Calcular actividad física
        const factorActividad = this._obtenerFactorActividad(
            sexoNormalizado,
            actividadFisicaDeporte,
            datosUsuario.factorActividadPersonalizado
        );
        const actividadFisicaDeporteKcalExacta = tmbBaseExacta * factorActividad;
        const actividadFisicaDeporteKcal = Math.round(actividadFisicaDeporteKcalExacta);

        // Factor de Objetivo Base (Oculto/Implícito)
        // Esto permite que al seleccionar "Perder Peso" con "0%" en el selector,
        // las calorías bajen respecto al mantenimiento (simulando un déficit base).
        let factorObjetivo = 1.0;
        if (esDeficit) factorObjetivo = 0.85; // 15% de déficit base implícito
        if (objetivoNormalizado.includes('aumentar')) factorObjetivo = 1.10; // 10% de superávit base implícito

        // Calcular gasto calórico base CON el factor de objetivo
        const gastoBaseEntrenoExacta = (tmbAjustadoExacta + tefExacta + actividadFisicaDeporteKcalExacta) * factorObjetivo;
        const gastoBaseDescansoExacta = (tmbAjustadoExacta + tefExacta) * factorObjetivo;
        const gastoBaseEntreno = Math.round(gastoBaseEntrenoExacta);
        const gastoBaseDescanso = Math.round(gastoBaseDescansoExacta);

        // Calcular superávit/déficit (puede ser negativo si es déficit)
        const superavitEntrenoKcalExacta = gastoBaseEntrenoExacta * (superavitEntreno / 100);
        const superavitDescansoKcalExacta = gastoBaseDescansoExacta * (superavitDescanso / 100);
        const superavitEntrenoKcal = Math.round(superavitEntrenoKcalExacta);
        const superavitDescansoKcal = Math.round(superavitDescansoKcalExacta);

        // Calcular ingesta calórica total (suma, puede ser menor si es déficit)
        const caloriasEntrenoExacta = gastoBaseEntrenoExacta + superavitEntrenoKcalExacta;
        const caloriasDescansoExacta = gastoBaseDescansoExacta + superavitDescansoKcalExacta;
        const caloriasEntreno = Math.round(caloriasEntrenoExacta);
        const caloriasDescanso = Math.round(caloriasDescansoExacta);

        // Guardar también los valores raw (positivos) para mostrar en la UI
        datosUsuario.superavitEntrenoRaw = superavitEntrenoRaw;
        datosUsuario.superavitDescansoRaw = superavitDescansoRaw;

        // Calcular promedio de calorías
        const numDiasEntreno = diasEntreno.length || 5;
        const numDiasDescanso = 7 - numDiasEntreno;
        const caloriasPromedio = Math.round((caloriasEntreno * numDiasEntreno + caloriasDescanso * numDiasDescanso) / 7);

        // Obtener porcentajes de macronutrientes (si no están definidos, usar 50/30/20)
        const porcentajes = this._obtenerPorcentajesMacros(datosUsuario);

        // Asegurar que los porcentajes estén guardados en datosUsuario si no estaban definidos
        if (datosUsuario.porcentajeCarbs === undefined) {
            datosUsuario.porcentajeCarbs = porcentajes.carbs * 100;
        }
        if (datosUsuario.porcentajeGrasas === undefined) {
            datosUsuario.porcentajeGrasas = porcentajes.grasas * 100;
        }
        if (datosUsuario.porcentajeProteinas === undefined) {
            datosUsuario.porcentajeProteinas = porcentajes.proteinas * 100;
        }

        // Calcular macronutrientes promedio usando los porcentajes (no el método antiguo)
        const macrosPromedio = this._calcularMacrosDesdePorcentajes(caloriasPromedio, porcentajes);

        // Calcular macronutrientes diferenciados
        const macrosEntreno = this._calcularMacrosDiferenciados(
            caloriasEntreno,
            porcentajes,
            peso
        );
        const macrosDescanso = this._calcularMacrosDiferenciados(
            caloriasDescanso,
            porcentajes,
            peso
        );

        // Actualizar datosUsuario con todos los cálculos
        return {
            ...datosUsuario,
            edad,
            sexo,
            altura,
            peso,
            objetivo,
            tipoPersona,
            actividadFisicaDeporte,
            tipoTermogenico,
            superavitEntreno: superavitEntrenoRaw, // Guardar valor raw (positivo) para UI
            superavitDescanso: superavitDescansoRaw, // Guardar valor raw (positivo) para UI
            superavitEntrenoCalculado: superavitEntreno, // Valor calculado (puede ser negativo)
            superavitDescansoCalculado: superavitDescanso, // Valor calculado (puede ser negativo)
            diasEntreno,
            tmbBase,
            tmb,
            tef,
            porcentajeTEF: porcentajeTEF * 100,
            actividadFisicaDeporteKcal,
            gastoBaseEntreno,
            gastoBaseDescanso,
            superavitEntrenoKcal,
            superavitDescansoKcal,
            caloriasEntreno,
            caloriasDescanso,
            calorias: caloriasPromedio,
            caloriasPromedio,
            proteinas: macrosPromedio.proteinas,
            grasas: macrosPromedio.grasas,
            carbohidratos: macrosPromedio.carbohidratos,
            carbsEntreno: macrosEntreno.carbs,
            grasasEntreno: macrosEntreno.grasas,
            proteinasEntreno: macrosEntreno.proteinas,
            carbsEntrenogkg: macrosEntreno.carbsgkg,
            grasasEntrenogkg: macrosEntreno.grasasgkg,
            proteinasEntrenogkg: macrosEntreno.proteinasgkg,
            carbsDescanso: macrosDescanso.carbs,
            grasasDescanso: macrosDescanso.grasas,
            proteinasDescanso: macrosDescanso.proteinas,
            carbsDescansogkg: macrosDescanso.carbsgkg,
            grasasDescansogkg: macrosDescanso.grasasgkg,
            proteinasDescansogkg: macrosDescanso.proteinasgkg,
            porcentajeCarbs: porcentajes.carbs * 100,
            porcentajeGrasas: porcentajes.grasas * 100,
            porcentajeProteinas: porcentajes.proteinas * 100,
            imc: (peso / Math.pow(altura / 100, 2)).toFixed(1)
        };
    },

    /**
     * Calcula TMB base usando fórmula de Mifflin-St Jeor
     */
    _calcularTMBBase(sexo, peso, altura, edad) {
        if (sexo === 'Hombre' || sexo === 'masculino') {
            return 10 * peso + 6.25 * altura - 5 * edad + 5;
        }
        return 10 * peso + 6.25 * altura - 5 * edad - 161;
    },

    /**
     * Normaliza el sexo a formato estándar
     */
    _normalizarSexo(sexo) {
        return (sexo || '').toString().toLowerCase().includes('mujer') ? 'femenino' : 'masculino';
    },

    /**
     * Obtiene el factor según tipo de persona
     */
    _obtenerFactorTipoPersona(sexoNormalizado, tipoPersonaNormalizado, factorPersonalizado) {
        if (typeof factorPersonalizado === 'number') {
            return factorPersonalizado;
        }

        const FACTORES_TIPO_PERSONA = {
            masculino: {
                sedentaria: 1.0,
                'no-sedentaria': 1.21,
                activa: 1.21,
                'muy-activa': 1.35
            },
            femenino: {
                sedentaria: 1.0,
                'no-sedentaria': 1.33,
                activa: 1.33,
                'muy-activa': 1.48
            }
        };

        return FACTORES_TIPO_PERSONA[sexoNormalizado]?.[tipoPersonaNormalizado]
            ?? FACTORES_TIPO_PERSONA[sexoNormalizado]?.['no-sedentaria']
            ?? 1.15;
    },

    /**
     * Obtiene el porcentaje de TEF según tipo termogénico
     */
    _obtenerPorcentajeTEF(tipoTermogenico) {
        const porcentajes = {
            'sedentaria': 0.10,
            'no-sedentaria': 0.15,
            'culturista': 0.20
        };
        return porcentajes[tipoTermogenico] || 0.15;
    },

    /**
     * Obtiene el factor de actividad física
     */
    _obtenerFactorActividad(sexoNormalizado, actividadNormalizada, factorPersonalizado) {
        if (typeof factorPersonalizado === 'number') {
            return factorPersonalizado;
        }

        const FACTORES_ACTIVIDAD = {
            masculino: {
                sedentario: 0,
                ligera: 0.45,
                moderada: 0.65,
                intensa: 0.876,
                'muy-intensa': 1.05
            },
            femenino: {
                sedentario: 0,
                ligera: 0.52,
                moderada: 0.70,
                intensa: 0.92,
                'muy-intensa': 1.10
            }
        };

        const actividad = (actividadNormalizada || '').toString().toLowerCase();
        return FACTORES_ACTIVIDAD[sexoNormalizado]?.[actividad]
            ?? FACTORES_ACTIVIDAD[sexoNormalizado]?.moderada
            ?? 0.65;
    },

    /**
     * Calcula macronutrientes promedio según objetivo (método antiguo, mantenido para compatibilidad)
     */
    _calcularMacrosPromedio(objetivo, peso, calorias) {
        let proteinas, grasas, carbohidratos;

        if (objetivo === 'aumentar') {
            proteinas = Math.round(peso * 2);
            grasas = Math.round((calorias * 0.25) / 9);
            carbohidratos = Math.round((calorias - (proteinas * 4) - (grasas * 9)) / 4);
        } else if (objetivo === 'adelgazar') {
            proteinas = Math.round(peso * 2.2);
            grasas = Math.round((calorias * 0.25) / 9);
            carbohidratos = Math.round((calorias - (proteinas * 4) - (grasas * 9)) / 4);
        } else {
            proteinas = Math.round(peso * 1.8);
            grasas = Math.round((calorias * 0.30) / 9);
            carbohidratos = Math.round((calorias - (proteinas * 4) - (grasas * 9)) / 4);
        }

        return { proteinas, grasas, carbohidratos };
    },

    /**
     * Calcula macronutrientes promedio desde porcentajes (para modo manual)
     */
    _calcularMacrosDesdePorcentajes(calorias, porcentajes) {
        const carbohidratos = Math.round((calorias * porcentajes.carbs) / 4);
        const grasas = Math.round((calorias * porcentajes.grasas) / 9);
        const proteinas = Math.round((calorias * porcentajes.proteinas) / 4);

        return { proteinas, grasas, carbohidratos };
    },

    /**
     * Obtiene porcentajes de macronutrientes
     */
    _obtenerPorcentajesMacros(datosUsuario) {
        return {
            carbs: datosUsuario.porcentajeCarbs !== undefined ? datosUsuario.porcentajeCarbs / 100 : 0.50,
            grasas: datosUsuario.porcentajeGrasas !== undefined ? datosUsuario.porcentajeGrasas / 100 : 0.30,
            proteinas: datosUsuario.porcentajeProteinas !== undefined ? datosUsuario.porcentajeProteinas / 100 : 0.20
        };
    },

    /**
     * Calcula macronutrientes diferenciados para entreno/descanso
     */
    _calcularMacrosDiferenciados(calorias, porcentajes, peso) {
        const carbs = Math.round((calorias * porcentajes.carbs) / 4);
        const grasas = Math.round((calorias * porcentajes.grasas) / 9);
        const proteinas = Math.round((calorias * porcentajes.proteinas) / 4);

        return {
            carbs,
            grasas,
            proteinas,
            carbsgkg: (carbs / peso).toFixed(2),
            grasasgkg: (grasas / peso).toFixed(2),
            proteinasgkg: (proteinas / peso).toFixed(2)
        };
    }
};

// Exportar para uso global
window.MacronutrientesCalculator = MacronutrientesCalculator;

