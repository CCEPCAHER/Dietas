// Script de diagnóstico para verificar la funcionalidad de tabla editable

function diagnosticarTablaEditable() {
    console.log('=== DIAGNÓSTICO DE TABLA EDITABLE ===\n');
    
    const resultados = {
        exitos: [],
        errores: [],
        advertencias: []
    };
    
    // 1. Verificar base de datos de alimentos
    console.log('1️⃣ Verificando base de datos de alimentos...');
    if (typeof window.obtenerTodosLosAlimentos === 'function') {
        try {
            const alimentos = window.obtenerTodosLosAlimentos();
            if (alimentos && alimentos.length > 0) {
                resultados.exitos.push(`✅ Base de datos cargada: ${alimentos.length} alimentos`);
                console.log(`   ✅ ${alimentos.length} alimentos disponibles`);
            } else {
                resultados.errores.push('❌ Base de datos vacía');
                console.error('   ❌ La base de datos está vacía');
            }
        } catch (e) {
            resultados.errores.push('❌ Error al obtener alimentos: ' + e.message);
            console.error('   ❌ Error:', e);
        }
    } else {
        resultados.errores.push('❌ Función obtenerTodosLosAlimentos() no disponible');
        console.error('   ❌ Función no disponible');
    }
    
    // 2. Verificar alimentosDB
    console.log('\n2️⃣ Verificando alimentosDB...');
    if (typeof window.alimentosDB !== 'undefined') {
        resultados.exitos.push('✅ alimentosDB disponible');
        console.log('   ✅ Disponible');
        
        if (typeof window.alimentosDB.obtenerTodos === 'function') {
            resultados.exitos.push('✅ Método obtenerTodos() existe');
            console.log('   ✅ Método obtenerTodos() funciona');
        }
    } else {
        resultados.errores.push('❌ alimentosDB no disponible');
        console.error('   ❌ No disponible');
    }
    
    // 3. Verificar TablaEditable
    console.log('\n3️⃣ Verificando TablaEditable...');
    if (typeof TablaEditable !== 'undefined') {
        resultados.exitos.push('✅ Clase TablaEditable definida');
        console.log('   ✅ Clase definida');
    } else {
        resultados.errores.push('❌ Clase TablaEditable no definida');
        console.error('   ❌ Clase no definida');
    }
    
    // 4. Verificar instancia global
    console.log('\n4️⃣ Verificando instancia global...');
    if (window.tablaEditable) {
        resultados.exitos.push('✅ Instancia global inicializada');
        console.log('   ✅ window.tablaEditable existe');
        
        if (window.tablaEditable.alimentos && window.tablaEditable.alimentos.length > 0) {
            resultados.exitos.push(`✅ Alimentos cargados en instancia: ${window.tablaEditable.alimentos.length}`);
            console.log(`   ✅ ${window.tablaEditable.alimentos.length} alimentos en instancia`);
        } else {
            resultados.advertencias.push('⚠️ Instancia sin alimentos cargados');
            console.warn('   ⚠️ Alimentos no cargados en la instancia');
        }
    } else {
        resultados.advertencias.push('⚠️ Instancia global no creada aún');
        console.warn('   ⚠️ window.tablaEditable no existe');
        
        if (typeof window.inicializarTablaEditable === 'function') {
            resultados.exitos.push('✅ Función inicializarTablaEditable() disponible');
            console.log('   ✅ Puedes llamar a inicializarTablaEditable()');
        }
    }
    
    // 5. Verificar funciones de búsqueda
    console.log('\n5️⃣ Verificando funciones de búsqueda...');
    if (typeof window.buscarAlimentos === 'function') {
        resultados.exitos.push('✅ Función buscarAlimentos() disponible');
        console.log('   ✅ buscarAlimentos() disponible');
        
        try {
            const resultadosPrueba = window.buscarAlimentos('pollo', 5);
            console.log(`   ✅ Búsqueda de prueba: ${resultadosPrueba.length} resultados para "pollo"`);
            if (resultadosPrueba.length > 0) {
                console.log(`   📄 Ejemplo: ${resultadosPrueba[0].ALIMENTO}`);
                resultados.exitos.push(`✅ Búsqueda funcional (${resultadosPrueba.length} resultados para "pollo")`);
            }
        } catch (e) {
            resultados.errores.push('❌ Error en búsqueda: ' + e.message);
            console.error('   ❌ Error en búsqueda:', e);
        }
    } else {
        resultados.errores.push('❌ Función buscarAlimentos() no disponible');
        console.error('   ❌ buscarAlimentos() no disponible');
    }
    
    // 6. Verificar orden de carga de scripts
    console.log('\n6️⃣ Verificando orden de carga...');
    const scriptsEsperados = [
        'base-datos-alimentos.js',
        'tabla-editable.js',
        'script.js'
    ];
    
    const scriptsEnPagina = Array.from(document.querySelectorAll('script[src]'))
        .map(s => s.src.split('/').pop());
    
    scriptsEsperados.forEach(script => {
        if (scriptsEnPagina.includes(script)) {
            resultados.exitos.push(`✅ Script ${script} cargado`);
            console.log(`   ✅ ${script}`);
        } else {
            resultados.errores.push(`❌ Script ${script} no encontrado`);
            console.error(`   ❌ ${script} falta`);
        }
    });
    
    // Resumen
    console.log('\n' + '='.repeat(50));
    console.log('📊 RESUMEN DEL DIAGNÓSTICO');
    console.log('='.repeat(50));
    console.log(`✅ Éxitos: ${resultados.exitos.length}`);
    console.log(`❌ Errores: ${resultados.errores.length}`);
    console.log(`⚠️  Advertencias: ${resultados.advertencias.length}`);
    
    if (resultados.errores.length > 0) {
        console.log('\n❌ ERRORES ENCONTRADOS:');
        resultados.errores.forEach(err => console.error('   ' + err));
    }
    
    if (resultados.advertencias.length > 0) {
        console.log('\n⚠️  ADVERTENCIAS:');
        resultados.advertencias.forEach(warn => console.warn('   ' + warn));
    }
    
    // Instrucciones
    console.log('\n' + '='.repeat(50));
    console.log('📝 INSTRUCCIONES');
    console.log('='.repeat(50));
    
    if (resultados.errores.length === 0) {
        console.log('✅ Todo está funcionando correctamente!');
        console.log('\n🎯 Para usar el modo manual:');
        console.log('   1. Selecciona "Generación Manual (Editable)" en el formulario');
        console.log('   2. Genera el plan');
        console.log('   3. Escribe el nombre de un alimento (mín. 2 caracteres)');
        console.log('   4. Selecciona de la lista');
        console.log('   5. Introduce los gramos');
        console.log('   6. ¡Los valores se calcularán automáticamente!');
    } else {
        console.log('⚠️  Hay problemas que necesitan solución:');
        console.log('   1. Recarga la página (Ctrl + F5)');
        console.log('   2. Verifica que todos los scripts estén cargados');
        console.log('   3. Revisa la consola para errores adicionales');
    }
    
    console.log('\n' + '='.repeat(50));
    
    return {
        exito: resultados.errores.length === 0,
        resultados: resultados
    };
}

// Exportar para uso en consola
window.diagnosticarTablaEditable = diagnosticarTablaEditable;

// Ejecutar automáticamente después de un delay
setTimeout(() => {
    console.log('🔍 Ejecutando diagnóstico automático...\n');
    diagnosticarTablaEditable();
}, 3000);

console.log('✅ Script de diagnóstico cargado');
console.log('💡 Ejecuta manualmente: diagnosticarTablaEditable()');

