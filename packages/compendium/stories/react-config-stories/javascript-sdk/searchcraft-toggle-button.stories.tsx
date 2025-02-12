import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../../utils/WebComponentWrapper';

import { Searchcraft, type Components } from '@searchcraft/javascript-sdk';
import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentName = 'searchcraft-toggle-button';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-toggle-button',
  argTypes: {
    label: {
      control: 'text',
    },
    subLabel: {
      control: 'text',
    },
  },
};

const defaultProps: Components.SearchcraftToggleButton = {
  label: 'My Toggle Label',
  subLabel: 'This is a sublabel that goes underneath the label.',
};

export const Default: StoryObj<Components.SearchcraftToggleButton> = {
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
      <div style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 20 }}>
        <WebComponentWrapper args={args} componentName={componentName} />
      </div>
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
