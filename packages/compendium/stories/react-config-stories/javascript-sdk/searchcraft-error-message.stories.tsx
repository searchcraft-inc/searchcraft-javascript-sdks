import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';
import type { Components } from '@searchcraft/javascript-sdk';

const componentName = 'searchcraft-error-message';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-error-message',
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

const defaultProps: Components.SearchcraftErrorMessage = {
  errorMessage: 'An error occurred while processing your request.',
};

export const Default: StoryObj<Components.SearchcraftErrorMessage> = {
  decorators: [
    (Story) => {
      return (
        <>
          <searchcraft-theme />
          <Story />
        </>
      );
    },
  ],
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
