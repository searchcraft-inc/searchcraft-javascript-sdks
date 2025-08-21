import type { FC } from 'react';

import { SearchcraftInputForm as Component } from '../stencil-output/components';
import type { Components } from '@searchcraft/javascript-sdk';

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
 * import React from 'react';
 * import { SearchcraftInputForm } from '@searchcraft/react-sdk';
 * import searchcraftConfig from './searchcraftConfig';
 *
 * const MySearchComponent = () => {
 *   const handleQuerySubmit = (event: CustomEvent<string>) => {
 *     console.log("Query submitted", event.detail);
 *   };
 *
 *   return (
 *     <SearchcraftInputForm
 *       config={searchcraftConfig}
 *       autoSearch={true}
 *       buttonPlacement="right"
 *       buttonLabel="Search"
 *       inputLabel="Search Database"
 *       customStyles={{ border: "1px solid gray", padding: "5px" }}
 *       placeholderValue="Search here..."
 *       searchTerm=""
 *       onQuerySubmit={handleQuerySubmit}
 *       onInputCleared={() => console.log("Input cleared")}
 *       onNoResultsReceived={() => console.log("No results found")}
 *       onInputFocus={() => console.log("Input focused")}
 *       onInputBlur={() => console.log("Input blurred")}
 *       onInputInit={() => console.log("Input initialized")}
 *     />
 *   );
 * };
 *
 * export default MySearchComponent;
 * ```
 */
const SearchcraftInputForm: FC<SearchcraftInputFormProps> = (props) => {
  return <Component {...props} />;
};

export { SearchcraftInputForm };
export type { SearchcraftInputFormProps };
