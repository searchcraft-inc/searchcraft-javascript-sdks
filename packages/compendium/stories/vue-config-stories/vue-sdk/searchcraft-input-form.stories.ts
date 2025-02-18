import { SearchcraftInputForm, SearchcraftTheme } from '@searchcraft/vue-sdk';

import type { Meta, StoryFn } from '@storybook/vue3';
import { config } from '@utils/DefaultSearchcraftConfig';

export default {
  title: 'Vue SDK/searchcraft-input-form',
  component: SearchcraftInputForm,
  argTypes: {
    config: {
      control: 'object',
      description: 'Searchcraft configuration object',
    },
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
    customStyles: {
      control: 'object',
      description: 'Custom styles applied to the input element',
    },
    placeholderValue: {
      control: 'text',
      description: 'Placeholder text shown in the input field',
    },
    searchTerm: {
      control: 'text',
      description: 'Initial value of the input field',
    },
    debounceDelay: {
      control: 'number',
      description:
        'Duration to debounce the input change event, in milliseconds',
    },
  },
} as Meta;

const defaultProps = {
  config: config,
  autoSearch: true,
  buttonPlacement: 'none',
  buttonLabel: undefined,
  inputLabel: 'Search here',
  customStyles: {},
  placeholderValue: 'Enter Search',
  searchTerm: '',
  debounceDelay: 0,
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftInputForm, SearchcraftTheme },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex;">
      <SearchcraftTheme />
      <SearchcraftInputForm v-bind="args" />
    </div>
  `,
});
Default.args = defaultProps;
