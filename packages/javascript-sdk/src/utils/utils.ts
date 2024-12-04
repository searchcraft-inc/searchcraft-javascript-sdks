/**
 * Utility function to parse custom styles from a string or object.
 * @param styles - Custom styles as a stringified JSON or an object.
 * @returns {Record<string, string>} - Parsed styles as an object.
 */
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
