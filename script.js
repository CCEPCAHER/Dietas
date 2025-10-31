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

function generarDiaHTML(dia, editable = false) {
    const comidas = dia.comidas;
    const editableAttr = editable ? 'data-editable="true"' : '';
    const editarClass = editable ? ' editable-alimento' : '';
    
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
    
    return `
        <div class="dia-plan">
            <h3>${dia.dia}</h3>
            
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
            
            // Combinar intolerancias y prohibiciones adicionales
            const prohibicionesAdicionales = document.getElementById('prohibiciones').value;
            const todasLasProhibiciones = [...intolerancias, prohibicionesAdicionales].filter(p => p.trim() !== '').join(', ');
            
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
                duracion: document.getElementById('duracion').value
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

            // Remover contenedores con max-width que limiten el ancho
            clone.querySelectorAll('.container, .form-container').forEach(container => {
                container.style.maxWidth = '100%';
                container.style.width = '100%';
                container.style.margin = '0';
                container.style.padding = '0';
            });

            // Remover tabs
            const tabs = clone.querySelector('.tabs');
            if (tabs) tabs.remove();

            // Remover tabs content no activos
            clone.querySelectorAll('.tab-content').forEach(tab => {
                if (!tab.classList.contains('active')) {
                    tab.remove();
                }
            });

            // Forzar todos los elementos principales a ocupar el 100% del ancho
            clone.style.width = '100%';
            clone.style.maxWidth = '100%';
            clone.style.margin = '0';
            clone.style.padding = '0';

            // Eliminar márgenes y paddings de los hijos directos
            Array.from(clone.children).forEach(child => {
                if (child.style) {
                    child.style.margin = '0';
                    child.style.padding = '0';
                    child.style.width = '100%';
                    child.style.maxWidth = '100%';
                    child.style.minHeight = 'unset';
                    child.style.height = 'auto';
                    child.style.boxSizing = 'border-box';
                    // Eliminar saltos de página forzados
                    child.style.pageBreakBefore = 'auto';
                    child.style.pageBreakAfter = 'auto';
                    child.style.breakBefore = 'auto';
                    child.style.breakAfter = 'auto';
                }
            });

            // Eliminar saltos de página forzados y márgenes/paddings en todos los descendientes
            clone.querySelectorAll('*').forEach(el => {
                if (el.style) {
                    el.style.pageBreakBefore = 'auto';
                    el.style.pageBreakAfter = 'auto';
                    el.style.breakBefore = 'auto';
                    el.style.breakAfter = 'auto';
                    el.style.marginTop = '0';
                    el.style.marginBottom = '0';
                    el.style.paddingTop = '0';
                    el.style.paddingBottom = '0';
                    el.style.minHeight = 'unset';
                    el.style.height = 'auto';
                    el.style.boxSizing = 'border-box';
                }
            });
            
            // Aplicar estilos inline para el PDF con colores mejorados
            const pdfHeader = clone.querySelector('.pdf-header');
            if (pdfHeader) {
                pdfHeader.style.cssText = 'text-align: center; padding: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; margin-bottom: 8px;';
                const h1 = pdfHeader.querySelector('h1');
                if (h1) h1.style.cssText = 'color: white; margin: 0; font-size: 20pt; font-weight: bold;';
                const subtitle = pdfHeader.querySelector('.subtitle');
                if (subtitle) subtitle.style.cssText = 'font-size: 10pt; margin-top: 4px; opacity: 0.95; font-weight: 600;';
            }
            
            // Centrar contenedores de tablas
            clone.querySelectorAll('.macro-table, .info-usuario-table').forEach(container => {
                container.style.cssText = 'display: flex; flex-direction: column; align-items: center; margin: 15px auto 10px auto; text-align: center;';
                const h3 = container.querySelector('h3');
                if (h3) h3.style.textAlign = 'center';
            });
            
            // Estilizar tablas con mejor diseño
            clone.querySelectorAll('table').forEach(tabla => {
                tabla.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 10pt; margin: 0 auto 15px auto; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
                tabla.querySelectorAll('th').forEach(th => {
                    th.style.cssText = 'padding: 8px 6px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: 1px solid #667eea; text-align: center; font-weight: bold; font-size: 9pt; letter-spacing: 0.3px;';
                });
                tabla.querySelectorAll('td').forEach(td => {
                    td.style.cssText = 'padding: 6px 4px; border: 1px solid #e9ecef; text-align: center; background: #ffffff; font-weight: 600; font-size: 8.5pt;';
                });
            });
            
            // Estilizar títulos con negrita
            clone.querySelectorAll('h3').forEach(h3 => {
                h3.style.cssText = 'font-size: 16pt; margin-bottom: 10px; color: #667eea; border-bottom: 2px solid #764ba2; padding-bottom: 6px; font-weight: bold; letter-spacing: 0.3px;';
            });
            
            // Estilizar h2 también
            clone.querySelectorAll('h2').forEach(h2 => {
                h2.style.cssText = 'font-size: 18pt; margin-top: 0; margin-bottom: 8px; color: #764ba2; font-weight: bold; text-align: center; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); letter-spacing: 0.8px;';
            });
            
            // Estilizar días del plan con colores mejorados
            clone.querySelectorAll('.dia-plan').forEach(dia => {
                // Evitar forzar 'avoid' que genera grandes espacios cuando un bloque no cabe en la página
                dia.style.cssText = 'background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%); padding: 4px; margin-top: 0; margin-bottom: 3px; border-radius: 6px; page-break-inside: auto; break-inside: auto; -webkit-page-break-inside: auto; box-shadow: 0 2px 8px rgba(118, 75, 162, 0.15); border-left: 4px solid #764ba2; width: 100%; box-sizing: border-box;';
                const diaH3 = dia.querySelector('h3');
                if (diaH3) diaH3.style.cssText = 'color: #764ba2; font-size: 14pt; margin-top: 0; margin-bottom: 3px; font-weight: bold; text-transform: uppercase; text-shadow: 1px 1px 3px rgba(118, 75, 162, 0.2); letter-spacing: 0.5px; text-align: center;';
                
                const tablaComidas = dia.querySelector('.tabla-comidas');
                if (tablaComidas) {
                    tablaComidas.style.cssText = 'width: 100% !important; border-collapse: collapse; font-size: 7pt; margin: 3px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); page-break-inside: auto; table-layout: fixed; display: table !important; min-width: 100%;';
                    // Estilizar encabezados
                    tablaComidas.querySelectorAll('th').forEach((th, index) => {
                        let width = 'auto';
                        if (index === 0) {
                            width = '12%'; // Primera columna (COMIDA)
                        } else if (index === tablaComidas.querySelectorAll('th').length - 1) {
                            width = '18%'; // Última columna (MACROS)
                        } else {
                            // Columnas de productos - distribuir el espacio restante
                            width = 'auto';
                        }
                        th.style.cssText = `padding: 3px 2px !important; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: 1px solid #667eea; font-size: 6.5pt !important; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1px; text-align: center; width: ${width} !important;`;
                    });
                    // Estilizar todas las celdas
                    tablaComidas.querySelectorAll('td').forEach((td, index) => {
                        let width = 'auto';
                        if (td.classList.contains('nombre-comida')) {
                            width = '12%';
                        } else if (td.classList.contains('macros-celda')) {
                            width = '18%';
                        }
                        td.style.cssText = `padding: 3px 2px !important; border: 1px solid #e9ecef; vertical-align: middle; font-size: 6.5pt !important; background: #ffffff; font-weight: 600; line-height: 1.3; overflow-wrap: break-word; word-wrap: break-word; hyphens: auto; text-align: center; width: ${width} !important;`;
                    });
                }
                
                // Estilizar celdas con nombres de comida
                dia.querySelectorAll('.nombre-comida').forEach(td => {
                    td.style.cssText = 'padding: 4px 3px !important; border: 1px solid #667eea !important; vertical-align: middle; font-size: 7pt !important; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important; color: white !important; font-weight: bold !important; text-align: center !important; width: 12% !important;';
                });
                
                // Estilizar celdas de macros
                dia.querySelectorAll('.macros-celda').forEach(td => {
                    td.style.cssText = 'padding: 4px 2px !important; border: 1px solid #e9ecef; background: #e7f3ff !important; font-weight: 700; line-height: 1.3; text-align: center; width: 18% !important;';
                });
                
                // Estilizar macros
                dia.querySelectorAll('.macros-comida').forEach(macros => {
                    macros.style.cssText = 'font-size: 6pt !important; color: #495057; font-weight: 700; line-height: 1.2; text-align: center;';
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
            
            // Eliminar sección TMB/TDEE completamente del PDF (mantener minimalista)
            clone.querySelectorAll('.tmb-section, .tmb-calculator, #tmb-calculator').forEach(section => {
                section.remove();
            });
            
            // Remover elementos obsoletos que ya no se usan
            clone.querySelectorAll('.plan-ejercicio-container').forEach(container => {
                container.remove();
            });
            
            clone.querySelectorAll('.notas-agua-section').forEach(section => {
                section.style.cssText = 'margin-top: 12px; padding: 12px; background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%); border-radius: 8px; border-left: 4px solid #17a2b8;';
                const h4 = section.querySelector('h4');
                if (h4) h4.style.cssText = 'color: #0c5460; margin-bottom: 6px; font-size: 11pt; font-weight: bold;';
                const p = section.querySelector('p');
                if (p) p.style.cssText = 'margin: 0; color: #0c5460; font-size: 9pt; font-weight: 600;';
            });
            
            // Estilizar el contenedor principal ANTES de crear el wrapper
            clone.style.cssText = 'margin: 0; padding: 0; background: white; font-family: Arial, sans-serif; overflow: visible; width: 100%; display: block;';
            
            // Estilizar todos los elementos hijos para que usen el 100% del ancho
            const aplicarEstilosAncho = (element) => {
                if (element && element.style) {
                    const display = window.getComputedStyle(element).display;
                    if (display === 'block' || display === 'inline-block' || element.tagName === 'DIV' || element.tagName === 'SECTION') {
                        element.style.width = '100%';
                        element.style.maxWidth = '100%';
                        element.style.boxSizing = 'border-box';
                    }
                }
                Array.from(element.children || []).forEach(child => aplicarEstilosAncho(child));
            };
            aplicarEstilosAncho(clone);
            
            // Crear wrapper para el PDF con padding reducido y mejor control de ancho
            const pdfWrapper = document.createElement('div');
            pdfWrapper.style.cssText = 'padding: 15px; background: white; font-family: Arial, sans-serif; width: 216mm; min-width: 216mm; max-width: 216mm; box-sizing: border-box; margin: 0 auto; display: block;';

            // Estilizar el primer elemento para eliminar espacio extra
            const firstElement = clone.querySelector('h2, .dia-plan, .pdf-header');
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
            
            // Generar PDF con método alternativo más robusto
            setTimeout(() => {
                console.log('Iniciando generación de PDF...');
                console.log('Elemento wrapper:', pdfWrapper);
                console.log('Dimensiones wrapper:', pdfWrapper.scrollWidth, 'x', pdfWrapper.scrollHeight);
                
                try {
                    // Convertir el contenido a imagen usando html2canvas
                    html2canvas(pdfWrapper, {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                        width: pdfWrapper.scrollWidth,
                        height: pdfWrapper.scrollHeight
                    }).then(function(canvas) {
                        // Crear PDF desde la imagen
                        const imgData = canvas.toDataURL('image/png');
                        const { jsPDF } = window.jspdf;
                        const pdf = new jsPDF('p', 'mm', 'a4');
                        
                        const imgWidth = 210; // Ancho A4 en mm
                        const pageHeight = 297; // Alto A4 en mm
                        const imgHeight = (canvas.height * imgWidth) / canvas.width;
                        
                        // Agregar primera página con imagen centrada
                        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                        
                        // Si la imagen es más alta que una página, agregar páginas adicionales
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
                        
                        // Generar blob y mostrar preview
                        const pdfBlob = pdf.output('blob');
                        const pdfUrl = URL.createObjectURL(pdfBlob);
                        const filename = `Dieta_${datosUsuario.nombre.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
                        
                        console.log('PDF generado exitosamente');
                        
                        // Limpiar
                        if (document.body.contains(clone)) {
                            document.body.removeChild(clone);
                        }
                        boton.innerHTML = textoOriginal;
                        boton.disabled = false;
                        
                        // Mostrar modal de previsualización
                        mostrarPreviewPDF(pdfUrl, pdfBlob, filename);
                        
                        mostrarNotificacion('✅ PDF generado. Vista previa lista', 'success');
                    }).catch(function(error) {
                        console.error('Error en html2canvas:', error);
                        throw error;
                    });
                } catch (error) {
                    console.error('Error al generar PDF:', error);
                    console.error('Detalles:', error.stack);
                    if (document.body.contains(clone)) {
                        document.body.removeChild(clone);
                    }
                    boton.innerHTML = textoOriginal;
                    boton.disabled = false;
                    mostrarNotificacion('❌ Error al generar el PDF: ' + error.message, 'error');
                }
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
