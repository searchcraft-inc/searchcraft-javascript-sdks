import type { ADMAd } from '..';

export type TemplateHtml = (
  strings: TemplateStringsArray,
  ...values: (string | number | undefined)[]
) => string;

export type SearchResultTemplate<T> = (
  data: T,
  index: number,
  utils: { html: TemplateHtml; source_index?: string },
) => string;

// biome-ignore lint/suspicious/noExplicitAny: Index fields object need to support arbitrary key/value pairs.
export type SearchResultTemplateData = any;

export type ResultsInfoTemplate = (
  data: {
    range: [number, number];
    count: number;
    responseTime: string;
  },
  utils: { html: TemplateHtml },
) => string;

export type CustomAdTemplate = (
  data: {
    adContainerId: string;
    searchTerm: string;
  },
  utils: { html: TemplateHtml },
) => string;

export type PopoverButtonTemplate = (
  data: {
    isPopoverVisible: boolean;
  },
  utils: { html: TemplateHtml },
) => string;

export type ADMAdTemplate = (
  data: ADMAd,
  utils: { html: TemplateHtml },
) => string;
