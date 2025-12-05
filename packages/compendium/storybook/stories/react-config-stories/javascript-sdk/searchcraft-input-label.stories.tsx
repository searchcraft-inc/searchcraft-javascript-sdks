import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { type Components, Searchcraft } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input-label',
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content for the input label.',
    },
  },
};

const defaultProps: Components.SearchcraftInputLabel = {
  inputLabelClassName: '',
  label: 'Search Label',
};

export const Default: StoryObj<Components.SearchcraftInputLabel> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-input-label {...args} />,
  args: defaultProps,
};

export default componentMeta;
