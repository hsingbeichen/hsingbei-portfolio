import { readdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))

// Every .html in the project root is a page, so a new case page needs no entry here
const pages = Object.fromEntries(
  readdirSync(root).filter((f) => f.endsWith('.html')).map((f) => [f.replace('.html', ''), root + f]),
)

// GitHub Pages serves this repo under /hsingbei-portfolio/
export default defineConfig({
  base: '/hsingbei-portfolio/',
  build: { rollupOptions: { input: pages } },
})
