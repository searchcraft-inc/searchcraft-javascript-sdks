export const removeTrailingSlashFromEndpointURL = (endpointURL) =>
  endpointURL.endsWith('/') ? endpointURL.slice(0, -1) : endpointURL;
