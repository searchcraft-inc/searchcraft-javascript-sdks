import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from './_WebComponentWrapper';

const componentName = 'searchcraft-input-label';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input/searchcraft-input-label',
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
};

type ComponentProps = {
  inputLabelClassName?: string;
  label?: string;
};

const defaultProps: ComponentProps = {
  inputLabelClassName: '',
  label: 'Search Label',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
