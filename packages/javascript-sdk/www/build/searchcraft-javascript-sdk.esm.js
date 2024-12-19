import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-8211f330.js';
export { s as setNonce } from './index-8211f330.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.22.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["searchcraft-base-search-form",[[1,"searchcraft-base-search-form",{"config":[16],"errorMessage":[1,"error-message"],"labelForInput":[1,"label-for-input"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"error":[32],"query":[32],"searchResults":[32]}]]],["searchcraft-auto-search-form",[[1,"searchcraft-auto-search-form",{"autoSearchFormClass":[1,"auto-search-form-class"],"clearInput":[16],"config":[16],"customStylesForInput":[1,"custom-styles-for-input"],"inputCaptionValue":[1,"input-caption-value"],"inputIconHeight":[2,"input-icon-height"],"inputIconWidth":[2,"input-icon-width"],"labelForInput":[1,"label-for-input"],"placeholderValue":[1,"placeholder-value"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"searchContainerClass":[1,"search-container-class"],"error":[32],"isRequesting":[32],"query":[32],"searchResults":[32]}]]],["searchcraft-base-search-results",[[1,"searchcraft-base-search-results",{"adInterval":[2,"ad-interval"],"customStylesForResults":[1,"custom-styles-for-results"],"documentAttributesForDisplay":[1,"document-attributes-for-display"],"fallbackElement":[16],"formatTime":[4,"format-time"],"placeAdAtEnd":[4,"place-ad-at-end"],"placeAdAtStart":[4,"place-ad-at-start"],"placeResultImageRight":[4,"place-result-image-right"],"hasSearched":[32],"query":[32],"searchResults":[32]}]]],["searchcraft-filters-list",[[1,"searchcraft-filters-list",{"filters":[16],"dynamicFilters":[32],"isRequesting":[32],"query":[32],"resultsCount":[32],"selectedFilters":[32]}]]],["searchcraft-button-icon",[[1,"searchcraft-button-icon"]]],["searchcraft-results-info",[[1,"searchcraft-results-info",{"isRequesting":[32],"resultsCount":[32],"responseTime":[32],"query":[32]}]]],["searchcraft-slider",[[1,"searchcraft-slider",{"maxYear":[2,"max-year"],"minYear":[2,"min-year"],"endYear":[32],"hasSearched":[32],"query":[32],"resultsCount":[32],"startYear":[32]}]]],["searchcraft-toggle-button",[[1,"searchcraft-toggle-button",{"type":[1],"isActive":[32],"query":[32],"resultsCount":[32]}]]],["searchcraft-button",[[1,"searchcraft-button",{"iconElement":[16],"iconOnly":[4,"icon-only"],"iconPosition":[1,"icon-position"],"label":[1],"isRequesting":[32],"theme":[32]}]]],["searchcraft-base-search-result",[[1,"searchcraft-base-search-result",{"buttonText":[1,"button-text"],"customStyles":[1,"custom-styles"],"headingText":[1,"heading-text"],"imageDescription":[1,"image-description"],"imageSource":[1,"image-source"],"isInteractive":[4,"is-interactive"],"primaryContent":[1,"primary-content"],"secondaryContent":[1,"secondary-content"],"subheadingText":[1,"subheading-text"],"tertiaryContent":[1,"tertiary-content"],"themeMode":[1,"theme-mode"],"placeImageRight":[4,"place-image-right"]}]]],["searchcraft-check-icon",[[1,"searchcraft-check-icon"]]],["searchcraft-input-icon",[[1,"searchcraft-input-icon",{"error":[4],"height":[2],"rightToLeftOrientation":[4,"right-to-left-orientation"],"width":[2],"theme":[32]}]]],["searchcraft-input-caption",[[1,"searchcraft-input-caption",{"error":[4],"inputCaptionClassName":[1,"input-caption-class-name"],"inputCaptionValue":[1,"input-caption-value"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"theme":[32]}]]],["searchcraft-clear-icon-set",[[1,"searchcraft-clear-icon-set",{"type":[1]}]]],["searchcraft-search-icon-set",[[1,"searchcraft-search-icon-set",{"type":[1],"width":[2],"height":[2]}]]],["searchcraft-spinner-dark",[[1,"searchcraft-spinner-dark"]]],["searchcraft-input",[[1,"searchcraft-input",{"customStyles":[1,"custom-styles"],"error":[4],"formClassName":[1,"form-class-name"],"inputCaptionClassName":[1,"input-caption-class-name"],"inputCaptionValue":[1,"input-caption-value"],"inputClassName":[1,"input-class-name"],"inputIconHeight":[2,"input-icon-height"],"inputIconWidth":[2,"input-icon-width"],"isRequesting":[4,"is-requesting"],"placeholderValue":[1,"placeholder-value"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"query":[1],"theme":[32]}]]],["searchcraft-input-label",[[1,"searchcraft-input-label",{"inputLabelClassName":[1,"input-label-class-name"],"label":[1],"theme":[32]}]]],["searchcraft-spinner-light",[[1,"searchcraft-spinner-light"]]],["searchcraft-clear-input-button",[[1,"searchcraft-clear-input-button",{"isRequesting":[4,"is-requesting"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"theme":[32]}]]],["searchcraft-error-message",[[1,"searchcraft-error-message",{"errorMessage":[1,"error-message"],"theme":[1]}]]]], options);
});

//# sourceMappingURL=searchcraft-javascript-sdk.esm.js.map