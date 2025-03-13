import type {
  AdClientResponseItem,
  SearchcraftConfig,
  SearchcraftResponse,
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

  async onQuerySubmitted(_params: SearchParams) {}

  async onQueryFetched(_params: SearchParams, _response: SearchcraftResponse) {}

  async onInputCleared() {}
}
