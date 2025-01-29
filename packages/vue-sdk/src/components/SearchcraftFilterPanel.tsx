import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftFilterPanel as Component } from '../stencil-web-components';

/**
 * The props used by the SearchcraftFilterPanel.
 */
interface SearchcraftFilterPanelProps
  extends Components.SearchcraftFilterPanel {}

/**
 * The SearchcraftFilterPanel Vue Component.
 */
const SearchcraftFilterPanel = Component;

export { SearchcraftFilterPanel };

export type { SearchcraftFilterPanelProps };
