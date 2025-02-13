import type { PopoverResultMappings } from '@searchcraft/javascript-sdk';
import {
  Searchcraft,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
  SearchcraftTheme,
} from '@searchcraft/react-sdk';
import type { Meta, StoryObj } from '@storybook/react';
import { configAlternate } from '../../../utils/AlternateSearchcraftConfig';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-popover-form',
  argTypes: {},
};

const mappings: PopoverResultMappings = {
  href: {
    fieldNames: [
      {
        fieldName: 'link',
        dataType: 'text',
      },
    ],
  },
  title: {
    fieldNames: [{ fieldName: 'title', dataType: 'text' }],
  },
  subtitle: {
    fieldNames: [
      {
        fieldName: 'price',
        dataType: 'number',
        numberFormatLocale: 'en-US',
        numberFormatOptions: {
          style: 'currency',
          currency: 'USD',
        },
        numberScale: 1.0,
      },
    ],
  },
  imageSource: {
    fieldNames: [{ fieldName: 'image', dataType: 'text' }],
  },
  imageAlt: {
    fieldNames: [{ fieldName: 'price', dataType: 'text' }],
  },
};

export const Inline: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft(configAlternate);
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <SearchcraftTheme />
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <p>Story Note: This story uses the Bazaario env vars</p>
        <SearchcraftPopoverForm
          config={configAlternate}
          hotkey='k'
          hotkeyModifier='ctrl'
          popoverResultMappings={mappings}
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
        new Searchcraft(configAlternate);
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <SearchcraftTheme />
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <p>Story Note: This story uses the Bazaario env vars</p>
        <SearchcraftPopoverButton>
          <span>Click me</span>
        </SearchcraftPopoverButton>
        <SearchcraftPopoverForm
          hotkey='k'
          hotkeyModifier='ctrl'
          popoverResultMappings={mappings}
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
        new Searchcraft(configAlternate);
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <SearchcraftTheme />
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <p>Story Note: This story uses the Bazaario env vars</p>
        <SearchcraftPopoverButton>
          <span>Click me</span>
        </SearchcraftPopoverButton>
        <SearchcraftPopoverForm
          hotkey='k'
          hotkeyModifier='ctrl'
          popoverResultMappings={mappings}
          type='fullscreen'
        />
      </div>
    </>
  ),
  args: {},
};

export default componentMeta;
