<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftSlider as Component } from '../stencil-web-components';

export type SearchcraftSliderProps = Components.SearchcraftSlider;

export default defineComponent({
  name: 'SearchcraftSlider',
  props: {
    max: {
      type: Number as () => Components.SearchcraftSlider['max'],
      required: false,
    },
    min: {
      type: Number as () => Components.SearchcraftSlider['min'],
      required: false,
    },
    granularity: {
      type: Number as () => Components.SearchcraftSlider['granularity'],
      required: false,
    },
    dataType: {
      type: String as () => Components.SearchcraftSlider['dataType'],
      required: false,
    },
  },
  emits: ['rangeChanged'],
  components: {
    Component,
  },
});
</script>

<template>
  <Component
    v-bind="$props"
    @rangeChanged="$emit('rangeChanged', $event)"
  />
</template>