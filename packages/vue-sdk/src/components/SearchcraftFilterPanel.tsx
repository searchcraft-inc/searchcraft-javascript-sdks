import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftFilterPanel as Component } from '../stencil-web-components';

export type SearchcraftFilterPanelProps = Partial<Components.SearchcraftFilterPanel>;

export default defineComponent({
  name: 'SearchcraftFilterPanel',
  props: {
    items: {
      type: Array as () => Components.SearchcraftFilterPanel['items'],
      required: true,
    },
  },
  setup(props: SearchcraftFilterPanelProps) {
    return () => <Component {...(props as Components.SearchcraftFilterPanel)} />;
  },
});