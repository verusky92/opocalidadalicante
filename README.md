# Calibre — Técnico Medio de Calidad (Diputación de Alicante)

Plataforma de estudio para la bolsa de **Técnico Medio de Calidad (A2)**.

## Publicación (GitHub Pages)

Sitio en vivo: **https://verusky92.github.io/opocalidadalicante/**

Ahora mismo se publica desde la rama `gh-pages` (build estático).

Para autopublicar con GitHub Actions en cada push a `main`:

1. Autoriza el scope `workflow` (`gh auth refresh -s workflow`)
2. Sube `.github/workflows/deploy-pages.yml`
3. En **Settings → Pages → Source** elige **GitHub Actions**

Mientras tanto, tras cambiar código puedes republicar con build + push a `gh-pages`.

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
