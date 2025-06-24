import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Needed for path.resolve
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Useful for absolute imports like '@/components/Header'
    },
  },
  build: {
    // Client-side build configuration
    outDir: 'dist/client',
    rollupOptions: {
      input: {
        app: './index.html',
      },
    },
    ssrManifest: true, // This generates ssr-manifest.json for asset preloading
  },
  // Dev server options (if needed, but server.js typically handles this)
  server: {
    port: 5173, // Default Vite port
  },
});