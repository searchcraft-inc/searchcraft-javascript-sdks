import type { StorybookConfig } from '@storybook/react-vite';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../../stories/react-config-stories/**/*.mdx',
    '../../stories/react-config-stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@chromatic-com/storybook'],
  staticDirs: ['../../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@utils': path.resolve(__dirname, '../../utils'),
          '@common': path.resolve(__dirname, '../../../common'),
        },
      },
    });
  },
};
export default config;
