import type { Meta, StoryObj } from '@storybook/react';
import {
  Searchcraft,
  SearchcraftInputForm,
  SearchcraftResultsInfo,
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
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          indexName: import.meta.env.VITE_INDEX_ECHOSTREAM,
        });
      }, []);
      return <Story />;
    },
  ],
  render: () => (
    <>
      <div style={{ marginBottom: 20 }}>
        <SearchcraftInputForm />
      </div>
      <SearchcraftResultsInfo />
    </>
  ),
  args: defaultProps,
};

export default componentMeta;
