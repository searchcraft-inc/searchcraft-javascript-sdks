import type { ADMAd } from '..';

export type TemplateHtml = (
  strings: TemplateStringsArray,
  ...values: (string | number | undefined)[]
) => string;

/**
 * Options for the `safeUrl` template helper.
 */
export type SafeUrlOptions = {
  /**
   * More URL schemes to allow, such as an app's own scheme (`['myapp']`).
   */
  schemes?: string[];
};

/**
 * Returns `url` unchanged when it is safe to place in an `href` or `src` attribute, and `#` when
 * it is not. Relative URLs, `http:`, `https:`, `mailto:`, `tel:`, `sms:` and `data:image/` URLs
 * are safe, along with any scheme passed in `options.schemes`.
 */
export type SafeUrl = (url: unknown, options?: SafeUrlOptions) => string;

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
