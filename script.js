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
    const { edad, sexo, altura, peso, objetivo, tipoPersona } = datosUsuario;
    
    let tmb;
    if (sexo === 'Hombre') {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
    } else {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    }
    
    let factorActividad;
    switch(tipoPersona) {
        case 'sedentaria': factorActividad = 1.2; break;
        case 'activa': factorActividad = 1.55; break;
        case 'muy-activa': factorActividad = 1.725; break;
        default: factorActividad = 1.2;
    }
    
    let calorias = tmb * factorActividad;
    
    if (objetivo === 'aumentar') {
        calorias += 400;
    } else if (objetivo === 'adelgazar') {
        calorias -= 500;
    }
    
    calorias = Math.round(calorias);
    
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
    
    datosUsuario.calorias = calorias;
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
    mostrarPlanAlimentacion();
    mostrarProhibiciones();
    mostrarPlanEjercicio();
    
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
    
    planDiv.innerHTML = htmlPlan;
}

function generarDiaHTML(dia, editable = false) {
    const comidas = dia.comidas;
    const editableAttr = editable ? 'contenteditable="true"' : '';
    const editarClass = editable ? ' editable-alimento' : '';
    
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
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.desayuno.alimentos.map(alimento => 
                                    `<li class="alimento-item" ${editableAttr}>${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.desayuno.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.desayuno.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.desayuno.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.desayuno.grasas}</span>g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🥤 Mediodía</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.medioDia.alimentos.map(alimento => 
                                    `<li class="alimento-item" ${editableAttr}>${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.medioDia.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.medioDia.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.medioDia.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.medioDia.grasas}</span>g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🍽️ Comida</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.almuerzo.alimentos.map(alimento => 
                                    `<li class="alimento-item" ${editableAttr}>${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.almuerzo.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.almuerzo.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.almuerzo.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.almuerzo.grasas}</span>g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🥙 Merienda</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.merienda.alimentos.map(alimento => 
                                    `<li class="alimento-item" ${editableAttr}>${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.merienda.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.merienda.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.merienda.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.merienda.grasas}</span>g
                            </div>
                        </td>
                        <td>
                            <div class="comida-header">🌙 Cena</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.cena.alimentos.map(alimento => 
                                    `<li class="alimento-item" ${editableAttr}>${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.cena.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.cena.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.cena.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.cena.grasas}</span>g
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            ${editable ? `
                <div class="edicion-comida">
                    <button class="btn-agregar-alimento" onclick="agregarAlimento(this)">➕ Agregar Alimento</button>
                    <button class="btn-eliminar-alimento" onclick="eliminarAlimentoSeleccionado(this)">➖ Eliminar Seleccionado</button>
                </div>
            ` : ''}
            
            <div class="menu-section">
                <h4>📋 MENÚ PERSONALIZADO</h4>
                <p>Este plan está diseñado específicamente para tu objetivo de ${datosUsuario.objetivo === 'aumentar' ? 'aumentar masa muscular' : datosUsuario.objetivo === 'adelgazar' ? 'perder peso' : 'mantener peso'}.</p>
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

function mostrarPlanEjercicio() {
    const planEjercicioDiv = document.getElementById('plan-ejercicio-content');
    const planEjercicioContainer = document.getElementById('plan-ejercicio-container');
    
    if (planEjercicioDiv && planEjercicioContainer) {
        if (datosUsuario.planEjercicio && datosUsuario.planEjercicio.trim() !== '') {
            planEjercicioDiv.textContent = datosUsuario.planEjercicio;
            planEjercicioContainer.style.display = 'block';
        } else {
            planEjercicioContainer.style.display = 'none';
        }
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
                duracion: document.getElementById('duracion').value,
                planEjercicio: document.getElementById('planEjercicio').value
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
            if (window.habilitarEdicionDieta) {
                window.habilitarEdicionDieta();
            } else {
                mostrarNotificacion('⚠️ Sistema de edición no disponible', 'error');
            }
        });
    }
    
    // Botón descargar PDF
    const btnDescargar = document.getElementById('btnDescargar');
    if (btnDescargar) {
        btnDescargar.replaceWith(btnDescargar.cloneNode(true));
        const nuevoBtn = document.getElementById('btnDescargar');
        
        nuevoBtn.addEventListener('click', function() {
            const boton = this;
            const textoOriginal = boton.innerHTML;
            
            boton.innerHTML = '⏳ Generando PDF...';
            boton.disabled = true;
            
            if (typeof html2pdf === 'undefined') {
                alert('Error: La librería html2pdf no está cargada. Por favor, recarga la página.');
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
                return;
            }
            
            // Crear contenedor temporal solo con contenido necesario para PDF
            const elementoOriginal = document.getElementById('pdf-content');
            
            if (!elementoOriginal) {
                alert('Error: No se encontró el contenido para generar el PDF.');
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
                return;
            }
            
            // Crear contenedor temporal con solo el contenido necesario
            const contenedorPDF = document.createElement('div');
            contenedorPDF.id = 'pdf-temp-content';
            contenedorPDF.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 210mm;
                padding: 10mm;
                font-size: 12pt;
                line-height: 1.6;
                color: #333;
                background: white;
                z-index: -1;
                visibility: visible;
                opacity: 1;
            `;
            
            // Copiar header
            const header = elementoOriginal.querySelector('.pdf-header');
            if (header) {
                const headerClone = header.cloneNode(true);
                headerClone.style.cssText = `
                    text-align: center;
                    padding: 15px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border-radius: 10px;
                    margin-bottom: 20px;
                `;
                headerClone.querySelector('h1').style.cssText = 'color: white; margin: 0; font-size: 24pt;';
                headerClone.querySelector('.subtitle').style.cssText = 'font-size: 14pt; margin-top: 5px; opacity: 0.9;';
                contenedorPDF.appendChild(headerClone);
            }
            
            // Copiar tabla de macronutrientes
            const macroTable = elementoOriginal.querySelector('.macro-table');
            if (macroTable) {
                const macroClone = macroTable.cloneNode(true);
                macroClone.style.cssText = 'margin-bottom: 20px;';
                macroClone.querySelector('h3').style.cssText = 'font-size: 16pt; margin-bottom: 10px; color: #333;';
                const tabla = macroClone.querySelector('table');
                if (tabla) {
                    tabla.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 11pt;';
                    tabla.querySelectorAll('th, td').forEach(celda => {
                        celda.style.cssText = 'padding: 8px; border: 1px solid #ddd; text-align: center; font-size: 11pt;';
                    });
                }
                contenedorPDF.appendChild(macroClone);
            }
            
            // Copiar información del usuario
            const infoUsuario = elementoOriginal.querySelector('.info-usuario-table');
            if (infoUsuario) {
                const infoClone = infoUsuario.cloneNode(true);
                infoClone.style.cssText = 'margin-bottom: 20px;';
                infoClone.querySelector('h3').style.cssText = 'font-size: 16pt; margin-bottom: 10px; color: #333;';
                const tabla = infoClone.querySelector('table');
                if (tabla) {
                    tabla.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 11pt;';
                    tabla.querySelectorAll('th, td').forEach(celda => {
                        celda.style.cssText = 'padding: 8px; border: 1px solid #ddd; text-align: center; font-size: 11pt;';
                    });
                }
                contenedorPDF.appendChild(infoClone);
            }
            
            // Copiar plan de alimentación completo
            const planAlimentacion = elementoOriginal.querySelector('#plan-alimentacion');
            if (planAlimentacion) {
                const planClone = planAlimentacion.cloneNode(true);
                planClone.style.cssText = 'margin-top: 20px;';
                
                // Mejorar estilos de cada día
                planClone.querySelectorAll('.dia-plan').forEach(dia => {
                    dia.style.cssText = `
                        background: #f8f9fa;
                        padding: 15px;
                        margin-bottom: 20px;
                        border-radius: 8px;
                        page-break-inside: avoid;
                        break-inside: avoid;
                    `;
                    dia.querySelector('h3').style.cssText = 'font-size: 14pt; color: #764ba2; margin-bottom: 10px; font-weight: bold;';
                    
                    // Mejorar tabla de comidas
                    const tablaComidas = dia.querySelector('.tabla-comidas');
                    if (tablaComidas) {
                        tablaComidas.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 10pt; margin: 10px 0;';
                        tablaComidas.querySelectorAll('th').forEach(th => {
                            th.style.cssText = 'padding: 6px; background: #667eea; color: white; border: 1px solid #ddd; font-size: 9pt; font-weight: bold;';
                        });
                        tablaComidas.querySelectorAll('td').forEach(td => {
                            td.style.cssText = 'padding: 6px; border: 1px solid #ddd; vertical-align: top; font-size: 9pt;';
                        });
                        tablaComidas.querySelectorAll('.comida-header').forEach(header => {
                            header.style.cssText = 'font-weight: bold; margin-bottom: 5px; font-size: 9pt;';
                        });
                        tablaComidas.querySelectorAll('.lista-alimentos').forEach(lista => {
                            lista.style.cssText = 'margin: 5px 0; padding-left: 15px; font-size: 8pt;';
                        });
                        tablaComidas.querySelectorAll('.macros-comida').forEach(macros => {
                            macros.style.cssText = 'font-size: 7pt; color: #666; margin-top: 5px;';
                        });
                    }
                    
                    // Ocultar secciones no necesarias
                    dia.querySelectorAll('.menu-section, .notas-section, .edicion-comida').forEach(seccion => {
                        seccion.style.display = 'none';
                    });
                });
                
                contenedorPDF.appendChild(planClone);
            }
            
            // Copiar nota de agua
            const notaAgua = elementoOriginal.querySelector('#nota-agua');
            if (notaAgua) {
                const notaAguaClone = notaAgua.cloneNode(true);
                notaAguaClone.style.cssText = `
                    margin-top: 20px;
                    padding: 15px;
                    background: #d1ecf1;
                    border-radius: 8px;
                    border-left: 4px solid #17a2b8;
                `;
                notaAguaClone.querySelector('h4').style.cssText = 'color: #0c5460; margin-bottom: 10px; font-size: 12pt;';
                notaAguaClone.querySelector('p').style.cssText = 'margin: 0; color: #0c5460; font-size: 10pt;';
                contenedorPDF.appendChild(notaAguaClone);
            }
            
            // Copiar plan de ejercicio
            const planEjercicioContainer = elementoOriginal.querySelector('#plan-ejercicio-container');
            if (planEjercicioContainer && planEjercicioContainer.style.display !== 'none') {
                const planEjercicioClone = planEjercicioContainer.cloneNode(true);
                planEjercicioClone.style.cssText = `
                    margin-top: 20px;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 10px;
                    border: 2px solid #667eea;
                `;
                planEjercicioClone.querySelector('h3').style.cssText = 'color: #667eea; margin-bottom: 15px; font-size: 14pt; font-weight: bold;';
                const contenidoEjercicio = planEjercicioClone.querySelector('#plan-ejercicio-content');
                if (contenidoEjercicio) {
                    contenidoEjercicio.style.cssText = 'white-space: pre-line; line-height: 1.8; font-size: 10pt; color: #333;';
                }
                contenedorPDF.appendChild(planEjercicioClone);
            }
            
            // Copiar footer
            const footer = elementoOriginal.querySelector('.pdf-footer');
            if (footer) {
                const footerClone = footer.cloneNode(true);
                footerClone.style.cssText = `
                    margin-top: 30px;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 10px;
                    text-align: center;
                    font-size: 9pt;
                    color: #666;
                    border-top: 3px solid #667eea;
                `;
                footerClone.querySelectorAll('p').forEach(p => {
                    p.style.cssText = 'margin: 3px 0; font-size: 9pt;';
                });
                contenedorPDF.appendChild(footerClone);
            }
            
            // Agregar al body temporalmente
            document.body.appendChild(contenedorPDF);
            
            // Forzar reflow para asegurar que el contenido se renderice
            void contenedorPDF.offsetHeight;
            
            // Esperar un momento para que los estilos se apliquen y el contenido se renderice
            setTimeout(() => {
                const opciones = {
                    margin: [8, 8, 8, 8],
                    filename: `Dieta_${datosUsuario.nombre.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { 
                        scale: 2,
                        useCORS: true,
                        letterRendering: true,
                        logging: false,
                        windowWidth: contenedorPDF.scrollWidth,
                        windowHeight: contenedorPDF.scrollHeight,
                        scrollX: 0,
                        scrollY: 0,
                        backgroundColor: '#ffffff',
                        allowTaint: true
                    },
                    jsPDF: { 
                        unit: 'mm', 
                        format: 'a4', 
                        orientation: 'portrait',
                        compress: true
                    },
                    pagebreak: { 
                        mode: ['css'],
                        avoid: ['.dia-plan']
                    }
                };
                
                html2pdf()
                    .set(opciones)
                    .from(contenedorPDF)
                    .save()
                    .then(function() {
                        // Eliminar contenedor temporal
                        if (document.body.contains(contenedorPDF)) {
                            document.body.removeChild(contenedorPDF);
                        }
                        boton.innerHTML = textoOriginal;
                        boton.disabled = false;
                        mostrarNotificacion('✅ PDF descargado correctamente', 'success');
                    })
                    .catch(function(error) {
                        console.error('Error al generar PDF:', error);
                        // Eliminar contenedor temporal en caso de error
                        if (document.body.contains(contenedorPDF)) {
                            document.body.removeChild(contenedorPDF);
                        }
                        boton.innerHTML = textoOriginal;
                        boton.disabled = false;
                        mostrarNotificacion('❌ Error al generar el PDF. Por favor, inténtalo de nuevo.', 'error');
                    });
            }, 100);
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
