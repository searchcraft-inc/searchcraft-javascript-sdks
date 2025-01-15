import type { Meta, StoryObj } from '@storybook/react';
import { SearchcraftButton } from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-button',
  argTypes: {
    iconOnly: {
      control: 'boolean',
      description: 'Only show Icon element within the button.',
    },
    iconPosition: {
      control: 'text',
      description: 'Icon position within the button.',
    },
    label: {
      control: 'text',
      description: 'Label for the button.',
    },
  },
};

type ComponentProps = {
  iconOnly: boolean;
  iconPosition: 'left' | 'right';
  label: string;
};

const defaultProps: ComponentProps = {
  iconOnly: false,
  iconPosition: 'left',
  label: 'View Results',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <SearchcraftButton
      iconOnly={args.iconOnly}
      iconPosition={args.iconPosition}
      label={args.label}
    />
  ),
  args: defaultProps,
};

export default componentMeta;
