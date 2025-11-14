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

/**
 * Actualiza la referencia global de datos del usuario asegurando que
 * tanto la variable local `datosUsuario` como `window.datosUsuario`
 * apunten al mismo objeto. Se usa cuando los datos provienen de otras
 * fuentes (por ejemplo, al cargar una dieta guardada).
 * @param {object} nuevosDatos
 */
window.actualizarDatosUsuarioGlobal = function(nuevosDatos = {}) {
    datosUsuario = { ...nuevosDatos };
    window.datosUsuario = datosUsuario;
    return datosUsuario;
};

/**
 * Sincroniza el plan semanal que se está editando en la tabla manual con
 * el objeto `datosUsuario`, asegurando que al guardar o exportar se
 * persistan los cambios realizados en cada día.
 */
function sincronizarPlanManualConDatosUsuario() {
    if (!window.tablaEditable) {
        return;
    }
    
    try {
        // Asegurar que existe la estructura planSemana
        if (!window.tablaEditable.planSemana) {
            window.tablaEditable.planSemana = {};
        }
        
        // Guardar el día actualmente visible antes de clonar datos
        if (typeof window.tablaEditable.obtenerDatos === 'function' && window.tablaEditable.diaActual) {
            window.tablaEditable.planSemana[window.tablaEditable.diaActual] = window.tablaEditable.obtenerDatos();
        }
        
        // Clonar en profundidad para evitar referencias compartidas
        const planClonado = JSON.parse(JSON.stringify(window.tablaEditable.planSemana));
        datosUsuario.planSemana = planClonado;
        datosUsuario.modoGeneracion = 'manual';
        window.datosUsuario = datosUsuario;
        actualizarEstructuraPlanExport();
    } catch (error) {
        console.error('⚠️ Error al sincronizar el plan manual con datosUsuario:', error);
    }
}

window.sincronizarPlanManualConDatosUsuario = sincronizarPlanManualConDatosUsuario;

