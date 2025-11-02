@echo off
echo ====================================
echo  Despliegue de Reglas de Firestore
echo ====================================
echo.

REM Verificar si Firebase CLI esta instalado
where firebase >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Firebase CLI no esta instalado
    echo.
    echo Para instalarlo ejecuta:
    echo npm install -g firebase-tools
    echo.
    pause
    exit /b 1
)

echo Firebase CLI detectado
echo.

REM Verificar si el usuario esta autenticado
firebase projects:list >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo No estas autenticado en Firebase
    echo Iniciando sesion...
    echo.
    firebase login
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: No se pudo iniciar sesion
        pause
        exit /b 1
    )
)

echo.
echo Desplegando reglas de Firestore...
echo.

firebase deploy --only firestore:rules

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo  EXITO: Reglas desplegadas correctamente
    echo ========================================
    echo.
    echo Ahora puedes:
    echo 1. Recargar tu aplicacion web
    echo 2. Iniciar sesion
    echo 3. Ejecutar verificarFirestore^(^) en la consola
    echo.
) else (
    echo.
    echo ==========================================
    echo  ERROR: No se pudieron desplegar las reglas
    echo ==========================================
    echo.
    echo Soluciones:
    echo 1. Verifica que firebase.json este correctamente configurado
    echo 2. Verifica que firestore.rules exista
    echo 3. Ejecuta: firebase init firestore
    echo.
)

pause

