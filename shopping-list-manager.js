/**
 * Gestor de Lista de la Compra
 * Analiza el plan semanal y genera una lista consolidada de ingredientes
 */

class ShoppingListManager {
    constructor() {
        this.modalId = 'shoppingListModal';
    }

    /**
     * Genera y muestra la lista de la compra
     */
    generarLista() {
        try {
            // Usar la utilidad de exportación para obtener datos normalizados
            if (!window.construirPlanSemanalEstructurado) {
                throw new Error('El módulo export-utils.js no está cargado');
            }

            const estructura = window.construirPlanSemanalEstructurado();
            if (!estructura) {
                window.toastManager.warning('No hay datos suficientes para generar la lista');
                return;
            }

            const ingredientes = this.procesarIngredientes(estructura);
            this.mostrarModal(ingredientes);

        } catch (error) {
            console.error('Error al generar lista de compra:', error);
            window.toastManager.error('Error al generar la lista: ' + error.message);
        }
    }

    /**
     * Procesa y consolida los ingredientes del plan
     */
    procesarIngredientes(estructura) {
        const consolidados = {};

        // Recorrer todas las comidas de la semana
        estructura.semanas.forEach(semana => {
            semana.columnas.forEach(columna => {
                Object.values(columna.alimentosPorComida).forEach(alimentos => {
                    alimentos.forEach(alimento => {
                        if (!alimento) return;
                        
                        // Parsear alimento: "100g Arroz" -> {nombre: "Arroz", cantidad: 100, unidad: "g"}
                        const parsed = this.parsearAlimento(alimento);
                        if (!parsed) return;

                        const key = parsed.nombre.toLowerCase();
                        
                        if (!consolidados[key]) {
                            consolidados[key] = {
                                nombre: parsed.nombre,
                                cantidad: 0,
                                unidad: parsed.unidad,
                                categoria: this.detectarCategoria(parsed.nombre)
                            };
                        }
                        
                        consolidados[key].cantidad += parsed.cantidad;
                    });
                });
            });
        });

        // Convertir a array y ordenar
        return Object.values(consolidados).sort((a, b) => a.categoria.localeCompare(b.categoria) || a.nombre.localeCompare(b.nombre));
    }

    /**
     * Intenta separar cantidad y nombre
     */
    parsearAlimento(input) {
        // Si es null o undefined
        if (!input) return null;

        // Si ya es un objeto con estructura conocida
        if (typeof input === 'object') {
            const nombre = input.nombre || input.alimento || 'Desconocido';
            const cantidad = parseFloat(input.cantidad || input.gramos || 1);
            const unidad = input.unidad || (input.gramos ? 'g' : 'ud');
            
            return {
                nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase(),
                cantidad,
                unidad
            };
        }

        // Asegurar que es string
        const texto = String(input);

        // Regex para "100g Arroz", "1 unidad Huevo", "Arroz (100g)"
        const regexCantidad = /(\d+(?:\.\d+)?)\s*(g|ml|kg|l|oz|lb|unidad|unidades)?/i;
        const match = texto.match(regexCantidad);

        if (match) {
            const cantidad = parseFloat(match[1]);
            let unidad = match[2] || 'unidad';
            
            // Limpiar el nombre quitando la cantidad
            let nombre = texto.replace(match[0], '').replace(/\(|\)/g, '').trim();
            
            // Caso especial: si el nombre quedó vacío o muy corto, usar el texto original limpiado
            if (nombre.length < 2) nombre = texto.replace(/\(|\)/g, '').trim();

            // Capitalizar primera letra
            nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

            return { nombre, cantidad, unidad };
        }

        // Si no detecta cantidad, lo devuelve como unidad
        return {
            nombre: texto,
            cantidad: 1,
            unidad: 'ud'
        };
    }

