import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftPopoverForm as Component } from '../stencil-web-components/components';

/**
 * The props for the SearchcraftPopoverForm component.
 */
interface SearchcraftPopoverFormProps
  extends Components.SearchcraftPopoverForm {}

/**
 * The React component for SearchcraftPopoverForm.
 * @param props
 */
const SearchcraftPopoverForm: FC<SearchcraftPopoverFormProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftPopoverForm };
export type { SearchcraftPopoverFormProps };
