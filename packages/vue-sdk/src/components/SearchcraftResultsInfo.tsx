import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftResultsInfo as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
export interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * This Vue component is designed to display the number of results returned from a search query.
 *
 * @example
 * ```vue
 * <script setup>
 *   import SearchcraftResultsInfo from '@searchcraft/vue-sdk';
 *
 *   const customFormatter =  (range, count, responseTime) =>
 *     `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
 * </script>
 *
 * <template>
 *   <SearchcraftResultsInfo :customFormatter="customFormatter" />
 * </template>
 * ```
 */
const SearchcraftResultsInfo = Component;
export { SearchcraftResultsInfo };