    /**
     * Categorización simple basada en palabras clave
     */
    detectarCategoria(nombre) {
        const n = nombre.toLowerCase();
        
        if (n.match(/pollo|pavo|ternera|cerdo|carne|bistec|hamburguesa|jamón|lomo/)) return '🥩 Carnicería';
        if (n.match(/merluza|salmón|atún|pescado|bacalao|gamba|langostino/)) return '🐟 Pescadería';
        if (n.match(/manzana|plátano|banana|naranja|fruta|lechuga|tomate|cebolla|verdura|patata|zanahoria|espinaca|ensalada/)) return '🥦 Frutas y Verduras';
        if (n.match(/leche|yogur|queso|mantequilla|nata/)) return '🥛 Lácteos';
        if (n.match(/arroz|pasta|pan|avena|cereal|harina|quinoa/)) return '🌾 Despensa';
        if (n.match(/huevo|clara/)) return '🥚 Huevos';
        if (n.match(/aceite|vinagre|sal|pimienta|especia|salsa/)) return '🧂 Condimentos';
        if (n.match(/nuez|almendra|fruto seco|cacahuete/)) return '🥜 Frutos Secos';
        
        return '🛒 Otros';
    }

    /**
     * Genera el HTML del modal
     */
    mostrarModal(ingredientes) {
        let modal = document.getElementById(this.modalId);
        if (modal) modal.remove();

        // Agrupar por categoría para visualización
        const porCategoria = {};
        ingredientes.forEach(ing => {
            if (!porCategoria[ing.categoria]) porCategoria[ing.categoria] = [];
            porCategoria[ing.categoria].push(ing);
        });

        let listaHTML = '';
        Object.keys(porCategoria).sort().forEach(cat => {
            listaHTML += `
                <div class="shopping-category">
                    <div class="shopping-category-title">${cat}</div>
                    <div class="shopping-items">
                        ${porCategoria[cat].map(item => `
                            <label class="shopping-item">
                                <input type="checkbox">
                                <span class="shopping-item-name">${item.nombre}</span>
                                <span class="shopping-item-qty">${Math.round(item.cantidad * 10) / 10} ${item.unidad}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        const modalHTML = `
            <div id="${this.modalId}" class="modal" style="display:block;">
                <div class="modal-content modal-large">
                    <span class="close-modal" onclick="document.getElementById('${this.modalId}').remove()">&times;</span>
                    <h2 style="text-align:center; margin-bottom:20px;">🛒 Lista de la Compra Semanal</h2>
                    
                    <div class="shopping-list-container" style="max-height: 60vh; overflow-y: auto; padding: 10px;">
                        ${listaHTML}
                    </div>

                    <div class="shopping-actions">
                        <button class="btn-copy-list" onclick="window.shoppingListManager.copiarTexto()">
                            📋 Copiar Texto
                        </button>
                        <button class="btn-whatsapp-share" onclick="window.shoppingListManager.compartirWhatsapp()">
                            💬 Enviar por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;

        const div = document.createElement('div');
        div.innerHTML = modalHTML;
        document.body.appendChild(div.firstElementChild);
    }

    generarTextoPlano() {
        // Usar export-utils de nuevo para asegurar datos frescos
        const estructura = window.construirPlanSemanalEstructurado();
        if (!estructura) return '';
        const ingredientes = this.procesarIngredientes(estructura);
        
        const porCategoria = {};
        ingredientes.forEach(ing => {
            if (!porCategoria[ing.categoria]) porCategoria[ing.categoria] = [];
            porCategoria[ing.categoria].push(ing);
        });

        let texto = "*🛒 MI LISTA DE LA COMPRA - MAIKA FIT*\n\n";
        
        Object.keys(porCategoria).sort().forEach(cat => {
            texto += `*${cat}*\n`;
            porCategoria[cat].forEach(item => {
                texto += `- ${item.nombre}: ${Math.round(item.cantidad * 10) / 10}${item.unidad}\n`;
            });
            texto += "\n";
        });

        return texto;
    }

    copiarTexto() {
        const texto = this.generarTextoPlano();
        navigator.clipboard.writeText(texto).then(() => {
            window.toastManager.success('Lista copiada al portapapeles');
        }).catch(() => {
            window.toastManager.error('Error al copiar');
        });
    }

    compartirWhatsapp() {
        const texto = this.generarTextoPlano();
        const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    }
}

window.shoppingListManager = new ShoppingListManager();

