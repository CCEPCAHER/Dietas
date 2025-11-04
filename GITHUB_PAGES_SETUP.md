# 🚀 Configuración de GitHub Pages

## Pasos para desplegar en GitHub Pages

### 1. Activar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - **Branch**: `main` (o `master`)
   - **Folder**: `/` (raíz)
5. Click en **Save**

### 2. Esperar el despliegue

GitHub Pages puede tardar unos minutos en generar tu sitio. Verás una URL como:
- `https://tu-usuario.github.io/Dietas-main/`

### 3. Verificar que todo funciona

Una vez desplegado, deberías poder:
- Ver la aplicación funcionando
- Ver los iconos correctamente
- Instalar como PWA

### 4. Si el sitio está en una subcarpeta (ej: `/Dietas-main/`)

Si tu repositorio no se llama `usuario.github.io`, GitHub Pages servirá tu sitio desde:
```
https://usuario.github.io/nombre-repositorio/
```

En este caso, las rutas relativas ya están configuradas correctamente.

## ⚠️ Solución de problemas

### Error 404
- Asegúrate de que el archivo `index.html` esté en la raíz del repositorio
- Verifica que la rama esté activa (main o master)
- Espera unos minutos después de activar GitHub Pages

### Los iconos no se ven
- Verifica que todos los archivos `icon-*.png` estén en la raíz
- Asegúrate de que las rutas en `manifest.json` sean relativas (sin `/` al inicio)

### La PWA no se puede instalar
- Verifica que el sitio esté servido por HTTPS (GitHub Pages lo proporciona automáticamente)
- Asegúrate de que el archivo `manifest.json` sea accesible
- Verifica en DevTools (F12) → Application → Manifest que no haya errores

