@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo  === Calibre (version compilada) ===
echo  No necesita instalar Node.js
echo.

REM Abre el navegador unos segundos despues de arrancar el servidor
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:8080/'"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1"
if errorlevel 1 (
  echo.
  echo Si Windows bloqueo el script: clic derecho en servidor.ps1 -^> Propiedades -^> Desbloquear
  echo O ejecuta PowerShell como usuario normal y: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
  echo.
  pause
)
