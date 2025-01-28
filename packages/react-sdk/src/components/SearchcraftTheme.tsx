import type { FC } from 'react';

import { SearchcraftTheme as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftThemeProps extends Components.SearchcraftTheme {}

const SearchcraftTheme: FC<SearchcraftThemeProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftTheme };
export type { SearchcraftThemeProps };
