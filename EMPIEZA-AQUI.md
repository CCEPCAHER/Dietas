# 🚀 ¡EMPEZA AQUÍ! - Guía Rápida de Inicio

Bienvenido al sistema de gestión de dietas **MAIKAFIT**. Esta guía te llevará desde cero hasta tener tu aplicación desplegada y funcionando.

## ⚡ Inicio Ultra Rápido (3 pasos)

### 1️⃣ Abrir la Aplicación

**En local (desarrollo):**
- Haz doble clic en `index.html`
- O usa un servidor local:
  ```bash
  # Con Python
  python -m http.server 8000
  
  # Con Node.js
  npx serve .
  ```

**En producción (ya desplegada):**
- Ve a: https://maikafit-f1756.web.app

### 2️⃣ Registrarte

1. Haz clic en "Crear cuenta"
2. Usa tu email y contraseña
3. ¡Listo para usar!

### 3️⃣ Primera Dieta

1. Haz clic en "Generar Nueva Dieta"
2. Completa el formulario
3. Genera tu dieta personalizada

---

## 📋 Guías Completas por Tipo de Usuario

### 👨‍💻 **Soy Desarrollador - Quiero Configurar Todo**

**Orden recomendado:**

1. **Firebase**
   → Lee `CONFIGURACION.md`
   → Configura Firebase Authentication y Firestore

2. **Despliegue**
   → Lee `DESPLIEGUE-AUTOMATICO.md`
   → Usa `desplegar-todo.bat` para subir a GitHub y Firebase

3. **Desarrollo**
   → Lee `README.md` para entender la estructura
   → Explora los archivos `.js` del proyecto

### 🏥 **Soy Nutricionista - Solo Quiero Usar la App**

**Orden recomendado:**

1. **Primeros Pasos**
   → Ve a: https://maikafit-f1756.web.app
   → Regístrate con tu email
   → Explora la interfaz

2. **Gestión de Clientes**
   → Haz clic en "Mis Clientes"
   → Agrega tu primer cliente
   → Ve su ficha completa

3. **Dietas**
   → Genera dietas personalizadas
   → Usa el gestor de alimentos si necesitas agregar productos
   → Exporta dietas en PDF

### 🧑‍🔧 **Soy Administrador - Quiero Personalizar**

**Orden recomendado:**

1. **Base de Datos de Alimentos**
   → Lee `README-ADMIN-ALIMENTOS.md`
   → Abre "Gestor Alimentos" desde el menú
   → Agrega/modifica alimentos

2. **Firebase**
   → Lee `FIREBASE_REGLAS.md`
   → Configura reglas de seguridad en Firebase Console

3. **Despliegue**
   → Lee `DESPLIEGUE-FIREBASE.md`
   → Sigue instrucciones de despliegue

---

## 🎯 Características Principales

### ✅ Lo que puedes hacer

**Clientes:**
- ✅ Crear y gestionar clientes
- ✅ Ver ficha completa
- ✅ Registrar medidas corporales
- ✅ Seguimiento de progreso
- ✅ Historial de consultas
- ✅ Alergias y patologías

**Dietas:**
- ✅ Generar dietas personalizadas
- ✅ Editar antes de exportar
- ✅ Exportar a PDF
- ✅ Varias semanas (1, 2, 3 o mes)
- ✅ Objetivos personalizados

**Alimentos:**
- ✅ Base de 200+ alimentos
- ✅ Agregar nuevos alimentos
- ✅ Editar existentes
- ✅ Sincronización automática

**App:**
- ✅ PWA instalable
- ✅ Funciona offline
- ✅ Diseño responsive
- ✅ Sincronización en la nube

---

## 📚 Documentación Disponible

| Archivo | Para Quién | Descripción |
|---------|-----------|-------------|
| **README.md** | Todos | Documentación general del proyecto |
| **EMPIEZA-AQUI.md** | Nuevos usuarios | Esta guía de inicio rápido |
| **CONFIGURACION.md** | Desarrolladores | Configurar Firebase paso a paso |
| **DESPLIEGUE-AUTOMATICO.md** | Desarrolladores | Despliegue automático a GitHub y Firebase |
| **SEGURIDAD-GITHUB.md** | Desarrolladores | Seguridad al subir código |
| **INSTRUCCIONES-GITHUB.md** | Desarrolladores | Cómo usar Git y GitHub |
| **DESPLIEGUE-FIREBASE.md** | Desarrolladores | Desplegar en Firebase Hosting |
| **FIREBASE_REGLAS.md** | Administradores | Reglas de seguridad de Firestore |
| **README-ADMIN-ALIMENTOS.md** | Administradores | Gestión de base de datos de alimentos |
| **SUBIR-BASE-DATOS-FIRESTORE.md** | Administradores | Sincronizar alimentos con Firebase |
| **PWA_INSTALL.md** | Todos | Instalar como app nativa |
| **MEJORAS-ESCALABILIDAD.md** | Desarrolladores | Mejoras futuras sugeridas |

