export const sanitize = (str: string) => {
  let sanitizedStr = '';

  // trim whitespace
  sanitizedStr = str.trim();

  // replace fancy quotes
  sanitizedStr = sanitizedStr.replace(/[‘’“”]/g, (match) => {
    const map = {
      '‘': "'",
      '’': "'",
      '“': '"',
      '”': '"',
    };
    return map[match] || match;
  });

  // whether there are an equal number of quotes
  const quoteCount = (sanitizedStr.match(/"/g) || []).length;

  if (quoteCount % 2 !== 0) {
    throw new Error(
      'The search term contains an uneven number of quote characters.',
    );
  }

  return sanitizedStr;
};
