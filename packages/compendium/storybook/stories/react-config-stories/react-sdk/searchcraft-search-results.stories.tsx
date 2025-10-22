import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  SearchcraftSearchResults,
  type SearchcraftSearchResultsProps,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
} from '@searchcraft/react-sdk';

import { searchResultTemplateEchostream, searchResultTemplateGalaxyNews,
 } from '@common/index.js';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-search-results',
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
        <SearchcraftSearchResults template={searchResultTemplateEchostream} />
      </>
    );
  },
};

export const FederationSearch: StoryObj<
  SearchcraftInputFormProps & SearchcraftSearchResultsProps
> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_GALAXY_NEWS,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_GALAXY_NEWS,
          federationName: import.meta.env.VITE_FEDERATION_GALAXY_NEWS,
        });
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
            placeholderValue="Search across multiple indices..."
          />
        </div>
        <SearchcraftSearchResults template={searchResultTemplateGalaxyNews} />
      </>
    );
  },
};

export default componentMeta;
