import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchcraftInputForm,
  SearchcraftResultsInfo,
  SearchcraftTheme,
  SearchcraftBaseSearchResults,
  SearchcraftPagination,
  SearchcraftSearchResultsPerPage,
  Searchcraft,
} from '@searchcraft/react-sdk';

import type { SearchResultMappings } from '@searchcraft/javascript-sdk';

import { useEffect } from 'react';

const searchResultMappings: SearchResultMappings = {
  containerHref: {
    fieldNames: [
      {
        fieldName: 'canonical_link',
        dataType: 'text',
      },
    ],
  },
  footer: {
    fieldNames: [
      {
        fieldName: 'date_published',
        dataType: 'date',
      },
      {
        fieldName: 'author_name',
        dataType: 'text',
      },
    ],
    delimiter: ' • ',
  },
  imageSource: {
    fieldNames: [
      {
        fieldName: 'medium_image',
        dataType: 'text',
      },
    ],
  },
  body: {
    fieldNames: [{ fieldName: 'sub_headline', dataType: 'text' }],
  },
  title: {
    fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
  },
};

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
      <SearchcraftResultsInfo
        customFormatter={(range, count, responseTime) =>
          `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`
        }
      />
      <SearchcraftPagination />
      <SearchcraftSearchResultsPerPage increment={20} />
      <SearchcraftInputForm
        autoSearch
        buttonPlacement='left'
        customStyles={{}}
        placeholderValue=''
      />
      <SearchcraftBaseSearchResults
        buttonTarget='_blank'
        containerTarget='_blank'
        resultImagePlacement='right'
        searchResultMappings={searchResultMappings}
      />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
