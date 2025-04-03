export type TemplateHtml = (
  strings: TemplateStringsArray,
  ...values: (string | number | undefined)[]
) => string;

export type SearchResultTemplate<T> = (
  data: T,
  index: number,
  utils: { html: TemplateHtml },
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
  data: boolean,
  utils: { html: TemplateHtml },
) => string;
