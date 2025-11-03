# 🔧 Solución al Error 404 en PWA Instalada

## El Problema

Cuando anclas la PWA y la abres, aparece error 404 porque:
- El `manifest.json` tiene `start_url: "/"` que busca en la raíz absoluta
- Si tu repositorio NO se llama `usuario.github.io`, GitHub Pages sirve desde una subcarpeta
- Ejemplo: Si tu repo es `Dietas-main`, la URL es `usuario.github.io/Dietas-main/`

## Solución

**IMPORTANTE**: Si tu repositorio NO se llama exactamente `tu-usuario.github.io`, necesitas:

1. **Renombrar el repositorio a `tu-usuario.github.io`** (recomendado)
   - Ve a Settings → General → Repository name
   - Cambia el nombre a `tu-usuario.github.io`
   - GitHub Pages automáticamente servirá desde la raíz

2. **O mantener el nombre actual y usar esta configuración**:
   - El manifest.json ya tiene rutas relativas para los iconos
   - Pero `start_url` y `scope` necesitan ajustarse según tu estructura

## Pasos para Verificar

1. **Abre tu sitio en GitHub Pages**:
   ```
   https://tu-usuario.github.io/Dietas-main/
   ```

2. **Verifica que `index.html` se carga correctamente**

3. **Desinstala la PWA anterior**:
   - Android: Configuración → Apps → Busca "MAIKA" → Desinstalar
   - iOS: Mantén presionado el icono → Eliminar app
   - Chrome: chrome://apps → Click derecho → Eliminar

4. **Reinstala la PWA** desde la URL correcta de GitHub Pages

5. **Si sigue el error 404**, verifica:
   - Que el repositorio esté configurado en GitHub Pages (Settings → Pages)
   - Que todos los archivos estén en la rama correcta
   - Que `index.html` esté en la raíz del repositorio

## Opción: Usar Firebase Hosting (Recomendado para PWAs)

Firebase Hosting es mejor para PWAs porque:
- ✅ Siempre sirve desde la raíz
- ✅ HTTPS automático
- ✅ Mejor soporte para Service Workers
- ✅ Despliegue rápido

¿Quieres que configuremos Firebase Hosting en lugar de GitHub Pages?

