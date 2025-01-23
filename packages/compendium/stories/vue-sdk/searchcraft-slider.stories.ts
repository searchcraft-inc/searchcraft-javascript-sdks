import { SearchcraftSlider } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-slider',
  component: SearchcraftSlider,
  argTypes: {
    dataType: {
      control: 'text',
      description: 'The type of data represented by the slider (e.g., number).',
    },
    granularity: {
      control: 'number',
      description: 'The granularity or step size for the slider.',
    },
    max: {
      control: 'number',
      description: 'The maximum value for the slider.',
    },
    min: {
      control: 'number',
      description: 'The minimum value for the slider.',
    },
  },
} as Meta;

const defaultProps = {
  dataType: 'number',
  granularity: 0,
  max: 100,
  min: 0,
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftSlider },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 1rem;">
      <SearchcraftSlider v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
