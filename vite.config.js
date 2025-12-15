import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://bsahoo8342.github.io/biswajit', // Change this to your GitHub repository name
})
