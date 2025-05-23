import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftInputForm,
  SearchcraftFilterPanel,
  Searchcraft,
  type ExactMatchToggleFilterItem,
  type MostRecentToggleFilterItem,
  type DateRangeFilterItem,
  type NumericFilterItem,
  type FacetsFilterItem,
  type SearchcraftFilterPanelProps,
} from '@searchcraft/react-sdk';

import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-filter-panel',
  argTypes: {},
};

const today = new Date();
const pastDate = new Date(today);
pastDate.setFullYear(today.getFullYear() - 10);

const exactMatchItem: ExactMatchToggleFilterItem = {
  type: 'exactMatchToggle',
  label: 'Exact Match',
  options: {
    subLabel: 'Specify to use exact matching or fuzzy matching.',
  },
};

const mostRecentItem: MostRecentToggleFilterItem = {
  fieldName: 'date_published',
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

const defaultProps: SearchcraftFilterPanelProps = {
  items: [
    exactMatchItem,
    mostRecentItem,
    dateRangeItem,
    numericItem,
    facetItem,
  ],
};

export const Default: StoryObj<SearchcraftFilterPanelProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
        });
        const filterPanel = document.querySelector('searchcraft-filter-panel');

        if (filterPanel) {
          filterPanel.items = defaultProps.items;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm autoSearch={true} />
        </div>
        <SearchcraftFilterPanel items={args.items} />
      </>
    );
  },
  args: defaultProps,
};

export default componentMeta;
