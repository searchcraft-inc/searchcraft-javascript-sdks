import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftFacetList as Component } from '../stencil-web-components';

// Use the type provided by the SDK for props
export type SearchcraftFacetListProps = Partial<Components.SearchcraftFacetList>;

export default defineComponent({
  name: 'SearchcraftFacetList',
  props: {
    fieldName: {
      type: String as () => Components.SearchcraftFacetList['fieldName'],
      required: true,
    },
  },
  emits: ['facetSelectionUpdated'],
  setup(props: SearchcraftFacetListProps, { emit }) {
    const handleFacetSelectionUpdated = (event: CustomEvent) => {
      emit('facetSelectionUpdated', event);
    };

    return () => (
      <Component
        {...(props as Components.SearchcraftFacetList)}
        onFacetSelectionUpdated={handleFacetSelectionUpdated}
      />
    );
  },
});