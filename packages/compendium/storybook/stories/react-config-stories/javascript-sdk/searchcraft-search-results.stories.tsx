import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  type SearchcraftConfig,
  type Components,
} from '@searchcraft/javascript-sdk';

import {
  searchResultTemplate,
  customAdTemplate,
  admAdTemplate,
} from '@common/index.js';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-search-results',
  argTypes: {},
};

export const Default: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
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
          searchResults.template = searchResultTemplate;
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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplate;
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
            readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
            endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
            index: [import.meta.env.VITE_RUNEGARD_INDEX],
            adSource: 'adMarketplace',
            admSub: 'searchbox1',
            admProductAdQuantity: 2,
            admTextAdQuantity: 2,
            admAdTemplate: admAdTemplate,
          };
          new Searchcraft(adConfig);

          const searchResults = document.querySelector(
            'searchcraft-search-results',
          );

          if (searchResults) {
            searchResults.template = searchResultTemplate;
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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
          adSource: 'Custom',
          customAdStartQuantity: 2,
          customAdInterstitialInterval: 4,
          customAdInterstitialQuantity: 3,
          customAdEndQuantity: 4,
          customAdTemplate: customAdTemplate,
        });

        const unsubscribe1 = searchcraft.subscribe(
          'ad_container_rendered',
          (event) => {
            console.log(
              '[ad_container_rendered]',
              event.data.adSource,
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
              event.data.adSource,
              event.data.adContainerId,
              event.data.searchTerm,
            );
          },
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplate;
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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
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

export default componentMeta;
