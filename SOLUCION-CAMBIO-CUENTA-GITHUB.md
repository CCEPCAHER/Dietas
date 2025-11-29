# 🔐 Solución: Cambiar Cuenta de GitHub

## ❌ Problema Detectado

Estás intentando subir código a `https://github.com/CCEPCAHER/Dietas` pero estás logueado con la cuenta **TAXEATE**.

GitHub ha denegado el acceso porque no tienes permisos para escribir en ese repositorio.

## ✅ Soluciones

### Opción 1: Eliminar Credenciales Guardadas (Más Rápida)

1. **Abrir Administrador de Credenciales:**
   - Presiona `Win + R`
   - Escribe: `control /name Microsoft.CredentialManager`
   - Enter

2. **Buscar credenciales de GitHub:**
   - Ve a "Credenciales de Windows"
   - Busca "github.com"
   - Haz clic en la flecha para expandir

3. **Eliminar credenciales:**
   - Haz clic en "Quitar"
   - Confirma que quieres eliminar

4. **Intentar push nuevamente:**
   ```powershell
   git push -u origin main
   ```

5. **Cuando te pida credenciales:**
   - Username: `CCEPCAHER`
   - Password: Tu **Personal Access Token** (NO tu contraseña normal)

### Opción 2: Usar Personal Access Token

Si la cuenta correcta es `CCEPCAHER`:

1. **Crear Personal Access Token:**
   - Ve a: https://github.com/settings/tokens
   - Clic en "Generate new token (classic)"
   - Nombre: "Dietas App"
   - Marca: `repo` (todos los permisos)
   - Clic en "Generate token"
   - **Copia el token inmediatamente** (no lo volverás a ver)

2. **Usar el token:**
   ```powershell
   # Intentar push nuevamente
   git push -u origin main
   
   # Cuando pida username: CCEPCAHER
   # Cuando pida password: Pega el token
   ```

### Opción 3: Usar GitHub Desktop

1. **Descargar GitHub Desktop:**
   - https://desktop.github.com/

2. **Abrir con GitHub Desktop:**
   - Abre GitHub Desktop
   - Sign in con cuenta `CCEPCAHER`
   - File → Add Local Repository
   - Selecciona tu carpeta: `C:\Users\frank\Desktop\Dietas-main`

3. **Hacer commit y push:**
   - Escribe un mensaje de commit
   - Clic en "Commit to main"
   - Clic en "Push origin"

### Opción 4: Cambiar URL a HTTPS con Token

```powershell
# Configurar URL con token en la URL
git remote set-url origin https://TU_TOKEN@github.com/CCEPCAHER/Dietas.git

# Ahora hacer push (no pedirá credenciales)
git push -u origin main
```

## 🔑 Crear Personal Access Token

### Paso a Paso:

1. **Ve a GitHub:**
   - https://github.com/settings/tokens

2. **Generar token:**
   - Clic en "Generate new token (classic)"
   - Nombre: `Dietas App Local`
   - Expiración: `90 days` (o `No expiration` si es tu máquina personal)

3. **Permisos (scopes):**
   - Marca **`repo`** - esto da acceso completo a repositorios privados
   - O marca solo lo que necesites

4. **Generar:**
   - Scroll down
   - Clic en "Generate token"

5. **Copiar:**
   - GitHub te mostrará el token una sola vez
   - Cópialo inmediatamente
   - Guardalo en un lugar seguro

6. **Usar:**
   - Cuando Git pida password, pega este token (NO tu contraseña)

## 🎯 Verificar Cuenta Actual

Para ver con qué cuenta estás logueado:

### En GitHub.com:
- Ve a cualquier repositorio
- Mira el nombre de usuario en la esquina superior derecha

### En Git:
```powershell
git config --global user.name
git config --global user.email
```

Para cambiar si es necesario:
```powershell
git config --global user.name "CCEPCAHER"
git config --global user.email "tu-email@ejemplo.com"
```

## 🚨 Troubleshooting

### Error: "Permission denied"

**Causa:** Cuenta incorrecta o token expirado

**Solución:**
1. Elimina credenciales guardadas (Opción 1)
2. Usa nuevo Personal Access Token (Opción 2)

### Error: "Authentication failed"

**Causa:** Token inválido o no tienes permisos

**Solución:**
1. Verifica que el token tenga permisos `repo`
2. Verifica que no haya expirado
3. Genera un nuevo token

### Error: "Repository not found"

**Causa:** El repositorio no existe o no tienes acceso

**Solución:**
1. Verifica que el repositorio existe: https://github.com/CCEPCAHER/Dietas
2. Verifica que tengas permisos de escritura
3. Si el repositorio es privado, asegúrate de ser colaborador

### No me recuerda la contraseña

**Solución:** Esto es normal con tokens. Usa GitHub Desktop o configura SSH keys

## 🔐 Seguridad

**NUNCA:**
- ❌ Subas tokens a GitHub
- ❌ Compartas tokens públicamente
- ❌ Uses la contraseña normal (usa tokens)

**SIEMPRE:**
- ✅ Usa Personal Access Tokens
- ✅ Rota tokens periódicamente
- ✅ Usa tokens con mínimo de permisos necesarios
- ✅ Usa SSH keys si es posible

## 📝 Resumen Rápido

**Si ya tienes el token:**

```powershell
# 1. Eliminar credenciales viejas
# (Usar Credential Manager de Windows)

# 2. Intentar push
git push -u origin main

# 3. Cuando pida credenciales:
# Username: CCEPCAHER
# Password: [Pegar token aquí]
```

**Si NO tienes token:**

1. Ve a: https://github.com/settings/tokens/new
2. Genera token con permisos `repo`
3. Copia el token
4. Usa el token como password

---

**Versión:** 1.0  
**Última actualización:** 2024

