import DOMPurify from 'dompurify';

import type { TemplateHtml } from '@searchcraft/core';
/**
 * This allows you to parse a template string with a function.
 */
export const html: TemplateHtml = (strings, ...values) => {
  let result = strings[0];

  for (let i = 0; i < values.length; i++) {
    result +=
      DOMPurify.sanitize(values[i] ? String(values[i]) : '') + strings[i + 1];
  }

  return result || '';
};
