import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'website', // 替換成你的 GitHub repository 名稱
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});