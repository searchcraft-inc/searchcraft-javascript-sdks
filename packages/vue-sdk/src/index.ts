import {
  type SearchcraftConfig,
  SearchcraftCore,
} from '@searchcraft/javascript-sdk';
import { defineCustomElements } from '@searchcraft/javascript-sdk';

import packageJson from '../package.json';

/**
 * Export all components and plugins for the Vue SDK here.
 */
export * from './components';

/**
 * The consumer-facing Searchcraft class.
 */
export class Searchcraft extends SearchcraftCore {
  constructor(
    config: SearchcraftConfig,
    searchcraftId: string | undefined = undefined,
  ) {
    super(
      config,
      {
        sdkName: packageJson.name,
        sdkVersion: packageJson.version,
      },
      searchcraftId,
    );
  }
}

/**
 * Exports the shared types that all SDKs need
 */
export type * from '@searchcraft/javascript-sdk';

/**
 * Call the javascript sdk's defineCustomElementsFunction
 */
defineCustomElements();
