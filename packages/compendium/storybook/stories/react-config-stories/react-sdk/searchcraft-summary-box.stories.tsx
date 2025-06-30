import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  SearchcraftSearchResults,
  type SearchcraftSearchResultsProps,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
  SearchcraftSummaryBox,
} from '@searchcraft/react-sdk';

import { searchResultTemplateEchostream } from '@common/index.js';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-summary-box',
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
          cortexURL: import.meta.env.VITE_CORTEX_URL,
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
        <SearchcraftSummaryBox />
        <SearchcraftSearchResults />
      </>
    );
  },
};

export default componentMeta;
