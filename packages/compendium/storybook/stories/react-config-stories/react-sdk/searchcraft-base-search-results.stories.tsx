import {
  Searchcraft,
  SearchcraftBaseSearchResults,
  type SearchcraftBaseSearchResultsProps,
  SearchcraftInputForm,
  type SearchcraftInputFormProps,
  SearchcraftTheme,
  type SearchResultMappings,
} from '@searchcraft/react-sdk';

import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-base-search-results',
  argTypes: {},
};

const mappings: SearchResultMappings = {
  containerHref: {
    fieldNames: [
      {
        fieldName: 'canonical_link',
        dataType: 'text',
      },
    ],
  },
  footer: {
    fieldNames: [
      {
        fieldName: 'date_published',
        dataType: 'date',
      },
      {
        fieldName: 'author_name',
        dataType: 'text',
      },
    ],
    delimiter: ' • ',
  },
  imageSource: {
    fieldNames: [
      {
        fieldName: 'medium_image',
        dataType: 'text',
      },
    ],
  },
  body: {
    fieldNames: [{ fieldName: 'sub_headline', dataType: 'text' }],
  },
  title: {
    fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
  },
};

export const Default: StoryObj<
  SearchcraftInputFormProps & SearchcraftBaseSearchResultsProps
> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
        const searchResults = document.querySelector(
          'searchcraft-base-search-results',
        );

        if (searchResults) {
          searchResults.searchResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <SearchcraftTheme />
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          <SearchcraftInputForm
            autoSearch={true}
            buttonLabel=''
            buttonPlacement='none'
            customStyles={args.customStyles}
            inputLabel=''
            placeholderValue={args.placeholderValue || ''}
          />
          <div style={{ paddingTop: 20 }}>
            <SearchcraftBaseSearchResults
              buttonRel={args.buttonRel}
              buttonTarget={args.buttonTarget}
              buttonLabel={args.buttonLabel}
              containerRel={args.containerRel}
              containerTarget={args.containerTarget}
              customStylesForResults={args.customStylesForResults}
              resultImagePlacement={args.resultImagePlacement}
              searchResultMappings={mappings}
            />
          </div>
        </div>
      </>
    );
  },
};

export default componentMeta;
