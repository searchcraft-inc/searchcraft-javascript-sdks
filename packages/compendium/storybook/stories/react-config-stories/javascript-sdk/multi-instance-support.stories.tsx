import { useCallback, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

import {
  popoverResultMappings,
  searchResultTemplateBazaario,
  searchResultTemplateEchostream,
} from '@common/index.js';

const componentMeta: Meta = {
  title: 'Javascript SDK/multi instance support',
  argTypes: {},
};

export const TwoInlineInstances: StoryObj<Components.SearchcraftSearchResults> =
  {
    decorators: [
      (Story) => {
        const initInstance1 = useCallback(() => {
          new Searchcraft(
            {
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
            },
            'searchcraftInstance1',
          );

          const searchResults = document.querySelector(
            'searchcraft-search-results[searchcraft-id="searchcraftInstance1"]',
          ) as HTMLSearchcraftSearchResultsElement;

          if (searchResults) {
            searchResults.template = searchResultTemplateEchostream;
          }
        }, []);

        const initInstance2 = useCallback(() => {
          new Searchcraft(
            {
              readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
              endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
              indexName: import.meta.env.VITE_INDEX_BAZAARIO,
              initialQuery: JSON.stringify({
                query: {
                  fuzzy: {
                    ctx: 'dogs',
                  },
                },
              }),
            },
            'searchcraftInstance2',
          );

          const searchResults = document.querySelector(
            'searchcraft-search-results[searchcraft-id="searchcraftInstance2"]',
          ) as HTMLSearchcraftSearchResultsElement;

          if (searchResults) {
            searchResults.template = searchResultTemplateBazaario;
          }
        }, []);

        useEffect(() => {
          initInstance1();
          initInstance2();
        }, [initInstance1, initInstance2]);

        return <Story />;
      },
    ],
    render: () => {
      return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
          {/* searchcraftInstance1 */}
          <div
            style={{
              width: 400,
              backgroundColor: 'rgb(183 226 241)',
              borderRadius: 16,
              padding: 16,
            }}
          >
            <h1>Instance 1 (Runegard)</h1>
            <div style={{ marginBottom: 20 }}>
              <searchcraft-input-form searchcraft-id='searchcraftInstance1' />
            </div>
            <searchcraft-search-results searchcraft-id='searchcraftInstance1' />
          </div>
          {/* searchcraftInstance2 */}
          <div
            style={{
              width: 400,
              backgroundColor: 'rgb(238 216 224)',
              borderRadius: 16,
              padding: 16,
            }}
          >
            <h1>Instance 2 (Kobol)</h1>
            <div style={{ marginBottom: 20 }}>
              <searchcraft-input-form searchcraft-id='searchcraftInstance2' />
            </div>
            <searchcraft-search-results searchcraft-id='searchcraftInstance2' />
          </div>
        </div>
      );
    },
    args: {},
  };

