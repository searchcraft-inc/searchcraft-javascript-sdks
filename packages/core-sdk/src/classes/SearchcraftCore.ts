import type {
  SearchcraftConfig,
  SearchParams,
  SearchcraftSDKInfo,
  SearchClientResponseItem,
  SearchIndexEntry,
  SearchcraftResponse,
  AdClientResponseItem,
} from '../types';
import {
  type AdClient,
  AdMarketplaceClient,
  MeasureClient,
  NativoClient,
} from '../clients';
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { SearchClient } from '../clients/SearchClient';
import { nanoid } from 'nanoid';

/**
 * Javascript Class providing the functionality to interact with the Searchcraft BE
 */
export class SearchcraftCore {
  config: SearchcraftConfig;
  measureClient: MeasureClient | undefined;
  searchClient: SearchClient | undefined;
  adClient: AdClient | undefined;
  userId: string;

  private requestTimeout: NodeJS.Timeout | undefined;

  constructor(config: SearchcraftConfig, sdkInfo: SearchcraftSDKInfo) {
    if (!config.endpointURL || !config.index || !config.readKey) {
      throw new Error(
        'Endpoint URL, Index value(s), and Read Key must be provided',
      );
    }

    this.config = config;
    this.userId = '';

    this.initClients(config, sdkInfo);
  }

  initClients(config: SearchcraftConfig, sdkInfo: SearchcraftSDKInfo) {
    // Adds a timeout so that the resource-intensive `initClients` does not cause any render-blocking issues.
    setTimeout(async () => {
      let userId = this.config.userId;

      if (!userId) {
        const fingerprint = await getFingerprint();
        userId = fingerprint;
      }

      this.measureClient = new MeasureClient(config, sdkInfo, userId);
      this.searchClient = new SearchClient(config, userId, this.measureClient);

      switch (config.adProvider) {
        case 'adMarketplace':
          this.adClient = new AdMarketplaceClient(config);
          break;
        case 'Nativo':
          this.adClient = new NativoClient(config);
          break;
      }
    }, 300);
  }

  /**
   * Gets items from the SearchClient and the AdClient.
   */
  getItems = (
    searchParams: SearchParams,
    itemsCallback: (
      response: SearchcraftResponse,
      items: SearchClientResponseItem[],
    ) => void,
    adCallback: (adClientResponseItems: AdClientResponseItem[]) => void,
  ) => {
    const getItemsDebounced = async () => {
      /**
       * Handles search response from the search client.
       */
      (async () => {
        const searchResponse =
          await this?.searchClient?.getSearchResponse(searchParams);

        if (!searchResponse) {
          throw new Error('Search client was not initialized.');
        }

        const searchItems: SearchClientResponseItem[] = (
          searchResponse.data.hits || []
        )
          ?.map((entry: SearchIndexEntry) => entry.doc) // SearchcraftResponse -> (SearchDocument || undefined)[]
          .filter((item) => !!item) // (SearchDocument || undefined)[] -> SearchDocument[]
          .map((document) => ({
            type: 'SearchDocument',
            id: nanoid(),
            document,
          })); // SearchDocument[] -> SearchClientResponseItem

        itemsCallback(searchResponse, searchItems);
      })();

      /**
       * Handles ad response from the ad client.
       */
      (async () => {
        if (this.adClient) {
          const adItems =
            await this.adClient.getAdsForSearchParams(searchParams);
          adCallback(adItems);
        }
      })();
    };

    clearTimeout(this.requestTimeout);
    if (this.config.searchDebounceDelay) {
      this.requestTimeout = setTimeout(
        getItemsDebounced,
        this.config.searchDebounceDelay,
      );
    } else {
      getItemsDebounced();
    }
  };
}
