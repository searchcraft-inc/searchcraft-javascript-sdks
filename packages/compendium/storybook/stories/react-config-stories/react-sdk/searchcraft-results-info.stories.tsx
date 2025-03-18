import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  SearchcraftResultsInfo,
  SearchcraftTheme,
  type SearchcraftResultsInfoProps,
} from '@searchcraft/react-sdk';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-results-info',
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

const defaultProps: SearchcraftResultsInfoProps = {};

export const Default: StoryObj = {
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
  render: () => (
    <>
      <SearchcraftTheme />
      <SearchcraftResultsInfo />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
