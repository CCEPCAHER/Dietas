// Generador de planes de dieta usando la base de datos ampliada
// Este archivo genera planes variados usando la base de datos de alimentos

// Cargar datos personalizados desde localStorage al inicio
(function() {
    try {
        const datosGuardados = localStorage.getItem('baseDatosAlimentosPersonalizada');
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            // Actualizar la variable global para uso en dietas
            if (typeof window !== 'undefined') {
                window.baseDatosAlimentos = datos;
                // Si existe alimentosDB, también actualizarlo
                if (window.alimentosDB && typeof window.alimentosDB.actualizarBaseDatos === 'function') {
                    window.alimentosDB.actualizarBaseDatos(datos);
                }
            }
        }
    } catch (e) {
        console.error('Error al cargar datos personalizados:', e);
    }
})();

// Helper para obtener información nutricional de manera segura (fallback)
// IMPORTANTE: usamos un nombre distinto (obtenerInfoNutricionalSeguro) para no
// entrar en recursión con la función global window.obtenerInfoNutricional
function obtenerInfoNutricionalSeguro(nombreAlimento, cantidad = 100) {
    // Si existe la función global (definida en base-datos-alimentos.js), usarla
    if (window.obtenerInfoNutricional && window.obtenerInfoNutricional !== obtenerInfoNutricionalSeguro) {
        return window.obtenerInfoNutricional(nombreAlimento, cantidad);
    }

    // Si no existe la global, intentar buscar manualmente en window.baseDatosAlimentos
    if (window.baseDatosAlimentos && Array.isArray(window.baseDatosAlimentos)) {
        const nombreBuscado = nombreAlimento.toLowerCase().trim();
        const alimento = window.baseDatosAlimentos.find(item =>
            (item.ALIMENTO && item.ALIMENTO.toLowerCase() === nombreBuscado) ||
            (item.nombre && item.nombre.toLowerCase() === nombreBuscado)
        );

        if (alimento) {
            const factor = cantidad / 100;
            return {
                proteinas: (parseFloat(alimento.PROTEÍNAS) || 0) * factor,
                grasas: (parseFloat(alimento.GRASAS) || 0) * factor,
                carbohidratos: (parseFloat(alimento.HIDRATOS) || 0) * factor,
                calorias: (parseFloat(alimento.KCALS) || 0) * factor
            };
        }
    }

    console.warn(`⚠️ No se pudo obtener información nutricional para: ${nombreAlimento}`);
    return { proteinas: 0, grasas: 0, carbohidratos: 0, calorias: 0 };
}

// Variables globales para tracking de diversidad
let alimentosUsadosSemana = [];
let alimentosUsadosHistorial = [];

/**
 * Obtiene alimentos de la base de datos por categoría y macronutriente
 * @param {string[]} categorias - Array de categorías (CLASIFICACIÓN)
 * @param {string} macronutriente - Macronutriente principal
 * @param {number} limite - Límite de resultados
 * @returns {string[]} Array de nombres de alimentos
 */
function obtenerAlimentosDeBD(categorias, macronutriente, limite = 20) {
    if (!window.alimentosDB) {
        console.warn('⚠️ alimentosDB no disponible');
        return [];
    }
    
    const alimentosEncontrados = [];
    
    // Buscar por categoría
    for (const categoria of categorias) {
        const alimentos = window.alimentosDB.obtenerAlimentosPorCategoria(categoria);
        for (const alimento of alimentos) {
            const nombre = alimento.ALIMENTO;
            // Filtrar por macronutriente si se especifica
            if (!macronutriente || alimento.MACRONUTRIENTE_PRINCIPAL === macronutriente) {
                if (!alimentosEncontrados.includes(nombre)) {
                    alimentosEncontrados.push(nombre);
                    if (alimentosEncontrados.length >= limite) break;
                }
            }
        }
        if (alimentosEncontrados.length >= limite) break;
    }
    
    return alimentosEncontrados;
}

/**
 * Verifica si un alimento es compatible con las preferencias dietéticas y restricciones
 * @param {string} nombreAlimento - Nombre del alimento
 * @param {string[]} preferencias - Array de preferencias (ej: ['vegano', 'vegetariano'])
 * @param {string} restricciones - String con restricciones separadas por comas
 * @returns {boolean} - true si es compatible, false si no
 */
function esCompatibleConPreferencias(nombreAlimento, preferencias = [], restricciones = '') {
    // Verificar restricciones primero (intolerancias y prohibiciones)
    if (restricciones && restricciones.trim() !== '') {
        if (!verificarRestricciones(nombreAlimento, restricciones)) {
            return false;
        }
    }
    
    if (!preferencias || preferencias.length === 0) {
        return true; // Sin preferencias = todos los alimentos son compatibles
    }
    
    // Normalizar nombre del alimento para búsqueda
    const nombreNormalizado = nombreAlimento.toLowerCase();
    
    // Alimentos no permitidos para VEGANO
    if (preferencias.includes('vegano')) {
        // Carne
        const carnes = ['pollo', 'pavo', 'ternera', 'cerdo', 'res', 'carne', 'panceta', 'bacon', 'chorizo', 'jamón', 'embutido'];
        // Pescado y marisco
        const pescados = ['salmón', 'atún', 'merluza', 'pescado', 'sepia', 'gamba', 'langostino', 'marisco', 'pulpo', 'calamar'];
        // Lácteos y huevos
        const lacteosHuevos = ['huevo', 'yogur', 'queso', 'leche', 'requesón', 'cottage', 'mantequilla', 'nata', 'crema'];
        // Otros productos animales
        const otros = ['miel', 'gelatina'];
        
        const todosProhibidos = [...carnes, ...pescados, ...lacteosHuevos, ...otros];
        
        if (todosProhibidos.some(prohibido => nombreNormalizado.includes(prohibido))) {
            return false;
        }
    }
    
    // Alimentos no permitidos para VEGETARIANO
    if (preferencias.includes('vegetariano')) {
        const carnes = ['pollo', 'pavo', 'ternera', 'cerdo', 'res', 'carne', 'panceta', 'bacon', 'chorizo', 'jamón', 'embutido'];
        const pescados = ['salmón', 'atún', 'merluza', 'pescado', 'sepia', 'gamba', 'langostino', 'marisco', 'pulpo', 'calamar'];
        
        if (carnes.some(prohibido => nombreNormalizado.includes(prohibido))) {
            return false;
        }
        if (pescados.some(prohibido => nombreNormalizado.includes(prohibido))) {
            return false;
        }
    }
    
    // Alimentos no permitidos para PESCETARIANO
    if (preferencias.includes('pescetariano')) {
        const carnes = ['pollo', 'pavo', 'ternera', 'cerdo', 'res', 'carne', 'panceta', 'bacon', 'chorizo', 'jamón', 'embutido'];
        
        if (carnes.some(prohibido => nombreNormalizado.includes(prohibido))) {
            return false;
        }
    }
    
    return true;
}

/**
 * Filtra un array de alimentos según las preferencias dietéticas y restricciones
 * @param {string[]} alimentos - Array de nombres de alimentos
 * @param {string[]} preferencias - Array de preferencias dietéticas
 * @param {string} restricciones - String con restricciones separadas por comas
 * @returns {string[]} - Array filtrado de alimentos compatibles
 */
function filtrarAlimentosPorPreferencias(alimentos, preferencias = [], restricciones = '') {
    return alimentos.filter(alimento => esCompatibleConPreferencias(alimento, preferencias, restricciones));
}

function generarPlanVariado(objetivo, duracion) {
    // Limpiar historial de alimentos usados para el nuevo plan
    alimentosUsadosHistorial = [];
    alimentosUsadosSemana = [];
    
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
    
    const planCompleto = [];
    
    for (let semana = 0; semana < semanas; semana++) {
        const semanaPlan = generarSemanaVariada(objetivo, semana);
        planCompleto.push(...semanaPlan);
        // Limpiar alimentos de la semana para la siguiente
        alimentosUsadosSemana = [];
    }
    
    return planCompleto;
}

function generarSemanaVariada(objetivo, semanaOffset = 0) {
    const diasSemana = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"];
    const semana = [];
    const datosUsuario = window.datosUsuario || {};
    const diasEntreno = datosUsuario.diasEntreno || [];
    
    // Función para detectar si un día es de descanso
    const esDiaDescanso = (nombreDia) => {
        const nombreDiaLower = nombreDia.toLowerCase()
            .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
            .replace(/ó/g, 'o').replace(/ú/g, 'u');
        return !diasEntreno.includes(nombreDiaLower);
    };
    
    diasSemana.forEach((dia, index) => {
        const esDescanso = esDiaDescanso(dia);
        const diaPlan = {
            dia: dia,
            comidas: {
                desayuno: generarComida(objetivo, 'desayuno', index + semanaOffset * 7, esDescanso),
                medioDia: generarComida(objetivo, 'medioDia', index + semanaOffset * 7, esDescanso),
                almuerzo: generarComida(objetivo, 'almuerzo', index + semanaOffset * 7, esDescanso),
                merienda: generarComida(objetivo, 'merienda', index + semanaOffset * 7, esDescanso),
                cena: generarComida(objetivo, 'cena', index + semanaOffset * 7, esDescanso)
            }
        };
        semana.push(diaPlan);
    });
    
    return semana;
}

