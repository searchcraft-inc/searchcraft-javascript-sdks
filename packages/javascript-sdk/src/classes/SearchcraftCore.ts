import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { nanoid } from 'nanoid';

import {
  type AdClient,
  AdMarketplaceClient,
  CustomAdClient,
  MeasureClient,
  NativoClient,
  SearchClient,
} from '@clients';

import type {
  AdClientResponseItem,
  SearchClientRequestProperties,
  SearchClientResponseItem,
  SearchIndexHit,
  SearchcraftConfig,
  SearchcraftResponse,
  SearchcraftSDKInfo,
  SubscriptionEventCallback,
  SubscriptionEventMap,
  SubscriptionEventName,
  UnsubscribeFunction,
} from '@types';

import { type SearchcraftStore, createSearchcraftStore } from '@store';
import { removeTrailingSlashFromURL } from '@utils/core-utils';
import { registry } from './CoreInstanceRegistry';
import { Logger } from './Logger';

/**
 * Javascript Class providing the functionality to interact with the Searchcraft BE
 */
export class SearchcraftCore {
  store: SearchcraftStore;
  config: SearchcraftConfig;
  measureClient: MeasureClient | undefined;
  searchClient: SearchClient | undefined;
  adClient: AdClient | undefined;
  userId: string;

  private requestTimeout: NodeJS.Timeout | undefined;
  private subscriptionEvents: {
    [K in SubscriptionEventName]?: Array<SubscriptionEventCallback<K>>;
  } = {};

  /**
   * @param config The SearchcraftConfig object for this Searchcraft instance.
   * @param sdkInfo The SDK info object for this searchcraft instance
   * @param searchcraftId The identifier to use to reference this instance of SearchcraftCore.
   */
  constructor(
    config: SearchcraftConfig,
    sdkInfo: SearchcraftSDKInfo,
    searchcraftId: string | undefined,
  ) {
    if (!config.endpointURL) {
      throw new Error('SDK Configuration Error: endpointURL not specified.');
    }

    if (!config.readKey) {
      throw new Error('SDK Configuration Error: readKey not specified.');
    }

    if (!config.indexName && !config.federationName) {
      throw new Error('SDK Configuration Error: Either indexName or federationName must be specified.');
    }

    if (config.indexName && config.federationName) {
      throw new Error('SDK Configuration Error: Cannot specify both indexName and federationName. Please specify only one.');
    }

    this.config = {
      ...config,
      // Strips off the trailing '/' from an endpointURL if one is accidentally added
      endpointURL: removeTrailingSlashFromURL(config.endpointURL),
    };
    this.userId = '';

    if (
      typeof window !== 'undefined' &&
      typeof customElements !== 'undefined' &&
      sdkInfo.sdkName === '@searchcraft/javascript-sdk' &&
      globalThis.__scDefineCustomElements__
    ) {
      globalThis.__scDefineCustomElements__();
    }

    this.store = createSearchcraftStore(searchcraftId, {
      core: this,
      searchResultsPerPage: config.searchResultsPerPage || 20,
    });

    registry.addCoreInstance(this, searchcraftId);

    (async (config) => {
      if (typeof window !== 'undefined') {
        await this.initClients(config, sdkInfo);
      }

      if (config.initialQuery) {
        this.getResponseItems({
          requestProperties: config.initialQuery,
          shouldCacheResultsForEmptyState: true,
        });
      }
    })(this.config);
  }

  private async initClients(
    config: SearchcraftConfig,
    sdkInfo: SearchcraftSDKInfo,
  ) {
    let userId = this.config.measureUserIdentifier;

    if (!userId) {
      const fingerprint = await getFingerprint();
      userId = fingerprint;
    }

    this.measureClient = new MeasureClient(config, sdkInfo, userId);
    this.searchClient = new SearchClient(this, config, userId);

    if (config.customAdConfig) {
      this.adClient = new CustomAdClient(config);
    } else if (config.nativoConfig) {
      this.adClient = new NativoClient(config);
    } else if (config.admAdConfig) {
      this.adClient = new AdMarketplaceClient(config);
    }

    this.emitEvent('initialized', {
      name: 'initialized',
    });
  }

  emitEvent<T extends SubscriptionEventName>(
    eventName: T,
    event: SubscriptionEventMap[T],
  ) {
    this.subscriptionEvents[eventName]?.forEach((callback) => {
      (callback as SubscriptionEventCallback<T>)(event);
    });
  }

  subscribe<T extends SubscriptionEventName>(
    eventName: T,
    callback: SubscriptionEventCallback<T>,
  ): UnsubscribeFunction {
    if (!this.subscriptionEvents[eventName]) {
      this.subscriptionEvents[eventName] = [];
    }
    (this.subscriptionEvents[eventName] as SubscriptionEventCallback<T>[]).push(
      callback,
    );

    return () => {
      (this.subscriptionEvents[eventName] as SubscriptionEventCallback<T>[]) = (
        this.subscriptionEvents[eventName] as SubscriptionEventCallback<T>[]
      ).filter((cb) => cb !== callback);
    };
  }

