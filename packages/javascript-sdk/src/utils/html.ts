import DOMPurify from 'dompurify';

import type { TemplateHtml } from '@types';

/**
 * Output of the `html` calls made in the current task. A nested `html` call finishes before
 * the call it is placed in, so its output is found here and is not escaped a second time.
 */
const recentOutputs = new Set<string>();
let isClearScheduled = false;

const rememberOutput = (output: string) => {
  recentOutputs.add(output);

  if (!isClearScheduled) {
    isClearScheduled = true;
    queueMicrotask(() => {
      recentOutputs.clear();
      isClearScheduled = false;
    });
  }
};

const MARKUP_PATTERN = /<[a-z!/?]/i;

/**
 * Escapes the quotes in a value that has no markup, so it cannot end a quoted attribute.
 * The browser decodes them again, so the value displays the same in text and attributes.
 */
const escapeQuotes = (value: string) =>
  value.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/**
 * This allows you to parse a template string with a function.
 *
 * Each value is sanitized with DOMPurify. Quotes in values that contain no markup are escaped,
 * so a value is safe inside a quoted attribute as well as in text. The output of a nested
 * `html` call is placed as is. URLs from indexed data should also go through `safeUrl`
 * before they are placed in an `href` or `src`.
 */
export const html: TemplateHtml = (strings, ...values) => {
  let result = strings[0];

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const sanitizedValue = DOMPurify.sanitize(value ? String(value) : '');
    const isNestedOutput =
      typeof value === 'string' && recentOutputs.has(value);

    result +=
      (isNestedOutput || MARKUP_PATTERN.test(sanitizedValue)
        ? sanitizedValue
        : escapeQuotes(sanitizedValue)) + strings[i + 1];
  }

  const output = result || '';
  rememberOutput(output);

  return output;
};
