// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dtsPlugin from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    outDir: 'dist/client',
    lib: {
      entry: resolve(__dirname, 'src/client/index.ts'),
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
  plugins: [
    react(),
    dtsPlugin({ rollupTypes: true, insertTypesEntry: false }),
    viteStaticCopy({
      targets: [
        {
          src: '../javascript-sdk/src/themes/hologram.{css,css.map}',
          dest: '.',
        },
      ],
    }),
  ],
  resolve: {
    alias: {},
  },
});
