import type { Components } from '@searchcraft/javascript-sdk';
import { SearchcraftInputForm as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftInputForm component.
 */
export interface SearchcraftInputFormProps
  extends Components.SearchcraftInputForm {}

/**
 * The Vue Component for the SearchcraftInputForm.
 */
const SearchcraftInputForm = Component;

export { SearchcraftInputForm };
