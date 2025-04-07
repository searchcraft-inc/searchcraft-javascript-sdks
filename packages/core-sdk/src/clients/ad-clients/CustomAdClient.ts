import type {
  AdClientResponseItem,
  SearchClientRequestProperties,
} from '../../types';
import { AdClient } from './AdClient';

export class CustomAdClient extends AdClient {
  async getAdsForSearchParams(
    _params: SearchClientRequestProperties,
  ): Promise<AdClientResponseItem[]> {
    return [];
  }
}
