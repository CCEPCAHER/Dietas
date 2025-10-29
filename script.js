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
    const { nombre, fechaRegistro, sexo, edad, peso, altura, tipoPersona, imc, sexo: sexoUsuario } = datosUsuario;
    
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
            <td>${tipoPersona.charAt(0).toUpperCase() + tipoPersona.slice(1).replace('-', ' ')}</td>
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
    
    // Agregar suplementación si está habilitada
    if (datosUsuario.incluirSuplementacion) {
        if (datosUsuario.suplementacionPersonalizada && datosUsuario.suplementacionPersonalizada.trim() !== '') {
            // Suplementación personalizada
            htmlPlan += `
                <div class="suplementacion-section" style="margin: 12px 0; padding: 12px; background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); border-radius: 8px; border-left: 4px solid #ff9800;">
                    <h3 style="color: #e65100; margin-bottom: 10px; font-size: 13pt; text-align: center;">💊 SUPLEMENTACIÓN PERSONALIZADA</h3>
                    <div style="background: white; padding: 10px; border-radius: 6px;">
                        <p style="margin: 0; color: #5d4037; font-size: 9pt; white-space: pre-wrap; line-height: 1.4;">${datosUsuario.suplementacionPersonalizada}</p>
                    </div>
                </div>
            `;
        } else {
            // Suplementación automática
            htmlPlan += generarSuplementacion(datosUsuario.objetivo);
        }
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

function generarDiaHTML(dia, editable = false) {
    const comidas = dia.comidas;
    const editableAttr = editable ? 'data-editable="true"' : '';
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
                        <td data-comida="desayuno">
                            <div class="comida-header">🍳 Desayuno</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.desayuno.alimentos.map((alimento, idx) => 
                                    editable ? 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="desayuno" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>` :
                                    `<li class="alimento-item">${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.desayuno.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.desayuno.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.desayuno.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.desayuno.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="medioDia">
                            <div class="comida-header">🥤 Mediodía</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.medioDia.alimentos.map((alimento, idx) => 
                                    editable ? 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="medioDia" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>` :
                                    `<li class="alimento-item">${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.medioDia.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.medioDia.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.medioDia.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.medioDia.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="almuerzo">
                            <div class="comida-header">🍽️ Comida</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.almuerzo.alimentos.map((alimento, idx) => 
                                    editable ? 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="almuerzo" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>` :
                                    `<li class="alimento-item">${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.almuerzo.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.almuerzo.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.almuerzo.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.almuerzo.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="merienda">
                            <div class="comida-header">🥙 Merienda</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.merienda.alimentos.map((alimento, idx) => 
                                    editable ? 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="merienda" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>` :
                                    `<li class="alimento-item">${alimento}</li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.merienda.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.merienda.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.merienda.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.merienda.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="cena">
                            <div class="comida-header">🌙 Cena</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.cena.alimentos.map((alimento, idx) => 
                                    editable ? 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="cena" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>` :
                                    `<li class="alimento-item">${alimento}</li>`
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
                    <p style="margin-bottom: 10px; font-weight: 600;">Para agregar un alimento, haz clic en el botón ✏️ junto a un alimento existente o escribe uno nuevo</p>
                </div>
            ` : ''}
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

// Función para generar recomendaciones de suplementación
function generarSuplementacion(objetivo) {
    const suplementos = {
        aumentar: {
            titulo: "💊 SUPLEMENTACIÓN RECOMENDADA PARA GANAR MASA MUSCULAR",
            basicos: [
                "• Proteína Whey (25-30g post-entreno) - Recuperación muscular",
                "• Creatina Monohidrato (5g/día) - Fuerza y volumen",
                "• BCAA's (5-10g durante/post-entreno) - Recuperación"
            ],
            opcionales: [
                "• Glutamina (5g post-entreno)",
                "• Beta-Alanina (3-5g pre-entreno)",
                "• Omega-3 (2-3g EPA/DHA con comidas)",
                "• Multivitamínico",
                "• Vitamina D3 (2000-4000 UI)"
            ],
            nota: "⚠️ Consulta con un profesional antes de iniciar cualquier suplementación."
        },
        adelgazar: {
            titulo: "💊 SUPLEMENTACIÓN RECOMENDADA PARA PÉRDIDA DE PESO",
            basicos: [
                "• Proteína (20-25g entre comidas) - Saciedad",
                "• Fibra / Psyllium (5-10g antes de comidas)",
                "• Omega-3 (2-3g EPA/DHA) - Control de apetito"
            ],
            opcionales: [
                "• Cafeína (200-400mg pre-entreno)",
                "• Té Verde EGCG (400-500mg)",
                "• L-Carnitina (1-2g pre-entreno)",
                "• Multivitamínico en déficit calórico"
            ],
            nota: "⚠️ La suplementación es complementaria. El déficit calórico y ejercicio son fundamentales."
        },
        mantener: {
            titulo: "💊 SUPLEMENTACIÓN RECOMENDADA PARA MANTENIMIENTO",
            basicos: [
                "• Omega-3 (2g EPA/DHA) - Salud cardiovascular",
                "• Multivitamínico - Cobertura nutricional",
                "• Vitamina D3 (2000 UI) - Salud ósea"
            ],
            opcionales: [
                "• Proteína en polvo (conveniencia)",
                "• Magnesio (300-400mg noche)",
                "• Probióticos - Salud digestiva",
                "• Colágeno (10g) - Articulaciones"
            ],
            nota: "⚠️ Alimentación equilibrada es la base. Suplementación cubre carencias específicas."
        }
    };
    
    const sup = suplementos[objetivo] || suplementos.mantener;
    let html = `<div class="suplementacion-section" style="margin: 12px 0; padding: 12px; background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); border-radius: 8px; border-left: 4px solid #ff9800;">`;
    html += `<h3 style="color: #e65100; margin-bottom: 10px; font-size: 13pt; text-align: center;">${sup.titulo}</h3>`;
    html += `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">`;
    html += `<div style="background: white; padding: 8px; border-radius: 6px;">`;
    html += `<h4 style="color: #f57c00; margin-bottom: 6px; font-size: 10pt;">Esenciales</h4><ul style="list-style: none; padding: 0; margin: 0;">`;
    sup.basicos.forEach(item => html += `<li style="padding: 4px 0; border-bottom: 1px solid #ffe0b2; color: #5d4037; font-size: 8.5pt;">${item}</li>`);
    html += `</ul></div>`;
    html += `<div style="background: white; padding: 8px; border-radius: 6px;">`;
    html += `<h4 style="color: #f57c00; margin-bottom: 6px; font-size: 10pt;">Opcionales</h4><ul style="list-style: none; padding: 0; margin: 0;">`;
    sup.opcionales.forEach(item => html += `<li style="padding: 4px 0; border-bottom: 1px solid #ffe0b2; color: #5d4037; font-size: 8.5pt;">${item}</li>`);
    html += `</ul></div>`;
    html += `</div>`;
    html += `<p style="margin-top: 8px; padding: 8px; background: #fff8e1; border-radius: 4px; color: #f57c00; font-weight: 600; text-align: center; font-size: 8.5pt;">${sup.nota}</p>`;
    html += `</div>`;
    
    return html;
}

function generarTextoPlanEjercicio(plan) {
    let texto = `${plan.nombre}\n\n`;
    texto += `${plan.descripcion}\n`;
    texto += `Frecuencia: ${plan.frecuencia}\n\n`;
    
    plan.semanas.forEach((semana, idx) => {
        if (plan.semanas.length > 1) {
            texto += `--- SEMANA ${semana.numero} ---\n\n`;
        }
        
        semana.dias.forEach(dia => {
            texto += `${dia.dia} - ${dia.grupoMuscular}\n`;
            texto += `Duración: ${dia.duracion}\n`;
            if (dia.cardio) {
                texto += `Cardio: ${dia.cardio}\n`;
            }
            texto += `\nEjercicios:\n`;
            
            dia.ejercicios.forEach(ej => {
                texto += `• ${ej.nombre}: ${ej.series}x${ej.repeticiones}`;
                if (ej.descanso && ej.descanso !== '-') {
                    texto += ` (descanso: ${ej.descanso})`;
                }
                if (ej.notas && ej.notas.trim() !== '') {
                    texto += ` - ${ej.notas}`;
                }
                texto += '\n';
            });
            texto += '\n';
        });
    });
    
    return texto;
}

function mostrarPlanEjercicio() {
    const planEjercicioDiv = document.getElementById('plan-ejercicio-content');
    const planEjercicioContainer = document.getElementById('plan-ejercicio-container');
    
    if (planEjercicioDiv && planEjercicioContainer) {
        if (datosUsuario.planEjercicio && datosUsuario.planEjercicio.trim() !== '') {
            // Formatear el texto con HTML adecuado
            const texto = datosUsuario.planEjercicio;
            
            // Reemplazar saltos de línea con <br> para asegurar que se muestren en PDF
            let html = texto.split('\n').map(line => {
                line = line.replace(/\s+/g, ' ').trim();
                if (!line) return '';
                
                // Títulos de semana
                if (line.includes('SEMANA')) {
                    return `<h3 style="color: #667eea; margin: 20px 0 10px; font-weight: bold; font-size: 18pt;">${line}</h3>`;
                }
                
                // Días
                if (line.includes('LUNES') || line.includes('MARTES') || line.includes('MIÉRCOLES') || 
                    line.includes('JUEVES') || line.includes('VIERNES') || line.includes('SÁBADO') || line.includes('DOMINGO')) {
                    return `<h4 style="color: #764ba2; margin: 15px 0 8px; font-weight: bold; font-size: 15pt;">${line}</h4>`;
                }
                
                // Ejercicios con bullet
                if (line.startsWith('•') || line.match(/^[A-Z].*:\s*\d+x\d+/)) {
                    return `<div style="margin: 8px 0; padding-left: 15px; font-size: 11pt; line-height: 1.6;">${line.replace(/^•\s*/, '')}</div>`;
                }
                
                // Texto normal
                if (line.match(/^[A-Z].+/)) {
                    return `<div style="margin: 5px 0; font-size: 11pt; font-weight: 600; color: #495057;">${line}</div>`;
                }
                
                // Cualquier otra línea
                return `<div style="margin: 3px 0; font-size: 11pt; color: #6c757d;">${line}</div>`;
            }).filter(html => html !== '').join('');
            
            planEjercicioDiv.innerHTML = html;
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
            
            // Recopilar intolerancias seleccionadas
            const checkboxesIntolerancias = document.querySelectorAll('input[name="intolerancia"]:checked');
            const intolerancias = Array.from(checkboxesIntolerancias).map(cb => cb.value);
            
            // Combinar intolerancias y prohibiciones adicionales
            const prohibicionesAdicionales = document.getElementById('prohibiciones').value;
            const todasLasProhibiciones = [...intolerancias, prohibicionesAdicionales].filter(p => p.trim() !== '').join(', ');
            
            // Generar plan de ejercicio automático si está seleccionado
            const tipoPlan = document.getElementById('tipoPlanEjercicio').value;
            const nivelEjercicio = document.getElementById('nivelEjercicio').value;
            let planEjercicioTexto = '';
            
            if (tipoPlan === 'automatico' && window.generarPlanEjercicio) {
                const planEjercicio = window.generarPlanEjercicio(
                    document.getElementById('objetivo').value,
                    nivelEjercicio,
                    document.getElementById('duracion').value
                );
                if (planEjercicio) {
                    planEjercicioTexto = generarTextoPlanEjercicio(planEjercicio);
                }
            } else {
                planEjercicioTexto = document.getElementById('planEjercicio').value;
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
                prohibiciones: todasLasProhibiciones,
                intolerancias: intolerancias,
                duracion: document.getElementById('duracion').value,
                planEjercicio: planEjercicioTexto,
                nivelEjercicio: nivelEjercicio,
                incluirSuplementacion: document.getElementById('incluirSuplementacion').checked,
                suplementacionPersonalizada: document.getElementById('suplementacionPersonalizada').value
            };
            
            calcularMacronutrientes();
            window.datosUsuario = datosUsuario; // Actualizar referencia global
            mostrarResultados();
        });
    }
    
    // Listener para tipo de plan de ejercicio
    const tipoPlanEjercicio = document.getElementById('tipoPlanEjercicio');
    const planEjercicioPersonalizado = document.getElementById('planEjercicioPersonalizado');
    
    if (tipoPlanEjercicio && planEjercicioPersonalizado) {
        tipoPlanEjercicio.addEventListener('change', function() {
            if (this.value === 'personalizado') {
                planEjercicioPersonalizado.style.display = 'block';
            } else {
                planEjercicioPersonalizado.style.display = 'none';
            }
        });
    }
    
    // Listener para checkbox de suplementación
    const incluirSuplementacion = document.getElementById('incluirSuplementacion');
    const suplementacionPersonalizada = document.getElementById('suplementacion-personalizada');
    
    if (incluirSuplementacion && suplementacionPersonalizada) {
        incluirSuplementacion.addEventListener('change', function() {
            if (this.checked) {
                suplementacionPersonalizada.style.display = 'block';
            } else {
                suplementacionPersonalizada.style.display = 'none';
            }
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
            
            if (!datosUsuario || !datosUsuario.nombre) {
                alert('Error: No hay datos de dieta para generar el PDF.');
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
                return;
            }
            
            // Clonar el contenido completo sin los tabs
            const elementoOriginal = document.getElementById('pdf-content');
            if (!elementoOriginal) {
                alert('Error: No se encontró el contenido para generar el PDF.');
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
                return;
            }
            
            const clone = elementoOriginal.cloneNode(true);
            
            // Remover tabs
            const tabs = clone.querySelector('.tabs');
            if (tabs) tabs.remove();
            
            // Remover tabs content no activos
            clone.querySelectorAll('.tab-content').forEach(tab => {
                if (!tab.classList.contains('active')) {
                    tab.remove();
                }
            });
            
            // Aplicar estilos inline para el PDF con colores mejorados
            const pdfHeader = clone.querySelector('.pdf-header');
            if (pdfHeader) {
                pdfHeader.style.cssText = 'text-align: center; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px; margin-bottom: 12px;';
                const h1 = pdfHeader.querySelector('h1');
                if (h1) h1.style.cssText = 'color: white; margin: 0; font-size: 24pt; font-weight: bold;';
                const subtitle = pdfHeader.querySelector('.subtitle');
                if (subtitle) subtitle.style.cssText = 'font-size: 11pt; margin-top: 5px; opacity: 0.95; font-weight: 600;';
            }
            
            // Estilizar tablas con mejor diseño
            clone.querySelectorAll('table').forEach(tabla => {
                tabla.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 13pt; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
                tabla.querySelectorAll('th').forEach(th => {
                    th.style.cssText = 'padding: 14px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: 2px solid #667eea; text-align: center; font-weight: bold; font-size: 13pt; letter-spacing: 0.5px;';
                });
                tabla.querySelectorAll('td').forEach(td => {
                    td.style.cssText = 'padding: 12px; border: 2px solid #e9ecef; text-align: center; background: #ffffff; font-weight: 600; font-size: 12pt;';
                });
            });
            
            // Estilizar títulos con negrita
            clone.querySelectorAll('h3').forEach(h3 => {
                h3.style.cssText = 'font-size: 22pt; margin-bottom: 18px; color: #667eea; border-bottom: 3px solid #764ba2; padding-bottom: 10px; font-weight: bold; letter-spacing: 0.5px;';
            });
            
            // Estilizar h2 también
            clone.querySelectorAll('h2').forEach(h2 => {
                h2.style.cssText = 'font-size: 24pt; margin-top: 0; margin-bottom: 12px; color: #764ba2; font-weight: bold; text-align: center; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); letter-spacing: 1px;';
            });
            
            // Estilizar días del plan con colores mejorados
            clone.querySelectorAll('.dia-plan').forEach(dia => {
                dia.style.cssText = 'background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%); padding: 6px; margin-top: 0; margin-bottom: 4px; border-radius: 8px; page-break-inside: avoid !important; break-inside: avoid !important; -webkit-page-break-inside: avoid; box-shadow: 0 2px 8px rgba(118, 75, 162, 0.15); border-left: 4px solid #764ba2;';
                const diaH3 = dia.querySelector('h3');
                if (diaH3) diaH3.style.cssText = 'color: #764ba2; font-size: 16pt; margin-top: 0; margin-bottom: 4px; font-weight: bold; text-transform: uppercase; text-shadow: 1px 1px 3px rgba(118, 75, 162, 0.2); letter-spacing: 0.5px;';
                
                const tablaComidas = dia.querySelector('.tabla-comidas');
                if (tablaComidas) {
                    tablaComidas.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 9pt; margin: 4px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); page-break-inside: avoid !important;';
                    tablaComidas.querySelectorAll('th').forEach(th => {
                        th.style.cssText = 'padding: 5px 4px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: 2px solid #667eea; font-size: 9pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px;';
                    });
                    tablaComidas.querySelectorAll('td').forEach(td => {
                        td.style.cssText = 'padding: 5px 4px; border: 2px solid #e9ecef; vertical-align: top; font-size: 9pt; background: #ffffff; font-weight: 600; line-height: 1.4;';
                    });
                }
                
                // Estilizar headers de comida
                dia.querySelectorAll('.comida-header').forEach(header => {
                    header.style.cssText = 'font-weight: bold; margin-bottom: 3px; font-size: 9pt; color: #667eea; font-weight: 700;';
                });
                
                // Estilizar listas de alimentos y limpiar botones
                dia.querySelectorAll('.lista-alimentos li').forEach(li => {
                    li.style.cssText = 'font-size: 8.5pt; margin-bottom: 2px; font-weight: 600; line-height: 1.35; color: #2c3e50; list-style-type: none; padding-left: 0;';
                    // Si tiene span con clase alimento-nombre, mantener solo ese contenido
                    const span = li.querySelector('.alimento-nombre');
                    if (span) {
                        li.innerHTML = span.textContent;
                    }
                    // Eliminar cualquier botón
                    li.querySelectorAll('button').forEach(btn => btn.remove());
                });
                
                // Estilizar macros
                dia.querySelectorAll('.macros-comida').forEach(macros => {
                    macros.style.cssText = 'font-size: 8.5pt; color: #495057; margin-top: 3px; font-weight: 700; background: #e7f3ff; padding: 3px; border-radius: 5px;';
                });
                
                // Ocultar controles de edición
                dia.querySelectorAll('.edicion-comida').forEach(edicion => {
                    edicion.style.display = 'none';
                });
                
                // Ocultar botones de edición en alimentos
                dia.querySelectorAll('.btn-editar-item, .btn-eliminar-item, .btn-agregar-rapido').forEach(btn => {
                    btn.style.display = 'none';
                });
            });
            
            // Estilizar footer con mejor diseño
            const footer = clone.querySelector('.pdf-footer');
            if (footer) {
                footer.style.cssText = 'margin-top: 15px; padding: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; text-align: center; font-size: 8.5pt; color: #495057; border-top: 3px solid #667eea;';
                footer.querySelectorAll('p').forEach(p => {
                    p.style.cssText = 'margin: 3px 0; font-weight: 600; color: #495057;';
                });
            }
            
            // Estilizar otros elementos
            clone.querySelectorAll('.plan-ejercicio-container').forEach(container => {
                container.style.cssText = 'margin-top: 12px; padding: 12px; background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%); border-radius: 8px; border: 2px solid #667eea;';
            });
            
            clone.querySelectorAll('.notas-agua-section').forEach(section => {
                section.style.cssText = 'margin-top: 12px; padding: 12px; background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%); border-radius: 8px; border-left: 4px solid #17a2b8;';
                const h4 = section.querySelector('h4');
                if (h4) h4.style.cssText = 'color: #0c5460; margin-bottom: 6px; font-size: 11pt; font-weight: bold;';
                const p = section.querySelector('p');
                if (p) p.style.cssText = 'margin: 0; color: #0c5460; font-size: 9pt; font-weight: 600;';
            });
            
            // Crear wrapper para el PDF con padding reducido
            const pdfWrapper = document.createElement('div');
            pdfWrapper.style.cssText = 'padding: 8px; background: white; font-family: Arial, sans-serif; width: 100%; max-width: 100%; box-sizing: border-box;';
            
            // Estilizar el contenedor principal
            clone.style.cssText = 'margin: 0; padding: 0; background: white; font-family: Arial, sans-serif; overflow: visible;';
            
            // Estilizar el primer elemento para eliminar espacio extra
            const firstElement = pdfWrapper.querySelector('h2, .dia-plan');
            if (firstElement) firstElement.style.marginTop = '0';
            
            // Mover contenido a wrapper
            while (clone.firstChild) {
                pdfWrapper.appendChild(clone.firstChild);
            }
            
            // Limpiar clone y añadir wrapper
            clone.innerHTML = '';
            clone.appendChild(pdfWrapper);
            
            // Agregar el clone al body temporalmente
            document.body.appendChild(clone);
            
            // Forzar un repaint
            void clone.offsetHeight;
            void pdfWrapper.offsetHeight;
            
            // Generar PDF
            setTimeout(() => {
                const opciones = {
                    margin: [8, 8, 8, 8],
                    filename: `Dieta_${datosUsuario.nombre.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { 
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        letterRendering: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                        scrollX: 0,
                        scrollY: 0,
                        dpi: 300,
                        windowWidth: 794,
                        windowHeight: 1123
                    },
                    jsPDF: { 
                        unit: 'mm', 
                        format: 'a4', 
                        orientation: 'portrait',
                        compress: true,
                        putOnlyUsedFonts: true
                    }
                };
                
                console.log('Iniciando generación de PDF...');
                console.log('Elemento wrapper:', pdfWrapper);
                console.log('Dimensiones wrapper:', pdfWrapper.scrollWidth, 'x', pdfWrapper.scrollHeight);
                
                html2pdf()
                    .set(opciones)
                    .from(clone)
                    .save()
                    .then(function() {
                        console.log('PDF generado exitosamente');
                        // Limpiar
                        document.body.removeChild(clone);
                        boton.innerHTML = textoOriginal;
                        boton.disabled = false;
                        mostrarNotificacion('✅ PDF descargado correctamente', 'success');
                    })
                    .catch(function(error) {
                        console.error('Error al generar PDF:', error);
                        console.error('Detalles:', error.stack);
                        if (document.body.contains(clone)) {
                            document.body.removeChild(clone);
                        }
                        boton.innerHTML = textoOriginal;
                        boton.disabled = false;
                        mostrarNotificacion('❌ Error al generar el PDF: ' + error.message, 'error');
                    });
            }, 500);
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
