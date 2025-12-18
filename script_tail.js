
const btnDescargarExcel = document.getElementById('btnDescargarExcel');
if (btnDescargarExcel) {
    btnDescargarExcel.replaceWith(btnDescargarExcel.cloneNode(true));
    const nuevoBtnExcel = document.getElementById('btnDescargarExcel');
    nuevoBtnExcel.addEventListener('click', function () {
        if (typeof exportarExcelProfesional === 'function') {
            exportarExcelProfesional();
        } else {
            console.error('exportarExcelProfesional no definido');
        }
    });
}
}); // End DOMContentLoaded
