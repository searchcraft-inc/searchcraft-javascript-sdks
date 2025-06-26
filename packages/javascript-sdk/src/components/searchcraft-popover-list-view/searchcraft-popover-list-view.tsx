import type {
  AdClientResponseItem,
  SearchClientResponseItem,
  PopoverResultMappings,
  SearchcraftConfig,
} from '@types';
import { Component, h, Prop, type JSX } from '@stencil/core';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';

/**
 * This web component is designed to display a list of results within a popover interface.
 * It is consumed within the `searchcraft-popover-form` component.
 *
 * @js-example
 * ```html
 * <searchcraft-popover-list-view />
 * ```
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-popover-list-view',
  shadow: false,
})
export class SearchcraftPopoverListView {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  /**
   * The mappings that define how the data in the documents are mapped to the
   * list-view-item elements.
   */
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;
  /**
   * The items to render in the list view.
   */
  @Prop() searchClientResponseItems: SearchClientResponseItem[] | undefined;
  @Prop() adClientResponseItems: AdClientResponseItem[] | undefined;
  @Prop() searchResultsPage!: number;
  @Prop() searchResultsPerPage!: number;

  private config?: SearchcraftConfig;
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    this.config = core.config;
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.cleanupCore?.();
  }

  renderWithADMAds() {
    return (
      <div class='searchcraft-popover-list-view'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-ad
            searchcraft-id={this.searchcraftId}
            adClientResponseItem={item}
            adSource='adMarketplace'
            key={item.id}
            renderPosition='top'
          />
        ))}
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-popover-list-item
            searchcraft-id={this.searchcraftId}
            item={item}
            key={item.id}
            popoverResultMappings={this.popoverResultMappings}
            documentPosition={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
          />
        ))}
      </div>
    );
  }

  renderWithCustomAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialInterval =
      this.config?.customAdConfig?.adInterstitialInterval || 0;
    const interstitialQuantity =
      this.config?.customAdConfig?.adInterstitialQuantity || 1;
    const adStartQuantity = this.config?.customAdConfig?.adStartQuantity || 0;
    const adEndQuantity = this.config?.customAdConfig?.adEndQuantity || 0;
    const searchItems = this.searchClientResponseItems || [];

    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Custom'
          key={`${n}-ad`}
          renderPosition='top'
        />,
      );
    }

    // Renders search results + interstitial ads
    searchItems.forEach((item, index) => {
      if (
        interstitialInterval &&
        index % interstitialInterval === 0 &&
        index + interstitialInterval < searchItems.length &&
        index >= interstitialInterval
      ) {
        for (let n = 0; n < interstitialQuantity; n++) {
          itemsToRender.push(
            <searchcraft-ad
              searchcraft-id={this.searchcraftId}
              adSource='Custom'
              key={`${item.id}-ad-${n}`}
              renderPosition='interstitial'
            />,
          );
        }
      }

      itemsToRender.push(
        <searchcraft-popover-list-item
          searchcraft-id={this.searchcraftId}
          item={item}
          key={item.id}
          popoverResultMappings={this.popoverResultMappings}
          documentPosition={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
        />,
      );
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Custom'
          key={`${n}-ad`}
          renderPosition='bottom'
        />,
      );
    }

    return <div class='searchcraft-popover-list-view'>{itemsToRender}</div>;
  }

  renderWithNativoAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialStartIndex =
      this.config?.nativoConfig?.adInterstialStartIndex || 0;
    const interstitialInterval =
      this.config?.nativoConfig?.adInterstitialInterval || 0;
    const interstitialQuantity =
      this.config?.nativoConfig?.adInterstitialQuantity || 1;
    const adStartQuantity = this.config?.nativoConfig?.adStartQuantity || 0;
    const adEndQuantity = this.config?.nativoConfig?.adEndQuantity || 0;
    const searchItems = this.searchClientResponseItems || [];

    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Nativo'
          key={`${n}-ad`}
          renderPosition='top'
        />,
      );
    }

    // Renders search results + interstitial ads
    searchItems.forEach((item, index) => {
      if (
        interstitialInterval &&
        (index + interstitialStartIndex) % interstitialInterval === 0 &&
        index + interstitialInterval < searchItems.length &&
        index >= interstitialInterval
      ) {
        for (let n = 0; n < interstitialQuantity; n++) {
          itemsToRender.push(
            <searchcraft-ad
              searchcraft-id={this.searchcraftId}
              adSource='Nativo'
              key={`${item.id}-ad-${n}`}
              renderPosition='interstitial'
            />,
          );
        }
      }

      itemsToRender.push(
        <searchcraft-popover-list-item
          searchcraft-id={this.searchcraftId}
          item={item}
          key={item.id}
          popoverResultMappings={this.popoverResultMappings}
          documentPosition={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
        />,
      );
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Nativo'
          key={`${n}-ad`}
          renderPosition='bottom'
        />,
      );
    }

    return <div class='searchcraft-popover-list-view'>{itemsToRender}</div>;
  }

  renderWithNoAds() {
    return (
      <div class='searchcraft-popover-list-view'>
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-popover-list-item
            searchcraft-id={this.searchcraftId}
            item={item}
            key={item.id}
            popoverResultMappings={this.popoverResultMappings}
            documentPosition={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
          />
        ))}
      </div>
    );
  }

  render() {
    if (this.config?.customAdConfig) {
      return this.renderWithCustomAds();
    }
    if (this.config?.nativoConfig) {
      return this.renderWithNativoAds();
    }
    if (this.config?.admAdConfig) {
      return this.renderWithADMAds();
    }
    return this.renderWithNoAds();
  }
}
