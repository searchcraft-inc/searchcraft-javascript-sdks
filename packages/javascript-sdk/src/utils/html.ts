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

const TAG_START_PATTERN = /[a-z/]/i;

/**
 * Characters that cannot appear as is in an unquoted attribute value.
 */
const UNQUOTED_VALUE_SPECIAL_PATTERN = /[\s"'=<>`]/g;

const encodeCharacter = (character: string) => `&#${character.charCodeAt(0)};`;

/**
 * Removes every quote from a sanitized value, so it cannot end a quoted attribute, while
 * keeping the same markup. The browser decodes the escaped characters again, so the value
 * displays the same in text and attributes.
 *
 * Quotes in text are escaped. Inside a tag, each quoted attribute value is written without
 * quotes, with the characters an unquoted value cannot hold escaped. DOMPurify writes every
 * attribute value in `"`, escapes any `"` inside it, and may leave a `>` inside it, so a value
 * runs to the next `"`.
 */
const escapeQuotes = (value: string) => {
  if (!value.includes('"') && !value.includes("'")) {
    return value;
  }

  let escaped = '';
  let isInTag = false;

  for (let i = 0; i < value.length; i++) {
    const character = value.charAt(i);

    if (character === "'") {
      escaped += '&#39;';
    } else if (!isInTag) {
      if (character === '"') {
        escaped += '&quot;';
      } else {
        isInTag =
          character === '<' && TAG_START_PATTERN.test(value.charAt(i + 1));
        escaped += character;
      }
    } else if (character === '"') {
      const valueEnd = value.indexOf('"', i + 1);
      const end = valueEnd === -1 ? value.length : valueEnd;
      const attributeValue = value.slice(i + 1, end);

      // An empty value is written as the attribute name alone, which has the same meaning.
      escaped = attributeValue
        ? escaped +
          attributeValue.replace(
            UNQUOTED_VALUE_SPECIAL_PATTERN,
            encodeCharacter,
          )
        : escaped.replace(/\s*=\s*$/, '');
      i = end;

      // An unquoted value runs to the next space or `>`, so keep the next attribute apart.
      if (!/^[\s>]?$/.test(value.charAt(i + 1))) {
        escaped += ' ';
      }
    } else {
      isInTag = character !== '>';
      escaped += character;
    }
  }

  return escaped;
};

/**
 * This allows you to parse a template string with a function.
 *
 * Each value is sanitized with DOMPurify and its quotes are escaped, so a value is safe inside
 * a quoted attribute as well as in text. The output of a nested `html` call is placed as is.
 * URLs from indexed data should also go through `safeUrl` before they are placed in an `href`
 * or `src`.
 */
export const html: TemplateHtml = (strings, ...values) => {
  let result = strings[0];

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const sanitizedValue = DOMPurify.sanitize(value ? String(value) : '');
    const isNestedOutput =
      typeof value === 'string' && recentOutputs.has(value);

    result +=
      (isNestedOutput ? sanitizedValue : escapeQuotes(sanitizedValue)) +
      strings[i + 1];
  }

  const output = result || '';
  rememberOutput(output);

  return output;
};
