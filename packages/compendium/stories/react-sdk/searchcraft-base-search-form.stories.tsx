import type { Meta, StoryObj } from '@storybook/react';
import { SearchcraftBaseSearchForm } from '@searchcraft/react-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-base-search-form',
  argTypes: {
    buttonLabel: {
      control: 'text',
      description: 'Button Label',
    },
    buttonPlacement: {
      control: 'select',
      options: ['left', 'right'],
      description: 'The placement of the search button',
    },
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
  },
};

type ComponentProps = {
  buttonLabel?: string;
  buttonPlacement?: 'left' | 'right';
  config?: string;
  errorMessage?: string;
  inputLabel?: string;
};

const defaultProps: ComponentProps = {
  buttonLabel: 'Search',
  buttonPlacement: 'right',
  config: JSON.stringify(config),
  errorMessage: 'Search was unsuccessful',
  inputLabel: 'Search',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <SearchcraftBaseSearchForm
      buttonLabel={args.buttonLabel}
      buttonPlacement={args.buttonPlacement}
      config={config}
      errorMessage={args.errorMessage}
      inputLabel={args.inputLabel}
    />
  ),
  args: defaultProps,
};

export default componentMeta;
