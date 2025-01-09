import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';
import type { FilterItem } from '@searchcraft/javascript-sdk';
import { config } from '../../utils/DefaultSearchcraftConfig';

const componentName = 'searchcraft-filter-panel';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-filter-panel',
  argTypes: {
    // filterItems: {
    //   control: 'number',
    //   description: 'The maximum year that the slider can select.',
    // },
    // minYear: {
    //   control: 'number',
    //   description: 'The minimum year that the slider can select.',
    // },
  },
};

type ComponentProps = {
  filterItems: FilterItem[];
};

const today = new Date();
const pastDate = new Date(today);
pastDate.setFullYear(today.getFullYear() - 10);

const dateRangeItem: FilterItem = {
  type: 'dateRange',
  fieldName: 'date_published',
  label: 'Date range example',
  options: {
    minDate: pastDate,
    maxDate: today,
    granularity: 'year',
  },
};

const numericItem: FilterItem = {
  type: 'numericRange',
  fieldName: 'number_field',
  label: 'Numeric range example',
  options: {
    min: 0,
    max: 100,
    granularity: 10,
  },
};

const facetItem: FilterItem = {
  type: 'facets',
  fieldName: 'section',
  label: 'Filters',
  options: {
    showSublevel: true,
  },
};

const defaultProps: ComponentProps = {
  filterItems: [dateRangeItem, numericItem, facetItem],
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
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
        <WebComponentWrapper args={args} componentName={componentName} />
      </div>
    </div>
  ),
  args: defaultProps,
};

export default componentMeta;
