import type { FC } from 'react';

import { SearchcraftSearchResults as Component } from '../stencil-output/components';

import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The props for the SearchcraftSearchResults component.
 */
interface SearchcraftSearchResultsProps
  extends Components.SearchcraftSearchResults {}

/**
 * A component that renders a list of search results with customizable styles, layout, and link behavior.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftSearchResults } from '@searchcraft/react-sdk';
 * import searchResultMappings from './searchResultMappings';
 *
 * const MySearchComponent = () => {
 *   return (
 *     <SearchcraftSearchResults
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
const SearchcraftSearchResults: FC<SearchcraftSearchResultsProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftSearchResults };
export type { SearchcraftSearchResultsProps };
