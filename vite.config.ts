import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: "https://158.101.106.176:3001/",
    },
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/path/to/main.js',
    },
  },
  plugins: [react()], base: '/Digital_Storytelling/'
})
