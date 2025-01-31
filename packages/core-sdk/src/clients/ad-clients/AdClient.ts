import type {
  AdClientResponseItem,
  SearchcraftConfig,
  SearchParams,
} from '../../types';

export class AdClient {
  config: SearchcraftConfig;

  constructor(config: SearchcraftConfig) {
    this.config = config;
  }

  async getAdsForSearchParams(
    _params: SearchParams,
  ): Promise<AdClientResponseItem[]> {
    return [];
  }
}
