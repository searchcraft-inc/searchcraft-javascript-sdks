import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('searchcraft-'), // Treat Stencil components as custom elements
        },
      },
    }),
    dts({
      entryRoot: './src',
      outDir: './dist',
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SearchcraftVueSdk',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue/server-renderer'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      vue: resolve('vue'),
      '#': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
});
