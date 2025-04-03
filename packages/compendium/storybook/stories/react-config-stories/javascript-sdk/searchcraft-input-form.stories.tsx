import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input-form',
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

export default componentMeta;

const defaultProps: Components.SearchcraftInputForm = {
  autoSearch: false,
  buttonPlacement: 'left',
  buttonLabel: 'Search',
  inputLabel: 'Search here',
  placeholderValue: 'Enter Search',
};

const buttonRightProps: Components.SearchcraftInputForm = {
  autoSearch: false,
  buttonPlacement: 'right',
  buttonLabel: 'Search',
  inputLabel: 'Search here',
  placeholderValue: 'Enter Search',
};

const autoSearchProps: Components.SearchcraftInputForm = {
  autoSearch: true,
  buttonPlacement: 'none',
  buttonLabel: 'Search',
  inputLabel: 'Start typing to auto search',
  placeholderValue: 'Enter Search',
};

export const Default: StoryObj<Components.SearchcraftInputForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-input-form {...args} />,
  args: defaultProps,
};

export const ButtonRight: StoryObj<Components.SearchcraftInputForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-input-form {...args} />,
  args: buttonRightProps,
};

export const AutoSearch: StoryObj<Components.SearchcraftInputForm> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-input-form {...args} />,
  args: autoSearchProps,
};
