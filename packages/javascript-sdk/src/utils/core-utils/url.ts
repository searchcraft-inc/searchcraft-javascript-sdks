export const removeTrailingSlashFromURL = (endpointURL: string) =>
  endpointURL.endsWith('/') ? endpointURL.slice(0, -1) : endpointURL;
