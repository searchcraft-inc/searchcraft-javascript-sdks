import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';
import type { Components } from '@searchcraft/javascript-sdk';

const componentName = 'searchcraft-input-label';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input-label',
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

const defaultProps: Components.SearchcraftInputLabel = {
  inputLabelClassName: '',
  label: 'Search Label',
};

export const Default: StoryObj<Components.SearchcraftInputLabel> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
