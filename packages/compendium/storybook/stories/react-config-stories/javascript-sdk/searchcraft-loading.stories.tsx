import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { type Components, Searchcraft } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-loading',
  argTypes: {
    label: {
      control: 'text',
      description: 'Optional label text to display below the loading animation.',
    },
  },
};

const defaultProps: Components.SearchcraftLoading = {
  label: 'Loading...',
};

export const Default: StoryObj<Components.SearchcraftLoading> = {
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
  render: (args) => <searchcraft-loading {...args} />,
  args: defaultProps,
};

export const WithoutLabel: StoryObj<Components.SearchcraftLoading> = {
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
  render: () => <searchcraft-loading />,
  args: {},
};

export const CustomLabel: StoryObj<Components.SearchcraftLoading> = {
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
  render: (args) => <searchcraft-loading {...args} />,
  args: {
    label: 'Searching for results...',
  },
};

export default componentMeta;

