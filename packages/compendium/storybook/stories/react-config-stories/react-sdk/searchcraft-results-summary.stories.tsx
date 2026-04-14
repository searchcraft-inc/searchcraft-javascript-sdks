import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import {
  Searchcraft,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
  SearchcraftResultsSummary,
  SearchcraftSearchResults,
  type SearchcraftSearchResultsProps,
} from '@searchcraft/react-sdk';

import { searchResultTemplateEchostream } from '@common/index.js';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-results-summary',
  argTypes: {},
};

export const Default: StoryObj<
  SearchcraftInputFormProps & SearchcraftSearchResultsProps
> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });
        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );
        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm
            autoSearch={true}
            placeholderValue={args.placeholderValue}
          />
        </div>
        <SearchcraftResultsSummary />
        <SearchcraftSearchResults />
      </>
    );
  },
};

export default componentMeta;
