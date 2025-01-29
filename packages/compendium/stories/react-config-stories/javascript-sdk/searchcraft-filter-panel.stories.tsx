import type { Meta, StoryObj } from '@storybook/react';
import type {
  DateRangeFilterItem,
  ExactMatchToggleFilterItem,
  FacetsFilterItem,
  MostRecentToggleFilterItem,
  NumericFilterItem,
} from '@searchcraft/javascript-sdk';

import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-filter-panel',
  argTypes: {},
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

const defaultProps: Components.SearchcraftFilterPanel = {
  items: [
    exactMatchItem,
    mostRecentItem,
    dateRangeItem,
    numericItem,
    facetItem,
  ],
};

export const Default: StoryObj<Components.SearchcraftFilterPanel> = {
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
  render: () => {
    return (
      <>
        <searchcraft-theme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          <searchcraft-input-form />
          <div style={{ paddingTop: 20 }}>
            <searchcraft-filter-panel />
          </div>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export const WithDebounceDelay300: StoryObj<Components.SearchcraftFilterPanel> =
  {
    decorators: [
      (Story) => {
        return <Story />;
      },
      (Story) => {
        useEffect(() => {
          const searchForm = document.querySelector('searchcraft-input-form');
          const filterPanel = document.querySelector(
            'searchcraft-filter-panel',
          );

          if (searchForm) {
            searchForm.config = { ...config, searchDebounceDelay: 300 };
          }
          if (filterPanel) {
            filterPanel.items = defaultProps.items;
          }
        }, []);

        return <Story />;
      },
    ],
    render: () => {
      return (
        <>
          <searchcraft-theme />
          <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <searchcraft-input-form />
            <div style={{ paddingTop: 20 }}>
              <searchcraft-filter-panel />
            </div>
          </div>
        </>
      );
    },
    args: defaultProps,
  };

export default componentMeta;
