// Funciones para editar dietas con sistema mejorado de selección

function habilitarEdicionDieta() {
    const planDiv = document.getElementById('plan-alimentacion');
    const { objetivo, duracion } = datosUsuario;
    
    // Verificar si hay base de datos ampliada disponible
    let planSemana;
    if (window.generarPlanVariado && window.baseDatosAlimentos) {
        planSemana = window.generarPlanVariado(objetivo, duracion);
    } else {
        planSemana = alimentosPorObjetivo[objetivo].semana;
    }
    
    let htmlPlan = '';
    
    // Determinar número de semanas
    let semanas;
    if (duracion === 'semana') {
        semanas = 1;
    } else if (duracion === '2semanas') {
        semanas = 2;
    } else if (duracion === '3semanas') {
        semanas = 3;
    } else if (duracion === 'mes') {
        semanas = 4;
    } else {
        semanas = 1;
    }
    
    for (let semana = 1; semana <= semanas; semana++) {
        if (semanas > 1) {
            htmlPlan += `<h2 style="color: #764ba2; margin-top: 40px; text-align: center;">Semana ${semana}</h2>`;
        }
        
        const inicioSemana = (semana - 1) * 7;
        const finSemana = semana * 7;
        const semanaActual = planSemana.slice(inicioSemana, finSemana);
        
        semanaActual.forEach((dia, idx) => {
            htmlPlan += generarDiaHTMLEdit(dia, true, inicioSemana + idx);
        });
    }
    
    planDiv.innerHTML = htmlPlan;
    
    // Agregar estilos de edición
    agregarEstilosEdicion();
    
    mostrarNotificacion('✏️ Modo edición activado. Haz clic en cualquier alimento para editarlo', 'info');
    
    // Agregar event listeners para edición
    agregarEventListenersEdicion();
}

function generarDiaHTMLEdit(dia, editable = false, diaIndex = 0) {
    const comidas = dia.comidas;
    const editableAttr = editable ? 'data-editable="true"' : '';
    const editarClass = editable ? ' editable-alimento' : '';
    
    return `
        <div class="dia-plan" data-dia-index="${diaIndex}">
            <h3>${dia.dia}</h3>
            
            <table class="tabla-comidas">
                <thead>
                    <tr>
                        <th>DESAYUNO</th>
                        <th>MEDIODÍA</th>
                        <th>COMIDA</th>
                        <th>MERIENDA</th>
                        <th>CENA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-comida="desayuno">
                            <div class="comida-header">🍳 Desayuno</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.desayuno.alimentos.map((alimento, idx) => 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="desayuno" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.desayuno.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.desayuno.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.desayuno.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.desayuno.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="medioDia">
                            <div class="comida-header">🥤 Mediodía</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.medioDia.alimentos.map((alimento, idx) => 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="medioDia" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.medioDia.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.medioDia.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.medioDia.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.medioDia.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="almuerzo">
                            <div class="comida-header">🍽️ Comida</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.almuerzo.alimentos.map((alimento, idx) => 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="almuerzo" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.almuerzo.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.almuerzo.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.almuerzo.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.almuerzo.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="merienda">
                            <div class="comida-header">🥙 Merienda</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.merienda.alimentos.map((alimento, idx) => 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="merienda" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.merienda.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.merienda.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.merienda.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.merienda.grasas}</span>g
                            </div>
                        </td>
                        <td data-comida="cena">
                            <div class="comida-header">🌙 Cena</div>
                            <ul class="lista-alimentos${editarClass}">
                                ${comidas.cena.alimentos.map((alimento, idx) => 
                                    `<li class="alimento-item" data-alimento-index="${idx}" data-tipo-comida="cena" ${editableAttr}>
                                        <span class="alimento-nombre">${alimento}</span>
                                        <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
                                        <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
                                    </li>`
                                ).join('')}
                            </ul>
                            <div class="macros-comida">
                                Calorías: <span class="macro-calorias">${comidas.cena.calorias}</span> kcal<br>
                                Prot: <span class="macro-proteinas">${comidas.cena.proteinas}</span>g | 
                                Carb: <span class="macro-carbohidratos">${comidas.cena.carbohidratos}</span>g | 
                                Grasas: <span class="macro-grasas">${comidas.cena.grasas}</span>g
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            ${editable ? `
                <div class="edicion-comida">
                    <button class="btn-agregar-alimento" onclick="agregarAlimentoNuevo(this)">➕ Agregar Alimento</button>
                </div>
            ` : ''}
        </div>
    `;
}

