import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftTheme as Component } from '../stencil-web-components';

export type SearchcraftThemeProps = Partial<Components.SearchcraftTheme>;

export default defineComponent({
  name: 'SearchcraftTheme',
  props: {},
  setup(props: SearchcraftThemeProps) {
    return () => <Component {...(props as Components.SearchcraftTheme)} />;
  },
});
