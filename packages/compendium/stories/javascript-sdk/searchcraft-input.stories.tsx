import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

const componentName = 'searchcraft-input';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input',
  argTypes: {
    customStyles: { control: 'object' },
    error: { control: 'boolean' },
    inputCaptionClassName: { control: 'text' },
    inputCaptionValue: { control: 'text' },
    inputClassName: { control: 'text' },
    iconSize: { control: 'number' },
    isRequesting: { control: 'boolean' },
    placeholderValue: { control: 'text' },
    query: { control: 'text' },
  },
};

type ComponentProps = {
  customStyles?: string | Record<string, string>;
  error?: boolean;
  inputCaptionClassName?: string;
  inputCaptionValue?: string;
  inputClassName?: string;
  iconSize?: number;
  isRequesting?: boolean;
  placeholderValue?: string;
  query?: string;
};

const defaultProps: ComponentProps = {
  customStyles: undefined,
  error: false,
  inputCaptionClassName: '',
  inputCaptionValue: '',
  inputClassName: '',
  iconSize: 20,
  isRequesting: false,
  placeholderValue: 'Enter Search',
  query: '',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
