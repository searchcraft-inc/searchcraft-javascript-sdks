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
    const accessibleLabel = this.label ?? 'Loading';
    return (
      // biome-ignore lint/a11y/useSemanticElements: <output> is semantically incorrect for a loading indicator
      <div class='searchcraft-loading' role='status' aria-live='polite' aria-label={accessibleLabel}>
        <div class='searchcraft-loading-dots' aria-hidden='true'>
          <div class='searchcraft-loading-dot-1' />
          <div class='searchcraft-loading-dot-2' />
          <div class='searchcraft-loading-dot-3' />
        </div>
        {this.label ? <p class='searchcraft-loading-label'>{this.label}</p> : null}
      </div>
    );
  }
}
