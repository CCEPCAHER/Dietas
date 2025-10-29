// Funciones para editar dietas
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
        
        semanaActual.forEach(dia => {
            htmlPlan += generarDiaHTML(dia, true);
        });
    }
    
    planDiv.innerHTML = htmlPlan;
    
    // Agregar estilos de edición
    agregarEstilosEdicion();
    
    mostrarNotificacion('✏️ Modo edición activado. Haz clic en cualquier alimento para editarlo', 'info');
    
    // Agregar event listeners para edición
    agregarEventListenersEdicion();
}

function agregarEstilosEdicion() {
    if (!document.getElementById('estilos-edicion')) {
        const style = document.createElement('style');
        style.id = 'estilos-edicion';
        style.textContent = `
            .editable-alimento .alimento-item {
                cursor: pointer;
                padding: 5px;
                margin: 3px 0;
                border-radius: 4px;
                transition: background 0.2s;
            }
            .editable-alimento .alimento-item:hover {
                background: #fff3cd;
                border: 1px dashed #ffc107;
            }
            .editable-alimento .alimento-item:focus {
                background: #fff3cd;
                border: 2px solid #ffc107;
                outline: none;
            }
            .edicion-comida {
                margin-top: 15px;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 8px;
            }
            .btn-agregar-alimento,
            .btn-eliminar-alimento {
                padding: 8px 15px;
                margin: 5px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 600;
            }
            .btn-agregar-alimento {
                background: #28a745;
                color: white;
            }
            .btn-eliminar-alimento {
                background: #dc3545;
                color: white;
            }
        `;
        document.head.appendChild(style);
    }
}

function agregarEventListenersEdicion() {
    document.querySelectorAll('.alimento-item').forEach(item => {
        item.addEventListener('blur', function() {
            recalcularMacrosComida(this);
        });
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });
    });
}

function agregarAlimento(button) {
    const lista = button.closest('.dia-plan').querySelector('.lista-alimentos');
    const nuevaComida = lista.closest('td').querySelector('.comida-header').textContent.includes('Desayuno') ? 'desayuno' :
                        lista.closest('td').querySelector('.comida-header').textContent.includes('Mediodía') ? 'medioDia' :
                        lista.closest('td').querySelector('.comida-header').textContent.includes('Comida') ? 'almuerzo' :
                        lista.closest('td').querySelector('.comida-header').textContent.includes('Merienda') ? 'merienda' : 'cena';
    
    const nuevoItem = document.createElement('li');
    nuevoItem.className = 'alimento-item';
    nuevoItem.contentEditable = 'true';
    nuevoItem.textContent = 'Nuevo alimento';
    nuevoItem.addEventListener('blur', function() {
        recalcularMacrosComida(this);
    });
    
    lista.appendChild(nuevoItem);
    nuevoItem.focus();
}

function eliminarAlimentoSeleccionado(button) {
    const lista = button.closest('.dia-plan').querySelector('.lista-alimentos');
    const seleccionado = document.querySelector('.alimento-item:focus') || 
                        lista.querySelector('.alimento-item:hover');
    
    if (seleccionado) {
        seleccionado.remove();
        recalcularMacrosComida(lista);
    } else {
        mostrarNotificacion('⚠️ Selecciona un alimento para eliminar', 'info');
    }
}

function recalcularMacrosComida(elemento) {
    const td = elemento.closest('td');
    const lista = td.querySelector('.lista-alimentos');
    const alimentos = Array.from(lista.querySelectorAll('.alimento-item')).map(li => li.textContent.trim());
    
    // Calcular macros aproximados (simplificado)
    let calorias = 0;
    let proteinas = 0;
    let carbohidratos = 0;
    let grasas = 0;
    
    alimentos.forEach(alimentoTexto => {
        if (window.obtenerInfoNutricional) {
            // Intentar obtener información nutricional
            const match = alimentoTexto.match(/(.+?)\s*\((\d+)g\)/);
            if (match) {
                const nombre = match[1];
                const cantidad = parseInt(match[2]);
                const info = window.obtenerInfoNutricional(nombre, cantidad);
                if (info) {
                    calorias += info.calorias;
                    proteinas += info.proteinas;
                    carbohidratos += info.carbohidratos;
                    grasas += info.grasas;
                }
            }
        }
    });
    
    // Actualizar macros mostrados
    const macrosDiv = td.querySelector('.macros-comida');
    if (macrosDiv && calorias > 0) {
        macrosDiv.querySelector('.macro-calorias').textContent = Math.round(calorias);
        macrosDiv.querySelector('.macro-proteinas').textContent = Math.round(proteinas);
        macrosDiv.querySelector('.macro-carbohidratos').textContent = Math.round(carbohidratos);
        macrosDiv.querySelector('.macro-grasas').textContent = Math.round(grasas * 10) / 10;
    }
}

// Exportar funciones globales
window.habilitarEdicionDieta = habilitarEdicionDieta;
window.agregarAlimento = agregarAlimento;
window.eliminarAlimentoSeleccionado = eliminarAlimentoSeleccionado;

