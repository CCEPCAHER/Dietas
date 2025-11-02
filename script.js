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
window.datosUsuario = datosUsuario; // Exportar para uso en otros módulos

function calcularMacronutrientes() {
    // Obtener valores del formulario o datosUsuario (prioridad al formulario)
    const edad = parseInt(document.getElementById('edad')?.value) || datosUsuario.edad;
    const sexo = document.getElementById('sexo')?.value || datosUsuario.sexo;
    const altura = parseInt(document.getElementById('altura')?.value) || datosUsuario.altura;
    const peso = parseFloat(document.getElementById('peso')?.value) || datosUsuario.peso;
    const objetivo = document.getElementById('objetivo')?.value || datosUsuario.objetivo;
    const tipoPersona = document.getElementById('tipoPersona')?.value || datosUsuario.tipoPersona;
    
    // Obtener valores del formulario (pueden no estar en datosUsuario aún)
    const actividadFisicaDeporte = document.getElementById('actividadFisicaDeporte')?.value || datosUsuario.actividadFisicaDeporte || 'moderada';
    const tipoTermogenico = document.getElementById('tipoTermogenico')?.value || datosUsuario.tipoTermogenico || 'no-sedentaria';
    const superavitEntreno = parseFloat(document.getElementById('superavitEntreno')?.value || datosUsuario.superavitEntreno || 5);
    const superavitDescanso = parseFloat(document.getElementById('superavitDescanso')?.value || datosUsuario.superavitDescanso || 5);
    
    // Obtener días de entrenamiento
    const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]:checked');
    const diasEntreno = Array.from(diasEntrenoCheckboxes).map(cb => cb.value);
    datosUsuario.diasEntreno = diasEntreno;
    
    // Calcular TMB usando fórmula de Mifflin-St Jeor
    let tmb;
    if (sexo === 'Hombre' || sexo === 'masculino') {
        tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
    tmb = Math.round(tmb);
    
    // Calcular efecto termogénico de alimentos (TEF) como porcentaje del TMB
    let porcentajeTEF;
    switch(tipoTermogenico) {
        case 'sedentaria': 
            porcentajeTEF = 0.10; 
            break;
        case 'no-sedentaria': 
            porcentajeTEF = 0.15; 
            break;
        case 'culturista': 
            porcentajeTEF = 0.20; 
            break;
        default: 
            porcentajeTEF = 0.15;
    }
    // TEF se calcula como porcentaje del TMB (no del gasto total)
    const tef = Math.round(tmb * porcentajeTEF);
    
    // Calcular actividad física del deporte (valores basados en ejemplos reales)
    // Estos valores representan el gasto adicional por actividad física del deporte en días de entrenamiento
    let actividadFisicaDeporteKcal;
    switch(actividadFisicaDeporte) {
        case 'sedentario': 
            actividadFisicaDeporteKcal = 0; 
            break;
        case 'ligera': 
            // Basado en ejemplo: ~787 kcal para TMB ~2098, pero escalamos proporcionalmente
            // Factor aproximado: 0.375, pero ajustado para valores más realistas
            actividadFisicaDeporteKcal = Math.round(tmb * 0.375); 
            break;
        case 'moderada': 
            // Basado en ejemplo: 1154 kcal para TMB 2098 = factor 0.55
            actividadFisicaDeporteKcal = Math.round(tmb * 0.55); 
            break;
        case 'intensa': 
            // Para actividad intensa: ~1.5x moderada
            actividadFisicaDeporteKcal = Math.round(tmb * 0.825); 
            break;
        case 'muy-intensa': 
            // Para muy intensa: ~2x moderada
            actividadFisicaDeporteKcal = Math.round(tmb * 1.1); 
            break;
        default: 
            actividadFisicaDeporteKcal = Math.round(tmb * 0.55);
    }
    
    // Calcular gasto calórico base (sin superávit/déficit)
    const gastoBaseEntreno = tmb + tef + actividadFisicaDeporteKcal;
    const gastoBaseDescanso = tmb + tef;
    
    // Calcular superávit/déficit (puede ser positivo o negativo)
    const superavitEntrenoKcal = Math.round(gastoBaseEntreno * (superavitEntreno / 100));
    const superavitDescansoKcal = Math.round(gastoBaseDescanso * (superavitDescanso / 100));
    
    // Calcular ingesta calórica total
    // Si es déficit (negativo), se resta; si es superávit (positivo), se suma
    const caloriasEntreno = gastoBaseEntreno + superavitEntrenoKcal;
    const caloriasDescanso = gastoBaseDescanso + superavitDescansoKcal;
    
    // Guardar todos los cálculos en datosUsuario
    datosUsuario.tmb = tmb;
    datosUsuario.tef = tef;
    datosUsuario.porcentajeTEF = porcentajeTEF * 100;
    datosUsuario.actividadFisicaDeporte = actividadFisicaDeporte;
    datosUsuario.actividadFisicaDeporteKcal = actividadFisicaDeporteKcal;
    datosUsuario.gastoBaseEntreno = gastoBaseEntreno;
    datosUsuario.gastoBaseDescanso = gastoBaseDescanso;
    datosUsuario.superavitEntreno = superavitEntreno;
    datosUsuario.superavitDescanso = superavitDescanso;
    datosUsuario.superavitEntrenoKcal = superavitEntrenoKcal;
    datosUsuario.superavitDescansoKcal = superavitDescansoKcal;
    datosUsuario.caloriasEntreno = caloriasEntreno;
    datosUsuario.caloriasDescanso = caloriasDescanso;
    datosUsuario.tipoTermogenico = tipoTermogenico;
    
    // Calcular promedio de calorías según días de entrenamiento
    const numDiasEntreno = diasEntreno.length || 5;
    const numDiasDescanso = 7 - numDiasEntreno;
    const caloriasPromedio = Math.round((caloriasEntreno * numDiasEntreno + caloriasDescanso * numDiasDescanso) / 7);
    
    // Usar calorías promedio para el cálculo tradicional (mantener compatibilidad)
    let calorias = caloriasPromedio;
    
    // Calcular macronutrientes basados en promedio
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
    
    // Calcular macronutrientes diferenciados para días de entreno y descanso
    // Usando distribución estándar: 50% carbohidratos, 30% grasas, 20% proteínas
    const porcentajeCarbs = 0.50;
    const porcentajeGrasas = 0.30;
    const porcentajeProteinas = 0.20;
    
    // Macronutrientes día de entreno
    const carbsEntreno = Math.round((caloriasEntreno * porcentajeCarbs) / 4);
    const grasasEntreno = Math.round((caloriasEntreno * porcentajeGrasas) / 9);
    const proteinasEntreno = Math.round((caloriasEntreno * porcentajeProteinas) / 4);
    
    // Macronutrientes día de descanso
    const carbsDescanso = Math.round((caloriasDescanso * porcentajeCarbs) / 4);
    const grasasDescanso = Math.round((caloriasDescanso * porcentajeGrasas) / 9);
    const proteinasDescanso = Math.round((caloriasDescanso * porcentajeProteinas) / 4);
    
    // Calcular g/kg corporal
    const carbsEntrenogkg = (carbsEntreno / peso).toFixed(2);
    const grasasEntrenogkg = (grasasEntreno / peso).toFixed(2);
    const proteinasEntrenogkg = (proteinasEntreno / peso).toFixed(2);
    
    const carbsDescansogkg = (carbsDescanso / peso).toFixed(2);
    const grasasDescansogkg = (grasasDescanso / peso).toFixed(2);
    const proteinasDescansogkg = (proteinasDescanso / peso).toFixed(2);
    
    // Guardar macronutrientes diferenciados
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
    
    datosUsuario.calorias = calorias;
    datosUsuario.caloriasPromedio = caloriasPromedio;
    datosUsuario.proteinas = proteinas;
    datosUsuario.grasas = grasas;
    datosUsuario.carbohidratos = carbohidratos;
    datosUsuario.imc = (peso / Math.pow(altura / 100, 2)).toFixed(1);
    
    window.datosUsuario = datosUsuario; // Actualizar referencia global
    
    document.getElementById('calorias').value = calorias;
    document.getElementById('proteinas').value = proteinas;
    document.getElementById('grasas').value = grasas;
    document.getElementById('carbohidratos').value = carbohidratos;
}

