'use client';

import { useEffect } from 'react';

import {
  Searchcraft,
  hydrateSearchcraftComponents,
} from '@searchcraft/react-sdk/server';

import {
  searchResultTemplate,
  popoverResultMappingsRunegard,
} from '@common/index';

export const SearchcraftInit = () => {
  useEffect(() => {
    new Searchcraft({
      index: [process.env.NEXT_PUBLIC_RUNEGARD_INDEX || ''],
      readKey: process.env.NEXT_PUBLIC_RUNEGARD_READ_KEY || '',
      endpointURL: process.env.NEXT_PUBLIC_RUNEGARD_ENDPOINT_URL || '',
    });

    hydrateSearchcraftComponents();

    const searchResults = document.querySelector('searchcraft-search-results');

    if (searchResults) {
      searchResults.template = searchResultTemplate;
    }

    const popoverForm = document.querySelector('searchcraft-popover-form');

    if (popoverForm) {
      popoverForm.popoverResultMappings = popoverResultMappingsRunegard;
    }
  }, []);
  return null;
};
