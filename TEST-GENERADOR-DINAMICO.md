# 🧪 Guía de Prueba: Generador de Dietas Dinámico

## ✅ Cambios Realizados

El generador de dietas ahora consulta la **base de datos dinámica** en lugar de usar listas hardcodeadas.

### Funciones Actualizadas:

- ✅ `seleccionarDesayuno()` - Consulta BD por Cereal, Pan, Frutas, Proteínas, etc.
- ✅ `seleccionarAlmuerzo()` - Consulta BD por Carnes, Pescados, Verduras, etc.
- ✅ `seleccionarCena()` - Consulta BD por Carnes, Pescados, Verduras, etc.

### Funciones con Fallback:

- ⚠️ `seleccionarMedioDia()` - Usa opciones predefinidas
- ⚠️ `seleccionarMerienda()` - Usa opciones predefinidas

*(Estas dos podrían actualizarse en el futuro si hay tiempo)*

---

## 🧪 Cómo Probar

### Prueba 1: Agregar un Nuevo Cereal

1. Ve a "🍎 Gestor Alimentos"
2. Haz clic en "➕ Agregar Alimento"
3. Completa:
   - **Nombre:** `Trigo sarraceno`
   - **Categoría:** `Hidratos de carbono`
   - **Subcategoría:** `Cereal`
   - **Proteínas:** `13g`
   - **Hidratos:** `71g`
   - **Grasas:** `3.4g`
4. Guarda
5. Ve a "Generar Nueva Dieta"
6. Genera un plan
7. **Verifica:** ¿Aparece "Trigo sarraceno" en algún desayuno?

### Prueba 2: Agregar una Nueva Fruta

1. En "🍎 Gestor Alimentos"
2. Agrega:
   - **Nombre:** `Maracuyá`
   - **Categoría:** `Hidratos de carbono`
   - **Subcategoría:** `Fruta`
   - **Proteínas:** `2.2g`
   - **Hidratos:** `23g`
   - **Grasas:** `0.7g`
3. Guarda
4. Genera una dieta
5. **Verifica:** ¿Aparece "Maracuyá" en algún desayuno?

### Prueba 3: Agregar una Nueva Verdura

1. Agrega:
   - **Nombre:** `Rúcula`
   - **Categoría:** `Hidratos de carbono`
   - **Subcategoría:** `Verduras`
   - **Proteínas:** `2.6g`
   - **Hidratos:** `3.7g`
   - **Grasas:** `0.7g`
2. Guarda
3. Genera dieta
4. **Verifica:** ¿Aparece "Rúcula" en almuerzo/cena?

### Prueba 4: Agregar una Nueva Proteína

1. Agrega:
   - **Nombre:** `Pechuga de pavo`
   - **Categoría:** `Proteínas`
   - **Subcategoría:** `Carne blanca`
   - **Proteínas:** `24g`
   - **Hidratos:** `0g`
   - **Grasas:** `1g`
2. Guarda
3. Genera dieta
4. **Verifica:** ¿Aparece "Pechuga de pavo" en almuerzo/cena?

---

## 🔍 Verificación Técnica

### En la Consola del Navegador (F12):

Deberías ver mensajes como:

```
✅ Base de datos de alimentos recargada en alimentosDB
```

Si ves:
```
⚠️ alimentosDB no disponible
```

→ Significa que la base no se cargó correctamente. Recarga la página.

---

## 📊 Categorías Disponibles

El generador consulta estas categorías:

### Desayuno:
- `Cereal` (carbohidratos)
- `Pan` (carbohidratos)
- `Fruta` (frutas)
- `Fruto seco` (grasas saludables)
- `Otros` (complementos)
- `Origen animal` (proteínas)
- `Carne blanca` (proteínas)
- `Carne roja` (proteínas)
- `Leche` (proteínas lácteas)

### Almuerzo/Cena:
- `Carne blanca` (proteínas)
- `Carne roja` (proteínas)
- `Pescado azul` (proteínas)
- `Pescado blanco` (proteínas)
- `Pescado semigraso` (proteínas)
- `Marisco` (proteínas)
- `Legumbres` (proteínas veganas)
- `Leche` (proteínas lácteas)
- `Verduras` (vegetales)
- `Tubérculo` (carbohidratos)
- `Cereal` (carbohidratos)
- `Fruto seco` (grasas)
- `Otros` (aceites, etc.)

