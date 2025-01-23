import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverForm as Component } from '../stencil-web-components/components';

interface SearchcraftPopoverFormProps extends Components.SearchcraftPopoverForm { }

const SearchcraftPopoverForm: FC<SearchcraftPopoverFormProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPopoverForm };
export type { SearchcraftPopoverFormProps };
