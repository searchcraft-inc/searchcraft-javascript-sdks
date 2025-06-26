import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
} from '@searchcraft/react-sdk';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-input-form',
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
};

const defaultProps: SearchcraftInputFormProps = {
  autoSearch: false,
  buttonPlacement: 'left',
  buttonLabel: undefined,
  inputLabel: 'Search here',
  placeholderValue: 'Enter Search',
};

export const Default: StoryObj<SearchcraftInputFormProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <SearchcraftInputForm {...args} />,
  args: defaultProps,
};

export default componentMeta;
