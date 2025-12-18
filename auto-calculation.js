// ========================================
// AUTOMATIC CALORIE RECALCULATION & WRAPPER
// Includes fallback implementation of calcularMacronutrientes
// ========================================

/**
 * Recalculates macronutrients using the MacronutrientesCalculator module
 * This function replaces the one potentially missing/broken in script.js
 */
window.calcularMacronutrientes = function () {
    console.log('🧮 Ejecutando calcularMacronutrientes (versión final)...');

    // Verificar disponibilidad del calculador
    if (!window.MacronutrientesCalculator) {
        console.error('❌ MacronutrientesCalculator no está disponible.');
        return;
    }

    // Helper to get fresh values directly from DOM
    const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : '';
    };

    // Helper to get number values safely
    const getNum = (id) => {
        const val = getVal(id);
        return val ? parseFloat(val) : 0;
    };

    // Construct fresh data object explicitly reading from DOM
    // This solves the issue of passing stale element references
    const formularioData = {
        edad: getNum('edad'),
        sexo: getVal('sexo'),
        altura: getNum('altura'),
        peso: getNum('peso'),
        objetivo: getVal('objetivo'),
        tipoPersona: getVal('tipoPersona'),
        actividadFisicaDeporte: getVal('actividadFisicaDeporte') || 'moderada',
        tipoTermogenico: getVal('tipoTermogenico'),
        superavitEntreno: getNum('superavitEntreno'),
        superavitDescanso: getNum('superavitDescanso')
    };

    // Also provide element references as fallback if calculator uses them
    const formularioRefs = {
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

    // Ensure global data object exists
    window.datosUsuario = window.datosUsuario || {};

    // Merge fresh form data into datosUsuario BEFORE calculation
    Object.assign(window.datosUsuario, formularioData);

    try {
        // Calculate using fresh data
        const nuevosDatos = window.MacronutrientesCalculator.calcularMacronutrientes(window.datosUsuario, formularioRefs);

        // Update global object
        window.datosUsuario = { ...window.datosUsuario, ...nuevosDatos };

        // Update UI
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val !== undefined && val !== null ? val : '';
        };

        setVal('calorias', window.datosUsuario.calorias);
        setVal('proteinas', window.datosUsuario.proteinas);
        setVal('grasas', window.datosUsuario.grasas);
        setVal('carbohidratos', window.datosUsuario.carbohidratos);

        console.log('✅ Cálculos actualizados:', window.datosUsuario.calorias);

        // Update charts
        if (typeof window.actualizarGraficosMacronutrientes === 'function') {
            try { window.actualizarGraficosMacronutrientes(); } catch (e) { }
        }

        // Solo mostrar resultados si ya hay un objetivo definido
        const objetivoActual = window.datosUsuario?.objetivo || formularioData.objetivo;
        if (objetivoActual) {
            if (typeof window.mostrarResultados === 'function') {
                try { window.mostrarResultados(); } catch (e) { console.warn('Error en mostrarResultados:', e); }
            } else {
                const resultadosDiv = document.getElementById('resultados');
                if (resultadosDiv) resultadosDiv.classList.remove('oculto');
            }
        } else {
            console.log('ℹ️ Objetivo vacío, se omite mostrarResultados hasta que el usuario seleccione uno.');
        }

    } catch (error) {
        console.error('❌ Error crítico en cálculo de macronutrientes:', error);
    }
};

/**
 * Sets up automatic calorie recalculation when key form fields change.
 */
function setupAutoCalculation() {
    console.log('📊 Configurando recálculo automático de calorías...');

    const fieldsToWatch = [
        'peso', 'objetivo', 'tipoPersona', 'actividadFisicaDeporte',
        'edad', 'altura', 'sexo',
        'tipoTermogenico', 'superavitEntreno', 'superavitDescanso'
    ];

    const runCalculation = (sourceId) => {
        // console.log(`🔄 Recálculo disparado por: ${sourceId}`);
        if (typeof window.calcularMacronutrientes === 'function') {
            window.calcularMacronutrientes();
        }
    };

    fieldsToWatch.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('change', () => runCalculation(fieldId));
            if (element.tagName === 'INPUT') {
                element.addEventListener('input', () => runCalculation(fieldId));
            }
        }
    });

    // Expose global function for manual triggering (e.g. from saved client loading)
    window.triggerManualRecalculation = function () {
        console.log('🔄 Recálculo manual solicitado');
        runCalculation('manual-trigger');
    };

    // Initial calculation
    setTimeout(() => {
        console.log('🚀 Ejecutando cálculo inicial...');
        runCalculation('initial-load');
    }, 1200);

    console.log('✅ Recálculo automático configurado totalmente');
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAutoCalculation);
} else {
    setupAutoCalculation();
}
