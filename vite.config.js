import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "2583-62-210-35-18.ngrok-free.app",
      "449d-62-210-35-18.ngrok-free.app",
      "localhost",
    ]
  },
  plugins: [
    tailwindcss(),
  ],
})
