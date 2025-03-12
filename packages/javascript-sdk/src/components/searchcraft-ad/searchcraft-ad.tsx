import type {
  AdClientResponseItem,
  ADMClientResponseItem,
  SearchcraftCore,
  SearchcraftAdSource,
} from '@searchcraft/core';
import { Component, h, Prop, State } from '@stencil/core';
import { searchcraftStore } from '@store';
import DOMPurify from 'dompurify';
import { nanoid } from 'nanoid';

/**
 * An inline ad meant to be rendered in a list of search results.
 */
@Component({
  tag: 'searchcraft-ad',
  shadow: false,
})
export class SearchcraftPopoverListItemAd {
  @Prop() adSource: SearchcraftAdSource = 'Custom';
  @Prop() adClientResponseItem?: AdClientResponseItem;

  @State() searchTerm;
  private unsubscribe = () => {};
  private core?: SearchcraftCore;
  private adContainerId: string = nanoid();

  connectedCallback() {
    const currentState = searchcraftStore.getState();

    this.core = currentState.core;
    this.searchTerm = currentState.searchTerm;

    // Subscribes to store changes (for search term).
    this.unsubscribe = searchcraftStore.subscribe((state) => {
      this.searchTerm = state.searchTerm;
    });

    this.core?.handleAdContainerRendered({
      adClientResponseItem: this.adClientResponseItem,
      adContainerId: this.adContainerId,
      adSource: this.adSource,
      searchTerm: this.searchTerm,
    });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  renderADMAd() {
    const item = this.adClientResponseItem as ADMClientResponseItem;

    if (!item.admAd) {
      return;
    }

    return (
      <a class='searchcraft-adm-ad' href={item.admAd.click_url}>
        {item.admAd.image_url && (
          <div class='searchcraft-adm-ad-image-wrapper'>
            <img
              alt={item.admAd.term || 'image'}
              src={item.admAd.image_url}
              class='searchcraft-adm-ad-image'
            />
          </div>
        )}
        <div class='searchcraft-adm-ad-info-wrapper'>
          <p class='searchcraft-adm-ad-title'>{item.admAd.term}</p>
          {item.admAd.price && (
            <p class='searchcraft-adm-ad-subtitle'>{item.admAd.price}</p>
          )}
        </div>
      </a>
    );
  }

  renderCustomAd() {
    const templateRenderFunction = this.core?.config?.customAdTemplate;
    const containerId = `searchcraft-custom-ad-${this.adContainerId}`;

    let containerInnerHTML = '<p>Custom Ad Placeholder</p>';

    if (templateRenderFunction) {
      containerInnerHTML = templateRenderFunction({
        searchTerm: this.searchTerm,
        adContainerId: this.adContainerId,
      });
    }

    return (
      <div
        class='searchcraft-custom-ad'
        id={containerId}
        data-searchcraft-ad-container-id={this.adContainerId}
        innerHTML={DOMPurify.sanitize(containerInnerHTML)}
      />
    );
  }

  renderNativoAd() {
    const nativoClassName = this.core?.config.nativoAdClassName || 'ntv-item';
    return <div class={nativoClassName} />;
  }

  render() {
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
