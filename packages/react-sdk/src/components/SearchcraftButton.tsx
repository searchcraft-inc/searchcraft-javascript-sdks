import type { FC } from 'react';

import { SearchcraftButton as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftButtonProps extends Components.SearchcraftButton {}

const SearchcraftButton: FC<SearchcraftButtonProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftButton };
export type { SearchcraftButtonProps };
