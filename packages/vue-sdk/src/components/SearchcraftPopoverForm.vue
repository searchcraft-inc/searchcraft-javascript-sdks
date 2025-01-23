<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftPopoverForm as Component } from '../stencil-web-components';

export type SearchcraftPopoverFormProps = Components.SearchcraftPopoverForm;

export default defineComponent({
  name: 'SearchcraftPopoverForm',
  props: {
    type: {
      type: String as () => SearchcraftPopoverFormProps['type'],
      required: false,
    },
    hotkey: {
      type: String as () => SearchcraftPopoverFormProps['hotkey'],
      required: false,
    },
    hotkeyModifier: {
      type: String as () => SearchcraftPopoverFormProps['hotkeyModifier'],
      required: false,
    },
    config: {
      type: Object as () => SearchcraftPopoverFormProps['config'],
      required: false,
    },
    popoverResultMappings: {
      type: Object as () => SearchcraftPopoverFormProps['popoverResultMappings'],
      required: false,
    },
  },
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>