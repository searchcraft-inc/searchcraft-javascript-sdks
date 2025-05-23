import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

import {
  admAdTemplatePopover,
  popoverResultMappings,
  popoverResultMappingsRunegard,
} from '@common/index.js';

import '@common/searchcraft-popover-form/popover-form-with-content.scss';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-form',
  argTypes: {},
};

export const Inline: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          index: [import.meta.env.VITE_INDEX_BAZAARIO],
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
        <div className='searchcraft-popover-form-with-content'>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-form
            type='inline'
            hotkey='k'
            hotkey-modifier='ctrl'
          />
          <p>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
        </div>
      </>
    );
  },
  args: {},
};

export const InlineWithAds: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          index: [import.meta.env.VITE_INDEX_BAZAARIO],
          adSource: 'adMarketplace',
          admSub: 'searchbox1',
          admProductAdQuantity: 3,
          admTextAdQuantity: 3,
          admAdTemplate: admAdTemplatePopover,
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
        <div className='searchcraft-popover-form-with-content'>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-form
            type='inline'
            hotkey='k'
            hotkey-modifier='ctrl'
          />
          <p>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
        </div>
      </>
    );
  },
  args: {},
};

export const Modal: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          index: [import.meta.env.VITE_INDEX_BAZAARIO],
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
        <div className='searchcraft-popover-form-with-content'>
          <div style={{ marginBottom: 20 }}>
            <p>Story Note: This story uses the Bazaario env vars</p>
          </div>
          <searchcraft-popover-button />
          <searchcraft-popover-form
            type='modal'
            hotkey='k'
            hotkey-modifier='ctrl'
          />
        </div>
      </>
    );
  },
  args: {},
};

export const Fullscreen: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
        });
        const popoverForm = document.querySelector('searchcraft-popover-form');

        if (popoverForm) {
          popoverForm.popoverResultMappings = popoverResultMappingsRunegard;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <div className='searchcraft-popover-form-with-content'>
          <div style={{ marginBottom: 20 }}>
            <p>Story Note: This story uses the Echostream env vars</p>
          </div>
          <searchcraft-popover-button />
          <searchcraft-popover-form
            type='fullscreen'
            hotkey='k'
            hotkey-modifier='ctrl'
          />
        </div>
      </>
    );
  },
  args: {},
};

export default componentMeta;
