<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftResultsInfo as Component } from '../stencil-web-components';

export type SearchcraftResultsInfoProps = Components.SearchcraftResultsInfo;

export default defineComponent({
  name: 'SearchcraftResultsInfo',
  props: {},
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>