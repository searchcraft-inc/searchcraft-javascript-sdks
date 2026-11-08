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
 * import { SearchcraftSearchResults } from '@searchcraft/react-sdk';
 *
 * const MySearchResults = () => (
 *   <SearchcraftSearchResults
 *     template={(item, index, { html, safeUrl }) => html`
 *       <a href="${safeUrl(item.url)}">
 *         <h2>${item.title}</h2>
 *       </a>
 *     `}
 *   />
 * );
 *
 * export default MySearchResults;
 * ```
 */
const SearchcraftSearchResults: FC<SearchcraftSearchResultsProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftSearchResults };
export type { SearchcraftSearchResultsProps };
