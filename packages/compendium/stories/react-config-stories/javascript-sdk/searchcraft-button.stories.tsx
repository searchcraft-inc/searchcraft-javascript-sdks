import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';
import type { Components } from '@searchcraft/javascript-sdk';

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

const defaultProps: Components.SearchcraftButton = {
  iconElement: undefined,
  iconOnly: false,
  iconPosition: 'left',
  label: 'Search',
};

export const Default: StoryObj<Components.SearchcraftButton> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
