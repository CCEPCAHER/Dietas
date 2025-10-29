# 📤 Instrucciones para Subir a GitHub

El repositorio está conectado correctamente. Ahora necesitas autenticarte para hacer push.

## Pasos para Subir

### 1. Crear Token de Acceso Personal

1. Ve a: **https://github.com/settings/tokens**
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Completa:
   - **Note**: `Dietas App - Push Access`
   - **Expiration**: Elige una fecha (o "No expiration")
   - **Select scopes**: ✅ Marca **`repo`** (esto habilitará todos los sub-permisos)
4. Haz clic en **"Generate token"** (abajo de la página)
5. ⚠️ **COPIA EL TOKEN** (empieza con `ghp_...`) - Solo se muestra una vez

### 2. Hacer Push

Ejecuta este comando:

```bash
git push -u origin main
```

### 3. Cuando Pida Credenciales

Cuando aparezca la ventana de autenticación:

- **Username**: `CCEPCAHER`
- **Password**: Pega el **token** que copiaste (NO tu contraseña de GitHub)

### 4. Verificar

Después del push, ve a:
**https://github.com/CCEPCAHER/Dietas**

Deberías ver todos tus archivos nuevos.

## Si Hay Conflictos

Si el repositorio en GitHub ya tiene contenido diferente, ejecuta primero:

```bash
git pull origin main --allow-unrelated-histories
```

Resuelve conflictos si los hay, luego:

```bash
git push -u origin main
```

## Comandos Completos

```bash
# Ya hecho: git init
# Ya hecho: git add .
# Ya hecho: git commit -m "..."
# Ya hecho: git remote add origin https://github.com/CCEPCAHER/Dietas.git

# Ahora solo necesitas hacer:
git push -u origin main
# (Y usar el token cuando te lo pida)
```

