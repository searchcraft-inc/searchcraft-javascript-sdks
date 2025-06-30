import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { searchResultTemplateFoodAndWine } from '@common/index.js';

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
    </div>
  ),
  args: defaultProps,
};

export const WithPromptInstructions: StoryObj<Components.SearchcraftErrorMessage> =
  {
    decorators: [
      (Story) => {
        useEffect(() => {
          new Searchcraft({
            readKey: import.meta.env.VITE_READ_KEY_FOOD_WINE,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_FOOD_WINE,
            indexName: import.meta.env.VITE_INDEX_FOOD_WINE,
            cortexURL: import.meta.env.VITE_CORTEX_URL,
            summaryInstructionsPrompt: 'Reply in French.',
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

export default componentMeta;
