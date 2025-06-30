import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  SearchcraftSearchResults,
  type SearchcraftSearchResultsProps,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
} from '@searchcraft/react-sdk';

import { searchResultTemplateEchostream } from '@common/index.js';

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

export default componentMeta;
