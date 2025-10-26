import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'lab5/index.html'
      },
      output: {
        dir: 'dist'
      }
    }
  }
})