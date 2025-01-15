import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftInputLabel,
  type SearchcraftInputLabelProps,
} from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-input-label',
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

const defaultProps: SearchcraftInputLabelProps = {
  inputLabelClassName: '',
  label: 'Search Label',
};

export const Default: StoryObj<SearchcraftInputLabelProps> = {
  render: (args) => <SearchcraftInputLabel label={args.label} />,
  args: defaultProps,
};

export default componentMeta;
