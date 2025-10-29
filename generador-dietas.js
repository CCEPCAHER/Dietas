// Generador de planes de dieta usando la base de datos ampliada
// Este archivo genera planes variados usando la base de datos de alimentos

function generarPlanVariado(objetivo, duracion) {
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
    }
    
    return planCompleto;
}

function generarSemanaVariada(objetivo, semanaOffset = 0) {
    const diasSemana = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"];
    const semana = [];
    
    diasSemana.forEach((dia, index) => {
        const diaPlan = {
            dia: dia,
            comidas: {
                desayuno: generarComida(objetivo, 'desayuno', index + semanaOffset * 7),
                medioDia: generarComida(objetivo, 'medioDia', index + semanaOffset * 7),
                almuerzo: generarComida(objetivo, 'almuerzo', index + semanaOffset * 7),
                merienda: generarComida(objetivo, 'merienda', index + semanaOffset * 7),
                cena: generarComida(objetivo, 'cena', index + semanaOffset * 7)
            }
        };
        semana.push(diaPlan);
    });
    
    return semana;
}

function generarComida(objetivo, tipoComida, variacion) {
    let alimentos = [];
    let calorias = 0;
    let proteinas = 0;
    let carbohidratos = 0;
    let grasas = 0;
    
    // Obtener datos del usuario desde la variable global
    const datosUsuario = window.datosUsuario || {};
    const { calorias: calObj, proteinas: protObj, carbohidratos: carbObj, grasas: grasObj } = datosUsuario;
    
    // Distribución objetivo según tipo de comida
    const distribucion = obtenerDistribucionComida(objetivo, tipoComida, calObj, protObj, carbObj, grasObj);
    
    // Seleccionar alimentos según el tipo de comida
    switch(tipoComida) {
        case 'desayuno':
            alimentos = seleccionarDesayuno(objetivo, distribucion, variacion);
            break;
        case 'medioDia':
            alimentos = seleccionarMedioDia(objetivo, distribucion, variacion);
            break;
        case 'almuerzo':
            alimentos = seleccionarAlmuerzo(objetivo, distribucion, variacion);
            break;
        case 'merienda':
            alimentos = seleccionarMerienda(objetivo, distribucion, variacion);
            break;
        case 'cena':
            alimentos = seleccionarCena(objetivo, distribucion, variacion);
            break;
    }
    
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
        alimentos: alimentos.map(a => `${a.nombre}${a.cantidad !== 100 ? ` (${a.cantidad}g)` : ''}`),
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
    
    const dist = distribuciones[objetivo][tipoComida];
    
    return {
        calorias: Math.round(calTotales * dist.cal),
        proteinas: Math.round(protTotales * dist.prot),
        carbohidratos: Math.round(carbTotales * dist.carb),
        grasas: Math.round(grasTotales * dist.gras * 10) / 10
    };
}

function seleccionarDesayuno(objetivo, distribucion, variacion) {
    const alimentos = [];
    
    // Base de carbohidratos
    const carbBase = objetivo === 'aumentar' ? 
        ['Avena', 'Pan integral', 'Quinoa', 'Avena copos', 'Pan de centeno'] :
        ['Avena', 'Yogur griego', 'Tortillas de maíz', 'Avena copos'];
    
    const carbSeleccionado = carbBase[(variacion * 3) % carbBase.length];
    alimentos.push({ nombre: carbSeleccionado, cantidad: objetivo === 'aumentar' ? 80 : 50 });
    
    // Proteína
    const protBase = ['Huevos enteros', 'Claras de huevo', 'Yogur griego', 'Requesón', 'Queso cottage'];
    const protSeleccionado = protBase[(variacion * 5) % protBase.length];
    const cantidadProt = protSeleccionado === 'Huevos enteros' ? 
        (objetivo === 'aumentar' ? 4 : 2) : 
        (objetivo === 'aumentar' ? 200 : 150);
    alimentos.push({ nombre: protSeleccionado, cantidad: cantidadProt });
    
    // Fruta
    const frutas = ['Plátano', 'Fresas', 'Arándanos', 'Manzana', 'Kiwi', 'Mango'];
    const frutaSeleccionada = frutas[(variacion * 7) % frutas.length];
    alimentos.push({ nombre: frutaSeleccionada, cantidad: objetivo === 'aumentar' ? 150 : 100 });
    
    // Grasas saludables
    if (objetivo === 'aumentar') {
        const grasas = ['Almendras', 'Nueces', 'Aguacate', 'Mantequilla de almendras'];
        const grasaSeleccionada = grasas[(variacion * 11) % grasas.length];
        alimentos.push({ nombre: grasaSeleccionada, cantidad: grasaSeleccionada.includes('mantequilla') ? 30 : 30 });
    }
    
    // Complementos
    if (objetivo === 'aumentar') {
        const complementos = ['Miel', 'Leche entera', 'Cacao en polvo'];
        const complemento = complementos[(variacion * 13) % complementos.length];
        alimentos.push({ nombre: complemento, cantidad: complemento === 'Miel' ? 20 : 200 });
    }
    
    return alimentos;
}

