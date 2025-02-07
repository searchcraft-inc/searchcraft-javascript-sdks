import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftSearchResultsPerPage as Component } from '../stencil-web-components/components';

/**
 * The Props for the SearchcraftSearchResultsPerPage component.
 */
interface SearchcraftSearchResultsPerPageProps
  extends Components.SearchcraftSearchResultsPerPage {}

/**
 * This React component is designed to choose the number of search results displayed.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftSearchResultsPerPage } from '@searchcraft/react-sdk';
 *
 * const MyResultsPerPage = () => {
 *   return <SearchcraftSearchResultsPerPage increment={20} />;
 * };
 *
 * export default MyResultsPerPage;
 * ```
 */
const SearchcraftSearchResultsPerPage: FC<
  SearchcraftSearchResultsPerPageProps
> = (props) => <Component {...props} />;

export { SearchcraftSearchResultsPerPage };
export type { SearchcraftSearchResultsPerPageProps };
