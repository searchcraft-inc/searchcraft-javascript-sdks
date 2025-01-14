import type { Meta, StoryObj } from '@storybook/react';
import { SearchcraftInput } from '@searchcraft/react-sdk';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-input',
  argTypes: {
    customStyles: { control: 'object' },
    error: { control: 'boolean' },
    flex: { control: 'boolean' },
    placeholderValue: { control: 'text' },
    query: { control: 'text' },
  },
};

type ComponentProps = {
  customStyles: string | Record<string, string>;
  error: boolean;
  flex: boolean;
  placeholderValue: string;
  query: string;
};

const defaultProps: ComponentProps = {
  customStyles: '',
  error: false,
  flex: false,
  placeholderValue: 'Enter Search',
  query: '',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <div style={{ display: 'flex' }}>
      <SearchcraftInput
        customStyles={args.customStyles}
        error={args.error}
        flex={args.flex}
        placeholderValue={args.placeholderValue}
        query={args.query}
      />
    </div>
  ),
  args: defaultProps,
};

export default componentMeta;
