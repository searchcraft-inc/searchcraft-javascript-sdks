import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftPagination as Component } from '../stencil-output/components';

/**
 * The props for the SearchcraftPagination component.
 */
interface SearchcraftPaginationProps extends Components.SearchcraftPagination {}

/**
 * This React component is designed to facilitate pagination of search results.
 * Once a query is submitted, calculates the number for pages.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftPagination } from '@searchcraft/react-sdk';
 *
 * const MyPaginationComponent = () => {
 *   return (
 *     // other searchcraft components
 *     <SearchcraftPagination />
 *   );
 * };
 *
 * export default MyPaginationComponent;
 * ```
 */
const SearchcraftPagination: FC<SearchcraftPaginationProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPagination };
export type { SearchcraftPaginationProps };
