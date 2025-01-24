<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftInputLabel as Component } from '../stencil-web-components';

export type SearchcraftInputLabelProps = Components.SearchcraftInputLabel;

export default defineComponent({
  name: 'SearchcraftInputLabel',
  props: {
    inputLabelClassName: {
      type: String as () => Components.SearchcraftInputLabel['inputLabelClassName'],
      required: false,
    },
    label: {
      type: String as () => Components.SearchcraftInputLabel['label'],
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