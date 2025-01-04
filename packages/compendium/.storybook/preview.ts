import type { Preview } from '@storybook/react';
import { defineCustomElements } from '@searchcraft/javascript-sdk/components';

defineCustomElements();

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
