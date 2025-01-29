import type { SearchDocument } from './SearchcraftResponse.types';

export type SearchcraftAdProvider =
  | 'adMarketplace'
  | 'Nativo'
  | 'Custom'
  | 'None';

export interface SearchClientResponseItem {
  id: string;
  document: SearchDocument;
}
