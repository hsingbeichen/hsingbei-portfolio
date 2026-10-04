import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const page = (file) => fileURLToPath(new URL(file, import.meta.url))

// GitHub Pages serves this repo under /hsingbei-portfolio/
export default defineConfig({
  base: '/hsingbei-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: page('./index.html'),
        about: page('./about.html'),
      },
    },
  },
})
