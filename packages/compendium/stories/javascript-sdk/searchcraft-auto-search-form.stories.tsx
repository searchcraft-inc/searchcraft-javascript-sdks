import type { Meta, StoryObj } from '@storybook/react';
import type { SearchcraftConfig } from '@searchcraft/javascript-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';

const componentName = 'searchcraft-auto-search-form';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-auto-search-form',
  argTypes: {
    autoSearchFormClass: {
      control: 'text',
      description: 'Custom class name for the form.',
    },
    clearInput: {
      action: 'clearInput',
      description: 'Callback function to clear the input field.',
    },
    config: {
      control: 'object',
      description: 'Configuration object for the Searchcraft instance.',
    },
    customStylesForInput: {
      control: 'object',
      description: 'Custom styles for the input component.',
    },
    inputCaptionValue: {
      control: 'text',
      description: 'Value for the input caption.',
    },
    inputIconHeight: {
      control: 'number',
      description: 'Height of the input icon.',
    },
    inputIconWidth: {
      control: 'number',
      description: 'Width of the input icon.',
    },
    labelForInput: {
      control: 'text',
      description: 'Label for the input field.',
    },
    placeholderValue: {
      control: 'text',
      description: 'Placeholder text for the input field.',
    },
    rightToLeftOrientation: {
      control: 'boolean',
      description:
        'If true, sets the form layout to right-to-left orientation.',
    },
    searchContainerClass: {
      control: 'text',
      description: 'Custom class name for the search container.',
    },
    inputClearedOrNoResults: {
      action: 'inputClearedOrNoResults',
      description: 'Emitted when the input is cleared or there are no results.',
    },
    querySubmit: {
      action: 'querySubmit',
      description: 'Emitted when a search query is submitted.',
    },
  },
};

type ComponentProps = {
  autoSearchFormClass?: string;
  clearInput?: () => void;
  config?: SearchcraftConfig;
  customStylesForInput?: string | Record<string, string>;
  inputCaptionValue?: string;
  labelForInput?: string;
  placeholderValue?: string;
  searchContainerClass?: string;
};

const defaultProps: ComponentProps = {
  autoSearchFormClass: '',
  config: config,
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
  searchContainerClass: '',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <searchcraft-auto-search-form
      config-string={JSON.stringify(config)}
      placeholder-value={args.placeholderValue}
      label-for-input={args.labelForInput}
    />
  ),
  args: defaultProps,
};

export default componentMeta;
