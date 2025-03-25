import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  SearchcraftInputForm,
  SearchcraftResultsInfo,
  SearchcraftTheme,
  type SearchcraftResultsInfoProps,
} from '@searchcraft/react-sdk';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-results-info',
};

const defaultProps: SearchcraftResultsInfoProps = {};

export const Default: StoryObj = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <SearchcraftTheme />
      <div style={{ marginBottom: 20 }}>
        <SearchcraftInputForm />
      </div>
      <SearchcraftResultsInfo />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
