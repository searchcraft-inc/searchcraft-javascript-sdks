import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  type SearchcraftConfig,
  Searchcraft,
  type Components,
} from '@searchcraft/javascript-sdk';

import { popoverResultMappings } from '../../../../common/index.js';

import '../../../../common/searchcraft-popover-form/popover-form-with-content.scss';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-form',
  argTypes: {},
};

export const Inline: StoryObj<Components.SearchcraftPopoverForm> = {
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
        const config: SearchcraftConfig = {
          readKey: import.meta.env.VITE_KOBOL_READ_KEY,
          endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
          index: [import.meta.env.VITE_KOBOL_INDEX],
          adSource: 'adMarketplace',
          admSub: 'searchbox1',
          admProductAdQuantity: 3,
          admTextAdQuantity: 3,
        };
        new Searchcraft(config);
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
        <div className='searchcraft-popover-form-with-content'>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-button>
            <span>Click me</span>
          </searchcraft-popover-button>
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
        <div className='searchcraft-popover-form-with-content'>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-button>
            <span>Click me</span>
          </searchcraft-popover-button>
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
