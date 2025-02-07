import type { Meta, StoryObj } from '@storybook/react';
import type {
  PopoverResultMappings,
  SearchcraftConfig,
} from '@searchcraft/javascript-sdk';
import { configAlternate } from '../../../utils/AlternateSearchcraftConfig';
import { useEffect } from 'react';
import type { Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-form',
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

export const Inline: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchForm = document.querySelector('searchcraft-popover-form');

        if (searchForm) {
          searchForm.config = configAlternate;
          searchForm.popoverResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-form
            type='inline'
            hotkey='k'
            hotkey-modifier='ctrl'
          />
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
          <p style={{ marginBottom: 100 }}>
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
        const searchForm = document.querySelector('searchcraft-popover-form');

        const config: SearchcraftConfig = {
          ...configAlternate,
          adProvider: 'adMarketplace',
          admSub: 'searchbox1',
          admProductAdQuantity: 3,
          admTextAdQuantity: 3,
        };

        if (searchForm) {
          searchForm.config = config;
          searchForm.popoverResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-form
            type='inline'
            hotkey='k'
            hotkey-modifier='ctrl'
          />
          <p style={{ marginBottom: 100 }}>
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
        const searchForm = document.querySelector('searchcraft-popover-form');

        if (searchForm) {
          searchForm.config = configAlternate;
          searchForm.popoverResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
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
        const searchForm = document.querySelector('searchcraft-popover-form');

        if (searchForm) {
          searchForm.config = configAlternate;
          searchForm.popoverResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
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