// Hacer función global para uso desde otros módulos
window.mostrarResultados = function() {
    const resultadosDiv = document.getElementById('resultados');
    
    const fechaHoy = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const fechaGenElem = document.getElementById('fecha-generacion');
    if (fechaGenElem) {
        fechaGenElem.textContent = fechaHoy;
    }
    
    mostrarTablaMacros();
    mostrarInfoUsuario();
    mostrarDistribucionEntrenos();
    mostrarCalculosDetallados();
    mostrarMacronutrientesDistribucion();
    mostrarPlanAlimentacion();
    mostrarProhibiciones();
    
    resultadosDiv.classList.remove('oculto');
    
    setTimeout(() => {
        inicializarBotones();
    }, 100);
    
    setTimeout(() => {
        resultadosDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
    
    mostrarNotificacion('✅ Plan de alimentación generado correctamente', 'success');
};

// Alias para compatibilidad
const mostrarResultados = window.mostrarResultados;

function mostrarTablaMacros() {
    const tbody = document.getElementById('tabla-macros-body');
    const { calorias, proteinas, grasas, carbohidratos } = datosUsuario;
    
    // Validar que las variables existan
    const caloriasVal = calorias || 0;
    const proteinasVal = proteinas || 0;
    const grasasVal = grasas || 0;
    const carbohidratosVal = carbohidratos || 0;
    
    const proteinasPercent = caloriasVal > 0 ? Math.round((proteinasVal * 4 / caloriasVal) * 100) : 0;
    const grasasPercent = caloriasVal > 0 ? Math.round((grasasVal * 9 / caloriasVal) * 100) : 0;
    const carbohidratosPercent = caloriasVal > 0 ? Math.round((carbohidratosVal * 4 / caloriasVal) * 100) : 0;
    
    // Obtener consumo real si existe tablaEditable
    let consumido = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
    if (window.tablaEditable) {
        consumido = obtenerConsumidoActual();
    }
    
    tbody.innerHTML = `
        <tr id="macro-calorias">
            <td>CALORÍAS</td>
            <td>${caloriasVal} kcal</td>
            <td><input type="number" class="ajuste-manual-input" id="ajuste-calorias" placeholder="${caloriasVal}" value="${caloriasVal}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('calorias', this.value)"></td>
            <td id="seleccionado-calorias">${caloriasVal} kcal</td>
            <td>100%</td>
            <td id="consumido-calorias" style="font-weight:bold;">${consumido.calorias} kcal</td>
            <td id="estado-calorias">${obtenerEstadoMacro(consumido.calorias, caloriasVal)}</td>
        </tr>
        <tr id="macro-proteinas">
            <td>PROTEÍNAS</td>
            <td>${proteinasVal}g</td>
            <td><input type="number" class="ajuste-manual-input" id="ajuste-proteinas" placeholder="${proteinasVal}" value="${proteinasVal}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('proteinas', this.value)"></td>
            <td id="seleccionado-proteinas">${proteinasVal}g</td>
            <td>${proteinasPercent}%</td>
            <td id="consumido-proteinas" style="font-weight:bold;">${consumido.proteinas}g</td>
            <td id="estado-proteinas">${obtenerEstadoMacro(consumido.proteinas, proteinasVal)}</td>
        </tr>
        <tr id="macro-grasas">
            <td>GRASAS</td>
            <td>${grasasVal}g</td>
            <td><input type="number" class="ajuste-manual-input" id="ajuste-grasas" placeholder="${grasasVal}" value="${grasasVal}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('grasas', this.value)"></td>
            <td id="seleccionado-grasas">${grasasVal}g</td>
            <td>${grasasPercent}%</td>
            <td id="consumido-grasas" style="font-weight:bold;">${consumido.grasas}g</td>
            <td id="estado-grasas">${obtenerEstadoMacro(consumido.grasas, grasasVal)}</td>
        </tr>
        <tr id="macro-carbohidratos">
            <td>CARBOHIDRATOS</td>
            <td>${carbohidratosVal}g</td>
            <td><input type="number" class="ajuste-manual-input" id="ajuste-carbohidratos" placeholder="${carbohidratosVal}" value="${carbohidratosVal}" style="width:80px;padding:4px;border:1px solid #90ee90;border-radius:4px;" onchange="ajustarMacroManual('carbohidratos', this.value)"></td>
            <td id="seleccionado-carbohidratos">${carbohidratosVal}g</td>
            <td>${carbohidratosPercent}%</td>
            <td id="consumido-carbohidratos" style="font-weight:bold;">${consumido.carbohidratos}g</td>
            <td id="estado-carbohidratos">${obtenerEstadoMacro(consumido.carbohidratos, carbohidratosVal)}</td>
        </tr>
    `;
    
    // Configurar actualización periódica
    configurarActualizacionMacros();
}

function obtenerConsumidoActual() {
    if (!window.tablaEditable) return { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
    
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
}

function obtenerEstadoMacro(consumido, objetivo) {
    if (!objetivo || objetivo === 0) return '<span style="color:#999;">-</span>';
    
    const porcentaje = (consumido / objetivo) * 100;
    
    if (porcentaje < 80) {
        return `<span style="color:#ffc107;font-weight:bold;">⚠️ ${porcentaje.toFixed(0)}%</span>`;
    } else if (porcentaje >= 80 && porcentaje <= 120) {
        return `<span style="color:#28a745;font-weight:bold;">✅ ${porcentaje.toFixed(0)}%</span>`;
    } else {
        return `<span style="color:#dc3545;font-weight:bold;">🔥 ${porcentaje.toFixed(0)}%</span>`;
    }
}

function actualizarConsumidoEnTabla() {
    const consumido = obtenerConsumidoActual();
    const { calorias, proteinas, grasas, carbohidratos } = datosUsuario;
    
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
    
    if (estadoCal) estadoCal.innerHTML = obtenerEstadoMacro(consumido.calorias, calorias);
    if (estadoProt) estadoProt.innerHTML = obtenerEstadoMacro(consumido.proteinas, proteinas);
    if (estadoGras) estadoGras.innerHTML = obtenerEstadoMacro(consumido.grasas, grasas);
    if (estadoCarb) estadoCarb.innerHTML = obtenerEstadoMacro(consumido.carbohidratos, carbohidratos);
    
    // Colorear filas según estado
    colorearFilaMacro('macro-calorias', consumido.calorias, calorias);
    colorearFilaMacro('macro-proteinas', consumido.proteinas, proteinas);
    colorearFilaMacro('macro-grasas', consumido.grasas, grasas);
    colorearFilaMacro('macro-carbohidratos', consumido.carbohidratos, carbohidratos);
}

function colorearFilaMacro(rowId, consumido, objetivo) {
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
}

function configurarActualizacionMacros() {
    // Actualizar cada 2 segundos cuando esté en modo manual
    if (window.intervalMacros) clearInterval(window.intervalMacros);
    
    window.intervalMacros = setInterval(() => {
        if (window.tablaEditable) {
            actualizarConsumidoEnTabla();
        }
    }, 2000);
    
    // Actualizar inmediatamente
    setTimeout(() => actualizarConsumidoEnTabla(), 500);
}

function ajustarMacroManual(macro, valor) {
    const numValor = parseFloat(valor);
    if (isNaN(numValor) || numValor < 0) {
        alert('Por favor introduce un valor numérico válido');
        return;
    }
    
    // Actualizar el valor seleccionado
    const seleccionadoElem = document.getElementById(`seleccionado-${macro}`);
    if (macro === 'calorias') {
        seleccionadoElem.textContent = Math.round(numValor) + ' kcal';
        // Actualizar datosUsuario
        datosUsuario.calorias = Math.round(numValor);
        
        // Recalcular porcentajes de otros macros
        actualizarPorcentajesMacros();
    } else {
        seleccionadoElem.textContent = numValor.toFixed(1) + 'g';
        // Actualizar datosUsuario
        datosUsuario[macro] = numValor;
    }
    
    // Notificar cambio
    console.log(`✅ Macro ${macro} ajustado a: ${numValor}`);
    
    // Opcional: mostrar notificación visual
    if (window.mostrarNotificacion) {
        window.mostrarNotificacion(`✅ ${macro} ajustado a ${numValor}${macro === 'calorias' ? ' kcal' : 'g'}`, 'success');
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
    const { nombre, fechaRegistro, sexo, edad, peso, altura, tipoPersona, imc, sexo: sexoUsuario } = datosUsuario;
    
    // Validar que tipoPersona exista
    const tipoPersonaFormateado = tipoPersona ? (tipoPersona.charAt(0).toUpperCase() + tipoPersona.slice(1).replace('-', ' ')) : 'No especificado';
    
    // Calcular TMB (Tasa Metabólica Basal) con fórmula de Mifflin-St Jeor
    let tmb;
    if (sexoUsuario === 'masculino') {
        tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
    tmb = Math.round(tmb);
    
    // Factores de actividad
    const factoresActividad = {
        sedentario: { factor: 1.2, desc: "Poco o ningún ejercicio" },
        ligero: { factor: 1.375, desc: "Ejercicio ligero (1-3 días/semana)" },
        moderado: { factor: 1.55, desc: "Ejercicio moderado (3-5 días/semana)" },
        activo: { factor: 1.725, desc: "Ejercicio intenso (6-7 días/semana)" },
        muyActivo: { factor: 1.9, desc: "Ejercicio muy intenso (2 veces/día)" }
    };
    
    tbody.innerHTML = `
        <tr>
            <td>${nombre}</td>
            <td>${new Date(fechaRegistro).toLocaleDateString('es-ES')}</td>
            <td>${sexo}</td>
            <td>${edad}</td>
            <td>${peso}</td>
            <td>${altura}</td>
            <td>${tipoPersonaFormateado}</td>
            <td>${imc}</td>
        </tr>
    `;
    
    // Agregar calculadora TMB visual después de la tabla
    const tmbContainer = document.getElementById('tmb-calculator');
    if (tmbContainer) {
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
        actividadFisicaDeporte, tipoTermogenico
    } = datosUsuario;
    
    if (!tmb) return; // Si no hay cálculos, no mostrar
    
    // Mapeo de descripciones
    const descActividad = {
        'sedentario': 'Sedentario: trabajo de escritorio sin ejercicio',
        'ligera': 'Actividad ligera: 1-3 días de entrenamiento semanal o trabajo físico',
        'moderada': 'Actividad moderada: 3-5 días de entrenamiento semanal',
        'intensa': 'Actividad intensa: 6-7 días de entrenamiento semanal',
        'muy-intensa': 'Actividad muy intensa: doble entrenamiento diario + ejercicios de gran demanda de fuerza'
    };
    
    const descTermogenico = {
        'sedentaria': 'Persona sedentaria: 10%',
        'no-sedentaria': 'Persona no sedentaria: 15%',
        'culturista': 'Culturista en estado de competición: 20%'
    };
    
    const html = `
        <tr>
            <td style="font-weight: 600; padding: 10px; background: #f0f9ff;">Metabolismo basal (TMB)</td>
            <td style="padding: 10px; font-weight: 700;">${tmb} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600; padding: 10px;">Efecto termogénico de los alimentos (TEF)</td>
            <td style="padding: 10px;">${tef} kcal (${porcentajeTEF}% - ${descTermogenico[tipoTermogenico] || 'No sedentaria'})</td>
        </tr>
        <tr>
            <td style="font-weight: 600; padding: 10px;">Actividad física del deporte</td>
            <td style="padding: 10px;">${actividadFisicaDeporteKcal} kcal (${descActividad[actividadFisicaDeporte] || 'Moderada'})</td>
        </tr>
        <tr>
            <td style="font-weight: 600; padding: 10px; background: #f0f9ff;">Total gasto calórico día de entreno</td>
            <td style="padding: 10px; font-weight: 700;">${gastoBaseEntreno} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600; padding: 10px; background: #f0f9ff;">Total gasto calórico día de descanso</td>
            <td style="padding: 10px; font-weight: 700;">${gastoBaseDescanso} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600; padding: 10px;">${superavitEntreno >= 0 ? 'Superávit' : 'Déficit'} día de entreno</td>
            <td style="padding: 10px;">${superavitEntreno}% (${superavitEntrenoKcal >= 0 ? '+' : ''}${superavitEntrenoKcal} kcal)</td>
        </tr>
        <tr>
            <td style="font-weight: 600; padding: 10px;">${superavitDescanso >= 0 ? 'Superávit' : 'Déficit'} día de descanso</td>
            <td style="padding: 10px;">${superavitDescanso}% (${superavitDescansoKcal >= 0 ? '+' : ''}${superavitDescansoKcal} kcal)</td>
        </tr>
        <tr style="background: #dbeafe;">
            <td style="font-weight: 700; padding: 12px; font-size: 1.1em;">Ingesta calórica total día de entreno</td>
            <td style="padding: 12px; font-weight: 900; font-size: 1.2em; color: #1e40af;">${caloriasEntreno} kcal</td>
        </tr>
        <tr style="background: #f3f4f6;">
            <td style="font-weight: 700; padding: 12px; font-size: 1.1em;">Ingesta calórica total día de descanso</td>
            <td style="padding: 12px; font-weight: 900; font-size: 1.2em; color: #374151;">${caloriasDescanso} kcal</td>
        </tr>
    `;
    
    tbody.innerHTML = html;
}

function mostrarMacronutrientesDistribucion() {
    const tbody = document.getElementById('tabla-macros-distribucion-body');
    if (!tbody) return;
    
    const {
        carbsEntrenogkg, grasasEntrenogkg, proteinasEntrenogkg,
        carbsDescansogkg, grasasDescansogkg, proteinasDescansogkg
    } = datosUsuario;
    
    if (!carbsEntrenogkg) return; // Si no hay cálculos, no mostrar
    
    const html = `
        <tr>
            <td style="font-weight: 700; padding: 10px;">HIDRATOS</td>
            <td style="padding: 10px; font-weight: 600;">50%</td>
            <td style="padding: 10px; font-weight: 700; color: #1e40af;">${carbsEntrenogkg} g/kg</td>
            <td style="padding: 10px; font-weight: 700; color: #374151;">${carbsDescansogkg} g/kg</td>
        </tr>
        <tr>
            <td style="font-weight: 700; padding: 10px;">GRASAS</td>
            <td style="padding: 10px; font-weight: 600;">30%</td>
            <td style="padding: 10px; font-weight: 700; color: #1e40af;">${grasasEntrenogkg} g/kg</td>
            <td style="padding: 10px; font-weight: 700; color: #374151;">${grasasDescansogkg} g/kg</td>
        </tr>
        <tr>
            <td style="font-weight: 700; padding: 10px;">PROTEÍNAS</td>
            <td style="padding: 10px; font-weight: 600;">20%</td>
            <td style="padding: 10px; font-weight: 700; color: #1e40af;">${proteinasEntrenogkg} g/kg</td>
            <td style="padding: 10px; font-weight: 700; color: #374151;">${proteinasDescansogkg} g/kg</td>
        </tr>
    `;
    
    tbody.innerHTML = html;
}

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
            
            // Inicializar tablas con filas vacías después de insertar el HTML
            setTimeout(() => {
                if (typeof window.tablaEditable.inicializarTablasVacias === 'function') {
                    window.tablaEditable.inicializarTablasVacias(3); // 3 filas vacías por comida
                    console.log('✅ Tabla editable inicializada correctamente');
                } else {
                    console.error('❌ Método inicializarTablasVacias no disponible');
                }
            }, 150);
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

function mostrarPlanAlimentacion() {
    const planDiv = document.getElementById('plan-alimentacion');
    const { objetivo, duracion, modoGeneracion } = datosUsuario;
    
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
    
    // Verificar si hay base de datos ampliada disponible
    let planSemana;
    if (window.generarPlanVariado && window.baseDatosAlimentos) {
        // Usar generador variado con base de datos ampliada
        planSemana = window.generarPlanVariado(objetivo, duracion);
    } else {
        // Usar plan estático original y extender según duración
        const semanaBase = alimentosPorObjetivo[objetivo].semana;
        planSemana = [];
        
        // Determinar cuántas semanas necesitamos
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
            semanas = 1;
        }
        
        // Duplicar la semana base según necesidad
        for (let s = 0; s < semanas; s++) {
            // Crear copias con variaciones menores
            semanaBase.forEach((diaOriginal, diaIndex) => {
                const diaCopia = JSON.parse(JSON.stringify(diaOriginal));
                planSemana.push(diaCopia);
            });
        }
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
    
    // Calcular hidratación recomendada
    const hidratacionRecomendada = Math.round((datosUsuario.peso * 0.033 + 0.5) * 10) / 10;
    htmlPlan += `
        <div class="hidratacion-section" style="margin-top: 12px; padding: 12px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 8px; border-left: 4px solid #2196f3;">
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
}

// Función helper para detectar si un día es de descanso
function esDiaDescanso(nombreDia) {
    if (!datosUsuario.diasEntreno || datosUsuario.diasEntreno.length === 0) {
        return false; // Si no hay días seleccionados, todos son de entreno por defecto
    }
    
    // Normalizar el nombre del día: convertir a minúsculas y quitar tildes para coincidir con los valores del formulario
    // El formulario guarda: "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" (sin tildes)
    const normalizarDia = (dia) => {
        const diaUpper = dia.toUpperCase();
        // Mapeo que normaliza a los valores exactos que se guardan en el formulario
        const mapaNormalizado = {
            'LUNES': 'lunes',
            'MARTES': 'martes',
            'MIÉRCOLES': 'miercoles',  // Normalizar a sin tilde
            'MIERCOLES': 'miercoles',  // Ya sin tilde
            'JUEVES': 'jueves',
            'VIERNES': 'viernes',
            'SÁBADO': 'sabado',        // Normalizar a sin tilde
            'SABADO': 'sabado',        // Ya sin tilde
            'DOMINGO': 'domingo'
        };
        
        // Primero intentar con el mapeo directo
        if (mapaNormalizado[diaUpper]) {
            return mapaNormalizado[diaUpper];
        }
        
        // Si no está en el mapeo, normalizar manualmente quitando tildes
        let normalizado = dia.toLowerCase()
            .replace(/á/g, 'a')
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ú/g, 'u');
        
        return normalizado;
    };
    
    const valorDia = normalizarDia(nombreDia);
    return !datosUsuario.diasEntreno.includes(valorDia);
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
            <td class="nombre-comida">🥤 MEDIODÍA</td>
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
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para el formulario
    const dietForm = document.getElementById('dietForm');
    if (dietForm) {
        dietForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validar que el usuario esté autenticado
            if (!window.authManager || !window.authManager.isAuthenticated()) {
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
            const prohibicionesAdicionales = document.getElementById('prohibiciones').value;
            const todasLasProhibiciones = [...intolerancias, prohibicionesAdicionales].filter(p => p.trim() !== '').join(', ');
            
            // Obtener días de entrenamiento seleccionados
            const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]:checked');
            const diasEntreno = Array.from(diasEntrenoCheckboxes).map(cb => cb.value);
            
            datosUsuario = {
                nombre: document.getElementById('nombre').value,
                fechaRegistro: document.getElementById('fechaRegistro').value,
                sexo: document.getElementById('sexo').value,
                edad: parseInt(document.getElementById('edad').value),
                altura: parseInt(document.getElementById('altura').value),
                peso: parseFloat(document.getElementById('peso').value),
                tipoPersona: document.getElementById('tipoPersona').value,
                objetivo: document.getElementById('objetivo').value,
                modoGeneracion: document.getElementById('modoGeneracion').value || 'automatico',
                prohibiciones: todasLasProhibiciones,
                intolerancias: intolerancias,
                preferencias: preferencias, // Guardar preferencias dietéticas
                duracion: document.getElementById('duracion').value,
                diasEntreno: diasEntreno,
                actividadFisicaDeporte: document.getElementById('actividadFisicaDeporte')?.value || 'moderada',
                tipoTermogenico: document.getElementById('tipoTermogenico')?.value || 'no-sedentaria',
                superavitEntreno: parseFloat(document.getElementById('superavitEntreno')?.value || 5),
                superavitDescanso: parseFloat(document.getElementById('superavitDescanso')?.value || 5)
            };
            
            calcularMacronutrientes();
            window.datosUsuario = datosUsuario; // Actualizar referencia global
            mostrarResultados();
        });
    }
    
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
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
});

function inicializarBotones() {
    // Botón guardar dieta
    const btnGuardar = document.getElementById('btnGuardar');
    if (btnGuardar) {
        btnGuardar.replaceWith(btnGuardar.cloneNode(true));
        const nuevoBtnGuardar = document.getElementById('btnGuardar');
        
        nuevoBtnGuardar.addEventListener('click', async function() {
            const boton = this;
            const textoOriginal = boton.innerHTML;
            
            if (!window.authManager || !window.authManager.isAuthenticated()) {
                window.uiManager?.openModal();
                mostrarNotificacion('⚠️ Debes iniciar sesión para guardar dietas', 'error');
                return;
            }
            
            boton.innerHTML = '⏳ Guardando...';
            boton.disabled = true;
            
            try {
                // Si hay un cliente asociado, guardar en su historial
                if (window.clienteIdDieta && window.clienteService) {
                    await window.clienteService.agregarDieta(window.clienteIdDieta, datosUsuario);
                }
                
                const resultado = await window.dietaService.guardarDieta(datosUsuario);
                
                if (resultado.success) {
                    mostrarNotificacion('✅ Dieta guardada correctamente', 'success');
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
        
        nuevoBtnEditar.addEventListener('click', function() {
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
     * @returns {string}
     */
    function generarCSSPDF() {
        return `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Arial', 'Helvetica', sans-serif;
                font-size: 11pt;
                line-height: 1.6;
                color: #000;
                background: #fff;
                padding: 20mm;
            }
            .header {
                border-bottom: 2px solid #000;
                padding-bottom: 10px;
                margin-bottom: 15px;
            }
            .header-top {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 12px;
            }
            .nombre-profesional {
                font-size: 24pt;
                font-weight: 900;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin: 0 0 8px 0;
                color: #000;
                line-height: 1.2;
            }
            .contacto {
                font-size: 13pt;
                color: #000;
                display: flex;
                gap: 20px;
                font-weight: 600;
                margin-top: 8px;
            }
            .contacto span {
                display: inline-block;
                white-space: nowrap;
            }
            .fecha {
                font-size: 11pt;
                color: #333;
                font-weight: 500;
            }
            .cliente-info {
                margin-top: 14px;
            }
            .cliente-nombre {
                font-weight: 700;
                font-size: 16pt;
                margin-bottom: 6px;
                color: #000;
                line-height: 1.3;
            }
            .cliente-datos {
                font-size: 11pt;
                color: #000;
                font-weight: 500;
                line-height: 1.5;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
                font-size: 10pt;
            }
            th {
                border: 1px solid #000;
                padding: 10px;
                text-align: left;
                font-weight: 700;
                background: #fff;
                color: #000;
                font-size: 10.5pt;
            }
            td {
                border: 1px solid #666;
                padding: 8px;
                text-align: left;
                background: #fff;
                color: #000;
                font-size: 10pt;
                line-height: 1.4;
            }
            .dia-plan {
                margin: 18px 0;
                page-break-inside: avoid;
                border: 1px solid #000;
                padding: 12px;
            }
            .dia-titulo {
                font-weight: 700;
                font-size: 13pt;
                text-transform: uppercase;
                margin-bottom: 10px;
                border-bottom: 1px solid #000;
                padding-bottom: 6px;
                line-height: 1.3;
            }
            .comida-row {
                margin: 8px 0;
                line-height: 1.5;
            }
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
            }
        `;
    }
    
    /**
     * Genera el header del PDF con información profesional y del cliente
     * @param {object} datos - Datos del cliente
     * @param {string} fecha - Fecha formateada
     * @returns {string}
     */
    function generarHeaderPDF(datos, fecha) {
        const nombreCliente = datos.nombre || 'Cliente';
        const subtags = [];
        if (datos.edad) subtags.push(`Edad: ${datos.edad}`);
        if (datos.altura) subtags.push(`Altura: ${datos.altura} cm`);
        if (datos.peso) subtags.push(`Peso: ${datos.peso} kg`);
        if (datos.imc) subtags.push(`IMC: ${datos.imc}`);
        if (datos.sexo) subtags.push(`Sexo: ${datos.sexo}`);
        if (datos.tipoPersona) subtags.push(`Tipo: ${datos.tipoPersona}`);
        if (datos.objetivo) subtags.push(`Objetivo: ${datos.objetivo}`);
        
        return `
            <div class="header">
                <div class="header-top">
                    <div style="flex: 1;">
                        <div class="nombre-profesional">MAIKA PORCUNA</div>
                        <div class="contacto">
                            <span>Maikafit1977@gmail.com</span>
                            <span>+34 650 229 987</span>
                        </div>
                    </div>
                    <div class="fecha">${fecha}</div>
                </div>
                <div class="cliente-info">
                    <div class="cliente-nombre">${nombreCliente}</div>
                    <div class="cliente-datos">${subtags.join(' · ')}</div>
                </div>
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
     * Genera el HTML del plan desde tabla editable
     * @returns {string}
     */
    function generarHTMLDesdeTablaEditable() {
        const plan = window.tablaEditable.planSemana;
        const dias = window.tablaEditable.dias || ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        const comidas = window.tablaEditable.comidas || ['Desayuno', 'Media Mañana', 'Comida', 'Merienda', 'Cena'];
        let html = '';
        
        dias.forEach(dia => {
            const datosDia = plan[dia] || {};
            html += `<div class="dia-plan"><div class="dia-titulo">${dia}</div>`;
            comidas.forEach(comida => {
                const items = datosDia[comida] || [];
                if (items.length > 0) {
                    html += `<div class="comida-row"><span class="comida-nombre">${comida}:</span> `;
                    html += items.map(i => `${i.gramos || 0}g ${i.alimento || i.nombre || ''}`).join(', ');
                    html += `</div>`;
                }
            });
            html += `</div>`;
        });
        
        return html;
    }
    
    /**
     * Genera el PDF usando html2canvas y jsPDF
     * @param {string} htmlPDF - HTML completo del documento
     * @param {string} nombreCliente - Nombre del cliente para el archivo
     */
    function generarArchivoPDF(htmlPDF, nombreCliente) {
        const win = window.open('', '_blank');
        if (!win) {
            alert('Por favor, permite las ventanas emergentes para generar el PDF.');
            return;
        }
        
        win.document.write(htmlPDF);
        win.document.close();
        
            setTimeout(() => {
                try {
                const bodyElement = win.document.body;
                html2canvas(bodyElement, {
                        scale: 2,
                        useCORS: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                    width: bodyElement.scrollWidth,
                    height: bodyElement.scrollHeight
                }).then(canvas => {
                        const imgData = canvas.toDataURL('image/png');
                        const { jsPDF } = window.jspdf;
                        const pdf = new jsPDF('p', 'mm', 'a4');
                        
                    const imgWidth = 210;
                    const pageHeight = 297;
                        const imgHeight = (canvas.height * imgWidth) / canvas.width;
                        
                        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                        
                        if (imgHeight > pageHeight) {
                            let heightLeft = imgHeight - pageHeight;
                            let position = -pageHeight;
                            while (heightLeft > 0) {
                                pdf.addPage();
                                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                                heightLeft -= pageHeight;
                                position -= pageHeight;
                            }
                        }
                        
                        const pdfBlob = pdf.output('blob');
                        const pdfUrl = URL.createObjectURL(pdfBlob);
                    const filename = `Dieta_${nombreCliente.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
                    
                    // Descargar PDF
                    const a = document.createElement('a');
                    a.href = pdfUrl;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    
                    setTimeout(() => URL.revokeObjectURL(pdfUrl), 100);
                    win.close();
                    mostrarNotificacion('✅ PDF generado y descargado', 'success');
                }).catch(error => {
                    console.error('Error generando PDF:', error);
                    mostrarNotificacion('❌ Error al generar el PDF', 'error');
                    win.close();
                });
            } catch (error) {
                console.error('Error:', error);
                mostrarNotificacion('❌ Error al generar el PDF', 'error');
                win.close();
            }
        }, 500);
    }
    
    /**
     * Función unificada para generar PDF profesional (blanco y negro, minimalista)
     * @param {string} fuente - 'principal' o 'tabla-editable'
     */
    window.generarPDFProfesional = function(fuente = 'principal') {
        // Validar librerías
        if (typeof html2pdf === 'undefined' || typeof html2canvas === 'undefined') {
            alert('Error: Las librerías PDF no están cargadas. Por favor, recarga la página.');
            return;
        }
        
        // Obtener datos según la fuente
        const { datos, contenidoOriginal, error } = obtenerDatosPDF(fuente);
        if (error) {
            alert(error);
            return;
        }
        
        // Construir HTML del PDF
        const fecha = new Date().toLocaleDateString('es-ES');
        const nombreCliente = datos.nombre || 'Cliente';
        const headerHTML = generarHeaderPDF(datos, fecha);
        const cssHTML = generarCSSPDF();
        
        let htmlPDF = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Plan de Alimentación - ${nombreCliente}</title>
                <style>${cssHTML}</style>
            </head>
            <body>
                ${headerHTML}
        `;
        
        // Agregar contenido según la fuente
        if (fuente === 'principal' && contenidoOriginal) {
            const clone = contenidoOriginal.cloneNode(true);
            procesarContenidoParaPDF(clone);
            htmlPDF += clone.innerHTML;
        } else if (fuente === 'tabla-editable') {
            htmlPDF += generarHTMLDesdeTablaEditable();
        }
        
        htmlPDF += `
            </body>
            </html>
        `;
        
        // Generar y descargar PDF
        generarArchivoPDF(htmlPDF, nombreCliente);
    };
    
    // Botón descargar PDF
    const btnDescargar = document.getElementById('btnDescargar');
    if (btnDescargar) {
        btnDescargar.replaceWith(btnDescargar.cloneNode(true));
        const nuevoBtn = document.getElementById('btnDescargar');
        
        nuevoBtn.addEventListener('click', function() {
            window.generarPDFProfesional('principal');
        });
    }
    
    const btnNuevo = document.getElementById('btnNuevo');
    if (btnNuevo) {
        btnNuevo.replaceWith(btnNuevo.cloneNode(true));
        const nuevoBtn2 = document.getElementById('btnNuevo');
        
        nuevoBtn2.addEventListener('click', function() {
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
}

// Hacer función global
window.mostrarNotificacion = function(mensaje, tipo = 'info') {
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
window.mostrarPreviewPDF = function(pdfUrl, pdfBlob, filename) {
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
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 24px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: bold;
    `;
    closeBtn.onmouseover = () => closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
    closeBtn.onmouseout = () => closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
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
    
    // Botón Email
    const btnEmail = document.createElement('button');
    btnEmail.innerHTML = '📧 Enviar por Email';
    btnEmail.style.cssText = `
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
    `;
    btnEmail.onmouseover = () => {
        btnEmail.style.transform = 'translateY(-2px)';
        btnEmail.style.boxShadow = '0 6px 20px rgba(79, 172, 254, 0.5)';
    };
    btnEmail.onmouseout = () => {
        btnEmail.style.transform = 'translateY(0)';
        btnEmail.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.4)';
    };
    btnEmail.onclick = () => {
        // Primero descargar el archivo
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = filename;
        a.click();
        
        // Abrir cliente de email
        const subject = encodeURIComponent('Plan de Dieta Personalizado');
        const body = encodeURIComponent('Adjunto encontrarás tu plan de dieta personalizado en formato PDF.');
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        
        mostrarNotificacion('📧 Adjunta el PDF descargado a tu email', 'info');
    };
    
    // Agregar botones al footer
    footer.appendChild(btnDescargar);
    footer.appendChild(btnNuevaVentana);
    footer.appendChild(btnWhatsApp);
    footer.appendChild(btnEmail);
    
    // Ensamblar modal
    modalContent.appendChild(header);
    modalContent.appendChild(pdfViewer);
    modalContent.appendChild(footer);
    modal.appendChild(modalContent);
    
    // Agregar al body
    document.body.appendChild(modal);
    
    // Cerrar con ESC
    document.addEventListener('keydown', function cerrarConEsc(e) {
        if (e.key === 'Escape' && document.getElementById('pdfPreviewModal')) {
            URL.revokeObjectURL(pdfUrl);
            document.body.removeChild(modal);
            document.removeEventListener('keydown', cerrarConEsc);
        }
    });
};

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
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
