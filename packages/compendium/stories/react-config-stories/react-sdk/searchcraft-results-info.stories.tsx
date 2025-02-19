import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  SearchcraftResultsInfo,
  SearchcraftTheme,
  type SearchcraftResultsInfoProps,
} from '@searchcraft/react-sdk';
import { config } from '@utils/DefaultSearchcraftConfig';
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

const defaultProps: SearchcraftResultsInfoProps = {
  resultsCount: 12345,
  responseTime: '200.35',
  query: 'example query',
};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft(config);
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
