# Guía de Instalación PWA - MAIKA PORCUNA

## 🚀 Inicio Rápido

Para convertir la app en una PWA instalable, solo necesitas:

1. **Generar los iconos** desde la imagen de la nutricionista
2. **Verificar** que los archivos estén en su lugar
3. **Probar** la instalación en tu dispositivo

### Método Rápido (Script Python)

```bash
# 1. Instalar Pillow
pip install Pillow

# 2. Generar todos los iconos
python generar_iconos.py ruta/a/tu/imagen.jpg

# 3. ¡Listo! Ya tienes tu PWA
```

---

## 📋 Preparación de Iconos (Detallada)

Para completar la instalación PWA, necesitas generar los iconos desde la imagen de la nutricionista. Sigue estos pasos:

### 1. Preparar la Imagen Original

Usa la imagen proporcionada de la nutricionista (retrato profesional).

**Recomendaciones:**
- **Formato**: JPG, PNG o cualquier formato soportado por PIL
- **Tamaño**: Idealmente 512x512px o mayor
- **Enfoque**: La imagen debe tener el rostro bien enfocado
- **Composición**: El script recortará automáticamente a cuadrado centrado

**Consejo**: Si la imagen no es cuadrada, el script automáticamente la recortará al centro, así que asegúrate de que el rostro esté bien centrado en el frame.

### 2. Generar Iconos en Múltiples Tamaños

Necesitas crear los siguientes iconos desde la imagen:

**Tamaños necesarios:**
- `icon-16x16.png` - 16x16 píxeles
- `icon-32x32.png` - 32x32 píxeles
- `icon-72x72.png` - 72x72 píxeles
- `icon-96x96.png` - 96x96 píxeles
- `icon-128x128.png` - 128x128 píxeles
- `icon-144x144.png` - 144x144 píxeles
- `icon-152x152.png` - 152x152 píxeles (Apple)
- `icon-167x167.png` - 167x167 píxeles (iPad Pro)
- `icon-180x180.png` - 180x180 píxeles (Apple)
- `icon-192x192.png` - 192x192 píxeles (Android)
- `icon-384x384.png` - 384x384 píxeles
- `icon-512x512.png` - 512x512 píxeles

### 3. Herramientas Recomendadas

#### Opción A: Online (Más Fácil)
1. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Sube tu imagen
   - Configura las opciones de la PWA
   - Descarga todos los iconos generados

