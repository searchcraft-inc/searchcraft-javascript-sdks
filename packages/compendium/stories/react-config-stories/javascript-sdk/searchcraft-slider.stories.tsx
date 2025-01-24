import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';

import type { Components } from '@searchcraft/javascript-sdk';

const componentName = 'searchcraft-slider';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-slider',
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    granularity: {
      control: 'number',
    },
  },
};

const defaultProps: Components.SearchcraftSlider = {
  min: 0,
  max: 100,
  granularity: 4,
  dataType: 'number',
};

export const Default: StoryObj<Components.SearchcraftSlider> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
