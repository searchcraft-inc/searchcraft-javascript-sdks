import type { SearchResultMapping } from '@searchcraft/core';

/**
 * Given a document and a SearchResultMapping, return a mapped value from the document.
 *
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
              // TODO: Use fieldNameDetails.DateFormatOptions to format the date
              valueFound = getFormattedTimeFromNow(valueFound as string);
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

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Given a timestamp value, returns a formatted time string for the time
 * since now.
 *
 * @param timestamp
 * @returns {string} Formatted string value
 */
export function getFormattedTimeFromNow(timestamp: string): string {
  const now = new Date();
  const inputTime = new Date(timestamp);
  const diffInSeconds = Math.floor(
    (now.getTime() - inputTime.getTime()) / 1000,
  );

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  if (days < 365) {
    return `${days}d ago`;
  }
  return `${years}y ago`;
}
