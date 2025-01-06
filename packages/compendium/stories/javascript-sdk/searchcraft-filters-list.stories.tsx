import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

const componentName = 'searchcraft-filters-list';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-filters-list',
  argTypes: {
    filters: {
      control: 'object',
      description: 'Array of filters with label and value.',
    },
    filtersUpdated: {
      action: 'filtersUpdated',
      description: 'Emitted when the selected filters are updated.',
    },
  },
};

type ComponentProps = {
  filters?: Array<{ label: string; value: string }>;
};

const defaultProps: ComponentProps = {
  filters: [
    { label: 'Category 1', value: 'category-1' },
    { label: 'Category 2', value: 'category-2' },
    { label: 'Category 3', value: 'category-3' },
  ],
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
