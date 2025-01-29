import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftPopoverButton.
 */
export interface SearchcraftPopoverButtonProps
  extends Components.SearchcraftPopoverButton {}

/**
 * The Vue component for the SearchcraftPopoverButton.
 */
const SearchcraftPopoverButton = Component;

export { SearchcraftPopoverButton };
