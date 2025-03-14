import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftSearchResults as Component } from '../stencil-web-components';

/**
 * The Props Used by the `SearchcraftSearchResults` Component.
 */
interface SearchcraftSearchResultsProps
  extends Components.SearchcraftSearchResults {}

/**
 * A component that renders a list of search results with customizable styles, layout, and link behavior.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftSearchResults from '@searchcraft/vue-sdk';
 * import searchResultMappings from './searchResultMappings';
 *
 * const handleNoResults = () => {
 *   console.log("No search results found");
 * };
 * </script>
 *
 * <template>
 *   <SearchcraftSearchResults
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
const SearchcraftSearchResults = Component;

export { SearchcraftSearchResults };

export type { SearchcraftSearchResultsProps };
