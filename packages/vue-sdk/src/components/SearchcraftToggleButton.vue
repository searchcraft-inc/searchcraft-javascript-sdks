<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftToggleButton as Component } from '../stencil-web-components';

export type SearchcraftToggleButtonProps = Components.SearchcraftToggleButton;

export default defineComponent({
  name: 'SearchcraftToggleButton',
  props: {
    label: {
      type: String as () => Components.SearchcraftToggleButton['label'],
      required: false,
    },
    subLabel: {
      type: String as () => Components.SearchcraftToggleButton['subLabel'],
      required: false,
    },
  },
  emits: ['toggleUpdated'],
  components: {
    Component,
  },
});
</script>

<template>
  <Component
    v-bind="$props"
    @toggleUpdated="$emit('toggleUpdated', $event)"
  />
</template>