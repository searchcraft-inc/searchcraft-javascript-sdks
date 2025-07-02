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
  addons: [getAbsolutePath('@chromatic-com/storybook')],
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
          '@common': path.resolve(__dirname, '../../../common'),
        },
      },
    });
  },
};
export default config;
