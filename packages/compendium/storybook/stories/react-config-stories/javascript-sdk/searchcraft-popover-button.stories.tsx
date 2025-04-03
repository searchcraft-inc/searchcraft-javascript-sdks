import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

import { popoverResultMappings } from '@common/index.js';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-button',
  argTypes: {},
};

export const Default: StoryObj<Components.SearchcraftPopoverButton> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_KOBOL_READ_KEY,
          endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
          index: [import.meta.env.VITE_KOBOL_INDEX],
        });
        const popoverForm = document.querySelector('searchcraft-popover-form');

        if (popoverForm) {
          popoverForm.popoverResultMappings = popoverResultMappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <searchcraft-popover-button />
        <searchcraft-popover-form type='modal' />
      </>
    );
  },
  args: {},
};

export const Skeuomorphic: StoryObj<Components.SearchcraftPopoverButton> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_KOBOL_READ_KEY,
          endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
          index: [import.meta.env.VITE_KOBOL_INDEX],
        });
        const popoverForm = document.querySelector('searchcraft-popover-form');

        if (popoverForm) {
          popoverForm.popoverResultMappings = popoverResultMappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <searchcraft-popover-button type='skeuomorphic' />
        <searchcraft-popover-form type='modal' />
      </>
    );
  },
  args: {},
};

export default componentMeta;