function seleccionarMedioDia(objetivo, distribucion, variacion) {
    const alimentos = [];
    
    if (objetivo === 'aumentar') {
        const opciones = [
            [{ nombre: 'Batido de proteína', cantidad: 30 }, { nombre: 'Plátano', cantidad: 100 }],
            [{ nombre: 'Yogur griego', cantidad: 200 }, { nombre: 'Nueces', cantidad: 30 }],
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Mantequilla de almendras', cantidad: 30 }],
            [{ nombre: 'Batido proteico', cantidad: 1 }, { nombre: 'Fresas', cantidad: 100 }],
            [{ nombre: 'Barrita proteica', cantidad: 1 }, { nombre: 'Naranja', cantidad: 150 }]
        ];
        return opciones[variacion % opciones.length];
    } else {
        const opciones = [
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Almendras', cantidad: 15 }],
            [{ nombre: 'Yogur desnatado', cantidad: 150 }, { nombre: 'Kiwi', cantidad: 100 }],
            [{ nombre: 'Pera', cantidad: 150 }, { nombre: 'Té verde', cantidad: 250 }],
            [{ nombre: 'Naranja', cantidad: 150 }],
            [{ nombre: 'Zanahorias baby', cantidad: 100 }, { nombre: 'Hummus', cantidad: 30 }]
        ];
        return opciones[variacion % opciones.length];
    }
}

function seleccionarAlmuerzo(objetivo, distribucion, variacion) {
    const alimentos = [];
    
    // Proteína principal
    const proteinas = objetivo === 'aumentar' ?
        ['Pechuga de pollo', 'Ternera magra', 'Salmón', 'Atún fresco', 'Pavo', 'Huevos enteros'] :
        ['Pechuga de pollo', 'Atún fresco', 'Merluza', 'Pavo', 'Claras de huevo', 'Sepia'];
    
    const proteinaSeleccionada = proteinas[(variacion * 17) % proteinas.length];
    alimentos.push({ nombre: proteinaSeleccionada, cantidad: objetivo === 'aumentar' ? 200 : 150 });
    
    // Carbohidrato
    const carbohidratos = objetivo === 'aumentar' ?
        ['Arroz integral', 'Pasta integral', 'Quinoa', 'Batata', 'Patata', 'Cuscús'] :
        ['Arroz integral', 'Quinoa', 'Batata', 'Lentejas', 'Garbanzos', 'Judías verdes'];
    
    const carbSeleccionado = carbohidratos[(variacion * 19) % carbohidratos.length];
    alimentos.push({ nombre: carbSeleccionado, cantidad: objetivo === 'aumentar' ? 150 : 80 });
    
    // Verduras
    const verduras = ['Brócoli', 'Espinacas', 'Espárragos', 'Coliflor', 'Calabacín', 'Judías verdes', 'Pimientos', 'Berenjena'];
    const verduraSeleccionada = verduras[(variacion * 23) % verduras.length];
    alimentos.push({ nombre: verduraSeleccionada, cantidad: 150 });
    
    // Ensalada/verde
    const ensaladas = ['Lechuga', 'Rúcula', 'Espinacas', 'Canónigos'];
    const ensaladaSeleccionada = ensaladas[(variacion * 29) % ensaladas.length];
    alimentos.push({ nombre: ensaladaSeleccionada, cantidad: 100 });
    
    // Grasas (solo si es aumentar o mantener)
    if (objetivo !== 'adelgazar') {
        const grasas = ['Aguacate', 'Aceite de oliva', 'Nueces', 'Aceite de oliva'];
        const grasaSeleccionada = grasas[(variacion * 31) % grasas.length];
        alimentos.push({ nombre: grasaSeleccionada, cantidad: grasaSeleccionada === 'Aceite de oliva' ? 10 : (grasaSeleccionada === 'Aguacate' ? 50 : 20) });
    } else {
        alimentos.push({ nombre: 'Aceite de oliva', cantidad: 5 });
    }
    
    return alimentos;
}

