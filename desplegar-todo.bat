@echo off
REM Script de Despliegue Automático para Dietas App
REM Compatible con Windows CMD

echo ========================================================================
echo   DESPLIEGUE AUTOMATICO - MAIKAFIT DIETAS APP
echo ========================================================================
echo.

REM Ejecutar el script PowerShell
powershell.exe -ExecutionPolicy Bypass -File "%~dp0desplegar-todo.ps1"

REM Pausar para ver resultados
echo.
echo Presiona cualquier tecla para salir...
pause >nul

