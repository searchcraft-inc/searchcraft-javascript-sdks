import type { FC } from 'react';

import { SearchcraftFilterPanel as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The props for the SearchcraftFilterPanel.
 */
interface SearchcraftFilterPanelProps
  extends Components.SearchcraftFilterPanel {}

/**
 * The React component for the SearchcraftFilterPanel.
 * @param props
 */
const SearchcraftFilterPanel: FC<SearchcraftFilterPanelProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftFilterPanel };
export type { SearchcraftFilterPanelProps };