function seleccionarMerienda(objetivo, distribucion, variacion) {
    const alimentos = [];
    
    if (objetivo === 'aumentar') {
        const opciones = [
            [{ nombre: 'Batido de proteína', cantidad: 30 }, { nombre: 'Plátano', cantidad: 120 }, { nombre: 'Mantequilla de cacahuete', cantidad: 30 }, { nombre: 'Avena', cantidad: 40 }],
            [{ nombre: 'Yogur griego', cantidad: 200 }, { nombre: 'Granola', cantidad: 50 }, { nombre: 'Fresas', cantidad: 100 }, { nombre: 'Nueces', cantidad: 30 }],
            [{ nombre: 'Barrita proteica', cantidad: 1 }, { nombre: 'Plátano', cantidad: 100 }, { nombre: 'Almendras', cantidad: 25 }],
            [{ nombre: 'Sándwich integral', cantidad: 2 }, { nombre: 'Pavo', cantidad: 80 }, { nombre: 'Aguacate', cantidad: 40 }],
            [{ nombre: 'Batido proteico', cantidad: 1 }, { nombre: 'Avena', cantidad: 50 }, { nombre: 'Miel', cantidad: 20 }]
        ];
        return opciones[variacion % opciones.length];
    } else if (objetivo === 'adelgazar') {
        const opciones = [
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Almendras', cantidad: 15 }],
            [{ nombre: 'Yogur desnatado', cantidad: 150 }, { nombre: 'Kiwi', cantidad: 100 }],
            [{ nombre: 'Requesón bajo en grasa', cantidad: 100 }, { nombre: 'Fresas', cantidad: 100 }],
            [{ nombre: 'Batido de proteína', cantidad: 25 }, { nombre: 'Plátano pequeño', cantidad: 80 }],
            [{ nombre: 'Zanahorias baby', cantidad: 100 }, { nombre: 'Hummus', cantidad: 30 }]
        ];
        return opciones[variacion % opciones.length];
    } else {
        const opciones = [
            [{ nombre: 'Yogur natural', cantidad: 150 }, { nombre: 'Fruta', cantidad: 100 }, { nombre: 'Nueces', cantidad: 15 }],
            [{ nombre: 'Batido', cantidad: 250 }, { nombre: 'Almendras', cantidad: 10 }],
            [{ nombre: 'Manzana', cantidad: 150 }, { nombre: 'Queso fresco', cantidad: 50 }, { nombre: 'Nueces', cantidad: 15 }],
            [{ nombre: 'Sándwich', cantidad: 1 }, { nombre: 'Pavo', cantidad: 60 }, { nombre: 'Fruta', cantidad: 100 }],
            [{ nombre: 'Yogur con frutas', cantidad: 150 }, { nombre: 'Avena', cantidad: 20 }, { nombre: 'Almendras', cantidad: 15 }]
        ];
        return opciones[variacion % opciones.length];
    }
}

function seleccionarCena(objetivo, distribucion, variacion) {
    const alimentos = [];
    
    // Proteína principal
    const proteinas = objetivo === 'aumentar' ?
        ['Salmón', 'Pollo al horno', 'Pavo', 'Ternera magra', 'Atún', 'Huevos'] :
        ['Merluza', 'Pollo a la plancha', 'Pavo', 'Sepia', 'Claras de huevo', 'Tofu'];
    
    const proteinaSeleccionada = proteinas[(variacion * 37) % proteinas.length];
    alimentos.push({ nombre: proteinaSeleccionada, cantidad: objetivo === 'aumentar' ? 180 : 140 });
    
    // Carbohidrato (menor en cena)
    const carbohidratos = objetivo === 'aumentar' ?
        ['Batata', 'Quinoa', 'Arroz integral', 'Patata', 'Cuscús'] :
        ['Verduras al vapor', 'Ensalada', 'Coliflor', 'Espárragos'];
    
    const carbSeleccionado = carbohidratos[(variacion * 41) % carbohidratos.length];
    alimentos.push({ nombre: carbSeleccionado, cantidad: objetivo === 'aumentar' ? 150 : (carbSeleccionado.includes('Ensalada') || carbSeleccionado.includes('verdura') ? 200 : 100) });
    
    // Verduras
    const verduras = ['Espárragos', 'Brócoli', 'Espinacas', 'Calabacín', 'Judías verdes', 'Pimientos', 'Berenjena', 'Coliflor'];
    const verduraSeleccionada = verduras[(variacion * 43) % verduras.length];
    alimentos.push({ nombre: verduraSeleccionada, cantidad: 150 });
    
    // Ensalada
    const ensaladas = ['Ensalada verde', 'Lechuga', 'Rúcula', 'Espinacas'];
    const ensaladaSeleccionada = ensaladas[(variacion * 47) % ensaladas.length];
    alimentos.push({ nombre: ensaladaSeleccionada, cantidad: 100 });
    
    // Grasas (solo si no es adelgazar)
    if (objetivo !== 'adelgazar') {
        alimentos.push({ nombre: 'Aceite de oliva', cantidad: 10 });
    } else {
        alimentos.push({ nombre: 'Limón', cantidad: 10 });
    }
    
    return alimentos;
}

// Exportar funciones
window.generarPlanVariado = generarPlanVariado;
window.generarSemanaVariada = generarSemanaVariada;

