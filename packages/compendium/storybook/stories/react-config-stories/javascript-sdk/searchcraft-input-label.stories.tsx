import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '@utils/WebComponentWrapper';
import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { useEffect } from 'react';

const componentName = 'searchcraft-input-label';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input-label',
  argTypes: {
    inputLabelClassName: {
      control: 'text',
      description: 'Custom class name for the label.',
    },
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
      <WebComponentWrapper args={args} componentName={componentName} />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
