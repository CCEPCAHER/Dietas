// Servicio para gestionar dietas en Firebase
class DietaService {
    constructor() {
        this.db = window.firebaseDb;
        // Cache para dietas no encontradas (evitar intentos repetidos)
        this.dietasNoEncontradas = new Set();
        // Cache temporal para dietas encontradas (5 minutos)
        this.dietasCache = new Map();
        this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
        // Control de logs para evitar spam
        this.logsDietasNoEncontradas = new Set();
    }
    
    // Limpiar cache de dietas no encontradas después de un tiempo
    limpiarCacheNoEncontradas() {
        // Limpiar después de 10 minutos
        setTimeout(() => {
            this.dietasNoEncontradas.clear();
            this.logsDietasNoEncontradas.clear();
        }, 10 * 60 * 1000);
    }

    async guardarDieta(datosDieta) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            console.log(`💾 Guardando dieta para usuario ${user.uid}`);
            console.log(`📋 Datos de la dieta:`, {
                nombre: datosDieta.nombre || 'Sin nombre',
                objetivo: datosDieta.objetivo || 'No especificado',
                calorias: datosDieta.calorias || 0
            });

            // Si hay un ID en los datos, significa que se está intentando actualizar
            // pero si llegamos aquí, es porque se eligió crear nueva, así que eliminamos el ID
            const datosParaGuardar = { ...datosDieta };
            delete datosParaGuardar.id; // Eliminar ID para forzar creación de nueva dieta
            
            const dietaData = {
                ...datosParaGuardar,
                userId: user.uid,
                fechaCreacion: firebase.firestore.FieldValue.serverTimestamp(),
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            };

            // Guardar en la colección de dietas (siempre crear nueva aquí)
            const docRef = await this.db.collection('dietas').add(dietaData);
            
            console.log(`✅ Dieta guardada con ID: ${docRef.id}`);
            console.log(`📋 Ruta completa del documento: ${docRef.path}`);

            // Asegurar que el documento de usuario existe antes de actualizar
            const usuarioRef = this.db.collection('usuarios').doc(user.uid);
            const usuarioDoc = await usuarioRef.get();
            
            if (!usuarioDoc.exists) {
                // Crear el documento de usuario si no existe
                console.log(`📝 Creando documento de usuario ${user.uid}`);
                await usuarioRef.set({
                    nombre: user.displayName || user.email.split('@')[0],
                    email: user.email,
                    fechaRegistro: firebase.firestore.FieldValue.serverTimestamp(),
                    dietas: [docRef.id]
                });
                console.log(`✅ Documento de usuario creado con dieta ID: ${docRef.id}`);
            } else {
                // Actualizar lista de dietas del usuario
                console.log(`📝 Actualizando lista de dietas del usuario ${user.uid}`);
                await usuarioRef.update({
                    dietas: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                });
                
                // Verificar que se guardó correctamente
                const usuarioDocActualizado = await usuarioRef.get();
                const dietasArray = usuarioDocActualizado.data()?.dietas || [];
                console.log(`✅ Lista de dietas actualizada. Total dietas del usuario: ${dietasArray.length}`);
                console.log(`📋 IDs de dietas del usuario:`, dietasArray);
                
                // Verificar que el ID está en la lista
                if (dietasArray.includes(docRef.id)) {
                    console.log(`✅ El ID ${docRef.id} está correctamente guardado en la lista del usuario`);
                } else {
                    console.error(`❌ ERROR: El ID ${docRef.id} NO está en la lista del usuario después de guardar`);
                }
            }

            // Verificar que el documento se puede leer inmediatamente
            try {
                const docVerificado = await docRef.get();
                if (docVerificado.exists) {
                    console.log(`✅ Verificación: El documento ${docRef.id} existe y se puede leer correctamente`);
                    const datosVerificados = docVerificado.data();
                    console.log(`📄 Datos verificados:`, {
                        tieneUserId: !!datosVerificados.userId,
                        userId: datosVerificados.userId || 'NO TIENE',
                        nombre: datosVerificados.nombre || 'Sin nombre'
                    });
                } else {
                    console.error(`❌ ERROR: El documento ${docRef.id} no existe después de guardar`);
                }
            } catch (verifError) {
                console.error(`❌ Error al verificar el documento guardado:`, verifError);
            }

