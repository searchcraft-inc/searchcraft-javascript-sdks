import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
} from '@searchcraft/react-sdk';

import { popoverResultMappings } from '@common/index.js';

import '@common/searchcraft-popover-form/popover-form-with-content.scss';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-popover-form',
  argTypes: {},
};

export const Inline: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          index: [import.meta.env.VITE_INDEX_BAZAARIO],
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <div className='searchcraft-popover-form-with-content'>
        <p>Story Note: This story uses the Bazaario env vars</p>
        <SearchcraftPopoverForm
          hotkey='k'
          hotkeyModifier='ctrl'
          popoverResultMappings={popoverResultMappings}
          type='inline'
        />
        <p style={{ marginBottom: 100 }}>
          Here's some content that shows up underneath the popover. The popover
          should render above this content when it is active.
        </p>
      </div>
    </>
  ),
  args: {},
};

export const Modal: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          index: [import.meta.env.VITE_INDEX_BAZAARIO],
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <div className='searchcraft-popover-form-with-content'>
        <p>Story Note: This story uses the Bazaario env vars</p>
        <SearchcraftPopoverButton>
          <span>Click me</span>
        </SearchcraftPopoverButton>
        <SearchcraftPopoverForm
          hotkey='k'
          hotkeyModifier='ctrl'
          popoverResultMappings={popoverResultMappings}
          type='modal'
        />
      </div>
    </>
  ),
  args: {},
};

export const Fullscreen: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          index: [import.meta.env.VITE_INDEX_BAZAARIO],
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <div className='searchcraft-popover-form-with-content'>
        <p>Story Note: This story uses the Bazaario env vars</p>
        <SearchcraftPopoverButton>
          <span>Click me</span>
        </SearchcraftPopoverButton>
        <SearchcraftPopoverForm
          hotkey='k'
          hotkeyModifier='ctrl'
          popoverResultMappings={popoverResultMappings}
          type='fullscreen'
        />
      </div>
    </>
  ),
  args: {},
};

export default componentMeta;