function calcularMacronutrientes() {
    // Usar el módulo refactorizado de cálculos de macronutrientes
    if (!window.MacronutrientesCalculator) {
        console.error('MacronutrientesCalculator no está disponible');
        return;
    }
    
    // Obtener referencias a elementos del formulario
    const formulario = {
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
    
    // Calcular usando el módulo refactorizado
    datosUsuario = window.MacronutrientesCalculator.calcularMacronutrientes(datosUsuario, formulario);
    
    // Actualizar referencia global
    window.datosUsuario = datosUsuario;
    
    // Actualizar campos del formulario
    const calorias = datosUsuario.calorias || 0;
    const proteinas = datosUsuario.proteinas || 0;
    const grasas = datosUsuario.grasas || 0;
    const carbohidratos = datosUsuario.carbohidratos || 0;
    
    document.getElementById('calorias').value = calorias;
    document.getElementById('proteinas').value = proteinas;
    document.getElementById('grasas').value = grasas;
    document.getElementById('carbohidratos').value = carbohidratos;
}

// Hacer función global para uso desde otros módulos
window.mostrarResultados = function() {
    try {
        const resultadosDiv = document.getElementById('resultados');
        
        if (!resultadosDiv) {
            console.error('❌ Elemento resultados no encontrado');
            return;
        }
        
        const fechaHoy = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const fechaGenElem = document.getElementById('fecha-generacion');
        if (fechaGenElem) {
            fechaGenElem.textContent = fechaHoy;
        }
        
        // Ejecutar funciones con manejo de errores individual
        try {
            mostrarTablaMacros();
        } catch (error) {
            console.error('Error en mostrarTablaMacros:', error);
        }
        
        try {
            mostrarInfoUsuario();
        } catch (error) {
            console.error('Error en mostrarInfoUsuario:', error);
        }
        
        try {
            mostrarDistribucionEntrenos();
        } catch (error) {
            console.error('Error en mostrarDistribucionEntrenos:', error);
        }
        
        try {
            mostrarCalculosDetallados();
        } catch (error) {
            console.error('Error en mostrarCalculosDetallados:', error);
        }
        
        try {
            mostrarMacronutrientesDistribucion();
        } catch (error) {
            console.error('Error en mostrarMacronutrientesDistribucion:', error);
        }
        
        try {
            mostrarPlanAlimentacion();
        } catch (error) {
            console.error('Error en mostrarPlanAlimentacion:', error);
            // Si hay error, mostrar mensaje de error en el div
            const planDiv = document.getElementById('plan-alimentacion');
            if (planDiv) {
                planDiv.innerHTML = `
                    <div class="mensaje-error-modulo">
                        <h3>⚠️ Error al mostrar el plan</h3>
                        <p>Hubo un problema al cargar el plan de alimentación.</p>
                        <p style="margin-top: 10px; font-size: 12px; color: #666;">
                            Error: ${error.message}
                        </p>
                    </div>
                `;
            }
        }
        
        try {
            mostrarProhibiciones();
        } catch (error) {
            console.error('Error en mostrarProhibiciones:', error);
        }
        
        resultadosDiv.classList.remove('oculto');
        
        setTimeout(() => {
            try {
                inicializarBotones();
            } catch (error) {
                console.error('Error en inicializarBotones:', error);
            }
        }, 100);
        
        setTimeout(() => {
            try {
                resultadosDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } catch (error) {
                console.error('Error al hacer scroll:', error);
            }
        }, 200);
        
        if (window.mostrarNotificacion) {
            mostrarNotificacion('✅ Plan de alimentación generado correctamente', 'success');
        }
    } catch (error) {
        console.error('❌ Error crítico en mostrarResultados:', error);
        if (window.mostrarNotificacion) {
            mostrarNotificacion('❌ Error al mostrar resultados: ' + error.message, 'error');
        }
    }
};

// Alias para compatibilidad
const mostrarResultados = window.mostrarResultados;

// Funciones de visualización de tablas refactorizadas al módulo UIRenderer
function mostrarTablaMacros() {
    if (window.UIRenderer) {
        window.UIRenderer.mostrarTablaMacros(datosUsuario);
    } else {
        console.error('UIRenderer no está disponible');
    }
}

function obtenerConsumidoActual() {
    return window.UIRenderer ? window.UIRenderer.obtenerConsumidoActual() : { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
}

function obtenerEstadoMacro(consumido, objetivo) {
    return window.UIRenderer ? window.UIRenderer.obtenerEstadoMacro(consumido, objetivo) : '<span style="color:#999;">-</span>';
}

function actualizarConsumidoEnTabla() {
    if (window.UIRenderer) {
        window.UIRenderer.actualizarConsumidoEnTabla();
    }
}

function colorearFilaMacro(rowId, consumido, objetivo) {
    if (window.UIRenderer) {
        window.UIRenderer.colorearFilaMacro(rowId, consumido, objetivo);
    }
}

function configurarActualizacionMacros() {
    if (window.UIRenderer) {
        window.UIRenderer.configurarActualizacionMacros();
    }
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
        <tr class="highlight-row">
            <td style="font-weight: 600;">Metabolismo basal (TMB)</td>
            <td style="font-weight: 700;">${tmb} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Efecto termogénico de los alimentos (TEF)</td>
            <td>${tef} kcal (${porcentajeTEF}% - ${descTermogenico[tipoTermogenico] || 'No sedentaria'})</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">Actividad física del deporte</td>
            <td>${actividadFisicaDeporteKcal} kcal (${descActividad[actividadFisicaDeporte] || 'Moderada'})</td>
        </tr>
        <tr class="highlight-row">
            <td style="font-weight: 600;">Total gasto calórico día de entreno</td>
            <td style="font-weight: 700;">${gastoBaseEntreno} kcal</td>
        </tr>
        <tr class="highlight-row">
            <td style="font-weight: 600;">Total gasto calórico día de descanso</td>
            <td style="font-weight: 700;">${gastoBaseDescanso} kcal</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">${superavitEntreno >= 0 ? 'Superávit' : 'Déficit'} día de entreno</td>
            <td>${superavitEntreno}% (${superavitEntrenoKcal >= 0 ? '+' : ''}${superavitEntrenoKcal} kcal)</td>
        </tr>
        <tr>
            <td style="font-weight: 600;">${superavitDescanso >= 0 ? 'Superávit' : 'Déficit'} día de descanso</td>
            <td>${superavitDescanso}% (${superavitDescansoKcal >= 0 ? '+' : ''}${superavitDescansoKcal} kcal)</td>
        </tr>
        <tr class="important-row">
            <td style="font-weight: 700;">Ingesta calórica total día de entreno</td>
            <td style="font-weight: 900; font-size: 1.2em;">${caloriasEntreno} kcal</td>
        </tr>
        <tr class="rest-row">
            <td style="font-weight: 700;">Ingesta calórica total día de descanso</td>
            <td style="font-weight: 900; font-size: 1.2em;">${caloriasDescanso} kcal</td>
        </tr>
    `;
    
    tbody.innerHTML = html;
}

function mostrarMacronutrientesDistribucion() {
    const tbody = document.getElementById('tabla-macros-distribucion-body');
    if (!tbody) return;
    
    const {
        carbsEntrenogkg, grasasEntrenogkg, proteinasEntrenogkg,
        carbsDescansogkg, grasasDescansogkg, proteinasDescansogkg,
        porcentajeCarbs = 50,
        porcentajeGrasas = 30,
        porcentajeProteinas = 20
    } = datosUsuario;
    
    if (!carbsEntrenogkg) return; // Si no hay cálculos, no mostrar
    
    // Verificar si los porcentajes suman 100%
    const totalPorcentaje = porcentajeCarbs + porcentajeGrasas + porcentajeProteinas;
    const sumaCorrecta = Math.abs(totalPorcentaje - 100) < 0.01; // Permitir pequeña diferencia por redondeo
    
    // Construir fila de advertencia si no suma 100%
    let filaAdvertencia = '';
    if (!sumaCorrecta) {
        filaAdvertencia = `
        <tr style="background-color: #fee; border: 2px solid #dc2626;">
            <td colspan="4" style="padding: 10px; text-align: center; font-weight: 700; color: #dc2626; font-size: 1.1em;">
                ⚠️ OJO, EL REPARTO DE MACRONUTRIENTES NO SUMA 100% (Suma actual: ${totalPorcentaje.toFixed(1)}%)
            </td>
        </tr>
        `;
    }
    
    const html = `
        <tr>
            <td style="font-weight: 700; padding: 10px;">HIDRATOS</td>
            <td style="padding: 10px;">
                <input type="number" 
                       id="porcentaje-carbs" 
                       value="${porcentajeCarbs}" 
                       min="0" 
                       max="100" 
                       step="1"
                       style="width: 70px; padding: 5px; border: 2px solid #1e40af; border-radius: 4px; font-weight: 600; text-align: center;"
                       onchange="actualizarDistribucionMacros('carbs', this.value)">
                <span style="font-weight: 600;">%</span>
            </td>
            <td class="valor-entreno" style="padding: 10px; font-weight: 700; color: #1e40af;">${carbsEntrenogkg} g/kg</td>
            <td class="valor-descanso" style="padding: 10px; font-weight: 700; color: #374151;">${carbsDescansogkg} g/kg</td>
        </tr>
        <tr>
            <td style="font-weight: 700; padding: 10px;">GRASAS</td>
            <td style="padding: 10px;">
                <input type="number" 
                       id="porcentaje-grasas" 
                       value="${porcentajeGrasas}" 
                       min="0" 
                       max="100" 
                       step="1"
                       style="width: 70px; padding: 5px; border: 2px solid #dc2626; border-radius: 4px; font-weight: 600; text-align: center;"
                       onchange="actualizarDistribucionMacros('grasas', this.value)">
                <span style="font-weight: 600;">%</span>
            </td>
            <td class="valor-entreno" style="padding: 10px; font-weight: 700; color: #1e40af;">${grasasEntrenogkg} g/kg</td>
            <td class="valor-descanso" style="padding: 10px; font-weight: 700; color: #374151;">${grasasDescansogkg} g/kg</td>
        </tr>
        <tr>
            <td style="font-weight: 700; padding: 10px;">PROTEÍNAS</td>
            <td style="padding: 10px;">
                <input type="number" 
                       id="porcentaje-proteinas" 
                       value="${porcentajeProteinas}" 
                       min="0" 
                       max="100" 
                       step="1"
                       style="width: 70px; padding: 5px; border: 2px solid #059669; border-radius: 4px; font-weight: 600; text-align: center;"
                       onchange="actualizarDistribucionMacros('proteinas', this.value)">
                <span style="font-weight: 600;">%</span>
            </td>
            <td class="valor-entreno" style="padding: 10px; font-weight: 700; color: #1e40af;">${proteinasEntrenogkg} g/kg</td>
            <td class="valor-descanso" style="padding: 10px; font-weight: 700; color: #374151;">${proteinasDescansogkg} g/kg</td>
        </tr>
        ${filaAdvertencia}
    `;
    
    tbody.innerHTML = html;
}

// Función para actualizar la distribución de macronutrientes cuando se modifica manualmente el porcentaje
window.actualizarDistribucionMacros = function(tipo, valorPorcentaje) {
    const porcentaje = parseFloat(valorPorcentaje);
    
    if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        alert('Por favor introduce un porcentaje válido entre 0 y 100');
        // Restaurar valor anterior
        const valorAnterior = datosUsuario[`porcentaje${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`] || 
                             (tipo === 'carbs' ? 50 : tipo === 'grasas' ? 30 : 20);
        document.getElementById(`porcentaje-${tipo}`).value = valorAnterior;
        return;
    }
    
    // Actualizar porcentaje en datosUsuario
    if (tipo === 'carbs') {
        datosUsuario.porcentajeCarbs = porcentaje;
    } else if (tipo === 'grasas') {
        datosUsuario.porcentajeGrasas = porcentaje;
    } else if (tipo === 'proteinas') {
        datosUsuario.porcentajeProteinas = porcentaje;
    }
    
    // Verificar que la suma de porcentajes sea razonable (permitir ajustes flexibles pero mostrar advertencia en visualización)
    const totalPorcentaje = datosUsuario.porcentajeCarbs + datosUsuario.porcentajeGrasas + datosUsuario.porcentajeProteinas;
    if (Math.abs(totalPorcentaje - 100) > 0.01) {
        console.warn(`Los porcentajes suman ${totalPorcentaje.toFixed(1)}%, que no es exactamente 100%. Se mostrará advertencia en la visualización.`);
    }
    
    // Obtener valores necesarios para recalcular
    const peso = datosUsuario.peso;
    const caloriasEntreno = datosUsuario.caloriasEntreno;
    const caloriasDescanso = datosUsuario.caloriasDescanso;
    
    if (!peso || !caloriasEntreno || !caloriasDescanso) {
        console.error('No se pueden recalcular los macronutrientes: faltan datos básicos');
        return;
    }
    
    // Convertir porcentajes a decimales
    const porcentajeCarbs = datosUsuario.porcentajeCarbs / 100;
    const porcentajeGrasas = datosUsuario.porcentajeGrasas / 100;
    const porcentajeProteinas = datosUsuario.porcentajeProteinas / 100;
    
    // Recalcular gramos desde calorías usando los nuevos porcentajes
    const carbsEntreno = Math.round((caloriasEntreno * porcentajeCarbs) / 4);
    const grasasEntreno = Math.round((caloriasEntreno * porcentajeGrasas) / 9);
    const proteinasEntreno = Math.round((caloriasEntreno * porcentajeProteinas) / 4);
    
    const carbsDescanso = Math.round((caloriasDescanso * porcentajeCarbs) / 4);
    const grasasDescanso = Math.round((caloriasDescanso * porcentajeGrasas) / 9);
    const proteinasDescanso = Math.round((caloriasDescanso * porcentajeProteinas) / 4);
    
    // Recalcular g/kg corporal
    const carbsEntrenogkg = (carbsEntreno / peso).toFixed(2);
    const grasasEntrenogkg = (grasasEntreno / peso).toFixed(2);
    const proteinasEntrenogkg = (proteinasEntreno / peso).toFixed(2);
    
    const carbsDescansogkg = (carbsDescanso / peso).toFixed(2);
    const grasasDescansogkg = (grasasDescanso / peso).toFixed(2);
    const proteinasDescansogkg = (proteinasDescanso / peso).toFixed(2);
    
    // Actualizar datosUsuario con los nuevos valores
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
    
    // Recalcular valores promedio para compatibilidad
    const numDiasEntreno = datosUsuario.diasEntreno?.length || 5;
    const numDiasDescanso = 7 - numDiasEntreno;
    datosUsuario.proteinas = Math.round((proteinasEntreno * numDiasEntreno + proteinasDescanso * numDiasDescanso) / 7);
    datosUsuario.grasas = Math.round((grasasEntreno * numDiasEntreno + grasasDescanso * numDiasDescanso) / 7);
    datosUsuario.carbohidratos = Math.round((carbsEntreno * numDiasEntreno + carbsDescanso * numDiasDescanso) / 7);
    
    // Actualizar la visualización
    mostrarMacronutrientesDistribucion();
    
    // Verificar el modo de generación para decidir cómo actualizar
    const modoGeneracion = datosUsuario.modoGeneracion || 'automatico';
    
    if (modoGeneracion === 'automatico') {
        // Si está en modo automático, regenerar completamente el plan con los nuevos macronutrientes
        if (typeof window.mostrarPlanAlimentacion === 'function') {
            window.mostrarPlanAlimentacion();
        }
        // Actualizar la visualización de macros en la tabla principal
        if (typeof window.mostrarTablaMacros === 'function') {
            window.mostrarTablaMacros();
        }
    } else if (modoGeneracion === 'manual' && window.tablaEditable) {
        // Si está en modo manual, actualizar objetivos y recalcular progreso
        // Actualizar la visualización de objetivos en la tabla editable
        if (typeof window.tablaEditable.actualizarObjetivosVisuales === 'function') {
            window.tablaEditable.actualizarObjetivosVisuales();
        }
        // Actualizar los totales diarios que dependen de los objetivos
        if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
            window.tablaEditable.actualizarTotalesDiarios();
        }
        // Recalcular el progreso de cada comida para que refleje los nuevos objetivos
        if (window.tablaEditable.datos) {
            // Iterar sobre todas las comidas y días para recalcular
            Object.keys(window.tablaEditable.datos).forEach(dia => {
                Object.keys(window.tablaEditable.datos[dia]).forEach(comida => {
                    const filas = window.tablaEditable.datos[dia][comida];
                    if (filas && filas.length > 0) {
                        // Recalcular el progreso de esta comida
                        if (typeof window.tablaEditable.actualizarProgresoComida === 'function') {
                            window.tablaEditable.actualizarProgresoComida(comida);
                        }
                    }
                });
            });
        }
        // Actualizar la visualización de macros en la tabla principal
        if (typeof window.mostrarTablaMacros === 'function') {
            window.mostrarTablaMacros();
        }
    }
    
    // Mostrar notificación según el modo
    if (window.mostrarNotificacion) {
        if (modoGeneracion === 'automatico') {
            window.mostrarNotificacion(`✅ Distribución de macronutrientes actualizada. El plan completo se ha regenerado con los nuevos valores.`, 'success');
        } else {
            window.mostrarNotificacion(`✅ Distribución de macronutrientes actualizada. Los objetivos se han recalculado.`, 'success');
        }
    }
    
    console.log(`✅ Distribución de macronutrientes actualizada:`, {
        porcentajeCarbs: datosUsuario.porcentajeCarbs + '%',
        porcentajeGrasas: datosUsuario.porcentajeGrasas + '%',
        porcentajeProteinas: datosUsuario.porcentajeProteinas + '%'
    });
};

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
            
            if (window.tablaEditable && typeof window.tablaEditable.actualizarSelectoresDia === 'function') {
                setTimeout(() => {
                    window.tablaEditable.actualizarSelectoresDia();
                }, 0);
            }
            
            // Inicializar tablas después de insertar el HTML
            setTimeout(() => {
                // Verificar si hay datos guardados de una dieta generada automáticamente
                if (datosUsuario.planSemana && Object.keys(datosUsuario.planSemana).length > 0) {
                    // Cargar datos guardados en TablaEditable
                    console.log('📋 Cargando dieta generada automáticamente para edición...', datosUsuario.planSemana);
                    
                    // Marcar que este plan fue generado automáticamente y puede necesitar resetear estadísticas
                    window.tablaEditable.planGeneradoAutomatico = true;
                    
                    // Cargar planSemana en tablaEditable
                    window.tablaEditable.planSemana = datosUsuario.planSemana;
                    
                    // Cargar el primer día disponible
                    const dias = Object.keys(datosUsuario.planSemana);
                    if (dias.length > 0) {
                        const primerDia = dias[0];
                        window.tablaEditable.diaActual = primerDia;
                        
                        // Actualizar selector de día
                        const selectorDia = document.getElementById('selector-dia');
                        const selectorDiaBottom = document.getElementById('selector-dia-bottom');
                        if (selectorDia) {
                            selectorDia.value = primerDia;
                        }
                        if (selectorDiaBottom) {
                            selectorDiaBottom.value = primerDia;
                        }
                        
                        // Cargar datos del primer día
                        const datosDia = datosUsuario.planSemana[primerDia];
                        console.log('📋 Datos del día:', primerDia, datosDia);
                        
                        if (datosDia && typeof window.tablaEditable.cargarDatos === 'function') {
                            // Esperar un poco más para asegurar que los elementos del DOM estén listos
                            setTimeout(() => {
                                // Cargar datos SIN actualizar totales todavía
                                // (los actualizaremos después de actualizar los estilos y objetivos)
                                window.tablaEditable.cargarDatos(datosDia, false);
                                
                                // IMPORTANTE: Actualizar estilos del día ANTES de actualizar totales
                                // Esto asegura que los objetivos se actualicen correctamente antes de calcular el progreso
                                setTimeout(() => {
                                    // Actualizar estilos del día primero (badge, objetivos, etc.)
                                    if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                        window.tablaEditable.actualizarEstilosDia();
                                        console.log('✅ Estilos del día actualizados');
                                    }
                                    
                                    // Luego actualizar totales diarios (con los objetivos correctos)
                                    if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                        window.tablaEditable.actualizarTotalesDiarios();
                                        console.log('✅ Totales diarios actualizados');
                                    }
                                    
                                    console.log('✅ Dieta cargada correctamente para edición');
                                    
                                    // Mostrar estadísticas después de cargar los datos
                                    setTimeout(() => {
                                        mostrarEstadisticasPlanManual();
                                    }, 300);
                                }, 100);
                            }, 50);
                        } else {
                            // Si no hay datos para el primer día, inicializar tablas vacías y actualizar estilos
                            setTimeout(() => {
                                if (typeof window.tablaEditable.inicializarTablasVacias === 'function') {
                                    window.tablaEditable.inicializarTablasVacias(3);
                                }
                                
                                // Actualizar estilos y totales
                                setTimeout(() => {
                                    if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                        window.tablaEditable.actualizarEstilosDia();
                                    }
                                    if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                        window.tablaEditable.actualizarTotalesDiarios();
                                    }
                                }, 100);
                            }, 50);
                        }
                        
                        // Cargar todos los días de la semana
                        dias.forEach(dia => {
                            if (dia !== primerDia && datosUsuario.planSemana[dia]) {
                                window.tablaEditable.planSemana[dia] = datosUsuario.planSemana[dia];
                            }
                        });
                    }
                } else {
                    // Si no hay datos guardados, inicializar tablas vacías
                    console.log('📋 No hay datos guardados, inicializando tablas vacías');
                    if (typeof window.tablaEditable.inicializarTablasVacias === 'function') {
                        window.tablaEditable.inicializarTablasVacias(3); // 3 filas vacías por comida
                        console.log('✅ Tabla editable inicializada correctamente');
                        
                        // IMPORTANTE: Actualizar estilos y totales después de inicializar
                        // Esto asegura que los objetivos y el badge se muestren correctamente desde el inicio
                        setTimeout(() => {
                            // Actualizar estilos del día (badge, objetivos, etc.)
                            if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                window.tablaEditable.actualizarEstilosDia();
                                console.log('✅ Estilos del día actualizados');
                            }
                            
                            // Actualizar totales diarios (asegura que se muestren como 0 si no hay datos)
                            if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                window.tablaEditable.actualizarTotalesDiarios();
                                console.log('✅ Totales diarios actualizados');
                            }
                            
                            // Mostrar estadísticas después de inicializar (aunque estén vacías)
                            setTimeout(() => {
                                mostrarEstadisticasPlanManual();
                            }, 300);
                        }, 150);
                    } else {
                        console.error('❌ Método inicializarTablasVacias no disponible');
                    }
                }
            }, 200);
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

// Función para generar estadísticas del plan con gráficos visuales
// Función para convertir planSemana de tablaEditable (objeto) al formato array que espera generarEstadisticasPlan
function convertirPlanSemanaParaEstadisticas(planSemanaObjeto) {
    if (!planSemanaObjeto || typeof planSemanaObjeto !== 'object') return [];
    
    // Mapeo de nombres de días (tablaEditable usa formato "Lunes", generarEstadisticasPlan espera "LUNES")
    const mapeoDias = {
        'Lunes': 'LUNES',
        'Martes': 'MARTES',
        'Miércoles': 'MIERCOLES',
        'Miercoles': 'MIERCOLES',
        'Jueves': 'JUEVES',
        'Viernes': 'VIERNES',
        'Sábado': 'SABADO',
        'Sabado': 'SABADO',
        'Domingo': 'DOMINGO'
    };
    
    // Mapeo de nombres de comidas (tablaEditable usa formato "Desayuno", generarEstadisticasPlan espera "desayuno")
    const mapeoComidas = {
        'Desayuno': 'desayuno',
        'Media Mañana': 'medioDia',
        'Comida': 'almuerzo',
        'Merienda': 'merienda',
        'Cena': 'cena'
    };
    
    const planSemanaArray = [];
    
    // Iterar sobre cada día del planSemanaObjeto
    Object.keys(planSemanaObjeto).forEach(nombreDia => {
        const datosDia = planSemanaObjeto[nombreDia];
        if (!datosDia || typeof datosDia !== 'object') return;
        
        // Convertir nombre del día
        const diaNormalizado = mapeoDias[nombreDia] || nombreDia.toUpperCase();
        
        // Convertir estructura de comidas
        const comidas = {};
        
        Object.keys(datosDia).forEach(nombreComida => {
            const comidaNormalizada = mapeoComidas[nombreComida] || nombreComida.toLowerCase();
            const alimentosComida = datosDia[nombreComida];
            
            if (Array.isArray(alimentosComida) && alimentosComida.length > 0) {
                // Sumar todos los alimentos de esta comida
                const totalComida = alimentosComida.reduce((total, alimento) => {
                    return {
                        calorias: total.calorias + (alimento.calorias || 0),
                        proteinas: total.proteinas + (alimento.proteinas || 0),
                        grasas: total.grasas + (alimento.grasas || 0),
                        carbohidratos: total.carbohidratos + (alimento.hidratos || 0)
                    };
                }, { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 });
                
                comidas[comidaNormalizada] = totalComida;
            } else {
                // Si no hay alimentos, usar valores vacíos
                comidas[comidaNormalizada] = {
                    calorias: 0,
                    proteinas: 0,
                    grasas: 0,
                    carbohidratos: 0
                };
            }
        });
        
        // Asegurar que todas las comidas estén presentes
        if (!comidas.desayuno) comidas.desayuno = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.medioDia) comidas.medioDia = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.almuerzo) comidas.almuerzo = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.merienda) comidas.merienda = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        if (!comidas.cena) comidas.cena = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        
        planSemanaArray.push({
            dia: diaNormalizado,
            comidas: comidas
        });
    });
    
    return planSemanaArray;
}

// Función para verificar si hay alimentos reales en el plan
function tieneAlimentosReales(planSemanaObjeto) {
    if (!planSemanaObjeto || typeof planSemanaObjeto !== 'object') return false;
    
    // Verificar si hay algún día con alimentos
    for (const nombreDia of Object.keys(planSemanaObjeto)) {
        const datosDia = planSemanaObjeto[nombreDia];
        if (!datosDia || typeof datosDia !== 'object') continue;
        
        // Verificar si hay alguna comida con alimentos
        for (const nombreComida of Object.keys(datosDia)) {
            const alimentosComida = datosDia[nombreComida];
            if (Array.isArray(alimentosComida) && alimentosComida.length > 0) {
                // Verificar si hay al menos un alimento con datos válidos
                const tieneAlimentoValido = alimentosComida.some(alimento => {
                    return alimento && (
                        (alimento.calorias && alimento.calorias > 0) ||
                        (alimento.proteinas && alimento.proteinas > 0) ||
                        (alimento.grasas && alimento.grasas > 0) ||
                        (alimento.hidratos && alimento.hidratos > 0)
                    );
                });
                if (tieneAlimentoValido) {
                    return true;
                }
            }
        }
    }
    
    return false;
}

// Función para mostrar estadísticas del plan manual
function mostrarEstadisticasPlanManual() {
    if (!window.tablaEditable || !window.tablaEditable.planSemana) {
        return;
    }
    
    // Guardar día actual antes de calcular estadísticas
    if (window.tablaEditable.diaActual && typeof window.tablaEditable.obtenerDatos === 'function') {
        window.tablaEditable.planSemana[window.tablaEditable.diaActual] = window.tablaEditable.obtenerDatos();
    }
    
    // Verificar si realmente hay alimentos antes de generar estadísticas
    const tieneAlimentos = tieneAlimentosReales(window.tablaEditable.planSemana);
    
    // Convertir planSemana de formato objeto a formato array
    const planSemanaArray = convertirPlanSemanaParaEstadisticas(window.tablaEditable.planSemana);
    
    if (planSemanaArray.length === 0) {
        return;
    }
    
    // Si no hay alimentos reales, forzar todos los valores a 0
    if (!tieneAlimentos) {
        // Asegurar que todos los valores sean 0
        planSemanaArray.forEach(dia => {
            Object.keys(dia.comidas).forEach(comida => {
                dia.comidas[comida] = {
                    calorias: 0,
                    proteinas: 0,
                    grasas: 0,
                    carbohidratos: 0
                };
            });
        });
    }
    
    // Generar HTML de estadísticas
    const htmlEstadisticas = generarEstadisticasPlan(planSemanaArray);
    
    // Buscar o crear contenedor de estadísticas
    let contenedorEstadisticas = document.getElementById('estadisticas-plan-manual');
    
    if (!contenedorEstadisticas) {
        // Crear contenedor después de la tabla editable
        const planDiv = document.getElementById('plan-alimentacion');
        if (planDiv) {
            contenedorEstadisticas = document.createElement('div');
            contenedorEstadisticas.id = 'estadisticas-plan-manual';
            planDiv.appendChild(contenedorEstadisticas);
        } else {
            return; // No se puede agregar si no existe el contenedor principal
        }
    }
    
    // Actualizar contenido
    contenedorEstadisticas.innerHTML = htmlEstadisticas;
}

function generarEstadisticasPlan(planSemana) {
    if (!planSemana || planSemana.length === 0) return '';
    
    // Función helper para detectar si un día es de descanso
    // Usar window.datosUsuario en lugar de datosUsuario global
    const esDiaDescansoHelper = (nombreDia) => {
        if (!window.datosUsuario || !window.datosUsuario.diasEntreno || window.datosUsuario.diasEntreno.length === 0) {
            return true; // Por defecto, todos los días son de descanso si no hay días de entrenamiento definidos
        }
        
        // Normalizar el nombre del día
        const normalizar = (texto = '') => texto
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zñ ]/g, '')
            .trim();
        
        const valorDia = normalizar(nombreDia);
        const diasEntreno = window.datosUsuario.diasEntreno || [];
        const diasEntrenoNormalizados = diasEntreno.map(d => normalizar(d));
        
        return !diasEntrenoNormalizados.includes(valorDia);
    };
    
    // Calcular totales por día de entreno y descanso
    let totalEntreno = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0, dias: 0 };
    let totalDescanso = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0, dias: 0 };
    
    planSemana.forEach(dia => {
        const esDescanso = esDiaDescansoHelper(dia.dia);
        const comidas = dia.comidas;
        
        let diaTotal = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
        
        // Sumar todas las comidas del día
        Object.values(comidas).forEach(comida => {
            if (comida) {
                diaTotal.calorias += comida.calorias || 0;
                diaTotal.proteinas += comida.proteinas || 0;
                diaTotal.grasas += comida.grasas || 0;
                diaTotal.carbohidratos += comida.carbohidratos || 0;
            }
        });
        
        // Agregar a totales según tipo de día
        if (esDescanso) {
            totalDescanso.calorias += diaTotal.calorias;
            totalDescanso.proteinas += diaTotal.proteinas;
            totalDescanso.grasas += diaTotal.grasas;
            totalDescanso.carbohidratos += diaTotal.carbohidratos;
            totalDescanso.dias++;
        } else {
            totalEntreno.calorias += diaTotal.calorias;
            totalEntreno.proteinas += diaTotal.proteinas;
            totalEntreno.grasas += diaTotal.grasas;
            totalEntreno.carbohidratos += diaTotal.carbohidratos;
            totalEntreno.dias++;
        }
    });
    
    // Calcular promedios
    const promedioEntreno = {
        calorias: totalEntreno.dias > 0 ? Math.round(totalEntreno.calorias / totalEntreno.dias) : 0,
        proteinas: totalEntreno.dias > 0 ? Math.round(totalEntreno.proteinas / totalEntreno.dias) : 0,
        grasas: totalEntreno.dias > 0 ? Math.round(totalEntreno.grasas / totalEntreno.dias) : 0,
        carbohidratos: totalEntreno.dias > 0 ? Math.round(totalEntreno.carbohidratos / totalEntreno.dias) : 0
    };
    
    const promedioDescanso = {
        calorias: totalDescanso.dias > 0 ? Math.round(totalDescanso.calorias / totalDescanso.dias) : 0,
        proteinas: totalDescanso.dias > 0 ? Math.round(totalDescanso.proteinas / totalDescanso.dias) : 0,
        grasas: totalDescanso.dias > 0 ? Math.round(totalDescanso.grasas / totalDescanso.dias) : 0,
        carbohidratos: totalDescanso.dias > 0 ? Math.round(totalDescanso.carbohidratos / totalDescanso.dias) : 0
    };
    
    // Total combinado semanal
    const totalCombinado = {
        calorias: totalEntreno.calorias + totalDescanso.calorias,
        proteinas: totalEntreno.proteinas + totalDescanso.proteinas,
        grasas: totalEntreno.grasas + totalDescanso.grasas,
        carbohidratos: totalEntreno.carbohidratos + totalDescanso.carbohidratos
    };
    
    const promedioSemanal = {
        calorias: Math.round(totalCombinado.calorias / 7),
        proteinas: Math.round(totalCombinado.proteinas / 7),
        grasas: Math.round(totalCombinado.grasas / 7),
        carbohidratos: Math.round(totalCombinado.carbohidratos / 7)
    };
    
    // Generar consejos automáticos
    const consejos = generarConsejosAutomaticos(promedioEntreno, promedioDescanso, promedioSemanal);
    
    // Calcular porcentajes para gráficos
    const maxCalorias = Math.max(promedioEntreno.calorias, promedioDescanso.calorias, promedioSemanal.calorias);
    const porcentajeCalEntreno = maxCalorias > 0 ? (promedioEntreno.calorias / maxCalorias) * 100 : 0;
    const porcentajeCalDescanso = maxCalorias > 0 ? (promedioDescanso.calorias / maxCalorias) * 100 : 0;
    const porcentajeCalSemanal = maxCalorias > 0 ? (promedioSemanal.calorias / maxCalorias) * 100 : 0;
    
    return `
        <div class="estadisticas-plan-container" style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 2px solid #dee2e6;">
            <h3 style="color: #495057; text-align: center; margin-bottom: 25px; font-size: 1.4em; font-weight: 700; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
                📊 ESTADÍSTICAS DEL PLAN
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 25px;">
                <!-- Día de Entreno -->
                <div class="stat-card" style="background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%); padding: 20px; border-radius: 12px; border: 2px solid #28a745; box-shadow: 0 3px 10px rgba(40,167,69,0.2);">
                    <h4 style="color: #155724; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">
                        💪 DÍA DE ENTRENO
                        <span style="display: block; font-size: 0.85em; font-weight: 500; margin-top: 5px;">(${totalEntreno.dias} días)</span>
                    </h4>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">🔥 Calorías:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.calorias} kcal</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #28a745, #20c997); height: 100%; width: ${porcentajeCalEntreno}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">💪 Proteínas:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.proteinas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: ${Math.min((promedioEntreno.proteinas / 200) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">🥑 Grasas:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.grasas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; width: ${Math.min((promedioEntreno.grasas / 100) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #155724; font-weight: 600;">🍚 Hidratos:</span>
                            <span style="color: #155724; font-weight: 700;">${promedioEntreno.carbohidratos}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #1e40af, #3b82f6); height: 100%; width: ${Math.min((promedioEntreno.carbohidratos / 300) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(21,87,36,0.3); text-align: center;">
                        <span style="color: #155724; font-weight: 700; font-size: 0.95em;">Total semanal: ${totalEntreno.calorias} kcal</span>
                    </div>
                </div>
                
                <!-- Día de Descanso -->
                <div class="stat-card" style="background: linear-gradient(135deg, #cfe2ff 0%, #b6d4fe 100%); padding: 20px; border-radius: 12px; border: 2px solid #2196f3; box-shadow: 0 3px 10px rgba(33,150,243,0.2);">
                    <h4 style="color: #0d47a1; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">
                        😴 DÍA DE DESCANSO
                        <span style="display: block; font-size: 0.85em; font-weight: 500; margin-top: 5px;">(${totalDescanso.dias} días)</span>
                    </h4>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">🔥 Calorías:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.calorias} kcal</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #2196f3, #42a5f5); height: 100%; width: ${porcentajeCalDescanso}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">💪 Proteínas:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.proteinas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: ${Math.min((promedioDescanso.proteinas / 200) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">🥑 Grasas:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.grasas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; width: ${Math.min((promedioDescanso.grasas / 100) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #0d47a1; font-weight: 600;">🍚 Hidratos:</span>
                            <span style="color: #0d47a1; font-weight: 700;">${promedioDescanso.carbohidratos}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #1e40af, #3b82f6); height: 100%; width: ${Math.min((promedioDescanso.carbohidratos / 300) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(13,71,161,0.3); text-align: center;">
                        <span style="color: #0d47a1; font-weight: 700; font-size: 0.95em;">Total semanal: ${totalDescanso.calorias} kcal</span>
                    </div>
                </div>
                
                <!-- Total Combinado -->
                <div class="stat-card" style="background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%); padding: 20px; border-radius: 12px; border: 2px solid #ffc107; box-shadow: 0 3px 10px rgba(255,193,7,0.2);">
                    <h4 style="color: #856404; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">
                        📈 PROMEDIO SEMANAL
                        <span style="display: block; font-size: 0.85em; font-weight: 500; margin-top: 5px;">(7 días)</span>
                    </h4>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">🔥 Calorías:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.calorias} kcal</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #ffc107, #ffca28); height: 100%; width: ${porcentajeCalSemanal}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">💪 Proteínas:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.proteinas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: ${Math.min((promedioSemanal.proteinas / 200) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">🥑 Grasas:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.grasas}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; width: ${Math.min((promedioSemanal.grasas / 100) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: #856404; font-weight: 600;">🍚 Hidratos:</span>
                            <span style="color: #856404; font-weight: 700;">${promedioSemanal.carbohidratos}g</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.6); height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #1e40af, #3b82f6); height: 100%; width: ${Math.min((promedioSemanal.carbohidratos / 300) * 100, 100)}%; transition: width 0.5s ease;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(133,100,4,0.3); text-align: center;">
                        <span style="color: #856404; font-weight: 700; font-size: 0.95em;">Total semanal: ${totalCombinado.calorias} kcal</span>
                    </div>
                </div>
            </div>
            
            <!-- Consejos Automáticos -->
            ${consejos}
        </div>
    `;
}

// Función para generar consejos automáticos basados en las estadísticas
function generarConsejosAutomaticos(promedioEntreno, promedioDescanso, promedioSemanal) {
    const consejos = [];
    
    // Analizar diferencias entre días de entreno y descanso
    const diferenciaCalorias = promedioEntreno.calorias - promedioDescanso.calorias;
    const diferenciaProteinas = promedioEntreno.proteinas - promedioDescanso.proteinas;
    
    // Consejo sobre diferencia calórica
    if (diferenciaCalorias > 300) {
        consejos.push({
            tipo: 'info',
            icono: '💡',
            titulo: 'Excelente distribución calórica',
            texto: `Tus días de entrenamiento tienen ${diferenciaCalorias} kcal más que los de descanso, lo cual es óptimo para mantener energía durante el ejercicio.`
        });
    } else if (diferenciaCalorias < 100) {
        consejos.push({
            tipo: 'warning',
            icono: '⚠️',
            titulo: 'Considera ajustar las calorías',
            texto: `La diferencia entre días de entreno y descanso es pequeña (${diferenciaCalorias} kcal). Considera aumentar las calorías en días de entrenamiento para mejor rendimiento.`
        });
    }
    
    // Consejo sobre proteínas
    const objetivoProteinas = datosUsuario.peso ? Math.round(datosUsuario.peso * 2) : 150;
    if (promedioSemanal.proteinas >= objetivoProteinas * 0.9) {
        consejos.push({
            tipo: 'success',
            icono: '✅',
            titulo: 'Proteínas adecuadas',
            texto: `Tu ingesta promedio de ${promedioSemanal.proteinas}g de proteínas es adecuada para mantener y construir masa muscular.`
        });
    } else {
        consejos.push({
            tipo: 'warning',
            icono: '💪',
            titulo: 'Aumenta la ingesta de proteínas',
            texto: `Tu ingesta promedio de ${promedioSemanal.proteinas}g es menor a la recomendada (${objetivoProteinas}g). Considera aumentar alimentos ricos en proteínas.`
        });
    }
    
    // Consejo sobre distribución de macronutrientes
    const porcentajeProt = (promedioSemanal.proteinas * 4 / promedioSemanal.calorias) * 100;
    const porcentajeCarb = (promedioSemanal.carbohidratos * 4 / promedioSemanal.calorias) * 100;
    const porcentajeGras = (promedioSemanal.grasas * 9 / promedioSemanal.calorias) * 100;
    
    if (porcentajeProt >= 18 && porcentajeProt <= 25) {
        consejos.push({
            tipo: 'success',
            icono: '🎯',
            titulo: 'Distribución de macronutrientes equilibrada',
            texto: `Tu plan tiene una distribución equilibrada: ${porcentajeProt.toFixed(1)}% proteínas, ${porcentajeCarb.toFixed(1)}% carbohidratos, ${porcentajeGras.toFixed(1)}% grasas.`
        });
    }
    
    // Consejo sobre hidratos en días de entreno
    if (promedioEntreno.carbohidratos > promedioDescanso.carbohidratos * 1.2) {
        consejos.push({
            tipo: 'info',
            icono: '⚡',
            titulo: 'Buena estrategia de carbohidratos',
            texto: `Los días de entrenamiento tienen más carbohidratos, lo cual ayuda a reponer glucógeno muscular y mejorar el rendimiento.`
        });
    }
    
    // Consejo sobre objetivo
    const objetivo = datosUsuario.objetivo;
    if (objetivo === 'aumentar' && promedioSemanal.calorias < 2500) {
        consejos.push({
            tipo: 'warning',
            icono: '📈',
            titulo: 'Atención para ganancia de peso',
            texto: 'Para aumentar masa muscular, asegúrate de tener un superávit calórico adecuado. Considera aumentar las calorías si no ves progreso.'
        });
    } else if (objetivo === 'adelgazar' && promedioSemanal.calorias > 2500) {
        consejos.push({
            tipo: 'info',
            icono: '🔥',
            titulo: 'Déficit calórico moderado',
            texto: 'Tu plan tiene un déficit calórico adecuado. Recuerda que la pérdida de peso debe ser gradual (0.5-1kg por semana).'
        });
    }
    
    // Si no hay consejos, añadir uno genérico positivo
    if (consejos.length === 0) {
        consejos.push({
            tipo: 'success',
            icono: '🌟',
            titulo: 'Plan bien estructurado',
            texto: 'Tu plan nutricional está bien balanceado. Mantén la consistencia y ajusta según tu progreso y sensaciones.'
        });
    }
    
    // Generar HTML de consejos
    let htmlConsejos = '<div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 12px; border: 2px solid #dee2e6;">';
    htmlConsejos += '<h4 style="color: #495057; margin: 0 0 15px 0; font-size: 1.1em; font-weight: 700; text-align: center;">💡 CONSEJOS Y RECOMENDACIONES</h4>';
    
    consejos.forEach(consejo => {
        const colorFondo = consejo.tipo === 'success' ? 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)' :
                          consejo.tipo === 'warning' ? 'linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%)' :
                          'linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)';
        const colorBorde = consejo.tipo === 'success' ? '#28a745' :
                          consejo.tipo === 'warning' ? '#ffc107' :
                          '#17a2b8';
        const colorTexto = consejo.tipo === 'success' ? '#155724' :
                          consejo.tipo === 'warning' ? '#856404' :
                          '#0c5460';
        
        htmlConsejos += `
            <div style="margin-bottom: 15px; padding: 15px; background: ${colorFondo}; border-radius: 10px; border-left: 4px solid ${colorBorde}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: flex; align-items: start; gap: 12px;">
                    <span style="font-size: 1.5em; flex-shrink: 0;">${consejo.icono}</span>
                    <div style="flex: 1;">
                        <h5 style="color: ${colorTexto}; margin: 0 0 8px 0; font-size: 1em; font-weight: 700;">${consejo.titulo}</h5>
                        <p style="color: ${colorTexto}; margin: 0; font-size: 0.9em; line-height: 1.5; opacity: 0.9;">${consejo.texto}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    htmlConsejos += '</div>';
    return htmlConsejos;
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
    
    // Generar estadísticas del plan
    htmlPlan += generarEstadisticasPlan(planSemana);
    
    // Calcular hidratación recomendada
    const hidratacionRecomendada = Math.round((datosUsuario.peso * 0.033 + 0.5) * 10) / 10;
    htmlPlan += `
        <div class="hidratacion-section" style="margin-top: 40px; margin-bottom: 20px; padding: 12px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 8px; border-left: 4px solid #2196f3; page-break-inside: avoid; clear: both;">
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
    
    // Guardar el planSemana en formato compatible con TablaEditable
    // Convertir array de días a objeto { Dia: { ... } }
    if (planSemana && planSemana.length > 0) {
        const planSemanaEditable = {};
        
        planSemana.forEach((diaPlan) => {
            let nombreDia = diaPlan.dia || diaPlan.diaSemana;
            if (!nombreDia) return;
            
            // Normalizar nombre del día a formato TablaEditable (primera letra mayúscula, resto minúsculas)
            // Ejemplo: "LUNES" -> "Lunes", "Lunes" -> "Lunes"
            nombreDia = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1).toLowerCase();
            
            // Mapeo especial para días con tildes
            const mapaDias = {
                'Miercoles': 'Miércoles',
                'Sabado': 'Sábado'
            };
            if (mapaDias[nombreDia]) {
                nombreDia = mapaDias[nombreDia];
            }
            
            // Convertir estructura del plan automático a formato TablaEditable
            const datosDia = {
                'Desayuno': convertirComida(diaPlan.comidas.desayuno),
                'Media Mañana': convertirComida(diaPlan.comidas.medioDia),
                'Comida': convertirComida(diaPlan.comidas.almuerzo),
                'Merienda': convertirComida(diaPlan.comidas.merienda),
                'Cena': convertirComida(diaPlan.comidas.cena)
            };
            
            planSemanaEditable[nombreDia] = datosDia;
        });
        
        // Guardar en datosUsuario para que pueda ser cargado por TablaEditable
        datosUsuario.planSemana = planSemanaEditable;
        window.datosUsuario = datosUsuario;
        actualizarEstructuraPlanExport();
    }
}

// Función helper para parsear un string formateado de alimento y extraer nombre y cantidad
function parsearAlimentoFormateado(alimentoStr) {
    if (!alimentoStr || typeof alimentoStr !== 'string') {
        return { nombre: '', gramos: 0 };
    }
    
    // Ejemplos de formatos:
    // "Arroz basmati (1) (76g)"
    // "Barrita proteica (1 unidad)"
    // "Plátano (110g)"
    // "Codorniz (190g)"
    
    // Intentar extraer cantidad en gramos: buscar el último "(XXg)" en el string
    // Ejemplos: "Arroz basmati (1) (76g)" -> extraer "76g"
    const regexGramos = /\((\d+(?:\.\d+)?)g\)/g;
    const matchesGramos = [...alimentoStr.matchAll(regexGramos)];
    let gramos = 0;
    
    if (matchesGramos.length > 0) {
        // Tomar el último match (el más específico)
        gramos = parseFloat(matchesGramos[matchesGramos.length - 1][1]);
    } else {
        // Intentar extraer unidades: "(1 unidad)", "(2 unidades)"
        const regexUnidades = /\((\d+)\s*(?:unidad|unidades)\)/i;
        const matchUnidades = alimentoStr.match(regexUnidades);
        if (matchUnidades) {
            const unidades = parseInt(matchUnidades[1]);
            // Convertir unidades a gramos aproximados según el tipo de alimento
            if (alimentoStr.toLowerCase().includes('huevo')) {
                gramos = unidades * 50; // Aproximadamente 50g por huevo
            } else if (alimentoStr.toLowerCase().includes('barrita')) {
                gramos = unidades * 50; // Aproximadamente 50g por barrita
            } else if (alimentoStr.toLowerCase().includes('tortilla')) {
                gramos = unidades * 30; // Aproximadamente 30g por tortilla
            } else {
                gramos = unidades * 50; // Valor por defecto
            }
        }
    }
    
    // Extraer nombre: todo antes del primer paréntesis
    // Ejemplo: "Arroz basmati (1) (76g)" -> "Arroz basmati"
    const nombre = alimentoStr.split('(')[0].trim();
    
    return { nombre, gramos };
}

// Función helper para convertir comidas del plan automático al formato TablaEditable
function convertirComida(comida) {
    if (!comida || !comida.alimentos) return [];
    
    return comida.alimentos.map(alimento => {
        // Los alimentos pueden venir como strings formateados o como objetos
        let nombre, gramos, calorias, proteinas, grasas, hidratos;
        
        if (typeof alimento === 'string') {
            // Es un string formateado, necesitamos parsearlo
            const parsed = parsearAlimentoFormateado(alimento);
            nombre = parsed.nombre;
            gramos = parsed.gramos;
            
            // Obtener valores nutricionales desde la base de datos
            if (window.obtenerInfoNutricional && nombre) {
                const info = window.obtenerInfoNutricional(nombre, gramos);
                if (info) {
                    calorias = info.calorias || 0;
                    proteinas = info.proteinas || 0;
                    grasas = info.grasas || 0;
                    hidratos = info.carbohidratos || info.hidratos || 0;
                } else {
                    calorias = proteinas = grasas = hidratos = 0;
                }
            } else {
                calorias = proteinas = grasas = hidratos = 0;
            }
        } else {
            // Es un objeto
            nombre = alimento.nombre || alimento.alimento || '';
            gramos = alimento.gramos || alimento.cantidad || 0;
            calorias = alimento.calorias || 0;
            proteinas = alimento.proteinas || alimento.proteínas || 0;
            grasas = alimento.grasas || 0;
            hidratos = alimento.hidratos || alimento.carbohidratos || 0;
        }
        
        return {
            alimento: nombre,
            gramos: gramos,
            calorias: calorias,
            proteinas: proteinas,
            grasas: grasas,
            hidratos: hidratos
        };
    });
}

// Función helper para detectar si un día es de descanso
function esDiaDescanso(nombreDia) {
    if (!datosUsuario.diasEntreno || datosUsuario.diasEntreno.length === 0) {
        return false; // Si no hay días seleccionados, todos son de entreno por defecto
    }
    
    // Normalizar el nombre del día: convertir a minúsculas y quitar tildes para coincidir con los valores del formulario
    // El formulario guarda: "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" (sin tildes)
    const normalizar = (texto = '') => texto
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zñ ]/g, '')
        .trim();
    
    const valorDia = normalizar(nombreDia);
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
            <td class="nombre-comida">🥤 MEDIA<br/>MAÑANA</td>
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
            
            try {
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
                const prohibicionesElement = document.getElementById('prohibiciones');
                const prohibicionesAdicionales = prohibicionesElement ? prohibicionesElement.value : '';
                const todasLasProhibiciones = [...intolerancias, prohibicionesAdicionales].filter(p => p.trim() !== '').join(', ');
                
                // Obtener días de entrenamiento seleccionados
                const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]:checked');
                const diasEntreno = Array.from(diasEntrenoCheckboxes).map(cb => cb.value);
                const numDiasEntreno = diasEntreno.length;
                
                // Obtener actividad física del deporte
                const actividadFisicaDeporte = document.getElementById('actividadFisicaDeporte')?.value || 'moderada';
                
                // Validar coherencia entre días de entrenamiento y nivel de actividad
                const rangosActividad = {
                    'sedentario': { min: 0, max: 2, descripcion: '0-2 días' },
                    'ligera': { min: 1, max: 3, descripcion: '1-3 días' },
                    'moderada': { min: 3, max: 5, descripcion: '3-5 días' },
                    'intensa': { min: 6, max: 7, descripcion: '6-7 días' },
                    'muy-intensa': { min: 6, max: 7, descripcion: '6-7 días' }
                };
                
                const rangoEsperado = rangosActividad[actividadFisicaDeporte];
                if (rangoEsperado && (numDiasEntreno < rangoEsperado.min || numDiasEntreno > rangoEsperado.max)) {
                    const actividadTexto = {
                        'sedentario': 'Sedentaria',
                        'ligera': 'Ligera (1-3 días)',
                        'moderada': 'Moderada (3-5 días)',
                        'intensa': 'Intensa (6-7 días)',
                        'muy-intensa': 'Muy intensa (6-7 días)'
                    }[actividadFisicaDeporte] || actividadFisicaDeporte;
                    
                    mostrarNotificacion(
                        `⚠️ Inconsistencia detectada: Has seleccionado "${actividadTexto}" pero has marcado ${numDiasEntreno} día(s) de entrenamiento. ` +
                        `Para esta actividad, el rango esperado es ${rangoEsperado.descripcion}. ` +
                        `Por favor, ajusta los días de entrenamiento o cambia el nivel de actividad antes de generar el plan.`,
                        'error'
                    );
                    return; // Detener la generación de la dieta
                }
                
                // Validar que los campos requeridos existan antes de acceder
                const nombreElem = document.getElementById('nombre');
                const fechaRegistroElem = document.getElementById('fechaRegistro');
                const sexoElem = document.getElementById('sexo');
                const edadElem = document.getElementById('edad');
                const alturaElem = document.getElementById('altura');
                const pesoElem = document.getElementById('peso');
                const tipoPersonaElem = document.getElementById('tipoPersona');
                const objetivoElem = document.getElementById('objetivo');
                const modoGeneracionElem = document.getElementById('modoGeneracion');
                const duracionElem = document.getElementById('duracion');
                const tipoTermogenicoElem = document.getElementById('tipoTermogenico');
                const superavitEntrenoElem = document.getElementById('superavitEntreno');
                const superavitDescansoElem = document.getElementById('superavitDescanso');
                
                if (!nombreElem || !fechaRegistroElem || !sexoElem || !edadElem || !alturaElem || !pesoElem || !tipoPersonaElem || !objetivoElem || !duracionElem) {
                    mostrarNotificacion('❌ Error: Faltan campos requeridos en el formulario', 'error');
                    console.error('Campos faltantes:', {
                        nombre: !!nombreElem,
                        fechaRegistro: !!fechaRegistroElem,
                        sexo: !!sexoElem,
                        edad: !!edadElem,
                        altura: !!alturaElem,
                        peso: !!pesoElem,
                        tipoPersona: !!tipoPersonaElem,
                        objetivo: !!objetivoElem,
                        duracion: !!duracionElem
                    });
                    return;
                }
                
                datosUsuario = {
                    nombre: nombreElem.value,
                    fechaRegistro: fechaRegistroElem.value,
                    sexo: sexoElem.value,
                    edad: parseInt(edadElem.value) || 0,
                    altura: parseFloat(alturaElem.value) || 0,
                    peso: parseFloat(pesoElem.value) || 0,
                    tipoPersona: tipoPersonaElem.value,
                    objetivo: objetivoElem.value,
                    modoGeneracion: modoGeneracionElem ? (modoGeneracionElem.value || 'automatico') : 'automatico',
                    prohibiciones: todasLasProhibiciones,
                    intolerancias: intolerancias,
                    preferencias: preferencias, // Guardar preferencias dietéticas
                    duracion: duracionElem.value,
                    diasEntreno: diasEntreno,
                    actividadFisicaDeporte: actividadFisicaDeporte,
                    tipoTermogenico: tipoTermogenicoElem ? tipoTermogenicoElem.value : 'no-sedentaria',
                    superavitEntreno: superavitEntrenoElem ? parseFloat(superavitEntrenoElem.value || 5) : 5,
                    superavitDescanso: superavitDescansoElem ? parseFloat(superavitDescansoElem.value || 5) : 5
                };
                
                // Calcular macronutrientes con manejo de errores
                try {
                    calcularMacronutrientes();
                } catch (error) {
                    console.error('❌ Error al calcular macronutrientes:', error);
                    mostrarNotificacion('❌ Error al calcular macronutrientes: ' + error.message, 'error');
                    return;
                }
                
                // Actualizar referencia global
                window.datosUsuario = datosUsuario;
                
                // Marcar operación crítica para prevenir reload del Service Worker
                if (window.marcarOperacionCritica) {
                    window.marcarOperacionCritica(true);
                }
                
                // Esperar un momento antes de mostrar resultados para asegurar que todo esté listo
                await new Promise(resolve => setTimeout(resolve, 100));
                
                // Mostrar resultados con manejo de errores
                try {
                    if (window.mostrarResultados) {
                        window.mostrarResultados();
                    } else {
                        console.error('❌ mostrarResultados no está disponible');
                        mostrarNotificacion('❌ Error: No se puede mostrar el plan de alimentación', 'error');
                    }
                } catch (error) {
                    console.error('❌ Error crítico al mostrar resultados:', error);
                    mostrarNotificacion('❌ Error al generar el plan: ' + error.message, 'error');
                } finally {
                    // Desmarcar operación crítica después de un delay para asegurar que todo se haya renderizado
                    setTimeout(() => {
                        if (window.marcarOperacionCritica) {
                            window.marcarOperacionCritica(false);
                        }
                    }, 2000); // Esperar 2 segundos después de mostrar resultados
                }
            } catch (error) {
                console.error('❌ Error crítico al procesar formulario:', error);
                mostrarNotificacion('❌ Error crítico al generar el plan: ' + error.message, 'error');
                // Asegurar que se desmarque la operación crítica incluso si hay error
                if (window.marcarOperacionCritica) {
                    window.marcarOperacionCritica(false);
                }
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
                // Sincronizar plan manual antes de guardar (si aplica)
                if (datosUsuario.modoGeneracion === 'manual' && window.tablaEditable) {
                    sincronizarPlanManualConDatosUsuario();
                }
                
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
     * @param {Object} tamanosFuente - Tamaños de fuente dinámicos (opcional)
     * @returns {string}
     */
    function generarCSSPDF(tamanosFuente = null) {
        // Usar tamaños dinámicos si están disponibles, sino usar valores por defecto
        const tamanos = tamanosFuente || window.tamanosFuentePDF || {
            tamanoItemAlimento: 7.6,
            tamanoTituloComida: 7.8,
            tamanoHeader: 8.4,
            tamanoSubtitulo: 8.0
        };
        return `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html {
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                text-size-adjust: 100%;
            }
            body {
                font-family: 'Arial', 'Helvetica', sans-serif;
                font-size: 10.2pt;
                line-height: 1.6;
                color: #000;
                background: #fff;
                padding: 2mm 8mm 3mm 8mm;
                margin-bottom: 0;
                padding-bottom: 3mm;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            body.layout-landscape {
                padding: 0.5mm 5mm 3mm 5mm;
                max-height: 210mm;
                margin-bottom: 0;
                padding-bottom: 3mm;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .plan-tabla-editable {
                flex: 1;
                display: flex;
                flex-direction: column;
                min-height: 0;
            }
            .plan-tabla-editable table {
                max-height: 182mm;
                height: auto;
                flex: 1;
            }
            @media screen and (max-width: 800px) {
                body {
                    font-size: 9pt;
                    padding: 1.5mm 6mm 6mm 6mm;
                }
                body.layout-landscape {
                    padding: 1mm 5mm 4mm 5mm;
                }
                .titulo-principal {
                    font-size: 12pt !important;
                }
                .nombre-profesional {
                    font-size: 10pt !important;
                }
                .cliente-nombre {
                    font-size: 9pt !important;
                }
                table {
                    font-size: 6.5pt !important;
                }
                th, td {
                    padding: 2px !important;
                    font-size: 6.5pt !important;
                }
                .tabla-plan-semanal th,
                .tabla-plan-semanal td {
                    font-size: 6.5pt !important;
                    padding: 1px !important;
                }
                .celda-dia .item-alimento {
                    font-size: 6pt !important;
                }
                .titulo-comida {
                    font-size: 6.5pt !important;
                }
            }
            .header {
                margin-bottom: 0.3mm;
                position: relative;
                margin-top: 0;
            }
            .titulo-principal {
                font-size: 14pt;
                font-weight: 800;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                margin: 1mm 0 0 0;
                padding: 0;
                color: #000;
                text-align: center;
                line-height: 0.95;
            }
            .header-top {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 8mm;
                margin: 0;
                padding: 0;
            }
            .header-content {
                text-align: center;
                position: relative;
                margin: 0;
                padding: 0;
            }
            .nombre-profesional {
                font-size: 11pt;
                font-weight: 700;
                margin: 0.5mm 0 0 0;
                padding: 0;
                color: #000;
                line-height: 0.95;
            }
            .especialidades {
                font-size: 6pt;
                color: #000;
                font-weight: 600;
                text-transform: uppercase;
                margin: 1.2mm 0 4mm 0;
                padding: 0;
                line-height: 1;
            }
            .contacto {
                font-size: 6.8pt;
                color: #000;
                font-weight: 600;
                display: flex;
                flex-direction: column;
                gap: 0.4mm;
                line-height: 1.2;
            }
            .contacto span { white-space: nowrap; }
            .logo-header {
                display: flex;
                align-items: flex-start;
                justify-content: flex-end;
                margin-left: auto;
                padding-top: 0;
            }
            .logo-pdf {
                width: 32mm;
                height: 22mm;
                object-fit: contain;
            }
            .cliente-info {
                margin-bottom: 0.5mm;
                padding-bottom: 0.3mm;
                border-bottom: 1px solid #000;
                display: flex;
                align-items: center;
                gap: 6mm;
            }
            .cliente-nombre {
                font-weight: 700;
                font-size: 10pt;
                color: #000;
                line-height: 1.2;
                white-space: nowrap;
            }
            .cliente-datos {
                font-size: 7.2pt;
                color: #000;
                font-weight: 500;
                line-height: 1.3;
                flex: 1;
            }
            .recordatorio-agua {
                color: #4FC3F7;
                font-weight: 700;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 4px 0;
                font-size: 7.6pt;
            }
            th {
                border: 1px solid #000;
                padding: 4px;
                text-align: left;
                font-weight: 700;
                background: #fff;
                color: #000;
                font-size: 8.4pt;
            }
            td {
                border: 1px solid #666;
                padding: 3px;
                text-align: left;
                background: #fff;
                color: #000;
                font-size: 7.4pt;
                line-height: 1.2;
            }
            .plan-tabla-editable { 
                width: 100%; 
                margin-top: 4px;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 0;
            }
            .pdf-semana {
                margin-bottom: 10px;
                page-break-after: always;
                page-break-inside: avoid;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 0;
            }
            .pdf-semana:last-of-type { 
                page-break-after: auto; 
            }
            .titulo-semana {
                font-size: 14pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 4px;
                flex-shrink: 0;
            }
            .tabla-plan-semanal {
                width: 100%;
                max-width: 100%;
                border-collapse: collapse;
                table-layout: fixed;
                margin: 0 auto;
                page-break-inside: avoid;
                flex-shrink: 0;
                max-height: 182mm;
                height: auto;
                border-bottom: 2px solid #000 !important;
            }
            .plan-tabla-editable {
                width: 100%;
                max-height: 182mm;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                flex: 1;
            }
            .pdf-semana {
                width: 100%;
                max-height: 182mm;
                overflow: hidden;
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .pdf-semana table {
                flex: 1;
                height: 100%;
            }
            .tabla-plan-semanal th,
            .tabla-plan-semanal td {
                border: 1px solid #666;
                padding: ${Math.max(1, tamanos.tamanoItemAlimento * 0.1)}px ${Math.max(1, tamanos.tamanoItemAlimento * 0.08)}px;
                font-size: ${tamanos.tamanoItemAlimento}pt;
                vertical-align: top;
                word-wrap: break-word;
                overflow-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: ${Math.max(1.1, Math.min(1.3, 1.0 + (tamanos.tamanoItemAlimento - 6) * 0.02))};
            }
            .tabla-plan-semanal tbody tr:last-child td {
                border-bottom: 2px solid #000 !important;
            }
            .tabla-plan-semanal tbody tr:last-child th {
                border-bottom: 2px solid #000 !important;
            }
            .tabla-plan-semanal th {
                background: #fff;
                font-weight: 700;
                text-align: center;
                padding: ${Math.max(2, tamanos.tamanoHeader * 0.15)}px ${Math.max(1, tamanos.tamanoHeader * 0.1)}px;
                font-size: ${tamanos.tamanoHeader}pt;
                line-height: ${Math.max(1.1, Math.min(1.2, 1.0 + (tamanos.tamanoHeader - 6) * 0.015))};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .tabla-plan-semanal th,
            .tabla-plan-semanal td {
                width: ${Math.round((100 / 7) * 100) / 100}%;
            }
            .tabla-plan-semanal .subtitulo-dia {
                display: block;
                font-size: ${tamanos.tamanoSubtitulo}pt;
                margin-top: 2px;
                font-weight: 600;
            }
            .celda-dia {
                min-height: 12px;
                height: auto;
                word-break: break-word;
                vertical-align: top;
                padding: ${Math.max(1, tamanos.tamanoItemAlimento * 0.1)}px ${Math.max(1, tamanos.tamanoItemAlimento * 0.08)}px;
                overflow: hidden;
            }
            .celda-dia .item-alimento {
                display: block;
                margin-left: 6px;
                margin-bottom: 1px;
                position: relative;
                font-size: ${tamanos.tamanoItemAlimento}pt;
                line-height: ${Math.max(1.1, Math.min(1.3, 1.0 + (tamanos.tamanoItemAlimento - 6) * 0.02))};
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            .celda-dia .item-alimento::before {
                content: '•';
                position: absolute;
                left: -8px;
            }
            .celda-dia .item-alimento:last-child {
                margin-bottom: 0;
            }
            .celda-vacia {
                color: #888;
                font-style: italic;
            }
            .titulo-comida {
                display: block;
                font-weight: 700;
                margin-bottom: ${Math.max(1, Math.min(2, tamanos.tamanoTituloComida * 0.12))}px;
                font-size: ${tamanos.tamanoTituloComida}pt;
                line-height: ${Math.max(1.1, Math.min(1.25, 1.0 + (tamanos.tamanoTituloComida - 6) * 0.02))};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            /* Estilos anteriores mantenidos para compatibilidad */
            .dia-plan {
                margin: 8px 0;
                page-break-inside: avoid;
                border: 1px solid #000;
                padding: 8px;
                display: block;
                width: 100%;
            }
            .dia-titulo,
            .dia-titulo-header {
                font-weight: 700;
                font-size: 11pt;
                text-transform: uppercase;
                margin-bottom: 6px;
                border-bottom: 1px solid #000;
                padding-bottom: 4px;
                line-height: 1.2;
                display: block;
            }
            .comida-row { margin: 8px 0; line-height: 1.5; }
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
                .hidratacion-section {
                    margin-top: 50px !important;
                    margin-bottom: 30px !important;
                    page-break-inside: avoid;
                    page-break-before: auto;
                    clear: both;
                }
            }
            .hidratacion-section {
                margin-top: 40px;
                margin-bottom: 20px;
                page-break-inside: avoid;
                clear: both;
            }
        `;
    }
    
    /**
     * Genera el header del PDF con información profesional y del cliente
     * @param {object} datos - Datos del cliente
     * @param {string} fecha - Fecha formateada
     * @returns {Promise<string>}
     */
    async function generarHeaderPDF(datos, fecha) {
        const nombreCliente = datos.nombre || 'Cliente';
        const subtags = [];
        if (datos.edad) subtags.push(`Edad: ${datos.edad}`);
        if (datos.altura) subtags.push(`Altura: ${datos.altura} cm`);
        if (datos.peso) subtags.push(`Peso: ${datos.peso} kg`);
        if (datos.imc) subtags.push(`IMC: ${datos.imc}`);
        if (datos.sexo) subtags.push(`Sexo: ${datos.sexo}`);
        if (datos.tipoPersona) subtags.push(`Tipo: ${datos.tipoPersona}`);
        if (datos.objetivo) subtags.push(`Objetivo: ${datos.objetivo}`);
        
        // Convertir logo a base64
        let logoBase64 = '';
        try {
            logoBase64 = await convertirImagenABase64('iconofit.png');
        } catch (e) {
            console.warn('No se pudo cargar el logo:', e);
        }
        
        const logoHTML = logoBase64 ? `<img src="${logoBase64}" alt="Logo" class="logo-pdf">` : '';
        const infoCliente = subtags.join(' · ');
        const recordatorioHidratacion = 'Hidratación: Consumir entre 2-3 litros de agua al día.';
        
        return `
            <div class="header">
                <div class="titulo-principal">PLAN DE ALIMENTACIÓN PERSONALIZADO</div>
                <div class="header-content">
                    <div class="nombre-profesional">MAIKA PORCUNA</div>
                    <div class="especialidades">Nutrición · Dietética · Suplementación · Nutrición Deportiva</div>
                </div>
                <div class="header-top">
                    <div class="contacto">
                        <span>📝 ${fecha}</span>
                        <span>📧 Maikafit1977@gmail.com</span>
                        <span>📞 +34 650 229 987</span>
                    </div>
                    ${logoHTML ? `<div class="logo-header">${logoHTML}</div>` : '<div class="logo-header"></div>'}
                </div>
            </div>
            <div class="cliente-info">
                <div class="cliente-nombre">${nombreCliente}</div>
                <div class="cliente-datos">${infoCliente} · <span class="recordatorio-agua">${recordatorioHidratacion}</span></div>
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
        
        // Remover tabla de información del usuario si existe (datos duplicados)
        const infoUsuarioTable = clone.querySelector('.info-usuario-table, #info-usuario-table');
        if (infoUsuarioTable) {
            infoUsuarioTable.remove();
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
     * Construye una estructura normalizada del plan semanal para reutilizar en PDF/Excel
     * @returns {{diasBase: string[], comidas: string[], semanas: Array, formatoAlimento: Function, esDiaDescanso: Function}|null}
     */
    function construirPlanSemanalEstructurado() {
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
            if (!window.datosUsuario || !Array.isArray(window.datosUsuario.diasEntreno) || window.datosUsuario.diasEntreno.length === 0) {
                return true;
            }
            const valorDia = normalizar(nombreDia);
            const diasEntrenoNormalizados = window.datosUsuario.diasEntreno.map(d => normalizar(d));
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
     * @returns {ReturnType<typeof construirPlanSemanalEstructurado>}
     */
    function actualizarEstructuraPlanExport() {
        const estructura = construirPlanSemanalEstructurado();
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
    window.actualizarEstructuraPlanExport = actualizarEstructuraPlanExport;

    /**
     * Calcula el tamaño de fuente dinámico basado en la cantidad de contenido
     * @param {Object} estructura - Estructura del plan semanal
     * @returns {Object} - Tamaños de fuente calculados
     */
    function calcularTamanosFuenteDinamicos(estructura) {
        const { diasBase, comidas, semanas } = estructura;
        
        // Contar total de alimentos en todas las celdas
        let totalAlimentos = 0;
        let maxAlimentosPorCelda = 0;
        
        semanas.forEach(semana => {
            semana.columnas.forEach(col => {
                comidas.forEach(comida => {
                    const items = col.alimentosPorComida[comida] || [];
                    totalAlimentos += items.length;
                    if (items.length > maxAlimentosPorCelda) {
                        maxAlimentosPorCelda = items.length;
                    }
                });
            });
        });
        
        // Calcular densidad: alimentos por celda promedio
        const totalCeldas = semanas.length * diasBase.length * comidas.length;
        const densidadAlimentos = totalCeldas > 0 ? totalAlimentos / totalCeldas : 0;
        
        // Tamaños base para A4 horizontal (297mm x 210mm)
        // Altura disponible aproximada: ~195mm (descontando header y márgenes mínimos)
        // Ancho disponible: ~287mm
        
        // Calcular tamaño de fuente basado en densidad y distribución
        // Objetivo: ajustar dinámicamente para mejor legibilidad y uso del espacio
        
        // Calcular altura promedio de contenido por celda (estimación)
        const alturaEstimadaPorCelda = (totalAlimentos / totalCeldas) * 4; // ~4mm por alimento
        
        // Tamaño base inicial - ajustado para que quepa en una sola hoja
        // Altura disponible: ~182mm (descontando header ~25mm y margen inferior 3mm)
        // Ancho disponible: ~287mm / 7 días = ~41mm por columna
        const alturaDisponiblePorCelda = 182 / 5; // ~36.4mm por fila de comida
        const anchoDisponiblePorCelda = 287 / 7; // ~41mm por columna
        
        // Calcular espacio disponible estimado por celda (en mm)
        const espacioDisponible = alturaDisponiblePorCelda * anchoDisponiblePorCelda; // mm²
        
        // Calcular espacio ocupado estimado
        const espacioOcupado = alturaEstimadaPorCelda * anchoDisponiblePorCelda;
        const porcentajeUso = espacioOcupado > 0 ? (espacioOcupado / espacioDisponible) * 100 : 0;
        
        // Calcular tamaño base - 10.0pt como tamaño base
        let tamanoBase = 10.0; // Tamaño base fijado en 10.0pt
        
        // Ajuste según densidad de alimentos
        if (densidadAlimentos < 1.0) {
            tamanoBase = Math.min(12.0, 11.0 + (1.0 - densidadAlimentos) * 1.0);
        } else if (densidadAlimentos < 2.0) {
            tamanoBase = Math.min(11.5, 11.0 + (2.0 - densidadAlimentos) * 0.5);
        } else if (densidadAlimentos < 3.0) {
            tamanoBase = 10.0;
        } else if (densidadAlimentos < 4.0) {
            tamanoBase = Math.max(9.0, 10.0 - (densidadAlimentos - 3.0) * 0.5);
        } else {
            tamanoBase = Math.max(8.5, 9.0 - (densidadAlimentos - 4.0) * 0.3);
        }
        
        // Ajuste según máximo de alimentos por celda
        if (maxAlimentosPorCelda > 8) {
            tamanoBase = Math.max(8.5, tamanoBase - 0.8);
        } else if (maxAlimentosPorCelda > 6) {
            tamanoBase = Math.max(9.0, tamanoBase - 0.5);
        } else if (maxAlimentosPorCelda <= 2 && densidadAlimentos < 2.0) {
            tamanoBase = Math.min(12.0, tamanoBase + 1.0);
        } else if (maxAlimentosPorCelda <= 3 && densidadAlimentos < 2.5) {
            tamanoBase = Math.min(11.5, tamanoBase + 0.8);
        }
        
        // Ajuste según altura estimada (para evitar desbordamiento)
        if (alturaEstimadaPorCelda > 35) {
            tamanoBase = Math.max(8.5, tamanoBase - 0.8);
        } else if (alturaEstimadaPorCelda > 30) {
            tamanoBase = Math.max(9.0, tamanoBase - 0.5);
        } else if (alturaEstimadaPorCelda < 15 && densidadAlimentos < 2.5) {
            tamanoBase = Math.min(11.5, tamanoBase + 0.8);
        }
        
        console.log(`📊 Cálculo dinámico: densidad=${densidadAlimentos.toFixed(2)}, maxPorCelda=${maxAlimentosPorCelda}, alturaEst=${alturaEstimadaPorCelda.toFixed(1)}mm, usoEspacio=${porcentajeUso.toFixed(1)}%, tamañoBase=${tamanoBase.toFixed(1)}pt`);
        
        // Redondear a 1 decimal
        tamanoBase = Math.round(tamanoBase * 10) / 10;
        
        // Calcular tamaños relativos con mejor proporción
        const tamanoItem = tamanoBase;
        const tamanoTitulo = Math.min(tamanoBase + 1.0, tamanoBase * 1.15); // Máximo 15% más grande
        const tamanoHeader = Math.min(tamanoBase + 1.5, tamanoBase * 1.25); // Máximo 25% más grande
        const tamanoSubtitulo = Math.min(tamanoBase + 0.5, tamanoBase * 1.1); // Máximo 10% más grande
        
        return {
            tamanoItemAlimento: tamanoItem,
            tamanoTituloComida: tamanoTitulo,
            tamanoHeader: tamanoHeader,
            tamanoSubtitulo: tamanoSubtitulo
        };
    }

    /**
     * Genera el HTML del plan desde tabla editable
     * @returns {string}
     */
    function generarHTMLDesdeTablaEditable() {
        const estructura = construirPlanSemanalEstructurado();
        if (!estructura) {
            return '<div class="plan-tabla-editable"><p style="padding:8px;font-size:9pt;">No hay datos disponibles para generar el plan semanal.</p></div>';
        }
 
        const { diasBase, comidas, semanas, formatoAlimento, esDiaDescanso } = estructura;
        
        // Calcular tamaños dinámicos
        const tamanos = calcularTamanosFuenteDinamicos(estructura);
        
        // Guardar tamaños en window para que el CSS los use
        window.tamanosFuentePDF = tamanos;
 
        const escapeHTML = (str = '') => String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
 
        let html = '<div class="plan-tabla-editable">';
 
        semanas.forEach((semana, indice) => {
            html += '<div class="pdf-semana">';
            if (semanas.length > 1) {
                html += `<h2 class="titulo-semana">Semana ${indice + 1}</h2>`;
            }
            html += '<table class="tabla-plan-semanal"><thead><tr>';
 
            semana.columnas.forEach(col => {
                const icono = col.esDescanso ? '😴' : '💪';
                // Asegurar que el día se muestre correctamente
                const diaNombre = col.diaBase || col.titulo || 'Día';
                const etiquetaDia = `${diaNombre} ${icono}`;
                html += `<th title="${escapeHTML(diaNombre)}">${escapeHTML(etiquetaDia)}</th>`;
            });
 
            html += '</tr></thead><tbody>';
 
            comidas.forEach(comida => {
                html += '<tr>';
                semana.columnas.forEach(col => {
                    const items = col.alimentosPorComida[comida] || [];
                    if (!items.length) {
                        html += '<td class="celda-dia celda-vacia">-</td>';
                    } else {
                        const contenido = items
                            .map(item => `<span class="item-alimento">${escapeHTML(formatoAlimento(item))}</span>`)
                            .join(' ');
                        html += `<td class="celda-dia"><span class="titulo-comida">${escapeHTML(comida)}</span>${contenido}</td>`;
                    }
                });
                html += '</tr>';
            });
 
            html += '</tbody></table></div>';
        });

        html += '</div>';
        // Sin línea final, solo el margen inferior
        return html;
    }

    async function exportarExcelProfesional() {
        try {
            if (!window.ExcelJS || typeof window.ExcelJS.Workbook !== 'function') {
                throw new Error('No se cargó la librería ExcelJS');
            }
            if (typeof window.saveAs !== 'function') {
                throw new Error('No se encontró la función saveAs (FileSaver)');
            }

            const estructura = actualizarEstructuraPlanExport();
            if (!estructura) {
                mostrarNotificacion?.('⚠️ No hay datos suficientes para exportar a Excel', 'warning');
                return;
            }

            const ExcelJS = window.ExcelJS;
            const workbook = new ExcelJS.Workbook();
            workbook.creator = 'Maika Porcuna';
            workbook.created = new Date();
            workbook.modified = new Date();

            const cabecera = typeof window.tablaEditable?.obtenerCabeceraExport === 'function'
                ? window.tablaEditable.obtenerCabeceraExport()
                : {};

            const diasBase = estructura.diasBase;
            const comidas = estructura.comidas;

            estructura.semanas.forEach((semana, indexSemana) => {
                const sheetName = estructura.semanas.length > 1 ? `Semana ${indexSemana + 1}` : 'Plan Semanal';
                const sheet = workbook.addWorksheet(sheetName, {
                    properties: { defaultRowHeight: 20 },
                    pageSetup: {
                        orientation: 'landscape',
                        paperSize: 9,
                        fitToPage: true,
                        fitToWidth: 1,
                        fitToHeight: 0
                    },
                    views: [{ state: 'frozen', xSplit: 0, ySplit: 5 }]
                });

                const totalColumnas = diasBase.length;

                sheet.mergeCells(1, 1, 1, totalColumnas);
                const tituloCell = sheet.getCell(1, 1);
                tituloCell.value = 'PLAN DE ALIMENTACIÓN PERSONALIZADO';
                tituloCell.font = { bold: true, size: 18 };
                tituloCell.alignment = { horizontal: 'center', vertical: 'middle' };
                sheet.getRow(1).height = 26;

                sheet.mergeCells(2, 1, 2, totalColumnas);
                const infoCell = sheet.getCell(2, 1);
                infoCell.value = `Cliente: ${cabecera.nombre || datosUsuario.nombre || 'Cliente'}    Fecha: ${cabecera.fecha || new Date().toLocaleDateString('es-ES')}`;
                infoCell.font = { bold: true, size: 12 };
                infoCell.alignment = { horizontal: 'center', vertical: 'middle' };

                sheet.mergeCells(3, 1, 3, totalColumnas);
                const metaCell = sheet.getCell(3, 1);
                metaCell.value = `Objetivo: ${cabecera.objetivo || datosUsuario.objetivo || 'N/D'}    Tipo de persona: ${cabecera.tipoPersona || datosUsuario.tipoPersona || 'N/D'}    Sexo: ${cabecera.sexo || datosUsuario.sexo || 'N/D'}`;
                metaCell.font = { size: 11 };
                metaCell.alignment = { horizontal: 'center', vertical: 'middle' };
                sheet.getRow(3).height = 18;

                sheet.addRow([]);

                const headerRow = sheet.addRow(semana.columnas.map(col => col.titulo));
                headerRow.font = { bold: true, size: 12 };
                headerRow.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
                headerRow.height = 28;
                headerRow.eachCell((cell, colNumber) => {
                    const esDescanso = semana.columnas[colNumber - 1]?.esDescanso;
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: esDescanso ? 'FFFDEBD0' : 'FFE8F5E9' }
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FF666666' } },
                        left: { style: 'thin', color: { argb: 'FF666666' } },
                        bottom: { style: 'thin', color: { argb: 'FF666666' } },
                        right: { style: 'thin', color: { argb: 'FF666666' } }
                    };
                });

                comidas.forEach(comida => {
                    const rowData = semana.columnas.map(col => {
                        const items = col.alimentosPorComida[comida] || [];
                        if (!items.length) {
                            return `${comida}:
—`;
                        }
                        const lineas = items.map(item => `• ${estructura.formatoAlimento(item)}`);
                        return `${comida}:
${lineas.join('\n')}`;
                    });

                    const row = sheet.addRow(rowData);
                    row.font = { size: 12 };
                    row.alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
                    row.height = 140;
                    row.eachCell(cell => {
                        cell.border = {
                            top: { style: 'thin', color: { argb: 'FF999999' } },
                            left: { style: 'thin', color: { argb: 'FF999999' } },
                            bottom: { style: 'thin', color: { argb: 'FF999999' } },
                            right: { style: 'thin', color: { argb: 'FF999999' } }
                        };
                    });
                });

                sheet.columns.forEach((col, colIndex) => {
                    col.width = 28;
                    const esDescanso = semana.columnas[colIndex]?.esDescanso;
                    if (esDescanso) {
                        col.eachCell({ includeEmpty: true }, cell => {
                            cell.fill = cell.fill || {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: 'FFFDF7E3' }
                            };
                        });
                    }
                });
            });

            const buffer = await workbook.xlsx.writeBuffer();
            const nombreArchivo = `Plan_Alimentacion_${(datosUsuario.nombre || cabecera.nombre || 'cliente').replace(/\s+/g, '_')}.xlsx`;
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            window.saveAs(blob, nombreArchivo);

            mostrarNotificacion?.('✅ Excel exportado correctamente', 'success');
        } catch (error) {
            console.error('❌ Error al exportar Excel:', error);
            mostrarNotificacion?.('❌ Error al exportar Excel: ' + error.message, 'error');
        }
    }
    window.exportarExcelProfesional = exportarExcelProfesional;
    
    /**
     * Genera el PDF usando html2canvas y jsPDF
     * @param {string} htmlPDF - HTML completo del documento
     * @param {string} nombreCliente - Nombre del cliente para el archivo
     */
    /**
     * Convierte una imagen a base64
     * @param {string} src - Ruta de la imagen
     * @returns {Promise<string>} - Base64 de la imagen
     */
    function convertirImagenABase64(src) {
        return new Promise((resolve) => {
            // Si ya es base64, retornar directamente
            if (src.startsWith('data:')) {
                resolve(src);
                return;
            }
            
            // Primero intentar buscar la imagen en el DOM si ya está cargada
            const imagenesEnDOM = document.querySelectorAll('img[src*="' + src + '"], img[src*="iconofit"]');
            for (const imgDOM of imagenesEnDOM) {
                if (imgDOM.complete && imgDOM.naturalWidth > 0 && imgDOM.naturalHeight > 0) {
                    try {
                        const canvas = document.createElement('canvas');
                        canvas.width = imgDOM.naturalWidth;
                        canvas.height = imgDOM.naturalHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(imgDOM, 0, 0);
                        const base64 = canvas.toDataURL('image/png');
                        resolve(base64);
                        return;
                    } catch (e) {
                        // Continuar con el método normal si falla
                    }
                }
            }
            
            // Intentar primero con fetch (más robusto para archivos locales y remotos)
            const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
            const origin = window.location.origin;
            const protocol = window.location.protocol;
            const hostname = window.location.hostname;
            const pathname = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
            
            // Generar todas las posibles rutas
            const rutas = [
                src, // Ruta original
                '/' + src, // Desde raíz
                './' + src, // Relativa al directorio actual
                baseUrl + src, // Base URL completa
                origin + '/' + src, // Origin + raíz
                origin + pathname + src, // Origin + pathname
                protocol + '//' + hostname + '/' + src, // Protocolo + hostname + raíz
                protocol + '//' + hostname + pathname + src // Protocolo + hostname + pathname
            ];
            
            // Eliminar duplicados
            const rutasUnicas = [...new Set(rutas)];
            
            // Timeout para evitar esperas indefinidas (5 segundos)
            const timeout = setTimeout(() => {
                console.log('Timeout al cargar la imagen:', src);
                resolve(null);
            }, 5000);
            
            // Función para limpiar timeout y resolver
            const resolver = (result) => {
                clearTimeout(timeout);
                resolve(result);
            };
            
            // Intentar cargar con fetch primero
            const intentarFetch = async (rutaIndex = 0) => {
                if (rutaIndex >= rutasUnicas.length) {
                    // Si fetch falla con todas las rutas, intentar con Image
                    cargarConImage();
                    return;
                }
                
                const ruta = rutasUnicas[rutaIndex];
                try {
                    const response = await fetch(ruta);
                    if (response.ok) {
                        const blob = await response.blob();
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            resolver(reader.result); // Base64
                        };
                        reader.onerror = () => {
                            intentarFetch(rutaIndex + 1);
                        };
                        reader.readAsDataURL(blob);
                    } else {
                        intentarFetch(rutaIndex + 1);
                    }
                } catch (e) {
                    intentarFetch(rutaIndex + 1);
                }
            };
            
            // Método alternativo con Image element
            const cargarConImage = () => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                
                // Función para convertir a base64 cuando la imagen se carga
                const convertir = function() {
                    try {
                        // Verificar que la imagen se cargó correctamente
                        if (!img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) {
                            resolver(null);
                            return;
                        }
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        const base64 = canvas.toDataURL('image/png');
                        resolver(base64);
                    } catch (e) {
                        resolver(null);
                    }
                };
                
                img.onload = convertir;
                
                let intentoActual = 0;
                
                img.onerror = function() {
                    intentoActual++;
                    if (intentoActual < rutasUnicas.length) {
                        img.src = rutasUnicas[intentoActual];
                    } else {
                        resolver(null);
                    }
                };
                
                // Intentar cargar la imagen
                if (src.startsWith('http')) {
                    img.src = src;
                } else {
                    img.src = rutasUnicas[0];
                }
            };
            
            // Comenzar con fetch
            intentarFetch(0);
        });
    }
    
    /**
     * Reemplaza todas las imágenes en el HTML con sus versiones base64
     * @param {string} html - HTML original
     * @returns {Promise<string>} - HTML con imágenes en base64
     */
    async function procesarImagenesParaPDF(html) {
        // Buscar todas las imágenes en el HTML usando regex
        const regexImg = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        const matches = [];
        let match;
        
        while ((match = regexImg.exec(html)) !== null) {
            matches.push({
                fullMatch: match[0],
                src: match[1]
            });
        }
        
        // Convertir cada imagen a base64
        const promesas = matches.map(async (match) => {
            const src = match.src;
            if (src && !src.startsWith('data:') && !src.startsWith('http')) {
                try {
                    // Intentar diferentes rutas
                    let rutaAbsoluta = src;
                    if (!src.startsWith('/')) {
                        rutaAbsoluta = window.location.origin + '/' + src;
                    }
                    
                    const base64 = await convertirImagenABase64(rutaAbsoluta);
                    if (base64 && base64.startsWith('data:')) {
                        // Reemplazar en el HTML
                        const nuevoTag = match.fullMatch.replace(src, base64);
                        html = html.replace(match.fullMatch, nuevoTag);
                    }
                } catch (e) {
                    console.warn('Error procesando imagen:', src, e);
                }
            }
        });
        
        await Promise.all(promesas);
        return html;
    }
    
    async function generarArchivoPDF(htmlPDF, nombreCliente, opciones = {}) {
        const orientacion = opciones.orientacion === 'l' || opciones.orientacion === 'landscape' ? 'l' : 'p';
        const formato = opciones.formato || 'a4';
        const orientacionNombre = orientacion === 'l' ? 'landscape' : 'portrait';
        const pageWidth = orientacion === 'l' ? 297 : 210;
        const pageHeight = orientacion === 'l' ? 210 : 297;
        
        // Detectar si es dispositivo móvil (mejorado para detectar todos los casos)
        const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent) || 
                        (window.innerWidth <= 768) || 
                        ('ontouchstart' in window || navigator.maxTouchPoints > 0);
        
        // Usar iframe para todos los casos (más compatible, evita problemas de ventanas emergentes)
        let container, bodyElement;
        
        // Calcular dimensiones del iframe optimizadas para móviles
        // En móviles, usar píxeles para mejor compatibilidad y escalado
        const mmToPx = 3.779527559; // Conversión aproximada: 1mm = 3.78px a 96 DPI
        let iframeWidth, iframeHeight;
        
        if (esMovil) {
            // En móviles, usar un ancho fijo en píxeles que se escale bien
            // A4 portrait: 210mm = ~794px, A4 landscape: 297mm = ~1123px
            iframeWidth = Math.round(pageWidth * mmToPx);
            iframeHeight = Math.round(pageHeight * mmToPx);
        } else {
            // En desktop, usar milímetros
            iframeWidth = pageWidth + 'mm';
            iframeHeight = pageHeight + 'mm';
        }
        
        // Siempre usar iframe oculto para evitar problemas de ventanas emergentes
        container = document.createElement('iframe');
        container.style.position = 'fixed';
        container.style.top = '-9999px';
        container.style.left = '-9999px';
        container.style.width = typeof iframeWidth === 'number' ? iframeWidth + 'px' : iframeWidth;
        container.style.height = typeof iframeHeight === 'number' ? iframeHeight + 'px' : iframeHeight;
        container.style.border = 'none';
        // Asegurar que el iframe tenga un viewport adecuado en móviles
        if (esMovil) {
            container.setAttribute('scrolling', 'no');
        }
        document.body.appendChild(container);
        
        const iframeDoc = container.contentDocument || container.contentWindow.document;
        
        iframeDoc.open();
        iframeDoc.write(htmlPDF);
        iframeDoc.close();
        
        bodyElement = iframeDoc.body;
        
        // Asegurar que el body tenga el ancho correcto en móviles
        if (esMovil && bodyElement) {
            bodyElement.style.width = typeof iframeWidth === 'number' ? iframeWidth + 'px' : iframeWidth;
            bodyElement.style.maxWidth = typeof iframeWidth === 'number' ? iframeWidth + 'px' : iframeWidth;
            bodyElement.style.overflow = 'hidden';
        }
        
        // Esperar a que todas las imágenes se carguen antes de generar el canvas
        const esperarImagenes = () => {
            return new Promise((resolve) => {
                const imagenes = bodyElement.querySelectorAll('img');
                if (imagenes.length === 0) {
                    resolve();
                    return;
                }
                
                let cargadas = 0;
                const total = imagenes.length;
                
                const verificarCarga = () => {
                    cargadas++;
                    if (cargadas >= total) {
                        resolve();
                    }
                };
                
                imagenes.forEach((img) => {
                    if (img.complete && img.naturalWidth > 0) {
                        verificarCarga();
                    } else {
                        img.onload = verificarCarga;
                        img.onerror = verificarCarga; // Continuar aunque haya error
                    }
                });
                
                // Timeout de seguridad (más tiempo en móviles)
                setTimeout(resolve, esMovil ? 5000 : 3000);
            });
        };
        
        setTimeout(async () => {
            try {
                await esperarImagenes();
                
                // Convertir todas las imágenes del iframe a base64 para evitar problemas CORS
                const imagenesEnIframe = bodyElement.querySelectorAll('img');
                for (const img of imagenesEnIframe) {
                    if (img.src && !img.src.startsWith('data:') && !img.src.startsWith('http')) {
                        try {
                            // Intentar convertir a base64
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            canvas.width = img.naturalWidth || img.width || 100;
                            canvas.height = img.naturalHeight || img.height || 100;
                            
                            // Si la imagen está cargada, dibujarla
                            if (img.complete && img.naturalWidth > 0) {
                                ctx.drawImage(img, 0, 0);
                                try {
                                    img.src = canvas.toDataURL('image/png');
                                } catch (e) {
                                    // Si falla, intentar con la función de conversión
                                    const base64 = await convertirImagenABase64(img.getAttribute('src') || img.src);
                                    if (base64 && base64.startsWith('data:')) {
                                        img.src = base64;
                                    }
                                }
                            }
                        } catch (e) {
                            console.warn('No se pudo convertir imagen a base64:', img.src, e);
                            // Si falla, intentar remover la imagen o usar un placeholder
                            if (img.getAttribute('src')) {
                                try {
                                    const base64 = await convertirImagenABase64(img.getAttribute('src'));
                                    if (base64 && base64.startsWith('data:')) {
                                        img.src = base64;
                                    }
                                } catch (e2) {
                                    console.warn('Error en conversión alternativa:', e2);
                                }
                            }
                        }
                    }
                }
                
                // Esperar un momento para que las imágenes base64 se carguen
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Ajustar escala según dispositivo - optimizado para móviles
                // En móviles usar escala más alta pero ajustada al ancho disponible
                let scale = esMovil ? 3 : 2; // Mayor escala en móviles para mejor calidad
                
                // Asegurar que el ancho del contenido sea correcto antes de capturar
                const contenidoWidth = bodyElement.scrollWidth || (typeof iframeWidth === 'number' ? iframeWidth : parseFloat(iframeWidth) * mmToPx);
                const contenidoHeight = bodyElement.scrollHeight || bodyElement.offsetHeight;
                
                // En móviles, ajustar escala si el contenido es muy ancho
                if (esMovil && contenidoWidth > 1200) {
                    scale = Math.max(2, Math.min(3, (1200 / contenidoWidth) * 3));
                }
                
                html2canvas(bodyElement, {
                    scale: scale,
                    useCORS: true,
                    allowTaint: true, // Permitir taint para evitar el error
                    logging: false,
                    backgroundColor: '#ffffff',
                    width: contenidoWidth,
                    height: contenidoHeight,
                    windowWidth: contenidoWidth,
                    windowHeight: contenidoHeight,
                    foreignObjectRendering: false, // Evitar problemas con objetos foráneos
                    removeContainer: false,
                    imageTimeout: 15000,
                    onclone: function(clonedDoc) {
                        // Asegurar que todas las imágenes en el clon tengan crossOrigin
                        const images = clonedDoc.querySelectorAll('img');
                        images.forEach(img => {
                            if (img.src && !img.src.startsWith('data:')) {
                                img.crossOrigin = 'anonymous';
                            }
                        });
                        // Asegurar que el body clonado tenga el ancho correcto
                        const clonedBody = clonedDoc.body;
                        if (clonedBody && esMovil) {
                            clonedBody.style.width = contenidoWidth + 'px';
                            clonedBody.style.maxWidth = contenidoWidth + 'px';
                        }
                    }
                }).then(canvas => {
                    // Guardar dimensiones del canvas antes de convertir
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height;
                    
                    // Usar toBlob en lugar de toDataURL para evitar problemas de CORS
                    return new Promise((resolve, reject) => {
                        canvas.toBlob((blob) => {
                            if (blob) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    resolve({
                                        imgData: reader.result, // Base64 string
                                        width: canvasWidth,
                                        height: canvasHeight
                                    });
                                };
                                reader.onerror = reject;
                                reader.readAsDataURL(blob);
                            } else {
                                // Fallback a toDataURL si toBlob falla
                                try {
                                    const imgData = canvas.toDataURL('image/png', 0.95);
                                    resolve({
                                        imgData: imgData,
                                        width: canvasWidth,
                                        height: canvasHeight
                                    });
                                } catch (e) {
                                    reject(e);
                                }
                            }
                        }, 'image/png', 0.95);
                    });
                }).then(async ({ imgData, width, height }) => {
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF(orientacion, 'mm', formato);
                    
                    const imgWidth = pageWidth;
                    const imgHeight = (height * imgWidth) / width;
                    
                    // Detectar posiciones de los días para evitar cortes
                    let posicionesDias = [];
                    let usarDivisionInteligente = false;
                    
                    try {
                        const diasPlanes = bodyElement.querySelectorAll('.dia-plan');
                        if (diasPlanes.length > 0 && bodyElement.scrollHeight > 0) {
                            // Calcular la escala entre el HTML y la imagen
                            const scaleFactor = imgHeight / bodyElement.scrollHeight;
                            
                            if (isFinite(scaleFactor) && scaleFactor > 0) {
                                diasPlanes.forEach((dia, index) => {
                                    try {
                                        const rect = dia.getBoundingClientRect();
                                        const containerRect = bodyElement.getBoundingClientRect();
                                        if (rect && containerRect) {
                                            const top = (rect.top - containerRect.top) * scaleFactor;
                                            const diaHeight = rect.height * scaleFactor;
                                            
                                            if (isFinite(top) && isFinite(diaHeight) && top >= 0 && diaHeight > 0) {
                                                posicionesDias.push({
                                                    index: index,
                                                    top: top,
                                                    bottom: top + diaHeight,
                                                    height: diaHeight
                                                });
                                            }
                                        }
                                    } catch (e) {
                                        console.warn('Error calculando posición del día:', e);
                                    }
                                });
                                
                                if (posicionesDias.length > 0) {
                                    usarDivisionInteligente = true;
                                }
                            }
                        }
                    } catch (e) {
                        console.warn('Error detectando días, usando división simple:', e);
                    }
                    
                    // Cargar la imagen
                    const img = new Image();
                    img.src = imgData;
                    
                    await new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => reject(new Error('Timeout cargando imagen')), 10000);
                        img.onload = () => {
                            clearTimeout(timeout);
                            resolve();
                        };
                        img.onerror = () => {
                            clearTimeout(timeout);
                            reject(new Error('Error cargando imagen'));
                        };
                    });
                    
                    // Dividir la imagen en páginas
                    // Margen inferior de 3 mm en todas las páginas
                    const margenInferior = 3; // 3 mm
                    
                    if (usarDivisionInteligente && posicionesDias.length > 0) {
                        // Método inteligente: respetar días completos
                        let currentY = 0;
                        let pageNum = 0;
                        
                        while (currentY < imgHeight) {
                            if (pageNum > 0) {
                                pdf.addPage(formato, orientacionNombre);
                            }
                            
                            const availableHeight = pageHeight - margenInferior;
                            let nextY = currentY + availableHeight;
                            
                            // Buscar todos los días que empiezan en o después de currentY
                            const diasDisponibles = posicionesDias.filter(dia => dia.top >= currentY);
                            
                            if (diasDisponibles.length === 0) {
                                // No hay más días, terminar
                                break;
                            }
                            
                            // Encontrar qué días caben completos en esta página
                            const diasQueCaben = diasDisponibles.filter(dia => 
                                dia.top >= currentY && dia.bottom <= currentY + availableHeight
                            );
                            
                            if (diasQueCaben.length > 0) {
                                // Hay días que caben completos, usar el final del último que cabe
                                const ultimoDiaQueCabe = diasQueCaben[diasQueCaben.length - 1];
                                nextY = ultimoDiaQueCabe.bottom;
                                
                                // Verificar si hay más días consecutivos que también caben
                                let siguienteIndex = diasDisponibles.indexOf(ultimoDiaQueCabe) + 1;
                                while (siguienteIndex < diasDisponibles.length) {
                                    const siguienteDia = diasDisponibles[siguienteIndex];
                                    if (siguienteDia.top >= nextY && siguienteDia.bottom <= currentY + availableHeight) {
                                        // Este día también cabe completo, incluirlo
                                        nextY = siguienteDia.bottom;
                                        siguienteIndex++;
                                    } else {
                                        break;
                                    }
                                }
                            } else {
                                // Ningún día cabe completo en esta página
                                const primerDia = diasDisponibles[0];
                                
                                // Si el primer día no cabe completo, moverlo a la siguiente página
                                if (primerDia.bottom > currentY + availableHeight) {
                                    // El día no cabe, terminar esta página sin contenido
                                    // (o poner lo que quepa si ya hay algo)
                                    if (currentY > 0) {
                                        // Hay contenido previo, terminar la página aquí
                                        nextY = currentY + availableHeight;
                                    } else {
                                        // Esta página está vacía, saltar al siguiente día
                                        nextY = primerDia.top;
                                        // Si el día es muy grande, mostrar al menos lo que cabe
                                        if (primerDia.height > availableHeight) {
                                            nextY = currentY + availableHeight;
                                        }
                                    }
                                } else {
                                    // El día cabe, pero no empezó en esta página
                                    nextY = primerDia.bottom;
                                }
                            }
                            
                            const actualHeight = Math.min(nextY - currentY, imgHeight - currentY);
                            
                            if (actualHeight > 0) {
                                try {
                                    const canvas = document.createElement('canvas');
                                    const ctx = canvas.getContext('2d');
                                    canvas.width = img.width;
                                    canvas.height = (actualHeight * img.width) / imgWidth;
                                    
                                    const sourceY = (currentY * img.height) / imgHeight;
                                    const sourceHeight = (actualHeight * img.height) / imgHeight;
                                    
                                    ctx.drawImage(img, 0, sourceY, img.width, sourceHeight, 0, 0, canvas.width, canvas.height);
                                    
                                    const pageImgData = canvas.toDataURL('image/png', 0.95);
                                    const pageImgHeight = actualHeight;
                                    pdf.addImage(pageImgData, 'PNG', 0, 0, imgWidth, pageImgHeight, undefined, 'FAST');
                                    
                                    currentY = nextY;
                                } catch (e) {
                                    console.error('Error recortando imagen:', e);
                                    // Fallback a método simple
                                    break;
                                }
                            } else {
                                const siguienteDia = posicionesDias.find(d => d.top > currentY);
                                if (siguienteDia) {
                                    currentY = siguienteDia.top;
                                } else {
                                    break;
                                }
                            }
                            
                            pageNum++;
                        }
                    } else {
                        // Método simple: división normal (fallback)
                        // Margen inferior de 3 mm en todas las páginas
                        const margenInferior = 3; // 3 mm
                        const availableHeight = pageHeight - margenInferior;
                        
                        // Primera página
                        const primeraAltura = Math.min(imgHeight, availableHeight);
                        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, primeraAltura, undefined, 'FAST');
                        
                        if (imgHeight > availableHeight) {
                            let heightLeft = imgHeight - availableHeight;
                            let position = -availableHeight;
                            while (heightLeft > 0) {
                                pdf.addPage(formato, orientacionNombre);
                                const alturaPagina = Math.min(availableHeight, heightLeft);
                                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                                heightLeft -= availableHeight;
                                position -= availableHeight;
                            }
                        }
                    }
                    
                    const pdfBlob = pdf.output('blob');
                    const pdfUrl = URL.createObjectURL(pdfBlob);
                    const filename = `Dieta_${nombreCliente.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
                    
                    // Detectar iOS específicamente
                    const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    
                    // Descargar PDF - método mejorado para móviles e iOS
                    if (esMovil) {
                        // Para iOS, usar Web Share API para descargar y compartir
                        if (esIOS) {
                            // Intentar usar Web Share API primero (iOS 13+) - Muestra menú de compartir automáticamente
                            if (navigator.share && navigator.canShare) {
                                try {
                                    const file = new File([pdfBlob], filename, { type: 'application/pdf' });
                                    
                                    if (navigator.canShare({ files: [file] })) {
                                        // Usar Web Share API - Esto abre automáticamente el menú de compartir
                                        navigator.share({
                                            files: [file],
                                            title: 'Plan de Alimentación Personalizado',
                                            text: `Plan de alimentación para ${nombreCliente}`
                                        }).then(() => {
                                            mostrarNotificacion('✅ PDF compartido exitosamente', 'success');
                                            setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000);
                                        }).catch((error) => {
                                            // Si el usuario cancela, mostrar mensaje
                                            if (error.name !== 'AbortError') {
                                                console.log('Error al compartir:', error);
                                                // Fallback: abrir en nueva pestaña
                                                window.open(pdfUrl, '_blank');
                                                mostrarNotificacion('📄 PDF listo. Usa el botón de compartir (⫶) para descargarlo o compartirlo.', 'info');
                                                setTimeout(() => URL.revokeObjectURL(pdfUrl), 5000);
                                            } else {
                                                mostrarNotificacion('❌ Compartir cancelado', 'info');
                                                setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000);
                                            }
                                        });
                                    } else {
                                        // Si no puede compartir archivos, abrir en nueva pestaña
                                        throw new Error('No se puede compartir archivos');
                                    }
                                } catch (error) {
                                    // Fallback: abrir en nueva pestaña para compartir manualmente
                                    console.log('Web Share no disponible, abriendo en nueva pestaña:', error);
                                    window.open(pdfUrl, '_blank');
                                    mostrarNotificacion('📄 PDF listo. Usa el botón de compartir (⫶) en la parte superior derecha para descargarlo o compartirlo.', 'info');
                                    setTimeout(() => URL.revokeObjectURL(pdfUrl), 5000);
                                }
                            } else {
                                // Si Web Share API no está disponible, abrir directamente en nueva pestaña
                                window.open(pdfUrl, '_blank');
                                mostrarNotificacion('📄 PDF listo. Usa el botón de compartir (⫶) en la parte superior derecha para descargarlo o compartirlo.', 'info');
                                setTimeout(() => URL.revokeObjectURL(pdfUrl), 5000);
                            }
                            
                        } else {
                            // Para Android y otros móviles, intentar descarga directa
                            try {
                                const a = document.createElement('a');
                                a.href = pdfUrl;
                                a.download = filename;
                                a.style.display = 'none';
                                document.body.appendChild(a);
                                
                                // Crear un evento de toque para móviles
                                const evento = new MouseEvent('click', {
                                    bubbles: true,
                                    cancelable: true,
                                    view: window
                                });
                                a.dispatchEvent(evento);
                                
                                // Fallback: abrir en nueva pestaña si la descarga no funciona
                                setTimeout(() => {
                                    if (document.body.contains(a)) {
                                        window.open(pdfUrl, '_blank');
                                        document.body.removeChild(a);
                                        mostrarNotificacion('📄 PDF generado. Ábrelo en el navegador para compartirlo.', 'info');
                                    } else {
                                        mostrarNotificacion('✅ PDF generado y descargado', 'success');
                                    }
                                    setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000);
                                }, 100);
                            } catch (e) {
                                window.open(pdfUrl, '_blank');
                                mostrarNotificacion('📄 PDF generado. Ábrelo en el navegador para compartirlo.', 'info');
                            }
                        }
                        
                        // Limpiar iframe
                        setTimeout(() => {
                            if (container && container.parentNode) {
                                document.body.removeChild(container);
                            }
                        }, 2000);
                    } else {
                        // En desktop, usar el método tradicional
                        const a = document.createElement('a');
                        a.href = pdfUrl;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        
                        setTimeout(() => URL.revokeObjectURL(pdfUrl), 100);
                        
                        mostrarNotificacion('✅ PDF generado y descargado', 'success');
                    }
                }).catch(error => {
                    console.error('Error generando PDF:', error);
                    
                    // Si es error de Tainted canvas, intentar sin imágenes problemáticas
                    if (error.message && error.message.includes('Tainted')) {
                        console.log('Error de Tainted canvas detectado, intentando sin imágenes problemáticas...');
                        
                        // Ocultar todas las imágenes y reintentar
                        const imagenes = bodyElement.querySelectorAll('img');
                        imagenes.forEach(img => {
                            img.style.display = 'none';
                        });
                        
                        // Reintentar después de un breve delay
                        setTimeout(() => {
                            html2canvas(bodyElement, {
                                scale: esMovil ? 2.5 : 2,
                                useCORS: false,
                                allowTaint: true,
                                logging: false,
                                backgroundColor: '#ffffff',
                                width: bodyElement.scrollWidth,
                                height: bodyElement.scrollHeight,
                                windowWidth: bodyElement.scrollWidth,
                                windowHeight: bodyElement.scrollHeight
                            }).then(canvas => {
                                // Guardar dimensiones del canvas antes de convertir
                                const canvasWidth = canvas.width;
                                const canvasHeight = canvas.height;
                                
                                canvas.toBlob((blob) => {
                                    if (blob) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            const imgData = reader.result;
                                            const { jsPDF } = window.jspdf;
                                            const pdf = new jsPDF(orientacion, 'mm', formato);
                                            const imgWidth = pageWidth;
                                            const imgHeight = (canvasHeight * imgWidth) / canvasWidth;
                                            
                                            // Margen inferior de 3 mm en todas las páginas
                                            const margenInferior = 3; // 3 mm
                                            const availableHeight = pageHeight - margenInferior;
                                            
                                            // Primera página
                                            const primeraAltura = Math.min(imgHeight, availableHeight);
                                            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, primeraAltura, undefined, 'FAST');
                                            
                                            if (imgHeight > availableHeight) {
                                                let heightLeft = imgHeight - availableHeight;
                                                let position = -availableHeight;
                                                while (heightLeft > 0) {
                                pdf.addPage(formato, orientacionNombre);
                                                    const alturaPagina = Math.min(availableHeight, heightLeft);
                                                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                                                    heightLeft -= availableHeight;
                                                    position -= availableHeight;
                                                }
                                            }
                                            
                                            const pdfBlob = pdf.output('blob');
                                            const pdfUrl = URL.createObjectURL(pdfBlob);
                                            const filename = `Dieta_${nombreCliente.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
                                            
                                                                                         // Usar la misma lógica de descarga
                                             const esIOSRetry = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                                             if (esMovil && esIOSRetry && navigator.share && navigator.canShare) {
                                                const file = new File([pdfBlob], filename, { type: 'application/pdf' });
                                                if (navigator.canShare({ files: [file] })) {
                                                    navigator.share({ files: [file], title: 'Plan de Alimentación Personalizado', text: `Plan de alimentación para ${nombreCliente}` })
                                                        .catch(() => window.open(pdfUrl, '_blank'));
                                                } else {
                                                    window.open(pdfUrl, '_blank');
                                                }
                                            } else {
                                                const a = document.createElement('a');
                                                a.href = pdfUrl;
                                                a.download = filename;
                                                document.body.appendChild(a);
                                                a.click();
                                                document.body.removeChild(a);
                                            }
                                            
                                            mostrarNotificacion('✅ PDF generado correctamente (sin imágenes por restricciones de seguridad)', 'success');
                                            if (container && container.parentNode) {
                                                document.body.removeChild(container);
                                            }
                                        };
                                        reader.readAsDataURL(blob);
                                    }
                                }, 'image/png', 0.95);
                            }).catch(e => {
                                mostrarNotificacion('❌ Error: No se pudo generar el PDF. Por favor, prueba desde un servidor web (no desde archivos locales).', 'error');
                                if (container && container.parentNode) {
                                    document.body.removeChild(container);
                                }
                            });
                        }, 500);
                    } else {
                        mostrarNotificacion('❌ Error al generar el PDF: ' + error.message, 'error');
                        if (container && container.parentNode) {
                            document.body.removeChild(container);
                        }
                    }
                });
            } catch (error) {
                console.error('Error:', error);
                let mensajeError = '❌ Error al generar el PDF: ' + error.message;
                if (error.message && error.message.includes('Tainted')) {
                    mensajeError = '❌ Error de seguridad: Por favor, ejecuta la aplicación desde un servidor web (no desde archivos locales) para generar PDFs con imágenes.';
                }
                mostrarNotificacion(mensajeError, 'error');
                if (container && container.parentNode) {
                    document.body.removeChild(container);
                }
            }
        }, esMovil ? 1000 : 500); // Más tiempo de espera en móviles
    }
    
    /**
     * Función unificada para generar PDF profesional (blanco y negro, minimalista)
     * @param {string} fuente - 'principal' o 'tabla-editable'
     */
    window.generarPDFProfesional = async function(fuente = 'principal') {
        // Validar librerías
        if (typeof html2pdf === 'undefined' || typeof html2canvas === 'undefined') {
            alert('Error: Las librerías PDF no están cargadas. Por favor, recarga la página.');
            return;
        }
        
        // Mostrar notificación de carga
        mostrarNotificacion('⏳ Generando PDF...', 'info');
        
        // Obtener datos según la fuente
        const { datos, contenidoOriginal, error } = obtenerDatosPDF(fuente);
        if (error) {
            alert(error);
            return;
        }
        
        // Construir HTML del PDF
        const fecha = new Date().toLocaleDateString('es-ES');
        const nombreCliente = datos.nombre || 'Cliente';
        const headerHTML = await generarHeaderPDF(datos, fecha);
        
        // Si es tabla editable, calcular tamaños dinámicos ANTES de generar CSS
        let tamanosFuente = null;
        if (fuente === 'tabla-editable') {
            const estructura = construirPlanSemanalEstructurado();
            if (estructura) {
                tamanosFuente = calcularTamanosFuenteDinamicos(estructura);
                // Guardar también en window para que esté disponible
                window.tamanosFuentePDF = tamanosFuente;
                console.log('📊 Tamaños de fuente calculados:', tamanosFuente);
            }
        }
        
        const cssHTML = generarCSSPDF(tamanosFuente);
        
        const bodyClass = fuente === 'tabla-editable' ? 'layout-landscape' : '';
        
        // Detectar móvil para agregar viewport optimizado
        const esMovilPDF = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent) || 
                          (window.innerWidth <= 768) || 
                          ('ontouchstart' in window || navigator.maxTouchPoints > 0);
        
        // Calcular ancho del viewport para móviles
        const orientacionPDF = fuente === 'tabla-editable' ? 'l' : 'p';
        const pageWidthPDF = orientacionPDF === 'l' ? 297 : 210;
        const mmToPxPDF = 3.779527559;
        const viewportWidth = esMovilPDF ? Math.round(pageWidthPDF * mmToPxPDF) : 'device-width';
        
        let htmlPDF = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=${viewportWidth}, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <title>Plan de Alimentación - ${nombreCliente}</title>
                <style>${cssHTML}</style>
            </head>
            <body class="${bodyClass}">
                ${headerHTML}
        `;
        
        // Agregar contenido según la fuente
        if (fuente === 'principal' && contenidoOriginal) {
            // Procesar imágenes en el DOM real primero (para obtener imágenes ya cargadas)
            const imagenesReales = contenidoOriginal.querySelectorAll('img[src]');
            const imagenesBase64 = new Map();
            
            for (const img of imagenesReales) {
                const src = img.getAttribute('src');
                if (src && !src.startsWith('data:') && !src.startsWith('http')) {
                    try {
                        // Intentar obtener la imagen directamente del DOM si ya está cargada
                        let base64 = null;
                        if (img.complete && img.naturalWidth > 0) {
                            // La imagen ya está cargada, convertirla directamente
                            try {
                                const canvas = document.createElement('canvas');
                                canvas.width = img.naturalWidth;
                                canvas.height = img.naturalHeight;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(img, 0, 0);
                                base64 = canvas.toDataURL('image/png');
                            } catch (e) {
                                // Si falla, intentar con la función de conversión
                                base64 = await convertirImagenABase64(src);
                            }
                        } else {
                            // Intentar cargar la imagen
                            base64 = await convertirImagenABase64(src);
                        }
                        
                        if (base64 && base64.startsWith('data:')) {
                            imagenesBase64.set(src, base64);
                        }
                    } catch (e) {
                        console.warn('Error procesando imagen:', src, e);
                    }
                }
            }
            
            // Ahora clonar y reemplazar las imágenes en el clone
            const clone = contenidoOriginal.cloneNode(true);
            const imagenesClone = clone.querySelectorAll('img[src]');
            for (const img of imagenesClone) {
                const src = img.getAttribute('src');
                if (imagenesBase64.has(src)) {
                    img.setAttribute('src', imagenesBase64.get(src));
                }
            }
            
            procesarContenidoParaPDF(clone);
            htmlPDF += clone.innerHTML;
            // Sin línea final, solo el margen inferior
        } else if (fuente === 'tabla-editable') {
            htmlPDF += generarHTMLDesdeTablaEditable();
        }
        
        htmlPDF += `
            </body>
            </html>
        `;
        
        // Generar y descargar PDF (ahora es async)
        // orientacionPDF ya está declarada arriba, solo usar su valor
        await generarArchivoPDF(htmlPDF, nombreCliente, { orientacion: orientacionPDF });
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

      // Botón compartir por WhatsApp (solo móvil)
      const btnCompartirWhatsApp = document.getElementById('btnCompartirWhatsApp');
      if (btnCompartirWhatsApp) {
          // Detectar si es dispositivo móvil
          const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          
          if (esMovil) {
              btnCompartirWhatsApp.style.display = 'block';
              
              btnCompartirWhatsApp.replaceWith(btnCompartirWhatsApp.cloneNode(true));
              const nuevoBtnWhatsApp = document.getElementById('btnCompartirWhatsApp');
              
                            nuevoBtnWhatsApp.addEventListener('click', async function() {
                  try {
                      mostrarNotificacion('🔄 Generando PDF para compartir...', 'info');
                      
                      // Obtener el contenido del PDF
                      const pdfContent = document.getElementById('pdf-content');
                      if (!pdfContent) {
                          throw new Error('No se encontró el contenido del PDF');
                      }

                      // Usar html2pdf para generar el blob directamente
                      // Margen inferior de 3 mm - convertir a pulgadas: 3mm = 0.11811 in
                      const margenInferiorPulgadas = 0.11811; // 3 mm en pulgadas
                      const opt = {
                          margin: [0, 0, margenInferiorPulgadas, 0], // [top, right, bottom, left] - solo margen inferior
                          filename: `Plan_Alimentacion_${datosUsuario.nombre || 'Cliente'}.pdf`,
                          image: { type: 'jpeg', quality: 0.98 },
                          html2canvas: { scale: 2, useCORS: true },
                          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                      };

                      // Generar PDF como blob
                      const pdfBlob = await html2pdf().set(opt).from(pdfContent).outputPdf('blob');
                      
                      // Crear archivo desde el blob
                      const filename = `Plan_Alimentacion_${(datosUsuario.nombre || 'Cliente').replace(/\s+/g, '_')}.pdf`;
                      const file = new File([pdfBlob], filename, { type: 'application/pdf' });
                      
                      // Intentar usar Web Share API (soporta WhatsApp en móviles)
                      if (navigator.share && navigator.canShare) {
                          try {
                              if (navigator.canShare({ files: [file] })) {
                                  await navigator.share({
                                      files: [file],
                                      title: 'Plan de Alimentación Personalizado',
                                      text: `Plan de alimentación personalizado para ${datosUsuario.nombre || 'cliente'}`
                                  });
                                  mostrarNotificacion('✅ PDF compartido exitosamente', 'success');
                                  return;
                              }
                          } catch (shareError) {
                              console.log('Web Share API no disponible, usando método alternativo');
                          }
                      }
                      
                      // Método alternativo: descargar y abrir WhatsApp
                      const url = URL.createObjectURL(pdfBlob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = filename;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      
                      // Abrir WhatsApp con mensaje
                      setTimeout(() => {
                          const mensaje = encodeURIComponent(`Te comparto tu plan de alimentación personalizado. El archivo PDF se ha descargado en tu dispositivo.`);
                          const urlWhatsApp = `https://wa.me/?text=${mensaje}`;
                          window.open(urlWhatsApp, '_blank');
                          
                          mostrarNotificacion('📥 PDF descargado. Selecciona WhatsApp y adjunta el archivo descargado', 'info');
                          
                          // Limpiar URL después de un tiempo
                          setTimeout(() => URL.revokeObjectURL(url), 1000);
                      }, 500);
                      
                  } catch (error) {
                      console.error('Error al compartir por WhatsApp:', error);
                      mostrarNotificacion('⚠️ Error al compartir. Descarga el PDF y compártelo manualmente.', 'error');
                      
                      // Fallback: descargar el PDF normalmente
                      window.generarPDFProfesional('principal');
                  }
              });
          }
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

    const btnDescargarExcel = document.getElementById('btnDescargarExcel');
    if (btnDescargarExcel) {
        btnDescargarExcel.replaceWith(btnDescargarExcel.cloneNode(true));
        const nuevoBtnExcel = document.getElementById('btnDescargarExcel');
        nuevoBtnExcel.addEventListener('click', function() {
            exportarExcelProfesional();
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
        background: rgba(255, 255, 255, 0.95);
        border: none;
        color: #dc3545;
        font-size: 36px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    `;
    closeBtn.onmouseover = () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 1)';
        closeBtn.style.color = '#c82333';
        closeBtn.style.transform = 'scale(1.1)';
        closeBtn.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.3)';
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.95)';
        closeBtn.style.color = '#dc3545';
        closeBtn.style.transform = 'scale(1)';
        closeBtn.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    };
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
    document.body.appendChild(modal);
}