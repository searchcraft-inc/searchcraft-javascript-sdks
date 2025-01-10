import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

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

type ComponentProps = {
  min: number;
  max: number;
  granularity: number;
};

const defaultProps: ComponentProps = {
  min: 0,
  max: 100,
  granularity: 4,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
