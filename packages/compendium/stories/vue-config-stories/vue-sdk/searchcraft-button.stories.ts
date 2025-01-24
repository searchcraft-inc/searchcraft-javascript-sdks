import { SearchcraftButton } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-button',
  component: SearchcraftButton,
  argTypes: {
    iconOnly: {
      control: 'boolean',
      description: 'Only show Icon element within the button.',
    },
    iconPosition: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
      description: 'Icon position within the button.',
    },
    label: {
      control: 'text',
      description: 'Label for the button.',
    },
  },
} as Meta;

const defaultProps = {
  iconOnly: false,
  iconPosition: 'left',
  label: 'View Results',
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftButton },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex;">
      <SearchcraftButton v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
