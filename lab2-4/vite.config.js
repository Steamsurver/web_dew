import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base:'/web_dew/',
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