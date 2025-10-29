// Base de datos de alimentos por objetivo
const alimentosPorObjetivo = {
    aumentar: {
        semana: [
            {
                dia: "LUNES",
                comidas: {
                    desayuno: {
                        alimentos: ["Avena (80g)", "Plátano", "Leche entera (250ml)", "Almendras (30g)", "Miel (1 cucharada)"],
                        calorias: 620,
                        proteinas: 25,
                        carbohidratos: 85,
                        grasas: 20
                    },
                    medioDia: {
                        alimentos: ["Batido de proteína", "Fruta"],
                        calorias: 200,
                        proteinas: 25,
                        carbohidratos: 20,
                        grasas: 3
                    },
                    almuerzo: {
                        alimentos: ["Pechuga de pollo (200g)", "Arroz integral (150g)", "Brócoli al vapor", "Aguacate (medio)", "Aceite de oliva"],
                        calorias: 750,
                        proteinas: 50,
                        carbohidratos: 75,
                        grasas: 25
                    },
                    merienda: {
                        alimentos: ["Batido de proteína", "Plátano", "Mantequilla de maní (2 cucharadas)", "Avena (40g)"],
                        calorias: 520,
                        proteinas: 35,
                        carbohidratos: 55,
                        grasas: 18
                    },
                    cena: {
                        alimentos: ["Salmón a la plancha (180g)", "Batata asada (200g)", "Espárragos", "Ensalada verde", "Aceite de oliva"],
                        calorias: 650,
                        proteinas: 45,
                        carbohidratos: 60,
                        grasas: 22
                    }
                }
            },
            {
                dia: "MARTES",
                comidas: {
                    desayuno: {
                        alimentos: ["Huevos revueltos (4 unidades)", "Pan integral (2 rebanadas)", "Aguacate", "Queso", "Jugo de naranja"],
                        calorias: 640,
                        proteinas: 30,
                        carbohidratos: 70,
                        grasas: 25
                    },
                    medioDia: {
                        alimentos: ["Yogur griego", "Frutos secos (30g)"],
                        calorias: 220,
                        proteinas: 15,
                        carbohidratos: 15,
                        grasas: 12
                    },
                    almuerzo: {
                        alimentos: ["Ternera (200g)", "Pasta integral (120g)", "Verduras salteadas", "Queso parmesano", "Aceite de oliva"],
                        calorias: 800,
                        proteinas: 55,
                        carbohidratos: 80,
                        grasas: 28
                    },
                    merienda: {
                        alimentos: ["Yogur griego (200g)", "Granola (50g)", "Fresas", "Nueces (30g)", "Miel"],
                        calorias: 530,
                        proteinas: 25,
                        carbohidratos: 60,
                        grasas: 20
                    },
                    cena: {
                        alimentos: ["Pavo al horno (180g)", "Quinoa (150g)", "Calabacín asado", "Tomate", "Aceite de oliva"],
                        calorias: 660,
                        proteinas: 48,
                        carbohidratos: 65,
                        grasas: 20
                    }
                }
            },
            {
                dia: "MIÉRCOLES",
                comidas: {
                    desayuno: {
                        alimentos: ["Tortilla francesa (3 huevos)", "Avena (60g)", "Plátano", "Leche", "Almendras (20g)"],
                        calorias: 610,
                        proteinas: 28,
                        carbohidratos: 75,
                        grasas: 22
                    },
                    medioDia: {
                        alimentos: ["Manzana", "Mantequilla de almendras (2 cucharadas)"],
                        calorias: 250,
                        proteinas: 8,
                        carbohidratos: 25,
                        grasas: 14
                    },
                    almuerzo: {
                        alimentos: ["Atún (200g)", "Arroz basmati (150g)", "Garbanzos", "Ensalada mixta", "Aceite de oliva"],
                        calorias: 740,
                        proteinas: 52,
                        carbohidratos: 85,
                        grasas: 20
                    },
                    merienda: {
                        alimentos: ["Batido (proteína, avena, plátano)", "Mantequilla de almendras", "Leche entera"],
                        calorias: 570,
                        proteinas: 40,
                        carbohidratos: 60,
                        grasas: 18
                    },
                    cena: {
                        alimentos: ["Pollo al curry (200g)", "Arroz integral (120g)", "Lentejas", "Verduras", "Yogur"],
                        calorias: 680,
                        proteinas: 50,
                        carbohidratos: 70,
                        grasas: 22
                    }
                }
            },
            {
                dia: "JUEVES",
                comidas: {
                    desayuno: {
                        alimentos: ["Pancakes de avena (3 unidades)", "Huevos (2)", "Miel", "Frutos rojos", "Yogur griego"],
                        calorias: 630,
                        proteinas: 30,
                        carbohidratos: 80,
                        grasas: 20
                    },
                    medioDia: {
                        alimentos: ["Batido de proteína", "Plátano"],
                        calorias: 200,
                        proteinas: 25,
                        carbohidratos: 25,
                        grasas: 2
                    },
                    almuerzo: {
                        alimentos: ["Salmón (200g)", "Patatas al horno (200g)", "Espinacas", "Zanahoria", "Aceite de oliva"],
                        calorias: 760,
                        proteinas: 48,
                        carbohidratos: 75,
                        grasas: 28
                    },
                    merienda: {
                        alimentos: ["Sándwich integral (pollo, aguacate)", "Fruta", "Nueces (25g)"],
                        calorias: 590,
                        proteinas: 35,
                        carbohidratos: 65,
                        grasas: 22
                    },
                    cena: {
                        alimentos: ["Pechuga de pavo (180g)", "Cuscús (150g)", "Berenjena asada", "Ensalada", "Hummus"],
                        calorias: 650,
                        proteinas: 46,
                        carbohidratos: 68,
                        grasas: 20
                    }
                }
            },
            {
                dia: "VIERNES",
                comidas: {
                    desayuno: {
                        alimentos: ["Batido (avena, proteína, plátano, mantequilla de maní)", "Pan integral tostado", "Mermelada"],
                        calorias: 690,
                        proteinas: 35,
                        carbohidratos: 90,
                        grasas: 22
                    },
                    medioDia: {
                        alimentos: ["Yogur con granola", "Frutos rojos"],
                        calorias: 230,
                        proteinas: 12,
                        carbohidratos: 30,
                        grasas: 8
                    },
                    almuerzo: {
                        alimentos: ["Ternera magra (200g)", "Arroz con verduras (180g)", "Judías verdes", "Aguacate", "Aceite de oliva"],
                        calorias: 780,
                        proteinas: 52,
                        carbohidratos: 80,
                        grasas: 26
                    },
                    merienda: {
                        alimentos: ["Yogur con granola (200g)", "Plátano", "Nueces (30g)", "Miel"],
                        calorias: 580,
                        proteinas: 38,
                        carbohidratos: 62,
                        grasas: 20
                    },
                    cena: {
                        alimentos: ["Pollo al horno (200g)", "Batata (200g)", "Brócoli", "Queso", "Aceite de oliva"],
                        calorias: 680,
                        proteinas: 50,
                        carbohidratos: 65,
                        grasas: 24
                    }
                }
            },
            {
                dia: "SÁBADO",
                comidas: {
                    desayuno: {
                        alimentos: ["Tostadas francesas (3 rebanadas)", "Huevos (3)", "Bacon (2 tiras)", "Fruta", "Yogur"],
                        calorias: 680,
                        proteinas: 32,
                        carbohidratos: 75,
                        grasas: 28
                    },
                    medioDia: {
                        alimentos: ["Batido de proteína", "Frutos secos mixtos (30g)"],
                        calorias: 250,
                        proteinas: 28,
                        carbohidratos: 15,
                        grasas: 12
                    },
                    almuerzo: {
                        alimentos: ["Pasta con pollo y nata (250g)", "Ensalada César", "Pan integral", "Queso parmesano"],
                        calorias: 870,
                        proteinas: 55,
                        carbohidratos: 95,
                        grasas: 30
                    },
                    merienda: {
                        alimentos: ["Batido completo (proteína, avena, plátano, mantequilla de almendras, leche)"],
                        calorias: 650,
                        proteinas: 42,
                        carbohidratos: 70,
                        grasas: 22
                    },
                    cena: {
                        alimentos: ["Pizza casera integral (pollo, verduras, queso)", "Ensalada", "Aceite de oliva"],
                        calorias: 750,
                        proteinas: 48,
                        carbohidratos: 80,
                        grasas: 25
                    }
                }
            },
            {
                dia: "DOMINGO",
                comidas: {
                    desayuno: {
                        alimentos: ["Desayuno completo: huevos, bacon, tostadas, aguacate, tomate", "Jugo natural"],
                        calorias: 700,
                        proteinas: 35,
                        carbohidratos: 70,
                        grasas: 30
                    },
                    medioDia: {
                        alimentos: ["Yogur griego", "Miel", "Nueces"],
                        calorias: 240,
                        proteinas: 18,
                        carbohidratos: 20,
                        grasas: 12
                    },
                    almuerzo: {
                        alimentos: ["Arroz con pollo (300g)", "Frijoles", "Plátano macho frito", "Ensalada", "Aguacate"],
                        calorias: 880,
                        proteinas: 58,
                        carbohidratos: 100,
                        grasas: 28
                    },
                    merienda: {
                        alimentos: ["Sándwich grande (atún, huevo, aguacate)", "Fruta", "Yogur", "Nueces"],
                        calorias: 640,
                        proteinas: 40,
                        carbohidratos: 65,
                        grasas: 24
                    },
                    cena: {
                        alimentos: ["Salmón al horno (200g)", "Quinoa (150g)", "Verduras asadas", "Ensalada", "Aceite de oliva"],
                        calorias: 700,
                        proteinas: 48,
                        carbohidratos: 68,
                        grasas: 26
                    }
                }
            }
        ]
    },
    adelgazar: {
        semana: [
            {
                dia: "LUNES",
                comidas: {
                    desayuno: {
                        alimentos: ["Yogur griego desnatado (150g)", "Frutos rojos", "Avena (30g)", "Té verde"],
                        calorias: 270,
                        proteinas: 20,
                        carbohidratos: 35,
                        grasas: 5
                    },
                    medioDia: {
                        alimentos: ["Manzana", "Almendras (10g)"],
                        calorias: 120,
                        proteinas: 3,
                        carbohidratos: 18,
                        grasas: 5
                    },
                    almuerzo: {
                        alimentos: ["Pechuga de pollo (150g)", "Ensalada grande mixta", "Quinoa (80g)", "Limón y especias"],
                        calorias: 420,
                        proteinas: 40,
                        carbohidratos: 45,
                        grasas: 8
                    },
                    merienda: {
                        alimentos: ["Manzana", "Almendras (15g)", "Té verde"],
                        calorias: 170,
                        proteinas: 5,
                        carbohidratos: 20,
                        grasas: 8
                    },
                    cena: {
                        alimentos: ["Merluza al horno (150g)", "Verduras al vapor", "Ensalada verde", "Aceite de oliva (1 cucharada)"],
                        calorias: 320,
                        proteinas: 35,
                        carbohidratos: 15,
                        grasas: 12
                    }
                }
            },
            {
                dia: "MARTES",
                comidas: {
                    desayuno: {
                        alimentos: ["Tortilla de claras (4 claras)", "Tomate", "Espinacas", "Pan integral (1 rebanada)", "Café solo"],
                        calorias: 230,
                        proteinas: 18,
                        carbohidratos: 30,
                        grasas: 4
                    },
                    medioDia: {
                        alimentos: ["Yogur desnatado", "Kiwi"],
                        calorias: 100,
                        proteinas: 6,
                        carbohidratos: 15,
                        grasas: 1
                    },
                    almuerzo: {
                        alimentos: ["Atún al natural (120g)", "Judías verdes", "Arroz integral (60g)", "Ensalada", "Limón"],
                        calorias: 400,
                        proteinas: 38,
                        carbohidratos: 48,
                        grasas: 6
                    },
                    merienda: {
                        alimentos: ["Yogur desnatado", "Kiwi", "Té de hierbas"],
                        calorias: 120,
                        proteinas: 8,
                        carbohidratos: 18,
                        grasas: 2
                    },
                    cena: {
                        alimentos: ["Pechuga de pavo (140g)", "Calabacín a la plancha", "Berenjena", "Champiñones", "Especias"],
                        calorias: 260,
                        proteinas: 38,
                        carbohidratos: 12,
                        grasas: 5
                    }
                }
            },
            {
                dia: "MIÉRCOLES",
                comidas: {
                    desayuno: {
                        alimentos: ["Batido verde (espinacas, piña, plátano)", "Semillas de chía (10g)", "Té verde"],
                        calorias: 250,
                        proteinas: 8,
                        carbohidratos: 40,
                        grasas: 6
                    },
                    medioDia: {
                        alimentos: ["Pera", "Té de hierbas"],
                        calorias: 80,
                        proteinas: 1,
                        carbohidratos: 20,
                        grasas: 0
                    },
                    almuerzo: {
                        alimentos: ["Salmón a la plancha (120g)", "Brócoli al vapor", "Coliflor", "Arroz de coliflor", "Limón"],
                        calorias: 360,
                        proteinas: 35,
                        carbohidratos: 20,
                        grasas: 15
                    },
                    merienda: {
                        alimentos: ["Pera", "Nueces (10g)", "Infusión"],
                        calorias: 170,
                        proteinas: 4,
                        carbohidratos: 22,
                        grasas: 7
                    },
                    cena: {
                        alimentos: ["Pollo al limón (140g)", "Ensalada de espinacas", "Tomate cherry", "Pepino", "Vinagre balsámico"],
                        calorias: 250,
                        proteinas: 36,
                        carbohidratos: 10,
                        grasas: 6
                    }
                }
            },
            {
                dia: "JUEVES",
                comidas: {
                    desayuno: {
                        alimentos: ["Tostada integral (1 rebanada)", "Aguacate (40g)", "Tomate", "Huevo pochado", "Té"],
                        calorias: 260,
                        proteinas: 12,
                        carbohidratos: 28,
                        grasas: 10
                    },
                    medioDia: {
                        alimentos: ["Zanahoria", "Hummus (30g)"],
                        calorias: 90,
                        proteinas: 3,
                        carbohidratos: 12,
                        grasas: 4
                    },
                    almuerzo: {
                        alimentos: ["Ternera magra (130g)", "Lentejas (80g)", "Verduras salteadas", "Ensalada", "Limón"],
                        calorias: 410,
                        proteinas: 42,
                        carbohidratos: 40,
                        grasas: 8
                    },
                    merienda: {
                        alimentos: ["Requesón bajo en grasa (100g)", "Fresas", "Canela"],
                        calorias: 115,
                        proteinas: 12,
                        carbohidratos: 10,
                        grasas: 3
                    },
                    cena: {
                        alimentos: ["Merluza al papillote (150g)", "Espárragos", "Zanahoria", "Cebolla", "Hierbas aromáticas"],
                        calorias: 250,
                        proteinas: 36,
                        carbohidratos: 14,
                        grasas: 4
                    }
                }
            },
            {
                dia: "VIERNES",
                comidas: {
                    desayuno: {
                        alimentos: ["Yogur griego (150g)", "Granola light (20g)", "Arándanos", "Café solo"],
                        calorias: 260,
                        proteinas: 18,
                        carbohidratos: 32,
                        grasas: 6
                    },
                    medioDia: {
                        alimentos: ["Naranja", "Té verde"],
                        calorias: 70,
                        proteinas: 1,
                        carbohidratos: 17,
                        grasas: 0
                    },
                    almuerzo: {
                        alimentos: ["Pollo al curry light (140g)", "Arroz integral (70g)", "Verduras al vapor", "Ensalada"],
                        calorias: 450,
                        proteinas: 40,
                        carbohidratos: 50,
                        grasas: 9
                    },
                    merienda: {
                        alimentos: ["Batido de proteína", "Plátano pequeño"],
                        calorias: 220,
                        proteinas: 25,
                        carbohidratos: 25,
                        grasas: 2
                    },
                    cena: {
                        alimentos: ["Sopa de verduras", "Tofu a la plancha (100g)", "Ensalada mixta", "Aceite de oliva (1 cucharadita)"],
                        calorias: 240,
                        proteinas: 18,
                        carbohidratos: 18,
                        grasas: 10
                    }
                }
            },
            {
                dia: "SÁBADO",
                comidas: {
                    desayuno: {
                        alimentos: ["Huevos revueltos (2 enteros)", "Espinacas", "Tomate", "Pan integral (1 rebanada)", "Té verde"],
                        calorias: 290,
                        proteinas: 16,
                        carbohidratos: 28,
                        grasas: 12
                    },
                    medioDia: {
                        alimentos: ["Yogur desnatado", "Canela"],
                        calorias: 80,
                        proteinas: 8,
                        carbohidratos: 12,
                        grasas: 0
                    },
                    almuerzo: {
                        alimentos: ["Pavo al horno (150g)", "Batata pequeña (100g)", "Brócoli", "Coliflor", "Limón"],
                        calorias: 380,
                        proteinas: 42,
                        carbohidratos: 35,
                        grasas: 6
                    },
                    merienda: {
                        alimentos: ["Naranja", "Yogur desnatado", "Canela"],
                        calorias: 150,
                        proteinas: 8,
                        carbohidratos: 24,
                        grasas: 2
                    },
                    cena: {
                        alimentos: ["Sepia a la plancha (150g)", "Ensalada de rúcula", "Tomate", "Pepino", "Limón"],
                        calorias: 185,
                        proteinas: 30,
                        carbohidratos: 8,
                        grasas: 3
                    }
                }
            },
            {
                dia: "DOMINGO",
                comidas: {
                    desayuno: {
                        alimentos: ["Tortitas de avena (2 unidades)", "Claras de huevo", "Fresas", "Miel (1 cucharadita)", "Café"],
                        calorias: 290,
                        proteinas: 20,
                        carbohidratos: 38,
                        grasas: 6
                    },
                    medioDia: {
                        alimentos: ["Macedonia de frutas", "Infusión"],
                        calorias: 100,
                        proteinas: 2,
                        carbohidratos: 24,
                        grasas: 0
                    },
                    almuerzo: {
                        alimentos: ["Salmón (130g)", "Quinoa (70g)", "Espárragos", "Ensalada verde", "Aceite de oliva (1 cucharadita)"],
                        calorias: 490,
                        proteinas: 38,
                        carbohidratos: 42,
                        grasas: 18
                    },
                    merienda: {
                        alimentos: ["Macedonia de frutas", "Yogur griego desnatado", "Menta"],
                        calorias: 190,
                        proteinas: 12,
                        carbohidratos: 28,
                        grasas: 3
                    },
                    cena: {
                        alimentos: ["Pollo a la plancha (140g)", "Crema de calabacín", "Ensalada", "Cebolla", "Especias"],
                        calorias: 290,
                        proteinas: 38,
                        carbohidratos: 15,
                        grasas: 7
                    }
                }
            }
        ]
    },
    mantener: {
        semana: [
            {
                dia: "LUNES",
                comidas: {
                    desayuno: {
                        alimentos: ["Avena (50g)", "Leche semidesnatada", "Plátano", "Almendras (20g)", "Café"],
                        calorias: 410,
                        proteinas: 18,
                        carbohidratos: 55,
                        grasas: 12
                    },
                    medioDia: {
                        alimentos: ["Yogur natural", "Fruta pequeña"],
                        calorias: 150,
                        proteinas: 8,
                        carbohidratos: 20,
                        grasas: 4
                    },
                    almuerzo: {
                        alimentos: ["Pechuga de pollo (160g)", "Arroz integral (100g)", "Ensalada mixta", "Verduras al vapor", "Aceite de oliva"],
                        calorias: 570,
                        proteinas: 45,
                        carbohidratos: 60,
                        grasas: 15
                    },
                    merienda: {
                        alimentos: ["Yogur natural", "Fruta", "Nueces (15g)"],
                        calorias: 250,
                        proteinas: 12,
                        carbohidratos: 28,
                        grasas: 10
                    },
                    cena: {
                        alimentos: ["Salmón (140g)", "Verduras asadas", "Patata pequeña (100g)", "Ensalada", "Aceite de oliva"],
                        calorias: 470,
                        proteinas: 38,
                        carbohidratos: 35,
                        grasas: 18
                    }
                }
            },
            {
                dia: "MARTES",
                comidas: {
                    desayuno: {
                        alimentos: ["Tostadas integrales (2)", "Huevos revueltos (2)", "Tomate", "Aguacate (30g)", "Té"],
                        calorias: 410,
                        proteinas: 20,
                        carbohidratos: 45,
                        grasas: 15
                    },
                    medioDia: {
                        alimentos: ["Manzana", "Nueces (10g)"],
                        calorias: 130,
                        proteinas: 3,
                        carbohidratos: 20,
                        grasas: 6
                    },
                    almuerzo: {
                        alimentos: ["Ternera (150g)", "Pasta integral (90g)", "Verduras salteadas", "Ensalada", "Queso rallado"],
                        calorias: 630,
                        proteinas: 48,
                        carbohidratos: 65,
                        grasas: 18
                    },
                    merienda: {
                        alimentos: ["Batido (leche, plátano, avena)", "Almendras (10g)"],
                        calorias: 280,
                        proteinas: 15,
                        carbohidratos: 35,
                        grasas: 8
                    },
                    cena: {
                        alimentos: ["Pavo (150g)", "Quinoa (100g)", "Brócoli", "Zanahoria", "Aceite de oliva"],
                        calorias: 480,
                        proteinas: 42,
                        carbohidratos: 48,
                        grasas: 12
                    }
                }
            },
            {
                dia: "MIÉRCOLES",
                comidas: {
                    desayuno: {
                        alimentos: ["Yogur griego (150g)", "Granola (30g)", "Fresas", "Miel", "Café"],
                        calorias: 360,
                        proteinas: 18,
                        carbohidratos: 48,
                        grasas: 10
                    },
                    medioDia: {
                        alimentos: ["Queso fresco (50g)", "Tostadas integrales (2)"],
                        calorias: 170,
                        proteinas: 10,
                        carbohidratos: 20,
                        grasas: 6
                    },
                    almuerzo: {
                        alimentos: ["Atún (150g)", "Arroz basmati (100g)", "Garbanzos (60g)", "Ensalada", "Aceite de oliva"],
                        calorias: 600,
                        proteinas: 46,
                        carbohidratos: 68,
                        grasas: 14
                    },
                    merienda: {
                        alimentos: ["Manzana", "Queso fresco (50g)", "Nueces (15g)"],
                        calorias: 240,
                        proteinas: 10,
                        carbohidratos: 22,
                        grasas: 12
                    },
                    cena: {
                        alimentos: ["Pollo al horno (150g)", "Batata (120g)", "Espárragos", "Ensalada verde", "Aceite de oliva"],
                        calorias: 480,
                        proteinas: 42,
                        carbohidratos: 42,
                        grasas: 14
                    }
                }
            },
            {
                dia: "JUEVES",
                comidas: {
                    desayuno: {
                        alimentos: ["Tortilla (2 huevos)", "Pan integral (2 rebanadas)", "Tomate", "Jamón de pavo", "Café con leche"],
                        calorias: 400,
                        proteinas: 24,
                        carbohidratos: 42,
                        grasas: 14
                    },
                    medioDia: {
                        alimentos: ["Yogur", "Granola (20g)"],
                        calorias: 150,
                        proteinas: 8,
                        carbohidratos: 22,
                        grasas: 4
                    },
                    almuerzo: {
                        alimentos: ["Merluza (160g)", "Patatas al horno (150g)", "Pimientos", "Cebolla", "Aceite de oliva"],
                        calorias: 540,
                        proteinas: 40,
                        carbohidratos: 52,
                        grasas: 16
                    },
                    merienda: {
                        alimentos: ["Yogur con frutas", "Avena (20g)", "Almendras (15g)"],
                        calorias: 270,
                        proteinas: 14,
                        carbohidratos: 32,
                        grasas: 10
                    },
                    cena: {
                        alimentos: ["Pechuga de pollo (150g)", "Verduras al wok", "Arroz integral (80g)", "Soja", "Jengibre"],
                        calorias: 500,
                        proteinas: 44,
                        carbohidratos: 50,
                        grasas: 12
                    }
                }
            },
            {
                dia: "VIERNES",
                comidas: {
                    desayuno: {
                        alimentos: ["Batido (avena, plátano, leche, mantequilla de maní)", "Tostada integral", "Café"],
                        calorias: 450,
                        proteinas: 20,
                        carbohidratos: 58,
                        grasas: 14
                    },
                    medioDia: {
                        alimentos: ["Plátano", "Almendras (15g)"],
                        calorias: 160,
                        proteinas: 4,
                        carbohidratos: 25,
                        grasas: 7
                    },
                    almuerzo: {
                        alimentos: ["Ternera magra (150g)", "Lentejas (100g)", "Verduras", "Ensalada", "Pan integral"],
                        calorias: 610,
                        proteinas: 48,
                        carbohidratos: 65,
                        grasas: 15
                    },
                    merienda: {
                        alimentos: ["Sándwich (pavo, queso, tomate)", "Fruta"],
                        calorias: 290,
                        proteinas: 18,
                        carbohidratos: 35,
                        grasas: 8
                    },
                    cena: {
                        alimentos: ["Salmón (140g)", "Cuscús (100g)", "Verduras asadas", "Ensalada", "Aceite de oliva"],
                        calorias: 540,
                        proteinas: 40,
                        carbohidratos: 52,
                        grasas: 18
                    }
                }
            },
            {
                dia: "SÁBADO",
                comidas: {
                    desayuno: {
                        alimentos: ["Pancakes integrales (3)", "Huevo", "Frutos rojos", "Miel", "Yogur", "Café"],
                        calorias: 440,
                        proteinas: 22,
                        carbohidratos: 55,
                        grasas: 14
                    },
                    medioDia: {
                        alimentos: ["Batido de proteína", "Fruta"],
                        calorias: 180,
                        proteinas: 25,
                        carbohidratos: 18,
                        grasas: 2
                    },
                    almuerzo: {
                        alimentos: ["Paella mixta (pollo, pescado, arroz, verduras)", "Ensalada", "Pan"],
                        calorias: 700,
                        proteinas: 50,
                        carbohidratos: 75,
                        grasas: 20
                    },
                    merienda: {
                        alimentos: ["Batido de proteína", "Plátano", "Nueces (15g)"],
                        calorias: 350,
                        proteinas: 28,
                        carbohidratos: 35,
                        grasas: 10
                    },
                    cena: {
                        alimentos: ["Pizza casera integral (pollo, verduras)", "Ensalada verde", "Aceite de oliva"],
                        calorias: 590,
                        proteinas: 42,
                        carbohidratos: 60,
                        grasas: 18
                    }
                }
            },
            {
                dia: "DOMINGO",
                comidas: {
                    desayuno: {
                        alimentos: ["Desayuno completo: huevos, bacon, tostadas, aguacate", "Tomate", "Café con leche"],
                        calorias: 510,
                        proteinas: 28,
                        carbohidratos: 48,
                        grasas: 22
                    },
                    medioDia: {
                        alimentos: ["Yogur griego", "Granola (25g)", "Miel"],
                        calorias: 200,
                        proteinas: 12,
                        carbohidratos: 26,
                        grasas: 6
                    },
                    almuerzo: {
                        alimentos: ["Pollo asado (180g)", "Patatas al horno (150g)", "Verduras", "Ensalada", "Pan integral"],
                        calorias: 670,
                        proteinas: 52,
                        carbohidratos: 70,
                        grasas: 18
                    },
                    merienda: {
                        alimentos: ["Yogur griego", "Fruta mixta", "Granola (25g)", "Miel"],
                        calorias: 320,
                        proteinas: 16,
                        carbohidratos: 40,
                        grasas: 10
                    },
                    cena: {
                        alimentos: ["Sopa de verduras", "Tortilla de patatas (pequeña)", "Ensalada mixta", "Pan integral"],
                        calorias: 430,
                        proteinas: 20,
                        carbohidratos: 48,
                        grasas: 16
                    }
                }
            }
        ]
    }
};

