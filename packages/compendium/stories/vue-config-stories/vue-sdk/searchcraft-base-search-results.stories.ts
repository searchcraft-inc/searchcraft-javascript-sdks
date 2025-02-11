import type { SearchResultMappings } from '@searchcraft/javascript-sdk';
import {
  Searchcraft,
  SearchcraftBaseSearchResults,
  SearchcraftInputForm,
  SearchcraftTheme,
} from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';
import { config } from '../../../utils/DefaultSearchcraftConfig';

export default {
  title: 'Vue SDK/searchcraft-base-search-results',
  components: { SearchcraftBaseSearchResults, SearchcraftInputForm },
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
    customStylesForResults: {
      control: 'object',
      description: 'Custom styles for the search results component.',
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
    searchResultMappings: {
      control: 'object',
      description: 'Mapping for search result fields.',
    },
    clearInput: {
      control: false,
      description: 'Callback function for clearing the input.',
    },
    config: {
      control: 'object',
      description: 'Configuration object for the search form and results.',
    },
    customStylesForInput: {
      control: 'object',
      description: 'Custom styles for the input form.',
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
  searchResultMappings: {
    containerHref: {
      fieldNames: [
        {
          fieldName: 'canonical_link',
          dataType: 'text',
        },
      ],
    },
    footer: {
      fieldNames: [
        {
          fieldName: 'date_published',
          dataType: 'date',
        },
        {
          fieldName: 'author_name',
          dataType: 'text',
        },
      ],
      delimiter: ' • ',
    },
    imageSource: {
      fieldNames: [
        {
          fieldName: 'medium_image',
          dataType: 'text',
        },
      ],
    },
    body: {
      fieldNames: [{ fieldName: 'sub_headline', dataType: 'text' }],
    },
    title: {
      fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
    },
  } as SearchResultMappings,
  clearInput: () => {},
  config: config,
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryFn = (args) => ({
  components: {
    SearchcraftBaseSearchResults,
    SearchcraftInputForm,
    SearchcraftTheme,
  },
  setup() {
    new Searchcraft(config);
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
          customStylesForInput: args.customStylesForInput,
        }"
      />
      <SearchcraftBaseSearchResults v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
