# 📋 Instrucciones para Subir a GitHub

## Opción 1: Crear Nuevo Repositorio en tu Cuenta

### Paso 1: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `Dietas-Profesional` (o el nombre que prefieras)
3. Descripción: "Sistema profesional de generación de dietas personalizadas con Firebase"
4. Selecciona: **Público** o **Privado** (según prefieras)
5. **NO** marques "Initialize this repository with a README"
6. Click en **"Create repository"**

### Paso 2: Cambiar el repositorio remoto
Ejecuta estos comandos en PowerShell (desde la carpeta del proyecto):

```powershell
cd c:\Users\frank\Desktop\Dietas-main

# Eliminar el remoto anterior
git remote remove origin

# Agregar tu nuevo repositorio (reemplaza TAXEATE/Dietas-Profesional con tu URL)
git remote add origin https://github.com/TAXEATE/Dietas-Profesional.git

# Subir los cambios
git push -u origin main
```

---

## Opción 2: Usar el Repositorio Existente (si tienes permisos)

Si CCEPCAHER te dio permisos de colaborador:

```powershell
cd c:\Users\frank\Desktop\Dietas-main

# Configurar credenciales
git config user.name "TAXEATE"
git config user.email "tu-email@gmail.com"

# Intentar push de nuevo
git push origin main
```

---

## Opción 3: Fork del Repositorio Original

1. Ve a https://github.com/CCEPCAHER/Dietas
2. Click en **"Fork"** (arriba a la derecha)
3. Esto creará una copia en tu cuenta

Luego ejecuta:

```powershell
cd c:\Users\frank\Desktop\Dietas-main

# Cambiar al fork
git remote set-url origin https://github.com/TAXEATE/Dietas.git

# Subir cambios
git push origin main
```

---

## 🔐 Autenticación con GitHub

Si te pide usuario y contraseña, GitHub ya no acepta contraseñas. Necesitas usar un **Personal Access Token**:

### Crear Token:
1. Ve a https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. Nombre: "Dietas App"
4. Selecciona: `repo` (todos los permisos de repositorio)
5. Click en **"Generate token"**
6. **COPIA EL TOKEN** (no podrás verlo de nuevo)

### Usar el Token:
Cuando Git te pida contraseña, pega el token en lugar de tu contraseña.

O configura el token permanentemente:

```powershell
git config --global credential.helper wincred
```

---

## 📦 Contenido del Commit Actual

Se han agregado/modificado:
- ✅ Base de datos de alimentos ampliada (+50 alimentos)
- ✅ Sistema de suplementación editable
- ✅ Calculadora de TMB (Tasa Metabólica Basal)
- ✅ Sistema de hidratación personalizado
- ✅ Planes de ejercicio nivel avanzado
- ✅ Diseño responsivo completo
- ✅ PDF optimizado sin espacios excesivos
- ✅ Tooltips y mejoras UI/UX
- ✅ Preferencias dietéticas ampliadas
- ✅ Firebase configuration files

**Total:** 3645 líneas añadidas, 647 eliminadas en 13 archivos

---

## ❓ ¿Necesitas Ayuda?

Si tienes problemas, dime cuál de las 3 opciones prefieres y te ayudo con los comandos específicos.

