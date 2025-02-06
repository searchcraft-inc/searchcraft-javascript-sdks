import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftBaseSearchResults as Component } from '../stencil-web-components';

/**
 * The Props Used by the `SearchcraftBaseSearchResults` Component.
 */
interface SearchcraftBaseSearchResultsProps
  extends Components.SearchcraftBaseSearchResults {}

/**
 * A component that renders a list of search results with customizable styles, layout, and link behavior.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftBaseSearchResults from '@searchcraft/vue-sdk';
 * import searchResultMappings from './searchResultMappings';
 *
 * const handleNoResults = () => {
 *   console.log("No search results found");
 * };
 * </script>
 *
 * <template>
 *   <SearchcraftBaseSearchResults
 *     :searchResultMappings="searchResultMappings"
 *     resultImagePlacement="left"
 *     buttonLabel="View More"
 *     buttonTarget="_blank"
 *     buttonRel="noopener"
 *     containerTarget="_self"
 *     containerRel="nofollow"
 *     @noResults="handleNoResults"
 *   />
 * </template>
 * ```
 */
const SearchcraftBaseSearchResults = Component;

export { SearchcraftBaseSearchResults };

export type { SearchcraftBaseSearchResultsProps };
