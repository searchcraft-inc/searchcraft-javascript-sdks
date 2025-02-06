import type { FC } from 'react';

import { SearchcraftTheme as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The Props for the SearchcraftTheme component.
 */
interface SearchcraftThemeProps extends Components.SearchcraftTheme {}

/**
 * A component that applies Searchcraft's built-in CSS theme to your page.
 * It does not render anything visible—its only function is to manage the CSS styles on the page.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftTheme } from '@searchcraft/react-sdk';
 *
 * const MyThemeProvider = () => {
 *   return <SearchcraftTheme theme="light" customTheme={'[]'} />;
 * };
 *
 * export default MyThemeProvider;
 * ```
 */
const SearchcraftTheme: FC<SearchcraftThemeProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftTheme };
export type { SearchcraftThemeProps };
