import type { AdClientResponseItem, SearchParams } from '../../types';
import { AdClient } from './AdClient';

export class CustomAdClient extends AdClient {
  async getAdsForSearchParams(
    _params: SearchParams,
  ): Promise<AdClientResponseItem[]> {
    return [];
  }
}
