import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from './_WebComponentWrapper';

const componentName = 'searchcraft-button';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-button',
  argTypes: {
    iconElement: {
      control: 'text',
      description: 'Optional icon element to display.',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Display only the icon without the label.',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the label.',
    },
    label: { control: 'text', description: 'The text label for the button.' },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The theme of the button (light or dark).',
    },
    isRequesting: {
      control: 'boolean',
      description: 'Indicates if the button is in a loading state.',
    },
  },
};

type ComponentProps = {
  iconElement?: Element;
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  label?: string;
  theme?: 'light' | 'dark';
  isRequesting?: boolean;
};

const defaultProps: ComponentProps = {
  iconElement: undefined,
  iconOnly: false,
  iconPosition: 'left',
  label: 'Search',
  theme: 'light',
  isRequesting: false,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