// Variables globales
let datosUsuario = {};

// Event listener para el formulario
document.getElementById('dietForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recoger datos del formulario
    datosUsuario = {
        nombre: document.getElementById('nombre').value,
        fechaRegistro: document.getElementById('fechaRegistro').value,
        sexo: document.getElementById('sexo').value,
        edad: parseInt(document.getElementById('edad').value),
        altura: parseInt(document.getElementById('altura').value),
        peso: parseFloat(document.getElementById('peso').value),
        tipoPersona: document.getElementById('tipoPersona').value,
        objetivo: document.getElementById('objetivo').value,
        prohibiciones: document.getElementById('prohibiciones').value,
        duracion: document.getElementById('duracion').value
    };
    
    // Calcular macronutrientes
    calcularMacronutrientes();
    
    // Mostrar resultados
    mostrarResultados();
});

function calcularMacronutrientes() {
    const { edad, sexo, altura, peso, objetivo, tipoPersona } = datosUsuario;
    
    // Calcular TMB (Tasa Metabólica Basal) usando la fórmula de Harris-Benedict
    let tmb;
    if (sexo === 'Hombre') {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
    } else {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    }
    
    // Factor de actividad
    let factorActividad;
    switch(tipoPersona) {
        case 'sedentaria':
            factorActividad = 1.2;
            break;
        case 'activa':
            factorActividad = 1.55;
            break;
        case 'muy-activa':
            factorActividad = 1.725;
            break;
        default:
            factorActividad = 1.2;
    }
    
    // Calorías según objetivo
    let calorias = tmb * factorActividad;
    
    if (objetivo === 'aumentar') {
        calorias += 400;
    } else if (objetivo === 'adelgazar') {
        calorias -= 500;
    }
    
    calorias = Math.round(calorias);
    
    // Calcular macronutrientes según objetivo
    let proteinas, grasas, carbohidratos;
    
    if (objetivo === 'aumentar') {
        // Aumentar masa: 2g proteína/kg, 25% grasas, resto carbohidratos
        proteinas = Math.round(peso * 2);
        grasas = Math.round((calorias * 0.25) / 9);
        carbohidratos = Math.round((calorias - (proteinas * 4) - (grasas * 9)) / 4);
    } else if (objetivo === 'adelgazar') {
        // Perder peso: 2.2g proteína/kg, 25% grasas, resto carbohidratos
        proteinas = Math.round(peso * 2.2);
        grasas = Math.round((calorias * 0.25) / 9);
        carbohidratos = Math.round((calorias - (proteinas * 4) - (grasas * 9)) / 4);
    } else {
        // Mantener: 1.8g proteína/kg, 30% grasas, resto carbohidratos
        proteinas = Math.round(peso * 1.8);
        grasas = Math.round((calorias * 0.30) / 9);
        carbohidratos = Math.round((calorias - (proteinas * 4) - (grasas * 9)) / 4);
    }
    
    // Guardar en datos del usuario
    datosUsuario.calorias = calorias;
    datosUsuario.proteinas = proteinas;
    datosUsuario.grasas = grasas;
    datosUsuario.carbohidratos = carbohidratos;
    datosUsuario.imc = (peso / Math.pow(altura / 100, 2)).toFixed(1);
    
    // Actualizar campos en el formulario
    document.getElementById('calorias').value = calorias;
    document.getElementById('proteinas').value = proteinas;
    document.getElementById('grasas').value = grasas;
    document.getElementById('carbohidratos').value = carbohidratos;
}

