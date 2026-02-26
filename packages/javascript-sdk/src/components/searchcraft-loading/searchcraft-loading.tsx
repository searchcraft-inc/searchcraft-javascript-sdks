import { Component, Prop, h } from '@stencil/core';

/**
 * Renders a loading spinner/loading state for use in things like the summary box.
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-loading',
  shadow: false,
})
export class SearchcraftInputLabel {
  @Prop() label?: string;

  render() {
    return (
      <div class='searchcraft-loading'>
        <div class='searchcraft-loading-dots'>
          <div class='searchcraft-loading-dot-1' />
          <div class='searchcraft-loading-dot-2' />
          <div class='searchcraft-loading-dot-3' />
        </div>
        <p class='searchcraft-loading-label'>{this.label}</p>
      </div>
    );
  }
}
