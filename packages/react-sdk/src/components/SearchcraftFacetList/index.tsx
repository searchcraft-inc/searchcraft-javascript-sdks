import type { FC } from 'react';

import { SearchcraftFacetList } from '../../stencil-web-components/components';

export type FacetListProps = {
  fieldName: string;
};

const FacetList: FC<FacetListProps> = ({ fieldName = '' }) => (
  <SearchcraftFacetList fieldName={fieldName} />
);

export default FacetList;
