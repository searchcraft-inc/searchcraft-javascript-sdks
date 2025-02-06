import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftSelect as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftSelect component.
 */
export interface SearchcraftSelectProps extends Components.SearchcraftSelect {}

/**
 * This Vue component is designed to allow users to select between a group of options.
 *
 * @example
 * ```vue
 * <script setup>
 *   import SearchcraftSelect from '@searchcraft/vue-sdk';
 *
 *   const selectOptions = [{ label: 'label', value: 'value' }]
 * </script>
 *
 * <template>
 *   <SearchcraftSelect :selectOptions="selectOptions" />
 * </template>
 * ```
 */
const SearchcraftSelect = Component;
export { SearchcraftSelect };
