import type { FC } from 'react';

import { SearchcraftBaseSearchResults as Component } from '../stencil-output/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The props for the SearchcraftBaseSearchResults component.
 */
interface SearchcraftBaseSearchResultsProps
  extends Components.SearchcraftBaseSearchResults {}

/**
 * A component that renders a list of search results with customizable styles, layout, and link behavior.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftBaseSearchResults } from '@searchcraft/react-sdk';
 * import searchResultMappings from './searchResultMappings';
 *
 * const MySearchComponent = () => {
 *   return (
 *     <SearchcraftBaseSearchResults
 *       searchResultMappings={searchResultMappings}
 *       resultImagePlacement="left"
 *       buttonLabel="View More"
 *       buttonTarget="_blank"
 *       buttonRel="noopener"
 *       containerTarget="_self"
 *       containerRel="nofollow"
 *       onNoResults={() => console.log("No search results found")}
 *     />
 *   );
 * };
 *
 * export default MySearchComponent;
 * ```
 */
const SearchcraftBaseSearchResults: FC<SearchcraftBaseSearchResultsProps> = (
  props,
) => <Component {...props} />;

export { SearchcraftBaseSearchResults };
export type { SearchcraftBaseSearchResultsProps };
