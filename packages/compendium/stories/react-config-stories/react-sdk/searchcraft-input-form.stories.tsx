import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
  SearchcraftTheme,
} from '@searchcraft/react-sdk';
import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-input-form',
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
};

const defaultProps: SearchcraftInputFormProps = {
  autoSearch: false,
  buttonPlacement: 'left',
  buttonLabel: undefined,
  inputLabel: 'Search here',
  customStyles: {},
  placeholderValue: 'Enter Search',
  searchTerm: '',
};

export const Default: StoryObj<SearchcraftInputFormProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft(config);
      }, []);
      return <Story />;
    },
  ],
  render: (args) => (
    <>
      <SearchcraftTheme />
      <div style={{ display: 'flex' }}>
        <SearchcraftInputForm {...args} />
      </div>
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
