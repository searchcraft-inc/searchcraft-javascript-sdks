import { defineCustomElements } from '@searchcraft/javascript-sdk/components';
import type { Preview } from '@storybook/react';

defineCustomElements();

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light', // Set the default background by name
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'neutral-warm', value: '#c1bfb3' },
        { name: 'neutral-cool', value: '#b3bac1' },
      ],
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
