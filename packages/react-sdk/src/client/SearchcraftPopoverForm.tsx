import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverForm as Component } from '../stencil-output/components';

/**
 * The props for the SearchcraftPopoverForm component.
 */
interface SearchcraftPopoverFormProps
  extends Components.SearchcraftPopoverForm {}

/**
 * A component that displays search results in a popover container that dynamically appears
 * when the user interacts with a search input field, or when a popover button is clicked.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { SearchcraftPopoverForm } from '@searchcraft/react-sdk';
 * import searchcraftConfig from './searchcraftConfig';
 * import popoverResultMappings from './popoverResultMappings';
 *
 * const MyPopoverSearch = () => {
 *   return (
 *     <SearchcraftPopoverForm
 *       config={searchcraftConfig}
 *       type="fullscreen"
 *       popoverResultMappings={popoverResultMappings}
 *       hotkey="k"
 *       hotkeyModifier="meta"
 *     />
 *   );
 * };
 *
 * export default MyPopoverSearch;
 * ```
 */
const SearchcraftPopoverForm: FC<SearchcraftPopoverFormProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPopoverForm };
export type { SearchcraftPopoverFormProps };
