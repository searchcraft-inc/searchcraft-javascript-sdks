import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { nanoid } from 'nanoid';

import {
  type AdClient,
  AdMarketplaceClient,
  CustomAdClient,
  MeasureClient,
  NativoClient,
  SearchClient,
} from '../clients';

import type {
  AdClientResponseItem,
  SearchClientResponseItem,
  SearchcraftConfig,
  SearchcraftResponse,
  SearchcraftSDKInfo,
  SubscriptionEventName,
  SubscriptionEventCallback,
  SearchIndexHit,
  SubscriptionEventMap,
  UnsubscribeFunction,
  SearchcraftAdSource,
  SearchClientRequestProperties,
} from '../types';

import { removeTrailingSlashFromURL } from '../utils';

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
  private subscriptionEvents: {
    [K in SubscriptionEventName]?: Array<SubscriptionEventCallback<K>>;
  } = {};

  constructor(config: SearchcraftConfig, sdkInfo: SearchcraftSDKInfo) {
    if (!config.endpointURL || !config.index || !config.readKey) {
      throw new Error(
        'Endpoint URL, Index value(s), and Read Key must be provided',
      );
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

    if (typeof window !== 'undefined') {
      this.initClients(this.config, sdkInfo);
      this.initInputForms();
      this.startObservingMutations();
    }
  }

  private initInputForms() {
    const inputForms: Record<string, unknown>[] = document.querySelectorAll(
      'searchcraft-input-form',
    ) as unknown as Record<string, unknown>[];

    // Adds a timeout to give the stencil components time to initialize.
    setTimeout(() => {
      inputForms.forEach((form) => {
        form.core = this;
      });
    }, 40);
  }

  /**
   * When changes happen in the DOM, we want to link any input forms found to the instance of the core.
   */
  private startObservingMutations() {
    const observer = new MutationObserver((mutationsList, _observer) => {
      let newInputFormDetected = false;
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 &&
              (
                (node as HTMLElement).getAttribute('class') || ''
              ).toLowerCase() === 'searchcraft-input-form'
            ) {
              newInputFormDetected = true;
            }
          });
        }
      }
      if (newInputFormDetected) {
        this.initInputForms();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  private initClients(config: SearchcraftConfig, sdkInfo: SearchcraftSDKInfo) {
    // Adds a timeout so that the resource-intensive `initClients` does not cause any render-blocking issues.
    setTimeout(async () => {
      let userId = this.config.userId;

      if (!userId) {
        const fingerprint = await getFingerprint();
        userId = fingerprint;
      }

      this.measureClient = new MeasureClient(config, sdkInfo, userId);
      this.searchClient = new SearchClient(this, config, userId);

      switch (config.adSource) {
        case 'adMarketplace':
          this.adClient = new AdMarketplaceClient(config);
          break;
        case 'Nativo':
          this.adClient = new NativoClient(config);
          break;
        case 'Custom':
          this.adClient = new CustomAdClient(config);
          break;
      }

      this.emitEvent('initialized', {
        name: 'initialized',
      });
    }, 300);
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
    adSource: SearchcraftAdSource;
    searchTerm: string;
  }) {
    this.adClient?.onAdContainerRendered(data);

    // Emits ad_container_rendered event.
    this.emitEvent('ad_container_rendered', {
      name: 'ad_container_rendered',
      data: {
        adContainerId: data.adContainerId,
        adSource: data.adSource,
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
    adSource: SearchcraftAdSource;
    searchTerm: string;
  }) {
    this.adClient?.onAdContainerViewed(data);

    // Emits ad_container_rendered event.
    this.emitEvent('ad_container_viewed', {
      name: 'ad_container_viewed',
      data: {
        adContainerId: data.adContainerId,
        adSource: data.adSource,
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

  getResponseItems = (
    properties: SearchClientRequestProperties | string,
    searchCallback: (
      response: SearchcraftResponse,
      items: SearchClientResponseItem[],
      supplementalResponse: SearchcraftResponse | undefined,
    ) => void,
    adCallback: (items: AdClientResponseItem[]) => void,
  ) => {
    const getResponseItemsDebounced = async () => {
      /**
       * Handles search response from the search client.
       */
      (async () => {
        const response =
          await this?.searchClient?.getSearchResponseItems(properties);

        if (!response) {
          throw new Error('Search client was not initialized.');
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
        if (typeof properties === 'object') {
          const props = structuredClone(
            properties as SearchClientRequestProperties,
          );
          if (
            props.facetPathsForIndexFields &&
            Object.keys(props.facetPathsForIndexFields).length > 0 &&
            props.rangeValueForIndexFields &&
            Object.keys(props.rangeValueForIndexFields).length > 0
          ) {
            props.facetPathsForIndexFields = undefined;

            supplementalResponse =
              await this?.searchClient?.getSearchResponseItems(props, false);

            if (response) {
              console.log('Supplemental response:', supplementalResponse);
            }
          }
        }

        searchCallback(response, items, supplementalResponse);
      })();

      /**
       * Handles ad response from the ad client.
       */
      (async () => {
        if (this.adClient && typeof properties !== 'string') {
          const items = await this.adClient.getAds(properties);
          adCallback(items);
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
