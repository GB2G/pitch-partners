import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://gb2g.github.io/pitch-partners/
  base: '/pitch-partners/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
})
