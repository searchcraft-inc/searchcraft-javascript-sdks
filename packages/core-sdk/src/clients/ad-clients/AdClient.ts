import type {
  AdClientResponseItem,
  SearchcraftAdSource,
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

  async onAdContainerRendered(_data: {
    adClientResponseItem?: AdClientResponseItem;
    adContainerId: string;
    adSource: SearchcraftAdSource;
    searchTerm: string;
  }) {}

  async onAdContainerViewed(_data: {
    adClientResponseItem?: AdClientResponseItem;
    adContainerId: string;
    adSource: SearchcraftAdSource;
    searchTerm: string;
  }) {}
}
