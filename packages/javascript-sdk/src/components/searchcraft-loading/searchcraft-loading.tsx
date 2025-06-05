import { Component, h, Prop } from '@stencil/core';

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
        <div class='searchcraft-loading-bars'>
          <div class='searchcraft-loading-bar-1' />
          <div class='searchcraft-loading-bar-2' />
          <div class='searchcraft-loading-bar-3' />
          <div class='searchcraft-loading-bar-4' />
          <div class='searchcraft-loading-bar-5' />
          <div class='searchcraft-loading-bar-6' />
        </div>
        <p class='searchcraft-loading-label'>{this.label}</p>
      </div>
    );
  }
}
