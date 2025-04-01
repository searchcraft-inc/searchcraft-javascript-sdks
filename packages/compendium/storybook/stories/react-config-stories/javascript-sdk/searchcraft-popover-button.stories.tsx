import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-button',
  argTypes: {},
};

export const WithSlot: StoryObj<Components.SearchcraftPopoverButton> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_KOBOL_READ_KEY,
          endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
          index: [import.meta.env.VITE_KOBOL_INDEX],
        });
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <searchcraft-popover-button>
          <span>Click me</span>
        </searchcraft-popover-button>
      </>
    );
  },
  args: {},
};

export const WithoutSlot: StoryObj<Components.SearchcraftPopoverButton> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_KOBOL_READ_KEY,
          endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
          index: [import.meta.env.VITE_KOBOL_INDEX],
        });
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <searchcraft-popover-button type='keycap' />
      </>
    );
  },
  args: {},
};

export default componentMeta;
