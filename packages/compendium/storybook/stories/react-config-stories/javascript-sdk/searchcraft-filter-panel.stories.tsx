import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  type DateRangeFilterItem,
  type ExactMatchToggleFilterItem,
  type FacetsFilterItem,
  type MostRecentToggleFilterItem,
} from '@searchcraft/javascript-sdk';

import type { Components } from '@searchcraft/javascript-sdk';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-filter-panel',
  argTypes: {},
};

const now = new Date();

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

const dateRangeItemYears: DateRangeFilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: new Date(now.getFullYear() - 10, 1, 1),
    maxDate: now,
    granularity: 'year',
  },
};

const dateRangeItemMonths: DateRangeFilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: new Date(now.getFullYear() - 2, 1, 1),
    maxDate: now,
    granularity: 'month',
  },
};

const dateRangeItemDays: DateRangeFilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: new Date(now.getFullYear(), now.getMonth() - 1, 1),
    maxDate: now,
    granularity: 'day',
  },
};

const dateRangeItemHours: DateRangeFilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0),
    maxDate: now,
    granularity: 'hour',
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

export const Default: StoryObj<Components.SearchcraftFilterPanel> = {
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
          filterPanel.items = [
            exactMatchItem,
            mostRecentItem,
            dateRangeItemYears,
            facetItem,
          ];
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-input-form />
        </div>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-results-info />
        </div>
        <searchcraft-filter-panel />
      </>
    );
  },
  args: {},
};

export const WithMonthsSlider: StoryObj<Components.SearchcraftFilterPanel> = {
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
          filterPanel.items = [
            exactMatchItem,
            mostRecentItem,
            dateRangeItemMonths,
            facetItem,
          ];
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-input-form />
        </div>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-results-info />
        </div>
        <searchcraft-filter-panel />
      </>
    );
  },
  args: {},
};

export const WithDaysSlider: StoryObj<Components.SearchcraftFilterPanel> = {
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
          filterPanel.items = [
            exactMatchItem,
            mostRecentItem,
            dateRangeItemDays,
            facetItem,
          ];
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-input-form />
        </div>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-results-info />
        </div>
        <searchcraft-filter-panel />
      </>
    );
  },
  args: {},
};

export const WithHoursSlider: StoryObj<Components.SearchcraftFilterPanel> = {
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
          filterPanel.items = [
            exactMatchItem,
            mostRecentItem,
            dateRangeItemHours,
            facetItem,
          ];
        }
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-input-form />
        </div>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-results-info />
        </div>
        <searchcraft-filter-panel />
      </>
    );
  },
  args: {},
};

export const WithDebounceDelay300: StoryObj<Components.SearchcraftFilterPanel> =
  {
    decorators: [
      (Story) => {
        return <Story />;
      },
      (Story) => {
        useEffect(() => {
          new Searchcraft({
            readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
            index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
            searchDebounceDelay: 300,
          });
          const filterPanel = document.querySelector(
            'searchcraft-filter-panel',
          );

          if (filterPanel) {
            filterPanel.items = [
              exactMatchItem,
              mostRecentItem,
              dateRangeItemYears,
              facetItem,
            ];
          }
        }, []);

        return <Story />;
      },
    ],
    render: () => {
      return (
        <>
          <div style={{ marginBottom: 20 }}>
            <searchcraft-input-form />
          </div>
          <div style={{ marginBottom: 20 }}>
            <searchcraft-results-info />
          </div>
          <searchcraft-filter-panel />
        </>
      );
    },
    args: {},
  };

export default componentMeta;
