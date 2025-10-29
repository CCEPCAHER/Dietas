// Base de Datos Ampliada de Alimentos Saludables
// Información nutricional aproximada por 100g (excepto donde se indique)

const baseDatosAlimentos = {
    // PROTEÍNAS ANIMALES
    proteinas: {
        "Pechuga de pollo": { calorias: 165, proteinas: 31, carbohidratos: 0, grasas: 3.6 },
        "Pechuga de pavo": { calorias: 135, proteinas: 30, carbohidratos: 0, grasas: 1 },
        "Muslo de pollo": { calorias: 209, proteinas: 26, carbohidratos: 0, grasas: 10 },
        "Salmón": { calorias: 208, proteinas: 20, carbohidratos: 0, grasas: 13 },
        "Atún fresco": { calorias: 144, proteinas: 30, carbohidratos: 0, grasas: 1 },
        "Atún en lata": { calorias: 116, proteinas: 26, carbohidratos: 0, grasas: 0.8 },
        "Merluza": { calorias: 76, proteinas: 17, carbohidratos: 0, grasas: 0.6 },
        "Bacalao": { calorias: 82, proteinas: 18, carbohidratos: 0, grasas: 0.7 },
        "Trucha": { calorias: 148, proteinas: 21, carbohidratos: 0, grasas: 6 },
        "Sardinas": { calorias: 208, proteinas: 25, carbohidratos: 0, grasas: 11 },
        "Salmón ahumado": { calorias: 117, proteinas: 18, carbohidratos: 0, grasas: 4 },
        "Ternera magra": { calorias: 250, proteinas: 26, carbohidratos: 0, grasas: 15 },
        "Cerdo magro": { calorias: 242, proteinas: 27, carbohidratos: 0, grasas: 14 },
        "Cordero": { calorias: 294, proteinas: 25, carbohidratos: 0, grasas: 21 },
        "Huevos enteros": { calorias: 155, proteinas: 13, carbohidratos: 1.1, grasas: 11 },
        "Claras de huevo": { calorias: 52, proteinas: 11, carbohidratos: 0.7, grasas: 0.2 },
        "Sepia": { calorias: 79, proteinas: 16, carbohidratos: 0.8, grasas: 0.7 },
        "Gambas": { calorias: 85, proteinas: 18, carbohidratos: 0.5, grasas: 0.5 },
        "Langostinos": { calorias: 71, proteinas: 14, carbohidratos: 0.2, grasas: 0.4 },
        "Mejillones": { calorias: 86, proteinas: 12, carbohidratos: 4.5, grasas: 2 },
        "Almejas": { calorias: 74, proteinas: 12, carbohidratos: 2.6, grasas: 0.8 },
        "Pulpo": { calorias: 82, proteinas: 15, carbohidratos: 2.2, grasas: 1 },
        "Jamón serrano": { calorias: 319, proteinas: 30, carbohidratos: 1.5, grasas: 20 },
        "Jamón de pavo": { calorias: 84, proteinas: 16, carbohidratos: 2, grasas: 1 },
        "Queso fresco": { calorias: 98, proteinas: 17, carbohidratos: 3, grasas: 2 },
        "Queso cottage": { calorias: 98, proteinas: 11, carbohidratos: 3.4, grasas: 4.3 },
        "Queso parmesano": { calorias: 431, proteinas: 38, carbohidratos: 4.1, grasas: 29 },
        "Requesón": { calorias: 98, proteinas: 11, carbohidratos: 3.4, grasas: 4.3 }
    },

    // PROTEÍNAS VEGETALES
    proteinasVegetales: {
        "Tofu": { calorias: 76, proteinas: 8, carbohidratos: 2, grasas: 4.8 },
        "Tempeh": { calorias: 193, proteinas: 19, carbohidratos: 9, grasas: 11 },
        "Seitán": { calorias: 120, proteinas: 24, carbohidratos: 4, grasas: 1 },
        "Soja texturizada": { calorias: 340, proteinas: 50, carbohidratos: 30, grasas: 1 },
        "Soja": { calorias: 173, proteinas: 17, carbohidratos: 10, grasas: 9 },
        "Garbanzos": { calorias: 364, proteinas: 19, carbohidratos: 61, grasas: 6 },
        "Lentejas": { calorias: 353, proteinas: 25, carbohidratos: 60, grasas: 1 },
        "Frijoles negros": { calorias: 341, proteinas: 21, carbohidratos: 62, grasas: 1 },
        "Frijoles rojos": { calorias: 337, proteinas: 22, carbohidratos: 61, grasas: 1 },
        "Judías blancas": { calorias: 337, proteinas: 22, carbohidratos: 61, grasas: 1 },
        "Alubias": { calorias: 337, proteinas: 22, carbohidratos: 61, grasas: 1 },
        "Guisantes": { calorias: 81, proteinas: 5, carbohidratos: 14, grasas: 0.4 },
        "Habas": { calorias: 88, proteinas: 7, carbohidratos: 13, grasas: 0.4 },
        "Hummus": { calorias: 166, proteinas: 8, carbohidratos: 14, grasas: 9 },
        "Edamame": { calorias: 122, proteinas: 11, carbohidratos: 10, grasas: 5 }
    },

    // CARBOHIDRATOS COMPLEJOS
    carbohidratos: {
        "Arroz integral": { calorias: 111, proteinas: 2.6, carbohidratos: 23, grasas: 0.9 },
        "Arroz blanco": { calorias: 130, proteinas: 2.7, carbohidratos: 28, grasas: 0.3 },
        "Arroz basmati": { calorias: 130, proteinas: 2.7, carbohidratos: 28, grasas: 0.3 },
        "Quinoa": { calorias: 120, proteinas: 4.4, carbohidratos: 22, grasas: 1.9 },
        "Avena": { calorias: 389, proteinas: 17, carbohidratos: 66, grasas: 7 },
        "Avena copos": { calorias: 389, proteinas: 17, carbohidratos: 66, grasas: 7 },
        "Pasta integral": { calorias: 124, proteinas: 5, carbohidratos: 25, grasas: 1 },
        "Pasta normal": { calorias: 131, proteinas: 5, carbohidratos: 25, grasas: 1 },
        "Cuscús": { calorias: 112, proteinas: 3.8, carbohidratos: 23, grasas: 0.2 },
        "Cuscús integral": { calorias: 112, proteinas: 4, carbohidratos: 22, grasas: 0.6 },
        "Pan integral": { calorias: 247, proteinas: 13, carbohidratos: 41, grasas: 4 },
        "Pan blanco": { calorias: 265, proteinas: 9, carbohidratos: 49, grasas: 3 },
        "Pan de centeno": { calorias: 258, proteinas: 9, carbohidratos: 48, grasas: 3 },
        "Pan de espelta": { calorias: 250, proteinas: 13, carbohidratos: 45, grasas: 3 },
        "Tortillas de maíz": { calorias: 218, proteinas: 5.7, carbohidratos: 45, grasas: 2.5 },
        "Tortillas de trigo": { calorias: 300, proteinas: 10, carbohidratos: 46, grasas: 8 },
        "Mijo": { calorias: 378, proteinas: 11, carbohidratos: 73, grasas: 4 },
        "Bulgur": { calorias: 83, proteinas: 3.1, carbohidratos: 19, grasas: 0.2 },
        "Trigo sarraceno": { calorias: 343, proteinas: 13, carbohidratos: 72, grasas: 3 },
        "Amaranto": { calorias: 371, proteinas: 14, carbohidratos: 65, grasas: 7 },
        "Trigo": { calorias: 339, proteinas: 14, carbohidratos: 72, grasas: 2 },
        "Centeno": { calorias: 338, proteinas: 10, carbohidratos: 76, grasas: 2 },
        "Cebada": { calorias: 123, proteinas: 2.3, carbohidratos: 28, grasas: 0.4 }
    },

    // TUBÉRCULOS Y RAIZES
    tuberculos: {
        "Patata": { calorias: 77, proteinas: 2, carbohidratos: 17, grasas: 0.1 },
        "Batata": { calorias: 86, proteinas: 1.6, carbohidratos: 20, grasas: 0.1 },
        "Boniato": { calorias: 86, proteinas: 1.6, carbohidratos: 20, grasas: 0.1 },
        "Ñame": { calorias: 118, proteinas: 1.5, carbohidratos: 28, grasas: 0.2 },
        "Yuca": { calorias: 160, proteinas: 1.4, carbohidratos: 38, grasas: 0.3 },
        "Remolacha": { calorias: 43, proteinas: 1.6, carbohidratos: 10, grasas: 0.2 },
        "Zanahoria": { calorias: 41, proteinas: 0.9, carbohidratos: 10, grasas: 0.2 },
        "Rábano": { calorias: 16, proteinas: 0.7, carbohidratos: 3.4, grasas: 0.1 },
        "Nabo": { calorias: 28, proteinas: 0.9, carbohidratos: 6, grasas: 0.1 }
    },

    // VERDURAS Y HORTALIZAS
    verduras: {
        "Brócoli": { calorias: 34, proteinas: 2.8, carbohidratos: 7, grasas: 0.4 },
        "Coliflor": { calorias: 25, proteinas: 1.9, carbohidratos: 5, grasas: 0.3 },
        "Espinacas": { calorias: 23, proteinas: 2.9, carbohidratos: 3.6, grasas: 0.4 },
        "Acelga": { calorias: 19, proteinas: 1.8, carbohidratos: 3.7, grasas: 0.2 },
        "Col rizada": { calorias: 49, proteinas: 4.3, carbohidratos: 9, grasas: 0.9 },
        "Kale": { calorias: 49, proteinas: 4.3, carbohidratos: 9, grasas: 0.9 },
        "Lechuga": { calorias: 15, proteinas: 1.4, carbohidratos: 3, grasas: 0.2 },
        "Rúcula": { calorias: 25, proteinas: 2.6, carbohidratos: 3.7, grasas: 0.7 },
        "Canónigos": { calorias: 14, proteinas: 2, carbohidratos: 2, grasas: 0.4 },
        "Endibia": { calorias: 17, proteinas: 1.3, carbohidratos: 3.4, grasas: 0.1 },
        "Tomate": { calorias: 18, proteinas: 0.9, carbohidratos: 3.9, grasas: 0.2 },
        "Pimiento rojo": { calorias: 31, proteinas: 1, carbohidratos: 7, grasas: 0.3 },
        "Pimiento verde": { calorias: 20, proteinas: 1, carbohidratos: 5, grasas: 0.2 },
        "Pimiento amarillo": { calorias: 27, proteinas: 1, carbohidratos: 6, grasas: 0.2 },
        "Calabacín": { calorias: 17, proteinas: 1.2, carbohidratos: 3.4, grasas: 0.2 },
        "Berenjena": { calorias: 25, proteinas: 1, carbohidratos: 6, grasas: 0.2 },
        "Pepino": { calorias: 16, proteinas: 0.7, carbohidratos: 4, grasas: 0.1 },
        "Calabaza": { calorias: 26, proteinas: 1, carbohidratos: 7, grasas: 0.1 },
        "Espárragos": { calorias: 20, proteinas: 2.2, carbohidratos: 4, grasas: 0.1 },
        "Apio": { calorias: 16, proteinas: 0.7, carbohidratos: 3, grasas: 0.2 },
        "Cebolla": { calorias: 40, proteinas: 1.1, carbohidratos: 9, grasas: 0.1 },
        "Ajo": { calorias: 149, proteinas: 6.4, carbohidratos: 33, grasas: 0.5 },
        "Puerro": { calorias: 61, proteinas: 1.5, carbohidratos: 14, grasas: 0.3 },
        "Champiñones": { calorias: 22, proteinas: 3.1, carbohidratos: 3.3, grasas: 0.3 },
        "Setas": { calorias: 22, proteinas: 3.1, carbohidratos: 3.3, grasas: 0.3 },
        "Champiñones portobello": { calorias: 22, proteinas: 3.1, carbohidratos: 3.3, grasas: 0.3 },
        "Judías verdes": { calorias: 31, proteinas: 1.8, carbohidratos: 7, grasas: 0.1 },
        "Guisantes verdes": { calorias: 81, proteinas: 5, carbohidratos: 14, grasas: 0.4 },
        "Maíz": { calorias: 86, proteinas: 3.3, carbohidratos: 19, grasas: 1.2 },
        "Calabacín italiano": { calorias: 17, proteinas: 1.2, carbohidratos: 3.4, grasas: 0.2 },
        "Okra": { calorias: 33, proteinas: 1.9, carbohidratos: 7, grasas: 0.2 },
        "Alcachofa": { calorias: 47, proteinas: 3.3, carbohidratos: 11, grasas: 0.2 },
        "Bok choy": { calorias: 13, proteinas: 1.5, carbohidratos: 2.2, grasas: 0.2 },
        "Pak choi": { calorias: 13, proteinas: 1.5, carbohidratos: 2.2, grasas: 0.2 },
        "Brócoli rabe": { calorias: 22, proteinas: 3.2, carbohidratos: 3, grasas: 0.5 },
        "Berro": { calorias: 11, proteinas: 2.3, carbohidratos: 1.3, grasas: 0.1 }
    },

    // FRUTAS
    frutas: {
        "Plátano": { calorias: 89, proteinas: 1.1, carbohidratos: 23, grasas: 0.3 },
        "Manzana": { calorias: 52, proteinas: 0.3, carbohidratos: 14, grasas: 0.2 },
        "Pera": { calorias: 57, proteinas: 0.4, carbohidratos: 15, grasas: 0.1 },
        "Naranja": { calorias: 47, proteinas: 0.9, carbohidratos: 12, grasas: 0.1 },
        "Mandarina": { calorias: 53, proteinas: 0.8, carbohidratos: 13, grasas: 0.3 },
        "Fresas": { calorias: 32, proteinas: 0.7, carbohidratos: 8, grasas: 0.3 },
        "Arándanos": { calorias: 57, proteinas: 0.7, carbohidratos: 14, grasas: 0.3 },
        "Moras": { calorias: 43, proteinas: 1.4, carbohidratos: 10, grasas: 0.5 },
        "Frambuesas": { calorias: 52, proteinas: 1.2, carbohidratos: 12, grasas: 0.7 },
        "Uvas": { calorias: 69, proteinas: 0.7, carbohidratos: 18, grasas: 0.2 },
        "Mango": { calorias: 60, proteinas: 0.8, carbohidratos: 15, grasas: 0.4 },
        "Piña": { calorias: 50, proteinas: 0.5, carbohidratos: 13, grasas: 0.1 },
        "Papaya": { calorias: 43, proteinas: 0.5, carbohidratos: 11, grasas: 0.3 },
        "Melón": { calorias: 34, proteinas: 0.8, carbohidratos: 8, grasas: 0.2 },
        "Sandía": { calorias: 30, proteinas: 0.6, carbohidratos: 8, grasas: 0.2 },
        "Kiwi": { calorias: 61, proteinas: 1.1, carbohidratos: 15, grasas: 0.5 },
        "Aguacate": { calorias: 160, proteinas: 2, carbohidratos: 9, grasas: 15 },
        "Granada": { calorias: 83, proteinas: 1.7, carbohidratos: 19, grasas: 1.2 },
        "Cerezas": { calorias: 63, proteinas: 1, carbohidratos: 16, grasas: 0.2 },
        "Melocotón": { calorias: 39, proteinas: 0.9, carbohidratos: 10, grasas: 0.3 },
        "Albaricoque": { calorias: 48, proteinas: 1.4, carbohidratos: 11, grasas: 0.4 },
        "Ciruela": { calorias: 46, proteinas: 0.7, carbohidratos: 11, grasas: 0.3 },
        "Pomelo": { calorias: 42, proteinas: 0.8, carbohidratos: 11, grasas: 0.1 },
        "Lima": { calorias: 30, proteinas: 0.7, carbohidratos: 11, grasas: 0.2 },
        "Limón": { calorias: 29, proteinas: 1.1, carbohidratos: 9, grasas: 0.3 },
        "Caqui": { calorias: 70, proteinas: 0.6, carbohidratos: 18, grasas: 0.2 },
        "Higo": { calorias: 74, proteinas: 0.8, carbohidratos: 19, grasas: 0.3 },
        "Dátiles": { calorias: 282, proteinas: 2.5, carbohidratos: 75, grasas: 0.4 },
        "Coco": { calorias: 354, proteinas: 3.3, carbohidratos: 15, grasas: 33 }
    },

    // FRUTOS SECOS Y SEMILLAS
    frutosSecos: {
        "Almendras": { calorias: 579, proteinas: 21, carbohidratos: 22, grasas: 50 },
        "Nueces": { calorias: 654, proteinas: 15, carbohidratos: 14, grasas: 65 },
        "Anacardos": { calorias: 553, proteinas: 18, carbohidratos: 30, grasas: 44 },
        "Avellanas": { calorias: 628, proteinas: 15, carbohidratos: 17, grasas: 61 },
        "Pistachos": { calorias: 560, proteinas: 20, carbohidratos: 28, grasas: 45 },
        "Cacahuetes": { calorias: 567, proteinas: 26, carbohidratos: 16, grasas: 49 },
        "Pacanas": { calorias: 691, proteinas: 9, carbohidratos: 14, grasas: 72 },
        "Nueces de Brasil": { calorias: 659, proteinas: 14, carbohidratos: 12, grasas: 67 },
        "Piñones": { calorias: 673, proteinas: 14, carbohidratos: 13, grasas: 68 },
        "Macadamias": { calorias: 718, proteinas: 8, carbohidratos: 14, grasas: 76 },
        "Semillas de chía": { calorias: 486, proteinas: 17, carbohidratos: 42, grasas: 31 },
        "Semillas de lino": { calorias: 534, proteinas: 18, carbohidratos: 29, grasas: 42 },
        "Semillas de girasol": { calorias: 584, proteinas: 21, carbohidratos: 20, grasas: 51 },
        "Semillas de calabaza": { calorias: 559, proteinas: 30, carbohidratos: 10, grasas: 49 },
        "Semillas de sésamo": { calorias: 573, proteinas: 18, carbohidratos: 23, grasas: 50 },
        "Semillas de cáñamo": { calorias: 553, proteinas: 31, carbohidratos: 9, grasas: 48 },
        "Mantequilla de almendras": { calorias: 614, proteinas: 21, carbohidratos: 19, grasas: 56 },
        "Mantequilla de cacahuete": { calorias: 588, proteinas: 25, carbohidratos: 20, grasas: 50 },
        "Crema de avellanas": { calorias: 628, proteinas: 15, carbohidratos: 17, grasas: 61 },
        "Tahini": { calorias: 595, proteinas: 17, carbohidratos: 21, grasas: 54 }
    },

    // LÁCTEOS Y DERIVADOS
    lacteos: {
        "Leche entera": { calorias: 61, proteinas: 3.2, carbohidratos: 4.8, grasas: 3.3 },
        "Leche semidesnatada": { calorias: 50, proteinas: 3.4, carbohidratos: 5, grasas: 1.6 },
        "Leche desnatada": { calorias: 34, proteinas: 3.4, carbohidratos: 5, grasas: 0.1 },
        "Yogur griego": { calorias: 59, proteinas: 10, carbohidratos: 3.6, grasas: 0.4 },
        "Yogur natural": { calorias: 59, proteinas: 10, carbohidratos: 3.6, grasas: 0.4 },
        "Yogur desnatado": { calorias: 56, proteinas: 10, carbohidratos: 4, grasas: 0.1 },
        "Kéfir": { calorias: 41, proteinas: 3.3, carbohidratos: 4.5, grasas: 1 },
        "Queso fresco": { calorias: 98, proteinas: 17, carbohidratos: 3, grasas: 2 },
        "Queso cottage": { calorias: 98, proteinas: 11, carbohidratos: 3.4, grasas: 4.3 },
        "Queso feta": { calorias: 264, proteinas: 14, carbohidratos: 4, grasas: 21 },
        "Queso mozzarella": { calorias: 300, proteinas: 22, carbohidratos: 2.2, grasas: 22 },
        "Queso parmesano": { calorias: 431, proteinas: 38, carbohidratos: 4.1, grasas: 29 },
        "Requesón": { calorias: 98, proteinas: 11, carbohidratos: 3.4, grasas: 4.3 },
        "Cuajada": { calorias: 98, proteinas: 11, carbohidratos: 3.4, grasas: 4.3 },
        "Leche de almendras": { calorias: 17, proteinas: 0.6, carbohidratos: 1.5, grasas: 1.1 },
        "Leche de soja": { calorias: 33, proteinas: 2.9, carbohidratos: 1.8, grasas: 1.8 },
        "Leche de avena": { calorias: 43, proteinas: 1.3, carbohidratos: 7, grasas: 0.8 },
        "Leche de coco": { calorias: 230, proteinas: 2.3, carbohidratos: 6, grasas: 24 }
    },

    // GRASAS Y ACEITES
    grasas: {
        "Aceite de oliva": { calorias: 884, proteinas: 0, carbohidratos: 0, grasas: 100 },
        "Aceite de coco": { calorias: 862, proteinas: 0, carbohidratos: 0, grasas: 100 },
        "Aceite de aguacate": { calorias: 884, proteinas: 0, carbohidratos: 0, grasas: 100 },
        "Aceite de girasol": { calorias: 884, proteinas: 0, carbohidratos: 0, grasas: 100 },
        "Mantequilla": { calorias: 717, proteinas: 0.9, carbohidratos: 0.1, grasas: 81 },
        "Mantequilla clarificada": { calorias: 900, proteinas: 0, carbohidratos: 0, grasas: 100 },
        "Ghee": { calorias: 900, proteinas: 0, carbohidratos: 0, grasas: 100 },
        "Mayonesa": { calorias: 680, proteinas: 1, carbohidratos: 0.6, grasas: 75 }
    },

    // SUPERALIMENTOS Y COMPLEMENTOS
    superalimentos: {
        "Espirulina": { calorias: 290, proteinas: 57, carbohidratos: 24, grasas: 8 },
        "Chlorella": { calorias: 370, proteinas: 60, carbohidratos: 30, grasas: 10 },
        "Polen": { calorias: 326, proteinas: 21, carbohidratos: 51, grasas: 5 },
        "Jalea real": { calorias: 310, proteinas: 13, carbohidratos: 49, grasas: 4 },
        "Maca": { calorias: 325, proteinas: 10, carbohidratos: 59, grasas: 2 },
        "Cacao en polvo": { calorias: 228, proteinas: 20, carbohidratos: 58, grasas: 14 },
        "Miel": { calorias: 304, proteinas: 0.3, carbohidratos: 82, grasas: 0 },
        "Sirope de arce": { calorias: 260, proteinas: 0, carbohidratos: 67, grasas: 0 },
        "Stevia": { calorias: 0, proteinas: 0, carbohidratos: 0, grasas: 0 },
        "Azúcar de coco": { calorias: 380, proteinas: 0, carbohidratos: 98, grasas: 0 }
    },

    // BEBIDAS Y BATIDOS
    bebidas: {
        "Proteína en polvo": { calorias: 387, proteinas: 75, carbohidratos: 8, grasas: 6 },
        "Proteína vegana": { calorias: 370, proteinas: 70, carbohidratos: 15, grasas: 4 },
        "Batido proteico": { calorias: 150, proteinas: 25, carbohidratos: 5, grasas: 2 },
        "Café": { calorias: 2, proteinas: 0.1, carbohidratos: 0, grasas: 0 },
        "Té verde": { calorias: 2, proteinas: 0.2, carbohidratos: 0, grasas: 0 },
        "Té negro": { calorias: 2, proteinas: 0.2, carbohidratos: 0, grasas: 0 },
        "Infusión": { calorias: 2, proteinas: 0.2, carbohidratos: 0, grasas: 0 },
        "Zumo de naranja": { calorias: 45, proteinas: 0.7, carbohidratos: 10, grasas: 0.2 },
        "Zumo de manzana": { calorias: 46, proteinas: 0.1, carbohidratos: 11, grasas: 0.1 },
        "Agua": { calorias: 0, proteinas: 0, carbohidratos: 0, grasas: 0 }
    },

    // SNACKS Y COMPLEMENTOS
    snacks: {
        "Granola": { calorias: 471, proteinas: 10, carbohidratos: 64, grasas: 20 },
        "Granola light": { calorias: 400, proteinas: 8, carbohidratos: 65, grasas: 12 },
        "Barrita proteica": { calorias: 350, proteinas: 20, carbohidratos: 30, grasas: 12 },
        "Barrita energética": { calorias: 300, proteinas: 5, carbohidratos: 50, grasas: 8 },
        "Galletas integrales": { calorias: 420, proteinas: 9, carbohidratos: 70, grasas: 9 },
        "Palomitas": { calorias: 387, proteinas: 13, carbohidratos: 78, grasas: 5 },
        "Plátano deshidratado": { calorias: 346, proteinas: 3.9, carbohidratos: 88, grasas: 1 },
        "Pasas": { calorias: 299, proteinas: 3.1, carbohidratos: 79, grasas: 0.5 },
        "Ciruelas pasas": { calorias: 240, proteinas: 2.2, carbohidratos: 64, grasas: 0.4 },
        "Orejones": { calorias: 241, proteinas: 3.4, carbohidratos: 63, grasas: 0.5 },
        "Chocolate negro 85%": { calorias: 598, proteinas: 12, carbohidratos: 45, grasas: 43 },
        "Chocolate negro 70%": { calorias: 598, proteinas: 12, carbohidratos: 46, grasas: 42 },
        "Chips de kale": { calorias: 350, proteinas: 15, carbohidratos: 35, grasas: 20 },
        "Zanahorias baby": { calorias: 41, proteinas: 0.9, carbohidratos: 10, grasas: 0.2 }
    }
};

