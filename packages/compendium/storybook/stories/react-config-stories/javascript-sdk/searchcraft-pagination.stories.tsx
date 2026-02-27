import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { Searchcraft } from '@searchcraft/javascript-sdk';

import {
  customAdTemplate,
  searchResultTemplateEchostream,
} from '@common/index.js';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-pagination',
  argTypes: {
    scrollToTop: {
      control: 'boolean',
      description:
        'Whether to scroll to the top of the search results when pagination buttons are clicked',
    },
    pageQueryParam: {
      control: 'text',
      description:
        'The URL query string parameter name used to track the current page. When a user navigates to a URL containing this parameter, the pagination component will automatically navigate to that page.',
    },
    usePageQueryParam: {
      control: 'boolean',
      description:
        'Whether to sync the current page with a URL query string parameter. Set to false to disable entirely.',
    },
  },
};

const defaultProps = {
  scrollToTop: true,
  pageQueryParam: 'p',
  usePageQueryParam: true,
};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchcraft = new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });
        const callbacks: (() => void)[] = [];

        callbacks.push(
          searchcraft.subscribe('query_submitted', (event) => {
            console.log('QUERY SUBMITTED! ', event.data.searchTerm);
          }),
        );

        callbacks.push(
          searchcraft.subscribe('input_cleared', (event) => {
            console.log('INPUT CLEARED ', event);
          }),
        );

        callbacks.push(
          searchcraft.subscribe('ad_container_rendered', (event) => {
            console.log(
              'Ad container rendered!',
              event.data.adContainerId,
              event.data.searchTerm,
            );
          }),
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }

        const resultsInfo = document.querySelector('searchcraft-results-info');

        if (resultsInfo) {
          resultsInfo.template = (info, { html }) => html`
            ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
          `;
        }

        return () => {
          callbacks.forEach((cb) => cb());
        };
      }, []);

      return <Story />;
    },
  ],
  render: (args) => (
    <>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-input-form />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-results-info />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-search-results />
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <searchcraft-search-results-per-page />
        <searchcraft-pagination
          scroll-to-top={args.scrollToTop}
          page-query-param={args.pageQueryParam}
          use-page-query-param={args.usePageQueryParam}
        />
      </div>
    </>
  ),
  args: defaultProps,
};

export const WithCustomAds: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const callbacks: (() => void)[] = [];

        const searchcraft = new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          customAdConfig: {
            adContainerRenderedDebounceDelay: 1000,
            adStartQuantity: 1,
            adInterstitialInterval: 3,
            adInterstitialQuantity: 1,
            adEndQuantity: 1,
            template: customAdTemplate,
          },
        });

        callbacks.push(
          searchcraft.subscribe('query_submitted', (event) => {
            console.log('QUERY SUBMITTED! ', event.data.searchTerm);
          }),
        );

        callbacks.push(
          searchcraft.subscribe('input_cleared', (event) => {
            console.log('INPUT CLEARED ', event);
          }),
        );

        callbacks.push(
          searchcraft.subscribe('ad_container_rendered', (event) => {
            console.log(
              'Ad container rendered!',
              event.data.adContainerId,
              event.data.searchTerm,
            );
          }),
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }

        const resultsInfo = document.querySelector('searchcraft-results-info');

        if (resultsInfo) {
          resultsInfo.template = (info, { html }) => html`
            ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
          `;
        }

        return () => {
          callbacks.forEach((cb) => cb());
        };
      }, []);

      return <Story />;
    },
  ],
  render: (args) => (
    <>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-input-form />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-results-info />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-search-results template={searchResultTemplateEchostream} />
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <searchcraft-search-results-per-page />
        <searchcraft-pagination
          scroll-to-top={args.scrollToTop}
          page-query-param={args.pageQueryParam}
          use-page-query-param={args.usePageQueryParam}
        />
      </div>
    </>
  ),
  args: defaultProps,
};

export const WithNativoAds: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const callbacks: (() => void)[] = [];

        const searchcraft = new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          nativoConfig: {
            adStartQuantity: 2,
            adInterstitialInterval: 4,
            adInterstitialQuantity: 3,
            adEndQuantity: 4,
            adClassName: 'nativo_1',
            placementId: 1593037,
          },
        });

        callbacks.push(
          searchcraft.subscribe('query_submitted', (event) => {
            console.log('QUERY SUBMITTED! ', event.data.searchTerm);
          }),
        );

        callbacks.push(
          searchcraft.subscribe('input_cleared', (event) => {
            console.log('INPUT CLEARED ', event);
          }),
        );

        callbacks.push(
          searchcraft.subscribe('ad_container_rendered', (event) => {
            console.log(
              'Ad container rendered!',
              event.data.adContainerId,
              event.data.searchTerm,
            );
          }),
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results',
        );

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }

        const resultsInfo = document.querySelector('searchcraft-results-info');

        if (resultsInfo) {
          resultsInfo.template = (info, { html }) => html`
            ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
          `;
        }

        return () => {
          callbacks.forEach((cb) => cb());
        };
      }, []);

      return <Story />;
    },
  ],
  render: (args) => (
    <>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-input-form />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-results-info />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-search-results template={searchResultTemplateEchostream} />
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <searchcraft-search-results-per-page />
        <searchcraft-pagination
          scroll-to-top={args.scrollToTop}
          page-query-param={args.pageQueryParam}
          use-page-query-param={args.usePageQueryParam}
        />
      </div>
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
