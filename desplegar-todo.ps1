# Script de Despliegue Automático para Dietas App
# Sube a GitHub y despliega en Firebase

Write-Host "========================================================================" -ForegroundColor Cyan
Write-Host "  DESPLIEGUE AUTOMATICO - MAIKAFIT DIETAS APP" -ForegroundColor Yellow
Write-Host "========================================================================" -ForegroundColor Cyan
Write-Host ""

# Variables
$GITHUB_REPO = Read-Host "URL de tu repositorio de GitHub (ej: https://github.com/tu-usuario/maikafit-dietas.git) o deja vacío para saltar"

# Función para verificar si Git está instalado
function Test-GitInstalled {
    try {
        $gitVersion = git --version
        Write-Host "✓ Git detectado: $gitVersion" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "✗ Git no está instalado" -ForegroundColor Red
        return $false
    }
}

# Función para verificar si Firebase CLI está instalado
function Test-FirebaseInstalled {
    try {
        $firebaseVersion = firebase --version 2>&1
        Write-Host "✓ Firebase CLI detectado: $firebaseVersion" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "✗ Firebase CLI no está instalado" -ForegroundColor Yellow
        return $false
    }
}

# Función para verificar si hay cambios
function Test-HasChanges {
    try {
        $status = git status --porcelain
        return $status -ne $null
    } catch {
        return $false
    }
}

# Función para hacer commit y push a GitHub
function Deploy-ToGitHub {
    Write-Host ""
    Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║  1. DESPLEGANDO A GITHUB                                     ║" -ForegroundColor Cyan
    Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
    
    if (-not (Test-GitInstalled)) {
        Write-Host "⚠️  Saltando GitHub (Git no instalado)" -ForegroundColor Yellow
        return $false
    }
    
    # Verificar si es un repositorio Git
    if (-not (Test-Path .git)) {
        Write-Host "⚠️  No es un repositorio Git. Inicializando..." -ForegroundColor Yellow
        
        git init
        if (-not $?) {
            Write-Host "✗ Error al inicializar Git" -ForegroundColor Red
            return $false
        }
        
        Write-Host "✓ Repositorio Git inicializado" -ForegroundColor Green
        
        # Configurar remote si se proporcionó
        if ($GITHUB_REPO) {
            git remote add origin $GITHUB_REPO
            if ($?) {
                Write-Host "✓ Repositorio remoto configurado" -ForegroundColor Green
            }
        }
    }
    
    # Verificar cambios
    if (-not (Test-HasChanges)) {
        Write-Host "✓ No hay cambios para subir" -ForegroundColor Green
    } else {
        Write-Host "📋 Archivos modificados detectados:" -ForegroundColor Cyan
        git status --short
        
        # Agregar todos los archivos
        Write-Host ""
        Write-Host "📦 Agregando archivos..." -ForegroundColor Yellow
        git add .
        
        if (-not $?) {
            Write-Host "✗ Error al agregar archivos" -ForegroundColor Red
            return $false
        }
        
        Write-Host "✓ Archivos agregados" -ForegroundColor Green
        
        # Hacer commit
        Write-Host ""
        $commitMessage = Read-Host "Mensaje del commit (deja vacío para usar 'Update')"
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Update - " + (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
        }
        
        git commit -m $commitMessage
        
        if (-not $?) {
            Write-Host "✗ Error al hacer commit" -ForegroundColor Red
            return $false
        }
        
        Write-Host "✓ Commit creado: $commitMessage" -ForegroundColor Green
    }
    
    # Hacer push si hay remote configurado
    $remotes = git remote -v
    if ($remotes) {
        Write-Host ""
        Write-Host "🚀 Subiendo a GitHub..." -ForegroundColor Yellow
        
        try {
            git branch -M main 2>$null
            git push -u origin main
            
            if ($?) {
                Write-Host "✓ Código subido a GitHub exitosamente" -ForegroundColor Green
                return $true
            } else {
                Write-Host "✗ Error al subir a GitHub" -ForegroundColor Red
                Write-Host "  Posibles causas:" -ForegroundColor Yellow
                Write-Host "  - No has configurado autenticación (usar GitHub Personal Access Token)" -ForegroundColor Yellow
                Write-Host "  - El repositorio remoto no existe" -ForegroundColor Yellow
                return $false
            }
        } catch {
            Write-Host "✗ Error al subir a GitHub: $_" -ForegroundColor Red
            return $false
        }
    } else {
        Write-Host "⚠️  No hay repositorio remoto configurado" -ForegroundColor Yellow
        Write-Host "  Puedes configurarlo manualmente con:" -ForegroundColor Yellow
        Write-Host "  git remote add origin https://github.com/tu-usuario/tu-repo.git" -ForegroundColor White
        return $false
    }
}