---

## 🔧 Requisitos Técnicos

### Para Usar la App:
- ✅ Navegador moderno (Chrome, Firefox, Edge, Safari)
- ✅ Conexión a internet (para registrarse)

### Para Desarrollo:
- ✅ Git (para versionado)
- ✅ Firebase CLI (para despliegue)
- ✅ Editor de código (VS Code recomendado)

---

## 🚨 Problemas Comunes

### "No puedo registrarme"
**Solución:** Verifica que Firebase Authentication esté habilitado en Firebase Console

### "No se guardan los datos"
**Solución:** Verifica Firestore Rules en Firebase Console → Firestore → Rules

### "No aparece la app al instalar"
**Solución:** Lee `PWA_INSTALL.md` para instrucciones de instalación

### "No puedo subir a GitHub"
**Solución:** Lee `INSTRUCCIONES-GITHUB.md` y configura autenticación

---

## 🎓 Tutoriales Rápidos

### 1. Agregar un Cliente

```
1. Haz clic en "Mis Clientes"
2. Clic en "➕ Nuevo Cliente"
3. Completa el formulario
4. Guarda
5. ¡Listo! Ya tienes tu cliente
```

### 2. Generar una Dieta

```
1. Haz clic en "Generar Nueva Dieta"
2. Completa datos personales
3. Selecciona objetivo (aumentar/perder/mantener)
4. Agrega restricciones si las hay
5. Selecciona duración
6. Genera
7. Edita si necesitas
8. Exporta a PDF
```

### 3. Agregar un Alimento

```
1. Haz clic en "🍎 Gestor Alimentos"
2. Clic en "➕ Agregar Alimento"
3. Completa información nutricional
4. Guarda
5. Se sincroniza automáticamente con Firebase
```

### 4. Ver Progreso de un Cliente

```
1. "Mis Clientes" → Selecciona cliente
2. Ve a "📊 Progreso"
3. Agrega registro de peso/medidas
4. Ver evolución en el tiempo
```

---

## 🔗 Enlaces Útiles

- **App en Producción:** https://maikafit-f1756.web.app
- **Firebase Console:** https://console.firebase.google.com/project/maikafit-f1756
- **Documentación Firebase:** https://firebase.google.com/docs
- **GitHub (si está configurado):** Tu repositorio

---

## ✅ Checklist de Primeros Pasos

### Como Nutricionista:
- [ ] Abrir la app
- [ ] Registrarse
- [ ] Crear primer cliente
- [ ] Generar primera dieta
- [ ] Probar exportar PDF
- [ ] Explorar gestor de alimentos

### Como Desarrollador:
- [ ] Leer `README.md`
- [ ] Configurar Firebase (`CONFIGURACION.md`)
- [ ] Probar localmente
- [ ] Configurar Git (`INSTRUCCIONES-GITHUB.md`)
- [ ] Usar despliegue automático (`desplegar-todo.bat`)
- [ ] Configurar Firestore Rules (`FIREBASE_REGLAS.md`)

---

## 🆘 Necesitas Ayuda?

1. **Busca en la documentación** (archivos `.md`)
2. **Revisa la consola del navegador** (F12)
3. **Verifica Firebase Console** para errores
4. **Consulta guías específicas** según tu necesidad

---

## 🎉 ¡Ya Estás Listo!

Ahora que tienes la base, puedes:
- Explorar todas las funciones
- Personalizar la base de datos de alimentos
- Configurar despliegue automático
- Usar la app en producción

**¡Disfruta tu sistema de gestión de dietas profesional!** 🥗💪

---

**Versión:** 1.0  
**Creado:** 2024  
**Para más detalles, consulta la documentación específica en cada archivo `.md`**

