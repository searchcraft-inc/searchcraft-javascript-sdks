import type { Meta, StoryFn } from '@storybook/vue3';

import {
  Searchcraft,
  SearchcraftSearchResults,
  SearchcraftInputForm,
  SearchcraftTheme,
} from '@searchcraft/vue-sdk';

import { searchResultTemplate } from '@common/index.js';

export default {
  title: 'Vue SDK/searchcraft-search-results',
  components: { SearchcraftSearchResults, SearchcraftInputForm },
  argTypes: {
    adInterval: {
      control: 'number',
      description: 'Number of results between ads.',
    },
    autoSearch: {
      control: 'boolean',
      description: 'Automatically submit the search term when input changes.',
    },
    buttonPlacement: {
      control: { type: 'inline-radio' },
      options: ['left', 'right', 'none'],
      description: 'Placement of the button within the form.',
    },
    buttonRel: {
      control: 'text',
      description: 'The rel attribute for the button link.',
    },
    buttonTarget: {
      control: 'text',
      description: 'The target attribute for the button link.',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the button in search results.',
    },
    containerRel: {
      control: 'text',
      description: 'The rel attribute for the result container link.',
    },
    containerTarget: {
      control: 'text',
      description: 'The target attribute for the result container link.',
    },
    placeAdAtEnd: {
      control: 'boolean',
      description: 'Place an ad at the end of the results.',
    },
    placeAdAtStart: {
      control: 'boolean',
      description: 'Place an ad at the start of the results.',
    },
    resultImagePlacement: {
      control: { type: 'inline-radio' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Placement of the image in search results.',
    },
    inputCaptionValue: {
      control: 'text',
      description: 'Caption displayed below the input field.',
    },
    labelForInput: {
      control: 'text',
      description: 'Label displayed above the input field.',
    },
    placeholderValue: {
      control: 'text',
      description: 'Placeholder text displayed in the input field.',
    },
  },
} as Meta;

const defaultProps = {
  adInterval: 4,
  autoSearch: true,
  buttonPlacement: 'none',
  buttonRel: 'noreferrer',
  buttonTarget: '_blank',
  buttonLabel: 'View More',
  containerRel: 'noreferrer',
  containerTarget: '_blank',
  customStylesForResults: '',
  placeAdAtEnd: false,
  placeAdAtStart: false,
  resultImagePlacement: 'right',
  template: searchResultTemplate,
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryFn = (args) => ({
  components: {
    SearchcraftSearchResults,
    SearchcraftInputForm,
    SearchcraftTheme,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
      endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
      index: [import.meta.env.VITE_RUNEGARD_INDEX],
    });
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <SearchcraftTheme />
      <SearchcraftInputForm
        v-bind="{
          autoSearch: args.autoSearch,
          buttonPlacement: args.buttonPlacement,
          placeholderValue: args.placeholderValue,
          inputCaptionValue: args.inputCaptionValue,
          labelForInput: args.labelForInput,
        }"
      />
      <SearchcraftSearchResults v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
