import type { SearchResultMapping } from 'types';

export function parseCustomStyles(
  styles: string | Record<string, string>,
): Record<string, string> {
  if (typeof styles === 'string') {
    try {
      return JSON.parse(styles);
    } catch (error) {
      console.error('Invalid customStyles format:', styles);
      return {};
    }
  }
  return styles || {};
}

export function serializeStyles(
  styles: Record<string, Record<string, string>>,
): string {
  try {
    return JSON.stringify(styles);
  } catch (error) {
    console.error('Error serializing styles:', error);
    return '{}';
  }
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

export function filterPaths(paths) {
  return paths.filter((path) => {
    const parts = path.split('/').filter(Boolean);

    if (parts.length > 1) {
      return true;
    }

    return !paths.some(
      (otherPath) => otherPath.startsWith(`${path}/`) && otherPath !== path,
    );
  });
}

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
/**
 * Given an array of facet paths, removes parent facet paths.
 */
export function removeSubstringMatches(arr: string[]): string[] {
  return arr.filter(
    (entry, index, array) =>
      !array.some(
        (otherEntry, otherIndex) =>
          otherIndex !== index && otherEntry.includes(entry),
      ),
  );
}

/**
 * Given a document and a SearchResultMapping, return a mapped value from the document.
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

        if (valueFound && fieldNameDetails.dataType === 'date') {
          valueFound = getFormattedTimeFromNow(valueFound as string);
        }

        return valueFound;
      })
      .filter((value) => !!value)
      .join(mapping.delimeter || ' ');
  }
}
