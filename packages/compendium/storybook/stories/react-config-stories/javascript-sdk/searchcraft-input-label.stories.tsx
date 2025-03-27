import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

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
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => (
    <>
      <searchcraft-theme />
      <searchcraft-input-label {...args} />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
