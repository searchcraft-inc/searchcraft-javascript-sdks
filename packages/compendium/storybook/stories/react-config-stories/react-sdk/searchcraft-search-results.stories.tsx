import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import {
  type DateRangeFilterItem,
  type ExactMatchToggleFilterItem,
  type FacetsFilterItem,
  type MostRecentToggleFilterItem,
  Searchcraft,
  SearchcraftFilterPanel,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
  SearchcraftPagination,
  SearchcraftResultsInfo,
  SearchcraftSearchResults,
  type SearchcraftSearchResultsProps
} from '@searchcraft/react-sdk';

import {
  searchResultTemplateEchostream, searchResultTemplateGalaxyNews,
} from '@common/index.js';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-search-results',
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
    minDate: new Date(now.getFullYear() - 2, 1, 1),
    maxDate: now,
    granularity: 'year',
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

export const Default: StoryObj<
  SearchcraftInputFormProps & SearchcraftSearchResultsProps
> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm
            autoSearch={true}
            placeholderValue={args.placeholderValue}
          />
        </div>
        <SearchcraftSearchResults template={searchResultTemplateEchostream} />
      </>
    );
  },
};

export const FederationSearch: StoryObj<
  SearchcraftInputFormProps & SearchcraftSearchResultsProps
> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_GALAXY_NEWS,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_GALAXY_NEWS,
          federationName: import.meta.env.VITE_FEDERATION_GALAXY_NEWS,
        });
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm
            autoSearch={true}
            placeholderValue="Search across multiple indices..."
          />
        </div>
        <SearchcraftSearchResults template={searchResultTemplateGalaxyNews} />
      </>
    );
  },
};

export const WithFilterPanelInitialQueryPagination: StoryObj<
  SearchcraftInputFormProps & SearchcraftSearchResultsProps
> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          initialQuery: JSON.stringify({
            query: {
              occur: 'must',
              fuzzy: {
                ctx: 'steak',
              },
            },
          }),
        });
      }, []);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm />
        </div>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftResultsInfo />
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ flex: '0 0 300px' }}>
            <SearchcraftFilterPanel
              items={[
                exactMatchItem,
                mostRecentItem,
                dateRangeItemYears,
                facetItem,
              ]}
            />
          </div>
          <div style={{ flex: 1 }}>
            <SearchcraftSearchResults template={searchResultTemplateEchostream} />
            <div style={{ marginTop: 20 }}>
              <SearchcraftPagination />
            </div>
          </div>
        </div>
      </>
    );
  },
};

export default componentMeta;
