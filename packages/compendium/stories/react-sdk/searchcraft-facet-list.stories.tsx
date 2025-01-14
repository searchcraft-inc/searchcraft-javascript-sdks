import type { Meta, StoryObj } from '@storybook/react';

import { SearchcraftFacetList } from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-facet-list',
  argTypes: {
    fieldName: {
      control: 'text',
      description: 'Field name of facet group to target',
    },
  },
};

type ComponentProps = {
  fieldName: string;
};

const defaultProps: ComponentProps = {
  fieldName: 'section',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => <SearchcraftFacetList fieldName={args.fieldName} />,
  args: defaultProps,
};

export default componentMeta;