function generarComida(objetivo, tipoComida, variacion, esDescanso = false) {
    let alimentos = [];
    let calorias = 0;
    let proteinas = 0;
    let carbohidratos = 0;
    let grasas = 0;
    
    // Obtener datos del usuario desde la variable global
    const datosUsuario = window.datosUsuario || {};
    const { 
        calorias: calPromedio, 
        proteinas: protPromedio, 
        carbohidratos: carbPromedio, 
        grasas: grasPromedio,
        caloriasEntreno, 
        caloriasDescanso,
        proteinasEntreno,
        proteinasDescanso,
        carbsEntreno,
        carbsDescanso,
        grasasEntreno,
        grasasDescanso,
        prohibiciones, 
        preferencias = [] 
    } = datosUsuario;
    
    // Usar valores diferenciados según tipo de día (entreno o descanso)
    let calObj, protObj, carbObj, grasObj;
    if (esDescanso) {
        // Día de descanso
        calObj = caloriasDescanso || calPromedio;
        protObj = proteinasDescanso || protPromedio;
        carbObj = carbsDescanso || carbPromedio;
        grasObj = grasasDescanso || grasPromedio;
    } else {
        // Día de entreno
        calObj = caloriasEntreno || calPromedio;
        protObj = proteinasEntreno || protPromedio;
        carbObj = carbsEntreno || carbPromedio;
        grasObj = grasasEntreno || grasPromedio;
    }
    
    // Distribución objetivo según tipo de comida
    const distribucion = obtenerDistribucionComida(objetivo, tipoComida, calObj, protObj, carbObj, grasObj);
    
    // Seleccionar alimentos según el tipo de comida (pasando preferencias)
    switch(tipoComida) {
        case 'desayuno':
            alimentos = seleccionarDesayuno(objetivo, distribucion, variacion, prohibiciones, preferencias);
            break;
        case 'medioDia':
            alimentos = seleccionarMedioDia(objetivo, distribucion, variacion, prohibiciones, preferencias);
            break;
        case 'almuerzo':
            alimentos = seleccionarAlmuerzo(objetivo, distribucion, variacion, prohibiciones, preferencias);
            break;
        case 'merienda':
            alimentos = seleccionarMerienda(objetivo, distribucion, variacion, prohibiciones, preferencias);
            break;
        case 'cena':
            alimentos = seleccionarCena(objetivo, distribucion, variacion, prohibiciones, preferencias);
            break;
    }
    
    // Balancear macros si es necesario
    alimentos = balancearMacrosComida(alimentos, distribucion, objetivo);
    
    // Calcular macros totales y crear objetos de alimentos con info nutricional
    const alimentosConInfo = alimentos.map(alimento => {
        const info = obtenerInfoNutricionalSeguro(alimento.nombre, alimento.cantidad);
        if (info) {
            calorias += info.calorias;
            proteinas += info.proteinas;
            carbohidratos += info.carbohidratos;
            grasas += info.grasas;
        }
        
        // Retornar objeto con toda la información
        return {
            nombre: alimento.nombre,
            cantidad: alimento.cantidad,
            textoFormateado: formatearAlimento(alimento),
            calorias: info ? info.calorias : 0,
            proteinas: info ? info.proteinas : 0,
            carbohidratos: info ? info.carbohidratos : 0,
            grasas: info ? info.grasas : 0
        };
    });
    
    return {
        alimentos: alimentosConInfo,
        calorias: Math.round(calorias),
        proteinas: Math.round(proteinas),
        carbohidratos: Math.round(carbohidratos),
        grasas: Math.round(grasas * 10) / 10
    };
}

function obtenerDistribucionComida(objetivo, tipoComida, calTotales, protTotales, carbTotales, grasTotales) {
    // Distribución porcentual por tipo de comida
    const distribuciones = {
        aumentar: {
            desayuno: { cal: 0.22, prot: 0.20, carb: 0.25, gras: 0.22 },
            medioDia: { cal: 0.08, prot: 0.15, carb: 0.10, gras: 0.08 },
            almuerzo: { cal: 0.28, prot: 0.30, carb: 0.28, gras: 0.28 },
            merienda: { cal: 0.20, prot: 0.20, carb: 0.22, gras: 0.20 },
            cena: { cal: 0.22, prot: 0.15, carb: 0.15, gras: 0.22 }
        },
        adelgazar: {
            desayuno: { cal: 0.25, prot: 0.25, carb: 0.30, gras: 0.20 },
            medioDia: { cal: 0.10, prot: 0.05, carb: 0.15, gras: 0.10 },
            almuerzo: { cal: 0.30, prot: 0.40, carb: 0.35, gras: 0.30 },
            merienda: { cal: 0.15, prot: 0.10, carb: 0.15, gras: 0.20 },
            cena: { cal: 0.20, prot: 0.20, carb: 0.05, gras: 0.20 }
        },
        mantener: {
            desayuno: { cal: 0.24, prot: 0.20, carb: 0.28, gras: 0.22 },
            medioDia: { cal: 0.10, prot: 0.10, carb: 0.12, gras: 0.12 },
            almuerzo: { cal: 0.30, prot: 0.35, carb: 0.32, gras: 0.28 },
            merienda: { cal: 0.18, prot: 0.15, carb: 0.18, gras: 0.20 },
            cena: { cal: 0.18, prot: 0.20, carb: 0.10, gras: 0.18 }
        }
    };
    
    const dist = distribuciones[objetivo]?.[tipoComida];
    
    // Validar que la distribución exista
    if (!dist) {
        console.error(`No se encontró distribución para objetivo: ${objetivo}, comida: ${tipoComida}`);
        // Retornar distribución por defecto (proporcional)
        const numComidas = 5;
        return {
            calorias: Math.round(calTotales / numComidas),
            proteinas: Math.round(protTotales / numComidas),
            carbohidratos: Math.round(carbTotales / numComidas),
            grasas: Math.round(grasTotales / numComidas * 10) / 10
        };
    }
    
    return {
        calorias: Math.round(calTotales * dist.cal),
        proteinas: Math.round(protTotales * dist.prot),
        carbohidratos: Math.round(carbTotales * dist.carb),
        grasas: Math.round(grasTotales * dist.gras * 10) / 10
    };
}

function seleccionarDesayuno(objetivo, distribucion, variacion, restricciones = '', preferencias = []) {
    const alimentos = [];
    
    // Base de carbohidratos - consultar base de datos
    let carbBase = obtenerAlimentosDeBD(['Cereal', 'Pan'], 'Hidratos de carbono', 15);
    
    // Si no hay en BD, usar fallback
    if (carbBase.length === 0) {
        carbBase = objetivo === 'aumentar' ? 
            ['Avena', 'Pan integral', 'Quinoa', 'Avena copos', 'Pan de centeno'] :
            ['Avena', 'Yogur griego', 'Tortillas de maíz', 'Avena copos'];
    }
    
    // Filtrar según preferencias y restricciones
    carbBase = filtrarAlimentosPorPreferencias(carbBase, preferencias, restricciones);
    
    // Si no quedan opciones, usar alternativas
    if (carbBase.length === 0) {
        carbBase = ['Avena', 'Quinoa', 'Tortillas de maíz'];
        carbBase = filtrarAlimentosPorPreferencias(carbBase, preferencias, restricciones);
    }
    
    const carbSeleccionado = carbBase.length > 0 ? carbBase[(variacion * 3) % carbBase.length] : 'Avena';
    // Calcular cantidad basada en la distribución objetivo de carbohidratos
    const cantidadCarb = calcularCantidadPorDistribucion(carbSeleccionado, distribucion, 'carbohidratos');
    alimentos.push({ nombre: carbSeleccionado, cantidad: cantidadCarb });
    
    // Proteína - consultar base de datos según preferencias
    let protBase;
    if (preferencias.includes('vegano')) {
        // Opciones veganas - consultar BD
        protBase = obtenerAlimentosDeBD(['Legumbres', 'Semilla'], 'Proteínas', 15);
        if (protBase.length === 0) {
            protBase = ['Tofu', 'Tempeh', 'Legumbres', 'Semillas de chía', 'Semillas de cáñamo', 'Proteína vegana en polvo'];
        }
    } else if (preferencias.includes('vegetariano') || preferencias.includes('pescetariano')) {
        // Vegetarianos y pescetarianos - consultar BD
        protBase = obtenerAlimentosDeBD(['Origen animal', 'Leche'], 'Proteínas', 15);
        if (protBase.length === 0) {
            protBase = ['Huevos enteros', 'Claras de huevo', 'Yogur griego', 'Requesón', 'Queso cottage'];
        }
    } else {
        // Sin restricciones - consultar BD
        protBase = obtenerAlimentosDeBD(['Origen animal', 'Carne blanca', 'Carne roja'], 'Proteínas', 15);
        if (protBase.length === 0) {
            protBase = ['Huevos enteros', 'Claras de huevo', 'Yogur griego', 'Requesón', 'Queso cottage'];
        }
    }
    
    protBase = filtrarAlimentosPorPreferencias(protBase, preferencias, restricciones);
    
    // Si no quedan opciones, usar alternativas
    if (protBase.length === 0 && !preferencias.includes('vegano')) {
        protBase = ['Huevos enteros', 'Requesón'];
        protBase = filtrarAlimentosPorPreferencias(protBase, preferencias, restricciones);
    } else if (protBase.length === 0 && preferencias.includes('vegano')) {
        protBase = ['Tofu', 'Legumbres'];
        protBase = filtrarAlimentosPorPreferencias(protBase, preferencias, restricciones);
    }
    
    if (protBase.length > 0) {
        const protSeleccionado = protBase[(variacion * 5) % protBase.length];
        // Calcular cantidad basada en la distribución objetivo de proteínas
        let cantidadProt = calcularCantidadPorDistribucion(protSeleccionado, distribucion, 'proteinas');
        // Ajuste especial para huevos (unidades vs gramos)
        if (protSeleccionado === 'Huevos enteros' || protSeleccionado === 'Claras de huevo') {
            // Convertir gramos a unidades aproximadas (1 huevo ≈ 50g)
            cantidadProt = Math.max(1, Math.min(Math.round(cantidadProt / 50), 6));
        }
        alimentos.push({ nombre: protSeleccionado, cantidad: cantidadProt });
    }
    
    // Fruta - consultar base de datos
    let frutas = obtenerAlimentosDeBD(['Fruta'], null, 20);
    if (frutas.length === 0) {
        frutas = ['Plátano', 'Fresas', 'Arándanos', 'Manzana', 'Kiwi', 'Mango'];
    }
    frutas = filtrarAlimentosPorPreferencias(frutas, preferencias, restricciones);
    if (frutas.length > 0) {
        const frutaSeleccionada = frutas[(variacion * 7) % frutas.length];
        // Calcular cantidad basada en distribución - las frutas aportan carbohidratos
        const cantidadFruta = calcularCantidadPorDistribucion(frutaSeleccionada, distribucion, 'carbohidratos');
        alimentos.push({ nombre: frutaSeleccionada, cantidad: Math.max(50, Math.min(cantidadFruta, 200)) });
    }
    
    // Grasas saludables - consultar base de datos
    if (objetivo === 'aumentar') {
        let grasas = obtenerAlimentosDeBD(['Fruto seco', 'Otros'], 'Grasas', 10);
        if (grasas.length === 0) {
            grasas = ['Almendras', 'Nueces', 'Aguacate', 'Mantequilla de almendras'];
        }
        grasas = filtrarAlimentosPorPreferencias(grasas, preferencias, restricciones);
        if (grasas.length > 0) {
            const grasaSeleccionada = grasas[(variacion * 11) % grasas.length];
            // Calcular cantidad basada en distribución - limitar grasas para evitar exceso
            const cantidadGrasa = calcularCantidadPorDistribucion(grasaSeleccionada, distribucion, 'grasas');
            alimentos.push({ nombre: grasaSeleccionada, cantidad: Math.max(10, Math.min(cantidadGrasa, 50)) });
        }
    }
    
    // Complementos
    if (objetivo === 'aumentar') {
        let complementos = obtenerAlimentosDeBD(['Otros'], null, 10);
        if (complementos.length === 0) {
            complementos = ['Miel', 'Leche entera', 'Cacao en polvo'];
        }
        complementos = filtrarAlimentosPorPreferencias(complementos, preferencias, restricciones);
        if (complementos.length > 0) {
            const complemento = complementos[(variacion * 13) % complementos.length];
            alimentos.push({ nombre: complemento, cantidad: complemento === 'Miel' ? 20 : 200 });
        }
    }
    
    return alimentos;
}

