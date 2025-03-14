import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { Searchcraft } from '@searchcraft/javascript-sdk';

import {
  searchResultTemplate,
  customAdTemplate,
} from '../../../../common/index.js';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-pagination',
  argTypes: {},
};

const defaultProps = {};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchcraft = new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
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
          searchResults.template = searchResultTemplate;
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
  render: () => (
    <>
      <searchcraft-theme />
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
        <searchcraft-pagination />
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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
          adSource: 'Custom',
          adContainerRenderedDebounceDelay: 1000,
          customAdStartQuantity: 1,
          customAdInterstitialInterval: 3,
          customAdInterstitialQuantity: 1,
          customAdEndQuantity: 1,
          customAdTemplate: customAdTemplate,
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
          searchResults.template = searchResultTemplate;
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
  render: () => (
    <>
      <searchcraft-theme />
      <div style={{ marginBottom: 20 }}>
        <searchcraft-input-form />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-results-info />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-search-results template={searchResultTemplate} />
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
        <searchcraft-pagination />
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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
          adSource: 'Nativo',
          nativoAdStartQuantity: 2,
          nativoAdInterstitialInterval: 4,
          nativoAdInterstitialQuantity: 3,
          nativoAdEndQuantity: 4,
          nativoAdClassName: 'nativo_1',
          nativoPlacementId: 1593037,
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
          searchResults.template = searchResultTemplate;
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
  render: () => (
    <>
      <searchcraft-theme />
      <div style={{ marginBottom: 20 }}>
        <searchcraft-input-form />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-results-info />
      </div>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-search-results template={searchResultTemplate} />
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
        <searchcraft-pagination />
      </div>
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
