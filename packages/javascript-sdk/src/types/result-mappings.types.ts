import type { SearchResultMapping } from './_shared.types';

export type SearchResultMappings = {
  body?: SearchResultMapping;
  buttonHref?: SearchResultMapping;
  containerHref?: SearchResultMapping;
  footer?: SearchResultMapping;
  imageSource?: SearchResultMapping;
  subtitle?: SearchResultMapping;
  title?: SearchResultMapping;
};

export type PopoverResultMappings = {
  title?: SearchResultMapping;
  subtitle?: SearchResultMapping;
  imageSource?: SearchResultMapping;
  imageAlt?: SearchResultMapping;
  href?: SearchResultMapping;
};
