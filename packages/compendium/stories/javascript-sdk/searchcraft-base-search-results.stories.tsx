import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';
import type { SearchResultMappings } from '@searchcraft/javascript-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';

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

const defaultProps: ComponentProps = {
  adInterval: 4,
  customStylesForResults: {},
  searchResultMappings: JSON.stringify(mappings),
  placeAdAtEnd: true,
  placeAdAtStart: true,
  resultImagePlacement: 'right',
  buttonLabel: undefined,
  buttonTarget: '_blank',
  buttonRel: 'noreferrer',
  containerTarget: '_blank',
  containerRel: 'noreferrer',
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => {
    return (
      <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <WebComponentWrapper
          componentName='searchcraft-auto-search-form'
          args={{
            autoSearchFormClass: '',
            config: config,
            customStylesForInput: '{}',
            inputCaptionValue: 'Search',
            labelForInput: 'Search for something:',
            placeholderValue: 'Search here...',
            searchContainerClass: '',
          }}
        />
        <div style={{ paddingTop: 20 }}>
          <WebComponentWrapper
            componentName='searchcraft-base-search-results'
            args={args}
          />
        </div>
      </div>
    );
  },
  args: defaultProps,
};

export default componentMeta;
