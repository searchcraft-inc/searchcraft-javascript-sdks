import { SearchcraftFacetList } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-facet-list',
  component: SearchcraftFacetList,
  argTypes: {
    fieldName: {
      control: 'text',
      description: 'Field name of the facet group to target.',
    },
  },
} as Meta;

const defaultProps = {
  fieldName: 'section',
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftFacetList },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 1rem;">
      <SearchcraftFacetList v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
