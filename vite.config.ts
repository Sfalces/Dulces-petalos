import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      _di: path.resolve(__dirname, 'src/_di'),
      core: path.resolve(__dirname, 'src/core')
    }
  }
})