function seleccionarMedioDia(objetivo, distribucion, variacion, restricciones = '', preferencias = []) {
    const alimentos = [];
    
    // 1. Fruta - consultar base de datos
    let frutas = obtenerAlimentosDeBD(['Fruta'], null, 15);
    if (frutas.length === 0) {
        frutas = ['Manzana', 'Pera', 'Plátano', 'Naranja', 'Kiwi', 'Mandarina', 'Melocotón'];
    }
    frutas = filtrarAlimentosPorPreferencias(frutas, preferencias, restricciones);
    
    const frutaSeleccionada = frutas.length > 0 ? frutas[(variacion * 7) % frutas.length] : 'Manzana';
    
    // Cantidad de fruta según objetivo
    let cantidadFruta = 150;
    if (objetivo === 'aumentar') cantidadFruta = 200;
    if (objetivo === 'adelgazar') cantidadFruta = 120;
    
    // Ajuste para frutas pequeñas/grandes
    if (['Plátano', 'Banana'].includes(frutaSeleccionada)) cantidadFruta = Math.round(cantidadFruta * 0.7); // Más calórico
    
    alimentos.push({ nombre: frutaSeleccionada, cantidad: cantidadFruta });
    
    // 2. Proteína ligera o Lácteo
    let proteinaLigera = [];
    
    if (preferencias.includes('vegano')) {
        proteinaLigera = obtenerAlimentosDeBD(['Legumbres', 'Fruto seco', 'Semilla'], 'Proteínas', 10);
        if (proteinaLigera.length === 0) {
            proteinaLigera = ['Yogur de soja', 'Frutos secos', 'Hummus', 'Barrita vegana'];
        }
    } else if (preferencias.includes('vegetariano')) {
        proteinaLigera = obtenerAlimentosDeBD(['Leche', 'Origen animal'], 'Proteínas', 10);
        if (proteinaLigera.length === 0) {
            proteinaLigera = ['Yogur griego', 'Queso fresco batido', 'Requesón', 'Huevo duro'];
        }
    } else {
        proteinaLigera = obtenerAlimentosDeBD(['Leche', 'Origen animal', 'Carne blanca', 'Carne roja'], 'Proteínas', 15);
        if (proteinaLigera.length === 0) {
            proteinaLigera = ['Yogur griego', 'Pavo', 'Jamón serrano', 'Requesón', 'Lomo embuchado', 'Atún al natural'];
        }
    }
    
    proteinaLigera = filtrarAlimentosPorPreferencias(proteinaLigera, preferencias, restricciones);
    
    if (proteinaLigera.length > 0) {
        const proteinaSel = proteinaLigera[(variacion * 11) % proteinaLigera.length];
        
        // Cantidad según el tipo de alimento
        let cantidadProt = 100; // Default (yogur, etc)
        
        if (['Pavo', 'Jamón', 'Pollo', 'Lomo', 'Atún'].some(p => proteinaSel.includes(p))) {
            cantidadProt = objetivo === 'aumentar' ? 80 : 50;
        } else if (['Yogur', 'Queso', 'Requesón', 'Kefir'].some(p => proteinaSel.includes(p))) {
            cantidadProt = objetivo === 'aumentar' ? 200 : 125;
        } else if (['Huevo'].some(p => proteinaSel.includes(p))) {
            cantidadProt = 1; // 1 unidad
        } else if (['Barrita', 'Batido'].some(p => proteinaSel.includes(p))) {
            cantidadProt = 1; // 1 unidad
        } else if (['Frutos secos', 'Nueces', 'Almendras'].some(p => proteinaSel.includes(p))) {
            cantidadProt = 20; // Gramos
        }
        
        alimentos.push({ nombre: proteinaSel, cantidad: cantidadProt });
    }
    
    // 3. Grasas saludables (Nueces/Semillas) - Opcional según objetivo
    if (objetivo === 'aumentar' || (objetivo === 'mantener' && variacion % 2 === 0)) {
        let grasas = obtenerAlimentosDeBD(['Fruto seco'], 'Grasas', 10);
        if (grasas.length === 0) {
            grasas = ['Nueces', 'Almendras', 'Avellanas', 'Anacardos', 'Pistachos'];
        }
        grasas = filtrarAlimentosPorPreferencias(grasas, preferencias, restricciones);
        
        // Verificar que no hayamos añadido ya frutos secos como proteína
        const yaTieneFrutosSecos = alimentos.some(a => 
            ['Nueces', 'Almendras', 'Avellanas', 'Anacardos', 'Pistachos', 'Frutos secos'].some(fs => a.nombre.includes(fs))
        );
        
        if (!yaTieneFrutosSecos && grasas.length > 0) {
            const grasaSel = grasas[(variacion * 13) % grasas.length];
            alimentos.push({ nombre: grasaSel, cantidad: objetivo === 'aumentar' ? 30 : 15 });
        }
    }
    
    return alimentos;
}

