import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';
import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentName = 'searchcraft-button';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-button',
  argTypes: {
    icon: {
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
  },
};

const defaultProps: Components.SearchcraftButton = {
  icon: undefined,
  iconOnly: false,
  iconPosition: 'left',
  label: 'Search',
};

export const Default: StoryObj<Components.SearchcraftButton> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft(config);
      }, []);
      return <Story />;
    },
  ],
  render: (args) => (
    <>
      <searchcraft-theme />
      <WebComponentWrapper args={args} componentName={componentName} />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
