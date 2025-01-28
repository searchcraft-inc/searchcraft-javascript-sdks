import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftTheme as Component } from '../stencil-web-components';

<<<<<<<< HEAD:packages/vue-sdk/src/components/SearchcraftTheme.vue
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
========
export type SearchcraftErrorMessageProps = Partial<Components.SearchcraftErrorMessage>;

export default defineComponent({
  name: 'SearchcraftErrorMessage',
  props: {
    errorMessage: String,
  },
  setup(props: SearchcraftErrorMessageProps) {
    return () => <Component {...(props as Components.SearchcraftErrorMessage)} />;
  },
});
>>>>>>>> a1b9ad4 (Update vue components to be .tsx):packages/vue-sdk/src/components/SearchcraftErrorMessage.tsx
