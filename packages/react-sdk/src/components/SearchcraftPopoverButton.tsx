import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components/components';

interface SearchcraftPopoverButtonProps extends Components.SearchcraftPopoverButton { }

const SearchcraftPopoverButton: FC<SearchcraftPopoverButtonProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPopoverButton };
export type { SearchcraftPopoverButtonProps };