  /**
   * Called when a `<searchcraft-ad>` component is rendered
   */
  handleAdContainerRendered(data: {
    adClientResponseItem?: AdClientResponseItem;
    adContainerId: string;
    searchTerm: string;
  }) {
    this.adClient?.onAdContainerRendered(data);

    // Emits ad_container_rendered event.
    this.emitEvent('ad_container_rendered', {
      name: 'ad_container_rendered',
      data: {
        adContainerId: data.adContainerId,
        searchTerm: data.searchTerm,
      },
    });
  }

  /**
   * Called when a `<searchcraft-ad>` is viewed
   */
  handleAdContainerViewed(data: {
    adClientResponseItem?: AdClientResponseItem;
    adContainerId: string;
    searchTerm: string;
  }) {
    this.adClient?.onAdContainerViewed(data);

    // Emits ad_container_rendered event.
    this.emitEvent('ad_container_viewed', {
      name: 'ad_container_viewed',
      data: {
        adContainerId: data.adContainerId,
        searchTerm: data.searchTerm,
      },
    });
  }

  /**
   * Perform various actions when the input is cleared
   */
  handleInputCleared() {
    this.emitEvent('input_cleared', {
      name: 'input_cleared',
    });
    this.adClient?.onInputCleared();
  }

  getResponseItems = (props: {
    requestProperties: SearchClientRequestProperties | string;
    shouldCacheResultsForEmptyState: boolean;
  }) => {
    const getResponseItemsDebounced = async () => {
      /**
       * Handles search response from the search client.
       */
      (async () => {
        if (!this.searchClient) {
          console.error('Search client was not initialized.');
          return;
        }

        let response: SearchcraftResponse | undefined;

        try {
          response = await this.searchClient.getSearchResponseItems(
            props.requestProperties,
            false,
          );
        } catch (error) {
          Logger.info(`Search request error: ${error}`);
          return;
        }

        if (!response) {
          Logger.info('Search request error: Search response was undefined');
          return;
        }

        const items: SearchClientResponseItem[] = (response.data.hits || [])
          .filter((hit) => !!hit.doc)
          .map((hit: SearchIndexHit) => ({
            id: nanoid(),
            document: hit.doc || { id: -1 },
            source_index: hit.source_index,
            type: 'SearchDocument',
          }));

        /**
         * Handles sending a supplemental search request (For getting top-level facet counts)
         */
        let supplementalResponse: SearchcraftResponse | undefined;
        if (typeof props.requestProperties === 'object') {
          if (
            props.requestProperties.facetPathsForIndexFields &&
            Object.keys(props.requestProperties.facetPathsForIndexFields)
              .length > 0
          ) {
            const {
              facetPathsForIndexFields: _,
              ...supplementalRequestProperties
            } = props.requestProperties;

            try {
              supplementalResponse =
                await this?.searchClient?.getSearchResponseItems(
                  supplementalRequestProperties,
                  true,
                );
            } catch (error) {
              Logger.info(`Search request error: ${error}`);
              return;
            }
          }
        } else if (typeof props.requestProperties === 'string') {
          // Handle supplemental search for initialQuery with filters
          const requestObj = JSON.parse(props.requestProperties);
          // Check if there are any filter queries (queries beyond the base query)
          const queryArray = Array.isArray(requestObj.query)
            ? requestObj.query
            : [requestObj.query];

          if (queryArray.length > 1) {
            // Remove filter queries to get base query for supplemental search
            const baseQuery = queryArray.filter(
              (q: { occur?: string }) => q.occur !== 'must',
            );
            const supplementalRequest = {
              ...requestObj,
              query: baseQuery.length > 0 ? baseQuery : queryArray.slice(0, 1),
            };

            try {
              supplementalResponse =
                await this?.searchClient?.getSearchResponseItems(
                  JSON.stringify(supplementalRequest),
                  true,
                );
            } catch (error) {
              Logger.info(`Search request error: ${error}`);
              return;
            }
          }
        }

        this.store.setState({
          isSearchInProgress: false,
          searchClientResponseItems: items,
          searchResponseTimeTaken: response.data.time_taken,
          searchResultsCount: response.data.count,
          searchResponseFacetPrime: response.data.facets,
          supplementalFacetPrime: supplementalResponse?.data.facets,
          searchClientRequestProperties: props.requestProperties,
          ...(props.shouldCacheResultsForEmptyState && {
            cachedSearchClientResponseItems: items,
            cachedSearchResponseFacetPrime: response.data.facets,
            cachedSupplementalFacetPrime: supplementalResponse?.data.facets,
            cachedSearchResponseTimeTaken: response.data.time_taken,
            cachedSearchResultsCount: response.data.count,
            cachedSearchClientRequestProperties: props.requestProperties,
          }),
        });
      })();

      /**
       * Handles ad response from the ad client.
       */
      (async () => {
        if (this.adClient && typeof props.requestProperties !== 'string') {
          const items = await this.adClient.getAds(props.requestProperties);
          this.store.setState({
            adClientResponseItems: items,
            ...(props.shouldCacheResultsForEmptyState && {
              cachedAdClientResponseItems: items,
            }),
          });
        }
      })();
    };

    clearTimeout(this.requestTimeout);

    if (this.config.searchDebounceDelay) {
      this.requestTimeout = setTimeout(
        getResponseItemsDebounced,
        this.config.searchDebounceDelay,
      );
    } else {
      getResponseItemsDebounced();
    }
  };
}
