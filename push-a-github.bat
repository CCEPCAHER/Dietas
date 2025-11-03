@echo off
REM Script para hacer push a GitHub después de configurar credenciales
echo.
echo ========================================================================
echo   HACIENDO PUSH A GITHUB
echo ========================================================================
echo.
echo Repositorio: https://github.com/CCEPCAHER/Dietas
echo.
echo IMPORTANTE: Cuando te pida credenciales:
echo   Username: CCEPCAHER
echo   Password: Tu Personal Access Token (NO tu contraseña normal)
echo.
echo ========================================================================
echo.

REM Intentar push
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================================
    echo   SUCCESS! Codigo subido a GitHub correctamente
    echo ========================================================================
    echo.
    echo Tu codigo esta en: https://github.com/CCEPCAHER/Dietas
    echo.
) else (
    echo.
    echo ========================================================================
    echo   ERROR: No se pudo subir el codigo
    echo ========================================================================
    echo.
    echo Posibles causas:
    echo   1. No tienes Personal Access Token configurado
    echo   2. Credenciales incorrectas
    echo   3. No tienes permisos en el repositorio
    echo.
    echo SOLUCION:
    echo   1. Lee: SOLUCION-CAMBIO-CUENTA-GITHUB.md
    echo   2. Crea un Personal Access Token en GitHub
    echo   3. Vuelve a intentar
    echo.
)

echo Presiona cualquier tecla para salir...
pause >nul