---

## 🚨 Problemas Comunes

### El alimento no aparece en la dieta

**Posibles causas:**

1. **Categoría incorrecta**
   - Verifica que la "Subcategoría" coincida exactamente con las listadas arriba
   - Ejemplo: "Fruto seco" (correcto) vs "Frutos secos" (incorrecto)

2. **Base no recargada**
   - Abre consola (F12) y verifica mensajes
   - Si ves "⚠️ alimentosDB no disponible", recarga la página

3. **Nombre no coincide**
   - El nombre debe ser exactamente como lo agregaste
   - Respeta mayúsculas/minúsculas

### Solución Rápida:

1. Abre consola (F12)
2. Escribe: `window.alimentosDB.obtenerTodos().length`
3. Debe mostrar un número > 200 (total de alimentos)
4. Si muestra 0, la BD no se cargó → recarga la página

---

## ✅ Verificación de la Base de Datos

### Ver todos los alimentos:

```javascript
// En consola del navegador
window.alimentosDB.obtenerTodos()
```

### Ver alimentos por categoría:

```javascript
// Cereales
window.alimentosDB.obtenerAlimentosPorCategoria('Cereal')

// Frutas
window.alimentosDB.obtenerAlimentosPorCategoria('Fruta')

// Verduras
window.alimentosDB.obtenerAlimentosPorCategoria('Verduras')

// Carnes blancas
window.alimentosDB.obtenerAlimentosPorCategoria('Carne blanca')
```

### Buscar un alimento específico:

```javascript
window.alimentosDB.buscarAlimentos('tu-nuevo-alimento')
```

---

## 🎯 Resultado Esperado

**ANTES:**
- ❌ Solo 200+ alimentos hardcodeados
- ❌ Nuevos alimentos no aparecían

**AHORA:**
- ✅ Consulta base de datos dinámica
- ✅ Nuevos alimentos aparecen automáticamente
- ✅ Sincronización con Firebase
- ✅ Fallback a listas originales si no hay BD

---

## 📝 Notas Técnicas

### Mapeo de Categorías:

El generador mapea así:

**Carbohidratos de Desayuno:**
- BD: `Cereal`, `Pan`
- Fallback: `['Avena', 'Pan integral', 'Quinoa']`

**Proteínas de Desayuno:**
- BD: `Origen animal`, `Carne blanca`, `Carne roja`, `Leche`, `Legumbres`
- Fallback: `['Huevos enteros', 'Yogur griego', 'Requesón']`

**Proteínas de Almuerzo/Cena:**
- BD: `Carne blanca`, `Carne roja`, `Pescado azul`, `Pescado blanco`, `Marisco`, `Legumbres`
- Fallback: `['Pechuga de pollo', 'Salmón', 'Atún fresco']`

**Verduras:**
- BD: `Verduras`
- Fallback: `['Brócoli', 'Espinacas', 'Espárragos']`

**Frutas:**
- BD: `Fruta`
- Fallback: `['Plátano', 'Fresas', 'Arándanos', 'Manzana', 'Kiwi', 'Mango']`

---

## 🔄 Flujo Completo

```
1. Usuario agrega alimento en "Gestor Alimentos"
   ↓
2. Se normaliza con normalizarAlimento()
   ↓
3. Se guarda en baseDatosCompleta
   ↓
4. Se actualiza window.baseDatosAlimentos
   ↓
5. Se guarda en localStorage
   ↓
6. Se guarda en Firebase Firestore
   ↓
7. Se recarga alimentosDB con recargarAlimentosDB()
   ↓
8. Generador consulta alimentosDB.obtenerAlimentosPorCategoria()
   ↓
9. El alimento aparece en la dieta generada
   ↓
10. ¡Éxito!
```

---

## ✨ Ventajas del Sistema Dinámico

1. **Escalable:** Agrega 1000 alimentos sin cambiar código
2. **Flexible:** Sincronización automática con Firebase
3. **Seguro:** Fallback a listas originales si falla
4. **Profesional:** Sistema empresarial
5. **Mantenible:** Cambios sin tocar código del generador

---

**Versión:** 1.0  
**Última actualización:** 2024

