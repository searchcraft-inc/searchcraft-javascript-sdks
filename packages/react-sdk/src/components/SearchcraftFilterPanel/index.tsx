import type { FC } from 'react';

import { SearchcraftFilterPanel } from '../../stencil-web-components/components';
import type { FilterItem } from '@searchcraft/javascript-sdk/dist/types/components.js';

export type FilterPanelProps = {
  items: FilterItem[];
};

const FilterPanel: FC<FilterPanelProps> = ({ items = [] }) => (
  <SearchcraftFilterPanel items={items} />
);

export default FilterPanel;
