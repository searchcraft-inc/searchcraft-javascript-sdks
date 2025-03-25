import type { Meta, StoryFn } from '@storybook/vue3';

import {
  SearchcraftResultsInfo,
  SearchcraftInputForm,
  SearchcraftTheme,
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
    SearchcraftTheme,
    SearchcraftInputForm,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
      endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
      index: [import.meta.env.VITE_RUNEGARD_INDEX],
    });
    return { args };
  },
  template: `
    <div>
      <SearchcraftTheme />
      <div style="margin-bottom: 20px">
        <SearchcraftInputForm />
      </div>
      <SearchcraftResultsInfo v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
