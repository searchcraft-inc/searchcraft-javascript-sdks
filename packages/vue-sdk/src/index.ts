import { type SearchcraftConfig, SearchcraftCore } from '@searchcraft/core';
import packageJson from '../package.json';

/**
 * Export all components and plugins for the Vue SDK here.
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
