import type { Meta, StoryObj } from '@storybook/react';
import {
  SearchcraftInputForm,
  SearchcraftFilterPanel,
  SearchcraftTheme,
  Searchcraft,
  type ExactMatchToggleFilterItem,
  type MostRecentToggleFilterItem,
  type DateRangeFilterItem,
  type FilterItem,
  type NumericFilterItem,
  type FacetsFilterItem,
} from '@searchcraft/react-sdk';

import { useEffect } from 'react';

const componentMeta: Meta = {
  title: 'React SDK/searchcraft-filter-panel',
  argTypes: {},
};

type ComponentProps = {
  items: FilterItem[];
  clearInput: () => void;
  config: string;
  customStylesForInput: string;
  inputCaptionValue: string;
  labelForInput: string;
  placeholderValue: string;
};

const today = new Date();
const pastDate = new Date(today);
pastDate.setFullYear(today.getFullYear() - 10);

const exactMatchItem: ExactMatchToggleFilterItem = {
  type: 'exactMatchToggle',
  label: 'Exact Match',
  options: {
    subLabel: 'Specify to use exact matching or fuzzy matching',
  },
};

const mostRecentItem: MostRecentToggleFilterItem = {
  type: 'mostRecentToggle',
  label: 'Most Recent',
  options: {
    subLabel: 'Choose whether to sort by most recent.',
  },
};

const dateRangeItem: DateRangeFilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: pastDate,
    maxDate: today,
    granularity: 'year',
  },
};

const numericItem: NumericFilterItem = {
  type: 'numericRange',
  fieldName: 'number_field',
  label: 'Numeric range example',
  options: {
    min: 0,
    max: 100,
    granularity: 10,
  },
};

const facetItem: FacetsFilterItem = {
  type: 'facets',
  fieldName: 'section',
  label: 'Filters',
  options: {
    showSublevel: true,
  },
};

const defaultProps: ComponentProps = {
  items: [
    exactMatchItem,
    mostRecentItem,
    dateRangeItem,
    numericItem,
    facetItem,
  ],
  clearInput: () => {},
  config: JSON.stringify({
    readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
    endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
    index: [import.meta.env.VITE_RUNEGARD_INDEX],
  }),
  customStylesForInput: '{}',
  inputCaptionValue: 'Search',
  labelForInput: 'Search for something:',
  placeholderValue: 'Search here...',
};

export const Default: StoryObj<ComponentProps> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_RUNEGARD_READ_KEY,
          endpointURL: import.meta.env.VITE_RUNEGARD_ENDPOINT_URL,
          index: [import.meta.env.VITE_RUNEGARD_INDEX],
        });
        const filterPanel = document.querySelector('searchcraft-filter-panel');

        if (filterPanel) {
          filterPanel.items = defaultProps.items;
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
            inputLabel=''
            placeholderValue={args.placeholderValue || ''}
          />
          <div style={{ paddingTop: 20 }}>
            <SearchcraftFilterPanel items={args.items} />
          </div>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export default componentMeta;
