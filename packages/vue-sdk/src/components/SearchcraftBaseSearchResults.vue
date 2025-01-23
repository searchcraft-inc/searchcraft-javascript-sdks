<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftBaseSearchResults as Component } from '../stencil-web-components';

export type SearchcraftBaseSearchResultsProps =
  Components.SearchcraftBaseSearchResults;

export default defineComponent({
  name: 'SearchcraftBaseSearchResults',
  props: {
    adInterval: Number,
    customStylesForResults: Object,
    searchResultMappings: Object,
    placeAdAtEnd: Boolean,
    placeAdAtStart: Boolean,
    resultImagePlacement: String,
    buttonLabel: String,
    buttonTarget: String,
    buttonRel: String,
    containerTarget: String,
    containerRel: String,
    noResults: String,
  },
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>