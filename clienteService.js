// Servicio para gestionar clientes en Firebase
class ClienteService {
    constructor() {
        this.db = window.firebaseDb;
    }

    async crearCliente(datosCliente) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            if (!this.db) {
                throw new Error('Firestore no está inicializado');
            }

            const clienteData = {
                ...datosCliente,
                nutricionistaId: user.uid,
                fechaCreacion: firebase.firestore.FieldValue.serverTimestamp(),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp(),
                historialConsultas: [],
                historialDietas: [],
                historialMedidas: [],
                progreso: {
                    peso: [],
                    medidas: [],
                    fotos: [],
                    notas: []
                },
                activo: true
            };

            console.log('Intentando crear cliente:', clienteData);
            const docRef = await this.db.collection('clientes').add(clienteData);
            console.log('Cliente creado con ID:', docRef.id);
            return { success: true, clienteId: docRef.id };
        } catch (error) {
            console.error('Error al crear cliente:', error);
            console.error('Detalles del error:', {
                code: error.code,
                message: error.message,
                stack: error.stack
            });
            
            // Mensajes de error más amigables
            let mensajeError = error.message;
            if (error.code === 'permission-denied') {
                mensajeError = 'No tienes permisos para crear clientes. Verifica las reglas de Firestore.';
            } else if (error.code === 'unavailable') {
                mensajeError = 'Firestore no está disponible. Verifica tu conexión a internet.';
            } else if (error.code === 'unauthenticated') {
                mensajeError = 'Debes iniciar sesión para crear clientes.';
            }
            
            return { success: false, error: mensajeError };
        }
    }

    async obtenerClientes() {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            if (!this.db) {
                throw new Error('Firestore no está inicializado');
            }

            console.log('Obteniendo clientes para usuario:', user.uid);
            
            // Primero intentar sin orderBy por si no hay índice
            let querySnapshot;
            try {
                querySnapshot = await this.db
                    .collection('clientes')
                    .where('nutricionistaId', '==', user.uid)
                    .orderBy('fechaCreacion', 'desc')
                    .get();
            } catch (orderError) {
                // Si falla por falta de índice, intentar sin orderBy
                console.warn('Error con orderBy, intentando sin orden:', orderError);
                querySnapshot = await this.db
                    .collection('clientes')
                    .where('nutricionistaId', '==', user.uid)
                    .get();
            }

            const clientes = [];
            querySnapshot.forEach((doc) => {
                clientes.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            console.log('Clientes obtenidos:', clientes.length);
            return { success: true, clientes };
        } catch (error) {
            console.error('Error al obtener clientes:', error);
            console.error('Detalles del error:', {
                code: error.code,
                message: error.message
            });
            
            let mensajeError = error.message;
            if (error.code === 'permission-denied') {
                mensajeError = 'No tienes permisos para leer clientes. Verifica las reglas de Firestore.';
            } else if (error.code === 'unavailable') {
                mensajeError = 'Firestore no está disponible. Verifica tu conexión.';
            }
            
            return { success: false, error: mensajeError, clientes: [] };
        }
    }

    async buscarCliente(termino) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const clientes = await this.obtenerClientes();
            if (!clientes.success) {
                return clientes;
            }

            const terminoLower = termino.toLowerCase();
            const resultados = clientes.clientes.filter(cliente => {
                const nombre = (cliente.nombre || '').toLowerCase();
                const email = (cliente.email || '').toLowerCase();
                const telefono = (cliente.telefono || '').toLowerCase();
                const dni = (cliente.dni || '').toLowerCase();
                
                return nombre.includes(terminoLower) ||
                       email.includes(terminoLower) ||
                       telefono.includes(terminoLower) ||
                       dni.includes(terminoLower);
            });

            return { success: true, clientes: resultados };
        } catch (error) {
            console.error('Error al buscar cliente:', error);
            return { success: false, error: error.message, clientes: [] };
        }
    }

    async obtenerClientePorId(clienteId) {
        try {
            const doc = await this.db.collection('clientes').doc(clienteId).get();
            
            if (!doc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const user = window.authManager.getCurrentUser();
            const clienteData = doc.data();

            if (clienteData.nutricionistaId !== user.uid) {
                throw new Error('No tienes permiso para ver este cliente');
            }

            return { success: true, cliente: { id: doc.id, ...clienteData } };
        } catch (error) {
            console.error('Error al obtener cliente:', error);
            return { success: false, error: error.message };
        }
    }

    async actualizarCliente(clienteId, datosActualizados) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const clienteData = clienteDoc.data();
            if (clienteData.nutricionistaId !== user.uid) {
                throw new Error('No tienes permiso para actualizar este cliente');
            }

            await this.db.collection('clientes').doc(clienteId).update({
                ...datosActualizados,
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
            return { success: false, error: error.message };
        }
    }

    async agregarConsulta(clienteId, consultaData) {
        try {
            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const consulta = {
                ...consultaData,
                fecha: firebase.firestore.FieldValue.serverTimestamp(),
                id: Date.now().toString()
            };

            await this.db.collection('clientes').doc(clienteId).update({
                historialConsultas: firebase.firestore.FieldValue.arrayUnion(consulta),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al agregar consulta:', error);
            return { success: false, error: error.message };
        }
    }

    async agregarDieta(clienteId, dietaData) {
        try {
            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const dieta = {
                ...dietaData,
                fecha: firebase.firestore.FieldValue.serverTimestamp(),
                id: Date.now().toString()
            };

            await this.db.collection('clientes').doc(clienteId).update({
                historialDietas: firebase.firestore.FieldValue.arrayUnion(dieta),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al agregar dieta:', error);
            return { success: false, error: error.message };
        }
    }

    async agregarProgreso(clienteId, tipoProgreso, datos) {
        try {
            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const progreso = {
                ...datos,
                fecha: firebase.firestore.FieldValue.serverTimestamp(),
                id: Date.now().toString()
            };

            const campoProgreso = `progreso.${tipoProgreso}`;
            await this.db.collection('clientes').doc(clienteId).update({
                [campoProgreso]: firebase.firestore.FieldValue.arrayUnion(progreso),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al agregar progreso:', error);
            return { success: false, error: error.message };
        }
    }

    async agregarMedidasCliente(clienteId, medidasData, pesoActual) {
        try {
            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const user = window.authManager.getCurrentUser();
            const clienteData = clienteDoc.data();

            if (clienteData.nutricionistaId !== user.uid) {
                throw new Error('No tienes permiso para actualizar este cliente');
            }

            // Convertir fecha a timestamp de Firestore
            const fechaFirestore = firebase.firestore.Timestamp.fromDate(new Date(medidasData.fecha));
            
            const medida = {
                fecha: fechaFirestore,
                cintura: medidasData.cintura,
                cadera: medidasData.cadera,
                brazoDer: medidasData.brazoDer,
                brazoIzq: medidasData.brazoIzq,
                musloDer: medidasData.musloDer,
                musloIzq: medidasData.musloIzq,
                bicepsDer: medidasData.bicepsDer,
                bicepsIzq: medidasData.bicepsIzq,
                antebrazoDer: medidasData.antebrazoDer,
                antebrazoIzq: medidasData.antebrazoIzq,
                cuadricepsDer: medidasData.cuadricepsDer,
                cuadricepsIzq: medidasData.cuadricepsIzq,
                gemeloDer: medidasData.gemeloDer,
                gemeloIzq: medidasData.gemeloIzq,
                pantorrillaDer: medidasData.pantorrillaDer,
                pantorrillaIzq: medidasData.pantorrillaIzq,
                pecho: medidasData.pecho,
                cuello: medidasData.cuello,
                peso: medidasData.peso,
                notas: medidasData.notas
            };

            // Actualizar historialMedidas y peso actual si se proporciona
            const updates = {
                historialMedidas: firebase.firestore.FieldValue.arrayUnion(medida),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            };

            // Actualizar peso actual si se proporciona
            if (pesoActual && pesoActual.trim() !== '') {
                updates.pesoActual = parseFloat(pesoActual);
                
                // Recalcular IMC si hay altura
                if (clienteData.altura) {
                    updates.imc = (parseFloat(pesoActual) / Math.pow(clienteData.altura / 100, 2)).toFixed(1);
                }
            }

            await this.db.collection('clientes').doc(clienteId).update(updates);

            return { success: true };
        } catch (error) {
            console.error('Error al agregar medidas:', error);
            return { success: false, error: error.message };
        }
    }

    async agregarProgresoCliente(clienteId, progresoData, pesoActual) {
        try {
            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const user = window.authManager.getCurrentUser();
            const clienteData = clienteDoc.data();

            if (clienteData.nutricionistaId !== user.uid) {
                throw new Error('No tienes permiso para actualizar este cliente');
            }

            // Convertir fecha a timestamp de Firestore
            const fechaFirestore = firebase.firestore.Timestamp.fromDate(new Date(progresoData.fecha));
            
            const progreso = {
                fecha: fechaFirestore,
                valor: progresoData.valor,
                imc: progresoData.imc,
                notas: progresoData.notas
            };

            // Actualizar historialMedidas y peso actual si se proporciona
            const updates = {
                'progreso.peso': firebase.firestore.FieldValue.arrayUnion(progreso),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            };

            // Actualizar peso actual si se proporciona
            if (pesoActual && pesoActual.toString().trim() !== '') {
                updates.pesoActual = parseFloat(pesoActual);
                
                // Recalcular IMC si hay altura
                if (clienteData.altura) {
                    updates.imc = (parseFloat(pesoActual) / Math.pow(clienteData.altura / 100, 2)).toFixed(1);
                }
            }

            await this.db.collection('clientes').doc(clienteId).update(updates);

            return { success: true };
        } catch (error) {
            console.error('Error al agregar progreso:', error);
            return { success: false, error: error.message };
        }
    }

    async agregarConsultaCliente(clienteId, consultaData) {
        try {
            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const user = window.authManager.getCurrentUser();
            const clienteData = clienteDoc.data();

            if (clienteData.nutricionistaId !== user.uid) {
                throw new Error('No tienes permiso para actualizar este cliente');
            }

            // Convertir fecha a timestamp de Firestore
            const fechaFirestore = firebase.firestore.Timestamp.fromDate(new Date(consultaData.fecha));
            
            const consulta = {
                fecha: fechaFirestore,
                motivo: consultaData.motivo,
                notas: consultaData.notas
            };

            await this.db.collection('clientes').doc(clienteId).update({
                historialConsultas: firebase.firestore.FieldValue.arrayUnion(consulta),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al agregar consulta:', error);
            return { success: false, error: error.message };
        }
    }

    async eliminarCliente(clienteId) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            const clienteDoc = await this.db.collection('clientes').doc(clienteId).get();
            if (!clienteDoc.exists) {
                throw new Error('Cliente no encontrado');
            }

            const clienteData = clienteDoc.data();
            if (clienteData.nutricionistaId !== user.uid) {
                throw new Error('No tienes permiso para eliminar este cliente');
            }

            // Marcar como inactivo en lugar de eliminar
            await this.db.collection('clientes').doc(clienteId).update({
                activo: false,
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            return { success: false, error: error.message };
        }
    }
}

// Instancia global
window.clienteService = new ClienteService();

