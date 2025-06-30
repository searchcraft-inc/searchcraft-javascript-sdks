import path, { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  stories: [
    '../../stories/vue-config-stories/**/*.stories.@(js|jsx|ts|tsx|vue)',
  ],
  addons: [],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  staticDirs: ['../../public'],
  viteFinal: (config) => {
    config.plugins = [...(config.plugins || []), vue()];
    config.resolve = {
      alias: {
        ...(config.resolve?.alias || {}),
        vue: resolve('./node_modules/vue'), // Forces Storybook and SDK to use the same Vue instance
        '@utils': path.resolve(__dirname, '../../utils'),
        '@common': path.resolve(__dirname, '../../../common'),
      },
    };
    return config;
  },
};

export default config;
