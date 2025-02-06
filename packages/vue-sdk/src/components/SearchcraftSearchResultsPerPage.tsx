import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftSearchResultsPerPage as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftSearchResultsPerPage component.
 */
export interface SearchcraftSearchResultsPerPageProps
  extends Components.SearchcraftSearchResultsPerPage {}

/**
 * This Vue component is designed to choose the number of search results displayed.
 *
 * @example
 * ```vue
 * <script setup>
 *   import SearchcraftSearchResultsPerPage from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftSearchResultsPerPage increment="20" />
 * </template>
 * ```
 */
const SearchcraftSearchResultsPerPage = Component;
export { SearchcraftSearchResultsPerPage };