function agregarEstilosEdicion() {
    if (!document.getElementById('estilos-edicion')) {
        const style = document.createElement('style');
        style.id = 'estilos-edicion';
        style.textContent = `
            .editable-alimento .alimento-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px;
                margin: 5px 0;
                border-radius: 6px;
                transition: all 0.2s;
                background: white;
                border: 1px solid #dee2e6;
            }
            .editable-alimento .alimento-item:hover {
                background: #f8f9fa;
                border-color: #667eea;
            }
            .alimento-nombre {
                flex: 1;
                margin-right: 8px;
            }
            .btn-editar-item,
            .btn-eliminar-item {
                background: none;
                border: none;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 14px;
                transition: transform 0.2s;
            }
            .btn-editar-item:hover {
                color: #667eea;
                transform: scale(1.1);
            }
            .btn-eliminar-item:hover {
                color: #dc3545;
                transform: scale(1.1);
            }
            .edicion-comida {
                margin-top: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                text-align: center;
            }
            .btn-agregar-alimento {
                padding: 10px 20px;
                background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                transition: transform 0.2s;
            }
            .btn-agregar-alimento:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
            }
            .selector-alimento {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 25px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                z-index: 10000;
                max-width: 600px;
                width: 90%;
            }
            .selector-alimento h3 {
                margin-bottom: 20px;
                color: #667eea;
            }
            .selector-categoria {
                margin-bottom: 15px;
            }
            .selector-categoria label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #555;
            }
            .selector-categoria select {
                width: 100%;
                padding: 10px;
                border: 2px solid #ddd;
                border-radius: 8px;
                font-size: 14px;
            }
            .lista-alimentos-selector {
                max-height: 300px;
                overflow-y: auto;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 10px;
            }
            .alimento-option {
                padding: 10px;
                margin: 5px 0;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s;
                background: white;
                border: 1px solid transparent;
            }
            .alimento-option:hover {
                background: #e7f3ff;
                border-color: #667eea;
            }
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 9999;
            }
        `;
        document.head.appendChild(style);
    }
}

function agregarEventListenersEdicion() {
    // Agregar botón "+ Agregar" a cada td con data-comida
    document.querySelectorAll('td[data-comida]').forEach(td => {
        const tieneBoton = td.querySelector('.btn-agregar-rapido');
        if (!tieneBoton) {
            const btnAgregar = document.createElement('button');
            btnAgregar.className = 'btn-agregar-rapido';
            btnAgregar.textContent = '➕ Agregar';
            btnAgregar.style.cssText = 'margin-top: 10px; padding: 6px 12px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;';
            btnAgregar.onclick = function() {
                const tipoComida = td.dataset.comida;
                mostrarSelectorAlimentos(tipoComida, '', null, td);
            };
            td.appendChild(btnAgregar);
        }
    });
}

function editarAlimento(button) {
    const li = button.closest('.alimento-item');
    const tipoComida = li.dataset.tipoComida;
    const alimentoActual = li.querySelector('.alimento-nombre').textContent;
    
    mostrarSelectorAlimentos(tipoComida, alimentoActual, li);
}

function eliminarAlimento(button) {
    const li = button.closest('.alimento-item');
    const td = li.closest('td');
    li.remove();
    recalcularMacrosComida(td);
}

function agregarAlimentoNuevo(button) {
    // Buscar el td más cercano con data-comida
    const td = button.closest('td[data-comida]');
    
    if (!td) {
        // Si no hay td con data-comida, buscar en el dia-plan
        const diaPlan = button.closest('.dia-plan');
        const tds = diaPlan.querySelectorAll('td[data-comida]');
        if (tds.length > 0) {
            const primerTd = tds[0];
            const tipoComida = primerTd.dataset.comida;
            mostrarSelectorAlimentos(tipoComida, '', null, primerTd);
        } else {
            mostrarNotificacion('⚠️ No se pudo encontrar la categoría de comida', 'error');
        }
        return;
    }
    
    const tipoComida = td.dataset.comida;
    mostrarSelectorAlimentos(tipoComida, '', null, td);
}

