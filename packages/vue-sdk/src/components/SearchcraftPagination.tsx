import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftPagination as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftPagination component.
 */
export interface SearchcraftPaginationProps
  extends Components.SearchcraftPagination {}

/**
 * This React component is designed to facilitate pagination of search results.
 * Once a query is submitted, calculates the number for pages.
 *
 * @example
 * ```vue
 * <script setup>
 *   import SearchcraftPagination from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftPagination />
 * </template>
 * ```
 */
const SearchcraftPagination = Component;
export { SearchcraftPagination };
