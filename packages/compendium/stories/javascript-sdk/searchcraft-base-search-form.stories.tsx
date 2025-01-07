import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';
import type { SearchcraftConfig } from '@searchcraft/javascript-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';

const componentName = 'searchcraft-base-search-form';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-form',
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration object for the Searchcraft instance.',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed when the search fails.',
    },
    inputLabel: {
      control: 'text',
      description: 'Label rendered above the input field',
    },
    buttonLabel: {
      control: 'text',
      description: 'Button Label',
    },
    buttonPlacement: {
      control: 'select',
      options: ['left', 'right'],
      description: 'The placement of the search button',
    },
    clearInput: {
      action: 'clearInput',
      description: 'Callback function triggered when the input is cleared.',
    },
  },
};

type ComponentProps = {
  config?: SearchcraftConfig;
  errorMessage?: string;
  inputLabel?: string;
  buttonLabel?: string;
  buttonPlacement?: 'left' | 'right';
};

const defaultProps: ComponentProps = {
  config: config,
  errorMessage: 'Search was unsuccessful',
  inputLabel: 'Search',
  buttonLabel: 'Search',
  buttonPlacement: 'right',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
