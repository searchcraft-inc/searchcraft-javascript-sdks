import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';
import type { Components } from '@searchcraft/javascript-sdk';

const componentName = 'searchcraft-popover-list-item';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-list-item',
  argTypes: {
    titleContent: {
      control: 'text',
      description: 'The title content of the popover item.',
    },
    subtitleContent: {
      control: 'text',
      description: 'The subtitle content of the popover item.',
    },
    imageAlt: {
      control: 'text',
      description: 'The alt text of the popover item item.',
    },
    imageSrc: {
      control: 'text',
      description: 'The source of the popover image',
    },
    documentPosition: {
      control: 'number',
      description: 'The document position',
    },
  },
};

const defaultProps: Components.SearchcraftPopoverListItem = {
  titleContent: 'Example Title',
  subtitleContent: 'Example Subtitle',
  imageAlt: 'An example image',
  imageSrc: 'https://via.placeholder.com/150',
  href: 'https://example.com',
  documentPosition: 1,
};

export const Default: StoryObj<Components.SearchcraftBaseSearchResult> = {
  decorators: [
    (Story) => {
      return (
        <>
          <searchcraft-theme />
          <Story />
        </>
      );
    },
  ],
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
