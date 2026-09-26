# Calibre — Técnico Medio de Calidad (Diputación de Alicante)

Plataforma de estudio para la bolsa de **Técnico Medio de Calidad (A2)**.

## Publicación automática (GitHub Pages)

En cada push a `main`/`master`, la Action `.github/workflows/deploy-pages.yml` construye y publica el sitio.

1. Crea el repo en GitHub y haz push
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Tras el primer workflow en verde, la URL será:
   `https://<usuario>.github.io/<nombre-del-repo>/`

El progreso de estudio sigue en `localStorage` del navegador (no se guarda en el servidor).

## Arranque local

```bash
export PATH="$HOME/.local/node/bin:$PATH"
cd ~/oposicion-calidad-dipu-alicante
npm install
npm run dev
```

## Flujo de estudio

1. **Temario** → elige un tema → lee el contenido → **Test completo** (32 preguntas) o repaso rápido (15)
2. **Exámenes** → mezclas: oficial 50, medio 25, solo general, solo calidad, sprint, o práctica con feedback
3. Inicio: repetición espaciada y cola de fallos

## Contenido

- 15 temas con temario legible por secciones
- **480 preguntas** (32 por tema)
- Simulacros con penalización −1/3 y 1 min/pregunta
- Casos para la 2ª parte
- Progreso en `localStorage`
