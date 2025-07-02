import type { Meta, StoryFn } from '@storybook/vue3';

import {
  SearchcraftResultsInfo,
  SearchcraftInputForm,
  type SearchcraftResultsInfoProps,
  Searchcraft,
} from '@searchcraft/vue-sdk';

export default {
  title: 'Vue SDK/searchcraft-results-info',
  component: SearchcraftResultsInfo,
  argTypes: {},
} as Meta;

const defaultProps: SearchcraftResultsInfoProps = {};

export const Default: StoryFn = (args) => ({
  components: {
    SearchcraftResultsInfo,
    SearchcraftInputForm,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
      endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
      indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
    });
    return { args };
  },
  template: `
    <div>
      <div style="margin-bottom: 20px">
        <SearchcraftInputForm />
      </div>
      <SearchcraftResultsInfo v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
