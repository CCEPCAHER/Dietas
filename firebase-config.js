// Configuración de Firebase
// Credenciales del proyecto maikafit-f1756
const firebaseConfig = {
    apiKey: "AIzaSyC6aUAI3BDDzbh4Rpue0Ivk3aVEmzka4DA",
    authDomain: "maikafit-f1756.firebaseapp.com",
    projectId: "maikafit-f1756",
    storageBucket: "maikafit-f1756.firebasestorage.app",
    messagingSenderId: "1031092798780",
    appId: "1:1031092798780:web:9433277776852f39748a39",
    measurementId: "G-KH49X3N92T"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencias a los servicios
const auth = firebase.auth();
const db = firebase.firestore();

// Configurar persistencia de sesión (LOCAL = persistir incluso después de cerrar navegador)
// Esto asegura que el usuario no tenga que volver a iniciar sesión después de actualizar la PWA
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        console.log('✅ Firebase Auth: Persistencia LOCAL configurada');
    })
    .catch((error) => {
        console.warn('⚠️ Firebase Auth: Error al configurar persistencia', error);
    });

// Exportar para uso en otros módulos
window.firebaseAuth = auth;
window.firebaseDb = db;