function seleccionarAlmuerzo(objetivo, distribucion, variacion, restricciones = '', preferencias = []) {
    const alimentos = [];
    
    // Proteína principal - consultar base de datos según preferencias
    let proteinas;
    if (preferencias.includes('vegano')) {
        proteinas = obtenerAlimentosDeBD(['Legumbres'], 'Proteínas', 20);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Tofu', 'Tempeh', 'Legumbres', 'Lentejas', 'Garbanzos', 'Seitán'] :
                ['Tofu', 'Legumbres', 'Lentejas', 'Garbanzos', 'Judías verdes', 'Quinoa'];
        }
    } else if (preferencias.includes('vegetariano')) {
        proteinas = obtenerAlimentosDeBD(['Origen animal', 'Leche'], 'Proteínas', 20);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Huevos enteros', 'Tofu', 'Legumbres', 'Lentejas', 'Garbanzos', 'Queso fresco'] :
                ['Huevos enteros', 'Tofu', 'Legumbres', 'Lentejas', 'Claras de huevo', 'Queso cottage'];
        }
    } else if (preferencias.includes('pescetariano')) {
        proteinas = obtenerAlimentosDeBD(['Pescado azul', 'Pescado blanco', 'Marisco'], 'Proteínas', 20);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Salmón', 'Atún fresco', 'Huevos enteros', 'Merluza', 'Sepia', 'Tofu'] :
                ['Salmón', 'Atún fresco', 'Merluza', 'Claras de huevo', 'Sepia', 'Tofu'];
        }
    } else {
        proteinas = obtenerAlimentosDeBD(['Carne blanca', 'Carne roja', 'Pescado azul', 'Pescado blanco'], 'Proteínas', 30);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Pechuga de pollo', 'Ternera magra', 'Salmón', 'Atún fresco', 'Pavo', 'Huevos enteros'] :
                ['Pechuga de pollo', 'Atún fresco', 'Merluza', 'Pavo', 'Claras de huevo', 'Sepia'];
        }
    }
    
    proteinas = filtrarAlimentosPorPreferencias(proteinas, preferencias, restricciones);
    const proteinaSeleccionada = proteinas[(variacion * 17) % proteinas.length];
    // Calcular cantidad basada en distribución objetivo de proteínas
    let cantidadProt = calcularCantidadPorDistribucion(proteinaSeleccionada, distribucion, 'proteinas');
    // Ajuste especial para huevos
    if (proteinaSeleccionada === 'Huevos enteros' || proteinaSeleccionada === 'Huevos' || proteinaSeleccionada === 'Claras de huevo') {
        cantidadProt = Math.max(1, Math.min(Math.round(cantidadProt / 50), 6));
    }
    alimentos.push({ nombre: proteinaSeleccionada, cantidad: cantidadProt });
    
    // Carbohidrato - consultar base de datos - PRIORITARIO para aumentar carbohidratos
    let carbohidratos = obtenerAlimentosDeBD(['Cereal', 'Tubérculo', 'Legumbres'], 'Hidratos de carbono', 20);
    if (carbohidratos.length === 0) {
        carbohidratos = objetivo === 'aumentar' ?
            ['Arroz integral', 'Pasta integral', 'Quinoa', 'Batata', 'Patata', 'Cuscús'] :
            ['Arroz integral', 'Quinoa', 'Batata', 'Lentejas', 'Garbanzos', 'Judías verdes'];
    }
    carbohidratos = filtrarAlimentosPorPreferencias(carbohidratos, preferencias, restricciones);
    const carbSeleccionado = carbohidratos.length > 0 ? carbohidratos[(variacion * 19) % carbohidratos.length] : 'Arroz integral';
    // Calcular cantidad basada en distribución - priorizar carbohidratos
    const cantidadCarb = calcularCantidadPorDistribucion(carbSeleccionado, distribucion, 'carbohidratos');
    alimentos.push({ nombre: carbSeleccionado, cantidad: Math.max(50, Math.min(cantidadCarb, 300)) });
    
    // Verduras - consultar base de datos
    let verduras = obtenerAlimentosDeBD(['Verduras'], null, 20);
    if (verduras.length === 0) {
        verduras = ['Brócoli', 'Espinacas', 'Espárragos', 'Coliflor', 'Calabacín', 'Judías verdes', 'Pimientos', 'Berenjena'];
    }
    const verduraSeleccionada = verduras[(variacion * 23) % verduras.length];
    alimentos.push({ nombre: verduraSeleccionada, cantidad: 150 });
    
    // Ensalada/verde
    let ensaladas = obtenerAlimentosDeBD(['Verduras'], null, 10);
    if (ensaladas.length === 0) {
        ensaladas = ['Lechuga', 'Rúcula', 'Espinacas', 'Canónigos'];
    }
    const ensaladaSeleccionada = ensaladas[(variacion * 29) % ensaladas.length];
    alimentos.push({ nombre: ensaladaSeleccionada, cantidad: 100 });
    
    // Grasas - consultar base de datos - limitar para evitar exceso
    if (objetivo !== 'adelgazar') {
        let grasas = obtenerAlimentosDeBD(['Fruto seco', 'Otros'], 'Grasas', 10);
        if (grasas.length === 0) {
            grasas = ['Aguacate', 'Aceite de oliva', 'Nueces'];
        }
        grasas = filtrarAlimentosPorPreferencias(grasas, preferencias, restricciones);
        const grasaSeleccionada = grasas.length > 0 ? grasas[(variacion * 31) % grasas.length] : 'Aceite de oliva';
        // Calcular cantidad basada en distribución - limitar grasas para evitar exceso
        const cantidadGrasa = calcularCantidadPorDistribucion(grasaSeleccionada, distribucion, 'grasas');
        alimentos.push({ nombre: grasaSeleccionada, cantidad: Math.max(5, Math.min(cantidadGrasa, 50)) });
    } else {
        // Para adelgazar, mínimo de grasas
        alimentos.push({ nombre: 'Aceite de oliva', cantidad: 5 });
    }
    
    return alimentos;
}

function seleccionarMerienda(objetivo, distribucion, variacion, restricciones = '', preferencias = []) {
    const alimentos = [];
    
    // Estructura: Base (Proteína/Lácteo) + Complemento (Fruta/Cereal/Grasa)
    
    // 1. Base de Merienda (Proteína/Lácteo)
    let baseMerienda = [];
    
    if (preferencias.includes('vegano')) {
        baseMerienda = obtenerAlimentosDeBD(['Legumbres', 'Fruto seco', 'Semilla'], 'Proteínas', 10);
        if (baseMerienda.length === 0) {
            baseMerienda = ['Yogur de soja', 'Batido de proteína vegana', 'Tostada con hummus', 'Frutos secos'];
        }
    } else if (preferencias.includes('vegetariano')) {
        baseMerienda = obtenerAlimentosDeBD(['Leche', 'Origen animal'], 'Proteínas', 15);
        if (baseMerienda.length === 0) {
            baseMerienda = ['Yogur griego', 'Batido de proteína whey', 'Queso fresco', 'Requesón', 'Huevo duro'];
        }
    } else {
        baseMerienda = obtenerAlimentosDeBD(['Leche', 'Origen animal', 'Carne blanca'], 'Proteínas', 20);
        if (baseMerienda.length === 0) {
            baseMerienda = ['Yogur griego', 'Batido de proteína', 'Pavo', 'Queso fresco', 'Requesón', 'Atún al natural'];
        }
    }
    
    baseMerienda = filtrarAlimentosPorPreferencias(baseMerienda, preferencias, restricciones);
    
    if (baseMerienda.length > 0) {
        const baseSel = baseMerienda[(variacion * 17) % baseMerienda.length];
        
        // Cantidad base
        let cantidadBase = 100;
        
        if (['Yogur', 'Queso fresco', 'Requesón', 'Kefir'].some(p => baseSel.includes(p))) {
            cantidadBase = objetivo === 'aumentar' ? 200 : 150;
        } else if (['Batido', 'Proteína'].some(p => baseSel.includes(p))) {
            cantidadBase = 30; // Gramos de polvo aprox o 1 scoop
            // Si es batido líquido, ajustar
            if (baseSel.toLowerCase().includes('líquido') || baseSel.toLowerCase().includes('bebible')) cantidadBase = 250;
        } else if (['Pavo', 'Jamón', 'Atún'].some(p => baseSel.includes(p))) {
            cantidadBase = objetivo === 'aumentar' ? 80 : 50;
            // Acompañamiento para embutido (pan)
            if (objetivo !== 'adelgazar' || variacion % 2 === 0) {
                let panes = obtenerAlimentosDeBD(['Pan'], 'Hidratos de carbono', 5);
                if (panes.length === 0) panes = ['Pan integral', 'Tostada'];
                panes = filtrarAlimentosPorPreferencias(panes, preferencias, restricciones);
                if (panes.length > 0) {
                    alimentos.push({ nombre: panes[0], cantidad: objetivo === 'aumentar' ? 60 : 30 });
                }
            }
        } else if (['Huevo'].some(p => baseSel.includes(p))) {
            cantidadBase = 1; // unidad
        } else if (['Frutos secos'].some(p => baseSel.includes(p))) {
            cantidadBase = 30;
        }
        
        alimentos.push({ nombre: baseSel, cantidad: cantidadBase });
    }
    
    // 2. Complemento (Fruta o Cereal)
    // Si el objetivo es adelgazar, a veces solo fruta o solo la base
    if (objetivo !== 'adelgazar' || variacion % 2 !== 0) {
        let complementos = obtenerAlimentosDeBD(['Fruta', 'Cereal'], 'Hidratos de carbono', 15);
        if (complementos.length === 0) {
            complementos = ['Manzana', 'Plátano', 'Avena', 'Tortitas de arroz', 'Frutos rojos', 'Kiwi'];
        }
        complementos = filtrarAlimentosPorPreferencias(complementos, preferencias, restricciones);
        
        // Evitar duplicar si ya pusimos pan
        const yaTienePan = alimentos.some(a => a.nombre.toLowerCase().includes('pan') || a.nombre.toLowerCase().includes('tostada'));
        
        if (!yaTienePan && complementos.length > 0) {
            const compSel = complementos[(variacion * 19) % complementos.length];
            
            let cantidadComp = 100;
            if (['Plátano', 'Banana'].includes(compSel)) cantidadComp = 100;
            if (['Avena', 'Cereal'].some(c => compSel.includes(c))) cantidadComp = objetivo === 'aumentar' ? 50 : 30;
            if (['Tortitas'].some(c => compSel.includes(c))) cantidadComp = 2; // unidades
            if (['Manzana', 'Pera', 'Naranja'].includes(compSel)) cantidadComp = 150;
            
            alimentos.push({ nombre: compSel, cantidad: cantidadComp });
        }
    }
    
    // 3. Extra para aumentar (Grasas)
    if (objetivo === 'aumentar') {
        const tieneGrasa = alimentos.some(a => 
            ['Nueces', 'Almendras', 'Avellanas', 'Frutos secos', 'Aguacate', 'Mantequilla'].some(g => a.nombre.includes(g))
        );
        
        if (!tieneGrasa) {
            let grasas = obtenerAlimentosDeBD(['Fruto seco'], 'Grasas', 5);
            if (grasas.length === 0) grasas = ['Nueces', 'Almendras', 'Mantequilla de cacahuete'];
            grasas = filtrarAlimentosPorPreferencias(grasas, preferencias, restricciones);
            
            if (grasas.length > 0) {
                const grasaSel = grasas[(variacion * 23) % grasas.length];
                alimentos.push({ nombre: grasaSel, cantidad: 20 });
            }
        }
    }
    
    return alimentos;
}

