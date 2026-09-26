@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo  === Calibre - Estudio oposicion Calidad Dipu Alicante ===
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] No se encontro Node.js.
  echo Descarga e instala la version LTS desde:
  echo   https://nodejs.org/
  echo Luego vuelve a ejecutar este archivo.
  echo.
  pause
  exit /b 1
)

echo Node detectado:
node -v
echo.

if not exist "node_modules\" (
  echo Instalando dependencias la primera vez ^(puede tardar unos minutos^)...
  call npm install
  if errorlevel 1 (
    echo [ERROR] Fallo npm install.
    pause
    exit /b 1
  )
  echo.
)

echo Arrancando la app...
echo Cuando veas "Local: http://localhost:5173/" abre esa URL en el navegador.
echo Para cerrar: Ctrl+C en esta ventana.
echo.

call npm run dev -- --host 127.0.0.1 --port 5173
pause
