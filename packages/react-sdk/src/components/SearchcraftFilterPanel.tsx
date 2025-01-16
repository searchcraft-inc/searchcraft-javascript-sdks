import type { FC } from 'react';

import { SearchcraftFilterPanel as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftFilterPanelProps
  extends Components.SearchcraftFilterPanel {}

const SearchcraftFilterPanel: FC<SearchcraftFilterPanelProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftFilterPanel };
export type { SearchcraftFilterPanelProps };
