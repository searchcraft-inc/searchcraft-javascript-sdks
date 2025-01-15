import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchcraftFacetList,
  type SearchcraftFacetListProps,
} from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-facet-list',
  argTypes: {
    fieldName: {
      control: 'text',
      description: 'Field name of facet group to target',
    },
  },
};

const defaultProps: SearchcraftFacetListProps = {
  fieldName: 'section',
};

export const Default: StoryObj<SearchcraftFacetListProps> = {
  render: (args) => <SearchcraftFacetList fieldName={args.fieldName} />,
  args: defaultProps,
};

export default componentMeta;
