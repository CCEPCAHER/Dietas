# 📦 Cómo Subir la Base de Datos de Alimentos a Firebase

## ✅ Método Automático (RECOMENDADO)

La aplicación ya está configurada para subir automáticamente la base de datos de alimentos a Firebase Firestore.

### Pasos:

1. **Desplegar las nuevas reglas de Firestore:**
   ```powershell
   firebase deploy --only firestore:rules
   ```

2. **Abrir la aplicación en el navegador:**
   - Si ya está desplegada: Abre `https://maikafit-f1756.web.app`
   - Si estás en local: Abre `http://localhost:5000` (después de ejecutar `firebase serve`)

3. **Iniciar sesión:**
   - Usa tu cuenta de Google o email/password

4. **Abrir el Gestor de Alimentos:**
   - Haz clic en el botón **"🍎 Gestor Alimentos"** en el menú superior

5. **¡Listo! La base de datos se subirá automáticamente:**
   - La primera vez que abras el Gestor, la app intentará cargar desde Firestore
   - Si no hay datos en Firestore, cargará desde `base-datos-alimentos.js`
   - Automáticamente guardará todos los alimentos en Firestore

### Verificar que funcionó:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a **Firestore Database**
4. Deberías ver una colección llamada **"alimentos"**
5. Dentro debería haber un documento **"base-datos"**
6. Ese documento contendrá un array **"alimentos"** con todos tus productos

## 🔍 Verificación en Consola

Abre la consola del navegador (F12) y deberías ver mensajes como:

```
✅ Base de datos de alimentos recargada en alimentosDB
📦 Base de datos cargada desde base-datos-alimentos.js
💾 Base de datos guardada en Firestore
```

## 🔄 Sincronización Automática

Una vez subida, la base de datos se sincronizará automáticamente:

- **Al agregar** un nuevo alimento → Se guarda en Firestore
- **Al editar** un alimento → Se actualiza en Firestore  
- **Al eliminar** un alimento → Se elimina en Firestore

## 🛠️ Método Manual (Herramienta Web)

Si el método automático no funciona, usa la herramienta web incluida:

### Pasos:

1. **Abrir la herramienta:**
   - Abre `subir-base-datos.html` en tu navegador
   - O si ya estás en localhost: `http://localhost:5000/subir-base-datos.html`
   - O si está desplegada: `https://maikafit-f1756.web.app/subir-base-datos.html`

2. **Verificar que cargó:**
   - Deberías ver "Total Alimentos: XXX" (donde XXX es el número de alimentos en tu base)
   
3. **Hacer clic en "📤 Subir a Firebase":**
   - La herramienta te autenticará automáticamente
   - Verás un mensaje de "Subiendo X alimentos a Firebase..."
   - Cuando termine, verás "✅ ¡Base de datos subida correctamente!"

4. **Verificar:**
   - Haz clic en "🔍 Verificar Estado" para confirmar
   - O ve a Firebase Console → Firestore → Colección "alimentos"

### Opciones Adicionales:

- **Verificar Estado:** Comprueba si ya existe la base de datos en Firebase
- **Limpiar localStorage:** Elimina las personalizaciones locales y recarga datos originales

---

### Método Manual Alternativo (Script JavaScript)

Si prefieres usar un script personalizado:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Subir Base de Datos</title>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"></script>
    <script src="firebase-config.js"></script>
</head>
<body>
    <h1>Subir Base de Datos a Firestore</h1>
    <button onclick="subirBD()">Subir Base de Datos</button>
    <div id="resultado"></div>

    <script src="base-datos-alimentos.js"></script>
    <script>
        async function subirBD() {
            try {
                // Iniciar sesión como administrador
                await firebase.auth().signInWithEmailAndPassword('tu-email@ejemplo.com', 'tu-password');
                
                const db = firebase.firestore();
                const baseDatos = window.baseDatosAlimentos;
                
                await db.collection('alimentos').doc('base-datos').set({
                    alimentos: baseDatos,
                    fechaActualizacion: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                document.getElementById('resultado').innerHTML = 
                    '✅ Base de datos subida correctamente! Total: ' + baseDatos.length + ' alimentos';
            } catch (error) {
                document.getElementById('resultado').innerHTML = 
                    '❌ Error: ' + error.message;
            }
        }
    </script>
</body>
</html>
```

## 📊 Estructura en Firestore

La base de datos se guarda así:

```
alimentos (collection)
  └─ base-datos (document)
      ├─ alimentos (array)
      │   ├─ { ALIMENTO: "...", PROTEÍNAS: ..., GRASAS: ..., etc. }
      │   ├─ { ALIMENTO: "...", PROTEÍNAS: ..., GRASAS: ..., etc. }
      │   └─ ... (más alimentos)
      └─ fechaActualizacion (timestamp)
```

## 🔐 Reglas de Seguridad

Las reglas en `firestore.rules` permiten que cualquier usuario autenticado pueda leer y escribir:

```
match /alimentos/{alimentoId} {
  allow read, write: if request.auth != null;
}
```

Esto significa que:
- ✅ Solo usuarios autenticados pueden acceder
- ✅ Todos los usuarios pueden leer la base de datos
- ✅ Todos los usuarios pueden agregar/editar/eliminar alimentos

## 🚨 Troubleshooting

### Error: "Usuario no autenticado"

**Solución:** Asegúrate de iniciar sesión antes de abrir el Gestor de Alimentos

### Error: "Firebase: Error (permission-denied)"

**Solución:** Despliega las reglas de Firestore:
```powershell
firebase deploy --only firestore:rules
```

### Los datos no se suben

**Solución:** 
1. Abre la consola del navegador (F12)
2. Busca errores en la pestaña "Console"
3. Verifica que `base-datos-alimentos.js` se cargue correctamente
4. Verifica que `window.baseDatosAlimentos` contenga datos

### No veo la colección en Firestore

**Solución:**
1. Espera unos segundos (puede tardar en sincronizar)
2. Recarga la página de Firestore Console
3. Verifica que tengas permisos de lectura en Firestore

## 🎯 Resultado Final

Una vez completado, tendrás:

- ✅ Base de datos completa en Firebase Firestore
- ✅ Sincronización automática de cambios
- ✅ Datos accesibles desde cualquier dispositivo
- ✅ Backup automático en la nube
- ✅ Posibilidad de compartir con otros usuarios

## 📝 Notas Importantes

1. **Primera carga:** La primera vez puede tardar más porque debe subir todos los alimentos
2. **Offline:** Los cambios se guardan localmente primero (localStorage), luego en Firestore
3. **Optimización:** Los alimentos se cargan de Firestore primero para tener siempre los más actualizados
4. **Escalabilidad:** Firestore puede manejar millones de documentos sin problemas

---

**Versión:** 1.0  
**Última actualización:** 2024

