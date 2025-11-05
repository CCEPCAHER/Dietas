// Servicio para gestionar dietas en Firebase
class DietaService {
    constructor() {
        this.db = window.firebaseDb;
    }

    async guardarDieta(datosDieta) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const dietaData = {
                ...datosDieta,
                userId: user.uid,
                fechaCreacion: firebase.firestore.FieldValue.serverTimestamp(),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            };

            // Guardar en la colección de dietas
            const docRef = await this.db.collection('dietas').add(dietaData);

            // Asegurar que el documento de usuario existe antes de actualizar
            const usuarioRef = this.db.collection('usuarios').doc(user.uid);
            const usuarioDoc = await usuarioRef.get();
            
            if (!usuarioDoc.exists) {
                // Crear el documento de usuario si no existe
                await usuarioRef.set({
                    nombre: user.displayName || user.email.split('@')[0],
                    email: user.email,
                    fechaRegistro: firebase.firestore.FieldValue.serverTimestamp(),
                    dietas: [docRef.id]
                });
            } else {
                // Actualizar lista de dietas del usuario
                await usuarioRef.update({
                    dietas: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                });
            }

            return { success: true, dietaId: docRef.id };
        } catch (error) {
            console.error('Error al guardar dieta:', error);
            return { success: false, error: error.message };
        }
    }

    async obtenerDietasUsuario() {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const querySnapshot = await this.db
                .collection('dietas')
                .where('userId', '==', user.uid)
                .orderBy('fechaCreacion', 'desc')
                .get();

            const dietas = [];
            querySnapshot.forEach((doc) => {
                dietas.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            return { success: true, dietas };
        } catch (error) {
            console.error('Error al obtener dietas:', error);
            return { success: false, error: error.message, dietas: [] };
        }
    }

    async obtenerDietaPorId(dietaId) {
        try {
            const doc = await this.db.collection('dietas').doc(dietaId).get();
            
            if (!doc.exists) {
                throw new Error('Dieta no encontrada');
            }

            const user = window.authManager.getCurrentUser();
            const dietaData = doc.data();

            // Verificar que la dieta pertenece al usuario
            if (dietaData.userId !== user.uid) {
                throw new Error('No tienes permiso para ver esta dieta');
            }

            return { success: true, dieta: { id: doc.id, ...dietaData } };
        } catch (error) {
            console.error('Error al obtener dieta:', error);
            return { success: false, error: error.message };
        }
    }

    async eliminarDieta(dietaId) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const dietaDoc = await this.db.collection('dietas').doc(dietaId).get();
            if (!dietaDoc.exists) {
                throw new Error('Dieta no encontrada');
            }

            const dietaData = dietaDoc.data();
            if (dietaData.userId !== user.uid) {
                throw new Error('No tienes permiso para eliminar esta dieta');
            }

            await this.db.collection('dietas').doc(dietaId).delete();

            // Actualizar lista de dietas del usuario (si el documento existe)
            const usuarioRef = this.db.collection('usuarios').doc(user.uid);
            const usuarioDoc = await usuarioRef.get();
            
            if (usuarioDoc.exists) {
                await usuarioRef.update({
                    dietas: firebase.firestore.FieldValue.arrayRemove(dietaId)
                });
            }

            return { success: true };
        } catch (error) {
            console.error('Error al eliminar dieta:', error);
            return { success: false, error: error.message };
        }
    }

    async actualizarDieta(dietaId, datosActualizados) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const dietaDoc = await this.db.collection('dietas').doc(dietaId).get();
            if (!dietaDoc.exists) {
                throw new Error('Dieta no encontrada');
            }

            const dietaData = dietaDoc.data();
            if (dietaData.userId !== user.uid) {
                throw new Error('No tienes permiso para actualizar esta dieta');
            }

            await this.db.collection('dietas').doc(dietaId).update({
                ...datosActualizados,
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al actualizar dieta:', error);
            return { success: false, error: error.message };
        }
    }
}

// Instancia global
window.dietaService = new DietaService();

