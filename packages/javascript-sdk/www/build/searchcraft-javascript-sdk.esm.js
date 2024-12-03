import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-b2fefddc.js';
export { s as setNonce } from './index-b2fefddc.js';
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
  return bootstrapLazy([["sc-base-search-form",[[1,"sc-base-search-form",{"config":[16],"errorMessage":[1,"error-message"],"labelForInput":[1,"label-for-input"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"error":[32],"query":[32],"searchResults":[32]}]]],["sc-auto-search-form",[[1,"sc-auto-search-form",{"autoSearchFormClass":[1,"auto-search-form-class"],"clearInput":[16],"config":[16],"inputCaptionValue":[1,"input-caption-value"],"labelForInput":[1,"label-for-input"],"placeholderValue":[1,"placeholder-value"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"searchContainerClass":[1,"search-container-class"],"error":[32],"query":[32],"searchResults":[32]}]]],["sc-button",[[1,"sc-button",{"iconElement":[16],"iconOnly":[4,"icon-only"],"iconPosition":[1,"icon-position"],"label":[1],"isRequesting":[32],"theme":[32]}]]],["sc-base-search-result",[[1,"sc-base-search-result",{"buttonCallbackFn":[16],"buttonLabel":[1,"button-label"],"callbackFn":[16],"imageAltText":[1,"image-alt-text"],"imageSrc":[1,"image-src"],"interactiveResult":[4,"interactive-result"],"keyDownCallbackFn":[16],"resultBodyContent":[1,"result-body-content"],"resultHeading":[1,"result-heading"],"resultSubheading":[1,"result-subheading"],"theme":[1]}]]],["sc-base-search-results",[[1,"sc-base-search-results",{"query":[32],"searchResults":[32]}]]],["sc-spinner-light",[[1,"sc-spinner-light"]]],["sc-input-label",[[1,"sc-input-label",{"inputLabelClassName":[1,"input-label-class-name"],"label":[1],"theme":[32]}]]],["sc-input",[[1,"sc-input",{"error":[4],"formClassName":[1,"form-class-name"],"inputCaptionClassName":[1,"input-caption-class-name"],"inputCaptionValue":[1,"input-caption-value"],"inputClassName":[1,"input-class-name"],"placeholderValue":[1,"placeholder-value"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"query":[1],"theme":[32]}]]],["sc-error-message",[[1,"sc-error-message",{"errorMessage":[1,"error-message"],"theme":[1]}]]],["sc-spinner-dark",[[1,"sc-spinner-dark"]]],["sc-clear-input-button",[[1,"sc-clear-input-button",{"isRequesting":[4,"is-requesting"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"theme":[32]}]]],["sc-input-caption",[[1,"sc-input-caption",{"error":[4],"inputCaptionClassName":[1,"input-caption-class-name"],"inputCaptionValue":[1,"input-caption-value"],"rightToLeftOrientation":[4,"right-to-left-orientation"],"theme":[32]}]]],["sc-input-icon",[[1,"sc-input-icon",{"error":[4],"rightToLeftOrientation":[4,"right-to-left-orientation"],"theme":[32]}]]]], options);
});

//# sourceMappingURL=searchcraft-javascript-sdk.esm.js.map