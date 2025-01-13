export type SearchResultFieldName = {
  fieldName: string;
  dataType: 'text' | 'date';
};

export type SearchResultMapping = {
  fieldNames: SearchResultFieldName[];
  delimiter?: string;
};

export type SearchResultMappings = {
  body?: SearchResultMapping;
  buttonHref?: SearchResultMapping;
  containerHref?: SearchResultMapping;
  footer?: SearchResultMapping;
  imageSource?: SearchResultMapping;
  subtitle?: SearchResultMapping;
  title?: SearchResultMapping;
};
