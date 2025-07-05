import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: './',
  plugins: [react()].filter(Boolean),
  publicDir: './public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
