import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';
import { config } from '../../utils/DefaultSearchcraftConfig';
import type { SearchcraftConfig } from '@searchcraft/javascript-sdk';

const componentName = 'searchcraft-input-form';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input-form',
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

export default componentMeta;

type ComponentProps = {
  config: SearchcraftConfig;
  autoSearch: boolean;
  buttonPlacement: 'left' | 'right' | 'none';
  buttonLabel: string | undefined;
  inputLabel: string | undefined;
  customStyles: string | Record<string, string>;
  placeholderValue: string;
  searchTerm: string;
  debounceDelay: number;
};

const defaultProps: ComponentProps = {
  config: config,
  autoSearch: false,
  buttonPlacement: 'left',
  buttonLabel: undefined,
  inputLabel: 'Search here',
  customStyles: {},
  placeholderValue: 'Enter Search',
  searchTerm: '',
  debounceDelay: 0,
};

const buttonRightProps: ComponentProps = {
  config: config,
  autoSearch: false,
  buttonPlacement: 'right',
  buttonLabel: 'Search',
  inputLabel: 'Search here',
  customStyles: {},
  placeholderValue: 'Enter Search',
  searchTerm: '',
  debounceDelay: 0,
};

const autoSearchProps: ComponentProps = {
  config: config,
  autoSearch: true,
  buttonPlacement: 'none',
  buttonLabel: undefined,
  inputLabel: 'Start typing to auto search',
  customStyles: {},
  placeholderValue: 'Enter Search',
  searchTerm: '',
  debounceDelay: 0,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export const ButtonRight: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: buttonRightProps,
};

export const AutoSearch: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: autoSearchProps,
};
