import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftSummaryBox as Component } from '../stencil-web-components';

/**
 * The Props Used by the `SearchcraftSummaryBox` Component.
 */
interface SearchcraftSummaryBoxProps extends Components.SearchcraftSummaryBox {}

/**
 * This React component displays an ai-generated summary of the given search term.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftSummaryBox from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftSummaryBox />
 * </template>
 * ```
 */
const SearchcraftSummaryBox = Component;

export { SearchcraftSummaryBox };

export type { SearchcraftSummaryBoxProps };
