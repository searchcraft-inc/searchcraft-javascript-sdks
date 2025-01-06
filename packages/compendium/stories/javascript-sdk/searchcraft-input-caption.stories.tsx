import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

const componentName = 'searchcraft-input-caption';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input/searchcraft-input-caption',
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Indicates if the caption represents an error state.',
    },
    inputCaptionClassName: {
      control: 'text',
      description: 'Custom class name for the caption.',
    },
    inputCaptionValue: {
      control: 'text',
      description: 'The caption text to display.',
    },
    rightToLeftOrientation: {
      control: 'boolean',
      description:
        'Whether the caption should be rendered with right-to-left orientation.',
    },
  },
};

type ComponentProps = {
  error?: boolean;
  inputCaptionClassName?: string;
  inputCaptionValue?: string;
  rightToLeftOrientation?: boolean;
};

const defaultProps: ComponentProps = {
  error: false,
  inputCaptionClassName: '',
  inputCaptionValue: 'Enter Search',
  rightToLeftOrientation: false,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
