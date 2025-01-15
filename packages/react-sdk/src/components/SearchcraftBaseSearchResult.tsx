import type { FC } from 'react';

import { SearchcraftBaseSearchResult as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftBaseSearchResultProps
  extends Components.SearchcraftBaseSearchResult {}

const SearchcraftBaseSearchResult: FC<SearchcraftBaseSearchResultProps> = (
  props,
) => <Component {...props} />;

export { SearchcraftBaseSearchResult };
export type { SearchcraftBaseSearchResultProps };
