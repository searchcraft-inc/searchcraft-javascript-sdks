import type { FC } from 'react';

import { SearchcraftResultsInfo as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

const SearchcraftResultsInfo: FC<SearchcraftResultsInfoProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftResultsInfo };
export type { SearchcraftResultsInfoProps };
