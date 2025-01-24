import { SearchcraftErrorMessage } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-error-message',
  component: SearchcraftErrorMessage,
  argTypes: {
    errorMessage: {
      control: 'text',
      description: 'The error message text to display.',
    },
  },
} as Meta;

const defaultProps = {
  errorMessage: 'An error occurred while processing your request.',
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftErrorMessage },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 1rem;">
      <SearchcraftErrorMessage v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
