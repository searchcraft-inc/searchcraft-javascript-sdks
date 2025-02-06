import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftFilterPanel as Component } from '../stencil-web-components';

/**
 * The props used by the SearchcraftFilterPanel.
 */
interface SearchcraftFilterPanelProps
  extends Components.SearchcraftFilterPanel {}

/**
 * A component that represents a filter panel UI view, allowing users to refine and control their search queries by applying various filter criteria.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftFilterPanel from '@my-library/vue';
 * import filterItems from './filterItems';
 * </script>
 *
 * <template>
 *   <SearchcraftFilterPanel :items="filterItems" />
 * </template>
 * ```
 */
const SearchcraftFilterPanel = Component;

export { SearchcraftFilterPanel };

export type { SearchcraftFilterPanelProps };
