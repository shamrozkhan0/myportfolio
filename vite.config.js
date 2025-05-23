import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'myportfolio';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
