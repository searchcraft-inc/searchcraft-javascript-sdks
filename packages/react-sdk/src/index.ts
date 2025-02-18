import { type SearchcraftConfig, SearchcraftCore } from '@searchcraft/core';
import packageJson from '../package.json';

/**
 * Entry file for @searchcraft/react-sdk
 */
export * from './components';

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

/**
 * Exports the shared types that all SDKs need
 */
export type * from '@searchcraft/core/dist/types/sdk-types';
