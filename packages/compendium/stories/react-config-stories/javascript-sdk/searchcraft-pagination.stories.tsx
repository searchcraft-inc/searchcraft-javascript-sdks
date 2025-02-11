import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  type SearchResultMappings,
} from '@searchcraft/javascript-sdk';

import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const searchResultMappings: SearchResultMappings = {
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

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-pagination',
  argTypes: {},
};

const defaultProps = {};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchcraft = new Searchcraft(config);

        const unsubscribe = searchcraft.subscribe(
          'query_submitted',
          (event) => {
            console.log('QUERY SUBMITTED! ', event.data.searchTerm);
          },
        );

        const unsubscribe2 = searchcraft.subscribe('input_cleared', (event) => {
          console.log('INPUT CLEARED ', event);
        });

        const baseSearchResults = document.querySelector(
          'searchcraft-base-search-results',
        );
        const resultsInfo = document.querySelector('searchcraft-results-info');

        if (baseSearchResults) {
          baseSearchResults.searchResultMappings = searchResultMappings;
        }

        if (resultsInfo) {
          resultsInfo.customFormatter = (range, count, responseTime) =>
            `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
        }

        return () => {
          unsubscribe();
          unsubscribe2();
        };
      }, []);

      return <Story />;
    },
  ],
  render: () => (
    <>
      <searchcraft-theme />
      <searchcraft-results-info />
      <searchcraft-pagination />
      <searchcraft-search-results-per-page />
      <searchcraft-input-form />
      <searchcraft-base-search-results />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
