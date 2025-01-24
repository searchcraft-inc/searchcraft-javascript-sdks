import { SearchcraftBaseSearchResult } from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-base-search-result',
  component: SearchcraftBaseSearchResult,
  argTypes: {
    titleContent: {
      control: 'text',
      description: 'The title of the search result.',
    },
    subtitleContent: {
      control: 'text',
      description: 'The subtitle of the search result.',
    },
    bodyContent: {
      control: 'text',
      description: 'The main body content of the search result.',
    },
    footerContent: {
      control: 'text',
      description: 'The footer content of the search result.',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the action button.',
    },
    buttonTarget: {
      control: 'text',
      description: 'Target attribute for the action button.',
    },
    buttonHref: {
      control: 'text',
      description: 'Href attribute for the action button.',
    },
    buttonRel: {
      control: 'text',
      description: 'Rel attribute for the action button.',
    },
    containerHref: {
      control: 'text',
      description: 'Href for the clickable container.',
    },
    containerTarget: {
      control: 'text',
      description: 'Target attribute for the clickable container.',
    },
    containerRel: {
      control: 'text',
      description: 'Rel attribute for the clickable container.',
    },
    customStyles: {
      control: 'object',
      description: 'Custom styles for the search result.',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the result image.',
    },
    imageSrc: {
      control: 'text',
      description: 'Source URL for the result image.',
    },
    imagePlacement: {
      control: { type: 'inline-radio' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Placement of the result image.',
    },
    documentPosition: {
      control: 'number',
      description: 'Position of the document in the results.',
    },
  },
} as Meta;

const defaultProps = {
  titleContent: 'Example Title',
  subtitleContent: 'Example Subtitle',
  bodyContent: 'This is the primary content.',
  footerContent: 'This is the secondary content.',
  buttonLabel: 'Learn More',
  buttonTarget: '_blank',
  buttonHref: 'https://example.com',
  buttonRel: undefined,
  containerHref: undefined,
  containerTarget: '_blank',
  containerRel: undefined,
  customStyles: undefined,
  imageAlt: 'An example image',
  imageSrc: 'https://placehold.co/600x400',
  imagePlacement: 'right',
  documentPosition: 1,
};

export const Default: StoryFn = (args) => ({
  components: { SearchcraftBaseSearchResult },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <SearchcraftBaseSearchResult v-bind="args" />
    </div>
  `,
});

Default.args = defaultProps;
