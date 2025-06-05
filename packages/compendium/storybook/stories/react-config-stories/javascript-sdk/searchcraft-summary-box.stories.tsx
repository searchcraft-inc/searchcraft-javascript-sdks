import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-summary-box',
};

const defaultProps = {};

export const Default: StoryObj<Components.SearchcraftErrorMessage> = {
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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <searchcraft-input-form auto-search='true' button-placement='none' />
      <searchcraft-summary-box />
      <searchcraft-search-results />
    </div>
  ),
  args: defaultProps,
};

export const WithPromptInstructions: StoryObj<Components.SearchcraftErrorMessage> =
  {
    decorators: [
      (Story) => {
        useEffect(() => {
          new Searchcraft({
            readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
            endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
            index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
            summaryInstructionsPrompt: 'Speak like a Pirate.',
          });
        }, []);
        return <Story />;
      },
    ],
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <searchcraft-input-form auto-search='true' button-placement='none' />
        <searchcraft-summary-box />
        <searchcraft-search-results />
      </div>
    ),
    args: defaultProps,
  };

export default componentMeta;
