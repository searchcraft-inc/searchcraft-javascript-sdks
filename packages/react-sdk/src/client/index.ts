import {
  type SearchcraftConfig,
  SearchcraftCore,
} from '@searchcraft/javascript-sdk';

import packageJson from '../../package.json';

/**
 * Exports the shared types that all SDKs need
 */
export type * from '@searchcraft/javascript-sdk';

import { defineCustomElements } from '@searchcraft/javascript-sdk';

/**
 * The consumer-facing Searchcraft class.
 */
export class Searchcraft extends SearchcraftCore {
  constructor(config: SearchcraftConfig) {
    super(config, {
      sdkName: packageJson.name,
      sdkVersion: packageJson.version,
    });
  }
}

export { defineCustomElements };

export * from './SearchcraftFilterPanel';
export * from './SearchcraftInputForm';
export * from './SearchcraftPopoverButton';
export * from './SearchcraftPopoverForm';
export * from './SearchcraftResultsInfo';
export * from './SearchcraftTheme';
export * from './SearchcraftPagination';
export * from './SearchcraftSearchResultsPerPage';
