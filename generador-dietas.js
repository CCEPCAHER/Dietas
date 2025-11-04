// Generador de planes de dieta usando la base de datos ampliada
// Este archivo genera planes variados usando la base de datos de alimentos

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
    
    // Calcular macros totales
    alimentos.forEach(alimento => {
        const info = obtenerInfoNutricional(alimento.nombre, alimento.cantidad);
        if (info) {
            calorias += info.calorias;
            proteinas += info.proteinas;
            carbohidratos += info.carbohidratos;
            grasas += info.grasas;
        }
    });
    
    return {
        alimentos: alimentos.map(a => formatearAlimento(a)),
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
    
    if (objetivo === 'aumentar') {
        let opciones = [
            [{ nombre: 'Barrita proteica', cantidad: 1 }, { nombre: 'Plátano', cantidad: 100 }],
            [{ nombre: 'Yogur griego', cantidad: 200 }, { nombre: 'Nueces', cantidad: 30 }],
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Mantequilla de almendras', cantidad: 30 }],
            [{ nombre: 'Requesón', cantidad: 150 }, { nombre: 'Fresas', cantidad: 100 }],
            [{ nombre: 'Barrita proteica', cantidad: 1 }, { nombre: 'Naranja', cantidad: 150 }]
        ];
        
        // Filtrar opciones según preferencias y restricciones
        opciones = opciones.filter(opcion => 
            opcion.every(alimento => esCompatibleConPreferencias(alimento.nombre, preferencias, restricciones))
        );
        
        // Si no hay opciones compatibles, agregar opciones veganas
        if (opciones.length === 0 && preferencias.includes('vegano')) {
            opciones = [
                [{ nombre: 'Plátano', cantidad: 100 }, { nombre: 'Almendras', cantidad: 30 }],
                [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Mantequilla de almendras', cantidad: 30 }],
                [{ nombre: 'Naranja', cantidad: 150 }, { nombre: 'Nueces', cantidad: 20 }]
            ];
        }
        
        return opciones.length > 0 ? opciones[variacion % opciones.length] : [{ nombre: 'Manzana', cantidad: 150 }];
    } else {
        let opciones = [
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Almendras', cantidad: 15 }],
            [{ nombre: 'Yogur desnatado', cantidad: 150 }, { nombre: 'Kiwi', cantidad: 100 }],
            [{ nombre: 'Pera', cantidad: 150 }, { nombre: 'Té verde', cantidad: 250 }],
            [{ nombre: 'Naranja', cantidad: 150 }],
            [{ nombre: 'Zanahorias baby', cantidad: 100 }, { nombre: 'Hummus', cantidad: 30 }]
        ];
        
        // Filtrar opciones según preferencias y restricciones
        opciones = opciones.filter(opcion => 
            opcion.every(alimento => esCompatibleConPreferencias(alimento.nombre, preferencias, restricciones))
        );
        
        return opciones.length > 0 ? opciones[variacion % opciones.length] : [{ nombre: 'Manzana', cantidad: 150 }];
    }
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
    
    if (objetivo === 'aumentar') {
        let opciones = [
            [{ nombre: 'Barrita proteica', cantidad: 1 }, { nombre: 'Plátano', cantidad: 120 }, { nombre: 'Mantequilla de cacahuete', cantidad: 30 }, { nombre: 'Avena', cantidad: 40 }],
            [{ nombre: 'Yogur griego', cantidad: 200 }, { nombre: 'Avena', cantidad: 50 }, { nombre: 'Fresas', cantidad: 100 }, { nombre: 'Nueces', cantidad: 30 }],
            [{ nombre: 'Barrita proteica', cantidad: 1 }, { nombre: 'Plátano', cantidad: 100 }, { nombre: 'Almendras', cantidad: 25 }],
            [{ nombre: 'Pan integral', cantidad: 100 }, { nombre: 'Pavo', cantidad: 80 }, { nombre: 'Aguacate', cantidad: 40 }],
            [{ nombre: 'Requesón', cantidad: 200 }, { nombre: 'Avena', cantidad: 50 }, { nombre: 'Miel', cantidad: 20 }]
        ];
        
        // Filtrar opciones según preferencias y restricciones
        opciones = opciones.filter(opcion => 
            opcion.every(alimento => esCompatibleConPreferencias(alimento.nombre, preferencias, restricciones))
        );
        
        // Si no hay opciones compatibles, agregar opciones veganas
        if (opciones.length === 0 && preferencias.includes('vegano')) {
            opciones = [
                [{ nombre: 'Plátano', cantidad: 120 }, { nombre: 'Mantequilla de almendras', cantidad: 30 }, { nombre: 'Avena', cantidad: 40 }],
                [{ nombre: 'Avena', cantidad: 50 }, { nombre: 'Fresas', cantidad: 100 }, { nombre: 'Nueces', cantidad: 30 }],
                [{ nombre: 'Plátano', cantidad: 100 }, { nombre: 'Almendras', cantidad: 25 }]
            ];
        }
        
        return opciones.length > 0 ? opciones[variacion % opciones.length] : [{ nombre: 'Plátano', cantidad: 120 }];
    } else if (objetivo === 'adelgazar') {
        let opciones = [
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Almendras', cantidad: 15 }],
            [{ nombre: 'Yogur desnatado', cantidad: 150 }, { nombre: 'Kiwi', cantidad: 100 }],
            [{ nombre: 'Requesón bajo en grasa', cantidad: 100 }, { nombre: 'Fresas', cantidad: 100 }],
            [{ nombre: 'Batido de proteína', cantidad: 25 }, { nombre: 'Plátano pequeño', cantidad: 80 }],
            [{ nombre: 'Zanahorias baby', cantidad: 100 }, { nombre: 'Hummus', cantidad: 30 }]
        ];
        
        opciones = opciones.filter(opcion => 
            opcion.every(alimento => esCompatibleConPreferencias(alimento.nombre, preferencias))
        );
        
        return opciones.length > 0 ? opciones[variacion % opciones.length] : [{ nombre: 'Manzana', cantidad: 150 }];
    } else {
        let opciones = [
            [{ nombre: 'Yogur griego', cantidad: 150 }, { nombre: 'Plátano', cantidad: 100 }, { nombre: 'Nueces', cantidad: 15 }],
            [{ nombre: 'Yogur desnatado', cantidad: 180 }, { nombre: 'Almendras', cantidad: 10 }, { nombre: 'Fresas', cantidad: 100 }],
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Queso fresco', cantidad: 50 }, { nombre: 'Nueces', cantidad: 15 }],
            [{ nombre: 'Requesón', cantidad: 100 }, { nombre: 'Pavo', cantidad: 60 }, { nombre: 'Naranja', cantidad: 150 }],
            [{ nombre: 'Yogur griego', cantidad: 150 }, { nombre: 'Avena', cantidad: 20 }, { nombre: 'Almendras', cantidad: 15 }, { nombre: 'Miel', cantidad: 15 }]
        ];
        
        opciones = opciones.filter(opcion => 
            opcion.every(alimento => esCompatibleConPreferencias(alimento.nombre, preferencias))
        );
        
        return opciones.length > 0 ? opciones[variacion % opciones.length] : [{ nombre: 'Manzana', cantidad: 150 }];
    }
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
    const info = obtenerInfoNutricional(alimento, 100);
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
    const info = obtenerInfoNutricional(nombreAlimento, 100);
    if (!info) return 100;
    
    // Calcular ratios de macronutrientes
    const ratioCarbos = info.carbohidratos / info.calorias || 0;
    const ratioGrasas = info.grasas / info.calorias || 0;
    const ratioProteinas = info.proteinas / info.calorias || 0;
    
    let cantidad = 100;
    
    // Calcular cantidad según la prioridad
    if (prioridad === 'carbohidratos' && ratioCarbos > 0.2) {
        // Priorizar carbohidratos - calcular para cubrir parte del objetivo
        const porcentajeObjetivo = ratioCarbos > 0.6 ? 0.4 : 0.3; // Más cantidad si es alto en carbos
        cantidad = Math.round((distribucion.carbohidratos * porcentajeObjetivo / info.carbohidratos) * 100);
    } else if (prioridad === 'proteinas' && ratioProteinas > 0.2) {
        // Priorizar proteínas
        const porcentajeObjetivo = ratioProteinas > 0.5 ? 0.35 : 0.25;
        cantidad = Math.round((distribucion.proteinas * porcentajeObjetivo / info.proteinas) * 100);
    } else if (prioridad === 'grasas' && ratioGrasas > 0.3) {
        // Priorizar grasas (pero con moderación)
        const porcentajeObjetivo = 0.15; // Menos cantidad para grasas
        cantidad = Math.round((distribucion.grasas * porcentajeObjetivo / info.grasas) * 100);
    } else {
        // Calcular basado en calorías
        const porcentajeObjetivo = 0.25;
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
        const info = obtenerInfoNutricional(alimento.nombre, alimento.cantidad);
        if (info) {
            totalMacros.calorias += info.calorias;
            totalMacros.proteinas += info.proteinas;
            totalMacros.carbohidratos += info.carbohidratos;
            totalMacros.grasas += info.grasas;
        }
        return { ...alimento, info };
    });
    
    // Tolerancia para ajustes (15% de diferencia)
    const tolerancia = 0.15;
    
    // Calcular diferencias porcentuales
    const diffCal = Math.abs(totalMacros.calorias - distribucionObjetivo.calorias) / distribucionObjetivo.calorias;
    const diffProt = Math.abs(totalMacros.proteinas - distribucionObjetivo.proteinas) / distribucionObjetivo.proteinas;
    const diffCarb = Math.abs(totalMacros.carbohidratos - distribucionObjetivo.carbohidratos) / distribucionObjetivo.carbohidratos;
    const diffGras = Math.abs(totalMacros.grasas - distribucionObjetivo.grasas) / distribucionObjetivo.grasas;
    
    // Si estamos dentro de la tolerancia, devolver tal cual
    if (diffCal <= tolerancia && diffProt <= tolerancia && diffCarb <= tolerancia && diffGras <= tolerancia) {
        return alimentos;
    }
    
    // Calcular necesidades de ajuste con umbrales más estrictos
    const necesitaMenosGrasas = totalMacros.grasas > distribucionObjetivo.grasas * 1.05;
    const necesitaMasCarbos = totalMacros.carbohidratos < distribucionObjetivo.carbohidratos * 0.95;
    const necesitaMenosCalorias = totalMacros.calorias > distribucionObjetivo.calorias * 1.03;
    const necesitaMasCalorias = totalMacros.calorias < distribucionObjetivo.calorias * 0.97;
    
    // Calcular factores de ajuste basados en la diferencia real
    const factorGrasas = necesitaMenosGrasas ? distribucionObjetivo.grasas / totalMacros.grasas : 1.0;
    const factorCarbos = necesitaMasCarbos ? distribucionObjetivo.carbohidratos / totalMacros.carbohidratos : 1.0;
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
                factorFinal *= Math.min(1.5, factorCarbos * 1.2);
            } else if (ratioCarbos > 0.4) {
                // Alimentos altos en carbohidratos (frutas, avena)
                factorFinal *= Math.min(1.4, factorCarbos * 1.15);
            } else {
                // Alimentos moderados en carbohidratos
                factorFinal *= Math.min(1.3, factorCarbos * 1.1);
            }
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
        const info = obtenerInfoNutricional(alimento.nombre, alimento.cantidad);
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
            const info = obtenerInfoNutricional(alimento.nombre, alimento.cantidad);
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
            distribucionObjetivo.grasas / macrosActuales.grasas : 1.0;
        
        const factorCarbFinal = macrosActuales.carbohidratos < distribucionObjetivo.carbohidratos * 0.9 ? 
            distribucionObjetivo.carbohidratos / macrosActuales.carbohidratos : 1.0;
        
        // Aplicar ajuste selectivo más preciso
        alimentosFinales = alimentosFinales.map(alimento => {
            const info = obtenerInfoNutricional(alimento.nombre, alimento.cantidad);
            if (!info) return alimento;
            
            const ratioGrasas = info.grasas / info.calorias || 0;
            const ratioCarbos = info.carbohidratos / info.calorias || 0;
            const ratioProteinas = info.proteinas / info.calorias || 0;
            
            let factorAjuste = 1.0;
            
            // Priorizar reducir grasas si están altas
            if (factorGrasFinal < 1.0 && ratioGrasas > 0.3) {
                factorAjuste = Math.max(0.6, factorGrasFinal * (ratioGrasas > 0.7 ? 0.8 : 0.9));
            }
            // Priorizar aumentar carbohidratos si están bajos
            else if (factorCarbFinal > 1.0 && ratioCarbos > 0.2) {
                factorAjuste = Math.min(1.5, factorCarbFinal * (ratioCarbos > 0.6 ? 1.2 : 1.1));
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

