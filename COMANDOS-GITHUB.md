# 📤 Comandos Rápidos para Subir a GitHub

## ⚡ Opción 1: Script Automático (Recomendado)

```bash
# Doble clic en este archivo:
push-a-github.bat
```

Sigue las instrucciones en pantalla.

---

## 📋 Opción 2: Manual (Línea de Comandos)

### Si ya tienes un Personal Access Token:

```powershell
# 1. Verificar que estás en la carpeta correcta
cd C:\Users\frank\Desktop\Dietas-main

# 2. Ver estado
git status

# 3. Intentar push
git push -u origin main
```

**Cuando te pida credenciales:**
- **Username:** `CCEPCAHER`
- **Password:** Tu Personal Access Token (NO tu contraseña normal)

### Si NO tienes token todavía:

#### Paso 1: Crear Personal Access Token

1. Ve a: https://github.com/settings/tokens/new
2. Nombre: `Dietas App`
3. Marca: `repo` (Full control of private repositories)
4. Clic en "Generate token"
5. **Copia el token** (empieza con `ghp_`)

#### Paso 2: Hacer Push

```powershell
git push -u origin main
```

- Username: `CCEPCAHER`
- Password: Pega el token que copiaste

---

## 🔐 Solución de Problemas

### Error: "Permission denied"
→ Crea o usa un Personal Access Token

### Error: "Authentication failed"
→ Tu token expiró o fue revocado. Crea uno nuevo

### Error: "Repository not found"
→ Verifica que el repositorio existe: https://github.com/CCEPCAHER/Dietas

---

## 📚 Más Ayuda

Para más detalles:
- Ver `SOLUCION-CAMBIO-CUENTA-GITHUB.md`
- Ver `INSTRUCCIONES-GITHUB.md`

---

## ✅ Verificar Éxito

Después del push exitoso, ve a:
https://github.com/CCEPCAHER/Dietas

Deberías ver todos tus archivos allí.

---

**Versión:** 1.0

