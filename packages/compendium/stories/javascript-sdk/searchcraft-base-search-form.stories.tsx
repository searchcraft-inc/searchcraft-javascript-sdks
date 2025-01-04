import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from './_WebComponentWrapper';
import type { SearchcraftConfig } from '@searchcraft/javascript-sdk';

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
    labelForInput: {
      control: 'text',
      description: 'Label for the input field.',
    },
    rightToLeftOrientation: {
      control: 'boolean',
      description:
        'If true, sets the form layout to right-to-left orientation.',
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
  labelForInput?: string;
  rightToLeftOrientation?: boolean;
};

const defaultProps: ComponentProps = {
  config: {
    readKey: '',
    endpointURL: '',
    index: [],
  },
  errorMessage: 'Search was unsuccessful',
  labelForInput: 'Search',
  rightToLeftOrientation: false,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
