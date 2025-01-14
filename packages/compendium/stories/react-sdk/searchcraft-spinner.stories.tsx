import type { StoryObj } from '@storybook/react';

import {
  SearchcraftSpinnerDark,
  SearchcraftSpinnerLight,
} from '@searchcraft/react-sdk';

export default {
  title: 'React SDK/searchcraft-spinner',
};

export const Light: StoryObj = {
  render: () => <SearchcraftSpinnerDark />,
};

export const Dark: StoryObj = {
  render: () => <SearchcraftSpinnerLight />,
};
