import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftSlider,
  type SearchcraftSliderProps,
} from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-slider',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the toggle button.',
    },
    subLabel: {
      control: 'text',
      description: 'Sub-label for the toggle button.',
    },
  },
};

const defaultProps: SearchcraftSliderProps = {
  dataType: 'number',
  granularity: 0,
  max: 100,
  min: 0,
};

export const Default: StoryObj<SearchcraftSliderProps> = {
  render: (args) => (
    <SearchcraftSlider
      dataType={args.dataType}
      granularity={args.granularity}
      max={args.max}
      min={args.min}
    />
  ),
  args: defaultProps,
};

export default componentMeta;
