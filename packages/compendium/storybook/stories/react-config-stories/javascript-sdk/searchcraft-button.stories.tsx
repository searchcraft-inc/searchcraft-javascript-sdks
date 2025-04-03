import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

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
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-button {...args} />,
  args: defaultProps,
};

export default componentMeta;
