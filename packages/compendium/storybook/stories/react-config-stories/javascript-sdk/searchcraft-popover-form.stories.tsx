import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { type Components, Searchcraft } from '@searchcraft/javascript-sdk';

import {
  admAdTemplatePopover,
  popoverResultMappings,
  popoverResultMappingsRunegard,
} from '@common/index.js';

import '@common/searchcraft-popover-form/popover-form-with-content.scss';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-form',
  argTypes: {
    placeholderValue: {
      control: 'text',
      description: "The input element's placeholder value.",
    },
    placeholderBehavior: {
      control: { type: 'select' },
      options: ['hide-on-focus', 'hide-on-text-entered', undefined],
      description: "The placeholder's render behavior.",
    },
    viewAllResultsBaseUrl: {
      control: 'text',
      description:
        'Base URL for the "View All Results" link. The search term will be appended to this URL.',
    },
    viewAllResultsLabel: {
      control: 'text',
      description: 'Label text for the "View All Results" link.',
    },
  },
};

const defaultProps: Components.SearchcraftPopoverForm = {
  type: 'inline',
  hotkey: 'k',
  hotkeyModifier: 'ctrl',
  placeholderValue: 'Search products...',
  placeholderBehavior: 'hide-on-text-entered',
  viewAllResultsBaseUrl: '/?s=',
  viewAllResultsLabel: 'View All Results',
};

export default componentMeta;

export const Inline: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          indexName: import.meta.env.VITE_INDEX_BAZAARIO,
          searchResultsPerPage: 5,
        });
        const popoverForm = document.querySelector('searchcraft-popover-form');

        if (popoverForm) {
          popoverForm.popoverResultMappings = popoverResultMappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <div className='searchcraft-popover-form-with-content'>
          <p>Story Note: This story uses the Bazaario env vars</p>
          <searchcraft-popover-form
            type='inline'
            hotkey='k'
            hotkey-modifier='ctrl'
            placeholder-value={args.placeholderValue}
            placeholder-behavior={args.placeholderBehavior}
            view-all-results-base-url={args.viewAllResultsBaseUrl}
            view-all-results-label={args.viewAllResultsLabel}
          />
          <p>
            Here's some content that shows up underneath the popover. The
            popover should render above this content when it is active.
          </p>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export const InlineWithViewAllResults: StoryObj<Components.SearchcraftPopoverForm> =
  {
    decorators: [
      (Story) => {
        useEffect(() => {
          new Searchcraft({
            readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
            indexName: import.meta.env.VITE_INDEX_BAZAARIO,
            searchResultsPerPage: 5,
          });
          const popoverForm = document.querySelector(
            'searchcraft-popover-form',
          );

          if (popoverForm) {
            popoverForm.popoverResultMappings = popoverResultMappings;
          }
        }, []);

        return <Story />;
      },
    ],
    render: (args) => {
      return (
        <>
          <div className='searchcraft-popover-form-with-content'>
            <p>
              Story Note: This story uses the Bazaario env vars and enables the
              View All Results footer button
            </p>
            <searchcraft-popover-form
              type='inline'
              hotkey='k'
              hotkey-modifier='ctrl'
              placeholder-value={args.placeholderValue}
              placeholder-behavior={args.placeholderBehavior}
              view-all-results-base-url={args.viewAllResultsBaseUrl}
              view-all-results-label={args.viewAllResultsLabel}
            />
            <p>
              Here's some content that shows up underneath the popover. The
              popover should render above this content when it is active.
            </p>
          </div>
        </>
      );
    },
    args: defaultProps,
  };

export const InlineWithAds: StoryObj<Components.SearchcraftPopoverForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
          indexName: import.meta.env.VITE_INDEX_BAZAARIO,
          admAdConfig: {
            sub: 'searchbox1',
            productAdQuantity: 3,
            textAdQuantity: 3,
            template: admAdTemplatePopover,
          },
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
          indexName: import.meta.env.VITE_INDEX_BAZAARIO,
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
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
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
