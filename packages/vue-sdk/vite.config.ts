import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('searchcraft-'),
        },
      },
    }),
    vueJsx(),
    viteStaticCopy({
      targets: [
        {
          src: '../javascript-sdk/src/themes/*.{css,css.map}',
          dest: './themes',
        },
      ],
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
