import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // if your frontend imports from the sibling "common" folder:
      '@common': path.resolve(__dirname, '../common/src'),
    },
  },
})
