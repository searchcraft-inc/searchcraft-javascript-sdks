import { SearchcraftToggleButton } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-toggle-button',
  component: SearchcraftToggleButton,
  argTypes: {
    subLabel: {
      control: 'text',
      description: 'Sub-label for the toggle button.',
    },
    label: {
      control: 'text',
      description: 'Label for the toggle button.',
    },
  },
} as Meta;

const defaultProps = {
  subLabel: '',
  label: 'Toggle Label',
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftToggleButton },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 1rem;">
      <SearchcraftToggleButton v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
