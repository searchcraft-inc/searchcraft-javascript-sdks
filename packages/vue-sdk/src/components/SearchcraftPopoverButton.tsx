import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftPopoverButton.
 */
export interface SearchcraftPopoverButtonProps
  extends Components.SearchcraftPopoverButton {}

/**
 * A button component that, when clicked, toggles the visibility of a popover.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftPopoverButton from '@searchcraft/vue-sdk';
 * </script>
 *
 * <template>
 *   <SearchcraftPopoverButton>
 *     Open Popover
 *   </SearchcraftPopoverButton>
 * </template>
 * ```
 */
const SearchcraftPopoverButton = Component;

export { SearchcraftPopoverButton };
