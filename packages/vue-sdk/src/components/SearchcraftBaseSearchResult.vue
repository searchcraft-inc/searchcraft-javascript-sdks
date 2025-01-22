<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { type PropType, defineComponent } from 'vue';
import { SearchcraftBaseSearchResult as Component } from '../stencil-web-components';

export type SearchcraftBaseSearchResultProps =
  Components.SearchcraftBaseSearchResult;

export default defineComponent({
  name: 'SearchcraftBaseSearchResult',
  props: Object.keys(Component.prototype || {}).reduce(
    (props, key) => {
      props[key] = {
        type: null as PropType<string | number | boolean | object>,
        required: false,
      };
      return props;
    },
    {} as Record<string, { type: PropType<unknown>; required: boolean }>,
  ),
});
</script>

<template>
  <!-- Pass all props using v-bind -->
  <Component v-bind="$props" />
</template>