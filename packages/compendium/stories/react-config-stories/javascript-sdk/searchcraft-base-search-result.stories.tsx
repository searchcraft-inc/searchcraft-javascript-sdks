import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';
import type { Components } from '@searchcraft/javascript-sdk';

const componentName = 'searchcraft-base-search-result';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-result',
  argTypes: {
    buttonLabel: {
      control: 'text',
      description: 'Text for the button inside the search result.',
    },
    customStyles: {
      control: 'object',
      description: 'Custom styles for the search result.',
    },
    titleContent: {
      control: 'text',
      description: 'The title content of the search result.',
    },
    imageDescription: {
      control: 'text',
      description: 'Alt text for the search result image.',
    },
    imageSource: {
      control: 'text',
      description: 'Source URL for the search result image.',
    },
    linkHref: {
      control: 'text',
      description: 'URL for the search result link.',
    },
    bodyContent: {
      control: 'text',
      description: 'Primary content displayed in the search result.',
    },
    footerContent: {
      control: 'text',
      description: 'Secondary content displayed in the search result.',
    },
    subtitleContent: {
      control: 'text',
      description: 'Subtitle content displayed in the search result.',
    },
    imagePlacement: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Whether the image is placed to the right.',
    },
    documentPosition: {
      control: 'number',
      description: 'Position of the document in the search results.',
    },
  },
};

const defaultProps: Components.SearchcraftBaseSearchResult = {
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

export const Default: StoryObj<Components.SearchcraftBaseSearchResult> = {
  render: (args) => (
    <>
      <searchcraft-theme />
      <WebComponentWrapper args={args} componentName={componentName} />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
