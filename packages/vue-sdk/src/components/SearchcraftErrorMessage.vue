<script lang="ts">
import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftErrorMessage as Component } from '../stencil-web-components';

export type SearchcraftErrorMessageProps = Components.SearchcraftErrorMessage;

export default defineComponent({
  name: 'SearchcraftErrorMessage',
  props: {
    errorMessage: String,
  },
  components: {
    Component,
  },
});
</script>

<template>
  <Component v-bind="$props" />
</template>