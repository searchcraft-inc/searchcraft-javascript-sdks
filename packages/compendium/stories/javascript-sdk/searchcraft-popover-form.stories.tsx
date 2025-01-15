import type { Meta, StoryObj } from '@storybook/react';
import type { SearchResultMappings } from '@searchcraft/javascript-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';
import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-popover-form',
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

export const Default: StoryObj<ComponentProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchForm = document.querySelector('searchcraft-popover-form');

        if (searchForm) {
          searchForm.config = config;
          searchForm.searchResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <searchcraft-popover-form />
      </div>
    );
  },
  args: {},
};

export default componentMeta;
