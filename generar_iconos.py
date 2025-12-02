#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar todos los iconos PWA desde una imagen original
Requisitos: pip install Pillow
"""

from PIL import Image
import sys
import os
import io

# Configurar la salida a UTF-8 para Windows
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

def generar_iconos(imagen_original, output_dir="."):
    """
    Genera todos los iconos PWA desde una imagen original
    
    Args:
        imagen_original: Ruta a la imagen original
        output_dir: Directorio donde guardar los iconos (por defecto: directorio actual)
    """
    try:
        # Abrir la imagen original
        print(f"📸 Abriendo imagen: {imagen_original}")
        img = Image.open(imagen_original)
        
        # Convertir a RGB si es necesario
        if img.mode != 'RGB':
            print("🔄 Convirtiendo a RGB...")
            img = img.convert('RGB')
        
        # Obtener dimensiones
        width, height = img.size
        print(f"📐 Dimensiones originales: {width}x{height}")
        
        # Crear una versión cuadrada
        min_dim = min(width, height)
        
        # Recortar centrado verticalmente y horizontalmente
        left = (width - min_dim) / 2
        top = (height - min_dim) / 2
        right = (width + min_dim) / 2
        bottom = (height + min_dim) / 2
        
        img_cropped = img.crop((left, top, right, bottom))
        print(f"✂️  Imagen recortada a: {min_dim}x{min_dim}")
        
        # Tamaños a generar (en orden)
        sizes = [
            16, 32, 72, 96, 128, 
            144, 152, 167, 180, 
            192, 384, 512
        ]
        
        print(f"\n🎨 Generando {len(sizes)} iconos...")
        print("-" * 50)
        
        # Generar cada tamaño
        for size in sizes:
            # Usar LANCZOS para mejor calidad
            resized = img_cropped.resize((size, size), Image.Resampling.LANCZOS)
            filename = f"icon-{size}x{size}.png"
            filepath = os.path.join(output_dir, filename)
            
            # Guardar con alta calidad y sin optimizar para PWA
            resized.save(filepath, "PNG", optimize=False)
            print(f"✅ {filename:25s} [{size:3d}x{size:3d}px]")
        
        print("-" * 50)
        print(f"\n🎉 ¡Todos los iconos generados exitosamente en: {os.path.abspath(output_dir)}")
        print("\n📋 Próximos pasos:")
        print("   1. Verifica que todos los archivos estén en la raíz del proyecto")
        print("   2. Abre index.html en tu navegador")
        print("   3. Ve a DevTools > Application > Manifest para verificar")
        print("   4. Prueba 'Agregar a pantalla de inicio' en tu dispositivo móvil")
        
    except FileNotFoundError:
        print(f"❌ Error: No se encontró la imagen '{imagen_original}'")
        print("   Verifica que la ruta sea correcta")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error inesperado: {e}")
        sys.exit(1)

if __name__ == "__main__":
    print("=" * 50)
    print("🖼️  GENERADOR DE ICONOS PWA - MAIKA PORCUNA")
    print("=" * 50)
    print()
    
    # Verificar argumentos
    if len(sys.argv) < 2:
        print("Uso: python generar_iconos.py <imagen_original> [directorio_destino]")
        print()
        print("Ejemplo: python generar_iconos.py foto_maika.jpg")
        print("Ejemplo: python generar_iconos.py foto_maika.jpg ./iconos")
        print()
        print("Requisitos:")
        print("  pip install Pillow")
        sys.exit(1)
    
    imagen_original = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "."
    
    # Crear directorio de salida si no existe
    if output_dir != "." and not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    generar_iconos(imagen_original, output_dir)

