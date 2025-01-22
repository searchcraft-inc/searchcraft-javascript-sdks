import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    dts({ exclude: ['vite.config.ts'] }),
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
