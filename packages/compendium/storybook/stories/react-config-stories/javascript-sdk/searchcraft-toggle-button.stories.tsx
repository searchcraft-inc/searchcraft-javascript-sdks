import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-toggle-button',
  argTypes: {
    label: {
      control: 'text',
    },
    subLabel: {
      control: 'text',
    },
  },
};

const defaultProps: Components.SearchcraftToggleButton = {
  label: 'Exact Match',
  subLabel: 'Specify to use exact matching or fuzzy matching.',
};

export const Default: StoryObj<Components.SearchcraftToggleButton> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-toggle-button {...args} />,
  args: defaultProps,
};

export default componentMeta;
