import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftInputForm as Component } from '../stencil-output/components';

/**
 * The props for the SearchcraftInputForm.
 */
interface SearchcraftInputFormProps extends Components.SearchcraftInputForm {}

/**
 * A component that provides a user-friendly interface for querying an indexed dataset,
 * enabling users to easily search large collections of data. It abstracts the complexities
 * of index-based searching, making it accessible to users of all technical levels.
 *
 * @example
 * ```tsx
 * import { SearchcraftInputForm } from '@searchcraft/react-sdk';
 *
 * const MySearchInput = () => (
 *   <SearchcraftInputForm
 *     autoSearch={true}
 *     buttonPlacement="right"
 *     buttonLabel="Search"
 *     inputLabel="Search articles"
 *     placeholderValue="Search here..."
 *     onInputFocus={() => console.log('Input focused')}
 *     onInputBlur={() => console.log('Input blurred')}
 *   />
 * );
 *
 * export default MySearchInput;
 * ```
 */
const SearchcraftInputForm: FC<SearchcraftInputFormProps> = (props) => {
  return <Component {...props} />;
};

export { SearchcraftInputForm };
export type { SearchcraftInputFormProps };
