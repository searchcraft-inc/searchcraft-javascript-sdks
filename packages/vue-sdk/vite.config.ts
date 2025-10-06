import { resolve } from 'node:path';
import { copyFileSync, mkdirSync } from 'node:fs';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dtsPlugin from 'vite-plugin-dts';
import { defineConfig } from 'vite';

// Custom plugin to copy themes from javascript-sdk
const copyThemesPlugin = () => ({
  name: 'copy-themes',
  writeBundle() {
    const themesDir = resolve(__dirname, 'dist/themes');
    const sourceThemesDir = resolve(__dirname, '../javascript-sdk/dist/themes');

    try {
      mkdirSync(themesDir, { recursive: true });
      copyFileSync(
        resolve(sourceThemesDir, 'hologram.css'),
        resolve(themesDir, 'hologram.css')
      );
      copyFileSync(
        resolve(sourceThemesDir, 'hologram.css.map'),
        resolve(themesDir, 'hologram.css.map')
      );
    } catch (error) {
      console.warn('Could not copy themes:', error);
    }
  },
});



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
    dtsPlugin({ rollupTypes: true, insertTypesEntry: false }),
    copyThemesPlugin(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SearchcraftVueSdk',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'vue/server-renderer'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    copyPublicDir: false,
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
