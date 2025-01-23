<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { type PropType, defineComponent } from 'vue';
import { SearchcraftInputForm as Component } from '../stencil-web-components';

export type SearchcraftInputFormProps = Components.SearchcraftInputForm;

export default defineComponent({
  name: 'SearchcraftInputForm',
  props: {
    config: {
      type: Object as PropType<Record<string, unknown>>,
      required: false,
    },
    autoSearch: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    buttonPlacement: {
      type: String as PropType<'left' | 'right'>,
      default: 'right',
    },
    buttonLabel: {
      type: String as PropType<string>,
      default: 'Search',
    },
    inputLabel: {
      type: String as PropType<string>,
      default: '',
    },
    customStyles: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({}),
    },
    placeholderValue: {
      type: String as PropType<string>,
      default: 'Enter a search term...',
    },
    searchTerm: {
      type: String as PropType<string>,
      default: '',
    },
    debounceDelay: {
      type: Number as PropType<number>,
      default: 300,
    },
  },
  emits: [
    'inputCleared',
    'noResultsReceived',
    'querySubmit',
    'inputFocus',
    'inputBlur',
  ],
  components: {
    Component,
  },
});
</script>

<template>
  <!-- Pass all props dynamically -->
  <Component
    v-bind="$props"
    @inputCleared="$emit('inputCleared', $event)"
    @noResultsReceived="$emit('noResultsReceived', $event)"
    @querySubmit="$emit('querySubmit', $event)"
    @inputFocus="$emit('inputFocus', $event)"
    @inputBlur="$emit('inputBlur', $event)"
  />
</template>