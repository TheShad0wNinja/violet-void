import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, "./src/modules"),
			'@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs' 
    }
  }
})
