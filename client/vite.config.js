import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://crud-web-app-server.vercel.app',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true
      },
    }
  },
  plugins: [react()],
})
