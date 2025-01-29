import type { FC } from 'react';

import { SearchcraftBaseSearchResults as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The props for the SearchcraftBaseSearchResults component.
 */
interface SearchcraftBaseSearchResultsProps
  extends Components.SearchcraftBaseSearchResults {}

/**
 * The React component for SearchcraftBaseSearchResults.
 * @param props
 */
const SearchcraftBaseSearchResults: FC<SearchcraftBaseSearchResultsProps> = (
  props,
) => <Component {...props} />;

export { SearchcraftBaseSearchResults };
export type { SearchcraftBaseSearchResultsProps };