function mostrarSelectorAlimentos(tipoComida, alimentoActual = '', elementoLi = null, elementoPadre = null) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Crear selector
    const selector = document.createElement('div');
    selector.className = 'selector-alimento';
    
    // Obtener base de datos de alimentos
    const baseDatos = window.baseDatosAlimentos || {};
    
    // Categorías disponibles
    const categorias = {
        proteinas: 'Proteínas Animales',
        proteinasVegetales: 'Proteínas Vegetales',
        carbohidratos: 'Carbohidratos',
        tuberculos: 'Tubérculos',
        verduras: 'Verduras',
        frutas: 'Frutas',
        frutosSecos: 'Frutos Secos',
        lacteos: 'Lácteos',
        grasas: 'Grasas',
        bebidas: 'Bebidas'
    };
    
    selector.innerHTML = `
        <h3>Seleccionar Alimento</h3>
        <div class="selector-categoria">
            <label>Categoría:</label>
            <select id="categoria-selector">
                ${Object.keys(categorias).map(cat => 
                    `<option value="${cat}">${categorias[cat]}</option>`
                ).join('')}
            </select>
        </div>
        <div style="margin: 15px 0;">
            <label for="buscador-alimento" style="display: block; margin-bottom: 8px; font-weight: 600; color: #555;">🔍 Buscar alimento:</label>
            <input type="text" id="buscador-alimento" placeholder="Escribe para buscar (ej: huevo, pollo, pasta...)" 
                   style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px;">
        </div>
        <div class="lista-alimentos-selector" id="lista-alimentos-selector">
            ${generarListaAlimentos(baseDatos.proteinas || {})}
        </div>
        <div style="margin-top: 20px; display: flex; gap: 10px;">
            <button onclick="cerrarSelector()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer; flex: 1;">Cancelar</button>
        </div>
    `;
    
    overlay.appendChild(selector);
    document.body.appendChild(overlay);
    
    // Event listener para cambio de categoría
    const categoriaSelect = document.getElementById('categoria-selector');
    const buscadorInput = document.getElementById('buscador-alimento');
    let categoriaActual = categoriaSelect.value;
    
    categoriaSelect.addEventListener('change', function() {
        categoriaActual = this.value;
        filtrarAlimentos();
    });
    
    // Event listener para búsqueda en tiempo real
    buscadorInput.addEventListener('input', function() {
        filtrarAlimentos();
    });
    
    // Función para filtrar alimentos
    function filtrarAlimentos() {
        const categoria = categoriaActual;
        const busqueda = buscadorInput.value.toLowerCase().trim();
        const alimentos = baseDatos[categoria] || {};
        
        let alimentosFiltrados = alimentos;
        
        // Si hay búsqueda, filtrar
        if (busqueda) {
            alimentosFiltrados = Object.keys(alimentos).reduce((obj, key) => {
                if (key.toLowerCase().includes(busqueda)) {
                    obj[key] = alimentos[key];
                }
                return obj;
            }, {});
        }
        
        document.getElementById('lista-alimentos-selector').innerHTML = generarListaAlimentos(alimentosFiltrados);
    }
    
    // Guardar referencia para cierre
    window.selectorActual = {
        overlay: overlay,
        tipoComida: tipoComida,
        elementoLi: elementoLi,
        elementoPadre: elementoPadre,
        alimentoActual: alimentoActual
    };
}

function generarListaAlimentos(alimentos) {
    const keys = Object.keys(alimentos);
    if (keys.length === 0) {
        return '<div style="padding: 20px; text-align: center; color: #6c757d;">No se encontraron alimentos que coincidan con tu búsqueda</div>';
    }
    return keys.map(alimento => `
        <div class="alimento-option" onclick="seleccionarAlimento('${alimento}')">
            ${alimento}
        </div>
    `).join('');
}

