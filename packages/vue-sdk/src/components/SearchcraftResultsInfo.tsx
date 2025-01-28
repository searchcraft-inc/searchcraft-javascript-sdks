import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftResultsInfo as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
export interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * The Vue component for SearchcraftResultsInfo.
 */
const SearchcraftResultsInfo = Component;

export { SearchcraftResultsInfo };
