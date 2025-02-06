import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftResultsInfo as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
export interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * A component that displays the number of results returned from a search query.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftResultsInfo from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftResultsInfo />
 * </template>
 * ```
 */
const SearchcraftResultsInfo = Component;

export { SearchcraftResultsInfo };
