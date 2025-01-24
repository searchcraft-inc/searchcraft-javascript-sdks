import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftToggleButton,
  type SearchcraftToggleButtonProps,
} from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-toggle-button',
  argTypes: {
    subLabel: {
      control: 'text',
      description: 'Sub-label for the toggle button.',
    },
    label: {
      control: 'text',
      description: 'Label for the toggle button.',
    },
  },
};

const defaultProps: SearchcraftToggleButtonProps = {
  subLabel: '',
  label: 'Toggle Label',
};

export const Default: StoryObj<SearchcraftToggleButtonProps> = {
  render: (args) => (
    <SearchcraftToggleButton label={args.label} subLabel={args.subLabel} />
  ),
  args: defaultProps,
};

export default componentMeta;
