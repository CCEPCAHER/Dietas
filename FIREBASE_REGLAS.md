# 🔒 Reglas de Seguridad de Firestore

## ✅ Estado Actual

Las reglas de Firestore están correctamente configuradas en el archivo `firestore.rules`. Sin embargo, **debes desplegarlas** en Firebase para que tengan efecto.

## 📋 Colecciones Configuradas

### 1. **usuarios** (`/usuarios/{userId}`)
- ✅ **Lectura**: Solo el propio usuario puede leer sus datos
- ✅ **Escritura**: Solo el propio usuario puede escribir sus datos
- 🔑 Requiere: `request.auth.uid == userId`

### 2. **clientes** (`/clientes/{clienteId}`)
- ✅ **Lectura**: Solo el nutricionista propietario puede leer
- ✅ **Creación**: Cualquier usuario autenticado puede crear (debe incluir su UID)
- ✅ **Actualización**: Solo el nutricionista propietario
- ✅ **Eliminación**: Solo el nutricionista propietario
- 🔑 Requiere: `nutricionistaId` en el documento debe coincidir con `request.auth.uid`

### 3. **dietas** (`/dietas/{dietaId}`)
- ✅ **Lectura**: Solo el usuario propietario puede leer
- ✅ **Creación**: Cualquier usuario autenticado puede crear (debe incluir su UID)
- ✅ **Actualización**: Solo el usuario propietario
- ✅ **Eliminación**: Solo el usuario propietario
- 🔑 Requiere: `userId` en el documento debe coincidir con `request.auth.uid`

## 🚀 Cómo Desplegar las Reglas

### Opción 1: Firebase Console (Manual)

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a **Firestore Database** → **Reglas**
4. Copia el contenido completo del archivo `firestore.rules`
5. Pégalo en el editor de reglas
6. Haz clic en **Publicar**

### Opción 2: Firebase CLI (Recomendado)

```bash
# Instalar Firebase CLI si no lo tienes
npm install -g firebase-tools

# Iniciar sesión
firebase login

# Inicializar el proyecto (solo la primera vez)
firebase init firestore
# Selecciona tu proyecto existente
# Usa 'firestore.rules' como archivo de reglas
# Usa 'firestore.indexes.json' como archivo de índices

# Desplegar las reglas
firebase deploy --only firestore:rules
```

## 🔍 Verificar el Despliegue

Después de desplegar las reglas:

1. Recarga tu aplicación web
2. Inicia sesión con tu cuenta
3. Abre la Consola del navegador (F12)
4. Ejecuta: `verificarFirestore()`
5. Deberías ver: `✅ Conexión a Firestore funciona correctamente`

## 🐛 Solución de Problemas

### Error: "Missing or insufficient permissions"

**Causa**: Las reglas no están desplegadas o están incorrectas.

**Solución**:
1. Verifica que las reglas en Firebase Console coincidan con `firestore.rules`
2. Asegúrate de haber hecho clic en "Publicar"
3. Recarga completamente la aplicación (Ctrl + F5)

### Error: "nutricionistaId is not defined"

**Causa**: Estás intentando crear un cliente sin incluir el campo `nutricionistaId`.

**Solución**: El servicio `ClienteService` ya maneja esto automáticamente. Verifica que estés usando el método `crearCliente()` correctamente.

### Reglas No Se Aplican

**Causa**: Las reglas en Firebase Console no coinciden con el archivo local.

**Solución**: 
```bash
# Desplegar forzosamente
firebase deploy --only firestore:rules --force
```

## 📝 Reglas Completas (firestore.rules)

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Reglas para usuarios - Solo pueden leer/escribir sus propios datos
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Reglas para clientes - Solo pueden leer/escribir sus propios clientes
    match /clientes/{clienteId} {
      allow read: if request.auth != null && 
        request.auth.uid == resource.data.nutricionistaId;
      
      allow create: if request.auth != null && 
        request.resource.data.nutricionistaId == request.auth.uid;
      
      allow update: if request.auth != null && 
        request.auth.uid == resource.data.nutricionistaId;
      
      allow delete: if request.auth != null && 
        request.auth.uid == resource.data.nutricionistaId;
    }
    
    // Reglas para dietas - Solo pueden leer/escribir sus propias dietas
    match /dietas/{dietaId} {
      allow read: if request.auth != null && 
        request.auth.uid == resource.data.userId;
      
      allow create: if request.auth != null && 
        request.resource.data.userId == request.auth.uid;
      
      allow update: if request.auth != null && 
        request.auth.uid == resource.data.userId;
      
      allow delete: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

## ⚙️ Índices de Firestore

Si recibes errores sobre índices faltantes, Firebase te proporcionará un enlace directo para crearlos. También puedes revisar el archivo `firestore.indexes.json` para ver los índices definidos.

## 🔐 Buenas Prácticas

1. ✅ **Nunca uses reglas abiertas en producción**:
   ```javascript
   // ❌ MAL - Permite acceso a todos
   allow read, write: if true;
   
   // ✅ BIEN - Requiere autenticación y validación
   allow read, write: if request.auth != null && [condiciones];
   ```

2. ✅ **Siempre valida la propiedad de los datos**:
   - Usa campos como `nutricionistaId` o `userId` para verificar propiedad
   - Compara con `request.auth.uid`

3. ✅ **Prueba las reglas antes de desplegar**:
   - Usa el simulador de reglas en Firebase Console
   - Prueba diferentes escenarios de acceso

4. ✅ **Mantén sincronizados los archivos locales y remotos**:
   - Usa Firebase CLI para mantener un control de versiones
   - Documenta todos los cambios en las reglas

## 📚 Recursos Adicionales

- [Documentación oficial de Reglas de Seguridad](https://firebase.google.com/docs/firestore/security/get-started)
- [Guía de Firebase CLI](https://firebase.google.com/docs/cli)
- [Simulador de Reglas de Seguridad](https://firebase.google.com/docs/firestore/security/test-rules-emulator)

