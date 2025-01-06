import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from './_WebComponentWrapper';

const componentName = 'searchcraft-slider';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-slider',
  argTypes: {
    maxYear: {
      control: 'number',
      description: 'The maximum year that the slider can select.',
    },
    minYear: {
      control: 'number',
      description: 'The minimum year that the slider can select.',
    },
  },
};

type ComponentProps = {
  maxYear?: number;
  minYear?: number;
};

const defaultProps: ComponentProps = {
  maxYear: new Date().getFullYear(),
  minYear: 2014,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
