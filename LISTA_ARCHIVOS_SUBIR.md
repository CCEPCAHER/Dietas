# 📦 Lista de Archivos para Subir a GitHub

## ✅ ARCHIVOS PRINCIPALES (OBLIGATORIOS)

### HTML
- ✅ `index.html` - Página principal

### JavaScript
- ✅ `script.js` - Lógica principal
- ✅ `auth.js` - Autenticación
- ✅ `base-datos-alimentos.js` - Base de datos de alimentos
- ✅ `generador-dietas.js` - Generador de dietas
- ✅ `editor-dietas.js` - Editor de dietas
- ✅ `dietaService.js` - Servicio de dietas
- ✅ `clienteService.js` - Servicio de clientes
- ✅ `cliente-manager.js` - Gestor de clientes
- ✅ `ui-manager.js` - Gestor de UI
- ✅ `planes-ejercicio.js` - ⭐ NUEVO - Planes de ejercicio avanzados
- ✅ `verificar-firestore.js` - Verificación de Firestore

### CSS
- ✅ `styles.css` - Estilos de la aplicación

### Firebase
- ✅ `firebase-config.js` - Configuración de Firebase (es seguro subirlo)
- ✅ `firestore.rules` - ⭐ NUEVO - Reglas de seguridad
- ✅ `firestore.indexes.json` - ⭐ NUEVO - Índices de Firestore
- ✅ `firebase.json` - ⭐ NUEVO - Configuración del proyecto

### Documentación
- ✅ `README.md` - Descripción del proyecto
- ✅ `CONFIGURACION.md` - Guía de configuración
- ✅ `GUIA_GITHUB.md` - Guía de GitHub
- ✅ `SOLUCION_ERROR_FIRESTORE.md` - Solución de errores
- ✅ `SOLUCION_RAPIDA_FIRESTORE.md` - Solución rápida
- ✅ `SOLUCION_GITHUB.md` - Solución GitHub
- ✅ `INSTRUCCIONES_PUSH.md` - Instrucciones de push
- ✅ `INSTRUCCIONES_GITHUB.md` - ⭐ NUEVO - Instrucciones GitHub

---

## ❌ ARCHIVOS QUE NO DEBES SUBIR

### Carpetas de dependencias
- ❌ `node_modules/` - (si existe) - Pesa mucho y se genera automáticamente
- ❌ `.cache/` - Archivos de caché
- ❌ `dist/` o `build/` - Archivos compilados

### Archivos del sistema
- ❌ `.DS_Store` - Archivos de macOS
- ❌ `Thumbs.db` - Archivos de Windows
- ❌ `desktop.ini` - Configuración de Windows

### Archivos personales
- ❌ `.env` - Variables de entorno sensibles (si las usas)
- ❌ `*.log` - Archivos de logs
- ❌ `.vscode/` - Configuración personal de VS Code (opcional)
- ❌ `.idea/` - Configuración de IDEs

### Archivos temporales
- ❌ `*.tmp` - Archivos temporales
- ❌ `*.bak` - Archivos de respaldo
- ❌ `~$*` - Archivos temporales de Office

---

## 📝 RESUMEN RÁPIDO

### Archivos Core (27 archivos):
```
index.html
script.js
auth.js
base-datos-alimentos.js
generador-dietas.js
editor-dietas.js
dietaService.js
clienteService.js
cliente-manager.js
ui-manager.js
planes-ejercicio.js ⭐ NUEVO
verificar-firestore.js
styles.css
firebase-config.js
firestore.rules ⭐ NUEVO
firestore.indexes.json ⭐ NUEVO
firebase.json ⭐ NUEVO
README.md
CONFIGURACION.md
GUIA_GITHUB.md
SOLUCION_ERROR_FIRESTORE.md
SOLUCION_RAPIDA_FIRESTORE.md
SOLUCION_GITHUB.md
INSTRUCCIONES_PUSH.md
INSTRUCCIONES_GITHUB.md ⭐ NUEVO
.gitignore
```

---

## 🎯 ARCHIVOS NUEVOS EN ESTA VERSIÓN

Estos son los archivos que contienen las MEJORAS PROFESIONALES:

1. ⭐ **planes-ejercicio.js** - Sistema completo de ejercicios con 3 niveles
2. ⭐ **firestore.rules** - Reglas de seguridad para Firebase
3. ⭐ **firestore.indexes.json** - Índices para optimizar consultas
4. ⭐ **firebase.json** - Configuración del proyecto Firebase
5. ⭐ **INSTRUCCIONES_GITHUB.md** - Nueva guía de GitHub

### Archivos MODIFICADOS con mejoras:
- ✏️ **script.js** - +700 líneas (TMB, hidratación, suplementación)
- ✏️ **index.html** - Nuevos campos (hidratación, suplementación, nivel avanzado)
- ✏️ **styles.css** - Diseño responsivo completo + nuevos componentes
- ✏️ **base-datos-alimentos.js** - +50 alimentos nuevos
- ✏️ **generador-dietas.js** - Lógica mejorada
- ✏️ **editor-dietas.js** - Editor mejorado
- ✏️ **ui-manager.js** - Mejoras UI

---

## 📤 CÓMO SUBIR MANUALMENTE

### Opción 1: Desde la Web de GitHub
1. Ve a tu repositorio en GitHub
2. Click en "Add file" → "Upload files"
3. Arrastra TODOS los archivos de la lista ✅
4. Escribe un mensaje: "Mejoras profesionales: TMB, hidratación, suplementación, ejercicios avanzados"
5. Click "Commit changes"

### Opción 2: Subir en grupos
Para evitar problemas, sube en 3 grupos:

**Grupo 1 - Core:**
- index.html, styles.css, script.js

**Grupo 2 - JavaScript:**
- auth.js, base-datos-alimentos.js, generador-dietas.js, 
  editor-dietas.js, dietaService.js, clienteService.js,
  cliente-manager.js, ui-manager.js, planes-ejercicio.js,
  verificar-firestore.js

**Grupo 3 - Firebase y Docs:**
- firebase-config.js, firestore.rules, firestore.indexes.json,
  firebase.json, todos los .md, .gitignore

---

## ⚠️ IMPORTANTE

### Firebase Config es SEGURO
El archivo `firebase-config.js` contiene:
```javascript
apiKey: "..." // ✅ ES PÚBLICO Y SEGURO
authDomain: "..." // ✅ ES PÚBLICO Y SEGURO
```

Estos datos son PÚBLICOS por diseño de Firebase. La seguridad está en:
- Las reglas de Firestore (`firestore.rules`)
- Firebase Authentication
- NO en ocultar estos valores

### .gitignore ya está configurado
Si existe `.gitignore`, ya tiene configurado qué NO subir.

---

## 📊 TOTAL DE CAMBIOS

- ✅ 27 archivos para subir
- ⭐ 5 archivos nuevos
- ✏️ 8 archivos modificados con mejoras
- 🚫 0 archivos sensibles (todo es seguro de subir)

---

## 🎉 BENEFICIOS DE ESTAS MEJORAS

Al subir estos archivos, tendrás:
- ✅ Base de datos de +200 alimentos
- ✅ Calculadora de TMB visual
- ✅ Sistema de hidratación personalizado
- ✅ Suplementación editable/opcional
- ✅ 3 niveles de ejercicio (principiante/intermedio/avanzado)
- ✅ Diseño 100% responsivo
- ✅ PDF optimizado sin espacios
- ✅ Tooltips y mejoras UI/UX
- ✅ Preferencias dietéticas ampliadas

