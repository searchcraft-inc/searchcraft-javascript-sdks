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

export {
  parseCustomStyles,
  serializeStyles,
} from './utils';

export { useSearchcraftStore, useThemeStore } from './provider/store';

interface testInterface {
  b: number;
}

export type { testInterface };

export type { Components } from './components';

export * from './types';
