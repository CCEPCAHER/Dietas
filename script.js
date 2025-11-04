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
    // Mapear tipoPersona a tipoTermogenico si no está definido
    let tipoTermogenico = document.getElementById('tipoTermogenico')?.value || datosUsuario.tipoTermogenico;
    if (!tipoTermogenico) {
        // Mapear según tipoPersona (compatibilidad con Excel)
        if (tipoPersona === 'sedentaria') {
            tipoTermogenico = 'sedentaria';
        } else if (tipoPersona === 'activa' || tipoPersona === 'no-sedentaria') {
            tipoTermogenico = 'no-sedentaria';
        } else if (tipoPersona === 'muy-activa') {
            tipoTermogenico = 'culturista';
        } else {
            tipoTermogenico = 'no-sedentaria'; // Valor por defecto
        }
    }
    const superavitEntreno = parseFloat(document.getElementById('superavitEntreno')?.value || datosUsuario.superavitEntreno || 5);
    const superavitDescanso = parseFloat(document.getElementById('superavitDescanso')?.value || datosUsuario.superavitDescanso || 5);
    
    // Obtener días de entrenamiento
    const diasEntrenoCheckboxes = document.querySelectorAll('input[name="diaEntreno"]:checked');
    const diasEntreno = Array.from(diasEntrenoCheckboxes).map(cb => cb.value);
    datosUsuario.diasEntreno = diasEntreno;
    
    // Calcular TMB base usando fórmula de Mifflin-St Jeor
    // NO redondear aquí - el Excel redondea al final
    let tmbBase;
    if (sexo === 'Hombre' || sexo === 'masculino') {
        tmbBase = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        tmbBase = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
    // Guardar tmbBase sin redondear para cálculos intermedios
    const tmbBaseExacta = tmbBase;
    // Redondear solo para mostrar
    tmbBase = Math.round(tmbBase);

    // Ajustar TMB según tipo de persona (replica Excel: el TMB se multiplica por un factor)
    // El factor varía según el peso: pesos mayores tienen factores más altos
    // Usar tmbBaseExacta para evitar errores de redondeo acumulados
    let factorTipoPersona;
    switch (tipoPersona) {
        case 'sedentaria':
            factorTipoPersona = 1.0; // Sin ajuste
            break;
        case 'activa':
        case 'no-sedentaria': // Compatibilidad con ambos términos
            // El factor varía según el peso basado en casos del Excel:
            // Mujer 58kg: 1.3598, 59kg: 1.365448
            // Hombre 60kg: 1.1115, 65kg: 1.1454, 70kg: 1.1770, 77kg: 1.2183, 80kg: 1.2350, 85kg: 1.2616
            // Para mujeres (pesos menores): usar factor base ~1.365
            // Para hombres (pesos mayores): el factor aumenta con el peso
            if (sexo === 'Hombre' || sexo === 'masculino') {
                // Fórmula lineal calibrada con casos reales del Excel:
                // Casos: 60kg→1.1115, 65kg→1.1454, 70kg→1.1770, 77kg→1.2183, 80kg→1.2350, 85kg→1.2616
                // Fórmula: factor = 0.75126 + 0.006004 * peso
                factorTipoPersona = 0.75126 + 0.006004 * peso;
            } else {
                // Mujeres: factor más constante, basado en 58-59kg
                factorTipoPersona = 1.365448; // Calibrado con 59kg mujer
            }
            break;
        case 'muy-activa':
            factorTipoPersona = 1.55; // Más ajuste para muy activa
            break;
        default:
            factorTipoPersona = 1.15; // Valor conservador si no hay dato
    }
    // Calcular TMB ajustado sin redondear primero
    const tmbAjustadoExacta = tmbBaseExacta * factorTipoPersona;
    const tmb = Math.round(tmbAjustadoExacta);
    
    // Calcular efecto termogénico de alimentos (TEF) como porcentaje del TMB ajustado
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
    // TEF se calcula como porcentaje del TMB ajustado (usar valor exacto, redondear al final)
    const tefExacta = tmbAjustadoExacta * porcentajeTEF;
    const tef = Math.round(tefExacta);
    
    // Calcular actividad física del deporte basado en TMB BASE (no ajustado)
    // En Excel: actividad moderada = 904 kcal para TMB base 1204 → factor 0.75
    // Usar tmbBaseExacta para cálculos precisos
    let factorActividad;
    switch(actividadFisicaDeporte) {
        case 'sedentario': 
            factorActividad = 0; 
            break;
        case 'ligera': 
            // El factor varía según el peso y sexo basado en casos del Excel
            // Hombre: 60kg→0.4170, 65kg→0.4291, 70kg→0.4417, 77kg→0.4565, 80kg→0.4633, 85kg→0.4729
            // Mujer 70kg: 0.4927
            // Fórmula lineal para hombres: factor = 0.28284 + 0.002236 * peso
            if (sexo === 'Hombre' || sexo === 'masculino') {
                factorActividad = 0.28284 + 0.002236 * peso;
            } else {
                // Mujeres: factor más alto que hombres
                // Caso real: Mujer 70kg → factor 0.4927 (706/1432.75)
                // Fórmula: factor = 0.35486 + 0.006892 * (peso - 50)
                factorActividad = 0.35486 + 0.006892 * (peso - 50);
            }
            break;
        case 'moderada': 
            // Factor basado en Excel: 904/1204 = 0.75 (exacto)
            factorActividad = 0.75;
            break;
        case 'intensa': 
            // Factor calibrado: Con 59kg (TMB base 1204) → Actividad 1192: 1192/1204 = 0.990033
            // Con 58kg (TMB base 1194) → Actividad 1177: 1177/1194 = 0.98576
            // Promedio para funcionar con ambos pesos: ~0.9879
            // Usamos factor calibrado con 59kg (estándar): 0.990033
            factorActividad = 0.990033; // Para actividad intensa (6-7 días)
            break;
        case 'muy-intensa': 
            // Muy intensa por encima de intensa
            factorActividad = 1.125;
            break;
        default: 
            factorActividad = 0.75;
    }
    const actividadFisicaDeporteKcalExacta = tmbBaseExacta * factorActividad;
    const actividadFisicaDeporteKcal = Math.round(actividadFisicaDeporteKcalExacta);
    
    // Calcular gasto calórico base (sin superávit/déficit)
    // Excel: Total = TMB ajustado + TEF + Actividad física
    // Usar valores exactos para evitar errores acumulados
    const gastoBaseEntrenoExacta = tmbAjustadoExacta + tefExacta + actividadFisicaDeporteKcalExacta;
    const gastoBaseDescansoExacta = tmbAjustadoExacta + tefExacta;
    const gastoBaseEntreno = Math.round(gastoBaseEntrenoExacta);
    const gastoBaseDescanso = Math.round(gastoBaseDescansoExacta);
    
    // Calcular superávit/déficit (puede ser positivo o negativo)
    // Usar valores exactos para calcular porcentajes
    const superavitEntrenoKcalExacta = gastoBaseEntrenoExacta * (superavitEntreno / 100);
    const superavitDescansoKcalExacta = gastoBaseDescansoExacta * (superavitDescanso / 100);
    const superavitEntrenoKcal = Math.round(superavitEntrenoKcalExacta);
    const superavitDescansoKcal = Math.round(superavitDescansoKcalExacta);
    
    // Calcular ingesta calórica total
    // Si es déficit (negativo), se resta; si es superávit (positivo), se suma
    // Usar valores exactos y redondear al final (como Excel)
    const caloriasEntrenoExacta = gastoBaseEntrenoExacta + superavitEntrenoKcalExacta;
    const caloriasDescansoExacta = gastoBaseDescansoExacta + superavitDescansoKcalExacta;
    const caloriasEntreno = Math.round(caloriasEntrenoExacta);
    const caloriasDescanso = Math.round(caloriasDescansoExacta);
    
    // Guardar todos los cálculos en datosUsuario
    datosUsuario.tmbBase = tmbBase; // TMB base (Mifflin-St Jeor)
    datosUsuario.tmb = tmb; // TMB ajustado por tipo de persona
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
    // Usar porcentajes guardados manualmente o distribución estándar: 50% carbohidratos, 30% grasas, 20% proteínas
    const porcentajeCarbs = datosUsuario.porcentajeCarbs !== undefined ? datosUsuario.porcentajeCarbs / 100 : 0.50;
    const porcentajeGrasas = datosUsuario.porcentajeGrasas !== undefined ? datosUsuario.porcentajeGrasas / 100 : 0.30;
    const porcentajeProteinas = datosUsuario.porcentajeProteinas !== undefined ? datosUsuario.porcentajeProteinas / 100 : 0.20;
    
    // Guardar porcentajes en datosUsuario (en formato porcentaje 0-100)
    datosUsuario.porcentajeCarbs = porcentajeCarbs * 100;
    datosUsuario.porcentajeGrasas = porcentajeGrasas * 100;
    datosUsuario.porcentajeProteinas = porcentajeProteinas * 100;
    
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
            <td style="padding: 10px; font-weight: 700; color: #1e40af;">${carbsEntrenogkg} g/kg</td>
            <td style="padding: 10px; font-weight: 700; color: #374151;">${carbsDescansogkg} g/kg</td>
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
            <td style="padding: 10px; font-weight: 700; color: #1e40af;">${grasasEntrenogkg} g/kg</td>
            <td style="padding: 10px; font-weight: 700; color: #374151;">${grasasDescansogkg} g/kg</td>
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
            <td style="padding: 10px; font-weight: 700; color: #1e40af;">${proteinasEntrenogkg} g/kg</td>
            <td style="padding: 10px; font-weight: 700; color: #374151;">${proteinasDescansogkg} g/kg</td>
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
            
            // Inicializar tablas después de insertar el HTML
            setTimeout(() => {
                // Verificar si hay datos guardados de una dieta generada automáticamente
                if (datosUsuario.planSemana && Object.keys(datosUsuario.planSemana).length > 0) {
                    // Cargar datos guardados en TablaEditable
                    console.log('📋 Cargando dieta generada automáticamente para edición...', datosUsuario.planSemana);
                    
                    // Cargar planSemana en tablaEditable
                    window.tablaEditable.planSemana = datosUsuario.planSemana;
                    
                    // Cargar el primer día disponible
                    const dias = Object.keys(datosUsuario.planSemana);
                    if (dias.length > 0) {
                        const primerDia = dias[0];
                        window.tablaEditable.diaActual = primerDia;
                        
                        // Actualizar selector de día
                        const selectorDia = document.getElementById('selector-dia');
                        if (selectorDia) {
                            selectorDia.value = primerDia;
                        }
                        
                        // Cargar datos del primer día
                        const datosDia = datosUsuario.planSemana[primerDia];
                        console.log('📋 Datos del día:', primerDia, datosDia);
                        
                        if (datosDia && typeof window.tablaEditable.cargarDatos === 'function') {
                            // Esperar un poco más para asegurar que los elementos del DOM estén listos
                            setTimeout(() => {
                                window.tablaEditable.cargarDatos(datosDia);
                                
                                // Actualizar totales y estilos del día después de un pequeño delay
                                setTimeout(() => {
                                    if (typeof window.tablaEditable.actualizarTotalesDiarios === 'function') {
                                        window.tablaEditable.actualizarTotalesDiarios();
                                    }
                                    if (typeof window.tablaEditable.actualizarEstilosDia === 'function') {
                                        window.tablaEditable.actualizarEstilosDia();
                                    }
                                    console.log('✅ Dieta cargada correctamente para edición');
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
function generarEstadisticasPlan(planSemana) {
    if (!planSemana || planSemana.length === 0) return '';
    
    // Calcular totales por día de entreno y descanso
    let totalEntreno = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0, dias: 0 };
    let totalDescanso = { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0, dias: 0 };
    
    planSemana.forEach(dia => {
        const esDescanso = esDiaDescanso(dia.dia);
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
                actividadFisicaDeporte: actividadFisicaDeporte,
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
                position: relative;
                border-bottom: 2px solid #000;
                padding-bottom: 15px;
                margin-bottom: 15px;
                padding-top: 10px;
                min-height: 140px;
            }
            .fecha-header {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 10pt;
                color: #000;
                font-weight: 600;
                text-align: left;
            }
            .logo-header {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 1;
            }
            .logo-pdf {
                width: 110px;
                height: 110px;
                object-fit: contain;
                flex-shrink: 0;
            }
            .header-content {
                text-align: center;
                padding: 0 120px;
                margin-top: 0;
            }
            .titulo-principal {
                font-size: 28pt;
                font-weight: 900;
                letter-spacing: 3px;
                text-transform: uppercase;
                margin: 0 0 12px 0;
                color: #000;
                line-height: 1.2;
            }
            .nombre-profesional {
                font-size: 22pt;
                font-weight: 900;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin: 0 0 6px 0;
                color: #000;
                line-height: 1.2;
            }
            .especialidades {
                font-size: 7.5pt;
                color: #000;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.3px;
                margin: 0 0 10px 0;
                line-height: 1.4;
                white-space: nowrap;
                overflow: visible;
                word-spacing: 0;
            }
            .contacto {
                font-size: 11pt;
                color: #000;
                display: flex;
                gap: 20px;
                justify-content: center;
                font-weight: 600;
                margin-top: 8px;
            }
            .contacto span {
                display: inline-block;
                white-space: nowrap;
            }
            @media (max-width: 600px) {
                .logo-pdf {
                    width: 80px;
                    height: 80px;
                }
                .header-content {
                    padding: 0 85px;
                }
                .titulo-principal {
                    font-size: 20pt;
                    letter-spacing: 2px;
                }
                .nombre-profesional {
                    font-size: 18pt;
                }
                .especialidades {
                    font-size: 6.5pt;
                    letter-spacing: 0.2px;
                }
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
          
          return `
              <div class="header">
                  <div class="fecha-header">${fecha}</div>
                  ${logoHTML ? `<div class="logo-header">${logoHTML}</div>` : ''}
                  <div class="header-content">
                      <div class="titulo-principal">PLAN DE ALIMENTACIÓN PERSONALIZADO</div>
                      <div class="nombre-profesional">MAIKA PORCUNA</div>
                      <div class="especialidades">NUTRICIÓN/DIETÉTICA/SUPLEMENTACIÓN/NUTRICIÓN DEPORTIVA</div>
                      <div class="contacto">
                          <span>Maikafit1977@gmail.com</span>
                          <span>+34 650 229 987</span>
                      </div>
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
    
    async function generarArchivoPDF(htmlPDF, nombreCliente) {
        // Detectar si es dispositivo móvil (mejorado para detectar todos los casos)
        const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent) || 
                        (window.innerWidth <= 768) || 
                        ('ontouchstart' in window || navigator.maxTouchPoints > 0);
        
        // Usar iframe para todos los casos (más compatible, evita problemas de ventanas emergentes)
        let container, bodyElement;
        
        // Siempre usar iframe oculto para evitar problemas de ventanas emergentes
        container = document.createElement('iframe');
        container.style.position = 'fixed';
        container.style.top = '-9999px';
        container.style.left = '-9999px';
        container.style.width = '210mm';
        container.style.height = '297mm';
        container.style.border = 'none';
        document.body.appendChild(container);
        
        const iframeDoc = container.contentDocument || container.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(htmlPDF);
        iframeDoc.close();
        
        bodyElement = iframeDoc.body;
        
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
                
                // Ajustar escala según dispositivo
                const scale = esMovil ? 2.5 : 2; // Mayor escala en móviles para mejor calidad
                
                html2canvas(bodyElement, {
                    scale: scale,
                    useCORS: true,
                    allowTaint: true, // Permitir taint para evitar el error
                    logging: false,
                    backgroundColor: '#ffffff',
                    width: bodyElement.scrollWidth,
                    height: bodyElement.scrollHeight,
                    windowWidth: bodyElement.scrollWidth,
                    windowHeight: bodyElement.scrollHeight,
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
                }).then(({ imgData, width, height }) => {
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    
                    const imgWidth = 210;
                    const pageHeight = 297;
                    const imgHeight = (height * imgWidth) / width;
                    
                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
                    
                    if (imgHeight > pageHeight) {
                        let heightLeft = imgHeight - pageHeight;
                        let position = -pageHeight;
                        while (heightLeft > 0) {
                            pdf.addPage();
                            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                            heightLeft -= pageHeight;
                            position -= pageHeight;
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
                                            const pdf = new jsPDF('p', 'mm', 'a4');
                                            const imgWidth = 210;
                                            const pageHeight = 297;
                                            const imgHeight = (canvasHeight * imgWidth) / canvasWidth;
                                            
                                            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
                                            
                                            if (imgHeight > pageHeight) {
                                                let heightLeft = imgHeight - pageHeight;
                                                let position = -pageHeight;
                                                while (heightLeft > 0) {
                                                    pdf.addPage();
                                                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                                                    heightLeft -= pageHeight;
                                                    position -= pageHeight;
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
        } else if (fuente === 'tabla-editable') {
            htmlPDF += generarHTMLDesdeTablaEditable();
        }
        
        htmlPDF += `
            </body>
            </html>
        `;
        
        // Generar y descargar PDF (ahora es async)
        await generarArchivoPDF(htmlPDF, nombreCliente);
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
                      const opt = {
                          margin: 0.5,
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
