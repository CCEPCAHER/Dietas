// Servicio para gestionar alimentos en Firebase
class AlimentoService {
    constructor() {
        this.db = window.firebaseDb;
        this.cacheAlimentos = null;
        this.ultimaActualizacion = null;
        this.listeners = [];
    }

    /**
     * Obtiene todos los alimentos desde Firebase
     * @param {boolean} forzarRecarga - Si es true, fuerza la recarga desde Firebase
     * @returns {Promise<Array>} Array de alimentos normalizados
     */
    async obtenerAlimentos(forzarRecarga = false) {
        // Si hay cache y no se fuerza recarga, devolver cache
        if (!forzarRecarga && this.cacheAlimentos && this.cacheAlimentos.length > 0) {
            return this.cacheAlimentos;
        }

        try {
            // Intentar cargar desde Firestore primero
            const alimentosFirestore = await this.cargarDesdeFirestore();
            if (alimentosFirestore && alimentosFirestore.length > 0) {
                this.cacheAlimentos = alimentosFirestore;
                this.ultimaActualizacion = new Date();
                console.log(`📦 ${alimentosFirestore.length} alimentos cargados desde Firestore`);
                return alimentosFirestore;
            }

            // Si no hay datos en Firestore, intentar cargar desde base-datos-alimentos.js
            if (typeof window.obtenerTodosLosAlimentos === 'function') {
                const alimentosLocal = window.obtenerTodosLosAlimentos();
                if (alimentosLocal && alimentosLocal.length > 0) {
                    this.cacheAlimentos = alimentosLocal;
                    this.ultimaActualizacion = new Date();
                    console.log(`📦 ${alimentosLocal.length} alimentos cargados desde base-datos-alimentos.js`);
                    
                    // Guardar en Firestore para sincronizar
                    await this.guardarEnFirestore(alimentosLocal);
                    return alimentosLocal;
                }
            }

            console.warn('⚠️ No se encontraron alimentos en Firestore ni en base-datos-alimentos.js');
            return [];
        } catch (error) {
            console.error('Error al obtener alimentos:', error);
            
            // Fallback a base-datos-alimentos.js si hay error con Firestore
            if (typeof window.obtenerTodosLosAlimentos === 'function') {
                try {
                    const alimentosLocal = window.obtenerTodosLosAlimentos();
                    if (alimentosLocal && alimentosLocal.length > 0) {
                        this.cacheAlimentos = alimentosLocal;
                        return alimentosLocal;
                    }
                } catch (e) {
                    console.error('Error al cargar desde base-datos-alimentos.js:', e);
                }
            }
            
            return [];
        }
    }

    /**
     * Carga alimentos desde Firestore
     * @returns {Promise<Array>} Array de alimentos
     */
    async cargarDesdeFirestore() {
        try {
            if (!this.db) {
                console.warn('⚠️ Firestore no está inicializado');
                return null;
            }

            const docRef = this.db.collection('alimentos').doc('base-datos');
            const doc = await docRef.get();

            if (doc.exists) {
                const data = doc.data();
                if (data.alimentos && Array.isArray(data.alimentos)) {
                    // Normalizar los alimentos al formato esperado
                    const alimentosNormalizados = data.alimentos.map(alimento => {
                        return this.normalizarAlimento(alimento);
                    });
                    return alimentosNormalizados;
                }
            }
            return null;
        } catch (error) {
            console.error('Error al cargar desde Firestore:', error);
            return null;
        }
    }

    /**
     * Guarda alimentos en Firestore
     * @param {Array} alimentos - Array de alimentos a guardar
     * @returns {Promise<boolean>} true si se guardó correctamente
     */
    async guardarEnFirestore(alimentos) {
        try {
            // Asegurar que this.db esté disponible, si no, intentar obtenerlo
            if (!this.db) {
                this.db = window.firebaseDb;
                console.log('🔄 Actualizando referencia de Firestore en AlimentoService');
            }
            
            if (!this.db) {
                console.error('❌ Firestore no está inicializado en AlimentoService');
                console.log('Opciones disponibles:', {
                    'this.db': this.db,
                    'window.firebaseDb': typeof window.firebaseDb,
                    'firebase.firestore()': typeof firebase !== 'undefined' ? typeof firebase.firestore() : 'undefined'
                });
                return false;
            }

            const user = window.authManager?.getCurrentUser();
            if (!user) {
                console.warn('⚠️ Usuario no autenticado, saltando guardado en Firestore');
                return false;
            }

            if (!alimentos || !Array.isArray(alimentos) || alimentos.length === 0) {
                console.warn('⚠️ No hay alimentos para guardar en Firestore');
                return false;
            }

            // Limpiar datos: eliminar campos undefined
            const alimentosLimpios = alimentos.map(alimento => {
                const limpio = {};
                for (const key in alimento) {
                    if (alimento[key] !== undefined) {
                        limpio[key] = alimento[key];
                    }
                }
                return limpio;
            });

            console.log(`💾 Guardando ${alimentosLimpios.length} alimentos en Firestore (AlimentoService)...`);
            console.log('Usuario autenticado:', user.email);
            
            const docRef = this.db.collection('alimentos').doc('base-datos');
            await docRef.set({
                alimentos: alimentosLimpios,
                fechaActualizacion: firebase.firestore.FieldValue.serverTimestamp(),
                actualizadoPor: user.uid,
                actualizadoPorEmail: user.email,
                totalAlimentos: alimentosLimpios.length
            }, { merge: true });

            // Invalidar cache
            this.cacheAlimentos = null;
            
            // Notificar a los listeners
            this.notificarCambios();

            console.log(`✅ ${alimentosLimpios.length} alimentos guardados en Firestore (AlimentoService) correctamente`);
            
            // Verificar que se guardó correctamente
            const docVerificado = await docRef.get();
            if (docVerificado.exists) {
                const datosVerificados = docVerificado.data();
                console.log('✅ Verificación (AlimentoService): Documento existe en Firestore');
                console.log('Total de alimentos en Firestore:', datosVerificados.totalAlimentos);
            }
            
            return true;
        } catch (error) {
            console.error('❌ Error al guardar en Firestore (AlimentoService):', error);
            console.error('Stack trace:', error.stack);
            console.error('Detalles del error:', {
                message: error.message,
                code: error.code,
                name: error.name
            });
            return false;
        }
    }

