# 🍎 Sistema de Administración de Base de Datos de Alimentos

## Descripción

Interfaz de administración para gestionar la base de datos de alimentos de forma visual e intuitiva. Permite agregar, editar, eliminar y exportar/importar alimentos sin necesidad de editar código.

## Características

### ✨ Funcionalidades Principales

1. **Gestión Visual de Alimentos**
   - ✅ Agregar nuevos alimentos con interfaz intuitiva
   - ✅ Editar alimentos existentes
   - ✅ Eliminar alimentos con confirmación
   - ✅ Auto-cálculo de calorías basado en macronutrientes

2. **Búsqueda y Filtrado**
   - 🔍 Búsqueda en tiempo real por nombre, marca o producto
   - 🏷️ Filtrado por categoría principal
   - 📊 Vista tabular con toda la información nutricional

3. **Importación/Exportación**
   - 📥 Exportar base de datos completa a JSON
   - 📤 Importar base de datos desde archivo JSON
   - 🔄 Backup y restauración fácil

4. **Estadísticas**
   - 📊 Contador de total de alimentos
   - 🏷️ Número de categorías
   - 📋 Número de subcategorías

## Uso

### Iniciar la Interfaz

1. Abre `admin-alimentos.html` en tu navegador
2. Se cargará automáticamente la base de datos desde `base-datos-alimentos.js`

### Agregar un Nuevo Alimento

1. Haz clic en **"➕ Agregar Alimento"**
2. Completa el formulario con la información del alimento:
   - **Nombre**: Nombre del alimento (requerido)
   - **Categoría principal**: Proteínas, Hidratos de carbono, Grasas, etc.
   - **Subcategoría**: Carne blanca, Cereal, Pan, etc.
   - **Presentación**: Descripción de cómo viene el producto
   - **Peso**: Peso del producto
   - **Marca**: Marca comercial
   - **Producto**: Nombre comercial específico
   - **Notas**: Información adicional (disponibilidad, ubicación, etc.)
   - **Valores nutricionales** (por 100g):
     - Proteínas (requerido)
     - Carbohidratos (requerido)
     - Grasas (requerido)
     - Fibra (opcional)
     - Azúcares (opcional)
   - **Calorías**: Se calculan automáticamente
3. Haz clic en **"💾 Guardar"**

### Editar un Alimento Existente

1. Busca el alimento en la tabla
2. Haz clic en **"✏️ Editar"**
3. Modifica los campos deseados
4. Haz clic en **"💾 Guardar"**

### Eliminar un Alimento

1. Busca el alimento en la tabla
2. Haz clic en **"🗑️ Eliminar"**
3. Confirma la eliminación

### Buscar Alimentos

- Usa el cuadro de búsqueda para filtrar por:
  - Nombre del alimento
  - Marca
  - Producto comercial

### Filtrar por Categoría

- Selecciona una categoría del dropdown para ver solo alimentos de esa categoría
- Selecciona "Todas las categorías" para ver todos

### Exportar Base de Datos

1. Haz clic en **"📥 Exportar Base de Datos"**
2. Se descargará un archivo JSON con toda la base de datos
3. Puedes usar este archivo como backup o para compartir

### Importar Base de Datos

1. Haz clic en **"📤 Importar Base de Datos"**
2. Selecciona un archivo JSON válido
3. La base de datos se reemplazará con los datos importados

## Integración con la Aplicación Principal

Para usar los cambios en la aplicación principal, necesitas:

### Opción 1: Manual (Actual)

Después de hacer cambios en `admin-alimentos.html`:

1. Exporta la base de datos modificada
2. Abre `base-datos-alimentos.js`
3. Reemplaza el array `baseDatosAlimentos` con los datos exportados
4. Guarda el archivo

### Opción 2: Automática (Recomendada para producción)

Crear un script que sincronice automáticamente los cambios. Ver siguiente sección.

## Script de Sincronización

Para automatizar la sincronización de los cambios, puedes crear un script Node.js:

