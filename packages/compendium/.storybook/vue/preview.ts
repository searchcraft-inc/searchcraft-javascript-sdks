import { defineCustomElements } from '@searchcraft/javascript-sdk/loader';
import type { Preview } from '@storybook/vue3';

defineCustomElements(window);

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