function seleccionarCena(objetivo, distribucion, variacion, restricciones = '', preferencias = []) {
    const alimentos = [];
    
    // Proteína principal - consultar base de datos según preferencias
    let proteinas;
    if (preferencias.includes('vegano')) {
        proteinas = obtenerAlimentosDeBD(['Legumbres'], 'Proteínas', 20);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Tofu', 'Tempeh', 'Legumbres', 'Lentejas', 'Garbanzos', 'Seitán'] :
                ['Tofu', 'Legumbres', 'Lentejas', 'Garbanzos', 'Judías verdes', 'Quinoa'];
        }
    } else if (preferencias.includes('vegetariano')) {
        proteinas = obtenerAlimentosDeBD(['Origen animal', 'Leche'], 'Proteínas', 20);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Huevos', 'Tofu', 'Legumbres', 'Lentejas', 'Garbanzos', 'Queso fresco'] :
                ['Huevos', 'Tofu', 'Legumbres', 'Claras de huevo', 'Queso cottage', 'Tofu'];
        }
    } else if (preferencias.includes('pescetariano')) {
        proteinas = obtenerAlimentosDeBD(['Pescado azul', 'Pescado blanco', 'Pescado semigraso', 'Marisco'], 'Proteínas', 20);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Salmón', 'Atún', 'Huevos', 'Merluza', 'Sepia', 'Tofu'] :
                ['Merluza', 'Salmón', 'Sepia', 'Claras de huevo', 'Atún', 'Tofu'];
        }
    } else {
        proteinas = obtenerAlimentosDeBD(['Carne blanca', 'Carne roja', 'Pescado azul', 'Pescado blanco'], 'Proteínas', 30);
        if (proteinas.length === 0) {
            proteinas = objetivo === 'aumentar' ?
                ['Salmón', 'Pollo al horno', 'Pavo', 'Ternera magra', 'Atún', 'Huevos'] :
                ['Merluza', 'Pollo a la plancha', 'Pavo', 'Sepia', 'Claras de huevo', 'Tofu'];
        }
    }
    
    proteinas = filtrarAlimentosPorPreferencias(proteinas, preferencias, restricciones);
    const proteinaSeleccionada = proteinas[(variacion * 37) % proteinas.length];
    // Calcular cantidad basada en distribución objetivo de proteínas
    let cantidadProt = calcularCantidadPorDistribucion(proteinaSeleccionada, distribucion, 'proteinas');
    // Ajuste especial para huevos
    if (proteinaSeleccionada === 'Huevos enteros' || proteinaSeleccionada === 'Huevos' || proteinaSeleccionada === 'Claras de huevo') {
        cantidadProt = Math.max(1, Math.min(Math.round(cantidadProt / 50), 6));
    }
    alimentos.push({ nombre: proteinaSeleccionada, cantidad: cantidadProt });
    
    // Carbohidrato (menor en cena) - consultar base de datos pero calcular basado en distribución
    let carbohidratos;
    if (objetivo === 'aumentar') {
        carbohidratos = obtenerAlimentosDeBD(['Tubérculo', 'Cereal'], 'Hidratos de carbono', 20);
        if (carbohidratos.length === 0) {
            carbohidratos = ['Batata', 'Quinoa', 'Arroz integral', 'Patata', 'Cuscús'];
        }
    } else {
        carbohidratos = obtenerAlimentosDeBD(['Verduras'], null, 10);
        if (carbohidratos.length === 0) {
            carbohidratos = ['Verduras al vapor', 'Ensalada', 'Coliflor', 'Espárragos'];
        }
    }
    carbohidratos = filtrarAlimentosPorPreferencias(carbohidratos, preferencias, restricciones);
    
    const carbSeleccionado = carbohidratos.length > 0 ? carbohidratos[(variacion * 41) % carbohidratos.length] : 'Batata';
    // Calcular cantidad basada en distribución - en cena los carbohidratos son menores
    const cantidadCarb = calcularCantidadPorDistribucion(carbSeleccionado, distribucion, 'carbohidratos');
    // En cena, reducir un 30% respecto a otras comidas
    const cantidadCarbCena = Math.round(cantidadCarb * 0.7);
    alimentos.push({ nombre: carbSeleccionado, cantidad: Math.max(50, Math.min(cantidadCarbCena, 200)) });
    
    // Verduras - consultar base de datos
    let verduras = obtenerAlimentosDeBD(['Verduras'], null, 20);
    if (verduras.length === 0) {
        verduras = ['Espárragos', 'Brócoli', 'Espinacas', 'Calabacín', 'Judías verdes', 'Pimientos', 'Berenjena', 'Coliflor'];
    }
    const verduraSeleccionada = verduras[(variacion * 43) % verduras.length];
    alimentos.push({ nombre: verduraSeleccionada, cantidad: 150 });
    
    // Ensalada - consultar base de datos
    let ensaladas = obtenerAlimentosDeBD(['Verduras'], null, 10);
    if (ensaladas.length === 0) {
        ensaladas = ['Ensalada verde', 'Lechuga', 'Rúcula', 'Espinacas'];
    }
    const ensaladaSeleccionada = ensaladas[(variacion * 47) % ensaladas.length];
    alimentos.push({ nombre: ensaladaSeleccionada, cantidad: 100 });
    
    // Grasas (solo si no es adelgazar) - limitar para evitar exceso
    if (objetivo !== 'adelgazar') {
        // Calcular cantidad basada en distribución - limitar grasas
        const cantidadGrasaCena = calcularCantidadPorDistribucion('Aceite de oliva', distribucion, 'grasas');
        alimentos.push({ nombre: 'Aceite de oliva', cantidad: Math.max(5, Math.min(cantidadGrasaCena, 15)) });
    } else {
        alimentos.push({ nombre: 'Limón', cantidad: 10 });
    }
    
    return alimentos;
}

// Función para formatear alimento correctamente según su tipo
function formatearAlimento(alimento) {
    const nombre = alimento.nombre;
    const cantidad = alimento.cantidad;
    
    // Huevos - siempre por unidades
    if (nombre.toLowerCase().includes('huevo')) {
        const numUnidades = Math.max(1, Math.round(cantidad / 50)); // Aproximar huevos
        return `${nombre} (${numUnidades} ${numUnidades === 1 ? 'unidad' : 'unidades'})`;
    }
    
    // Barritas - por unidades
    if (nombre.toLowerCase().includes('barrita')) {
        return `${nombre} (${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'})`;
    }
    
    // Tortillas - por unidades
    if (nombre.toLowerCase().includes('tortilla')) {
        return `${nombre} (${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'})`;
    }
    
    // Pan/Sándwiches - por rebanadas
    if (nombre.toLowerCase().includes('sándwich')) {
        return `${nombre} (${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'})`;
    }
    
    if (nombre.toLowerCase().includes('pan') && !nombre.toLowerCase().includes('pan integral') && cantidad <= 10) {
        return `${nombre} (${cantidad} ${cantidad === 1 ? 'rebanada' : 'rebanadas'})`;
    }
    
    // Frutas individuales - por gramos siempre (cantidad en gramos)
    const frutasIndividuales = ['Plátano', 'Manzana', 'Naranja', 'Pera', 'Kiwi', 'Melocotón', 'Albaricoque', 'Ciruela', 'Aguacate', 'Pepino', 'Tomate', 'Limón', 'Lima'];
    if (frutasIndividuales.some(f => nombre.toLowerCase().includes(f.toLowerCase()))) {
        // Las frutas siempre se miden en gramos (peso)
        return `${nombre} (${cantidad}g)`;
    }
    
    // Frutas pequeñas por porciones
    const frutasPequenas = ['Fresas', 'Arándanos', 'Moras', 'Frambuesas', 'Cerezas', 'Uvas'];
    if (frutasPequenas.some(f => nombre.toLowerCase().includes(f.toLowerCase())) && cantidad <= 30) {
        // Puede ser por unidades si la cantidad es muy pequeña
        return `${nombre} (${cantidad}g)`;
    }
    
    // Bebidas en ml
    const bebidas = ['Leche', 'Yogur', 'Batido', 'Té', 'Café', 'Infusión', 'Agua', 'Zumo', 'Kombucha'];
    if (bebidas.some(b => nombre.toLowerCase().includes(b.toLowerCase()))) {
        if (cantidad >= 1000) {
            return `${nombre} (${cantidad/1000}L)`;
        } else {
            return `${nombre} (${cantidad}ml)`;
        }
    }
    
    // Por defecto en gramos
    if (cantidad === 100) {
        return nombre;
    } else {
        return `${nombre} (${cantidad}g)`;
    }
}

