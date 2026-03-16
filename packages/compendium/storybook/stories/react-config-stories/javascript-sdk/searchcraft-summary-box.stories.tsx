import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { searchResultTemplateFoodAndWine } from '@common/index.js';
import { type Components, Searchcraft } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-summary-box',
};

const defaultProps = {};

export const Default: StoryObj<Components.SearchcraftErrorMessage> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_FOOD_WINE,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_FOOD_WINE,
          indexName: import.meta.env.VITE_INDEX_FOOD_WINE,
        });
        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateFoodAndWine;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <searchcraft-input-form auto-search='true' button-placement='none' />
      <searchcraft-summary-box />
      <searchcraft-search-results />
    </div>
  ),
  args: defaultProps,
};

export const EchoStream: StoryObj<Components.SearchcraftErrorMessage> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          //readKey: import.meta.env.VITE_READ_KEY_WITH_AI_ECHOSTREAM,
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <searchcraft-input-form auto-search='true' button-placement='none' />
      <searchcraft-summary-box />
      <searchcraft-search-results />
    </div>
  ),
  args: defaultProps,
};

export const WithPagination: StoryObj<Components.SearchcraftErrorMessage> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_FOOD_WINE,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_FOOD_WINE,
          indexName: import.meta.env.VITE_INDEX_FOOD_WINE,
          cortexURL: import.meta.env.VITE_CORTEX_URL,
        });
        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateFoodAndWine;
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <searchcraft-input-form auto-search='true' button-placement='none' />
      <searchcraft-summary-box />
      <searchcraft-search-results />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <searchcraft-search-results-per-page increment={20} />
        <searchcraft-pagination />
      </div>
    </div>
  ),
  args: defaultProps,
};

export default componentMeta;
