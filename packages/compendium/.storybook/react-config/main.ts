import type { StorybookConfig } from '@storybook/react-vite';

import path, { dirname, join } from 'node:path';
import { mergeConfig } from 'vite';

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../../stories/react-config-stories/**/*.mdx',
    '../../stories/react-config-stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  staticDirs: ['../../public'],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@utils': path.resolve(__dirname, '../../utils'),
        },
      },
    });
  },
};
export default config;
