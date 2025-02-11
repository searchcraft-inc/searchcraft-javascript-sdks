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

import { config } from '../../../utils/DefaultSearchcraftConfig';
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
        new Searchcraft(config);
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
      <SearchcraftSearchResultsPerPage />
      <SearchcraftInputForm config={config} />
      <SearchcraftBaseSearchResults
        searchResultMappings={searchResultMappings}
      />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
