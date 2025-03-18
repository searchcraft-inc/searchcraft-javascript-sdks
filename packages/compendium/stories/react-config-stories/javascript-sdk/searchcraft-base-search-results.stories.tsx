import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  type SearchcraftConfig,
  type SearchResultMappings,
} from '@searchcraft/javascript-sdk';
import type { Components } from '@searchcraft/javascript-sdk';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-results',
  argTypes: {},
};

const mappings: SearchResultMappings = {
  containerHref: {
    fieldNames: [
      {
        fieldName: 'canonical_link',
        dataType: 'text',
      },
    ],
  },
  footer: {
    fieldNames: [
      {
        fieldName: 'date_published',
        dataType: 'date',
      },
      {
        fieldName: 'author_name',
        dataType: 'text',
      },
    ],
    delimiter: ' • ',
  },
  imageSource: {
    fieldNames: [
      {
        fieldName: 'medium_image',
        dataType: 'text',
      },
    ],
  },
  body: {
    fieldNames: [{ fieldName: 'sub_headline', dataType: 'text' }],
  },
  title: {
    fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
  },
};

export const Default: StoryObj<Components.SearchcraftBaseSearchResults> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
        const searchResults = document.querySelector(
          'searchcraft-base-search-results',
        );

        if (searchResults) {
          searchResults.searchResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <searchcraft-theme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          <searchcraft-input-form />
          <div style={{ paddingTop: 20 }}>
            <searchcraft-base-search-results
              result-image-placement={args.resultImagePlacement}
              button-target={args.buttonTarget}
              button-rel={args.buttonRel}
              container-target={args.containerTarget}
              container-rel={args.containerRel}
            />
          </div>
        </div>
      </>
    );
  },
  args: {},
};

export const WithAdMarketplaceAds: StoryObj<Components.SearchcraftBaseSearchResults> =
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
          };
          new Searchcraft(adConfig);
          const searchResults = document.querySelector(
            'searchcraft-base-search-results',
          );
          if (searchResults) {
            searchResults.searchResultMappings = mappings;
          }
        }, []);

        return <Story />;
      },
    ],
    render: (args) => {
      return (
        <>
          <searchcraft-theme />
          <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <searchcraft-input-form />
            <div style={{ paddingTop: 20 }}>
              <searchcraft-base-search-results
                result-image-placement={args.resultImagePlacement}
                button-target={args.buttonTarget}
                button-rel={args.buttonRel}
                container-target={args.containerTarget}
                container-rel={args.containerRel}
              />
            </div>
          </div>
        </>
      );
    },
    args: {},
  };

export const WithCustomAds: StoryObj<Components.SearchcraftBaseSearchResults> =
  {
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
            customAdTemplate(data) {
              return `
              <p>hello world ${data.adContainerId} ${data.searchTerm}</p>
            `;
            },
          });

          const unsubscribe = searchcraft.subscribe(
            'ad_container_rendered',
            (event) => {
              console.log(
                'Ad slot shown!',
                event.data.adSource,
                event.data.adContainerId,
                event.data.searchTerm,
              );
            },
          );

          const searchResults = document.querySelector(
            'searchcraft-base-search-results',
          );
          if (searchResults) {
            searchResults.searchResultMappings = mappings;
          }

          return unsubscribe();
        }, []);

        return <Story />;
      },
    ],
    render: (args) => {
      return (
        <>
          <searchcraft-theme />
          <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <searchcraft-input-form />
            <div style={{ paddingTop: 20 }}>
              <searchcraft-base-search-results
                result-image-placement={args.resultImagePlacement}
                button-target={args.buttonTarget}
                button-rel={args.buttonRel}
                container-target={args.containerTarget}
                container-rel={args.containerRel}
              />
            </div>
          </div>
        </>
      );
    },
    args: {},
  };

export default componentMeta;
