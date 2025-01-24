import { defineCustomElements } from '@searchcraft/javascript-sdk/loader';
import type { Preview } from '@storybook/vue3';

defineCustomElements(window);

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
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
