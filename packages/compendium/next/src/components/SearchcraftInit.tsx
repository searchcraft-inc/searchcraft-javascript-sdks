'use client';

import { useEffect } from 'react';

import {
  Searchcraft,
  hydrateSearchcraftComponents,
} from '@searchcraft/react-sdk/server';

import { searchResultTemplate, popoverResultMappings } from '@common/index';

export const SearchcraftInit = () => {
  useEffect(() => {
    new Searchcraft({
      index: [process.env.NEXT_PUBLIC_KOBOL_INDEX || ''],
      readKey: process.env.NEXT_PUBLIC_KOBOL_READ_KEY || '',
      endpointURL: process.env.NEXT_PUBLIC_KOBOL_ENDPOINT_URL || '',
    });

    hydrateSearchcraftComponents();

    const searchResults = document.querySelector('searchcraft-search-results');

    if (searchResults) {
      searchResults.template = searchResultTemplate;
    }

    const popoverForm = document.querySelector('searchcraft-popover-form');

    if (popoverForm) {
      popoverForm.popoverResultMappings = popoverResultMappings;
    }
  }, []);
  return null;
};