            return { success: true, dietaId: docRef.id };
        } catch (error) {
            console.error('❌ Error al guardar dieta:', error);
            console.error('Detalles del error:', {
                code: error.code,
                message: error.message,
                stack: error.stack
            });
            return { success: false, error: error.message };
        }
    }

    async obtenerDietasUsuario() {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            console.log(`🔍 Obteniendo dietas para usuario ${user.uid}`);
            
            let querySnapshot;
            
            // Intentar con orderBy primero (requiere índice compuesto)
            try {
                querySnapshot = await this.db
                    .collection('dietas')
                    .where('userId', '==', user.uid)
                    .orderBy('fechaCreacion', 'desc')
                    .get();
                
                console.log(`✅ Query con orderBy exitosa: ${querySnapshot.size} dietas encontradas`);
            } catch (orderByError) {
                // Si falla por falta de índice, intentar sin orderBy
                if (orderByError.code === 'failed-precondition' || orderByError.message.includes('index')) {
                    console.warn('⚠️ Índice compuesto no encontrado, obteniendo dietas sin ordenar...');
                    console.warn('💡 Para mejorar el rendimiento, crea un índice compuesto en Firestore:');
                    console.warn('   - Colección: dietas');
                    console.warn('   - Campos: userId (Ascending), fechaCreacion (Descending)');
                    
                    querySnapshot = await this.db
                        .collection('dietas')
                        .where('userId', '==', user.uid)
                        .get();
                    
                    // Ordenar manualmente en JavaScript
                    const dietasArray = [];
                    querySnapshot.forEach((doc) => {
                        dietasArray.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    });
                    
                    // Ordenar por fechaCreacion descendente
                    dietasArray.sort((a, b) => {
                        const fechaA = a.fechaCreacion?.toDate ? a.fechaCreacion.toDate() : new Date(0);
                        const fechaB = b.fechaCreacion?.toDate ? b.fechaCreacion.toDate() : new Date(0);
                        return fechaB - fechaA; // Descendente
                    });
                    
                    console.log(`✅ ${dietasArray.length} dietas obtenidas y ordenadas manualmente`);
                    return { success: true, dietas: dietasArray };
                } else {
                    // Si es otro error, lanzarlo
                    throw orderByError;
                }
            }

            const dietas = [];
            querySnapshot.forEach((doc) => {
                const dietaData = doc.data();
                
                // Verificar que el ID del documento existe y es válido
                if (!doc.id || doc.id.trim() === '') {
                    console.error(`❌ ERROR: Documento sin ID válido:`, {
                        path: doc.ref.path,
                        data: dietaData
                    });
                    return; // Saltar documentos sin ID válido
                }
                
                // Verificar que el userId coincide (seguridad adicional)
                if (dietaData.userId && dietaData.userId !== user.uid) {
                    console.warn(`⚠️ ADVERTENCIA: Dieta con userId diferente al usuario actual:`, {
                        dietaId: doc.id,
                        dietaUserId: dietaData.userId,
                        usuarioActual: user.uid
                    });
                }
                
                const dieta = {
                    id: doc.id, // Asegurar que usamos el ID del documento de Firestore
                    ...dietaData
                };
                
                dietas.push(dieta);
                
                // Log para debug
                console.log(`📄 Dieta encontrada: ID=${doc.id}, nombre=${dietaData.nombre || 'Sin nombre'}, userId=${dietaData.userId || 'NO TIENE'}`);
                console.log(`   📋 ID del documento (doc.id): "${doc.id}"`);
                console.log(`   📋 ID en el objeto dieta: "${dieta.id}"`);
                console.log(`   ✅ IDs coinciden: ${doc.id === dieta.id}`);
            });

            console.log(`✅ Total de dietas obtenidas: ${dietas.length}`);
            return { success: true, dietas };
        } catch (error) {
            console.error('❌ Error al obtener dietas:', error);
            console.error('Detalles del error:', {
                code: error.code,
                message: error.message,
                stack: error.stack
            });
            return { success: false, error: error.message, dietas: [] };
        }
    }

    async obtenerDietaPorId(dietaId) {
        try {
            const user = window.authManager?.getCurrentUser();
            if (!user) {
                console.error('❌ Usuario no autenticado al intentar obtener dieta');
                return { 
                    success: false, 
                    error: 'Usuario no autenticado. Por favor, inicia sesión.' 
                };
            }

            if (!this.db) {
                console.error('❌ Firestore no está inicializado');
                return { 
                    success: false, 
                    error: 'Error de conexión con la base de datos.' 
                };
            }

            // Verificar cache de dietas no encontradas (evitar intentos repetidos)
            const cacheKey = `${dietaId}_${user.uid}`;
            if (this.dietasNoEncontradas.has(cacheKey)) {
                // Solo loguear en modo debug para evitar spam en consola
                console.debug(`🔍 Dieta ${dietaId} ya verificada como no encontrada (cache)`);
                return { 
                    success: false, 
                    error: 'Dieta no encontrada. Es posible que haya sido eliminada.' 
                };
            }
            
            // Verificar cache de dietas encontradas
            const cached = this.dietasCache.get(cacheKey);
            if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
                console.debug(`✅ Dieta ${dietaId} encontrada en cache`);
                return { success: true, dieta: cached.dieta };
            }

            console.log(`🔍 Intentando obtener dieta ${dietaId} para usuario ${user.uid}`);
            
            // PRIMERO: Intentar lectura directa (más confiable que la query)
            // Esto funciona mejor porque no depende de índices ni de queries complejas
            let doc;
            let dietaData;
            let dietaExiste = false;
            
            try {
                const docRef = this.db.collection('dietas').doc(dietaId);
                console.log(`🔍 Intentando leer documento directamente: ${docRef.path}`);
                
                doc = await docRef.get();
                
                console.log(`📊 Resultado de get():`, {
                    exists: doc.exists,
                    id: doc.id,
                    metadata: {
                        fromCache: doc.metadata.fromCache,
                        hasPendingWrites: doc.metadata.hasPendingWrites
                    }
                });
                
                if (doc.exists) {
                    dietaExiste = true;
                    dietaData = doc.data();
                    console.log(`✅ Dieta ${dietaId} encontrada en Firestore`);
                    console.log(`📄 Datos de la dieta:`, {
                        tieneUserId: !!dietaData.userId,
                        userId: dietaData.userId || 'NO TIENE',
                        usuarioActual: user.uid,
                        campos: Object.keys(dietaData).slice(0, 10) // Primeros 10 campos para debug
                    });
                } else {
                    console.log(`❌ Documento ${dietaId} no existe o no se puede leer (puede ser problema de permisos)`);
                    console.log(`🔍 Verificando si es un problema de permisos o si la dieta está en otra ubicación...`);
                    
                    // Intentar verificar si el problema es de permisos
                    // Si las reglas de Firestore bloquean la lectura, exists será false
                    // pero el documento podría existir realmente
                    try {
                        // Intentar una query simple para ver si podemos acceder a la colección
                        const testQuery = await this.db.collection('dietas').limit(1).get();
                        console.log(`📊 Test de acceso a colección 'dietas':`, {
                            puedeLeer: true,
                            documentosEncontrados: testQuery.size
                        });
                        
                        // Intentar buscar el documento por otros medios
                        console.log(`🔍 Intentando buscar dieta en todas las dietas del usuario...`);
                        const todasLasDietas = await this.db
                            .collection('dietas')
                            .where('userId', '==', user.uid)
                            .get();
                        
                        console.log(`📊 Dietas del usuario ${user.uid}:`, {
                            total: todasLasDietas.size,
                            ids: todasLasDietas.docs.map(d => d.id),
                            detalles: todasLasDietas.docs.map(d => ({
                                id: d.id,
                                tieneUserId: !!d.data().userId,
                                userId: d.data().userId || 'NO TIENE'
                            }))
                        });
                        
                        // Verificar si el ID está en la lista
                        const dietaEncontrada = todasLasDietas.docs.find(d => d.id === dietaId);
                        if (dietaEncontrada) {
                            console.log(`✅ Dieta encontrada mediante búsqueda en dietas del usuario`);
                            doc = dietaEncontrada;
                            dietaExiste = true;
                            dietaData = doc.data();
                        } else {
                            // Si no se encuentra con userId, intentar buscar sin filtro de userId
                            // (puede ser una dieta antigua sin userId o con userId diferente)
                            console.log(`🔍 La dieta no está en las dietas del usuario. Intentando buscar sin filtro de userId...`);
                            console.log(`⚠️ ADVERTENCIA: Esto puede ser un problema de seguridad si la dieta pertenece a otro usuario`);
                            
                            // Intentar leer directamente - puede que las reglas de seguridad bloqueen la lectura
                            // pero el documento existe
                            try {
                                const docRefSinFiltro = this.db.collection('dietas').doc(dietaId);
                                console.log(`🔍 Intentando leer documento ${dietaId} directamente (sin filtros)...`);
                                console.log(`📋 Ruta completa del documento: ${docRefSinFiltro.path}`);
                                
                                const docSinFiltro = await docRefSinFiltro.get();
                                
                                console.log(`📊 Resultado lectura directa:`, {
                                    exists: docSinFiltro.exists,
                                    id: docSinFiltro.id,
                                    metadata: {
                                        fromCache: docSinFiltro.metadata.fromCache,
                                        hasPendingWrites: docSinFiltro.metadata.hasPendingWrites,
                                        isFromCache: docSinFiltro.metadata.fromCache
                                    }
                                });
                                
                                // Si no existe, intentar verificar si hay un problema con el ID
                                if (!docSinFiltro.exists) {
                                    console.warn(`⚠️ El documento ${dietaId} no existe según Firestore`);
                                    console.warn(`🔍 Verificando si el ID está correcto o si hay algún problema...`);
                                    
                                    // Intentar obtener todos los IDs de dietas para comparar
                                    try {
                                        // Obtener todas las dietas (sin filtros) para ver qué IDs existen
                                        const todasLasDietasIds = await this.db.collection('dietas')
                                            .limit(50) // Limitar a 50 para no sobrecargar
                                            .get();
                                        
                                        console.log(`📊 Total de dietas en la colección (primeras 50): ${todasLasDietasIds.size}`);
                                        
                                        const idsEncontrados = todasLasDietasIds.docs.map(d => d.id);
                                        console.log(`📋 IDs encontrados:`, idsEncontrados);
                                        
                                        // Mostrar también los datos básicos de cada dieta
                                        console.log(`📄 Detalles de las dietas encontradas:`, 
                                            todasLasDietasIds.docs.map(d => ({
                                                id: d.id,
                                                tieneUserId: !!d.data().userId,
                                                userId: d.data().userId || 'NO TIENE',
                                                fechaCreacion: d.data().fechaCreacion ? 'SÍ' : 'NO'
                                            }))
                                        );
                                        
                                        // Buscar IDs similares
                                        const idBuscado = dietaId.toLowerCase();
                                        const idsSimilares = idsEncontrados.filter(id => {
                                            const idLower = id.toLowerCase();
                                            return idLower.includes(idBuscado.substring(0, 5)) || 
                                                   idBuscado.includes(idLower.substring(0, 5));
                                        });
                                        
                                        if (idsSimilares.length > 0) {
                                            console.warn(`⚠️ Se encontraron IDs similares a ${dietaId}:`, idsSimilares);
                                            console.warn(`💡 ¿Quizás el ID correcto es uno de estos?`);
                                        }
                                        
                                        // Verificar si el ID exacto está en la lista
                                        if (idsEncontrados.includes(dietaId)) {
                                            console.error(`❌ ERROR: El ID ${dietaId} está en la lista pero doc.exists es false`);
                                            console.error(`❌ Esto sugiere un problema con las reglas de seguridad o con la lectura del documento`);
                                        }
                                    } catch (listError) {
                                        console.error('❌ Error al listar todas las dietas:', listError);
                                    }
                                }
                                
                                if (docSinFiltro.exists) {
                                    const dataSinFiltro = docSinFiltro.data();
                                    console.log(`✅ Dieta ${dietaId} EXISTE en Firestore`);
                                    console.log(`📄 Datos encontrados:`, {
                                        tieneUserId: !!dataSinFiltro.userId,
                                        userId: dataSinFiltro.userId || 'NO TIENE',
                                        usuarioActual: user.uid,
                                        campos: Object.keys(dataSinFiltro).slice(0, 15)
                                    });
                                    
                                    // Si no tiene userId, permitir acceso (dieta antigua)
                                    if (!dataSinFiltro.userId) {
                                        console.log(`✅ Cargando dieta antigua (sin userId) - permitiendo acceso`);
                                        doc = docSinFiltro;
                                        dietaExiste = true;
                                        dietaData = dataSinFiltro;
                                    } 
                                    // Si el userId es diferente, aún así intentar cargarla con advertencia
                                    // (puede ser un error de datos o una dieta compartida)
                                    else if (dataSinFiltro.userId !== user.uid) {
                                        console.warn(`⚠️ La dieta pertenece a otro usuario: ${dataSinFiltro.userId}`);
                                        console.warn(`⚠️ Usuario actual: ${user.uid}`);
                                        console.warn(`⚠️ Cargando dieta de todos modos (puede ser un error de datos o dieta compartida)`);
                                        
                                        // Permitir cargar pero con advertencia
                                        doc = docSinFiltro;
                                        dietaExiste = true;
                                        dietaData = dataSinFiltro;
                                    } else {
                                        // userId coincide - esto no debería pasar si no estaba en la query anterior
                                        console.log(`✅ userId coincide - cargando dieta`);
                                        doc = docSinFiltro;
                                        dietaExiste = true;
                                        dietaData = dataSinFiltro;
                                    }
                                } else {
                                    // El documento realmente no existe
                                    console.error(`❌ El documento ${dietaId} realmente no existe en Firestore`);
                                    console.error(`🔍 Verificando si hay algún problema con el ID o la colección...`);
                                    
                                    // Intentar listar todos los documentos de la colección (solo para diagnóstico)
                                    try {
                                        const todasLasDietasSinFiltro = await this.db.collection('dietas').limit(10).get();
                                        console.log(`📊 Primeros 10 documentos en colección 'dietas':`, {
                                            total: todasLasDietasSinFiltro.size,
                                            ids: todasLasDietasSinFiltro.docs.map(d => d.id)
                                        });
                                        
                                        // Verificar si hay algún ID similar
                                        const idsSimilares = todasLasDietasSinFiltro.docs
                                            .map(d => d.id)
                                            .filter(id => id.includes(dietaId.substring(0, 10)) || dietaId.includes(id.substring(0, 10)));
                                        
                                        if (idsSimilares.length > 0) {
                                            console.warn(`⚠️ Se encontraron IDs similares:`, idsSimilares);
                                        }
                                    } catch (listError) {
                                        console.error('❌ Error al listar documentos:', listError);
                                    }
                                }
                            } catch (errorSinFiltro) {
                                console.error('❌ Error al intentar leer sin filtro:', errorSinFiltro);
                                console.error('Detalles del error:', {
                                    code: errorSinFiltro.code,
                                    message: errorSinFiltro.message
                                });
                                
                                // Si es un error de permisos, el documento podría existir pero estar bloqueado
                                if (errorSinFiltro.code === 'permission-denied') {
                                    console.error(`🔒 ERROR DE PERMISOS: El documento ${dietaId} podría existir pero las reglas de Firestore bloquean su lectura`);
                                    console.error(`💡 Solución: Verificar las reglas de seguridad de Firestore para la colección 'dietas'`);
                                }
                            }
                        }
                    } catch (testError) {
                        console.error('❌ Error en test de acceso:', testError);
                        console.error('Detalles:', {
                            code: testError.code,
                            message: testError.message
                        });
                    }
                }
            } catch (directReadError) {
                console.error('❌ Error al leer documento directamente:', directReadError);
                console.error('Detalles del error:', {
                    code: directReadError.code,
                    message: directReadError.message,
                    stack: directReadError.stack
                });
                // Intentar con query como fallback
                try {
                    console.log('🔄 Intentando con query como fallback...');
                const querySnapshot = await this.db
                    .collection('dietas')
                    .where(firebase.firestore.FieldPath.documentId(), '==', dietaId)
                    .limit(1)
                    .get();
                
                if (!querySnapshot.empty) {
                        doc = querySnapshot.docs[0];
                        dietaData = doc.data();
                        dietaExiste = true;
                        console.log(`✅ Dieta ${dietaId} encontrada mediante query fallback`);
                    }
                } catch (queryError) {
                    console.error('❌ Error también con query fallback:', queryError);
                }
            }
            
            // Si la dieta no existe, agregar al cache y retornar error
            if (!dietaExiste || !dietaData) {
                // Agregar al cache de dietas no encontradas
                this.dietasNoEncontradas.add(cacheKey);
                this.limpiarCacheNoEncontradas();
                
                // Solo loguear la primera vez para cada dieta, luego usar debug
                if (!this.logsDietasNoEncontradas.has(cacheKey)) {
                    console.error(`❌ Dieta ${dietaId} no encontrada en la colección`);
                    console.error(`🔍 ID buscado: ${dietaId}`);
                    console.error(`👤 Usuario actual: ${user.uid}`);
                    
                    // Listar todas las dietas disponibles del usuario para ayudar a debuggear
                    try {
                        const dietasDisponibles = await this.obtenerDietasUsuario();
                        if (dietasDisponibles.success && dietasDisponibles.dietas.length > 0) {
                            console.warn(`📋 Dietas disponibles para este usuario (${dietasDisponibles.dietas.length}):`);
                            dietasDisponibles.dietas.forEach((dieta, index) => {
                                console.warn(`   ${index + 1}. ID: ${dieta.id}, Nombre: ${dieta.nombre || 'Sin nombre'}, Objetivo: ${dieta.objetivo || 'No especificado'}`);
                            });
                            
                            // Verificar si hay algún ID similar
                            const idsSimilares = dietasDisponibles.dietas
                                .map(d => d.id)
                                .filter(id => {
                                    // Buscar IDs que compartan los primeros o últimos caracteres
                                    const primeros5 = dietaId.substring(0, 5).toLowerCase();
                                    const ultimos5 = dietaId.substring(dietaId.length - 5).toLowerCase();
                                    const idLower = id.toLowerCase();
                                    return idLower.includes(primeros5) || idLower.includes(ultimos5) ||
                                           primeros5.includes(idLower.substring(0, 5)) || 
                                           ultimos5.includes(idLower.substring(idLower.length - 5));
                                });
                            
                            if (idsSimilares.length > 0) {
                                console.warn(`⚠️ Se encontraron IDs similares a ${dietaId}:`, idsSimilares);
                                console.warn(`💡 ¿Quizás el ID correcto es uno de estos?`);
                            } else {
                                console.warn(`💡 El ID buscado (${dietaId}) no coincide con ninguna dieta disponible.`);
                                console.warn(`💡 Verifica que el ID sea correcto o que la dieta no haya sido eliminada.`);
                            }
                        } else {
                            console.warn(`⚠️ No se encontraron dietas para este usuario.`);
                        }
                    } catch (listError) {
                        console.error(`❌ Error al listar dietas disponibles:`, listError);
                    }
                    
                    this.logsDietasNoEncontradas.add(cacheKey);
                } else {
                    console.debug(`ℹ️ Dieta ${dietaId} no encontrada (ya registrado)`);
                }
                
                return { 
                    success: false, 
                    error: `Dieta con ID "${dietaId}" no encontrada. Es posible que haya sido eliminada o que el ID sea incorrecto. Verifica la consola para ver las dietas disponibles.` 
                };
            }
            
            // Verificar permisos después de obtener el documento
            // Permitir acceso si:
            // 1. No tiene userId (dieta antigua - compatibilidad hacia atrás)
            // 2. El userId coincide con el usuario actual
            if (!dietaData.userId) {
                console.warn('⚠️ Dieta sin userId, puede ser una dieta antigua - permitiendo acceso');
                // Permitir lectura de dietas antiguas sin userId (compatibilidad hacia atrás)
                const dieta = { id: doc.id, ...dietaData };
                
                // Limpiar del cache de no encontradas si estaba ahí
                this.dietasNoEncontradas.delete(cacheKey);
                
                // Guardar en cache
                this.dietasCache.set(cacheKey, {
                    dieta: dieta,
                    timestamp: Date.now()
                });
                
                return { success: true, dieta: dieta };
            } else if (dietaData.userId !== user.uid) {
                console.error(`❌ Intento de acceso no autorizado: dieta ${dietaId} pertenece a ${dietaData.userId}, usuario actual: ${user.uid}`);
                return { 
                    success: false, 
                    error: `No tienes permiso para ver esta dieta. La dieta pertenece a otro usuario.` 
                };
            }

            // La dieta existe y el usuario tiene permiso
            const dieta = { id: doc.id, ...dietaData };
            
            // Limpiar del cache de no encontradas si estaba ahí
            this.dietasNoEncontradas.delete(cacheKey);
            
            // Guardar en cache
            this.dietasCache.set(cacheKey, {
                dieta: dieta,
                timestamp: Date.now()
            });
            
            console.log(`✅ Dieta ${dietaId} cargada correctamente`);
            return { success: true, dieta: dieta };
        } catch (error) {
            console.error('❌ Error al obtener dieta:', error);
            console.error('Detalles del error:', {
                code: error.code,
                message: error.message,
                stack: error.stack
            });
            
            // Manejar errores específicos de Firestore
            if (error.code === 'permission-denied') {
                console.error('🔒 Error de permisos - Verificando estado de autenticación...');
                const user = window.authManager?.getCurrentUser();
                console.error('Usuario autenticado:', user ? user.uid : 'NO AUTENTICADO');
                
                return { 
                    success: false, 
                    error: 'No tienes permiso para ver esta dieta. Verifica que estés autenticado correctamente y que la dieta te pertenezca. Si el problema persiste, la dieta puede tener un userId diferente al tuyo.' 
                };
            }
            
            if (error.code === 'unavailable') {
                return { 
                    success: false, 
                    error: 'Servicio temporalmente no disponible. Por favor, intenta de nuevo más tarde.' 
                };
            }
            
            return { 
                success: false, 
                error: error.message || 'Error desconocido al obtener la dieta' 
            };
        }
    }

    async eliminarDieta(dietaId) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            console.log(`🗑️ Intentando eliminar dieta ${dietaId}`);
            const docRef = this.db.collection('dietas').doc(dietaId);
            const dietaDoc = await docRef.get();
            
            if (!dietaDoc.exists) {
                console.log(`ℹ️ Dieta ${dietaId} no existe en Firestore - Procediendo a limpiar referencias`);
                
                // Intentar limpiar referencia en usuario por si acaso
                try {
                    const usuarioRef = this.db.collection('usuarios').doc(user.uid);
                    await usuarioRef.update({
                        dietas: firebase.firestore.FieldValue.arrayRemove(dietaId)
                    });
                    console.log('✅ Referencia en usuario limpiada');
                } catch (e) { 
                    console.warn('No se pudo actualizar referencia usuario (puede que el usuario no tenga el campo dietas):', e); 
                }
                
                return { success: true, mensaje: 'Dieta eliminada (no existía en base de datos)' };
            }

            const dietaData = dietaDoc.data();
            
            // Verificar permisos: permitir si es el propietario O si no tiene userId (dietas antiguas)
            const esPropietario = dietaData.userId === user.uid;
            const sinPropietario = !dietaData.userId;
            
            if (!esPropietario && !sinPropietario) {
                console.error(`❌ Permiso denegado: Dieta pertenece a ${dietaData.userId}, usuario actual ${user.uid}`);
                throw new Error('No tienes permiso para eliminar esta dieta');
            }

            await docRef.delete();

            // Actualizar lista de dietas del usuario (si el documento existe)
            try {
                const usuarioRef = this.db.collection('usuarios').doc(user.uid);
                const usuarioDoc = await usuarioRef.get();
                
                if (usuarioDoc.exists) {
                    await usuarioRef.update({
                        dietas: firebase.firestore.FieldValue.arrayRemove(dietaId)
                    });
                }
            } catch (refError) {
                console.warn('Error al actualizar referencias de usuario:', refError);
                // No fallar la operación principal si falla la actualización de referencia
            }

            console.log(`✅ Dieta ${dietaId} eliminada correctamente`);
            return { success: true };
        } catch (error) {
            console.error('❌ Error al eliminar dieta:', error);
            
            if (error.code === 'permission-denied') {
                return { success: false, error: 'No tienes permisos para eliminar esta dieta.' };
            }
            
            return { success: false, error: error.message };
        }
    }

    async actualizarDieta(dietaId, datosActualizados) {
        try {
            const user = window.authManager.getCurrentUser();
            if (!user) {
                throw new Error('Usuario no autenticado');
            }

            console.log(`🔄 Actualizando dieta ${dietaId} para usuario ${user.uid}`);
            console.log(`📋 Datos a actualizar:`, {
                nombre: datosActualizados.nombre || 'Sin nombre',
                objetivo: datosActualizados.objetivo || 'No especificado',
                calorias: datosActualizados.calorias || 0
            });

            const dietaDoc = await this.db.collection('dietas').doc(dietaId).get();
            if (!dietaDoc.exists) {
                console.error(`❌ Dieta ${dietaId} no encontrada`);
                throw new Error('Dieta no encontrada');
            }

            const dietaData = dietaDoc.data();
            
            // Verificar permisos: permitir si es el propietario O si no tiene userId (dietas antiguas)
            const esPropietario = dietaData.userId === user.uid;
            const sinPropietario = !dietaData.userId;
            
            if (!esPropietario && !sinPropietario) {
                console.error(`❌ Permiso denegado: Dieta pertenece a ${dietaData.userId}, usuario actual ${user.uid}`);
                throw new Error('No tienes permiso para actualizar esta dieta');
            }

            // Preparar datos para actualizar (sin incluir campos que no deben actualizarse)
            const datosParaActualizar = {
                ...datosActualizados,
                userId: user.uid, // Asegurar que el userId sea correcto
                fechaModificacion: firebase.firestore.FieldValue.serverTimestamp()
            };
            
            // No actualizar fechaCreacion (mantener la original)
            delete datosParaActualizar.fechaCreacion;
            
            // No incluir el ID en los datos a actualizar (el ID es parte del documento, no un campo)
            delete datosParaActualizar.id;
            
            console.log(`📋 Datos a actualizar (sin ID ni fechaCreacion):`, {
                campos: Object.keys(datosParaActualizar).slice(0, 10),
                totalCampos: Object.keys(datosParaActualizar).length
            });

            await this.db.collection('dietas').doc(dietaId).update(datosParaActualizar);
            
            // Limpiar cache para forzar recarga
            const cacheKey = `${dietaId}_${user.uid}`;
            this.dietasCache.delete(cacheKey);
            this.dietasNoEncontradas.delete(cacheKey);

            // Verificar que la actualización fue exitosa
            const dietaActualizada = await this.db.collection('dietas').doc(dietaId).get();
            if (dietaActualizada.exists) {
                const datosActualizados = dietaActualizada.data();
                console.log(`✅ Verificación: Dieta ${dietaId} actualizada correctamente`);
                console.log(`📄 Datos actualizados:`, {
                    nombre: datosActualizados.nombre || 'Sin nombre',
                    fechaModificacion: datosActualizados.fechaModificacion ? 'Actualizada' : 'NO ACTUALIZADA',
                    userId: datosActualizados.userId || 'NO TIENE'
                });
            } else {
                console.error(`❌ ERROR: La dieta ${dietaId} no existe después de actualizar`);
            }
            
            console.log(`✅ Dieta ${dietaId} actualizada correctamente`);
            return { success: true, dietaId: dietaId };
        } catch (error) {
            console.error('❌ Error al actualizar dieta:', error);
            console.error('Detalles del error:', {
                code: error.code,
                message: error.message,
                stack: error.stack
            });
            return { success: false, error: error.message };
        }
    }
}

// Instancia global
window.dietaService = new DietaService();

