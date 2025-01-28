import type { Components } from '@searchcraft/javascript-sdk';
import { defineComponent } from 'vue';
import { SearchcraftInputForm as Component } from '../stencil-web-components';

export type SearchcraftInputFormProps = Partial<Components.SearchcraftInputForm>;

export default defineComponent({
  name: 'SearchcraftInputForm',
  props: {
    config: {
      type: Object as () => Record<string, unknown>,
      required: false,
    },
    autoSearch: {
      type: Boolean,
      default: false,
    },
    buttonPlacement: {
      type: String as () => 'left' | 'right',
      default: 'right',
    },
    buttonLabel: {
      type: String,
      default: 'Search',
    },
    inputLabel: {
      type: String,
      default: '',
    },
    customStyles: {
      type: Object as () => Record<string, string>,
      default: () => ({}),
    },
    placeholderValue: {
      type: String,
      default: 'Enter a search term...',
    },
    searchTerm: {
      type: String,
      default: '',
    },
    debounceDelay: {
      type: Number,
      default: 300,
    },
  },
  emits: [
    'inputCleared',
    'noResultsReceived',
    'querySubmit',
    'inputFocus',
    'inputBlur',
  ],
  setup(props: SearchcraftInputFormProps, { emit }) {
    const emitEvent = (
      eventName: 'inputCleared' | 'noResultsReceived' | 'querySubmit' | 'inputFocus' | 'inputBlur'
    ) => (event: CustomEvent) => {
      emit(eventName, event);
    };

    return () => (
      <Component
        {...(props as Components.SearchcraftInputForm)}
        onInputCleared={emitEvent('inputCleared')}
        onNoResultsReceived={emitEvent('noResultsReceived')}
        onQuerySubmit={emitEvent('querySubmit')}
        onInputFocus={emitEvent('inputFocus')}
        onInputBlur={emitEvent('inputBlur')}
      />
    );
  }
});