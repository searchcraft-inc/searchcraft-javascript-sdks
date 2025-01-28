import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftResultsInfo,
  SearchcraftTheme,
  type SearchcraftResultsInfoProps,
} from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-results-info',
  argTypes: {
    isRequesting: {
      control: 'boolean',
      description: 'Indicates if a search request is in progress.',
    },
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
  isRequesting: false,
  resultsCount: 12345,
  responseTime: '200.35',
  query: 'example query',
};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      return (
        <>
          <SearchcraftTheme />
          <Story />
        </>
      );
    },
  ],
  render: (args) => <SearchcraftResultsInfo />,
  args: defaultProps,
};

export default componentMeta;
