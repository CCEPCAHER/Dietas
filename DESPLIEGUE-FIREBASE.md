# 🚀 Guía de Despliegue en Firebase Hosting

Esta guía te ayudará a desplegar tu aplicación en Firebase Hosting de forma profesional.

## 📋 Requisitos Previos

1. ✅ Firebase ya configurado (`firebase-config.js` está completo)
2. ✅ Authentication habilitado
3. ✅ Firestore configurado
4. ✅ Node.js instalado (para Firebase CLI)

## 🔧 Paso 1: Instalar Firebase CLI

### Windows (PowerShell)

```powershell
npm install -g firebase-tools
```

### Verificar instalación

```powershell
firebase --version
```

### Iniciar sesión en Firebase

```powershell
firebase login
```

Se abrirá el navegador. Inicia sesión con tu cuenta de Google vinculada a Firebase.

## 🎯 Paso 2: Inicializar Firebase Hosting (solo la primera vez)

Si ya tienes Firebase configurado en tu proyecto:

```powershell
cd C:\Users\frank\Desktop\Dietas-main
firebase init hosting
```

### Configuración recomendada:

```
? What do you want to use as your public directory? .
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File ./index.html already exists. Overwrite? No
```

**IMPORTANTE:** El archivo `firebase.json` ya está configurado, así que las opciones se ajustarán automáticamente.

## 📤 Paso 3: Desplegar a Firebase

### Compilar para producción

Antes de desplegar, verifica que todo funcione localmente:

```powershell
firebase serve
```

Esto iniciará un servidor local en `http://localhost:5000`. Abre la URL en tu navegador y verifica que todo funcione correctamente.

### Desplegar a producción

Cuando todo esté listo:

```powershell
firebase deploy --only hosting
```

Para desplegar todo (hosting + reglas de Firestore):

```powershell
firebase deploy
```

### ⏱️ Tiempo estimado

El despliegue toma aproximadamente 1-2 minutos.

## ✅ Paso 4: Verificar el despliegue

Después del despliegue, Firebase te dará URLs:

✅ **URL Principal:**
```
https://maikafit-f1756.web.app
```

✅ **URL Alternativa:**
```
https://maikafit-f1756.firebaseapp.com
```

Ambas URLs apuntan a la misma aplicación.

### Pruebas recomendadas:

1. ✅ Abrir la URL en navegador
2. ✅ Probar login/registro
3. ✅ Crear un cliente de prueba
4. ✅ Generar una dieta
5. ✅ Verificar que los datos persistan
6. ✅ Probar en móvil

## 🔄 Actualizaciones Futuras

Para actualizar la app desplegada:

```powershell
firebase deploy --only hosting
```

## 🛠️ Comandos Útiles

### Ver reglas desplegadas

```powershell
firebase firestore:rules get
```

### Ver historial de despliegues

```powershell
firebase hosting:channel:list
```

### Crear canal de preview (testing)

```powershell
firebase hosting:channel:deploy preview
```

### Abrir la app desplegada

```powershell
firebase open
```

## 🔐 Configuración de Dominio Personalizado (Opcional)

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a **Hosting** → **Agregar dominio personalizado**
4. Sigue las instrucciones de verificación

## ⚙️ Configuración Actual del Hosting

El archivo `firebase.json` está configurado con:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "*.md",
      "generar_iconos.py",
      "admin-alimentos.html"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{"key": "Cache-Control", "value": "max-age=31536000"}]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [{"key": "Cache-Control", "value": "max-age=31536000"}]
      }
    ]
  }
}
```

### Características incluidas:

- ✅ **SPA Routing**: Todas las URLs redirigen a `index.html`
- ✅ **Cache Optimization**: JS, CSS e imágenes con caché de 1 año
- ✅ **Archivos ignorados**: Solo despliega lo necesario
- ✅ **Performance**: Carga rápida y eficiente

## 📱 PWA en Producción

Una vez desplegada, tu PWA estará 100% funcional:

- ✅ Instalable desde el navegador
- ✅ Icono personalizado
- ✅ Work offline (con Service Worker)
- ✅ Actualizaciones automáticas

## 🎯 Checklist Pre-Despliegue

Antes de desplegar, verifica:

- [x] `firebase-config.js` tiene las credenciales correctas
- [x] `firebase.json` configurado
- [x] `manifest.json` con los iconos correctos
- [x] `sw.js` presente y funcional
- [x] Iconos PWA generados
- [x] Firestore reglas configuradas
- [x] Authentication habilitado
- [x] Probar localmente con `firebase serve`

## 🚨 Troubleshooting

### Error: "Firebase CLI not found"

**Solución:**
```powershell
npm install -g firebase-tools
```

### Error: "Not logged in"

**Solución:**
```powershell
firebase login
```

### Error: "Project not found"

**Solución:**
Verifica que tu usuario tenga acceso al proyecto en Firebase Console.

### Error: "Permission denied"

**Solución:**
```powershell
firebase logout
firebase login
```

### La app no carga

**Verificar:**
1. Consola del navegador (F12) - errores de carga
2. Firebase Console → Hosting → Ver archivos desplegados
3. Verificar que `index.html` esté en la raíz

### Los datos no persisten

**Verificar:**
1. Firestore reglas publicadas correctamente
2. Authentication habilitado
3. Usuario logueado
4. Consola de Firestore en Firebase Console

## 📊 Monitoreo Post-Despliegue

### Firebase Console

- **Hosting**: Ver estadísticas de uso
- **Firestore**: Monitorear lecturas/escrituras
- **Authentication**: Ver usuarios registrados
- **Performance**: Analizar rendimiento

### Analytics (Opcional)

Habilitar Google Analytics en Firebase Console para:
- Usuarios activos
- Eventos personalizados
- Conversiones
- Rendimiento

## 🔄 Actualizaciones Automáticas (GitHub Actions)

Para automatizar despliegues, crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install -g firebase-tools
      - run: firebase deploy --only hosting --token ${{ secrets.FIREBASE_TOKEN }}
```

## 💰 Costos de Firebase Hosting

### Plan Gratis (Spark)
- ✅ 10 GB de almacenamiento
- ✅ 360 MB/día transferencia
- ✅ Dominio personalizado
- ✅ SSL automático

**Perfecto para:**
- Apps pequeñas-medianas
- Menos de 1M visitas/mes
- Desarrollo y testing

### Plan Pago (Blaze)
- ✅ Pagas por uso
- ✅ Sin límites de almacenamiento
- ✅ Sin límites de transferencia
- ✅ Todo del plan gratis + más

**Necesitas el plan pago si:**
- Más de 1M visitas/mes
- Necesitas más de 10GB
- Servidor privado (Cloud Functions)

## 🎉 ¡Listo para Producción!

Después de seguir esta guía, tu aplicación estará:

- ✅ **En línea** y accesible desde cualquier dispositivo
- ✅ **Segura** con Firebase Authentication
- ✅ **Escalable** con Firestore
- ✅ **Rápida** con Firebase Hosting CDN
- ✅ **Instalable** como PWA
- ✅ **Profesional** con SSL automático

---

**Versión:** 1.0  
**Última actualización:** 2024

