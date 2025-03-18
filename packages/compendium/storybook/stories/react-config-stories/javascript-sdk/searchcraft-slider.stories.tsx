import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '@utils/WebComponentWrapper';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { useEffect } from 'react';

const componentName = 'searchcraft-slider';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-slider',
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    granularity: {
      control: 'number',
    },
  },
};

const defaultProps: Components.SearchcraftSlider = {
  min: 0,
  max: 100,
  granularity: 4,
  dataType: 'number',
};

export const Default: StoryObj<Components.SearchcraftSlider> = {
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
      <WebComponentWrapper args={args} componentName={componentName} />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
