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
