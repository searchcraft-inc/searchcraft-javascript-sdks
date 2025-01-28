<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftTheme as Component } from '../stencil-web-components';

export type SearchcraftThemeProps = Components.SearchcraftTheme;

export default defineComponent({
  name: 'SearchcraftTheme',
  props: {},
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>
