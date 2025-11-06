// Sistema de Tabla Editable con Autocompletado
class TablaEditable {
    constructor() {
        this.alimentos = []; // Se cargará desde base-datos-alimentos.js
        this.comidas = ['Desayuno', 'Media Mañana', 'Comida', 'Merienda', 'Cena'];
        this.planDatos = {}; // Estructura: { comida: [{ alimento, gramos, calorias, proteinas, grasas, hidratos }] }
        this.dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
        this.diaActual = 'Lunes';
        this.planSemana = {}; // { Dia: { ...estructura como obtenerDatos() } }
        // Contador incremental para generar IDs únicos por fila y evitar colisiones con Date.now()
        this.rowSequence = 0;
        this.init();
    }

    init() {
        // Inicializar estructura de datos
        this.comidas.forEach(comida => {
            this.planDatos[comida] = [];
        });
        
        // Cargar base de datos de alimentos
        this.cargarBaseAlimentos();
    }

    cargarBaseAlimentos() {
        if (typeof window.obtenerTodosLosAlimentos === 'function') {
            try {
                this.alimentos = window.obtenerTodosLosAlimentos();
                if (this.alimentos && this.alimentos.length > 0) {
                    console.log(`📦 Base de datos cargada: ${this.alimentos.length} alimentos disponibles`);
                    return true;
                }
            } catch (e) {
                console.error('Error al cargar base de alimentos:', e);
            }
        }
        
        console.warn('⚠️ Base de datos de alimentos no disponible aún');
        return false;
    }

    // Generar HTML de la tabla editable
    generarTablaHTML() {
        let html = '<div class="tabla-editable-container">';

        // Barra de acciones de días y exportación
        html += `
            <div class="comida-header" style="margin-bottom:20px; gap:10px; flex-wrap:wrap">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <label for="selector-dia" style="font-weight:600;color:#667eea">Día:</label>
                    <select id="selector-dia" onchange="tablaEditable.cambiarDia(this.value)" title="Selecciona el día a editar" style="padding: 8px; border-radius: 6px; border: 2px solid #667eea; font-weight: 600;">
                        ${this.dias.map(d => {
                            const esDescanso = this.esDiaDescanso(d);
                            const badge = esDescanso ? '😴 DESCANSO' : '💪 ENTRENO';
                            return `<option value="${d}" ${d === this.diaActual ? 'selected' : ''}>${d} - ${badge}</option>`;
                        }).join('')}
                    </select>
                    <span id="badge-dia-actual" class="badge-dia-selector"></span>
                </div>
                <div style="display:flex; gap:10px;">
                    <button type="button" class="btn-clientes" onclick="tablaEditable.replicarDiaActualATodaLaSemana()" title="Copiar este día a toda la semana">↔️ Replicar a toda la semana</button>
                    <button type="button" class="btn-clientes" onclick="tablaEditable.exportarPDFMinimalista()" title="Exportar plan semanal en PDF">🧾 Exportar PDF</button>
                </div>
            </div>
        `;
        
        this.comidas.forEach(comida => {
            html += this.generarSeccionComida(comida);
        });

        html += this.generarTotalesDiarios();
        html += '</div>';
        
        // Inicializar estilos del día actual después de que el HTML se inserte
        setTimeout(() => {
            this.actualizarEstilosDia();
        }, 100);

        return html;
    }

    // Inicializar tablas vacías con filas para empezar
    inicializarTablasVacias(filasIniciales = 3) {
        this.comidas.forEach(comida => {
            for (let i = 0; i < filasIniciales; i++) {
                this.agregarFila(comida);
            }
        });
        // Inicializar estructura del día actual en blanco
        this.planSemana[this.diaActual] = this.obtenerDatos();
    }

