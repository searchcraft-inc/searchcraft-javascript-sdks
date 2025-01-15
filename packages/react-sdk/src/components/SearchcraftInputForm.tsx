import type { FC } from 'react';

import { SearchcraftInputForm as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftInputFormProps extends Components.SearchcraftInputForm {}

const SearchcraftInputForm: FC<SearchcraftInputFormProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftInputForm };
export type { SearchcraftInputFormProps };
