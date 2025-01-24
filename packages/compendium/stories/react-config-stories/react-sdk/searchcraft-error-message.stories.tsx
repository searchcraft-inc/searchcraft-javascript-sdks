import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftErrorMessage,
  type SearchcraftErrorMessageProps,
} from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-error-message',
  argTypes: {
    errorMessage: {
      control: 'text',
      description: 'The error message text to display.',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The theme of the error message (light or dark).',
    },
  },
};

const defaultProps: SearchcraftErrorMessageProps = {
  errorMessage: 'An error occurred while processing your request.',
};

export const Default: StoryObj<SearchcraftErrorMessageProps> = {
  render: (args) => (
    <SearchcraftErrorMessage errorMessage={args.errorMessage} />
  ),
  args: defaultProps,
};

export default componentMeta;
