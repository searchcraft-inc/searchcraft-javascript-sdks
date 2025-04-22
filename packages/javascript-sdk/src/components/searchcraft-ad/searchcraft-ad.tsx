import type {
  AdClientResponseItem,
  ADMClientResponseItem,
  SearchcraftCore,
  SearchcraftAdSource,
} from '@searchcraft/core';
import { Component, Element, h, Prop, State } from '@stencil/core';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

import { searchcraftStore } from '@store';

import { html } from '@utils';

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
  @Prop() adSource: SearchcraftAdSource = 'Custom';
  @Prop() adClientResponseItem?: AdClientResponseItem;
  @Prop() adContainerId: string = nanoid();

  @State() searchTerm?: string;
  @State() isSearchInProgress = false;
  @Element() hostElement?: HTMLElement;

  private core?: SearchcraftCore;

  private intersectionObserver?: IntersectionObserver;
  private storeUnsubscribe?: () => void;
  private adContainerRenderedTimeout?: NodeJS.Timeout;
  private isComponentConnected = true;

  connectedCallback() {
    const currentState = searchcraftStore.getState();

    this.core = currentState.core;
    this.searchTerm = currentState.searchTerm;
    this.isSearchInProgress = currentState.isSearchInProgress;

    // Subscribes to store changes (for search term).
    this.storeUnsubscribe = searchcraftStore.subscribe((state) => {
      this.searchTerm = state.searchTerm;
      this.isSearchInProgress = state.isSearchInProgress;
    });
  }

  componentDidLoad() {
    /**
     * Handles when an ad container is viewable within the document,
     * Core emits an ad_container_viewed event and performs ad client side effects
     */
    if (this.hostElement) {
      this.intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && !this.isSearchInProgress) {
            this.core?.handleAdContainerViewed({
              adClientResponseItem: this.adClientResponseItem,
              adContainerId: this.adContainerId,
              adSource: this.adSource,
              searchTerm: this.searchTerm || '',
            });
          }
        },
        { threshold: 0 },
      );

      this.intersectionObserver.observe(this.hostElement);
    }
  }

  disconnectedCallback() {
    this.storeUnsubscribe?.();
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

    if (this.core?.config?.admAdTemplate) {
      templateHtml = this.core?.config?.admAdTemplate(item.admAd, { html });
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
    const templateRenderFunction = this.core?.config?.customAdTemplate;
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
    const nativoClassName = this.core?.config.nativoAdClassName || 'ntv-item';
    return (
      <div
        id={`searchcraft-native-ad-${this.adContainerId}`}
        class={classNames('searchcraft-ad', nativoClassName)}
        data-searchcraft-ad-container-id={this.adContainerId}
      />
    );
  }

  render() {
    // Don't render ads while search is in progress
    if (this.isSearchInProgress) {
      return;
    }

    /**
     * Handles when an ad container is first rendered.
     * Core emits an ad_container_rendered event and performs ad client side effects
     *
     */

    if (this.isComponentConnected) {
      clearTimeout(this.adContainerRenderedTimeout);
      this.adContainerRenderedTimeout = setTimeout(() => {
        this.core?.handleAdContainerRendered({
          adClientResponseItem: this.adClientResponseItem,
          adContainerId: this.adContainerId,
          adSource: this.adSource,
          searchTerm: this.searchTerm || '',
        });
      }, this.core?.config?.adContainerRenderedDebounceDelay || 500);
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
