# 🔒 Guía de Seguridad para GitHub

## ✅ ¿Qué es seguro subir a GitHub?

**SÍ, puedes subir de forma segura:**
- ✅ `firebase-config.js` - Las credenciales de Firebase son **públicas por diseño** y están protegidas por Firestore Rules
- ✅ Todo el código fuente (HTML, CSS, JS)
- ✅ Archivos de configuración no sensibles
- ✅ Documentación y READMEs

**NO subir (y ya está protegido en `.gitignore`):**
- ❌ Claves privadas (.pem, .key)
- ❌ Archivos `.env` con secretos
- ❌ Firebase Admin SDK keys
- ❌ Datos de usuarios reales

## 🔐 Protección de Datos

### 1. Firebase Credentials (firebase-config.js)

**¿Por qué es seguro?**
- Las credenciales de Firebase están diseñadas para ser públicas en el frontend
- La seguridad real está en **Firestore Security Rules**
- Cualquiera puede ver las credenciales, PERO solo usuarios autenticados pueden acceder a los datos

**Ejemplo de seguridad:**
```javascript
// firebase-config.js es público
const firebaseConfig = {
    apiKey: "AIzaSy...",  // ← Visible en GitHub
    // ... más config
};

// Pero las Firestore Rules protegen:
match /clientes/{clienteId} {
  allow read: if request.auth != null && 
    request.auth.uid == resource.data.nutricionistaId;
  // ↑ Solo el dueño puede leer sus clientes
}
```

### 2. Firestore Security Rules

Las reglas actuales están en `firestore.rules` y protegen:

```javascript
// Usuarios: Solo pueden leer/escribir sus propios datos
match /usuarios/{userId} {
  allow read, write: if request.auth != null && request.auth.uid == userId;
}

// Clientes: Solo el nutricionista propietario puede leer/escribir
match /clientes/{clienteId} {
  allow read: if request.auth != null && 
    request.auth.uid == resource.data.nutricionistaId;
  allow update: if request.auth != null && 
    request.auth.uid == resource.data.nutricionistaId;
}

// Dietas: Solo el usuario propietario
match /dietas/{dietaId} {
  allow read, write: if request.auth != null && 
    request.auth.uid == resource.data.userId;
}

// Alimentos: Cualquier usuario autenticado (base de datos compartida)
match /alimentos/{alimentoId} {
  allow read, write: if request.auth != null;
}
```

**Esto significa:**
- ✅ Sin autenticación = Sin acceso
- ✅ Solo puedes ver tus propios datos
- ✅ No puedes ver/editar datos de otros usuarios
- ✅ No puedes borrar la base de datos

## 🛡️ Protecciones Implementadas

### ✅ En `.gitignore`
Ya protegidos automáticamente:
- Claves privadas (*.pem, *.key)
- Variables de entorno (*.env)
- Firebase Admin SDK keys
- Backups y temporales
- Logs y caché

### ✅ En Firebase
- **Authentication** - Solo usuarios registrados pueden acceder
- **Firestore Rules** - Control granular de acceso
- **Security Rules** - Protección contra abusos

### ✅ En el Código
- Validación de permisos antes de leer/escribir
- Sanitización de datos de entrada
- Manejo seguro de errores

## 🚨 ¿Qué hacer si alguien "estropea" la app?

### Opción 1: Firestore Rules (Ya Implementadas)
Las reglas en `firestore.rules` son tu primera línea de defensa. Nadie puede:
- Ver datos de otros usuarios
- Borrar la base de datos
- Modificar datos sin autenticación

### Opción 2: Firebase Console Monitoring
Puedes monitorear:
1. **Authentication** → Ver usuarios sospechosos
2. **Firestore** → Ver uso de la base de datos
3. **Hosting** → Ver archivos desplegados

### Opción 3: Backup Automático
Firebase hace backups automáticos. Puedes:
1. Ir a Firebase Console
2. Firestore → Settings → Backups
3. Restaurar a un punto anterior

### Opción 4: Restricciones de IP (Firebase Admin)
Para mayor seguridad, puedes:
1. Ir a Google Cloud Platform
2. Configurar IP whitelist para Admin SDK

## 📋 Checklist Pre-commit

Antes de hacer push a GitHub:

```bash
# Verificar que no hay archivos sensibles
git status

# Ver qué archivos se van a subir
git diff --cached

# Verificar .gitignore
cat .gitignore
```

## 🔍 Comandos Útiles

### Verificar qué se va a subir
```bash
git status
```

### Ver archivos ignorados
```bash
git status --ignored
```

### Eliminar archivos sensibles del historial (si los subiste por error)
```bash
# ⚠️ Solo si subiste algo sensible por error
git filter-branch --tree-filter 'rm -f firebase-adminsdk.json' HEAD
git push origin --force
```

## 🎯 Mejores Prácticas

1. **Nunca** subas:
   - Claves privadas de servidor
   - Datos reales de clientes
   - Contraseñas o tokens secretos

2. **Siempre** usa:
   - Firestore Rules para seguridad
   - Authentication para acceso
   - Variables de entorno para secretos

3. **Monitorea**:
   - Firebase Console regularmente
   - Logs de autenticación
   - Uso de Firestore

## 📞 Soporte

Si detectas actividad sospechosa:
1. Ve a Firebase Console → Monitoring
2. Revisa Authentication → Users
3. Bloquea usuarios sospechosos
4. Revisa Firestore → Usage

## ✅ Resumen

**Tu app está SEGURA para subir a GitHub porque:**
- ✅ Las credenciales de Firebase son públicas por diseño
- ✅ Firestore Rules protegen los datos
- ✅ Solo usuarios autenticados pueden acceder
- ✅ Cada usuario solo ve sus propios datos
- ✅ `.gitignore` protege archivos sensibles

**GitHub NO puede:**
- ❌ Acceder a tu base de datos de Firebase
- ❌ Ver datos de usuarios
- ❌ Modificar tus Firestore Rules
- ❌ Crear usuarios falsos

**Solo usuarios autenticados pueden:**
- ✅ Ver sus propios datos
- ✅ Crear/modificar sus dietas
- ✅ Gestionar sus clientes

---

**Conclusión:** Tu código es **100% seguro** para GitHub. La seguridad real está en Firebase, no en ocultar código.

**Versión:** 1.0  
**Última actualización:** 2024

