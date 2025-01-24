import { SearchcraftInputLabel } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-input-label',
  component: SearchcraftInputLabel,
  argTypes: {
    inputLabelClassName: {
      control: 'text',
      description: 'Custom class name for the label.',
    },
    label: {
      control: 'text',
      description: 'The text content for the input label.',
    },
  },
} as Meta;

const defaultProps = {
  inputLabelClassName: '',
  label: 'Search Label',
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftInputLabel },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 1rem;">
      <SearchcraftInputLabel v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
