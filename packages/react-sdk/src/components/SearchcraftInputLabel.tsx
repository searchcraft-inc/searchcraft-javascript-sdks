import type { FC } from 'react';

import { SearchcraftInputLabel as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftInputLabelProps extends Components.SearchcraftInputLabel {}

const SearchcraftInputLabel: FC<SearchcraftInputLabelProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftInputLabel };
export type { SearchcraftInputLabelProps };