function mostrarResultados() {
    const resultadosDiv = document.getElementById('resultados');
    
    // Establecer fecha de generación
    const fechaHoy = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('fecha-generacion').textContent = fechaHoy;
    
    // Mostrar tabla de macronutrientes
    mostrarTablaMacros();
    
    // Mostrar información del usuario
    mostrarInfoUsuario();
    
    // Mostrar plan de alimentación
    mostrarPlanAlimentacion();
    
    // Mostrar prohibiciones
    mostrarProhibiciones();
    
    // Mostrar resultados
    resultadosDiv.classList.remove('oculto');
    
    // Scroll suave hacia los resultados
    setTimeout(() => {
        resultadosDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    // Mostrar notificación de éxito
    mostrarNotificacion('✅ Plan de alimentación generado correctamente', 'success');
}

function mostrarTablaMacros() {
    const tbody = document.getElementById('tabla-macros-body');
    const { calorias, proteinas, grasas, carbohidratos } = datosUsuario;
    
    // Calcular porcentajes
    const proteinasPercent = Math.round((proteinas * 4 / calorias) * 100);
    const grasasPercent = Math.round((grasas * 9 / calorias) * 100);
    const carbohidratosPercent = Math.round((carbohidratos * 4 / calorias) * 100);
    
    tbody.innerHTML = `
        <tr>
            <td>CALORÍAS</td>
            <td>${calorias} kcal</td>
            <td>-</td>
            <td>${calorias} kcal</td>
            <td>100%</td>
        </tr>
        <tr>
            <td>PROTEÍNAS</td>
            <td>${proteinas}g</td>
            <td>-</td>
            <td>${proteinas}g</td>
            <td>${proteinasPercent}%</td>
        </tr>
        <tr>
            <td>GRASAS</td>
            <td>${grasas}g</td>
            <td>-</td>
            <td>${grasas}g</td>
            <td>${grasasPercent}%</td>
        </tr>
        <tr>
            <td>CARBOHIDRATOS</td>
            <td>${carbohidratos}g</td>
            <td>-</td>
            <td>${carbohidratos}g</td>
            <td>${carbohidratosPercent}%</td>
        </tr>
    `;
}

function mostrarInfoUsuario() {
    const tbody = document.getElementById('tabla-info-body');
    const { nombre, fechaRegistro, sexo, edad, peso, altura, tipoPersona, imc } = datosUsuario;
    
    tbody.innerHTML = `
        <tr>
            <td>${nombre}</td>
            <td>${new Date(fechaRegistro).toLocaleDateString('es-ES')}</td>
            <td>${sexo}</td>
            <td>${edad}</td>
            <td>${peso}</td>
            <td>${altura}</td>
            <td>${tipoPersona.charAt(0).toUpperCase() + tipoPersona.slice(1).replace('-', ' ')}</td>
            <td>${imc}</td>
        </tr>
    `;
}

function mostrarPlanAlimentacion() {
    const planDiv = document.getElementById('plan-alimentacion');
    const { objetivo, duracion } = datosUsuario;
    
    const planSemana = alimentosPorObjetivo[objetivo].semana;
    let htmlPlan = '';
    
    const semanas = duracion === 'mes' ? 4 : 1;
    
    for (let semana = 1; semana <= semanas; semana++) {
        if (duracion === 'mes') {
            htmlPlan += `<h2 style="color: #764ba2; margin-top: 40px; text-align: center;">Semana ${semana}</h2>`;
        }
        
        planSemana.forEach(dia => {
            htmlPlan += generarDiaHTML(dia);
        });
    }
    
    planDiv.innerHTML = htmlPlan;
}

function generarDiaHTML(dia) {
    const comidas = dia.comidas;
    
    return `
        <div class="dia-plan">
            <h3>${dia.dia}</h3>
            
            <table class="tabla-comidas">
                <thead>
                    <tr>
                        <th>DESAYUNO</th>
                        <th>MEDIODÍA</th>
                        <th>COMIDA</th>
                        <th>MERIENDA</th>
                        <th>CENA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="comida-header">🍳 Desayuno</div>
                            <ul class="lista-alimentos">
                                ${comidas.desayuno.alimentos.map(alimento => `<li>${alimento}</li>`).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: ${comidas.desayuno.calorias} kcal<br>
                                Prot: ${comidas.desayuno.proteinas}g | Carb: ${comidas.desayuno.carbohidratos}g | Grasas: ${comidas.desayuno.grasas}g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🥤 Mediodía</div>
                            <ul class="lista-alimentos">
                                ${comidas.medioDia.alimentos.map(alimento => `<li>${alimento}</li>`).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: ${comidas.medioDia.calorias} kcal<br>
                                Prot: ${comidas.medioDia.proteinas}g | Carb: ${comidas.medioDia.carbohidratos}g | Grasas: ${comidas.medioDia.grasas}g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🍽️ Comida</div>
                            <ul class="lista-alimentos">
                                ${comidas.almuerzo.alimentos.map(alimento => `<li>${alimento}</li>`).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: ${comidas.almuerzo.calorias} kcal<br>
                                Prot: ${comidas.almuerzo.proteinas}g | Carb: ${comidas.almuerzo.carbohidratos}g | Grasas: ${comidas.almuerzo.grasas}g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🥙 Merienda</div>
                            <ul class="lista-alimentos">
                                ${comidas.merienda.alimentos.map(alimento => `<li>${alimento}</li>`).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: ${comidas.merienda.calorias} kcal<br>
                                Prot: ${comidas.merienda.proteinas}g | Carb: ${comidas.merienda.carbohidratos}g | Grasas: ${comidas.merienda.grasas}g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🌙 Cena</div>
                            <ul class="lista-alimentos">
                                ${comidas.cena.alimentos.map(alimento => `<li>${alimento}</li>`).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: ${comidas.cena.calorias} kcal<br>
                                Prot: ${comidas.cena.proteinas}g | Carb: ${comidas.cena.carbohidratos}g | Grasas: ${comidas.cena.grasas}g
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div class="menu-section">
                <h4>📋 MENÚ PERSONALIZADO</h4>
                <p>Este plan está diseñado específicamente para tu objetivo de ${datosUsuario.objetivo === 'aumentar' ? 'aumentar masa muscular' : datosUsuario.objetivo === 'adelgazar' ? 'perder peso' : 'mantener peso'}.</p>
            </div>
            
            <div class="notas-section">
                <h4>📝 NOTAS</h4>
                <p>Recuerda beber al menos 2-3 litros de agua al día. Ajusta las porciones según tu nivel de saciedad y energía.</p>
            </div>
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

// Event listeners para las pestañas
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remover clase active de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Activar pestaña y contenido seleccionado
            this.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });
    
    // Establecer fecha actual
    const hoy = new Date();
    document.getElementById('fechaRegistro').valueAsDate = hoy;
});

// Botón de descarga en PDF
document.getElementById('btnDescargar').addEventListener('click', function() {
    const boton = this;
    const textoOriginal = boton.textContent;
    
    // Cambiar texto del botón
    boton.textContent = '⏳ Generando PDF...';
    boton.disabled = true;
    
    // Elemento a convertir en PDF
    const elemento = document.getElementById('pdf-content');
    
    // Configuración del PDF
    const opciones = {
        margin: [10, 10, 10, 10],
        filename: `Dieta_${datosUsuario.nombre.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    // Generar PDF
    html2pdf()
        .set(opciones)
        .from(elemento)
        .save()
        .then(function() {
            // Restaurar botón
            boton.textContent = textoOriginal;
            boton.disabled = false;
            
            // Mostrar mensaje de éxito
            mostrarNotificacion('✅ PDF descargado correctamente', 'success');
        })
        .catch(function(error) {
            console.error('Error al generar PDF:', error);
            boton.textContent = textoOriginal;
            boton.disabled = false;
            mostrarNotificacion('❌ Error al generar el PDF', 'error');
        });
});

// Botón para crear nueva dieta
document.getElementById('btnNuevo').addEventListener('click', function() {
    if (confirm('¿Estás seguro de que quieres crear una nueva dieta? Se perderá la información actual.')) {
        // Ocultar resultados
        document.getElementById('resultados').classList.add('oculto');
        
        // Resetear formulario
        document.getElementById('dietForm').reset();
        
        // Limpiar campos auto-calculados
        document.getElementById('calorias').value = '';
        document.getElementById('proteinas').value = '';
        document.getElementById('grasas').value = '';
        document.getElementById('carbohidratos').value = '';
        
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        mostrarNotificacion('✨ Listo para crear una nueva dieta', 'info');
    }
});

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    
    // Estilos inline
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
    
    // Añadir al body
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Añadir animaciones CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
