import type { SafeUrl } from '@types';

/**
 * Schemes that are always allowed. `data:` URLs are allowed separately, for images only.
 */
const ALLOWED_SCHEMES = ['http', 'https', 'mailto', 'tel', 'sms'];

/**
 * Returned in place of a URL that is not allowed.
 */
const BLOCKED_URL = '#';

/**
 * A scheme is only recognized when its `:` comes before any `/`, `?` or `#`.
 */
const SCHEME_PATTERN = /^([a-z][a-z\d+.-]*):/i;

const DATA_IMAGE_PATTERN = /^data:image\//i;

/**
 * Character references the browser decodes in an attribute before it reads the URL.
 * Named references are limited to the ones that can help spell out a scheme.
 */
const CHARACTER_REFERENCE_PATTERN =
  /&#[xX]([\da-fA-F]+);?|&#(\d+);?|&(colon|Tab|NewLine);/g;

const NAMED_CHARACTER_REFERENCES: Record<string, string> = {
  colon: ':',
  Tab: '\t',
  NewLine: '\n',
};

const fromCodePoint = (codePoint: number) =>
  codePoint > 0 && codePoint <= 0x10ffff
    ? String.fromCodePoint(codePoint)
    : '�';

const decodeCharacterReferences = (value: string) =>
  value.replace(
    CHARACTER_REFERENCE_PATTERN,
    (_match, hex?: string, decimal?: string, name?: string) => {
      if (hex) {
        return fromCodePoint(Number.parseInt(hex, 16));
      }
      if (decimal) {
        return fromCodePoint(Number.parseInt(decimal, 10));
      }
      return NAMED_CHARACTER_REFERENCES[name ?? ''] ?? '';
    },
  );

/**
 * Reads a URL the way the browser does before it looks for a scheme: character references
 * are decoded, tabs and newlines are removed, and leading spaces and control characters
 * are ignored.
 */
const normalizeUrl = (value: string) => {
  const decoded = decodeCharacterReferences(value).replace(/[\t\n\r]/g, '');
  let start = 0;

  while (start < decoded.length && decoded.charCodeAt(start) <= 0x20) {
    start++;
  }

  return decoded.slice(start);
};

const normalizeScheme = (scheme: string) =>
  scheme.trim().toLowerCase().replace(/:$/, '');

/**
 * Returns `url` unchanged when it is safe to place in an `href` or `src` attribute, and `#`
 * when it is not.
 *
 * Relative URLs, `http:`, `https:`, `mailto:`, `tel:`, `sms:` and `data:image/` URLs are safe,
 * along with any scheme passed in `options.schemes`. Every other scheme, such as `javascript:`,
 * is blocked, including when it is written in mixed case, has leading spaces or contains tabs,
 * newlines or character references.
 *
 * ```js
 * html`<a href="${safeUrl(item.url)}">${item.title}</a>`;
 * html`<a href="${safeUrl(item.appUrl, { schemes: ['myapp'] })}">Open in app</a>`;
 * ```
 */
export const safeUrl: SafeUrl = (url, options) => {
  if (url === undefined || url === null) {
    return '';
  }

  const value = String(url);
  const normalizedUrl = normalizeUrl(value);
  const scheme = normalizedUrl.match(SCHEME_PATTERN)?.[1]?.toLowerCase();

  if (!scheme) {
    return value;
  }

  if (
    ALLOWED_SCHEMES.includes(scheme) ||
    options?.schemes?.some((allowed) => normalizeScheme(allowed) === scheme)
  ) {
    return value;
  }

  if (scheme === 'data' && DATA_IMAGE_PATTERN.test(normalizedUrl)) {
    return value;
  }

  return BLOCKED_URL;
};
