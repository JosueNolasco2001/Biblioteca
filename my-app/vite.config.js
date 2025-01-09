import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Asegura rutas relativas para Electron
  build: {
    outDir: 'dist', // Directorio donde Electron busca los archivos
  },
});
