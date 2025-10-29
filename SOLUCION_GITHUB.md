# 🔐 Solución: Error de Permisos en GitHub

El error que estás viendo:
```
Permission to CCEPCAHER/Dietas.git denied to TAXEATE
```

Indica que Git está usando las credenciales del usuario "TAXEATE" pero necesitas usar las credenciales de "CCEPCAHER".

## Solución Rápida

### Opción 1: Usar Token de Acceso Personal (Recomendado)

1. **Crear un Token en GitHub:**
   - Ve a: https://github.com/settings/tokens
   - Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
   - Nombre: `Dietas App`
   - Selecciona permisos: ✅ **repo** (todos los permisos)
   - Haz clic en **"Generate token"**
   - ⚠️ **COPIA EL TOKEN INMEDIATAMENTE** (solo se muestra una vez)
   - Guárdalo en un lugar seguro

2. **Configurar Git para usar el Token:**
   
   Ejecuta estos comandos en PowerShell:
   
   ```powershell
   # Configurar usuario (reemplaza con tu email de GitHub)
   git config --global user.name "CCEPCAHER"
   git config --global user.email "tu-email@github.com"
   
   # Limpiar credenciales guardadas
   git credential-manager erase https://github.com
   
   # Intentar push (te pedirá usuario y contraseña)
   git push -u origin main
   ```

3. **Cuando te pida credenciales:**
   - **Username**: `CCEPCAHER`
   - **Password**: Pega el **token** que copiaste (no tu contraseña de GitHub)

### Opción 2: Usar GitHub Desktop (Más Fácil)

Si prefieres una interfaz gráfica:

1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Inicia sesión con tu cuenta **CCEPCAHER**
3. Abre el repositorio desde el menú **File** → **Add Local Repository**
4. Selecciona la carpeta `C:\Users\frank\Desktop\Dietas-main`
5. Haz clic en **"Publish repository"** o **"Push origin"**

### Opción 3: SSH (Avanzado)

Si tienes SSH configurado:

```bash
git remote set-url origin git@github.com:CCEPCAHER/Dietas.git
git push -u origin main
```

## Verificación

Después del push, ve a:
https://github.com/CCEPCAHER/Dietas

Deberías ver todos tus archivos actualizados.

## Si el Repositorio ya tiene Contenido

Si el repositorio en GitHub ya tiene commits, puede haber conflictos. En ese caso:

```bash
# Traer cambios remotos
git pull origin main --allow-unrelated-histories

# Resolver conflictos si los hay
# Luego hacer push
git push -u origin main
```

