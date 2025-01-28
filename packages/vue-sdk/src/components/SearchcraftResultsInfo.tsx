import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftResultsInfo as Component } from '../stencil-web-components';

export type SearchcraftResultsInfoProps = Partial<Components.SearchcraftResultsInfo>;

export default defineComponent({
  name: 'SearchcraftResultsInfo',
  props: {},
  setup(props: SearchcraftResultsInfoProps) {
    return () => <Component {...(props as Components.SearchcraftResultsInfo)} />;
  },
});