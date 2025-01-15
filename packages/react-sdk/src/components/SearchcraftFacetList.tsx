import type { FC } from 'react';

import { SearchcraftFacetList as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftFacetListProps extends Components.SearchcraftFacetList {}

const SearchcraftFacetList: FC<SearchcraftFacetListProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftFacetList };
export type { SearchcraftFacetListProps };
