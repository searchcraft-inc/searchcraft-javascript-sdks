import type { FC } from 'react';

import { SearchcraftResultsInfo as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * A component that displays the number of results returned from a search query.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftResultsInfo } from '@searchcraft/react-sdk';
 *
 * const MyResultsInfo = () => {
 *   return <SearchcraftResultsInfo />;
 * };
 *
 * export default MyResultsInfo;
 * ```
 */
const SearchcraftResultsInfo: FC<SearchcraftResultsInfoProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftResultsInfo };
export type { SearchcraftResultsInfoProps };
