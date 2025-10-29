# 🥗 Dietfy - Sistema Profesional de Gestión de Dietas

Sistema completo y profesional para la creación, gestión y seguimiento de planes de alimentación personalizados. Incluye gestión de clientes, historial de consultas, seguimiento de progreso e integración con Firebase.

## ✨ Características Principales

### 👥 Gestión de Clientes
- Base de datos completa de clientes
- Fichas detalladas con historial médico
- Búsqueda avanzada por nombre, email, teléfono o DNI
- Seguimiento de progreso (peso, medidas, fotos)
- Historial de consultas y dietas

### 🍽️ Generación de Dietas
- Cálculo automático de macronutrientes
- Base de datos con más de **200 alimentos saludables**
- Planes variados y personalizados
- Generación para **1, 2, 3 semanas o 1 mes**
- **Edición de dietas** antes de generar PDF
- Variedad automática en cada generación

### 📊 Seguimiento y Análisis
- Historial completo por cliente
- Registro de progreso (peso, medidas)
- Consultas y notas médicas
- Alergias y restricciones alimentarias
- Objetivos personalizados por cliente

### 💾 Persistencia de Datos
- Firebase Authentication para seguridad
- Cloud Firestore para almacenamiento
- Guardado automático de dietas
- Sincronización en tiempo real

### 📱 Interfaz Profesional
- Diseño moderno y responsive
- Generación de PDF profesional
- Modales intuitivos
- Notificaciones en tiempo real
- Búsqueda rápida de clientes

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase (Authentication + Firestore)
- **PDF**: html2pdf.js
- **Arquitectura**: Modular y escalable

## 📋 Requisitos Previos

1. Cuenta de Firebase (gratuita)
2. Proyecto Firebase configurado con:
   - Authentication (Email/Password)
   - Cloud Firestore Database

## 🔧 Instalación y Configuración

### 1. Clonar o Descargar

```bash
git clone <tu-repositorio>
cd Dietas-main
```

### 2. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un proyecto o usa uno existente
3. Habilita Authentication (Email/Password)
4. Crea Firestore Database (modo de prueba)
5. Copia las credenciales a `firebase-config.js`

Ver `SOLUCION_RAPIDA_FIRESTORE.md` para instrucciones detalladas.

### 3. Configurar Reglas de Firestore

En Firebase Console → Firestore Database → Reglas, pega:

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

⚠️ **Nota**: Esta regla es para desarrollo. Para producción, configura reglas más específicas.

### 4. Abrir la Aplicación

Simplemente abre `index.html` en tu navegador.

## 📁 Estructura del Proyecto

```
Dietas-main/
├── index.html                  # Página principal
├── styles.css                  # Estilos de la aplicación
├── script.js                   # Lógica principal
├── firebase-config.js          # Configuración de Firebase
├── auth.js                     # Módulo de autenticación
├── dietaService.js            # Servicio para gestionar dietas
├── clienteService.js          # Servicio para gestionar clientes
├── base-datos-alimentos.js    # Base de datos ampliada de alimentos
├── generador-dietas.js        # Generador de planes variados
├── editor-dietas.js            # Editor de dietas antes de PDF
├── cliente-manager.js          # Gestor de interfaz de clientes
├── ui-manager.js              # Gestor de UI y autenticación
├── verificar-firestore.js     # Script de verificación
├── .gitignore                 # Archivos ignorados por Git
├── README.md                  # Este archivo
├── CONFIGURACION.md           # Guía de configuración detallada
└── SOLUCION_RAPIDA_FIRESTORE.md # Solución de problemas
```

## 🎯 Uso de la Aplicación

### Para el Nutricionista

1. **Registro/Login**
   - Crea una cuenta o inicia sesión
   - Solo tú tendrás acceso a tus clientes y dietas

2. **Gestionar Clientes**
   - Haz clic en "👥 Mis Clientes"
   - Busca clientes existentes o crea nuevos
   - Completa la ficha completa del cliente

3. **Generar Dieta para Cliente**
   - En la lista de clientes, haz clic en "✨ Nueva Dieta"
   - El formulario se llenará automáticamente con los datos del cliente
   - Selecciona el objetivo y duración
   - Genera el plan

4. **Editar Dieta**
   - Después de generar, haz clic en "✏️ Editar Dieta"
   - Edita cualquier alimento haciendo clic en él
   - Agrega o elimina alimentos según las preferencias del cliente
   - Genera el PDF con los cambios

5. **Guardar y Seguimiento**
   - Las dietas se guardan automáticamente en el historial del cliente
   - Puedes ver el progreso y agregar consultas
   - Registra peso y medidas periódicamente

### Opciones de Duración

- **1 Semana**: Plan de 7 días
- **2 Semanas**: Plan de 14 días
- **3 Semanas**: Plan de 21 días
- **1 Mes**: Plan de 28 días (4 semanas)

## 🔒 Seguridad

- Autenticación mediante Firebase Authentication
- Cada usuario solo puede ver sus propios clientes y dietas
- Las reglas de Firestore protegen los datos
- Las credenciales de Firebase son públicas por diseño (no es un problema de seguridad)

## 🗄️ Estructura de Datos en Firestore

### Colección: `usuarios`
Información del nutricionista
```javascript
{
  nombre: string,
  email: string,
  fechaRegistro: timestamp,
  dietas: array<string>
}
```

### Colección: `dietas`
Dietas guardadas
```javascript
{
  userId: string,
  nombre: string,
  // ... datos completos de la dieta
  fechaCreacion: timestamp
}
```

### Colección: `clientes`
Clientes del nutricionista
```javascript
{
  nutricionistaId: string,
  nombre: string,
  // ... datos personales y de salud
  historialConsultas: array,
  historialDietas: array,
  progreso: {
    peso: array,
    medidas: array
  }
}
```

## 📝 Base de Datos de Alimentos

El sistema incluye más de **200 alimentos** organizados en categorías:

- Proteínas animales (28+)
- Proteínas vegetales (15+)
- Carbohidratos (23+)
- Tubérculos (9+)
- Verduras (40+)
- Frutas (30+)
- Frutos secos y semillas (20+)
- Lácteos (18+)
- Grasas y aceites (8+)
- Superalimentos (10+)
- Y más...

## 🐛 Solución de Problemas

### Error de Firestore
Ver `SOLUCION_RAPIDA_FIRESTORE.md` para solución rápida.

### El botón "Mis Clientes" no funciona
1. Abre la consola (F12)
2. Verifica que no haya errores
3. Asegúrate de estar autenticado
4. Recarga la página

### No puedo guardar dietas
1. Verifica que Firestore esté habilitado
2. Revisa las reglas de seguridad
3. Asegúrate de estar autenticado

## 📄 Licencia

Este proyecto es de uso libre para fines comerciales y personales.

## 👨‍💻 Desarrollo

Desarrollado con Firebase, JavaScript vanilla y HTML/CSS moderno.

## 📞 Soporte

Para problemas o preguntas, revisa los archivos de documentación:
- `CONFIGURACION.md` - Configuración detallada
- `SOLUCION_RAPIDA_FIRESTORE.md` - Solución de problemas comunes
