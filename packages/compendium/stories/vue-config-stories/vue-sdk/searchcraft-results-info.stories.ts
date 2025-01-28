import { SearchcraftResultsInfo, SearchcraftTheme } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-results-info',
  component: SearchcraftResultsInfo,
  argTypes: {},
} as Meta;

const defaultProps = {
  isRequesting: false,
  resultsCount: 12345,
  responseTime: '200.35',
  query: 'example query',
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftResultsInfo, SearchcraftTheme },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 1rem;">
      <SearchcraftTheme />
      <SearchcraftResultsInfo v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
