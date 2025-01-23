import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftInputLabel as Component } from '../stencil-web-components/components';

interface SearchcraftInputLabelProps extends Components.SearchcraftInputLabel { }

const SearchcraftInputLabel: FC<SearchcraftInputLabelProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftInputLabel };
export type { SearchcraftInputLabelProps };
