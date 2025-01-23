<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftFacetList as Component } from '../stencil-web-components';

export type SearchcraftFacetListProps = Components.SearchcraftFacetList;

export default defineComponent({
  name: 'SearchcraftFacetList',
  props: {
    fieldName: {
      type: String as () => Components.SearchcraftFacetList['fieldName'],
      required: true,
    },
  },
  emits: ['facetSelectionUpdated'],
  components: {
    Component,
  },
});
</script>

<template>
  <Component
    v-bind="$props"
    @facetSelectionUpdated="$emit('facetSelectionUpdated', $event)"
  />
</template>