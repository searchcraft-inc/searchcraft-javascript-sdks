import type { Meta, StoryObj } from '@storybook/react';
import { SearchcraftAutoSearchForm } from '@searchcraft/react-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-auto-search-form',
  argTypes: {
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
  clearInput: () => void;
  config?: string;
  customStylesForInput?: string | Record<string, string>;
  inputCaptionValue?: string;
  labelForInput?: string;
  placeholderValue?: string;
};

const defaultProps: ComponentProps = {
  clearInput: () => {},
  config: JSON.stringify(config),
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <SearchcraftAutoSearchForm
      clearInput={args.clearInput}
      config={config}
      customStylesForInput={args.customStylesForInput || ''}
      inputCaptionValue={args.inputCaptionValue || ''}
      labelForInput={args.labelForInput || ''}
      placeholderValue={args.placeholderValue || ''}
    />
  ),
  args: defaultProps,
};

export default componentMeta;
