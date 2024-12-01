import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/LungCancerDetection/',  // Make sure the repository name matches here
  build: {
    outDir: 'dist',
  },
});
