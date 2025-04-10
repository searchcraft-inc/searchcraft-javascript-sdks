import type { SearchResultMapping } from '@searchcraft/core';

/**
 * Given a document and a SearchResultMapping, return a mapped value from the document.
 * Applies formatting based on the values specified in the `SearchResultFieldName` values.
 *
 * @param document
 * @param {SearchResultMapping} mapping
 * @returns {string | undefined}
 */
export function getDocumentValueFromSearchResultMapping(
  document: Record<string, unknown> | undefined,
  mapping: SearchResultMapping | undefined,
): string | undefined {
  if (document && mapping) {
    return mapping.fieldNames
      .map((fieldNameDetails) => {
        let valueFound = document[fieldNameDetails.fieldName];

        if (valueFound) {
          switch (fieldNameDetails.dataType) {
            case 'date': {
              valueFound = formatRelativeDate(
                valueFound as string | Date,
                fieldNameDetails.dateFormatLocale,
                fieldNameDetails.dateFormatOptions,
              );
              break;
            }
            case 'number': {
              valueFound = Intl.NumberFormat(
                fieldNameDetails.numberFormatLocale,
                fieldNameDetails.numberFormatOptions,
              ).format(
                (valueFound as number) * (fieldNameDetails.numberScale || 1),
              );
              break;
            }
            default:
              break;
          }
        }

        return valueFound;
      })
      .filter((value) => !!value)
      .join(mapping.delimiter || ' ');
  }
}

/**
 * Convert different units of time to milliseconds.
 *
 * @param unit - The unit of time
 * @returns {number}
 */
export function getMillis(unit: 'year' | 'month' | 'day' | 'hour'): number {
  const millisInHour = 60 * 60 * 1000;
  const millisInDay = 24 * millisInHour;
  const millisInMonth = 30 * millisInDay;
  const millisInYear = 365 * millisInDay;

  switch (unit) {
    case 'hour':
      return millisInHour;
    case 'day':
      return millisInDay;
    case 'month':
      return millisInMonth;
    case 'year':
      return millisInYear;
    default:
      return 3600000;
  }
}

/**
 * Format a number with commas as thousands separators.
 *
 * @param number - The number to be formatted.
 * @returns {string} - The formatted number as a string.
 */
export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format a date or date string. The string is formatted relative to today's date
 * (e.g. 2 days ago) until the date range is greater than a month.
 *
 * @param dateInput - The date to be formatted.
 * @param locale - The language used for formatting the date.
 * @param options - The non-default options used for formatting the date.
 * @returns {string} - The formatted date as a string.
 */
export function formatRelativeDate(
  dateInput: string | Date,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
): string {
  const date = new Date(dateInput);
  const now = new Date();
  const diffMillis = now.getTime() - date.getTime();
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // Approx. 1 month in ms

  if (diffMillis < oneMonthInMillis) {
    const diffSeconds = Math.floor(diffMillis / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, options);

    if (diffDays >= 1) {
      return relativeTimeFormat.format(diffDays, 'day');
    }

    if (diffHours >= 1) {
      return relativeTimeFormat.format(diffHours, 'hour');
    }

    if (diffMinutes >= 1) {
      return relativeTimeFormat.format(diffMinutes, 'minute');
    }

    return relativeTimeFormat.format(0, 'second');
  }

  return new Intl.DateTimeFormat(locale, options).format(date);
}
