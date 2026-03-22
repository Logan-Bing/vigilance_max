import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "823b-62-210-34-91.ngrok-free.app",
      "localhost",
    ]
  },
  plugins: [
    tailwindcss(),
  ],
})
