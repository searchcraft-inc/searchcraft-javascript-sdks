import type { FC } from 'react';

import { SearchcraftBaseSearchResults as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftBaseSearchResultsProps
  extends Components.SearchcraftBaseSearchResults {}

const SearchcraftBaseSearchResults: FC<SearchcraftBaseSearchResultsProps> = (
  props,
) => <Component {...props} />;

export { SearchcraftBaseSearchResults };
export type { SearchcraftBaseSearchResultsProps };