function seleccionarAlimento(nombreAlimento) {
    const selector = window.selectorActual;
    if (!selector) return;
    
    // Calcular cantidad por defecto
    const cantidad = calcularCantidadDefecto(nombreAlimento, selector.tipoComida);
    
    console.log('Seleccionando alimento:', nombreAlimento, 'Cantidad:', cantidad);
    
    // Usar la función formatearAlimento de window
    const formatear = window.formatearAlimento || function(a) { 
        return a.cantidad && a.cantidad !== 100 ? `${a.nombre} (${a.cantidad}g)` : a.nombre;
    };
    
    const alimentoFormateado = formatear({ nombre: nombreAlimento, cantidad: cantidad });
    
    console.log('Alimento formateado:', alimentoFormateado);
    
    if (selector.elementoLi) {
        // Editar alimento existente
        selector.elementoLi.querySelector('.alimento-nombre').textContent = alimentoFormateado;
    } else {
        // Agregar nuevo alimento
        const lista = selector.elementoPadre.querySelector('.lista-alimentos');
        const nuevoLi = document.createElement('li');
        nuevoLi.className = 'alimento-item';
        nuevoLi.dataset.tipoComida = selector.tipoComida;
        nuevoLi.innerHTML = `
            <span class="alimento-nombre">${alimentoFormateado}</span>
            <button class="btn-editar-item" onclick="editarAlimento(this)">✏️</button>
            <button class="btn-eliminar-item" onclick="eliminarAlimento(this)">🗑️</button>
        `;
        lista.appendChild(nuevoLi);
        
        const macrosDiv = selector.elementoPadre.querySelector('.macros-comida');
        if (macrosDiv) {
            recalcularMacrosComida(selector.elementoPadre);
        }
    }
    
    recalcularMacrosComida(selector.elementoLi || selector.elementoPadre);
    cerrarSelector();
}

function calcularCantidadDefecto(nombreAlimento, tipoComida) {
    const baseDatos = window.baseDatosAlimentos;
    if (!baseDatos) return 100;
    
    // Buscar el alimento en todas las categorías
    for (let categoria in baseDatos) {
        if (baseDatos[categoria][nombreAlimento]) {
            const info = baseDatos[categoria][nombreAlimento];
            
            // Determinar cantidad según tipo de comida
            switch(tipoComida) {
                case 'desayuno':
                    return determinarCantidadDesayuno(nombreAlimento);
                case 'medioDia':
                    return determinarCantidadMedioDia(nombreAlimento);
                case 'almuerzo':
                    return determinarCantidadAlmuerzo(nombreAlimento);
                case 'merienda':
                    return determinarCantidadMerienda(nombreAlimento);
                case 'cena':
                    return determinarCantidadCena(nombreAlimento);
                default:
                    return 100;
            }
        }
    }
    
    return 100;
}

function determinarCantidadDesayuno(nombre) {
    if (nombre.toLowerCase().includes('huevo')) return 50; // 1 huevo
    if (nombre.toLowerCase().includes('avena')) return 60;
    if (nombre.toLowerCase().includes('leche')) return 200;
    if (nombre.toLowerCase().includes('pan')) return 50;
    if (nombre.toLowerCase().includes('plátano')) return 120;
    if (nombre.toLowerCase().includes('fruta')) return 100;
    return 100;
}

function determinarCantidadMedioDia(nombre) {
    if (nombre.toLowerCase().includes('fruta')) return 100;
    if (nombre.toLowerCase().includes('yogur')) return 150;
    if (nombre.toLowerCase().includes('fruto sec')) return 30;
    return 100;
}

function determinarCantidadAlmuerzo(nombre) {
    const nombreLower = nombre.toLowerCase();
    if (nombreLower.includes('pollo') || nombreLower.includes('pav') || nombreLower.includes('ternera') || nombreLower.includes('terner')) return 200;
    if (nombreLower.includes('pescado') || nombreLower.includes('salmón') || nombreLower.includes('atún') || nombreLower.includes('merluz') || nombreLower.includes('bacalao')) return 200;
    if (nombreLower.includes('arroz')) return 120;
    if (nombreLower.includes('pasta')) return 100;
    if (nombreLower.includes('verdura') || nombreLower.includes('brócoli') || nombreLower.includes('espinaca') || nombreLower.includes('colifl')) return 150;
    if (nombreLower.includes('huevo')) return 100;
    return 150;
}

function determinarCantidadMerienda(nombre) {
    if (nombre.toLowerCase().includes('batido')) return 200;
    if (nombre.toLowerCase().includes('yogur')) return 150;
    if (nombre.toLowerCase().includes('fruta')) return 100;
    if (nombre.toLowerCase().includes('fruto sec')) return 25;
    return 100;
}

