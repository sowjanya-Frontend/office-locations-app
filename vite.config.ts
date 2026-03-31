import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts"
  },
  server: {
    proxy: {
      '/afhwm': {
        target: 'https://www.afhwm.co.uk',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/afhwm/, ''),
      }
    }
  }
})
