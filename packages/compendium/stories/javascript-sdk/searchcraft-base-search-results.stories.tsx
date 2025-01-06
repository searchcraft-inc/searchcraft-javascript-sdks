import type { Meta, StoryObj } from '@storybook/react';
import WebComponentWrapper from '../../utils/WebComponentWrapper';

const componentName = 'searchcraft-base-search-results';

const componentMeta: Meta = {
  title: 'Javascript SDK/searchcraft-base-search-results',
  argTypes: {
    adInterval: {
      control: 'number',
      description: 'Number of results between injected ad sections.',
    },
    customStylesForResults: {
      control: 'object',
      description: 'Custom styles applied to the results.',
    },
    documentAttributesForDisplay: {
      control: 'text',
      description: 'Comma-separated list of document attributes to display.',
    },
    fallbackElement: {
      control: 'object',
      description: 'Element to display when no results are found.',
    },
    formatTime: {
      control: 'boolean',
      description: 'If true, formats timestamps into human-readable format.',
    },
    placeAdAtEnd: {
      control: 'boolean',
      description: 'If true, places an ad section at the end of the results.',
    },
    placeAdAtStart: {
      control: 'boolean',
      description:
        'If true, places an ad section at the beginning of the results.',
    },
    placeResultImageRight: {
      control: 'boolean',
      description: 'If true, places the result image on the right.',
    },
    isInteractive: {
      control: 'boolean',
      description: 'If true, makes the results interactive.',
    },
    noResults: {
      action: 'noResults',
      description: 'Event emitted when no results are found.',
    },
  },
};

type ComponentProps = {
  adInterval?: number;
  customStylesForResults?: string | Record<string, Record<string, string>>;
  documentAttributesForDisplay?: string;
  fallbackElement?: HTMLElement | null;
  formatTime?: boolean;
  placeAdAtEnd?: boolean;
  placeAdAtStart?: boolean;
  placeResultImageRight?: boolean;
  isInteractive?: boolean;
};

const defaultProps: ComponentProps = {
  adInterval: 4,
  customStylesForResults: {},
  documentAttributesForDisplay: 'title,subtitle,primary,secondary,tertiary',
  fallbackElement: null,
  formatTime: true,
  placeAdAtEnd: true,
  placeAdAtStart: true,
  placeResultImageRight: false,
  isInteractive: false,
};

export const Default: StoryObj<ComponentProps> = {
  render: (args) => (
    <WebComponentWrapper args={args} componentName={componentName} />
  ),
  args: defaultProps,
};

export default componentMeta;
