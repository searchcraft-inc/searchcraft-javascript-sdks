import { type SearchcraftConfig, SearchcraftCore } from '@searchcraft/core';
import { searchcraftStore } from '@store';
import packageJson from '../package.json';

/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */
export type * from './components';
export type { SearchcraftConfig };
export { searchcraftStore };

export {
  parseCustomStyles,
  serializeStyles,
} from './utils';

export type { Components } from './components';

/**
 * The consumer-facing `Searchcraft` class.
 */
export class Searchcraft extends SearchcraftCore {
  constructor(config: SearchcraftConfig) {
    super(config, {
      sdkName: packageJson.name,
      sdkVersion: packageJson.version,
    });
  }
}
