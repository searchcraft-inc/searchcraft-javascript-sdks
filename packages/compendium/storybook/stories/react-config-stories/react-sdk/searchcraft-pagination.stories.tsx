import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchcraftInputForm,
  SearchcraftResultsInfo,
  SearchcraftTheme,
  SearchcraftSearchResults,
  SearchcraftPagination,
  SearchcraftSearchResultsPerPage,
  Searchcraft,
} from '@searchcraft/react-sdk';

import { searchResultTemplate } from '@common/index.js';

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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <SearchcraftTheme />
      <div style={{ marginBottom: 20 }}>
        <SearchcraftInputForm autoSearch />
      </div>
      <div style={{ marginBottom: 20 }}>
        <SearchcraftResultsInfo />
      </div>
      <div style={{ marginBottom: 20 }}>
        <SearchcraftSearchResults template={searchResultTemplate} />
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
