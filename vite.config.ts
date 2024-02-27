import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       // target: 'http://localhost:8000/api',
  //       // target: "https://note-backend-boze.onrender.com/api",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/,''),
  //     },
  //   },
  // },
})
