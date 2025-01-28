import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftPopoverButton as Component } from '../stencil-web-components';

export type SearchcraftPopoverButtonProps = Partial<Components.SearchcraftPopoverButton>;

export default defineComponent({
  name: 'SearchcraftPopoverButton',
  props: {},
  setup(props: SearchcraftPopoverButtonProps) {
    return () => <Component {...(props as Components.SearchcraftPopoverButton)} />;
  },
});
