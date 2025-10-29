# ⚠️ SOLUCIÓN RÁPIDA - Error de Firestore

## El problema que tienes

El error `WebChannelConnection RPC 'Write' stream transport errored` significa que **Firestore está rechazando las operaciones de escritura** por falta de permisos.

## Solución Inmediata (5 minutos)

### Paso 1: Ir a Firebase Console
1. Abre https://console.firebase.google.com/
2. Selecciona tu proyecto: **maikafit-f1756**

### Paso 2: Habilitar Firestore (si no está habilitado)
1. Menú lateral → **Firestore Database**
2. Si dice "No creada" → Clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"**
4. Elige ubicación → **"Habilitar"**

### Paso 3: Configurar Reglas de Seguridad (IMPORTANTE)
1. En Firestore Database, ve a la pestaña **"Reglas"**
2. **BORRA** todo lo que hay
3. **PEGA** esto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

4. Haz clic en **"Publicar"**

⚠️ **NOTA**: Estas reglas permiten acceso completo a usuarios autenticados. Solo para desarrollo.

### Paso 4: Verificar en la App
1. Recarga la página de la aplicación
2. Abre la consola (F12)
3. Deberías ver menos errores

### Paso 5: Probar Crear Cliente
1. Haz clic en "👥 Mis Clientes"
2. Haz clic en "➕ Nuevo Cliente"
3. Rellena el formulario
4. Guarda

Si funciona, ¡listo! Si no, revisa la consola para más detalles.

## Verificación Rápida

En la consola del navegador (F12), ejecuta:
```javascript
verificarFirestore()
```

Esto te dirá exactamente qué está fallando.

## Si el Error Persiste

1. **Verifica Authentication:**
   - Firebase Console → Authentication
   - Asegúrate de que "Email/Password" esté habilitado

2. **Limpia el cache:**
   - Ctrl + Shift + Delete
   - Borra cache y datos de sitios
   - Recarga

3. **Verifica credenciales:**
   - Abre `firebase-config.js`
   - Verifica que todas las credenciales sean correctas

## Reglas Avanzadas (Opcional - Más Seguras)

Si quieres reglas más específicas para producción:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuarios - solo el propio usuario
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Dietas - el creador puede hacer todo
    match /dietas/{dietaId} {
      allow read, write: if request.auth != null;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Clientas - el nutricionista puede hacer todo con sus clientes
    match /clientes/{clienteId} {
      allow read, write: if request.auth != null;
      allow create: if request.auth != null && 
        request.resource.data.nutricionistaId == request.auth.uid;
      allow update, delete: if request.auth != null && 
        resource.data.nutricionistaId == request.auth.uid;
    }
  }
}
```

**Nota**: Para estas reglas avanzadas, necesitarás crear índices en Firestore si usas `orderBy` con `where`.

