import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components/components';

/**
 * The props for the SearchcraftPopoverButton.
 */
interface SearchcraftPopoverButtonProps
  extends Components.SearchcraftPopoverButton {}

/**
 * A button component that, when clicked, toggles the visibility of a popover.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftPopoverButton } from '@searchcraft/react-sdk';
 *
 * const MyPopoverTrigger = () => {
 *   return (
 *     <SearchcraftPopoverButton>
 *       Open Popover
 *     </SearchcraftPopoverButton>
 *   );
 * };
 *
 * export default MyPopoverTrigger;
 * ```
 */
const SearchcraftPopoverButton: FC<SearchcraftPopoverButtonProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPopoverButton };
export type { SearchcraftPopoverButtonProps };
