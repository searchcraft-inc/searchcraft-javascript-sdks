import type { Meta, StoryObj } from '@storybook/react';
import { SearchcraftInputLabel } from '@searchcraft/react-sdk';

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

type ComponentProps = {
  inputLabelClassName?: string;
  label: string;
};

const defaultProps: ComponentProps = {
  inputLabelClassName: '',
  label: 'Search Label',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => <SearchcraftInputLabel label={args.label} />,
  args: defaultProps,
};

export default componentMeta;
