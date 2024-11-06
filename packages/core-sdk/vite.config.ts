/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@searchcraft/core',
      fileName: 'index',
      formats: ['es'],
    },
  },
  plugins: [
    dts({
      exclude: ['**/*.test.ts'],
    }),
  ],
});
