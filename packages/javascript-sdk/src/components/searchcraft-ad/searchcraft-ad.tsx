import type { AdClientResponseItem, ADMClientResponseItem } from '@types';
import { Component, Element, h, Prop, State } from '@stencil/core';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

import type { SearchcraftState } from '@store';

import { html } from '@utils';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';

/**
 * An inline ad meant to be rendered in a list of search results.
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-ad',
  shadow: false,
})
export class SearchcraftPopoverListItemAd {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  @Prop() adSource: 'Custom' | 'Nativo' | 'adMarketplace' = 'Custom';
  @Prop() adClientResponseItem?: AdClientResponseItem;

  /**
   * Where the ad is being rendered within the search results div.
   * Lifecycle behavior differs for ads being rendered in different positions,
   * so we need to be able to handle all of those cases.
   */
  @Prop() renderPosition: 'interstitial' | 'top' | 'bottom' = 'interstitial';

  @State() searchTerm?: string;
  @State() isSearchInProgress = false;
  @State() searchResultCount = 0;
  @Element() hostElement?: HTMLElement;

  private core?: SearchcraftCore;

  private intersectionObserver?: IntersectionObserver;
  private storeUnsubscribe?: () => void;
  private cleanupCore?: () => void;
  private adContainerRenderedTimeout?: NodeJS.Timeout;
  private isComponentConnected = false;
  private timeTaken?: number;

  @State() adContainerId = '';

  /**
   * Handles when an ad container is first rendered.
   * Core emits an ad_container_rendered event and performs ad client side effects
   *
   */
  handleAdRendered() {
    this.adContainerId = nanoid();

    if (this.isComponentConnected && this.searchResultCount > 0) {
      clearTimeout(this.adContainerRenderedTimeout);
      this.adContainerRenderedTimeout = setTimeout(() => {
        this.core?.handleAdContainerRendered({
          adClientResponseItem: this.adClientResponseItem,
          adContainerId: this.adContainerId,
          searchTerm: this.searchTerm || '',
        });
      }, this.core?.config?.customAdConfig?.adContainerRenderedDebounceDelay ||
        300);
    }
  }

  handleAdViewed() {
    this.core?.handleAdContainerViewed({
      adClientResponseItem: this.adClientResponseItem,
      adContainerId: this.adContainerId,
      searchTerm: this.searchTerm || '',
    });
  }

  /**
   * Things to do when there's a new incoming search request.
   */
  handleNewIncomingSearchRequest(state: SearchcraftState) {
    const request = state.searchClientRequest;
    if (request && typeof request === 'object') {
      this.searchTerm = request.searchTerm;
    }

    this.searchResultCount = state.searchClientResponseItems.length;

    this.handleAdRendered();

    this.startIntersectionObserver();
  }

  onCoreAvailable(core: SearchcraftCore) {
    const currentState = core.store.getState();

    this.isComponentConnected = true;
    this.core = currentState.core;
    this.isSearchInProgress = currentState.isSearchInProgress;
    this.searchResultCount = currentState.searchClientResponseItems.length;
    this.timeTaken = currentState.searchResponseTimeTaken;

    const request = currentState.searchClientRequest;
    if (request && typeof request === 'object') {
      this.searchTerm = request.searchTerm;
    }

    /**
     * Interstial ads have a different lifecycle, where we need handle an incoming search
     * request immediately, because they are rendered alongside the search results.
     */
    if (this.renderPosition === 'interstitial') {
      this.handleNewIncomingSearchRequest(currentState);
    }

    // Subscribes to store changes (for search term).
    this.storeUnsubscribe = core.store.subscribe((state) => {
      if (this.timeTaken !== state.searchResponseTimeTaken) {
        this.handleNewIncomingSearchRequest(state);
      }
      this.timeTaken = state.searchResponseTimeTaken;
      this.isSearchInProgress = state.isSearchInProgress;
    });
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  startIntersectionObserver() {
    this.intersectionObserver?.disconnect();
    /**
     * Handles when an ad container is viewable within the document,
     * Core emits an ad_container_viewed event and performs ad client side effects
     */
    if (this.hostElement) {
      this.intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && this.searchResultCount > 0) {
            this.handleAdViewed();
          }
        },
        { threshold: 0 },
      );

      this.intersectionObserver.observe(this.hostElement);
    }
  }

  disconnectedCallback() {
    this.storeUnsubscribe?.();
    this.cleanupCore?.();
    this.intersectionObserver?.disconnect();
    this.isComponentConnected = false;
    clearTimeout(this.adContainerRenderedTimeout);
  }

  renderADMAd() {
    const item = this.adClientResponseItem as ADMClientResponseItem;

    if (!item.admAd) {
      return;
    }

    let templateHtml = '<p>Ad Marketplace Ad Placeholder</p>';

    if (this.core?.config?.admAdConfig?.template) {
      templateHtml = this.core?.config?.admAdConfig.template(item.admAd, {
        html,
      });
    }

    return (
      <div
        class='searchcraft-ad searchcraft-adm-ad'
        data-searchcraft-ad-container-id={this.adContainerId}
        id={`searchcraft-adm-ad-${this.adContainerId}`}
        innerHTML={templateHtml}
      />
    );
  }

  renderCustomAd() {
    const templateRenderFunction = this.core?.config?.customAdConfig?.template;
    const containerId = `searchcraft-custom-ad-${this.adContainerId}`;
    let templateHtml = '<p>Custom Ad Placeholder</p>';

    if (templateRenderFunction) {
      templateHtml = templateRenderFunction(
        {
          searchTerm: this.searchTerm || '',
          adContainerId: this.adContainerId,
        },
        { html },
      );
    }

    return (
      <div
        class='searchcraft-ad searchcraft-custom-ad'
        id={containerId}
        data-searchcraft-ad-container-id={this.adContainerId}
        innerHTML={templateHtml}
      />
    );
  }

  renderNativoAd() {
    const nativoClassName =
      this.core?.config.nativoConfig?.adClassName || 'ntv-item';
    return (
      <div
        id={`searchcraft-native-ad-${this.adContainerId}`}
        class={classNames('searchcraft-ad', nativoClassName)}
        data-searchcraft-ad-container-id={this.adContainerId}
      />
    );
  }

  render() {
    // Don't render ads if no search results
    if (this.searchResultCount === 0) {
      return;
    }

    switch (this.adSource) {
      case 'adMarketplace':
        return this.renderADMAd();
      case 'Custom':
        return this.renderCustomAd();
      case 'Nativo':
        return this.renderNativoAd();
      default:
        return;
    }
  }
}
