import type { FC } from 'react';

import { SearchcraftErrorMessage as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftErrorMessageProps
  extends Components.SearchcraftErrorMessage {}

const SearchcraftErrorMessage: FC<SearchcraftErrorMessageProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftErrorMessage };
export type { SearchcraftErrorMessageProps };