```javascript
// sync-alimentos.js
const fs = require('fs');

// Leer el JSON exportado desde admin-alimentos.html
const datosExportados = JSON.parse(fs.readFileSync('base-datos-alimentos-export.json', 'utf8'));

// Leer el archivo base-datos-alimentos.js
let contenido = fs.readFileSync('base-datos-alimentos.js', 'utf8');

// Reemplazar el array
const nuevoArray = JSON.stringify(datosExportados, null, 4);
contenido = contenido.replace(
    /const baseDatosAlimentos = \[[\s\S]*?\];/,
    `const baseDatosAlimentos = ${nuevoArray};`
);

// Guardar
fs.writeFileSync('base-datos-alimentos.js', contenido);
console.log('✅ Base de datos sincronizada correctamente');
```

Uso:
```bash
node sync-alimentos.js
```

## Futuras Mejoras

### 🔄 Versión 2.0 (Planificada)

- [ ] **Integración con Firebase**: Mover la base de datos a Firestore
- [ ] **Sincronización en tiempo real**: Cambios inmediatos en la aplicación
- [ ] **Validación avanzada**: Verificación de duplicados, rangos nutricionales
- [ ] **Subida de imágenes**: Añadir fotos a los alimentos
- [ ] **Control de versiones**: Historial de cambios
- [ ] **Multi-usuario**: Permisos de administrador
- [ ] **API pública**: Acceso programático a los datos

### 🚀 Migración a Firebase

Para escalar la aplicación, considera migrar la base de datos a Firebase Firestore:

**Ventajas:**
- ✅ No requiere edición de código
- ✅ Sincronización automática entre dispositivos
- ✅ Backup automático
- ✅ Búsqueda y filtrado en servidor
- ✅ Escalabilidad ilimitada
- ✅ Multi-usuario real-time

**Implementación:**
```javascript
// alimentoService.js
class AlimentoService {
    async obtenerAlimentos() {
        // Cargar desde Firestore
        const snapshot = await this.db.collection('alimentos').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    
    async agregarAlimento(alimento) {
        await this.db.collection('alimentos').add(alimento);
    }
    
    async actualizarAlimento(id, datos) {
        await this.db.collection('alimentos').doc(id).update(datos);
    }
    
    async eliminarAlimento(id) {
        await this.db.collection('alimentos').doc(id).delete();
    }
}
```

## Estructura de Datos

Cada alimento tiene la siguiente estructura:

```javascript
{
    "nombre": "String - Nombre del alimento",
    "categoria_principal": "String - Proteínas | Hidratos de carbono | Grasas | Verduras | Fruta",
    "subcategoria": "String - Carne blanca | Cereal | Pan | etc.",
    "presentacion": "String - Descripción opcional",
    "peso": "String - Ej: '200 g'",
    "marca": "String - Marca comercial",
    "producto": "String - Nombre del producto",
    "notas": "String - Información adicional",
    "proteínas": "Number - Gramos por 100g",
    "grasas": "Number - Gramos por 100g",
    "carbohidratos": "Number - Gramos por 100g",
    "fibra": "Number - Gramos por 100g (opcional)",
    "azucar": "Number - Gramos por 100g (opcional)"
}
```

## Ejemplos de Uso

### Agregar un nuevo producto proteico

```
Nombre: Yogur proteico - fresa
Categoría: Proteínas
Subcategoría: Postre
Presentación: Envase individual
Peso: 200 g
Marca: Hacendado
Producto: Proteico Fresco FRESA
Notas: Disponible en Mercadona desde 01/2024
Proteínas: 10.0 g
Carbohidratos: 2.0 g
Grasas: 0.1 g
Fibra: 3.0 g
Azúcares: 2.5 g
Calorías: [Auto-calculado: 48 kcal]
```

### Exportar y compartir cambios

```
1. Agregar/modificar alimentos
2. Exportar Base de Datos → base-datos-alimentos-export.json
3. Compartir archivo con equipo
4. Otros usuarios importan el archivo
```

## Soporte

Para problemas o sugerencias, consulta la documentación principal de la aplicación o contacta al desarrollador.

---

**Versión:** 1.0.0  
**Última actualización:** 2024  
**Licencia:** MIT

