/**
 * Base de Datos de Alimentos - Sistema de Nutrición
 * @version 3.0
 * @description Sistema completo de gestión de alimentos con datos nutricionales
 */

// ============================================================================
// CONSTANTES Y CONFIGURACIÓN
// ============================================================================

const CATEGORIA_ALIMENTOS = {
    ACEITES_GRASAS: 'Otros',
    VERDURAS: 'Verduras',
    FRUTAS: 'Fruta',
    FRUTOS_SECOS: 'Fruto seco',
    SEMILLAS: 'Semilla',
    PROTEINA_ANIMAL: 'Origen animal',
    CARNE_BLANCA: 'Carne blanca',
    CARNE_ROJA: 'Carne roja',
    PESCADO_AZUL: 'Pescado azul',
    PESCADO_BLANCO: 'Pescado blanco',
    PESCADO_SEMIGRASO: 'Pescado semigraso',
    MARISCO: 'Marisco',
    EMBUTIDO: 'Embutido',
    VISCERA: 'Víscera',
    CEREAL: 'Cereal',
    PAN: 'Pan',
    PASTA: 'Pasta',
    TUBERCULO: 'Tubérculo',
    LEGUMBRES: 'Legumbres',
    LACTEOS: 'Leche',
    POSTRE: 'Postre',
    BEBIDA: 'Bebida',
    PLATO_PREPARADO: 'Plato preparado',
    VEGANO_VEGETARIANO: 'Apto para veganos y vegetarianos'
};

const MACRONUTRIENTE = {
    PROTEINAS: 'Proteínas',
    GRASAS: 'Grasas',
    HIDRATOS: 'Hidratos de carbono',
    GRASAS_PROTEINAS: 'Grasas y proteínas',
    HIDRATOS_GRASAS: 'Hidratos de carbono y grasas'
};

// Factores de conversión calórica
const CALORIAS_POR_GRAMO = {
    PROTEINAS: 4,
    CARBOHIDRATOS: 4,
    GRASAS: 9
};

// ============================================================================
// HELPER FUNCTIONS - UTILIDADES
// ============================================================================

/**
 * Normaliza un valor numérico nutricional
 * @param {string|number} valor - Valor a normalizar
 * @returns {number} Valor numérico
 */
function normalizarValor(valor) {
    if (!valor || valor === 'Irrelevante') return 0;
    if (typeof valor === 'number') return valor;
    return parseFloat(String(valor).replace(',', '.')) || 0;
}

/**
 * Calcula calorías basadas en macronutrientes
 * @param {number} proteinas - Gramos de proteínas
 * @param {number} carbohidratos - Gramos de carbohidratos
 * @param {number} grasas - Gramos de grasas
 * @returns {number} Calorías totales
 */
function calcularCalorias(proteinas, carbohidratos, grasas) {
    return (proteinas * CALORIAS_POR_GRAMO.PROTEINAS) +
           (carbohidratos * CALORIAS_POR_GRAMO.CARBOHIDRATOS) +
           (grasas * CALORIAS_POR_GRAMO.GRASAS);
}

/**
 * Crea un objeto de alimento normalizado
 * @param {Object} data - Datos del alimento
 * @returns {Object} Objeto de alimento normalizado
 */
function crearAlimento(data) {
    const proteinas = normalizarValor(data.proteínas || data.PROTEÍNAS);
    const hidratos = normalizarValor(data.hidratos || data.carbohidratos || data.HIDRATOS);
    const grasas = normalizarValor(data.grasas || data.GRASAS);
    const calorias = normalizarValor(data.calorias || data.CALORÍAS) || calcularCalorias(proteinas, hidratos, grasas);

    return {
        ALIMENTO: data.nombre || data.ALIMENTO,
        MACRONUTRIENTE_PRINCIPAL: data.categoria_principal || data['MACRONUTRIENTE PRINCIPAL'] || data.MACRONUTRIENTE_PRINCIPAL,
        CLASIFICACIÓN: data.subcategoria || data.CLASIFICACIÓN,
        UNIDAD: data.presentacion || data.UNIDAD || '',
        PESO_POR_UNIDAD: data.peso || data['PESO POR UNIDAD'] || data.PESO_POR_UNIDAD || '',
        MARCA_REGISTRADA: data.marca || data['MARCA REGISTRADA'] || data.MARCA_REGISTRADA || '',
        NOMBRE_DEL_PRODUCTO: data.producto || data['NOMBRE DEL PRODUCTO'] || data.NOMBRE_DEL_PRODUCTO || '',
        OTRAS_NOTAS: data.notas || data.descripcion || data['OTRAS NOTAS'] || data.OTRAS_NOTAS || '',
        CALORÍAS: Math.round(calorias),
        PROTEÍNAS: proteinas,
        GRASAS: grasas,
        GRASAS_SATURADAS: normalizarValor(data.grasas_saturadas || data['GRASAS SATURADAS'] || data.GRASAS_SATURADAS),
        HIDRATOS: hidratos,
        AZÚCARES: normalizarValor(data.azucares || data.azucar || data.AZÚCARES)
    };
}

// ============================================================================
// BASE DE DATOS DE ALIMENTOS
// ============================================================================

