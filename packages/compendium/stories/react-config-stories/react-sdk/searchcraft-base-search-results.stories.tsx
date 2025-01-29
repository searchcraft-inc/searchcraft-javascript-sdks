import type { SearchResultMappings } from '@searchcraft/javascript-sdk';
import {
  SearchcraftBaseSearchResults,
  SearchcraftInputForm,
  SearchcraftTheme,
} from '@searchcraft/react-sdk';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { config } from '../../../utils/DefaultSearchcraftConfig';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-base-search-results',
  argTypes: {},
};

type ComponentProps = {
  adInterval: number;
  customStylesForResults: string | Record<string, Record<string, string>>;
  searchResultMappings: SearchResultMappings;
  placeAdAtEnd: boolean;
  placeAdAtStart: boolean;
  resultImagePlacement: 'left' | 'right';
  buttonLabel: string | undefined;
  buttonTarget: '_blank' | '_self' | '_top' | '_parent';
  buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  containerTarget: '_blank' | '_self' | '_top' | '_parent';
  containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  clearInput: () => void;
  config: string;
  customStylesForInput: string;
  debounceDelay: number;
  inputCaptionValue: string;
  labelForInput: string;
  placeholderValue: string;
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

const defaultProps: ComponentProps = {
  adInterval: 4,
  buttonRel: 'noreferrer',
  buttonTarget: '_blank',
  buttonLabel: 'View More',
  containerRel: 'noreferrer',
  containerTarget: '_blank',
  customStylesForResults: '',
  debounceDelay: 0,
  placeAdAtEnd: false,
  placeAdAtStart: false,
  resultImagePlacement: 'right',
  searchResultMappings: mappings,
  clearInput: () => {},
  config: JSON.stringify(config),
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryObj<ComponentProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchForm = document.querySelector('searchcraft-input-form');
        const searchResults = document.querySelector(
          'searchcraft-base-search-results',
        );

        if (searchForm) {
          searchForm.config = config;
        }
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
            customStyles={args.customStylesForInput}
            debounceDelay={args.debounceDelay}
            searchTerm=''
            inputLabel=''
            config={config}
            placeholderValue={args.placeholderValue || ''}
          />
          <div style={{ paddingTop: 20 }}>
            <SearchcraftBaseSearchResults
              adInterval={args.adInterval}
              buttonRel={args.buttonRel}
              buttonTarget={args.buttonTarget}
              buttonLabel={args.buttonLabel}
              containerRel={args.containerRel}
              containerTarget={args.containerTarget}
              customStylesForResults={args.customStylesForResults}
              placeAdAtEnd={args.placeAdAtEnd}
              placeAdAtStart={args.placeAdAtStart}
              resultImagePlacement={args.resultImagePlacement}
              searchResultMappings={mappings}
            />
          </div>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export default componentMeta;
