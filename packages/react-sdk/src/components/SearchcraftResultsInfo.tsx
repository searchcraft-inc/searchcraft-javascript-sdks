import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftResultsInfo as Component } from '../stencil-web-components/components';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * This React component is designed to display the number of results returned from a search query.
 *
 * @example
 * ```tsx
 * import React, { useEffect, useRef } from 'react';
 * import { SearchcraftResultsInfo } from '@searchcraft/react-sdk';
 *
 * const MyResultsInfo = () => {
 *   const ref = useRef();
 *
 *   useEffect(() => {
 *     ref.current.customFormatter = (range, count, responseTime) =>
 *       `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
 *   });
 *
 *   return <SearchcraftResultsInfo ref={ref} />;
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
