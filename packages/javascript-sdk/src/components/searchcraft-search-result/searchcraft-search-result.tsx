import type {
  SearchClientResponseItem,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@searchcraft/core';
import { Component, h, Prop, State } from '@stencil/core';

import { html } from '@utils';

/**
 * This web component is designed to display detailed information for a single search result.
 * Once a query is submitted, the component formats and presents the result.
 * It is consumed within the `searchcraft-search-results` component.
 */
@Component({
  tag: 'searchcraft-search-result',
  shadow: false,
})
export class SearchcraftSearchResult {
  @Prop() item?: SearchClientResponseItem;
  /**
   * The index.
   */
  @Prop() index!: number;
  /**
   * The position in the document. Used with the "document_clicked" measure event.
   */
  @Prop() documentPosition = 0;
  /**
   * A callback function responsible for rendering a result.
   */
  @Prop() template?: SearchResultTemplate<SearchResultTemplateData>;

  @State() templateHtml: string | undefined;

  connectedCallback() {
    if (this.item) {
      try {
        this.templateHtml = this.template?.(this.item.document, this.index, {
          html,
        });
      } catch (error) {
        console.error(`Invalid search result template: ${error}`);
      }
    }
  }

  render() {
    if (!this.item) {
      return;
    }

    if (typeof this.template === 'undefined') {
      return (
        <div class='searchcraft-search-result searchcraft-search-result-no-template'>
          {Object.entries(this.item.document).map(([key, value]) => (
            <p key={key}>
              <strong>{key}</strong>: {value}
            </p>
          ))}
        </div>
      );
    }

    return (
      <div class='searchcraft-search-result' innerHTML={this.templateHtml} />
    );
  }
}
