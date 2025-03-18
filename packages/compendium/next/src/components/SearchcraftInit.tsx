'use client';

import {
  Searchcraft,
  hydrateSearchcraftComponents,
  type SearchResultMappings,
} from '@searchcraft/react-sdk/server';
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

export const SearchcraftInit = () => {
  useEffect(() => {
    new Searchcraft({
      index: [process.env.NEXT_PUBLIC_RUNEGARD_INDEX || ''],
      readKey: process.env.NEXT_PUBLIC_RUNEGARD_READ_KEY || '',
      endpointURL: process.env.NEXT_PUBLIC_RUNEGARD_ENDPOINT_URL || '',
    });

    hydrateSearchcraftComponents();

    const baseSearchResults = document.querySelector(
      'searchcraft-base-search-results',
    );

    if (baseSearchResults) {
      baseSearchResults.searchResultMappings = searchResultMappings;
    }
  }, []);
  return null;
};
