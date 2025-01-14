import type { Meta, StoryObj } from '@storybook/react';
import { SearchcraftErrorMessage } from '@searchcraft/react-sdk';

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

type ComponentProps = {
  errorMessage?: string;
  theme?: 'light' | 'dark';
};

const defaultProps: ComponentProps = {
  errorMessage: 'An error occurred while processing your request.',
  theme: 'light',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <SearchcraftErrorMessage errorMessage={args.errorMessage} />
  ),
  args: defaultProps,
};

export default componentMeta;
