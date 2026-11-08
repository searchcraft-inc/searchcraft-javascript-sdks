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
 * import { SearchcraftSearchResults } from '@searchcraft/vue-sdk';
 *
 * const template = (item, index, { html, safeUrl }) => html`
 *   <a href="${safeUrl(item.url)}">
 *     <h2>${item.title}</h2>
 *   </a>
 * `;
 * </script>
 *
 * <template>
 *   <SearchcraftSearchResults :template="template" />
 * </template>
 * ```
 */
const SearchcraftSearchResults = Component;

export { SearchcraftSearchResults };

export type { SearchcraftSearchResultsProps };
