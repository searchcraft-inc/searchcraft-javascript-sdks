import type { Meta, StoryFn } from '@storybook/vue3';

import {
  SearchcraftInputForm,
  SearchcraftResultsInfo,
  SearchcraftSearchResults,
  SearchcraftPagination,
  SearchcraftSearchResultsPerPage,
  Searchcraft,
} from '@searchcraft/vue-sdk';

import { searchResultTemplateEchostream } from '@common/index.js';

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
    SearchcraftSearchResults,
    SearchcraftPagination,
    SearchcraftSearchResultsPerPage,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
      endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
      index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
    });
    return { searchResultTemplateEchostream };
  },
  template: `
    <div>
      <div style="margin-bottom: 20px;">
        <SearchcraftInputForm />
      </div>
      <div style="margin-bottom: 20px;">
        <SearchcraftResultsInfo />
      </div>
        <div style="margin-bottom: 20px;">
        <SearchcraftSearchResults
          v-bind="{
            template: searchResultTemplate
          }"
        />
      </div>
      <div
        style="align-items: center; display: flex; justify-content: space-between; gap: 16px;"
      >
        <SearchcraftSearchResultsPerPage />
        <SearchcraftPagination />
      </div>
    </div>
  `,
});
Default.args = defaultProps;
