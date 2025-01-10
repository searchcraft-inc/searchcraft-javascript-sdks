import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

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

type ComponentProps = {
  label: string;
  subLabel?: string;
};

const defaultProps: ComponentProps = {
  label: 'My Toggle Label',
  subLabel: 'This is a sublabel that goes underneath the label.',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <div style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 20 }}>
      <WebComponentWrapper args={args} componentName={componentName} />
    </div>
  ),
  args: defaultProps,
};

export default componentMeta;
