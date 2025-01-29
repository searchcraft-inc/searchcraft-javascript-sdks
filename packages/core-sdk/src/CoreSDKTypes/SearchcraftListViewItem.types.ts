import type { SearchDocument } from './SearchcraftResponse.types';

export type SearchcraftListViewItemType =
  | 'adMarketplace'
  | 'Nativo'
  | 'CustomAd'
  | 'SearchDocument';

/**
 *
 */
export interface SearchcraftListViewItem {
  type: SearchcraftListViewItemType;
  document: SearchDocument;
}
