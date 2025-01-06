import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

const componentName = 'searchcraft-base-search-result';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-result',
  argTypes: {
    buttonText: {
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
    isInteractive: {
      control: 'boolean',
      description: 'Whether the search result is interactive.',
    },
    linkHref: {
      control: 'text',
      description: 'URL for the search result link.',
    },
    primaryContent: {
      control: 'text',
      description: 'Primary content displayed in the search result.',
    },
    secondaryContent: {
      control: 'text',
      description: 'Secondary content displayed in the search result.',
    },
    subtitleContent: {
      control: 'text',
      description: 'Subtitle content displayed in the search result.',
    },
    tertiaryContent: {
      control: 'text',
      description: 'Tertiary content displayed in the search result.',
    },
    themeMode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme mode for the search result.',
    },
    placeImageRight: {
      control: 'boolean',
      description: 'Whether the image is placed to the right.',
    },
    documentPosition: {
      control: 'number',
      description: 'Position of the document in the search results.',
    },
  },
};

type ComponentProps = {
  buttonText?: string;
  customStyles?: string | Record<string, string>;
  titleContent?: string;
  imageDescription?: string;
  imageSource?: string;
  isInteractive?: boolean;
  linkHref?: string;
  primaryContent?: string;
  secondaryContent?: string;
  subtitleContent?: string;
  tertiaryContent?: string;
  themeMode?: 'light' | 'dark';
  placeImageRight?: boolean;
  documentPosition?: number;
};

const defaultProps: ComponentProps = {
  buttonText: 'Learn More',
  customStyles: '{}',
  titleContent: 'Example Title',
  imageDescription: 'An example image',
  imageSource: 'https://via.placeholder.com/150',
  isInteractive: true,
  linkHref: 'https://example.com',
  primaryContent: 'This is the primary content.',
  secondaryContent: 'This is the secondary content.',
  subtitleContent: 'Example Subtitle',
  tertiaryContent: 'Additional tertiary content.',
  themeMode: 'light',
  placeImageRight: false,
  documentPosition: 1,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
