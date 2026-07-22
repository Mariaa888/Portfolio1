import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio1/',
  plugins: [
    tailwindcss(),
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    port: 3031
  }
})
