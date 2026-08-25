import { defineConfig } from 'vite'
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'pglite-repl'
      }
    }
  }
})