import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

const componentName = 'searchcraft-input-icon';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input/searchcraft-input-icon',
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Indicates if the input icon represents an error state.',
    },
    height: {
      control: 'number',
      description: 'The height of the icon.',
    },
    width: {
      control: 'number',
      description: 'The width of the icon.',
    },
    rightToLeftOrientation: {
      control: 'boolean',
      description:
        'Whether the icon should be rendered with right-to-left orientation.',
    },
  },
};

type ComponentProps = {
  error?: boolean;
  height?: number;
  rightToLeftOrientation?: boolean;
  width?: number;
};

const defaultProps: ComponentProps = {
  error: false,
  height: 20,
  width: 20,
  rightToLeftOrientation: false,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
