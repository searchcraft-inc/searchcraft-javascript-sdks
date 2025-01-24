import type { Meta, StoryObj } from '@storybook/react';
import type {
  DateRangeFilterItem,
  ExactMatchToggleFilterItem,
  FacetsFilterItem,
  FilterItem,
  MostRecentToggleFilterItem,
  NumericFilterItem,
} from '@searchcraft/javascript-sdk';
import {
  SearchcraftInputForm,
  SearchcraftFilterPanel,
} from '@searchcraft/react-sdk';

import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-filter-panel',
  argTypes: {},
};

type ComponentProps = {
  items: FilterItem[];
  clearInput: () => void;
  config: string;
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
  config: JSON.stringify(config),
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryObj<ComponentProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchForm = document.querySelector('searchcraft-input-form');
        const filterPanel = document.querySelector('searchcraft-filter-panel');

        if (searchForm) {
          searchForm.config = config;
        }
        if (filterPanel) {
          filterPanel.items = defaultProps.items;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <SearchcraftInputForm
          autoSearch={true}
          buttonLabel=''
          buttonPlacement='none'
          customStyles={args.customStylesForInput}
          debounceDelay={0}
          searchTerm=''
          inputLabel=''
          config={config}
          placeholderValue={args.placeholderValue || ''}
        />
        <div style={{ paddingTop: 20 }}>
          <SearchcraftFilterPanel items={args.items} />
        </div>
      </div>
    );
  },
  args: defaultProps,
};

export default componentMeta;
