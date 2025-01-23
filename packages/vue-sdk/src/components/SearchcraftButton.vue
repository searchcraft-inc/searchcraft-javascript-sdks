<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftButton as Component } from '../stencil-web-components';

export type SearchcraftButtonProps = Components.SearchcraftButton;

export default defineComponent({
  name: 'SearchcraftButton',
  props: {
    text: String,
    disabled: Boolean,
    type: String,
    onClick: Function,
  },
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>