import { SearchcraftBaseSearchResult } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/SearchcraftBaseSearchResult',
  component: SearchcraftBaseSearchResult,
} as Meta;

const Template: StoryFn = (args) => ({
  components: { SearchcraftBaseSearchResult },
  setup() {
    return { args };
  },
  template: '<SearchcraftBaseSearchResult v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  titleContent: 'Example Title',
  subtitleContent: 'Example Subtitle',
  bodyContent: 'This is the primary content.',
  buttonLabel: 'Learn More',
  buttonTarget: '_blank',
  buttonHref: 'https://example.com',
  buttonRel: undefined,
  containerHref: undefined,
  containerTarget: '_blank',
  containerRel: undefined,
  customStyles: undefined,
  imageAlt: 'An example image',
  imageSrc: 'https://via.placeholder.com/150',
  footerContent: 'This is the secondary content.',
  imagePlacement: 'right',
  documentPosition: 1,
};