# Función para desplegar a Firebase
function Deploy-ToFirebase {
    Write-Host ""
    Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║  2. DESPLEGANDO A FIREBASE                                   ║" -ForegroundColor Cyan
    Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
    
    if (-not (Test-FirebaseInstalled)) {
        Write-Host "⚠️  Saltando Firebase (CLI no instalado)" -ForegroundColor Yellow
        Write-Host "  Para instalar Firebase CLI:" -ForegroundColor Yellow
        Write-Host "  npm install -g firebase-tools" -ForegroundColor White
        return $false
    }
    
    # Verificar si está logueado
    Write-Host "🔐 Verificando autenticación de Firebase..." -ForegroundColor Yellow
    try {
        $user = firebase login:list 2>&1
        if ($user -match "No authorized accounts") {
            Write-Host "⚠️  No estás logueado en Firebase" -ForegroundColor Yellow
            Write-Host "  Ejecutando login..." -ForegroundColor Yellow
            firebase login
        } else {
            Write-Host "✓ Autenticado en Firebase" -ForegroundColor Green
        }
    } catch {
        Write-Host "⚠️  Error al verificar autenticación" -ForegroundColor Yellow
    }
    
    # Preguntar qué desplegar
    Write-Host ""
    Write-Host "¿Qué quieres desplegar?" -ForegroundColor Cyan
    Write-Host "  1. Solo Hosting (archivos web)" -ForegroundColor White
    Write-Host "  2. Solo Firestore Rules (reglas de seguridad)" -ForegroundColor White
    Write-Host "  3. Todo (Hosting + Firestore Rules)" -ForegroundColor White
    Write-Host "  0. Saltar Firebase" -ForegroundColor White
    
    $opcion = Read-Host "Opción"
    
    switch ($opcion) {
        "1" {
            Write-Host "🚀 Desplegando Hosting..." -ForegroundColor Yellow
            firebase deploy --only hosting
            if ($?) {
                Write-Host "✓ Hosting desplegado exitosamente" -ForegroundColor Green
            }
        }
        "2" {
            Write-Host "🚀 Desplegando Firestore Rules..." -ForegroundColor Yellow
            firebase deploy --only firestore:rules
            if ($?) {
                Write-Host "✓ Firestore Rules desplegadas exitosamente" -ForegroundColor Green
            }
        }
        "3" {
            Write-Host "🚀 Desplegando todo..." -ForegroundColor Yellow
            firebase deploy
            if ($?) {
                Write-Host "✓ Todo desplegado exitosamente" -ForegroundColor Green
            }
        }
        "0" {
            Write-Host "⚠️  Saltando despliegue de Firebase" -ForegroundColor Yellow
        }
        default {
            Write-Host "✗ Opción inválida" -ForegroundColor Red
        }
    }
}

# Función principal
function Main {
    Write-Host ""
    Write-Host "Este script te ayudará a:" -ForegroundColor Yellow
    Write-Host "  ✓ Subir código a GitHub" -ForegroundColor White
    Write-Host "  ✓ Desplegar en Firebase (Hosting + Firestore Rules)" -ForegroundColor White
    Write-Host ""
    
    $continuar = Read-Host "¿Continuar? (S/N)"
    if ($continuar -ne "S" -and $continuar -ne "s") {
        Write-Host "Operación cancelada" -ForegroundColor Yellow
        return
    }
    
    # Desplegar a GitHub
    if ($GITHUB_REPO) {
        Deploy-ToGitHub
    } else {
        Write-Host ""
        Write-Host "⚠️  Saltando GitHub (no se proporcionó URL)" -ForegroundColor Yellow
    }
    
    # Desplegar a Firebase
    Deploy-ToFirebase
    
    # Resumen final
    Write-Host ""
    Write-Host "========================================================================" -ForegroundColor Cyan
    Write-Host "  DESPLIEGUE COMPLETADO" -ForegroundColor Green
    Write-Host "========================================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📱 URLs de tu aplicación:" -ForegroundColor Yellow
    Write-Host "  Firebase: https://maikafit-f1756.web.app" -ForegroundColor White
    Write-Host "  Alternativa: https://maikafit-f1756.firebaseapp.com" -ForegroundColor White
    Write-Host ""
    
    if ($GITHUB_REPO) {
        Write-Host "📂 Tu código está en GitHub: $GITHUB_REPO" -ForegroundColor Green
        Write-Host ""
    }
    
    Write-Host "✅ ¡Todo listo!" -ForegroundColor Green
    Write-Host ""
}

# Ejecutar
Main