2. **PWA Builder** (https://www.pwabuilder.com/imageGenerator)
   - Sube tu imagen
   - Genera automáticamente todos los tamaños
   - Descarga el ZIP completo

#### Opción B: Photoshop / GIMP
1. Abre la imagen en Photoshop o GIMP
2. Para cada tamaño:
   - Ve a **Imagen > Tamaño de imagen**
   - Cambia a modo cuadrado (la dimensión más pequeña)
   - Ajusta a la resolución deseada
   - Guarda como PNG

#### Opción C: ImageMagick (Línea de comandos)
```bash
# Instalar ImageMagick primero
# Windows: choco install imagemagick
# Mac: brew install imagemagick

# Generar todos los tamaños a la vez
convert maika_original.jpg -resize 16x16 icon-16x16.png
convert maika_original.jpg -resize 32x32 icon-32x32.png
convert maika_original.jpg -resize 72x72 icon-72x72.png
convert maika_original.jpg -resize 96x96 icon-96x96.png
convert maika_original.jpg -resize 128x128 icon-128x128.png
convert maika_original.jpg -resize 144x144 icon-144x144.png
convert maika_original.jpg -resize 152x152 icon-152x152.png
convert maika_original.jpg -resize 167x167 icon-167x167.png
convert maika_original.jpg -resize 180x180 icon-180x180.png
convert maika_original.jpg -resize 192x192 icon-192x192.png
convert maika_original.jpg -resize 384x384 icon-384x384.png
convert maika_original.jpg -resize 512x512 icon-512x512.png
```

#### Opción D: Script Python Automático (RECOMENDADO)

Tenemos un script Python incluido que hace todo el trabajo automáticamente:

**1. Instalar Pillow (si no lo tienes):**
```bash
pip install Pillow
```

**2. Ejecutar el script:**
```bash
# Si tienes la imagen en el mismo directorio
python generar_iconos.py maika_original.jpg

# O especificar la ruta completa
python generar_iconos.py C:\ruta\a\tu\imagen.jpg

# Los iconos se guardarán en el directorio actual
```

El script automáticamente:
- ✅ Abre la imagen
- ✅ La convierte a cuadrada (recorta centrado)
- ✅ Genera todos los 12 tamaños necesarios
- ✅ Los guarda como PNG optimizados
- ✅ Te muestra un resumen de lo generado

### 4. Colocar los Iconos

Una vez generados, coloca todos los iconos en la raíz del proyecto:

```
Dietas-main/
├── icon-16x16.png
├── icon-32x32.png
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-167x167.png
├── icon-180x180.png
├── icon-192x192.png
├── icon-384x384.png
├── icon-512x512.png
├── manifest.json
├── sw.js
└── index.html
```

### 5. Verificar los Archivos

Antes de probar la PWA, verifica que tengas todos los archivos:

```bash
# En Windows PowerShell
dir icon-*.png

# Debe mostrar 12 archivos de iconos
```

**Archivos necesarios:**
- ✅ `manifest.json` - Manifest de la PWA
- ✅ `sw.js` - Service Worker
- ✅ `icon-*.png` - 12 iconos (16x16 hasta 512x512)
- ✅ `index.html` - Actualizado con meta tags PWA

### 6. Verificar la PWA

#### En Chrome/Edge (Desktop):
1. Abre las DevTools (F12)
2. Ve a la pestaña **Application**
3. Verifica:
   - **Manifest**: Debe mostrar la información de la PWA
   - **Service Workers**: Debe mostrar "activated and running"
   - **Cache Storage**: Debe mostrar los archivos cacheados

#### En Android (Chrome):
1. Abre la página web
2. Menú (3 puntos) → **Instalar app** o **Agregar a pantalla de inicio**
3. Confirma la instalación
4. Se agregará un icono a la pantalla de inicio

#### En iOS (Safari):
1. Abre la página web
2. Compartir → **Agregar a Pantalla de Inicio**
3. Personaliza el nombre si es necesario
4. Toca "Agregar"

### 7. Funcionalidades PWA Activas

✅ **Instalable**: Los usuarios pueden instalar la app en su dispositivo
✅ **Offline**: Funciona sin conexión gracias al Service Worker
✅ **Responsive**: Optimizada para móviles
✅ **Rápida**: Archivos cacheados para carga instantánea
✅ **Actualizaciones**: Se actualiza automáticamente cuando hay cambios

### 8. Actualizar la Versión

Cuando hagas cambios importantes:
1. Modifica el `CACHE_NAME` en `sw.js` (ej: `maika-porcuna-v1.0.1`)
2. Despliega los cambios
3. Los usuarios recibirán la actualización automáticamente

## 📝 Notas Importantes

- **HTTPS requerido**: Las PWA solo funcionan en HTTPS o localhost
- **Firebase**: Asegúrate de que Firebase esté configurado correctamente
- **Iconos**: Usa formato PNG para mejor compatibilidad
- **Tamaño**: Los iconos deben ser cuadrados

## 🐛 Solución de Problemas

### El icono no aparece
- Verifica que los archivos estén en la raíz del proyecto
- Limpia el cache del navegador (Ctrl+Shift+Delete)
- Revisa la consola del navegador para errores

### Service Worker no se registra
- Verifica que estás usando HTTPS o localhost
- Comprueba que el archivo `sw.js` existe
- Revisa la consola para mensajes de error

### La app no funciona offline
- Verifica que `sw.js` esté actualizado con las rutas correctas
- Limpia el cache antiguo
- Desregistra el Service Worker y vuelve a registrarlo

## 📚 Recursos Adicionales

- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [MDN Web App Manifest](https://developer.mozilla.org/es/docs/Web/Manifest)
- [Service Worker API](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)

