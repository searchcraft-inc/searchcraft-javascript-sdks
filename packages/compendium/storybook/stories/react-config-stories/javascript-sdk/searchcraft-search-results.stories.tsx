import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import {
  type Components,
  type DateRangeFilterItem,
  type ExactMatchToggleFilterItem,
  type FacetsFilterItem,
  type MostRecentToggleFilterItem,
  Searchcraft,
  type SearchcraftConfig
} from '@searchcraft/javascript-sdk';

import {
  admAdTemplate,
  customAdTemplate,
  searchResultTemplateEchostream,
  searchResultTemplateGalaxyNews,
} from '@common/index.js';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-search-results',
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

const facetItem: FacetsFilterItem = {
  type: 'facets',
  fieldName: 'section',
  label: 'Filters',
  options: {
    showSublevel: true,
  },
};

export const Default: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          initialQuery: JSON.stringify({
            order_by: 'date_published',
            query: {
              exact: {
                ctx: 'section_name:"Columns" OR section_name:"Prep" OR section_name:"Local" OR section_name:"Minnesota"',
              },
            },
          }),
        });

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
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
        <searchcraft-search-results />
      </>
    );
  },
  args: {},
};

export const NoInitialQuery: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
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
        <searchcraft-search-results />
      </>
    );
  },
  args: {},
};

export const WithAdMarketplaceAds: StoryObj<Components.SearchcraftSearchResults> =
  {
    decorators: [
      (Story) => {
        useEffect(() => {
          const adConfig: SearchcraftConfig = {
            readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
            indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
            admAdConfig: {
              sub: 'searchbox1',
              productAdQuantity: 2,
              textAdQuantity: 2,
              template: admAdTemplate,
            },
          };
          new Searchcraft(adConfig);

          const searchResults = document.querySelector(
            'searchcraft-search-results',
          );

          if (searchResults) {
            searchResults.template = searchResultTemplateEchostream;
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
          <searchcraft-search-results />
        </>
      );
    },
    args: {},
  };

export const WithCustomAds: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchcraft = new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          customAdConfig: {
            adStartQuantity: 2,
            adInterstitialInterval: 4,
            adInterstitialQuantity: 3,
            adEndQuantity: 4,
            template: customAdTemplate,
          },
        });

        const unsubscribe1 = searchcraft.subscribe(
          'ad_container_rendered',
          (event) => {
            console.log(
              '[ad_container_rendered]',
              event.data.adContainerId,
              event.data.searchTerm,
            );
          },
        );

        const unsubscribe2 = searchcraft.subscribe(
          'ad_container_viewed',
          (event) => {
            console.log(
              '[ad_container_viewed]',
              event.data.adContainerId,
              event.data.searchTerm,
            );
          },
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }

        return () => {
          unsubscribe1();
          unsubscribe2();
        };
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
        <searchcraft-search-results />
      </>
    );
  },
  args: {},
};

export const WithoutATemplate: StoryObj<Components.SearchcraftSearchResults> = {
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
  render: () => {
    return (
      <>
        <div style={{ marginBottom: 20 }}>
          <searchcraft-input-form />
        </div>
        <searchcraft-search-results />
      </>
    );
  },
  args: {},
};

export const FederationSearch: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        // Galaxy News federation search configuration
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_GALAXY_NEWS,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_GALAXY_NEWS,
          federationName: import.meta.env.VITE_FEDERATION_GALAXY_NEWS,
          initialQuery: JSON.stringify({
            query: {
              fuzzy: {
                ctx: 'samsung',
              },
            },
          }),
        });

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateGalaxyNews;
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
        <searchcraft-search-results />
      </>
    );
  },
  args: {},
};

export const WithFilterPanelInitialQueryPagination: StoryObj<
  Components.SearchcraftSearchResults
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

        const filterPanel = document.querySelector('searchcraft-filter-panel');
        if (filterPanel) {
          filterPanel.items = [
            exactMatchItem,
            mostRecentItem,
            dateRangeItemYears,
            facetItem,
          ];
        }

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );
        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
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
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ flex: '0 0 300px' }}>
            <searchcraft-filter-panel />
          </div>
          <div style={{ flex: 1 }}>
            <searchcraft-search-results />
            <div style={{ marginTop: 20 }}>
              <searchcraft-pagination />
            </div>
          </div>
        </div>
      </>
    );
  },
  args: {},
};

export default componentMeta;
