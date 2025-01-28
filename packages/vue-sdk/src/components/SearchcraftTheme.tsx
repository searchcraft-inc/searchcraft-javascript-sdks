import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftTheme as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftTheme component.
 */
export interface SearchcraftThemeProps extends Components.SearchcraftTheme {}

/**
 * The Vue component for SearchcraftTheme.
 */
const SearchcraftTheme = Component;

export { SearchcraftTheme };
