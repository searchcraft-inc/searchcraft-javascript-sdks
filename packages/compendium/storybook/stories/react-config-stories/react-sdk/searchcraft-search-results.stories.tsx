import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Searchcraft,
  SearchcraftSearchResults,
  type SearchcraftSearchResultsProps,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
  SearchcraftTheme,
} from '@searchcraft/react-sdk';

import { searchResultTemplate } from '../../../../common/index.js';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-search-results',
  argTypes: {},
};

export const Default: StoryObj<
  SearchcraftInputFormProps & SearchcraftSearchResultsProps
> = {
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
  render: (args) => {
    return (
      <>
        <SearchcraftTheme />
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm
            autoSearch={true}
            placeholderValue={args.placeholderValue}
          />
        </div>
        <SearchcraftSearchResults template={searchResultTemplate} />
      </>
    );
  },
};

export default componentMeta;
