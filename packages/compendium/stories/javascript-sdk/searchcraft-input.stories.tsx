import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from './_WebComponentWrapper';

const componentName = 'searchcraft-input';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-input/searchcraft-input',
  argTypes: {
    customStyles: { control: 'object' },
    error: { control: 'boolean' },
    formClassName: { control: 'text' },
    inputCaptionClassName: { control: 'text' },
    inputCaptionValue: { control: 'text' },
    inputClassName: { control: 'text' },
    inputIconHeight: { control: 'number' },
    inputIconWidth: { control: 'number' },
    isRequesting: { control: 'boolean' },
    placeholderValue: { control: 'text' },
    rightToLeftOrientation: { control: 'boolean' },
    query: { control: 'text' },
  },
};

type ComponentProps = {
  customStyles?: string | Record<string, string>;
  error?: boolean;
  formClassName?: string;
  inputCaptionClassName?: string;
  inputCaptionValue?: string;
  inputClassName?: string;
  inputIconHeight?: number;
  inputIconWidth?: number;
  isRequesting?: boolean;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
  query?: string;
};

const defaultProps: ComponentProps = {
  customStyles: { border: '1px solid #ccc', padding: '10px' },
  error: false,
  formClassName: '',
  inputCaptionClassName: '',
  inputCaptionValue: '',
  inputClassName: '',
  inputIconHeight: 20,
  inputIconWidth: 20,
  isRequesting: false,
  placeholderValue: 'Enter Search',
  rightToLeftOrientation: false,
  query: '',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
