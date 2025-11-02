# 🔧 Configuración Rápida de Firebase

## Pasos para configurar Firebase en 5 minutos

### 1. Crear proyecto en Firebase

1. Ve a https://console.firebase.google.com/
2. Haz clic en "Agregar proyecto"
3. Ingresa un nombre para tu proyecto (ej: "dietas-app")
4. Desactiva Google Analytics (o actívalo si lo deseas)
5. Haz clic en "Crear proyecto"

### 2. Habilitar Authentication

1. En el menú lateral, selecciona "Authentication"
2. Haz clic en "Comenzar"
3. Selecciona la pestaña "Sign-in method"
4. Haz clic en "Correo electrónico/Contraseña"
5. Activa "Habilitar" y haz clic en "Guardar"

### 3. Crear base de datos Firestore

1. En el menú lateral, selecciona "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba" (puedes cambiar las reglas después)
4. Selecciona una ubicación (elige la más cercana a tus usuarios)
5. Haz clic en "Habilitar"

### 4. Obtener credenciales

1. Ve a ⚙️ (Configuración del proyecto) → "Configuración del proyecto"
2. Scroll hacia abajo hasta "Tus aplicaciones"
3. Si no tienes una app web, haz clic en el ícono `</>` (Web)
4. Registra la app con un nombre (ej: "Dietfy Web App")
5. **NO marques** "También configurar Firebase Hosting"
6. Haz clic en "Registrar app"
7. **Copia todas las credenciales** que aparecen en el código

### 5. Configurar en tu proyecto

1. Abre el archivo `firebase-config.js` en tu editor
2. Reemplaza los valores con tus credenciales:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSy...",                    // ← Tu API Key
    authDomain: "tu-proyecto.firebaseapp.com",  // ← Tu Auth Domain
    projectId: "tu-proyecto",              // ← Tu Project ID
    storageBucket: "tu-proyecto.appspot.com",  // ← Tu Storage Bucket
    messagingSenderId: "123456789",         // ← Tu Messaging Sender ID
    appId: "1:123456789:web:abc123"        // ← Tu App ID
};
```

### 6. Configurar reglas de seguridad (Opcional pero recomendado)

En Firebase Console → Firestore Database → Reglas, reemplaza con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /dietas/{dietaId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
  }
}
```

Haz clic en "Publicar".

### 7. ¡Listo!

Ahora abre `index.html` en tu navegador y deberías poder:
- Registrarte con email/contraseña
- Iniciar sesión
- Generar y guardar dietas

## ⚠️ Notas importantes

- El modo de prueba de Firestore es solo para desarrollo
- Para producción, configura las reglas de seguridad adecuadas
- Las credenciales de Firebase son seguras en el frontend
- No compartas tus credenciales públicamente si vas a poner la app en producción

## 🐛 Problemas comunes

**Error: "Firebase: Error (auth/network-request-failed)"**
- Verifica que copiaste bien todas las credenciales
- Asegúrate de tener conexión a internet

**Error: "Firebase: Error (firestore/permission-denied)"**
- Verifica las reglas de Firestore
- Asegúrate de estar autenticado

**El modal de login no aparece**
- Verifica la consola del navegador (F12) para errores
- Asegúrate de que todos los scripts se carguen correctamente

