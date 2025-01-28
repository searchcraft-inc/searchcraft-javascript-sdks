import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftBaseSearchResults as Component } from '../stencil-web-components';

export type SearchcraftBaseSearchResultsProps = Partial<Components.SearchcraftBaseSearchResults>;

export default defineComponent({
  name: 'SearchcraftBaseSearchResults',
  props: {
    adInterval: Number,
    customStylesForResults: Object as () => Record<string, string>,
    searchResultMappings: Object as () => Record<string, string>,
    placeAdAtEnd: Boolean,
    placeAdAtStart: Boolean,
    resultImagePlacement: String,
    buttonLabel: String,
    buttonTarget: String,
    buttonRel: String,
    containerTarget: String,
    containerRel: String,
    noResults: String,
  },
  setup(props: SearchcraftBaseSearchResultsProps) {
    return () => <Component {...(props as Components.SearchcraftBaseSearchResults)} />;
  },
});