import type { SearchcraftConfig } from '@searchcraft/javascript-sdk';

/**
 * Alternate config that storybook stories can use.
 */

export const configAlternate: SearchcraftConfig = {
  readKey: import.meta.env.VITE_READ_KEY_SECONDARY,
  endpointURL: import.meta.env.VITE_ENDPOINT_URL_SECONDARY,
  index: [import.meta.env.VITE_INDEX_SECONDARY],
};
