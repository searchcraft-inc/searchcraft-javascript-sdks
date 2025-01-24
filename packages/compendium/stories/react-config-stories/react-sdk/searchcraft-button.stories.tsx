import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftButton,
  type SearchcraftButtonProps,
} from '@searchcraft/react-sdk';

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

const defaultProps: SearchcraftButtonProps = {
  iconOnly: false,
  iconPosition: 'left',
  label: 'View Results',
};

export const Default: StoryObj<SearchcraftButtonProps> = {
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
