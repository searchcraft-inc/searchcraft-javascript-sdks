import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-results-info',
};

export const Default: StoryObj<Components.SearchcraftResultsInfo> = {
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
    <>
      <div style={{ marginBottom: 20 }}>
        <searchcraft-input-form />
      </div>
      <searchcraft-results-info />
    </>
  ),
};

export default componentMeta;
