import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from './_WebComponentWrapper';

const componentName = 'searchcraft-toggle-button';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-toggle-button',
  argTypes: {
    type: {
      control: 'select',
      options: ['mode', 'sort'],
      description:
        "Type of the toggle. 'mode' toggles between 'fuzzy' and 'normal', while 'sort' toggles between 'asc' and 'desc'.",
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the toggle is active.',
    },
    query: {
      control: 'text',
      description: 'The current search query.',
    },
    resultsCount: {
      control: 'number',
      description: 'The number of search results.',
    },
  },
};

type ComponentProps = {
  type?: 'mode' | 'sort';
  isActive?: boolean;
  query?: string;
  resultsCount?: number;
};

const defaultProps: ComponentProps = {
  type: 'mode',
  isActive: false,
  query: 'example query',
  resultsCount: 123,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
