import type { StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

export default {
  title: 'Javascript SDK/searchcraft-spinner',
  component: 'searchcraft-slider',
};

export const Light: StoryObj = {
  render: () => (
    <WebComponentWrapper componentName='searchcraft-spinner-light' />
  ),
};

export const Dark: StoryObj = {
  render: () => (
    <WebComponentWrapper componentName='searchcraft-spinner-dark' />
  ),
};