    /**
     * Normaliza un alimento al formato estándar
     * @param {Object} alimento - Alimento a normalizar
     * @returns {Object} Alimento normalizado
     */
    normalizarAlimento(alimento) {
        // Si ya está normalizado, devolverlo tal cual
        if (alimento.ALIMENTO && alimento.PROTEÍNAS !== undefined) {
            return alimento;
        }

        // Normalizar desde formato nuevo a formato estándar
        const normalizarValor = (valor) => {
            if (typeof valor === 'number') return valor;
            if (valor === 'Irrelevante' || valor === null || valor === undefined) return 0;
            const parsed = parseFloat(String(valor).replace(',', '.'));
            return isNaN(parsed) ? 0 : parsed;
        };

        const calcularCalorias = (prot, hid, grasa) => {
            return Math.round((prot * 4) + (hid * 4) + (grasa * 9));
        };

        const proteinas = normalizarValor(alimento.proteínas || alimento.PROTEÍNAS);
        const hidratos = normalizarValor(alimento.hidratos || alimento.HIDRATOS || alimento.carbohidratos);
        const grasas = normalizarValor(alimento.grasas || alimento.GRASAS);
        const calorias = normalizarValor(alimento.calorias || alimento.CALORÍAS) || calcularCalorias(proteinas, hidratos, grasas);

        return {
            ALIMENTO: alimento.nombre || alimento.ALIMENTO,
            MACRONUTRIENTE_PRINCIPAL: alimento.categoria_principal || alimento.MACRONUTRIENTE_PRINCIPAL || alimento['MACRONUTRIENTE PRINCIPAL'],
            CLASIFICACIÓN: alimento.subcategoria || alimento.CLASIFICACIÓN,
            UNIDAD: alimento.presentacion || alimento.UNIDAD || '',
            PESO_POR_UNIDAD: alimento.peso || alimento['PESO POR UNIDAD'] || alimento.PESO_POR_UNIDAD || '',
            MARCA_REGISTRADA: alimento.marca || alimento['MARCA REGISTRADA'] || alimento.MARCA_REGISTRADA || '',
            NOMBRE_DEL_PRODUCTO: alimento.producto || alimento['NOMBRE DEL PRODUCTO'] || alimento.NOMBRE_DEL_PRODUCTO || '',
            OTRAS_NOTAS: alimento.notas || alimento.descripcion || alimento['OTRAS NOTAS'] || alimento.OTRAS_NOTAS || '',
            CALORÍAS: calorias,
            PROTEÍNAS: proteinas,
            GRASAS: grasas,
            GRASAS_SATURADAS: normalizarValor(alimento.grasas_saturadas || alimento['GRASAS SATURADAS'] || alimento.GRASAS_SATURADAS),
            HIDRATOS: hidratos,
            AZÚCARES: normalizarValor(alimento.azucares || alimento.azucar || alimento.AZÚCARES)
        };
    }

    /**
     * Agrega un listener para cambios en los alimentos
     * @param {Function} callback - Función a llamar cuando hay cambios
     */
    agregarListener(callback) {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        }
    }

    /**
     * Remueve un listener
     * @param {Function} callback - Función a remover
     */
    removerListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    /**
     * Notifica a todos los listeners sobre cambios
     */
    notificarCambios() {
        this.listeners.forEach(callback => {
            try {
                callback();
            } catch (error) {
                console.error('Error en listener de alimentos:', error);
            }
        });
    }

    /**
     * Recarga los alimentos desde Firebase
     * @returns {Promise<Array>} Array de alimentos actualizados
     */
    async recargar() {
        this.cacheAlimentos = null;
        return await this.obtenerAlimentos(true);
    }
}

// Crear instancia global
if (typeof window !== 'undefined') {
    window.alimentoService = new AlimentoService();
    console.log('✅ AlimentoService inicializado');
}

