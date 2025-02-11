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
