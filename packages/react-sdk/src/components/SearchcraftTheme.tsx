import type { FC } from 'react';

import { SearchcraftTheme as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The Props for the SearchcraftTheme component.
 */
interface SearchcraftThemeProps extends Components.SearchcraftTheme {}

/**
 * The react component for SearchcraftTheme.
 * @param props
 */
const SearchcraftTheme: FC<SearchcraftThemeProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftTheme };
export type { SearchcraftThemeProps };