    generarSeccionComida(comida) {
        const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
        
        return `
            <div class="comida-section" data-comida="${comida}">
                <div class="comida-header">
                    <h3>🍽️ ${comida}</h3>
                    <button type="button" class="btn-add-alimento" onclick="tablaEditable.agregarFila('${comida}')">
                        ➕ Añadir Alimento
                    </button>
                </div>
                
                <table class="tabla-alimentos">
                    <thead>
                        <tr>
                            <th style="width: 35%">Alimento</th>
                            <th style="width: 12%">Gramos</th>
                            <th style="width: 12%">Calorías</th>
                            <th style="width: 12%">Proteínas (g)</th>
                            <th style="width: 12%">Grasas (g)</th>
                            <th style="width: 12%">Hidratos (g)</th>
                            <th style="width: 5%"></th>
                        </tr>
                    </thead>
                    <tbody id="tbody-${comidaId}">
                        <!-- Las filas se añadirán dinámicamente -->
                    </tbody>
                </table>
                
                <div class="totales-comida" id="totales-${comidaId}">
                    <span>Total: <strong id="total-cal-${comidaId}">0</strong> kcal</span>
                    <span>P: <strong id="total-prot-${comidaId}">0</strong>g</span>
                    <span>G: <strong id="total-gras-${comidaId}">0</strong>g</span>
                    <span>H: <strong id="total-hidr-${comidaId}">0</strong>g</span>
                </div>
                
                <!-- Barras de progreso para esta comida -->
                <div class="comida-progress-bars" id="progress-${comidaId}" style="margin-top: 10px; padding: 10px; background: rgba(102, 126, 234, 0.05); border-radius: 8px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                        <div class="mini-progress-item">
                            <div style="font-size: 11px; color: #667eea; margin-bottom: 3px;">🔥 Calorías: <span id="mini-progress-cal-${comidaId}">0</span></div>
                            <div class="mini-progress-bar" id="mini-bar-cal-${comidaId}">
                                <div class="mini-progress-fill" id="mini-fill-cal-${comidaId}" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="mini-progress-item">
                            <div style="font-size: 11px; color: #667eea; margin-bottom: 3px;">💪 Proteínas: <span id="mini-progress-prot-${comidaId}">0</span>g</div>
                            <div class="mini-progress-bar" id="mini-bar-prot-${comidaId}">
                                <div class="mini-progress-fill" id="mini-fill-prot-${comidaId}" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="mini-progress-item">
                            <div style="font-size: 11px; color: #667eea; margin-bottom: 3px;">🥑 Grasas: <span id="mini-progress-gras-${comidaId}">0</span>g</div>
                            <div class="mini-progress-bar" id="mini-bar-gras-${comidaId}">
                                <div class="mini-progress-fill" id="mini-fill-gras-${comidaId}" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="mini-progress-item">
                            <div style="font-size: 11px; color: #667eea; margin-bottom: 3px;">🍚 Hidratos: <span id="mini-progress-hidr-${comidaId}">0</span>g</div>
                            <div class="mini-progress-bar" id="mini-bar-hidr-${comidaId}">
                                <div class="mini-progress-fill" id="mini-fill-hidr-${comidaId}" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generarTotalesDiarios() {
        const objetivos = this.obtenerObjetivosNutricionales();
        const esDescanso = this.esDiaDescanso(this.diaActual);
        const claseDescanso = esDescanso ? ' totales-descanso' : ' totales-entreno';
        const badgeTipo = esDescanso ? '<span class="badge-descanso" style="font-size: 0.85em; margin-left: 10px;">😴 DÍA DE DESCANSO</span>' : '<span class="badge-entreno" style="font-size: 0.85em; margin-left: 10px;">💪 DÍA DE ENTRENO</span>';
        
        return `
            <div class="totales-diarios${claseDescanso}">
                <h3>📊 Totales Diarios vs Objetivos ${badgeTipo}</h3>
                <div class="totales-grid">
                    <div class="total-item" id="total-item-calorias">
                        <div class="total-item-label">Calorías</div>
                        <div class="total-item-value" id="total-diario-calorias">0</div>
                        <div class="total-item-objetivo" id="objetivo-calorias">${objetivos.calorias} kcal</div>
                        <div class="progress-bar" id="progress-calorias">
                            <div class="progress-fill" id="progress-fill-calorias" style="width: 0%"></div>
                        </div>
                        <div class="progress-text" id="progress-text-calorias">0%</div>
                    </div>
                    <div class="total-item" id="total-item-proteinas">
                        <div class="total-item-label">Proteínas</div>
                        <div class="total-item-value" id="total-diario-proteinas">0g</div>
                        <div class="total-item-objetivo" id="objetivo-proteinas">${objetivos.proteinas}g</div>
                        <div class="progress-bar" id="progress-proteinas">
                            <div class="progress-fill" id="progress-fill-proteinas" style="width: 0%"></div>
                        </div>
                        <div class="progress-text" id="progress-text-proteinas">0%</div>
                    </div>
                    <div class="total-item" id="total-item-grasas">
                        <div class="total-item-label">Grasas</div>
                        <div class="total-item-value" id="total-diario-grasas">0g</div>
                        <div class="total-item-objetivo" id="objetivo-grasas">${objetivos.grasas}g</div>
                        <div class="progress-bar" id="progress-grasas">
                            <div class="progress-fill" id="progress-fill-grasas" style="width: 0%"></div>
                        </div>
                        <div class="progress-text" id="progress-text-grasas">0%</div>
                    </div>
                    <div class="total-item" id="total-item-hidratos">
                        <div class="total-item-label">Hidratos</div>
                        <div class="total-item-value" id="total-diario-hidratos">0g</div>
                        <div class="total-item-objetivo" id="objetivo-hidratos">${objetivos.carbohidratos}g</div>
                        <div class="progress-bar" id="progress-hidratos">
                            <div class="progress-fill" id="progress-fill-hidratos" style="width: 0%"></div>
                        </div>
                        <div class="progress-text" id="progress-text-hidratos">0%</div>
                    </div>
                </div>
                <div id="alerta-macros" style="margin-top: 15px; padding: 10px; border-radius: 8px; display: none;"></div>
            </div>
        `;
    }

    obtenerObjetivosNutricionales() {
        if (window.datosUsuario) {
            // Detectar si el día actual es de descanso
            const esDescanso = this.esDiaDescanso(this.diaActual);
            
            return {
                calorias: esDescanso ? (window.datosUsuario.caloriasDescanso || window.datosUsuario.calorias || 0) : (window.datosUsuario.caloriasEntreno || window.datosUsuario.calorias || 0),
                proteinas: esDescanso ? (window.datosUsuario.proteinasDescanso || window.datosUsuario.proteinas || 0) : (window.datosUsuario.proteinasEntreno || window.datosUsuario.proteinas || 0),
                grasas: esDescanso ? (window.datosUsuario.grasasDescanso || window.datosUsuario.grasas || 0) : (window.datosUsuario.grasasEntreno || window.datosUsuario.grasas || 0),
                carbohidratos: esDescanso ? (window.datosUsuario.carbsDescanso || window.datosUsuario.carbohidratos || 0) : (window.datosUsuario.carbsEntreno || window.datosUsuario.carbohidratos || 0)
            };
        }
        return { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 };
    }
    
    // Función helper para detectar si un día es de descanso
    esDiaDescanso(nombreDia) {
        // Si no hay datos de usuario o no hay días de entreno configurados, todos los días son de descanso por defecto
        if (!window.datosUsuario || !window.datosUsuario.diasEntreno || window.datosUsuario.diasEntreno.length === 0) {
            return true;
        }
        
        // Normalizar el nombre del día: quitar tildes para coincidir con los valores del formulario
        const normalizarDia = (dia) => {
            if (!dia) return '';
            
            const mapaNormalizado = {
                'Lunes': 'lunes',
                'Martes': 'martes',
                'Miércoles': 'miercoles',  // Normalizar a sin tilde
                'Miercoles': 'miercoles',  // Ya sin tilde
                'Jueves': 'jueves',
                'Viernes': 'viernes',
                'Sábado': 'sabado',        // Normalizar a sin tilde
                'Sabado': 'sabado',        // Ya sin tilde
                'Domingo': 'domingo'
            };
            
            // Primero intentar con el mapeo directo
            if (mapaNormalizado[dia]) {
                return mapaNormalizado[dia];
            }
            
            // Si no está en el mapeo, normalizar manualmente quitando tildes
            return dia.toLowerCase()
                .replace(/á/g, 'a')
                .replace(/é/g, 'e')
                .replace(/í/g, 'i')
                .replace(/ó/g, 'o')
                .replace(/ú/g, 'u');
        };
        
        const valorDia = normalizarDia(nombreDia);
        const diasEntreno = window.datosUsuario.diasEntreno || [];
        
        // Normalizar también los días en el array de días de entreno
        const diasEntrenoNormalizados = diasEntreno.map(d => normalizarDia(d));
        
        // Si el día NO está en la lista de días de entreno, entonces es día de descanso
        const esDescanso = !diasEntrenoNormalizados.includes(valorDia);
        
        // Debug: log para verificar el comportamiento
        console.log(`🔍 esDiaDescanso('${nombreDia}'):`, {
            valorDia,
            diasEntreno: diasEntreno,
            diasEntrenoNormalizados: diasEntrenoNormalizados,
            esDescanso
        });
        
        return esDescanso;
    }

    // Agregar una nueva fila vacía a una comida
    agregarFila(comida) {
        const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
        const tbody = document.getElementById(`tbody-${comidaId}`);
        // ID de fila robusto: incluye comida, timestamp y contador incremental
        const rowId = `row-${comidaId}-${Date.now()}-${(++this.rowSequence).toString(36)}`;

        const row = document.createElement('tr');
        row.id = rowId;
        row.classList.add('fila-vacia'); // Marcar como fila vacía inicialmente
        row.innerHTML = `
            <td>
                <div class="autocomplete-container">
                    <input 
                        type="text" 
                        class="input-alimento" 
                        placeholder="🔍 Buscar alimento... (ej: pollo, arroz, huevo)"
                        title="Escribe el nombre del alimento. Se mostrarán sugerencias automáticas mientras escribes."
                        data-row-id="${rowId}"
                        data-comida="${comida}"
                        autocomplete="off"
                        aria-label="Buscar alimento"
                        oninput="tablaEditable.buscarAlimento(this)"
                        onfocus="tablaEditable.manejarFocusBusqueda(this)"
                        onchange="tablaEditable.marcarFilaUsada('${rowId}')"
                        onkeydown="tablaEditable.manejarTeclado(event, this)"
                        onmouseenter="tablaEditable.manejarMouseEnterBusqueda(this)"
                    >
                    <div class="autocomplete-list autocomplete-list-hidden" id="autocomplete-${rowId}"></div>
                </div>
            </td>
            <td>
                <input 
                    type="number" 
                    class="input-gramos" 
                    placeholder="100"
                    title="Introduce la cantidad en gramos. Los valores nutricionales se calcularán automáticamente."
                    min="0"
                    step="1"
                    data-row-id="${rowId}"
                    data-comida="${comida}"
                    aria-label="Cantidad en gramos"
                    oninput="tablaEditable.calcularMacros('${rowId}', '${comida}')"
                    onchange="tablaEditable.marcarFilaUsada('${rowId}')"
                >
            </td>
            <td class="valor-calculado" id="cal-${rowId}">-</td>
            <td class="valor-calculado" id="prot-${rowId}">-</td>
            <td class="valor-calculado" id="gras-${rowId}">-</td>
            <td class="valor-calculado" id="hidr-${rowId}">-</td>
            <td>
                <button type="button" class="btn-delete-row" onclick="tablaEditable.eliminarFila('${rowId}', '${comida}')">
                    🗑️
                </button>
            </td>
        `;

        tbody.appendChild(row);
    }

    // Variable para rastrear si hay un dropdown abierto
    dropdownAbierto = false;

    // Manejar el evento focus para evitar activar otros campos cuando hay un dropdown abierto
    manejarFocusBusqueda(input) {
        // Si hay un dropdown abierto, no activar este campo
        if (this.dropdownAbierto) {
            // Verificar si el mouse está sobre un dropdown
            const mouseOverDropdown = document.querySelector('.autocomplete-list:not(.autocomplete-list-hidden)');
            if (mouseOverDropdown) {
                // Prevenir el focus si hay un dropdown visible
                input.blur();
                return;
            }
        }
        // Si no hay dropdown abierto, proceder normalmente
        this.buscarAlimento(input);
    }

    // Manejar el mouse enter para evitar activar el focus cuando se pasa sobre otros campos
    manejarMouseEnterBusqueda(input) {
        // Si hay un dropdown abierto, no activar este campo
        if (this.dropdownAbierto) {
            const mouseOverDropdown = document.querySelector('.autocomplete-list:not(.autocomplete-list-hidden)');
            if (mouseOverDropdown) {
                // Prevenir el focus
                return;
            }
        }
    }

    // Buscar alimentos con búsqueda inteligente mejorada
    buscarAlimento(input) {
        const query = input.value.toLowerCase().trim();
        const rowId = input.dataset.rowId;
        const autocompleteDiv = document.getElementById(`autocomplete-${rowId}`);

        if (!autocompleteDiv) return;

        // Limpiar cualquier contenido previo que pueda contener campos de búsqueda
        autocompleteDiv.innerHTML = '';

        // Ocultar todos los demás dropdowns primero
        document.querySelectorAll('.autocomplete-list').forEach(list => {
            if (list.id !== `autocomplete-${rowId}`) {
                list.classList.add('autocomplete-list-hidden');
                list.style.display = '';
                list.innerHTML = ''; // Limpiar contenido de otros dropdowns
            }
        });

        // Si el campo está vacío, ocultar el dropdown completamente
        if (query.length < 1) {
            autocompleteDiv.classList.add('autocomplete-list-hidden');
            autocompleteDiv.innerHTML = ''; // Limpiar contenido
            autocompleteDiv.style.display = '';
            this.dropdownAbierto = false;
            // Restaurar eventos de otros campos
            document.querySelectorAll('.input-alimento').forEach(input => {
                input.style.pointerEvents = '';
            });
            // Restaurar estilos de los contenedores
            document.querySelectorAll('.autocomplete-container').forEach(container => {
                container.style.zIndex = '';
                container.style.position = '';
            });
            return;
        }
        
        // Mostrar lista solo si hay query válida
        autocompleteDiv.classList.remove('autocomplete-list-hidden');
        // Asegurar que no quede un display:none residual por manejadores globales
        autocompleteDiv.style.display = '';
        
        // Marcar que hay un dropdown abierto
        this.dropdownAbierto = true;
        
        // Deshabilitar temporalmente otros campos de búsqueda para evitar que reciban eventos
        // También ocultar visualmente los campos de otras filas para evitar que se vean a través del dropdown
        document.querySelectorAll('.input-alimento').forEach(input => {
            if (input.dataset.rowId !== rowId) {
                input.style.pointerEvents = 'none';
                // Ocultar visualmente los campos de otras filas cuando hay un dropdown abierto
                const inputContainer = input.closest('.autocomplete-container');
                if (inputContainer) {
                    inputContainer.style.zIndex = '1';
                    inputContainer.style.position = 'relative';
                }
            }
        });
        
        // Asegurar que el dropdown tenga el z-index más alto
        autocompleteDiv.style.zIndex = '10000';
        autocompleteDiv.style.position = 'absolute';
        autocompleteDiv.style.background = 'white';
        
        // Agregar eventos al dropdown para rastrear cuando se cierra
        const restaurarPointerEvents = () => {
            document.querySelectorAll('.input-alimento').forEach(input => {
                input.style.pointerEvents = '';
                input.style.opacity = '';
                input.style.visibility = '';
            });
            // Restaurar estilos de los contenedores
            document.querySelectorAll('.autocomplete-container').forEach(container => {
                container.style.zIndex = '';
                container.style.position = '';
            });
            // Remover clases
            autocompleteDiv.classList.remove('dropdown-hover');
            document.body.classList.remove('dropdown-abierto');
            this.dropdownAbierto = false;
        };
        
        autocompleteDiv.addEventListener('mouseenter', () => {
            this.dropdownAbierto = true;
            // Agregar clase para indicar que el mouse está sobre el dropdown
            autocompleteDiv.classList.add('dropdown-hover');
            document.body.classList.add('dropdown-abierto');
            
            // Asegurar que los campos de otras filas permanezcan ocultos cuando el mouse está sobre el dropdown
            document.querySelectorAll('.input-alimento').forEach(input => {
                if (input.dataset.rowId !== rowId) {
                    input.style.pointerEvents = 'none';
                    input.style.opacity = '0';
                    input.style.visibility = 'hidden';
                    const inputContainer = input.closest('.autocomplete-container');
                    if (inputContainer) {
                        inputContainer.style.zIndex = '1';
                        inputContainer.style.position = 'relative';
                    }
                }
            });
            // Asegurar que el dropdown tenga el z-index más alto
            autocompleteDiv.style.zIndex = '10000';
            autocompleteDiv.style.position = 'absolute';
            autocompleteDiv.style.background = 'white';
        });
        
        autocompleteDiv.addEventListener('mouseleave', () => {
            // Remover clase cuando el mouse sale del dropdown
            autocompleteDiv.classList.remove('dropdown-hover');
            document.body.classList.remove('dropdown-abierto');
            
            // Solo marcar como cerrado si realmente está oculto
            setTimeout(() => {
                if (autocompleteDiv.classList.contains('autocomplete-list-hidden')) {
                    restaurarPointerEvents();
                }
            }, 100);
        });
        
        // Guardar la función para restaurar eventos cuando se cierre el dropdown
        autocompleteDiv._restaurarPointerEvents = restaurarPointerEvents;

        // Verificar si la base de datos está cargada
        if (!this.alimentos || this.alimentos.length === 0) {
            console.log('Intentando recargar base de datos...');
            if (!this.cargarBaseAlimentos()) {
                autocompleteDiv.innerHTML = '<div class="autocomplete-item" style="color: #ff0000;">⚠️ Error: Base de datos no disponible. Recarga la página.</div>';
                autocompleteDiv.classList.remove('autocomplete-list-hidden');
                autocompleteDiv.style.display = '';
                return;
            }
        }

        // Mostrar siempre resultados completos, incluso con 1 carácter

        // Búsqueda inteligente con scoring de relevancia
        const resultados = this.buscarConScoring(query);

        if (resultados.length === 0) {
            autocompleteDiv.innerHTML = `
                <div class="autocomplete-item autocomplete-sin-resultados">
                    <div>🔍 No se encontraron resultados para "<strong>${query}</strong>"</div>
                    <div class="autocomplete-sugerencia">Intenta con otra palabra o usa términos más generales</div>
                </div>
            `;
            autocompleteDiv.classList.remove('autocomplete-list-hidden');
            autocompleteDiv.style.display = '';
            return;
        }

        // Mostrar resultados ordenados por relevancia
        let html = '';
        resultados.forEach((alimento, index) => {
            const destacado = index === 0 ? '🎯' : '';
            
            // Asegurar que el alimento tenga todos los campos de base-datos-alimentos.js
            const alimentoParaPasar = {
                ALIMENTO: alimento.ALIMENTO || '',
                MACRONUTRIENTE_PRINCIPAL: alimento.MACRONUTRIENTE_PRINCIPAL || '',
                CLASIFICACIÓN: alimento.CLASIFICACIÓN || '',
                CALORÍAS: alimento.CALORÍAS || 0,
                PROTEÍNAS: alimento.PROTEÍNAS || 0,
                GRASAS: alimento.GRASAS || 0,
                HIDRATOS: alimento.HIDRATOS || 0,
                GRASAS_SATURADAS: alimento.GRASAS_SATURADAS || 0,
                AZÚCARES: alimento.AZÚCARES || 0,
                UNIDAD: alimento.UNIDAD || '',
                PESO_POR_UNIDAD: alimento.PESO_POR_UNIDAD || '',
                MARCA_REGISTRADA: alimento.MARCA_REGISTRADA || '',
                NOMBRE_DEL_PRODUCTO: alimento.NOMBRE_DEL_PRODUCTO || '',
                OTRAS_NOTAS: alimento.OTRAS_NOTAS || ''
            };
            
            html += `
                <div class="autocomplete-item ${index === 0 ? 'resultado-destacado' : ''}" 
                     onclick="tablaEditable.seleccionarAlimento('${rowId}', '${input.dataset.comida}', ${this.escaparJSON(alimentoParaPasar)})">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        ${destacado} <strong>${this.resaltarTexto(alimento.ALIMENTO, query)}</strong>
                    </div>
                    <div class="alimento-info">
                        ${alimento.MACRONUTRIENTE_PRINCIPAL || 'Sin categoría'} • 
                        ${alimento.CALORÍAS || 0}kcal | 
                        P:${alimento.PROTEÍNAS || 0}g | 
                        G:${alimento.GRASAS || 0}g | 
                        H:${alimento.HIDRATOS || 0}g (por 100g)
                    </div>
                </div>
            `;
        });

        autocompleteDiv.innerHTML = html;
        autocompleteDiv.classList.remove('autocomplete-list-hidden');
        autocompleteDiv.style.display = '';
        
        // Marcar que hay un dropdown abierto
        this.dropdownAbierto = true;
    }

    // Normalizar texto (quitar acentos, convertir a minúsculas)
    normalizarTexto(texto) {
        return texto
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
            .replace(/[^\w\s]/g, ''); // Quitar caracteres especiales
    }

    // Mapa de sinónimos y términos relacionados (expansivo)
    obtenerSinonimos(termino) {
        const terminoLower = termino.toLowerCase();
        const sinonimos = {
            // Proteínas - Aves
            'pollo': ['pollo', 'gallina', 'ave', 'pavo', 'pavita', 'pollo entero', 'pechuga', 'muslo'],
            'gallina': ['pollo', 'gallina', 'ave', 'corral'],
            'pavo': ['pavo', 'pavita', 'pechuga pavo'],
            'pechuga': ['pechuga', 'pechuga pollo', 'pechuga pavo'],
            'ave': ['pollo', 'gallina', 'ave', 'pavo', 'aves'],
            
            // Proteínas - Carnes Rojas
            'carne': ['carne', 'ternera', 'res', 'bovino', 'vaca', 'vacuno'],
            'ternera': ['carne', 'ternera', 'res', 'bovino'],
            'res': ['carne', 'ternera', 'res', 'bovino', 'vacuno'],
            'vacuno': ['carne', 'ternera', 'res', 'bovino', 'vacuno'],
            
            // Proteínas - Cerdo
            'cerdo': ['cerdo', 'puerco', 'cochino', 'marrano', 'chancho', 'porcino'],
            'puerco': ['cerdo', 'puerco', 'cochino', 'marrano'],
            
            // Proteínas - Pescado
            'pescado': ['pescado', 'pescado azul', 'pescado blanco', 'pez', 'marisco', 'pescados'],
            'salmon': ['salmón', 'salmon', 'salmones'],
            'salmón': ['salmón', 'salmon', 'salmones'],
            'atun': ['atún', 'atun', 'tunido', 'bonito', 'atunes'],
            'atún': ['atún', 'atun', 'tunido', 'bonito'],
            'merluza': ['merluza', 'merluzas', 'pescado blanco'],
            'pescadilla': ['pescadilla', 'pescadillas'],
            
            // Proteínas - Huevos
            'huevo': ['huevo', 'huevos', 'ovo', 'clara', 'yema'],
            'huevos': ['huevo', 'huevos', 'ovo'],
            
            // Lácteos
            'queso': ['queso', 'quesos', 'lacteo', 'lacteos', 'queso fresco', 'queso curado'],
            'leche': ['leche', 'lacteo', 'milk', 'lacteos', 'leche entera', 'leche desnatada'],
            'yogur': ['yogur', 'yogurt', 'yogures', 'yogurtes', 'yogur griego', 'yogur natural'],
            'yogurt': ['yogur', 'yogurt', 'yogures', 'yogurtes'],
            
            // Carbohidratos - Cereales
            'arroz': ['arroz', 'rice', 'arroz blanco', 'arroz integral', 'arroz basmati'],
            'pasta': ['pasta', 'fideos', 'espaguetis', 'macarrones', 'tallarines', 'spaghetti', 'macaroni'],
            'fideos': ['pasta', 'fideos', 'espaguetis', 'tallarines'],
            'espaguetis': ['pasta', 'fideos', 'espaguetis', 'spaghetti'],
            'pan': ['pan', 'pan integral', 'pan blanco', 'tostada', 'tostadas', 'pan de molde'],
            'tostada': ['pan', 'tostada', 'tostadas', 'pan tostado'],
            'avena': ['avena', 'oatmeal', 'oat', 'copos avena', 'avena integral'],
            'cereales': ['cereales', 'cereal', 'copos', 'flakes'],
            
            // Carbohidratos - Tubérculos
            'patata': ['patata', 'papa', 'patatas', 'papas', 'patata cocida', 'patata asada'],
            'patatas': ['patata', 'papa', 'patatas', 'papas'],
            'papa': ['patata', 'papa', 'patatas', 'papas'],
            
            // Legumbres
            'lentejas': ['lentejas', 'lenteja'],
            'garbanzos': ['garbanzos', 'garbanzo', 'chickpeas'],
            'judias': ['judías', 'judias', 'alubias', 'frijoles', 'porotos'],
            'judías': ['judías', 'judias', 'alubias', 'frijoles'],
            'alubias': ['judías', 'judias', 'alubias', 'frijoles'],
            'frijoles': ['judías', 'judias', 'alubias', 'frijoles'],
            
            // Frutas
            'manzana': ['manzana', 'manzanas', 'apple', 'manzana roja', 'manzana verde'],
            'platano': ['plátano', 'platano', 'banana', 'banano', 'cambur'],
            'plátano': ['plátano', 'platano', 'banana', 'banano'],
            'banana': ['plátano', 'platano', 'banana', 'banano'],
            'naranja': ['naranja', 'naranjas', 'orange'],
            'fresas': ['fresas', 'fresa', 'frutillas', 'strawberry'],
            'fresa': ['fresas', 'fresa', 'frutillas'],
            'fruta': ['fruta', 'frutas', 'fresca', 'frutas frescas'],
            
            // Verduras
            'verdura': ['verdura', 'verduras', 'hortaliza', 'vegetal', 'vegetales'],
            'ensalada': ['ensalada', 'ensaladas', 'lechuga', 'hojas verdes'],
            'lechuga': ['ensalada', 'ensaladas', 'lechuga', 'hojas verdes'],
            'brocoli': ['brócoli', 'brocoli', 'brocolis', 'brécol'],
            'brócoli': ['brócoli', 'brocoli', 'brocolis', 'brécol'],
            'tomate': ['tomate', 'tomates', 'tomate cherry'],
            'zanahoria': ['zanahoria', 'zanahorias', 'carrot'],
            'cebolla': ['cebolla', 'cebollas', 'onion'],
            'ajo': ['ajo', 'ajos', 'garlic'],
            'pimiento': ['pimiento', 'pimientos', 'pimiento rojo', 'pimiento verde'],
            'calabacin': ['calabacín', 'calabacin', 'zucchini', 'calabacines'],
            'calabacín': ['calabacín', 'calabacin', 'zucchini'],
            
            // Grasas y aceites
            'aceite': ['aceite', 'aceites', 'oliva', 'olivo', 'aceite de oliva', 'aceite oliva'],
            'oliva': ['aceite', 'aceites', 'oliva', 'olivo', 'aceite de oliva'],
            'aguacate': ['aguacate', 'aguacates', 'palta', 'avocado'],
            'mantequilla': ['mantequilla', 'manteca', 'butter'],
            
            // Frutos secos
            'nueces': ['nueces', 'nuez', 'walnut'],
            'almendras': ['almendras', 'almendra'],
            'cacahuetes': ['cacahuetes', 'cacahuete', 'maní', 'manies', 'peanut'],
            'maní': ['cacahuetes', 'cacahuete', 'maní', 'manies'],
            
            // Edulcorantes
            'miel': ['miel', 'honey', 'miel de abeja'],
            'azucar': ['azúcar', 'azucar', 'sugar', 'azucar blanco', 'azucar moreno'],
            'azúcar': ['azúcar', 'azucar', 'sugar'],
            
            // Condimentos
            'sal': ['sal', 'sodio', 'sal marina'],
            'pimienta': ['pimienta', 'pimienta negra'],
            
            // Categorías generales
            'proteina': ['proteína', 'proteina', 'protein', 'proteínas'],
            'proteína': ['proteína', 'proteina', 'protein'],
            'carbohidratos': ['carbohidratos', 'carbohidrato', 'hidratos', 'hidratos carbono'],
            'hidratos': ['carbohidratos', 'carbohidrato', 'hidratos', 'hidratos carbono'],
            'grasa': ['grasa', 'grasas', 'lipid', 'lipidos', 'lípidos'],
            'grasas': ['grasa', 'grasas', 'lipid', 'lipidos']
        };

        // Buscar sinónimos para el término (normalizado)
        const terminoNormalizado = this.normalizarTexto(terminoLower);
        
        // Buscar directamente
        for (const [key, values] of Object.entries(sinonimos)) {
            const keyNormalizado = this.normalizarTexto(key);
            if (keyNormalizado === terminoNormalizado) {
                return values;
            }
            // También buscar en los valores
            if (values.some(v => this.normalizarTexto(v) === terminoNormalizado)) {
                return values;
            }
        }

        return [termino]; // Si no hay sinónimos, retornar solo el término original
    }

    // Buscar un alimento por nombre exacto o similar
    buscarAlimentoPorNombre(nombreAlimento) {
        if (!nombreAlimento || !this.alimentos || this.alimentos.length === 0) {
            return null;
        }
        
        const nombreNormalizado = this.normalizarTexto(nombreAlimento.toLowerCase());
        
        // Primero buscar coincidencia exacta
        for (const alimento of this.alimentos) {
            const alimentoNombre = this.normalizarTexto((alimento.ALIMENTO || '').toLowerCase());
            if (alimentoNombre === nombreNormalizado) {
                return alimento;
            }
        }
        
        // Si no hay coincidencia exacta, buscar la mejor coincidencia usando buscarConScoring
        const resultados = this.buscarConScoring(nombreAlimento);
        if (resultados && resultados.length > 0) {
            // Verificar si el primer resultado es suficientemente similar
            const primerResultado = resultados[0];
            const primerNombre = this.normalizarTexto((primerResultado.ALIMENTO || '').toLowerCase());
            if (primerNombre.includes(nombreNormalizado) || nombreNormalizado.includes(primerNombre)) {
                return primerResultado;
            }
        }
        
        return null;
    }

    // Búsqueda inteligente mejorada con sinónimos, fonética y ranking avanzado
    buscarConScoring(query) {
        const queryNormalizado = this.normalizarTexto(query);
        const palabras = query.split(/\s+/).filter(p => p.length > 0);
        const palabrasNormalizadas = palabras.map(p => this.normalizarTexto(p));
        const resultados = [];
        
        // Expandir términos con sinónimos
        const terminosExpandidos = new Set();
        palabrasNormalizadas.forEach(palabra => {
            const sinonimos = this.obtenerSinonimos(palabra);
            sinonimos.forEach(s => terminosExpandidos.add(s));
        });

        this.alimentos.forEach((alimento, index) => {
            let score = 0;
            const nombre = (alimento.ALIMENTO || '').toLowerCase();
            const nombreNormalizado = this.normalizarTexto(nombre);
            const categoria = (alimento.MACRONUTRIENTE_PRINCIPAL || '').toLowerCase();
            const clasificacion = (alimento.CLASIFICACIÓN || '').toLowerCase();
            const marca = (alimento.MARCA_REGISTRADA || '').toLowerCase();
            const producto = (alimento.NOMBRE_DEL_PRODUCTO || '').toLowerCase();

            // Bonus por posición (alimentos comunes primero en la BD)
            const popularidad = Math.max(0, 1000 - index) / 100; // Menos popularidad = más índice
            score += popularidad;

            // Buscar en cada término expandido (incluyendo sinónimos)
            terminosExpandidos.forEach(termino => {
                // Coincidencia exacta al inicio del nombre (máxima relevancia)
                if (nombreNormalizado.startsWith(termino)) {
                    score += 150;
                }
                // Coincidencia exacta en cualquier parte del nombre
                else if (nombreNormalizado.includes(termino)) {
                    score += 75;
                }
                // Coincidencia en palabras del nombre (split por espacios)
                else {
                    const palabrasNombre = nombreNormalizado.split(/\s+/);
                    palabrasNombre.forEach(palabraNombre => {
                        if (palabraNombre.startsWith(termino)) {
                            score += 60;
                        } else if (palabraNombre.includes(termino)) {
                            score += 40;
                        }
                        // Coincidencia parcial (70% de similitud)
                        if (this.calcularSimilitud(palabraNombre, termino) > 0.7) {
                            score += 30;
                        }
                    });
                }

                // Coincidencia en categoría
                if (categoria.includes(termino)) {
                    score += 35;
                }
                // Coincidencia en clasificación
                if (clasificacion.includes(termino)) {
                    score += 25;
                }
                // Coincidencia en marca o producto
                if (marca.includes(termino) || producto.includes(termino)) {
                    score += 20;
                }
            });

            // Bonus especial: coincidencia exacta de todas las palabras
            const todasPalabrasEnNombre = palabrasNormalizadas.every(p => 
                nombreNormalizado.includes(p)
            );
            if (todasPalabrasEnNombre && palabrasNormalizadas.length > 1) {
                score += 50;
            }

            // Bonus: coincidencia de orden (si las palabras están en orden)
            if (palabrasNormalizadas.length > 1) {
                let ordenCorrecto = true;
                let ultimoIndice = -1;
                for (const palabra of palabrasNormalizadas) {
                    const indice = nombreNormalizado.indexOf(palabra);
                    if (indice === -1 || indice < ultimoIndice) {
                        ordenCorrecto = false;
                        break;
                    }
                    ultimoIndice = indice;
                }
                if (ordenCorrecto) {
                    score += 40;
                }
            }

            // Bonus: nombre completo coincide con query
            if (nombreNormalizado === queryNormalizado) {
                score += 200;
            }

            // Penalización por nombres muy largos (priorizar nombres más cortos y directos)
            if (nombre.length > 50) {
                score -= 10;
            }

            if (score > 0) {
                resultados.push({ alimento, score, nombre });
            }
        });

        // Ordenar por score descendente y tomar los mejores
        return resultados
            .sort((a, b) => {
                // Si los scores son muy cercanos (diferencia < 5), priorizar por popularidad
                if (Math.abs(b.score - a.score) < 5) {
                    return a.alimento.ALIMENTO.localeCompare(b.alimento.ALIMENTO);
                }
                return b.score - a.score;
            })
            .slice(0, 20) // Mostrar hasta 20 resultados para más opciones
            .map(item => item.alimento);
    }

    // Calcular similitud entre dos palabras (Levenshtein simplificado)
    calcularSimilitud(palabra1, palabra2) {
        if (palabra1 === palabra2) return 1.0;
        if (palabra1.length === 0 || palabra2.length === 0) return 0.0;
        
        const len1 = palabra1.length;
        const len2 = palabra2.length;
        const maxLen = Math.max(len1, len2);
        
        // Calcular distancia de Levenshtein simplificada
        let distancia = 0;
        const minLen = Math.min(len1, len2);
        
        for (let i = 0; i < minLen; i++) {
            if (palabra1[i] !== palabra2[i]) {
                distancia++;
            }
        }
        
        distancia += Math.abs(len1 - len2);
        
        // Convertir distancia a similitud (0-1)
        return 1 - (distancia / maxLen);
    }

    // Resaltar el texto coincidente en los resultados
    resaltarTexto(texto, query) {
        const palabras = query.split(/\s+/).filter(p => p.length > 0);
        let resultado = texto;

        palabras.forEach(palabra => {
            const regex = new RegExp(`(${palabra})`, 'gi');
            resultado = resultado.replace(regex, '<mark style="background: #ffeb3b; padding: 2px 4px; border-radius: 3px;">$1</mark>');
        });

        return resultado;
    }

    // Mostrar sugerencias rápidas cuando el usuario empieza a escribir
    mostrarSugerenciasRapidas(autocompleteDiv, rowId, input) {
        const query = input.value.toLowerCase().trim();
        const queryNormalizado = this.normalizarTexto(query);
        
        // Sugerencias organizadas por categorías
        const sugerenciasPorCategoria = {
            'p': ['pollo', 'pechuga pollo', 'pavo', 'pescado', 'patata', 'pan', 'pasta', 'plátano', 'proteína'],
            'a': ['arroz', 'avena', 'atún', 'aguacate', 'aceite', 'azúcar', 'ajo', 'almendras'],
            'h': ['huevo', 'huevos', 'hidratos'],
            'm': ['manzana', 'miel', 'mantequilla', 'merluza', 'merluza', 'muslo pollo'],
            't': ['tomate', 'ternera', 'tostada', 'tallarines'],
            'l': ['leche', 'lentejas', 'lechuga'],
            'y': ['yogur', 'yogur griego'],
            'q': ['queso', 'queso fresco', 'queso curado'],
            's': ['salmón', 'sal', 'salmon'],
            'n': ['naranja', 'nueces'],
            'f': ['fresas', 'fruta', 'frijoles', 'fideos'],
            'e': ['ensalada', 'espaguetis', 'espagueti'],
            'c': ['carne', 'cereales', 'calabacín', 'cacahuetes'],
            'b': ['brócoli', 'banana', 'bonito'],
            'g': ['garbanzos', 'grasas', 'gallo']
        };

        let sugerencias = [];
        
        // Buscar por primera letra
        if (query.length === 1 && sugerenciasPorCategoria[query]) {
            sugerencias = sugerenciasPorCategoria[query].filter(s => 
                this.normalizarTexto(s).startsWith(queryNormalizado)
            );
        } else {
            // Búsqueda general en todas las sugerencias
            const todasSugerencias = Object.values(sugerenciasPorCategoria).flat();
            sugerencias = todasSugerencias.filter(s => 
                this.normalizarTexto(s).startsWith(queryNormalizado)
            );
        }
        
        if (sugerencias.length === 0) {
            autocompleteDiv.classList.add('autocomplete-list-hidden');
            return;
        }

        let html = '<div class="autocomplete-header">💡 Sugerencias rápidas:</div>';
        sugerencias.slice(0, 6).forEach(sugerencia => {
            html += `
                <div class="autocomplete-item autocomplete-sugerencia-rapida" onclick="document.querySelector('[data-row-id=\\'${rowId}\\']').value='${sugerencia}'; tablaEditable.buscarAlimento(document.querySelector('[data-row-id=\\'${rowId}\\']'))">
                    ${sugerencia}
                </div>
            `;
        });

        autocompleteDiv.innerHTML = html;
        autocompleteDiv.classList.remove('autocomplete-list-hidden');
    }

    // Escapar JSON para pasar como parámetro en onclick
    escaparJSON(obj) {
        return JSON.stringify(obj).replace(/"/g, '&quot;');
    }

    // Seleccionar un alimento del autocompletado
    seleccionarAlimento(rowId, comida, alimentoData) {
        // Si se está editando un plan automático, resetear estadísticas primero
        this.resetearEstadisticasPlanAutomatico();
        
        const row = document.getElementById(rowId);
        if (!row) {
            console.error('Fila no encontrada:', rowId);
            return;
        }

        const input = row.querySelector('.input-alimento');
        const inputGramos = row.querySelector('.input-gramos');
        const autocompleteDiv = document.getElementById(`autocomplete-${rowId}`);

        if (!input || !inputGramos) {
            console.error('Inputs no encontrados en la fila:', rowId);
            return;
        }

        // Verificar que el alimento tenga la estructura correcta de base-datos-alimentos.js
        if (!alimentoData.ALIMENTO) {
            console.error('Estructura de alimento incorrecta:', alimentoData);
            return;
        }

        // Establecer el nombre del alimento
        input.value = alimentoData.ALIMENTO;
        
        // Guardar el objeto completo del alimento en el dataset
        // Asegurar que tenga todos los campos necesarios de base-datos-alimentos.js
        const alimentoCompleto = {
            ALIMENTO: alimentoData.ALIMENTO || '',
            MACRONUTRIENTE_PRINCIPAL: alimentoData.MACRONUTRIENTE_PRINCIPAL || '',
            CLASIFICACIÓN: alimentoData.CLASIFICACIÓN || '',
            CALORÍAS: alimentoData.CALORÍAS || 0,
            PROTEÍNAS: alimentoData.PROTEÍNAS || 0,
            GRASAS: alimentoData.GRASAS || 0,
            HIDRATOS: alimentoData.HIDRATOS || 0,
            GRASAS_SATURADAS: alimentoData.GRASAS_SATURADAS || 0,
            AZÚCARES: alimentoData.AZÚCARES || 0,
            UNIDAD: alimentoData.UNIDAD || '',
            PESO_POR_UNIDAD: alimentoData.PESO_POR_UNIDAD || '',
            MARCA_REGISTRADA: alimentoData.MARCA_REGISTRADA || '',
            NOMBRE_DEL_PRODUCTO: alimentoData.NOMBRE_DEL_PRODUCTO || '',
            OTRAS_NOTAS: alimentoData.OTRAS_NOTAS || ''
        };
        
        input.dataset.alimento = JSON.stringify(alimentoCompleto);

        // Ocultar lista de autocompletado
        if (autocompleteDiv) {
            autocompleteDiv.classList.add('autocomplete-list-hidden');
            autocompleteDiv.style.display = '';
            // Restaurar eventos de otros campos
            if (autocompleteDiv._restaurarPointerEvents) {
                autocompleteDiv._restaurarPointerEvents();
            } else {
                document.querySelectorAll('.input-alimento').forEach(input => {
                    input.style.pointerEvents = '';
                });
                // Restaurar estilos de los contenedores
                document.querySelectorAll('.autocomplete-container').forEach(container => {
                    container.style.zIndex = '';
                    container.style.position = '';
                });
            }
            this.dropdownAbierto = false;
        }

        // Marcar fila como usada
        this.marcarFilaUsada(rowId);

        // Si hay gramos ingresados, calcular macros automáticamente
        const gramosActuales = parseFloat(inputGramos.value) || 0;
        if (gramosActuales > 0) {
            // Calcular inmediatamente si ya hay gramos
            this.calcularMacros(rowId, comida);
        } else {
            // Si no hay gramos, sugerir 100g como valor por defecto
            inputGramos.value = '100';
            inputGramos.placeholder = '100';
            // Calcular con 100g automáticamente
            this.calcularMacros(rowId, comida);
        }
    }

    // Marcar una fila como usada (quitar estilo de vacía)
    marcarFilaUsada(rowId) {
        const row = document.getElementById(rowId);
        if (row) {
            row.classList.remove('fila-vacia');
        }
    }

    // Manejar navegación con teclado
    manejarTeclado(event, input) {
        const rowId = input.dataset.rowId;
        const autocompleteDiv = document.getElementById(`autocomplete-${rowId}`);
        const items = autocompleteDiv ? autocompleteDiv.querySelectorAll('.autocomplete-item') : [];

        // Enter: seleccionar el primer resultado
        if (event.key === 'Enter' && items.length > 0) {
            event.preventDefault();
            const primerItem = items[0];
            if (primerItem.onclick) {
                primerItem.click();
            } else {
                // Si es sugerencia rápida, usar el onclick del div
                const onclickAttr = primerItem.getAttribute('onclick');
                if (onclickAttr) {
                    eval(onclickAttr);
                }
            }
        }

        // Escape: cerrar lista
        if (event.key === 'Escape') {
            if (autocompleteDiv) {
                autocompleteDiv.classList.add('autocomplete-list-hidden');
            }
        }

        // Flechas arriba/abajo: navegar entre resultados
        if (event.key === 'ArrowDown' && items.length > 0) {
            event.preventDefault();
            const current = autocompleteDiv.querySelector('.autocomplete-item.seleccionado');
            let siguiente;

            if (current) {
                current.classList.remove('seleccionado');
                siguiente = current.nextElementSibling;
                if (!siguiente) siguiente = items[0];
            } else {
                siguiente = items[0];
            }

            if (siguiente) {
                siguiente.classList.add('seleccionado');
                siguiente.scrollIntoView({ block: 'nearest' });
            }
        }

        if (event.key === 'ArrowUp' && items.length > 0) {
            event.preventDefault();
            const current = autocompleteDiv.querySelector('.autocomplete-item.seleccionado');
            let anterior;

            if (current) {
                current.classList.remove('seleccionado');
                anterior = current.previousElementSibling;
                if (!anterior) anterior = items[items.length - 1];
            } else {
                anterior = items[items.length - 1];
            }

            if (anterior) {
                anterior.classList.add('seleccionado');
                anterior.scrollIntoView({ block: 'nearest' });
            }
        }
    }

    // Resetear estadísticas del plan cuando se edita manualmente un plan automático
    resetearEstadisticasPlanAutomatico() {
        if (this.planGeneradoAutomatico && this.planSemana) {
            console.log('🔄 Reseteando estadísticas del plan automático al editar manualmente...');
            
            // Resetear todos los días del planSemana a valores vacíos
            Object.keys(this.planSemana).forEach(dia => {
                this.planSemana[dia] = {
                    Desayuno: { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
                    'Media Mañana': { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
                    Comida: { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
                    Merienda: { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
                    Cena: { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 }
                };
            });
            
            // Marcar que ya se resetearon para no hacerlo de nuevo
            this.planGeneradoAutomatico = false;
            
            // Actualizar estadísticas visuales
            if (typeof window.mostrarEstadisticasPlanManual === 'function') {
                setTimeout(() => {
                    window.mostrarEstadisticasPlanManual();
                }, 300);
            }
        }
    }

    // Calcular macros basado en gramos (valores de base-datos-alimentos.js)
    calcularMacros(rowId, comida) {
        // Si se está editando un plan automático, resetear estadísticas primero
        this.resetearEstadisticasPlanAutomatico();
        
        const row = document.getElementById(rowId);
        if (!row) {
            console.error('Fila no encontrada para calcular macros:', rowId);
            return;
        }

        const inputAlimento = row.querySelector('.input-alimento');
        const inputGramos = row.querySelector('.input-gramos');

        if (!inputAlimento || !inputGramos) {
            console.error('Inputs no encontrados para calcular macros:', rowId);
            return;
        }

        const gramos = parseFloat(inputGramos.value) || 0;
        const alimentoData = inputAlimento.dataset.alimento;

        // Si no hay alimento seleccionado o gramos = 0, resetear valores
        if (!alimentoData || gramos === 0 || gramos < 0) {
            document.getElementById(`cal-${rowId}`).textContent = '-';
            document.getElementById(`prot-${rowId}`).textContent = '-';
            document.getElementById(`gras-${rowId}`).textContent = '-';
            document.getElementById(`hidr-${rowId}`).textContent = '-';
            this.actualizarTotales(comida);
            this.actualizarTotalesDiarios();
            return;
        }

        try {
            const alimento = JSON.parse(alimentoData);
            
            // Verificar que el alimento tenga la estructura correcta
            if (!alimento.ALIMENTO) {
                console.error('Estructura de alimento inválida:', alimento);
                return;
            }

            // Los valores en base-datos-alimentos.js son por 100g
            const factor = gramos / 100;

            // Calcular valores nutricionales (usando los campos de base-datos-alimentos.js)
            const calorias = Math.round((alimento.CALORÍAS || 0) * factor);
            const proteinas = parseFloat((alimento.PROTEÍNAS || 0) * factor).toFixed(1);
            const grasas = parseFloat((alimento.GRASAS || 0) * factor).toFixed(1);
            const hidratos = parseFloat((alimento.HIDRATOS || 0) * factor).toFixed(1);

            // Actualizar los valores en la tabla
            const calElem = document.getElementById(`cal-${rowId}`);
            const protElem = document.getElementById(`prot-${rowId}`);
            const grasElem = document.getElementById(`gras-${rowId}`);
            const hidrElem = document.getElementById(`hidr-${rowId}`);

            if (calElem) calElem.textContent = calorias;
            if (protElem) protElem.textContent = proteinas;
            if (grasElem) grasElem.textContent = grasas;
            if (hidrElem) hidrElem.textContent = hidratos;

            // Actualizar totales
            this.actualizarTotales(comida);
            this.actualizarTotalesDiarios();

        } catch (e) {
            console.error('Error al calcular macros:', e);
            console.error('Datos del alimento:', alimentoData);
            
            // Resetear valores en caso de error
            document.getElementById(`cal-${rowId}`).textContent = '-';
            document.getElementById(`prot-${rowId}`).textContent = '-';
            document.getElementById(`gras-${rowId}`).textContent = '-';
            document.getElementById(`hidr-${rowId}`).textContent = '-';
        }
    }

    // Actualizar totales de una comida y totales diarios
    actualizarTotales(comida) {
        const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
        const tbody = document.getElementById(`tbody-${comidaId}`);
        const filas = tbody.querySelectorAll('tr');

        let totalCal = 0, totalProt = 0, totalGras = 0, totalHidr = 0;

        filas.forEach(fila => {
            const rowId = fila.id;
            totalCal += parseFloat(document.getElementById(`cal-${rowId}`).textContent) || 0;
            totalProt += parseFloat(document.getElementById(`prot-${rowId}`).textContent) || 0;
            totalGras += parseFloat(document.getElementById(`gras-${rowId}`).textContent) || 0;
            totalHidr += parseFloat(document.getElementById(`hidr-${rowId}`).textContent) || 0;
        });

        // Actualizar totales de la comida
        document.getElementById(`total-cal-${comidaId}`).textContent = Math.round(totalCal);
        document.getElementById(`total-prot-${comidaId}`).textContent = totalProt.toFixed(1);
        document.getElementById(`total-gras-${comidaId}`).textContent = totalGras.toFixed(1);
        document.getElementById(`total-hidr-${comidaId}`).textContent = totalHidr.toFixed(1);

        // Actualizar barras de progreso de esta comida
        this.actualizarProgresoComida(comidaId, totalCal, totalProt, totalGras, totalHidr);

        // Actualizar totales diarios
        this.actualizarTotalesDiarios();
    }

    actualizarProgresoComida(comidaId, calorias, proteinas, grasas, carbohidratos) {
        const objetivos = this.obtenerObjetivosNutricionales();
        
        // Calcular porcentaje de consumo diario aproximado (dividir por 5 comidas)
        const objetivoCal = objetivos.calorias / 5;
        const objetivoProt = objetivos.proteinas / 5;
        const objetivoGras = objetivos.grasas / 5;
        const objetivoCarb = objetivos.carbohidratos / 5;
        
        // Actualizar cada barra
        this.actualizarMiniProgreso(`mini-progress-cal-${comidaId}`, `mini-fill-cal-${comidaId}`, calorias, objetivoCal);
        this.actualizarMiniProgreso(`mini-progress-prot-${comidaId}`, `mini-fill-prot-${comidaId}`, proteinas, objetivoProt);
        this.actualizarMiniProgreso(`mini-progress-gras-${comidaId}`, `mini-fill-gras-${comidaId}`, grasas, objetivoGras);
        this.actualizarMiniProgreso(`mini-progress-hidr-${comidaId}`, `mini-fill-hidr-${comidaId}`, carbohidratos, objetivoCarb);
    }

    actualizarMiniProgreso(textId, fillId, actual, objetivo) {
        const textElem = document.getElementById(textId);
        const fillElem = document.getElementById(fillId);
        
        if (!textElem || !fillElem || !objetivo) return;
        
        const porcentaje = objetivo > 0 ? Math.min((actual / objetivo) * 100, 150) : 0;
        
        // Actualizar texto
        if (textId.includes('cal')) {
            textElem.textContent = Math.round(actual);
        } else {
            textElem.textContent = actual.toFixed(1);
        }
        
        // Actualizar barra
        fillElem.style.width = porcentaje + '%';
        
        // Colorear según el progreso
        if (porcentaje < 70) {
            fillElem.style.background = 'linear-gradient(90deg, #ffc107, #ff9800)';
        } else if (porcentaje >= 70 && porcentaje <= 130) {
            fillElem.style.background = 'linear-gradient(90deg, #28a745, #20c997)';
        } else {
            fillElem.style.background = 'linear-gradient(90deg, #dc3545, #c82333)';
        }
    }

    // Actualizar totales diarios (suma de todas las comidas)
    actualizarTotalesDiarios() {
        let totalCal = 0, totalProt = 0, totalGras = 0, totalHidr = 0;

        this.comidas.forEach(comida => {
            const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
            totalCal += parseFloat(document.getElementById(`total-cal-${comidaId}`).textContent) || 0;
            totalProt += parseFloat(document.getElementById(`total-prot-${comidaId}`).textContent) || 0;
            totalGras += parseFloat(document.getElementById(`total-gras-${comidaId}`).textContent) || 0;
            totalHidr += parseFloat(document.getElementById(`total-hidr-${comidaId}`).textContent) || 0;
        });

        document.getElementById('total-diario-calorias').textContent = Math.round(totalCal);
        document.getElementById('total-diario-proteinas').textContent = totalProt.toFixed(1) + 'g';
        document.getElementById('total-diario-grasas').textContent = totalGras.toFixed(1) + 'g';
        document.getElementById('total-diario-hidratos').textContent = totalHidr.toFixed(1) + 'g';

        // Actualizar barras de progreso y alertas
        this.actualizarProgresoMacros(totalCal, totalProt, totalGras, totalHidr);
        
        // Actualizar también la tabla principal de macronutrientes si existe
        if (typeof window.actualizarConsumidoEnTabla === 'function') {
            window.actualizarConsumidoEnTabla();
        }
    }

    actualizarProgresoMacros(calorias, proteinas, grasas, carbohidratos) {
        const objetivos = this.obtenerObjetivosNutricionales();
        
        // Actualizar cada macro
        this.actualizarProgresoIndividual('calorias', calorias, objetivos.calorias, 1);
        this.actualizarProgresoIndividual('proteinas', proteinas, objetivos.proteinas, 1);
        this.actualizarProgresoIndividual('grasas', grasas, objetivos.grasas, 1);
        this.actualizarProgresoIndividual('hidratos', carbohidratos, objetivos.carbohidratos, 1);

        // Generar alertas
        this.generarAlertasMacros(calorias, proteinas, grasas, carbohidratos, objetivos);
    }

    actualizarProgresoIndividual(macro, actual, objetivo, factor = 1) {
        const progressBar = document.getElementById(`progress-${macro}`);
        const progressFill = document.getElementById(`progress-fill-${macro}`);
        const progressText = document.getElementById(`progress-text-${macro}`);
        const totalItem = document.getElementById(`total-item-${macro}`);
        
        if (!progressBar || !objetivo) return;

        const porcentaje = objetivo > 0 ? Math.min((actual / objetivo) * 100, 150) : 0;
        const diferencia = actual - objetivo;
        
        // Actualizar barra y texto
        progressFill.style.width = porcentaje + '%';
        progressText.textContent = porcentaje.toFixed(0) + '%';
        
        // Colorear según el progreso
        if (porcentaje < 90) {
            // Faltante (amarillo)
            progressFill.style.background = 'linear-gradient(90deg, #ffc107, #ff9800)';
            totalItem.style.border = '2px solid #ffc107';
        } else if (porcentaje >= 90 && porcentaje <= 110) {
            // Óptimo (verde)
            progressFill.style.background = 'linear-gradient(90deg, #28a745, #20c997)';
            totalItem.style.border = '2px solid #28a745';
        } else {
            // Excedente (rojo)
            progressFill.style.background = 'linear-gradient(90deg, #dc3545, #c82333)';
            totalItem.style.border = '2px solid #dc3545';
        }
    }

    generarAlertasMacros(calorias, proteinas, grasas, carbohidratos, objetivos) {
        const alertaDiv = document.getElementById('alerta-macros');
        if (!alertaDiv) return;

        const alertas = [];
        
        // Calorías
        if (calorias < objetivos.calorias * 0.9) {
            const falta = Math.round(objetivos.calorias - calorias);
            alertas.push(`⚠️ Faltan ${falta} kcal (${((falta/objetivos.calorias)*100).toFixed(0)}%)`);
        } else if (calorias > objetivos.calorias * 1.15) {
            const sobra = Math.round(calorias - objetivos.calorias);
            alertas.push(`🔥 Exceso de ${sobra} kcal (${((sobra/objetivos.calorias)*100).toFixed(0)}%)`);
        }

        // Proteínas
        if (proteinas < objetivos.proteinas * 0.8 && objetivos.proteinas > 0) {
            const falta = (objetivos.proteinas - proteinas).toFixed(1);
            alertas.push(`💪 Faltan ${falta}g de proteínas`);
        }

        // Grasas
        if (grasas < objetivos.grasas * 0.7 && objetivos.grasas > 0) {
            const falta = (objetivos.grasas - grasas).toFixed(1);
            alertas.push(`🥑 Faltan ${falta}g de grasas saludables`);
        }

        // Carbohidratos
        if (carbohidratos < objetivos.carbohidratos * 0.8 && objetivos.carbohidratos > 0) {
            const falta = (objetivos.carbohidratos - carbohidratos).toFixed(1);
            alertas.push(`🍚 Faltan ${falta}g de carbohidratos`);
        }

        // Mostrar alertas
        if (alertas.length > 0) {
            alertaDiv.innerHTML = `
                <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px;">
                    <strong style="color: #856404;">📊 Recomendaciones:</strong>
                    <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #856404;">
                        ${alertas.map(alerta => `<li>${alerta}</li>`).join('')}
                    </ul>
                </div>
            `;
            alertaDiv.style.display = 'block';
        } else {
            alertaDiv.innerHTML = `
                <div style="background: #d4edda; border-left: 4px solid #28a745; padding: 12px; color: #155724;">
                    ✅ <strong>Objetivos nutricionales en rango óptimo</strong>
                </div>
            `;
            alertaDiv.style.display = 'block';
        }
    }

    // Eliminar una fila
    eliminarFila(rowId, comida) {
        // Si se está editando un plan automático, resetear estadísticas primero
        this.resetearEstadisticasPlanAutomatico();
        
        const row = document.getElementById(rowId);
        if (row) {
            row.remove();
            this.actualizarTotales(comida);
        }
    }

    // Obtener datos del plan para guardar/exportar
    obtenerDatos() {
        const datos = {};

        this.comidas.forEach(comida => {
            const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
            const tbody = document.getElementById(`tbody-${comidaId}`);
            const filas = tbody.querySelectorAll('tr');

            datos[comida] = [];

            filas.forEach(fila => {
                const rowId = fila.id;
                const inputAlimento = fila.querySelector('.input-alimento');
                const inputGramos = fila.querySelector('.input-gramos');

                if (inputAlimento.value && inputGramos.value) {
                    datos[comida].push({
                        alimento: inputAlimento.value,
                        gramos: parseFloat(inputGramos.value),
                        calorias: parseFloat(document.getElementById(`cal-${rowId}`).textContent) || 0,
                        proteinas: parseFloat(document.getElementById(`prot-${rowId}`).textContent) || 0,
                        grasas: parseFloat(document.getElementById(`gras-${rowId}`).textContent) || 0,
                        hidratos: parseFloat(document.getElementById(`hidr-${rowId}`).textContent) || 0
                    });
                }
            });
        });

        return datos;
    }

    // Cargar datos en la tabla (para edición)
    cargarDatos(datos) {
        // Limpiar cuerpos
        this.comidas.forEach(comida => {
            const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
            const tbody = document.getElementById(`tbody-${comidaId}`);
            tbody.innerHTML = '';
        });

        // Rellenar
        this.comidas.forEach(comida => {
            const lista = (datos && datos[comida]) ? datos[comida] : [];
            if (lista.length === 0) {
                // Tres filas vacías si no hay datos
                for (let i = 0; i < 3; i++) this.agregarFila(comida);
                // Resetear totales de esta comida a 0
                const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
                const totalCalElem = document.getElementById(`total-cal-${comidaId}`);
                const totalProtElem = document.getElementById(`total-prot-${comidaId}`);
                const totalGrasElem = document.getElementById(`total-gras-${comidaId}`);
                const totalHidrElem = document.getElementById(`total-hidr-${comidaId}`);
                if (totalCalElem) totalCalElem.textContent = '0';
                if (totalProtElem) totalProtElem.textContent = '0.0';
                if (totalGrasElem) totalGrasElem.textContent = '0.0';
                if (totalHidrElem) totalHidrElem.textContent = '0.0';
                // Resetear barras de progreso de esta comida
                this.actualizarProgresoComida(comidaId, 0, 0, 0, 0);
            } else {
                lista.forEach(item => {
                    this.agregarFila(comida);
                    const comidaId = comida.toLowerCase().replace(/\s+/g, '-');
                    const tbody = document.getElementById(`tbody-${comidaId}`);
                    const fila = tbody.lastElementChild;
                    const rowId = fila.id;
                    const inputAlimento = fila.querySelector('.input-alimento');
                    const inputGramos = fila.querySelector('.input-gramos');
                    inputAlimento.value = item.alimento || '';
                    inputGramos.value = item.gramos != null ? String(item.gramos) : '';
                    
                    // Intentar buscar el alimento en la base de datos
                    const alimentoEncontrado = this.buscarAlimentoPorNombre(item.alimento);
                    
                    if (alimentoEncontrado) {
                        // Si el alimento está en la BD, usar seleccionarAlimento para configurarlo correctamente
                        this.seleccionarAlimento(rowId, comida, alimentoEncontrado);
                    } else if (item.calorias !== undefined || item.proteinas !== undefined || item.grasas !== undefined || item.hidratos !== undefined) {
                        // Si el alimento no está en la BD pero tenemos valores guardados, usarlos directamente
                        const calElem = document.getElementById(`cal-${rowId}`);
                        const protElem = document.getElementById(`prot-${rowId}`);
                        const grasElem = document.getElementById(`gras-${rowId}`);
                        const hidrElem = document.getElementById(`hidr-${rowId}`);
                        
                        if (calElem) calElem.textContent = item.calorias || 0;
                        if (protElem) protElem.textContent = item.proteinas ? item.proteinas.toFixed(1) : '0.0';
                        if (grasElem) grasElem.textContent = item.grasas ? item.grasas.toFixed(1) : '0.0';
                        if (hidrElem) hidrElem.textContent = item.hidratos ? item.hidratos.toFixed(1) : '0.0';
                        
                        // Marcar fila como usada
                        this.marcarFilaUsada(rowId);
                    } else {
                        // Si no hay valores guardados, intentar calcular
                        this.calcularMacros(rowId, comida);
                    }
                });
            }
        });
        this.actualizarTotalesDiarios();
    }

    // Cambiar de día guardando el actual
    cambiarDia(nuevoDia) {
        // Guardar lo que hay en pantalla en el día actual
        this.planSemana[this.diaActual] = this.obtenerDatos();
        this.diaActual = nuevoDia;
        const datos = this.planSemana[this.diaActual] || null;
        this.cargarDatos(datos);
        
        // Actualizar estilos visuales y objetivos según el tipo de día
        this.actualizarEstilosDia();
        this.actualizarTotalesDiarios();
        
        // Actualizar panel de estadísticas después de cambiar de día
        if (typeof window.mostrarEstadisticasPlanManual === 'function') {
            setTimeout(() => {
                window.mostrarEstadisticasPlanManual();
            }, 300);
        }
    }
    
         // Actualizar estilos visuales del contenedor según tipo de día
     actualizarEstilosDia() {
         const esDescanso = this.esDiaDescanso(this.diaActual);
         const contenedor = document.querySelector('.tabla-editable-container');
         const badgeDia = document.getElementById('badge-dia-actual');
         const totalesDiv = document.querySelector('.totales-diarios');
         
         if (contenedor) {
             // Remover clases anteriores
             contenedor.classList.remove('dia-descanso', 'dia-entreno');
             // Agregar clase según tipo de día
             if (esDescanso) {
                 contenedor.classList.add('dia-descanso');
             } else {
                 contenedor.classList.add('dia-entreno');
             }
         }
         
         // Actualizar badge visual del selector de día
         if (badgeDia) {
             if (esDescanso) {
                 badgeDia.innerHTML = '<span class="badge-descanso">😴 DESCANSO</span>';
             } else {
                 badgeDia.innerHTML = '<span class="badge-entreno">💪 ENTRENO</span>';
             }
         }
         
         // Actualizar estilos de totales
         if (totalesDiv) {
             totalesDiv.classList.remove('totales-descanso', 'totales-entreno');
             if (esDescanso) {
                 totalesDiv.classList.add('totales-descanso');
             } else {
                 totalesDiv.classList.add('totales-entreno');
             }
             
             // Actualizar badge en el título de "Totales Diarios vs Objetivos"
             const h3Totales = totalesDiv.querySelector('h3');
             if (h3Totales) {
                 const nuevoBadge = esDescanso 
                     ? '<span class="badge-descanso" style="font-size: 0.85em; margin-left: 10px;">😴 DÍA DE DESCANSO</span>'
                     : '<span class="badge-entreno" style="font-size: 0.85em; margin-left: 10px;">💪 DÍA DE ENTRENO</span>';
                 // Reemplazar el badge existente manteniendo el texto "📊 Totales Diarios vs Objetivos"
                 h3Totales.innerHTML = `📊 Totales Diarios vs Objetivos ${nuevoBadge}`;
             }
             
             // Actualizar objetivos mostrados
             const objetivos = this.obtenerObjetivosNutricionales();
             const objetivoCal = document.getElementById('objetivo-calorias');
             const objetivoProt = document.getElementById('objetivo-proteinas');
             const objetivoGras = document.getElementById('objetivo-grasas');
             const objetivoHidr = document.getElementById('objetivo-hidratos');
             
             if (objetivoCal) objetivoCal.textContent = `${objetivos.calorias} kcal`;
             if (objetivoProt) objetivoProt.textContent = `${objetivos.proteinas}g`;
             if (objetivoGras) objetivoGras.textContent = `${objetivos.grasas}g`;
             if (objetivoHidr) objetivoHidr.textContent = `${objetivos.carbohidratos}g`;
         }
     }

    // Replicar día actual a toda la semana
    replicarDiaActualATodaLaSemana() {
        const datosActual = this.obtenerDatos();
        this.dias.forEach(d => {
            this.planSemana[d] = JSON.parse(JSON.stringify(datosActual));
        });
        window.mostrarNotificacion?.('✅ Día replicado a toda la semana', 'success');
    }

    // Exportación PDF minimalista con marca MAIKA PORCUNA
    exportarPDFMinimalista() {
        // Guardar día actual antes de exportar
        this.planSemana[this.diaActual] = this.obtenerDatos();
        
        // Usar función unificada
        if (typeof window.generarPDFProfesional === 'function') {
            window.generarPDFProfesional('tabla-editable');
        } else {
            alert('Error: Sistema de generación de PDF no disponible. Recarga la página.');
        }
    }

    // Obtiene datos de cabecera para la exportación desde diferentes fuentes disponibles
    obtenerCabeceraExport() {
        const hoy = new Date();
        const fechaStr = hoy.toLocaleDateString?.() || `${hoy.getFullYear()}-${(hoy.getMonth()+1).toString().padStart(2,'0')}-${hoy.getDate().toString().padStart(2,'0')}`;
        const base = { nombre: 'Cliente', fecha: fechaStr, email: '', telefono: '', edad: '', altura: '', peso: '', objetivo: '', sexo: '', tipoPersona: '', imc: '' };

        const tryFill = (src) => {
            if (!src || typeof src !== 'object') return;
            base.nombre = src.nombre || src.displayName || base.nombre;
            base.email = src.email || base.email;
            base.telefono = src.telefono || src.phone || base.telefono;
            base.edad = src.edad || base.edad;
            base.altura = src.altura || src.talla || base.altura;
            base.peso = src.pesoActual || src.peso || base.peso;
            base.objetivo = src.objetivo || base.objetivo;
            base.sexo = src.sexo || base.sexo;
            base.tipoPersona = src.tipoPersona || base.tipoPersona;
            base.imc = src.imc || base.imc;
            if (src.fecha) base.fecha = src.fecha;
        };

        // 1) datosUsuario usados en el cálculo
        tryFill(window.datosUsuario);
        // 2) cliente seleccionado en gestor de clientes
        tryFill(window.clienteActual || window.clienteSeleccionado);
        // 3) Intento desde inputs visibles comunes
        const byId = (id) => { const el = document.getElementById(id); return el && el.value ? el.value : ''; };
        const guessNombre = byId('nombre') || byId('input-nombre') || '';
        const guessEmail = byId('email') || byId('input-email') || '';
        const guessTel = byId('telefono') || byId('input-telefono') || '';
        const guessAlt = byId('altura') || byId('input-altura') || '';
        const guessPeso = byId('pesoActual') || byId('peso') || byId('input-peso') || '';
        const guessEdad = byId('edad') || byId('input-edad') || '';
        const guessObj = byId('objetivo') || '';
        const guessSexo = byId('sexo') || '';
        const guessIMC = byId('imc') || '';
        tryFill({ nombre: guessNombre, email: guessEmail, telefono: guessTel, altura: guessAlt, peso: guessPeso, edad: guessEdad, objetivo: guessObj, sexo: guessSexo, imc: guessIMC });

        // Calcular IMC automáticamente si no está disponible pero tenemos altura y peso
        if (!base.imc && base.altura && base.peso) {
            const alturaNum = parseFloat(base.altura);
            const pesoNum = parseFloat(base.peso);
            if (alturaNum > 0 && pesoNum > 0) {
                // Convertir altura de cm a m y calcular IMC
                const alturaMetros = alturaNum / 100;
                base.imc = (pesoNum / (alturaMetros * alturaMetros)).toFixed(1);
            }
        }

        return base;
    }
}

// Cerrar autocompletado al hacer clic fuera
document.addEventListener('click', function(e) {
    if (!e.target.closest('.autocomplete-container') && !e.target.closest('.autocomplete-list')) {
        document.querySelectorAll('.autocomplete-list').forEach(list => {
            // Usar clase para ocultar, no dejar display:none persistente
            list.classList.add('autocomplete-list-hidden');
            list.style.display = '';
            // Restaurar eventos si había una función guardada
            if (list._restaurarPointerEvents) {
                list._restaurarPointerEvents();
            }
        });
        // Restaurar eventos de todos los campos
        document.querySelectorAll('.input-alimento').forEach(input => {
            input.style.pointerEvents = '';
        });
        // Restaurar estilos de los contenedores
        document.querySelectorAll('.autocomplete-container').forEach(container => {
            container.style.zIndex = '';
            container.style.position = '';
        });
        // Marcar que no hay dropdown abierto
        if (window.tablaEditable) {
            window.tablaEditable.dropdownAbierto = false;
        }
    }
});

// Instancia global
let tablaEditable = null;

// Función para inicializar la tabla editable
function inicializarTablaEditable() {
    if (!tablaEditable) {
        tablaEditable = new TablaEditable();
        window.tablaEditable = tablaEditable; // Exportar a window para acceso global
        console.log('✅ TablaEditable inicializada correctamente');
        console.log('✅ Instancia disponible en window.tablaEditable');
    }
    return tablaEditable;
}

// Intentar inicializar cuando el DOM esté listo
function intentarInicializar() {
    // Esperar a que la base de datos esté disponible
    if (typeof window.obtenerTodosLosAlimentos === 'function') {
        inicializarTablaEditable();
    } else {
        console.log('⏳ Esperando base de datos de alimentos...');
        // Reintentar después de 500ms
        setTimeout(intentarInicializar, 500);
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', intentarInicializar);
} else {
    intentarInicializar();
}

// Exportar función de inicialización
window.inicializarTablaEditable = inicializarTablaEditable;

console.log('✅ Módulo de Tabla Editable cargado');

