import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftBaseSearchResults as Component } from '../stencil-web-components';

/**
 * The Props Used by the `SearchcraftBaseSearchResults` Component.
 */
interface SearchcraftBaseSearchResultsProps
  extends Components.SearchcraftBaseSearchResults {}

/**
 * The Base Search Results
 */
const SearchcraftBaseSearchResults = Component;

export { SearchcraftBaseSearchResults };

export type { SearchcraftBaseSearchResultsProps };
