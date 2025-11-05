# 🚀 Despliegue Automático - Guía Completa

Sistema automatizado para subir tu aplicación a GitHub y desplegarla en Firebase con un solo comando.

## ⚡ Inicio Rápido

### Windows (Recomendado)

**Opción 1: Doble clic**
1. Haz doble clic en `desplegar-todo.bat`
2. Sigue las instrucciones en pantalla

**Opción 2: PowerShell**
1. Haz clic derecho en `desplegar-todo.ps1`
2. Selecciona "Ejecutar con PowerShell"

**Opción 3: Línea de comandos**
```powershell
.\desplegar-todo.ps1
```

### Linux/Mac

```bash
bash desplegar-todo.sh  # (próximamente)
```

## 📋 Requisitos Previos

### 1. Git Instalado

**Verificar:**
```powershell
git --version
```

**Instalar si es necesario:**
- Windows: [git-scm.com](https://git-scm.com/download/win)
- Mac: `brew install git`
- Linux: `sudo apt-get install git`

### 2. Firebase CLI Instalado

**Verificar:**
```powershell
firebase --version
```

**Instalar:**
```powershell
npm install -g firebase-tools
```

**Iniciar sesión:**
```powershell
firebase login
```

### 3. GitHub Configurado

**Primera vez:**
1. Crear repositorio en GitHub
2. Copiar la URL del repositorio

**Autenticación:**
- Usar GitHub Personal Access Token (recomendado)
- O usar GitHub Desktop

## 🎯 Proceso de Despliegue

### Paso 1: GitHub

El script pregunta:
```
URL de tu repositorio de GitHub (ej: https://github.com/tu-usuario/maikafit-dietas.git)
```

**Opciones:**
- Escribe la URL → Se sube a GitHub
- Deja vacío → Se salta GitHub

**El script automáticamente:**
1. ✓ Verifica si Git está instalado
2. ✓ Inicializa repositorio si es necesario
3. ✓ Muestra archivos modificados
4. ✓ Pide mensaje de commit
5. ✓ Hace push a GitHub

### Paso 2: Firebase

El script pregunta:
```
¿Qué quieres desplegar?
  1. Solo Hosting (archivos web)
  2. Solo Firestore Rules (reglas de seguridad)
  3. Todo (Hosting + Firestore Rules)
  0. Saltar Firebase
```

**Recomendado:** Opción 3 (Todo)

**El script automáticamente:**
1. ✓ Verifica autenticación de Firebase
2. ✓ Pide qué desplegar
3. ✓ Ejecuta el comando correspondiente
4. ✓ Muestra el resultado

## 🔄 Flujo Completo

```
[Inicio]
   ↓
¿Git instalado? → NO → [Saltar GitHub]
   ↓ SÍ
¿Es repositorio Git? → NO → git init
   ↓ SÍ
¿Hay cambios? → NO → [Sin cambios]
   ↓ SÍ
Agregar archivos (git add .)
   ↓
Preguntar mensaje commit
   ↓
Crear commit
   ↓
¿Hay remote? → NO → [Configurar manual]
   ↓ SÍ
Hacer push a GitHub
   ↓
¿Firebase CLI? → NO → [Saltar Firebase]
   ↓ SÍ
Verificar autenticación
   ↓
Preguntar qué desplegar
   ↓
Desplegar
   ↓
Mostrar URLs finales
   ↓
[Fin]
```

## 📝 Ejemplos de Uso

### Ejemplo 1: Primera Vez

```powershell
.\desplegar-todo.ps1

# El script preguntará:
# URL de GitHub? → https://github.com/tu-usuario/maikafit-dietas.git
# Mensaje commit? → Initial commit: App completa
# Qué desplegar? → 3 (Todo)
```

### Ejemplo 2: Actualización Normal

```powershell
.\desplegar-todo.ps1

# El script detectará cambios automáticamente:
# Mensaje commit? → Agregado gestor de alimentos
# Qué desplegar? → 3 (Todo)
```

### Ejemplo 3: Solo GitHub

```powershell
.\desplegar-todo.ps1

# Deja vacío URL de GitHub → Solo hará commit local
```

### Ejemplo 4: Solo Firebase

```powershell
.\desplegar-todo.ps1

# Deja vacío URL de GitHub → Solo despliega en Firebase
```

## 🔧 Solución de Problemas

### Error: "Git no está instalado"

**Solución:**
```powershell
# Descargar Git desde git-scm.com
# O usar Chocolatey:
choco install git
```

### Error: "Firebase CLI no está instalado"

**Solución:**
```powershell
npm install -g firebase-tools
firebase login
```

### Error: "Not authenticated with GitHub"

**Solución:**
1. Ve a GitHub → Settings → Developer settings
2. Personal access tokens → Generate new token
3. Marca "repo" y genera
4. Usa el token como contraseña cuando Git lo pida

### Error: "fatal: not a git repository"

**Solución:** El script lo detecta y pregunta si inicializar. Responde "S"

### Error: "permission denied"

**Solución:**
```powershell
# Verificar permisos de ejecución
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Error: "remote origin already exists"

**Solución:** El script usa el origin existente. Si quieres cambiar:
```powershell
git remote remove origin
git remote add origin NUEVA_URL
```

### Push rechazado

**Solución:**
```powershell
# Si hay cambios remotos:
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## 📊 Verificación Post-Despliegue

### GitHub

1. Ve a tu repositorio en GitHub
2. Verifica que los archivos estén actualizados
3. Revisa el historial de commits

### Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona tu proyecto
3. **Hosting:** Ve a la URL desplegada
4. **Firestore:** Verifica las reglas en Firestore Database → Rules

### URLs

- **Hosting:** https://maikafit-f1756.web.app
- **Firestore:** Firebase Console → Firestore Database

## 🎨 Personalización

### Cambiar URL por defecto

Edita `desplegar-todo.ps1` línea 5:
```powershell
$GITHUB_REPO = "https://github.com/TU_USUARIO/TU_REPO.git"
```

### Agregar pre-commit hooks

Crea `.git/hooks/pre-commit`:
```bash
#!/bin/sh
npm test  # O cualquier validación
```

### Agregar notificaciones

Usa GitHub Actions o Firebase Functions para notificar en Slack/Discord.

## 🚨 Seguridad

**Antes de desplegar, verifica:**
- [ ] `.gitignore` está actualizado
- [ ] No hay archivos sensibles en staging
- [ ] `firebase-config.js` tiene credenciales correctas
- [ ] Firestore Rules están configuradas

**El script NO:**
- ❌ Hace commit automático sin preguntar
- ❌ Despliega sin confirmación
- ❌ Modifica Firestore Rules
- ❌ Elimina datos

## 📈 Automatización Avanzada

### GitHub Actions (CI/CD)

Crea `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install -g firebase-tools
      - run: firebase deploy --only hosting --token ${{ secrets.FIREBASE_TOKEN }}
```

### Programar Despliegues

**Windows Task Scheduler:**
1. Abrir Task Scheduler
2. Crear tarea básica
3. Trigger: Según tu programación
4. Acción: Iniciar programa → `powershell.exe`
5. Argumentos: `-File C:\ruta\desplegar-todo.ps1`

## 📞 Ayuda

**Problemas con el script:**
- Revisa la consola para mensajes de error
- Verifica requisitos previos
- Lee DESPLIEGUE-AUTOMATICO.md

**Documentación adicional:**
- `INSTRUCCIONES-GITHUB.md` - Manual de GitHub
- `SEGURIDAD-GITHUB.md` - Guía de seguridad
- `DESPLIEGUE-FIREBASE.md` - Firebase Hosting

## ✅ Checklist Rápido

Antes de desplegar:
- [ ] Git instalado
- [ ] Firebase CLI instalado
- [ ] Logueado en Firebase
- [ ] Repositorio de GitHub creado
- [ ] URL de GitHub lista
- [ ] Sin errores en el código
- [ ] `.gitignore` configurado

Comandos rápidos:
```powershell
# Ver requisitos
git --version
firebase --version
firebase login:list

# Desplegar
.\desplegar-todo.ps1

# Ver logs
firebase hosting:clone
git log --oneline
```

---

**Versión:** 1.0  
**Última actualización:** 2024  
**Creado por:** Sistema Automático de Despliegue

