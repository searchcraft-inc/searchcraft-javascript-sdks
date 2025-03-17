import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '@utils/WebComponentWrapper';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { useEffect } from 'react';

const componentName = 'searchcraft-results-info';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-results-info',
  argTypes: {
    resultsCount: {
      control: 'number',
      description: 'The number of results returned by the search.',
    },
    responseTime: {
      control: 'text',
      description:
        'The time it took for the search to respond (in milliseconds).',
    },
    query: {
      control: 'text',
      description: 'The search query used to fetch results.',
    },
  },
};

export const Default: StoryObj<Components.SearchcraftResultsInfo> = {
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
};

export default componentMeta;
