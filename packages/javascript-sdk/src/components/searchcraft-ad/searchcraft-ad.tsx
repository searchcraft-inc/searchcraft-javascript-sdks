import type {
  AdClientResponseItem,
  ADMClientResponseItem,
  SearchcraftCore,
  SearchcraftAdSource,
} from '@searchcraft/core';
import { Component, Element, h, Prop, State } from '@stencil/core';
import { nanoid } from 'nanoid';

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

    return (
      <div class='searchcraft-adm-ad'>
        <a class='searchcraft-adm-ad-link' href={item.admAd.click_url}>
          {item.admAd.image_url && (
            <div class='searchcraft-adm-ad-image-wrapper'>
              <img
                alt={item.admAd.term || 'image'}
                src={item.admAd.image_url}
                class='searchcraft-adm-ad-image'
              />
            </div>
          )}
          <div class='searchcraft-adm-ad-content'>
            <p class='searchcraft-adm-ad-content-title'>{item.admAd.term}</p>
            {item.admAd.price && (
              <p class='searchcraft-adm-ad-content-subtitle'>
                {item.admAd.price}
              </p>
            )}
          </div>
        </a>
      </div>
    );
  }

  renderCustomAd() {
    const templateRenderFunction = this.core?.config?.customAdTemplate;
    const containerId = `searchcraft-custom-ad-${this.adContainerId}`;

    let containerInnerHTML = '<p>Custom Ad Placeholder</p>';

    if (templateRenderFunction) {
      containerInnerHTML = templateRenderFunction(
        {
          searchTerm: this.searchTerm || '',
          adContainerId: this.adContainerId,
        },
        { html },
      );
    }

    return (
      <div
        class='searchcraft-custom-ad'
        id={containerId}
        data-searchcraft-ad-container-id={this.adContainerId}
        innerHTML={containerInnerHTML}
      />
    );
  }

  renderNativoAd() {
    const nativoClassName = this.core?.config.nativoAdClassName || 'ntv-item';
    return <div class={nativoClassName} />;
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
