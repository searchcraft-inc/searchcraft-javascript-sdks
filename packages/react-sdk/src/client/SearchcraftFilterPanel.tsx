import type { FC } from 'react';

import { SearchcraftFilterPanel as Component } from '../stencil-output/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The props for the SearchcraftFilterPanel.
 */
interface SearchcraftFilterPanelProps
  extends Components.SearchcraftFilterPanel {}

/**
 * A component that represents a filter panel UI view, allowing users to refine and control their search queries by applying various filter criteria.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftFilterPanel } from '@searchcraft/react-sdk';
 * import filterItems from './filterItems';
 *
 * const MyFilterComponent = () => {
 *   return (
 *     <SearchcraftFilterPanel items={filterItems} />
 *   );
 * };
 *
 * export default MyFilterComponent;
 * ```
 */
const SearchcraftFilterPanel: FC<SearchcraftFilterPanelProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftFilterPanel };
export type { SearchcraftFilterPanelProps };
