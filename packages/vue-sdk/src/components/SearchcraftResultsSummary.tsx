import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftResultsSummary as Component } from '../stencil-web-components';

/**
 * The Props Used by the `SearchcraftResultsSummary` Component.
 */
interface SearchcraftResultsSummaryProps
  extends Components.SearchcraftResultsSummary {}

/**
 * This Vue component displays an ai-generated results summary of the given search term.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftResultsSummary from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftResultsSummary />
 * </template>
 * ```
 */
const SearchcraftResultsSummary = Component;

export { SearchcraftResultsSummary };

export type { SearchcraftResultsSummaryProps };
