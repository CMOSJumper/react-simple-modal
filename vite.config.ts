import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/main.ts'),
      name: 'react-simple-modal',
      fileName: 'react-simple-modal',
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'dev/*'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react()],
});