function determinarCantidadCena(nombre) {
    const nombreLower = nombre.toLowerCase();
    if (nombreLower.includes('pollo') || nombreLower.includes('pav') || nombreLower.includes('ternera')) return 180;
    if (nombreLower.includes('pescado') || nombreLower.includes('salmón') || nombreLower.includes('atún') || nombreLower.includes('merluz') || nombreLower.includes('bacalao')) return 180;
    if (nombreLower.includes('verdura') || nombreLower.includes('brócoli') || nombreLower.includes('espinaca') || nombreLower.includes('colifl')) return 150;
    if (nombreLower.includes('ensalada')) return 100;
    if (nombreLower.includes('huevo')) return 100;
    return 120;
}

function cerrarSelector() {
    if (window.selectorActual && window.selectorActual.overlay) {
        document.body.removeChild(window.selectorActual.overlay);
        window.selectorActual = null;
    }
}

function recalcularMacrosComida(elemento) {
    // Si el elemento es un td, usarlo directamente
    const td = elemento.tagName === 'TD' ? elemento : elemento.closest('td');
    if (!td) return;
    
    const lista = td.querySelector('.lista-alimentos');
    const alimentos = Array.from(lista.querySelectorAll('.alimento-nombre')).map(span => span.textContent.trim());
    
    let calorias = 0;
    let proteinas = 0;
    let carbohidratos = 0;
    let grasas = 0;
    
    alimentos.forEach(alimentoTexto => {
        if (window.obtenerInfoNutricional) {
            // Intentar parsear el texto para obtener nombre y cantidad
            const info = parsearAlimentoYCalcular(alimentoTexto);
                if (info) {
                    calorias += info.calorias;
                    proteinas += info.proteinas;
                    carbohidratos += info.carbohidratos;
                    grasas += info.grasas;
            }
        }
    });
    
    // Actualizar macros mostrados
    const macrosDiv = td.querySelector('.macros-comida');
    if (macrosDiv && calorias > 0) {
        const caloriasSpan = macrosDiv.querySelector('.macro-calorias');
        const proteinasSpan = macrosDiv.querySelector('.macro-proteinas');
        const carbohidratosSpan = macrosDiv.querySelector('.macro-carbohidratos');
        const grasasSpan = macrosDiv.querySelector('.macro-grasas');
        
        if (caloriasSpan) caloriasSpan.textContent = Math.round(calorias);
        if (proteinasSpan) proteinasSpan.textContent = Math.round(proteinas);
        if (carbohidratosSpan) carbohidratosSpan.textContent = Math.round(carbohidratos);
        if (grasasSpan) grasasSpan.textContent = Math.round(grasas * 10) / 10;
    }
}

function parsearAlimentoYCalcular(texto) {
    // Intentar extraer nombre y cantidad del formato "Nombre (cantidad)"
    const match = texto.match(/^(.+?)\s*\((\d+)(g|unidades|ml|L)?\)$/);
    if (match) {
        const nombre = match[1].trim();
        let cantidad = parseInt(match[2]);
        const unidad = match[3] || 'g';
        
        // Convertir unidades a gramos si es necesario
        if (unidad === 'unidades' || unidad === '') {
            cantidad = convertirUnidadesAGramos(nombre, cantidad);
        } else if (unidad === 'ml' || unidad === 'L') {
            cantidad = cantidad; // Para bebidas, mantener ml
        }
        
        return window.obtenerInfoNutricional(nombre, cantidad);
    }
    
    // Si no hay formato, intentar con el texto directamente
    return window.obtenerInfoNutricional(texto, 100);
}

function convertirUnidadesAGramos(nombre, unidades) {
    // Conversiones aproximadas
    if (nombre.toLowerCase().includes('huevo')) return unidades * 50;
    if (nombre.toLowerCase().includes('plátano')) return unidades * 120;
    if (nombre.toLowerCase().includes('manzana')) return unidades * 150;
    if (nombre.toLowerCase().includes('naranja')) return unidades * 150;
    return unidades * 100; // Por defecto
}

// Exportar funciones globales
window.habilitarEdicionDieta = habilitarEdicionDieta;
window.agregarAlimentoNuevo = agregarAlimentoNuevo;
window.editarAlimento = editarAlimento;
window.eliminarAlimento = eliminarAlimento;
window.seleccionarAlimento = seleccionarAlimento;
window.cerrarSelector = cerrarSelector;
// Usar la función formatearAlimento de generador-dietas.js si está disponible
if (!window.formatearAlimento) {
    window.formatearAlimento = function(a) { 
        return a.cantidad && a.cantidad !== 100 ? `${a.nombre} (${a.cantidad}g)` : a.nombre;
    };
}
