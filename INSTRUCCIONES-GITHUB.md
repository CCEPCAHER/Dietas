# 📤 Instrucciones para Subir el Proyecto a GitHub

## ✅ Archivos Preparados para GitHub

Todo está listo y seguro. Puedes subir:

### ✅ Archivos Seguros de Subir
- ✅ Todo el código fuente (HTML, CSS, JS)
- ✅ `firebase-config.js` (credenciales públicas de Firebase)
- ✅ `firebase.json` (configuración de hosting)
- ✅ `firestore.rules` (reglas de seguridad)
- ✅ Todos los archivos `.md` (documentación)
- ✅ Imágenes e iconos PWA
- ✅ `manifest.json` y `sw.js` (PWA)

### 🔒 Protegidos por `.gitignore`
- ❌ Claves privadas (*.pem, *.key)
- ❌ Variables de entorno (*.env)
- ❌ Firebase Admin SDK keys
- ❌ Backups y temporales
- ❌ Logs y caché
- ❌ Archivos de Python (*.pyc, __pycache__)

## 🚀 Pasos para Subir a GitHub

### 1. Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Clic en "+" → "New repository"
3. Nombre sugerido: `maikafit-dietas` o `dietas-app`
4. Marca "Public" o "Private" (como prefieras)
5. **NO** marques "Add a README" (ya tienes uno)
6. Clic en "Create repository"

### 2. Inicializar Git (Primera vez)

Abre PowerShell en la carpeta del proyecto:

```powershell
# 1. Inicializar repositorio Git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer primer commit
git commit -m "Initial commit: Sistema profesional de gestión de dietas"

# 4. Conectar con GitHub (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# 5. Cambiar a rama main (si es necesario)
git branch -M main

# 6. Subir a GitHub
git push -u origin main
```

### 3. Actualizaciones Futuras

Cuando hagas cambios:

```powershell
# 1. Ver qué cambió
git status

# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push
```

## 🔐 Autenticación en GitHub

Si GitHub te pide autenticación:

### Opción 1: GitHub Personal Access Token (Recomendado)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Clic en "Tokens (classic)" → "Generate new token"
3. Marca permisos: `repo`
4. Genera y copia el token
5. Úsalo como contraseña cuando Git te la pida

### Opción 2: GitHub Desktop (Más fácil)

1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Inicia sesión con tu cuenta de GitHub
3. File → Add Local Repository
4. Selecciona tu carpeta del proyecto
5. Haz clic en "Publish repository"

## 📋 Comandos Útiles de Git

### Ver estado actual
```powershell
git status
```

### Ver cambios
```powershell
git diff
```

### Ver historial
```powershell
git log --oneline
```

### Deshacer último commit (sin subir)
```powershell
git reset --soft HEAD~1
```

### Ver qué archivos están ignorados
```powershell
git status --ignored
```

## ⚠️ Si Ya Existe un Repositorio Git

Si tu carpeta ya tiene Git:

```powershell
# Ver si tienes cambios sin commit
git status

# Si quieres empezar de cero
rm -rf .git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## 🎯 Checklist Final

Antes de subir, verifica:

- [ ] `.gitignore` está presente y completo
- [ ] No hay archivos sensibles (ver SEGURIDAD-GITHUB.md)
- [ ] `firebase-config.js` está presente (es seguro)
- [ ] `firestore.rules` están configuradas
- [ ] README.md está actualizado
- [ ] Todos los archivos importantes están presentes

## 📝 .gitignore Actualizado

El archivo `.gitignore` ahora protege:
- Claves privadas y certificados
- Variables de entorno
- Firebase Admin SDK
- Archivos temporales y logs
- Caché y backups
- Node modules (por si acaso)

## 🔗 Archivos Importantes

No olvides incluir:
- ✅ `firebase-config.js` - Configuración de Firebase
- ✅ `firebase.json` - Configuración de hosting
- ✅ `firestore.rules` - Reglas de seguridad
- ✅ `manifest.json` - Configuración PWA
- ✅ `sw.js` - Service Worker
- ✅ `README.md` - Documentación principal
- ✅ Todos los archivos `.js`, `.html`, `.css`

## 🚨 Solución de Problemas

### Error: "fatal: not a git repository"
```powershell
git init
```

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
```

### Error: "failed to push some refs"
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Ver qué archivos se van a subir
```powershell
git status
git diff --cached
```

### Eliminar un archivo del commit (antes de push)
```powershell
git reset HEAD archivo.txt
```

## 📞 Ayuda Adicional

- **Documentación Git**: [git-scm.com](https://git-scm.com/doc)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Tu guía de seguridad**: Ver `SEGURIDAD-GITHUB.md`

## ✅ Resumen

**Comandos rápidos:**

```powershell
# Inicializar
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main

# Actualizar
git add .
git commit -m "Descripción de cambios"
git push
```

---

**Tu proyecto está 100% seguro para GitHub.**  
Las credenciales de Firebase son públicas por diseño y están protegidas por Firestore Rules.

**Versión:** 1.0  
**Última actualización:** 2024

