import {
  SearchcraftInputForm,
  SearchcraftResultsInfo,
  SearchcraftTheme,
  SearchcraftBaseSearchResults,
  SearchcraftPagination,
  SearchcraftSearchResultsPerPage,
  Searchcraft,
} from '@searchcraft/vue-sdk';

import type { Meta, StoryFn } from '@storybook/vue3';

import type { SearchResultMappings } from '@searchcraft/javascript-sdk';

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

const customFormatter = (range, count, responseTime) =>
  `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;

export default {
  title: 'Vue SDK/searchcraft-pagination',
  component: SearchcraftPagination,
  argTypes: {},
} as Meta;

const defaultProps = {};

export const Default: StoryFn = () => ({
  components: {
    SearchcraftInputForm,
    SearchcraftResultsInfo,
    SearchcraftTheme,
    SearchcraftBaseSearchResults,
    SearchcraftPagination,
    SearchcraftSearchResultsPerPage,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
      endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
      index: [import.meta.env.VITE_RUNEGARD_INDEX],
    });
    return { customFormatter, searchResultMappings };
  },
  template: `
    <div>
      <SearchcraftTheme />
      <SearchcraftResultsInfo
        :customFormatter="customFormatter"
      />
      <SearchcraftPagination />
      <SearchcraftSearchResultsPerPage />
      <SearchcraftInputForm />
      <SearchcraftBaseSearchResults
        v-bind="{
          searchResultMappings: searchResultMappings
        }"
      />
    </div>
  `,
});
Default.args = defaultProps;
