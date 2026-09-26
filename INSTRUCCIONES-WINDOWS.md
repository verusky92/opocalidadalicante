# Cómo pasarlo a un PC con Windows

## Opción A — Ya compilado (recomendada, sin Node)

Archivo listo:

`Calibre-Windows-compilado.zip`

En Windows:

1. Descomprimir
2. Doble clic en **`abrir.bat`**
3. Se abre el navegador en http://127.0.0.1:8080/

No hace falta instalar Node.js. Usa un mini-servidor en PowerShell.

Para regenerar el zip en Linux tras cambios:

```bash
cd ~/oposicion-calidad-dipu-alicante
export PATH="$HOME/.local/node/bin:$PATH"
npm run build
rm -rf release-windows && mkdir release-windows
cp -r dist packaging/abrir.bat packaging/servidor.ps1 packaging/LEEME.txt release-windows/
(cd release-windows && zip -r ../Calibre-Windows-compilado.zip .)
```

---

## Opción B — Código fuente + Node.js

1. Instalar Node.js LTS: https://nodejs.org/
2. Descomprimir el proyecto (sin `node_modules`)
3. Doble clic en `start.bat`
4. Abrir http://127.0.0.1:5173/

---

## Notas

- El progreso se guarda en el navegador de ese PC (`localStorage`)
- Si Windows bloquea `servidor.ps1`: clic derecho → Propiedades → Desbloquear
