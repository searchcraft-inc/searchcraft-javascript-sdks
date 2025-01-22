import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
  stories: ['../../stories/react-sdk/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins = [...(config.plugins || []), react()];
    return config;
  },
};

export default config;
