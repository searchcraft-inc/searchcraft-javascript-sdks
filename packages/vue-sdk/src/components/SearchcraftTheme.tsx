import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftTheme as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftTheme component.
 */
export interface SearchcraftThemeProps extends Components.SearchcraftTheme {}

/**
 * A component that applies Searchcraft's built-in CSS theme to your page.
 * It does not render anything visible—its only function is to manage the CSS styles on the page.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftTheme from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftTheme />
 * </template>
 * ```
 */
const SearchcraftTheme = Component;

export { SearchcraftTheme };
