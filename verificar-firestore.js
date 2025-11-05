// Script de verificación rápida de Firestore
function verificarFirestore() {
    console.log('=== VERIFICACIÓN DE FIRESTORE ===');
    
    // Verificar que Firebase esté inicializado
    if (typeof firebase === 'undefined') {
        console.error('❌ Firebase no está cargado');
        return;
    }
    console.log('✅ Firebase está cargado');
    
    // Verificar que Firestore esté disponible
    if (!window.firebaseDb) {
        console.error('❌ Firestore no está inicializado');
        return;
    }
    console.log('✅ Firestore está inicializado');
    
    // Verificar autenticación
    if (!window.authManager) {
        console.error('❌ AuthManager no está disponible');
        return;
    }
    
    const user = window.authManager.getCurrentUser();
    if (!user) {
        console.warn('⚠️ No hay usuario autenticado');
        console.log('Debes iniciar sesión primero');
        return;
    }
    console.log('✅ Usuario autenticado:', user.email);
    
    // Probar lectura de clientes (colección con permisos configurados)
    window.firebaseDb.collection('clientes')
        .where('nutricionistaId', '==', user.uid)
        .limit(1)
        .get()
        .then((snapshot) => {
            console.log('✅ Conexión a Firestore funciona correctamente');
            console.log('📊 Clientes encontrados:', snapshot.size);
            
            if (snapshot.size === 0) {
                console.log('ℹ️ No tienes clientes registrados aún');
            } else {
                snapshot.forEach(doc => {
                    console.log('📄 Cliente ID:', doc.id);
                    console.log('📋 Datos:', doc.data());
                });
            }
        })
        .catch((error) => {
            console.error('❌ Error de conexión:', error);
            console.error('Código:', error.code);
            console.error('Mensaje:', error.message);
            
            if (error.code === 'permission-denied') {
                console.error('⚠️ PROBLEMA: Permisos denegados');
                console.log('Solución: Actualiza las reglas de Firestore en Firebase Console');
                console.log('Las reglas actuales deberían permitir el acceso a clientes.');
            } else if (error.code === 'unavailable') {
                console.error('⚠️ PROBLEMA: Firestore no disponible');
                console.log('Solución: Verifica tu conexión a internet');
            }
        });
}

// Exportar para uso en consola
window.verificarFirestore = verificarFirestore;

// Ejecutar verificación después de un delay
setTimeout(() => {
    if (window.firebaseDb && window.authManager) {
        console.log('Ejecutando verificación automática...');
        verificarFirestore();
    }
}, 2000);

console.log('Para verificar Firestore manualmente, ejecuta: verificarFirestore()');

