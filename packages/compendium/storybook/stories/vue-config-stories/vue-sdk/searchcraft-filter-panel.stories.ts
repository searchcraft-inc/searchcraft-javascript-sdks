import {
  Searchcraft,
  SearchcraftFilterPanel,
  SearchcraftInputForm,
  SearchcraftTheme,
  type DateRangeFilterItem,
  type ExactMatchToggleFilterItem,
  type FacetsFilterItem,
  type FilterItem,
  type MostRecentToggleFilterItem,
  type NumericFilterItem,
} from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-filter-panel',
  components: { SearchcraftInputForm, SearchcraftFilterPanel },
  argTypes: {},
} as Meta;

type ComponentProps = {
  items: FilterItem[];
  clearInput: () => void;
  customStylesForInput: string;
  inputCaptionValue: string;
  labelForInput: string;
  placeholderValue: string;
};

const today = new Date();
const pastDate = new Date(today);
pastDate.setFullYear(today.getFullYear() - 10);

const exactMatchItem: ExactMatchToggleFilterItem = {
  type: 'exactMatchToggle',
  label: 'Exact Match',
  options: {
    subLabel: 'Specify to use exact matching or fuzzy matching',
  },
};

const mostRecentItem: MostRecentToggleFilterItem = {
  type: 'mostRecentToggle',
  label: 'Most Recent',
  options: {
    subLabel: 'Choose whether to sort by most recent.',
  },
};

const dateRangeItem: DateRangeFilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: pastDate,
    maxDate: today,
    granularity: 'year',
  },
};

const numericItem: NumericFilterItem = {
  type: 'numericRange',
  fieldName: 'number_field',
  label: 'Numeric range example',
  options: {
    min: 0,
    max: 100,
    granularity: 10,
  },
};

const facetItem: FacetsFilterItem = {
  type: 'facets',
  fieldName: 'section',
  label: 'Filters',
  options: {
    showSublevel: true,
  },
};

const defaultProps: ComponentProps = {
  items: [
    exactMatchItem,
    mostRecentItem,
    dateRangeItem,
    numericItem,
    facetItem,
  ],
  clearInput: () => {},
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryFn = (args) => ({
  components: {
    SearchcraftInputForm,
    SearchcraftFilterPanel,
    SearchcraftTheme,
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
    <div style="padding: 10px 20px;">
      <SearchcraftTheme />
      <SearchcraftInputForm
        autoSearch
        buttonLabel=""
        buttonPlacement="none"
        :customStyles="args.customStylesForInput"
        debounceDelay="0"
        searchTerm=""
        inputLabel=""
        :config="config"
        :placeholderValue="args.placeholderValue || ''"
      />
      <div style="padding-top: 20px;">
        <SearchcraftFilterPanel :items="args.items" />
      </div>
    </div>
  `,
});

Default.args = defaultProps;
