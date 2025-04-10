export const sanitize = (str: string) => {
  let sanitizedStr = '';

  // Trim whitespace
  sanitizedStr = str.trim();

  // Replace fancy quotes
  sanitizedStr = sanitizedStr.replace(/[‘’“”]/g, (match) => {
    const map = {
      '‘': "'",
      '’': "'",
      '“': '"',
      '”': '"',
    };
    return map[match] || match;
  });

  // Whether there are an equal number of quotes
  const quoteCount = (sanitizedStr.match(/"/g) || []).length;

  if (quoteCount % 2 !== 0) {
    throw new Error(
      'The search term contains an uneven number of quote characters.',
    );
  }

  return sanitizedStr;
};
