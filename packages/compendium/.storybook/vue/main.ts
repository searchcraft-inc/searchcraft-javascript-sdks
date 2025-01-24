import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  stories: ['../../stories/vue-sdk/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins = [...(config.plugins || []), vue()];
    config.resolve = {
      alias: {
        ...(config.resolve?.alias || {}),
        vue: resolve('./node_modules/vue'), // Forces Storybook and SDK to use the same Vue instance
      },
    };
    return config;
  },
};

export default config;
