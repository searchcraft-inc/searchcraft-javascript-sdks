import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchcraftInputForm,
  SearchcraftResultsInfo,
  SearchcraftSearchResults,
  SearchcraftPagination,
  SearchcraftSearchResultsPerPage,
  Searchcraft,
} from '@searchcraft/react-sdk';

import { searchResultTemplateEchostream } from '@common/index.js';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-pagination',
  argTypes: {},
};

const defaultProps = {};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <div style={{ marginBottom: 20 }}>
        <SearchcraftInputForm autoSearch />
      </div>
      <div style={{ marginBottom: 20 }}>
        <SearchcraftResultsInfo />
      </div>
      <div style={{ marginBottom: 20 }}>
        <SearchcraftSearchResults template={searchResultTemplateEchostream} />
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <SearchcraftSearchResultsPerPage increment={20} />
        <SearchcraftPagination />
      </div>
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
