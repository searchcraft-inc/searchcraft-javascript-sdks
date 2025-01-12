import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';
import type { SearchResultMappings } from '@searchcraft/javascript-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-results',
  argTypes: {},
};

type ComponentProps = {
  adInterval: number;
  customStylesForResults: string | Record<string, Record<string, string>>;
  searchResultMappings: string | undefined;
  placeAdAtEnd: boolean;
  placeAdAtStart: boolean;
  resultImagePlacement: 'left' | 'right';
  buttonLabel: string | undefined;
  buttonTarget: '_blank' | '_self' | '_top' | '_parent';
  buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  containerTarget: '_blank' | '_self' | '_top' | '_parent';
  containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
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
    delimeter: ' • ',
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

export const Default: StoryObj<ComponentProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchForm = document.querySelector(
          'searchcraft-auto-search-form',
        );
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
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <searchcraft-auto-search-form />
        <div style={{ paddingTop: 20 }}>
          <searchcraft-base-search-results
            ad-interval='4'
            place-ad-at-end
            place-ad-at-start
            result-image-placement='right'
            button-target='_blank'
            button-rel='noreferrer'
            container-target='_blank'
            container-rel='noreferrer'
          />
        </div>
      </div>
    );
  },
  args: {},
};

export default componentMeta;
