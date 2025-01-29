import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';

import type { Components } from '@searchcraft/javascript-sdk';

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

const defaultProps: Components.SearchcraftResultsInfo = {
  resultsCount: 12345,
  responseTime: '200.35',
  query: 'example query',
};

export const Default: StoryObj<Components.SearchcraftResultsInfo> = {
  render: (args) => (
    <>
      <searchcraft-theme />
      <WebComponentWrapper args={args} componentName={componentName} />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
