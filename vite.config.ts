import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base — под GitHub Pages (проектная страница в подпапке репозитория).
// Локально (npm run dev) base игнорируется, работает как обычно.
export default defineConfig({
  plugins: [react()],
  base: '/ona-uyi-presentation/',
})
