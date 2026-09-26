import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Rutas relativas para poder empaquetar dist/ y servirlo en cualquier carpeta
  base: './',
})
