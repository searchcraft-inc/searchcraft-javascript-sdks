// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    outDir: 'dist/server',
    lib: {
      entry: resolve(__dirname, 'src/server/index.ts'),
      formats: ['es'],
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: (id) => {
        return (
          id === 'react' ||
          id === 'react-dom' ||
          id === '@searchcraft/javascript-sdk/hydrate' ||
          id.startsWith('react/') ||
          id.startsWith('react-dom/')
        );
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {},
  },
});