// Funciones auxiliares para selección inteligente

// Función para seleccionar alimento evitando repeticiones
function seleccionarAlimentoDiverso(arrayAlimentos, indicesUsados, variacion = 0) {
    const disponibles = arrayAlimentos.filter((_, index) => !indicesUsados.includes(index));
    if (disponibles.length === 0) {
        // Si ya usamos todos, limpiamos y empezamos de nuevo
        indicesUsados.length = 0;
        return arrayAlimentos[variacion % arrayAlimentos.length];
    }
    
    const seleccionado = disponibles[variacion % disponibles.length];
    const indice = arrayAlimentos.indexOf(seleccionado);
    indicesUsados.push(indice);
    
    return seleccionado;
}

// Función para verificar restricciones alimentarias
function verificarRestricciones(alimento, restricciones) {
    if (!restricciones || restricciones.trim() === '') return true;
    
    const alimentoLower = alimento.toLowerCase();
    const restriccionesLower = restricciones.toLowerCase();
    
    // Mapeo de intolerancias comunes a palabras clave en alimentos
    // Las claves deben coincidir con los valores de los checkboxes (con guiones)
    const mapeoIntolerancias = {
        'lactosa': ['lactosa', 'leche', 'yogur', 'queso', 'requesón', 'cottage', 'mantequilla', 'nata', 'crema', 'lácteo', 'lácteos'],
        'gluten': ['gluten', 'trigo', 'pan', 'pasta', 'harina', 'centeno', 'cebada', 'espelta', 'berberechos', 'fideos'],
        'frutos-secos': ['almendras', 'nueces', 'avellanas', 'cacahuetes', 'pistachos', 'anacardos', 'frutos secos', 'fruto seco', 'mantequilla de almendras', 'mantequilla de maní', 'avellanas', 'anacardos'],
        'huevo': ['huevo', 'huevos', 'clara', 'claras', 'yema', 'yemas', 'omelet', 'tortilla'],
        'pescado': ['pescado', 'salmón', 'atún', 'merluza', 'bacalao', 'sardina', 'anchoa', 'pez', 'pez blanco', 'caballa', 'bonito', 'bonito del norte'],
        'mariscos': ['marisco', 'gamba', 'langostino', 'cangrejo', 'langosta', 'pulpo', 'calamar', 'sepia', 'mejillón', 'ostra', 'almeja', 'berberechos', 'centollo', 'bogavante'],
        'soja': ['soja', 'soya', 'tofu', 'tempeh', 'miso'],
        'cacahuetes': ['cacahuete', 'cacahuetes', 'maní', 'manteca de cacahuete', 'mantequilla de cacahuete'],
        'carne-roja': ['ternera', 'res', 'carne roja', 'buey', 'cordero', 'carne de ternera', 'carne de res', 'carne de buey', 'carne de cordero'],
        'cerdo': ['cerdo', 'panceta', 'bacon', 'jamón', 'chorizo', 'embutido', 'embutidos', 'salchichón', 'jamon cocido', 'jamon serrano', 'lomo', 'lomo embuchado'],
        'sulfitos': ['sulfito', 'sulfitos'],
        'levadura': ['levadura', 'fermentado', 'fermentados']
    };
    
    // Dividir restricciones en palabras clave
    const palabrasRestricciones = restriccionesLower.split(/[,.\s]+/).filter(p => p.trim() !== '');
    
    // Verificar cada restricción
    for (let restriccion of palabrasRestricciones) {
        const restriccionLimpia = restriccion.trim();
        
        // Buscar en el mapeo (probar tanto la restricción directa como con guiones reemplazados)
        const restriccionConGuion = restriccionLimpia.replace(/\s/g, '-');
        const restriccionSinGuion = restriccionLimpia.replace(/-/g, ' ');
        
        // Verificar en el mapeo con variaciones
        let palabrasClave = null;
        if (mapeoIntolerancias[restriccionLimpia]) {
            palabrasClave = mapeoIntolerancias[restriccionLimpia];
        } else if (mapeoIntolerancias[restriccionConGuion]) {
            palabrasClave = mapeoIntolerancias[restriccionConGuion];
        } else if (mapeoIntolerancias[restriccionSinGuion]) {
            palabrasClave = mapeoIntolerancias[restriccionSinGuion];
        }
        
        if (palabrasClave) {
            // Si la restricción está en el mapeo, verificar todas sus palabras clave
            for (let palabraClave of palabrasClave) {
                if (alimentoLower.includes(palabraClave)) {
                    console.log(`🚫 Alimento "${alimento}" rechazado por restricción "${restriccionLimpia}" (palabra clave: "${palabraClave}")`);
                    return false;
                }
            }
        } else {
            // Si no está en el mapeo, verificar si el nombre del alimento contiene la palabra
            if (alimentoLower.includes(restriccionLimpia)) {
                console.log(`🚫 Alimento "${alimento}" rechazado por restricción "${restriccionLimpia}"`);
                return false;
            }
        }
    }
    
    return true;
}

// Función para calcular cantidad óptima de un alimento según distribución objetivo
function calcularCantidadOptima(alimento, distribucion, tipoAlimento, porcentajeObjetivo = 0.3) {
    const info = obtenerInfoNutricionalSeguro(alimento, 100);
    if (!info) return 100;
    
    // Calcular cuántos gramos necesitamos para alcanzar el porcentaje objetivo de la distribución
    // porcentajeObjetivo: qué parte del macro objetivo queremos cubrir con este alimento (ej: 0.3 = 30%)
    
    switch(tipoAlimento) {
        case 'proteina':
            if (info.proteinas > 0) {
                const cantidad = Math.round((distribucion.proteinas * porcentajeObjetivo / info.proteinas) * 100);
                return Math.max(50, Math.min(cantidad, 300)); // Límites razonables
            }
            break;
        case 'carbohidrato':
            if (info.carbohidratos > 0) {
                const cantidad = Math.round((distribucion.carbohidratos * porcentajeObjetivo / info.carbohidratos) * 100);
                return Math.max(50, Math.min(cantidad, 300)); // Límites razonables
            }
            break;
        case 'grasa':
            if (info.grasas > 0) {
                const cantidad = Math.round((distribucion.grasas * porcentajeObjetivo / info.grasas) * 100);
                return Math.max(10, Math.min(cantidad, 100)); // Límites razonables para grasas
            }
            break;
        case 'calorias':
            if (info.calorias > 0) {
                const cantidad = Math.round((distribucion.calorias * porcentajeObjetivo / info.calorias) * 100);
                return Math.max(50, Math.min(cantidad, 300));
            }
            break;
    }
    
    return 100;
}

// Función para calcular cantidad basada en distribución objetivo considerando múltiples macros
function calcularCantidadPorDistribucion(nombreAlimento, distribucion, prioridad = 'carbohidratos') {
    const info = obtenerInfoNutricionalSeguro(nombreAlimento, 100);
    if (!info) return 100;
    
    // Calcular ratios de macronutrientes
    const ratioCarbos = info.carbohidratos / info.calorias || 0;
    const ratioGrasas = info.grasas / info.calorias || 0;
    const ratioProteinas = info.proteinas / info.calorias || 0;
    
    let cantidad = 100;
    
    // Calcular cantidad según la prioridad - MEJORADO para mejor balance
    if (prioridad === 'carbohidratos' && ratioCarbos > 0.2) {
        // Priorizar carbohidratos - calcular para cubrir más del objetivo
        const porcentajeObjetivo = ratioCarbos > 0.6 ? 0.6 : 0.5; // Aumentado de 0.4/0.3 a 0.6/0.5
        cantidad = Math.round((distribucion.carbohidratos * porcentajeObjetivo / info.carbohidratos) * 100);
    } else if (prioridad === 'proteinas' && ratioProteinas > 0.2) {
        // Priorizar proteínas - aumentar porcentaje
        const porcentajeObjetivo = ratioProteinas > 0.5 ? 0.5 : 0.4; // Aumentado de 0.35/0.25 a 0.5/0.4
        cantidad = Math.round((distribucion.proteinas * porcentajeObjetivo / info.proteinas) * 100);
    } else if (prioridad === 'grasas' && ratioGrasas > 0.3) {
        // Priorizar grasas (pero con moderación) - ajustado
        const porcentajeObjetivo = 0.25; // Aumentado de 0.15 a 0.25
        cantidad = Math.round((distribucion.grasas * porcentajeObjetivo / info.grasas) * 100);
    } else {
        // Calcular basado en calorías - aumentado
        const porcentajeObjetivo = 0.35; // Aumentado de 0.25 a 0.35
        cantidad = Math.round((distribucion.calorias * porcentajeObjetivo / info.calorias) * 100);
    }
    
    // Aplicar límites razonables
    if (ratioGrasas > 0.7) {
        // Alimentos muy altos en grasas (aceites) - límites más estrictos
        cantidad = Math.max(10, Math.min(cantidad, 50));
    } else if (ratioCarbos > 0.6 || ratioProteinas > 0.5) {
        // Alimentos altos en carbos o proteínas - límites más amplios
        cantidad = Math.max(50, Math.min(cantidad, 300));
    } else {
        // Alimentos balanceados
        cantidad = Math.max(30, Math.min(cantidad, 250));
    }
    
    return cantidad;
}

