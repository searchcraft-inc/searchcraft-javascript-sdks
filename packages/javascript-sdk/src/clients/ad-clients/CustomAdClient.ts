import type {
  AdClientResponseItem,
  SearchClientRequestProperties,
} from '@types';
import { AdClient } from './AdClient';

export class CustomAdClient extends AdClient {
  async getAds(
    _properties: SearchClientRequestProperties,
  ): Promise<AdClientResponseItem[]> {
    return [];
  }
}
