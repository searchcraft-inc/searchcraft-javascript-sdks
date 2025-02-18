import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '@utils/WebComponentWrapper';
import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { config } from '@utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentName = 'searchcraft-facet-list';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-facet-list',
  argTypes: {
    filters: {
      control: 'object',
      description: 'Array of facets with label and value.',
    },
    filtersUpdated: {
      action: 'filtersUpdated',
      description: 'Emitted when the selected filters are updated.',
    },
  },
};

const defaultProps: Components.SearchcraftFacetList = {
  fieldName: 'section',
};

export const Default: StoryObj<Components.SearchcraftFacetList> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft(config);
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
  args: defaultProps,
};

export default componentMeta;
