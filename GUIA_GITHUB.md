# 🚀 Guía para Subir a GitHub

## Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Configura el repositorio:
   - **Repository name**: `dietfy` o `maikafit-dietas` (el nombre que prefieras)
   - **Description**: "Sistema profesional de gestión de dietas personalizadas"
   - **Visibility**: Elige **Private** (recomendado) o **Public**
   - **NO marques** "Initialize with README" (ya tienes uno)
   - **NO marques** "Add .gitignore" (ya tienes uno)
   - **NO selecciones** ninguna licencia por ahora
4. Haz clic en **"Create repository"**

## Paso 2: Conectar con tu Repositorio Local

Después de crear el repositorio, GitHub te mostrará comandos. Usa estos:

### Opción A: Si NO tienes SSH configurado (más fácil)
```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### Opción B: Si tienes SSH configurado
```bash
git remote add origin git@github.com:TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

**Reemplaza:**
- `TU_USUARIO` con tu nombre de usuario de GitHub
- `TU_REPOSITORIO` con el nombre que le pusiste al repositorio

## Paso 3: Autenticación

La primera vez que hagas push, GitHub te pedirá:
- Usuario de GitHub
- Token de acceso personal (no tu contraseña)

Si necesitas crear un token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Selecciona permisos `repo`
3. Copia el token y úsalo como contraseña cuando Git lo pida

## Comandos Completos (Copia y pega)

```bash
# Ya hecho: git init
# Ya hecho: git add .
# Ya hecho: git commit -m "Initial commit..."

# Ahora conectar con GitHub (reemplaza la URL con la tuya):
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

## Verificación

Después del push, ve a tu repositorio en GitHub y deberías ver todos los archivos.

## Comandos Útiles para el Futuro

```bash
# Ver estado de cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Ver historial
git log
```

## ⚠️ Importante

- **NO subas** archivos con información sensible de clientes
- Las credenciales de Firebase ya están incluidas (están bien, son públicas por diseño)
- Si cambias las credenciales, actualiza `firebase-config.js` también en GitHub

## 📝 Nota sobre el Branch

Este proyecto usa `main` como branch principal (estándar actual de GitHub).

