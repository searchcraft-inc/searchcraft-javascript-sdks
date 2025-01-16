import type { FC } from 'react';

import { SearchcraftToggleButton as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftToggleButtonProps
  extends Components.SearchcraftToggleButton {}

const SearchcraftToggleButton: FC<SearchcraftToggleButtonProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftToggleButton };
export type { SearchcraftToggleButtonProps };
