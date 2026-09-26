# Mini servidor HTTP estatico (sin Node) para la carpeta dist/
$ErrorActionPreference = 'Stop'
$port = 8080
$root = Join-Path $PSScriptRoot 'dist'
if (-not (Test-Path $root)) {
  Write-Host "ERROR: No se encuentra la carpeta 'dist' junto a este script." -ForegroundColor Red
  Read-Host "Pulsa Enter para salir"
  exit 1
}

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.ico'  = 'image/x-icon'
  '.json' = 'application/json'
  '.woff' = 'font/woff'
  '.woff2'= 'font/woff2'
  '.map'  = 'application/json'
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://127.0.0.1:$port/"
$listener.Prefixes.Add($prefix)
try {
  $listener.Start()
} catch {
  Write-Host "ERROR: No se pudo abrir el puerto $port. ¿Hay otra app usandolo?" -ForegroundColor Red
  Write-Host $_.Exception.Message
  Read-Host "Pulsa Enter para salir"
  exit 1
}

Write-Host ""
Write-Host " Servidor listo: $prefix" -ForegroundColor Green
Write-Host " Carpeta: $root"
Write-Host " Para cerrar: cierra esta ventana o Ctrl+C"
Write-Host ""

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    $path = [Uri]::UnescapeDataString($req.Url.LocalPath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
    $full = [System.IO.Path]::GetFullPath((Join-Path $root $path))
    $rootFull = [System.IO.Path]::GetFullPath($root)
    if (-not $full.StartsWith($rootFull)) {
      $res.StatusCode = 403
      $bytes = [Text.Encoding]::UTF8.GetBytes('Forbidden')
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } elseif (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
      # SPA fallback
      $full = Join-Path $root 'index.html'
      if (-not (Test-Path $full)) {
        $res.StatusCode = 404
        $bytes = [Text.Encoding]::UTF8.GetBytes('Not found')
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
      } else {
        $ext = '.html'
        $res.ContentType = $mime[$ext]
        $bytes = [System.IO.File]::ReadAllBytes($full)
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
      }
    } else {
      $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
      if ($mime.ContainsKey($ext)) { $res.ContentType = $mime[$ext] }
      else { $res.ContentType = 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    }
  } catch {
    $res.StatusCode = 500
  } finally {
    $res.OutputStream.Close()
  }
}
