import type {
  AdClientResponseItem,
  SearchcraftAdSource,
  SearchcraftConfig,
  SearchcraftResponse,
  SearchClientRequestProperties,
} from '@types';

export class AdClient {
  config: SearchcraftConfig;

  constructor(config: SearchcraftConfig) {
    this.config = config;
  }

  async getAds(
    _properties: SearchClientRequestProperties,
  ): Promise<AdClientResponseItem[]> {
    return [];
  }

  async onQuerySubmitted(_properties: SearchClientRequestProperties) {}

  async onQueryFetched(
    _properties: SearchClientRequestProperties,
    _response: SearchcraftResponse,
  ) {}

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
