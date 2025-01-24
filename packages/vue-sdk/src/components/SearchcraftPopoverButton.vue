<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components';

export type SearchcraftPopoverButtonProps = Components.SearchcraftPopoverButton;

export default defineComponent({
  name: 'SearchcraftPopoverButton',
  props: {},
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>