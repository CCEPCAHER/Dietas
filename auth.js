// Módulo de Autenticación
class AuthManager {
    constructor() {
        this.auth = window.firebaseAuth;
        this.currentUser = null;
        this.setupAuthStateListener();
    }

    setupAuthStateListener() {
        this.auth.onAuthStateChanged((user) => {
            this.currentUser = user;
            if (user) {
                window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: user }));
                console.log('Usuario autenticado:', user.email);
            } else {
                window.dispatchEvent(new CustomEvent('userLoggedOut'));
                console.log('Usuario no autenticado');
            }
        });
    }

    async register(email, password, nombre) {
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Guardar información adicional del usuario (usar merge para evitar sobrescribir)
            await window.firebaseDb.collection('usuarios').doc(user.uid).set({
                nombre: nombre,
                email: email,
                fechaRegistro: firebase.firestore.FieldValue.serverTimestamp(),
                dietas: []
            }, { merge: true });

            return { success: true, user };
        } catch (error) {
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    async login(email, password) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Asegurar que el documento de usuario existe (por si fue creado antes del registro)
            const usuarioRef = window.firebaseDb.collection('usuarios').doc(user.uid);
            const usuarioDoc = await usuarioRef.get();
            
            if (!usuarioDoc.exists) {
                // Crear el documento si no existe
                await usuarioRef.set({
                    nombre: user.displayName || email.split('@')[0],
                    email: email,
                    fechaRegistro: firebase.firestore.FieldValue.serverTimestamp(),
                    dietas: []
                }, { merge: true });
            }
            
            return { success: true, user };
        } catch (error) {
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    async logout() {
        try {
            await this.auth.signOut();
            return { success: true };
        } catch (error) {
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    getCurrentUser() {
        return this.auth.currentUser;
    }

    isAuthenticated() {
        return this.auth.currentUser !== null;
    }

    getErrorMessage(error) {
        const errorMessages = {
            'auth/email-already-in-use': 'Este correo ya está registrado',
            'auth/invalid-email': 'Correo electrónico inválido',
            'auth/operation-not-allowed': 'Operación no permitida',
            'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
            'auth/user-disabled': 'Usuario deshabilitado',
            'auth/user-not-found': 'Usuario no encontrado',
            'auth/wrong-password': 'Contraseña incorrecta',
            'auth/network-request-failed': 'Error de conexión. Verifica tu internet',
            'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde'
        };

        return errorMessages[error.code] || error.message || 'Error desconocido';
    }
}

// Instancia global
window.authManager = new AuthManager();

