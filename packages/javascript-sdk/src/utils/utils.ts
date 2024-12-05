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

export function parseSearchKeys(searchKeys: string): string[] {
  try {
    // Attempt to parse the string as JSON
    const parsedKeys = JSON.parse(searchKeys);
    if (
      Array.isArray(parsedKeys) &&
      parsedKeys.every((key) => typeof key === 'string')
    ) {
      return parsedKeys; // Return the array if it's valid
    }
    console.warn(
      'searchKeys must be a JSON array of strings. Defaulting to an empty array.',
    );
    return [];
  } catch (error) {
    console.error('Failed to parse searchKeys:', error);
    return []; // Return an empty array in case of a parsing error
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
