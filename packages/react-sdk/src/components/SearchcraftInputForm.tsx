import type { FC } from 'react';

import { SearchcraftInputForm as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

/**
 * The props for the SearchcraftInputForm.
 */
interface SearchcraftInputFormProps extends Components.SearchcraftInputForm {}

/**
 * The React component for the SearchcraftInputForm
 * @param props
 */
const SearchcraftInputForm: FC<SearchcraftInputFormProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftInputForm };
export type { SearchcraftInputFormProps };
