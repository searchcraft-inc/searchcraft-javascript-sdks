import {
  Searchcraft,
  SearchcraftInputForm,
  SearchcraftTheme,
} from '@searchcraft/vue-sdk';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-input-form',
  component: SearchcraftInputForm,
  argTypes: {
    autoSearch: {
      control: 'boolean',
      description:
        'Automatically submit the search term when the input changes',
    },
    buttonPlacement: {
      control: { type: 'inline-radio' },
      options: ['left', 'right', 'none'],
      description: 'Position of the search button',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the submit button',
    },
    inputLabel: {
      control: 'text',
      description: 'Label rendered above the input',
    },
    placeholderValue: {
      control: 'text',
      description: 'Placeholder text shown in the input field',
    },
    debounceDelay: {
      control: 'number',
      description:
        'Duration to debounce the input change event, in milliseconds',
    },
  },
} as Meta;

const defaultProps = {
  autoSearch: true,
  buttonPlacement: 'none',
  buttonLabel: undefined,
  inputLabel: 'Search here',
  placeholderValue: 'Enter Search',
  debounceDelay: 0,
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftInputForm, SearchcraftTheme },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
      endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
      index: [import.meta.env.VITE_RUNEGARD_INDEX],
    });
    return { args };
  },
  template: `
    <div>
      <SearchcraftTheme />
      <SearchcraftInputForm v-bind="args" />
    </div>
  `,
});
Default.args = defaultProps;
