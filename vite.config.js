import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "localhost",
    ]
  },
  plugins: [
    tailwindcss(),
  ],
})
