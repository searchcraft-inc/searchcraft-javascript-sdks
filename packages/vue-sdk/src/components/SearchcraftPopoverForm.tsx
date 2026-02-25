import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent, h } from 'vue';
import { SearchcraftPopoverForm as Component } from '../stencil-web-components';

/**
 * The Props for the SearchcraftPopoverForm.
 */
export interface SearchcraftPopoverFormProps
  extends Components.SearchcraftPopoverForm {}

/**
 * A component that displays search results in a popover container that dynamically appears
 * when the user interacts with a search input field, or when a Popover Button has been clicked.
 *
 * @example
 * ```vue
 * <script setup>
 * import SearchcraftPopoverForm from '@searchcraft/vue-sdk';
 * import searchcraftConfig from './searchcraftConfig';
 * import popoverResultMappings from './popoverResultMappings';
 * </script>
 *
 * <template>
 *   <SearchcraftPopoverForm
 *     :config="searchcraftConfig"
 *     type="fullscreen"
 *     :popoverResultMappings="popoverResultMappings"
 *     hotkey="k"
 *     hotkeyModifier="meta"
 *   />
 * </template>
 * ```
 */
const SearchcraftPopoverForm = defineComponent({
  name: 'SearchcraftPopoverForm',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(Component, { ...attrs, sdkVariant: 'vue' }, slots);
  },
});

export { SearchcraftPopoverForm };