const baseDatosAlimentos = [
    // ACEITES Y GRASAS
    {
          "nombre": "Aceite de coco",
          "categoria_principal": "Grasas",
          "subcategoria": "Otros",
          "proteínas": 0.0,
          "grasas": 100.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Aceite de lino",
          "categoria_principal": "Grasas",
          "subcategoria": "Otros",
          "proteínas": 0.0,
          "grasas": 100.0,
          "grasas_saturadas": 0.0,
          "hidratos": 0.0,
          "azucares": 0.0
    },
    {
          "nombre": "Aceite de oliva",
          "categoria_principal": "Grasas",
          "subcategoria": "Otros",
          "presentacion": "Cucharada sopera",
          "peso": "6 g",
          "proteínas": 0.0,
          "grasas": 100.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Aceitunas negras",
          "categoria_principal": "Grasas",
          "subcategoria": "Verduras",
          "proteínas": 0.0,
          "grasas": 18.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 2.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Aceitunas verdes",
          "categoria_principal": "Grasas",
          "subcategoria": "Verduras",
          "proteínas": 0.0,
          "grasas": 15.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 2.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Acelgas",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 2.0,
          "grasas": 0.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 4.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Aguacate",
          "categoria_principal": "Grasas",
          "subcategoria": "Fruta",
          "presentacion": "Pieza de fruta",
          "peso": "100 g",
          "notas": "Tamaño mediano, sin hueso y sin piel",
          "proteínas": 2.0,
          "grasas": 15.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 9.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Alcachofas",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 2.3,
          "grasas": 0.1,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 7.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Almedra",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Fruto seco",
          "proteínas": 20.0,
          "grasas": 53.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 3.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Anacardo",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Fruto seco",
          "proteínas": 17.5,
          "grasas": 42.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 32.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Apio",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 1.3,
          "grasas": 0.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.3,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz basmati (1)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "proteínas": 9.0,
          "grasas": 0.6,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 78.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz basmati (2)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Envase individual",
          "peso": "125 g",
          "marca": "Brillante",
          "producto": "Sabroz Arroz Basmati",
          "descripcion": "Ideal por si no tienes tiempo para cocinar.",
          "proteínas": 3.9,
          "grasas": 2.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 31.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz blanco (1)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "proteínas": 6.7,
          "grasas": 1.1,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 77.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz blanco (2)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Envase individual",
          "peso": "125 g",
          "marca": "Brillante",
          "producto": "Sabroz ARROZ BLANCO COCIDO",
          "descripcion": "Ideal por si no tienes tiempo para cocinar.",
          "proteínas": 3.0,
          "grasas": 2.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 24.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz integral (1)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "proteínas": 8.4,
          "grasas": 2.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 71.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz integral (2)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Envase individual",
          "peso": "125 g",
          "marca": "Brillante",
          "producto": "Sabroz ARROZ INTEGRAL",
          "descripcion": "Ideal por si no tienes tiempo para cocinar.",
          "proteínas": 4.0,
          "grasas": 2.9,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 30.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Arroz vaporizado",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "proteínas": 7.9,
          "grasas": 0.7,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 76.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Atún",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado azul",
          "proteínas": 23.0,
          "grasas": 12.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Atún claro al natural - lata",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pescado azul",
          "presentacion": "Lata",
          "peso": "60 g",
          "marca": "Hacendado",
          "descripcion": "Ideal por si no tienes tiempo para cocinar. El peso es de una lata escurrida.",
          "proteínas": 21.0,
          "grasas": 1.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.9,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Avellana",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Fruto seco",
          "proteínas": 14.1,
          "grasas": 54.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 5.3,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Avena en polvo Prozis - Banana Walnut",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Scoop",
          "peso": "40 g",
          "marca": "Prozis",
          "producto": "Oatmeal + WHEY PROTEIN BANANA - WALNUT",
          "descripcion": "Si aplicas el código:'guerrero' podrás disfrutar de un 10% de descuento en toda la web👌🏻Si contratas alguno de mis servicios online el descuento será mayor.",
          "proteínas": 31.0,
          "grasas": 5.9,
          "grasas_saturadas": 1.2,
          "hidratos": 45.0,
          "azucares": 2.5
    },
    {
          "nombre": "Avena en polvo Prozis - chocolate",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Scoop",
          "peso": "40 g",
          "marca": "Prozis",
          "producto": "OATS INSTANT CHOCOLATE FLAVOUR",
          "descripcion": "Si aplicas el código:'guerrero' podrás disfrutar de un 10% de descuento en toda la web👌🏻Si contratas alguno de mis servicios online el descuento será mayor.",
          "proteínas": 12.0,
          "grasas": 7.1,
          "grasas_saturadas": 1.7,
          "hidratos": 67.0,
          "azucares": 1.0
    },
    {
          "nombre": "Avena en polvo Prozis - Nutchoc",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Scoop",
          "marca": "Prozis",
          "producto": "Oatmeal + WHEY PROTEIN NUTCHOC",
          "descripcion": "Si aplicas el código:'guerrero' podrás disfrutar de un 10% de descuento en toda la web👌🏻Si contratas alguno de mis servicios online el descuento será mayor. El sabor es chocolate negro con avellanas.",
          "proteínas": 31.0,
          "grasas": 7.5,
          "grasas_saturadas": 1.9,
          "hidratos": 41.0,
          "azucares": 1.8
    },
    {
          "nombre": "Bagels",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Envase individual",
          "peso": "75 g",
          "marca": "Bimbo",
          "producto": "BAGELS CLÁSICO",
          "proteínas": 11.0,
          "grasas": 2.7,
          "grasas_saturadas": 0.4,
          "hidratos": 53.0,
          "azucares": 11.0
    },
    {
          "nombre": "Batido proteico - chocolate (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Hacendado",
          "producto": "WHEY +PROTEÍNAS CHOCOLATE",
          "proteínas": 7.9,
          "grasas": 0.6,
          "grasas_saturadas": 0.5,
          "hidratos": 2.3,
          "azucares": 2.2
    },
    {
          "nombre": "Batido proteico - chocolate (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "200 g",
          "marca": "Carrefour",
          "producto": "Postre lácteo al cacaco PROteína Plus",
          "proteínas": 10.0,
          "grasas": 1.6,
          "grasas_saturadas": 1.0,
          "hidratos": 4.3,
          "azucares": 4.1
    },
    {
          "nombre": "Batido proteico - chocolate (3)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "350 g",
          "marca": "Margui",
          "producto": "BATIDO CACAO",
          "notas": "A fecha 23/12/23 se puede encontrar en Ahorramás",
          "proteínas": 11.0,
          "grasas": 0.5,
          "grasas_saturadas": 0.2,
          "hidratos": 5.2,
          "azucares": 5.1
    },
    {
          "nombre": "Batido proteico - chocolate (4)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Kaiku",
          "producto": "PROTEIN 98% WHEY Sabor choco & avellana",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 9.3,
          "grasas": 0.9,
          "grasas_saturadas": 0.4,
          "hidratos": 4.5,
          "azucares": 3.6
    },
    {
          "nombre": "Batido proteico - chocolate (5)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "500 g",
          "marca": "Arla",
          "producto": "PROTEIN MILK DRINK",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 5.6,
          "grasas": 0.9,
          "grasas_saturadas": 0.6,
          "hidratos": 4.9,
          "azucares": 4.7
    },
    {
          "nombre": "Batido proteico - chocolate (6)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "250 g",
          "marca": "Danone",
          "producto": "YoPRO PROTEIN SHAKE",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 6.0,
          "grasas": 0.3,
          "grasas_saturadas": 0.2,
          "hidratos": 5.1,
          "azucares": 4.9
    },
    {
          "nombre": "Batido proteico - chocolate (7)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Pascual",
          "producto": "DINAMIC PROTEIN Sport",
          "notas": "A fecha 3/05/24 se puede encontrar en Carrefour",
          "proteínas": 9.1,
          "grasas": 0.3,
          "grasas_saturadas": 0.1,
          "hidratos": 0.3,
          "azucares": 0.1
    },
    {
          "nombre": "Batido proteico - cookies",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Pascual",
          "producto": "DINAMIC PROTEIN Sport",
          "notas": "A fecha 3/05/24 se puede encontrar en Carrefour",
          "proteínas": 7.6,
          "grasas": 0.3,
          "grasas_saturadas": 0.1,
          "hidratos": 3.2,
          "azucares": 2.6
    },
    {
          "nombre": "Batido proteico - fresa & vainilla",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Kaiku",
          "producto": "PROTEIN 100% WHEY",
          "notas": "A fecha 23/12/23 se puede encontrar en Ahorramás",
          "proteínas": 9.1,
          "grasas": 0.5,
          "grasas_saturadas": 0.3,
          "hidratos": 4.6,
          "azucares": 3.8
    },
    {
          "nombre": "Batido proteico - plátano",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "345 g",
          "marca": "Nestlé",
          "producto": "Lindahls PRO+ Sabor plátano",
          "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
          "proteínas": 7.6,
          "grasas": 0.3,
          "grasas_saturadas": 0.2,
          "hidratos": 3.3,
          "azucares": 2.9
    },
    {
          "nombre": "Batido proteico - plátano & cacahuete",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Pascual",
          "producto": "DINAMIC PROTEIN",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 7.6,
          "grasas": 0.2,
          "grasas_saturadas": 0.1,
          "hidratos": 4.0,
          "azucares": 3.5
    },
    {
          "nombre": "Batido proteico - Prozis",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Scoop",
          "peso": "30 g",
          "marca": "Prozis",
          "producto": "XTREME ISOXP - WHEY PROTEIN ISOLATE",
          "descripcion": "Es la proteína más limpia del mercado. Si aplicas el código:'guerrero' podrás disfrutar de un 10% de descuento en toda la web👌🏻Si contratas alguno de mis servicios online el descuento será mayor.",
          "proteínas": 88.0,
          "grasas": 0.0,
          "grasas_saturadas": 0.2,
          "hidratos": 1.6,
          "azucares": 0.0
    },
    {
          "nombre": "Batido proteico - vainilla (1)",
          "categoria_principal": "Origen animal",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Hacendado",
          "producto": "WHEY +PROTEÍNAS VAINILLA",
          "proteínas": 7.9,
          "grasas": 0.6,
          "grasas_saturadas": 0.4,
          "hidratos": 2.2,
          "azucares": 2.1
    },
    {
          "nombre": "Batido proteico - vainilla (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Carrefour",
          "producto": "Bebida láctea de vainilla PROteína Plus",
          "notas": "Producto sin gluten.",
          "proteínas": 11.0,
          "grasas": 0.0,
          "grasas_saturadas": 0.1,
          "hidratos": 5.5,
          "azucares": 5.4
    },
    {
          "nombre": "Batido proteico - vainilla (3)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Danone",
          "producto": "YoPRO",
          "proteínas": 7.6,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 4.9,
          "azucares": 4.9
    },
    {
          "nombre": "Batido proteico - vainilla (4)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "350 g",
          "marca": "Milbona",
          "producto": "HIGH PROTEIN DRINK - VANILLA FLAVOUR",
          "notas": "A fecha 23/12/23 se puede encontrar en Lidl",
          "proteínas": 10.5,
          "grasas": 0.2,
          "grasas_saturadas": 0.1,
          "hidratos": 5.5,
          "azucares": 5.5
    },
    {
          "nombre": "Batido proteico - vainilla (5)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "250 g",
          "marca": "Danone",
          "producto": "YoPRO PROTEIN SHAKE",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 6.0,
          "grasas": 0.1,
          "grasas_saturadas": 0.1,
          "hidratos": 4.9,
          "azucares": 4.9
    },
    {
          "nombre": "Berenjena",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 1.2,
          "grasas": 0.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 4.4,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Boniato o batata",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Tubérculo",
          "proteínas": 1.2,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 21.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Bonito",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado azul",
          "proteínas": 21.0,
          "grasas": 6.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Boquerón",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado azul",
          "proteínas": 17.6,
          "grasas": 6.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Caballa",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado azul",
          "proteínas": 15.0,
          "grasas": 10.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.8,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Caballo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne roja",
          "proteínas": 21.0,
          "grasas": 1.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Cacahuete",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Fruto seco",
          "proteínas": 27.0,
          "grasas": 49.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 8.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Cacahuete polvo",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Fruto seco",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS cacahuete en polvo desgrasado",
          "notas": "A fecha 04/04/25 se puede encontrar en Mercadona",
          "proteínas": 46.7,
          "grasas": 13.2,
          "grasas_saturadas": 1.7,
          "hidratos": 21.0,
          "azucares": 10.0
    },
    {
          "nombre": "Calamar",
          "categoria_principal": "Proteínas",
          "subcategoria": "Marisco",
          "proteínas": 12.0,
          "grasas": 0.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Cerdo",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 20.0,
          "grasas": 8.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Cereales de avena (1)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Cuenco o bol tamaño normal",
          "peso": "150 g",
          "marca": "Hacendado",
          "producto": "AVENA Crunchy",
          "notas": "A fecha 23/4/23 se puede encontrar en Mercadona",
          "proteínas": 13.0,
          "grasas": 5.8,
          "grasas_saturadas": 1.0,
          "hidratos": 66.0,
          "azucares": 4.6
    },
    {
          "nombre": "Cereales de avena (2)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Cuenco o bol tamaño normal",
          "peso": "150 g",
          "marca": "Hacendado",
          "producto": "AVENA Crunchy CACAO",
          "notas": "A fecha 04/04/25 se puede encontrar en Mercadona",
          "proteínas": 13.0,
          "grasas": 6.4,
          "grasas_saturadas": 1.6,
          "hidratos": 65.0,
          "azucares": 9.0
    },
    {
          "nombre": "Champiñones",
          "categoria_principal": "Proteínas",
          "subcategoria": "Verduras",
          "proteínas": 3.3,
          "grasas": 0.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 2.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Chocolate 99%",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Otros",
          "proteínas": 15.0,
          "grasas": 54.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 8.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Ciruela",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 0.6,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 9.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Clara de huevo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "marca": "Hacendado",
          "proteínas": 11.0,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Codorniz",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 23.0,
          "grasas": 1.6,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Conejo",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 23.0,
          "grasas": 4.6,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Copa de nata y chocolate",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "150 g",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS Chocolate Nata",
          "proteínas": 10.0,
          "grasas": 2.4,
          "grasas_saturadas": 1.6,
          "hidratos": 5.0,
          "azucares": 4.0
    },
    {
          "nombre": "Copos de avena",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Cucharada sopera",
          "peso": "12 g",
          "marca": "Hacendado",
          "producto": "COPOS DE AVENA EXTRA SUAVES",
          "proteínas": 14.0,
          "grasas": 7.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 59.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Corn Flakes",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Envase individual",
          "peso": "30 g",
          "marca": "Kellogg´s",
          "producto": "Kellogg´s Corn Flakes",
          "proteínas": 7.0,
          "grasas": 0.9,
          "grasas_saturadas": 0.2,
          "hidratos": 84.0,
          "azucares": 8.0
    },
    {
          "nombre": "Crema de arroz",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "proteínas": 8.0,
          "grasas": 1.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 85.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Crema de cacahuete - chocolate",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Postre",
          "presentacion": "Cucharada sopera",
          "peso": "10 g",
          "marca": "Prozis",
          "producto": "Peanut ChocoButter",
          "descripcion": "Si aplicas el código:'guerrero' podrás disfrutar de un 10% de descuento en toda la web👌🏻Si contratas alguno de mis servicios online el descuento será mayor.",
          "proteínas": 16.0,
          "grasas": 51.0,
          "grasas_saturadas": 21.0,
          "hidratos": 26.0,
          "azucares": 5.2
    },
    {
          "nombre": "Crema de manteca de cacao proteica",
          "categoria_principal": "Grasas",
          "subcategoria": "Postre",
          "presentacion": "Cucharada sopera",
          "peso": "10 g",
          "marca": "Prozis",
          "producto": "ChocoButter + WHEY PROTEIN",
          "descripcion": "Si aplicas el código:'guerrero' podrás disfrutar de un 10% de descuento en toda la web👌🏻Si contratas alguno de mis servicios online el descuento será mayor.",
          "proteínas": 22.0,
          "grasas": 40.0,
          "grasas_saturadas": 8.4,
          "hidratos": 33.0,
          "azucares": 6.8
    },
    {
          "nombre": "Cuscuz",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Plato preparado",
          "presentacion": "Envase individual",
          "peso": "250 g",
          "marca": "Hacendado",
          "producto": "Tabulé oriental",
          "proteínas": 3.8,
          "grasas": 5.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 24.8,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Dátiles",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 2.2,
          "grasas": 0.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 71.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Dorada",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pescado blanco",
          "proteínas": 17.0,
          "grasas": 1.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Embutido de pavo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Embutido",
          "proteínas": 16.5,
          "grasas": 0.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.3,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Embutido de pechuga de pollo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Embutido",
          "marca": "Hacendado",
          "proteínas": 16.9,
          "grasas": 1.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.3,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Emperador",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado semigraso",
          "proteínas": 23.8,
          "grasas": 8.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Ensalada de marisco",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Otros",
          "presentacion": "Envase individual",
          "peso": "300 g",
          "marca": "Hacendado",
          "notas": "A fecha 04/04/25 se puede encontrar en Mercadona",
          "proteínas": 10.2,
          "grasas": 7.9,
          "grasas_saturadas": 1.2,
          "hidratos": 23.8,
          "azucares": 5.3
    },
    {
          "nombre": "Ensalada de pollo queso",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Otros",
          "presentacion": "Envase individual",
          "peso": "250 g",
          "marca": "Hacendado",
          "notas": "A fecha 04/04/25 se puede encontrar en Mercadona",
          "proteínas": 7.9,
          "grasas": 12.0,
          "grasas_saturadas": 2.8,
          "hidratos": 6.3,
          "azucares": 5.0
    },
    {
          "nombre": "Espárragos trigueros",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 2.2,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 2.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Espinacas",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 2.6,
          "grasas": 0.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.2,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Flan (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "100 g",
          "marca": "Hacendado",
          "producto": "Flan de Huevo Ovo",
          "proteínas": 6.3,
          "grasas": 1.5,
          "grasas_saturadas": 0.6,
          "hidratos": 8.2,
          "azucares": 6.1
    },
    {
          "nombre": "Flan (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "100 g",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS FLAN",
          "proteínas": 10.0,
          "grasas": 0.2,
          "grasas_saturadas": 0.2,
          "hidratos": 5.9,
          "azucares": 4.0
    },
    {
          "nombre": "Flan (3)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "160 g",
          "marca": "Reina",
          "producto": "Flan clara de huevo",
          "notas": "A fecha 23/12/23 se puede encontrar en Ahorramás",
          "proteínas": 8.0,
          "grasas": 0.0,
          "grasas_saturadas": 0.0,
          "hidratos": 8.1,
          "azucares": 4.2
    },
    {
          "nombre": "Frutos rojos",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 0.9,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 5.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Frutos secos varios",
          "categoria_principal": "Grasas",
          "subcategoria": "Fruto seco",
          "presentacion": "Envase individual",
          "peso": "50 g",
          "marca": "Hacendado",
          "descripcion": "Bolsita de mix de frutos secos (almendra, nuez, pistacho mora blanca, anacardo y arándano azul)",
          "proteínas": 16.0,
          "grasas": 33.0,
          "grasas_saturadas": 3.8,
          "hidratos": 34.0,
          "azucares": 30.0
    },
    {
          "nombre": "Gambas",
          "categoria_principal": "Proteínas",
          "subcategoria": "Marisco",
          "proteínas": 20.0,
          "grasas": 1.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Garbanzos cocidos (conserva bote de cristal)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Legumbres",
          "marca": "Hacendado",
          "proteínas": 5.5,
          "grasas": 2.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 9.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Garbanzos crudos",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Legumbres",
          "proteínas": 19.4,
          "grasas": 5.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 55.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Gazpacho con aceite",
          "categoria_principal": "Grasas",
          "subcategoria": "Plato preparado",
          "presentacion": "Envase individual",
          "peso": "330 g",
          "marca": "Hacendado",
          "proteínas": 0.6,
          "grasas": 7.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 2.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Gelatina proteica",
          "categoria_principal": "Proteínas",
          "subcategoria": "Otros",
          "presentacion": "Envase individual",
          "peso": "100 g",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS SABOR frutos silvestres",
          "proteínas": 6.0,
          "grasas": 0.0,
          "grasas_saturadas": 0.0,
          "hidratos": 3.8,
          "azucares": 3.7
    },
    {
          "nombre": "Granola",
          "categoria_principal": "Hidratos de carbono y grasas",
          "subcategoria": "Cereal",
          "presentacion": "Cuenco o bol tamaño normal",
          "peso": "150 g",
          "marca": "Hacendado",
          "proteínas": 13.6,
          "grasas": 22.7,
          "grasas_saturadas": 3.5,
          "hidratos": 50.2,
          "azucares": 4.7
    },
    {
          "nombre": "Guacamole",
          "categoria_principal": "Grasas",
          "subcategoria": "Fruta",
          "presentacion": "Cucharadita de café",
          "peso": "10 g",
          "marca": "Hacendado",
          "proteínas": 1.9,
          "grasas": 13.7,
          "grasas_saturadas": 3.8,
          "hidratos": 2.0,
          "azucares": 1.4
    },
    {
          "nombre": "Guisantes",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 6.0,
          "grasas": 0.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 13.1,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Gula",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "100 g",
          "marca": "La gula del norte",
          "notas": "A fecha 17/1/25 se puede encontrar en Ahorramás",
          "proteínas": 9.2,
          "grasas": 10.0,
          "grasas_saturadas": 1.0,
          "hidratos": 8.2,
          "azucares": 1.8
    },
    {
          "nombre": "Harina de arroz",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Vaso de tamaño normal",
          "peso": "125 g",
          "marca": "Hacendado",
          "proteínas": 7.4,
          "grasas": 0.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 79.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Hígado",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Víscera",
          "proteínas": 20.5,
          "grasas": 4.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.6,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Higos secos",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 3.5,
          "grasas": 2.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 53.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Huevo",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Huevo tamaño normal",
          "peso": "59 g",
          "marca": "Hacendado",
          "descripcion": "Huevo de gallina campera.",
          "proteínas": 12.5,
          "grasas": 11.1,
          "grasas_saturadas": 3.1,
          "hidratos": 0.0,
          "azucares": 0.4
    },
    {
          "nombre": "Jamón cocido",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Embutido",
          "proteínas": 18.4,
          "grasas": 3.1,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Jamón serrano",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Embutido",
          "proteínas": 28.0,
          "grasas": 12.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Judías verdes",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 2.3,
          "grasas": 0.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 5.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Leche de almendras",
          "categoria_principal": "Grasas",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Alpro",
          "producto": "SIN AZÚCAR ALMENDRAS",
          "notas": "A fecha 23/4/24 se puede encontrar en Ahorramás",
          "proteínas": 0.4,
          "grasas": 1.1,
          "grasas_saturadas": 0.1,
          "hidratos": 0.0,
          "azucares": 0.0
    },
    {
          "nombre": "Leche de avena",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Alpro",
          "producto": "BARISTA AVENA",
          "notas": "A fecha 23/04/24 se puede encontrar en Ahorramás",
          "proteínas": 0.8,
          "grasas": 3.0,
          "grasas_saturadas": 0.3,
          "hidratos": 6.7,
          "azucares": 3.3
    },
    {
          "nombre": "Leche proteica - chocolate",
          "categoria_principal": "Proteínas",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Alpro",
          "producto": "PLANT PROTEIN",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour Apta para personas veganas.",
          "proteínas": 5.0,
          "grasas": 2.8,
          "grasas_saturadas": 0.6,
          "hidratos": 5.3,
          "azucares": 5.0
    },
    {
          "nombre": "Leche proteica (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Asturiana",
          "producto": "Central lechera Asturiana suprema desnatada",
          "notas": "No contiene lactosa",
          "proteínas": 5.0,
          "grasas": 0.1,
          "grasas_saturadas": 0.1,
          "hidratos": 4.7,
          "azucares": 4.7
    },
    {
          "nombre": "Leche proteica (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Puleva",
          "producto": "Proteína Extra Pro",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 5.0,
          "grasas": 0.5,
          "grasas_saturadas": 0.3,
          "hidratos": 5.0,
          "azucares": 5.0
    },
    {
          "nombre": "Leche proteica (3)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "VEMONDO",
          "producto": "HIGH PROTEIN SOJA",
          "notas": "A fecha 02/03/25 se puede encontrar en Lidl",
          "proteínas": 5.0,
          "grasas": 2.2,
          "grasas_saturadas": 0.3,
          "hidratos": 2.5,
          "azucares": 2.4
    },
    {
          "nombre": "Leche proteica (4)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Pascual",
          "producto": "Movit LECHE CALCIO",
          "notas": "A fecha 02/03/25 se puede encontrar en Carrefour",
          "proteínas": 3.9,
          "grasas": 0.4,
          "grasas_saturadas": 0.3,
          "hidratos": 5.1,
          "azucares": 5.1
    },
    {
          "nombre": "Leche proteica (5)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Leche",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "marca": "Carrefour",
          "producto": "LECHE DESNATADA CALCIO* PROteína Plus",
          "proteínas": 8.0,
          "grasas": 0.2,
          "grasas_saturadas": 0.1,
          "hidratos": 4.8,
          "azucares": 4.8
    },
    {
          "nombre": "Lechuga",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 1.5,
          "grasas": 0.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.4,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Lenguado",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pescado blanco",
          "proteínas": 18.8,
          "grasas": 1.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Lentejas cocidas",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Legumbres",
          "proteínas": 8.2,
          "grasas": 0.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 10.7,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Lomo embuchado",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Embutido",
          "presentacion": "Envase individual",
          "peso": "125 g",
          "marca": "Hacendado",
          "descripcion": "El producto está dividido en 4 unidades de 31 g.",
          "proteínas": 38.0,
          "grasas": 5.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Lubina",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pescado blanco",
          "proteínas": 18.0,
          "grasas": 1.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Maíz",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "proteínas": 2.5,
          "grasas": 1.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 14.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Maíz - lata",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Lata",
          "peso": "70 g",
          "marca": "Hacendado",
          "descripcion": "El peso es de una lata escurrida.",
          "proteínas": 2.5,
          "grasas": 1.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 14.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Mandarina",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 0.8,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 16.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Mantequilla",
          "categoria_principal": "Grasas",
          "subcategoria": "Otros",
          "proteínas": 1.0,
          "grasas": 83.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Manzana",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "presentacion": "Pieza de fruta",
          "peso": "209 g",
          "descripcion": "Tamaño mediano",
          "proteínas": 0.3,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 12.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Melocotón",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 0.6,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 9.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Melón",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 0.6,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 6.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Merluza",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pescado blanco",
          "proteínas": 15.9,
          "grasas": 2.8,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.8,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Mero",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pescado blanco",
          "proteínas": 17.8,
          "grasas": 2.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Miel de flores",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Otros",
          "proteínas": 1.0,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 83.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Mousse - chocolate (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "200 g",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS MOUSSE Chocolate",
          "proteínas": 10.0,
          "grasas": 1.6,
          "grasas_saturadas": 1.1,
          "hidratos": 5.0,
          "azucares": 4.0
    },
    {
          "nombre": "Mousse - chocolate (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "150 g",
          "marca": "Valio",
          "proteínas": 12.0,
          "grasas": 1.8,
          "grasas_saturadas": 1.0,
          "hidratos": 5.7,
          "azucares": 4.9
    },
    {
          "nombre": "Mousse - chocolate (3)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "100 g",
          "marca": "Reina",
          "producto": "Mousse chocolate rico en proteínas",
          "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
          "proteínas": 10.0,
          "grasas": 2.7,
          "grasas_saturadas": 2.1,
          "hidratos": 15.0,
          "azucares": 8.3
    },
    {
          "nombre": "Mousse - chocolate (4)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "150 g",
          "marca": "Danone",
          "producto": "YoPRO PROTEIN MOUSSE",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 10.0,
          "grasas": 2.3,
          "grasas_saturadas": 1.6,
          "hidratos": 5.6,
          "azucares": 4.3
    },
    {
          "nombre": "Mousse - vainilla",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "200 g",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS MOUSSE Vainilla",
          "proteínas": 10.0,
          "grasas": 1.8,
          "grasas_saturadas": 1.2,
          "hidratos": 5.0,
          "azucares": 4.0
    },
    {
          "nombre": "Mozzarella light",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Cucharada sopera",
          "peso": "25 g",
          "marca": "Hacendado",
          "producto": "Mozzarella light",
          "proteínas": 17.0,
          "grasas": 9.0,
          "grasas_saturadas": 6.0,
          "hidratos": 1.0,
          "azucares": 0.8
    },
    {
          "nombre": "Muesli",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Cuenco o bol tamaño normal",
          "peso": "150 g",
          "proteínas": 9.0,
          "grasas": 13.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 64.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Muesli proteico",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Cereal",
          "presentacion": "Cuenco o bol tamaño normal",
          "peso": "150 g",
          "marca": "Crownfield",
          "producto": "HIGH PROTEIN CRUNCHY MUESLI ROASTED PEANUTS",
          "notas": "A fecha 21/04/25 se puede encontrar en Lidl",
          "proteínas": 25.0,
          "grasas": 15.8,
          "grasas_saturadas": 2.5,
          "hidratos": 50.6,
          "azucares": 13.4
    },
    {
          "nombre": "Mújol",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado blanco",
          "proteínas": 15.8,
          "grasas": 6.8,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Natillas proteicas - chocolate (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "125 g",
          "marca": "Milbona",
          "producto": "Natillas Chocolate Creme Chocolate",
          "notas": "A fecha 23/12/23 se puede encontrar en Lidl",
          "proteínas": 10.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 6.7,
          "azucares": 4.0
    },
    {
          "nombre": "Natillas proteicas - chocolate (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "120 g",
          "marca": "Danone",
          "producto": "+PROTEÍNA Natillas de chocolate",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 5.0,
          "grasas": 1.5,
          "grasas_saturadas": 0.9,
          "hidratos": 10.9,
          "azucares": 7.1
    },
    {
          "nombre": "Natillas proteicas - vainilla (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "120 g",
          "marca": "Hacendado",
          "producto": "+PROTEÍNAS NATILLAS Sabor Vainilla",
          "proteínas": 10.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 5.8,
          "azucares": 3.6
    },
    {
          "nombre": "Natillas proteicas - vainilla (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "125 g",
          "marca": "Reina",
          "producto": "NATILLAS VAINILLA",
          "proteínas": 10.0,
          "grasas": 1.3,
          "grasas_saturadas": 0.9,
          "hidratos": 7.7,
          "azucares": 5.9
    },
    {
          "nombre": "Natillas proteicas - vainilla (3)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "120 g",
          "marca": "Danone",
          "producto": "+PROTEÍNA Natillas Sabor Vainilla",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 5.0,
          "grasas": 1.4,
          "grasas_saturadas": 0.8,
          "hidratos": 11.9,
          "azucares": 7.5
    },
    {
          "nombre": "Nueces",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Fruto seco",
          "proteínas": 14.0,
          "grasas": 59.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 4.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Ñoquis",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Otros",
          "proteínas": 6.0,
          "grasas": 2.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 38.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Palometa",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado semigraso",
          "proteínas": 20.0,
          "grasas": 5.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pan blanco",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "proteínas": 7.8,
          "grasas": 1.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 58.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pan blanco de molde (1)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "28 g",
          "proteínas": 8.0,
          "grasas": 2.1,
          "grasas_saturadas": 0.5,
          "hidratos": 42.0,
          "azucares": 3.9
    },
    {
          "nombre": "Pan blanco de molde (2)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "72 g",
          "marca": "The Rustik Bakery",
          "producto": "The Rustik Pan Bakery Masa Madre CLÁSICA",
          "proteínas": 1.1,
          "grasas": 1.5,
          "grasas_saturadas": 0.3,
          "hidratos": 45.0,
          "azucares": 3.8
    },
    {
          "nombre": "Pan chapata cristal",
          "categoria_principal": "Hidratos de carbono y grasas",
          "subcategoria": "Pan",
          "presentacion": "Envase individual",
          "peso": "82 g",
          "marca": "Hacendado",
          "producto": "Pan chapata cristal",
          "proteínas": 9.6,
          "grasas": 5.8,
          "grasas_saturadas": 1.0,
          "hidratos": 50.0,
          "azucares": 2.6
    },
    {
          "nombre": "Pan de hamburguesa",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Envase individual",
          "peso": "75 g",
          "marca": "Hacendado",
          "producto": "MAX BURGER",
          "descripcion": "Una unidad son dos panes.",
          "proteínas": 9.4,
          "grasas": 5.9,
          "grasas_saturadas": 0.9,
          "hidratos": 44.0,
          "azucares": 4.7
    },
    {
          "nombre": "Pan de molde integral proteico",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "63 g",
          "marca": "Carrefour",
          "producto": "PAN DE MOLDE PROteína Plus",
          "proteínas": 24.0,
          "grasas": 12.0,
          "grasas_saturadas": 1.8,
          "hidratos": 9.7,
          "azucares": 2.2
    },
    {
          "nombre": "Pan integral",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "proteínas": 8.0,
          "grasas": 1.4,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 49.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pan mollete",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Envase individual",
          "peso": "104 g",
          "marca": "Hacendado",
          "producto": "Pan mollete",
          "proteínas": 7.5,
          "grasas": 1.1,
          "grasas_saturadas": 0.2,
          "hidratos": 53.0,
          "azucares": 1.8
    },
    {
          "nombre": "Pan proteico (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "40 g",
          "marca": "La Cestera",
          "producto": "HIGH PROTEIN Alto contenido de fibra",
          "notas": "A fecha 4/06/24 se puede encontrar en Lidl",
          "proteínas": 26.8,
          "grasas": 9.6,
          "grasas_saturadas": 1.1,
          "hidratos": 17.7,
          "azucares": 2.2
    },
    {
          "nombre": "Pan proteico (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "20 g",
          "marca": "Ketterer Pan Alemán",
          "producto": "The Protein Bread",
          "notas": "A fecha 31/07/24 se puede encontrar en Carrefour",
          "proteínas": 25.3,
          "grasas": 15.2,
          "grasas_saturadas": 1.9,
          "hidratos": 7.6,
          "azucares": 1.5
    },
    {
          "nombre": "Pan proteico (3)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "25 g",
          "marca": "Bestdiet",
          "producto": "PAN CON SEMILLAS KETO PROTEINA",
          "notas": "A fecha 22/10/24 se puede encontrar en Ahorramás",
          "proteínas": 24.0,
          "grasas": 14.0,
          "grasas_saturadas": 8.0,
          "hidratos": 14.0,
          "azucares": 1.7
    },
    {
          "nombre": "Pan tostado de tomate y aceite",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Rebanada",
          "peso": "10 g",
          "marca": "Hacendado",
          "producto": "Tomate",
          "proteínas": 9.4,
          "grasas": 29.3,
          "grasas_saturadas": 2.7,
          "hidratos": 51.2,
          "azucares": 4.8
    },
    {
          "nombre": "Panecillo",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pan",
          "presentacion": "Envase individual",
          "peso": "56 g",
          "marca": "Hacendado",
          "producto": "Panecillo",
          "proteínas": 8.2,
          "grasas": 1.1,
          "grasas_saturadas": 0.2,
          "hidratos": 53.0,
          "azucares": 3.2
    },
    {
          "nombre": "Pasas",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 3.0,
          "grasas": 1.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 59.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pasta",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pasta",
          "proteínas": 12.9,
          "grasas": 1.5,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 82.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pasta de lentejas rojas",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pasta",
          "marca": "Hacendado",
          "producto": "FUSILLI 100% LENTEJAS ROJAS",
          "proteínas": 26.0,
          "grasas": 1.7,
          "grasas_saturadas": 0.4,
          "hidratos": 50.0,
          "azucares": 1.2
    },
    {
          "nombre": "Pasta integral",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Pasta",
          "proteínas": 12.0,
          "grasas": 2.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 70.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Patata (1)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Tubérculo",
          "proteínas": 2.5,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 18.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Patata (2)",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Tubérculo",
          "marca": "Hacendado",
          "producto": "Horno Air-Fryer",
          "descripcion": "Ideal por si no tienes tiempo para cocinar.",
          "proteínas": 2.3,
          "grasas": 5.8,
          "grasas_saturadas": 0.7,
          "hidratos": 23.0,
          "azucares": 0.9
    },
    {
          "nombre": "Pavo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 21.9,
          "grasas": 2.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pepino",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 0.7,
          "grasas": 0.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.9,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Perdiz",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 23.0,
          "grasas": 1.6,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pescadilla",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 16.0,
          "grasas": 0.6,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.8,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pez espada",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Pescado azul",
          "proteínas": 17.0,
          "grasas": 4.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Plátano",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "proteínas": 1.2,
          "grasas": 0.3,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 20.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Poke salmón",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Otros",
          "presentacion": "Envase individual",
          "peso": "400 g",
          "marca": "Hacendado",
          "notas": "A fecha 04/04/25 se puede encontrar en Mercadona",
          "proteínas": 3.5,
          "grasas": 3.9,
          "grasas_saturadas": 0.6,
          "hidratos": 27.0,
          "azucares": 5.5
    },
    {
          "nombre": "Pollo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne blanca",
          "proteínas": 21.8,
          "grasas": 1.7,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Potón & Pota",
          "categoria_principal": "Proteínas",
          "subcategoria": "Marisco",
          "marca": "Hacendado",
          "producto": "RODAJA DE POTÓN DEL PACÍFICO - TENTÁCULOS DE POTA CORTADOS",
          "descripcion": "Producto congelado.",
          "proteínas": 17.0,
          "grasas": 0.9,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 1.3,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Potro",
          "categoria_principal": "Proteínas",
          "subcategoria": "Carne roja",
          "proteínas": 20.8,
          "grasas": 2.8,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 0.0,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Pudding proteico - avellana",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "200 g",
          "marca": "Milbona",
          "producto": "HIGH PROTEIN PUDDING - HAZELNUT FLAVOUR",
          "notas": "A fecha 23/12/23 se puede encontrar en Lidl",
          "proteínas": 10.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 5.8,
          "azucares": 4.8
    },
    {
          "nombre": "Pudding proteico - cacahuete",
          "categoria_principal": "Grasas y proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "200 g",
          "marca": "Carrefour",
          "producto": "Pudding sabor a cacahuete PROteína Plus",
          "proteínas": 10.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.1,
          "hidratos": 5.1,
          "azucares": 4.4
    },
    {
          "nombre": "Pudding proteico - caramelo (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "180 g",
          "marca": "Danone",
          "producto": "YoPRO PROTEIN PUDDING",
          "proteínas": 10.1,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 6.5,
          "azucares": 4.9
    },
    {
          "nombre": "Pudding proteico - caramelo (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "180 g",
          "marca": "Valio",
          "producto": "PROfeel PROTEIN PUDDING",
          "proteínas": 11.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 5.8,
          "azucares": 4.0
    },
    {
          "nombre": "Pudding proteico - chocolate (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "180 g",
          "marca": "Danone",
          "producto": "YoPRO PROTEIN PUDDING",
          "proteínas": 10.2,
          "grasas": 1.8,
          "grasas_saturadas": 1.2,
          "hidratos": 6.3,
          "azucares": 4.8
    },
    {
          "nombre": "Pudding proteico - chocolate (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "180 g",
          "marca": "Valio",
          "producto": "PROfeel PROTEIN PUDDING CHOCOLATE",
          "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
          "proteínas": 11.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 6.0,
          "azucares": 4.1
    },
    {
          "nombre": "Pudding proteico - chocolate & caramelo",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "150 g",
          "marca": "Milbona",
          "producto": "HIGH PROTEIN - CHOCOLATE & CARAMEL FLAVOUR Pudding side by side",
          "notas": "A fecha 21/04/25 se puede encontrar en Lidl",
          "proteínas": 10.0,
          "grasas": 1.6,
          "grasas_saturadas": 1.0,
          "hidratos": 6.5,
          "azucares": 4.9
    },
    {
          "nombre": "Pudding proteico - vainilla (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Apto para veganos",
          "presentacion": "Envase individual",
          "peso": "200 g",
          "marca": "Alpro",
          "proteínas": 10.0,
          "grasas": 2.5,
          "grasas_saturadas": 0.5,
          "hidratos": 7.4,
          "azucares": 4.9
    },
    {
          "nombre": "Pudding proteico - vainilla (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "180 g",
          "marca": "Danone",
          "producto": "YoPRO PROTEIN PUDDING",
          "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
          "proteínas": 10.1,
          "grasas": 1.4,
          "grasas_saturadas": 1.0,
          "hidratos": 5.0,
          "azucares": 3.8
    },
    {
          "nombre": "Pulpo",
          "categoria_principal": "",
          "subcategoria": "Marisco",
          "proteínas": 10.6,
          "grasas": 1.0,
          "grasas_saturadas": 0.0,
          "hidratos": 1.5,
          "azucares": 0.0
    },
    {
          "nombre": "Puré de patata",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Tubérculo",
          "presentacion": "Envase individual",
          "peso": "215 g",
          "marca": "Maggi",
          "producto": "el puré Original",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 7.4,
          "grasas": 0.8,
          "grasas_saturadas": 0.6,
          "hidratos": 74.0,
          "azucares": 3.5
    },
    {
          "nombre": "Queso corteza semi dura",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Loncha",
          "peso": "22 g",
          "marca": "Arla",
          "producto": "PROTEIN DELITE 5% FAT",
          "proteínas": 34.0,
          "grasas": 5.0,
          "grasas_saturadas": 3.2,
          "hidratos": 0.0,
          "azucares": 0.0
    },
    {
          "nombre": "Queso cottage",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Cucharada sopera",
          "peso": "10 g",
          "marca": "Arla",
          "producto": "PROTEIN cottage cheese",
          "notas": "A fecha 05/04/25 se puede encontrar en Carrefour",
          "proteínas": 15.0,
          "grasas": 1.5,
          "grasas_saturadas": 1.0,
          "hidratos": 2.1,
          "azucares": 2.1
    },
    {
          "nombre": "Queso delite",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Loncha",
          "peso": "21 g",
          "marca": "Arla",
          "producto": "PROTEIN DELITE 5% FAT",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 34.0,
          "grasas": 5.0,
          "grasas_saturadas": 3.2,
          "hidratos": 0.5,
          "azucares": 0.5
    },
    {
          "nombre": "Queso fresco (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "proteínas": 8.0,
          "grasas": 0.0,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 3.5,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Queso fresco (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "70 g",
          "marca": "Burgo de Arias",
          "producto": "PROTEIN plus",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 14.0,
          "grasas": 2.8,
          "grasas_saturadas": 1.9,
          "hidratos": 4.0,
          "azucares": 3.3
    },
    {
          "nombre": "Queso fresco batido (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Envase individual",
          "peso": "120 g",
          "marca": "Hacendado",
          "proteínas": 8.0,
          "grasas": 0.0,
          "grasas_saturadas": 0.0,
          "hidratos": 3.5,
          "azucares": 3.5
    },
    {
          "nombre": "Queso fresco batido (2)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Postre",
          "presentacion": "Envase individual",
          "peso": "150 g",
          "marca": "Margui",
          "producto": "SKYR NATURAL",
          "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
          "proteínas": 8.0,
          "grasas": 0.5,
          "grasas_saturadas": 0.1,
          "hidratos": 4.1,
          "azucares": 4.1
    },
    {
          "nombre": "Queso havarti",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Loncha",
          "peso": "31 g",
          "marca": "Arla",
          "producto": "- Your naturally tasty - HAVARTI MATURED FOR EXTREA TASTE",
          "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
          "proteínas": 26.0,
          "grasas": 26.0,
          "grasas_saturadas": 17.0,
          "hidratos": 0.1,
          "azucares": 0.1
    },
    {
          "nombre": "Queso havarti light (1)",
          "categoria_principal": "Proteínas",
          "subcategoria": "Origen animal",
          "presentacion": "Loncha",
          "peso": "24 g",
          "marca": "Hacendado",
          "descripcion": "Una unidad es una loncha y pesa 24 g. Por cada 100 g aporta 12 g de grasas saturadas y 0,4 g de azúcares.",
        "proteínas": 27.0,
        "grasas": 17.0,
        "carbohidratos": 12.0,
        "hidratos": 1.6,
        "azucar": 0.4
    },
    {
        "nombre": "Queso havarti light (2)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Origen animal",
        "presentacion": "Loncha",
        "peso": "31 g",
        "marca": "Arla",
        "producto": "- Your naturally tasty - HAVARTI LIGHT",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 29.0,
        "grasas": 16.0,
        "carbohidratos": 10.0,
        "hidratos": 0.5,
        "azucar": 0.5
    },
    {
        "nombre": "Queso madurado",
        "categoria_principal": "Proteínas",
        "subcategoria": "Origen animal",
        "presentacion": "Loncha",
        "peso": "28 g",
        "marca": "Carrefour",
        "producto": "Queso en lonchas PROteínas Plus",
        "proteínas": 34.0,
        "grasas": 10.0,
        "carbohidratos": 6.6,
        "hidratos": 0.0,
        "azucar": 0.0
    },
    {
        "nombre": "Quinoa",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Cereal",
        "proteínas": 13.0,
        "grasas": 6.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 70.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Quinoa blanca y roja",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Cereal",
        "presentacion": "Envase individual",
        "peso": "125 g",
        "marca": "Brillante",
        "producto": "Sabroz QUINOA REAL BLANCA Y ROJA",
        "proteínas": 4.7,
        "grasas": 3.1,
        "carbohidratos": "Irrelevante",
        "hidratos": 24.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Rape",
        "categoria_principal": "Proteínas",
        "subcategoria": "Pescado blanco",
        "proteínas": 18.7,
        "grasas": 0.3,
        "carbohidratos": "Irrelevante",
        "hidratos": 1.3,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Raya",
        "categoria_principal": "Proteínas",
        "subcategoria": "Pescado blanco",
        "proteínas": 17.1,
        "grasas": 0.9,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.8,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Requesón",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "proteínas": 12.2,
        "grasas": 0.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 5.2,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Rodaballo",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado blanco",
        "proteínas": 16.1,
        "grasas": 3.6,
        "carbohidratos": "Irrelevante",
        "hidratos": 1.3,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Salmón",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado azul",
        "proteínas": 18.4,
        "grasas": 12.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Salmonete",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado semigraso",
        "proteínas": 14.1,
        "grasas": 3.7,
        "carbohidratos": "Irrelevante",
        "hidratos": 2.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Salmorejo con aceite",
        "categoria_principal": "Grasas",
        "subcategoria": "Plato preparado",
        "presentacion": "Envase individual",
        "peso": "330 g",
        "marca": "Hacendado",
        "producto": "Salmorejo fresco con aceite de oliva virgen extra",
        "proteínas": 1.5,
        "grasas": 10.0,
        "carbohidratos": 1.4,
        "hidratos": 9.5,
        "azucar": 2.1
    },
    {
        "nombre": "Sandía",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Fruta",
        "proteínas": 0.4,
        "grasas": 0.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 4.5,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Sándwich de atún",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Plato preparado",
        "presentacion": "Envase individual",
        "peso": "185 g",
        "marca": "Hacendado",
        "producto": "ATÚN · HUEVO · TOMATE - Pan de tomate",
        "proteínas": 10.9,
        "grasas": 7.7,
        "carbohidratos": 2.3,
        "hidratos": 20.0,
        "azucar": 4.2
    },
    {
        "nombre": "Sardinas",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado azul",
        "proteínas": 18.1,
        "grasas": 7.5,
        "carbohidratos": "Irrelevante",
        "hidratos": 1.3,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Sardinillas",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado azul",
        "proteínas": 17.1,
        "grasas": 33.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.1,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Sargo",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado azul",
        "proteínas": 15.0,
        "grasas": 4.4,
        "carbohidratos": "Irrelevante",
        "hidratos": 1.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Seitán",
        "categoria_principal": "Proteínas",
        "subcategoria": "Apto para veganos y vegetarianos",
        "proteínas": 24.3,
        "grasas": 1.5,
        "carbohidratos": "Irrelevante",
        "hidratos": 3.6,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Semillas de girasol",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Semilla",
        "proteínas": 27.0,
        "grasas": 43.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 20.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Sepia",
        "categoria_principal": "Proteínas",
        "subcategoria": "Marisco",
        "proteínas": 18.0,
        "grasas": 0.5,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.8,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Snack de coco (bizcochito)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "40 g",
        "marca": "Nestlé",
        "producto": "Lindahls PRO+SNACK COCONUT",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 16.1,
        "grasas": 18.1,
        "carbohidratos": 9.5,
        "hidratos": 36.8,
        "azucar": 3.0
    },
    {
        "nombre": "Sushi",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Plato preparado",
        "marca": "Ahorramas",
        "producto": "Waka - me",
        "descripcion": "Bandeja de sushi variado 22 piezas",
        "proteínas": 8.7,
        "grasas": 3.6,
        "carbohidratos": 0.7,
        "hidratos": 25.0,
        "azucar": 2.5
    },
    {
        "nombre": "Ternera",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Carne roja",
        "proteínas": 20.7,
        "grasas": 5.4,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tiras de pollo",
        "categoria_principal": "Proteínas",
        "subcategoria": "Carne blanca",
        "presentacion": "Envase individual",
        "peso": "140 g",
        "marca": "Hacendado",
        "producto": "Tiras pollo frango",
        "proteínas": 23.4,
        "grasas": 0.4,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.6,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tiras de pollo al horno",
        "categoria_principal": "Proteínas",
        "subcategoria": "Carne blanca",
        "presentacion": "Envase individual",
        "peso": "140 g",
        "marca": "Hacendado",
        "producto": "Tiras pollo al horno Frango no Forno",
        "proteínas": 23.4,
        "grasas": 0.4,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.6,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tofu",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Apto para veganos y vegetarianos",
        "proteínas": 11.0,
        "grasas": 7.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tomate rallado",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Verduras",
        "presentacion": "Cucharada sopera",
        "peso": "23 g",
        "marca": "Hacendado",
        "producto": "TOMATE RALLADO FRESCO 100% natural",
        "proteínas": 0.5,
        "grasas": 0.5,
        "carbohidratos": "Irrelevante",
        "hidratos": 3.6,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tomates Cherry",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Verduras",
        "presentacion": "Envase individual",
        "peso": "8 g",
        "proteínas": 0.8,
        "grasas": 0.2,
        "carbohidratos": "Irrelevante",
        "hidratos": 3.9,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tortas de arroz",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Cereal",
        "presentacion": "Envase individual",
        "peso": "31 g",
        "marca": "Hacendado",
        "descripcion": "El peso por unidad es de 1 torta de arroz, no de un paquete.",
        "proteínas": 2.6,
        "grasas": 0.9,
        "carbohidratos": "Irrelevante",
        "hidratos": 23.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tortilla de patata",
        "categoria_principal": "Hidratos de carbono y grasas",
        "subcategoria": "Plato preparado",
        "presentacion": "Envase individual",
        "peso": "600 g",
        "marca": "Hacendado",
        "proteínas": 5.7,
        "grasas": 9.8,
        "carbohidratos": "Irrelevante",
        "hidratos": 11.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tortilla de patata con cebolla",
        "categoria_principal": "Hidratos de carbono y grasas",
        "subcategoria": "Plato preparado",
        "presentacion": "Envase individual",
        "peso": "600 g",
        "marca": "Hacendado",
        "proteínas": 5.7,
        "grasas": 11.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 17.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Tortilla de trigo",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Cereal",
        "presentacion": "Envase individual",
        "peso": "28 g",
        "marca": "OLD EL PASO",
        "producto": "8 Tortilla POCKETS",
        "notas": "A fecha 23/04/24 se puede encontrar en Ahorramás",
        "proteínas": 9.6,
        "grasas": 10.9,
        "carbohidratos": 1.3,
        "hidratos": 52.2,
        "azucar": 1.5
    },
    {
        "nombre": "Trucha",
        "categoria_principal": "Grasas y proteínas",
        "subcategoria": "Pescado azul",
        "proteínas": 15.7,
        "grasas": 3.0,
        "carbohidratos": "Irrelevante",
        "hidratos": 0.0,
        "azucar": "Irrelevante"
    },
    {
        "nombre": "Verduras variadas",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Verduras",
        "presentacion": "Cuenco o bol tamaño normal",
        "peso": "150 g",
        "marca": "Hacendado",
        "producto": "Salteado de verduras",
        "descripcion": "Producto congelado.",
        "proteínas": 2.0,
        "grasas": 0.3,
        "carbohidratos": 0.0,
        "hidratos": 5.0,
        "azucar": 1.8
    },
    {
        "nombre": "Yatekomo - parrilla",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Otros",
        "presentacion": "Envase individual",
        "peso": "60 g",
        "marca": "Gallina Blanca",
        "producto": "Yatekomo PARRILLA",
        "proteínas": 2.0,
        "grasas": 3.9,
        "carbohidratos": 1.9,
        "hidratos": 12.0,
        "azucar": 0.7
    },
    {
        "nombre": "Yatekomo - pollo",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Otros",
        "presentacion": "Envase individual",
        "peso": "60 g",
        "marca": "Gallina Blanca",
        "producto": "Yatekomo POLLO",
        "proteínas": 2.1,
        "grasas": 3.9,
        "carbohidratos": 1.9,
        "hidratos": 12.0,
        "azucar": 0.4
    },
    {
        "nombre": "Yogur griego",
        "categoria_principal": "Grasas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "125 g",
        "marca": "Hacendado",
        "producto": "Yogur al estilo GRIEGO NATURAL",
        "proteínas": 3.9,
        "grasas": 10.8,
        "carbohidratos": 6.7,
        "hidratos": 3.9,
        "azucar": 3.9
    },
    {
        "nombre": "Yogur líquido proteico - fresa (1)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "280 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS sabor fresa",
        "proteínas": 7.1,
        "grasas": 0.4,
        "carbohidratos": 0.2,
        "hidratos": 4.8,
        "azucar": 4.5
    },
    {
        "nombre": "Yogur líquido proteico - fresa (2)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "345 g",
        "marca": "Nestlé",
        "producto": "Lindahls PRO+ Sabor fresa",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 7.6,
        "grasas": 0.3,
        "carbohidratos": 0.2,
        "hidratos": 3.2,
        "azucar": 2.4
    },
    {
        "nombre": "Yogur líquido proteico - fresa (3)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "381 g",
        "marca": "Carrefour",
        "producto": "YOGUR LÍQUIDO SABOR FRESA PROTEína Plus",
        "proteínas": 7.5,
        "grasas": 0.5,
        "carbohidratos": 0.2,
        "hidratos": 4.7,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur líquido proteico - fresa (4)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "300 g",
        "marca": "Danone",
        "producto": "YoPRO PROTEIN DRINK",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 8.3,
        "grasas": 0.4,
        "carbohidratos": 0.2,
        "hidratos": 5.4,
        "azucar": 5.2
    },
    {
        "nombre": "Yogur líquido proteico - fresa (5)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "100 g",
        "marca": "Danone",
        "producto": "YOPRO HIGH PROTEIN SHOTS",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 8.3,
        "grasas": 0.4,
        "carbohidratos": 0.2,
        "hidratos": 5.4,
        "azucar": 5.2
    },
    {
        "nombre": "Yogur líquido proteico - fresa (6)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "270 g",
        "marca": "Danone",
        "producto": "+PROTEÍNA NUTRICIÓN DIARIA",
        "notas": "A fecha 4/06/24 se puede encontrar en Carrefour",
        "proteínas": 6.0,
        "grasas": 0.2,
        "carbohidratos": 0.2,
        "hidratos": 5.8,
        "azucar": 5.6
    },
    {
        "nombre": "Yogur líquido proteico - helado de fresa",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "250 g",
        "marca": "Valio",
        "producto": "PROfeel PROTEIN MILKSHAKE STRAWBERRY ICE CREAM",
        "notas": "A fecha 02/03/25 se puede encontrar en Carrefour",
        "proteínas": 10.0,
        "grasas": 1.5,
        "carbohidratos": 0.9,
        "hidratos": 4.6,
        "azucar": 4.4
    },
    {
        "nombre": "Yogur líquido proteico - mango",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "300 g",
        "marca": "Danone",
        "producto": "YoPRO PROTEIN DRINK",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 8.3,
        "grasas": 0.4,
        "carbohidratos": 0.3,
        "hidratos": 5.4,
        "azucar": 5.2
    },
    {
        "nombre": "Yogur líquido proteico - plátano (1)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "280 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS sabor plátano",
        "proteínas": 7.1,
        "grasas": 0.4,
        "carbohidratos": 0.2,
        "hidratos": 4.8,
        "azucar": 4.5
    },
    {
        "nombre": "Yogur líquido proteico - plátano (2)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "381 g",
        "marca": "Carrefour",
        "producto": "YOGUR LÍQUIDO SABOR PLÁTANO PROTEína Plus",
        "proteínas": 7.5,
        "grasas": 0.5,
        "carbohidratos": 0.2,
        "hidratos": 4.7,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur líquido proteico - tropical (1)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "280 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS sabor tropical",
        "proteínas": 7.1,
        "grasas": 0.4,
        "carbohidratos": 0.2,
        "hidratos": 4.7,
        "azucar": 4.3
    },
    {
        "nombre": "Yogur líquido proteico - tropical (2)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "400 g",
        "marca": "Margui",
        "producto": "YOGUR LÍQUIDO TROPICAL",
        "notas": "A fecha 23/12/23 se puede encontrar en Ahorramás",
        "proteínas": 7.5,
        "grasas": 0.5,
        "carbohidratos": 0.2,
        "hidratos": 4.7,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur líquido proteico - tropical (3)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "345 g",
        "marca": "Nestlé",
        "producto": "Lindahls PRO+ Sabor tropical",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 7.6,
        "grasas": 0.3,
        "carbohidratos": 0.2,
        "hidratos": 3.3,
        "azucar": 2.4
    },
    {
        "nombre": "Yogur líquido proteico - tropical (4)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "400 g",
        "marca": "Carrefour",
        "producto": "YOGUR LÍQUIDO SABOR TROPICAL PROTEína Plus",
        "proteínas": 7.5,
        "grasas": 0.5,
        "carbohidratos": 0.2,
        "hidratos": 4.7,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur proteico - arándanos",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "120 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS con arándanos",
        "proteínas": 8.3,
        "grasas": 0.0,
        "carbohidratos": 0.0,
        "hidratos": 5.0,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur proteico - café",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "170 g",
        "marca": "Pastoret",
        "producto": "Proteico Cremoso TOFFEE de CAFÉ",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 8.6,
        "grasas": 0.5,
        "carbohidratos": 0.1,
        "hidratos": 10.9,
        "azucar": 10.9
    },
    {
        "nombre": "Yogur proteico - caramelo macchiato",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "160 g",
        "marca": "Danone",
        "producto": "YoPRO PROTEINA SABOR CARAMEL MACCHIATO",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 9.4,
        "grasas": 0.1,
        "carbohidratos": 0.1,
        "hidratos": 4.1,
        "azucar": 3.1
    },
    {
        "nombre": "Yogur proteico - chocolate (1)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Carrefour",
        "producto": "Postre lácteo al cacao PROteína Plus",
        "proteínas": 10.0,
        "grasas": 1.6,
        "carbohidratos": 1.0,
        "hidratos": 4.3,
        "azucar": 4.1
    },
    {
        "nombre": "Yogur proteico - chocolate (2)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "120 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS Chocolate",
        "proteínas": 8.4,
        "grasas": 1.1,
        "carbohidratos": 0.6,
        "hidratos": 8.7,
        "azucar": 6.6
    },
    {
        "nombre": "Yogur proteico - chocolate (3)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Auchan",
        "producto": "PROTEIN + POSTRE LÁCTEO DE CACAO",
        "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
        "proteínas": 10.0,
        "grasas": 1.6,
        "carbohidratos": 1.1,
        "hidratos": 4.3,
        "azucar": 4.1
    },
    {
        "nombre": "Yogur proteico - chocolate (4)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Margui",
        "producto": "POSTRE CACAO PROTEÍNAS",
        "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
        "proteínas": 10.0,
        "grasas": 1.6,
        "carbohidratos": 1.1,
        "hidratos": 4.3,
        "azucar": 4.1
    },
    {
        "nombre": "Yogur proteico - chocolate (5)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Milbona",
        "producto": "HIGH PROTEIN DOBLE CHOCOLATE - CHOCOLATE Y NATA CON CHOCOLATE",
        "notas": "A fecha 23/12/23 se puede encontrar en Lidl",
        "proteínas": 10.0,
        "grasas": 2.4,
        "carbohidratos": 1.6,
        "hidratos": 5.5,
        "azucar": 4.5
    },
    {
        "nombre": "Yogur proteico - frambuesa",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Milbona",
        "producto": "HIGH PROTEIN QUARK - FRAMBUESA",
        "notas": "A fecha 23/12/23 se puede encontrar en Lidl",
        "proteínas": 12.5,
        "grasas": 0.5,
        "carbohidratos": 0.4,
        "hidratos": 3.6,
        "azucar": 3.2
    },
    {
        "nombre": "Yogur proteico - fresa (1)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "120 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS con fresa",
        "proteínas": 8.3,
        "grasas": 0.0,
        "carbohidratos": 0.0,
        "hidratos": 5.0,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur proteico - fresa (2)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "150 g",
        "marca": "Margui",
        "producto": "SKYR FRESA",
        "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
        "proteínas": 6.9,
        "grasas": 0.5,
        "carbohidratos": 0.1,
        "hidratos": 4.5,
        "azucar": 4.1
    },
    {
        "nombre": "Yogur proteico - fresa (3)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "160 g",
        "marca": "Danone",
        "producto": "YoPRO PROTEINA STRAWBERRY",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 9.4,
        "grasas": 0.1,
        "carbohidratos": 0.1,
        "hidratos": 3.9,
        "azucar": 3.6
    },
    {
        "nombre": "Yogur proteico - fresa (4)",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Día",
        "producto": "Día Láctea HIGH PROTEIN",
        "notas": "A fecha 13/07/24 se puede encontrar en Día",
        "proteínas": 12.4,
        "grasas": 0.4,
        "carbohidratos": 0.3,
        "hidratos": 3.3,
        "azucar": 2.8
    },
    {
        "nombre": "Yogur proteico - fresa (7)",
        "categoria_principal": "Hidratos de carbono",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "400 g",
        "marca": "Alpro",
        "producto": "SKYR STYLE + PROTEÍNA FRESA",
        "notas": "A fecha 02/03/25 se puede encontrar en Carrefour Apta para personas veganas.",
        "proteínas": 5.2,
        "grasas": 3.0,
        "carbohidratos": 0.5,
        "hidratos": 8.5,
        "azucar": 8.2
    },
    {
        "nombre": "Yogur proteico - limón",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "120 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS Limón",
        "proteínas": 8.3,
        "grasas": 0.0,
        "carbohidratos": 0.0,
        "hidratos": 5.2,
        "azucar": 4.6
    },
    {
        "nombre": "Yogur proteico - limón & cookies",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "160 g",
        "marca": "Nestlé",
        "producto": "Lindahls PRO+ Sabor limón & cookies",
        "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
        "proteínas": 10.0,
        "grasas": 0.2,
        "carbohidratos": 0.1,
        "hidratos": 4.1,
        "azucar": 3.7
    },
    {
        "nombre": "Yogur proteico - mango",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "170 g",
        "marca": "Pastoret",
        "producto": "Proteico Cremoso MANGO",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 8.6,
        "grasas": 0.5,
        "carbohidratos": 0.1,
        "hidratos": 11.3,
        "azucar": 11.3
    },
    {
        "nombre": "Yogur proteico - mango & maracuyá",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "120 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS con Puré mango maracuyá",
        "proteínas": 8.3,
        "grasas": 0.0,
        "carbohidratos": 0.0,
        "hidratos": 5.8,
        "azucar": 5.3
    },
    {
        "nombre": "Yogur proteico - mango & vainilla",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "175 g",
        "marca": "Valio",
        "producto": "PROfeel PROTEIN SNACK",
        "proteínas": 10.0,
        "grasas": 0.2,
        "carbohidratos": 0.1,
        "hidratos": 3.8,
        "azucar": 3.4
    },
    {
        "nombre": "Yogur proteico - natural",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "120 g",
        "marca": "Hacendado",
        "producto": "+PROTEÍNAS NATURAL",
        "proteínas": 10.0,
        "grasas": 0.0,
        "carbohidratos": 0.0,
        "hidratos": 3.1,
        "azucar": 3.1
    },
    {
        "nombre": "Yogur proteico - plátano",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "170 g",
        "marca": "Pastoret",
        "producto": "Proteico Cremoso PLÁTANO",
        "notas": "A fecha 22/02/24 se puede encontrar en Carrefour",
        "proteínas": 8.6,
        "grasas": 0.5,
        "carbohidratos": 0.1,
        "hidratos": 12.5,
        "azucar": 12.5
    },
    {
        "nombre": "Yogur proteico - vainilla",
        "categoria_principal": "Proteínas",
        "subcategoria": "Postre",
        "presentacion": "Envase individual",
        "peso": "200 g",
        "marca": "Margui",
        "producto": "POSTRE VAINILLA PROTEÍNAS",
        "notas": "A fecha 19/07/23 se puede encontrar en Alcampo",
        "proteínas": 10.0,
        "grasas": 1.5,
        "carbohidratos": 1.0,
        "hidratos": 4.5,
        "azucar": 4.4
    },
    {
          "nombre": "Zanahoria",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Verduras",
          "proteínas": 0.9,
          "grasas": 0.2,
          "grasas_saturadas": "Irrelevante",
          "hidratos": 7.3,
          "azucares": "Irrelevante"
    },
    {
          "nombre": "Zumo de naranja",
          "categoria_principal": "Hidratos de carbono",
          "subcategoria": "Fruta",
          "presentacion": "Vaso de tamaño normal",
          "peso": "250 g",
          "proteínas": 0.7,
          "grasas": 0.1,
          "grasas_saturadas": 0.0,
          "hidratos": 9.9,
          "azucares": 9.3
    }
].map(crearAlimento); // Normalizar todos los alimentos al cargarlos

// ============================================================================
// API PÚBLICA - FUNCIONES DE BÚSQUEDA Y CONSULTA
// ============================================================================

/**
 * Clase para gestionar la base de datos de alimentos
 */
class AlimentosDB {
    constructor(alimentos) {
        this.alimentos = alimentos;
        this.indiceNombres = this._crearIndiceNombres();
        this.indiceCategorias = this._crearIndiceCategorias();
    }

    /**
     * Crea un índice de nombres para búsquedas más rápidas
     * @private
     */
    _crearIndiceNombres() {
        const indice = new Map();
        this.alimentos.forEach((alimento, idx) => {
            const nombre = alimento.ALIMENTO.toLowerCase();
            indice.set(nombre, idx);
        });
        return indice;
    }

    /**
     * Crea un índice de categorías para filtrado rápido
     * @private
     */
    _crearIndiceCategorias() {
        const indice = new Map();
        this.alimentos.forEach((alimento, idx) => {
            const categoria = alimento.CLASIFICACIÓN;
            if (!indice.has(categoria)) {
                indice.set(categoria, []);
            }
            indice.get(categoria).push(idx);
        });
        return indice;
    }

    /**
     * Obtiene información nutricional de un alimento
     * @param {string} nombreAlimento - Nombre del alimento
     * @param {number} cantidad - Cantidad en gramos (por defecto 100g)
     * @returns {Object|null} Información nutricional o null si no se encuentra
     */
    obtenerInfoNutricional(nombreAlimento, cantidad = 100) {
        const nombreLower = nombreAlimento.toLowerCase();
        const factor = cantidad / 100;

        // Búsqueda exacta primero
        if (this.indiceNombres.has(nombreLower)) {
            const idx = this.indiceNombres.get(nombreLower);
            return this._calcularNutrientes(this.alimentos[idx], factor);
        }

        // Búsqueda parcial
        const alimento = this.alimentos.find(a => 
            a.ALIMENTO.toLowerCase().includes(nombreLower)
        );

        return alimento ? this._calcularNutrientes(alimento, factor) : null;
    }

    /**
     * Calcula los nutrientes ajustados por cantidad
     * @private
     */
    _calcularNutrientes(alimento, factor) {
        return {
            nombre: alimento.ALIMENTO,
            categoria: alimento.CLASIFICACIÓN,
            macronutrientePrincipal: alimento.MACRONUTRIENTE_PRINCIPAL,
            calorias: Math.round(alimento.CALORÍAS * factor),
            proteinas: Math.round(alimento.PROTEÍNAS * factor * 10) / 10,
            carbohidratos: Math.round(alimento.HIDRATOS * factor * 10) / 10,
            grasas: Math.round(alimento.GRASAS * factor * 10) / 10,
            grasasSaturadas: alimento.GRASAS_SATURADAS > 0 ? 
                Math.round(alimento.GRASAS_SATURADAS * factor * 10) / 10 : null,
            azucares: alimento.AZÚCARES > 0 ? 
                Math.round(alimento.AZÚCARES * factor * 10) / 10 : null,
            unidad: alimento.UNIDAD,
            pesoPorUnidad: alimento.PESO_POR_UNIDAD,
            marca: alimento.MARCA_REGISTRADA,
            producto: alimento.NOMBRE_DEL_PRODUCTO,
            notas: alimento.OTRAS_NOTAS
        };
    }

    /**
     * Obtiene todos los alimentos de una categoría
     * @param {string} categoria - Nombre de la categoría
     * @returns {Array} Array de alimentos
     */
    obtenerAlimentosPorCategoria(categoria) {
        if (!this.indiceCategorias.has(categoria)) {
            return [];
        }
        
        const indices = this.indiceCategorias.get(categoria);
        return indices.map(idx => this.alimentos[idx]);
    }

    /**
     * Busca alimentos por nombre parcial
     * @param {string} termino - Término de búsqueda
     * @param {number} limite - Número máximo de resultados (por defecto 50)
     * @returns {Array} Array de alimentos que coinciden
     */
    buscarAlimentos(termino, limite = 50) {
        const terminoLower = termino.toLowerCase();
        const resultados = [];

        for (const alimento of this.alimentos) {
            if (alimento.ALIMENTO.toLowerCase().includes(terminoLower)) {
                resultados.push(alimento);
                if (resultados.length >= limite) break;
            }
        }

        return resultados;
    }

    /**
     * Obtiene estadísticas de la base de datos
     * @returns {Object} Estadísticas
     */
    obtenerEstadisticas() {
        const categorias = {};
        const macronutrientes = {};

        this.alimentos.forEach(alimento => {
            // Contar por categoría
            const cat = alimento.CLASIFICACIÓN;
            categorias[cat] = (categorias[cat] || 0) + 1;

            // Contar por macronutriente principal
            const macro = alimento.MACRONUTRIENTE_PRINCIPAL;
            macronutrientes[macro] = (macronutrientes[macro] || 0) + 1;
        });

        return {
            totalAlimentos: this.alimentos.length,
            categorias,
            macronutrientes,
            ultimaActualizacion: new Date().toISOString()
        };
    }

    /**
     * Filtra alimentos por múltiples criterios
     * @param {Object} filtros - Objeto con criterios de filtrado
     * @returns {Array} Alimentos filtrados
     */
    filtrar(filtros) {
        return this.alimentos.filter(alimento => {
            // Filtro por categoría
            if (filtros.categoria && alimento.CLASIFICACIÓN !== filtros.categoria) {
                return false;
            }

            // Filtro por macronutriente principal
            if (filtros.macronutriente && alimento.MACRONUTRIENTE_PRINCIPAL !== filtros.macronutriente) {
                return false;
            }

            // Filtro por rango de calorías
            if (filtros.caloriasMin && alimento.CALORÍAS < filtros.caloriasMin) {
                return false;
            }
            if (filtros.caloriasMax && alimento.CALORÍAS > filtros.caloriasMax) {
                return false;
            }

            // Filtro por rango de proteínas
            if (filtros.proteinasMin && alimento.PROTEÍNAS < filtros.proteinasMin) {
                return false;
            }

            return true;
        });
    }

    /**
     * Obtiene todos los alimentos
     * @returns {Array} Todos los alimentos
     */
    obtenerTodos() {
        return [...this.alimentos];
    }

    /**
     * Obtiene lista de categorías únicas
     * @returns {Array} Array de categorías
     */
    obtenerCategorias() {
        return Array.from(this.indiceCategorias.keys()).sort();
    }

    /**
     * Recarga los datos de alimentos y reconstruye los índices
     * @param {Array} nuevosAlimentos - Nuevo array de alimentos
     */
    recargar(nuevosAlimentos) {
        this.alimentos = nuevosAlimentos;
        this.indiceNombres = this._crearIndiceNombres();
        this.indiceCategorias = this._crearIndiceCategorias();
    }
}

// ============================================================================
// INICIALIZACIÓN Y EXPORTACIÓN
// ============================================================================

// Crear instancia de la base de datos
const alimentosDB = new AlimentosDB(baseDatosAlimentos);

// Funciones legacy para compatibilidad con código existente
function obtenerInfoNutricional(nombreAlimento, cantidad = 100) {
    return alimentosDB.obtenerInfoNutricional(nombreAlimento, cantidad);
}

function obtenerAlimentosPorCategoria(categoria) {
    return alimentosDB.obtenerAlimentosPorCategoria(categoria);
}

function buscarAlimentos(termino, limite = 50) {
    return alimentosDB.buscarAlimentos(termino, limite);
}

function obtenerTodosLosAlimentos() {
    return alimentosDB.obtenerTodos();
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.baseDatosAlimentos = baseDatosAlimentos;
    window.alimentosDB = alimentosDB;
    window.obtenerInfoNutricional = obtenerInfoNutricional;
    window.obtenerAlimentosPorCategoria = obtenerAlimentosPorCategoria;
    window.buscarAlimentos = buscarAlimentos;
    window.obtenerTodosLosAlimentos = obtenerTodosLosAlimentos;
    window.CATEGORIA_ALIMENTOS = CATEGORIA_ALIMENTOS;
    window.MACRONUTRIENTE = MACRONUTRIENTE;
    
    console.log('✅ Base de Datos de Alimentos v3.0 cargada');
    console.log(`📊 Total alimentos: ${baseDatosAlimentos.length}`);
    console.log(`📂 Categorías disponibles: ${alimentosDB.obtenerCategorias().length}`);
}

// Exportar para módulos ES6 (si se usa)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        baseDatosAlimentos,
        alimentosDB,
        obtenerInfoNutricional,
        obtenerAlimentosPorCategoria,
        buscarAlimentos,
        CATEGORIA_ALIMENTOS,
        MACRONUTRIENTE
    };
}
