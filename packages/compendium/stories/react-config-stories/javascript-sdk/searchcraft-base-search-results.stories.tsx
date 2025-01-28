import type { Meta, StoryObj } from '@storybook/react';
import type { SearchResultMappings } from '@searchcraft/javascript-sdk';
import { config } from '../../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';
import type { Components } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-results',
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

export const Default: StoryObj<Components.SearchcraftBaseSearchResults> = {
  decorators: [
    (Story) => {
      return (
        <>
          <searchcraft-theme />
          <Story />
        </>
      );
    },
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
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <searchcraft-input-form />
        <div style={{ paddingTop: 20 }}>
          <searchcraft-base-search-results
            ad-interval={args.adInterval}
            place-ad-at-end
            place-ad-at-start
            result-image-placement={args.resultImagePlacement}
            button-target={args.buttonTarget}
            button-rel={args.buttonRel}
            container-target={args.containerTarget}
            container-rel={args.containerRel}
          />
        </div>
      </div>
    );
  },
  args: {},
};

export default componentMeta;