export const InlineAndPopover: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      const initInstance1 = useCallback(() => {
        new Searchcraft(
          {
            readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
            indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
          },
          'searchcraftInstance1',
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results[searchcraft-id="searchcraftInstance1"]',
        ) as HTMLSearchcraftSearchResultsElement;

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
          searchResults.initialQuery = JSON.stringify({
            order_by: 'date_published',
            query: {
              exact: {
                ctx: 'section_name:"Columns" OR section_name:"Prep" OR section_name:"Local" OR section_name:"Minnesota"',
              },
            },
          });
        }
      }, []);

      const initInstance2 = useCallback(() => {
        new Searchcraft(
          {
            readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
            indexName: import.meta.env.VITE_INDEX_BAZAARIO,
          },
          'searchcraftInstance2',
        );
        const popoverForm = document.querySelector(
          'searchcraft-popover-form[searchcraft-id="searchcraftInstance2"]',
        ) as HTMLSearchcraftPopoverFormElement;

        if (popoverForm) {
          popoverForm.popoverResultMappings = popoverResultMappings;
        }
      }, []);

      useEffect(() => {
        initInstance1();
        initInstance2();
      }, [initInstance1, initInstance2]);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
        {/* searchcraftInstance1 */}
        <div
          style={{
            width: 400,
            backgroundColor: 'rgb(183 226 241)',
            borderRadius: 16,
            padding: 16,
          }}
        >
          <h1>Instance 1 (Echostream)</h1>
          <div style={{ marginBottom: 20 }}>
            <searchcraft-input-form searchcraft-id='searchcraftInstance1' />
          </div>
          <searchcraft-search-results searchcraft-id='searchcraftInstance1' />
        </div>
        {/* searchcraftInstance2 */}
        <div
          style={{
            width: 400,
            backgroundColor: 'rgb(238 216 224)',
            borderRadius: 16,
            padding: 16,
          }}
        >
          <h1>Instance 2 (Bazaario)</h1>
          <searchcraft-popover-button searchcraft-id='searchcraftInstance2' />
          <searchcraft-popover-form
            type='modal'
            hotkey='k'
            hotkey-modifier='ctrl'
            searchcraft-id='searchcraftInstance2'
          />
        </div>
      </div>
    );
  },
  args: {},
};

export const IndexVsFederation: StoryObj<Components.SearchcraftSearchResults> = {
  decorators: [
    (Story) => {
      const initIndexInstance = useCallback(() => {
        new Searchcraft(
          {
            readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
            indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
            initialQuery: JSON.stringify({
              query: {
                fuzzy: {
                  ctx: 'news',
                },
              },
            }),
          },
          'indexInstance',
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results[searchcraft-id="indexInstance"]',
        ) as HTMLSearchcraftSearchResultsElement;

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }
      }, []);

      const initFederationInstance = useCallback(() => {
        new Searchcraft(
          {
            readKey: import.meta.env.VITE_READ_KEY_GALAXY_NEWS,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_GALAXY_NEWS,
            federationName: import.meta.env.VITE_FEDERATION_GALAXY_NEWS,
            initialQuery: JSON.stringify({
              query: {
                fuzzy: {
                  ctx: 'galaxy news',
                },
              },
            }),
          },
          'federationInstance',
        );

        const searchResults = document.querySelector(
          'searchcraft-search-results[searchcraft-id="federationInstance"]',
        ) as HTMLSearchcraftSearchResultsElement;

        if (searchResults) {
          searchResults.template = searchResultTemplateEchostream;
        }
      }, []);

      useEffect(() => {
        initIndexInstance();
        initFederationInstance();
      }, [initIndexInstance, initFederationInstance]);

      return <Story />;
    },
  ],
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
        {/* Index Search */}
        <div
          style={{
            width: 400,
            backgroundColor: 'rgb(232 245 233)',
            borderRadius: 16,
            padding: 16,
          }}
        >
          <h1>📄 Index Search</h1>
          <p style={{ fontSize: '14px', color: '#424242', marginBottom: 16 }}>
            Searches within a single index
          </p>
          <div style={{ marginBottom: 20 }}>
            <searchcraft-input-form searchcraft-id='indexInstance' />
          </div>
          <searchcraft-search-results searchcraft-id='indexInstance' />
        </div>
        {/* Federation Search */}
        <div
          style={{
            width: 400,
            backgroundColor: 'rgb(227 242 253)',
            borderRadius: 16,
            padding: 16,
          }}
        >
          <h1>🔗 Federation Search</h1>
          <p style={{ fontSize: '14px', color: '#424242', marginBottom: 16 }}>
            Searches across multiple indices simultaneously
          </p>
          <div style={{ marginBottom: 20 }}>
            <searchcraft-input-form searchcraft-id='federationInstance' />
          </div>
          <searchcraft-search-results searchcraft-id='federationInstance' />
        </div>
      </div>
    );
  },
  args: {},
};

export default componentMeta;
