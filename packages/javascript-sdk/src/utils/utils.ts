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

export function parseSearchKeys(
  documentAttributesForDisplay: string,
): string[] {
  try {
    const parsedKeys = JSON.parse(documentAttributesForDisplay);
    if (
      Array.isArray(parsedKeys) &&
      parsedKeys.every((key) => typeof key === 'string')
    ) {
      return parsedKeys;
    }
    console.warn(
      'searchKeys must be a JSON array of strings. Defaulting to an empty array.',
    );
    return [];
  } catch (error) {
    console.error('Failed to parse searchKeys:', error);
    return [];
  }
}

export function extractDynamicProperties(
  document: Record<string, string | number>,
  keys: string[],
) {
  const extractedProperties: Record<string, string | number> = {};
  keys.forEach((key) => {
    extractedProperties[key] = document[key] || '';
  });
  return extractedProperties;
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
