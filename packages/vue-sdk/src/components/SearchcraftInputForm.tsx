import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftInputForm as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftInputForm component.
 */
export interface SearchcraftInputFormProps
  extends Components.SearchcraftInputForm {}

/**
 * A component that provides a user-friendly interface for querying an indexed dataset,
 * enabling users to easily search large collections of data. It abstracts the complexities
 * of index-based searching, making it accessible to users of all technical levels.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftInputForm from '@searchcraft/vue-sdk';
 * import searchcraftConfig from './searchcraftConfig';
 *
 * const handleQuerySubmit = (event) => {
 *   console.log("Query submitted", event.detail);
 * };
 * </script>
 *
 * <template>
 *   <SearchcraftInputForm
 *     :config="searchcraftConfig"
 *     :autoSearch="true"
 *     buttonPlacement="right"
 *     buttonLabel="Search"
 *     inputLabel="Search Database"
 *     :customStyles="{ border: '1px solid gray', padding: '5px' }"
 *     placeholderValue="Search here..."
 *     searchTerm=""
 *     @querySubmit="handleQuerySubmit"
 *     @inputCleared="() => console.log('Input cleared')"
 *     @noResultsReceived="() => console.log('No results found')"
 *     @inputFocus="() => console.log('Input focused')"
 *     @inputBlur="() => console.log('Input blurred')"
 *     @inputInit="() => console.log('Input initialized')"
 *   />
 * </template>
 * ```
 */
const SearchcraftInputForm = Component;

export { SearchcraftInputForm };
