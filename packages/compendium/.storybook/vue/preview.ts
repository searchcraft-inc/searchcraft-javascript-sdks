import { defineCustomElements } from '@searchcraft/javascript-sdk/components';
import type { Preview } from '@storybook/vue3';

defineCustomElements();

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
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