// Función para balancear macros de una comida
function balancearMacrosComida(alimentos, distribucionObjetivo, objetivo) {
    const totalMacros = {
        calorias: 0,
        proteinas: 0,
        carbohidratos: 0,
        grasas: 0
    };
    
    // Calcular macros actuales con información nutricional por alimento
    const alimentosConInfo = alimentos.map(alimento => {
        const info = obtenerInfoNutricionalSeguro(alimento.nombre, alimento.cantidad);
        if (info) {
            totalMacros.calorias += info.calorias;
            totalMacros.proteinas += info.proteinas;
            totalMacros.carbohidratos += info.carbohidratos;
            totalMacros.grasas += info.grasas;
        }
        return { ...alimento, info };
    });
    
    // Tolerancia para ajustes (10% de diferencia - más estricto)
    const tolerancia = 0.10;
    
    // Calcular diferencias porcentuales
    const diffCal = Math.abs(totalMacros.calorias - distribucionObjetivo.calorias) / distribucionObjetivo.calorias;
    const diffProt = Math.abs(totalMacros.proteinas - distribucionObjetivo.proteinas) / distribucionObjetivo.proteinas;
    const diffCarb = Math.abs(totalMacros.carbohidratos - distribucionObjetivo.carbohidratos) / distribucionObjetivo.carbohidratos;
    const diffGras = Math.abs(totalMacros.grasas - distribucionObjetivo.grasas) / distribucionObjetivo.grasas;
    
    // Si estamos dentro de la tolerancia, devolver tal cual
    if (diffCal <= tolerancia && diffProt <= tolerancia && diffCarb <= tolerancia && diffGras <= tolerancia) {
        return alimentos;
    }
    
    // Calcular necesidades de ajuste con umbrales más estrictos (3% en lugar de 5%)
    const necesitaMenosGrasas = totalMacros.grasas > distribucionObjetivo.grasas * 1.03;
    const necesitaMasGrasas = totalMacros.grasas < distribucionObjetivo.grasas * 0.97;
    const necesitaMasCarbos = totalMacros.carbohidratos < distribucionObjetivo.carbohidratos * 0.97;
    const necesitaMenosCarbos = totalMacros.carbohidratos > distribucionObjetivo.carbohidratos * 1.03;
    const necesitaMasProteinas = totalMacros.proteinas < distribucionObjetivo.proteinas * 0.97;
    const necesitaMenosProteinas = totalMacros.proteinas > distribucionObjetivo.proteinas * 1.03;
    const necesitaMenosCalorias = totalMacros.calorias > distribucionObjetivo.calorias * 1.03;
    const necesitaMasCalorias = totalMacros.calorias < distribucionObjetivo.calorias * 0.97;
    
    // Calcular factores de ajuste basados en la diferencia real
    const factorGrasas = necesitaMenosGrasas ? distribucionObjetivo.grasas / totalMacros.grasas : 
                         necesitaMasGrasas ? distribucionObjetivo.grasas / totalMacros.grasas : 1.0;
    const factorCarbos = necesitaMasCarbos ? distribucionObjetivo.carbohidratos / totalMacros.carbohidratos : 
                         necesitaMenosCarbos ? distribucionObjetivo.carbohidratos / totalMacros.carbohidratos : 1.0;
    const factorProteinas = necesitaMasProteinas ? distribucionObjetivo.proteinas / totalMacros.proteinas :
                            necesitaMenosProteinas ? distribucionObjetivo.proteinas / totalMacros.proteinas : 1.0;
    const factorCalorias = necesitaMenosCalorias ? distribucionObjetivo.calorias / totalMacros.calorias : 
                            necesitaMasCalorias ? distribucionObjetivo.calorias / totalMacros.calorias : 1.0;
    
    // Ajustar alimentos de forma selectiva y más agresiva
    const alimentosAjustados = alimentosConInfo.map(alimento => {
        if (!alimento.info) return alimento;
        
        let cantidad = alimento.cantidad;
        const info = alimento.info;
        
        // Calcular ratio de grasas y carbohidratos por caloría
        const ratioGrasas = info.grasas / info.calorias || 0;
        const ratioCarbos = info.carbohidratos / info.calorias || 0;
        const ratioProteinas = info.proteinas / info.calorias || 0;
        
        // Calcular cuánto aporta este alimento a cada macro
        const aporteGrasas = info.grasas;
        const aporteCarbos = info.carbohidratos;
        const aporteCalorias = info.calorias;
        
        // Aplicar múltiples ajustes si es necesario
        let factorFinal = 1.0;
        
        // 1. Reducir alimentos altos en grasas si las grasas están por encima
        if (necesitaMenosGrasas && ratioGrasas > 0.3) {
            // Reducir más agresivamente según el ratio de grasas
            if (ratioGrasas > 0.7) {
                // Alimentos muy altos en grasas (aceites, mantequillas)
                factorFinal *= Math.max(0.5, factorGrasas * 0.8);
            } else if (ratioGrasas > 0.5) {
                // Alimentos altos en grasas (frutos secos, aguacate)
                factorFinal *= Math.max(0.6, factorGrasas * 0.85);
            } else {
                // Alimentos moderados en grasas
                factorFinal *= Math.max(0.7, factorGrasas * 0.9);
            }
        }
        
        // 2. Aumentar alimentos altos en carbohidratos si los carbos están por debajo
        if (necesitaMasCarbos && ratioCarbos > 0.2) {
            // Aumentar más agresivamente según el ratio de carbohidratos
            if (ratioCarbos > 0.6) {
                // Alimentos muy altos en carbohidratos (arroz, pasta, patatas)
                factorFinal *= Math.min(2.0, factorCarbos * 1.5); // Aumentado de 1.5 a 2.0
            } else if (ratioCarbos > 0.4) {
                // Alimentos altos en carbohidratos (frutas, avena)
                factorFinal *= Math.min(1.8, factorCarbos * 1.4); // Aumentado de 1.4 a 1.8
            } else {
                // Alimentos moderados en carbohidratos
                factorFinal *= Math.min(1.6, factorCarbos * 1.3); // Aumentado de 1.3 a 1.6
            }
        }
        
        // 2b. Aumentar proteínas si están por debajo
        if (necesitaMasProteinas && ratioProteinas > 0.2) {
            if (ratioProteinas > 0.5) {
                factorFinal *= Math.min(1.8, (distribucionObjetivo.proteinas / totalMacros.proteinas) * 1.4);
            } else {
                factorFinal *= Math.min(1.6, (distribucionObjetivo.proteinas / totalMacros.proteinas) * 1.3);
            }
        }
        
        // 2c. Reducir carbohidratos si están por encima
        if (necesitaMenosCarbos && ratioCarbos > 0.2) {
            factorFinal *= Math.max(0.7, (distribucionObjetivo.carbohidratos / totalMacros.carbohidratos) * 0.9);
        }
        
        // 2d. Aumentar grasas si están por debajo (con moderación)
        if (necesitaMasGrasas && ratioGrasas > 0.2 && ratioGrasas < 0.7) {
            factorFinal *= Math.min(1.3, (distribucionObjetivo.grasas / totalMacros.grasas) * 1.2);
        }
        
        // 3. Ajuste general por calorías si es necesario (después de ajustes de grasas/carbos)
        if (Math.abs(factorFinal - 1.0) < 0.05) {
            // Si no se hizo ajuste específico, ajustar por calorías
            if (necesitaMenosCalorias) {
                factorFinal *= Math.max(0.85, factorCalorias * 0.9);
            } else if (necesitaMasCalorias) {
                // Preferir aumentar alimentos con carbohidratos si faltan
                if (necesitaMasCarbos && ratioCarbos > 0.3) {
                    factorFinal *= Math.min(1.3, factorCalorias * 1.2);
                } else {
                    factorFinal *= Math.min(1.2, factorCalorias * 1.1);
                }
            }
        }
        
        // Aplicar factor final
        cantidad = Math.round(cantidad * factorFinal);
        
        // Asegurar un mínimo de 10g para que el alimento tenga sentido
        if (cantidad < 10 && alimento.cantidad > 0) {
            cantidad = 10;
        }
        
        return { ...alimento, cantidad };
    });
    
    // Calcular nuevos macros después del ajuste selectivo
    let nuevosMacros = {
        calorias: 0,
        proteinas: 0,
        carbohidratos: 0,
        grasas: 0
    };
    
    alimentosAjustados.forEach(alimento => {
        const info = obtenerInfoNutricionalSeguro(alimento.nombre, alimento.cantidad);
        if (info) {
            nuevosMacros.calorias += info.calorias;
            nuevosMacros.proteinas += info.proteinas;
            nuevosMacros.carbohidratos += info.carbohidratos;
            nuevosMacros.grasas += info.grasas;
        }
    });
    
    // Ajuste final proporcional si aún hay diferencias significativas - con iteraciones
    let alimentosFinales = alimentosAjustados;
    let iteraciones = 0;
    const maxIteraciones = 3;
    
    while (iteraciones < maxIteraciones) {
        const macrosActuales = {
            calorias: 0,
            proteinas: 0,
            carbohidratos: 0,
            grasas: 0
        };
        
        alimentosFinales.forEach(alimento => {
            const info = obtenerInfoNutricionalSeguro(alimento.nombre, alimento.cantidad);
            if (info) {
                macrosActuales.calorias += info.calorias;
                macrosActuales.proteinas += info.proteinas;
                macrosActuales.carbohidratos += info.carbohidratos;
                macrosActuales.grasas += info.grasas;
            }
        });
        
        const diffCalFinal = Math.abs(macrosActuales.calorias - distribucionObjetivo.calorias) / distribucionObjetivo.calorias;
        const diffCarbFinal = Math.abs(macrosActuales.carbohidratos - distribucionObjetivo.carbohidratos) / distribucionObjetivo.carbohidratos;
        const diffGrasFinal = Math.abs(macrosActuales.grasas - distribucionObjetivo.grasas) / distribucionObjetivo.grasas;
        const diffProtFinal = Math.abs(macrosActuales.proteinas - distribucionObjetivo.proteinas) / distribucionObjetivo.proteinas;
        
        // Si estamos dentro de la tolerancia, terminar
        if (diffCalFinal <= tolerancia && diffProtFinal <= tolerancia && diffCarbFinal <= tolerancia && diffGrasFinal <= tolerancia) {
            break;
        }
        
        // Calcular factores de ajuste más precisos
        const factorCalFinal = macrosActuales.calorias > distribucionObjetivo.calorias * 1.05 ? 
            distribucionObjetivo.calorias / macrosActuales.calorias : 
            macrosActuales.calorias < distribucionObjetivo.calorias * 0.95 ? 
            distribucionObjetivo.calorias / macrosActuales.calorias : 1.0;
        
        const factorGrasFinal = macrosActuales.grasas > distribucionObjetivo.grasas * 1.1 ? 
            distribucionObjetivo.grasas / macrosActuales.grasas : 
            macrosActuales.grasas < distribucionObjetivo.grasas * 0.9 ?
            distribucionObjetivo.grasas / macrosActuales.grasas : 1.0;
        
        const factorCarbFinal = macrosActuales.carbohidratos < distribucionObjetivo.carbohidratos * 0.9 ? 
            distribucionObjetivo.carbohidratos / macrosActuales.carbohidratos :
            macrosActuales.carbohidratos > distribucionObjetivo.carbohidratos * 1.1 ?
            distribucionObjetivo.carbohidratos / macrosActuales.carbohidratos : 1.0;
        
        const factorProtFinal = macrosActuales.proteinas < distribucionObjetivo.proteinas * 0.9 ?
            distribucionObjetivo.proteinas / macrosActuales.proteinas :
            macrosActuales.proteinas > distribucionObjetivo.proteinas * 1.1 ?
            distribucionObjetivo.proteinas / macrosActuales.proteinas : 1.0;
        
        // Aplicar ajuste selectivo más preciso
        alimentosFinales = alimentosFinales.map(alimento => {
            const info = obtenerInfoNutricionalSeguro(alimento.nombre, alimento.cantidad);
            if (!info) return alimento;
            
            const ratioGrasas = info.grasas / info.calorias || 0;
            const ratioCarbos = info.carbohidratos / info.calorias || 0;
            const ratioProteinas = info.proteinas / info.calorias || 0;
            
            let factorAjuste = 1.0;
            
            // Priorizar reducir grasas si están altas
            if (factorGrasFinal < 1.0 && ratioGrasas > 0.3) {
                factorAjuste = Math.max(0.5, factorGrasFinal * (ratioGrasas > 0.7 ? 0.7 : 0.85));
            }
            // Priorizar aumentar carbohidratos si están bajos
            else if (factorCarbFinal > 1.0 && ratioCarbos > 0.2) {
                factorAjuste = Math.min(2.0, factorCarbFinal * (ratioCarbos > 0.6 ? 1.4 : 1.2));
            }
            // Priorizar aumentar proteínas si están bajas
            else if (factorProtFinal > 1.0 && ratioProteinas > 0.2) {
                factorAjuste = Math.min(1.8, factorProtFinal * (ratioProteinas > 0.5 ? 1.3 : 1.2));
            }
            // Ajuste general por calorías
            else if (Math.abs(factorCalFinal - 1.0) > 0.05) {
                // Proteger alimentos altos en proteínas
                const factorProtegido = ratioProteinas > 0.5 ? Math.max(factorCalFinal, 0.75) : factorCalFinal;
                factorAjuste = factorProtegido;
            }
            
            let cantidad = Math.round(alimento.cantidad * factorAjuste);
            if (cantidad < 10 && alimento.cantidad > 0) {
                cantidad = 10;
            }
            
            return { ...alimento, cantidad };
        });
        
        iteraciones++;
    }
    
    // Verificar si aún faltan macros importantes y añadir alimentos si es necesario
    const datosUsuario = window.datosUsuario || {};
    const macrosFinales = {
        calorias: 0,
        proteinas: 0,
        carbohidratos: 0,
        grasas: 0
    };
    
    alimentosFinales.forEach(alimento => {
        const info = obtenerInfoNutricionalSeguro(alimento.nombre, alimento.cantidad);
        if (info) {
            macrosFinales.calorias += info.calorias;
            macrosFinales.proteinas += info.proteinas;
            macrosFinales.carbohidratos += info.carbohidratos;
            macrosFinales.grasas += info.grasas;
        }
    });
    
    // Si faltan carbohidratos significativamente (>15%), añadir un alimento rico en carbos
    if (macrosFinales.carbohidratos < distribucionObjetivo.carbohidratos * 0.85) {
        const deficitCarbos = distribucionObjetivo.carbohidratos - macrosFinales.carbohidratos;
        const alimentosCarbos = obtenerAlimentosDeBD(['Cereal', 'Tubérculo', 'Legumbres'], 'Hidratos de carbono', 10);
        const preferencias = datosUsuario.preferencias || [];
        const prohibiciones = datosUsuario.prohibiciones || '';
        const alimentosFiltrados = filtrarAlimentosPorPreferencias(alimentosCarbos, preferencias, prohibiciones);
        
        if (alimentosFiltrados.length > 0) {
            const alimentoCarb = alimentosFiltrados[0];
            const infoCarb = obtenerInfoNutricionalSeguro(alimentoCarb, 100);
            if (infoCarb && infoCarb.carbohidratos > 0) {
                const cantidadNecesaria = Math.round((deficitCarbos / infoCarb.carbohidratos) * 100);
                const cantidadFinal = Math.max(30, Math.min(cantidadNecesaria, 200));
                alimentosFinales.push({ nombre: alimentoCarb, cantidad: cantidadFinal });
            }
        }
    }
    
    // Si faltan proteínas significativamente (>15%), añadir un alimento rico en proteínas
    if (macrosFinales.proteinas < distribucionObjetivo.proteinas * 0.85) {
        const deficitProt = distribucionObjetivo.proteinas - macrosFinales.proteinas;
        let alimentosProt = [];
        const preferencias = datosUsuario.preferencias || [];
        if (preferencias.includes('vegano')) {
            alimentosProt = obtenerAlimentosDeBD(['Legumbres', 'Semilla'], 'Proteínas', 10);
        } else {
            alimentosProt = obtenerAlimentosDeBD(['Origen animal', 'Carne blanca'], 'Proteínas', 10);
        }
        const prohibiciones = datosUsuario.prohibiciones || '';
        const alimentosProtFiltrados = filtrarAlimentosPorPreferencias(alimentosProt, preferencias, prohibiciones);
        
        if (alimentosProtFiltrados.length > 0) {
            const alimentoProt = alimentosProtFiltrados[0];
            const infoProt = obtenerInfoNutricionalSeguro(alimentoProt, 100);
            if (infoProt && infoProt.proteinas > 0) {
                const cantidadNecesaria = Math.round((deficitProt / infoProt.proteinas) * 100);
                const cantidadFinal = Math.max(30, Math.min(cantidadNecesaria, 300));
                alimentosFinales.push({ nombre: alimentoProt, cantidad: cantidadFinal });
            }
        }
    }
    
    return alimentosFinales.map(({ info, ...rest }) => rest);
}

