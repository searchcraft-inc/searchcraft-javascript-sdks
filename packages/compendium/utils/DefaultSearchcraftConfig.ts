import type { SearchcraftConfig } from '@searchcraft/javascript-sdk';

/**
 * Centralized config that storybook stories can use.
 */
export const config: SearchcraftConfig = {
  readKey: import.meta.env.VITE_READ_KEY,
  endpointURL: import.meta.env.VITE_ENDPOINT_URL,
  index: [import.meta.env.VITE_INDEX],
};
