import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components/components';

/**
 * The props for the SearchcraftPopoverButton.
 */
interface SearchcraftPopoverButtonProps
  extends Components.SearchcraftPopoverButton {}

/**
 * The React component for the SearchcraftPopoverButton.
 * @param props
 */
const SearchcraftPopoverButton: FC<SearchcraftPopoverButtonProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPopoverButton };
export type { SearchcraftPopoverButtonProps };