// Función para obtener alimentos según macronutriente
function obtenerAlimentosPorMacro(macroTipo, objetivo) {
    const baseDatos = window.baseDatosAlimentos;
    if (!baseDatos) return [];
    
    let alimentos = [];
    
    switch(macroTipo) {
        case 'proteina':
            alimentos = [
                ...Object.keys(baseDatos.proteinas || {}),
                ...Object.keys(baseDatos.proteinasVegetales || {})
            ];
            break;
        case 'carbohidrato':
            alimentos = [
                ...Object.keys(baseDatos.carbohidratos || {}),
                ...Object.keys(baseDatos.tuberculos || {})
            ];
            break;
        case 'grasa':
            alimentos = Object.keys(baseDatos.grasas || {});
            break;
        case 'verdura':
            alimentos = Object.keys(baseDatos.verduras || {});
            break;
        case 'fruta':
            alimentos = Object.keys(baseDatos.frutas || {});
            break;
    }
    
    // Filtrar según objetivo
    if (objetivo === 'adelgazar') {
        if (macroTipo === 'carbohidrato') {
            alimentos = alimentos.filter(a => 
                !a.toLowerCase().includes('pasta') && 
                !a.toLowerCase().includes('pan blanco')
            );
        }
    }
    
    return alimentos;
}

// Exportar funciones
window.generarPlanVariado = generarPlanVariado;
window.generarSemanaVariada = generarSemanaVariada;
window.seleccionarAlimentoDiverso = seleccionarAlimentoDiverso;
window.verificarRestricciones = verificarRestricciones;
window.calcularCantidadOptima = calcularCantidadOptima;
window.balancearMacrosComida = balancearMacrosComida;
window.obtenerAlimentosPorMacro = obtenerAlimentosPorMacro;
window.formatearAlimento = formatearAlimento;

