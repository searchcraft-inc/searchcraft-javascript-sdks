import type { FC } from 'react';

import { SearchcraftResultsInfo as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * The React component for SearchcraftResultsInfo.
 * @param props
 */
const SearchcraftResultsInfo: FC<SearchcraftResultsInfoProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftResultsInfo };
export type { SearchcraftResultsInfoProps };