// Función para obtener información nutricional de un alimento
function obtenerInfoNutricional(nombreAlimento, cantidad = 100) {
    const nombreLower = nombreAlimento.toLowerCase();
    
    // Buscar en todas las categorías
    for (const categoria in baseDatosAlimentos) {
        for (const alimento in baseDatosAlimentos[categoria]) {
            if (alimento.toLowerCase() === nombreLower || alimento.toLowerCase().includes(nombreLower)) {
                const info = baseDatosAlimentos[categoria][alimento];
                return {
                    nombre: alimento,
                    categoria: categoria,
                    calorias: Math.round((info.calorias * cantidad) / 100),
                    proteinas: Math.round((info.proteinas * cantidad) / 100 * 10) / 10,
                    carbohidratos: Math.round((info.carbohidratos * cantidad) / 100 * 10) / 10,
                    grasas: Math.round((info.grasas * cantidad) / 100 * 10) / 10
                };
            }
        }
    }
    
    return null;
}

// Función para obtener todos los alimentos de una categoría
function obtenerAlimentosPorCategoria(categoria) {
    return baseDatosAlimentos[categoria] || {};
}

// Función para buscar alimentos por nombre parcial
function buscarAlimentos(termino) {
    const resultados = [];
    const terminoLower = termino.toLowerCase();
    
    for (const categoria in baseDatosAlimentos) {
        for (const alimento in baseDatosAlimentos[categoria]) {
            if (alimento.toLowerCase().includes(terminoLower)) {
                resultados.push({
                    nombre: alimento,
                    categoria: categoria,
                    ...baseDatosAlimentos[categoria][alimento]
                });
            }
        }
    }
    
    return resultados;
}

// Exportar para uso global
window.baseDatosAlimentos = baseDatosAlimentos;
window.obtenerInfoNutricional = obtenerInfoNutricional;
window.obtenerAlimentosPorCategoria = obtenerAlimentosPorCategoria;
window.buscarAlimentos = buscarAlimentos;

