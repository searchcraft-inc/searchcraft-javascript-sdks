import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftBaseSearchResult as Component } from '../stencil-web-components';

export type SearchcraftBaseSearchResultProps = Partial<Components.SearchcraftBaseSearchResult>;

export default defineComponent({
  name: 'SearchcraftBaseSearchResult',
  props: {
    titleContent: String,
    subtitleContent: String,
    bodyContent: String,
    footerContent: String,
    buttonLabel: String,
    buttonHref: String,
    buttonTarget: String,
    buttonRel: String,
    containerHref: String,
    containerTarget: String,
    containerRel: String,
    imageSrc: String,
    imageAlt: String,
    imagePlacement: String,
    customStyles: Object as () => Record<string, string>,
    documentPosition: Number,
  },
  setup(props: SearchcraftBaseSearchResultProps) {
    return () => <Component {...(props as Components.SearchcraftBaseSearchResult)} />;
  },
});