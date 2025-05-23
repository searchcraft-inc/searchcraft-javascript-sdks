import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-slider',
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
  },
};

const defaultProps: Components.SearchcraftSlider = {
  min: 0,
  max: 100,
  step: 4,
  dataType: 'number',
};

export const Default: StoryObj<Components.SearchcraftSlider> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => <searchcraft-slider {...args} />,
  args: defaultProps,
};

export default componentMeta;
