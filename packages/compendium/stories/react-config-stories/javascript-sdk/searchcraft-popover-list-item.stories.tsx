import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '@utils/WebComponentWrapper';
import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { useEffect } from 'react';

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
  documentPosition: 1,
  item: undefined,
  popoverResultMappings: undefined,
};

export const Default: StoryObj<Components.SearchcraftBaseSearchResult> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_KOBOL_READ_KEY,
          endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
          index: [import.meta.env.VITE_KOBOL_INDEX],
        });
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
