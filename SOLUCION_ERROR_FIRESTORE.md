# 🔧 Solución de Error de Firestore

## Problema
Estás viendo errores de conexión de Firestore:
```
WebChannelConnection RPC 'Write' stream transport errored
```

Esto significa que Firestore está intentando escribir datos pero encuentra un error de permisos o configuración.

## Solución Paso a Paso

### 1. Verifica que Firestore esté habilitado

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto **maikafit-f1756**
3. En el menú lateral, ve a **"Firestore Database"**
4. Si dice "No creada", haz clic en **"Crear base de datos"**
5. Selecciona **"Comenzar en modo de prueba"** (para desarrollo)
6. Elige una ubicación (la más cercana)
7. Haz clic en **"Habilitar"**

### 2. Configura las Reglas de Seguridad

Una vez creada la base de datos:

1. Ve a la pestaña **"Reglas"** en Firestore Database
2. Reemplaza las reglas por defecto con estas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Reglas para usuarios
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Reglas para dietas
    match /dietas/{dietaId} {
      allow read, write: if request.auth != null;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Reglas para clientes (NUEVAS - IMPORTANTE)
    match /clientes/{clienteId} {
      allow read, write: if request.auth != null;
      allow create: if request.auth != null && request.resource.data.nutricionistaId == request.auth.uid;
      allow update, delete: if request.auth != null && 
        resource.data.nutricionistaId == request.auth.uid;
    }
  }
}
```

3. Haz clic en **"Publicar"**

### 3. Verifica que Authentication esté habilitado

1. En Firebase Console, ve a **"Authentication"**
2. Verifica que **"Email/Password"** esté habilitado
3. Si no lo está, haz clic en "Comenzar" y habilita "Correo electrónico/Contraseña"

### 4. Verifica la conexión

1. Abre la consola del navegador (F12)
2. Recarga la página
3. Verifica que no haya errores de red o autenticación

### 5. Reglas Temporales para Pruebas (Solo Desarrollo)

Si necesitas probar rápidamente, puedes usar estas reglas temporales (⚠️ SOLO PARA DESARROLLO, NO PARA PRODUCCIÓN):

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

Estas reglas permiten leer y escribir cualquier cosa mientras estés autenticado. **Recuerda cambiarlas antes de poner en producción.**

### 6. Limpiar Cache del Navegador

Si los errores persisten:

1. Presiona **Ctrl + Shift + Delete**
2. Selecciona "Caché" y "Datos de sitios"
3. Haz clic en "Borrar datos"
4. Recarga la página

## Verificación

Después de hacer estos cambios:

1. Recarga la aplicación
2. Inicia sesión
3. Haz clic en "👥 Mis Clientes"
4. Intenta crear un cliente nuevo

Si el error persiste, verifica en la consola del navegador si hay mensajes más específicos.

## Errores Comunes

- **"Permission denied"**: Las reglas de Firestore no permiten la operación
- **"Missing or insufficient permissions"**: Necesitas actualizar las reglas
- **"Network error"**: Problema de conexión a internet o con Firebase

