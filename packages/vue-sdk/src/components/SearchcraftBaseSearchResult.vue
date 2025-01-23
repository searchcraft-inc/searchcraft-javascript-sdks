<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { type PropType, defineComponent } from 'vue';
import { SearchcraftBaseSearchResult as Component } from '../stencil-web-components';

export type SearchcraftBaseSearchResultProps =
  Components.SearchcraftBaseSearchResult;

export default defineComponent({
  name: 'SearchcraftBaseSearchResult',
  props: {
    titleContent: {
      type: String as PropType<string>,
      required: false,
    },
    subtitleContent: {
      type: String as PropType<string>,
      required: false,
    },
    bodyContent: {
      type: String as PropType<string>,
      required: false,
    },
    footerContent: {
      type: String as PropType<string>,
      required: false,
    },
    buttonLabel: {
      type: String as PropType<string>,
      required: false,
    },
    buttonHref: {
      type: String as PropType<string>,
      required: false,
    },
    buttonTarget: {
      type: String as PropType<string>,
      required: false,
    },
    buttonRel: {
      type: String as PropType<string>,
      required: false,
    },
    containerHref: {
      type: String as PropType<string>,
      required: false,
    },
    containerTarget: {
      type: String as PropType<string>,
      required: false,
    },
    containerRel: {
      type: String as PropType<string>,
      required: false,
    },
    imageSrc: {
      type: String as PropType<string>,
      required: false,
    },
    imageAlt: {
      type: String as PropType<string>,
      required: false,
    },
    imagePlacement: {
      type: String as PropType<string>,
      required: false,
    },
    customStyles: {
      type: Object as PropType<Record<string, string>>,
      required: false,
    },
    documentPosition: {
      type: Number as PropType<number>,
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