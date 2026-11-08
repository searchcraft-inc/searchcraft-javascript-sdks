import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftResultsInfo as Component } from '../stencil-output/components';

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
 * import { SearchcraftResultsInfo } from '@searchcraft/react-sdk';
 *
 * const MyResultsInfo = () => (
 *   <SearchcraftResultsInfo
 *     template={({ range, count, responseTime }, { html }) => html`
 *       ${range[0]}-${range[1]} of ${count} results in ${responseTime}ms
 *     `}
 *   />
 * );
 *
 * export default MyResultsInfo;
 * ```
 */
const SearchcraftResultsInfo: FC<SearchcraftResultsInfoProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftResultsInfo };
export type { SearchcraftResultsInfoProps };
