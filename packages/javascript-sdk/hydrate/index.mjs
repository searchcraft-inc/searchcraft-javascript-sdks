import { Readable } from 'stream';

const modeResolutionChain = [];

function hydrateFactory($stencilWindow, $stencilHydrateOpts, $stencilHydrateResults, $stencilAfterHydrate, $stencilHydrateResolve) {
  var globalThis = $stencilWindow;
  var self = $stencilWindow;
  var top = $stencilWindow;
  var parent = $stencilWindow;

  var addEventListener = $stencilWindow.addEventListener.bind($stencilWindow);
  var alert = $stencilWindow.alert.bind($stencilWindow);
  var blur = $stencilWindow.blur.bind($stencilWindow);
  var cancelAnimationFrame = $stencilWindow.cancelAnimationFrame.bind($stencilWindow);
  var cancelIdleCallback = $stencilWindow.cancelIdleCallback.bind($stencilWindow);
  var clearInterval = $stencilWindow.clearInterval.bind($stencilWindow);
  var clearTimeout = $stencilWindow.clearTimeout.bind($stencilWindow);
  var close = () => {};
  var confirm = $stencilWindow.confirm.bind($stencilWindow);
  var dispatchEvent = $stencilWindow.dispatchEvent.bind($stencilWindow);
  var focus = $stencilWindow.focus.bind($stencilWindow);
  var getComputedStyle = $stencilWindow.getComputedStyle.bind($stencilWindow);
  var matchMedia = $stencilWindow.matchMedia.bind($stencilWindow);
  var open = $stencilWindow.open.bind($stencilWindow);
  var prompt = $stencilWindow.prompt.bind($stencilWindow);
  var removeEventListener = $stencilWindow.removeEventListener.bind($stencilWindow);
  var requestAnimationFrame = $stencilWindow.requestAnimationFrame.bind($stencilWindow);
  var requestIdleCallback = $stencilWindow.requestIdleCallback.bind($stencilWindow);
  var setInterval = $stencilWindow.setInterval.bind($stencilWindow);
  var setTimeout = $stencilWindow.setTimeout.bind($stencilWindow);

  var CharacterData = $stencilWindow.CharacterData;
  var CSS = $stencilWindow.CSS;
  var CustomEvent = $stencilWindow.CustomEvent;
  var Document = $stencilWindow.Document;
  var ShadowRoot = $stencilWindow.ShadowRoot;
  var DocumentFragment = $stencilWindow.DocumentFragment;
  var DocumentType = $stencilWindow.DocumentType;
  var DOMTokenList = $stencilWindow.DOMTokenList;
  var Element = $stencilWindow.Element;
  var Event = $stencilWindow.Event;
  var HTMLAnchorElement = $stencilWindow.HTMLAnchorElement;
  var HTMLBaseElement = $stencilWindow.HTMLBaseElement;
  var HTMLButtonElement = $stencilWindow.HTMLButtonElement;
  var HTMLCanvasElement = $stencilWindow.HTMLCanvasElement;
  var HTMLElement = $stencilWindow.HTMLElement;
  var HTMLFormElement = $stencilWindow.HTMLFormElement;
  var HTMLImageElement = $stencilWindow.HTMLImageElement;
  var HTMLInputElement = $stencilWindow.HTMLInputElement;
  var HTMLLinkElement = $stencilWindow.HTMLLinkElement;
  var HTMLMetaElement = $stencilWindow.HTMLMetaElement;
  var HTMLScriptElement = $stencilWindow.HTMLScriptElement;
  var HTMLStyleElement = $stencilWindow.HTMLStyleElement;
  var HTMLTemplateElement = $stencilWindow.HTMLTemplateElement;
  var HTMLTitleElement = $stencilWindow.HTMLTitleElement;
  var IntersectionObserver = $stencilWindow.IntersectionObserver;
  var ResizeObserver = $stencilWindow.ResizeObserver;
  var KeyboardEvent = $stencilWindow.KeyboardEvent;
  var MouseEvent = $stencilWindow.MouseEvent;
  var Node = $stencilWindow.Node;
  var NodeList = $stencilWindow.NodeList;
  var URL = $stencilWindow.URL;

  var console = $stencilWindow.console;
  var customElements = $stencilWindow.customElements;
  var history = $stencilWindow.history;
  var localStorage = $stencilWindow.localStorage;
  var location = $stencilWindow.location;
  var navigator = $stencilWindow.navigator;
  var performance = $stencilWindow.performance;
  var sessionStorage = $stencilWindow.sessionStorage;

  var devicePixelRatio = $stencilWindow.devicePixelRatio;
  var innerHeight = $stencilWindow.innerHeight;
  var innerWidth = $stencilWindow.innerWidth;
  var origin = $stencilWindow.origin;
  var pageXOffset = $stencilWindow.pageXOffset;
  var pageYOffset = $stencilWindow.pageYOffset;
  var screen = $stencilWindow.screen;
  var screenLeft = $stencilWindow.screenLeft;
  var screenTop = $stencilWindow.screenTop;
  var screenX = $stencilWindow.screenX;
  var screenY = $stencilWindow.screenY;
  var scrollX = $stencilWindow.scrollX;
  var scrollY = $stencilWindow.scrollY;
  var exports = {};

  var fetch, FetchError, Headers, Request, Response;

  if (typeof $stencilWindow.fetch === 'function') {
    fetch = $stencilWindow.fetch;
  } else {
    fetch = $stencilWindow.fetch = function() { throw new Error('fetch() is not implemented'); };
  }

  if (typeof $stencilWindow.FetchError === 'function') {
    FetchError = $stencilWindow.FetchError;
  } else {
    FetchError = $stencilWindow.FetchError = class FetchError { constructor() { throw new Error('FetchError is not implemented'); } };
  }

  if (typeof $stencilWindow.Headers === 'function') {
    Headers = $stencilWindow.Headers;
  } else {
    Headers = $stencilWindow.Headers = class Headers { constructor() { throw new Error('Headers is not implemented'); } };
  }

  if (typeof $stencilWindow.Request === 'function') {
    Request = $stencilWindow.Request;
  } else {
    Request = $stencilWindow.Request = class Request { constructor() { throw new Error('Request is not implemented'); } };
  }

  if (typeof $stencilWindow.Response === 'function') {
    Response = $stencilWindow.Response;
  } else {
    Response = $stencilWindow.Response = class Response { constructor() { throw new Error('Response is not implemented'); } };
  }

  function hydrateAppClosure($stencilWindow) {
    const window = $stencilWindow;
    const document = $stencilWindow.document;
    /*hydrateAppClosure start*/


const NAMESPACE = 'searchcraft-javascript-sdk';
const BUILD = /* searchcraft-javascript-sdk */ { allRenderFn: true, appendChildSlotFix: false, asyncLoading: true, attachStyles: true, cloneNodeFix: false, cmpDidLoad: true, cmpDidRender: false, cmpDidUnload: false, cmpDidUpdate: false, cmpShouldUpdate: false, cmpWillLoad: false, cmpWillRender: false, cmpWillUpdate: false, connectedCallback: true, constructableCSS: false, cssAnnotations: true, devTools: false, disconnectedCallback: true, element: false, event: true, experimentalScopedSlotChanges: false, experimentalSlotFixes: false, formAssociated: false, hasRenderFn: true, hostListener: false, hostListenerTarget: false, hostListenerTargetBody: false, hostListenerTargetDocument: false, hostListenerTargetParent: false, hostListenerTargetWindow: false, hotModuleReplacement: false, hydrateClientSide: true, hydrateServerSide: true, hydratedAttribute: false, hydratedClass: true, hydratedSelectorName: "hydrated", invisiblePrehydration: true, isDebug: false, isDev: false, isTesting: false, lazyLoad: true, lifecycle: true, lifecycleDOMEvents: false, member: true, method: false, mode: false, modernPropertyDecls: true, observeAttribute: true, profile: false, prop: true, propBoolean: true, propMutable: false, propNumber: true, propString: true, reflect: false, scoped: false, scopedSlotTextContentFix: false, scriptDataOpts: false, shadowDelegatesFocus: false, shadowDom: false, shadowDomShim: true, slot: true, slotChildNodesFix: false, slotRelocation: true, state: true, style: false, svg: true, taskQueue: true, updatable: true, vdomAttribute: true, vdomClass: true, vdomFunctional: true, vdomKey: true, vdomListener: true, vdomPropOrAttr: true, vdomRef: false, vdomRender: true, vdomStyle: true, vdomText: true, vdomXlink: false, watchCallback: true };

/*
 Stencil Hydrate Platform v4.25.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/es2022-rewire-class-members.ts
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if ((memberFlags & 31 /* Prop */ || memberFlags & 32 /* State */)) {
      const ogValue = instance[memberName];
      const ogDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), memberName);
      Object.defineProperty(instance, memberName, {
        get() {
          return ogDescriptor.get.call(this);
        },
        set(newValue) {
          ogDescriptor.set.call(this, newValue);
        },
        configurable: true,
        enumerable: true
      });
      instance[memberName] = hostRef.$instanceValues$.has(memberName) ? hostRef.$instanceValues$.get(memberName) : ogValue;
    }
  });
};
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATE_CHILD_ID = "c-id";
var STENCIL_DOC_DATA = "_stencilDocData";
var DEFAULT_DOC_DATA = {
  hostIds: 0,
  rootLevelIds: 0,
  staticComponents: /* @__PURE__ */ new Set()
};

// src/runtime/slot-polyfill-utils.ts
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.__childNodes || elm.childNodes;
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      var _a;
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if ((_a = getHostSlotChildNodes(slotNode, slotNode["s-sn"], false)) == null ? void 0 : _a.length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1 /* ElementNode */ && (childNode.__childNodes || childNode.childNodes).length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && childNode["s-hn"] === hostName && (slotName === void 0 || childNode["s-sn"] === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getHostSlotChildNodes = (node, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && node["s-sr"] || !node["s-sr"]) childNodes.push(node);
  while ((node = node.nextSibling) && node["s-sn"] === slotName) {
    childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var addSlotRelocateNode = (newChild, slotNode, prepend, position) => {
  let slottedNodeLocation;
  if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
    slottedNodeLocation = newChild["s-ol"];
  } else {
    slottedNodeLocation = document.createTextNode("");
    slottedNodeLocation["s-nr"] = newChild;
  }
  if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
  const parent = slotNode["s-cr"].parentNode;
  const appendMethod = prepend ? parent.__prepend || parent.prepend : parent.__appendChild || parent.appendChild;
  if (typeof position !== "undefined") {
    {
      slottedNodeLocation["s-oo"] = position;
      const childNodes = parent.__childNodes || parent.childNodes;
      const slotRelocateNodes = [slottedNodeLocation];
      childNodes.forEach((n) => {
        if (n["s-nr"]) slotRelocateNodes.push(n);
      });
      slotRelocateNodes.sort((a, b) => {
        if (!a["s-oo"] || a["s-oo"] < b["s-oo"]) return -1;
        else if (!b["s-oo"] || b["s-oo"] < a["s-oo"]) return 1;
        return 0;
      });
      slotRelocateNodes.forEach((n) => appendMethod.call(parent, n));
    }
  } else {
    appendMethod.call(parent, slottedNodeLocation);
  }
  newChild["s-ol"] = slottedNodeLocation;
  newChild["s-sh"] = slotNode["s-hn"];
};
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var h$1 = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h$1(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const slottedNodes = [];
  const shadowRootNodes = null;
  const vnode = newVNode(tagName, null);
  vnode.$elm$ = hostElm;
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  hostRef.$vnode$ = clientHydrate(
    vnode,
    childRenderNodes,
    slotNodes,
    shadowRootNodes,
    hostElm,
    hostElm,
    hostId,
    slottedNodes
  );
  let crIndex = 0;
  const crLength = childRenderNodes.length;
  let childRenderNode;
  for (crIndex; crIndex < crLength; crIndex++) {
    childRenderNode = childRenderNodes[crIndex];
    const orgLocationId = childRenderNode.$hostId$ + "." + childRenderNode.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = childRenderNode.$elm$;
    if (!shadowRoot) {
      node["s-hn"] = tagName.toUpperCase();
      if (childRenderNode.$tag$ === "slot") {
        node["s-cr"] = hostElm["s-cr"];
      }
    }
    if (childRenderNode.$tag$ === "slot") {
      if (childRenderNode.$children$) {
        childRenderNode.$flags$ |= 2 /* isSlotFallback */;
        if (!childRenderNode.$elm$.childNodes.length) {
          childRenderNode.$children$.forEach((c) => {
            childRenderNode.$elm$.appendChild(c.$elm$);
          });
        }
      } else {
        childRenderNode.$flags$ |= 1 /* isSlotReference */;
      }
    }
    if (orgLocationNode && orgLocationNode.isConnected) {
      if (shadowRoot && orgLocationNode["s-en"] === "") {
        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
      }
      orgLocationNode.parentNode.removeChild(orgLocationNode);
      if (!shadowRoot) {
        node["s-oo"] = parseInt(childRenderNode.$nodeId$);
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  }
  const hosts = [];
  const snLen = slottedNodes.length;
  let snIndex = 0;
  let slotGroup;
  let snGroupIdx;
  let snGroupLen;
  let slottedItem;
  for (snIndex; snIndex < snLen; snIndex++) {
    slotGroup = slottedNodes[snIndex];
    if (!slotGroup || !slotGroup.length) continue;
    snGroupLen = slotGroup.length;
    snGroupIdx = 0;
    for (snGroupIdx; snGroupIdx < snGroupLen; snGroupIdx++) {
      slottedItem = slotGroup[snGroupIdx];
      if (!hosts[slottedItem.hostId]) {
        hosts[slottedItem.hostId] = plt.$orgLocNodes$.get(slottedItem.hostId);
      }
      if (!hosts[slottedItem.hostId]) continue;
      const hostEle = hosts[slottedItem.hostId];
      if (!hostEle.shadowRoot || !shadowRoot) {
        slottedItem.slot["s-cr"] = hostEle["s-cr"];
        if (!slottedItem.slot["s-cr"] && hostEle.shadowRoot) {
          slottedItem.slot["s-cr"] = hostEle;
        } else {
          slottedItem.slot["s-cr"] = (hostEle.__childNodes || hostEle.childNodes)[0];
        }
        addSlotRelocateNode(slottedItem.node, slottedItem.slot, false, slottedItem.node["s-oo"]);
      }
      if (hostEle.shadowRoot && slottedItem.node.parentElement !== hostEle) {
        hostEle.appendChild(slottedItem.node);
      }
    }
  }
  hostRef.$hostElement$ = hostElm;
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId, slottedNodes = []) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  if (node.nodeType === 1 /* ElementNode */) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = createSimpleVNode({
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          // If we don't add the initial classes to the VNode, the first `vdom-render.ts` patch
          // won't try to reconcile them. Classes set on the node will be blown away.
          $attrs$: { class: node.className || "" }
        });
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        const slotName = childVNode.$elm$.getAttribute("s-sn");
        if (typeof slotName === "string") {
          if (childVNode.$tag$ === "slot-fb") {
            addSlot(
              slotName,
              childIdSplt[2],
              childVNode,
              node,
              parentVNode,
              childRenderNodes,
              slotNodes,
              shadowRootNodes,
              slottedNodes
            );
          }
          childVNode.$elm$["s-sn"] = slotName;
          childVNode.$elm$.removeAttribute("s-sn");
        }
        if (childVNode.$index$ !== void 0) {
          parentVNode.$children$[childVNode.$index$] = childVNode;
        }
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(
          parentVNode,
          childRenderNodes,
          slotNodes,
          shadowRootNodes,
          hostElm,
          node.shadowRoot.childNodes[i2],
          hostId,
          slottedNodes
        );
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = nonShadowNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(
        parentVNode,
        childRenderNodes,
        slotNodes,
        shadowRootNodes,
        hostElm,
        nonShadowNodes[i2],
        hostId,
        slottedNodes
      );
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = createSimpleVNode({
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4] || "0",
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      });
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (hostId === childVNode.$hostId$) {
            if (!parentVNode.$children$) {
              parentVNode.$children$ = [];
            }
            parentVNode.$children$[childVNode.$index$] = childVNode;
          }
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childNodeType === COMMENT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 8 /* CommentNode */) {
          childRenderNodes.push(childVNode);
          node.remove();
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          const slotName = node["s-sn"] = childIdSplt[5] || "";
          addSlot(
            slotName,
            childIdSplt[2],
            childVNode,
            node,
            parentVNode,
            childRenderNodes,
            slotNodes,
            shadowRootNodes,
            slottedNodes
          );
        } else if (childNodeType === CONTENT_REF_ID) {
          {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
  return parentVNode;
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1 /* ElementNode */) {
    const componentId = node[HYDRATE_ID] || node.getAttribute(HYDRATE_ID);
    if (componentId) {
      orgLocNodes.set(componentId, node);
    }
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = 0; i2 < nonShadowNodes.length; i2++) {
      initializeDocumentHydrate(nonShadowNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var createSimpleVNode = (vnode) => {
  const defaultVNode = {
    $flags$: 0,
    $hostId$: null,
    $nodeId$: null,
    $depth$: null,
    $index$: "0",
    $elm$: null,
    $attrs$: null,
    $children$: null,
    $key$: null,
    $name$: null,
    $tag$: null,
    $text$: null
  };
  return { ...defaultVNode, ...vnode };
};
function addSlot(slotName, slotId, childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes) {
  node["s-sr"] = true;
  childVNode.$name$ = slotName || null;
  childVNode.$tag$ = "slot";
  const parentNodeId = (parentVNode == null ? void 0 : parentVNode.$elm$) ? parentVNode.$elm$["s-id"] || parentVNode.$elm$.getAttribute("s-id") : "";
  {
    const slot = childVNode.$elm$;
    const shouldMove = parentNodeId && parentNodeId !== childVNode.$hostId$ && parentVNode.$elm$.shadowRoot;
    addSlottedNodes(slottedNodes, slotId, slotName, node, shouldMove ? parentNodeId : childVNode.$hostId$);
    if (shouldMove) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    }
    childRenderNodes.push(childVNode);
  }
  slotNodes.push(childVNode);
  if (!parentVNode.$children$) {
    parentVNode.$children$ = [];
  }
  parentVNode.$children$[childVNode.$index$] = childVNode;
}
var addSlottedNodes = (slottedNodes, slotNodeId, slotName, slotNode, hostId) => {
  let slottedNode = slotNode.nextSibling;
  slottedNodes[slotNodeId] = slottedNodes[slotNodeId] || [];
  while (slottedNode && ((slottedNode["getAttribute"] && slottedNode.getAttribute("slot") || slottedNode["s-sn"]) === slotName || slotName === "" && !slottedNode["s-sn"] && (slottedNode.nodeType === 8 /* CommentNode */ && slottedNode.nodeValue.indexOf(".") !== 1 || slottedNode.nodeType === 3 /* TextNode */))) {
    slottedNode["s-sn"] = slotName;
    slottedNodes[slotNodeId].push({ slot: slotNode, node: slottedNode, hostId });
    slottedNode = slottedNode.nextSibling;
  }
};
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2 /* Number */) {
      return parseFloat(propValue);
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => getHostRef(ref).$hostElement$ ;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      let newClasses = parseClassList(newValue);
      if (elm["s-si"]) {
        newClasses.push(elm["s-si"]);
        oldClasses.forEach((c) => {
          if (c.startsWith(elm["s-si"])) newClasses.push(c);
        });
        newClasses = [...new Set(newClasses)];
        classList.add(...newClasses);
        delete elm["s-si"];
      } else {
        classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
        classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
      }
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key") ; else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              if (typeof elm.__lookupSetter__(memberName) === "function") {
                elm[memberName] = n;
              } else {
                elm.setAttribute(memberName, n);
              }
            }
          } else if (elm[memberName] !== newValue) {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value) {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = slotReferenceDebugNode(newVNode2) ;
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  if (parentElm["s-sr"] && BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) ; else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!BUILD.experimentalSlotFixes  )) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var insertBefore = (parent, newNode, reference) => {
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _c, _d;
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h$1(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm;
  useNativeShadowDom = supportsShadow ;
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          const orgLocationNode = originalLocationDebugNode(nodeToRelocate) ;
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](nodeToRelocate);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};
var slotReferenceDebugNode = (slotVNode) => doc.createComment(
  `<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ""}> (host=${hostTagName.toLowerCase()})`
);
var originalLocationDebugNode = (nodeToRelocate) => doc.createComment(
  `org-location for ` + (nodeToRelocate.localName ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate["s-hn"]})` : `[${nodeToRelocate.textContent}]`)
);

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    await callRender(hostRef, instance, elm, isInitialLoad);
  }
  {
    try {
      serverSideConnected(elm);
      if (isInitialLoad) {
        if (hostRef.$cmpMeta$.$flags$ & 1 /* shadowDomEncapsulation */) {
          elm["s-en"] = "";
        } else if (hostRef.$cmpMeta$.$flags$ & 2 /* scopedCssEncapsulation */) {
          elm["s-en"] = "c";
        }
      }
    } catch (e) {
      consoleError(e, elm);
    }
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          return Promise.resolve(instance).then((value) => renderVdom(hostRef, value, isInitialLoad));
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad", void 0, elm);
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    endPostUpdate();
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
  }
};
var appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};
var serverSideConnected = (elm) => {
  const children = elm.children;
  if (children != null) {
    for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
      const childElm = children[i2];
      if (typeof childElm.connectedCallback === "function") {
        childElm.connectedCallback();
      }
      serverSideConnected(childElm);
    }
  }
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [parsePropertyValue(newValue, memberFlags)]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(newValue, memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    {
      const CstrImport = loadModule(cmpMeta);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= ~8 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (!hostId) {
        {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;

// src/runtime/vdom/vdom-annotations.ts
var insertVdomAnnotations = (doc2, staticComponents) => {
  if (doc2 != null) {
    const docData = STENCIL_DOC_DATA in doc2 ? doc2[STENCIL_DOC_DATA] : { ...DEFAULT_DOC_DATA };
    docData.staticComponents = new Set(staticComponents);
    const orgLocationNodes = [];
    parseVNodeAnnotations(doc2, doc2.body, docData, orgLocationNodes);
    orgLocationNodes.forEach((orgLocationNode) => {
      var _a;
      if (orgLocationNode != null && orgLocationNode["s-nr"]) {
        const nodeRef = orgLocationNode["s-nr"];
        let hostId = nodeRef["s-host-id"];
        let nodeId = nodeRef["s-node-id"];
        let childId = `${hostId}.${nodeId}`;
        if (hostId == null) {
          hostId = 0;
          docData.rootLevelIds++;
          nodeId = docData.rootLevelIds;
          childId = `${hostId}.${nodeId}`;
          if (nodeRef.nodeType === 1 /* ElementNode */) {
            nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
            if (typeof nodeRef["s-sn"] === "string" && !nodeRef.getAttribute("slot")) {
              nodeRef.setAttribute("s-sn", nodeRef["s-sn"]);
            }
          } else if (nodeRef.nodeType === 3 /* TextNode */) {
            if (hostId === 0) {
              const textContent = (_a = nodeRef.nodeValue) == null ? void 0 : _a.trim();
              if (textContent === "") {
                orgLocationNode.remove();
                return;
              }
            }
            const commentBeforeTextNode = doc2.createComment(childId);
            commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
            insertBefore(nodeRef.parentNode, commentBeforeTextNode, nodeRef);
          } else if (nodeRef.nodeType === 8 /* CommentNode */) {
            const commentBeforeTextNode = doc2.createComment(childId);
            commentBeforeTextNode.nodeValue = `${COMMENT_NODE_ID}.${childId}`;
            nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
          }
        }
        let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
        const orgLocationParentNode = orgLocationNode.parentElement;
        if (orgLocationParentNode) {
          if (orgLocationParentNode["s-en"] === "") {
            orgLocationNodeId += `.`;
          } else if (orgLocationParentNode["s-en"] === "c") {
            orgLocationNodeId += `.c`;
          }
        }
        orgLocationNode.nodeValue = orgLocationNodeId;
      }
    });
  }
};
var parseVNodeAnnotations = (doc2, node, docData, orgLocationNodes) => {
  var _a;
  if (node == null) {
    return;
  }
  if (node["s-nr"] != null) {
    orgLocationNodes.push(node);
  }
  if (node.nodeType === 1 /* ElementNode */) {
    const childNodes = [...Array.from(node.childNodes), ...Array.from(((_a = node.shadowRoot) == null ? void 0 : _a.childNodes) || [])];
    childNodes.forEach((childNode) => {
      const hostRef = getHostRef(childNode);
      if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
        const cmpData = {
          nodeIds: 0
        };
        insertVNodeAnnotations(doc2, childNode, hostRef.$vnode$, docData, cmpData);
      }
      parseVNodeAnnotations(doc2, childNode, docData, orgLocationNodes);
    });
  }
};
var insertVNodeAnnotations = (doc2, hostElm, vnode, docData, cmpData) => {
  if (vnode != null) {
    const hostId = ++docData.hostIds;
    hostElm.setAttribute(HYDRATE_ID, hostId);
    if (hostElm["s-cr"] != null) {
      hostElm["s-cr"].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
    }
    if (vnode.$children$ != null) {
      const depth = 0;
      vnode.$children$.forEach((vnodeChild, index) => {
        insertChildVNodeAnnotations(doc2, vnodeChild, cmpData, hostId, depth, index);
      });
    }
    if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute(HYDRATE_CHILD_ID)) {
      const parent = hostElm.parentElement;
      if (parent && parent.childNodes) {
        const parentChildNodes = Array.from(parent.childNodes);
        const comment = parentChildNodes.find(
          (node) => node.nodeType === 8 /* CommentNode */ && node["s-sr"]
        );
        if (comment) {
          const index = parentChildNodes.indexOf(hostElm) - 1;
          vnode.$elm$.setAttribute(
            HYDRATE_CHILD_ID,
            `${comment["s-host-id"]}.${comment["s-node-id"]}.0.${index}`
          );
        }
      }
    }
  }
};
var insertChildVNodeAnnotations = (doc2, vnodeChild, cmpData, hostId, depth, index) => {
  const childElm = vnodeChild.$elm$;
  if (childElm == null) {
    return;
  }
  const nodeId = cmpData.nodeIds++;
  const childId = `${hostId}.${nodeId}.${depth}.${index}`;
  childElm["s-host-id"] = hostId;
  childElm["s-node-id"] = nodeId;
  if (childElm.nodeType === 1 /* ElementNode */) {
    childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    if (typeof childElm["s-sn"] === "string" && !childElm.getAttribute("slot")) {
      childElm.setAttribute("s-sn", childElm["s-sn"]);
    }
  } else if (childElm.nodeType === 3 /* TextNode */) {
    const parentNode = childElm.parentNode;
    const nodeName = parentNode == null ? void 0 : parentNode.nodeName;
    if (nodeName !== "STYLE" && nodeName !== "SCRIPT") {
      const textNodeId = `${TEXT_NODE_ID}.${childId}`;
      const commentBeforeTextNode = doc2.createComment(textNodeId);
      insertBefore(parentNode, commentBeforeTextNode, childElm);
    }
  } else if (childElm.nodeType === 8 /* CommentNode */) {
    if (childElm["s-sr"]) {
      const slotName = childElm["s-sn"] || "";
      const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
      childElm.nodeValue = slotNodeId;
    }
  }
  if (vnodeChild.$children$ != null) {
    const childDepth = depth + 1;
    vnodeChild.$children$.forEach((vnode, index2) => {
      insertChildVNodeAnnotations(doc2, vnode, cmpData, hostId, childDepth, index2);
    });
  }
};

// src/hydrate/platform/h-async.ts
var hAsync = (nodeName, vnodeData, ...children) => {
  if (Array.isArray(children) && children.length > 0) {
    const flatChildren = children.flat(Infinity);
    if (flatChildren.some((child) => child instanceof Promise)) {
      return Promise.all(flatChildren).then((resolvedChildren) => {
        return h$1(nodeName, vnodeData, ...resolvedChildren);
      }).catch((err2) => {
        return h$1(nodeName, vnodeData);
      });
    }
    return h$1(nodeName, vnodeData, ...flatChildren);
  }
  return h$1(nodeName, vnodeData);
};
function proxyHostElement(elm, cstr) {
  const cmpMeta = cstr.cmpMeta;
  if (typeof elm.componentOnReady !== "function") {
    elm.componentOnReady = componentOnReady;
  }
  if (typeof elm.forceUpdate !== "function") {
    elm.forceUpdate = forceUpdate2;
  }
  if (!elm.shadowRoot && !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
    {
      elm.attachShadow({ mode: "open" });
    }
  }
  if (cmpMeta.$members$ != null) {
    const hostRef = getHostRef(elm);
    const members = Object.entries(cmpMeta.$members$);
    members.forEach(([memberName, [memberFlags, metaAttributeName]]) => {
      var _a;
      if (memberFlags & 31 /* Prop */) {
        const attributeName = metaAttributeName || memberName;
        let attrValue = elm.getAttribute(attributeName);
        if ((attrValue == null ? void 0 : attrValue.startsWith("{")) && attrValue.endsWith("}") || (attrValue == null ? void 0 : attrValue.startsWith("[")) && attrValue.endsWith("]")) {
          try {
            attrValue = JSON.parse(attrValue);
          } catch (e) {
          }
        }
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(cstr.prototype, memberName) || {};
        let attrPropVal;
        if (attrValue != null) {
          attrPropVal = parsePropertyValue(attrValue, memberFlags);
        }
        const ownValue = elm[memberName];
        if (ownValue !== void 0) {
          attrPropVal = ownValue;
          delete elm[memberName];
        }
        if (attrPropVal !== void 0) {
          if (origSetter) {
            origSetter.apply(elm, [attrPropVal]);
            attrPropVal = origGetter ? origGetter.apply(elm) : attrPropVal;
          }
          (_a = hostRef == null ? void 0 : hostRef.$instanceValues$) == null ? void 0 : _a.set(memberName, attrPropVal);
        }
        Object.defineProperty(elm, memberName, {
          get: function() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
        Object.defineProperty(cstr.prototype, memberName, {
          get: function() {
            if (origGetter && attrPropVal === void 0 && !getValue(this, memberName)) {
              setValue(this, memberName, origGetter.apply(this), cmpMeta);
            }
            return attrPropVal !== void 0 ? attrPropVal : origGetter ? origGetter.apply(this) : getValue(this, memberName);
          },
          configurable: true,
          enumerable: true
        });
      } else if (memberFlags & 64 /* Method */) {
        Object.defineProperty(elm, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref == null ? void 0 : ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            }).catch((e) => {
              consoleError(e, this);
            });
          }
        });
      }
    });
  }
}
function componentOnReady() {
  var _a;
  return (_a = getHostRef(this)) == null ? void 0 : _a.$onReadyPromise$;
}
function forceUpdate2() {
}

// src/hydrate/platform/hydrate-app.ts
function hydrateApp(win2, opts, results, afterHydrate, resolve) {
  const connectedElements = /* @__PURE__ */ new Set();
  const createdElements = /* @__PURE__ */ new Set();
  const waitingElements = /* @__PURE__ */ new Set();
  const orgDocumentCreateElement = win2.document.createElement;
  const orgDocumentCreateElementNS = win2.document.createElementNS;
  const resolved2 = Promise.resolve();
  let tmrId;
  let ranCompleted = false;
  function hydratedComplete() {
    globalThis.clearTimeout(tmrId);
    createdElements.clear();
    connectedElements.clear();
    if (!ranCompleted) {
      ranCompleted = true;
      try {
        if (opts.clientHydrateAnnotations) {
          insertVdomAnnotations(win2.document, opts.staticComponents);
        }
        win2.dispatchEvent(new win2.Event("DOMContentLoaded"));
        win2.document.createElement = orgDocumentCreateElement;
        win2.document.createElementNS = orgDocumentCreateElementNS;
      } catch (e) {
        renderCatchError(opts, results, e);
      }
    }
    afterHydrate(win2, opts, results, resolve);
  }
  function hydratedError(err2) {
    renderCatchError(opts, results, err2);
    hydratedComplete();
  }
  function timeoutExceeded() {
    hydratedError(`Hydrate exceeded timeout${waitingOnElementsMsg(waitingElements)}`);
  }
  try {
    let patchedConnectedCallback2 = function() {
      return connectElement2(this);
    }, patchElement2 = function(elm) {
      if (isValidComponent(elm, opts)) {
        const hostRef = getHostRef(elm);
        if (!hostRef) {
          const Cstr = loadModule(
            {
              $tagName$: elm.nodeName.toLowerCase(),
              $flags$: null
            });
          if (Cstr != null && Cstr.cmpMeta != null) {
            createdElements.add(elm);
            elm.connectedCallback = patchedConnectedCallback2;
            registerHost(elm, Cstr.cmpMeta);
            proxyHostElement(elm, Cstr);
          }
        }
      }
    }, patchChild2 = function(elm) {
      if (elm != null && elm.nodeType === 1) {
        patchElement2(elm);
        const children = elm.children;
        for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
          patchChild2(children[i2]);
        }
      }
    }, connectElement2 = function(elm) {
      createdElements.delete(elm);
      if (isValidComponent(elm, opts) && results.hydratedCount < opts.maxHydrateCount) {
        if (!connectedElements.has(elm) && shouldHydrate(elm)) {
          connectedElements.add(elm);
          return hydrateComponent.call(elm, win2, results, elm.nodeName, elm, waitingElements);
        }
      }
      return resolved2;
    }, waitLoop2 = function() {
      const toConnect = Array.from(createdElements).filter((elm) => elm.parentElement);
      if (toConnect.length > 0) {
        return Promise.all(toConnect.map(connectElement2)).then(waitLoop2);
      }
      return resolved2;
    };
    win2.document.createElement = function patchedCreateElement(tagName) {
      const elm = orgDocumentCreateElement.call(win2.document, tagName);
      patchElement2(elm);
      return elm;
    };
    win2.document.createElementNS = function patchedCreateElement(namespaceURI, tagName) {
      const elm = orgDocumentCreateElementNS.call(win2.document, namespaceURI, tagName);
      patchElement2(elm);
      return elm;
    };
    tmrId = globalThis.setTimeout(timeoutExceeded, opts.timeout);
    plt.$resourcesUrl$ = new URL(opts.resourcesUrl || "./", doc.baseURI).href;
    patchChild2(win2.document.body);
    waitLoop2().then(hydratedComplete).catch(hydratedError);
  } catch (e) {
    hydratedError(e);
  }
}
async function hydrateComponent(win2, results, tagName, elm, waitingElements) {
  tagName = tagName.toLowerCase();
  const Cstr = loadModule(
    {
      $tagName$: tagName,
      $flags$: null
    });
  if (Cstr != null) {
    const cmpMeta = Cstr.cmpMeta;
    if (cmpMeta != null) {
      waitingElements.add(elm);
      getHostRef(this);
      try {
        connectedCallback(elm);
        await elm.componentOnReady();
        results.hydratedCount++;
        const ref = getHostRef(elm);
        const modeName = !ref.$modeName$ ? "$" : ref.$modeName$;
        if (!results.components.some((c) => c.tag === tagName && c.mode === modeName)) {
          results.components.push({
            tag: tagName,
            mode: modeName,
            count: 0,
            depth: -1
          });
        }
      } catch (e) {
        win2.console.error(e);
      }
      waitingElements.delete(elm);
    }
  }
}
function isValidComponent(elm, opts) {
  if (elm != null && elm.nodeType === 1) {
    const tagName = elm.nodeName;
    if (typeof tagName === "string" && tagName.includes("-")) {
      if (opts.excludeComponents.includes(tagName.toLowerCase())) {
        return false;
      }
      return true;
    }
  }
  return false;
}
function shouldHydrate(elm) {
  if (elm.nodeType === 9) {
    return true;
  }
  if (NO_HYDRATE_TAGS.has(elm.nodeName)) {
    return false;
  }
  if (elm.hasAttribute("no-prerender")) {
    return false;
  }
  const parentNode = elm.parentNode;
  if (parentNode == null) {
    return true;
  }
  return shouldHydrate(parentNode);
}
var NO_HYDRATE_TAGS = /* @__PURE__ */ new Set([
  "CODE",
  "HEAD",
  "IFRAME",
  "INPUT",
  "OBJECT",
  "OUTPUT",
  "NOSCRIPT",
  "PRE",
  "SCRIPT",
  "SELECT",
  "STYLE",
  "TEMPLATE",
  "TEXTAREA"
]);
function renderCatchError(opts, results, err2) {
  const diagnostic = {
    level: "error",
    type: "build",
    header: "Hydrate Error",
    messageText: "",
    relFilePath: void 0,
    absFilePath: void 0,
    lines: []
  };
  if (opts.url) {
    try {
      const u = new URL(opts.url);
      if (u.pathname !== "/") {
        diagnostic.header += ": " + u.pathname;
      }
    } catch (e) {
    }
  }
  if (err2 != null) {
    if (err2.stack != null) {
      diagnostic.messageText = err2.stack.toString();
    } else if (err2.message != null) {
      diagnostic.messageText = err2.message.toString();
    } else {
      diagnostic.messageText = err2.toString();
    }
  }
  results.diagnostics.push(diagnostic);
}
function printTag(elm) {
  let tag = `<${elm.nodeName.toLowerCase()}`;
  if (Array.isArray(elm.attributes)) {
    for (let i2 = 0; i2 < elm.attributes.length; i2++) {
      const attr = elm.attributes[i2];
      tag += ` ${attr.name}`;
      if (attr.value !== "") {
        tag += `="${attr.value}"`;
      }
    }
  }
  tag += `>`;
  return tag;
}
function waitingOnElementMsg(waitingElement) {
  let msg = "";
  if (waitingElement) {
    const lines = [];
    msg = " - waiting on:";
    let elm = waitingElement;
    while (elm && elm.nodeType !== 9 && elm.nodeName !== "BODY") {
      lines.unshift(printTag(elm));
      elm = elm.parentElement;
    }
    let indent = "";
    for (const ln of lines) {
      indent += "  ";
      msg += `
${indent}${ln}`;
    }
  }
  return msg;
}
function waitingOnElementsMsg(waitingElements) {
  return Array.from(waitingElements).map(waitingOnElementMsg);
}
var cmpModules = /* @__PURE__ */ new Map();
var getModule = (tagName) => {
  if (typeof tagName === "string") {
    tagName = tagName.toLowerCase();
    const cmpModule = cmpModules.get(tagName);
    if (cmpModule != null) {
      return cmpModule[tagName];
    }
  }
  return null;
};
var loadModule = (cmpMeta, _hostRef, _hmrVersionId) => {
  return getModule(cmpMeta.$tagName$);
};
var isMemberInElement = (elm, memberName) => {
  if (elm != null) {
    if (memberName in elm) {
      return true;
    }
    const cstr = getModule(elm.nodeName);
    if (cstr != null) {
      const hostRef = cstr;
      if (hostRef != null && hostRef.cmpMeta != null && hostRef.cmpMeta.$members$ != null) {
        return memberName in hostRef.cmpMeta.$members$;
      }
    }
  }
  return false;
};
var registerComponents = (Cstrs) => {
  for (const Cstr of Cstrs) {
    const exportName = Cstr.cmpMeta.$tagName$;
    cmpModules.set(exportName, {
      [exportName]: Cstr
    });
  }
};
var win = window;
var doc = win.document;
var writeTask = (cb) => {
  nextTick(() => {
    try {
      cb();
    } catch (e) {
      consoleError(e);
    }
  });
};
var resolved = /* @__PURE__ */ Promise.resolve();
var nextTick = (cb) => resolved.then(cb);
var defaultConsoleError = (e) => {
  if (e != null) {
    console.error(e.stack || e.message || e);
  }
};
var consoleError = (e, el) => (defaultConsoleError)(e, el);
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new win.CustomEvent(eventName, opts)
};
var supportsShadow = BUILD.shadowDom;
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => {
  const ref = hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
  {
    reWireGetterSetter(lazyInstance, hostRef);
  }
  return ref;
};
var registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $cmpMeta$: cmpMeta,
    $hostElement$: elm,
    $instanceValues$: /* @__PURE__ */ new Map(),
    $renderCount$: 0
  };
  hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
  elm["s-p"] = [];
  elm["s-rc"] = [];
  return hostRefs.set(elm, hostRef);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var zustand = {};

var vanilla$1 = {};

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

vanilla$1.createStore = createStore;

var react$1 = {};

var react = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  assign = Object.assign,
  emptyObject = {};
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray,
  ReactSharedInternals = { H: null, A: null, T: null, S: null },
  hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, self, source, owner, props) {
  self = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== self ? self : null,
    props: props
  };
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(
    oldElement.type,
    newKey,
    void 0,
    void 0,
    void 0,
    oldElement.props
  );
}
function isValidElement(object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, function (match) {
      return escaperLookup[match];
    })
  );
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return "object" === typeof element && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function noop$1() {}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch (
        ("string" === typeof thenable.status
          ? thenable.then(noop$1, noop$1)
          : ((thenable.status = "pending"),
            thenable.then(
              function (fulfilledValue) {
                "pending" === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
              },
              function (error) {
                "pending" === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            )),
        thenable.status)
      ) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = !1;
  if (null === children) invokeCallback = !0;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = !0;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = !0;
            break;
          case REACT_LAZY_TYPE:
            return (
              (invokeCallback = children._init),
              mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              )
            );
        }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
          null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
            return c;
          }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (null == callback.key ||
                (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                      userProvidedKeyEscapeRegex,
                      "$&/"
                    ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if (((i = getIteratorFn(children)), "function" === typeof i))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === array
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (null == children) return children;
  var result = [],
    count = 0;
  mapIntoArray(children, result, "", "", function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
      function (moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 1), (payload._result = moduleObject);
      },
      function (error) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 2), (payload._result = error);
      }
    );
    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function noop() {}
react_production.Children = {
  map: mapChildren,
  forEach: function (children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function () {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function (children) {
    var n = 0;
    mapChildren(children, function () {
      n++;
    });
    return n;
  },
  toArray: function (children) {
    return (
      mapChildren(children, function (child) {
        return child;
      }) || []
    );
  },
  only: function (children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
react_production.Component = Component;
react_production.Fragment = REACT_FRAGMENT_TYPE;
react_production.Profiler = REACT_PROFILER_TYPE;
react_production.PureComponent = PureComponent;
react_production.StrictMode = REACT_STRICT_MODE_TYPE;
react_production.Suspense = REACT_SUSPENSE_TYPE;
react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  ReactSharedInternals;
react_production.act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production.cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
react_production.cloneElement = function (element, config, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign({}, element.props),
    key = element.key,
    owner = void 0;
  if (null != config)
    for (propName in (void 0 !== config.ref && (owner = void 0),
    void 0 !== config.key && (key = "" + config.key),
    config))
      !hasOwnProperty.call(config, propName) ||
        "key" === propName ||
        "__self" === propName ||
        "__source" === propName ||
        ("ref" === propName && void 0 === config.ref) ||
        (props[propName] = config[propName]);
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, void 0, void 0, owner, props);
};
react_production.createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
  };
  return defaultValue;
};
react_production.createElement = function (type, config, children) {
  var propName,
    props = {},
    key = null;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, void 0, void 0, null, props);
};
react_production.createRef = function () {
  return { current: null };
};
react_production.forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
react_production.isValidElement = isValidElement;
react_production.lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
react_production.memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
react_production.startTransition = function (scope) {
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  try {
    var returnValue = scope(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue &&
      null !== returnValue &&
      "function" === typeof returnValue.then &&
      returnValue.then(noop, reportGlobalError);
  } catch (error) {
    reportGlobalError(error);
  } finally {
    ReactSharedInternals.T = prevTransition;
  }
};
react_production.unstable_useCacheRefresh = function () {
  return ReactSharedInternals.H.useCacheRefresh();
};
react_production.use = function (usable) {
  return ReactSharedInternals.H.use(usable);
};
react_production.useActionState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
react_production.useCallback = function (callback, deps) {
  return ReactSharedInternals.H.useCallback(callback, deps);
};
react_production.useContext = function (Context) {
  return ReactSharedInternals.H.useContext(Context);
};
react_production.useDebugValue = function () {};
react_production.useDeferredValue = function (value, initialValue) {
  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
react_production.useEffect = function (create, deps) {
  return ReactSharedInternals.H.useEffect(create, deps);
};
react_production.useId = function () {
  return ReactSharedInternals.H.useId();
};
react_production.useImperativeHandle = function (ref, create, deps) {
  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
react_production.useInsertionEffect = function (create, deps) {
  return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
react_production.useLayoutEffect = function (create, deps) {
  return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
react_production.useMemo = function (create, deps) {
  return ReactSharedInternals.H.useMemo(create, deps);
};
react_production.useOptimistic = function (passthrough, reducer) {
  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
react_production.useReducer = function (reducer, initialArg, init) {
  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
react_production.useRef = function (initialValue) {
  return ReactSharedInternals.H.useRef(initialValue);
};
react_production.useState = function (initialState) {
  return ReactSharedInternals.H.useState(initialState);
};
react_production.useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactSharedInternals.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
react_production.useTransition = function () {
  return ReactSharedInternals.H.useTransition();
};
react_production.version = "19.0.0";

{
  react.exports = react_production;
}

var React = react.exports;
var vanilla = vanilla$1;

const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = vanilla.createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;

react$1.create = create;
react$1.useStore = useStore;

(function (exports) {

var vanilla = vanilla$1;
var react = react$1;



Object.keys(vanilla).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return vanilla[k]; }
	});
});
Object.keys(react).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return react[k]; }
	});
});
}(zustand));

var B = Object.defineProperty;
var q = (r, e, n) => e in r ? B(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var h = (r, e, n) => q(r, typeof e != "symbol" ? e + "" : e, n);
var P = /* @__PURE__ */ ((r) => (r[r.DEBUG = 0] = "DEBUG", r[r.INFO = 1] = "INFO", r[r.WARN = 2] = "WARN", r[r.ERROR = 3] = "ERROR", r))(P || {});
class ve {
  constructor(e) {
    h(this, "logLevel");
    h(this, "logFormatter");
    this.logLevel = e.logLevel || 1, this.logFormatter = e.logFormatter || this.defaultFormatter;
  }
  defaultFormatter(e, n) {
    return `[${P[e]}] ${( new Date()).toISOString()}: ${n}`;
  }
  debug(e) {
    this.logLevel <= 0 && console.log(this.logFormatter(0, e));
  }
  info(e) {
    this.logLevel <= 1 && console.info(this.logFormatter(1, e));
  }
  warn(e) {
    this.logLevel <= 2 && console.warn(this.logFormatter(2, e));
  }
  error(e) {
    this.logLevel <= 3 && console.error(this.logFormatter(3, e));
  }
  log(e, n) {
    switch (e) {
      case 0:
        this.debug(n);
        break;
      case 1:
        this.info(n);
        break;
      case 2:
        this.warn(n);
        break;
      case 3:
        this.error(n);
        break;
    }
  }
}
function w(r, e, n, o) {
  return new (n || (n = Promise))(function(i, a) {
    function t(c) {
      try {
        l(o.next(c));
      } catch (s) {
        a(s);
      }
    }
    function u(c) {
      try {
        l(o.throw(c));
      } catch (s) {
        a(s);
      }
    }
    function l(c) {
      var s;
      c.done ? i(c.value) : (s = c.value, s instanceof n ? s : new n(function(f) {
        f(s);
      })).then(t, u);
    }
    l((o = o.apply(r, [])).next());
  });
}
function y(r, e) {
  var n, o, i, a, t = { label: 0, sent: function() {
    if (1 & i[0]) throw i[1];
    return i[1];
  }, trys: [], ops: [] };
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(l) {
    return function(c) {
      return function(s) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, s[0] && (t = 0)), t; ) try {
          if (n = 1, o && (i = 2 & s[0] ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done) return i;
          switch (o = 0, i && (s = [2 & s[0], i.value]), s[0]) {
            case 0:
            case 1:
              i = s;
              break;
            case 4:
              return t.label++, { value: s[1], done: !1 };
            case 5:
              t.label++, o = s[1], s = [0];
              continue;
            case 7:
              s = t.ops.pop(), t.trys.pop();
              continue;
            default:
              if (i = t.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
                t = 0;
                continue;
              }
              if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                t.label = s[1];
                break;
              }
              if (s[0] === 6 && t.label < i[1]) {
                t.label = i[1], i = s;
                break;
              }
              if (i && t.label < i[2]) {
                t.label = i[2], t.ops.push(s);
                break;
              }
              i[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          s = e.call(r, t);
        } catch (f) {
          s = [6, f], o = 0;
        } finally {
          n = i = 0;
        }
        if (5 & s[0]) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }([l, c]);
    };
  }
}
var b = { exclude: [] }, D = {}, v = function(r, e) {
  typeof window < "u" && (D[r] = e);
};
function C(r) {
  return r ^= r >>> 16, r = Math.imul(r, 2246822507), r ^= r >>> 13, r = Math.imul(r, 3266489909), (r ^= r >>> 16) >>> 0;
}
var m = new Uint32Array([597399067, 2869860233, 951274213, 2716044179]);
function g(r, e) {
  return r << e | r >>> 32 - e;
}
function M(r, e) {
  var n;
  if (e === void 0 && (e = 0), e = e ? 0 | e : 0, typeof r == "string" && (n = r, r = new TextEncoder().encode(n).buffer), !(r instanceof ArrayBuffer)) throw new TypeError("Expected key to be ArrayBuffer or string");
  var o = new Uint32Array([e, e, e, e]);
  (((function(a, t) {
    for (var u = a.byteLength / 16 | 0, l = new Uint32Array(a, 0, 4 * u), c = 0; c < u; c++) {
      var s = l.subarray(4 * c, 4 * (c + 1));
      s[0] = Math.imul(s[0], m[0]), s[0] = g(s[0], 15), s[0] = Math.imul(s[0], m[1]), t[0] = t[0] ^ s[0], t[0] = g(t[0], 19), t[0] = t[0] + t[1], t[0] = Math.imul(t[0], 5) + 1444728091, s[1] = Math.imul(s[1], m[1]), s[1] = g(s[1], 16), s[1] = Math.imul(s[1], m[2]), t[1] = t[1] ^ s[1], t[1] = g(t[1], 17), t[1] = t[1] + t[2], t[1] = Math.imul(t[1], 5) + 197830471, s[2] = Math.imul(s[2], m[2]), s[2] = g(s[2], 17), s[2] = Math.imul(s[2], m[3]), t[2] = t[2] ^ s[2], t[2] = g(t[2], 15), t[2] = t[2] + t[3], t[2] = Math.imul(t[2], 5) + 2530024501, s[3] = Math.imul(s[3], m[3]), s[3] = g(s[3], 18), s[3] = Math.imul(s[3], m[0]), t[3] = t[3] ^ s[3], t[3] = g(t[3], 13), t[3] = t[3] + t[0], t[3] = Math.imul(t[3], 5) + 850148119;
    }
  })))(r, o), function(a, t) {
    var u = a.byteLength / 16 | 0, l = a.byteLength % 16, c = new Uint32Array(4), s = new Uint8Array(a, 16 * u, l);
    switch (l) {
      case 15:
        c[3] = c[3] ^ s[14] << 16;
      case 14:
        c[3] = c[3] ^ s[13] << 8;
      case 13:
        c[3] = c[3] ^ s[12] << 0, c[3] = Math.imul(c[3], m[3]), c[3] = g(c[3], 18), c[3] = Math.imul(c[3], m[0]), t[3] = t[3] ^ c[3];
      case 12:
        c[2] = c[2] ^ s[11] << 24;
      case 11:
        c[2] = c[2] ^ s[10] << 16;
      case 10:
        c[2] = c[2] ^ s[9] << 8;
      case 9:
        c[2] = c[2] ^ s[8] << 0, c[2] = Math.imul(c[2], m[2]), c[2] = g(c[2], 17), c[2] = Math.imul(c[2], m[3]), t[2] = t[2] ^ c[2];
      case 8:
        c[1] = c[1] ^ s[7] << 24;
      case 7:
        c[1] = c[1] ^ s[6] << 16;
      case 6:
        c[1] = c[1] ^ s[5] << 8;
      case 5:
        c[1] = c[1] ^ s[4] << 0, c[1] = Math.imul(c[1], m[1]), c[1] = g(c[1], 16), c[1] = Math.imul(c[1], m[2]), t[1] = t[1] ^ c[1];
      case 4:
        c[0] = c[0] ^ s[3] << 24;
      case 3:
        c[0] = c[0] ^ s[2] << 16;
      case 2:
        c[0] = c[0] ^ s[1] << 8;
      case 1:
        c[0] = c[0] ^ s[0] << 0, c[0] = Math.imul(c[0], m[0]), c[0] = g(c[0], 15), c[0] = Math.imul(c[0], m[1]), t[0] = t[0] ^ c[0];
    }
  }(r, o), function(a, t) {
    t[0] = t[0] ^ a.byteLength, t[1] = t[1] ^ a.byteLength, t[2] = t[2] ^ a.byteLength, t[3] = t[3] ^ a.byteLength, t[0] = t[0] + t[1] | 0, t[0] = t[0] + t[2] | 0, t[0] = t[0] + t[3] | 0, t[1] = t[1] + t[0] | 0, t[2] = t[2] + t[0] | 0, t[3] = t[3] + t[0] | 0, t[0] = C(t[0]), t[1] = C(t[1]), t[2] = C(t[2]), t[3] = C(t[3]), t[0] = t[0] + t[1] | 0, t[0] = t[0] + t[2] | 0, t[0] = t[0] + t[3] | 0, t[1] = t[1] + t[0] | 0, t[2] = t[2] + t[0] | 0, t[3] = t[3] + t[0] | 0;
  }(r, o);
  var i = new Uint8Array(o.buffer);
  return Array.from(i).map(function(a) {
    return a.toString(16).padStart(2, "0");
  }).join("");
}
function H(r) {
  for (var e = 0, n = 0; n < r.length; ++n) e += Math.abs(r[n]);
  return e;
}
function U(r, e, n) {
  for (var o = [], i = 0; i < r[0].data.length; i++) {
    for (var a = [], t = 0; t < r.length; t++) a.push(r[t].data[i]);
    o.push(Q(a));
  }
  var u = new Uint8ClampedArray(o);
  return new ImageData(u, e, n);
}
function Q(r) {
  if (r.length === 0) return 0;
  for (var e = {}, n = 0, o = r; n < o.length; n++)
    e[a = o[n]] = (e[a] || 0) + 1;
  var i = r[0];
  for (var a in e) e[a] > e[i] && (i = parseInt(a, 10));
  return i;
}
function E() {
  if (typeof navigator > "u") return { name: "unknown", version: "unknown" };
  for (var r = navigator.userAgent, e = { Edg: "Edge", OPR: "Opera" }, n = 0, o = [/(?<name>Edge|Edg)\/(?<version>\d+(?:\.\d+)?)/, /(?<name>(?:Chrome|Chromium|OPR|Opera|Vivaldi|Brave))\/(?<version>\d+(?:\.\d+)?)/, /(?<name>(?:Firefox|Waterfox|Iceweasel|IceCat))\/(?<version>\d+(?:\.\d+)?)/, /(?<name>Safari)\/(?<version>\d+(?:\.\d+)?)/, /(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)?)/, /(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)?)/, /(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)?)/]; n < o.length; n++) {
    var i = o[n], a = r.match(i);
    if (a && a.groups) return { name: e[a.groups.name] || a.groups.name, version: a.groups.version };
  }
  return { name: "unknown", version: "unknown" };
}
v("audio", function() {
  return w(this, void 0, void 0, function() {
    return y(this, function(r) {
      return [2, new Promise(function(e, n) {
        try {
          var o = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 5e3, 44100), i = o.createBufferSource(), a = o.createOscillator();
          a.frequency.value = 1e3;
          var t, u = o.createDynamicsCompressor();
          u.threshold.value = -50, u.knee.value = 40, u.ratio.value = 12, u.attack.value = 0, u.release.value = 0.2, a.connect(u), u.connect(o.destination), a.start(), o.oncomplete = function(l) {
            t = l.renderedBuffer.getChannelData(0), e({ sampleHash: H(t), oscillator: a.type, maxChannels: o.destination.maxChannelCount, channelCountMode: i.channelCountMode });
          }, o.startRendering();
        } catch (l) {
          console.error("Error creating audio fingerprint:", l), n(l);
        }
      })];
    });
  });
});
var z = E().name !== "SamsungBrowser" ? 1 : 3, x = 280, F = 20;
E().name != "Firefox" && v("canvas", function() {
  return document.createElement("canvas").getContext("2d"), new Promise(function(r) {
    var e = Array.from({ length: z }, function() {
      return function() {
        var n = document.createElement("canvas"), o = n.getContext("2d");
        if (!o) return new ImageData(1, 1);
        n.width = x, n.height = F;
        var i = o.createLinearGradient(0, 0, n.width, n.height);
        i.addColorStop(0, "red"), i.addColorStop(0.16666666666666666, "orange"), i.addColorStop(0.3333333333333333, "yellow"), i.addColorStop(0.5, "green"), i.addColorStop(0.6666666666666666, "blue"), i.addColorStop(0.8333333333333334, "indigo"), i.addColorStop(1, "violet"), o.fillStyle = i, o.fillRect(0, 0, n.width, n.height);
        var a = "Random Text WMwmil10Oo";
        o.font = "23.123px Arial", o.fillStyle = "black", o.fillText(a, -5, 15), o.fillStyle = "rgba(0, 0, 255, 0.5)", o.fillText(a, -3.3, 17.7), o.beginPath(), o.moveTo(0, 0), o.lineTo(2 * n.width / 7, n.height), o.strokeStyle = "white", o.lineWidth = 2, o.stroke();
        var t = o.getImageData(0, 0, n.width, n.height);
        return t;
      }();
    });
    r({ commonImageDataHash: M(U(e, x, F).data.toString()).toString() });
  });
});
var T, K = ["Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT", "Arimo", "Archivo", "Barlow", "Bebas Neue", "Bitter", "Bookman", "Calibri", "Cabin", "Candara", "Century", "Century Gothic", "Comic Sans MS", "Constantia", "Courier", "Courier New", "Crimson Text", "DM Mono", "DM Sans", "DM Serif Display", "DM Serif Text", "Dosis", "Droid Sans", "Exo", "Fira Code", "Fira Sans", "Franklin Gothic Medium", "Garamond", "Geneva", "Georgia", "Gill Sans", "Helvetica", "Impact", "Inconsolata", "Indie Flower", "Inter", "Josefin Sans", "Karla", "Lato", "Lexend", "Lucida Bright", "Lucida Console", "Lucida Sans Unicode", "Manrope", "Merriweather", "Merriweather Sans", "Montserrat", "Myriad", "Noto Sans", "Nunito", "Nunito Sans", "Open Sans", "Optima", "Orbitron", "Oswald", "Pacifico", "Palatino", "Perpetua", "PT Sans", "PT Serif", "Poppins", "Prompt", "Public Sans", "Quicksand", "Rajdhani", "Recursive", "Roboto", "Roboto Condensed", "Rockwell", "Rubik", "Segoe Print", "Segoe Script", "Segoe UI", "Sora", "Source Sans Pro", "Space Mono", "Tahoma", "Taviraj", "Times", "Times New Roman", "Titillium Web", "Trebuchet MS", "Ubuntu", "Varela Round", "Verdana", "Work Sans"], Y = ["monospace", "sans-serif", "serif"];
function k(r, e) {
  if (!r) throw new Error("Canvas context not supported");
  return r.font = "72px ".concat(e), r.measureText("WwMmLli0Oo").width;
}
function J() {
  var r, e = document.createElement("canvas"), n = (r = e.getContext("webgl")) !== null && r !== void 0 ? r : e.getContext("experimental-webgl");
  if (n && "getParameter" in n) try {
    var o = (n.getParameter(n.VENDOR) || "").toString(), i = (n.getParameter(n.RENDERER) || "").toString(), a = { vendor: o, renderer: i, version: (n.getParameter(n.VERSION) || "").toString(), shadingLanguageVersion: (n.getParameter(n.SHADING_LANGUAGE_VERSION) || "").toString() };
    if (!i.length || !o.length) {
      var t = n.getExtension("WEBGL_debug_renderer_info");
      if (t) {
        var u = (n.getParameter(t.UNMASKED_VENDOR_WEBGL) || "").toString(), l = (n.getParameter(t.UNMASKED_RENDERER_WEBGL) || "").toString();
        u && (a.vendorUnmasked = u), l && (a.rendererUnmasked = l);
      }
    }
    return a;
  } catch {
  }
  return "undefined";
}
function X() {
  var r = new Float32Array(1), e = new Uint8Array(r.buffer);
  return r[0] = 1 / 0, r[0] = r[0] - r[0], e[3];
}
function Z(r, e) {
  var n = {};
  return e.forEach(function(o) {
    var i = function(a) {
      if (a.length === 0) return null;
      var t = {};
      a.forEach(function(c) {
        var s = String(c);
        t[s] = (t[s] || 0) + 1;
      });
      var u = a[0], l = 1;
      return Object.keys(t).forEach(function(c) {
        t[c] > l && (u = c, l = t[c]);
      }), u;
    }(r.map(function(a) {
      return o in a ? a[o] : void 0;
    }).filter(function(a) {
      return a !== void 0;
    }));
    i && (n[o] = i);
  }), n;
}
function ee() {
  var r = [], e = { "prefers-contrast": ["high", "more", "low", "less", "forced", "no-preference"], "any-hover": ["hover", "none"], "any-pointer": ["none", "coarse", "fine"], pointer: ["none", "coarse", "fine"], hover: ["hover", "none"], update: ["fast", "slow"], "inverted-colors": ["inverted", "none"], "prefers-reduced-motion": ["reduce", "no-preference"], "prefers-reduced-transparency": ["reduce", "no-preference"], scripting: ["none", "initial-only", "enabled"], "forced-colors": ["active", "none"] };
  return Object.keys(e).forEach(function(n) {
    e[n].forEach(function(o) {
      matchMedia("(".concat(n, ": ").concat(o, ")")).matches && r.push("".concat(n, ": ").concat(o));
    });
  }), r;
}
function te() {
  if (window.location.protocol === "https:" && typeof window.ApplePaySession == "function") try {
    for (var r = window.ApplePaySession.supportsVersion, e = 15; e > 0; e--) if (r(e)) return e;
  } catch {
    return 0;
  }
  return 0;
}
E().name != "Firefox" && v("fonts", function() {
  var r = this;
  return new Promise(function(e, n) {
    try {
      (function(o) {
        var i;
        w(this, void 0, void 0, function() {
          var a, t, u;
          return y(this, function(l) {
            switch (l.label) {
              case 0:
                return document.body ? [3, 2] : [4, (c = 50, new Promise(function(f) {
                  return setTimeout(f, c, s);
                }))];
              case 1:
                return l.sent(), [3, 0];
              case 2:
                if ((a = document.createElement("iframe")).setAttribute("frameBorder", "0"), (t = a.style).setProperty("position", "fixed"), t.setProperty("display", "block", "important"), t.setProperty("visibility", "visible"), t.setProperty("border", "0"), t.setProperty("opacity", "0"), a.src = "about:blank", document.body.appendChild(a), !(u = a.contentDocument || ((i = a.contentWindow) === null || i === void 0 ? void 0 : i.document))) throw new Error("Iframe document is not accessible");
                return o({ iframe: u }), setTimeout(function() {
                  document.body.removeChild(a);
                }, 0), [2];
            }
            var c, s;
          });
        });
      })(function(o) {
        var i = o.iframe;
        return w(r, void 0, void 0, function() {
          var a, t, u, l;
          return y(this, function(c) {
            return a = i.createElement("canvas"), t = a.getContext("2d"), u = Y.map(function(s) {
              return k(t, s);
            }), l = {}, K.forEach(function(s) {
              var f = k(t, s);
              u.includes(f) || (l[s] = f);
            }), e(l), [2];
          });
        });
      });
    } catch {
      n({ error: "unsupported" });
    }
  });
}), v("hardware", function() {
  return new Promise(function(r, e) {
    var n = navigator.deviceMemory !== void 0 ? navigator.deviceMemory : 0, o = window.performance && window.performance.memory ? window.performance.memory : 0;
    r({ videocard: J(), architecture: X(), deviceMemory: n.toString() || "undefined", jsHeapSizeLimit: o.jsHeapSizeLimit || 0 });
  });
}), v("locales", function() {
  return new Promise(function(r) {
    r({ languages: navigator.language, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
  });
}), v("permissions", function() {
  return w(this, void 0, void 0, function() {
    var r;
    return y(this, function(e) {
      return T = (b == null ? void 0 : b.permissions_to_check) || ["accelerometer", "accessibility", "accessibility-events", "ambient-light-sensor", "background-fetch", "background-sync", "bluetooth", "camera", "clipboard-read", "clipboard-write", "device-info", "display-capture", "gyroscope", "geolocation", "local-fonts", "magnetometer", "microphone", "midi", "nfc", "notifications", "payment-handler", "persistent-storage", "push", "speaker", "storage-access", "top-level-storage-access", "window-management", "query"], r = Array.from({ length: (b == null ? void 0 : b.retries) || 3 }, function() {
        return function() {
          return w(this, void 0, void 0, function() {
            var n, o, i, a, t;
            return y(this, function(u) {
              switch (u.label) {
                case 0:
                  n = {}, o = 0, i = T, u.label = 1;
                case 1:
                  if (!(o < i.length)) return [3, 6];
                  a = i[o], u.label = 2;
                case 2:
                  return u.trys.push([2, 4, , 5]), [4, navigator.permissions.query({ name: a })];
                case 3:
                  return t = u.sent(), n[a] = t.state.toString(), [3, 5];
                case 4:
                  return u.sent(), [3, 5];
                case 5:
                  return o++, [3, 1];
                case 6:
                  return [2, n];
              }
            });
          });
        }();
      }), [2, Promise.all(r).then(function(n) {
        return Z(n, T);
      })];
    });
  });
}), v("plugins", function() {
  var r = [];
  if (navigator.plugins) for (var e = 0; e < navigator.plugins.length; e++) {
    var n = navigator.plugins[e];
    r.push([n.name, n.filename, n.description].join("|"));
  }
  return new Promise(function(o) {
    o({ plugins: r });
  });
}), v("screen", function() {
  return new Promise(function(r) {
    r({ is_touchscreen: navigator.maxTouchPoints > 0, maxTouchPoints: navigator.maxTouchPoints, colorDepth: screen.colorDepth, mediaMatches: ee() });
  });
}), v("system", function() {
  return new Promise(function(r) {
    var e = E();
    r({ platform: window.navigator.platform, cookieEnabled: window.navigator.cookieEnabled, productSub: navigator.productSub, product: navigator.product, useragent: navigator.userAgent, hardwareConcurrency: navigator.hardwareConcurrency, browser: { name: e.name, version: e.version }, applePayVersion: te() });
  });
});
var p, ne = E().name !== "SamsungBrowser" ? 1 : 3, d = null;
v("webgl", function() {
  return w(this, void 0, void 0, function() {
    var r;
    return y(this, function(e) {
      typeof document < "u" && ((p = document.createElement("canvas")).width = 200, p.height = 100, d = p.getContext("webgl"));
      try {
        if (!d) throw new Error("WebGL not supported");
        return r = Array.from({ length: ne }, function() {
          return function() {
            try {
              if (!d) throw new Error("WebGL not supported");
              var n = `
          attribute vec2 position;
          void main() {
              gl_Position = vec4(position, 0.0, 1.0);
          }
      `, o = `
          precision mediump float;
          void main() {
              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color
          }
      `, i = d.createShader(d.VERTEX_SHADER), a = d.createShader(d.FRAGMENT_SHADER);
              if (!i || !a) throw new Error("Failed to create shaders");
              if (d.shaderSource(i, n), d.shaderSource(a, o), d.compileShader(i), !d.getShaderParameter(i, d.COMPILE_STATUS)) throw new Error("Vertex shader compilation failed: " + d.getShaderInfoLog(i));
              if (d.compileShader(a), !d.getShaderParameter(a, d.COMPILE_STATUS)) throw new Error("Fragment shader compilation failed: " + d.getShaderInfoLog(a));
              var t = d.createProgram();
              if (!t) throw new Error("Failed to create shader program");
              if (d.attachShader(t, i), d.attachShader(t, a), d.linkProgram(t), !d.getProgramParameter(t, d.LINK_STATUS)) throw new Error("Shader program linking failed: " + d.getProgramInfoLog(t));
              d.useProgram(t);
              for (var u = 137, l = new Float32Array(4 * u), c = 2 * Math.PI / u, s = 0; s < u; s++) {
                var f = s * c;
                l[4 * s] = 0, l[4 * s + 1] = 0, l[4 * s + 2] = Math.cos(f) * (p.width / 2), l[4 * s + 3] = Math.sin(f) * (p.height / 2);
              }
              var L = d.createBuffer();
              d.bindBuffer(d.ARRAY_BUFFER, L), d.bufferData(d.ARRAY_BUFFER, l, d.STATIC_DRAW);
              var I = d.getAttribLocation(t, "position");
              d.enableVertexAttribArray(I), d.vertexAttribPointer(I, 2, d.FLOAT, !1, 0, 0), d.viewport(0, 0, p.width, p.height), d.clearColor(0, 0, 0, 1), d.clear(d.COLOR_BUFFER_BIT), d.drawArrays(d.LINES, 0, 2 * u);
              var R = new Uint8ClampedArray(p.width * p.height * 4);
              return d.readPixels(0, 0, p.width, p.height, d.RGBA, d.UNSIGNED_BYTE, R), new ImageData(R, p.width, p.height);
            } catch {
              return new ImageData(1, 1);
            } finally {
              d && (d.bindBuffer(d.ARRAY_BUFFER, null), d.useProgram(null), d.viewport(0, 0, d.drawingBufferWidth, d.drawingBufferHeight), d.clearColor(0, 0, 0, 0));
            }
          }();
        }), [2, { commonImageHash: M(U(r, p.width, p.height).data.toString()).toString() }];
      } catch {
        return [2, { webgl: "unsupported" }];
      }
      return [2];
    });
  });
});
var S = function(r, e, n, o) {
  for (var i = (n - e) / o, a = 0, t = 0; t < o; t++)
    a += r(e + (t + 0.5) * i);
  return a * i;
};
v("math", function() {
  return w(void 0, void 0, void 0, function() {
    return y(this, function(r) {
      return [2, { acos: Math.acos(0.5), asin: S(Math.asin, -1, 1, 97), atan: S(Math.atan, -1, 1, 97), cos: S(Math.cos, 0, Math.PI, 97), cosh: Math.cosh(9 / 7), e: Math.E, largeCos: Math.cos(1e20), largeSin: Math.sin(1e20), largeTan: Math.tan(1e20), log: Math.log(1e3), pi: Math.PI, sin: S(Math.sin, -Math.PI, Math.PI, 97), sinh: S(Math.sinh, -9 / 7, 7 / 9, 97), sqrt: Math.sqrt(2), tan: S(Math.tan, 0, 2 * Math.PI, 97), tanh: S(Math.tanh, -9 / 7, 7 / 9, 97) }];
    });
  });
});

const initialSearchcraftStateValues = {
    adClientResponseItems: [],
    core: undefined,
    logger: undefined,
    facetPathsForIndexFields: {},
    isPopoverVisible: false,
    isSearchInProgress: false,
    searchTerm: '',
    rangeValueForIndexFields: {},
    searchMode: 'fuzzy',
    searchClientResponseItems: [],
    searchResponseTimeTaken: undefined,
    searchResponseFacetPrime: undefined,
    searchResultsCount: 0,
    searchResultsPerPage: 20,
    searchResultsPage: 1,
    sortType: 'asc',
};
const searchcraftStore = zustand.createStore((set, get) => {
    const functions = {
        addFacetPathsForIndexField: (data) => set((state) => ({
            facetPathsForIndexFields: {
                ...state.facetPathsForIndexFields,
                [data.fieldName]: data,
            },
        })),
        addRangeValueForIndexField: (data) => set((state) => ({
            rangeValueForIndexFields: {
                ...state.rangeValueForIndexFields,
                [data.fieldName]: data,
            },
        })),
        getSearchcraftInstance: () => {
            const { core } = get();
            return core;
        },
        initialize: (searchcraftInstance, debug = false) => {
            const core = searchcraftInstance;
            const logger = debug
                ? new ve({ logLevel: P.DEBUG })
                : undefined;
            set({
                core,
                logger,
                searchResultsPerPage: core.config.searchResultsPerPage || 20,
            });
        },
        removeFacetPathsForIndexField: (fieldName) => set((state) => {
            const currentPaths = state.facetPathsForIndexFields;
            delete currentPaths[fieldName];
            return {
                facetPathsForIndexFields: {
                    ...currentPaths,
                },
            };
        }),
        removeRangeValueForIndexField: (fieldName) => set((state) => {
            const currentValues = state.rangeValueForIndexFields;
            delete currentValues[fieldName];
            return {
                rangeValueForIndexFields: {
                    ...currentValues,
                },
            };
        }),
        resetFacetPaths: () => {
            set({
                facetPathsForIndexFields: {},
            });
        },
        search: async () => {
            const state = get();
            state.logger?.log(P.INFO, `Starting search with search term: "${state.searchTerm}"`);
            if (!state.core) {
                throw new Error('Searchcraft instance is not initialized.');
            }
            if (!state.searchTerm.trim()) {
                state.logger?.log(P.INFO, 'No search request was made: search term was empty.');
                set({
                    searchClientResponseItems: [],
                    searchResultsCount: 0,
                    searchResultsPage: 1,
                    searchTerm: '',
                });
                return;
            }
            set({ isSearchInProgress: true });
            const handleSearchcraftResponse = (response, items) => {
                const facetsFromResponse = response.data.facets;
                set((state) => {
                    return {
                        isSearchInProgress: false,
                        searchClientResponseItems: items,
                        searchResponseTimeTaken: response.data.time_taken || 0,
                        searchResultsPage: 
                        // reset to first page when response count changes
                        response.data.count === state.searchResultsCount
                            ? state.searchResultsPage
                            : 1,
                        searchResultsCount: response.data.count || 0,
                    };
                });
                if (facetsFromResponse) {
                    set({ searchResponseFacetPrime: facetsFromResponse });
                }
                state.logger?.log(P.DEBUG, `Search results: ${JSON.stringify(items)}`);
                state.logger?.log(P.DEBUG, `Facets from response: ${JSON.stringify(facetsFromResponse)}`);
            };
            const handleAdResponse = (adClientResponseItems) => {
                set({ adClientResponseItems });
            };
            state.core.getItems({
                searchTerm: state.searchTerm,
                mode: state.searchMode,
                sort: state.sortType,
                facetPathsForIndexFields: state.facetPathsForIndexFields,
                rangeValueForIndexFields: state.rangeValueForIndexFields,
                offset: state.searchResultsPerPage
                    ? state.searchResultsPerPage * (state.searchResultsPage - 1)
                    : 0,
                limit: state.searchResultsPerPage,
            }, handleSearchcraftResponse, handleAdResponse);
        },
        setPopoverVisibility: (isVisible) => {
            set({
                isPopoverVisible: isVisible,
            });
        },
        setSearchMode: (mode) => set({ searchMode: mode }),
        setSortType: (type) => set({ sortType: type }),
        setSearchTerm: (searchTerm) => {
            const { core } = get();
            if (searchTerm.length === 0) {
                core?.handleInputCleared();
            }
            /**
             * When a new searchTerm is set, also reset the sort type, search mode, and facet paths.
             */
            set({
                searchTerm,
                facetPathsForIndexFields: {},
                ...(searchTerm.trim().length === 0 && {
                    searchMode: 'fuzzy',
                    sortType: 'asc',
                }),
            });
        },
        setSearchClientResponseItems: (items) => set({ searchClientResponseItems: items }),
        setSearchResultsPage: async (page) => {
            set({ searchResultsPage: page });
            await functions.search();
        },
        setSearchResultsPerPage: async (perPage) => {
            set({ searchResultsPerPage: perPage });
            await functions.search();
        },
    };
    const stateObject = {
        ...initialSearchcraftStateValues,
        ...functions,
    };
    return stateObject;
});

function deepMergeWithSpread(obj1, obj2) {
    const result = { ...obj1 };
    for (const key in obj2) {
        // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
        if (obj2.hasOwnProperty(key)) {
            if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
                result[key] = deepMergeWithSpread(obj1[key], obj2[key]);
            }
            else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}
/**
 * Given an array of facet paths, removes parent facet paths.
 */
function removeSubstringMatches(arr) {
    return arr.filter((entry, index, array) => !array.some((otherEntry, otherIndex) => otherIndex !== index && otherEntry.includes(entry)));
}
function facetToRecord(facet) {
    const records = {};
    const traverseAndAddToFragments = (facetChild) => {
        records[facetChild.path] = {
            count: facetChild.count,
            path: facetChild.path,
        };
        facetChild.children?.forEach((child) => {
            traverseAndAddToFragments(child);
        });
    };
    traverseAndAddToFragments(facet);
    return records;
}
function recordToObject(record) {
    const root = {
        count: 0,
        path: '/',
        children: {},
    };
    Object.keys(record).forEach((key) => {
        const fragment = record[key];
        if (!fragment) {
            return;
        }
        if (fragment.path === '/') {
            return;
        }
        const pathParts = fragment.path.substring(1).split('/');
        let currentRoot = root;
        let currentPath = '';
        pathParts.forEach((part, index) => {
            const nextPath = `${currentPath}/${part}`;
            if (!currentRoot.children[nextPath]) {
                currentRoot.children[nextPath] = {
                    count: 0,
                    path: nextPath,
                    children: {},
                };
            }
            if (index === pathParts.length - 1) {
                currentRoot.children[nextPath].count = fragment.count;
            }
            currentPath = nextPath;
            currentRoot = currentRoot.children[nextPath];
        });
    });
    return root;
}
function objectToFacet(childObject) {
    const transformed = {
        count: childObject.count,
        path: childObject.path,
        children: [],
    };
    if (Object.keys(childObject.children).length > 0) {
        transformed.children = Object.values(childObject.children).map((subChildObject) => objectToFacet(subChildObject));
    }
    return transformed;
}
/**
 * Filters records with the parent paths from record2 OUT of record1
 */
function filterRecordByParentPaths(record1, record2) {
    // Extract all paths (keys) both records
    const paths1 = Object.keys(record1);
    const paths2 = Object.keys(record2);
    // Find all parent paths in record2
    const parentPaths = new Set(paths2
        .filter((path) => path.split('/').length > 2) // Only consider paths with more than one level
        .map((path) => path.substring(0, path.lastIndexOf('/'))));
    // Filter out keys in record1 that share a parent path with any of the identified parent paths
    const filteredRecord = Object.fromEntries(paths1
        .filter((path) => !parentPaths.has(path.substring(0, path.lastIndexOf('/'))))
        .map((path) => [path, record1[path]]));
    return filteredRecord;
}
function mergeFacetRoots(fieldName, currentRoot, incomingRoot) {
    const currentArray = currentRoot[fieldName];
    const incomingArray = incomingRoot[fieldName];
    const currentRootFacetChild = {
        count: 0,
        path: '/',
        children: currentArray,
    };
    const incomingRootFacetChild = {
        count: 0,
        path: '/',
        children: incomingArray,
    };
    // Flatten them into records
    const currentRecord = facetToRecord(currentRootFacetChild);
    const incomingRecord = facetToRecord(incomingRootFacetChild);
    // Filter out the records from record1 (the current set of records)
    // that share a parent path with record2 (the incoming records)
    const filteredCurrentRecord = filterRecordByParentPaths(currentRecord, incomingRecord);
    // Deep merge the records together
    const mergedRecord = deepMergeWithSpread(filteredCurrentRecord, incomingRecord);
    // Convert into a heirarchical object
    const mergedObject = recordToObject(mergedRecord);
    // Convert the heirarchical object back to the Facet child structure
    const mergedFacetChild = objectToFacet(mergedObject);
    return {
        [fieldName]: mergedFacetChild.children,
    };
}

/**
 * Given a document and a SearchResultMapping, return a mapped value from the document.
 *
 * Applies formatting based on the values specified in the `SearchResultFieldName` values.
 *
 * @param document
 * @param {SearchResultMapping} mapping
 * @returns {string | undefined}
 */
function getDocumentValueFromSearchResultMapping(document, mapping) {
    if (document && mapping) {
        return mapping.fieldNames
            .map((fieldNameDetails) => {
            let valueFound = document[fieldNameDetails.fieldName];
            if (valueFound) {
                switch (fieldNameDetails.dataType) {
                    case 'date': {
                        // TODO: Use fieldNameDetails.DateFormatOptions to format the date
                        valueFound = getFormattedTimeFromNow(valueFound);
                        break;
                    }
                    case 'number': {
                        valueFound = Intl.NumberFormat(fieldNameDetails.numberFormatLocale, fieldNameDetails.numberFormatOptions).format(valueFound * (fieldNameDetails.numberScale || 1));
                        break;
                    }
                }
            }
            return valueFound;
        })
            .filter((value) => !!value)
            .join(mapping.delimiter || ' ');
    }
}
function getMillis(unit) {
    const millisInHour = 60 * 60 * 1000;
    const millisInDay = 24 * millisInHour;
    const millisInMonth = 30 * millisInDay;
    const millisInYear = 365 * millisInDay;
    switch (unit) {
        case 'hour':
            return millisInHour;
        case 'day':
            return millisInDay;
        case 'month':
            return millisInMonth;
        case 'year':
            return millisInYear;
        default:
            return 3600000;
    }
}
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/**
 * Given a timestamp value, returns a formatted time string for the time
 * since now.
 *
 * @param timestamp
 * @returns {string} Formatted string value
 */
function getFormattedTimeFromNow(timestamp) {
    const now = new Date();
    const inputTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - inputTime.getTime()) / 1000);
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    if (minutes < 60) {
        return `${minutes}m ago`;
    }
    if (hours < 24) {
        return `${hours}h ago`;
    }
    if (days < 365) {
        return `${days}d ago`;
    }
    return `${years}y ago`;
}

function parseCustomStyles(styles) {
    if (typeof styles === 'string') {
        try {
            return JSON.parse(styles);
        }
        catch (error) {
            console.error('Invalid customStyles format:', styles);
            return {};
        }
    }
    return styles || {};
}
function serializeStyles(styles) {
    try {
        return JSON.stringify(styles);
    }
    catch (error) {
        console.error('Error serializing styles:', error);
        return '{}';
    }
}

/**
 * This web component is designed to display detailed information for a single search result.
 * Once a query is submitted, the component formats and presents the result.
 * It is consumed within the `searchcraft-base-search-results` component.
 */
class SearchcraftBaseSearchResult {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    item;
    searchResultMappings;
    /**
     * Where to open the link for the containing element.
     */
    containerTarget = '_blank';
    /**
     * The relationship between the current document and the link for the containing element.
     */
    containerRel;
    /**
     * Where to open the link for the button rendered when containerHref is not present.
     */
    buttonTarget = '_blank';
    /**
     * The relationship between the current document and the link for the button rendered when containerHref is not present.
     */
    buttonRel;
    /**
     * The placement of the image.
     */
    imagePlacement = 'right';
    /**
     * A custom styles object.
     */
    customStyles;
    /**
     * The position in the document. Used with the "document_clicked" measure event.
     */
    documentPosition = 0;
    titleContent;
    subtitleContent;
    bodyContent;
    footerContent;
    buttonLabel;
    buttonHref;
    containerHref;
    imageSrc;
    imageAlt;
    searchcraftStore = searchcraftStore.getState();
    connectedCallback() {
        if (this.item) {
            this.mapValuesFromDocument(this.item.document);
        }
    }
    mapValuesFromDocument(document) {
        this.titleContent = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.title);
        this.subtitleContent = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.subtitle);
        this.bodyContent = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.body);
        this.containerHref = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.containerHref);
        this.buttonHref = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.buttonHref);
        this.imageSrc = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.imageSource);
        this.footerContent = getDocumentValueFromSearchResultMapping(document, this.searchResultMappings?.footer);
    }
    handleLinkClick = () => {
        const searchcraft = this.searchcraftStore.getSearchcraftInstance();
        if (searchcraft) {
            const document_position = this.documentPosition;
            const search_term = this.searchcraftStore.searchTerm;
            const number_of_documents = this.searchcraftStore.searchClientResponseItems.length;
            searchcraft.measureClient?.sendMeasureEvent('document_clicked', {
                document_position,
                number_of_documents,
                search_term,
            });
        }
    };
    parseStyles = () => {
        if (this.customStyles) {
            try {
                return JSON.parse(this.customStyles);
            }
            catch (error) {
                console.error('Error parsing custom styles:', error);
                return {};
            }
        }
        return {};
    };
    render() {
        const styles = this.parseStyles();
        const imageContainer = this.imageSrc && (hAsync("img", { alt: this.imageAlt, class: 'searchcraft-search-result-image', src: this.imageSrc, style: styles.image || {} }));
        const contentContainer = (hAsync(Fragment, null, this.imageSrc && this.imagePlacement === 'left' && imageContainer, hAsync("div", { class: 'searchcraft-base-search-result-content-container' }, this.titleContent && (hAsync("h2", { class: 'searchcraft-base-search-result-title', style: styles.title || {} }, this.titleContent)), this.subtitleContent && (hAsync("h3", { class: 'searchcraft-base-search-result-subtitle', style: styles.subtitle || {} }, this.subtitleContent)), this.bodyContent && (hAsync("p", { class: 'searchcraft-base-search-result-body-content', style: styles.primaryContent || {} }, this.bodyContent)), this.footerContent && (hAsync("p", { class: 'searchcraft-base-search-result-footer-content', style: styles.secondaryContent || {} }, this.footerContent)), this.buttonHref && !this.containerHref && this.buttonLabel && (hAsync("a", { class: 'searchcraft-search-result-button', href: this.buttonHref, style: styles.button || {}, target: this.buttonTarget, rel: this.buttonRel }, this.buttonLabel))), this.imageSrc && this.imagePlacement === 'right' && imageContainer));
        /** Render as an anchor tag if the containerHref prop is present. */
        if (this.containerHref) {
            return (hAsync("a", { class: 'searchcraft-search-result-container', onClick: this.handleLinkClick, href: this.containerHref, rel: this.containerRel, style: styles.container || {}, tabindex: '0', target: this.containerTarget }, contentContainer));
        }
        /** Render as a div if no href prop. */
        return (hAsync("div", { class: 'searchcraft-search-result-container', style: styles.container || {} }, contentContainer));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-base-search-result",
        "$members$": {
            "item": [16],
            "searchResultMappings": [16],
            "containerTarget": [1, "container-target"],
            "containerRel": [1, "container-rel"],
            "buttonTarget": [1, "button-target"],
            "buttonRel": [1, "button-rel"],
            "imagePlacement": [1, "image-placement"],
            "customStyles": [1, "custom-styles"],
            "documentPosition": [2, "document-position"],
            "titleContent": [32],
            "subtitleContent": [32],
            "bodyContent": [32],
            "footerContent": [32],
            "buttonLabel": [32],
            "buttonHref": [32],
            "containerHref": [32],
            "imageSrc": [32],
            "imageAlt": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is responsible for displaying the results of a search query.
 * Once a query is submitted, the component formats and presents an ordered list of the results.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-base-search-results
 *   ad-interval="4"
 *   place-ad-at-start="false"
 *   result-image-placement="right"
 * />
 * ```
 *
 * ```js
 * // index.js
 * const baseSearchResults = document.querySelector('searchcraft-base-search-results');
 *
 * baseSearchResults.searchResultMappings = containerHref: {
 *   fieldNames: [
 *    {
 *      fieldName: 'canonical_link',
 *      dataType: 'text',
 *    },
 *  ],
 * };
 *
 * baseSearchResults.addEventListener('noResults', () => {
 *   console.log('No search results found');
 * });
 * ```
 */
class SearchcraftBaseSearchResults {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * A custom styles object.
     */
    customStylesForResults;
    /**
     * Formats the content rendered for each result.
     */
    searchResultMappings;
    /**
     * The placement of the image for each result.
     */
    resultImagePlacement = 'right';
    /**
     * The label for the button rendered when containerHref is not present for each result.
     */
    buttonLabel;
    /**
     * Where to open the link for the button rendered when containerHref is not present for each result.
     */
    buttonTarget = '_blank';
    /**
     * The relationship between the current document and the link for the button rendered when containerHref is not present for each result.
     */
    buttonRel;
    /**
     * Where to open the link for the containing element for each result.
     */
    containerTarget = '_blank';
    /**
     * The relationship between the current document and the link for the containing element for each result.
     */
    containerRel;
    searchTerm = '';
    searchClientResponseItems;
    adClientResponseItems = [];
    searchResultsPerPage;
    searchResultsPage;
    isSearchInProgress = true;
    config;
    unsubscribe = () => { };
    get serializedStyles() {
        let serializedStyles = '';
        if (this.customStylesForResults) {
            serializedStyles =
                typeof this.customStylesForResults === 'string'
                    ? this.customStylesForResults
                    : serializeStyles(this.customStylesForResults);
        }
        return serializedStyles;
    }
    componentDidLoad() {
        this.unsubscribe = searchcraftStore.subscribe((state) => this.handleStateChange(state));
        const currentState = searchcraftStore.getState();
        this.handleStateChange(currentState);
        this.searchClientResponseItems = currentState.searchClientResponseItems;
        this.searchTerm = currentState.searchTerm;
        this.config = currentState.core?.config;
    }
    disconnectedCallback() {
        this.unsubscribe?.();
    }
    handleStateChange(state) {
        this.searchClientResponseItems = [...state.searchClientResponseItems];
        this.adClientResponseItems = [...state.adClientResponseItems];
        this.searchTerm = state.searchTerm;
        this.searchResultsPage = state.searchResultsPage;
        this.searchResultsPerPage = state.searchResultsPerPage;
        this.config = state.core?.config;
        this.isSearchInProgress = state.isSearchInProgress;
    }
    renderEmptyState() {
        return (hAsync("div", { class: 'searchcraft-search-results-empty-state-container' }, hAsync("slot", { name: 'empty-search' })));
    }
    renderNoResultsFoundState() {
        return (hAsync("div", { class: 'searchcraft-search-results-container' }, hAsync("div", { class: 'searchcraft-search-results-error-message-container' }, hAsync("searchcraft-error-message", { "error-message": `No search results found for "${this.searchTerm}" query` }))));
    }
    renderWithADMAds() {
        return (hAsync("div", { class: 'searchcraft-search-results-container' }, this.adClientResponseItems?.map((item) => (hAsync("searchcraft-ad", { adSource: 'adMarketplace', adClientResponseItem: item, key: item.id }))), this.searchClientResponseItems?.map((item, index) => (hAsync("searchcraft-base-search-result", { key: item.id, "custom-styles": this.serializedStyles, "image-placement": this.resultImagePlacement, "container-rel": this.containerRel, "container-target": this.containerTarget, "button-label": this.buttonLabel || 'View more', "button-rel": this.buttonRel, "button-target": this.buttonTarget, "document-position": this.searchResultsPerPage * (this.searchResultsPage - 1) + index, searchResultMappings: this.searchResultMappings, item: item })))));
    }
    renderWithCustomAds() {
        const itemsToRender = [];
        const interstitialInterval = this.config?.customAdInterstitialInterval || 0;
        const interstitialQuantity = this.config?.customAdInterstitialQuantity || 1;
        const adStartQuantity = this.config?.customAdStartQuantity || 0;
        const adEndQuantity = this.config?.customAdEndQuantity || 0;
        const searchItems = this.searchClientResponseItems || [];
        // Renders ads at beginning
        for (let n = 0; n < adStartQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Custom', key: `${n}-ad` }));
        }
        // Renders search results + interstitial ads
        searchItems.forEach((item, index) => {
            if (interstitialInterval &&
                index % interstitialInterval === 0 &&
                index + interstitialInterval < searchItems.length &&
                index >= interstitialInterval) {
                for (let n = 0; n < interstitialQuantity; n++) {
                    itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Custom', key: `${item.id}-ad-${n}` }));
                }
            }
            itemsToRender.push(hAsync("searchcraft-base-search-result", { key: item.id, "custom-styles": this.serializedStyles, "image-placement": this.resultImagePlacement, "container-rel": this.containerRel, "container-target": this.containerTarget, "button-label": this.buttonLabel || 'View more', "button-rel": this.buttonRel, "button-target": this.buttonTarget, "document-position": this.searchResultsPerPage * (this.searchResultsPage - 1) + index, searchResultMappings: this.searchResultMappings, item: item }));
        });
        // Renders ads at end
        for (let n = 0; n < adEndQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Custom', key: `${n}-ad` }));
        }
        return (hAsync("div", { class: 'searchcraft-search-results-container' }, itemsToRender));
    }
    renderWithNativoAds() {
        const itemsToRender = [];
        const interstitialStartIndex = this.config?.nativoAdInterstialStartIndex || 0;
        const interstitialInterval = this.config?.nativoAdInterstitialInterval || 0;
        const interstitialQuantity = this.config?.nativoAdInterstitialQuantity || 1;
        const adStartQuantity = this.config?.nativoAdStartQuantity || 0;
        const adEndQuantity = this.config?.nativoAdEndQuantity || 0;
        const searchItems = this.searchClientResponseItems || [];
        // Renders ads at beginning
        for (let n = 0; n < adStartQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Nativo', key: `${n}-ad` }));
        }
        // Renders search results + interstitial ads
        searchItems.forEach((item, index) => {
            if (interstitialInterval &&
                (index + interstitialStartIndex) % interstitialInterval === 0 &&
                index + interstitialInterval < searchItems.length &&
                index >= interstitialInterval) {
                for (let n = 0; n < interstitialQuantity; n++) {
                    itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Nativo', key: `${item.id}-ad-${n}` }));
                }
            }
            itemsToRender.push(hAsync("searchcraft-base-search-result", { key: item.id, "custom-styles": this.serializedStyles, "image-placement": this.resultImagePlacement, "container-rel": this.containerRel, "container-target": this.containerTarget, "button-label": this.buttonLabel || 'View more', "button-rel": this.buttonRel, "button-target": this.buttonTarget, "document-position": this.searchResultsPerPage * (this.searchResultsPage - 1) + index, searchResultMappings: this.searchResultMappings, item: item }));
        });
        // Renders ads at end
        for (let n = 0; n < adEndQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Nativo', key: `${n}-ad` }));
        }
        return (hAsync("div", { class: 'searchcraft-search-results-container' }, itemsToRender));
    }
    renderWithNoAds() {
        return (hAsync("div", { class: 'searchcraft-search-results-container' }, this.searchClientResponseItems?.map((item, index) => (hAsync("searchcraft-base-search-result", { key: item.id, "custom-styles": this.serializedStyles, "image-placement": this.resultImagePlacement, "container-rel": this.containerRel, "container-target": this.containerTarget, "button-label": this.buttonLabel || 'View more', "button-rel": this.buttonRel, "button-target": this.buttonTarget, "document-position": this.searchResultsPerPage * (this.searchResultsPage - 1) + index, searchResultMappings: this.searchResultMappings, item: item })))));
    }
    render() {
        if (this.searchTerm.trim() === '') {
            return this.renderEmptyState();
        }
        if (this.searchTerm.length > 0 &&
            (this.searchClientResponseItems || []).length === 0 &&
            !this.isSearchInProgress) {
            return this.renderNoResultsFoundState();
        }
        switch (this.config?.adSource || 'None') {
            case 'adMarketplace':
                return this.renderWithADMAds();
            case 'Custom':
                return this.renderWithCustomAds();
            case 'Nativo':
                return this.renderWithNativoAds();
            default:
                return this.renderWithNoAds();
        }
    }
    static get cmpMeta() { return {
        "$flags$": 4,
        "$tagName$": "searchcraft-base-search-results",
        "$members$": {
            "customStylesForResults": [1, "custom-styles-for-results"],
            "searchResultMappings": [16],
            "resultImagePlacement": [1, "result-image-placement"],
            "buttonLabel": [1, "button-label"],
            "buttonTarget": [1, "button-target"],
            "buttonRel": [1, "button-rel"],
            "containerTarget": [1, "container-target"],
            "containerRel": [1, "container-rel"],
            "searchTerm": [32],
            "searchClientResponseItems": [32],
            "adClientResponseItems": [32],
            "searchResultsPerPage": [32],
            "searchResultsPage": [32],
            "isSearchInProgress": [32],
            "config": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

/**
 * This web component represents a button to be consumed within the `search-input-form` component.
 * It provides a clear, interactive way for users to submit search queries or trigger actions in a search interface.
 * It is consumed within the `searchcraft-input-form` component.
 */
class SearchcraftButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClick = createEvent(this, "buttonClick", 7);
    }
    /**
     * Controls the visual representation of the button.
     */
    hierarchy = 'primary';
    /**
     * Whether the button is disabled.
     */
    disabled = false;
    /**
     * The icon element.
     */
    icon;
    /**
     * Should the button only display an icon.
     */
    iconOnly = false;
    /**
     * The position of the icon.
     */
    iconPosition = 'left';
    /**
     * The label for the button.
     */
    label = 'Search';
    /**
     * The type of the button.
     */
    type = 'button';
    /**
     * The event fired when the button is clicked.
     */
    buttonClick;
    handleButtonClick = () => {
        this.buttonClick.emit();
    };
    render() {
        return (hAsync("button", { key: 'ff883b930d03da6cbfb40badd3be1de0a873f853', "aria-label": this.label, class: classNames('searchcraft-button', {
                'searchcraft-button-primary': this.hierarchy === 'primary',
                'searchcraft-button-tertiary': this.hierarchy === 'tertiary',
                'searchcraft-button-disabled': this.disabled,
            }), disabled: this.disabled, onClick: this.handleButtonClick, type: this.type }, this.iconOnly ? (this.icon) : (hAsync(Fragment, null, this.iconPosition === 'left' && this.icon, hAsync("span", null, this.label), this.iconPosition === 'right' && this.icon))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-button",
        "$members$": {
            "hierarchy": [1],
            "disabled": [4],
            "icon": [16],
            "iconOnly": [4, "icon-only"],
            "iconPosition": [1, "icon-position"],
            "label": [1],
            "type": [1]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to display a user-friendly error message when a search query fails, providing clear feedback to users and enhancing their experience when an issue arises during the search process.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-error-message error-message="No search results found for query" />
 * ```
 */
class SearchcraftErrorMessage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The error message.
     */
    errorMessage;
    render() {
        return (hAsync("p", { key: 'dc97bb66da10a98fca027f928deaaf80d945417b', class: 'searchcraft-error-message' }, this.errorMessage || 'Search term is required.'));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-error-message",
        "$members$": {
            "errorMessage": [1, "error-message"]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to display facets in a search interface, allowing users to refine their search results by applying filters based on various attributes.
 * It is consumed within the `searchcraft-filter-panel`.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-facet-list field-name="title" />
 * ```
 *
 * ```js
 * // index.js
 * const facetList = document.querySelector('searchcraft-facet-list');
 *
 * facetList.addEventListener('facetSelectionUpdated', () => {
 *   console.log('Facet selection updated');
 * });
 * ```
 */
class SearchcraftFacetList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.facetSelectionUpdated = createEvent(this, "facetSelectionUpdated", 7);
    }
    /**
     * The name of the field where facets are applied.
     */
    fieldName = '';
    /**
     * When the facets are updated.
     */
    facetSelectionUpdated;
    baseFacetRoot;
    facetRoot;
    selectedPaths = {};
    lastTimeTaken;
    hasNewSearchTerm = false;
    lastSearchTerm;
    lastSearchMode;
    lastSortType;
    unsubscribe;
    searchStore = searchcraftStore.getState();
    handleStateUpdate(state) {
        const facetPrime = state.searchResponseFacetPrime;
        const timeTaken = state.searchResponseTimeTaken;
        if (!this.fieldName) {
            return;
        }
        /** Things to do when the state's search term has changed, but before the response received */
        if (state.searchTerm !== this.lastSearchTerm ||
            state.searchMode !== this.lastSearchMode ||
            state.sortType !== this.lastSortType) {
            this.selectedPaths = {};
            this.hasNewSearchTerm = true;
        }
        /** Things to do when a new response with a new facet prime has been received */
        if (timeTaken !== this.lastTimeTaken && facetPrime) {
            this.facetRoot = undefined;
            const incomingFacetRoot = facetPrime.find((facet) => this.fieldName === Object.keys(facet)[0]);
            /** Data is from a new search term: completely override our facets */
            if (this.hasNewSearchTerm) {
                this.baseFacetRoot = incomingFacetRoot;
                this.facetRoot = incomingFacetRoot;
                this.hasNewSearchTerm = false;
            }
            else if (this.baseFacetRoot && incomingFacetRoot) {
                /** Data is from an existing search term, merge the facets together */
                this.facetRoot = mergeFacetRoots(this.fieldName, this.baseFacetRoot, incomingFacetRoot);
            }
        }
        this.lastSearchTerm = state.searchTerm;
        this.lastSearchMode = state.searchMode;
        this.lastSortType = state.sortType;
        this.lastTimeTaken = timeTaken;
    }
    connectedCallback() {
        this.handleStateUpdate(this.searchStore);
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            this.handleStateUpdate(state);
        });
    }
    disconnectedCallback() {
        this.unsubscribe?.();
    }
    handleCheckboxChange(path) {
        const isCheckboxChecked = !this.selectedPaths[path];
        if (isCheckboxChecked) {
            /**
             * Checkbox Checked: Add to the selectedPaths record
             * Uses spread operator here so UI updates.
             */
            this.selectedPaths = {
                ...this.selectedPaths,
                [path]: true,
            };
        }
        else {
            /**
             * Checkbox Uncheck: Remove any paths and sub-paths
             */
            const updatedPaths = Object.keys(this.selectedPaths).filter((testPath) => !testPath.includes(path));
            this.selectedPaths = updatedPaths.reduce((acc, str) => {
                acc[str] = true;
                return acc;
            }, {});
        }
        /**
         * Emit the paths array, with parent paths removed.
         */
        const paths = Object.keys(this.selectedPaths).filter((path) => this.selectedPaths[path]);
        const pathsWithParentPathsRemoved = removeSubstringMatches(paths);
        this.facetSelectionUpdated?.emit({ paths: pathsWithParentPathsRemoved });
    }
    formatLabel = (facetChild) => {
        const label = facetChild.path.replace(/^\//, '');
        const count = facetChild.count;
        return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} (${count})`;
    };
    formatSubLabel = (facetChild, facetChildAncestor) => {
        const facetChildPath = facetChild.path.substring(facetChildAncestor.path.length);
        const label = facetChildPath.replace(/^\//, '');
        const count = facetChild.count;
        return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} (${count})`;
    };
    render() {
        if (!this.fieldName) {
            return;
        }
        const firstFacet = this.facetRoot?.[this.fieldName];
        return (hAsync("div", { class: classNames('filtersListContainer', 'searchcraft-filters-list-container') }, !firstFacet && (hAsync("p", { class: 'searchcraft-facet-message' }, "Enter a search to view facets.")), firstFacet?.map((facetChild) => {
            const isChildSelected = facetChild.children
                ? facetChild.children?.some((child) => this.selectedPaths[child.path])
                : false;
            return (hAsync("div", { key: facetChild.path, class: classNames('searchcraft-filters-list-item') }, hAsync("label", { class: classNames('filterCheckboxLabel', 'searchcraft-filters-list-checkbox-label') }, hAsync("input", { checked: this.selectedPaths[facetChild.path], onChange: (_event) => this.handleCheckboxChange(facetChild.path), type: 'checkbox' }), isChildSelected ? (hAsync("div", { class: classNames('dashContainer', 'searchcraft-filter-list-dash-container') }, hAsync("svg", { width: '14', height: '3', viewBox: '0 0 14 3', fill: 'none' }, hAsync("title", null, "Checkbox Dash"), hAsync("line", { x1: '1.5', y1: '1.5', x2: '12.5', y2: '1.5', stroke: 'white', "stroke-width": '3', "stroke-linecap": 'round' })))) : (hAsync("div", { class: classNames('checkContainer', 'searchcraft-filter-list-check-container') }, hAsync("svg", { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none' }, hAsync("title", null, "Checkbox Check"), hAsync("path", { d: 'M13.9999 2L5.74988 10L1.99988 6.36364', stroke: 'white', "stroke-width": '3', "stroke-linecap": 'round', "stroke-linejoin": 'round' })))), this.formatLabel(facetChild)), facetChild.children && facetChild.children.length > 0 && (hAsync(Fragment, null, facetChild.children.map((grandchild) => (hAsync("label", { key: grandchild.path, class: classNames('childFilterCheckboxLabel', 'searchcraft-child-filter-checkbox-label'), style: {
                    display: this.selectedPaths[facetChild.path]
                        ? 'flex'
                        : 'none',
                } }, hAsync("input", { checked: this.selectedPaths[grandchild.path], onChange: (_event) => {
                    this.handleCheckboxChange(grandchild.path);
                }, type: 'checkbox' }), hAsync("div", { class: classNames('checkContainer', 'searchcraft-filter-list-check-container') }, hAsync("svg", { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none' }, hAsync("title", null, "Checkbox Check"), hAsync("path", { d: 'M13.9999 2L5.74988 10L1.99988 6.36364', stroke: 'white', "stroke-width": '3', "stroke-linecap": 'round', "stroke-linejoin": 'round' }))), this.formatSubLabel(grandchild, facetChild))))))));
        })));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-facet-list",
        "$members$": {
            "fieldName": [1, "field-name"],
            "baseFacetRoot": [32],
            "facetRoot": [32],
            "selectedPaths": [32],
            "lastTimeTaken": [32],
            "hasNewSearchTerm": [32],
            "lastSearchTerm": [32],
            "lastSearchMode": [32],
            "lastSortType": [32],
            "unsubscribe": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component represents a series of filters that allows users to refine and control their search queries by applying various filter criteria.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-filter-panel />
 * ```
 */
class SearchcraftFilterPanel {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The items to filter.
     */
    items = [];
    unsubscribe;
    lastSearchTerm;
    searchStore = searchcraftStore.getState();
    componentDidLoad() {
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            this.lastSearchTerm = state.searchTerm || '';
        });
    }
    disconnectedCallback() {
        this.unsubscribe?.();
    }
    handleDateRangeChanged(fieldName, min, max) {
        const start = new Date(new Date(min).getFullYear(), 0, 1);
        const end = new Date(new Date(max).getFullYear() + 1, 0, 0);
        this.searchStore.addRangeValueForIndexField({
            fieldName,
            value: `${fieldName}:[${start.toISOString()} TO ${end.toISOString()}]`,
        });
        this.searchStore.search();
    }
    handleNumericRangeChanged(fieldName, min, max) {
        this.searchStore.addRangeValueForIndexField({
            fieldName,
            value: `${fieldName}:[${min} TO ${max}]`,
        });
        this.searchStore.search();
    }
    handleFacetSelectionUpdated(fieldName, paths) {
        if (paths.length > 0) {
            this.searchStore.addFacetPathsForIndexField({
                fieldName,
                value: `${fieldName}: IN [${paths.join(' ')}]`,
            });
        }
        else {
            this.searchStore.removeFacetPathsForIndexField(fieldName);
        }
        this.searchStore.search();
    }
    handleExactMatchToggleUpdated(isActive) {
        this.searchStore.setSearchMode(isActive ? 'exact' : 'fuzzy');
        this.searchStore.search();
    }
    handleMostRecentToggleUpdated(isActive) {
        this.searchStore.setSortType(isActive ? 'desc' : 'asc');
        this.searchStore.search();
    }
    /**
     * Iterate through `items` and render them based on `type`
     */
    render() {
        return (hAsync("div", { key: '73ca2e0efab911c5095c23ba33e85a26cc440b4a', class: 'searchcraft-filter-panel' }, this.items.map((filterItem) => {
            switch (filterItem.type) {
                case 'dateRange': {
                    const item = filterItem;
                    const min = new Date(item.options.minDate).getTime();
                    const max = new Date(item.options.maxDate).getTime();
                    const granularityValue = getMillis(item.options.granularity);
                    // return date range slider
                    return (hAsync("div", { class: 'searchcraft-filter-panel-section' }, hAsync("p", { class: 'searchcraft-filter-panel-label' }, filterItem.label), hAsync("searchcraft-slider", { min: min, max: max, granularity: granularityValue, dataType: 'date', onRangeChanged: (event) => {
                            this.handleDateRangeChanged(item.fieldName, event.detail.startValue, event.detail.endValue);
                        } })));
                }
                case 'numericRange': {
                    const item = filterItem;
                    // return date range slider
                    return (hAsync("div", { class: 'searchcraft-filter-panel-section' }, hAsync("p", { class: 'searchcraft-filter-panel-label' }, filterItem.label), hAsync("searchcraft-slider", { min: item.options.min, max: item.options.max, granularity: item.options.granularity, onRangeChanged: (event) => {
                            this.handleNumericRangeChanged(item.fieldName, event.detail.startValue, event.detail.endValue);
                        } })));
                }
                case 'facets': {
                    const item = filterItem;
                    // return "filters-list"
                    return (hAsync("div", { class: 'searchcraft-filter-panel-section' }, hAsync("p", { class: 'searchcraft-filter-panel-label' }, filterItem.label), hAsync("searchcraft-facet-list", { fieldName: item.fieldName, onFacetSelectionUpdated: (event) => {
                            this.handleFacetSelectionUpdated(item.fieldName, event.detail.paths);
                        } })));
                }
                case 'exactMatchToggle': {
                    const item = filterItem;
                    return (hAsync("searchcraft-toggle-button", { label: item.label, subLabel: item.options.subLabel, onToggleUpdated: (event) => {
                            this.handleExactMatchToggleUpdated(event.detail);
                        } }));
                }
                case 'mostRecentToggle': {
                    const item = filterItem;
                    return (hAsync("searchcraft-toggle-button", { label: item.label, subLabel: item.options.subLabel, onToggleUpdated: (event) => {
                            this.handleMostRecentToggleUpdated(event.detail);
                        } }));
                }
            }
        })));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-filter-panel",
        "$members$": {
            "items": [16],
            "unsubscribe": [32],
            "lastSearchTerm": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component provides a user-friendly interface for querying an indexed dataset, enabling users to easily search large collections of data.
 * It abstracts the complexities of index-based searching, making it accessible to users of all technical levels.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-input-form placeholder-value="Search here" />
 * ```
 *
 * ```js
 * // index.js
 * const searchInputForm = document.querySelector('searchcraft-input-form');
 *
 * ```
 */
class SearchcraftInput {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputFocus = createEvent(this, "inputFocus", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.inputInit = createEvent(this, "inputInit", 7);
    }
    /**
     * Whether or not to automatically submit the search term when the input changes.
     */
    autoSearch = true;
    /**
     * Where to place the search button.
     */
    buttonPlacement = 'none';
    /**
     * The label for the submit button.
     */
    buttonLabel;
    /**
     * The label rendered above the input.
     */
    inputLabel;
    /**
     * A custom styles object to be applied to the input element.
     */
    customStyles = {};
    /**
     * The input element's placeholder value.
     */
    placeholderValue = 'Enter Search';
    /**
     * When the input becomes focused.
     */
    inputFocus;
    /**
     * When the input becomes unfocused.
     */
    inputBlur;
    /**
     * Event emitted when input initializes.
     */
    inputInit;
    inputValue = '';
    searchTerm = '';
    error = false;
    core;
    searchStore = searchcraftStore.getState();
    init() {
        if (this.core) {
            this.searchStore.initialize(this.core);
            this.inputInit?.emit();
        }
    }
    connectedCallback() {
        this.init();
    }
    onCoreChange() {
        this.init();
    }
    handleOnInput = (event) => {
        const input = event.target;
        this.inputValue = input.value;
        if (!this.autoSearch) {
            return;
        }
        this.performSearch(input.value);
    };
    performSearch = async (value) => {
        if (value === searchcraftStore.getState().searchTerm) {
            return;
        }
        this.searchTerm = value.trim();
        this.error = false;
        this.searchStore.setSearchTerm(this.searchTerm);
        try {
            await this.searchStore.search();
        }
        catch (error) {
            console.log(error);
            this.error = true;
        }
    };
    handleClearInput = () => {
        this.inputValue = '';
        this.searchTerm = '';
        this.searchStore.setSearchTerm('');
        this.searchStore.setSearchClientResponseItems([]);
        this.error = false;
    };
    handleFormSubmit = async (event) => {
        event.preventDefault();
        await this.performSearch(this.searchTerm);
    };
    render() {
        const validatedCustomStyles = parseCustomStyles(this.customStyles);
        const isShowingClearButton = this.inputValue.length > 0;
        const inputGridClassNames = classNames('searchcraft-input-grid', {
            'searchcraft-input-grid-buttonLeft': this.buttonPlacement === 'left',
            'searchcraft-input-grid-buttonRight': this.buttonPlacement === 'right',
            'searchcraft-input-grid-buttonNone': this.buttonPlacement === 'none',
        });
        const shouldHaveVerticalGap = this.inputLabel || this.error;
        const inputGridStyles = {
            gap: shouldHaveVerticalGap ? '4px 8px' : '0px 8px',
        };
        return (hAsync("form", { key: 'f08b30d8688e110230c99dbdc0b08aaa259680d1', class: 'searchcraft-input-form', onSubmit: this.handleFormSubmit }, hAsync("div", { key: '32e8cbea58acd0d1e8b14a3ca7363f648df052f1', class: inputGridClassNames, style: inputGridStyles }, hAsync("div", { key: '769484880d0228a5b865fad2c83e6537ae55686a', class: 'searchcraft-input-button-wrapper' }, hAsync("searchcraft-button", { key: '75902602813c266d77c038d106f5a033ff64c477', onButtonClick: this.handleFormSubmit, label: this.buttonLabel })), this.inputLabel && (hAsync("div", { key: '356356b1eac93b52f8622c9c2f414fe76b70e0fe', class: 'searchcraft-input-label-wrapper' }, hAsync("searchcraft-input-label", { key: '4c5a680712b8d26a6326dde48223317b690e7a30', label: this.inputLabel }))), this.error && (hAsync("div", { key: 'e2275fe0907d60e13ac3cb6b2a23e0872c475eb3', class: 'searchcraft-input-error-wrapper' }, hAsync("searchcraft-error-message", { key: '26e7ffbe8fe43f3f5340176e68cf7763d71c4eab', errorMessage: 'Something went wrong.' }))), hAsync("div", { key: 'cfc0d53d4ec644fd453fe39b3091986d9abf2b49', class: 'searchcraft-input-wrapper' }, hAsync("input", { key: '44dcf30e32dcf4de2aeb5c64d445db468fde605b', autoComplete: 'off', class: 'searchcraft-input', onFocus: () => this.inputFocus?.emit(), onBlur: () => this.inputBlur?.emit(), onInput: (event) => {
                this.handleOnInput(event);
            }, placeholder: this.placeholderValue, style: validatedCustomStyles, type: 'text', value: this.inputValue }), hAsync("div", { key: 'a510ee45c5c1fcd8991220dcaed42bdbcef39b49', class: 'searchcraft-input-search-icon-wrapper' }, hAsync("svg", { key: '5dc9bc129a7f550f400aa23b09b38df7aa412821', class: 'searchcraft-input-search-icon', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-labelledby": 'searchcraft-title' }, hAsync("title", { key: 'af9c2cb95db7d1f182d4312bccefa97ac95e06aa', id: 'searchcraft-title' }, "Searchcraft Search Icon Light"), hAsync("path", { key: 'c2e8b250f1113670cb2435664a57725563d34efd', d: 'M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z', stroke: 'currentColor', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' }))), isShowingClearButton && (hAsync("button", { key: '0630c1533ab1c9654e9e984a1194759dec2ab535', type: 'button', class: 'searchcraft-input-clear-button', onClick: this.handleClearInput }, hAsync("svg", { key: '052abaa409746a98ee94e09e87e5345c05687dba', class: 'searchcraft-input-clear-icon', viewBox: '0 0 22 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-labelledby": 'icon-title' }, hAsync("title", { key: '795d7435b5cac2069063a6e6bf40868ddba76516', id: 'icon-title' }, "Searchcraft Clear Input Icon Light"), hAsync("path", { key: '29be529ce60d62136bde73baa2600f3664479c7f', d: 'M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z', stroke: 'currentColor', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' }))))))));
    }
    static get watchers() { return {
        "core": ["onCoreChange"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-input-form",
        "$members$": {
            "autoSearch": [4, "auto-search"],
            "buttonPlacement": [1, "button-placement"],
            "buttonLabel": [1, "button-label"],
            "inputLabel": [1, "input-label"],
            "customStyles": [1, "custom-styles"],
            "placeholderValue": [1, "placeholder-value"],
            "core": [16],
            "inputValue": [32],
            "searchTerm": [32],
            "error": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component serves as the input label for the searchcraft-input-form component.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-input-label label="Search" />
 * ```
 */
class SearchcraftInputLabel {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The classname applied to the label element.
     */
    inputLabelClassName = '';
    label = '';
    render() {
        return (hAsync("label", { key: '528396d4be9f22ff0c02d95d8bcea056576aed41', class: classNames('searchcraft-input-label', this.inputLabelClassName), htmlFor: 'searchcraft-input-id' }, this.label));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-input-label",
        "$members$": {
            "inputLabelClassName": [1, "input-label-class-name"],
            "label": [1]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to facilitate pagination of search results.
 * Once a query is submitted, calculates the number for pages.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-pagination />
 * ```
 */
class SearchcraftPagination {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The custom styles object.
     */
    customStyles;
    // store vars
    searchTerm;
    searchResultsPerPage;
    searchResultsPage;
    searchResultsCount;
    // local vars
    searchResultsPagesCount = 1;
    searchResultsRangeMin = 1;
    searchResultsRangeMax = 1;
    // store functions
    setSearchResultsPage = () => { };
    unsubscribe = () => { };
    componentDidLoad() {
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            // store vars
            this.searchTerm = state.searchTerm;
            this.searchResultsPerPage = state.searchResultsPerPage;
            this.searchResultsPage = state.searchResultsPage;
            this.searchResultsCount = state.searchResultsCount;
            // local vars
            this.searchResultsPagesCount = Math.ceil(this.searchResultsCount / this.searchResultsPerPage);
            this.searchResultsRangeMin =
                (this.searchResultsPage - 1) * this.searchResultsPerPage + 1;
            this.searchResultsRangeMax =
                (this.searchResultsPerPage - 1) * this.searchResultsPerPage +
                    this.searchResultsPerPage;
            // store functions
            this.setSearchResultsPage = state.setSearchResultsPage;
        });
    }
    disconnectedCallback() {
        this.unsubscribe?.();
    }
    handleGoToPage(page) {
        this.setSearchResultsPage(page);
    }
    renderOddPaginationItem(page) {
        return (hAsync("li", null, hAsync("button", { class: classNames('searchcraft-pagination-item', {
                'searchcraft-pagination-item-active': this.searchResultsPage === page,
            }), onClick: () => this.handleGoToPage(page), type: 'button' }, page)));
    }
    renderEvenPaginationItem(page) {
        if (this.searchResultsPagesCount <= page) {
            return;
        }
        if (this.searchResultsPagesCount <= 5 ||
            page < Math.ceil(this.searchResultsPagesCount / 2) // is the first or second even pagination item
            ? this.searchResultsPage <= page + 1
            : this.searchResultsPage >= page - 1) {
            return (hAsync("li", null, hAsync("button", { class: classNames('searchcraft-pagination-item', {
                    'searchcraft-pagination-item-active': this.searchResultsPage === page,
                }), onClick: () => this.handleGoToPage(page), type: 'button' }, page)));
        }
        return (hAsync("li", null, hAsync("span", { class: 'searchcraft-pagination-item' }, "...")));
    }
    renderMiddlePaginationItem() {
        if (this.searchResultsPagesCount <= 3) {
            return;
        }
        if (this.searchResultsPagesCount <= 5 ||
            this.searchResultsPage <= 3 ||
            this.searchResultsPage >= this.searchResultsPagesCount - 2) {
            return (hAsync("li", null, hAsync("button", { class: classNames('searchcraft-pagination-item', {
                    'searchcraft-pagination-item-active': this.searchResultsPage === 3 ||
                        this.searchResultsPage === this.searchResultsPagesCount - 2,
                }), type: 'button', onClick: () => this.handleGoToPage(this.searchResultsPage >= this.searchResultsPagesCount - 2
                    ? this.searchResultsPagesCount - 2
                    : 3) }, this.searchResultsPage >= this.searchResultsPagesCount - 2
                ? this.searchResultsPagesCount - 2
                : 3)));
        }
        return (hAsync("li", null, hAsync("span", { class: 'searchcraft-pagination-item searchcraft-pagination-item-active' }, this.searchResultsPage)));
    }
    render() {
        // early return if there isn't a searchTerm or there is 1 or fewer pages of results
        if (!this.searchTerm || this.searchResultsPagesCount <= 1) {
            return;
        }
        return (hAsync("div", { class: classNames('searchcraft-pagination', parseCustomStyles(this.customStyles || {})) }, hAsync("div", { class: 'searchcraft-pagination-control' }, hAsync("searchcraft-button", { disabled: this.searchResultsPage === 1, hierarchy: 'tertiary', onButtonClick: () => this.handleGoToPage(Math.max(1, this.searchResultsPage - 1)), label: 'Previous', iconPosition: 'left', icon: hAsync("svg", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, hAsync("title", null, "Previous page icon"), hAsync("path", { d: 'M12.5 15L7.5 10L12.5 5', stroke: 'currentColor', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' })), iconOnly: true })), hAsync("ul", { class: 'searchcraft-pagination-list' }, this.renderOddPaginationItem(1), this.renderEvenPaginationItem(2), this.renderMiddlePaginationItem(), this.renderEvenPaginationItem(this.searchResultsPagesCount > 4
            ? this.searchResultsPagesCount - 1
            : 4), this.renderOddPaginationItem(this.searchResultsPagesCount)), hAsync("div", { class: 'searchcraft-pagination-control' }, hAsync("searchcraft-button", { disabled: this.searchResultsPage === this.searchResultsPagesCount, hierarchy: 'tertiary', onButtonClick: () => {
                this.handleGoToPage(Math.min(this.searchResultsPagesCount, this.searchResultsPage + 1));
            }, label: 'Next', iconPosition: 'right', icon: hAsync("svg", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, hAsync("title", null, "Next page icon"), hAsync("path", { d: 'M7.5 15L12.5 10L7.5 5', stroke: 'currentColor', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' })), iconOnly: true }))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-pagination",
        "$members$": {
            "customStyles": [1, "custom-styles"],
            "searchTerm": [32],
            "searchResultsPerPage": [32],
            "searchResultsPage": [32],
            "searchResultsCount": [32],
            "searchResultsPagesCount": [32],
            "searchResultsRangeMin": [32],
            "searchResultsRangeMax": [32],
            "setSearchResultsPage": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * Renders a button which, when clicked, turns on popover visibility.
 */
class SearchcraftPopoverButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleOnClick() {
        searchcraftStore.getState().setPopoverVisibility(true);
    }
    render() {
        return (hAsync("button", { key: 'a8ee70b49a5309cfb1363a272ea0870c48c59688', type: 'button', onClick: this.handleOnClick.bind(this) }, hAsync("slot", { key: '9ac712ed1f6e69d73e7ade3d42501fb67a02c7ff' })));
    }
    static get cmpMeta() { return {
        "$flags$": 4,
        "$tagName$": "searchcraft-popover-button",
        "$members$": undefined,
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to display search results in a popover container that dynamically appears when the user interacts with a search input field, or when a popover-button is pressed.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-form type="fullscreen" />
 * ```
 *
 * ```js
 * // index.js
 * const popoverForm = document.querySelector('searchcraft-popover-form');
 *
 * popoverForm.popoverResultMappings = {
 *  containerHref: {
 *   fieldNames: [
 *    {
 *      fieldName: 'canonical_link',
 *      dataType: 'text',
 *    },
 *  ],
 *  };
 * ```
 */
class SearchcraftPopoverForm {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The type of popover form to render.
     *
     * - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content.
     * - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component.
     * - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.
     */
    type = 'inline';
    /**
     * Formats the content rendered for each result.
     */
    popoverResultMappings;
    /**
     * The hotkey that activates the popover.
     */
    hotkey = 'k';
    /**
     * The hotkey modifier that activates the popover. Used together with the `hotkey` prop.
     */
    hotkeyModifier = 'meta';
    isPopoverVisibleInState = false;
    unsubscribe;
    searchClientResponseItems = [];
    adClientResponseItems = [];
    searchTerm;
    isFocused = false;
    breakpointSm = 576;
    breakpointMd = 768;
    breakpointLg = 992;
    searchResultsPage;
    searchResultsPerPage;
    modalElement;
    get hostElement() { return getElement(this); }
    componentDidLoad() {
        // Loads the breakpoint values into state
        const computedStyle = getComputedStyle(document.documentElement);
        this.breakpointSm = Number.parseFloat(computedStyle.getPropertyValue('--sc-breakpoint-sm').trim());
        this.breakpointMd = Number.parseFloat(computedStyle.getPropertyValue('--sc-breakpoint-md').trim());
        this.breakpointLg = Number.parseFloat(computedStyle.getPropertyValue('--sc-breakpoint-lg').trim());
        // Set popover visiblity in state
        this.isPopoverVisibleInState = searchcraftStore.getState().isPopoverVisible;
        // Add event listeners
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        // Subscribe to state events
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            if (this.isPopoverVisibleInState !== state.isPopoverVisible) {
                this.handlePopoverVisibilityChange(state.isPopoverVisible);
            }
            this.searchClientResponseItems = [...state.searchClientResponseItems];
            this.adClientResponseItems = [...state.adClientResponseItems];
            this.searchTerm = state.searchTerm;
            this.searchResultsPage = state.searchResultsPage;
            this.searchResultsPerPage = state.searchResultsPerPage;
        });
    }
    disconnectedCallback() {
        this.unsubscribe?.();
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDocumentClick = (event) => {
        if (!this.hostElement.contains(event.target)) {
            this.isFocused = false;
        }
    };
    /**
     * Handles when popover visibility is changed in state
     */
    handlePopoverVisibilityChange(isVisible) {
        this.isPopoverVisibleInState = isVisible;
        document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    }
    /**
     * Actions to perform when various keys are pressed within the popover form.
     */
    handleDocumentKeyDown = (event) => {
        // Document-scoped actions
        if (event.key === this.hotkey) {
            this.handleHotkeyPressed(event);
        }
        // Document-scoped -> Popover-scoped keyboard event boundary
        if (!this.hostElement.contains(document.activeElement)) {
            return;
        }
        // Popover-scoped actions
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                event.preventDefault();
                this.focusOnNextListItem(event.key);
                break;
            case 'Escape':
                searchcraftStore.getState().setPopoverVisibility(false);
                break;
            default:
                return;
        }
    };
    handleInputInit = () => {
        const input = this.hostElement.querySelector('.searchcraft-input');
        input?.focus();
    };
    /**
     * When popover is `inline` and the viewport is at the smallest breakpoint,
     * focusing on the input will open a modal version of the popover form.
     */
    handleInputFocus() {
        this.isFocused = true;
        if (this.type === 'inline' &&
            window.visualViewport &&
            window.visualViewport.width < this.breakpointSm) {
            searchcraftStore.getState().setPopoverVisibility(true);
            // Appends a popover form of type=`modal` to the body
            if (!this.modalElement) {
                this.modalElement = document.createElement('searchcraft-popover-form');
                this.modalElement.popoverResultMappings = this.popoverResultMappings;
                this.modalElement.setAttribute('type', 'fullscreen');
                document.body.appendChild(this.modalElement);
            }
        }
    }
    handleModalBackdropClick(_event) {
        searchcraftStore.getState().setPopoverVisibility(false);
    }
    /**
     * When a hotkey is pressed, tests if the modifiers also match.
     * If modifiers match, toggles visibility of the popover modal.
     */
    handleHotkeyPressed(event) {
        if ((event.ctrlKey && this.hotkeyModifier === 'ctrl') ||
            (event.altKey && this.hotkeyModifier === 'alt') ||
            (event.metaKey && this.hotkeyModifier === 'meta')) {
            event.preventDefault();
            if (this.type === 'inline' && !this.isPopoverVisibleInState) {
                const hostElementInput = this.hostElement.querySelector('.searchcraft-input');
                hostElementInput?.focus();
            }
            else {
                searchcraftStore
                    .getState()
                    .setPopoverVisibility(!this.isPopoverVisibleInState);
            }
        }
    }
    handleCancelButtonClick() {
        searchcraftStore.getState().setPopoverVisibility(false);
    }
    /**
     * Moves focus to the next/previous list item in the list view. If you are at the top
     * of the list view, it moves focus back to the input.
     *
     * @param direction
     */
    focusOnNextListItem(direction) {
        const listItems = Array.from(document.querySelectorAll('a.searchcraft-popover-list-item')).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
        const currentIndex = listItems.indexOf(document.activeElement);
        if (direction === 'ArrowDown') {
            listItems[(currentIndex + 1) % listItems.length]?.focus();
        }
        else if (direction === 'ArrowUp') {
            if (currentIndex >= 1) {
                listItems[currentIndex - 1]?.focus();
            }
            else {
                const input = document.querySelector('.searchcraft-input');
                if (input) {
                    input.focus();
                    requestAnimationFrame(() => {
                        input.selectionEnd = input.value.length;
                        input.selectionStart = input.value.length;
                    });
                }
            }
        }
    }
    get hasResultsToShow() {
        return (this.searchTerm &&
            this.searchTerm?.trim()?.length > 0 &&
            this.searchClientResponseItems.length > 0);
    }
    renderInlinePopover() {
        const isListViewVisible = this.hasResultsToShow && this.isFocused;
        const popoverFormClassNames = classNames('searchcraft-popover-form searchcraft-popover-form-inline', {
            'searchcraft-popover-form-active': isListViewVisible,
        });
        return (hAsync("div", { class: popoverFormClassNames }, hAsync("searchcraft-input-form", { onInputFocus: this.handleInputFocus.bind(this) }), isListViewVisible && (hAsync("div", { class: 'searchcraft-popover-inline-wrapper-outer' }, hAsync("div", { class: 'searchcraft-popover-inline-wrapper-inner' }, hAsync("searchcraft-popover-list-view", { popoverResultMappings: this.popoverResultMappings, searchClientResponseItems: this.searchClientResponseItems, adClientResponseItems: this.adClientResponseItems, searchResultsPage: this.searchResultsPage, searchResultsPerPage: this.searchResultsPerPage }))))));
    }
    renderModalPopover() {
        if (this.isPopoverVisibleInState) {
            const popoverFormClassNames = classNames('searchcraft-popover-form', {
                'searchcraft-popover-form-active': this.hasResultsToShow,
            });
            return (hAsync("div", { class: 'searchcraft-popover-form-modal' }, hAsync("div", { class: 'searchcraft-popover-form-modal-backdrop', onClick: this.handleModalBackdropClick }), hAsync("div", { class: 'searchcraft-popover-form-modal-inner' }, hAsync("div", { class: popoverFormClassNames }, hAsync("div", { class: 'searchcraft-popover-form-input-wrapper' }, hAsync("searchcraft-input-form", { onInputFocus: this.handleInputFocus.bind(this), onInputInit: this.handleInputInit.bind(this) }), hAsync("button", { type: 'button', class: 'searchcraft-popover-form-cancel-button', onClick: this.handleCancelButtonClick.bind(this) }, "Cancel")), this.hasResultsToShow && (hAsync("searchcraft-popover-list-view", { popoverResultMappings: this.popoverResultMappings, searchClientResponseItems: this.searchClientResponseItems, adClientResponseItems: this.adClientResponseItems, searchResultsPage: this.searchResultsPage, searchResultsPerPage: this.searchResultsPerPage }))))));
        }
    }
    renderFullscreenPopover() {
        if (this.isPopoverVisibleInState) {
            return (hAsync("div", { class: 'searchcraft-popover-form-fullscreen' }, hAsync("div", { class: 'searchcraft-popover-form' }, hAsync("div", { class: 'searchcraft-popover-form-input-wrapper' }, hAsync("searchcraft-input-form", { onInputFocus: this.handleInputFocus.bind(this), onInputInit: this.handleInputInit.bind(this) }), hAsync("button", { type: 'button', class: 'searchcraft-popover-form-cancel-button', onClick: this.handleCancelButtonClick.bind(this) }, "Cancel")), this.hasResultsToShow && (hAsync("searchcraft-popover-list-view", { popoverResultMappings: this.popoverResultMappings, searchClientResponseItems: this.searchClientResponseItems, adClientResponseItems: this.adClientResponseItems, searchResultsPage: this.searchResultsPage, searchResultsPerPage: this.searchResultsPerPage })))));
        }
    }
    render() {
        switch (this.type) {
            case 'inline':
                return this.renderInlinePopover();
            case 'modal':
                return this.renderModalPopover();
            case 'fullscreen':
                return this.renderFullscreenPopover();
        }
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-popover-form",
        "$members$": {
            "type": [1],
            "popoverResultMappings": [16],
            "hotkey": [1],
            "hotkeyModifier": [1, "hotkey-modifier"],
            "isPopoverVisibleInState": [32],
            "unsubscribe": [32],
            "searchClientResponseItems": [32],
            "adClientResponseItems": [32],
            "searchTerm": [32],
            "isFocused": [32],
            "breakpointSm": [32],
            "breakpointMd": [32],
            "breakpointLg": [32],
            "searchResultsPage": [32],
            "searchResultsPerPage": [32],
            "modalElement": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * A single list item rendered in a searchcraft-popover-list-view.
 */
class SearchcraftPopoverListItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    item;
    popoverResultMappings;
    /** The document position relative to the search results (For Measure) */
    documentPosition = 0;
    href;
    imageSrc;
    imageAlt;
    titleContent;
    subtitleContent;
    mapValuesFromDocument(document) {
        this.titleContent = getDocumentValueFromSearchResultMapping(document, this.popoverResultMappings?.title);
        this.subtitleContent = getDocumentValueFromSearchResultMapping(document, this.popoverResultMappings?.subtitle);
        this.href = getDocumentValueFromSearchResultMapping(document, this.popoverResultMappings?.href);
        this.imageSrc = getDocumentValueFromSearchResultMapping(document, this.popoverResultMappings?.imageSource);
        this.imageAlt = getDocumentValueFromSearchResultMapping(document, this.popoverResultMappings?.imageAlt);
    }
    connectedCallback() {
        if (this.item) {
            this.mapValuesFromDocument(this.item.document);
        }
    }
    disconnectedCallback() { }
    handleLinkClick = () => {
        const state = searchcraftStore.getState();
        const searchcraft = state.getSearchcraftInstance();
        if (searchcraft) {
            const document_position = this.documentPosition;
            const search_term = state.searchTerm;
            const number_of_documents = state.searchClientResponseItems.length || 0;
            searchcraft.measureClient?.sendMeasureEvent('document_clicked', {
                document_position,
                number_of_documents,
                search_term,
            });
        }
    };
    render() {
        return (hAsync("a", { key: '870fae8c0019ea24d9ecd173a781a38e3b17f8de', class: 'searchcraft-popover-list-item', href: this.href, onClick: this.handleLinkClick.bind(this) }, this.imageSrc && (hAsync("div", { key: '9e200a2be177fed7f6303fdc1ba466fc47817b5d', class: 'searchcraft-popover-list-item-image-wrapper' }, hAsync("img", { key: '22124b2856cd41220ac852a1fbc94cbf2a1cd9f9', alt: this.imageAlt, src: this.imageSrc, class: 'searchcraft-popover-list-item-image' }))), hAsync("div", { key: 'b3f0bb6784a36befd044e71798915994093177ab', class: 'searchcraft-popover-list-item-info-wrapper' }, hAsync("p", { key: 'caa22a8d68b56814ee29498db48fe1c65d8d7644', class: 'searchcraft-popover-list-item-title' }, this.titleContent), hAsync("p", { key: '63e11be221d6f274855f7989b3a9dc4532c08e05', class: 'searchcraft-popover-list-item-subtitle' }, this.subtitleContent))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-popover-list-item",
        "$members$": {
            "item": [16],
            "popoverResultMappings": [16],
            "documentPosition": [2, "document-position"],
            "href": [32],
            "imageSrc": [32],
            "imageAlt": [32],
            "titleContent": [32],
            "subtitleContent": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

var purify = {exports: {}};

/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */

(function (module, exports) {
(function (global, factory) {
  module.exports = factory() ;
})(commonjsGlobal, (function () {
  const {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze,
    seal,
    create
  } = Object; // eslint-disable-line import/no-mutable-exports
  let {
    apply,
    construct
  } = typeof Reflect !== 'undefined' && Reflect;
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return new Func(...args);
    };
  }
  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const arraySplice = unapply(Array.prototype.splice);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);
  /**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param func - The function to be wrapped and called.
   * @returns A new function that calls the given function with a specified thisArg and arguments.
   */
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  /**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param func - The constructor function to be wrapped and called.
   * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
   */
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }
  /**
   * Add properties to a lookup table
   *
   * @param set - The set to which elements will be added.
   * @param array - The array containing elements to be added to the set.
   * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns The modified set with added elements.
   */
  function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === 'string') {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  /**
   * Clean up an array to harden against CSPP
   *
   * @param array - The array to be cleaned.
   * @returns The cleaned version of the array
   */
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }
  /**
   * Shallow clone an object
   *
   * @param object - The object to be cloned.
   * @returns A new object that copies the original.
   */
  function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === 'object' && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }
  /**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param object - The object to look up the getter function in its prototype chain.
   * @param prop - The property name for which to find the getter function.
   * @returns The getter function found in the prototype chain or a fallback function.
   */
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }

  const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);
  const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);
  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);
  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  const text = freeze(['#text']);

  const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'popover', 'popovertarget', 'popovertargetaction', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'wrap', 'xmlns', 'slot']);
  const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'amplitude', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'exponent', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'slope', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'tablevalues', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
  const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  const DOCTYPE_NAME = seal(/^html$/i);
  const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);

  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ARIA_ATTR: ARIA_ATTR,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT,
    DATA_ATTR: DATA_ATTR,
    DOCTYPE_NAME: DOCTYPE_NAME,
    ERB_EXPR: ERB_EXPR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR
  });

  /* eslint-disable @typescript-eslint/indent */
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
  };
  const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param trustedTypes The policy factory.
   * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */
  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }
    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html) {
          return html;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  const _createHooksMap = function _createHooksMap() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = root => createDOMPurify(root);
    DOMPurify.version = '3.2.4';
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    let {
      document
    } = window;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      const template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document;
    const {
      importNode
    } = originalDocument;
    let hooks = _createHooksMap();
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR,
      ERB_EXPR,
      TMPLIT_EXPR,
      DATA_ATTR,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE,
      CUSTOM_ELEMENT
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */
    /* allowed element names */
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
    /* Allowed attribute names */
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
    /*
     * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    let FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    let FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */
    let ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */
    let ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */
    let ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */
    let ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    let SAFE_FOR_TEMPLATES = false;
    /* Output should be safe even for XML used within HTML and alike.
     * This means, DOMPurify removes comments when containing risky content.
     */
    let SAFE_FOR_XML = true;
    /* Decide if document with <html>... should be returned */
    let WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */
    let SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    let FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    let RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    let RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    let RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */
    let SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */
    let KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    let IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */
    let USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    let HTML_INTEGRATION_POINTS = addToSet({}, ['annotation-xml']);
    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Parsing of strict XHTML documents */
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;
    /* Keep a reference to config to pass to hooks */
    let CONFIG = null;
    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */
    const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param cfg optional config literal
     */
    // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */
      if (!cfg || typeof cfg !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */
      ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
      HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }
        // Overwrite existing TrustedTypes policy.
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
        // Sign local variables required by `sanitize`.
        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        }
        // If creating the internal policy succeeded sign internal variables.
        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      }
      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
    /**
     * @param element a DOM element whose namespace is being checked
     * @returns Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    const _checkValidNamespace = function _checkValidNamespace(element) {
      let parent = getParentNode(element);
      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }
        // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }
        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }
        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }
        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }
      // For XHTML and XML documents that support custom namespaces
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }
      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.
      return false;
    };
    /**
     * _forceRemove
     *
     * @param node a DOM node
     */
    const _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        getParentNode(node).removeChild(node);
      } catch (_) {
        remove(node);
      }
    };
    /**
     * _removeAttribute
     *
     * @param name an Attribute name
     * @param element a DOM node
     */
    const _removeAttribute = function _removeAttribute(name, element) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: element.getAttributeNode(name),
          from: element
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: element
        });
      }
      element.removeAttribute(name);
      // We void attribute values for unremovable "is" attributes
      if (name === 'is') {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(element);
          } catch (_) {}
        } else {
          try {
            element.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param dirty - a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    const _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param root The root element or node to start traversing on.
     * @return The created NodeIterator
     */
    const _createNodeIterator = function _createNodeIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };
    /**
     * _isClobbered
     *
     * @param element element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    const _isClobbered = function _isClobbered(element) {
      return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
    };
    /**
     * Checks whether the given object is a DOM node.
     *
     * @param value object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    const _isNode = function _isNode(value) {
      return typeof Node === 'function' && value instanceof Node;
    };
    function _executeHooks(hooks, currentNode, data) {
      arrayForEach(hooks, hook => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    }
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     * @param currentNode to check for permission to exist
     * @return true if node was killed, false if left alive
     */
    const _sanitizeElements = function _sanitizeElements(currentNode) {
      let content = null;
      /* Execute a hook if present */
      _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Now let's check the element's type and name */
      const tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */
      _executeHooks(hooks.uponSanitizeElement, currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */
      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove any occurrence of processing instructions */
      if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove any kind of possibly harmful comments */
      if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              const childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */
      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
        /* Get the element's text content */
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          content = stringReplace(content, expr, ' ');
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */
      _executeHooks(hooks.afterSanitizeElements, currentNode, null);
      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param lcTag Lowercase tag name of containing element.
     * @param lcName Lowercase attribute name.
     * @param value Attribute value.
     * @return Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
        return false;
      } else ;
      return true;
    };
    /**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param tagName name of the tag of the node to sanitize
     * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */
    const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
      return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param currentNode to sanitize
     */
    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      /* Execute a hook if present */
      _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
      const {
        attributes
      } = currentNode;
      /* Check if we have attributes; if not we might have a text node */
      if (!attributes || _isClobbered(currentNode)) {
        return;
      }
      const hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR,
        forceKeepAttr: undefined
      };
      let l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        let value = name === 'value' ? attrValue : stringTrim(attrValue);
        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */
        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode);
          // Prefix the value and later re-create the attribute with the sanitized value
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Work around a security issue with comments inside attributes */
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */
        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
            value = stringReplace(value, expr, ' ');
          });
        }
        /* Is `value` valid for this attribute? */
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Handle attributes that require Trusted Types */
        if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {}
      }
      /* Execute a hook if present */
      _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param fragment to iterate over recursively
     */
    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment);
      /* Execute a hook if present */
      _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
        /* Sanitize tags and elements */
        _sanitizeElements(shadowNode);
        /* Check attributes next */
        _sanitizeAttributes(shadowNode);
        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
      }
      /* Execute a hook if present */
      _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
    };
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Return dirty HTML if DOMPurify cannot run */
      if (!DOMPurify.isSupported) {
        return dirty;
      }
      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */
      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */
        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        _sanitizeElements(currentNode);
        /* Check attributes next */
        _sanitizeAttributes(currentNode);
        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
      }
      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */
      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          serializedHTML = stringReplace(serializedHTML, expr, ' ');
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function () {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function (entryPoint, hookFunction) {
      if (hookFunction !== undefined) {
        const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
        return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
      }
      return arrayPop(hooks[entryPoint]);
    };
    DOMPurify.removeHooks = function (entryPoint) {
      hooks[entryPoint] = [];
    };
    DOMPurify.removeAllHooks = function () {
      hooks = _createHooksMap();
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();

  return purify;

}));

}(purify));

var DOMPurify = purify.exports;

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id
};

/**
 * An inline ad meant to be rendered in a list of search results.
 */
class SearchcraftPopoverListItemAd {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    adSource = 'Custom';
    adClientResponseItem;
    searchTerm;
    isSearchInProgress = false;
    get hostElement() { return getElement(this); }
    core;
    adContainerId = nanoid();
    intersectionObserver;
    storeUnsubscribe;
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
        /**
         * Handles when an ad container is first rendered.
         * Core emits an ad_container_rendered event and performs ad client side effects
         *
         */
        this.core?.handleAdContainerRendered({
            adClientResponseItem: this.adClientResponseItem,
            adContainerId: this.adContainerId,
            adSource: this.adSource,
            searchTerm: this.searchTerm,
        });
    }
    componentDidLoad() {
        /**
         * Handles when an ad container is viewable within the document,
         * Core emits an ad_container_viewed event and performs ad client side effects
         */
        if (this.hostElement) {
            this.intersectionObserver = new IntersectionObserver(([entry]) => {
                if (entry?.isIntersecting && !this.isSearchInProgress) {
                    this.core?.handleAdContainerViewed({
                        adClientResponseItem: this.adClientResponseItem,
                        adContainerId: this.adContainerId,
                        adSource: this.adSource,
                        searchTerm: this.searchTerm || '',
                    });
                }
            }, { threshold: 0 });
            this.intersectionObserver.observe(this.hostElement);
        }
    }
    disconnectedCallback() {
        console.log('disconnectedCallback()', this.adContainerId);
        this.storeUnsubscribe?.();
        this.intersectionObserver?.disconnect();
    }
    renderADMAd() {
        const item = this.adClientResponseItem;
        if (!item.admAd) {
            return;
        }
        return (hAsync("a", { class: 'searchcraft-adm-ad', href: item.admAd.click_url }, item.admAd.image_url && (hAsync("div", { class: 'searchcraft-adm-ad-image-wrapper' }, hAsync("img", { alt: item.admAd.term || 'image', src: item.admAd.image_url, class: 'searchcraft-adm-ad-image' }))), hAsync("div", { class: 'searchcraft-adm-ad-info-wrapper' }, hAsync("p", { class: 'searchcraft-adm-ad-title' }, item.admAd.term), item.admAd.price && (hAsync("p", { class: 'searchcraft-adm-ad-subtitle' }, item.admAd.price)))));
    }
    renderCustomAd() {
        const templateRenderFunction = this.core?.config?.customAdTemplate;
        const containerId = `searchcraft-custom-ad-${this.adContainerId}`;
        let containerInnerHTML = '<p>Custom Ad Placeholder</p>';
        if (templateRenderFunction) {
            containerInnerHTML = templateRenderFunction({
                searchTerm: this.searchTerm || '',
                adContainerId: this.adContainerId,
            });
        }
        return (hAsync("div", { class: 'searchcraft-custom-ad', id: containerId, "data-searchcraft-ad-container-id": this.adContainerId, innerHTML: DOMPurify.sanitize(containerInnerHTML) }));
    }
    renderNativoAd() {
        const nativoClassName = this.core?.config.nativoAdClassName || 'ntv-item';
        return hAsync("div", { class: nativoClassName });
    }
    render() {
        // Don't render ads while search is in progress
        if (this.isSearchInProgress) {
            return;
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
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-ad",
        "$members$": {
            "adSource": [1, "ad-source"],
            "adClientResponseItem": [16],
            "searchTerm": [32],
            "isSearchInProgress": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to display a list of results within a popover interface.
 * It is consumed within the `searchcraft-popover-form` component.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-list-view />
 * ```
 */
class SearchcraftPopoverListView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The mappings that define how the data in the documents are mapped to the
     * list-view-item elements.
     */
    popoverResultMappings;
    /**
     * The items to render in the list view.
     */
    searchClientResponseItems;
    adClientResponseItems;
    searchResultsPage;
    searchResultsPerPage;
    config = searchcraftStore.getState().core?.config;
    renderWithADMAds() {
        return (hAsync("div", { class: 'searchcraft-popover-list-view' }, this.adClientResponseItems?.map((item) => (hAsync("searchcraft-ad", { adClientResponseItem: item, adSource: 'adMarketplace', key: item.id }))), this.searchClientResponseItems?.map((item, index) => (hAsync("searchcraft-popover-list-item", { item: item, key: item.id, popoverResultMappings: this.popoverResultMappings, documentPosition: this.searchResultsPerPage * (this.searchResultsPage - 1) + index })))));
    }
    renderWithCustomAds() {
        const itemsToRender = [];
        const interstitialInterval = this.config?.customAdInterstitialInterval || 0;
        const interstitialQuantity = this.config?.customAdInterstitialQuantity || 1;
        const adStartQuantity = this.config?.customAdStartQuantity || 0;
        const adEndQuantity = this.config?.customAdEndQuantity || 0;
        const searchItems = this.searchClientResponseItems || [];
        // Renders ads at beginning
        for (let n = 0; n < adStartQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Custom', key: `${n}-ad` }));
        }
        // Renders search results + interstitial ads
        searchItems.forEach((item, index) => {
            if (interstitialInterval &&
                index % interstitialInterval === 0 &&
                index + interstitialInterval < searchItems.length &&
                index >= interstitialInterval) {
                for (let n = 0; n < interstitialQuantity; n++) {
                    itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Custom', key: `${item.id}-ad-${n}` }));
                }
            }
            itemsToRender.push(hAsync("searchcraft-popover-list-item", { item: item, key: item.id, popoverResultMappings: this.popoverResultMappings, documentPosition: this.searchResultsPerPage * (this.searchResultsPage - 1) + index }));
        });
        // Renders ads at end
        for (let n = 0; n < adEndQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Custom', key: `${n}-ad` }));
        }
        return hAsync("div", { class: 'searchcraft-popover-list-view' }, itemsToRender);
    }
    renderWithNativoAds() {
        const itemsToRender = [];
        const interstitialStartIndex = this.config?.nativoAdInterstialStartIndex || 0;
        const interstitialInterval = this.config?.nativoAdInterstitialInterval || 0;
        const interstitialQuantity = this.config?.nativoAdInterstitialQuantity || 1;
        const adStartQuantity = this.config?.nativoAdStartQuantity || 0;
        const adEndQuantity = this.config?.nativoAdEndQuantity || 0;
        const searchItems = this.searchClientResponseItems || [];
        // Renders ads at beginning
        for (let n = 0; n < adStartQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Nativo', key: `${n}-ad` }));
        }
        // Renders search results + interstitial ads
        searchItems.forEach((item, index) => {
            if (interstitialInterval &&
                (index + interstitialStartIndex) % interstitialInterval === 0 &&
                index + interstitialInterval < searchItems.length &&
                index >= interstitialInterval) {
                for (let n = 0; n < interstitialQuantity; n++) {
                    itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Nativo', key: `${item.id}-ad-${n}` }));
                }
            }
            itemsToRender.push(hAsync("searchcraft-popover-list-item", { item: item, key: item.id, popoverResultMappings: this.popoverResultMappings, documentPosition: this.searchResultsPerPage * (this.searchResultsPage - 1) + index }));
        });
        // Renders ads at end
        for (let n = 0; n < adEndQuantity; n++) {
            itemsToRender.push(hAsync("searchcraft-ad", { adSource: 'Nativo', key: `${n}-ad` }));
        }
        return hAsync("div", { class: 'searchcraft-popover-list-view' }, itemsToRender);
    }
    renderWithNoAds() {
        return (hAsync("div", { class: 'searchcraft-popover-list-view' }, this.searchClientResponseItems?.map((item, index) => (hAsync("searchcraft-popover-list-item", { item: item, key: item.id, popoverResultMappings: this.popoverResultMappings, documentPosition: this.searchResultsPerPage * (this.searchResultsPage - 1) + index })))));
    }
    render() {
        switch (this.config?.adSource || 'None') {
            case 'adMarketplace':
                return this.renderWithADMAds();
            case 'Custom':
                return this.renderWithCustomAds();
            case 'Nativo':
                return this.renderWithNativoAds();
            default:
                return this.renderWithNoAds();
        }
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-popover-list-view",
        "$members$": {
            "popoverResultMappings": [16],
            "searchClientResponseItems": [16],
            "adClientResponseItems": [16],
            "searchResultsPage": [2, "search-results-page"],
            "searchResultsPerPage": [2, "search-results-per-page"]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to display the number of results returned from a search query.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <script>
 *  const resultsInfo = document.querySelector('searchcraft-results-info');
 *  resultsInfo.customFormatter = (range, count, responseTime) =>
 *    `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
 * </script>
 *
 * <searchcraft-results-info />
 * ```
 */
class SearchcraftResultsInfo {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The custom formatter for the resulting string.
     *
     * @example
     * ```ts
     *  resultsInfo.customFormatter = (range, count, responseTime) =>
     *    `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
     * ```
     */
    customFormatter;
    /**
     * The custom styles object.
     */
    customStyles;
    // store vars
    searchTerm;
    searchResultsPage;
    searchResultsPerPage;
    searchResultsCount;
    // local vars
    count = 0;
    range = [0, 0];
    responseTime = '0';
    unsubscribe = () => { };
    connectedCallback() {
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            // store vars
            this.searchTerm = state.searchTerm;
            this.searchResultsPage = state.searchResultsPage;
            this.searchResultsPerPage = state.searchResultsPerPage;
            this.searchResultsCount = state.searchResultsCount;
            // local vars
            this.count = this.searchResultsCount;
            this.range[0] =
                this.searchResultsPage <= 1
                    ? 1
                    : this.searchResultsPerPage * (this.searchResultsPage - 1);
            this.range[1] = this.searchResultsPerPage * this.searchResultsPage;
            this.range[1] =
                this.range[1] > this.searchResultsCount
                    ? this.searchResultsCount
                    : this.range[1];
            this.responseTime = ((state.searchResponseTimeTaken || 0) * 1000).toFixed(2);
        });
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        if (!this.searchTerm || this.searchResultsCount === 0) {
            return null;
        }
        return (hAsync("p", { class: classNames('searchcraft-results-info', parseCustomStyles(this.customStyles || {})) }, this.customFormatter
            ? this.customFormatter([
                formatNumberWithCommas(this.range[0]),
                formatNumberWithCommas(this.range[1]),
            ], formatNumberWithCommas(this.count), this.responseTime)
            : `${this.count} results found in ${this.responseTime}ms`));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-results-info",
        "$members$": {
            "customFormatter": [16],
            "customStyles": [1, "custom-styles"],
            "searchTerm": [32],
            "searchResultsPage": [32],
            "searchResultsPerPage": [32],
            "searchResultsCount": [32],
            "count": [32],
            "range": [32],
            "responseTime": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to choose the number of search results displayed.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-search-results-per-page increment="20" />
 * ```
 */
class SearchcraftSearchResultsPerPage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The amount the options will increase (e.g. 20 = [20, 40, 60, 80, 100]).
     * The base value is defined by the `searchResultsPerPage` option in the configuration.
     */
    increment = 20;
    /**
     * The custom styles object.
     */
    customStyles;
    // store vars
    searchTerm;
    searchResultsPage;
    searchResultsPerPage;
    searchResultsCount;
    searchResultsPagesCount;
    // local vars
    initialSearchResultsPerPage;
    // store functions
    setSearchResultsPerPage = () => { };
    setSearchResultsPage = () => { };
    unsubscribe = () => { };
    componentDidLoad() {
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            // store vars
            this.searchTerm = state.searchTerm;
            this.searchResultsPerPage = state.searchResultsPerPage;
            this.searchResultsPage = state.searchResultsPage;
            this.searchResultsCount = state.searchResultsCount;
            // local vars
            this.searchResultsPagesCount = Math.ceil(this.searchResultsCount / this.searchResultsPerPage);
            // store functions
            this.setSearchResultsPage = state.setSearchResultsPage;
            this.setSearchResultsPerPage = state.setSearchResultsPerPage;
        });
        this.initialSearchResultsPerPage =
            searchcraftStore.getState().searchResultsPerPage;
    }
    disconnectedCallback() {
        this.unsubscribe?.();
    }
    render() {
        // early return if there isn't a searchTerm or there is 1 or fewer pages of results
        if (!this.searchTerm || this.searchResultsPagesCount <= 1) {
            return;
        }
        return (hAsync("div", { class: classNames('searchcraft-search-results-per-page', parseCustomStyles(this.customStyles || {})) }, hAsync("div", { class: 'searchcraft-search-results-per-page-select' }, hAsync("label", { class: 'searchcraft-search-results-per-page-select-label', htmlFor: 'searchcraft-search-results-per-page-select-input' }, "Results Per Page"), hAsync("div", { class: 'searchcraft-search-results-per-page-select-input' }, hAsync("searchcraft-select", { inputId: 'searchcraft-search-results-per-page-select-input', name: 'results-per-page', options: [...Array(5)].map((_, index) => {
                const value = this.initialSearchResultsPerPage +
                    Number(this.increment) * index;
                return {
                    label: `${value}`,
                    value,
                };
            }), onSelectChange: (event) => {
                this.setSearchResultsPerPage(Number(event.detail));
                this.setSearchResultsPage(1);
            } })))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-search-results-per-page",
        "$members$": {
            "increment": [8],
            "customStyles": [1, "custom-styles"],
            "searchTerm": [32],
            "searchResultsPage": [32],
            "searchResultsPerPage": [32],
            "searchResultsCount": [32],
            "searchResultsPagesCount": [32],
            "initialSearchResultsPerPage": [32],
            "setSearchResultsPerPage": [32],
            "setSearchResultsPage": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to allow users to select between a group of options.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-select
 *  inputId="searchcraft-select"
 *  name="searchcraft-select"
 *  options="[{ label: 'label', value: 'value' }]"
 * />
 * ```
 */
class SearchcraftSelect {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectChange = createEvent(this, "selectChange", 7);
    }
    /**
     * The caption displayed below the select input.
     */
    caption;
    /**
     * Whether the select input is disabled.
     */
    disabled = false;
    /**
     * The ID for the select input.
     */
    inputId;
    /**
     * The label of the select input.
     */
    label;
    /**
     * The ID for the label of the select input.
     */
    labelId;
    /**
     * The name of the select input.
     */
    name;
    /**
     * The options for the select input.
     */
    options = [];
    /**
     * A custom styles object.
     */
    customStyles;
    /**
     * The event fired when the select is changed.
     */
    selectChange;
    searchResultsPerPage;
    setSearchResultsPage = () => { };
    setSearchResultsPerPage = () => { };
    handleSelectChange = (event) => {
        this.selectChange.emit(event.target.value);
    };
    handleGoToPage(page) {
        this.setSearchResultsPage(page);
    }
    render() {
        return (hAsync("div", { key: '5024d49d89a3649a5de591d37ded304a9dfb36d9', class: classNames('searchcraft-select', parseCustomStyles(this.customStyles || {})) }, this.label && (hAsync("label", { key: '005aea9b190e5a6c041721e20395be23f76faab6', class: 'searchcraft-select-label', id: this.labelId || `${this.inputId}-label`, htmlFor: this.inputId }, this.label)), hAsync("div", { key: '209d56844c0bcd241e73bafcad24fac927fe7ffa', class: 'searchcraft-select-input-wrapper' }, hAsync("select", { key: '010c9e596ef45a303f84c0ac0fa54ab67556d7b6', "aria-labelledby": this.label ? this.labelId || `${this.inputId}-label` : undefined, class: 'searchcraft-select-input', disabled: this.disabled, id: this.inputId, name: this.name, onChange: this.handleSelectChange }, (typeof this.options === 'string'
            ? JSON.parse(this.options)
            : this.options).map(({ label, value, selected }) => {
            return (hAsync("option", { key: value, value: value, selected: selected }, label));
        })), hAsync("svg", { key: '51d9fb79381468ee0992475ba376df5a5961116c', class: 'searchcraft-select-input-icon', width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, hAsync("title", { key: '59186138953557764915d41708d4bcc23a9bb97f' }, "Select dropdown icon"), hAsync("path", { key: 'ec2c962df16cb68bdaf3e2c32e57d875a63957a9', d: 'M5 7.5L10 12.5L15 7.5', stroke: 'currentColor', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' }))), this.caption && (hAsync("p", { key: '742bc2dbd8371938894d49bb37d429d1b7a07d7a', class: 'searchcraft-select-caption' }, this.caption))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-select",
        "$members$": {
            "caption": [1],
            "disabled": [4],
            "inputId": [1, "input-id"],
            "label": [1],
            "labelId": [1, "label-id"],
            "name": [1],
            "options": [1],
            "customStyles": [1, "custom-styles"],
            "searchResultsPerPage": [32],
            "setSearchResultsPage": [32],
            "setSearchResultsPerPage": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component is designed to allow users to select a value from a range defined by a minimum and maximum value.
 * The component renders a slider interface, which can be used to visually choose a value between two boundaries.
 * It is consumed by the `searchcraft-filter-panel` component.
 */
class SearchcraftSlider {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rangeChanged = createEvent(this, "rangeChanged", 7);
    }
    /**
     * The maximum value allowed.
     */
    max = 100;
    /**
     * The minimum value allowed.
     */
    min = 0;
    /**
     * The granularity that the value must adhere to.
     */
    granularity = getMillis('month');
    /** The type of data allowed. */
    dataType = 'number';
    endValue = this.max;
    startValue = this.min;
    lastFocusedHandle = 'max';
    /**
     * When the range has changed.
     * */
    rangeChanged;
    componentDidLoad() {
        this.startValue = this.min;
        this.endValue = this.max;
    }
    emitUpdate = async () => {
        this.rangeChanged?.emit({
            startValue: this.startValue,
            endValue: this.endValue,
        });
    };
    handleStartValueChange = (event) => {
        const inputElement = event.target;
        const value = Number.parseInt(inputElement.value, 10);
        this.lastFocusedHandle = 'min';
        if (value <= this.endValue) {
            this.startValue = value;
            this.emitUpdate();
        }
        else {
            this.startValue = this.endValue;
            inputElement.value = `${this.endValue}`;
        }
    };
    handleEndValueChange = (event) => {
        const inputElement = event.target;
        const value = Number.parseInt(inputElement.value, 10);
        this.lastFocusedHandle = 'max';
        if (value >= this.startValue) {
            this.endValue = value;
            this.emitUpdate();
        }
        else {
            this.endValue = this.startValue;
            inputElement.value = `${this.startValue}`;
        }
    };
    render() {
        const rangeMin = this.min;
        const rangeMax = this.max;
        const startPercent = ((this.startValue - rangeMin) / (rangeMax - rangeMin)) * 100;
        const endPercent = ((this.endValue - rangeMin) / (rangeMax - rangeMin)) * 100;
        const startLabel = this.dataType === 'number'
            ? this.startValue
            : new Date(this.startValue).getFullYear();
        const endLabel = this.dataType === 'number'
            ? this.endValue
            : new Date(this.endValue).getFullYear();
        return (hAsync("div", { key: 'ec4a36e1ce6534b7c077114086d759e0b1e7a24e', class: 'searchcraft-slider-container' }, hAsync("div", { key: '35487cbeaeeb23052631804704645ca929340f70', class: 'searchcraft-slider-range-container' }, hAsync("div", { key: '186e699def8e7a6e58e8ad5f04953ac1c6584344', class: 'searchcraft-slider-active-range', style: {
                left: `${startPercent}%`,
                width: `${endPercent - startPercent}%`,
            } }), hAsync("input", { key: '97638e2a1471888c2be47f7526e9dd98fea58683', class: classNames('searchcraft-slider-input', 'searchcraft-slider-input-min-handle'), max: this.max, min: this.min, onInput: this.handleStartValueChange.bind(this), step: this.granularity, style: { zIndex: this.lastFocusedHandle === 'min' ? '2' : '1' }, type: 'range', value: this.startValue }), hAsync("input", { key: 'db2abded80b606d17bde1677e4acc09a85e6e20e', class: classNames('searchcraft-slider-input', 'searchcraft-slider-input-max-handle'), max: this.max, min: this.min, onInput: this.handleEndValueChange.bind(this), step: this.granularity, style: { zIndex: this.lastFocusedHandle === 'max' ? '2' : '1' }, type: 'range', value: this.endValue })), hAsync("div", { key: '83954b6955a872a17377d506d2d8458059acac03', class: 'searchcraft-slider-label-container' }, hAsync("span", { key: 'b5315b4438385ecf5df3f76579fdf102b6a8c39c', class: 'searchcraft-slider-label' }, startLabel), hAsync("span", { key: '875094ac7ee69e04c3a16407388dd27f167b3c8f', class: 'searchcraft-slider-label' }, endLabel))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-slider",
        "$members$": {
            "max": [2],
            "min": [2],
            "granularity": [2],
            "dataType": [1, "data-type"],
            "endValue": [32],
            "startValue": [32],
            "lastFocusedHandle": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

var styles = `:root{--sc-text-base-size: 1em;--sc-text-scale-ratio: 1.1;--sc-font-family: sans-serif;--sc-font-bold: 700;--sc-font-normal: 400;--sc-heading-1-font-size: calc( var(--sc-text-base-size) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) );--sc-heading-2-font-size: calc( var(--sc-text-base-size) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) );--sc-heading-3-font-size: calc( var(--sc-text-base-size) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) );--sc-heading-4-font-size: calc( var(--sc-text-base-size) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) );--sc-heading-5-font-size: calc( var(--sc-text-base-size) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) );--sc-heading-6-font-size: calc( var(--sc-text-base-size) / ( var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) ) );--sc-body-font-size: calc(var(--sc-text-base-size));--sc-body-small-font-size: calc( var(--sc-text-base-size) / ( var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) * var(--sc-text-scale-ratio) ) )}:root{--sc-border-radius: 8px;--sc-border-radius-sm: calc(var(--sc-border-radius) / 2);--sc-border-radius-lg: calc(var(--sc-border-radius) * 2)}:root{--sc-breakpoint-sm: 576px;--sc-breakpoint-md: 768px;--sc-breakpoint-lg: 992px}:root{--sc-surface-neutral-primary: var(--sc-color-background, #ffffff);--sc-color-background-hover: hsl( from var(--sc-color-background) h s clamp(10, calc(l + 5), 95) );--sc-surface-neutral-primary-hover: var(--sc-color-background-hover, #fafafa);--sc-color-background-active: hsl( from var(--sc-color-background) h s clamp(5, calc(l - 5), 90) );--sc-surface-neutral-primary-active: var( --sc-color-background-active, #f7f7f7 );--sc-surface-neutral-secondary: var( --sc-color-background-secondary, var(--sc-color-background, #f3f3f3) );--sc-surface-neutral-secondary-hover: var( --sc-color-background-secondary-hover, var(--sc-color-background-hover, #e6e6e6) );--sc-surface-neutral-secondary-active: var( --sc-color-background-secondary-active, var(--sc-color-background-active, #e0e0e0) );--sc-surface-neutral-light: #ffffff;--sc-content-neutral-primary: var(--sc-color-foreground, #292929);--sc-color-foreground-secondary: hsl( from var(--sc-color-foreground) h s clamp(10, calc(l + 5), 90) );--sc-content-neutral-secondary: var(--sc-color-foreground-secondary, #404040);--sc-border-neutral: rgba(0, 0, 0, 0.1);--sc-surface-brand-primary: var(--sc-color-brand, #000000);--sc-color-brand-hover: hsl( from var(--sc-color-brand) h s clamp(20, calc(l + 5), 95) );--sc-surface-brand-primary-hover: var(--sc-color-brand-hover, #2e2e2e);--sc-color-brand-active: hsl( from var(--sc-color-brand) h s clamp(10, calc(l - 5), 85) );--sc-surface-brand-primary-active: var(--sc-color-brand-active, #292929);--sc-surface-brand-secondary: var( --sc-color-brand-secondary, var(--sc-color-brand, #e6e6e6) );--sc-surface-brand-secondary-hover: var( --sc-color-brand-secondary-hover, var(--sc-color-brand-hover, #ebebeb) );--sc-surface-brand-secondary-active: var( --sc-color-brand-secondary-active, var(--sc-color-brand-active, #e0e0e0) );--sc-content-brand: var( --sc-color-brand-text, var(--sc-surface-brand-primary) );--sc-content-brand-on-primary: #ffffff;--sc-border-brand: var(--sc-surface-brand-primary);--sc-surface-success-primary: var(--sc-color-success, #008000);--sc-color-success-primary-hover: hsl(from var(--sc-color-success) h s 30);--sc-surface-success-primary-hover: var( --sc-color-success-primary-hover, #009900 );--sc-color-success-primary-active: hsl(from var(--sc-color-success) h s 20);--sc-surface-success-primary-active: var( --sc-color-success-primary-active, #006600 );--sc-color-success-secondary: hsl(from var(--sc-color-success) h s 90);--sc-surface-success-secondary: var(--sc-color-success-secondary, #ccffcc);--sc-color-success-secondary-hover: hsl( from var(--sc-color-success-secondary) h s 95 );--sc-surface-success-secondary-hover: var( --sc-color-success-secondary-hover, #e6ffe6 );--sc-color-success-secondary-active: hsl( from var(--sc-color-success-secondary) h s 85 );--sc-surface-success-secondary-active: var( --sc-color-success-secondary-active, #b2ffb2 );--sc-content-success: var( --sc-color-brand-text, hsl(from var(--sc-surface-success-primary) h s 30) );--sc-content-success-on-primary: #ffffff;--sc-border-success: var(--sc-surface-success-primary);--sc-surface-caution-primary: var(--sc-color-caution, #cc6600);--sc-color-caution-primary-hover: hsl(from var(--sc-color-caution) h s 30);--sc-surface-caution-primary-hover: var( --sc-color-caution-primary-hover, #e57300 );--sc-color-caution-primary-active: hsl(from var(--sc-color-caution) h s 20);--sc-surface-caution-primary-active: var( --sc-color-caution-primary-active, #b25a00 );--sc-color-caution-secondary: hsl(from var(--sc-color-caution) h s 90);--sc-surface-caution-secondary: var(--sc-color-caution-secondary, #ffd9b3);--sc-color-caution-secondary-hover: hsl( from var(--sc-color-caution-secondary) h s 95 );--sc-surface-caution-secondary-hover: var( --sc-color-caution-secondary-hover, #ffe5cc );--sc-color-caution-secondary-active: hsl( from var(--sc-color-caution-secondary) h s 85 );--sc-surface-caution-secondary-active: var( --sc-color-caution-secondary-active, #ffcc99 );--sc-content-caution: var( --sc-color-caution-text, hsl(from var(--sc-surface-caution-primary) h s 30) );--sc-content-caution-on-primary: #ffffff;--sc-border-caution: var(--sc-surface-caution-primary);--sc-surface-danger-primary: var(--sc-color-danger, #cc0000);--sc-color-danger-primary-hover: hsl(from var(--sc-color-danger) h s 30);--sc-surface-danger-primary-hover: var( --sc-color-danger-primary-hover, #e50000 );--sc-color-danger-primary-active: hsl(from var(--sc-color-danger) h s 20);--sc-surface-danger-primary-active: var( --sc-color-danger-primary-active, #b30000 );--sc-color-danger-secondary: hsl(from var(--sc-color-danger) h s 90);--sc-surface-danger-secondary: var(--sc-color-danger-secondary, #ffcccc);--sc-color-danger-secondary-hover: hsl( from var(--sc-color-danger-secondary) h s 95 );--sc-surface-danger-secondary-hover: var( --sc-color-danger-secondary-hover, #ffe7e7 );--sc-color-danger-secondary-active: hsl( from var(--sc-color-danger-secondary) h s 85 );--sc-surface-danger-secondary-active: var( --sc-color-danger-secondary-active, #ffb3b3 );--sc-content-danger: var( --sc-color-caution-text, hsl(from var(--sc-surface-danger-primary) h s 30) );--sc-content-danger-on-primary: #ffffff;--sc-border-danger: var(--sc-surface-danger-primary);--sc-color-disabled: hsl(from var(--sc-color-page-primary) h s calc(l * 0.5));--sc-surface-disabled: var(--sc-color-disabled, #d9d9d9);--sc-color-disabled-text: hsl( from var(--sc-color-text-primary) h s calc(l * 0.5) );--sc-content-disabled: var(--sc-color-disabled-text, #737373);--sc-content-disabled-on-disabled: var(--sc-color-disabled-text, #737373)}@supports(hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none){:root{--sc-color-background-hover: hsl( from var(--sc-color-background) h s clamp(10%, calc(l + 5%), 95%) );--sc-color-background-active: hsl( from var(--sc-color-background) h s clamp(5%, calc(l - 5%), 90%) );--sc-color-foreground-secondary: hsl( from var(--sc-color-foreground) h s clamp(10%, calc(l + 5%), 90%) );--sc-color-brand-hover: hsl( from var(--sc-color-brand) h s clamp(20%, calc(l + 5%), 95%) );--sc-color-brand-active: hsl( from var(--sc-color-brand) h s clamp(10%, calc(l - 5%), 85%) );--sc-color-success-primary-hover: hsl(from var(--sc-color-success) h s 30%);--sc-color-success-primary-active: hsl( from var(--sc-color-success) h s 20% );--sc-color-success-secondary: hsl(from var(--sc-color-success) h s 90%);--sc-color-success-secondary-hover: hsl( from var(--sc-color-success-secondary) h s 95% );--sc-color-success-secondary-active: hsl( from var(--sc-color-success-secondary) h s 85% );--sc-content-success: var( --sc-color-brand-text, hsl(from var(--sc-surface-success-primary) h s 30%) );--sc-color-caution-primary-hover: hsl(from var(--sc-color-caution) h s 30%);--sc-color-caution-primary-active: hsl( from var(--sc-color-caution) h s 20% );--sc-color-caution-secondary: hsl(from var(--sc-color-caution) h s 90%);--sc-color-caution-secondary-hover: hsl( from var(--sc-color-caution-secondary) h s 95% );--sc-color-caution-secondary-active: hsl( from var(--sc-color-caution-secondary) h s 85% );--sc-content-caution: var( --sc-color-caution-text, hsl(from var(--sc-surface-caution-primary) h s 30%) );--sc-color-danger-primary-hover: hsl(from var(--sc-color-danger) h s 30%);--sc-color-danger-primary-active: hsl(from var(--sc-color-danger) h s 20%);--sc-color-danger-secondary: hsl(from var(--sc-color-danger) h s 90%);--sc-color-danger-secondary-hover: hsl( from var(--sc-color-danger-secondary) h s 95% );--sc-color-danger-secondary-active: hsl( from var(--sc-color-danger-secondary) h s 85% );--sc-content-danger: var( --sc-color-caution-text, hsl(from var(--sc-surface-danger-primary) h s 30%) )}}.searchcraft-custom-ad{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size)}.searchcraft-adm-ad{all:unset;display:flex;flex-direction:row;cursor:pointer;gap:8px;padding-right:var(--sc-popover-list-item-padding-horizontal);padding-left:var(--sc-popover-list-item-padding-horizontal);padding-top:var(--sc-popover-list-item-padding-vertical);padding-bottom:var(--sc-popover-list-item-padding-vertical);border:1px solid blue}.searchcraft-adm-ad:focus{background-color:var(--sc-surface-neutral-secondary-active);color:var(--sc-content-neutral-secondary)}.searchcraft-adm-ad:hover{background-color:var(--sc-surface-neutral-secondary-hover);color:var(--sc-content-neutral-secondary)}.searchcraft-adm-ad-title{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);margin:0;color:inherit}.searchcraft-adm-ad-subtitle{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);margin:0;color:inherit}.searchcraft-adm-ad-image-wrapper{width:var(--sc-popover-list-item-image-size);height:var(--sc-popover-list-item-image-size);display:flex;align-items:center;justify-content:center;flex-shrink:0}.searchcraft-adm-ad-image{max-width:var(--sc-popover-list-item-image-size);max-height:var(--sc-popover-list-item-image-size)}.searchcraft-adm-ad-info-wrapper{display:flex;flex-direction:column;gap:8px;justify-content:center}.searchcraft-search-result-container{all:unset;align-items:flex-start;border-radius:var(--sc-border-radius-lg);display:flex;flex-direction:column;gap:16px;padding:8px;color:inherit;background-color:var(--sc-surface-neutral-primary)}@media(min-width: 768px){.searchcraft-search-result-container{flex-direction:row}}a.searchcraft-search-result-container{cursor:pointer;transition:background-color 100ms}.searchcraft-base-search-result-content-container{flex:1;display:flex;flex-direction:column;gap:8px}.searchcraft-search-result-image{border-radius:calc(--sc-border-radius-lg - 8px);border-radius:calc(var(--sc-border-radius-lg) - 8px);width:100%}@media(min-width: 768px){.searchcraft-search-result-image{width:200px}}.searchcraft-base-search-result-title{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);color:var(--sc-content-neutral-primary);font-weight:var(--sc-font-bold);margin:0}.searchcraft-base-search-result-subtitle{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);color:var(--sc-content-disabled);margin:0}.searchcraft-base-search-result-body-content{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);color:var(--sc-content-neutral-secondary);margin:0}.searchcraft-base-search-result-footer-content{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);color:var(--sc-content-disabled);margin:0}.searchcraft-search-results-container{display:flex;flex-direction:column;justify-content:center;gap:16px}.searchcraft-search-results-empty-state-container{text-align:center}.searchcraft-search-results-error-message-container{text-align:center}.searchcraft-button{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);background:none;border:2px solid rgba(0,0,0,0);border-radius:var(--sc-border-radius);cursor:pointer;display:flex;gap:4px;padding:12px;position:relative}.searchcraft-button.searchcraft-button-disabled{cursor:not-allowed}.searchcraft-button-primary{background-color:var(--sc-surface-brand-primary);color:var(--sc-content-brand-on-primary);font-weight:var(--sc-font-bold)}.searchcraft-button-primary:hover{background-color:var(--sc-surface-brand-primary-hover)}.searchcraft-button-primary:focus{border-color:var(--sc-border-primary)}.searchcraft-button-primary:active{background-color:var(--sc-surface-brand-primary-active)}.searchcraft-button-primary.searchcraft-button-disabled,.searchcraft-button-primary.searchcraft-button-disabled:hover,.searchcraft-button-primary.searchcraft-button-disabled:focus,.searchcraft-button-primary.searchcraft-button-disabled:active{background-color:var(--sc-surface-disabled);border-color:rgba(0,0,0,0);color:var(--sc-content-disabled)}.searchcraft-button-tertiary{background-color:var(--sc-surface-neutral-primary);color:var(--sc-content-brand);font-weight:var(--sc-font-normal)}.searchcraft-button-tertiary:hover{background-color:var(--sc-surface-brand-secondary-hover)}.searchcraft-button-tertiary:focus{background-color:var(--sc-surface-neutral-light);border-color:var(--sc-border-primary)}.searchcraft-button-tertiary:active{background-color:var(--sc-surface-brand-secondary-active)}.searchcraft-button-tertiary.searchcraft-button-disabled,.searchcraft-button-tertiary.searchcraft-button-disabled:hover,.searchcraft-button-tertiary.searchcraft-button-disabled:focus,.searchcraft-button-tertiary.searchcraft-button-disabled:active{background-color:var(--sc-surface-neutral-light);border-color:rgba(0,0,0,0);color:var(--sc-content-disabled)}.searchcraft-error-message{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);color:var(--sc-content-danger);margin:0}.filtersListContainer{width:100%}.filterCheckboxLabel{align-items:center;color:var(--sc-content-brand);display:flex;font-family:var(--sc-font-family);font-size:14px;font-weight:600;gap:14px;position:relative;-webkit-font-smoothing:antialiased}.filterCheckboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:var(--sc-surface-neutral-secondary);border:1px solid var(--sc-surface-disabled);border-radius:8px;cursor:pointer;display:flex;height:24px;justify-content:center;width:24px}.filterCheckboxLabel input[type=checkbox]:focus{outline:2px solid var(--sc-surface-brand-primary)}.filterCheckboxLabel input[type=checkbox]:checked{background-color:var(--sc-surface-brand-primary);position:relative}.filterCheckboxLabel input[type=checkbox]:checked+.checkContainer{display:block}.filterCheckboxLabel input[type=checkbox]:checked+.dashContainer{display:block}.childFilterCheckboxLabel{align-items:center;color:var(--sc-content-primary);display:flex;font-family:var(--sc-font-family);font-size:14px;font-weight:600;gap:12px;margin-left:24px;position:relative}.childFilterCheckboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:var(--sc-surface-neutral-secondary-hover);border:1px solid var(--sc-surface-disabled);border-radius:8px;cursor:pointer;display:flex;height:24px;justify-content:center;position:relative;width:24px;-webkit-font-smoothing:antialiased}.childFilterCheckboxLabel input[type=checkbox]:focus{outline:2px solid var(--sc-surface-brand-primary)}.childFilterCheckboxLabel input[type=checkbox]:checked{background-color:var(--sc-surface-brand-primary);position:relative}.childFilterCheckboxLabel input[type=checkbox]:checked+.checkContainer{display:block}.childFilterCheckboxLabel input[type=checkbox]:checked+.dashContainer{display:block}.checkContainer{display:none;height:16px;width:16px;position:absolute;top:9px;left:8px}.dashContainer{display:none;height:3px;width:14px;position:absolute;top:3px;left:9px}.searchcraft-facet-message{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);color:var(--sc-content-disabled);text-align:center}.searchcraft-filter-panel{display:flex;flex-direction:column;gap:16px}.searchcraft-filter-panel-section{display:flex;flex-direction:column;gap:8px}.searchcraft-filter-panel-label{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);font-weight:var(--sc-font-bold)}:root{--sc-input-border-radius: var(--sc-border-radius);--sc-input-search-icon-size: 20px;--sc-input-clear-icon-size: 20px;--sc-input-padding-left: 44px;--sc-input-padding-right: 44px}.searchcraft-input-grid{display:grid;gap:4px 8px}.searchcraft-input-grid-buttonLeft{grid-template-rows:repeat(3, auto);grid-template-columns:auto 1fr}.searchcraft-input-grid-buttonLeft .searchcraft-input-button-wrapper{grid-column:1/span 1;grid-row:2/span 1}.searchcraft-input-grid-buttonLeft .searchcraft-input-label-wrapper{grid-column:2/span 1;grid-row:1/span 1}.searchcraft-input-grid-buttonLeft .searchcraft-input-error-wrapper{grid-column:2/span 1;grid-row:3/span 1}.searchcraft-input-grid-buttonLeft .searchcraft-input-wrapper{grid-column:2/span 1;grid-row:2/span 1}.searchcraft-input-grid-buttonRight{grid-template-rows:repeat(3, auto);grid-template-columns:1fr auto}.searchcraft-input-grid-buttonRight .searchcraft-input-button-wrapper{grid-column:2/span 1;grid-row:2/span 1}.searchcraft-input-grid-buttonRight .searchcraft-input-label-wrapper{grid-column:1/span 1;grid-row:1/span 1}.searchcraft-input-grid-buttonRight .searchcraft-input-error-wrapper{grid-column:1/span 1;grid-row:3/span 1}.searchcraft-input-grid-buttonRight .searchcraft-input-wrapper{grid-column:1/span 1;grid-row:2/span 1}.searchcraft-input-grid-buttonNone{grid-template-rows:repeat(3, auto);grid-template-columns:auto}.searchcraft-input-grid-buttonNone .searchcraft-input-button-wrapper{display:none}.searchcraft-input-grid-buttonNone .searchcraft-input-label-wrapper{grid-column:1/span 1;grid-row:1/span 1}.searchcraft-input-grid-buttonNone .searchcraft-input-error-wrapper{grid-column:1/span 1;grid-row:3/span 1}.searchcraft-input-grid-buttonNone .searchcraft-input-wrapper{grid-column:1/span 1;grid-row:2/span 1}.searchcraft-input-wrapper{position:relative;display:flex}.searchcraft-input{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);background-color:var(--sc-surface-neutral-secondary);border-radius:var(--sc-input-border-radius);border:none;color:var(--sc-content-neutral-primary);outline:none;padding-left:var(--sc-input-padding-left);padding-right:var(--sc-input-padding-right);padding-top:12px;padding-bottom:12px;flex:1}.searchcraft-input::placeholder{color:var(--sc-content-disabled)}.searchcraft-input:focus{outline:var(--sc-border-brand) solid 2px}.searchcraft-input:focus::placeholder{opacity:0}.searchcraft-input.error{color:var(--sc-content-danger);outline:var(--sc-border-danger) solid 2px}.searchcraft-input.error:focus{outline:var(--sc-border-danger) solid 2px}.searchcraft-input-search-icon-wrapper{align-items:center;justify-content:center;display:flex;position:absolute;pointer-events:none;bottom:0;left:0;top:0;width:var(--sc-input-padding-left)}.searchcraft-input-search-icon{pointer-events:none;width:var(--sc-input-search-icon-size);height:var(--sc-input-search-icon-size);color:var(--sc-content-neutral-secondary)}.searchcraft-input-clear-button{all:unset;align-items:center;justify-content:center;cursor:pointer;display:flex;position:absolute;border:none;outline:none;bottom:0;right:0;top:0;width:var(--sc-input-padding-right)}.searchcraft-input-clear-icon{width:var(--sc-input-clear-icon-size);height:var(--sc-input-clear-icon-size);color:var(--sc-content-brand)}.searchcraft-input-label{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);color:var(--sc-content-neutral-primary);font-weight:var(--sc-font-bold);margin-top:4px;margin-bottom:4px}:root{--sc-popover-form-border-radius: var(--sc-border-radius);--sc-popover-list-view-height: 400px;--sc-popover-list-item-image-size: 60px;--sc-popover-list-item-padding-horizontal: 8px;--sc-popover-list-item-padding-vertical: 8px;--sc-popover-modal-max-width: 570px}.searchcraft-popover-form{display:flex;flex-direction:column;flex:1}.searchcraft-popover-form .searchcraft-popover-form-input-wrapper{padding:12px;background-color:var(--sc-surface-neutral-secondary);display:flex;flex-direction:row;gap:4px}.searchcraft-popover-form .searchcraft-popover-form-input-wrapper>searchcraft-input-form{flex:1}.searchcraft-popover-form .searchcraft-popover-form-cancel-button{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);border-radius:calc(--sc-popover-form-border-radius - 12px);border-radius:calc(var(--sc-popover-form-border-radius) - 12px);border:0;outline:0;padding:0;flex-shrink:0;background:none;cursor:pointer;padding-left:12px;padding-right:12px}.searchcraft-popover-form .searchcraft-popover-form-cancel-button:hover{background-color:var(--sc-surface-brand-secondary-hover)}.searchcraft-popover-form .searchcraft-popover-form-cancel-button:focus{background-color:var(--sc-surface-brand-secondary-active)}.searchcraft-popover-form-inline .searchcraft-input{border-top-left-radius:var(--sc-popover-form-border-radius);border-top-right-radius:var(--sc-popover-form-border-radius);border-bottom-left-radius:var(--sc-popover-form-border-radius);border-bottom-right-radius:var(--sc-popover-form-border-radius);border:none;outline:none}.searchcraft-popover-form-inline.searchcraft-popover-form-active .searchcraft-input{border-top-left-radius:var(--sc-popover-form-border-radius);border-top-right-radius:var(--sc-popover-form-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.searchcraft-popover-form-inline .searchcraft-popover-inline-wrapper-outer{position:relative}.searchcraft-popover-form-inline .searchcraft-popover-inline-wrapper-inner{position:absolute;height:var(--sc-popover-list-view-height);z-index:1000;width:100%}.searchcraft-popover-form-inline .searchcraft-popover-list-view{display:flex;flex-direction:column;overflow:auto;background-color:var(--sc-surface-neutral-secondary);border-bottom-left-radius:var(--sc-popover-form-border-radius);border-bottom-right-radius:var(--sc-popover-form-border-radius);max-height:var(--sc-popover-list-view-height)}.searchcraft-popover-form-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:center;padding:0;background-color:var(--sc-surface-neutral-secondary)}@media(min-width: 576px){.searchcraft-popover-form-modal{padding:16px;background-color:rgba(0,0,0,0)}}.searchcraft-popover-form-modal .searchcraft-input{border-radius:calc(--sc-popover-form-border-radius - 12px);border-radius:calc(var(--sc-popover-form-border-radius) - 12px);outline-width:1px;outline-color:var(--sc-border-neutral)}.searchcraft-popover-form-modal .searchcraft-popover-form-modal-backdrop{position:absolute;inset:0;background-color:rgba(0,0,0,.5);display:none}@media(min-width: 576px){.searchcraft-popover-form-modal .searchcraft-popover-form-modal-backdrop{display:block}}.searchcraft-popover-form-modal .searchcraft-popover-form-modal-inner{position:absolute;inset:0;z-index:1002;margin-top:0px;display:flex;border-radius:var(--sc-popover-form-border-radius);overflow:hidden}@media(min-width: 576px){.searchcraft-popover-form-modal .searchcraft-popover-form-modal-inner{inset:auto;position:relative;width:100%;margin-top:100px;max-width:var(--sc-popover-modal-max-width)}}.searchcraft-popover-form-modal .searchcraft-popover-list-view{display:flex;flex-direction:column;overflow:auto;background-color:var(--sc-surface-neutral-secondary);border-bottom-left-radius:0;border-bottom-right-radius:0}@media(min-width: 576px){.searchcraft-popover-form-modal .searchcraft-popover-list-view{max-height:var(--sc-popover-list-view-height)}}.searchcraft-popover-form-modal searchcraft-popover-list-view{overflow:scroll}@media(min-width: 576px){.searchcraft-popover-form-modal searchcraft-popover-list-view{overflow:auto}}.searchcraft-popover-form-fullscreen{position:fixed;inset:0;z-index:1000;background-color:var(--sc-surface-neutral-secondary)}.searchcraft-popover-form-fullscreen .searchcraft-popover-form{position:absolute;inset:0}.searchcraft-popover-form-fullscreen .searchcraft-input{border-radius:calc(--sc-popover-form-border-radius - 12px);border-radius:calc(var(--sc-popover-form-border-radius) - 12px);outline-width:1px;outline-color:var(--sc-border-neutral)}.searchcraft-popover-form-fullscreen searchcraft-popover-list-view{overflow:scroll}.searchcraft-popover-list-item{all:unset;color:var(--sc-content-neutral-secondary);display:flex;flex-direction:row;cursor:pointer;gap:8px;padding-right:var(--sc-popover-list-item-padding-horizontal);padding-left:var(--sc-popover-list-item-padding-horizontal);padding-top:var(--sc-popover-list-item-padding-vertical);padding-bottom:var(--sc-popover-list-item-padding-vertical)}.searchcraft-popover-list-item:focus{background-color:var(--sc-surface-neutral-secondary-active);color:var(--sc-content-neutral-secondary)}.searchcraft-popover-list-item:hover{background-color:var(--sc-surface-neutral-secondary-hover);color:var(--sc-content-neutral-secondary)}.searchcraft-popover-list-item-title{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);margin:0;color:inherit}.searchcraft-popover-list-item-subtitle{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);margin:0;color:inherit}.searchcraft-popover-list-item-image-wrapper{width:var(--sc-popover-list-item-image-size);height:var(--sc-popover-list-item-image-size);display:flex;align-items:center;justify-content:center;flex-shrink:0}.searchcraft-popover-list-item-image{max-width:var(--sc-popover-list-item-image-size);max-height:var(--sc-popover-list-item-image-size)}.searchcraft-popover-list-item-info-wrapper{display:flex;flex-direction:column;gap:8px;justify-content:center}.searchcraft-results-info{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);color:var(--sc-content-primary);margin:0}.searchcraft-slider-container{align-items:center;display:flex;flex-direction:column;gap:10px;width:100%}.searchcraft-slider-range-container{align-items:center;background-color:var(--sc-surface-disabled);border-radius:999px;display:flex;position:relative;height:4px;width:100%}.searchcraft-slider-range-container::-webkit-slider-runnable-track{pointer-events:none}.searchcraft-slider-range-container .searchcraft-slider-active-range{background-color:var(--sc-surface-brand-primary);border-radius:2px;height:4px;position:absolute;top:50%;transform:translateY(-50%);z-index:0}.searchcraft-slider-range-container .searchcraft-slider-active-range::-webkit-slider-runnable-track{pointer-events:none}.searchcraft-slider-range-container .searchcraft-slider-active-range::-moz-range-track{pointer-events:none}.searchcraft-slider-range-container .searchcraft-slider-input{appearance:none;background:rgba(0,0,0,0);border-radius:2px;height:4px;margin:0;outline:none;pointer-events:none;position:absolute;width:100%;-webkit-appearance:none}.searchcraft-slider-range-container .searchcraft-slider-input::-webkit-slider-thumb{background-color:var(--sc-surface-neutral-light);border-radius:50%;border:2px solid var(--sc-border-neutral);cursor:pointer;height:20px;pointer-events:all;width:20px;-webkit-appearance:none}.searchcraft-slider-range-container .searchcraft-slider-input::-moz-range-thumb{background-color:var(--sc-surface-neutral-light);border-radius:50%;border:2px solid var(--sc-border-neutral);cursor:pointer;height:20px;pointer-events:all;width:20px}.searchcraft-slider-label-container{color:var(--sc-content-primary);display:flex;font-family:"Source Sans Pro",sans-serif;font-size:15px;font-weight:600;justify-content:space-between;margin-top:10px;width:100%}.searchcraft-slider-label{min-width:30px;text-align:center}.searchcraft-toggle-button-container{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.searchcraft-toggle-button-label{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);margin:0;color:var(--sc-content-neutral-primary)}.searchcraft-toggle-button-sub-label{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);margin:0;color:var(--sc-content-neutral-secondary)}.searchcraft-toggle-button-background{transition:background-color .2s;background:var(--sc-surface-disabled);border:none;border-radius:16px;cursor:pointer;height:26px;position:relative;width:44px;flex-shrink:0}.searchcraft-toggle-button-background.active{background:var(--sc-surface-brand-primary);box-shadow:0px 0px 0px 1px rgba(0,0,0,.05)}.searchcraft-toggle-button-handle{background:var(--sc-surface-neutral-light);border-radius:50%;height:18px;left:4px;position:absolute;top:calc(50% - 9px);transition:transform .3s ease;width:18px}.searchcraft-toggle-button-handle.active{transform:translateX(16px)}.searchcraft-pagination{display:inline-grid;gap:16px;grid-template-columns:repeat(3, auto);grid-template-rows:1fr}.searchcraft-pagination-list{border:1px solid var(--sc-border-neutral);border-radius:var(--sc-border-radius);display:flex;list-style-type:none;margin:0;overflow:hidden;padding:0;width:auto}.searchcraft-pagination-list li{border-right:1px solid var(--sc-border-neutral);height:100%;min-height:44px;width:44px}.searchcraft-pagination-list li:last-child{border-right:none}.searchcraft-pagination-item{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);align-items:center;background-color:var(--sc-surface-neutral-primary);border:none;display:flex;height:100%;justify-content:center;width:100%}.searchcraft-pagination-item-active{background-color:var(--sc-surface-brand-secondary);font-weight:var(--sc-font-bold)}.searchcraft-pagination-control{border:1px solid var(--sc-border-neutral);border-radius:var(--sc-border-radius)}.searchcraft-pagination-range{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);align-items:center;display:flex}.searchcraft-select{display:flex;flex-direction:column;gap:4px}.searchcraft-select-label{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size);font-weight:var(--sc-font-bold)}.searchcraft-select-input-wrapper{position:relative}.searchcraft-select-input{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size);appearance:none;background-color:var(--sc-surface-neutral-secondary);border:2px solid rgba(0,0,0,0);border-radius:var(--sc-border-radius);cursor:pointer;height:44px;padding:0 44px 0 16px;width:100%}.searchcraft-select-input:hover{background-color:var(--sc-surface-neutral-secondary-hover)}.searchcraft-select-input:active{background-color:var(--sc-surface-neutral-secondary-active)}.searchcraft-select-input:focus{border-color:var(--sc-border-brand);outline:none}.searchcraft-select-input-icon{pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.searchcraft-select-caption{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-small-font-size)}.searchcraft-search-results-per-page{display:flex}.searchcraft-search-results-per-page-select{align-items:center;display:flex;gap:12px}.searchcraft-search-results-per-page-select-label{font-family:var(--sc-font-family);font-weight:var(--sc-font-normal);line-height:1.25;-webkit-font-smoothing:antialiased;font-size:var(--sc-body-font-size)}.searchcraft-search-results-per-page-select-input{min-width:120px}/*# sourceMappingURL=hologram.css.map */
`;

/**
 * This web component adds Searchcraft's built-in css theme to your page's <head> tag.
 * It does not render anything visible, its only function is to manage the css styles on the page.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-theme theme="light" custom-theme="{}" />
 * ```
 */
class SearchcraftTheme {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The name of the theme.
     */
    theme;
    /**
     * The custom theme configuration object.
     */
    customTheme;
    camelToKebab = (string) => {
        return string
            .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`) // Convert uppercase letters to `-lowercase`
            .toLowerCase(); // Ensure the whole string is in lowercase
    };
    componentDidLoad() {
        // Inject style element
        const styleElement = document.querySelector('#searchcraft-theme') ||
            document.createElement('style');
        styleElement.innerHTML = styles;
        styleElement.id = 'searchcraft-theme';
        const head = document.head || document.getElementsByTagName('head')[0];
        if (!head.contains(styleElement)) {
            if (head.firstChild) {
                head.insertBefore(styleElement, head.firstChild);
            }
            else {
                head.appendChild(styleElement);
            }
        }
        // Add theme name to body
        document.body.dataset.theme = this.theme || 'light';
        // Add CSS variables from customTheme configuration to document
        Object.entries(JSON.parse(this.customTheme || '[]')).map(([key, value]) => {
            document.documentElement.style.setProperty(`--${this.camelToKebab(key)}`, `${value}`);
        });
    }
    render() {
        return;
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-theme",
        "$members$": {
            "theme": [1],
            "customTheme": [1, "custom-theme"]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * This web component simulates a light switch functionality, providing a simple and intuitive toggle between two states—on and off.
 * It is consumed within the `searchcraft-filter-panel` component.
 */
class SearchcraftToggleButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleUpdated = createEvent(this, "toggleUpdated", 7);
    }
    /**
     * The label.
     */
    label = 'Toggle';
    /**
     * The secondary label displayed below the main label.
     */
    subLabel;
    /**
     * When the toggle element is changed.
     */
    toggleUpdated;
    isActive = false;
    unsubscribe;
    lastSearchTerm;
    handleToggle = async () => {
        this.isActive = !this.isActive;
        this.toggleUpdated?.emit(this.isActive);
    };
    connectedCallback() {
        /** When the query changes, sets toggle button state back to inactive. */
        this.unsubscribe = searchcraftStore.subscribe((state) => {
            if (state.searchTerm !== this.lastSearchTerm &&
                state.searchTerm.trim().length === 0) {
                this.isActive = false;
            }
            this.lastSearchTerm = state.searchTerm;
        });
    }
    disconnectedCallback() {
        this.unsubscribe?.();
    }
    render() {
        return (hAsync("div", { key: '25f3acd2b5dd6837182c8f07c092c54c35542c2f', class: 'searchcraft-toggle-button-container' }, hAsync("div", { key: 'd2951f2673af55159ad6f39d381d272a3f9f872b' }, hAsync("p", { key: '2468e261d46b454ce896b614ca2a076d27a31a8b', class: 'searchcraft-toggle-button-label' }, this.label), this.subLabel && (hAsync("p", { key: '1d9887dc12f30fb1982cf0d8a692ebfeca8edc1a', class: 'searchcraft-toggle-button-sub-label' }, this.subLabel))), hAsync("button", { key: 'f51bb553d6b210233aa6ebfc4318aa521036d922', class: classNames('searchcraft-toggle-button-background', {
                active: this.isActive,
            }), onClick: this.handleToggle, type: 'button' }, hAsync("div", { key: 'a34339f1bb5ab4742d897b01b61fe6c8c23e7e1e', class: classNames('searchcraft-toggle-button-handle', {
                active: this.isActive,
            }) }))));
    }
    static get cmpMeta() { return {
        "$flags$": 0,
        "$tagName$": "searchcraft-toggle-button",
        "$members$": {
            "label": [1],
            "subLabel": [1, "sub-label"],
            "isActive": [32],
            "unsubscribe": [32],
            "lastSearchTerm": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleId$": "-",
        "$attrsToReflect$": []
    }; }
}

registerComponents([
  SearchcraftBaseSearchResult,
  SearchcraftBaseSearchResults,
  SearchcraftButton,
  SearchcraftErrorMessage,
  SearchcraftFacetList,
  SearchcraftFilterPanel,
  SearchcraftInput,
  SearchcraftInputLabel,
  SearchcraftPagination,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
  SearchcraftPopoverListItem,
  SearchcraftPopoverListItemAd,
  SearchcraftPopoverListView,
  SearchcraftResultsInfo,
  SearchcraftSearchResultsPerPage,
  SearchcraftSelect,
  SearchcraftSlider,
  SearchcraftTheme,
  SearchcraftToggleButton,
]);

exports.hydrateApp = hydrateApp;


    /*hydrateAppClosure end*/
    hydrateApp(window, $stencilHydrateOpts, $stencilHydrateResults, $stencilAfterHydrate, $stencilHydrateResolve);
  }

  hydrateAppClosure($stencilWindow);
}

// src/app-data/index.ts
var BUILD = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  formAssociated: false,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  appendChildSlotFix: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  // TODO(STENCIL-1305): remove this option
  scriptDataOpts: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  scopedSlotTextContentFix: false,
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  shadowDomShim: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: true,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  experimentalSlotFixes: false
};
var Env = {};
var NAMESPACE = (
  /* default */
  "app"
);

/*
 Stencil Hydrate Runner v4.25.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var STENCIL_DOC_DATA = "_stencilDocData";
var XLINK_NS = "http://www.w3.org/1999/xlink";

// src/mock-doc/attribute.ts
var attrHandler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    if (typeof prop !== "symbol" && !isNaN(prop)) {
      return obj.__items[prop];
    }
    return void 0;
  }
};
var createAttributeProxy = (caseInsensitive) => new Proxy(new MockAttributeMap(caseInsensitive), attrHandler);
var MockAttributeMap = class {
  constructor(caseInsensitive = false) {
    this.caseInsensitive = caseInsensitive;
    this.__items = [];
  }
  get length() {
    return this.__items.length;
  }
  item(index) {
    return this.__items[index] || null;
  }
  setNamedItem(attr) {
    attr.namespaceURI = null;
    this.setNamedItemNS(attr);
  }
  setNamedItemNS(attr) {
    if (attr != null && attr.value != null) {
      attr.value = String(attr.value);
    }
    const existingAttr = this.__items.find((a) => a.name === attr.name && a.namespaceURI === attr.namespaceURI);
    if (existingAttr != null) {
      existingAttr.value = attr.value;
    } else {
      this.__items.push(attr);
    }
  }
  getNamedItem(attrName) {
    if (this.caseInsensitive) {
      attrName = attrName.toLowerCase();
    }
    return this.getNamedItemNS(null, attrName);
  }
  getNamedItemNS(namespaceURI, attrName) {
    namespaceURI = getNamespaceURI(namespaceURI);
    return this.__items.find((attr) => attr.name === attrName && getNamespaceURI(attr.namespaceURI) === namespaceURI) || null;
  }
  removeNamedItem(attr) {
    this.removeNamedItemNS(attr);
  }
  removeNamedItemNS(attr) {
    for (let i = 0, ii = this.__items.length; i < ii; i++) {
      if (this.__items[i].name === attr.name && this.__items[i].namespaceURI === attr.namespaceURI) {
        this.__items.splice(i, 1);
        break;
      }
    }
  }
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        done: i === this.length,
        value: this.item(i++)
      })
    };
  }
  get [Symbol.toStringTag]() {
    return "MockAttributeMap";
  }
};
function getNamespaceURI(namespaceURI) {
  return namespaceURI === XLINK_NS ? null : namespaceURI;
}
function cloneAttributes(srcAttrs, sortByName = false) {
  const dstAttrs = new MockAttributeMap(srcAttrs.caseInsensitive);
  if (srcAttrs != null) {
    const attrLen = srcAttrs.length;
    if (sortByName && attrLen > 1) {
      const sortedAttrs = [];
      for (let i = 0; i < attrLen; i++) {
        const srcAttr = srcAttrs.item(i);
        const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
        sortedAttrs.push(dstAttr);
      }
      sortedAttrs.sort(sortAttributes).forEach((attr) => {
        dstAttrs.setNamedItemNS(attr);
      });
    } else {
      for (let i = 0; i < attrLen; i++) {
        const srcAttr = srcAttrs.item(i);
        const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
        dstAttrs.setNamedItemNS(dstAttr);
      }
    }
  }
  return dstAttrs;
}
function sortAttributes(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
var MockAttr = class {
  constructor(attrName, attrValue, namespaceURI = null) {
    this._name = attrName;
    this._value = String(attrValue);
    this._namespaceURI = namespaceURI;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = String(value);
  }
  get nodeName() {
    return this._name;
  }
  set nodeName(value) {
    this._name = value;
  }
  get nodeValue() {
    return this._value;
  }
  set nodeValue(value) {
    this._value = String(value);
  }
  get namespaceURI() {
    return this._namespaceURI;
  }
  set namespaceURI(namespaceURI) {
    this._namespaceURI = namespaceURI;
  }
};

// src/mock-doc/class-list.ts
var MockClassList = class {
  constructor(elm) {
    this.elm = elm;
  }
  add(...classNames) {
    const clsNames = getItems(this.elm);
    let updated = false;
    classNames.forEach((className) => {
      className = String(className);
      validateClass(className);
      if (clsNames.includes(className) === false) {
        clsNames.push(className);
        updated = true;
      }
    });
    if (updated) {
      this.elm.setAttributeNS(null, "class", clsNames.join(" "));
    }
  }
  remove(...classNames) {
    const clsNames = getItems(this.elm);
    let updated = false;
    classNames.forEach((className) => {
      className = String(className);
      validateClass(className);
      const index = clsNames.indexOf(className);
      if (index > -1) {
        clsNames.splice(index, 1);
        updated = true;
      }
    });
    if (updated) {
      this.elm.setAttributeNS(null, "class", clsNames.filter((c) => c.length > 0).join(" "));
    }
  }
  contains(className) {
    className = String(className);
    return getItems(this.elm).includes(className);
  }
  toggle(className) {
    className = String(className);
    if (this.contains(className) === true) {
      this.remove(className);
    } else {
      this.add(className);
    }
  }
  get length() {
    return getItems(this.elm).length;
  }
  item(index) {
    return getItems(this.elm)[index];
  }
  toString() {
    return getItems(this.elm).join(" ");
  }
};
function validateClass(className) {
  if (className === "") {
    throw new Error("The token provided must not be empty.");
  }
  if (/\s/.test(className)) {
    throw new Error(
      `The token provided ('${className}') contains HTML space characters, which are not valid in tokens.`
    );
  }
}
function getItems(elm) {
  const className = elm.getAttribute("class");
  if (typeof className === "string" && className.length > 0) {
    return className.trim().split(" ").filter((c) => c.length > 0);
  }
  return [];
}

// src/mock-doc/css-style-declaration.ts
var MockCSSStyleDeclaration = class {
  constructor() {
    this._styles = /* @__PURE__ */ new Map();
  }
  setProperty(prop, value) {
    prop = jsCaseToCssCase(prop);
    if (value == null || value === "") {
      this._styles.delete(prop);
    } else {
      this._styles.set(prop, String(value));
    }
  }
  getPropertyValue(prop) {
    prop = jsCaseToCssCase(prop);
    return String(this._styles.get(prop) || "");
  }
  removeProperty(prop) {
    prop = jsCaseToCssCase(prop);
    this._styles.delete(prop);
  }
  get length() {
    return this._styles.size;
  }
  get cssText() {
    const cssText = [];
    this._styles.forEach((value, prop) => {
      cssText.push(`${prop}: ${value};`);
    });
    return cssText.join(" ").trim();
  }
  set cssText(cssText) {
    if (cssText == null || cssText === "") {
      this._styles.clear();
      return;
    }
    cssText.split(";").forEach((rule) => {
      rule = rule.trim();
      if (rule.length > 0) {
        const splt = rule.split(":");
        if (splt.length > 1) {
          const prop = splt[0].trim();
          const value = splt.slice(1).join(":").trim();
          if (prop !== "" && value !== "") {
            this._styles.set(jsCaseToCssCase(prop), value);
          }
        }
      }
    });
  }
};
function createCSSStyleDeclaration() {
  return new Proxy(new MockCSSStyleDeclaration(), cssProxyHandler);
}
var cssProxyHandler = {
  get(cssStyle, prop) {
    if (prop in cssStyle) {
      return cssStyle[prop];
    }
    prop = cssCaseToJsCase(prop);
    return cssStyle.getPropertyValue(prop);
  },
  set(cssStyle, prop, value) {
    if (prop in cssStyle) {
      cssStyle[prop] = value;
    } else {
      cssStyle.setProperty(prop, value);
    }
    return true;
  }
};
function cssCaseToJsCase(str) {
  if (str.length > 1 && str.includes("-") === true) {
    str = str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
    str = str.slice(0, 1).toLowerCase() + str.slice(1);
  }
  return str;
}
function jsCaseToCssCase(str) {
  if (str.length > 1 && str.includes("-") === false && /[A-Z]/.test(str) === true) {
    str = str.replace(/([A-Z])/g, (g) => " " + g[0]).trim().replace(/ /g, "-").toLowerCase();
  }
  return str;
}

// src/mock-doc/custom-element-registry.ts
var MockCustomElementRegistry = class {
  constructor(win2) {
    this.win = win2;
  }
  define(tagName, cstr, options) {
    if (tagName.toLowerCase() !== tagName) {
      throw new Error(
        `Failed to execute 'define' on 'CustomElementRegistry': "${tagName}" is not a valid custom element name`
      );
    }
    if (this.__registry == null) {
      this.__registry = /* @__PURE__ */ new Map();
    }
    this.__registry.set(tagName, { cstr, options });
    if (this.__whenDefined != null) {
      const whenDefinedResolveFns = this.__whenDefined.get(tagName);
      if (whenDefinedResolveFns != null) {
        whenDefinedResolveFns.forEach((whenDefinedResolveFn) => {
          whenDefinedResolveFn();
        });
        whenDefinedResolveFns.length = 0;
        this.__whenDefined.delete(tagName);
      }
    }
    const doc2 = this.win.document;
    if (doc2 != null) {
      const hosts = doc2.querySelectorAll(tagName);
      hosts.forEach((host) => {
        if (upgradedElements.has(host) === false) {
          tempDisableCallbacks.add(doc2);
          const upgradedCmp = createCustomElement(this, doc2, tagName);
          for (let i = 0; i < host.childNodes.length; i++) {
            const childNode = host.childNodes[i];
            childNode.remove();
            upgradedCmp.appendChild(childNode);
          }
          tempDisableCallbacks.delete(doc2);
          if (proxyElements.has(host)) {
            proxyElements.set(host, upgradedCmp);
          }
        }
        fireConnectedCallback(host);
      });
    }
  }
  get(tagName) {
    if (this.__registry != null) {
      const def = this.__registry.get(tagName.toLowerCase());
      if (def != null) {
        return def.cstr;
      }
    }
    return void 0;
  }
  getName(cstr) {
    for (const [tagName, def] of this.__registry.entries()) {
      if (def.cstr === cstr) {
        return tagName;
      }
    }
    return void 0;
  }
  upgrade(_rootNode) {
  }
  clear() {
    if (this.__registry != null) {
      this.__registry.clear();
    }
    if (this.__whenDefined != null) {
      this.__whenDefined.clear();
    }
  }
  whenDefined(tagName) {
    tagName = tagName.toLowerCase();
    if (this.__registry != null && this.__registry.has(tagName) === true) {
      return Promise.resolve(this.__registry.get(tagName).cstr);
    }
    return new Promise((resolve) => {
      if (this.__whenDefined == null) {
        this.__whenDefined = /* @__PURE__ */ new Map();
      }
      let whenDefinedResolveFns = this.__whenDefined.get(tagName);
      if (whenDefinedResolveFns == null) {
        whenDefinedResolveFns = [];
        this.__whenDefined.set(tagName, whenDefinedResolveFns);
      }
      whenDefinedResolveFns.push(resolve);
    });
  }
};
function createCustomElement(customElements2, ownerDocument, tagName) {
  const Cstr = customElements2.get(tagName);
  if (Cstr != null) {
    const cmp = new Cstr(ownerDocument);
    cmp.nodeName = tagName.toUpperCase();
    upgradedElements.add(cmp);
    return cmp;
  }
  const host = new Proxy(
    {},
    {
      get(obj, prop) {
        const elm2 = proxyElements.get(host);
        if (elm2 != null) {
          return elm2[prop];
        }
        return obj[prop];
      },
      set(obj, prop, val) {
        const elm2 = proxyElements.get(host);
        if (elm2 != null) {
          elm2[prop] = val;
        } else {
          obj[prop] = val;
        }
        return true;
      },
      has(obj, prop) {
        const elm2 = proxyElements.get(host);
        if (prop in elm2) {
          return true;
        }
        if (prop in obj) {
          return true;
        }
        return false;
      }
    }
  );
  const elm = new MockHTMLElement(ownerDocument, tagName);
  proxyElements.set(host, elm);
  return host;
}
var proxyElements = /* @__PURE__ */ new WeakMap();
var upgradedElements = /* @__PURE__ */ new WeakSet();
function connectNode(ownerDocument, node) {
  node.ownerDocument = ownerDocument;
  if (node.nodeType === 1 /* ELEMENT_NODE */) {
    if (ownerDocument != null && node.nodeName.includes("-")) {
      const win2 = ownerDocument.defaultView;
      if (win2 != null && typeof node.connectedCallback === "function" && node.isConnected) {
        fireConnectedCallback(node);
      }
      const shadowRoot = node.shadowRoot;
      if (shadowRoot != null) {
        shadowRoot.childNodes.forEach((childNode) => {
          connectNode(ownerDocument, childNode);
        });
      }
    }
    node.childNodes.forEach((childNode) => {
      connectNode(ownerDocument, childNode);
    });
  } else {
    node.childNodes.forEach((childNode) => {
      childNode.ownerDocument = ownerDocument;
    });
  }
}
function fireConnectedCallback(node) {
  if (typeof node.connectedCallback === "function") {
    if (tempDisableCallbacks.has(node.ownerDocument) === false) {
      try {
        node.connectedCallback();
      } catch (e) {
        console.error(e);
      }
    }
  }
}
function disconnectNode(node) {
  if (node.nodeType === 1 /* ELEMENT_NODE */) {
    if (node.nodeName.includes("-") === true && typeof node.disconnectedCallback === "function") {
      if (tempDisableCallbacks.has(node.ownerDocument) === false) {
        try {
          node.disconnectedCallback();
        } catch (e) {
          console.error(e);
        }
      }
    }
    node.childNodes.forEach(disconnectNode);
  }
}
function attributeChanged(node, attrName, oldValue, newValue) {
  attrName = attrName.toLowerCase();
  const observedAttributes = node.constructor.observedAttributes;
  if (Array.isArray(observedAttributes) === true && observedAttributes.some((obs) => obs.toLowerCase() === attrName) === true) {
    try {
      node.attributeChangedCallback(attrName, oldValue, newValue);
    } catch (e) {
      console.error(e);
    }
  }
}
function checkAttributeChanged(node) {
  return node.nodeName.includes("-") === true && typeof node.attributeChangedCallback === "function";
}
var tempDisableCallbacks = /* @__PURE__ */ new Set();

// src/mock-doc/dataset.ts
function dataset(elm) {
  const ds = {};
  const attributes = elm.attributes;
  const attrLen = attributes.length;
  for (let i = 0; i < attrLen; i++) {
    const attr = attributes.item(i);
    const nodeName = attr.nodeName;
    if (nodeName.startsWith("data-")) {
      ds[dashToPascalCase(nodeName)] = attr.nodeValue;
    }
  }
  return new Proxy(ds, {
    get(_obj, camelCaseProp) {
      return ds[camelCaseProp];
    },
    set(_obj, camelCaseProp, value) {
      const dataAttr = toDataAttribute(camelCaseProp);
      elm.setAttribute(dataAttr, value);
      return true;
    }
  });
}
function toDataAttribute(str) {
  return "data-" + String(str).replace(/([A-Z0-9])/g, (g) => " " + g[0]).trim().replace(/ /g, "-").toLowerCase();
}
function dashToPascalCase(str) {
  str = String(str).slice(5);
  return str.split("-").map((segment, index) => {
    if (index === 0) {
      return segment.charAt(0).toLowerCase() + segment.slice(1);
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }).join("");
}

// src/mock-doc/event.ts
var MockEvent = class {
  constructor(type, eventInitDict) {
    this.bubbles = false;
    this.cancelBubble = false;
    this.cancelable = false;
    this.composed = false;
    this.currentTarget = null;
    this.defaultPrevented = false;
    this.srcElement = null;
    this.target = null;
    if (typeof type !== "string") {
      throw new Error(`Event type required`);
    }
    this.type = type;
    this.timeStamp = Date.now();
    if (eventInitDict != null) {
      Object.assign(this, eventInitDict);
    }
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
    this.cancelBubble = true;
  }
  stopImmediatePropagation() {
    this.cancelBubble = true;
  }
  /**
   * @ref https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
   * @returns a composed path of the event
   */
  composedPath() {
    const composedPath = [];
    let currentElement = this.target;
    while (currentElement) {
      composedPath.push(currentElement);
      if (!currentElement.parentElement && currentElement.nodeName === "#document" /* DOCUMENT_NODE */) {
        composedPath.push(currentElement.defaultView);
        break;
      }
      if (currentElement.parentElement == null && currentElement.tagName === "HTML") {
        currentElement = currentElement.ownerDocument;
      } else {
        currentElement = currentElement.parentElement;
      }
    }
    return composedPath;
  }
};
var MockCustomEvent = class extends MockEvent {
  constructor(type, customEventInitDic) {
    super(type);
    this.detail = null;
    if (customEventInitDic != null) {
      Object.assign(this, customEventInitDic);
    }
  }
};
var MockKeyboardEvent = class extends MockEvent {
  constructor(type, keyboardEventInitDic) {
    super(type);
    this.code = "";
    this.key = "";
    this.altKey = false;
    this.ctrlKey = false;
    this.metaKey = false;
    this.shiftKey = false;
    this.location = 0;
    this.repeat = false;
    if (keyboardEventInitDic != null) {
      Object.assign(this, keyboardEventInitDic);
    }
  }
};
var MockMouseEvent = class extends MockEvent {
  constructor(type, mouseEventInitDic) {
    super(type);
    this.screenX = 0;
    this.screenY = 0;
    this.clientX = 0;
    this.clientY = 0;
    this.ctrlKey = false;
    this.shiftKey = false;
    this.altKey = false;
    this.metaKey = false;
    this.button = 0;
    this.buttons = 0;
    this.relatedTarget = null;
    if (mouseEventInitDic != null) {
      Object.assign(this, mouseEventInitDic);
    }
  }
};
var MockUIEvent = class extends MockEvent {
  constructor(type, uiEventInitDic) {
    super(type);
    this.detail = null;
    this.view = null;
    if (uiEventInitDic != null) {
      Object.assign(this, uiEventInitDic);
    }
  }
};
var MockFocusEvent = class extends MockUIEvent {
  constructor(type, focusEventInitDic) {
    super(type);
    this.relatedTarget = null;
    if (focusEventInitDic != null) {
      Object.assign(this, focusEventInitDic);
    }
  }
};
var MockEventListener = class {
  constructor(type, handler) {
    this.type = type;
    this.handler = handler;
  }
};
function addEventListener(elm, type, handler) {
  const target = elm;
  if (target.__listeners == null) {
    target.__listeners = [];
  }
  target.__listeners.push(new MockEventListener(type, handler));
}
function removeEventListener(elm, type, handler) {
  const target = elm;
  if (target != null && Array.isArray(target.__listeners) === true) {
    const elmListener = target.__listeners.find((e) => e.type === type && e.handler === handler);
    if (elmListener != null) {
      const index = target.__listeners.indexOf(elmListener);
      target.__listeners.splice(index, 1);
    }
  }
}
function resetEventListeners(target) {
  if (target != null && target.__listeners != null) {
    target.__listeners = null;
  }
}
function triggerEventListener(elm, ev) {
  if (elm == null || ev.cancelBubble === true) {
    return;
  }
  const target = elm;
  ev.currentTarget = elm;
  if (Array.isArray(target.__listeners) === true) {
    const listeners = target.__listeners.filter((e) => e.type === ev.type);
    listeners.forEach((listener) => {
      try {
        listener.handler.call(target, ev);
      } catch (err2) {
        console.error(err2);
      }
    });
  }
  if (ev.bubbles === false) {
    return;
  }
  if (elm.nodeName === "#document" /* DOCUMENT_NODE */) {
    triggerEventListener(elm.defaultView, ev);
  } else if (elm.parentElement == null && elm.tagName === "HTML") {
    triggerEventListener(elm.ownerDocument, ev);
  } else {
    triggerEventListener(elm.parentElement, ev);
  }
}
function dispatchEvent(currentTarget, ev) {
  ev.target = currentTarget;
  triggerEventListener(currentTarget, ev);
  return true;
}

// node_modules/parse5/dist/common/unicode.js
var UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]);
var REPLACEMENT_CHARACTER = "\uFFFD";
var CODE_POINTS;
(function(CODE_POINTS2) {
  CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
  CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
  CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
  CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
  CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
  CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
  CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
  CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
  CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
  CODE_POINTS2[CODE_POINTS2["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
  CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
  CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
  CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
  CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
  CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
  CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
  CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
  CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
  CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
  CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
  CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
  CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
  CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
  CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
  CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
  CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
  CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
  CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
  CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
  CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
  CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
  CODE_POINTS2[CODE_POINTS2["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
})(CODE_POINTS = CODE_POINTS || (CODE_POINTS = {}));
var SEQUENCES = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function isSurrogate(cp) {
  return cp >= 55296 && cp <= 57343;
}
function isSurrogatePair(cp) {
  return cp >= 56320 && cp <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
  return (cp1 - 55296) * 1024 + 9216 + cp2;
}
function isControlCodePoint(cp) {
  return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
}
function isUndefinedCodePoint(cp) {
  return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
}

// node_modules/parse5/dist/common/error-codes.js
var ERR;
(function(ERR2) {
  ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
  ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
  ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
  ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
  ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
  ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
  ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
  ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
  ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
  ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
  ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
  ERR2["missingEndTagName"] = "missing-end-tag-name";
  ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
  ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
  ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
  ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
  ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
  ERR2["eofBeforeTagName"] = "eof-before-tag-name";
  ERR2["eofInTag"] = "eof-in-tag";
  ERR2["missingAttributeValue"] = "missing-attribute-value";
  ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
  ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
  ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
  ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
  ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
  ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
  ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
  ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
  ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
  ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
  ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
  ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
  ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
  ERR2["eofInDoctype"] = "eof-in-doctype";
  ERR2["nestedComment"] = "nested-comment";
  ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
  ERR2["eofInComment"] = "eof-in-comment";
  ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
  ERR2["eofInCdata"] = "eof-in-cdata";
  ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
  ERR2["nullCharacterReference"] = "null-character-reference";
  ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
  ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
  ERR2["controlCharacterReference"] = "control-character-reference";
  ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
  ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
  ERR2["missingDoctypeName"] = "missing-doctype-name";
  ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
  ERR2["duplicateAttribute"] = "duplicate-attribute";
  ERR2["nonConformingDoctype"] = "non-conforming-doctype";
  ERR2["missingDoctype"] = "missing-doctype";
  ERR2["misplacedDoctype"] = "misplaced-doctype";
  ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
  ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
  ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
  ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
  ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
  ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
  ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
  ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
})(ERR = ERR || (ERR = {}));

// node_modules/parse5/dist/tokenizer/preprocessor.js
var DEFAULT_BUFFER_WATERLINE = 1 << 16;
var Preprocessor = class {
  constructor(handler) {
    this.handler = handler;
    this.html = "";
    this.pos = -1;
    this.lastGapPos = -2;
    this.gapStack = [];
    this.skipNextNewLine = false;
    this.lastChunkWritten = false;
    this.endOfChunkHit = false;
    this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
    this.isEol = false;
    this.lineStartPos = 0;
    this.droppedBufferSize = 0;
    this.line = 1;
    this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(code) {
    const { line, col, offset } = this;
    return {
      code,
      startLine: line,
      endLine: line,
      startCol: col,
      endCol: col,
      startOffset: offset,
      endOffset: offset
    };
  }
  _err(code) {
    if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
      this.lastErrOffset = this.offset;
      this.handler.onParseError(this.getError(code));
    }
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos);
    this.lastGapPos = this.pos;
  }
  _processSurrogate(cp) {
    if (this.pos !== this.html.length - 1) {
      const nextCp = this.html.charCodeAt(this.pos + 1);
      if (isSurrogatePair(nextCp)) {
        this.pos++;
        this._addGap();
        return getSurrogatePairCodePoint(cp, nextCp);
      }
    } else if (!this.lastChunkWritten) {
      this.endOfChunkHit = true;
      return CODE_POINTS.EOF;
    }
    this._err(ERR.surrogateInInputStream);
    return cp;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    if (this.willDropParsedChunk()) {
      this.html = this.html.substring(this.pos);
      this.lineStartPos -= this.pos;
      this.droppedBufferSize += this.pos;
      this.pos = 0;
      this.lastGapPos = -2;
      this.gapStack.length = 0;
    }
  }
  write(chunk, isLastChunk) {
    if (this.html.length > 0) {
      this.html += chunk;
    } else {
      this.html = chunk;
    }
    this.endOfChunkHit = false;
    this.lastChunkWritten = isLastChunk;
  }
  insertHtmlAtCurrentPos(chunk) {
    this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
    this.endOfChunkHit = false;
  }
  startsWith(pattern, caseSensitive) {
    if (this.pos + pattern.length > this.html.length) {
      this.endOfChunkHit = !this.lastChunkWritten;
      return false;
    }
    if (caseSensitive) {
      return this.html.startsWith(pattern, this.pos);
    }
    for (let i = 0; i < pattern.length; i++) {
      const cp = this.html.charCodeAt(this.pos + i) | 32;
      if (cp !== pattern.charCodeAt(i)) {
        return false;
      }
    }
    return true;
  }
  peek(offset) {
    const pos = this.pos + offset;
    if (pos >= this.html.length) {
      this.endOfChunkHit = !this.lastChunkWritten;
      return CODE_POINTS.EOF;
    }
    const code = this.html.charCodeAt(pos);
    return code === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : code;
  }
  advance() {
    this.pos++;
    if (this.isEol) {
      this.isEol = false;
      this.line++;
      this.lineStartPos = this.pos;
    }
    if (this.pos >= this.html.length) {
      this.endOfChunkHit = !this.lastChunkWritten;
      return CODE_POINTS.EOF;
    }
    let cp = this.html.charCodeAt(this.pos);
    if (cp === CODE_POINTS.CARRIAGE_RETURN) {
      this.isEol = true;
      this.skipNextNewLine = true;
      return CODE_POINTS.LINE_FEED;
    }
    if (cp === CODE_POINTS.LINE_FEED) {
      this.isEol = true;
      if (this.skipNextNewLine) {
        this.line--;
        this.skipNextNewLine = false;
        this._addGap();
        return this.advance();
      }
    }
    this.skipNextNewLine = false;
    if (isSurrogate(cp)) {
      cp = this._processSurrogate(cp);
    }
    const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
    if (!isCommonValidRange) {
      this._checkForProblematicCharacters(cp);
    }
    return cp;
  }
  _checkForProblematicCharacters(cp) {
    if (isControlCodePoint(cp)) {
      this._err(ERR.controlCharacterInInputStream);
    } else if (isUndefinedCodePoint(cp)) {
      this._err(ERR.noncharacterInInputStream);
    }
  }
  retreat(count) {
    this.pos -= count;
    while (this.pos < this.lastGapPos) {
      this.lastGapPos = this.gapStack.pop();
      this.pos--;
    }
    this.isEol = false;
  }
};

// node_modules/parse5/dist/common/token.js
var token_exports = {};
__export(token_exports, {
  TokenType: () => TokenType,
  getTokenAttr: () => getTokenAttr
});
var TokenType;
(function(TokenType2) {
  TokenType2[TokenType2["CHARACTER"] = 0] = "CHARACTER";
  TokenType2[TokenType2["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
  TokenType2[TokenType2["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
  TokenType2[TokenType2["START_TAG"] = 3] = "START_TAG";
  TokenType2[TokenType2["END_TAG"] = 4] = "END_TAG";
  TokenType2[TokenType2["COMMENT"] = 5] = "COMMENT";
  TokenType2[TokenType2["DOCTYPE"] = 6] = "DOCTYPE";
  TokenType2[TokenType2["EOF"] = 7] = "EOF";
  TokenType2[TokenType2["HIBERNATION"] = 8] = "HIBERNATION";
})(TokenType = TokenType || (TokenType = {}));
function getTokenAttr(token, attrName) {
  for (let i = token.attrs.length - 1; i >= 0; i--) {
    if (token.attrs[i].name === attrName) {
      return token.attrs[i].value;
    }
  }
  return null;
}

// node_modules/entities/lib/esm/generated/decode-data-html.js
var decode_data_html_default = new Uint16Array(
  // prettier-ignore
  '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0))
);

// node_modules/entities/lib/esm/generated/decode-data-xml.js
var decode_data_xml_default = new Uint16Array(
  // prettier-ignore
  "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0))
);

// node_modules/entities/lib/esm/decode_codepoint.js
var _a;
var decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);
function replaceCodePoint(codePoint) {
  var _a2;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}

// node_modules/entities/lib/esm/decode.js
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
var TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder = class {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a2;
    if (this.consumed <= expectedLength) {
      (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a2;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a2;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
};
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
var htmlDecoder = getDecoder(decode_data_html_default);
var xmlDecoder = getDecoder(decode_data_xml_default);

// node_modules/parse5/dist/common/html.js
var html_exports = {};
__export(html_exports, {
  ATTRS: () => ATTRS,
  DOCUMENT_MODE: () => DOCUMENT_MODE,
  NS: () => NS,
  SPECIAL_ELEMENTS: () => SPECIAL_ELEMENTS,
  TAG_ID: () => TAG_ID,
  TAG_NAMES: () => TAG_NAMES,
  getTagID: () => getTagID,
  hasUnescapedText: () => hasUnescapedText,
  isNumberedHeader: () => isNumberedHeader
});
var NS;
(function(NS2) {
  NS2["HTML"] = "http://www.w3.org/1999/xhtml";
  NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
  NS2["SVG"] = "http://www.w3.org/2000/svg";
  NS2["XLINK"] = "http://www.w3.org/1999/xlink";
  NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
  NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
})(NS = NS || (NS = {}));
var ATTRS;
(function(ATTRS2) {
  ATTRS2["TYPE"] = "type";
  ATTRS2["ACTION"] = "action";
  ATTRS2["ENCODING"] = "encoding";
  ATTRS2["PROMPT"] = "prompt";
  ATTRS2["NAME"] = "name";
  ATTRS2["COLOR"] = "color";
  ATTRS2["FACE"] = "face";
  ATTRS2["SIZE"] = "size";
})(ATTRS = ATTRS || (ATTRS = {}));
var DOCUMENT_MODE;
(function(DOCUMENT_MODE2) {
  DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
  DOCUMENT_MODE2["QUIRKS"] = "quirks";
  DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
})(DOCUMENT_MODE = DOCUMENT_MODE || (DOCUMENT_MODE = {}));
var TAG_NAMES;
(function(TAG_NAMES2) {
  TAG_NAMES2["A"] = "a";
  TAG_NAMES2["ADDRESS"] = "address";
  TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
  TAG_NAMES2["APPLET"] = "applet";
  TAG_NAMES2["AREA"] = "area";
  TAG_NAMES2["ARTICLE"] = "article";
  TAG_NAMES2["ASIDE"] = "aside";
  TAG_NAMES2["B"] = "b";
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BASEFONT"] = "basefont";
  TAG_NAMES2["BGSOUND"] = "bgsound";
  TAG_NAMES2["BIG"] = "big";
  TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["BR"] = "br";
  TAG_NAMES2["BUTTON"] = "button";
  TAG_NAMES2["CAPTION"] = "caption";
  TAG_NAMES2["CENTER"] = "center";
  TAG_NAMES2["CODE"] = "code";
  TAG_NAMES2["COL"] = "col";
  TAG_NAMES2["COLGROUP"] = "colgroup";
  TAG_NAMES2["DD"] = "dd";
  TAG_NAMES2["DESC"] = "desc";
  TAG_NAMES2["DETAILS"] = "details";
  TAG_NAMES2["DIALOG"] = "dialog";
  TAG_NAMES2["DIR"] = "dir";
  TAG_NAMES2["DIV"] = "div";
  TAG_NAMES2["DL"] = "dl";
  TAG_NAMES2["DT"] = "dt";
  TAG_NAMES2["EM"] = "em";
  TAG_NAMES2["EMBED"] = "embed";
  TAG_NAMES2["FIELDSET"] = "fieldset";
  TAG_NAMES2["FIGCAPTION"] = "figcaption";
  TAG_NAMES2["FIGURE"] = "figure";
  TAG_NAMES2["FONT"] = "font";
  TAG_NAMES2["FOOTER"] = "footer";
  TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
  TAG_NAMES2["FORM"] = "form";
  TAG_NAMES2["FRAME"] = "frame";
  TAG_NAMES2["FRAMESET"] = "frameset";
  TAG_NAMES2["H1"] = "h1";
  TAG_NAMES2["H2"] = "h2";
  TAG_NAMES2["H3"] = "h3";
  TAG_NAMES2["H4"] = "h4";
  TAG_NAMES2["H5"] = "h5";
  TAG_NAMES2["H6"] = "h6";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HEADER"] = "header";
  TAG_NAMES2["HGROUP"] = "hgroup";
  TAG_NAMES2["HR"] = "hr";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["I"] = "i";
  TAG_NAMES2["IMG"] = "img";
  TAG_NAMES2["IMAGE"] = "image";
  TAG_NAMES2["INPUT"] = "input";
  TAG_NAMES2["IFRAME"] = "iframe";
  TAG_NAMES2["KEYGEN"] = "keygen";
  TAG_NAMES2["LABEL"] = "label";
  TAG_NAMES2["LI"] = "li";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["LISTING"] = "listing";
  TAG_NAMES2["MAIN"] = "main";
  TAG_NAMES2["MALIGNMARK"] = "malignmark";
  TAG_NAMES2["MARQUEE"] = "marquee";
  TAG_NAMES2["MATH"] = "math";
  TAG_NAMES2["MENU"] = "menu";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["MGLYPH"] = "mglyph";
  TAG_NAMES2["MI"] = "mi";
  TAG_NAMES2["MO"] = "mo";
  TAG_NAMES2["MN"] = "mn";
  TAG_NAMES2["MS"] = "ms";
  TAG_NAMES2["MTEXT"] = "mtext";
  TAG_NAMES2["NAV"] = "nav";
  TAG_NAMES2["NOBR"] = "nobr";
  TAG_NAMES2["NOFRAMES"] = "noframes";
  TAG_NAMES2["NOEMBED"] = "noembed";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["OBJECT"] = "object";
  TAG_NAMES2["OL"] = "ol";
  TAG_NAMES2["OPTGROUP"] = "optgroup";
  TAG_NAMES2["OPTION"] = "option";
  TAG_NAMES2["P"] = "p";
  TAG_NAMES2["PARAM"] = "param";
  TAG_NAMES2["PLAINTEXT"] = "plaintext";
  TAG_NAMES2["PRE"] = "pre";
  TAG_NAMES2["RB"] = "rb";
  TAG_NAMES2["RP"] = "rp";
  TAG_NAMES2["RT"] = "rt";
  TAG_NAMES2["RTC"] = "rtc";
  TAG_NAMES2["RUBY"] = "ruby";
  TAG_NAMES2["S"] = "s";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["SECTION"] = "section";
  TAG_NAMES2["SELECT"] = "select";
  TAG_NAMES2["SOURCE"] = "source";
  TAG_NAMES2["SMALL"] = "small";
  TAG_NAMES2["SPAN"] = "span";
  TAG_NAMES2["STRIKE"] = "strike";
  TAG_NAMES2["STRONG"] = "strong";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["SUB"] = "sub";
  TAG_NAMES2["SUMMARY"] = "summary";
  TAG_NAMES2["SUP"] = "sup";
  TAG_NAMES2["TABLE"] = "table";
  TAG_NAMES2["TBODY"] = "tbody";
  TAG_NAMES2["TEMPLATE"] = "template";
  TAG_NAMES2["TEXTAREA"] = "textarea";
  TAG_NAMES2["TFOOT"] = "tfoot";
  TAG_NAMES2["TD"] = "td";
  TAG_NAMES2["TH"] = "th";
  TAG_NAMES2["THEAD"] = "thead";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["TR"] = "tr";
  TAG_NAMES2["TRACK"] = "track";
  TAG_NAMES2["TT"] = "tt";
  TAG_NAMES2["U"] = "u";
  TAG_NAMES2["UL"] = "ul";
  TAG_NAMES2["SVG"] = "svg";
  TAG_NAMES2["VAR"] = "var";
  TAG_NAMES2["WBR"] = "wbr";
  TAG_NAMES2["XMP"] = "xmp";
})(TAG_NAMES = TAG_NAMES || (TAG_NAMES = {}));
var TAG_ID;
(function(TAG_ID2) {
  TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
  TAG_ID2[TAG_ID2["A"] = 1] = "A";
  TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
  TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
  TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
  TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
  TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
  TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
  TAG_ID2[TAG_ID2["B"] = 8] = "B";
  TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
  TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
  TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
  TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
  TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
  TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
  TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
  TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
  TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
  TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
  TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
  TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
  TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
  TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
  TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
  TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
  TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
  TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
  TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
  TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
  TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
  TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
  TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
  TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
  TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
  TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
  TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
  TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
  TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
  TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
  TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
  TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
  TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
  TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
  TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
  TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
  TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
  TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
  TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
  TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
  TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
  TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
  TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
  TAG_ID2[TAG_ID2["I"] = 52] = "I";
  TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
  TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
  TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
  TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
  TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
  TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
  TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
  TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
  TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
  TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
  TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
  TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
  TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
  TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
  TAG_ID2[TAG_ID2["META"] = 67] = "META";
  TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
  TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
  TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
  TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
  TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
  TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
  TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
  TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
  TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
  TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
  TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
  TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
  TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
  TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
  TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
  TAG_ID2[TAG_ID2["P"] = 83] = "P";
  TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
  TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
  TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
  TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
  TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
  TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
  TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
  TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
  TAG_ID2[TAG_ID2["S"] = 92] = "S";
  TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
  TAG_ID2[TAG_ID2["SECTION"] = 94] = "SECTION";
  TAG_ID2[TAG_ID2["SELECT"] = 95] = "SELECT";
  TAG_ID2[TAG_ID2["SOURCE"] = 96] = "SOURCE";
  TAG_ID2[TAG_ID2["SMALL"] = 97] = "SMALL";
  TAG_ID2[TAG_ID2["SPAN"] = 98] = "SPAN";
  TAG_ID2[TAG_ID2["STRIKE"] = 99] = "STRIKE";
  TAG_ID2[TAG_ID2["STRONG"] = 100] = "STRONG";
  TAG_ID2[TAG_ID2["STYLE"] = 101] = "STYLE";
  TAG_ID2[TAG_ID2["SUB"] = 102] = "SUB";
  TAG_ID2[TAG_ID2["SUMMARY"] = 103] = "SUMMARY";
  TAG_ID2[TAG_ID2["SUP"] = 104] = "SUP";
  TAG_ID2[TAG_ID2["TABLE"] = 105] = "TABLE";
  TAG_ID2[TAG_ID2["TBODY"] = 106] = "TBODY";
  TAG_ID2[TAG_ID2["TEMPLATE"] = 107] = "TEMPLATE";
  TAG_ID2[TAG_ID2["TEXTAREA"] = 108] = "TEXTAREA";
  TAG_ID2[TAG_ID2["TFOOT"] = 109] = "TFOOT";
  TAG_ID2[TAG_ID2["TD"] = 110] = "TD";
  TAG_ID2[TAG_ID2["TH"] = 111] = "TH";
  TAG_ID2[TAG_ID2["THEAD"] = 112] = "THEAD";
  TAG_ID2[TAG_ID2["TITLE"] = 113] = "TITLE";
  TAG_ID2[TAG_ID2["TR"] = 114] = "TR";
  TAG_ID2[TAG_ID2["TRACK"] = 115] = "TRACK";
  TAG_ID2[TAG_ID2["TT"] = 116] = "TT";
  TAG_ID2[TAG_ID2["U"] = 117] = "U";
  TAG_ID2[TAG_ID2["UL"] = 118] = "UL";
  TAG_ID2[TAG_ID2["SVG"] = 119] = "SVG";
  TAG_ID2[TAG_ID2["VAR"] = 120] = "VAR";
  TAG_ID2[TAG_ID2["WBR"] = 121] = "WBR";
  TAG_ID2[TAG_ID2["XMP"] = 122] = "XMP";
})(TAG_ID = TAG_ID || (TAG_ID = {}));
var TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
  [TAG_NAMES.A, TAG_ID.A],
  [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
  [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
  [TAG_NAMES.APPLET, TAG_ID.APPLET],
  [TAG_NAMES.AREA, TAG_ID.AREA],
  [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
  [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
  [TAG_NAMES.B, TAG_ID.B],
  [TAG_NAMES.BASE, TAG_ID.BASE],
  [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
  [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
  [TAG_NAMES.BIG, TAG_ID.BIG],
  [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
  [TAG_NAMES.BODY, TAG_ID.BODY],
  [TAG_NAMES.BR, TAG_ID.BR],
  [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
  [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
  [TAG_NAMES.CENTER, TAG_ID.CENTER],
  [TAG_NAMES.CODE, TAG_ID.CODE],
  [TAG_NAMES.COL, TAG_ID.COL],
  [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
  [TAG_NAMES.DD, TAG_ID.DD],
  [TAG_NAMES.DESC, TAG_ID.DESC],
  [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
  [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
  [TAG_NAMES.DIR, TAG_ID.DIR],
  [TAG_NAMES.DIV, TAG_ID.DIV],
  [TAG_NAMES.DL, TAG_ID.DL],
  [TAG_NAMES.DT, TAG_ID.DT],
  [TAG_NAMES.EM, TAG_ID.EM],
  [TAG_NAMES.EMBED, TAG_ID.EMBED],
  [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
  [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
  [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
  [TAG_NAMES.FONT, TAG_ID.FONT],
  [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
  [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
  [TAG_NAMES.FORM, TAG_ID.FORM],
  [TAG_NAMES.FRAME, TAG_ID.FRAME],
  [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
  [TAG_NAMES.H1, TAG_ID.H1],
  [TAG_NAMES.H2, TAG_ID.H2],
  [TAG_NAMES.H3, TAG_ID.H3],
  [TAG_NAMES.H4, TAG_ID.H4],
  [TAG_NAMES.H5, TAG_ID.H5],
  [TAG_NAMES.H6, TAG_ID.H6],
  [TAG_NAMES.HEAD, TAG_ID.HEAD],
  [TAG_NAMES.HEADER, TAG_ID.HEADER],
  [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
  [TAG_NAMES.HR, TAG_ID.HR],
  [TAG_NAMES.HTML, TAG_ID.HTML],
  [TAG_NAMES.I, TAG_ID.I],
  [TAG_NAMES.IMG, TAG_ID.IMG],
  [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
  [TAG_NAMES.INPUT, TAG_ID.INPUT],
  [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
  [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
  [TAG_NAMES.LABEL, TAG_ID.LABEL],
  [TAG_NAMES.LI, TAG_ID.LI],
  [TAG_NAMES.LINK, TAG_ID.LINK],
  [TAG_NAMES.LISTING, TAG_ID.LISTING],
  [TAG_NAMES.MAIN, TAG_ID.MAIN],
  [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
  [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
  [TAG_NAMES.MATH, TAG_ID.MATH],
  [TAG_NAMES.MENU, TAG_ID.MENU],
  [TAG_NAMES.META, TAG_ID.META],
  [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
  [TAG_NAMES.MI, TAG_ID.MI],
  [TAG_NAMES.MO, TAG_ID.MO],
  [TAG_NAMES.MN, TAG_ID.MN],
  [TAG_NAMES.MS, TAG_ID.MS],
  [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
  [TAG_NAMES.NAV, TAG_ID.NAV],
  [TAG_NAMES.NOBR, TAG_ID.NOBR],
  [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
  [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
  [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
  [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
  [TAG_NAMES.OL, TAG_ID.OL],
  [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
  [TAG_NAMES.OPTION, TAG_ID.OPTION],
  [TAG_NAMES.P, TAG_ID.P],
  [TAG_NAMES.PARAM, TAG_ID.PARAM],
  [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
  [TAG_NAMES.PRE, TAG_ID.PRE],
  [TAG_NAMES.RB, TAG_ID.RB],
  [TAG_NAMES.RP, TAG_ID.RP],
  [TAG_NAMES.RT, TAG_ID.RT],
  [TAG_NAMES.RTC, TAG_ID.RTC],
  [TAG_NAMES.RUBY, TAG_ID.RUBY],
  [TAG_NAMES.S, TAG_ID.S],
  [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
  [TAG_NAMES.SECTION, TAG_ID.SECTION],
  [TAG_NAMES.SELECT, TAG_ID.SELECT],
  [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
  [TAG_NAMES.SMALL, TAG_ID.SMALL],
  [TAG_NAMES.SPAN, TAG_ID.SPAN],
  [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
  [TAG_NAMES.STRONG, TAG_ID.STRONG],
  [TAG_NAMES.STYLE, TAG_ID.STYLE],
  [TAG_NAMES.SUB, TAG_ID.SUB],
  [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
  [TAG_NAMES.SUP, TAG_ID.SUP],
  [TAG_NAMES.TABLE, TAG_ID.TABLE],
  [TAG_NAMES.TBODY, TAG_ID.TBODY],
  [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
  [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
  [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
  [TAG_NAMES.TD, TAG_ID.TD],
  [TAG_NAMES.TH, TAG_ID.TH],
  [TAG_NAMES.THEAD, TAG_ID.THEAD],
  [TAG_NAMES.TITLE, TAG_ID.TITLE],
  [TAG_NAMES.TR, TAG_ID.TR],
  [TAG_NAMES.TRACK, TAG_ID.TRACK],
  [TAG_NAMES.TT, TAG_ID.TT],
  [TAG_NAMES.U, TAG_ID.U],
  [TAG_NAMES.UL, TAG_ID.UL],
  [TAG_NAMES.SVG, TAG_ID.SVG],
  [TAG_NAMES.VAR, TAG_ID.VAR],
  [TAG_NAMES.WBR, TAG_ID.WBR],
  [TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(tagName) {
  var _a2;
  return (_a2 = TAG_NAME_TO_ID.get(tagName)) !== null && _a2 !== void 0 ? _a2 : TAG_ID.UNKNOWN;
}
var $ = TAG_ID;
var SPECIAL_ELEMENTS = {
  [NS.HTML]: /* @__PURE__ */ new Set([
    $.ADDRESS,
    $.APPLET,
    $.AREA,
    $.ARTICLE,
    $.ASIDE,
    $.BASE,
    $.BASEFONT,
    $.BGSOUND,
    $.BLOCKQUOTE,
    $.BODY,
    $.BR,
    $.BUTTON,
    $.CAPTION,
    $.CENTER,
    $.COL,
    $.COLGROUP,
    $.DD,
    $.DETAILS,
    $.DIR,
    $.DIV,
    $.DL,
    $.DT,
    $.EMBED,
    $.FIELDSET,
    $.FIGCAPTION,
    $.FIGURE,
    $.FOOTER,
    $.FORM,
    $.FRAME,
    $.FRAMESET,
    $.H1,
    $.H2,
    $.H3,
    $.H4,
    $.H5,
    $.H6,
    $.HEAD,
    $.HEADER,
    $.HGROUP,
    $.HR,
    $.HTML,
    $.IFRAME,
    $.IMG,
    $.INPUT,
    $.LI,
    $.LINK,
    $.LISTING,
    $.MAIN,
    $.MARQUEE,
    $.MENU,
    $.META,
    $.NAV,
    $.NOEMBED,
    $.NOFRAMES,
    $.NOSCRIPT,
    $.OBJECT,
    $.OL,
    $.P,
    $.PARAM,
    $.PLAINTEXT,
    $.PRE,
    $.SCRIPT,
    $.SECTION,
    $.SELECT,
    $.SOURCE,
    $.STYLE,
    $.SUMMARY,
    $.TABLE,
    $.TBODY,
    $.TD,
    $.TEMPLATE,
    $.TEXTAREA,
    $.TFOOT,
    $.TH,
    $.THEAD,
    $.TITLE,
    $.TR,
    $.TRACK,
    $.UL,
    $.WBR,
    $.XMP
  ]),
  [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
  [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
  [NS.XLINK]: /* @__PURE__ */ new Set(),
  [NS.XML]: /* @__PURE__ */ new Set(),
  [NS.XMLNS]: /* @__PURE__ */ new Set()
};
function isNumberedHeader(tn) {
  return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
}
var UNESCAPED_TEXT = /* @__PURE__ */ new Set([
  TAG_NAMES.STYLE,
  TAG_NAMES.SCRIPT,
  TAG_NAMES.XMP,
  TAG_NAMES.IFRAME,
  TAG_NAMES.NOEMBED,
  TAG_NAMES.NOFRAMES,
  TAG_NAMES.PLAINTEXT
]);
function hasUnescapedText(tn, scriptingEnabled) {
  return UNESCAPED_TEXT.has(tn) || scriptingEnabled && tn === TAG_NAMES.NOSCRIPT;
}

// node_modules/parse5/dist/tokenizer/index.js
var C1_CONTROLS_REFERENCE_REPLACEMENTS = /* @__PURE__ */ new Map([
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var State;
(function(State2) {
  State2[State2["DATA"] = 0] = "DATA";
  State2[State2["RCDATA"] = 1] = "RCDATA";
  State2[State2["RAWTEXT"] = 2] = "RAWTEXT";
  State2[State2["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
  State2[State2["PLAINTEXT"] = 4] = "PLAINTEXT";
  State2[State2["TAG_OPEN"] = 5] = "TAG_OPEN";
  State2[State2["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
  State2[State2["TAG_NAME"] = 7] = "TAG_NAME";
  State2[State2["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
  State2[State2["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
  State2[State2["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
  State2[State2["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
  State2[State2["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
  State2[State2["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
  State2[State2["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
  State2[State2["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
  State2[State2["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
  State2[State2["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
  State2[State2["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
  State2[State2["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
  State2[State2["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
  State2[State2["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
  State2[State2["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
  State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
  State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
  State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
  State2[State2["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
  State2[State2["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
  State2[State2["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
  State2[State2["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
  State2[State2["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
  State2[State2["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
  State2[State2["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
  State2[State2["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
  State2[State2["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
  State2[State2["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
  State2[State2["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
  State2[State2["COMMENT_START"] = 42] = "COMMENT_START";
  State2[State2["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
  State2[State2["COMMENT"] = 44] = "COMMENT";
  State2[State2["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
  State2[State2["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
  State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
  State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
  State2[State2["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
  State2[State2["COMMENT_END"] = 50] = "COMMENT_END";
  State2[State2["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
  State2[State2["DOCTYPE"] = 52] = "DOCTYPE";
  State2[State2["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
  State2[State2["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
  State2[State2["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
  State2[State2["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
  State2[State2["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
  State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
  State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
  State2[State2["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
  State2[State2["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
  State2[State2["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
  State2[State2["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
  State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
  State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
  State2[State2["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
  State2[State2["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
  State2[State2["CDATA_SECTION"] = 68] = "CDATA_SECTION";
  State2[State2["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
  State2[State2["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
  State2[State2["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
  State2[State2["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
  State2[State2["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
  State2[State2["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
  State2[State2["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
  State2[State2["HEXADEMICAL_CHARACTER_REFERENCE"] = 76] = "HEXADEMICAL_CHARACTER_REFERENCE";
  State2[State2["DECIMAL_CHARACTER_REFERENCE"] = 77] = "DECIMAL_CHARACTER_REFERENCE";
  State2[State2["NUMERIC_CHARACTER_REFERENCE_END"] = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
})(State || (State = {}));
var TokenizerMode = {
  DATA: State.DATA,
  RCDATA: State.RCDATA,
  RAWTEXT: State.RAWTEXT,
  SCRIPT_DATA: State.SCRIPT_DATA,
  PLAINTEXT: State.PLAINTEXT,
  CDATA_SECTION: State.CDATA_SECTION
};
function isAsciiDigit(cp) {
  return cp >= CODE_POINTS.DIGIT_0 && cp <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
  return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
  return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
  return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric2(cp) {
  return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function isAsciiUpperHexDigit(cp) {
  return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_F;
}
function isAsciiLowerHexDigit(cp) {
  return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_F;
}
function isAsciiHexDigit(cp) {
  return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
}
function toAsciiLower(cp) {
  return cp + 32;
}
function isWhitespace(cp) {
  return cp === CODE_POINTS.SPACE || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.TABULATION || cp === CODE_POINTS.FORM_FEED;
}
function isEntityInAttributeInvalidEnd2(nextCp) {
  return nextCp === CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric2(nextCp);
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
  return isWhitespace(cp) || cp === CODE_POINTS.SOLIDUS || cp === CODE_POINTS.GREATER_THAN_SIGN;
}
var Tokenizer = class {
  constructor(options, handler) {
    this.options = options;
    this.handler = handler;
    this.paused = false;
    this.inLoop = false;
    this.inForeignNode = false;
    this.lastStartTagName = "";
    this.active = false;
    this.state = State.DATA;
    this.returnState = State.DATA;
    this.charRefCode = -1;
    this.consumedAfterSnapshot = -1;
    this.currentCharacterToken = null;
    this.currentToken = null;
    this.currentAttr = { name: "", value: "" };
    this.preprocessor = new Preprocessor(handler);
    this.currentLocation = this.getCurrentLocation(-1);
  }
  //Errors
  _err(code) {
    var _a2, _b;
    (_b = (_a2 = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a2, this.preprocessor.getError(code));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(offset) {
    if (!this.options.sourceCodeLocationInfo) {
      return null;
    }
    return {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - offset,
      startOffset: this.preprocessor.offset - offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
  }
  _runParsingLoop() {
    if (this.inLoop)
      return;
    this.inLoop = true;
    while (this.active && !this.paused) {
      this.consumedAfterSnapshot = 0;
      const cp = this._consume();
      if (!this._ensureHibernation()) {
        this._callState(cp);
      }
    }
    this.inLoop = false;
  }
  //API
  pause() {
    this.paused = true;
  }
  resume(writeCallback) {
    if (!this.paused) {
      throw new Error("Parser was already resumed");
    }
    this.paused = false;
    if (this.inLoop)
      return;
    this._runParsingLoop();
    if (!this.paused) {
      writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
    }
  }
  write(chunk, isLastChunk, writeCallback) {
    this.active = true;
    this.preprocessor.write(chunk, isLastChunk);
    this._runParsingLoop();
    if (!this.paused) {
      writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
    }
  }
  insertHtmlAtCurrentPos(chunk) {
    this.active = true;
    this.preprocessor.insertHtmlAtCurrentPos(chunk);
    this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    if (this.preprocessor.endOfChunkHit) {
      this._unconsume(this.consumedAfterSnapshot);
      this.active = false;
      return true;
    }
    return false;
  }
  //Consumption
  _consume() {
    this.consumedAfterSnapshot++;
    return this.preprocessor.advance();
  }
  _unconsume(count) {
    this.consumedAfterSnapshot -= count;
    this.preprocessor.retreat(count);
  }
  _reconsumeInState(state, cp) {
    this.state = state;
    this._callState(cp);
  }
  _advanceBy(count) {
    this.consumedAfterSnapshot += count;
    for (let i = 0; i < count; i++) {
      this.preprocessor.advance();
    }
  }
  _consumeSequenceIfMatch(pattern, caseSensitive) {
    if (this.preprocessor.startsWith(pattern, caseSensitive)) {
      this._advanceBy(pattern.length - 1);
      return true;
    }
    return false;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: TokenType.START_TAG,
      tagName: "",
      tagID: TAG_ID.UNKNOWN,
      selfClosing: false,
      ackSelfClosing: false,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: TokenType.END_TAG,
      tagName: "",
      tagID: TAG_ID.UNKNOWN,
      selfClosing: false,
      ackSelfClosing: false,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(offset) {
    this.currentToken = {
      type: TokenType.COMMENT,
      data: "",
      location: this.getCurrentLocation(offset)
    };
  }
  _createDoctypeToken(initialName) {
    this.currentToken = {
      type: TokenType.DOCTYPE,
      name: initialName,
      forceQuirks: false,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(type, chars) {
    this.currentCharacterToken = {
      type,
      chars,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(attrNameFirstCh) {
    this.currentAttr = {
      name: attrNameFirstCh,
      value: ""
    };
    this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var _a2;
    var _b;
    const token = this.currentToken;
    if (getTokenAttr(token, this.currentAttr.name) === null) {
      token.attrs.push(this.currentAttr);
      if (token.location && this.currentLocation) {
        const attrLocations = (_a2 = (_b = token.location).attrs) !== null && _a2 !== void 0 ? _a2 : _b.attrs = /* @__PURE__ */ Object.create(null);
        attrLocations[this.currentAttr.name] = this.currentLocation;
        this._leaveAttrValue();
      }
    } else {
      this._err(ERR.duplicateAttribute);
    }
  }
  _leaveAttrValue() {
    if (this.currentLocation) {
      this.currentLocation.endLine = this.preprocessor.line;
      this.currentLocation.endCol = this.preprocessor.col;
      this.currentLocation.endOffset = this.preprocessor.offset;
    }
  }
  //Token emission
  prepareToken(ct) {
    this._emitCurrentCharacterToken(ct.location);
    this.currentToken = null;
    if (ct.location) {
      ct.location.endLine = this.preprocessor.line;
      ct.location.endCol = this.preprocessor.col + 1;
      ct.location.endOffset = this.preprocessor.offset + 1;
    }
    this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const ct = this.currentToken;
    this.prepareToken(ct);
    ct.tagID = getTagID(ct.tagName);
    if (ct.type === TokenType.START_TAG) {
      this.lastStartTagName = ct.tagName;
      this.handler.onStartTag(ct);
    } else {
      if (ct.attrs.length > 0) {
        this._err(ERR.endTagWithAttributes);
      }
      if (ct.selfClosing) {
        this._err(ERR.endTagWithTrailingSolidus);
      }
      this.handler.onEndTag(ct);
    }
    this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(ct) {
    this.prepareToken(ct);
    this.handler.onComment(ct);
    this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(ct) {
    this.prepareToken(ct);
    this.handler.onDoctype(ct);
    this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(nextLocation) {
    if (this.currentCharacterToken) {
      if (nextLocation && this.currentCharacterToken.location) {
        this.currentCharacterToken.location.endLine = nextLocation.startLine;
        this.currentCharacterToken.location.endCol = nextLocation.startCol;
        this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
      }
      switch (this.currentCharacterToken.type) {
        case TokenType.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case TokenType.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case TokenType.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const location2 = this.getCurrentLocation(0);
    if (location2) {
      location2.endLine = location2.startLine;
      location2.endCol = location2.startCol;
      location2.endOffset = location2.startOffset;
    }
    this._emitCurrentCharacterToken(location2);
    this.handler.onEof({ type: TokenType.EOF, location: location2 });
    this.active = false;
  }
  //Characters emission
  //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(type, ch) {
    if (this.currentCharacterToken) {
      if (this.currentCharacterToken.type !== type) {
        this.currentLocation = this.getCurrentLocation(0);
        this._emitCurrentCharacterToken(this.currentLocation);
        this.preprocessor.dropParsedChunk();
      } else {
        this.currentCharacterToken.chars += ch;
        return;
      }
    }
    this._createCharacterToken(type, ch);
  }
  _emitCodePoint(cp) {
    const type = isWhitespace(cp) ? TokenType.WHITESPACE_CHARACTER : cp === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
    this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(ch) {
    this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, ch);
  }
  // Character reference helpers
  _matchNamedCharacterReference(cp) {
    let result = null;
    let excess = 0;
    let withoutSemicolon = false;
    for (let i = 0, current = decode_data_html_default[0]; i >= 0; cp = this._consume()) {
      i = determineBranch(decode_data_html_default, current, i + 1, cp);
      if (i < 0)
        break;
      excess += 1;
      current = decode_data_html_default[i];
      const masked = current & BinTrieFlags.VALUE_LENGTH;
      if (masked) {
        const valueLength = (masked >> 14) - 1;
        if (cp !== CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && isEntityInAttributeInvalidEnd2(this.preprocessor.peek(1))) {
          result = [CODE_POINTS.AMPERSAND];
          i += valueLength;
        } else {
          result = valueLength === 0 ? [decode_data_html_default[i] & ~BinTrieFlags.VALUE_LENGTH] : valueLength === 1 ? [decode_data_html_default[++i]] : [decode_data_html_default[++i], decode_data_html_default[++i]];
          excess = 0;
          withoutSemicolon = cp !== CODE_POINTS.SEMICOLON;
        }
        if (valueLength === 0) {
          this._consume();
          break;
        }
      }
    }
    this._unconsume(excess);
    if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
      this._err(ERR.missingSemicolonAfterCharacterReference);
    }
    this._unconsume(1);
    return result;
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(cp) {
    if (this._isCharacterReferenceInAttribute()) {
      this.currentAttr.value += String.fromCodePoint(cp);
    } else {
      this._emitCodePoint(cp);
    }
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(cp) {
    switch (this.state) {
      case State.DATA: {
        this._stateData(cp);
        break;
      }
      case State.RCDATA: {
        this._stateRcdata(cp);
        break;
      }
      case State.RAWTEXT: {
        this._stateRawtext(cp);
        break;
      }
      case State.SCRIPT_DATA: {
        this._stateScriptData(cp);
        break;
      }
      case State.PLAINTEXT: {
        this._statePlaintext(cp);
        break;
      }
      case State.TAG_OPEN: {
        this._stateTagOpen(cp);
        break;
      }
      case State.END_TAG_OPEN: {
        this._stateEndTagOpen(cp);
        break;
      }
      case State.TAG_NAME: {
        this._stateTagName(cp);
        break;
      }
      case State.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(cp);
        break;
      }
      case State.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(cp);
        break;
      }
      case State.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(cp);
        break;
      }
      case State.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(cp);
        break;
      }
      case State.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(cp);
        break;
      }
      case State.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(cp);
        break;
      }
      case State.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(cp);
        break;
      }
      case State.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(cp);
        break;
      }
      case State.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(cp);
        break;
      }
      case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(cp);
        break;
      }
      case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(cp);
        break;
      }
      case State.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(cp);
        break;
      }
      case State.ATTRIBUTE_NAME: {
        this._stateAttributeName(cp);
        break;
      }
      case State.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(cp);
        break;
      }
      case State.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(cp);
        break;
      }
      case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(cp);
        break;
      }
      case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(cp);
        break;
      }
      case State.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(cp);
        break;
      }
      case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(cp);
        break;
      }
      case State.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(cp);
        break;
      }
      case State.BOGUS_COMMENT: {
        this._stateBogusComment(cp);
        break;
      }
      case State.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(cp);
        break;
      }
      case State.COMMENT_START: {
        this._stateCommentStart(cp);
        break;
      }
      case State.COMMENT_START_DASH: {
        this._stateCommentStartDash(cp);
        break;
      }
      case State.COMMENT: {
        this._stateComment(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(cp);
        break;
      }
      case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(cp);
        break;
      }
      case State.COMMENT_END_DASH: {
        this._stateCommentEndDash(cp);
        break;
      }
      case State.COMMENT_END: {
        this._stateCommentEnd(cp);
        break;
      }
      case State.COMMENT_END_BANG: {
        this._stateCommentEndBang(cp);
        break;
      }
      case State.DOCTYPE: {
        this._stateDoctype(cp);
        break;
      }
      case State.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(cp);
        break;
      }
      case State.DOCTYPE_NAME: {
        this._stateDoctypeName(cp);
        break;
      }
      case State.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(cp);
        break;
      }
      case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(cp);
        break;
      }
      case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(cp);
        break;
      }
      case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(cp);
        break;
      }
      case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(cp);
        break;
      }
      case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(cp);
        break;
      }
      case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
        break;
      }
      case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(cp);
        break;
      }
      case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(cp);
        break;
      }
      case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
        break;
      }
      case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(cp);
        break;
      }
      case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(cp);
        break;
      }
      case State.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(cp);
        break;
      }
      case State.CDATA_SECTION: {
        this._stateCdataSection(cp);
        break;
      }
      case State.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(cp);
        break;
      }
      case State.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(cp);
        break;
      }
      case State.CHARACTER_REFERENCE: {
        this._stateCharacterReference(cp);
        break;
      }
      case State.NAMED_CHARACTER_REFERENCE: {
        this._stateNamedCharacterReference(cp);
        break;
      }
      case State.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(cp);
        break;
      }
      case State.NUMERIC_CHARACTER_REFERENCE: {
        this._stateNumericCharacterReference(cp);
        break;
      }
      case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
        this._stateHexademicalCharacterReferenceStart(cp);
        break;
      }
      case State.HEXADEMICAL_CHARACTER_REFERENCE: {
        this._stateHexademicalCharacterReference(cp);
        break;
      }
      case State.DECIMAL_CHARACTER_REFERENCE: {
        this._stateDecimalCharacterReference(cp);
        break;
      }
      case State.NUMERIC_CHARACTER_REFERENCE_END: {
        this._stateNumericCharacterReferenceEnd(cp);
        break;
      }
      default: {
        throw new Error("Unknown state");
      }
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(cp) {
    switch (cp) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.TAG_OPEN;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State.DATA;
        this.state = State.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitCodePoint(cp);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(cp) {
    switch (cp) {
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State.RCDATA;
        this.state = State.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(cp) {
    switch (cp) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(cp) {
    switch (cp) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(cp) {
    switch (cp) {
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this._createStartTagToken();
      this.state = State.TAG_NAME;
      this._stateTagName(cp);
    } else
      switch (cp) {
        case CODE_POINTS.EXCLAMATION_MARK: {
          this.state = State.MARKUP_DECLARATION_OPEN;
          break;
        }
        case CODE_POINTS.SOLIDUS: {
          this.state = State.END_TAG_OPEN;
          break;
        }
        case CODE_POINTS.QUESTION_MARK: {
          this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
          this._createCommentToken(1);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("<");
          this._emitEOFToken();
          break;
        }
        default: {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._emitChars("<");
          this.state = State.DATA;
          this._stateData(cp);
        }
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();
      this.state = State.TAG_NAME;
      this._stateTagName(cp);
    } else
      switch (cp) {
        case CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(ERR.missingEndTagName);
          this.state = State.DATA;
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("</");
          this._emitEOFToken();
          break;
        }
        default: {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._createCommentToken(2);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
        }
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this.state = State.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.tagName += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
      }
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.RCDATA_END_TAG_OPEN;
    } else {
      this._emitChars("<");
      this.state = State.RCDATA;
      this._stateRcdata(cp);
    }
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.RCDATA_END_TAG_NAME;
      this._stateRcdataEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.RCDATA;
      this._stateRcdata(cp);
    }
  }
  handleSpecialEndTag(_cp) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
      return !this._ensureHibernation();
    }
    this._createEndTagToken();
    const token = this.currentToken;
    token.tagName = this.lastStartTagName;
    const cp = this.preprocessor.peek(this.lastStartTagName.length);
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._advanceBy(this.lastStartTagName.length);
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        return false;
      }
      case CODE_POINTS.SOLIDUS: {
        this._advanceBy(this.lastStartTagName.length);
        this.state = State.SELF_CLOSING_START_TAG;
        return false;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._advanceBy(this.lastStartTagName.length);
        this.emitCurrentTagToken();
        this.state = State.DATA;
        return false;
      }
      default: {
        return !this._ensureHibernation();
      }
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.RCDATA;
      this._stateRcdata(cp);
    }
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.RAWTEXT_END_TAG_OPEN;
    } else {
      this._emitChars("<");
      this.state = State.RAWTEXT;
      this._stateRawtext(cp);
    }
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.RAWTEXT_END_TAG_NAME;
      this._stateRawtextEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.RAWTEXT;
      this._stateRawtext(cp);
    }
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.RAWTEXT;
      this._stateRawtext(cp);
    }
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(cp) {
    switch (cp) {
      case CODE_POINTS.SOLIDUS: {
        this.state = State.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case CODE_POINTS.EXCLAMATION_MARK: {
        this.state = State.SCRIPT_DATA_ESCAPE_START;
        this._emitChars("<!");
        break;
      }
      default: {
        this._emitChars("<");
        this.state = State.SCRIPT_DATA;
        this._stateScriptData(cp);
      }
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.SCRIPT_DATA_END_TAG_NAME;
      this._stateScriptDataEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
      this._emitChars("-");
    } else {
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
      this._emitChars("-");
    } else {
      this.state = State.SCRIPT_DATA;
      this._stateScriptData(cp);
    }
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_ESCAPED_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.SCRIPT_DATA;
        this._emitChars(">");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
    } else if (isAsciiLetter(cp)) {
      this._emitChars("<");
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
      this._stateScriptDataDoubleEscapeStart(cp);
    } else {
      this._emitChars("<");
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(cp) {
    if (isAsciiLetter(cp)) {
      this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
      this._stateScriptDataEscapedEndTagName(cp);
    } else {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(cp) {
    if (this.handleSpecialEndTag(cp)) {
      this._emitChars("</");
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(cp) {
    if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(cp);
      for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
        this._emitCodePoint(this._consume());
      }
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else if (!this._ensureHibernation()) {
      this.state = State.SCRIPT_DATA_ESCAPED;
      this._stateScriptDataEscaped(cp);
    }
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
        this._emitChars("<");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
        this._emitChars("<");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
        this._emitChars("<");
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.SCRIPT_DATA;
        this._emitChars(">");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText);
        this._emitEOFToken();
        break;
      }
      default: {
        this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        this._emitCodePoint(cp);
      }
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(cp) {
    if (cp === CODE_POINTS.SOLIDUS) {
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
      this._emitChars("/");
    } else {
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
      this._stateScriptDataDoubleEscaped(cp);
    }
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(cp) {
    if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(cp);
      for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
        this._emitCodePoint(this._consume());
      }
      this.state = State.SCRIPT_DATA_ESCAPED;
    } else if (!this._ensureHibernation()) {
      this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
      this._stateScriptDataDoubleEscaped(cp);
    }
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.SOLIDUS:
      case CODE_POINTS.GREATER_THAN_SIGN:
      case CODE_POINTS.EOF: {
        this.state = State.AFTER_ATTRIBUTE_NAME;
        this._stateAfterAttributeName(cp);
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
        this._createAttr("=");
        this.state = State.ATTRIBUTE_NAME;
        break;
      }
      default: {
        this._createAttr("");
        this.state = State.ATTRIBUTE_NAME;
        this._stateAttributeName(cp);
      }
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
      case CODE_POINTS.SOLIDUS:
      case CODE_POINTS.GREATER_THAN_SIGN:
      case CODE_POINTS.EOF: {
        this._leaveAttrName();
        this.state = State.AFTER_ATTRIBUTE_NAME;
        this._stateAfterAttributeName(cp);
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this._leaveAttrName();
        this.state = State.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK:
      case CODE_POINTS.APOSTROPHE:
      case CODE_POINTS.LESS_THAN_SIGN: {
        this._err(ERR.unexpectedCharacterInAttributeName);
        this.currentAttr.name += String.fromCodePoint(cp);
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.name += REPLACEMENT_CHARACTER;
        break;
      }
      default: {
        this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
      }
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this.state = State.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this.state = State.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this._createAttr("");
        this.state = State.ATTRIBUTE_NAME;
        this._stateAttributeName(cp);
      }
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingAttributeValue);
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      default: {
        this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
        this._stateAttributeValueUnquoted(cp);
      }
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(cp) {
    switch (cp) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        this.state = State.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this.currentAttr.value += String.fromCodePoint(cp);
      }
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(cp) {
    switch (cp) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        this.state = State.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this.currentAttr.value += String.fromCodePoint(cp);
      }
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue();
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
        this.state = State.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue();
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK:
      case CODE_POINTS.APOSTROPHE:
      case CODE_POINTS.LESS_THAN_SIGN:
      case CODE_POINTS.EQUALS_SIGN:
      case CODE_POINTS.GRAVE_ACCENT: {
        this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
        this.currentAttr.value += String.fromCodePoint(cp);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this.currentAttr.value += String.fromCodePoint(cp);
      }
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue();
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this._leaveAttrValue();
        this.state = State.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue();
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingWhitespaceBetweenAttributes);
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        this._stateBeforeAttributeName(cp);
      }
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(cp) {
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        const token = this.currentToken;
        token.selfClosing = true;
        this.state = State.DATA;
        this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.unexpectedSolidusInTag);
        this.state = State.BEFORE_ATTRIBUTE_NAME;
        this._stateBeforeAttributeName(cp);
      }
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.data += REPLACEMENT_CHARACTER;
        break;
      }
      default: {
        token.data += String.fromCodePoint(cp);
      }
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(cp) {
    if (this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, true)) {
      this._createCommentToken(SEQUENCES.DASH_DASH.length + 1);
      this.state = State.COMMENT_START;
    } else if (this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, false)) {
      this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1);
      this.state = State.DOCTYPE;
    } else if (this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, true)) {
      if (this.inForeignNode) {
        this.state = State.CDATA_SECTION;
      } else {
        this._err(ERR.cdataInHtmlContent);
        this._createCommentToken(SEQUENCES.CDATA_START.length + 1);
        this.currentToken.data = "[CDATA[";
        this.state = State.BOGUS_COMMENT;
      }
    } else if (!this._ensureHibernation()) {
      this._err(ERR.incorrectlyOpenedComment);
      this._createCommentToken(2);
      this.state = State.BOGUS_COMMENT;
      this._stateBogusComment(cp);
    }
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(cp) {
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_START_DASH;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptClosingOfEmptyComment);
        this.state = State.DATA;
        const token = this.currentToken;
        this.emitCurrentComment(token);
        break;
      }
      default: {
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_END;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptClosingOfEmptyComment);
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "-";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_END_DASH;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        token.data += "<";
        this.state = State.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.data += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += String.fromCodePoint(cp);
      }
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.EXCLAMATION_MARK: {
        token.data += "!";
        this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        token.data += "<";
        break;
      }
      default: {
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
    } else {
      this.state = State.COMMENT;
      this._stateComment(cp);
    }
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(cp) {
    if (cp === CODE_POINTS.HYPHEN_MINUS) {
      this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
    } else {
      this.state = State.COMMENT_END_DASH;
      this._stateCommentEndDash(cp);
    }
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(cp) {
    if (cp !== CODE_POINTS.GREATER_THAN_SIGN && cp !== CODE_POINTS.EOF) {
      this._err(ERR.nestedComment);
    }
    this.state = State.COMMENT_END;
    this._stateCommentEnd(cp);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State.COMMENT_END;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "-";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EXCLAMATION_MARK: {
        this.state = State.COMMENT_END_BANG;
        break;
      }
      case CODE_POINTS.HYPHEN_MINUS: {
        token.data += "-";
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "--";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.HYPHEN_MINUS: {
        token.data += "--!";
        this.state = State.COMMENT_END_DASH;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.incorrectlyClosedComment);
        this.state = State.DATA;
        this.emitCurrentComment(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment);
        this.emitCurrentComment(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.data += "--!";
        this.state = State.COMMENT;
        this._stateComment(cp);
      }
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(cp) {
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_DOCTYPE_NAME;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.BEFORE_DOCTYPE_NAME;
        this._stateBeforeDoctypeName(cp);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        this._createDoctypeToken(null);
        const token = this.currentToken;
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingWhitespaceBeforeDoctypeName);
        this.state = State.BEFORE_DOCTYPE_NAME;
        this._stateBeforeDoctypeName(cp);
      }
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(cp) {
    if (isAsciiUpper(cp)) {
      this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
      this.state = State.DOCTYPE_NAME;
    } else
      switch (cp) {
        case CODE_POINTS.SPACE:
        case CODE_POINTS.LINE_FEED:
        case CODE_POINTS.TABULATION:
        case CODE_POINTS.FORM_FEED: {
          break;
        }
        case CODE_POINTS.NULL: {
          this._err(ERR.unexpectedNullCharacter);
          this._createDoctypeToken(REPLACEMENT_CHARACTER);
          this.state = State.DOCTYPE_NAME;
          break;
        }
        case CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(ERR.missingDoctypeName);
          this._createDoctypeToken(null);
          const token = this.currentToken;
          token.forceQuirks = true;
          this.emitCurrentDoctype(token);
          this.state = State.DATA;
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          const token = this.currentToken;
          token.forceQuirks = true;
          this.emitCurrentDoctype(token);
          this._emitEOFToken();
          break;
        }
        default: {
          this._createDoctypeToken(String.fromCodePoint(cp));
          this.state = State.DOCTYPE_NAME;
        }
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.AFTER_DOCTYPE_NAME;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.name += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
      }
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        if (this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, false)) {
          this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
        } else if (this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, false)) {
          this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
        } else if (!this._ensureHibernation()) {
          this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
          token.forceQuirks = true;
          this.state = State.BOGUS_DOCTYPE;
          this._stateBogusDoctype(cp);
        }
      }
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        token.publicId = "";
        this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.publicId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.publicId += String.fromCodePoint(cp);
      }
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.publicId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypePublicIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.publicId += String.fromCodePoint(cp);
      }
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        token.systemId = "";
        this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.DATA;
        this.emitCurrentDoctype(token);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.systemId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.systemId += String.fromCodePoint(cp);
      }
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        token.systemId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypeSystemIdentifier);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        token.systemId += String.fromCodePoint(cp);
      }
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype);
        token.forceQuirks = true;
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default: {
        this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
        this.state = State.BOGUS_DOCTYPE;
        this._stateBogusDoctype(cp);
      }
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(cp) {
    const token = this.currentToken;
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(token);
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        break;
      }
      case CODE_POINTS.EOF: {
        this.emitCurrentDoctype(token);
        this._emitEOFToken();
        break;
      }
      default:
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(cp) {
    switch (cp) {
      case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this.state = State.CDATA_SECTION_BRACKET;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInCdata);
        this._emitEOFToken();
        break;
      }
      default: {
        this._emitCodePoint(cp);
      }
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(cp) {
    if (cp === CODE_POINTS.RIGHT_SQUARE_BRACKET) {
      this.state = State.CDATA_SECTION_END;
    } else {
      this._emitChars("]");
      this.state = State.CDATA_SECTION;
      this._stateCdataSection(cp);
    }
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(cp) {
    switch (cp) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State.DATA;
        break;
      }
      case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default: {
        this._emitChars("]]");
        this.state = State.CDATA_SECTION;
        this._stateCdataSection(cp);
      }
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference(cp) {
    if (cp === CODE_POINTS.NUMBER_SIGN) {
      this.state = State.NUMERIC_CHARACTER_REFERENCE;
    } else if (isAsciiAlphaNumeric2(cp)) {
      this.state = State.NAMED_CHARACTER_REFERENCE;
      this._stateNamedCharacterReference(cp);
    } else {
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
      this._reconsumeInState(this.returnState, cp);
    }
  }
  // Named character reference state
  //------------------------------------------------------------------
  _stateNamedCharacterReference(cp) {
    const matchResult = this._matchNamedCharacterReference(cp);
    if (this._ensureHibernation()) {
    } else if (matchResult) {
      for (let i = 0; i < matchResult.length; i++) {
        this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
      }
      this.state = this.returnState;
    } else {
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
      this.state = State.AMBIGUOUS_AMPERSAND;
    }
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(cp) {
    if (isAsciiAlphaNumeric2(cp)) {
      this._flushCodePointConsumedAsCharacterReference(cp);
    } else {
      if (cp === CODE_POINTS.SEMICOLON) {
        this._err(ERR.unknownNamedCharacterReference);
      }
      this._reconsumeInState(this.returnState, cp);
    }
  }
  // Numeric character reference state
  //------------------------------------------------------------------
  _stateNumericCharacterReference(cp) {
    this.charRefCode = 0;
    if (cp === CODE_POINTS.LATIN_SMALL_X || cp === CODE_POINTS.LATIN_CAPITAL_X) {
      this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
    } else if (isAsciiDigit(cp)) {
      this.state = State.DECIMAL_CHARACTER_REFERENCE;
      this._stateDecimalCharacterReference(cp);
    } else {
      this._err(ERR.absenceOfDigitsInNumericCharacterReference);
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN);
      this._reconsumeInState(this.returnState, cp);
    }
  }
  // Hexademical character reference start state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReferenceStart(cp) {
    if (isAsciiHexDigit(cp)) {
      this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
      this._stateHexademicalCharacterReference(cp);
    } else {
      this._err(ERR.absenceOfDigitsInNumericCharacterReference);
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN);
      this._unconsume(2);
      this.state = this.returnState;
    }
  }
  // Hexademical character reference state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReference(cp) {
    if (isAsciiUpperHexDigit(cp)) {
      this.charRefCode = this.charRefCode * 16 + cp - 55;
    } else if (isAsciiLowerHexDigit(cp)) {
      this.charRefCode = this.charRefCode * 16 + cp - 87;
    } else if (isAsciiDigit(cp)) {
      this.charRefCode = this.charRefCode * 16 + cp - 48;
    } else if (cp === CODE_POINTS.SEMICOLON) {
      this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
    } else {
      this._err(ERR.missingSemicolonAfterCharacterReference);
      this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
      this._stateNumericCharacterReferenceEnd(cp);
    }
  }
  // Decimal character reference state
  //------------------------------------------------------------------
  _stateDecimalCharacterReference(cp) {
    if (isAsciiDigit(cp)) {
      this.charRefCode = this.charRefCode * 10 + cp - 48;
    } else if (cp === CODE_POINTS.SEMICOLON) {
      this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
    } else {
      this._err(ERR.missingSemicolonAfterCharacterReference);
      this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
      this._stateNumericCharacterReferenceEnd(cp);
    }
  }
  // Numeric character reference end state
  //------------------------------------------------------------------
  _stateNumericCharacterReferenceEnd(cp) {
    if (this.charRefCode === CODE_POINTS.NULL) {
      this._err(ERR.nullCharacterReference);
      this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
    } else if (this.charRefCode > 1114111) {
      this._err(ERR.characterReferenceOutsideUnicodeRange);
      this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
    } else if (isSurrogate(this.charRefCode)) {
      this._err(ERR.surrogateCharacterReference);
      this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
    } else if (isUndefinedCodePoint(this.charRefCode)) {
      this._err(ERR.noncharacterCharacterReference);
    } else if (isControlCodePoint(this.charRefCode) || this.charRefCode === CODE_POINTS.CARRIAGE_RETURN) {
      this._err(ERR.controlCharacterReference);
      const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
      if (replacement !== void 0) {
        this.charRefCode = replacement;
      }
    }
    this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
    this._reconsumeInState(this.returnState, cp);
  }
};

// node_modules/parse5/dist/parser/open-element-stack.js
var IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([TAG_ID.DD, TAG_ID.DT, TAG_ID.LI, TAG_ID.OPTGROUP, TAG_ID.OPTION, TAG_ID.P, TAG_ID.RB, TAG_ID.RP, TAG_ID.RT, TAG_ID.RTC]);
var IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
  ...IMPLICIT_END_TAG_REQUIRED,
  TAG_ID.CAPTION,
  TAG_ID.COLGROUP,
  TAG_ID.TBODY,
  TAG_ID.TD,
  TAG_ID.TFOOT,
  TAG_ID.TH,
  TAG_ID.THEAD,
  TAG_ID.TR
]);
var SCOPING_ELEMENT_NS = /* @__PURE__ */ new Map([
  [TAG_ID.APPLET, NS.HTML],
  [TAG_ID.CAPTION, NS.HTML],
  [TAG_ID.HTML, NS.HTML],
  [TAG_ID.MARQUEE, NS.HTML],
  [TAG_ID.OBJECT, NS.HTML],
  [TAG_ID.TABLE, NS.HTML],
  [TAG_ID.TD, NS.HTML],
  [TAG_ID.TEMPLATE, NS.HTML],
  [TAG_ID.TH, NS.HTML],
  [TAG_ID.ANNOTATION_XML, NS.MATHML],
  [TAG_ID.MI, NS.MATHML],
  [TAG_ID.MN, NS.MATHML],
  [TAG_ID.MO, NS.MATHML],
  [TAG_ID.MS, NS.MATHML],
  [TAG_ID.MTEXT, NS.MATHML],
  [TAG_ID.DESC, NS.SVG],
  [TAG_ID.FOREIGN_OBJECT, NS.SVG],
  [TAG_ID.TITLE, NS.SVG]
]);
var NAMED_HEADERS = [TAG_ID.H1, TAG_ID.H2, TAG_ID.H3, TAG_ID.H4, TAG_ID.H5, TAG_ID.H6];
var TABLE_ROW_CONTEXT = [TAG_ID.TR, TAG_ID.TEMPLATE, TAG_ID.HTML];
var TABLE_BODY_CONTEXT = [TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TEMPLATE, TAG_ID.HTML];
var TABLE_CONTEXT = [TAG_ID.TABLE, TAG_ID.TEMPLATE, TAG_ID.HTML];
var TABLE_CELLS = [TAG_ID.TD, TAG_ID.TH];
var OpenElementStack = class {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(document2, treeAdapter, handler) {
    this.treeAdapter = treeAdapter;
    this.handler = handler;
    this.items = [];
    this.tagIDs = [];
    this.stackTop = -1;
    this.tmplCount = 0;
    this.currentTagId = TAG_ID.UNKNOWN;
    this.current = document2;
  }
  //Index of element
  _indexOf(element) {
    return this.items.lastIndexOf(element, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop];
    this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(element, tagID) {
    this.stackTop++;
    this.items[this.stackTop] = element;
    this.current = element;
    this.tagIDs[this.stackTop] = tagID;
    this.currentTagId = tagID;
    if (this._isInTemplate()) {
      this.tmplCount++;
    }
    this.handler.onItemPush(element, tagID, true);
  }
  pop() {
    const popped = this.current;
    if (this.tmplCount > 0 && this._isInTemplate()) {
      this.tmplCount--;
    }
    this.stackTop--;
    this._updateCurrentElement();
    this.handler.onItemPop(popped, true);
  }
  replace(oldElement, newElement) {
    const idx = this._indexOf(oldElement);
    this.items[idx] = newElement;
    if (idx === this.stackTop) {
      this.current = newElement;
    }
  }
  insertAfter(referenceElement, newElement, newElementID) {
    const insertionIdx = this._indexOf(referenceElement) + 1;
    this.items.splice(insertionIdx, 0, newElement);
    this.tagIDs.splice(insertionIdx, 0, newElementID);
    this.stackTop++;
    if (insertionIdx === this.stackTop) {
      this._updateCurrentElement();
    }
    this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
  }
  popUntilTagNamePopped(tagName) {
    let targetIdx = this.stackTop + 1;
    do {
      targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
    } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== NS.HTML);
    this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
  }
  shortenToLength(idx) {
    while (this.stackTop >= idx) {
      const popped = this.current;
      if (this.tmplCount > 0 && this._isInTemplate()) {
        this.tmplCount -= 1;
      }
      this.stackTop--;
      this._updateCurrentElement();
      this.handler.onItemPop(popped, this.stackTop < idx);
    }
  }
  popUntilElementPopped(element) {
    const idx = this._indexOf(element);
    this.shortenToLength(idx < 0 ? 0 : idx);
  }
  popUntilPopped(tagNames, targetNS) {
    const idx = this._indexOfTagNames(tagNames, targetNS);
    this.shortenToLength(idx < 0 ? 0 : idx);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(NAMED_HEADERS, NS.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(TABLE_CELLS, NS.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0;
    this.shortenToLength(1);
  }
  _indexOfTagNames(tagNames, namespace) {
    for (let i = this.stackTop; i >= 0; i--) {
      if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
        return i;
      }
    }
    return -1;
  }
  clearBackTo(tagNames, targetNS) {
    const idx = this._indexOfTagNames(tagNames, targetNS);
    this.shortenToLength(idx + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(TABLE_CONTEXT, NS.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
  }
  remove(element) {
    const idx = this._indexOf(element);
    if (idx >= 0) {
      if (idx === this.stackTop) {
        this.pop();
      } else {
        this.items.splice(idx, 1);
        this.tagIDs.splice(idx, 1);
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(element, false);
      }
    }
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
  }
  contains(element) {
    return this._indexOf(element) > -1;
  }
  getCommonAncestor(element) {
    const elementIdx = this._indexOf(element) - 1;
    return elementIdx >= 0 ? this.items[elementIdx] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
  }
  //Element in scope
  hasInScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (tn === tagName && ns === NS.HTML) {
        return true;
      }
      if (SCOPING_ELEMENT_NS.get(tn) === ns) {
        return false;
      }
    }
    return true;
  }
  hasNumberedHeaderInScope() {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (isNumberedHeader(tn) && ns === NS.HTML) {
        return true;
      }
      if (SCOPING_ELEMENT_NS.get(tn) === ns) {
        return false;
      }
    }
    return true;
  }
  hasInListItemScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (tn === tagName && ns === NS.HTML) {
        return true;
      }
      if ((tn === TAG_ID.UL || tn === TAG_ID.OL) && ns === NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
        return false;
      }
    }
    return true;
  }
  hasInButtonScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (tn === tagName && ns === NS.HTML) {
        return true;
      }
      if (tn === TAG_ID.BUTTON && ns === NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
        return false;
      }
    }
    return true;
  }
  hasInTableScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (ns !== NS.HTML) {
        continue;
      }
      if (tn === tagName) {
        return true;
      }
      if (tn === TAG_ID.TABLE || tn === TAG_ID.TEMPLATE || tn === TAG_ID.HTML) {
        return false;
      }
    }
    return true;
  }
  hasTableBodyContextInTableScope() {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (ns !== NS.HTML) {
        continue;
      }
      if (tn === TAG_ID.TBODY || tn === TAG_ID.THEAD || tn === TAG_ID.TFOOT) {
        return true;
      }
      if (tn === TAG_ID.TABLE || tn === TAG_ID.HTML) {
        return false;
      }
    }
    return true;
  }
  hasInSelectScope(tagName) {
    for (let i = this.stackTop; i >= 0; i--) {
      const tn = this.tagIDs[i];
      const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (ns !== NS.HTML) {
        continue;
      }
      if (tn === tagName) {
        return true;
      }
      if (tn !== TAG_ID.OPTION && tn !== TAG_ID.OPTGROUP) {
        return false;
      }
    }
    return true;
  }
  //Implied end tags
  generateImpliedEndTags() {
    while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
      this.pop();
    }
  }
  generateImpliedEndTagsThoroughly() {
    while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
      this.pop();
    }
  }
  generateImpliedEndTagsWithExclusion(exclusionId) {
    while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
      this.pop();
    }
  }
};

// node_modules/parse5/dist/parser/formatting-element-list.js
var NOAH_ARK_CAPACITY = 3;
var EntryType;
(function(EntryType2) {
  EntryType2[EntryType2["Marker"] = 0] = "Marker";
  EntryType2[EntryType2["Element"] = 1] = "Element";
})(EntryType = EntryType || (EntryType = {}));
var MARKER = { type: EntryType.Marker };
var FormattingElementList = class {
  constructor(treeAdapter) {
    this.treeAdapter = treeAdapter;
    this.entries = [];
    this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(newElement, neAttrs) {
    const candidates = [];
    const neAttrsLength = neAttrs.length;
    const neTagName = this.treeAdapter.getTagName(newElement);
    const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];
      if (entry.type === EntryType.Marker) {
        break;
      }
      const { element } = entry;
      if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
        const elementAttrs = this.treeAdapter.getAttrList(element);
        if (elementAttrs.length === neAttrsLength) {
          candidates.push({ idx: i, attrs: elementAttrs });
        }
      }
    }
    return candidates;
  }
  _ensureNoahArkCondition(newElement) {
    if (this.entries.length < NOAH_ARK_CAPACITY)
      return;
    const neAttrs = this.treeAdapter.getAttrList(newElement);
    const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
    if (candidates.length < NOAH_ARK_CAPACITY)
      return;
    const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
    let validCandidates = 0;
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
        validCandidates += 1;
        if (validCandidates >= NOAH_ARK_CAPACITY) {
          this.entries.splice(candidate.idx, 1);
        }
      }
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(MARKER);
  }
  pushElement(element, token) {
    this._ensureNoahArkCondition(element);
    this.entries.unshift({
      type: EntryType.Element,
      element,
      token
    });
  }
  insertElementAfterBookmark(element, token) {
    const bookmarkIdx = this.entries.indexOf(this.bookmark);
    this.entries.splice(bookmarkIdx, 0, {
      type: EntryType.Element,
      element,
      token
    });
  }
  removeEntry(entry) {
    const entryIndex = this.entries.indexOf(entry);
    if (entryIndex >= 0) {
      this.entries.splice(entryIndex, 1);
    }
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const markerIdx = this.entries.indexOf(MARKER);
    if (markerIdx >= 0) {
      this.entries.splice(0, markerIdx + 1);
    } else {
      this.entries.length = 0;
    }
  }
  //Search
  getElementEntryInScopeWithTagName(tagName) {
    const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
    return entry && entry.type === EntryType.Element ? entry : null;
  }
  getElementEntry(element) {
    return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
  }
};

// node_modules/parse5/dist/tree-adapters/default.js
function createTextNode(value) {
  return {
    nodeName: "#text",
    value,
    parentNode: null
  };
}
var defaultTreeAdapter = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: DOCUMENT_MODE.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(tagName, namespaceURI, attrs) {
    return {
      nodeName: tagName,
      tagName,
      attrs,
      namespaceURI,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(data) {
    return {
      nodeName: "#comment",
      data,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(parentNode, newNode) {
    parentNode.childNodes.push(newNode);
    newNode.parentNode = parentNode;
  },
  insertBefore(parentNode, newNode, referenceNode) {
    const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
    parentNode.childNodes.splice(insertionIdx, 0, newNode);
    newNode.parentNode = parentNode;
  },
  setTemplateContent(templateElement, contentElement) {
    templateElement.content = contentElement;
  },
  getTemplateContent(templateElement) {
    return templateElement.content;
  },
  setDocumentType(document2, name, publicId, systemId) {
    const doctypeNode = document2.childNodes.find((node) => node.nodeName === "#documentType");
    if (doctypeNode) {
      doctypeNode.name = name;
      doctypeNode.publicId = publicId;
      doctypeNode.systemId = systemId;
    } else {
      const node = {
        nodeName: "#documentType",
        name,
        publicId,
        systemId,
        parentNode: null
      };
      defaultTreeAdapter.appendChild(document2, node);
    }
  },
  setDocumentMode(document2, mode) {
    document2.mode = mode;
  },
  getDocumentMode(document2) {
    return document2.mode;
  },
  detachNode(node) {
    if (node.parentNode) {
      const idx = node.parentNode.childNodes.indexOf(node);
      node.parentNode.childNodes.splice(idx, 1);
      node.parentNode = null;
    }
  },
  insertText(parentNode, text) {
    if (parentNode.childNodes.length > 0) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
      if (defaultTreeAdapter.isTextNode(prevNode)) {
        prevNode.value += text;
        return;
      }
    }
    defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
  },
  insertTextBefore(parentNode, text, referenceNode) {
    const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
    if (prevNode && defaultTreeAdapter.isTextNode(prevNode)) {
      prevNode.value += text;
    } else {
      defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
    }
  },
  adoptAttributes(recipient, attrs) {
    const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
    for (let j = 0; j < attrs.length; j++) {
      if (!recipientAttrsMap.has(attrs[j].name)) {
        recipient.attrs.push(attrs[j]);
      }
    }
  },
  //Tree traversing
  getFirstChild(node) {
    return node.childNodes[0];
  },
  getChildNodes(node) {
    return node.childNodes;
  },
  getParentNode(node) {
    return node.parentNode;
  },
  getAttrList(element) {
    return element.attrs;
  },
  //Node data
  getTagName(element) {
    return element.tagName;
  },
  getNamespaceURI(element) {
    return element.namespaceURI;
  },
  getTextNodeContent(textNode) {
    return textNode.value;
  },
  getCommentNodeContent(commentNode) {
    return commentNode.data;
  },
  getDocumentTypeNodeName(doctypeNode) {
    return doctypeNode.name;
  },
  getDocumentTypeNodePublicId(doctypeNode) {
    return doctypeNode.publicId;
  },
  getDocumentTypeNodeSystemId(doctypeNode) {
    return doctypeNode.systemId;
  },
  //Node types
  isTextNode(node) {
    return node.nodeName === "#text";
  },
  isCommentNode(node) {
    return node.nodeName === "#comment";
  },
  isDocumentTypeNode(node) {
    return node.nodeName === "#documentType";
  },
  isElementNode(node) {
    return Object.prototype.hasOwnProperty.call(node, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(node, location2) {
    node.sourceCodeLocation = location2;
  },
  getNodeSourceCodeLocation(node) {
    return node.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(node, endLocation) {
    node.sourceCodeLocation = { ...node.sourceCodeLocation, ...endLocation };
  }
};

// node_modules/parse5/dist/common/doctype.js
var VALID_DOCTYPE_NAME = "html";
var VALID_SYSTEM_ID = "about:legacy-compat";
var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
];
var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
  ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
var QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]);
var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
  ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(publicId, prefixes) {
  return prefixes.some((prefix) => publicId.startsWith(prefix));
}
function isConforming(token) {
  return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(token) {
  if (token.name !== VALID_DOCTYPE_NAME) {
    return DOCUMENT_MODE.QUIRKS;
  }
  const { systemId } = token;
  if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
    return DOCUMENT_MODE.QUIRKS;
  }
  let { publicId } = token;
  if (publicId !== null) {
    publicId = publicId.toLowerCase();
    if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
      return DOCUMENT_MODE.QUIRKS;
    }
    let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE.QUIRKS;
    }
    prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE.LIMITED_QUIRKS;
    }
  }
  return DOCUMENT_MODE.NO_QUIRKS;
}

// node_modules/parse5/dist/common/foreign-content.js
var foreign_content_exports = {};
__export(foreign_content_exports, {
  SVG_TAG_NAMES_ADJUSTMENT_MAP: () => SVG_TAG_NAMES_ADJUSTMENT_MAP,
  adjustTokenMathMLAttrs: () => adjustTokenMathMLAttrs,
  adjustTokenSVGAttrs: () => adjustTokenSVGAttrs,
  adjustTokenSVGTagName: () => adjustTokenSVGTagName,
  adjustTokenXMLAttrs: () => adjustTokenXMLAttrs,
  causesExit: () => causesExit,
  isIntegrationPoint: () => isIntegrationPoint
});
var MIME_TYPES = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
};
var DEFINITION_URL_ATTR = "definitionurl";
var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
var SVG_ATTRS_ADJUSTMENT_MAP = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((attr) => [attr.toLowerCase(), attr]));
var XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: NS.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: NS.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: NS.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: NS.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: NS.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: NS.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: NS.XLINK }],
  ["xml:base", { prefix: "xml", name: "base", namespace: NS.XML }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: NS.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: NS.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: NS.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }]
]);
var SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((tn) => [tn.toLowerCase(), tn]));
var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
  TAG_ID.B,
  TAG_ID.BIG,
  TAG_ID.BLOCKQUOTE,
  TAG_ID.BODY,
  TAG_ID.BR,
  TAG_ID.CENTER,
  TAG_ID.CODE,
  TAG_ID.DD,
  TAG_ID.DIV,
  TAG_ID.DL,
  TAG_ID.DT,
  TAG_ID.EM,
  TAG_ID.EMBED,
  TAG_ID.H1,
  TAG_ID.H2,
  TAG_ID.H3,
  TAG_ID.H4,
  TAG_ID.H5,
  TAG_ID.H6,
  TAG_ID.HEAD,
  TAG_ID.HR,
  TAG_ID.I,
  TAG_ID.IMG,
  TAG_ID.LI,
  TAG_ID.LISTING,
  TAG_ID.MENU,
  TAG_ID.META,
  TAG_ID.NOBR,
  TAG_ID.OL,
  TAG_ID.P,
  TAG_ID.PRE,
  TAG_ID.RUBY,
  TAG_ID.S,
  TAG_ID.SMALL,
  TAG_ID.SPAN,
  TAG_ID.STRONG,
  TAG_ID.STRIKE,
  TAG_ID.SUB,
  TAG_ID.SUP,
  TAG_ID.TABLE,
  TAG_ID.TT,
  TAG_ID.U,
  TAG_ID.UL,
  TAG_ID.VAR
]);
function causesExit(startTagToken) {
  const tn = startTagToken.tagID;
  const isFontWithAttrs = tn === TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === ATTRS.COLOR || name === ATTRS.SIZE || name === ATTRS.FACE);
  return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
}
function adjustTokenMathMLAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    if (token.attrs[i].name === DEFINITION_URL_ATTR) {
      token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
      break;
    }
  }
}
function adjustTokenSVGAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
    if (adjustedAttrName != null) {
      token.attrs[i].name = adjustedAttrName;
    }
  }
}
function adjustTokenXMLAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
    if (adjustedAttrEntry) {
      token.attrs[i].prefix = adjustedAttrEntry.prefix;
      token.attrs[i].name = adjustedAttrEntry.name;
      token.attrs[i].namespace = adjustedAttrEntry.namespace;
    }
  }
}
function adjustTokenSVGTagName(token) {
  const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
  if (adjustedTagName != null) {
    token.tagName = adjustedTagName;
    token.tagID = getTagID(token.tagName);
  }
}
function isMathMLTextIntegrationPoint(tn, ns) {
  return ns === NS.MATHML && (tn === TAG_ID.MI || tn === TAG_ID.MO || tn === TAG_ID.MN || tn === TAG_ID.MS || tn === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
  if (ns === NS.MATHML && tn === TAG_ID.ANNOTATION_XML) {
    for (let i = 0; i < attrs.length; i++) {
      if (attrs[i].name === ATTRS.ENCODING) {
        const value = attrs[i].value.toLowerCase();
        return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
      }
    }
  }
  return ns === NS.SVG && (tn === TAG_ID.FOREIGN_OBJECT || tn === TAG_ID.DESC || tn === TAG_ID.TITLE);
}
function isIntegrationPoint(tn, ns, attrs, foreignNS) {
  return (!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
}

// node_modules/parse5/dist/parser/index.js
var HIDDEN_INPUT_TYPE = "hidden";
var AA_OUTER_LOOP_ITER = 8;
var AA_INNER_LOOP_ITER = 3;
var InsertionMode;
(function(InsertionMode2) {
  InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
  InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
  InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
  InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
  InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
  InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
  InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
  InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
  InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
  InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
  InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
  InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
  InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
  InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
  InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
  InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
  InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
  InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
  InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
  InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
  InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
  InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
  InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
var BASE_LOC = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
};
var TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([TAG_ID.TABLE, TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TR]);
var defaultParserOptions = {
  scriptingEnabled: true,
  sourceCodeLocationInfo: false,
  treeAdapter: defaultTreeAdapter,
  onParseError: null
};
var Parser = class {
  constructor(options, document2, fragmentContext = null, scriptHandler = null) {
    this.fragmentContext = fragmentContext;
    this.scriptHandler = scriptHandler;
    this.currentToken = null;
    this.stopped = false;
    this.insertionMode = InsertionMode.INITIAL;
    this.originalInsertionMode = InsertionMode.INITIAL;
    this.headElement = null;
    this.formElement = null;
    this.currentNotInHTML = false;
    this.tmplInsertionModeStack = [];
    this.pendingCharacterTokens = [];
    this.hasNonWhitespacePendingCharacterToken = false;
    this.framesetOk = true;
    this.skipNextNewLine = false;
    this.fosterParentingEnabled = false;
    this.options = {
      ...defaultParserOptions,
      ...options
    };
    this.treeAdapter = this.options.treeAdapter;
    this.onParseError = this.options.onParseError;
    if (this.onParseError) {
      this.options.sourceCodeLocationInfo = true;
    }
    this.document = document2 !== null && document2 !== void 0 ? document2 : this.treeAdapter.createDocument();
    this.tokenizer = new Tokenizer(this.options, this);
    this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
    this.fragmentContextID = fragmentContext ? getTagID(this.treeAdapter.getTagName(fragmentContext)) : TAG_ID.UNKNOWN;
    this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
    this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
  }
  // API
  static parse(html, options) {
    const parser = new this(options);
    parser.tokenizer.write(html, true);
    return parser.document;
  }
  static getFragmentParser(fragmentContext, options) {
    const opts = {
      ...defaultParserOptions,
      ...options
    };
    fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []);
    const documentMock = opts.treeAdapter.createElement("documentmock", NS.HTML, []);
    const parser = new this(opts, documentMock, fragmentContext);
    if (parser.fragmentContextID === TAG_ID.TEMPLATE) {
      parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
    }
    parser._initTokenizerForFragmentParsing();
    parser._insertFakeRootElement();
    parser._resetInsertionMode();
    parser._findFormInFragmentContext();
    return parser;
  }
  getFragment() {
    const rootElement = this.treeAdapter.getFirstChild(this.document);
    const fragment = this.treeAdapter.createDocumentFragment();
    this._adoptNodes(rootElement, fragment);
    return fragment;
  }
  //Errors
  _err(token, code, beforeToken) {
    var _a2;
    if (!this.onParseError)
      return;
    const loc = (_a2 = token.location) !== null && _a2 !== void 0 ? _a2 : BASE_LOC;
    const err2 = {
      code,
      startLine: loc.startLine,
      startCol: loc.startCol,
      startOffset: loc.startOffset,
      endLine: beforeToken ? loc.startLine : loc.endLine,
      endCol: beforeToken ? loc.startCol : loc.endCol,
      endOffset: beforeToken ? loc.startOffset : loc.endOffset
    };
    this.onParseError(err2);
  }
  //Stack events
  onItemPush(node, tid, isTop) {
    var _a2, _b;
    (_b = (_a2 = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a2, node);
    if (isTop && this.openElements.stackTop > 0)
      this._setContextModes(node, tid);
  }
  onItemPop(node, isTop) {
    var _a2, _b;
    if (this.options.sourceCodeLocationInfo) {
      this._setEndLocation(node, this.currentToken);
    }
    (_b = (_a2 = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a2, node, this.openElements.current);
    if (isTop) {
      let current;
      let currentTagId;
      if (this.openElements.stackTop === 0 && this.fragmentContext) {
        current = this.fragmentContext;
        currentTagId = this.fragmentContextID;
      } else {
        ({ current, currentTagId } = this.openElements);
      }
      this._setContextModes(current, currentTagId);
    }
  }
  _setContextModes(current, tid) {
    const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === NS.HTML;
    this.currentNotInHTML = !isHTML;
    this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
  }
  _switchToTextParsing(currentToken, nextTokenizerState) {
    this._insertElement(currentToken, NS.HTML);
    this.tokenizer.state = nextTokenizerState;
    this.originalInsertionMode = this.insertionMode;
    this.insertionMode = InsertionMode.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = InsertionMode.TEXT;
    this.originalInsertionMode = InsertionMode.IN_BODY;
    this.tokenizer.state = TokenizerMode.PLAINTEXT;
  }
  //Fragment parsing
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let node = this.fragmentContext;
    while (node) {
      if (this.treeAdapter.getTagName(node) === TAG_NAMES.FORM) {
        this.formElement = node;
        break;
      }
      node = this.treeAdapter.getParentNode(node);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML) {
      return;
    }
    switch (this.fragmentContextID) {
      case TAG_ID.TITLE:
      case TAG_ID.TEXTAREA: {
        this.tokenizer.state = TokenizerMode.RCDATA;
        break;
      }
      case TAG_ID.STYLE:
      case TAG_ID.XMP:
      case TAG_ID.IFRAME:
      case TAG_ID.NOEMBED:
      case TAG_ID.NOFRAMES:
      case TAG_ID.NOSCRIPT: {
        this.tokenizer.state = TokenizerMode.RAWTEXT;
        break;
      }
      case TAG_ID.SCRIPT: {
        this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
        break;
      }
      case TAG_ID.PLAINTEXT: {
        this.tokenizer.state = TokenizerMode.PLAINTEXT;
        break;
      }
      default:
    }
  }
  //Tree mutation
  _setDocumentType(token) {
    const name = token.name || "";
    const publicId = token.publicId || "";
    const systemId = token.systemId || "";
    this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
    if (token.location) {
      const documentChildren = this.treeAdapter.getChildNodes(this.document);
      const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
      if (docTypeNode) {
        this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
      }
    }
  }
  _attachElementToTree(element, location2) {
    if (this.options.sourceCodeLocationInfo) {
      const loc = location2 && {
        ...location2,
        startTag: location2
      };
      this.treeAdapter.setNodeSourceCodeLocation(element, loc);
    }
    if (this._shouldFosterParentOnInsertion()) {
      this._fosterParentElement(element);
    } else {
      const parent = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(parent, element);
    }
  }
  _appendElement(token, namespaceURI) {
    const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
    this._attachElementToTree(element, token.location);
  }
  _insertElement(token, namespaceURI) {
    const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
    this._attachElementToTree(element, token.location);
    this.openElements.push(element, token.tagID);
  }
  _insertFakeElement(tagName, tagID) {
    const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
    this._attachElementToTree(element, null);
    this.openElements.push(element, tagID);
  }
  _insertTemplate(token) {
    const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
    const content = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(tmpl, content);
    this._attachElementToTree(tmpl, token.location);
    this.openElements.push(tmpl, token.tagID);
    if (this.options.sourceCodeLocationInfo)
      this.treeAdapter.setNodeSourceCodeLocation(content, null);
  }
  _insertFakeRootElement() {
    const element = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
    if (this.options.sourceCodeLocationInfo)
      this.treeAdapter.setNodeSourceCodeLocation(element, null);
    this.treeAdapter.appendChild(this.openElements.current, element);
    this.openElements.push(element, TAG_ID.HTML);
  }
  _appendCommentNode(token, parent) {
    const commentNode = this.treeAdapter.createCommentNode(token.data);
    this.treeAdapter.appendChild(parent, commentNode);
    if (this.options.sourceCodeLocationInfo) {
      this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
    }
  }
  _insertCharacters(token) {
    let parent;
    let beforeElement;
    if (this._shouldFosterParentOnInsertion()) {
      ({ parent, beforeElement } = this._findFosterParentingLocation());
      if (beforeElement) {
        this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
      } else {
        this.treeAdapter.insertText(parent, token.chars);
      }
    } else {
      parent = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.insertText(parent, token.chars);
    }
    if (!token.location)
      return;
    const siblings = this.treeAdapter.getChildNodes(parent);
    const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
    const textNode = siblings[textNodeIdx - 1];
    const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
    if (tnLoc) {
      const { endLine, endCol, endOffset } = token.location;
      this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
    } else if (this.options.sourceCodeLocationInfo) {
      this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
    }
  }
  _adoptNodes(donor, recipient) {
    for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
      this.treeAdapter.detachNode(child);
      this.treeAdapter.appendChild(recipient, child);
    }
  }
  _setEndLocation(element, closingToken) {
    if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
      const ctLoc = closingToken.location;
      const tn = this.treeAdapter.getTagName(element);
      const endLoc = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        closingToken.type === TokenType.END_TAG && tn === closingToken.tagName ? {
          endTag: { ...ctLoc },
          endLine: ctLoc.endLine,
          endCol: ctLoc.endCol,
          endOffset: ctLoc.endOffset
        } : {
          endLine: ctLoc.startLine,
          endCol: ctLoc.startCol,
          endOffset: ctLoc.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(token) {
    if (!this.currentNotInHTML)
      return false;
    let current;
    let currentTagId;
    if (this.openElements.stackTop === 0 && this.fragmentContext) {
      current = this.fragmentContext;
      currentTagId = this.fragmentContextID;
    } else {
      ({ current, currentTagId } = this.openElements);
    }
    if (token.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(current) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === NS.MATHML) {
      return false;
    }
    return (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (token.tagID === TAG_ID.MGLYPH || token.tagID === TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(currentTagId, current, NS.HTML)
    );
  }
  _processToken(token) {
    switch (token.type) {
      case TokenType.CHARACTER: {
        this.onCharacter(token);
        break;
      }
      case TokenType.NULL_CHARACTER: {
        this.onNullCharacter(token);
        break;
      }
      case TokenType.COMMENT: {
        this.onComment(token);
        break;
      }
      case TokenType.DOCTYPE: {
        this.onDoctype(token);
        break;
      }
      case TokenType.START_TAG: {
        this._processStartTag(token);
        break;
      }
      case TokenType.END_TAG: {
        this.onEndTag(token);
        break;
      }
      case TokenType.EOF: {
        this.onEof(token);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(token);
        break;
      }
    }
  }
  //Integration points
  _isIntegrationPoint(tid, element, foreignNS) {
    const ns = this.treeAdapter.getNamespaceURI(element);
    const attrs = this.treeAdapter.getAttrList(element);
    return isIntegrationPoint(tid, ns, attrs, foreignNS);
  }
  //Active formatting elements reconstruction
  _reconstructActiveFormattingElements() {
    const listLength = this.activeFormattingElements.entries.length;
    if (listLength) {
      const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === EntryType.Marker || this.openElements.contains(entry.element));
      const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
      for (let i = unopenIdx; i >= 0; i--) {
        const entry = this.activeFormattingElements.entries[i];
        this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
        entry.element = this.openElements.current;
      }
    }
  }
  //Close elements
  _closeTableCell() {
    this.openElements.generateImpliedEndTags();
    this.openElements.popUntilTableCellPopped();
    this.activeFormattingElements.clearToLastMarker();
    this.insertionMode = InsertionMode.IN_ROW;
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P);
    this.openElements.popUntilTagNamePopped(TAG_ID.P);
  }
  //Insertion modes
  _resetInsertionMode() {
    for (let i = this.openElements.stackTop; i >= 0; i--) {
      switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
        case TAG_ID.TR: {
          this.insertionMode = InsertionMode.IN_ROW;
          return;
        }
        case TAG_ID.TBODY:
        case TAG_ID.THEAD:
        case TAG_ID.TFOOT: {
          this.insertionMode = InsertionMode.IN_TABLE_BODY;
          return;
        }
        case TAG_ID.CAPTION: {
          this.insertionMode = InsertionMode.IN_CAPTION;
          return;
        }
        case TAG_ID.COLGROUP: {
          this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
          return;
        }
        case TAG_ID.TABLE: {
          this.insertionMode = InsertionMode.IN_TABLE;
          return;
        }
        case TAG_ID.BODY: {
          this.insertionMode = InsertionMode.IN_BODY;
          return;
        }
        case TAG_ID.FRAMESET: {
          this.insertionMode = InsertionMode.IN_FRAMESET;
          return;
        }
        case TAG_ID.SELECT: {
          this._resetInsertionModeForSelect(i);
          return;
        }
        case TAG_ID.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case TAG_ID.HTML: {
          this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
          return;
        }
        case TAG_ID.TD:
        case TAG_ID.TH: {
          if (i > 0) {
            this.insertionMode = InsertionMode.IN_CELL;
            return;
          }
          break;
        }
        case TAG_ID.HEAD: {
          if (i > 0) {
            this.insertionMode = InsertionMode.IN_HEAD;
            return;
          }
          break;
        }
      }
    }
    this.insertionMode = InsertionMode.IN_BODY;
  }
  _resetInsertionModeForSelect(selectIdx) {
    if (selectIdx > 0) {
      for (let i = selectIdx - 1; i > 0; i--) {
        const tn = this.openElements.tagIDs[i];
        if (tn === TAG_ID.TEMPLATE) {
          break;
        } else if (tn === TAG_ID.TABLE) {
          this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
          return;
        }
      }
    }
    this.insertionMode = InsertionMode.IN_SELECT;
  }
  //Foster parenting
  _isElementCausesFosterParenting(tn) {
    return TABLE_STRUCTURE_TAGS.has(tn);
  }
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  _findFosterParentingLocation() {
    for (let i = this.openElements.stackTop; i >= 0; i--) {
      const openElement = this.openElements.items[i];
      switch (this.openElements.tagIDs[i]) {
        case TAG_ID.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(openElement) === NS.HTML) {
            return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
          }
          break;
        }
        case TAG_ID.TABLE: {
          const parent = this.treeAdapter.getParentNode(openElement);
          if (parent) {
            return { parent, beforeElement: openElement };
          }
          return { parent: this.openElements.items[i - 1], beforeElement: null };
        }
        default:
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  _fosterParentElement(element) {
    const location2 = this._findFosterParentingLocation();
    if (location2.beforeElement) {
      this.treeAdapter.insertBefore(location2.parent, element, location2.beforeElement);
    } else {
      this.treeAdapter.appendChild(location2.parent, element);
    }
  }
  //Special elements
  _isSpecialElement(element, id) {
    const ns = this.treeAdapter.getNamespaceURI(element);
    return SPECIAL_ELEMENTS[ns].has(id);
  }
  onCharacter(token) {
    this.skipNextNewLine = false;
    if (this.tokenizer.inForeignNode) {
      characterInForeignContent(this, token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_TEMPLATE: {
        characterInBody(this, token);
        break;
      }
      case InsertionMode.TEXT:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE: {
        this._insertCharacters(token);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        characterInTableText(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        tokenInColumnGroup(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        tokenAfterBody(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, token);
        break;
      }
      default:
    }
  }
  onNullCharacter(token) {
    this.skipNextNewLine = false;
    if (this.tokenizer.inForeignNode) {
      nullCharacterInForeignContent(this, token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, token);
        break;
      }
      case InsertionMode.TEXT: {
        this._insertCharacters(token);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        tokenInColumnGroup(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        tokenAfterBody(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, token);
        break;
      }
      default:
    }
  }
  onComment(token) {
    this.skipNextNewLine = false;
    if (this.currentNotInHTML) {
      appendComment(this, token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL:
      case InsertionMode.BEFORE_HTML:
      case InsertionMode.BEFORE_HEAD:
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD:
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE:
      case InsertionMode.IN_TEMPLATE:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET: {
        appendComment(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        appendCommentToRootHtmlElement(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        appendCommentToDocument(this, token);
        break;
      }
      default:
    }
  }
  onDoctype(token) {
    this.skipNextNewLine = false;
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        doctypeInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD:
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD: {
        this._err(token, ERR.misplacedDoctype);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      default:
    }
  }
  onStartTag(token) {
    this.skipNextNewLine = false;
    this.currentToken = token;
    this._processStartTag(token);
    if (token.selfClosing && !token.ackSelfClosing) {
      this._err(token, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   */
  _processStartTag(token) {
    if (this.shouldProcessStartTagTokenInForeignContent(token)) {
      startTagInForeignContent(this, token);
    } else {
      this._startTagOutsideForeignContent(token);
    }
  }
  _startTagOutsideForeignContent(token) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        startTagBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        startTagBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        startTagInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        startTagInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        startTagAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY: {
        startTagInBody(this, token);
        break;
      }
      case InsertionMode.IN_TABLE: {
        startTagInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.IN_CAPTION: {
        startTagInCaption(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        startTagInColumnGroup(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_BODY: {
        startTagInTableBody(this, token);
        break;
      }
      case InsertionMode.IN_ROW: {
        startTagInRow(this, token);
        break;
      }
      case InsertionMode.IN_CELL: {
        startTagInCell(this, token);
        break;
      }
      case InsertionMode.IN_SELECT: {
        startTagInSelect(this, token);
        break;
      }
      case InsertionMode.IN_SELECT_IN_TABLE: {
        startTagInSelectInTable(this, token);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        startTagInTemplate(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        startTagAfterBody(this, token);
        break;
      }
      case InsertionMode.IN_FRAMESET: {
        startTagInFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_FRAMESET: {
        startTagAfterFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        startTagAfterAfterBody(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        startTagAfterAfterFrameset(this, token);
        break;
      }
      default:
    }
  }
  onEndTag(token) {
    this.skipNextNewLine = false;
    this.currentToken = token;
    if (this.currentNotInHTML) {
      endTagInForeignContent(this, token);
    } else {
      this._endTagOutsideForeignContent(token);
    }
  }
  _endTagOutsideForeignContent(token) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        endTagBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        endTagBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        endTagInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        endTagInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        endTagAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY: {
        endTagInBody(this, token);
        break;
      }
      case InsertionMode.TEXT: {
        endTagInText(this, token);
        break;
      }
      case InsertionMode.IN_TABLE: {
        endTagInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.IN_CAPTION: {
        endTagInCaption(this, token);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        endTagInColumnGroup(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_BODY: {
        endTagInTableBody(this, token);
        break;
      }
      case InsertionMode.IN_ROW: {
        endTagInRow(this, token);
        break;
      }
      case InsertionMode.IN_CELL: {
        endTagInCell(this, token);
        break;
      }
      case InsertionMode.IN_SELECT: {
        endTagInSelect(this, token);
        break;
      }
      case InsertionMode.IN_SELECT_IN_TABLE: {
        endTagInSelectInTable(this, token);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        endTagInTemplate(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        endTagAfterBody(this, token);
        break;
      }
      case InsertionMode.IN_FRAMESET: {
        endTagInFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_FRAMESET: {
        endTagAfterFrameset(this, token);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, token);
        break;
      }
      default:
    }
  }
  onEof(token) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, token);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, token);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, token);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, token);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, token);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE: {
        eofInBody(this, token);
        break;
      }
      case InsertionMode.TEXT: {
        eofInText(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, token);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        eofInTemplate(this, token);
        break;
      }
      case InsertionMode.AFTER_BODY:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET:
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        stopParsing(this, token);
        break;
      }
      default:
    }
  }
  onWhitespaceCharacter(token) {
    if (this.skipNextNewLine) {
      this.skipNextNewLine = false;
      if (token.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED) {
        if (token.chars.length === 1) {
          return;
        }
        token.chars = token.chars.substr(1);
      }
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(token);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD:
      case InsertionMode.TEXT:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET: {
        this._insertCharacters(token);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_TEMPLATE:
      case InsertionMode.AFTER_BODY:
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        whitespaceCharacterInBody(this, token);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, token);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        whitespaceCharacterInTableText(this, token);
        break;
      }
      default:
    }
  }
};
function aaObtainFormattingElementEntry(p, token) {
  let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
  if (formattingElementEntry) {
    if (!p.openElements.contains(formattingElementEntry.element)) {
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      formattingElementEntry = null;
    } else if (!p.openElements.hasInScope(token.tagID)) {
      formattingElementEntry = null;
    }
  } else {
    genericEndTagInBody(p, token);
  }
  return formattingElementEntry;
}
function aaObtainFurthestBlock(p, formattingElementEntry) {
  let furthestBlock = null;
  let idx = p.openElements.stackTop;
  for (; idx >= 0; idx--) {
    const element = p.openElements.items[idx];
    if (element === formattingElementEntry.element) {
      break;
    }
    if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
      furthestBlock = element;
    }
  }
  if (!furthestBlock) {
    p.openElements.shortenToLength(idx < 0 ? 0 : idx);
    p.activeFormattingElements.removeEntry(formattingElementEntry);
  }
  return furthestBlock;
}
function aaInnerLoop(p, furthestBlock, formattingElement) {
  let lastElement = furthestBlock;
  let nextElement = p.openElements.getCommonAncestor(furthestBlock);
  for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
    nextElement = p.openElements.getCommonAncestor(element);
    const elementEntry = p.activeFormattingElements.getElementEntry(element);
    const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
    const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
    if (shouldRemoveFromOpenElements) {
      if (counterOverflow) {
        p.activeFormattingElements.removeEntry(elementEntry);
      }
      p.openElements.remove(element);
    } else {
      element = aaRecreateElementFromEntry(p, elementEntry);
      if (lastElement === furthestBlock) {
        p.activeFormattingElements.bookmark = elementEntry;
      }
      p.treeAdapter.detachNode(lastElement);
      p.treeAdapter.appendChild(element, lastElement);
      lastElement = element;
    }
  }
  return lastElement;
}
function aaRecreateElementFromEntry(p, elementEntry) {
  const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
  const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
  p.openElements.replace(elementEntry.element, newElement);
  elementEntry.element = newElement;
  return newElement;
}
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
  const tn = p.treeAdapter.getTagName(commonAncestor);
  const tid = getTagID(tn);
  if (p._isElementCausesFosterParenting(tid)) {
    p._fosterParentElement(lastElement);
  } else {
    const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
    if (tid === TAG_ID.TEMPLATE && ns === NS.HTML) {
      commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
    }
    p.treeAdapter.appendChild(commonAncestor, lastElement);
  }
}
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
  const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
  const { token } = formattingElementEntry;
  const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
  p._adoptNodes(furthestBlock, newElement);
  p.treeAdapter.appendChild(furthestBlock, newElement);
  p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
  p.activeFormattingElements.removeEntry(formattingElementEntry);
  p.openElements.remove(formattingElementEntry.element);
  p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
function callAdoptionAgency(p, token) {
  for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
    const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
    if (!formattingElementEntry) {
      break;
    }
    const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
    if (!furthestBlock) {
      break;
    }
    p.activeFormattingElements.bookmark = formattingElementEntry;
    const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
    const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
    p.treeAdapter.detachNode(lastElement);
    if (commonAncestor)
      aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
    aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
  }
}
function appendComment(p, token) {
  p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
  p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
  p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
  p.stopped = true;
  if (token.location) {
    const target = p.fragmentContext ? 0 : 2;
    for (let i = p.openElements.stackTop; i >= target; i--) {
      p._setEndLocation(p.openElements.items[i], token);
    }
    if (!p.fragmentContext && p.openElements.stackTop >= 0) {
      const htmlElement = p.openElements.items[0];
      const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
      if (htmlLocation && !htmlLocation.endTag) {
        p._setEndLocation(htmlElement, token);
        if (p.openElements.stackTop >= 1) {
          const bodyElement = p.openElements.items[1];
          const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
          if (bodyLocation && !bodyLocation.endTag) {
            p._setEndLocation(bodyElement, token);
          }
        }
      }
    }
  }
}
function doctypeInInitialMode(p, token) {
  p._setDocumentType(token);
  const mode = token.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(token);
  if (!isConforming(token)) {
    p._err(token, ERR.nonConformingDoctype);
  }
  p.treeAdapter.setDocumentMode(p.document, mode);
  p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
  p._err(token, ERR.missingDoctype, true);
  p.treeAdapter.setDocumentMode(p.document, DOCUMENT_MODE.QUIRKS);
  p.insertionMode = InsertionMode.BEFORE_HTML;
  p._processToken(token);
}
function startTagBeforeHtml(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.BEFORE_HEAD;
  } else {
    tokenBeforeHtml(p, token);
  }
}
function endTagBeforeHtml(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.HTML || tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.BR) {
    tokenBeforeHtml(p, token);
  }
}
function tokenBeforeHtml(p, token) {
  p._insertFakeRootElement();
  p.insertionMode = InsertionMode.BEFORE_HEAD;
  p._processToken(token);
}
function startTagBeforeHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.HEAD: {
      p._insertElement(token, NS.HTML);
      p.headElement = p.openElements.current;
      p.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    default: {
      tokenBeforeHead(p, token);
    }
  }
}
function endTagBeforeHead(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.HTML || tn === TAG_ID.BR) {
    tokenBeforeHead(p, token);
  } else {
    p._err(token, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenBeforeHead(p, token) {
  p._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD);
  p.headElement = p.openElements.current;
  p.insertionMode = InsertionMode.IN_HEAD;
  p._processToken(token);
}
function startTagInHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.TITLE: {
      p._switchToTextParsing(token, TokenizerMode.RCDATA);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      if (p.options.scriptingEnabled) {
        p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
      } else {
        p._insertElement(token, NS.HTML);
        p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
      }
      break;
    }
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
      break;
    }
    case TAG_ID.SCRIPT: {
      p._switchToTextParsing(token, TokenizerMode.SCRIPT_DATA);
      break;
    }
    case TAG_ID.TEMPLATE: {
      p._insertTemplate(token);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_TEMPLATE;
      p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
      break;
    }
    case TAG_ID.HEAD: {
      p._err(token, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default: {
      tokenInHead(p, token);
    }
  }
}
function endTagInHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HEAD: {
      p.openElements.pop();
      p.insertionMode = InsertionMode.AFTER_HEAD;
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.BR:
    case TAG_ID.HTML: {
      tokenInHead(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function templateEndTagInHead(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.generateImpliedEndTagsThoroughly();
    if (p.openElements.currentTagId !== TAG_ID.TEMPLATE) {
      p._err(token, ERR.closingOfElementWithOpenChildElements);
    }
    p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p.tmplInsertionModeStack.shift();
    p._resetInsertionMode();
  } else {
    p._err(token, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenInHead(p, token) {
  p.openElements.pop();
  p.insertionMode = InsertionMode.AFTER_HEAD;
  p._processToken(token);
}
function startTagInHeadNoScript(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.HEAD:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      p._err(token, ERR.nestedNoscriptInHead);
      break;
    }
    default: {
      tokenInHeadNoScript(p, token);
    }
  }
}
function endTagInHeadNoScript(p, token) {
  switch (token.tagID) {
    case TAG_ID.NOSCRIPT: {
      p.openElements.pop();
      p.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    case TAG_ID.BR: {
      tokenInHeadNoScript(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function tokenInHeadNoScript(p, token) {
  const errCode = token.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
  p._err(token, errCode);
  p.openElements.pop();
  p.insertionMode = InsertionMode.IN_HEAD;
  p._processToken(token);
}
function startTagAfterHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BODY: {
      p._insertElement(token, NS.HTML);
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_BODY;
      break;
    }
    case TAG_ID.FRAMESET: {
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_FRAMESET;
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      p._err(token, ERR.abandonedHeadElementChild);
      p.openElements.push(p.headElement, TAG_ID.HEAD);
      startTagInHead(p, token);
      p.openElements.remove(p.headElement);
      break;
    }
    case TAG_ID.HEAD: {
      p._err(token, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default: {
      tokenAfterHead(p, token);
    }
  }
}
function endTagAfterHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.BODY:
    case TAG_ID.HTML:
    case TAG_ID.BR: {
      tokenAfterHead(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function tokenAfterHead(p, token) {
  p._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY);
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function modeInBody(p, token) {
  switch (token.type) {
    case TokenType.CHARACTER: {
      characterInBody(p, token);
      break;
    }
    case TokenType.WHITESPACE_CHARACTER: {
      whitespaceCharacterInBody(p, token);
      break;
    }
    case TokenType.COMMENT: {
      appendComment(p, token);
      break;
    }
    case TokenType.START_TAG: {
      startTagInBody(p, token);
      break;
    }
    case TokenType.END_TAG: {
      endTagInBody(p, token);
      break;
    }
    case TokenType.EOF: {
      eofInBody(p, token);
      break;
    }
    default:
  }
}
function whitespaceCharacterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
}
function characterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
  p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
  if (p.openElements.tmplCount === 0) {
    p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
  }
}
function bodyStartTagInBody(p, token) {
  const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (bodyElement && p.openElements.tmplCount === 0) {
    p.framesetOk = false;
    p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
  }
}
function framesetStartTagInBody(p, token) {
  const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (p.framesetOk && bodyElement) {
    p.treeAdapter.detachNode(bodyElement);
    p.openElements.popAllUpToHtmlElement();
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.IN_FRAMESET;
  }
}
function addressStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  if (isNumberedHeader(p.openElements.currentTagId)) {
    p.openElements.pop();
  }
  p._insertElement(token, NS.HTML);
}
function preStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.skipNextNewLine = true;
  p.framesetOk = false;
}
function formStartTagInBody(p, token) {
  const inTemplate = p.openElements.tmplCount > 0;
  if (!p.formElement || inTemplate) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
      p._closePElement();
    }
    p._insertElement(token, NS.HTML);
    if (!inTemplate) {
      p.formElement = p.openElements.current;
    }
  }
}
function listItemStartTagInBody(p, token) {
  p.framesetOk = false;
  const tn = token.tagID;
  for (let i = p.openElements.stackTop; i >= 0; i--) {
    const elementId = p.openElements.tagIDs[i];
    if (tn === TAG_ID.LI && elementId === TAG_ID.LI || (tn === TAG_ID.DD || tn === TAG_ID.DT) && (elementId === TAG_ID.DD || elementId === TAG_ID.DT)) {
      p.openElements.generateImpliedEndTagsWithExclusion(elementId);
      p.openElements.popUntilTagNamePopped(elementId);
      break;
    }
    if (elementId !== TAG_ID.ADDRESS && elementId !== TAG_ID.DIV && elementId !== TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
      break;
    }
  }
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
}
function plaintextStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BUTTON)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(TAG_ID.BUTTON);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
}
function aStartTagInBody(p, token) {
  const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
  if (activeElementEntry) {
    callAdoptionAgency(p, token);
    p.openElements.remove(activeElementEntry.element);
    p.activeFormattingElements.removeEntry(activeElementEntry);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  if (p.openElements.hasInScope(TAG_ID.NOBR)) {
    callAdoptionAgency(p, token);
    p._reconstructActiveFormattingElements();
  }
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.insertMarker();
  p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
  if (p.treeAdapter.getDocumentMode(p.document) !== DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
  p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS.HTML);
  p.framesetOk = false;
  token.ackSelfClosing = true;
}
function isHiddenInput(token) {
  const inputType = getTokenAttr(token, ATTRS.TYPE);
  return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS.HTML);
  if (!isHiddenInput(token)) {
    p.framesetOk = false;
  }
  token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
  p._appendElement(token, NS.HTML);
  token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._appendElement(token, NS.HTML);
  p.framesetOk = false;
  token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
  token.tagName = TAG_NAMES.IMG;
  token.tagID = TAG_ID.IMG;
  areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
  p._insertElement(token, NS.HTML);
  p.skipNextNewLine = true;
  p.tokenizer.state = TokenizerMode.RCDATA;
  p.originalInsertionMode = p.insertionMode;
  p.framesetOk = false;
  p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._reconstructActiveFormattingElements();
  p.framesetOk = false;
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
  p.framesetOk = false;
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function noembedStartTagInBody(p, token) {
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
  p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
  if (p.openElements.currentTagId === TAG_ID.OPTION) {
    p.openElements.pop();
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
}
function rbStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.RUBY)) {
    p.openElements.generateImpliedEndTags();
  }
  p._insertElement(token, NS.HTML);
}
function rtStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.RUBY)) {
    p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC);
  }
  p._insertElement(token, NS.HTML);
}
function mathStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  adjustTokenMathMLAttrs(token);
  adjustTokenXMLAttrs(token);
  if (token.selfClosing) {
    p._appendElement(token, NS.MATHML);
  } else {
    p._insertElement(token, NS.MATHML);
  }
  token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  adjustTokenSVGAttrs(token);
  adjustTokenXMLAttrs(token);
  if (token.selfClosing) {
    p._appendElement(token, NS.SVG);
  } else {
    p._insertElement(token, NS.SVG);
  }
  token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
}
function startTagInBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.B:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      bStartTagInBody(p, token);
      break;
    }
    case TAG_ID.A: {
      aStartTagInBody(p, token);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderStartTagInBody(p, token);
      break;
    }
    case TAG_ID.P:
    case TAG_ID.DL:
    case TAG_ID.OL:
    case TAG_ID.UL:
    case TAG_ID.DIV:
    case TAG_ID.DIR:
    case TAG_ID.NAV:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.DETAILS:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressStartTagInBody(p, token);
      break;
    }
    case TAG_ID.LI:
    case TAG_ID.DD:
    case TAG_ID.DT: {
      listItemStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BR:
    case TAG_ID.IMG:
    case TAG_ID.WBR:
    case TAG_ID.AREA:
    case TAG_ID.EMBED:
    case TAG_ID.KEYGEN: {
      areaStartTagInBody(p, token);
      break;
    }
    case TAG_ID.HR: {
      hrStartTagInBody(p, token);
      break;
    }
    case TAG_ID.RB:
    case TAG_ID.RTC: {
      rbStartTagInBody(p, token);
      break;
    }
    case TAG_ID.RT:
    case TAG_ID.RP: {
      rtStartTagInBody(p, token);
      break;
    }
    case TAG_ID.PRE:
    case TAG_ID.LISTING: {
      preStartTagInBody(p, token);
      break;
    }
    case TAG_ID.XMP: {
      xmpStartTagInBody(p, token);
      break;
    }
    case TAG_ID.SVG: {
      svgStartTagInBody(p, token);
      break;
    }
    case TAG_ID.HTML: {
      htmlStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.STYLE:
    case TAG_ID.TITLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.BGSOUND:
    case TAG_ID.BASEFONT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.BODY: {
      bodyStartTagInBody(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOBR: {
      nobrStartTagInBody(p, token);
      break;
    }
    case TAG_ID.MATH: {
      mathStartTagInBody(p, token);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInBody(p, token);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInBody(p, token);
      break;
    }
    case TAG_ID.PARAM:
    case TAG_ID.TRACK:
    case TAG_ID.SOURCE: {
      paramStartTagInBody(p, token);
      break;
    }
    case TAG_ID.IMAGE: {
      imageStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BUTTON: {
      buttonStartTagInBody(p, token);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletStartTagInBody(p, token);
      break;
    }
    case TAG_ID.IFRAME: {
      iframeStartTagInBody(p, token);
      break;
    }
    case TAG_ID.SELECT: {
      selectStartTagInBody(p, token);
      break;
    }
    case TAG_ID.OPTION:
    case TAG_ID.OPTGROUP: {
      optgroupStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOEMBED: {
      noembedStartTagInBody(p, token);
      break;
    }
    case TAG_ID.FRAMESET: {
      framesetStartTagInBody(p, token);
      break;
    }
    case TAG_ID.TEXTAREA: {
      textareaStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      if (p.options.scriptingEnabled) {
        noembedStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }
      break;
    }
    case TAG_ID.PLAINTEXT: {
      plaintextStartTagInBody(p, token);
      break;
    }
    case TAG_ID.COL:
    case TAG_ID.TH:
    case TAG_ID.TD:
    case TAG_ID.TR:
    case TAG_ID.HEAD:
    case TAG_ID.FRAME:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP: {
      break;
    }
    default: {
      genericStartTagInBody(p, token);
    }
  }
}
function bodyEndTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BODY)) {
    p.insertionMode = InsertionMode.AFTER_BODY;
    if (p.options.sourceCodeLocationInfo) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement) {
        p._setEndLocation(bodyElement, token);
      }
    }
  }
}
function htmlEndTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BODY)) {
    p.insertionMode = InsertionMode.AFTER_BODY;
    endTagAfterBody(p, token);
  }
}
function addressEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function formEndTagInBody(p) {
  const inTemplate = p.openElements.tmplCount > 0;
  const { formElement } = p;
  if (!inTemplate) {
    p.formElement = null;
  }
  if ((formElement || inTemplate) && p.openElements.hasInScope(TAG_ID.FORM)) {
    p.openElements.generateImpliedEndTags();
    if (inTemplate) {
      p.openElements.popUntilTagNamePopped(TAG_ID.FORM);
    } else if (formElement) {
      p.openElements.remove(formElement);
    }
  }
}
function pEndTagInBody(p) {
  if (!p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._insertFakeElement(TAG_NAMES.P, TAG_ID.P);
  }
  p._closePElement();
}
function liEndTagInBody(p) {
  if (p.openElements.hasInListItemScope(TAG_ID.LI)) {
    p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI);
    p.openElements.popUntilTagNamePopped(TAG_ID.LI);
  }
}
function ddEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTagsWithExclusion(tn);
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function numberedHeaderEndTagInBody(p) {
  if (p.openElements.hasNumberedHeaderInScope()) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilNumberedHeaderPopped();
  }
}
function appletEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
    p.activeFormattingElements.clearToLastMarker();
  }
}
function brEndTagInBody(p) {
  p._reconstructActiveFormattingElements();
  p._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR);
  p.openElements.pop();
  p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
  const tn = token.tagName;
  const tid = token.tagID;
  for (let i = p.openElements.stackTop; i > 0; i--) {
    const element = p.openElements.items[i];
    const elementId = p.openElements.tagIDs[i];
    if (tid === elementId && (tid !== TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
      p.openElements.generateImpliedEndTagsWithExclusion(tid);
      if (p.openElements.stackTop >= i)
        p.openElements.shortenToLength(i);
      break;
    }
    if (p._isSpecialElement(element, elementId)) {
      break;
    }
  }
}
function endTagInBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.A:
    case TAG_ID.B:
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.NOBR:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      callAdoptionAgency(p, token);
      break;
    }
    case TAG_ID.P: {
      pEndTagInBody(p);
      break;
    }
    case TAG_ID.DL:
    case TAG_ID.UL:
    case TAG_ID.OL:
    case TAG_ID.DIR:
    case TAG_ID.DIV:
    case TAG_ID.NAV:
    case TAG_ID.PRE:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.BUTTON:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.DETAILS:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.LISTING:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressEndTagInBody(p, token);
      break;
    }
    case TAG_ID.LI: {
      liEndTagInBody(p);
      break;
    }
    case TAG_ID.DD:
    case TAG_ID.DT: {
      ddEndTagInBody(p, token);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderEndTagInBody(p);
      break;
    }
    case TAG_ID.BR: {
      brEndTagInBody(p);
      break;
    }
    case TAG_ID.BODY: {
      bodyEndTagInBody(p, token);
      break;
    }
    case TAG_ID.HTML: {
      htmlEndTagInBody(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formEndTagInBody(p);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletEndTagInBody(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      genericEndTagInBody(p, token);
    }
  }
}
function eofInBody(p, token) {
  if (p.tmplInsertionModeStack.length > 0) {
    eofInTemplate(p, token);
  } else {
    stopParsing(p, token);
  }
}
function endTagInText(p, token) {
  var _a2;
  if (token.tagID === TAG_ID.SCRIPT) {
    (_a2 = p.scriptHandler) === null || _a2 === void 0 ? void 0 : _a2.call(p, p.openElements.current);
  }
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
  p._err(token, ERR.eofInElementThatCanContainOnlyText);
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
  p.onEof(token);
}
function characterInTable(p, token) {
  if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
    p.pendingCharacterTokens.length = 0;
    p.hasNonWhitespacePendingCharacterToken = false;
    p.originalInsertionMode = p.insertionMode;
    p.insertionMode = InsertionMode.IN_TABLE_TEXT;
    switch (token.type) {
      case TokenType.CHARACTER: {
        characterInTableText(p, token);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        whitespaceCharacterInTableText(p, token);
        break;
      }
    }
  } else {
    tokenInTable(p, token);
  }
}
function captionStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p.activeFormattingElements.insertMarker();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP);
  p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
  startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY);
  p.insertionMode = InsertionMode.IN_TABLE_BODY;
  startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
  if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
    p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
    p._resetInsertionMode();
    p._processStartTag(token);
  }
}
function inputStartTagInTable(p, token) {
  if (isHiddenInput(token)) {
    p._appendElement(token, NS.HTML);
  } else {
    tokenInTable(p, token);
  }
  token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
  if (!p.formElement && p.openElements.tmplCount === 0) {
    p._insertElement(token, NS.HTML);
    p.formElement = p.openElements.current;
    p.openElements.pop();
  }
}
function startTagInTable(p, token) {
  switch (token.tagID) {
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      tdStartTagInTable(p, token);
      break;
    }
    case TAG_ID.STYLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.COL: {
      colStartTagInTable(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInTable(p, token);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInTable(p, token);
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      tbodyStartTagInTable(p, token);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInTable(p, token);
      break;
    }
    case TAG_ID.CAPTION: {
      captionStartTagInTable(p, token);
      break;
    }
    case TAG_ID.COLGROUP: {
      colgroupStartTagInTable(p, token);
      break;
    }
    default: {
      tokenInTable(p, token);
    }
  }
}
function endTagInTable(p, token) {
  switch (token.tagID) {
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
        p._resetInsertionMode();
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      break;
    }
    default: {
      tokenInTable(p, token);
    }
  }
}
function tokenInTable(p, token) {
  const savedFosterParentingState = p.fosterParentingEnabled;
  p.fosterParentingEnabled = true;
  modeInBody(p, token);
  p.fosterParentingEnabled = savedFosterParentingState;
}
function whitespaceCharacterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
  p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
  let i = 0;
  if (p.hasNonWhitespacePendingCharacterToken) {
    for (; i < p.pendingCharacterTokens.length; i++) {
      tokenInTable(p, p.pendingCharacterTokens[i]);
    }
  } else {
    for (; i < p.pendingCharacterTokens.length; i++) {
      p._insertCharacters(p.pendingCharacterTokens[i]);
    }
  }
  p.insertionMode = p.originalInsertionMode;
  p._processToken(token);
}
var TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([TAG_ID.CAPTION, TAG_ID.COL, TAG_ID.COLGROUP, TAG_ID.TBODY, TAG_ID.TD, TAG_ID.TFOOT, TAG_ID.TH, TAG_ID.THEAD, TAG_ID.TR]);
function startTagInCaption(p, token) {
  const tn = token.tagID;
  if (TABLE_VOID_ELEMENTS.has(tn)) {
    if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = InsertionMode.IN_TABLE;
      startTagInTable(p, token);
    }
  } else {
    startTagInBody(p, token);
  }
}
function endTagInCaption(p, token) {
  const tn = token.tagID;
  switch (tn) {
    case TAG_ID.CAPTION:
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = InsertionMode.IN_TABLE;
        if (tn === TAG_ID.TABLE) {
          endTagInTable(p, token);
        }
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      break;
    }
    default: {
      endTagInBody(p, token);
    }
  }
}
function startTagInColumnGroup(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.COL: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    default: {
      tokenInColumnGroup(p, token);
    }
  }
}
function endTagInColumnGroup(p, token) {
  switch (token.tagID) {
    case TAG_ID.COLGROUP: {
      if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    case TAG_ID.COL: {
      break;
    }
    default: {
      tokenInColumnGroup(p, token);
    }
  }
}
function tokenInColumnGroup(p, token) {
  if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
    p.openElements.pop();
    p.insertionMode = InsertionMode.IN_TABLE;
    p._processToken(token);
  }
}
function startTagInTableBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.TR: {
      p.openElements.clearBackToTableBodyContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_ROW;
      break;
    }
    case TAG_ID.TH:
    case TAG_ID.TD: {
      p.openElements.clearBackToTableBodyContext();
      p._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR);
      p.insertionMode = InsertionMode.IN_ROW;
      startTagInRow(p, token);
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        startTagInTable(p, token);
      }
      break;
    }
    default: {
      startTagInTable(p, token);
    }
  }
}
function endTagInTableBody(p, token) {
  const tn = token.tagID;
  switch (token.tagID) {
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      break;
    }
    case TAG_ID.TABLE: {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        endTagInTable(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      break;
    }
    default: {
      endTagInTable(p, token);
    }
  }
}
function startTagInRow(p, token) {
  switch (token.tagID) {
    case TAG_ID.TH:
    case TAG_ID.TD: {
      p.openElements.clearBackToTableRowContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_CELL;
      p.activeFormattingElements.insertMarker();
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        startTagInTableBody(p, token);
      }
      break;
    }
    default: {
      startTagInTable(p, token);
    }
  }
}
function endTagInRow(p, token) {
  switch (token.tagID) {
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
      }
      break;
    }
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        endTagInTableBody(p, token);
      }
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        endTagInTableBody(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH: {
      break;
    }
    default: {
      endTagInTable(p, token);
    }
  }
}
function startTagInCell(p, token) {
  const tn = token.tagID;
  if (TABLE_VOID_ELEMENTS.has(tn)) {
    if (p.openElements.hasInTableScope(TAG_ID.TD) || p.openElements.hasInTableScope(TAG_ID.TH)) {
      p._closeTableCell();
      startTagInRow(p, token);
    }
  } else {
    startTagInBody(p, token);
  }
}
function endTagInCell(p, token) {
  const tn = token.tagID;
  switch (tn) {
    case TAG_ID.TD:
    case TAG_ID.TH: {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = InsertionMode.IN_ROW;
      }
      break;
    }
    case TAG_ID.TABLE:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(tn)) {
        p._closeTableCell();
        endTagInRow(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML: {
      break;
    }
    default: {
      endTagInBody(p, token);
    }
  }
}
function startTagInSelect(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.OPTION: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.OPTGROUP: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.INPUT:
    case TAG_ID.KEYGEN:
    case TAG_ID.TEXTAREA:
    case TAG_ID.SELECT: {
      if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
        if (token.tagID !== TAG_ID.SELECT) {
          p._processStartTag(token);
        }
      }
      break;
    }
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function endTagInSelect(p, token) {
  switch (token.tagID) {
    case TAG_ID.OPTGROUP: {
      if (p.openElements.stackTop > 0 && p.openElements.currentTagId === TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      break;
    }
    case TAG_ID.OPTION: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      break;
    }
    case TAG_ID.SELECT: {
      if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default:
  }
}
function startTagInSelectInTable(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
    p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
    p._resetInsertionMode();
    p._processStartTag(token);
  } else {
    startTagInSelect(p, token);
  }
}
function endTagInSelectInTable(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
      p._resetInsertionMode();
      p.onEndTag(token);
    }
  } else {
    endTagInSelect(p, token);
  }
}
function startTagInTemplate(p, token) {
  switch (token.tagID) {
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
      p.insertionMode = InsertionMode.IN_TABLE;
      startTagInTable(p, token);
      break;
    }
    case TAG_ID.COL: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      startTagInColumnGroup(p, token);
      break;
    }
    case TAG_ID.TR: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
      startTagInTableBody(p, token);
      break;
    }
    case TAG_ID.TD:
    case TAG_ID.TH: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
      p.insertionMode = InsertionMode.IN_ROW;
      startTagInRow(p, token);
      break;
    }
    default: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
      p.insertionMode = InsertionMode.IN_BODY;
      startTagInBody(p, token);
    }
  }
}
function endTagInTemplate(p, token) {
  if (token.tagID === TAG_ID.TEMPLATE) {
    templateEndTagInHead(p, token);
  }
}
function eofInTemplate(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p.tmplInsertionModeStack.shift();
    p._resetInsertionMode();
    p.onEof(token);
  } else {
    stopParsing(p, token);
  }
}
function startTagAfterBody(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterBody(p, token);
  }
}
function endTagAfterBody(p, token) {
  var _a2;
  if (token.tagID === TAG_ID.HTML) {
    if (!p.fragmentContext) {
      p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
    }
    if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === TAG_ID.HTML) {
      p._setEndLocation(p.openElements.items[0], token);
      const bodyElement = p.openElements.items[1];
      if (bodyElement && !((_a2 = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a2 === void 0 ? void 0 : _a2.endTag)) {
        p._setEndLocation(bodyElement, token);
      }
    }
  } else {
    tokenAfterBody(p, token);
  }
}
function tokenAfterBody(p, token) {
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function startTagInFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.FRAMESET: {
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.FRAME: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function endTagInFrameset(p, token) {
  if (token.tagID === TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
    p.openElements.pop();
    if (!p.fragmentContext && p.openElements.currentTagId !== TAG_ID.FRAMESET) {
      p.insertionMode = InsertionMode.AFTER_FRAMESET;
    }
  }
}
function startTagAfterFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function endTagAfterFrameset(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
  }
}
function startTagAfterAfterBody(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterAfterBody(p, token);
  }
}
function tokenAfterAfterBody(p, token) {
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function startTagAfterAfterFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function nullCharacterInForeignContent(p, token) {
  token.chars = REPLACEMENT_CHARACTER;
  p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
  p._insertCharacters(token);
  p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
  while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
    p.openElements.pop();
  }
}
function startTagInForeignContent(p, token) {
  if (causesExit(token)) {
    popUntilHtmlOrIntegrationPoint(p);
    p._startTagOutsideForeignContent(token);
  } else {
    const current = p._getAdjustedCurrentElement();
    const currentNs = p.treeAdapter.getNamespaceURI(current);
    if (currentNs === NS.MATHML) {
      adjustTokenMathMLAttrs(token);
    } else if (currentNs === NS.SVG) {
      adjustTokenSVGTagName(token);
      adjustTokenSVGAttrs(token);
    }
    adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
      p._appendElement(token, currentNs);
    } else {
      p._insertElement(token, currentNs);
    }
    token.ackSelfClosing = true;
  }
}
function endTagInForeignContent(p, token) {
  if (token.tagID === TAG_ID.P || token.tagID === TAG_ID.BR) {
    popUntilHtmlOrIntegrationPoint(p);
    p._endTagOutsideForeignContent(token);
    return;
  }
  for (let i = p.openElements.stackTop; i > 0; i--) {
    const element = p.openElements.items[i];
    if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
      p._endTagOutsideForeignContent(token);
      break;
    }
    const tagName = p.treeAdapter.getTagName(element);
    if (tagName.toLowerCase() === token.tagName) {
      token.tagName = tagName;
      p.openElements.shortenToLength(i);
      break;
    }
  }
}

// node_modules/entities/lib/esm/escape.js
var xmlCodeMap = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]);
var getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index)
  )
);
function getEscaper(regex, map2) {
  return function escape(data) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      result += map2.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
}
var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
var escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
]));
var escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
]));

// node_modules/parse5/dist/serializer/index.js
var VOID_ELEMENTS = /* @__PURE__ */ new Set([
  TAG_NAMES.AREA,
  TAG_NAMES.BASE,
  TAG_NAMES.BASEFONT,
  TAG_NAMES.BGSOUND,
  TAG_NAMES.BR,
  TAG_NAMES.COL,
  TAG_NAMES.EMBED,
  TAG_NAMES.FRAME,
  TAG_NAMES.HR,
  TAG_NAMES.IMG,
  TAG_NAMES.INPUT,
  TAG_NAMES.KEYGEN,
  TAG_NAMES.LINK,
  TAG_NAMES.META,
  TAG_NAMES.PARAM,
  TAG_NAMES.SOURCE,
  TAG_NAMES.TRACK,
  TAG_NAMES.WBR
]);

// node_modules/parse5/dist/index.js
function parse(html, options) {
  return Parser.parse(html, options);
}
function parseFragment(fragmentContext, html, options) {
  if (typeof fragmentContext === "string") {
    options = html;
    html = fragmentContext;
    fragmentContext = null;
  }
  const parser = Parser.getFragmentParser(fragmentContext, options);
  parser.tokenizer.write(html, true);
  return parser.getFragment();
}

// src/mock-doc/parse-util.ts
var docParser = /* @__PURE__ */ new WeakMap();
function parseDocumentUtil(ownerDocument, html) {
  const doc2 = parse(html.trim(), getParser(ownerDocument));
  doc2.documentElement = doc2.firstElementChild;
  doc2.head = doc2.documentElement.firstElementChild;
  doc2.body = doc2.head.nextElementSibling;
  return doc2;
}
function parseFragmentUtil(ownerDocument, html) {
  if (typeof html === "string") {
    html = html.trim();
  } else {
    html = "";
  }
  const frag = parseFragment(html, getParser(ownerDocument));
  return frag;
}
function getParser(ownerDocument) {
  let parseOptions = docParser.get(ownerDocument);
  if (parseOptions != null) {
    return parseOptions;
  }
  const treeAdapter = {
    createDocument() {
      const doc2 = ownerDocument.createElement("#document" /* DOCUMENT_NODE */);
      doc2["x-mode"] = "no-quirks";
      return doc2;
    },
    setNodeSourceCodeLocation(node, location2) {
      node.sourceCodeLocation = location2;
    },
    getNodeSourceCodeLocation(node) {
      return node.sourceCodeLocation;
    },
    createDocumentFragment() {
      return ownerDocument.createDocumentFragment();
    },
    createElement(tagName, namespaceURI, attrs) {
      const elm = ownerDocument.createElementNS(namespaceURI, tagName);
      for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        if (attr.namespace == null || attr.namespace === "http://www.w3.org/1999/xhtml") {
          elm.setAttribute(attr.name, attr.value);
        } else {
          elm.setAttributeNS(attr.namespace, attr.name, attr.value);
        }
      }
      return elm;
    },
    createCommentNode(data) {
      return ownerDocument.createComment(data);
    },
    appendChild(parentNode, newNode) {
      parentNode.appendChild(newNode);
    },
    insertBefore(parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
    },
    setTemplateContent(templateElement, contentElement) {
      templateElement.content = contentElement;
    },
    getTemplateContent(templateElement) {
      return templateElement.content;
    },
    setDocumentType(doc2, name, publicId, systemId) {
      let doctypeNode = doc2.childNodes.find((n) => n.nodeType === 10 /* DOCUMENT_TYPE_NODE */);
      if (doctypeNode == null) {
        doctypeNode = ownerDocument.createDocumentTypeNode();
        doc2.insertBefore(doctypeNode, doc2.firstChild);
      }
      doctypeNode.nodeValue = "!DOCTYPE";
      doctypeNode["x-name"] = name;
      doctypeNode["x-publicId"] = publicId;
      doctypeNode["x-systemId"] = systemId;
    },
    setDocumentMode(doc2, mode) {
      doc2["x-mode"] = mode;
    },
    getDocumentMode(doc2) {
      return doc2["x-mode"];
    },
    detachNode(node) {
      node.remove();
    },
    insertText(parentNode, text) {
      const lastChild = parentNode.lastChild;
      if (lastChild != null && lastChild.nodeType === 3 /* TEXT_NODE */) {
        lastChild.nodeValue += text;
      } else {
        parentNode.appendChild(ownerDocument.createTextNode(text));
      }
    },
    insertTextBefore(parentNode, text, referenceNode) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
      if (prevNode != null && prevNode.nodeType === 3 /* TEXT_NODE */) {
        prevNode.nodeValue += text;
      } else {
        parentNode.insertBefore(ownerDocument.createTextNode(text), referenceNode);
      }
    },
    adoptAttributes(recipient, attrs) {
      for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        if (recipient.hasAttributeNS(attr.namespace, attr.name) === false) {
          recipient.setAttributeNS(attr.namespace, attr.name, attr.value);
        }
      }
    },
    getFirstChild(node) {
      return node.childNodes[0];
    },
    getChildNodes(node) {
      return node.childNodes;
    },
    getParentNode(node) {
      return node.parentNode;
    },
    getAttrList(element) {
      const attrs = element.attributes.__items.map((attr) => {
        return {
          name: attr.name,
          value: attr.value,
          namespace: attr.namespaceURI,
          prefix: null
        };
      });
      return attrs;
    },
    getTagName(element) {
      if (element.namespaceURI === "http://www.w3.org/1999/xhtml") {
        return element.nodeName.toLowerCase();
      } else {
        return element.nodeName;
      }
    },
    getNamespaceURI(element) {
      return element.namespaceURI;
    },
    getTextNodeContent(textNode) {
      return textNode.nodeValue;
    },
    getCommentNodeContent(commentNode) {
      return commentNode.nodeValue;
    },
    getDocumentTypeNodeName(doctypeNode) {
      return doctypeNode["x-name"];
    },
    getDocumentTypeNodePublicId(doctypeNode) {
      return doctypeNode["x-publicId"];
    },
    getDocumentTypeNodeSystemId(doctypeNode) {
      return doctypeNode["x-systemId"];
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['text']`. As a result, we cannot
    // complete this function signature
    isTextNode(node) {
      return node.nodeType === 3 /* TEXT_NODE */;
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['comment']`. As a result, we cannot
    // complete this function signature (which requires its return type to be a type predicate)
    isCommentNode(node) {
      return node.nodeType === 8 /* COMMENT_NODE */;
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['document']`. As a result, we cannot
    // complete this function signature (which requires its return type to be a type predicate)
    isDocumentTypeNode(node) {
      return node.nodeType === 10 /* DOCUMENT_TYPE_NODE */;
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['element']`. As a result, we cannot
    // complete this function signature (which requires its return type to be a type predicate)
    isElementNode(node) {
      return node.nodeType === 1 /* ELEMENT_NODE */;
    }
  };
  parseOptions = {
    treeAdapter
  };
  docParser.set(ownerDocument, parseOptions);
  return parseOptions;
}

// src/mock-doc/third-party/jquery.ts
var jquery_default = (
  /*!
  * jQuery JavaScript Library v4.0.0-pre+9352011a7.dirty +selector
  * https://jquery.com/
  *
  * Copyright OpenJS Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2023-12-11T17:55Z
  */
  function(global2, factory) {
    "use strict";
    if (true) {
      return factory(global2, true);
    } else {
      factory(global2);
    }
  }({
    document: {
      createElement() {
        return {};
      },
      nodeType: 9,
      documentElement: {
        nodeType: 1,
        nodeName: "HTML"
      }
    }
  }, function(window2, noGlobal) {
    "use strict";
    if (!window2.document) {
      throw new Error("jQuery requires a window with a document");
    }
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    function isWindow(obj) {
      return obj != null && obj === obj.window;
    }
    function isArrayLike(obj) {
      var length = !!obj && obj.length, type = toType(obj);
      if (typeof obj === "function" || isWindow(obj)) {
        return false;
      }
      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var document2 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc2) {
      doc2 = doc2 || document2;
      var i2, script = doc2.createElement("script");
      script.text = code;
      if (node) {
        for (i2 in preservedScriptAttributes) {
          if (node[i2]) {
            script[i2] = node[i2];
          }
        }
      }
      doc2.head.appendChild(script).parentNode.removeChild(script);
    }
    const jQuery = {};
    var version = "4.0.0-pre+9352011a7.dirty +selector", rhtmlSuffix = /HTML$/i, jQueryOrig = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
      // The current version of jQuery being used
      jquery: version,
      constructor: jQuery,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      // Execute a callback for every element in the matched set.
      each: function(callback) {
        return jQuery.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i2) {
          return callback.call(elem, i2, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i2) {
          return (i2 + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i2) {
          return i2 % 2;
        }));
      },
      eq: function(i2) {
        var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      }
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i2] || {};
        i2++;
      }
      if (typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      if (i2 === length) {
        target = this;
        i2--;
      }
      for (; i2 < length; i2++) {
        if ((options = arguments[i2]) != null) {
          for (name in options) {
            copy = options[name];
            if (name === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
              target[name] = jQuery.extend(deep, clone, copy);
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(code, options, doc2) {
        DOMEval(code, { nonce: options && options.nonce }, doc2);
      },
      each: function(obj, callback) {
        var length, i2 = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i2 < length; i2++) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        } else {
          for (i2 in obj) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(elem) {
        var node, ret = "", i2 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i2++]) {
            ret += jQuery.text(node);
          }
        }
        if (nodeType === 1 || nodeType === 11) {
          return elem.textContent;
        }
        if (nodeType === 9) {
          return elem.documentElement.textContent;
        }
        if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      },
      // results is for internal usage only
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery.merge(
              ret,
              typeof arr2 === "string" ? [arr2] : arr2
            );
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i2) {
        return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
      },
      isXMLDoc: function(elem) {
        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      // Note: an element does not contain itself
      contains: function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i2 = first.length;
        for (; j < len; j++) {
          first[i2++] = second[j];
        }
        first.length = i2;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches3 = [], i2 = 0, length = elems.length, callbackExpect = !invert;
        for (; i2 < length; i2++) {
          callbackInverse = !callback(elems[i2], i2);
          if (callbackInverse !== callbackExpect) {
            matches3.push(elems[i2]);
          }
        }
        return matches3;
      },
      // arg is for internal usage only
      map: function(elems, callback, arg) {
        var length, value, i2 = 0, ret = [];
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i2 < length; i2++) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i2 in elems) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support
    });
    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    );
    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var isIE = document2.documentMode;
    try {
      document2.querySelector(":has(*,:jqfake)");
      support.cssHas = false;
    } catch (e) {
      support.cssHas = true;
    }
    var rbuggyQSA = [];
    if (isIE) {
      rbuggyQSA.push(
        // Support: IE 9 - 11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets
        ":enabled",
        ":disabled",
        // Support: IE 11+
        // IE 11 doesn't find elements on a `[name='']` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        "\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`
      );
    }
    if (!support.cssHas) {
      rbuggyQSA.push(":has");
    }
    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
    var rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
    var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
    var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
    var rdescend = new RegExp(whitespace + "|>");
    var rsibling = /[+~]/;
    var documentElement = document2.documentElement;
    var matches2 = documentElement.matches || documentElement.msMatchesSelector;
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > jQuery.expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return cache[key + " "] = value;
      }
      return cache;
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
    var pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)";
    var filterMatchExpr = {
      ID: new RegExp("^#(" + identifier + ")"),
      CLASS: new RegExp("^\\.(" + identifier + ")"),
      TAG: new RegExp("^(" + identifier + "|[*])"),
      ATTR: new RegExp("^" + attributes),
      PSEUDO: new RegExp("^" + pseudos),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
        "i"
      )
    };
    var rpseudo = new RegExp(pseudos);
    var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 65536;
      if (nonHex) {
        return nonHex;
      }
      return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    };
    function unescapeSelector(sel) {
      return sel.replace(runescape, funescape);
    }
    function selectorError(msg) {
      jQuery.error("Syntax error, unrecognized expression: " + msg);
    }
    var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
    var tokenCache = createCache();
    function tokenize(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = jQuery.expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;
        if (match = rleadingCombinator.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrimCSS, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in filterMatchExpr) {
          if ((match = jQuery.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      if (parseOnly) {
        return soFar.length;
      }
      return soFar ? selectorError(selector) : (
        // Cache the tokens
        tokenCache(selector, groups).slice(0)
      );
    }
    var preFilter = {
      ATTR: function(match) {
        match[1] = unescapeSelector(match[1]);
        match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }
        return match.slice(0, 4);
      },
      CHILD: function(match) {
        match[1] = match[1].toLowerCase();
        if (match[1].slice(0, 3) === "nth") {
          if (!match[3]) {
            selectorError(match[0]);
          }
          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd");
        } else if (match[3]) {
          selectorError(match[0]);
        }
        return match;
      },
      PSEUDO: function(match) {
        var excess, unquoted = !match[6] && match[2];
        if (filterMatchExpr.CHILD.test(match[0])) {
          return null;
        }
        if (match[3]) {
          match[2] = match[4] || match[5] || "";
        } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
        (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        }
        return match.slice(0, 3);
      }
    };
    function toSelector(tokens) {
      var i2 = 0, len = tokens.length, selector = "";
      for (; i2 < len; i2++) {
        selector += tokens[i2].value;
      }
      return selector;
    }
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "\uFFFD";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var sort = arr.sort;
    var splice = arr.splice;
    var hasDuplicate;
    function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }
      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
      if (compare) {
        return compare;
      }
      compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
        // Otherwise we know they are disconnected
        1
      );
      if (compare & 1) {
        if (a == document2 || a.ownerDocument == document2 && jQuery.contains(document2, a)) {
          return -1;
        }
        if (b == document2 || b.ownerDocument == document2 && jQuery.contains(document2, b)) {
          return 1;
        }
        return 0;
      }
      return compare & 4 ? -1 : 1;
    }
    jQuery.uniqueSort = function(results) {
      var elem, duplicates = [], j = 0, i2 = 0;
      hasDuplicate = false;
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while (elem = results[i2++]) {
          if (elem === results[i2]) {
            j = duplicates.push(i2);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }
      return results;
    };
    jQuery.fn.uniqueSort = function() {
      return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
    };
    var i, outermostContext, document$1, documentElement$1, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery.extend({
      bool: new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
      setDocument();
    }, inDisabledFieldset = addCombinator(
      function(elem) {
        return elem.disabled === true && nodeName(elem, "fieldset");
      },
      { dir: "parentNode", next: "legend" }
    );
    function find(selector, context, results, seed) {
      var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (false) {
        setDocument(context);
        context = context || document$1;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if (m = match[1]) {
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  push.call(results, elem);
                }
                return results;
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && jQuery.contains(context, elem)) {
                  push.call(results, elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            newSelector = selector;
            newContext = context;
            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              if (newContext != context || isIE) {
                if (nid = context.getAttribute("id")) {
                  nid = jQuery.escapeSelector(nid);
                } else {
                  context.setAttribute("id", nid = jQuery.expando);
                }
              }
              groups = tokenize(selector);
              i2 = groups.length;
              while (i2--) {
                groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
              }
              newSelector = groups.join(",");
            }
            try {
              push.apply(
                results,
                newContext.querySelectorAll(newSelector)
              );
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === jQuery.expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
    }
    function markFunction(fn) {
      fn[jQuery.expando] = true;
      return fn;
    }
    function createInputPseudo(type) {
      return function(elem) {
        return nodeName(elem, "input") && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem) {
        if ("form" in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }
          return elem.disabled === disabled;
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches3) {
          var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
          while (i2--) {
            if (seed[j = matchIndexes[i2]]) {
              seed[j] = !(matches3[j] = seed[j]);
            }
          }
        });
      });
    }
    function setDocument(node) {
      var subWindow, doc2 = node ? node.ownerDocument || node : document2;
      if (doc2 == document$1 || doc2.nodeType !== 9) {
        return;
      }
      document$1 = doc2;
      documentElement$1 = document$1.documentElement;
      documentIsHTML = !jQuery.isXMLDoc(document$1);
      if (isIE && document2 != document$1 && (subWindow = document$1.defaultView) && subWindow.top !== subWindow) {
        subWindow.addEventListener("unload", unloadHandler);
      }
    }
    find.matches = function(expr, elements) {
      return find(expr, null, null, elements);
    };
    find.matchesSelector = function(elem, expr) {
      setDocument(elem);
      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          return matches2.call(elem, expr);
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find(expr, document$1, null, [elem]).length > 0;
    };
    jQuery.expr = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      find: {
        ID: function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        },
        TAG: function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else {
            return context.querySelectorAll(tag);
          }
        },
        CLASS: function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        }
      },
      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" }
      },
      preFilter,
      filter: {
        ID: function(id) {
          var attrId = unescapeSelector(id);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        },
        TAG: function(nodeNameSelector) {
          var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return nodeName(elem, expectedNodeName);
          };
        },
        CLASS: function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(
              typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
            );
          });
        },
        ATTR: function(name, operator, check) {
          return function(elem) {
            var result = elem.getAttribute(name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            if (operator === "=") {
              return result === check;
            }
            if (operator === "!=") {
              return result !== check;
            }
            if (operator === "^=") {
              return check && result.indexOf(check) === 0;
            }
            if (operator === "*=") {
              return check && result.indexOf(check) > -1;
            }
            if (operator === "$=") {
              return check && result.slice(-check.length) === check;
            }
            if (operator === "~=") {
              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
            }
            if (operator === "|=") {
              return result === check || result.slice(0, check.length + 1) === check + "-";
            }
            return false;
          };
        },
        CHILD: function(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
          return first === 1 && last === 0 ? (
            // Shortcut for :nth-*(n)
            function(elem) {
              return !!elem.parentNode;
            }
          ) : function(elem, _context, xml) {
            var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while (node = node[dir]) {
                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[jQuery.expando] || (parent[jQuery.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[jQuery.expando] || (node[jQuery.expando] = {});
                        outerCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function(pseudo, argument) {
          var fn = jQuery.expr.pseudos[pseudo] || jQuery.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
          if (fn[jQuery.expando]) {
            return fn(argument);
          }
          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        not: markFunction(function(selector) {
          var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
          return matcher[jQuery.expando] ? markFunction(function(seed, matches3, _context, xml) {
            var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
            while (i2--) {
              if (elem = unmatched[i2]) {
                seed[i2] = !(matches3[i2] = elem);
              }
            }
          }) : function(elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        has: markFunction(function(selector) {
          return function(elem) {
            return find(selector, elem).length > 0;
          };
        }),
        contains: markFunction(function(text) {
          text = unescapeSelector(text);
          return function(elem) {
            return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // https://www.w3.org/TR/selectors/#lang-pseudo
        lang: markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            selectorError("unsupported lang: " + lang);
          }
          lang = unescapeSelector(lang).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        // Miscellaneous
        target: function(elem) {
          var hash = window2.location && window2.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        root: function(elem) {
          return elem === documentElement$1;
        },
        focus: function(elem) {
          return elem === document$1.activeElement && document$1.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function(elem) {
          return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
        },
        selected: function(elem) {
          if (isIE && elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        // Contents
        empty: function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function(elem) {
          return !jQuery.expr.pseudos.empty(elem);
        },
        // Element/input types
        header: function(elem) {
          return rheader.test(elem.nodeName);
        },
        input: function(elem) {
          return rinputs.test(elem.nodeName);
        },
        button: function(elem) {
          return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
        },
        text: function(elem) {
          return nodeName(elem, "input") && elem.type === "text";
        },
        // Position-in-collection
        first: createPositionalPseudo(function() {
          return [0];
        }),
        last: createPositionalPseudo(function(_matchIndexes, length) {
          return [length - 1];
        }),
        eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        even: createPositionalPseudo(function(matchIndexes, length) {
          var i2 = 0;
          for (; i2 < length; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function(matchIndexes, length) {
          var i2 = 1;
          for (; i2 < length; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i2;
          if (argument < 0) {
            i2 = argument + length;
          } else if (argument > length) {
            i2 = length;
          } else {
            i2 = argument;
          }
          for (; --i2 >= 0; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i2 = argument < 0 ? argument + length : argument;
          for (; ++i2 < length; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        })
      }
    };
    jQuery.expr.pseudos.nth = jQuery.expr.pseudos.eq;
    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
      jQuery.expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in { submit: true, reset: true }) {
      jQuery.expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {
    }
    setFilters.prototype = jQuery.expr.filters = jQuery.expr.pseudos;
    jQuery.expr.setFilters = new setFilters();
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
      return combinator.first ? (
        // Check against closest ancestor/preceding element
        function(elem, context, xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
          return false;
        }
      ) : (
        // Check against all ancestor/preceding elements
        function(elem, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
                if (skip && nodeName(elem, skip)) {
                  elem = elem[dir] || elem;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
      );
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i2 = matchers.length;
        while (i2--) {
          if (!matchers[i2](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i2 = 0, len = contexts.length;
      for (; i2 < len; i2++) {
        find(selector, contexts[i2], results);
      }
      return results;
    }
    function condense(unmatched, map2, filter, context, xml) {
      var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map2 != null;
      for (; i2 < len; i2++) {
        if (elem = unmatched[i2]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map2.push(i2);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[jQuery.expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[jQuery.expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
          selector || "*",
          context.nodeType ? [context] : context,
          []
        ), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
        if (matcher) {
          matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            results
          );
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i2 = temp.length;
          while (i2--) {
            if (elem = temp[i2]) {
              matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter2) {
            if (postFinder) {
              temp = [];
              i2 = matcherOut.length;
              while (i2--) {
                if (elem = matcherOut[i2]) {
                  temp.push(matcherIn[i2] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i2 = matcherOut.length;
            while (i2--) {
              if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(
            matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
          );
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
        return elem === checkContext;
      }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
        return indexOf.call(checkContext, elem) > -1;
      }, implicitRelative, true), matchers = [function(elem, context, xml) {
        var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        checkContext = null;
        return ret;
      }];
      for (; i2 < len; i2++) {
        if (matcher = jQuery.expr.relative[tokens[i2].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = jQuery.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
          if (matcher[jQuery.expando]) {
            j = ++i2;
            for (; j < len; j++) {
              if (jQuery.expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(
              i2 > 1 && elementMatcher(matchers),
              i2 > 1 && toSelector(
                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
              ).replace(rtrimCSS, "$1"),
              matcher,
              i2 < j && matcherFromTokens(tokens.slice(i2, j)),
              j < len && matcherFromTokens(tokens = tokens.slice(j)),
              j < len && toSelector(tokens)
            );
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
        var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
        if (outermost) {
          outermostContext = context == document$1 || context || outermost;
        }
        for (; (elem = elems[i2]) != null; i2++) {
          if (byElement && elem) {
            j = 0;
            if (!context && elem.ownerDocument != document$1) {
              setDocument(elem);
              xml = !documentIsHTML;
            }
            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document$1, xml)) {
                push.call(results, elem);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem = !matcher && elem) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem);
            }
          }
        }
        matchedCount += i2;
        if (bySet && i2 !== matchedCount) {
          j = 0;
          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              while (i2--) {
                if (!(unmatched[i2] || setMatched[i2])) {
                  setMatched[i2] = pop.call(results);
                }
              }
            }
            setMatched = condense(setMatched);
          }
          push.apply(results, setMatched);
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            jQuery.uniqueSort(results);
          }
        }
        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }
        return unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match) {
      var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i2 = match.length;
        while (i2--) {
          cached = matcherFromTokens(match[i2]);
          if (cached[jQuery.expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(
          selector,
          matcherFromGroupMatchers(elementMatchers, setMatchers)
        );
        cached.selector = selector;
      }
      return cached;
    }
    function select(selector, context, results, seed) {
      var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery.expr.relative[tokens[1].type]) {
          context = (jQuery.expr.find.ID(
            unescapeSelector(token.matches[0]),
            context
          ) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i2--) {
          token = tokens[i2];
          if (jQuery.expr.relative[type = token.type]) {
            break;
          }
          if (find2 = jQuery.expr.find[type]) {
            if (seed = find2(
              unescapeSelector(token.matches[0]),
              rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
            )) {
              tokens.splice(i2, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(
        seed,
        context,
        !documentIsHTML,
        results,
        !context || rsibling.test(selector) && testContext(context.parentNode) || context
      );
      return results;
    }
    setDocument();
    jQuery.find = find;
    find.compile = compile;
    find.select = select;
    find.setDocument = setDocument;
    find.tokenize = tokenize;
    return jQuery;
  })
);

// src/mock-doc/selector.ts
function matches(selector, elm) {
  try {
    const r = jquery_default.find(selector, void 0, void 0, [elm]);
    return r.length > 0;
  } catch (e) {
    updateSelectorError(selector, e);
    throw e;
  }
}
function selectOne(selector, elm) {
  try {
    const r = jquery_default.find(selector, elm, void 0, void 0);
    return r[0] || null;
  } catch (e) {
    updateSelectorError(selector, e);
    throw e;
  }
}
function selectAll(selector, elm) {
  try {
    return jquery_default.find(selector, elm, void 0, void 0);
  } catch (e) {
    updateSelectorError(selector, e);
    throw e;
  }
}
var PROBLEMATIC_SELECTORS = [":scope", ":where", ":is"];
function updateSelectorError(selector, e) {
  const selectorsPresent = PROBLEMATIC_SELECTORS.filter((s) => selector.includes(s));
  if (selectorsPresent.length > 0 && e.message) {
    e.message = `At present jQuery does not support the ${humanReadableList(selectorsPresent)} ${selectorsPresent.length === 1 ? "selector" : "selectors"}.
If you need this in your test, consider writing an end-to-end test instead.
` + e.message;
  }
}
function humanReadableList(items) {
  if (items.length <= 1) {
    return items.join("");
  }
  return `${items.slice(0, items.length - 1).join(", ")} and ${items[items.length - 1]}`;
}

// src/mock-doc/serialize-node.ts
function normalizeSerializationOptions(opts = {}) {
  return {
    ...opts,
    outerHtml: typeof opts.outerHtml !== "boolean" ? false : opts.outerHtml,
    ...opts.prettyHtml ? {
      indentSpaces: typeof opts.indentSpaces !== "number" ? 2 : opts.indentSpaces,
      newLines: typeof opts.newLines !== "boolean" ? true : opts.newLines
    } : {
      prettyHtml: false,
      indentSpaces: typeof opts.indentSpaces !== "number" ? 0 : opts.indentSpaces,
      newLines: typeof opts.newLines !== "boolean" ? false : opts.newLines
    },
    approximateLineWidth: typeof opts.approximateLineWidth !== "number" ? -1 : opts.approximateLineWidth,
    removeEmptyAttributes: typeof opts.removeEmptyAttributes !== "boolean" ? true : opts.removeEmptyAttributes,
    removeAttributeQuotes: typeof opts.removeAttributeQuotes !== "boolean" ? false : opts.removeAttributeQuotes,
    removeBooleanAttributeQuotes: typeof opts.removeBooleanAttributeQuotes !== "boolean" ? false : opts.removeBooleanAttributeQuotes,
    removeHtmlComments: typeof opts.removeHtmlComments !== "boolean" ? false : opts.removeHtmlComments,
    serializeShadowRoot: typeof opts.serializeShadowRoot !== "boolean" ? true : opts.serializeShadowRoot,
    fullDocument: typeof opts.fullDocument !== "boolean" ? true : opts.fullDocument
  };
}
function serializeNodeToHtml(elm, serializationOptions = {}) {
  const opts = normalizeSerializationOptions(serializationOptions);
  const output = {
    currentLineWidth: 0,
    indent: 0,
    isWithinBody: false,
    text: []
  };
  let renderedNode = "";
  const children = !opts.fullDocument && elm.body ? Array.from(elm.body.childNodes) : opts.outerHtml ? [elm] : Array.from(getChildNodes(elm));
  for (let i = 0, ii = children.length; i < ii; i++) {
    const child = children[i];
    const chunks = Array.from(streamToHtml(child, opts, output));
    renderedNode += chunks.join("");
  }
  return renderedNode.trim();
}
var shadowRootTag = "mock:shadow-root";
function* streamToHtml(node, opts, output) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const isShadowRoot = node.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */;
  if (node.nodeType === 1 /* ELEMENT_NODE */ || isShadowRoot) {
    const tagName = isShadowRoot ? shadowRootTag : getTagName(node);
    if (tagName === "body") {
      output.isWithinBody = true;
    }
    const ignoreTag = opts.excludeTags != null && opts.excludeTags.includes(tagName);
    if (ignoreTag === false) {
      const isWithinWhitespaceSensitiveNode = opts.newLines || ((_a2 = opts.indentSpaces) != null ? _a2 : 0) > 0 ? isWithinWhitespaceSensitive(node) : false;
      if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
        yield "\n";
        output.currentLineWidth = 0;
      }
      if (((_b = opts.indentSpaces) != null ? _b : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
        for (let i = 0; i < output.indent; i++) {
          yield " ";
        }
        output.currentLineWidth += output.indent;
      }
      const tag = tagName === shadowRootTag ? "template" : tagName;
      yield "<" + tag;
      output.currentLineWidth += tag.length + 1;
      if (tag === "template" && (!node.getAttribute || !node.getAttribute("shadowrootmode")) && /**
       * If the node is a shadow root, we want to add the `shadowrootmode` attribute
       */
      ("host" in node || node.nodeName.toLocaleLowerCase() === shadowRootTag)) {
        const mode = ` shadowrootmode="open"`;
        yield mode;
        output.currentLineWidth += mode.length;
      }
      const attrsLength = node.attributes.length;
      const attributes = opts.prettyHtml && attrsLength > 1 ? cloneAttributes(node.attributes, true) : node.attributes;
      for (let i = 0; i < attrsLength; i++) {
        const attr = attributes.item(i);
        const attrName = attr.name;
        if (attrName === "style") {
          continue;
        }
        let attrValue = attr.value;
        if (opts.removeEmptyAttributes && attrValue === "" && REMOVE_EMPTY_ATTR.has(attrName)) {
          continue;
        }
        const attrNamespaceURI = attr.namespaceURI;
        if (attrNamespaceURI == null) {
          output.currentLineWidth += attrName.length + 1;
          if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
            yield "\n" + attrName;
            output.currentLineWidth = 0;
          } else {
            yield " " + attrName;
          }
        } else if (attrNamespaceURI === "http://www.w3.org/XML/1998/namespace") {
          yield " xml:" + attrName;
          output.currentLineWidth += attrName.length + 5;
        } else if (attrNamespaceURI === "http://www.w3.org/2000/xmlns/") {
          if (attrName !== "xmlns") {
            yield " xmlns:" + attrName;
            output.currentLineWidth += attrName.length + 7;
          } else {
            yield " " + attrName;
            output.currentLineWidth += attrName.length + 1;
          }
        } else if (attrNamespaceURI === XLINK_NS) {
          yield " xlink:" + attrName;
          output.currentLineWidth += attrName.length + 7;
        } else {
          yield " " + attrNamespaceURI + ":" + attrName;
          output.currentLineWidth += attrNamespaceURI.length + attrName.length + 2;
        }
        if (opts.prettyHtml && attrName === "class") {
          attrValue = attr.value = attrValue.split(" ").filter((t) => t !== "").sort().join(" ").trim();
        }
        if (attrValue === "") {
          if (opts.removeBooleanAttributeQuotes && BOOLEAN_ATTR.has(attrName)) {
            continue;
          }
          if (opts.removeEmptyAttributes && attrName.startsWith("data-")) {
            continue;
          }
        }
        if (opts.removeAttributeQuotes && CAN_REMOVE_ATTR_QUOTES.test(attrValue)) {
          yield "=" + escapeString(attrValue, true);
          output.currentLineWidth += attrValue.length + 1;
        } else {
          yield '="' + escapeString(attrValue, true) + '"';
          output.currentLineWidth += attrValue.length + 3;
        }
      }
      if (node.hasAttribute("style")) {
        const cssText = node.style.cssText;
        if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth + cssText.length + 10 > opts.approximateLineWidth) {
          yield `
style="${cssText}">`;
          output.currentLineWidth = 0;
        } else {
          yield ` style="${cssText}">`;
          output.currentLineWidth += cssText.length + 10;
        }
      } else {
        yield ">";
        output.currentLineWidth += 1;
      }
    }
    if (EMPTY_ELEMENTS.has(tagName) === false) {
      const shadowRoot = node.shadowRoot;
      if (shadowRoot != null && opts.serializeShadowRoot) {
        output.indent = output.indent + ((_c = opts.indentSpaces) != null ? _c : 0);
        yield* streamToHtml(shadowRoot, opts, output);
        output.indent = output.indent - ((_d = opts.indentSpaces) != null ? _d : 0);
        const childNodes = getChildNodes(node);
        if (opts.newLines && (childNodes.length === 0 || childNodes.length === 1 && childNodes[0].nodeType === 3 /* TEXT_NODE */ && ((_e = childNodes[0].nodeValue) == null ? void 0 : _e.trim()) === "")) {
          yield "\n";
          output.currentLineWidth = 0;
          for (let i = 0; i < output.indent; i++) {
            yield " ";
          }
          output.currentLineWidth += output.indent;
        }
      }
      if (opts.excludeTagContent == null || opts.excludeTagContent.includes(tagName) === false) {
        const tag = tagName === shadowRootTag ? "template" : tagName;
        const childNodes = tagName === "template" ? node.content.childNodes : getChildNodes(node);
        const childNodeLength = childNodes.length;
        if (childNodeLength > 0) {
          if (childNodeLength === 1 && childNodes[0].nodeType === 3 /* TEXT_NODE */ && (typeof childNodes[0].nodeValue !== "string" || childNodes[0].nodeValue.trim() === "")) {
          } else {
            const isWithinWhitespaceSensitiveNode = opts.newLines || ((_f = opts.indentSpaces) != null ? _f : 0) > 0 ? isWithinWhitespaceSensitive(node) : false;
            if (!isWithinWhitespaceSensitiveNode && ((_g = opts.indentSpaces) != null ? _g : 0) > 0 && ignoreTag === false) {
              output.indent = output.indent + ((_h = opts.indentSpaces) != null ? _h : 0);
            }
            for (let i = 0; i < childNodeLength; i++) {
              const sId = node.attributes.getNamedItem(HYDRATE_ID);
              const isStencilDeclarativeShadowDOM = childNodes[i].nodeName.toLowerCase() === "template" && sId;
              if (isStencilDeclarativeShadowDOM) {
                yield `
${" ".repeat(output.indent)}<!--r.${sId.value}-->`;
                continue;
              }
              yield* streamToHtml(childNodes[i], opts, output);
            }
            if (ignoreTag === false) {
              if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
                yield "\n";
                output.currentLineWidth = 0;
              }
              if (((_i = opts.indentSpaces) != null ? _i : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
                output.indent = output.indent - ((_j = opts.indentSpaces) != null ? _j : 0);
                for (let i = 0; i < output.indent; i++) {
                  yield " ";
                }
                output.currentLineWidth += output.indent;
              }
            }
          }
        }
        if (ignoreTag === false) {
          yield "</" + tag + ">";
          output.currentLineWidth += tag.length + 3;
        }
      }
    }
    if (((_k = opts.approximateLineWidth) != null ? _k : 0) > 0 && STRUCTURE_ELEMENTS.has(tagName)) {
      yield "\n";
      output.currentLineWidth = 0;
    }
    if (tagName === "body") {
      output.isWithinBody = false;
    }
  } else if (node.nodeType === 3 /* TEXT_NODE */) {
    let textContent = node.nodeValue;
    if (typeof textContent === "string") {
      const trimmedTextContent = textContent.trim();
      if (trimmedTextContent === "") {
        if (isWithinWhitespaceSensitive(node)) {
          yield textContent;
          output.currentLineWidth += textContent.length;
        } else if (((_l = opts.approximateLineWidth) != null ? _l : 0) > 0 && !output.isWithinBody) {
        } else if (!opts.prettyHtml) {
          output.currentLineWidth += 1;
          if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
            yield "\n";
            output.currentLineWidth = 0;
          } else {
            yield " ";
          }
        }
      } else {
        const isWithinWhitespaceSensitiveNode = opts.newLines || ((_m = opts.indentSpaces) != null ? _m : 0) > 0 || opts.prettyHtml ? isWithinWhitespaceSensitive(node) : false;
        if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
          yield "\n";
          output.currentLineWidth = 0;
        }
        if (((_n = opts.indentSpaces) != null ? _n : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
          for (let i = 0; i < output.indent; i++) {
            yield " ";
          }
          output.currentLineWidth += output.indent;
        }
        let textContentLength = textContent.length;
        if (textContentLength > 0) {
          const parentTagName = node.parentNode != null && node.parentNode.nodeType === 1 /* ELEMENT_NODE */ ? node.parentNode.nodeName : null;
          if (typeof parentTagName === "string" && NON_ESCAPABLE_CONTENT.has(parentTagName)) {
            if (isWithinWhitespaceSensitive(node)) {
              yield textContent;
            } else {
              yield trimmedTextContent;
              textContentLength = trimmedTextContent.length;
            }
            output.currentLineWidth += textContentLength;
          } else {
            if (opts.prettyHtml && !isWithinWhitespaceSensitiveNode) {
              yield escapeString(textContent.replace(/\s\s+/g, " ").trim(), false);
              output.currentLineWidth += textContentLength;
            } else {
              if (isWithinWhitespaceSensitive(node)) {
                output.currentLineWidth += textContentLength;
              } else {
                if (/\s/.test(textContent.charAt(0))) {
                  textContent = " " + textContent.trimLeft();
                }
                textContentLength = textContent.length;
                if (textContentLength > 1) {
                  if (/\s/.test(textContent.charAt(textContentLength - 1))) {
                    if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth + textContentLength > opts.approximateLineWidth) {
                      textContent = textContent.trimRight() + "\n";
                      output.currentLineWidth = 0;
                    } else {
                      textContent = textContent.trimRight() + " ";
                    }
                  }
                }
                output.currentLineWidth += textContentLength;
              }
              yield escapeString(textContent, false);
            }
          }
        }
      }
    }
  } else if (node.nodeType === 8 /* COMMENT_NODE */) {
    const nodeValue = node.nodeValue;
    const isHydrateAnnotation = (nodeValue == null ? void 0 : nodeValue.startsWith(CONTENT_REF_ID + ".")) || (nodeValue == null ? void 0 : nodeValue.startsWith(ORG_LOCATION_ID + ".")) || (nodeValue == null ? void 0 : nodeValue.startsWith(SLOT_NODE_ID + ".")) || (nodeValue == null ? void 0 : nodeValue.startsWith(TEXT_NODE_ID + "."));
    if (opts.removeHtmlComments && !isHydrateAnnotation) {
      return;
    }
    const isWithinWhitespaceSensitiveNode = opts.newLines || ((_o = opts.indentSpaces) != null ? _o : 0) > 0 ? isWithinWhitespaceSensitive(node) : false;
    if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
      yield "\n";
      output.currentLineWidth = 0;
    }
    if (((_p = opts.indentSpaces) != null ? _p : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
      for (let i = 0; i < output.indent; i++) {
        yield " ";
      }
      output.currentLineWidth += output.indent;
    }
    yield "<!--" + nodeValue + "-->";
    if (nodeValue) {
      output.currentLineWidth += nodeValue.length + 7;
    }
  } else if (node.nodeType === 10 /* DOCUMENT_TYPE_NODE */) {
    yield "<!doctype html>";
  }
}
var AMP_REGEX = /&/g;
var NBSP_REGEX = /\u00a0/g;
var DOUBLE_QUOTE_REGEX = /"/g;
var LT_REGEX = /</g;
var GT_REGEX = />/g;
var CAN_REMOVE_ATTR_QUOTES = /^[^ \t\n\f\r"'`=<>\/\\-]+$/;
function getTagName(element) {
  if (element.namespaceURI === "http://www.w3.org/1999/xhtml") {
    return element.nodeName.toLowerCase();
  } else {
    return element.nodeName;
  }
}
function escapeString(str, attrMode) {
  str = str.replace(AMP_REGEX, "&amp;").replace(NBSP_REGEX, "&nbsp;");
  if (attrMode) {
    return str.replace(DOUBLE_QUOTE_REGEX, "&quot;");
  }
  return str.replace(LT_REGEX, "&lt;").replace(GT_REGEX, "&gt;");
}
function isWithinWhitespaceSensitive(node) {
  let _node = node;
  while (_node == null ? void 0 : _node.nodeName) {
    if (WHITESPACE_SENSITIVE.has(_node.nodeName)) {
      return true;
    }
    _node = _node.parentNode;
  }
  return false;
}
function getChildNodes(node) {
  return node.__childNodes || node.childNodes;
}
var NON_ESCAPABLE_CONTENT = /* @__PURE__ */ new Set([
  "STYLE",
  "SCRIPT",
  "IFRAME",
  "NOSCRIPT",
  "XMP",
  "NOEMBED",
  "NOFRAMES",
  "PLAINTEXT"
]);
var WHITESPACE_SENSITIVE = /* @__PURE__ */ new Set([
  "CODE",
  "OUTPUT",
  "PLAINTEXT",
  "PRE",
  "SCRIPT",
  "TEMPLATE",
  "TEXTAREA"
]);
var EMPTY_ELEMENTS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "trace",
  "track",
  "wbr"
]);
var REMOVE_EMPTY_ATTR = /* @__PURE__ */ new Set(["class", "dir", "id", "lang", "name", "title"]);
var BOOLEAN_ATTR = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "compact",
  "controls",
  "declare",
  "default",
  "defaultchecked",
  "defaultmuted",
  "defaultselected",
  "defer",
  "disabled",
  "enabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nohref",
  "nomodule",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "pauseonexit",
  "readonly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "selected",
  "sortable",
  "truespeed",
  "typemustmatch",
  "visible"
]);
var STRUCTURE_ELEMENTS = /* @__PURE__ */ new Set([
  "html",
  "body",
  "head",
  "iframe",
  "meta",
  "link",
  "base",
  "title",
  "script",
  "style"
]);

// src/mock-doc/node.ts
var MockNode2 = class {
  constructor(ownerDocument, nodeType, nodeName, nodeValue) {
    this.ownerDocument = ownerDocument;
    this.nodeType = nodeType;
    this.nodeName = nodeName;
    this._nodeValue = nodeValue;
    this.parentNode = null;
    this.childNodes = [];
  }
  appendChild(newNode) {
    if (newNode.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
      const nodes = newNode.childNodes.slice();
      for (const child of nodes) {
        this.appendChild(child);
      }
    } else {
      newNode.remove();
      newNode.parentNode = this;
      this.childNodes.push(newNode);
      connectNode(this.ownerDocument, newNode);
    }
    return newNode;
  }
  append(...items) {
    items.forEach((item) => {
      const isNode = typeof item === "object" && item !== null && "nodeType" in item;
      this.appendChild(isNode ? item : this.ownerDocument.createTextNode(String(item)));
    });
  }
  prepend(...items) {
    const firstChild = this.firstChild;
    items.forEach((item) => {
      const isNode = typeof item === "object" && item !== null && "nodeType" in item;
      if (firstChild) {
        this.insertBefore(isNode ? item : this.ownerDocument.createTextNode(String(item)), firstChild);
      }
    });
  }
  cloneNode(deep) {
    throw new Error(`invalid node type to clone: ${this.nodeType}, deep: ${deep}`);
  }
  compareDocumentPosition(_other) {
    return -1;
  }
  get firstChild() {
    return this.childNodes[0] || null;
  }
  insertBefore(newNode, referenceNode) {
    if (newNode.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
      for (let i = 0, ii = newNode.childNodes.length; i < ii; i++) {
        insertBefore(this, newNode.childNodes[i], referenceNode);
      }
    } else {
      insertBefore(this, newNode, referenceNode);
    }
    return newNode;
  }
  get isConnected() {
    let node = this;
    while (node != null) {
      if (node.nodeType === 9 /* DOCUMENT_NODE */) {
        return true;
      }
      node = node.parentNode;
      if (node != null && node.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
        node = node.host;
      }
    }
    return false;
  }
  isSameNode(node) {
    return this === node;
  }
  get lastChild() {
    return this.childNodes[this.childNodes.length - 1] || null;
  }
  get nextSibling() {
    if (this.parentNode != null) {
      const index = this.parentNode.childNodes.indexOf(this) + 1;
      return this.parentNode.childNodes[index] || null;
    }
    return null;
  }
  get nodeValue() {
    var _a2;
    return (_a2 = this._nodeValue) != null ? _a2 : "";
  }
  set nodeValue(value) {
    this._nodeValue = value;
  }
  get parentElement() {
    return this.parentNode || null;
  }
  set parentElement(value) {
    this.parentNode = value;
  }
  get previousSibling() {
    if (this.parentNode != null) {
      const index = this.parentNode.childNodes.indexOf(this) - 1;
      return this.parentNode.childNodes[index] || null;
    }
    return null;
  }
  contains(otherNode) {
    if (otherNode === this) {
      return true;
    }
    const childNodes = Array.from(this.childNodes);
    if (childNodes.includes(otherNode)) {
      return true;
    }
    return childNodes.some((node) => this.contains.bind(node)(otherNode));
  }
  removeChild(childNode) {
    const index = this.childNodes.indexOf(childNode);
    if (index > -1) {
      this.childNodes.splice(index, 1);
      if (this.nodeType === 1 /* ELEMENT_NODE */) {
        const wasConnected = this.isConnected;
        childNode.parentNode = null;
        if (wasConnected === true) {
          disconnectNode(childNode);
        }
      } else {
        childNode.parentNode = null;
      }
    } else {
      throw new Error(`node not found within childNodes during removeChild`);
    }
    return childNode;
  }
  remove() {
    if (this.parentNode != null) {
      this.__parentNode ? this.__parentNode.removeChild(this) : this.parentNode.removeChild(this);
    }
  }
  replaceChild(newChild, oldChild) {
    if (oldChild.parentNode === this) {
      this.insertBefore(newChild, oldChild);
      oldChild.remove();
      return newChild;
    }
    return null;
  }
  get textContent() {
    var _a2;
    return (_a2 = this._nodeValue) != null ? _a2 : "";
  }
  set textContent(value) {
    this._nodeValue = String(value);
  }
};
MockNode2.ELEMENT_NODE = 1;
MockNode2.TEXT_NODE = 3;
MockNode2.PROCESSING_INSTRUCTION_NODE = 7;
MockNode2.COMMENT_NODE = 8;
MockNode2.DOCUMENT_NODE = 9;
MockNode2.DOCUMENT_TYPE_NODE = 10;
MockNode2.DOCUMENT_FRAGMENT_NODE = 11;
var MockNodeList = class {
  constructor(ownerDocument, childNodes, length) {
    this.ownerDocument = ownerDocument;
    this.childNodes = childNodes;
    this.length = length;
  }
};
var MockElement = class extends MockNode2 {
  attachInternals() {
    return new Proxy({}, {
      get: function(_target, prop, _receiver) {
        if ("process" in globalThis && globalThis.process.env.__STENCIL_SPEC_TESTS__) {
          console.error(
            `NOTE: Property ${String(prop)} was accessed on ElementInternals, but this property is not implemented.
  Testing components with ElementInternals is fully supported in e2e tests.`
          );
        }
      }
    });
  }
  constructor(ownerDocument, nodeName, namespaceURI = null) {
    super(ownerDocument, 1 /* ELEMENT_NODE */, typeof nodeName === "string" ? nodeName : null, null);
    this.__namespaceURI = namespaceURI;
    this.__shadowRoot = null;
    this.__attributeMap = null;
  }
  addEventListener(type, handler) {
    addEventListener(this, type, handler);
  }
  attachShadow(_opts) {
    const shadowRoot = this.ownerDocument.createDocumentFragment();
    this.shadowRoot = shadowRoot;
    return shadowRoot;
  }
  blur() {
    dispatchEvent(
      this,
      new MockFocusEvent("blur", { relatedTarget: null, bubbles: true, cancelable: true, composed: true })
    );
  }
  get localName() {
    if (!this.nodeName) {
      throw new Error(`Can't compute elements localName without nodeName`);
    }
    return this.nodeName.toLocaleLowerCase();
  }
  get namespaceURI() {
    return this.__namespaceURI;
  }
  get shadowRoot() {
    return this.__shadowRoot || null;
  }
  /**
   * Set shadow root for element
   * @param shadowRoot - ShadowRoot to set
   */
  set shadowRoot(shadowRoot) {
    if (shadowRoot != null) {
      shadowRoot.host = this;
      this.__shadowRoot = shadowRoot;
    } else {
      delete this.__shadowRoot;
    }
  }
  get attributes() {
    if (this.__attributeMap == null) {
      const attrMap = createAttributeProxy(false);
      this.__attributeMap = attrMap;
      return attrMap;
    }
    return this.__attributeMap;
  }
  set attributes(attrs) {
    this.__attributeMap = attrs;
  }
  get children() {
    return this.childNodes.filter((n) => n.nodeType === 1 /* ELEMENT_NODE */);
  }
  get childElementCount() {
    return this.childNodes.filter((n) => n.nodeType === 1 /* ELEMENT_NODE */).length;
  }
  get className() {
    return this.getAttributeNS(null, "class") || "";
  }
  set className(value) {
    this.setAttributeNS(null, "class", value);
  }
  get classList() {
    return new MockClassList(this);
  }
  click() {
    dispatchEvent(this, new MockEvent("click", { bubbles: true, cancelable: true, composed: true }));
  }
  cloneNode(_deep) {
    return null;
  }
  closest(selector) {
    let elm = this;
    while (elm != null) {
      if (elm.matches(selector)) {
        return elm;
      }
      elm = elm.parentNode;
    }
    return null;
  }
  get dataset() {
    return dataset(this);
  }
  get dir() {
    return this.getAttributeNS(null, "dir") || "";
  }
  set dir(value) {
    this.setAttributeNS(null, "dir", value);
  }
  dispatchEvent(ev) {
    return dispatchEvent(this, ev);
  }
  get firstElementChild() {
    return this.children[0] || null;
  }
  focus(_options) {
    dispatchEvent(
      this,
      new MockFocusEvent("focus", { relatedTarget: null, bubbles: true, cancelable: true, composed: true })
    );
  }
  getAttribute(attrName) {
    if (attrName === "style") {
      if (this.__style != null && this.__style.length > 0) {
        return this.style.cssText;
      }
      return null;
    }
    const attr = this.attributes.getNamedItem(attrName);
    if (attr != null) {
      return attr.value;
    }
    return null;
  }
  getAttributeNS(namespaceURI, attrName) {
    const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
    if (attr != null) {
      return attr.value;
    }
    return null;
  }
  getAttributeNode(attrName) {
    if (!this.hasAttribute(attrName)) {
      return null;
    }
    return new MockAttr(attrName, this.getAttribute(attrName));
  }
  getBoundingClientRect() {
    return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
  }
  getRootNode(opts) {
    const isComposed = opts != null && opts.composed === true;
    let node = this;
    while (node.parentNode != null) {
      node = node.parentNode;
      if (isComposed === true && node.parentNode == null && node.host != null) {
        node = node.host;
      }
    }
    return node;
  }
  get draggable() {
    return this.getAttributeNS(null, "draggable") === "true";
  }
  set draggable(value) {
    this.setAttributeNS(null, "draggable", value);
  }
  hasChildNodes() {
    return this.childNodes.length > 0;
  }
  get id() {
    return this.getAttributeNS(null, "id") || "";
  }
  set id(value) {
    this.setAttributeNS(null, "id", value);
  }
  get innerHTML() {
    if (this.childNodes.length === 0) {
      return "";
    }
    return serializeNodeToHtml(this, {
      newLines: false,
      indentSpaces: 0
    });
  }
  set innerHTML(html) {
    var _a2;
    if (NON_ESCAPABLE_CONTENT.has((_a2 = this.nodeName) != null ? _a2 : "") === true) {
      setTextContent(this, html);
    } else {
      for (let i = this.childNodes.length - 1; i >= 0; i--) {
        this.removeChild(this.childNodes[i]);
      }
      if (typeof html === "string") {
        const frag = parseFragmentUtil(this.ownerDocument, html);
        while (frag.childNodes.length > 0) {
          this.appendChild(frag.childNodes[0]);
        }
      }
    }
  }
  get innerText() {
    const text = [];
    getTextContent(this.childNodes, text);
    return text.join("");
  }
  set innerText(value) {
    setTextContent(this, value);
  }
  insertAdjacentElement(position, elm) {
    if (position === "beforebegin" && this.parentNode) {
      insertBefore(this.parentNode, elm, this);
    } else if (position === "afterbegin") {
      this.prepend(elm);
    } else if (position === "beforeend") {
      this.appendChild(elm);
    } else if (position === "afterend" && this.parentNode) {
      insertBefore(this.parentNode, elm, this.nextSibling);
    }
    return elm;
  }
  insertAdjacentHTML(position, html) {
    const frag = parseFragmentUtil(this.ownerDocument, html);
    if (position === "beforebegin") {
      while (frag.childNodes.length > 0) {
        if (this.parentNode) {
          insertBefore(this.parentNode, frag.childNodes[0], this);
        }
      }
    } else if (position === "afterbegin") {
      while (frag.childNodes.length > 0) {
        this.prepend(frag.childNodes[frag.childNodes.length - 1]);
      }
    } else if (position === "beforeend") {
      while (frag.childNodes.length > 0) {
        this.appendChild(frag.childNodes[0]);
      }
    } else if (position === "afterend") {
      while (frag.childNodes.length > 0) {
        if (this.parentNode) {
          insertBefore(this.parentNode, frag.childNodes[frag.childNodes.length - 1], this.nextSibling);
        }
      }
    }
  }
  insertAdjacentText(position, text) {
    const elm = this.ownerDocument.createTextNode(text);
    if (position === "beforebegin" && this.parentNode) {
      insertBefore(this.parentNode, elm, this);
    } else if (position === "afterbegin") {
      this.prepend(elm);
    } else if (position === "beforeend") {
      this.appendChild(elm);
    } else if (position === "afterend" && this.parentNode) {
      insertBefore(this.parentNode, elm, this.nextSibling);
    }
  }
  hasAttribute(attrName) {
    if (attrName === "style") {
      return this.__style != null && this.__style.length > 0;
    }
    return this.getAttribute(attrName) !== null;
  }
  hasAttributeNS(namespaceURI, name) {
    return this.getAttributeNS(namespaceURI, name) !== null;
  }
  get hidden() {
    return this.hasAttributeNS(null, "hidden");
  }
  set hidden(isHidden) {
    if (isHidden === true) {
      this.setAttributeNS(null, "hidden", "");
    } else {
      this.removeAttributeNS(null, "hidden");
    }
  }
  get lang() {
    return this.getAttributeNS(null, "lang") || "";
  }
  set lang(value) {
    this.setAttributeNS(null, "lang", value);
  }
  get lastElementChild() {
    const children = this.children;
    return children[children.length - 1] || null;
  }
  matches(selector) {
    return matches(selector, this);
  }
  get nextElementSibling() {
    const parentElement = this.parentElement;
    if (parentElement != null && (parentElement.nodeType === 1 /* ELEMENT_NODE */ || parentElement.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */ || parentElement.nodeType === 9 /* DOCUMENT_NODE */)) {
      const children = parentElement.children;
      const index = children.indexOf(this) + 1;
      return parentElement.children[index] || null;
    }
    return null;
  }
  get outerHTML() {
    return serializeNodeToHtml(this, {
      newLines: false,
      outerHtml: true,
      indentSpaces: 0
    });
  }
  get previousElementSibling() {
    const parentElement = this.parentElement;
    if (parentElement != null && (parentElement.nodeType === 1 /* ELEMENT_NODE */ || parentElement.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */ || parentElement.nodeType === 9 /* DOCUMENT_NODE */)) {
      const children = parentElement.children;
      const index = children.indexOf(this) - 1;
      return parentElement.children[index] || null;
    }
    return null;
  }
  getElementsByClassName(classNames) {
    const classes = classNames.trim().split(" ").filter((c) => c.length > 0);
    const results = [];
    getElementsByClassName(this, classes, results);
    return results;
  }
  getElementsByTagName(tagName) {
    const results = [];
    getElementsByTagName(this, tagName.toLowerCase(), results);
    return results;
  }
  querySelector(selector) {
    return selectOne(selector, this);
  }
  querySelectorAll(selector) {
    return selectAll(selector, this);
  }
  removeAttribute(attrName) {
    if (attrName === "style") {
      delete this.__style;
    } else {
      const attr = this.attributes.getNamedItem(attrName);
      if (attr != null) {
        this.attributes.removeNamedItemNS(attr);
        if (checkAttributeChanged(this) === true) {
          attributeChanged(this, attrName, attr.value, null);
        }
      }
    }
  }
  removeAttributeNS(namespaceURI, attrName) {
    const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
    if (attr != null) {
      this.attributes.removeNamedItemNS(attr);
      if (checkAttributeChanged(this) === true) {
        attributeChanged(this, attrName, attr.value, null);
      }
    }
  }
  removeEventListener(type, handler) {
    removeEventListener(this, type, handler);
  }
  setAttribute(attrName, value) {
    if (attrName === "style") {
      this.style = value;
    } else {
      const attributes = this.attributes;
      let attr = attributes.getNamedItem(attrName);
      const checkAttrChanged = checkAttributeChanged(this);
      if (attr != null) {
        if (checkAttrChanged === true) {
          const oldValue = attr.value;
          attr.value = value;
          if (oldValue !== attr.value) {
            attributeChanged(this, attr.name, oldValue, attr.value);
          }
        } else {
          attr.value = value;
        }
      } else {
        if (attributes.caseInsensitive) {
          attrName = attrName.toLowerCase();
        }
        attr = new MockAttr(attrName, value);
        attributes.__items.push(attr);
        if (checkAttrChanged === true) {
          attributeChanged(this, attrName, null, attr.value);
        }
      }
    }
  }
  setAttributeNS(namespaceURI, attrName, value) {
    const attributes = this.attributes;
    let attr = attributes.getNamedItemNS(namespaceURI, attrName);
    const checkAttrChanged = checkAttributeChanged(this);
    if (attr != null) {
      if (checkAttrChanged === true) {
        const oldValue = attr.value;
        attr.value = value;
        if (oldValue !== attr.value) {
          attributeChanged(this, attr.name, oldValue, attr.value);
        }
      } else {
        attr.value = value;
      }
    } else {
      attr = new MockAttr(attrName, value, namespaceURI);
      attributes.__items.push(attr);
      if (checkAttrChanged === true) {
        attributeChanged(this, attrName, null, attr.value);
      }
    }
  }
  get style() {
    if (this.__style == null) {
      this.__style = createCSSStyleDeclaration();
    }
    return this.__style;
  }
  set style(val) {
    if (typeof val === "string") {
      if (this.__style == null) {
        this.__style = createCSSStyleDeclaration();
      }
      this.__style.cssText = val;
    } else {
      this.__style = val;
    }
  }
  get tabIndex() {
    return parseInt(this.getAttributeNS(null, "tabindex") || "-1", 10);
  }
  set tabIndex(value) {
    this.setAttributeNS(null, "tabindex", value);
  }
  get tagName() {
    var _a2;
    return (_a2 = this.nodeName) != null ? _a2 : "";
  }
  set tagName(value) {
    this.nodeName = value;
  }
  get textContent() {
    const text = [];
    getTextContent(this.childNodes, text);
    return text.join("");
  }
  set textContent(value) {
    setTextContent(this, value);
  }
  get title() {
    return this.getAttributeNS(null, "title") || "";
  }
  set title(value) {
    this.setAttributeNS(null, "title", value);
  }
  animate() {
  }
  onanimationstart() {
  }
  onanimationend() {
  }
  onanimationiteration() {
  }
  onabort() {
  }
  onauxclick() {
  }
  onbeforecopy() {
  }
  onbeforecut() {
  }
  onbeforepaste() {
  }
  onblur() {
  }
  oncancel() {
  }
  oncanplay() {
  }
  oncanplaythrough() {
  }
  onchange() {
  }
  onclick() {
  }
  onclose() {
  }
  oncontextmenu() {
  }
  oncopy() {
  }
  oncuechange() {
  }
  oncut() {
  }
  ondblclick() {
  }
  ondrag() {
  }
  ondragend() {
  }
  ondragenter() {
  }
  ondragleave() {
  }
  ondragover() {
  }
  ondragstart() {
  }
  ondrop() {
  }
  ondurationchange() {
  }
  onemptied() {
  }
  onended() {
  }
  onerror() {
  }
  onfocus() {
  }
  onfocusin() {
  }
  onfocusout() {
  }
  onformdata() {
  }
  onfullscreenchange() {
  }
  onfullscreenerror() {
  }
  ongotpointercapture() {
  }
  oninput() {
  }
  oninvalid() {
  }
  onkeydown() {
  }
  onkeypress() {
  }
  onkeyup() {
  }
  onload() {
  }
  onloadeddata() {
  }
  onloadedmetadata() {
  }
  onloadstart() {
  }
  onlostpointercapture() {
  }
  onmousedown() {
  }
  onmouseenter() {
  }
  onmouseleave() {
  }
  onmousemove() {
  }
  onmouseout() {
  }
  onmouseover() {
  }
  onmouseup() {
  }
  onmousewheel() {
  }
  onpaste() {
  }
  onpause() {
  }
  onplay() {
  }
  onplaying() {
  }
  onpointercancel() {
  }
  onpointerdown() {
  }
  onpointerenter() {
  }
  onpointerleave() {
  }
  onpointermove() {
  }
  onpointerout() {
  }
  onpointerover() {
  }
  onpointerup() {
  }
  onprogress() {
  }
  onratechange() {
  }
  onreset() {
  }
  onresize() {
  }
  onscroll() {
  }
  onsearch() {
  }
  onseeked() {
  }
  onseeking() {
  }
  onselect() {
  }
  onselectstart() {
  }
  onstalled() {
  }
  onsubmit() {
  }
  onsuspend() {
  }
  ontimeupdate() {
  }
  ontoggle() {
  }
  onvolumechange() {
  }
  onwaiting() {
  }
  onwebkitfullscreenchange() {
  }
  onwebkitfullscreenerror() {
  }
  onwheel() {
  }
  requestFullscreen() {
  }
  scrollBy() {
  }
  scrollTo() {
  }
  scrollIntoView() {
  }
  toString(opts) {
    return serializeNodeToHtml(this, opts);
  }
};
function getElementsByClassName(elm, classNames, foundElms) {
  const children = elm.children;
  for (let i = 0, ii = children.length; i < ii; i++) {
    const childElm = children[i];
    for (let j = 0, jj = classNames.length; j < jj; j++) {
      if (childElm.classList.contains(classNames[j])) {
        foundElms.push(childElm);
      }
    }
    getElementsByClassName(childElm, classNames, foundElms);
  }
}
function getElementsByTagName(elm, tagName, foundElms) {
  var _a2;
  const children = elm.children;
  for (let i = 0, ii = children.length; i < ii; i++) {
    const childElm = children[i];
    if (tagName === "*" || ((_a2 = childElm.nodeName) != null ? _a2 : "").toLowerCase() === tagName) {
      foundElms.push(childElm);
    }
    getElementsByTagName(childElm, tagName, foundElms);
  }
}
function resetElement(elm) {
  resetEventListeners(elm);
  delete elm.__attributeMap;
  delete elm.__shadowRoot;
  delete elm.__style;
}
function insertBefore(parentNode, newNode, referenceNode) {
  if (newNode !== referenceNode) {
    newNode.remove();
    newNode.parentNode = parentNode;
    newNode.ownerDocument = parentNode.ownerDocument;
    if (referenceNode != null) {
      const index = parentNode.childNodes.indexOf(referenceNode);
      if (index > -1) {
        parentNode.childNodes.splice(index, 0, newNode);
      } else {
        throw new Error(`referenceNode not found in parentNode.childNodes`);
      }
    } else {
      parentNode.childNodes.push(newNode);
    }
    connectNode(parentNode.ownerDocument, newNode);
  }
  return newNode;
}
var MockHTMLElement = class extends MockElement {
  constructor(ownerDocument, nodeName) {
    super(ownerDocument, typeof nodeName === "string" ? nodeName.toUpperCase() : null);
    this.__namespaceURI = "http://www.w3.org/1999/xhtml";
  }
  get tagName() {
    var _a2;
    return (_a2 = this.nodeName) != null ? _a2 : "";
  }
  set tagName(value) {
    this.nodeName = value;
  }
  /**
   * A node’s parent of type Element is known as its parent element.
   * If the node has a parent of a different type, its parent element
   * is null.
   * @returns MockElement
   */
  get parentElement() {
    if (this.nodeName === "HTML") {
      return null;
    }
    return super.parentElement;
  }
  get attributes() {
    if (this.__attributeMap == null) {
      const attrMap = createAttributeProxy(true);
      this.__attributeMap = attrMap;
      return attrMap;
    }
    return this.__attributeMap;
  }
  set attributes(attrs) {
    this.__attributeMap = attrs;
  }
};
var MockTextNode = class _MockTextNode extends MockNode2 {
  constructor(ownerDocument, text) {
    super(ownerDocument, 3 /* TEXT_NODE */, "#text" /* TEXT_NODE */, text);
  }
  cloneNode(_deep) {
    return new _MockTextNode(null, this.nodeValue);
  }
  get textContent() {
    return this.nodeValue;
  }
  set textContent(text) {
    this.nodeValue = text;
  }
  get data() {
    return this.nodeValue;
  }
  set data(text) {
    this.nodeValue = text;
  }
  get wholeText() {
    if (this.parentNode != null) {
      const text = [];
      for (let i = 0, ii = this.parentNode.childNodes.length; i < ii; i++) {
        const childNode = this.parentNode.childNodes[i];
        if (childNode.nodeType === 3 /* TEXT_NODE */) {
          text.push(childNode.nodeValue);
        }
      }
      return text.join("");
    }
    return this.nodeValue;
  }
};
function getTextContent(childNodes, text) {
  for (let i = 0, ii = childNodes.length; i < ii; i++) {
    const childNode = childNodes[i];
    if (childNode.nodeType === 3 /* TEXT_NODE */) {
      text.push(childNode.nodeValue);
    } else if (childNode.nodeType === 1 /* ELEMENT_NODE */) {
      getTextContent(childNode.childNodes, text);
    }
  }
}
function setTextContent(elm, text) {
  for (let i = elm.childNodes.length - 1; i >= 0; i--) {
    elm.removeChild(elm.childNodes[i]);
  }
  const textNode = new MockTextNode(elm.ownerDocument, text);
  elm.appendChild(textNode);
}

// src/mock-doc/comment-node.ts
var MockComment = class _MockComment extends MockNode2 {
  constructor(ownerDocument, data) {
    super(ownerDocument, 8 /* COMMENT_NODE */, "#comment" /* COMMENT_NODE */, data);
  }
  cloneNode(_deep) {
    return new _MockComment(null, this.nodeValue);
  }
  get textContent() {
    return this.nodeValue;
  }
  set textContent(text) {
    this.nodeValue = text;
  }
};

// src/mock-doc/document-fragment.ts
var MockDocumentFragment = class _MockDocumentFragment extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, null);
    this.nodeName = "#document-fragment" /* DOCUMENT_FRAGMENT_NODE */;
    this.nodeType = 11 /* DOCUMENT_FRAGMENT_NODE */;
  }
  getElementById(id) {
    return getElementById(this, id);
  }
  cloneNode(deep) {
    const cloned = new _MockDocumentFragment(null);
    if (deep) {
      for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
        const childNode = this.childNodes[i];
        if (childNode.nodeType === 1 /* ELEMENT_NODE */ || childNode.nodeType === 3 /* TEXT_NODE */ || childNode.nodeType === 8 /* COMMENT_NODE */) {
          const clonedChildNode = this.childNodes[i].cloneNode(true);
          cloned.appendChild(clonedChildNode);
        }
      }
    }
    return cloned;
  }
};

// src/mock-doc/document-type-node.ts
var MockDocumentTypeNode = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "!DOCTYPE");
    this.nodeType = 10 /* DOCUMENT_TYPE_NODE */;
    this.setAttribute("html", "");
  }
};

// src/mock-doc/css-style-sheet.ts
var MockCSSRule = class {
  constructor(parentStyleSheet) {
    this.parentStyleSheet = parentStyleSheet;
    this.cssText = "";
    this.type = 0;
  }
};
var MockCSSStyleSheet = class {
  constructor(ownerNode) {
    this.type = "text/css";
    this.parentStyleSheet = null;
    this.cssRules = [];
    this.ownerNode = ownerNode;
  }
  get rules() {
    return this.cssRules;
  }
  set rules(rules) {
    this.cssRules = rules;
  }
  deleteRule(index) {
    if (index >= 0 && index < this.cssRules.length) {
      this.cssRules.splice(index, 1);
      updateStyleTextNode(this.ownerNode);
    }
  }
  insertRule(rule, index = 0) {
    if (typeof index !== "number") {
      index = 0;
    }
    if (index < 0) {
      index = 0;
    }
    if (index > this.cssRules.length) {
      index = this.cssRules.length;
    }
    const cssRule = new MockCSSRule(this);
    cssRule.cssText = rule;
    this.cssRules.splice(index, 0, cssRule);
    updateStyleTextNode(this.ownerNode);
    return index;
  }
};
function getStyleElementText(styleElm) {
  const output = [];
  for (let i = 0; i < styleElm.childNodes.length; i++) {
    output.push(styleElm.childNodes[i].nodeValue);
  }
  return output.join("");
}
function setStyleElementText(styleElm, text) {
  const sheet = styleElm.sheet;
  sheet.cssRules.length = 0;
  sheet.insertRule(text);
  updateStyleTextNode(styleElm);
}
function updateStyleTextNode(styleElm) {
  const childNodeLen = styleElm.childNodes.length;
  if (childNodeLen > 1) {
    for (let i = childNodeLen - 1; i >= 1; i--) {
      styleElm.removeChild(styleElm.childNodes[i]);
    }
  } else if (childNodeLen < 1) {
    styleElm.appendChild(styleElm.ownerDocument.createTextNode(""));
  }
  const textNode = styleElm.childNodes[0];
  textNode.nodeValue = styleElm.sheet.cssRules.map((r) => r.cssText).join("\n");
}

// src/mock-doc/element.ts
function createElement(ownerDocument, tagName) {
  if (typeof tagName !== "string" || tagName === "" || !/^[a-z0-9-_:]+$/i.test(tagName)) {
    throw new Error(`The tag name provided (${tagName}) is not a valid name.`);
  }
  tagName = tagName.toLowerCase();
  switch (tagName) {
    case "a":
      return new MockAnchorElement(ownerDocument);
    case "base":
      return new MockBaseElement(ownerDocument);
    case "button":
      return new MockButtonElement(ownerDocument);
    case "canvas":
      return new MockCanvasElement(ownerDocument);
    case "form":
      return new MockFormElement(ownerDocument);
    case "img":
      return new MockImageElement(ownerDocument);
    case "input":
      return new MockInputElement(ownerDocument);
    case "link":
      return new MockLinkElement(ownerDocument);
    case "meta":
      return new MockMetaElement(ownerDocument);
    case "script":
      return new MockScriptElement(ownerDocument);
    case "slot":
      return new MockSlotElement(ownerDocument);
    case "slot-fb":
      return new MockHTMLElement(ownerDocument, tagName);
    case "style":
      return new MockStyleElement(ownerDocument);
    case "template":
      return new MockTemplateElement(ownerDocument);
    case "title":
      return new MockTitleElement(ownerDocument);
    case "ul":
      return new MockUListElement(ownerDocument);
  }
  if (ownerDocument != null && tagName.includes("-")) {
    const win2 = ownerDocument.defaultView;
    if (win2 != null && win2.customElements != null) {
      return createCustomElement(win2.customElements, ownerDocument, tagName);
    }
  }
  return new MockHTMLElement(ownerDocument, tagName);
}
function createElementNS(ownerDocument, namespaceURI, tagName) {
  if (namespaceURI === "http://www.w3.org/1999/xhtml") {
    return createElement(ownerDocument, tagName);
  } else if (namespaceURI === "http://www.w3.org/2000/svg") {
    switch (tagName.toLowerCase()) {
      case "text":
      case "tspan":
      case "tref":
      case "altglyph":
      case "textpath":
        return new MockSVGTextContentElement(ownerDocument, tagName);
      case "circle":
      case "ellipse":
      case "image":
      case "line":
      case "path":
      case "polygon":
      case "polyline":
      case "rect":
      case "use":
        return new MockSVGGraphicsElement(ownerDocument, tagName);
      case "svg":
        return new MockSVGSVGElement(ownerDocument, tagName);
      default:
        return new MockSVGElement(ownerDocument, tagName);
    }
  } else {
    return new MockElement(ownerDocument, tagName, namespaceURI);
  }
}
var MockAnchorElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "a");
  }
  get href() {
    return fullUrl(this, "href");
  }
  set href(value) {
    this.setAttribute("href", value);
  }
  get pathname() {
    if (!this.href) {
      return "";
    }
    return new URL(this.href).pathname;
  }
};
var MockButtonElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "button");
  }
};
patchPropAttributes(
  MockButtonElement.prototype,
  {
    type: String
  },
  {
    type: "submit"
  }
);
Object.defineProperty(MockButtonElement.prototype, "form", {
  get() {
    return this.hasAttribute("form") ? this.getAttribute("form") : null;
  }
});
var MockImageElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "img");
  }
  get draggable() {
    return this.getAttributeNS(null, "draggable") !== "false";
  }
  set draggable(value) {
    this.setAttributeNS(null, "draggable", value);
  }
  get src() {
    return fullUrl(this, "src");
  }
  set src(value) {
    this.setAttribute("src", value);
  }
};
patchPropAttributes(MockImageElement.prototype, {
  height: Number,
  width: Number
});
var MockInputElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "input");
  }
  get list() {
    const listId = this.getAttribute("list");
    if (listId) {
      return this.ownerDocument.getElementById(listId);
    }
    return null;
  }
};
patchPropAttributes(
  MockInputElement.prototype,
  {
    accept: String,
    autocomplete: String,
    autofocus: Boolean,
    capture: String,
    checked: Boolean,
    disabled: Boolean,
    form: String,
    formaction: String,
    formenctype: String,
    formmethod: String,
    formnovalidate: String,
    formtarget: String,
    height: Number,
    inputmode: String,
    max: String,
    maxLength: Number,
    min: String,
    minLength: Number,
    multiple: Boolean,
    name: String,
    pattern: String,
    placeholder: String,
    required: Boolean,
    readOnly: Boolean,
    size: Number,
    spellCheck: Boolean,
    src: String,
    step: String,
    type: String,
    value: String,
    width: Number
  },
  {
    type: "text"
  }
);
var MockFormElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "form");
  }
};
patchPropAttributes(MockFormElement.prototype, {
  name: String
});
var MockLinkElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "link");
  }
  get href() {
    return fullUrl(this, "href");
  }
  set href(value) {
    this.setAttribute("href", value);
  }
};
patchPropAttributes(MockLinkElement.prototype, {
  crossorigin: String,
  media: String,
  rel: String,
  type: String
});
var MockMetaElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "meta");
  }
};
patchPropAttributes(MockMetaElement.prototype, {
  charset: String,
  content: String,
  name: String
});
var MockScriptElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "script");
  }
  get src() {
    return fullUrl(this, "src");
  }
  set src(value) {
    this.setAttribute("src", value);
  }
};
patchPropAttributes(MockScriptElement.prototype, {
  type: String
});
var MockDOMMatrix = class _MockDOMMatrix {
  constructor() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
    this.m11 = 1;
    this.m12 = 0;
    this.m13 = 0;
    this.m14 = 0;
    this.m21 = 0;
    this.m22 = 1;
    this.m23 = 0;
    this.m24 = 0;
    this.m31 = 0;
    this.m32 = 0;
    this.m33 = 1;
    this.m34 = 0;
    this.m41 = 0;
    this.m42 = 0;
    this.m43 = 0;
    this.m44 = 1;
    this.is2D = true;
    this.isIdentity = true;
  }
  static fromMatrix() {
    return new _MockDOMMatrix();
  }
  inverse() {
    return new _MockDOMMatrix();
  }
  flipX() {
    return new _MockDOMMatrix();
  }
  flipY() {
    return new _MockDOMMatrix();
  }
  multiply() {
    return new _MockDOMMatrix();
  }
  rotate() {
    return new _MockDOMMatrix();
  }
  rotateAxisAngle() {
    return new _MockDOMMatrix();
  }
  rotateFromVector() {
    return new _MockDOMMatrix();
  }
  scale() {
    return new _MockDOMMatrix();
  }
  scaleNonUniform() {
    return new _MockDOMMatrix();
  }
  skewX() {
    return new _MockDOMMatrix();
  }
  skewY() {
    return new _MockDOMMatrix();
  }
  toJSON() {
  }
  toString() {
  }
  transformPoint() {
    return new MockDOMPoint();
  }
  translate() {
    return new _MockDOMMatrix();
  }
};
var MockDOMPoint = class {
  constructor() {
    this.w = 1;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  toJSON() {
  }
  matrixTransform() {
    return new MockDOMMatrix();
  }
};
var MockSVGRect = class {
  constructor() {
    this.height = 10;
    this.width = 10;
    this.x = 0;
    this.y = 0;
  }
};
var MockStyleElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "style");
    this.sheet = new MockCSSStyleSheet(this);
  }
  get innerHTML() {
    return getStyleElementText(this);
  }
  set innerHTML(value) {
    setStyleElementText(this, value);
  }
  get innerText() {
    return getStyleElementText(this);
  }
  set innerText(value) {
    setStyleElementText(this, value);
  }
  get textContent() {
    return getStyleElementText(this);
  }
  set textContent(value) {
    setStyleElementText(this, value);
  }
};
var MockSVGElement = class extends MockElement {
  constructor() {
    super(...arguments);
    this.__namespaceURI = "http://www.w3.org/2000/svg";
  }
  // SVGElement properties and methods
  get ownerSVGElement() {
    return null;
  }
  get viewportElement() {
    return null;
  }
  onunload() {
  }
  // SVGGeometryElement properties and methods
  get pathLength() {
    return 0;
  }
  isPointInFill(_pt) {
    return false;
  }
  isPointInStroke(_pt) {
    return false;
  }
  getTotalLength() {
    return 0;
  }
};
var MockSVGGraphicsElement = class extends MockSVGElement {
  getBBox(_options) {
    return new MockSVGRect();
  }
  getCTM() {
    return new MockDOMMatrix();
  }
  getScreenCTM() {
    return new MockDOMMatrix();
  }
};
var MockSVGSVGElement = class extends MockSVGGraphicsElement {
  createSVGPoint() {
    return new MockDOMPoint();
  }
};
var MockSVGTextContentElement = class extends MockSVGGraphicsElement {
  getComputedTextLength() {
    return 0;
  }
};
var MockBaseElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "base");
  }
  get href() {
    return fullUrl(this, "href");
  }
  set href(value) {
    this.setAttribute("href", value);
  }
};
var MockTemplateElement = class _MockTemplateElement extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "template");
    this.content = new MockDocumentFragment(ownerDocument);
  }
  get innerHTML() {
    return this.content.innerHTML;
  }
  set innerHTML(html) {
    this.content.innerHTML = html;
  }
  cloneNode(deep) {
    const cloned = new _MockTemplateElement(null);
    cloned.attributes = cloneAttributes(this.attributes);
    const styleCssText = this.getAttribute("style");
    if (styleCssText != null && styleCssText.length > 0) {
      cloned.setAttribute("style", styleCssText);
    }
    cloned.content = this.content.cloneNode(deep);
    if (deep) {
      for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
        const clonedChildNode = this.childNodes[i].cloneNode(true);
        cloned.appendChild(clonedChildNode);
      }
    }
    return cloned;
  }
};
var MockTitleElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "title");
  }
  get text() {
    return this.textContent;
  }
  set text(value) {
    this.textContent = value;
  }
};
var MockUListElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "ul");
  }
};
var MockSlotElement = class _MockSlotElement extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "slot");
  }
  assignedNodes(opts) {
    let nodesToReturn = [];
    const ownerHost = this.getRootNode().host;
    if (!ownerHost) return nodesToReturn;
    if (ownerHost.childNodes.length) {
      if (this.name) {
        nodesToReturn = ownerHost.childNodes.filter(
          (n) => n.nodeType === 1 /* ELEMENT_NODE */ && n.getAttribute("slot") === this.name
        );
      } else {
        nodesToReturn = ownerHost.childNodes.filter(
          (n) => n.nodeType === 1 /* ELEMENT_NODE */ && !n.getAttribute("slot") || n.nodeType !== 1 /* ELEMENT_NODE */
        );
      }
      if (nodesToReturn.length) return nodesToReturn;
    }
    if (!(opts == null ? void 0 : opts.flatten)) return this.childNodes.filter((n) => !(n instanceof _MockSlotElement));
    return this.childNodes.reduce(
      (acc, node) => {
        if (node instanceof _MockSlotElement) {
          acc.push(...node.assignedNodes(opts));
        } else {
          acc.push(node);
        }
        return acc;
      },
      []
    );
  }
  assignedElements(opts) {
    let elesToReturn = [];
    const ownerHost = this.getRootNode().host;
    if (!ownerHost) return elesToReturn;
    if (ownerHost.children.length) {
      if (this.name) {
        elesToReturn = ownerHost.children.filter((n) => n.getAttribute("slot") == this.name);
      } else {
        elesToReturn = ownerHost.children.filter((n) => !n.getAttribute("slot"));
      }
      if (elesToReturn.length) return elesToReturn;
    }
    if (!(opts == null ? void 0 : opts.flatten)) return this.children.filter((n) => !(n instanceof _MockSlotElement));
    return this.children.reduce(
      (acc, node) => {
        if (node instanceof _MockSlotElement) {
          acc.push(...node.assignedElements(opts));
        } else {
          acc.push(node);
        }
        return acc;
      },
      []
    );
  }
};
patchPropAttributes(MockSlotElement.prototype, {
  name: String
});
var CanvasRenderingContext = class {
  constructor(context, contextAttributes) {
    this.context = context;
    this.contextAttributes = contextAttributes;
  }
  fillRect() {
    return;
  }
  clearRect() {
  }
  getImageData(_, __, w, h2) {
    return {
      data: new Array(w * h2 * 4)
    };
  }
  toDataURL() {
    return "data:,";
  }
  putImageData() {
  }
  createImageData() {
    return {};
  }
  setTransform() {
  }
  drawImage() {
  }
  save() {
  }
  fillText() {
  }
  restore() {
  }
  beginPath() {
  }
  moveTo() {
  }
  lineTo() {
  }
  closePath() {
  }
  stroke() {
  }
  translate() {
  }
  scale() {
  }
  rotate() {
  }
  arc() {
  }
  fill() {
  }
  measureText() {
    return { width: 0 };
  }
  transform() {
  }
  rect() {
  }
  clip() {
  }
};
var MockCanvasElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "canvas");
  }
  getContext(context, contextAttributes) {
    return new CanvasRenderingContext(context, contextAttributes);
  }
};
function fullUrl(elm, attrName) {
  const val = elm.getAttribute(attrName) || "";
  if (elm.ownerDocument != null) {
    const win2 = elm.ownerDocument.defaultView;
    if (win2 != null) {
      const loc = win2.location;
      if (loc != null) {
        try {
          const url = new URL(val, loc.href);
          return url.href;
        } catch (e) {
        }
      }
    }
  }
  return val.replace(/\'|\"/g, "").trim();
}
function patchPropAttributes(prototype, attrs, defaults = {}) {
  Object.keys(attrs).forEach((propName) => {
    const attr = attrs[propName];
    const defaultValue = defaults[propName];
    if (attr === Boolean) {
      Object.defineProperty(prototype, propName, {
        get() {
          return this.hasAttribute(propName);
        },
        set(value) {
          if (value) {
            this.setAttribute(propName, "");
          } else {
            this.removeAttribute(propName);
          }
        }
      });
    } else if (attr === Number) {
      Object.defineProperty(prototype, propName, {
        get() {
          const value = this.getAttribute(propName);
          return value ? parseInt(value, 10) : defaultValue === void 0 ? 0 : defaultValue;
        },
        set(value) {
          this.setAttribute(propName, value);
        }
      });
    } else {
      Object.defineProperty(prototype, propName, {
        get() {
          return this.hasAttribute(propName) ? this.getAttribute(propName) : defaultValue || "";
        },
        set(value) {
          this.setAttribute(propName, value);
        }
      });
    }
  });
}
MockElement.prototype.cloneNode = function(deep) {
  const cloned = createElement(this.ownerDocument, this.nodeName);
  cloned.attributes = cloneAttributes(this.attributes);
  const styleCssText = this.getAttribute("style");
  if (styleCssText != null && styleCssText.length > 0) {
    cloned.setAttribute("style", styleCssText);
  }
  if (deep) {
    for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
      const clonedChildNode = this.childNodes[i].cloneNode(true);
      cloned.appendChild(clonedChildNode);
    }
  }
  return cloned;
};

// src/mock-doc/parse-html.ts
var sharedDocument;
function parseHtmlToDocument(html, ownerDocument = null) {
  if (ownerDocument == null) {
    if (sharedDocument == null) {
      sharedDocument = new MockDocument();
    }
    ownerDocument = sharedDocument;
  }
  return parseDocumentUtil(ownerDocument, html);
}

// src/mock-doc/console.ts
var consoleNoop = () => {
};
function createConsole() {
  return {
    debug: consoleNoop,
    error: consoleNoop,
    info: consoleNoop,
    log: consoleNoop,
    warn: consoleNoop,
    dir: consoleNoop,
    dirxml: consoleNoop,
    table: consoleNoop,
    trace: consoleNoop,
    group: consoleNoop,
    groupCollapsed: consoleNoop,
    groupEnd: consoleNoop,
    clear: consoleNoop,
    count: consoleNoop,
    countReset: consoleNoop,
    assert: consoleNoop,
    profile: consoleNoop,
    profileEnd: consoleNoop,
    time: consoleNoop,
    timeLog: consoleNoop,
    timeEnd: consoleNoop,
    timeStamp: consoleNoop,
    context: consoleNoop,
    memory: consoleNoop
  };
}

// src/mock-doc/headers.ts
var MockHeaders = class {
  constructor(init) {
    this._values = [];
    if (typeof init === "object") {
      if (typeof init[Symbol.iterator] === "function") {
        const kvs = [];
        for (const kv of init) {
          if (typeof kv[Symbol.iterator] === "function") {
            kvs.push([...kv]);
          }
        }
        for (const kv of kvs) {
          this.append(kv[0], kv[1]);
        }
      } else {
        for (const key in init) {
          this.append(key, init[key]);
        }
      }
    }
  }
  append(key, value) {
    this._values.push([key, value + ""]);
  }
  delete(key) {
    key = key.toLowerCase();
    for (let i = this._values.length - 1; i >= 0; i--) {
      if (this._values[i][0].toLowerCase() === key) {
        this._values.splice(i, 1);
      }
    }
  }
  entries() {
    const entries = [];
    for (const kv of this.keys()) {
      entries.push([kv, this.get(kv)]);
    }
    let index = -1;
    return {
      next() {
        index++;
        return {
          value: entries[index],
          done: !entries[index]
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  forEach(cb) {
    for (const kv of this.entries()) {
      cb(kv[1], kv[0]);
    }
  }
  get(key) {
    const rtn = [];
    key = key.toLowerCase();
    for (const kv of this._values) {
      if (kv[0].toLowerCase() === key) {
        rtn.push(kv[1]);
      }
    }
    return rtn.length > 0 ? rtn.join(", ") : null;
  }
  has(key) {
    key = key.toLowerCase();
    for (const kv of this._values) {
      if (kv[0].toLowerCase() === key) {
        return true;
      }
    }
    return false;
  }
  keys() {
    const keys = [];
    for (const kv of this._values) {
      const key = kv[0].toLowerCase();
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
    let index = -1;
    return {
      next() {
        index++;
        return {
          value: keys[index],
          done: !keys[index]
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  set(key, value) {
    for (const kv of this._values) {
      if (kv[0].toLowerCase() === key.toLowerCase()) {
        kv[1] = value + "";
        return;
      }
    }
    this.append(key, value);
  }
  values() {
    const values = this._values;
    let index = -1;
    return {
      next() {
        index++;
        const done = !values[index];
        return {
          value: done ? void 0 : values[index][1],
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};

// src/mock-doc/parser.ts
var MockDOMParser = class {
  parseFromString(htmlToParse, mimeType) {
    if (mimeType !== "text/html") {
      console.error("XML parsing not implemented yet, continuing as html");
    }
    return parseHtmlToDocument(htmlToParse);
  }
};

// src/mock-doc/request-response.ts
var MockRequest = class _MockRequest {
  constructor(input, init = {}) {
    this._method = "GET";
    this._url = "/";
    this.bodyUsed = false;
    this.cache = "default";
    this.credentials = "same-origin";
    this.integrity = "";
    this.keepalive = false;
    this.mode = "cors";
    this.redirect = "follow";
    this.referrer = "about:client";
    this.referrerPolicy = "";
    if (typeof input === "string") {
      this.url = input;
    } else if (input) {
      Object.assign(this, input);
      this.headers = new MockHeaders(input.headers);
    }
    Object.assign(this, init);
    if (init.headers) {
      this.headers = new MockHeaders(init.headers);
    }
    if (!this.headers) {
      this.headers = new MockHeaders();
    }
  }
  get url() {
    if (typeof this._url === "string") {
      return new URL(this._url, location.href).href;
    }
    return new URL("/", location.href).href;
  }
  set url(value) {
    this._url = value;
  }
  get method() {
    if (typeof this._method === "string") {
      return this._method.toUpperCase();
    }
    return "GET";
  }
  set method(value) {
    this._method = value;
  }
  clone() {
    const clone = { ...this };
    clone.headers = new MockHeaders(this.headers);
    return new _MockRequest(clone);
  }
};
var MockResponse = class _MockResponse {
  constructor(body, init = {}) {
    this.ok = true;
    this.status = 200;
    this.statusText = "";
    this.type = "default";
    this.url = "";
    this._body = body;
    if (init) {
      Object.assign(this, init);
    }
    this.headers = new MockHeaders(init.headers);
  }
  async json() {
    return JSON.parse(this._body);
  }
  async text() {
    return this._body;
  }
  clone() {
    const initClone = { ...this };
    initClone.headers = new MockHeaders(this.headers);
    return new _MockResponse(this._body, initClone);
  }
};

// src/mock-doc/global.ts
function patchWindow(winToBePatched) {
  const mockWin = new MockWindow(false);
  WINDOW_FUNCTIONS.forEach((fnName) => {
    if (typeof winToBePatched[fnName] !== "function") {
      winToBePatched[fnName] = mockWin[fnName].bind(mockWin);
    }
  });
  WINDOW_PROPS.forEach((propName) => {
    if (winToBePatched === void 0) {
      Object.defineProperty(winToBePatched, propName, {
        get() {
          return mockWin[propName];
        },
        set(val) {
          mockWin[propName] = val;
        },
        configurable: true,
        enumerable: true
      });
    }
  });
}
function addGlobalsToWindowPrototype(mockWinPrototype) {
  GLOBAL_CONSTRUCTORS.forEach(([cstrName, Cstr]) => {
    Object.defineProperty(mockWinPrototype, cstrName, {
      get() {
        return this["__" + cstrName] || Cstr;
      },
      set(cstr) {
        this["__" + cstrName] = cstr;
      },
      configurable: true,
      enumerable: true
    });
  });
}
var WINDOW_FUNCTIONS = [
  "addEventListener",
  "alert",
  "blur",
  "cancelAnimationFrame",
  "cancelIdleCallback",
  "clearInterval",
  "clearTimeout",
  "close",
  "confirm",
  "dispatchEvent",
  "focus",
  "getComputedStyle",
  "matchMedia",
  "open",
  "prompt",
  "removeEventListener",
  "requestAnimationFrame",
  "requestIdleCallback",
  "URL"
];
var WINDOW_PROPS = [
  "customElements",
  "devicePixelRatio",
  "document",
  "history",
  "innerHeight",
  "innerWidth",
  "localStorage",
  "location",
  "navigator",
  "pageXOffset",
  "pageYOffset",
  "performance",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scrollX",
  "scrollY",
  "sessionStorage",
  "CSS",
  "CustomEvent",
  "Event",
  "Element",
  "HTMLElement",
  "Node",
  "NodeList",
  "FocusEvent",
  "KeyboardEvent",
  "MouseEvent"
];
var GLOBAL_CONSTRUCTORS = [
  ["CustomEvent", MockCustomEvent],
  ["DocumentFragment", MockDocumentFragment],
  ["DOMParser", MockDOMParser],
  ["Event", MockEvent],
  ["FocusEvent", MockFocusEvent],
  ["Headers", MockHeaders],
  ["KeyboardEvent", MockKeyboardEvent],
  ["MouseEvent", MockMouseEvent],
  ["Request", MockRequest],
  ["Response", MockResponse],
  ["ShadowRoot", MockDocumentFragment],
  ["HTMLAnchorElement", MockAnchorElement],
  ["HTMLBaseElement", MockBaseElement],
  ["HTMLButtonElement", MockButtonElement],
  ["HTMLCanvasElement", MockCanvasElement],
  ["HTMLFormElement", MockFormElement],
  ["HTMLImageElement", MockImageElement],
  ["HTMLInputElement", MockInputElement],
  ["HTMLLinkElement", MockLinkElement],
  ["HTMLMetaElement", MockMetaElement],
  ["HTMLScriptElement", MockScriptElement],
  ["HTMLStyleElement", MockStyleElement],
  ["HTMLTemplateElement", MockTemplateElement],
  ["HTMLTitleElement", MockTitleElement],
  ["HTMLUListElement", MockUListElement]
];

// src/mock-doc/history.ts
var MockHistory = class {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }
  back() {
    this.go(-1);
  }
  forward() {
    this.go(1);
  }
  go(_value) {
  }
  pushState(_state, _title, _url) {
  }
  replaceState(_state, _title, _url) {
  }
};

// src/mock-doc/intersection-observer.ts
var MockIntersectionObserver = class {
  constructor() {
  }
  disconnect() {
  }
  observe() {
  }
  takeRecords() {
    return [];
  }
  unobserve() {
  }
};

// src/mock-doc/location.ts
var MockLocation = class {
  constructor() {
    this.ancestorOrigins = null;
    this.protocol = "";
    this.host = "";
    this.hostname = "";
    this.port = "";
    this.pathname = "";
    this.search = "";
    this.hash = "";
    this.username = "";
    this.password = "";
    this.origin = "";
    this._href = "";
  }
  get href() {
    return this._href;
  }
  set href(value) {
    const url = new URL(value, "http://mockdoc.stenciljs.com");
    this._href = url.href;
    this.protocol = url.protocol;
    this.host = url.host;
    this.hostname = url.hostname;
    this.port = url.port;
    this.pathname = url.pathname;
    this.search = url.search;
    this.hash = url.hash;
    this.username = url.username;
    this.password = url.password;
    this.origin = url.origin;
  }
  assign(_url) {
  }
  reload(_forcedReload) {
  }
  replace(_url) {
  }
  toString() {
    return this.href;
  }
};

// src/mock-doc/navigator.ts
var MockNavigator = class {
  constructor() {
    this.appCodeName = "MockNavigator";
    this.appName = "MockNavigator";
    this.appVersion = "MockNavigator";
    this.platform = "MockNavigator";
    this.userAgent = "MockNavigator";
  }
};

// src/mock-doc/performance.ts
var MockPerformance = class {
  constructor() {
    this.timeOrigin = Date.now();
    this.eventCounts = /* @__PURE__ */ new Map();
  }
  addEventListener() {
  }
  clearMarks() {
  }
  clearMeasures() {
  }
  clearResourceTimings() {
  }
  dispatchEvent() {
    return true;
  }
  getEntries() {
    return [];
  }
  getEntriesByName() {
    return [];
  }
  getEntriesByType() {
    return [];
  }
  // Stencil's implementation of `mark` is non-compliant with the `Performance` interface. Because Stencil will
  // instantiate an instance of this class and may attempt to assign it to a variable of type `Performance`, the return
  // type must match the `Performance` interface (rather than typing this function as returning `void` and ignoring the
  // associated errors returned by the type checker)
  // @ts-ignore
  mark() {
  }
  // Stencil's implementation of `measure` is non-compliant with the `Performance` interface. Because Stencil will
  // instantiate an instance of this class and may attempt to assign it to a variable of type `Performance`, the return
  // type must match the `Performance` interface (rather than typing this function as returning `void` and ignoring the
  // associated errors returned by the type checker)
  // @ts-ignore
  measure() {
  }
  get navigation() {
    return {};
  }
  now() {
    return Date.now() - this.timeOrigin;
  }
  get onresourcetimingbufferfull() {
    return null;
  }
  removeEventListener() {
  }
  setResourceTimingBufferSize() {
  }
  get timing() {
    return {};
  }
  toJSON() {
  }
};
function resetPerformance(perf) {
  if (perf != null) {
    try {
      perf.timeOrigin = Date.now();
    } catch (e) {
    }
  }
}

// src/mock-doc/resize-observer.ts
var MockResizeObserver = class {
  constructor() {
  }
  disconnect() {
  }
  observe() {
  }
  takeRecords() {
    return [];
  }
  unobserve() {
  }
};

// src/mock-doc/shadow-root.ts
var MockShadowRoot = class extends MockDocumentFragment {
  get activeElement() {
    return null;
  }
  set adoptedStyleSheets(_adoptedStyleSheets) {
    throw new Error("Unimplemented");
  }
  get adoptedStyleSheets() {
    return [];
  }
  get cloneable() {
    return false;
  }
  get delegatesFocus() {
    return false;
  }
  get fullscreenElement() {
    return null;
  }
  get host() {
    let parent = this.parentElement();
    while (parent) {
      if (parent.nodeType === 11) {
        return parent;
      }
      parent = parent.parentElement();
    }
    return null;
  }
  get mode() {
    return "open";
  }
  get pictureInPictureElement() {
    return null;
  }
  get pointerLockElement() {
    return null;
  }
  get serializable() {
    return false;
  }
  get slotAssignment() {
    return "named";
  }
  get styleSheets() {
    return [];
  }
};

// src/mock-doc/storage.ts
var MockStorage = class {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
  }
  key(_value) {
  }
  getItem(key) {
    key = String(key);
    if (this.items.has(key)) {
      return this.items.get(key);
    }
    return null;
  }
  setItem(key, value) {
    if (value == null) {
      value = "null";
    }
    this.items.set(String(key), String(value));
  }
  removeItem(key) {
    this.items.delete(String(key));
  }
  clear() {
    this.items.clear();
  }
};

// src/mock-doc/window.ts
var nativeClearInterval = globalThis.clearInterval;
var nativeClearTimeout = globalThis.clearTimeout;
var nativeSetInterval = globalThis.setInterval;
var nativeSetTimeout = globalThis.setTimeout;
var nativeURL = globalThis.URL;
var nativeWindow = globalThis.window;
var MockWindow = class {
  constructor(html = null) {
    if (html !== false) {
      this.document = new MockDocument(html, this);
    } else {
      this.document = null;
    }
    this.performance = new MockPerformance();
    this.customElements = new MockCustomElementRegistry(this);
    this.console = createConsole();
    resetWindowDefaults(this);
    resetWindowDimensions(this);
  }
  addEventListener(type, handler) {
    addEventListener(this, type, handler);
  }
  alert(msg) {
    if (this.console) {
      this.console.debug(msg);
    } else {
      console.debug(msg);
    }
  }
  blur() {
  }
  cancelAnimationFrame(id) {
    this.__clearTimeout.call(nativeWindow || this, id);
  }
  cancelIdleCallback(id) {
    this.__clearTimeout.call(nativeWindow || this, id);
  }
  get CharacterData() {
    if (this.__charDataCstr == null) {
      const ownerDocument = this.document;
      this.__charDataCstr = class extends MockNode2 {
        constructor() {
          super(ownerDocument, 0, "test", "");
          throw new Error("Illegal constructor: cannot construct CharacterData");
        }
      };
    }
    return this.__charDataCstr;
  }
  set CharacterData(charDataCstr) {
    this.__charDataCstr = charDataCstr;
  }
  clearInterval(id) {
    this.__clearInterval.call(nativeWindow || this, id);
  }
  clearTimeout(id) {
    this.__clearTimeout.call(nativeWindow || this, id);
  }
  close() {
    resetWindow(this);
  }
  confirm() {
    return false;
  }
  get CSS() {
    return {
      supports: () => true
    };
  }
  get Document() {
    if (this.__docCstr == null) {
      const win2 = this;
      this.__docCstr = class extends MockDocument {
        constructor() {
          super(false, win2);
          throw new Error("Illegal constructor: cannot construct Document");
        }
      };
    }
    return this.__docCstr;
  }
  set Document(docCstr) {
    this.__docCstr = docCstr;
  }
  get DocumentFragment() {
    if (this.__docFragCstr == null) {
      const ownerDocument = this.document;
      this.__docFragCstr = class extends MockDocumentFragment {
        constructor() {
          super(ownerDocument);
          throw new Error("Illegal constructor: cannot construct DocumentFragment");
        }
      };
    }
    return this.__docFragCstr;
  }
  set DocumentFragment(docFragCstr) {
    this.__docFragCstr = docFragCstr;
  }
  get ShadowRoot() {
    return MockShadowRoot;
  }
  get DocumentType() {
    if (this.__docTypeCstr == null) {
      const ownerDocument = this.document;
      this.__docTypeCstr = class extends MockNode2 {
        constructor() {
          super(ownerDocument, 0, "test", "");
          throw new Error("Illegal constructor: cannot construct DocumentType");
        }
      };
    }
    return this.__docTypeCstr;
  }
  set DocumentType(docTypeCstr) {
    this.__docTypeCstr = docTypeCstr;
  }
  get DOMTokenList() {
    if (this.__domTokenListCstr == null) {
      this.__domTokenListCstr = class MockDOMTokenList {
      };
    }
    return this.__domTokenListCstr;
  }
  set DOMTokenList(domTokenListCstr) {
    this.__domTokenListCstr = domTokenListCstr;
  }
  dispatchEvent(ev) {
    return dispatchEvent(this, ev);
  }
  get Element() {
    if (this.__elementCstr == null) {
      const ownerDocument = this.document;
      this.__elementCstr = class extends MockElement {
        constructor() {
          super(ownerDocument, "");
          throw new Error("Illegal constructor: cannot construct Element");
        }
      };
    }
    return this.__elementCstr;
  }
  fetch(input, init) {
    if (typeof fetch === "function") {
      return fetch(input, init);
    }
    throw new Error(`fetch() not implemented`);
  }
  focus() {
  }
  getComputedStyle(_) {
    return {
      cssText: "",
      length: 0,
      parentRule: null,
      getPropertyPriority() {
        return null;
      },
      getPropertyValue() {
        return "";
      },
      item() {
        return null;
      },
      removeProperty() {
        return null;
      },
      setProperty() {
        return null;
      }
    };
  }
  get globalThis() {
    return this;
  }
  get history() {
    if (this.__history == null) {
      this.__history = new MockHistory();
    }
    return this.__history;
  }
  set history(hsty) {
    this.__history = hsty;
  }
  get JSON() {
    return JSON;
  }
  get HTMLElement() {
    if (this.__htmlElementCstr == null) {
      const ownerDocument = this.document;
      this.__htmlElementCstr = class extends MockHTMLElement {
        constructor() {
          super(ownerDocument, "");
          const observedAttributes = this.constructor.observedAttributes;
          if (Array.isArray(observedAttributes) && typeof this.attributeChangedCallback === "function") {
            observedAttributes.forEach((attrName) => {
              const attrValue = this.getAttribute(attrName);
              if (attrValue != null) {
                this.attributeChangedCallback(attrName, null, attrValue);
              }
            });
          }
        }
      };
    }
    return this.__htmlElementCstr;
  }
  set HTMLElement(htmlElementCstr) {
    this.__htmlElementCstr = htmlElementCstr;
  }
  get IntersectionObserver() {
    return MockIntersectionObserver;
  }
  get ResizeObserver() {
    return MockResizeObserver;
  }
  get localStorage() {
    if (this.__localStorage == null) {
      this.__localStorage = new MockStorage();
    }
    return this.__localStorage;
  }
  set localStorage(locStorage) {
    this.__localStorage = locStorage;
  }
  get location() {
    if (this.__location == null) {
      this.__location = new MockLocation();
    }
    return this.__location;
  }
  set location(val) {
    if (typeof val === "string") {
      if (this.__location == null) {
        this.__location = new MockLocation();
      }
      this.__location.href = val;
    } else {
      this.__location = val;
    }
  }
  matchMedia(media) {
    return {
      media,
      matches: false,
      addListener: (_handler) => {
      },
      removeListener: (_handler) => {
      },
      addEventListener: (_type, _handler) => {
      },
      removeEventListener: (_type, _handler) => {
      },
      dispatchEvent: (_ev) => {
      },
      onchange: null
    };
  }
  get Node() {
    if (this.__nodeCstr == null) {
      const ownerDocument = this.document;
      this.__nodeCstr = class extends MockNode2 {
        constructor() {
          super(ownerDocument, 0, "test", "");
          throw new Error("Illegal constructor: cannot construct Node");
        }
      };
    }
    return this.__nodeCstr;
  }
  get NodeList() {
    if (this.__nodeListCstr == null) {
      const ownerDocument = this.document;
      this.__nodeListCstr = class extends MockNodeList {
        constructor() {
          super(ownerDocument, [], 0);
          throw new Error("Illegal constructor: cannot construct NodeList");
        }
      };
    }
    return this.__nodeListCstr;
  }
  get navigator() {
    if (this.__navigator == null) {
      this.__navigator = new MockNavigator();
    }
    return this.__navigator;
  }
  set navigator(nav) {
    this.__navigator = nav;
  }
  get parent() {
    return null;
  }
  prompt() {
    return "";
  }
  open() {
    return null;
  }
  get origin() {
    return this.location.origin;
  }
  removeEventListener(type, handler) {
    removeEventListener(this, type, handler);
  }
  requestAnimationFrame(callback) {
    return this.setTimeout(() => {
      callback(Date.now());
    }, 0);
  }
  requestIdleCallback(callback) {
    return this.setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => 0
      });
    }, 0);
  }
  scroll(_x, _y) {
  }
  scrollBy(_x, _y) {
  }
  scrollTo(_x, _y) {
  }
  get self() {
    return this;
  }
  get sessionStorage() {
    if (this.__sessionStorage == null) {
      this.__sessionStorage = new MockStorage();
    }
    return this.__sessionStorage;
  }
  set sessionStorage(locStorage) {
    this.__sessionStorage = locStorage;
  }
  setInterval(callback, ms, ...args) {
    if (this.__timeouts == null) {
      this.__timeouts = /* @__PURE__ */ new Set();
    }
    ms = Math.min(ms, this.__maxTimeout);
    if (this.__allowInterval) {
      const intervalId = this.__setInterval(() => {
        if (this.__timeouts) {
          this.__timeouts.delete(intervalId);
          try {
            callback(...args);
          } catch (e) {
            if (this.console) {
              this.console.error(e);
            } else {
              console.error(e);
            }
          }
        }
      }, ms);
      if (this.__timeouts) {
        this.__timeouts.add(intervalId);
      }
      return intervalId;
    }
    const timeoutId = this.__setTimeout.call(
      nativeWindow || this,
      () => {
        if (this.__timeouts) {
          this.__timeouts.delete(timeoutId);
          try {
            callback(...args);
          } catch (e) {
            if (this.console) {
              this.console.error(e);
            } else {
              console.error(e);
            }
          }
        }
      },
      ms
    );
    if (this.__timeouts) {
      this.__timeouts.add(timeoutId);
    }
    return timeoutId;
  }
  setTimeout(callback, ms, ...args) {
    if (this.__timeouts == null) {
      this.__timeouts = /* @__PURE__ */ new Set();
    }
    ms = Math.min(ms, this.__maxTimeout);
    const timeoutId = this.__setTimeout.call(
      nativeWindow || this,
      () => {
        if (this.__timeouts) {
          this.__timeouts.delete(timeoutId);
          try {
            callback(...args);
          } catch (e) {
            if (this.console) {
              this.console.error(e);
            } else {
              console.error(e);
            }
          }
        }
      },
      ms
    );
    if (this.__timeouts) {
      this.__timeouts.add(timeoutId);
    }
    return timeoutId;
  }
  get top() {
    return this;
  }
  get window() {
    return this;
  }
  onanimationstart() {
  }
  onanimationend() {
  }
  onanimationiteration() {
  }
  onabort() {
  }
  onauxclick() {
  }
  onbeforecopy() {
  }
  onbeforecut() {
  }
  onbeforepaste() {
  }
  onblur() {
  }
  oncancel() {
  }
  oncanplay() {
  }
  oncanplaythrough() {
  }
  onchange() {
  }
  onclick() {
  }
  onclose() {
  }
  oncontextmenu() {
  }
  oncopy() {
  }
  oncuechange() {
  }
  oncut() {
  }
  ondblclick() {
  }
  ondrag() {
  }
  ondragend() {
  }
  ondragenter() {
  }
  ondragleave() {
  }
  ondragover() {
  }
  ondragstart() {
  }
  ondrop() {
  }
  ondurationchange() {
  }
  onemptied() {
  }
  onended() {
  }
  onerror() {
  }
  onfocus() {
  }
  onfocusin() {
  }
  onfocusout() {
  }
  onformdata() {
  }
  onfullscreenchange() {
  }
  onfullscreenerror() {
  }
  ongotpointercapture() {
  }
  oninput() {
  }
  oninvalid() {
  }
  onkeydown() {
  }
  onkeypress() {
  }
  onkeyup() {
  }
  onload() {
  }
  onloadeddata() {
  }
  onloadedmetadata() {
  }
  onloadstart() {
  }
  onlostpointercapture() {
  }
  onmousedown() {
  }
  onmouseenter() {
  }
  onmouseleave() {
  }
  onmousemove() {
  }
  onmouseout() {
  }
  onmouseover() {
  }
  onmouseup() {
  }
  onmousewheel() {
  }
  onpaste() {
  }
  onpause() {
  }
  onplay() {
  }
  onplaying() {
  }
  onpointercancel() {
  }
  onpointerdown() {
  }
  onpointerenter() {
  }
  onpointerleave() {
  }
  onpointermove() {
  }
  onpointerout() {
  }
  onpointerover() {
  }
  onpointerup() {
  }
  onprogress() {
  }
  onratechange() {
  }
  onreset() {
  }
  onresize() {
  }
  onscroll() {
  }
  onsearch() {
  }
  onseeked() {
  }
  onseeking() {
  }
  onselect() {
  }
  onselectstart() {
  }
  onstalled() {
  }
  onsubmit() {
  }
  onsuspend() {
  }
  ontimeupdate() {
  }
  ontoggle() {
  }
  onvolumechange() {
  }
  onwaiting() {
  }
  onwebkitfullscreenchange() {
  }
  onwebkitfullscreenerror() {
  }
  onwheel() {
  }
};
addGlobalsToWindowPrototype(MockWindow.prototype);
function resetWindowDefaults(win2) {
  win2.__clearInterval = nativeClearInterval;
  win2.__clearTimeout = nativeClearTimeout;
  win2.__setInterval = nativeSetInterval;
  win2.__setTimeout = nativeSetTimeout;
  win2.__maxTimeout = 6e4;
  win2.__allowInterval = true;
  win2.URL = nativeURL;
}
function cloneWindow(srcWin, opts = {}) {
  if (srcWin == null) {
    return null;
  }
  const clonedWin = new MockWindow(false);
  if (!opts.customElementProxy) {
    srcWin.customElements = null;
  }
  if (srcWin.document != null) {
    const clonedDoc = new MockDocument(false, clonedWin);
    clonedWin.document = clonedDoc;
    clonedDoc.documentElement = srcWin.document.documentElement.cloneNode(true);
  } else {
    clonedWin.document = new MockDocument(null, clonedWin);
  }
  return clonedWin;
}
function constrainTimeouts(win2) {
  win2.__allowInterval = false;
  win2.__maxTimeout = 0;
}
function resetWindow(win2) {
  if (win2 != null) {
    if (win2.__timeouts) {
      win2.__timeouts.forEach((timeoutId) => {
        nativeClearInterval(timeoutId);
        nativeClearTimeout(timeoutId);
      });
      win2.__timeouts.clear();
    }
    if (win2.customElements && win2.customElements.clear) {
      win2.customElements.clear();
    }
    resetDocument(win2.document);
    resetPerformance(win2.performance);
    for (const key in win2) {
      if (win2.hasOwnProperty(key) && key !== "document" && key !== "performance" && key !== "customElements") {
        delete win2[key];
      }
    }
    resetWindowDefaults(win2);
    resetWindowDimensions(win2);
    resetEventListeners(win2);
    if (win2.document != null) {
      try {
        win2.document.defaultView = win2;
      } catch (e) {
      }
    }
    win2.fetch = null;
    win2.Headers = null;
    win2.Request = null;
    win2.Response = null;
    win2.FetchError = null;
  }
}
function resetWindowDimensions(win2) {
  try {
    win2.devicePixelRatio = 1;
    win2.innerHeight = 768;
    win2.innerWidth = 1366;
    win2.pageXOffset = 0;
    win2.pageYOffset = 0;
    win2.screenLeft = 0;
    win2.screenTop = 0;
    win2.screenX = 0;
    win2.screenY = 0;
    win2.scrollX = 0;
    win2.scrollY = 0;
    win2.screen = {
      availHeight: win2.innerHeight,
      availLeft: 0,
      availTop: 0,
      availWidth: win2.innerWidth,
      colorDepth: 24,
      height: win2.innerHeight,
      keepAwake: false,
      orientation: {
        angle: 0,
        type: "portrait-primary"
      },
      pixelDepth: 24,
      width: win2.innerWidth
    };
  } catch (e) {
  }
}

// src/mock-doc/document.ts
var MockDocument = class _MockDocument extends MockHTMLElement {
  constructor(html = null, win2 = null) {
    super(null, null);
    this.nodeName = "#document" /* DOCUMENT_NODE */;
    this.nodeType = 9 /* DOCUMENT_NODE */;
    this.defaultView = win2;
    this.cookie = "";
    this.referrer = "";
    this.appendChild(this.createDocumentTypeNode());
    if (typeof html === "string") {
      const parsedDoc = parseDocumentUtil(this, html);
      const documentElement = parsedDoc.children.find((elm) => elm.nodeName === "HTML");
      if (documentElement != null) {
        this.appendChild(documentElement);
        setOwnerDocument(documentElement, this);
      }
    } else if (html !== false) {
      const documentElement = new MockHTMLElement(this, "html");
      this.appendChild(documentElement);
      documentElement.appendChild(new MockHTMLElement(this, "head"));
      documentElement.appendChild(new MockHTMLElement(this, "body"));
    }
  }
  get dir() {
    return this.documentElement.dir;
  }
  set dir(value) {
    this.documentElement.dir = value;
  }
  get localName() {
    throw new Error("Unimplemented");
  }
  get location() {
    if (this.defaultView != null) {
      return this.defaultView.location;
    }
    return null;
  }
  set location(val) {
    if (this.defaultView != null) {
      this.defaultView.location = val;
    }
  }
  get baseURI() {
    const baseNode = this.head.childNodes.find((node) => node.nodeName === "BASE");
    if (baseNode) {
      return baseNode.href;
    }
    return this.URL;
  }
  get URL() {
    return this.location.href;
  }
  get styleSheets() {
    return this.querySelectorAll("style");
  }
  get scripts() {
    return this.querySelectorAll("script");
  }
  get forms() {
    return this.querySelectorAll("form");
  }
  get images() {
    return this.querySelectorAll("img");
  }
  get scrollingElement() {
    return this.documentElement;
  }
  get documentElement() {
    for (let i = this.childNodes.length - 1; i >= 0; i--) {
      if (this.childNodes[i].nodeName === "HTML") {
        return this.childNodes[i];
      }
    }
    const documentElement = new MockHTMLElement(this, "html");
    this.appendChild(documentElement);
    return documentElement;
  }
  set documentElement(documentElement) {
    for (let i = this.childNodes.length - 1; i >= 0; i--) {
      if (this.childNodes[i].nodeType !== 10 /* DOCUMENT_TYPE_NODE */) {
        this.childNodes[i].remove();
      }
    }
    if (documentElement != null) {
      this.appendChild(documentElement);
      setOwnerDocument(documentElement, this);
    }
  }
  get head() {
    const documentElement = this.documentElement;
    for (let i = 0; i < documentElement.childNodes.length; i++) {
      if (documentElement.childNodes[i].nodeName === "HEAD") {
        return documentElement.childNodes[i];
      }
    }
    const head = new MockHTMLElement(this, "head");
    documentElement.insertBefore(head, documentElement.firstChild);
    return head;
  }
  set head(head) {
    const documentElement = this.documentElement;
    for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
      if (documentElement.childNodes[i].nodeName === "HEAD") {
        documentElement.childNodes[i].remove();
      }
    }
    if (head != null) {
      documentElement.insertBefore(head, documentElement.firstChild);
      setOwnerDocument(head, this);
    }
  }
  get body() {
    const documentElement = this.documentElement;
    for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
      if (documentElement.childNodes[i].nodeName === "BODY") {
        return documentElement.childNodes[i];
      }
    }
    const body = new MockHTMLElement(this, "body");
    documentElement.appendChild(body);
    return body;
  }
  set body(body) {
    const documentElement = this.documentElement;
    for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
      if (documentElement.childNodes[i].nodeName === "BODY") {
        documentElement.childNodes[i].remove();
      }
    }
    if (body != null) {
      documentElement.appendChild(body);
      setOwnerDocument(body, this);
    }
  }
  appendChild(newNode) {
    newNode.remove();
    newNode.parentNode = this;
    this.childNodes.push(newNode);
    return newNode;
  }
  createComment(data) {
    return new MockComment(this, data);
  }
  createAttribute(attrName) {
    return new MockAttr(attrName.toLowerCase(), "");
  }
  createAttributeNS(namespaceURI, attrName) {
    return new MockAttr(attrName, "", namespaceURI);
  }
  createElement(tagName) {
    if (tagName === "#document" /* DOCUMENT_NODE */) {
      const doc2 = new _MockDocument(false);
      doc2.nodeName = tagName;
      doc2.parentNode = null;
      return doc2;
    }
    return createElement(this, tagName);
  }
  createElementNS(namespaceURI, tagName) {
    const elmNs = createElementNS(this, namespaceURI, tagName);
    return elmNs;
  }
  createTextNode(text) {
    return new MockTextNode(this, text);
  }
  createDocumentFragment() {
    return new MockDocumentFragment(this);
  }
  createDocumentTypeNode() {
    return new MockDocumentTypeNode(this);
  }
  getElementById(id) {
    return getElementById(this, id);
  }
  getElementsByName(elmName) {
    return getElementsByName(this, elmName.toLowerCase());
  }
  get title() {
    const title = this.head.childNodes.find((elm) => elm.nodeName === "TITLE");
    if (title != null && typeof title.textContent === "string") {
      return title.textContent.trim();
    }
    return "";
  }
  set title(value) {
    const head = this.head;
    let title = head.childNodes.find((elm) => elm.nodeName === "TITLE");
    if (title == null) {
      title = this.createElement("title");
      head.appendChild(title);
    }
    title.textContent = value;
  }
};
function resetDocument(doc2) {
  if (doc2 != null) {
    resetEventListeners(doc2);
    const documentElement = doc2.documentElement;
    if (documentElement != null) {
      resetElement(documentElement);
      for (let i = 0, ii = documentElement.childNodes.length; i < ii; i++) {
        const childNode = documentElement.childNodes[i];
        resetElement(childNode);
        childNode.childNodes.length = 0;
      }
    }
    for (const key in doc2) {
      if (doc2.hasOwnProperty(key) && !DOC_KEY_KEEPERS.has(key)) {
        delete doc2[key];
      }
    }
    try {
      doc2.nodeName = "#document" /* DOCUMENT_NODE */;
    } catch (e) {
    }
    try {
      doc2.nodeType = 9 /* DOCUMENT_NODE */;
    } catch (e) {
    }
    try {
      doc2.cookie = "";
    } catch (e) {
    }
    try {
      doc2.referrer = "";
    } catch (e) {
    }
  }
}
var DOC_KEY_KEEPERS = /* @__PURE__ */ new Set([
  "nodeName",
  "nodeType",
  "nodeValue",
  "ownerDocument",
  "parentNode",
  "childNodes",
  "_shadowRoot"
]);
function getElementById(elm, id) {
  const children = elm.children;
  for (let i = 0, ii = children.length; i < ii; i++) {
    const childElm = children[i];
    if (childElm.id === id) {
      return childElm;
    }
    const childElmFound = getElementById(childElm, id);
    if (childElmFound != null) {
      return childElmFound;
    }
  }
  return null;
}
function getElementsByName(elm, elmName, foundElms = []) {
  const children = elm.children;
  for (let i = 0, ii = children.length; i < ii; i++) {
    const childElm = children[i];
    if (childElm.name && childElm.name.toLowerCase() === elmName) {
      foundElms.push(childElm);
    }
    getElementsByName(childElm, elmName, foundElms);
  }
  return foundElms;
}
function setOwnerDocument(elm, ownerDocument) {
  for (let i = 0, ii = elm.childNodes.length; i < ii; i++) {
    elm.childNodes[i].ownerDocument = ownerDocument;
    if (elm.childNodes[i].nodeType === 1 /* ELEMENT_NODE */) {
      setOwnerDocument(elm.childNodes[i], ownerDocument);
    }
  }
}

// src/hydrate/runner/create-window.ts
var templateWindows = /* @__PURE__ */ new Map();
function createWindowFromHtml(templateHtml, uniqueId) {
  let templateWindow = templateWindows.get(uniqueId);
  if (templateWindow == null) {
    templateWindow = new MockWindow(templateHtml);
    templateWindows.set(uniqueId, templateWindow);
  }
  const win2 = cloneWindow(templateWindow);
  return win2;
}
var Build = {
  isDev: BUILD.isDev ? true : false,
  isBrowser: true,
  isServer: false,
  isTesting: BUILD.isTesting ? true : false
};

// src/client/client-host-ref.ts
var hostRefs = BUILD.hotModuleReplacement ? window.__STENCIL_HOSTREFS__ || (window.__STENCIL_HOSTREFS__ = /* @__PURE__ */ new WeakMap()) : /* @__PURE__ */ new WeakMap();
var STENCIL_DEV_MODE = BUILD.isTesting ? ["STENCIL:"] : [
  "%cstencil",
  "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"
];
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var H = win.HTMLElement || class {
};
var supportsShadow = BUILD.shadowDom;
var supportsConstructableStylesheets = BUILD.constructableCSS ? /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() : false;

// src/utils/helpers.ts
var isString = (v) => typeof v === "string";

// src/utils/message-utils.ts
var catchError = (diagnostics, err2, msg) => {
  const diagnostic = {
    level: "error",
    type: "build",
    header: "Build Error",
    messageText: "build error",
    lines: []
  };
  if (isString(msg)) {
    diagnostic.messageText = msg.length ? msg : "UNKNOWN ERROR";
  } else if (err2 != null) {
    if (err2.stack != null) {
      diagnostic.messageText = err2.stack.toString();
    } else {
      if (err2.message != null) {
        diagnostic.messageText = err2.message.length ? err2.message : "UNKNOWN ERROR";
      } else {
        diagnostic.messageText = err2.toString();
      }
    }
  }
  if (diagnostics != null && !shouldIgnoreError(diagnostic.messageText)) {
    diagnostics.push(diagnostic);
  }
  return diagnostic;
};
var hasError = (diagnostics) => {
  if (diagnostics == null || diagnostics.length === 0) {
    return false;
  }
  return diagnostics.some((d) => d.level === "error" && d.type !== "runtime");
};
var shouldIgnoreError = (msg) => {
  return msg === TASK_CANCELED_MSG;
};
var TASK_CANCELED_MSG = `task canceled`;

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/runtime/mode.ts
var setMode = (handler) => modeResolutionChain.push(handler);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/compiler/html/canonical-link.ts
var updateCanonicalLink = (doc2, href) => {
  var _a2;
  let canonicalLinkElm = doc2.head.querySelector('link[rel="canonical"]');
  if (typeof href === "string") {
    if (canonicalLinkElm == null) {
      canonicalLinkElm = doc2.createElement("link");
      canonicalLinkElm.setAttribute("rel", "canonical");
      doc2.head.appendChild(canonicalLinkElm);
    }
    canonicalLinkElm.setAttribute("href", href);
  } else {
    if (canonicalLinkElm != null) {
      const existingHref = canonicalLinkElm.getAttribute("href");
      if (!existingHref) {
        (_a2 = canonicalLinkElm.parentNode) == null ? void 0 : _a2.removeChild(canonicalLinkElm);
      }
    }
  }
};

// src/compiler/html/relocate-meta-charset.ts
var relocateMetaCharset = (doc2) => {
  const head = doc2.head;
  let charsetElm = head.querySelector("meta[charset]");
  if (charsetElm == null) {
    charsetElm = doc2.createElement("meta");
    charsetElm.setAttribute("charset", "utf-8");
  } else {
    charsetElm.remove();
  }
  head.insertBefore(charsetElm, head.firstChild);
};

// src/compiler/style/css-parser/parse-css.ts
var parseCss = (css, filePath) => {
  let lineno = 1;
  let column = 1;
  const diagnostics = [];
  const updatePosition = (str) => {
    const lines = str.match(/\n/g);
    if (lines) lineno += lines.length;
    const i = str.lastIndexOf("\n");
    column = ~i ? str.length - i : column + str.length;
  };
  const position = () => {
    const start = { line: lineno, column };
    return (node) => {
      node.position = new ParsePosition(start);
      whitespace();
      return node;
    };
  };
  const error = (msg) => {
    const srcLines = css.split("\n");
    const d = {
      level: "error",
      type: "css",
      language: "css",
      header: "CSS Parse",
      messageText: msg,
      absFilePath: filePath,
      lines: [
        {
          lineIndex: lineno - 1,
          lineNumber: lineno,
          errorCharStart: column,
          text: css[lineno - 1]
        }
      ]
    };
    if (lineno > 1) {
      const previousLine = {
        lineIndex: lineno - 1,
        lineNumber: lineno - 1,
        text: css[lineno - 2],
        errorCharStart: -1,
        errorLength: -1
      };
      d.lines.unshift(previousLine);
    }
    if (lineno + 2 < srcLines.length) {
      const nextLine = {
        lineIndex: lineno,
        lineNumber: lineno + 1,
        text: srcLines[lineno],
        errorCharStart: -1,
        errorLength: -1
      };
      d.lines.push(nextLine);
    }
    diagnostics.push(d);
    return null;
  };
  const stylesheet = () => {
    const rulesList = rules();
    return {
      type: 14 /* StyleSheet */,
      stylesheet: {
        source: filePath,
        rules: rulesList
      }
    };
  };
  const open = () => match(/^{\s*/);
  const close = () => match(/^}/);
  const match = (re) => {
    const m = re.exec(css);
    if (!m) return;
    const str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  };
  const rules = () => {
    let node;
    const rules2 = [];
    whitespace();
    comments(rules2);
    while (css.length && css.charAt(0) !== "}" && (node = atrule() || rule())) {
      rules2.push(node);
      comments(rules2);
    }
    return rules2;
  };
  const whitespace = () => match(/^\s*/);
  const comments = (rules2) => {
    let c;
    rules2 = rules2 || [];
    while (c = comment()) {
      rules2.push(c);
    }
    return rules2;
  };
  const comment = () => {
    const pos = position();
    if ("/" !== css.charAt(0) || "*" !== css.charAt(1)) return null;
    let i = 2;
    while ("" !== css.charAt(i) && ("*" !== css.charAt(i) || "/" !== css.charAt(i + 1))) ++i;
    i += 2;
    if ("" === css.charAt(i - 1)) {
      return error("End of comment missing");
    }
    const comment2 = css.slice(2, i - 2);
    column += 2;
    updatePosition(comment2);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 1 /* Comment */,
      comment: comment2
    });
  };
  const selector = () => {
    const m = match(/^([^{]+)/);
    if (!m) return null;
    return trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m2) {
      return m2.replace(/,/g, "\u200C");
    }).split(/\s*(?![^(]*\)),\s*/).map(function(s) {
      return s.replace(/\u200C/g, ",");
    });
  };
  const declaration = () => {
    const pos = position();
    let prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) return null;
    prop = trim(prop[0]);
    if (!match(/^:\s*/)) return error(`property missing ':'`);
    const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    const ret = pos({
      type: 4 /* Declaration */,
      property: prop.replace(commentre, ""),
      value: val ? trim(val[0]).replace(commentre, "") : ""
    });
    match(/^[;\s]*/);
    return ret;
  };
  const declarations = () => {
    const decls = [];
    if (!open()) return error(`missing '{'`);
    comments(decls);
    let decl;
    while (decl = declaration()) {
      decls.push(decl);
      comments(decls);
    }
    if (!close()) return error(`missing '}'`);
    return decls;
  };
  const keyframe = () => {
    let m;
    const values = [];
    const pos = position();
    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      values.push(m[1]);
      match(/^,\s*/);
    }
    if (!values.length) return null;
    return pos({
      type: 9 /* KeyFrame */,
      values,
      declarations: declarations()
    });
  };
  const atkeyframes = () => {
    const pos = position();
    let m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) return null;
    const vendor = m[1];
    m = match(/^([-\w]+)\s*/);
    if (!m) return error(`@keyframes missing name`);
    const name = m[1];
    if (!open()) return error(`@keyframes missing '{'`);
    let frame;
    let frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) return error(`@keyframes missing '}'`);
    return pos({
      type: 8 /* KeyFrames */,
      name,
      vendor,
      keyframes: frames
    });
  };
  const atsupports = () => {
    const pos = position();
    const m = match(/^@supports *([^{]+)/);
    if (!m) return null;
    const supports = trim(m[1]);
    if (!open()) return error(`@supports missing '{'`);
    const style = comments().concat(rules());
    if (!close()) return error(`@supports missing '}'`);
    return pos({
      type: 15 /* Supports */,
      supports,
      rules: style
    });
  };
  const athost = () => {
    const pos = position();
    const m = match(/^@host\s*/);
    if (!m) return null;
    if (!open()) return error(`@host missing '{'`);
    const style = comments().concat(rules());
    if (!close()) return error(`@host missing '}'`);
    return pos({
      type: 6 /* Host */,
      rules: style
    });
  };
  const atmedia = () => {
    const pos = position();
    const m = match(/^@media *([^{]+)/);
    if (!m) return null;
    const media = trim(m[1]);
    if (!open()) return error(`@media missing '{'`);
    const style = comments().concat(rules());
    if (!close()) return error(`@media missing '}'`);
    return pos({
      type: 10 /* Media */,
      media,
      rules: style
    });
  };
  const atcustommedia = () => {
    const pos = position();
    const m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) return null;
    return pos({
      type: 2 /* CustomMedia */,
      name: trim(m[1]),
      media: trim(m[2])
    });
  };
  const atpage = () => {
    const pos = position();
    const m = match(/^@page */);
    if (!m) return null;
    const sel = selector() || [];
    if (!open()) return error(`@page missing '{'`);
    let decls = comments();
    let decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) return error(`@page missing '}'`);
    return pos({
      type: 12 /* Page */,
      selectors: sel,
      declarations: decls
    });
  };
  const atdocument = () => {
    const pos = position();
    const m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return null;
    const vendor = trim(m[1]);
    const doc2 = trim(m[2]);
    if (!open()) return error(`@document missing '{'`);
    const style = comments().concat(rules());
    if (!close()) return error(`@document missing '}'`);
    return pos({
      type: 3 /* Document */,
      document: doc2,
      vendor,
      rules: style
    });
  };
  const atfontface = () => {
    const pos = position();
    const m = match(/^@font-face\s*/);
    if (!m) return null;
    if (!open()) return error(`@font-face missing '{'`);
    let decls = comments();
    let decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) return error(`@font-face missing '}'`);
    return pos({
      type: 5 /* FontFace */,
      declarations: decls
    });
  };
  const compileAtrule = (nodeName, nodeType) => {
    const re = new RegExp("^@" + nodeName + "\\s*([^;]+);");
    return () => {
      const pos = position();
      const m = match(re);
      if (!m) return null;
      const node = {
        type: nodeType
      };
      node[nodeName] = m[1].trim();
      return pos(node);
    };
  };
  const atimport = compileAtrule("import", 7 /* Import */);
  const atcharset = compileAtrule("charset", 0 /* Charset */);
  const atnamespace = compileAtrule("namespace", 11 /* Namespace */);
  const atrule = () => {
    if (css[0] !== "@") return null;
    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  };
  const rule = () => {
    const pos = position();
    const sel = selector();
    if (!sel) return error("selector missing");
    comments();
    return pos({
      type: 13 /* Rule */,
      selectors: sel,
      declarations: declarations()
    });
  };
  class ParsePosition {
    constructor(start) {
      this.start = start;
      this.end = { line: lineno, column };
      this.source = filePath;
    }
  }
  ParsePosition.prototype.content = css;
  return {
    diagnostics,
    ...addParent(stylesheet())
  };
};
var trim = (str) => str ? str.trim() : "";
var addParent = (obj, parent) => {
  const isNode = obj && typeof obj.type === "string";
  const childParent = isNode ? obj : parent;
  for (const k in obj) {
    const value = obj[k];
    if (Array.isArray(value)) {
      value.forEach(function(v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === "object") {
      addParent(value, childParent);
    }
  }
  if (isNode) {
    Object.defineProperty(obj, "parent", {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }
  return obj;
};
var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

// src/compiler/style/css-parser/get-css-selectors.ts
var getCssSelectors = (sel) => {
  SELECTORS.all.length = SELECTORS.tags.length = SELECTORS.classNames.length = SELECTORS.ids.length = SELECTORS.attrs.length = 0;
  sel = sel.replace(/\./g, " .").replace(/\#/g, " #").replace(/\[/g, " [").replace(/\>/g, " > ").replace(/\+/g, " + ").replace(/\~/g, " ~ ").replace(/\*/g, " * ").replace(/\:not\((.*?)\)/g, " ");
  const items = sel.split(" ");
  for (let i = 0, l = items.length; i < l; i++) {
    items[i] = items[i].split(":")[0];
    if (items[i].length === 0) continue;
    if (items[i].charAt(0) === ".") {
      SELECTORS.classNames.push(items[i].slice(1));
    } else if (items[i].charAt(0) === "#") {
      SELECTORS.ids.push(items[i].slice(1));
    } else if (items[i].charAt(0) === "[") {
      items[i] = items[i].slice(1).split("=")[0].split("]")[0].trim();
      SELECTORS.attrs.push(items[i].toLowerCase());
    } else if (/[a-z]/g.test(items[i].charAt(0))) {
      SELECTORS.tags.push(items[i].toLowerCase());
    }
  }
  SELECTORS.classNames = SELECTORS.classNames.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  });
  return SELECTORS;
};
var SELECTORS = {
  all: [],
  tags: [],
  classNames: [],
  ids: [],
  attrs: []
};

// src/compiler/style/css-parser/serialize-css.ts
var serializeCss = (stylesheet, serializeOpts) => {
  const usedSelectors = serializeOpts.usedSelectors || null;
  const opts = {
    usedSelectors: usedSelectors || null,
    hasUsedAttrs: !!usedSelectors && usedSelectors.attrs.size > 0,
    hasUsedClassNames: !!usedSelectors && usedSelectors.classNames.size > 0,
    hasUsedIds: !!usedSelectors && usedSelectors.ids.size > 0,
    hasUsedTags: !!usedSelectors && usedSelectors.tags.size > 0
  };
  const rules = stylesheet.rules;
  if (!rules) {
    return "";
  }
  const rulesLen = rules.length;
  const out = [];
  for (let i = 0; i < rulesLen; i++) {
    out.push(serializeCssVisitNode(opts, rules[i], i, rulesLen));
  }
  return out.join("");
};
var serializeCssVisitNode = (opts, node, index, len) => {
  var _a2;
  const nodeType = node.type;
  if (nodeType === 4 /* Declaration */) {
    return serializeCssDeclaration(node, index, len);
  }
  if (nodeType === 13 /* Rule */) {
    return serializeCssRule(opts, node);
  }
  if (nodeType === 1 /* Comment */) {
    if (((_a2 = node.comment) == null ? void 0 : _a2[0]) === "!") {
      return `/*${node.comment}*/`;
    } else {
      return "";
    }
  }
  if (nodeType === 10 /* Media */) {
    return serializeCssMedia(opts, node);
  }
  if (nodeType === 8 /* KeyFrames */) {
    return serializeCssKeyframes(opts, node);
  }
  if (nodeType === 9 /* KeyFrame */) {
    return serializeCssKeyframe(opts, node);
  }
  if (nodeType === 5 /* FontFace */) {
    return serializeCssFontFace(opts, node);
  }
  if (nodeType === 15 /* Supports */) {
    return serializeCssSupports(opts, node);
  }
  if (nodeType === 7 /* Import */) {
    return "@import " + node.import + ";";
  }
  if (nodeType === 0 /* Charset */) {
    return "@charset " + node.charset + ";";
  }
  if (nodeType === 12 /* Page */) {
    return serializeCssPage(opts, node);
  }
  if (nodeType === 6 /* Host */) {
    return "@host{" + serializeCssMapVisit(opts, node.rules) + "}";
  }
  if (nodeType === 2 /* CustomMedia */) {
    return "@custom-media " + node.name + " " + node.media + ";";
  }
  if (nodeType === 3 /* Document */) {
    return serializeCssDocument(opts, node);
  }
  if (nodeType === 11 /* Namespace */) {
    return "@namespace " + node.namespace + ";";
  }
  return "";
};
var serializeCssRule = (opts, node) => {
  var _a2, _b;
  const decls = node.declarations;
  const usedSelectors = opts.usedSelectors;
  const selectors = (_b = (_a2 = node.selectors) == null ? void 0 : _a2.slice()) != null ? _b : [];
  if (decls == null || decls.length === 0) {
    return "";
  }
  if (usedSelectors) {
    let i;
    let j;
    let include = true;
    for (i = selectors.length - 1; i >= 0; i--) {
      const sel = getCssSelectors(selectors[i]);
      include = true;
      let jlen = sel.classNames.length;
      if (jlen > 0 && opts.hasUsedClassNames) {
        for (j = 0; j < jlen; j++) {
          if (!usedSelectors.classNames.has(sel.classNames[j])) {
            include = false;
            break;
          }
        }
      }
      if (include && opts.hasUsedTags) {
        jlen = sel.tags.length;
        if (jlen > 0) {
          for (j = 0; j < jlen; j++) {
            if (!usedSelectors.tags.has(sel.tags[j])) {
              include = false;
              break;
            }
          }
        }
      }
      if (include && opts.hasUsedAttrs) {
        jlen = sel.attrs.length;
        if (jlen > 0) {
          for (j = 0; j < jlen; j++) {
            if (!usedSelectors.attrs.has(sel.attrs[j])) {
              include = false;
              break;
            }
          }
        }
      }
      if (include && opts.hasUsedIds) {
        jlen = sel.ids.length;
        if (jlen > 0) {
          for (j = 0; j < jlen; j++) {
            if (!usedSelectors.ids.has(sel.ids[j])) {
              include = false;
              break;
            }
          }
        }
      }
      if (!include) {
        selectors.splice(i, 1);
      }
    }
  }
  if (selectors.length === 0) {
    return "";
  }
  const cleanedSelectors = [];
  let cleanedSelector = "";
  if (node.selectors) {
    for (const selector of node.selectors) {
      cleanedSelector = removeSelectorWhitespace(selector);
      if (!cleanedSelectors.includes(cleanedSelector)) {
        cleanedSelectors.push(cleanedSelector);
      }
    }
  }
  return `${cleanedSelectors}{${serializeCssMapVisit(opts, decls)}}`;
};
var serializeCssDeclaration = (node, index, len) => {
  if (node.value === "") {
    return "";
  }
  if (len - 1 === index) {
    return node.property + ":" + node.value;
  }
  return node.property + ":" + node.value + ";";
};
var serializeCssMedia = (opts, node) => {
  const mediaCss = serializeCssMapVisit(opts, node.rules);
  if (mediaCss === "") {
    return "";
  }
  return "@media " + removeMediaWhitespace(node.media) + "{" + mediaCss + "}";
};
var serializeCssKeyframes = (opts, node) => {
  const keyframesCss = serializeCssMapVisit(opts, node.keyframes);
  if (keyframesCss === "") {
    return "";
  }
  return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + keyframesCss + "}";
};
var serializeCssKeyframe = (opts, node) => {
  var _a2, _b;
  return ((_b = (_a2 = node.values) == null ? void 0 : _a2.join(",")) != null ? _b : "") + "{" + serializeCssMapVisit(opts, node.declarations) + "}";
};
var serializeCssFontFace = (opts, node) => {
  const fontCss = serializeCssMapVisit(opts, node.declarations);
  if (fontCss === "") {
    return "";
  }
  return "@font-face{" + fontCss + "}";
};
var serializeCssSupports = (opts, node) => {
  const supportsCss = serializeCssMapVisit(opts, node.rules);
  if (supportsCss === "") {
    return "";
  }
  return "@supports " + node.supports + "{" + supportsCss + "}";
};
var serializeCssPage = (opts, node) => {
  var _a2, _b;
  const sel = (_b = (_a2 = node.selectors) == null ? void 0 : _a2.join(", ")) != null ? _b : "";
  return "@page " + sel + "{" + serializeCssMapVisit(opts, node.declarations) + "}";
};
var serializeCssDocument = (opts, node) => {
  const documentCss = serializeCssMapVisit(opts, node.rules);
  const doc2 = "@" + (node.vendor || "") + "document " + node.document;
  if (documentCss === "") {
    return "";
  }
  return doc2 + "{" + documentCss + "}";
};
var serializeCssMapVisit = (opts, nodes) => {
  let rtn = "";
  if (nodes) {
    for (let i = 0, len = nodes.length; i < len; i++) {
      rtn += serializeCssVisitNode(opts, nodes[i], i, len);
    }
  }
  return rtn;
};
var removeSelectorWhitespace = (selector) => {
  let rtn = "";
  let char = "";
  let inAttr = false;
  selector = selector.trim();
  for (let i = 0, l = selector.length; i < l; i++) {
    char = selector[i];
    if (char === "[" && rtn[rtn.length - 1] !== "\\") {
      inAttr = true;
    } else if (char === "]" && rtn[rtn.length - 1] !== "\\") {
      inAttr = false;
    }
    if (!inAttr && CSS_WS_REG.test(char)) {
      if (CSS_NEXT_CHAR_REG.test(selector[i + 1])) {
        continue;
      }
      if (CSS_PREV_CHAR_REG.test(rtn[rtn.length - 1])) {
        continue;
      }
      rtn += " ";
    } else {
      rtn += char;
    }
  }
  return rtn;
};
var removeMediaWhitespace = (media) => {
  var _a2;
  let rtn = "";
  let char = "";
  media = (_a2 = media == null ? void 0 : media.trim()) != null ? _a2 : "";
  for (let i = 0, l = media.length; i < l; i++) {
    char = media[i];
    if (CSS_WS_REG.test(char)) {
      if (CSS_WS_REG.test(rtn[rtn.length - 1])) {
        continue;
      }
      rtn += " ";
    } else {
      rtn += char;
    }
  }
  return rtn;
};
var CSS_WS_REG = /\s/;
var CSS_NEXT_CHAR_REG = /[>\(\)\~\,\+\s]/;
var CSS_PREV_CHAR_REG = /[>\(\~\,\+]/;

// src/compiler/style/css-parser/used-selectors.ts
var getUsedSelectors = (elm) => {
  const usedSelectors = {
    attrs: /* @__PURE__ */ new Set(),
    classNames: /* @__PURE__ */ new Set(),
    ids: /* @__PURE__ */ new Set(),
    tags: /* @__PURE__ */ new Set()
  };
  collectUsedSelectors(usedSelectors, elm);
  return usedSelectors;
};
var collectUsedSelectors = (usedSelectors, elm) => {
  if (elm != null && elm.nodeType === 1) {
    const children = elm.children;
    const tagName = elm.nodeName.toLowerCase();
    usedSelectors.tags.add(tagName);
    const attributes = elm.attributes;
    for (let i = 0, l = attributes.length; i < l; i++) {
      const attr = attributes.item(i);
      const attrName = attr.name.toLowerCase();
      usedSelectors.attrs.add(attrName);
      if (attrName === "class") {
        const classList = elm.classList;
        for (let i2 = 0, l2 = classList.length; i2 < l2; i2++) {
          usedSelectors.classNames.add(classList.item(i2));
        }
      } else if (attrName === "id") {
        usedSelectors.ids.add(attr.value);
      }
    }
    if (children) {
      for (let i = 0, l = children.length; i < l; i++) {
        collectUsedSelectors(usedSelectors, children[i]);
      }
    }
  }
};

// src/compiler/html/remove-unused-styles.ts
var removeUnusedStyles = (doc2, diagnostics) => {
  try {
    const styleElms = doc2.head.querySelectorAll(`style[data-styles]`);
    const styleLen = styleElms.length;
    if (styleLen > 0) {
      const usedSelectors = getUsedSelectors(doc2.documentElement);
      for (let i = 0; i < styleLen; i++) {
        removeUnusedStyleText(usedSelectors, diagnostics, styleElms[i]);
      }
    }
  } catch (e) {
    catchError(diagnostics, e);
  }
};
var removeUnusedStyleText = (usedSelectors, diagnostics, styleElm) => {
  try {
    const parseResults = parseCss(styleElm.innerHTML);
    diagnostics.push(...parseResults.diagnostics);
    if (hasError(diagnostics)) {
      return;
    }
    try {
      styleElm.innerHTML = serializeCss(parseResults.stylesheet, {
        usedSelectors
      });
    } catch (e) {
      diagnostics.push({
        level: "warn",
        type: "css",
        header: "CSS Stringify",
        messageText: e,
        lines: []
      });
    }
  } catch (e) {
    diagnostics.push({
      level: "warn",
      type: "css",
      header: "CSS Parse",
      messageText: e,
      lines: []
    });
  }
};

// src/hydrate/runner/inspect-element.ts
function inspectElement(results, elm, depth) {
  const children = [...Array.from(elm.children), ...Array.from(elm.shadowRoot ? elm.shadowRoot.children : [])];
  for (let i = 0, ii = children.length; i < ii; i++) {
    const childElm = children[i];
    const tagName = childElm.nodeName.toLowerCase();
    if (tagName.includes("-")) {
      const cmp = results.components.find((c) => c.tag === tagName);
      if (cmp != null) {
        cmp.count++;
        if (depth > cmp.depth) {
          cmp.depth = depth;
        }
      }
    } else {
      switch (tagName) {
        case "a":
          const anchor = collectAttributes(childElm);
          anchor.href = childElm.href;
          if (typeof anchor.href === "string") {
            if (!results.anchors.some((a) => a.href === anchor.href)) {
              results.anchors.push(anchor);
            }
          }
          break;
        case "img":
          const img = collectAttributes(childElm);
          img.src = childElm.src;
          if (typeof img.src === "string") {
            if (!results.imgs.some((a) => a.src === img.src)) {
              results.imgs.push(img);
            }
          }
          break;
        case "link":
          const link = collectAttributes(childElm);
          link.href = childElm.href;
          if (typeof link.rel === "string" && link.rel.toLowerCase() === "stylesheet") {
            if (typeof link.href === "string") {
              if (!results.styles.some((s) => s.link === link.href)) {
                delete link.rel;
                delete link.type;
                results.styles.push(link);
              }
            }
          }
          break;
        case "script":
          const script = collectAttributes(childElm);
          if (childElm.hasAttribute("src")) {
            script.src = childElm.src;
            if (typeof script.src === "string") {
              if (!results.scripts.some((s) => s.src === script.src)) {
                results.scripts.push(script);
              }
            }
          } else {
            const staticDataKey = childElm.getAttribute("data-stencil-static");
            if (staticDataKey) {
              results.staticData.push({
                id: staticDataKey,
                type: childElm.getAttribute("type"),
                content: childElm.textContent
              });
            }
          }
          break;
      }
    }
    depth++;
    inspectElement(results, childElm, depth);
  }
}
function collectAttributes(node) {
  const parsedElm = {};
  const attrs = node.attributes;
  for (let i = 0, ii = attrs.length; i < ii; i++) {
    const attr = attrs.item(i);
    const attrName = attr.nodeName.toLowerCase();
    if (SKIP_ATTRS.has(attrName)) {
      continue;
    }
    const attrValue = attr.nodeValue;
    if (attrName === "class" && attrValue === "") {
      continue;
    }
    parsedElm[attrName] = attrValue;
  }
  return parsedElm;
}
var SKIP_ATTRS = /* @__PURE__ */ new Set(["s-id", "c-id"]);

// src/hydrate/runner/patch-dom-implementation.ts
function patchDomImplementation(doc2, opts) {
  let win2;
  if (doc2.defaultView != null) {
    opts.destroyWindow = true;
    patchWindow(doc2.defaultView);
    win2 = doc2.defaultView;
  } else {
    opts.destroyWindow = true;
    opts.destroyDocument = false;
    win2 = new MockWindow(false);
  }
  if (win2.document !== doc2) {
    win2.document = doc2;
  }
  if (doc2.defaultView !== win2) {
    doc2.defaultView = win2;
  }
  const HTMLElement2 = doc2.documentElement.constructor.prototype;
  if (typeof HTMLElement2.getRootNode !== "function") {
    const elm = doc2.createElement("unknown-element");
    const HTMLUnknownElement = elm.constructor.prototype;
    HTMLUnknownElement.getRootNode = getRootNode;
  }
  if (typeof doc2.createEvent === "function") {
    const CustomEvent2 = doc2.createEvent("CustomEvent").constructor;
    if (win2.CustomEvent !== CustomEvent2) {
      win2.CustomEvent = CustomEvent2;
    }
  }
  try {
    win2.__stencil_baseURI = doc2.baseURI;
  } catch (e) {
    Object.defineProperty(doc2, "baseURI", {
      get() {
        const baseElm = doc2.querySelector("base[href]");
        if (baseElm) {
          return new URL(baseElm.getAttribute("href"), win2.location.href).href;
        }
        return win2.location.href;
      }
    });
  }
  return win2;
}
function getRootNode(opts) {
  const isComposed = opts != null && opts.composed === true;
  let node = this;
  while (node.parentNode != null) {
    node = node.parentNode;
    if (isComposed === true && node.parentNode == null && node.host != null) {
      node = node.host;
    }
  }
  return node;
}

// src/hydrate/runner/render-utils.ts
function normalizeHydrateOptions(inputOpts) {
  const outputOpts = Object.assign(
    {
      serializeToHtml: false,
      destroyWindow: false,
      destroyDocument: false
    },
    inputOpts || {}
  );
  if (typeof outputOpts.clientHydrateAnnotations !== "boolean") {
    outputOpts.clientHydrateAnnotations = true;
  }
  if (typeof outputOpts.constrainTimeouts !== "boolean") {
    outputOpts.constrainTimeouts = true;
  }
  if (typeof outputOpts.maxHydrateCount !== "number") {
    outputOpts.maxHydrateCount = 300;
  }
  if (typeof outputOpts.runtimeLogging !== "boolean") {
    outputOpts.runtimeLogging = false;
  }
  if (typeof outputOpts.timeout !== "number") {
    outputOpts.timeout = 15e3;
  }
  if (Array.isArray(outputOpts.excludeComponents)) {
    outputOpts.excludeComponents = outputOpts.excludeComponents.filter(filterValidTags).map(mapValidTags);
  } else {
    outputOpts.excludeComponents = [];
  }
  if (Array.isArray(outputOpts.staticComponents)) {
    outputOpts.staticComponents = outputOpts.staticComponents.filter(filterValidTags).map(mapValidTags);
  } else {
    outputOpts.staticComponents = [];
  }
  return outputOpts;
}
function filterValidTags(tag) {
  return typeof tag === "string" && tag.includes("-");
}
function mapValidTags(tag) {
  return tag.trim().toLowerCase();
}
function generateHydrateResults(opts) {
  if (typeof opts.url !== "string") {
    opts.url = `https://hydrate.stenciljs.com/`;
  }
  if (typeof opts.buildId !== "string") {
    opts.buildId = createHydrateBuildId();
  }
  const results = {
    buildId: opts.buildId,
    diagnostics: [],
    url: opts.url,
    host: null,
    hostname: null,
    href: null,
    pathname: null,
    port: null,
    search: null,
    hash: null,
    html: null,
    httpStatus: null,
    hydratedCount: 0,
    anchors: [],
    components: [],
    imgs: [],
    scripts: [],
    staticData: [],
    styles: [],
    title: null
  };
  try {
    const url = new URL(opts.url, `https://hydrate.stenciljs.com/`);
    results.url = url.href;
    results.host = url.host;
    results.hostname = url.hostname;
    results.href = url.href;
    results.port = url.port;
    results.pathname = url.pathname;
    results.search = url.search;
    results.hash = url.hash;
  } catch (e) {
    renderCatchError(results, e);
  }
  return results;
}
var createHydrateBuildId = () => {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let buildId = "";
  while (buildId.length < 8) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    buildId += char;
    if (buildId.length === 1) {
      chars += "0123456789";
    }
  }
  return buildId;
};
function renderBuildDiagnostic(results, level, header, msg) {
  const diagnostic = {
    level,
    type: "build",
    header,
    messageText: msg,
    relFilePath: void 0,
    absFilePath: void 0,
    lines: []
  };
  if (results.pathname) {
    if (results.pathname !== "/") {
      diagnostic.header += ": " + results.pathname;
    }
  } else if (results.url) {
    diagnostic.header += ": " + results.url;
  }
  results.diagnostics.push(diagnostic);
  return diagnostic;
}
function renderBuildError(results, msg) {
  return renderBuildDiagnostic(results, "error", "Hydrate Error", msg || "");
}
function renderCatchError(results, err2) {
  const diagnostic = renderBuildError(results);
  if (err2 != null) {
    if (err2.stack != null) {
      diagnostic.messageText = err2.stack.toString();
    } else {
      if (err2.message != null) {
        diagnostic.messageText = err2.message.toString();
      } else {
        diagnostic.messageText = err2.toString();
      }
    }
  }
  return diagnostic;
}

// src/hydrate/runner/runtime-log.ts
function runtimeLogging(win2, opts, results) {
  try {
    const pathname = win2.location.pathname;
    win2.console.error = (...msgs) => {
      const errMsg = msgs.reduce((errMsg2, m) => {
        if (m) {
          if (m.stack != null) {
            return errMsg2 + " " + String(m.stack);
          } else {
            if (m.message != null) {
              return errMsg2 + " " + String(m.message);
            }
          }
        }
        return String(m);
      }, "").trim();
      if (errMsg !== "") {
        renderCatchError(results, errMsg);
        if (opts.runtimeLogging) {
          runtimeLog(pathname, "error", [errMsg]);
        }
      }
    };
    win2.console.debug = (...msgs) => {
      renderBuildDiagnostic(results, "debug", "Hydrate Debug", [...msgs].join(", "));
      if (opts.runtimeLogging) {
        runtimeLog(pathname, "debug", msgs);
      }
    };
    if (opts.runtimeLogging) {
      ["log", "warn", "assert", "info", "trace"].forEach((type) => {
        win2.console[type] = (...msgs) => {
          runtimeLog(pathname, type, msgs);
        };
      });
    }
  } catch (e) {
    renderCatchError(results, e);
  }
}
function runtimeLog(pathname, type, msgs) {
  global.console[type].apply(global.console, [`[ ${pathname}  ${type} ] `, ...msgs]);
}

// src/hydrate/runner/window-initialize.ts
var docData = {
  hostIds: 0,
  rootLevelIds: 0,
  staticComponents: /* @__PURE__ */ new Set()
};
function initializeWindow(win2, doc2, opts, results) {
  if (typeof opts.url === "string") {
    try {
      win2.location.href = opts.url;
    } catch (e) {
    }
  }
  if (typeof opts.userAgent === "string") {
    try {
      win2.navigator.userAgent = opts.userAgent;
    } catch (e) {
    }
  }
  if (typeof opts.cookie === "string") {
    try {
      doc2.cookie = opts.cookie;
    } catch (e) {
    }
  }
  if (typeof opts.referrer === "string") {
    try {
      doc2.referrer = opts.referrer;
    } catch (e) {
    }
  }
  if (typeof opts.direction === "string") {
    try {
      doc2.documentElement.setAttribute("dir", opts.direction);
    } catch (e) {
    }
  }
  if (typeof opts.language === "string") {
    try {
      doc2.documentElement.setAttribute("lang", opts.language);
    } catch (e) {
    }
  }
  if (typeof opts.buildId === "string") {
    try {
      doc2.documentElement.setAttribute("data-stencil-build", opts.buildId);
    } catch (e) {
    }
  }
  try {
    win2.customElements = null;
  } catch (e) {
  }
  if (opts.constrainTimeouts) {
    constrainTimeouts(win2);
  }
  runtimeLogging(win2, opts, results);
  doc2[STENCIL_DOC_DATA] = docData;
  return win2;
}

// src/hydrate/runner/render.ts
var NOOP = () => {
};
function streamToString(html, option) {
  return renderToString(html, option, true);
}
function renderToString(html, options, asStream) {
  const opts = normalizeHydrateOptions(options);
  opts.serializeToHtml = true;
  opts.fullDocument = typeof opts.fullDocument === "boolean" ? opts.fullDocument : true;
  opts.serializeShadowRoot = typeof opts.serializeShadowRoot === "boolean" ? opts.serializeShadowRoot : true;
  opts.constrainTimeouts = false;
  return hydrateDocument(html, opts, asStream);
}
function hydrateDocument(doc2, options, asStream) {
  const opts = normalizeHydrateOptions(options);
  let win2 = null;
  const results = generateHydrateResults(opts);
  if (hasError(results.diagnostics)) {
    return Promise.resolve(results);
  }
  if (typeof doc2 === "string") {
    try {
      opts.destroyWindow = true;
      opts.destroyDocument = true;
      win2 = new MockWindow(doc2);
      if (!asStream) {
        return render(win2, opts, results).then(() => results);
      }
      return renderStream(win2, opts, results);
    } catch (e) {
      if (win2 && win2.close) {
        win2.close();
      }
      win2 = null;
      renderCatchError(results, e);
      return Promise.resolve(results);
    }
  }
  if (isValidDocument(doc2)) {
    try {
      opts.destroyDocument = false;
      win2 = patchDomImplementation(doc2, opts);
      if (!asStream) {
        return render(win2, opts, results).then(() => results);
      }
      return renderStream(win2, opts, results);
    } catch (e) {
      if (win2 && win2.close) {
        win2.close();
      }
      win2 = null;
      renderCatchError(results, e);
      return Promise.resolve(results);
    }
  }
  renderBuildError(results, `Invalid html or document. Must be either a valid "html" string, or DOM "document".`);
  return Promise.resolve(results);
}
async function render(win2, opts, results) {
  if ("process" in globalThis && typeof process.on === "function" && !process.__stencilErrors) {
    process.__stencilErrors = true;
    process.on("unhandledRejection", (e) => {
      console.log("unhandledRejection", e);
    });
  }
  initializeWindow(win2, win2.document, opts, results);
  const beforeHydrateFn = typeof opts.beforeHydrate === "function" ? opts.beforeHydrate : NOOP;
  try {
    await Promise.resolve(beforeHydrateFn(win2.document));
    return new Promise((resolve) => {
      if (Array.isArray(opts.modes)) {
        modeResolutionChain.length = 0;
        opts.modes.forEach((mode) => setMode(mode));
      }
      return hydrateFactory(win2, opts, results, afterHydrate, resolve);
    });
  } catch (e) {
    renderCatchError(results, e);
    return finalizeHydrate(win2, win2.document, opts, results);
  }
}
function renderStream(win2, opts, results) {
  async function* processRender() {
    const renderResult = await render(win2, opts, results);
    yield renderResult.html;
  }
  return Readable.from(processRender());
}
async function afterHydrate(win2, opts, results, resolve) {
  const afterHydrateFn = typeof opts.afterHydrate === "function" ? opts.afterHydrate : NOOP;
  try {
    await Promise.resolve(afterHydrateFn(win2.document));
    return resolve(finalizeHydrate(win2, win2.document, opts, results));
  } catch (e) {
    renderCatchError(results, e);
    return resolve(finalizeHydrate(win2, win2.document, opts, results));
  }
}
function finalizeHydrate(win2, doc2, opts, results) {
  try {
    inspectElement(results, doc2.documentElement, 0);
    if (opts.removeUnusedStyles !== false) {
      try {
        removeUnusedStyles(doc2, results.diagnostics);
      } catch (e) {
        renderCatchError(results, e);
      }
    }
    if (typeof opts.title === "string") {
      try {
        doc2.title = opts.title;
      } catch (e) {
        renderCatchError(results, e);
      }
    }
    results.title = doc2.title;
    if (opts.removeScripts) {
      removeScripts(doc2.documentElement);
    }
    try {
      updateCanonicalLink(doc2, opts.canonicalUrl);
    } catch (e) {
      renderCatchError(results, e);
    }
    try {
      relocateMetaCharset(doc2);
    } catch (e) {
    }
    if (!hasError(results.diagnostics)) {
      results.httpStatus = 200;
    }
    try {
      const metaStatus = doc2.head.querySelector('meta[http-equiv="status"]');
      if (metaStatus != null) {
        const metaStatusContent = metaStatus.getAttribute("content");
        if (metaStatusContent && metaStatusContent.length > 0) {
          results.httpStatus = parseInt(metaStatusContent, 10);
        }
      }
    } catch (e) {
    }
    if (opts.clientHydrateAnnotations) {
      doc2.documentElement.classList.add("hydrated");
    }
    if (opts.serializeToHtml) {
      results.html = serializeDocumentToString(doc2, opts);
    }
  } catch (e) {
    renderCatchError(results, e);
  }
  destroyWindow(win2, doc2, opts, results);
  return results;
}
function destroyWindow(win2, doc2, opts, results) {
  if (!opts.destroyWindow) {
    return;
  }
  try {
    if (!opts.destroyDocument) {
      win2.document = null;
      doc2.defaultView = null;
    }
    if (win2.close) {
      win2.close();
    }
  } catch (e) {
    renderCatchError(results, e);
  }
}
function serializeDocumentToString(doc2, opts) {
  return serializeNodeToHtml(doc2, {
    approximateLineWidth: opts.approximateLineWidth,
    outerHtml: false,
    prettyHtml: opts.prettyHtml,
    removeAttributeQuotes: opts.removeAttributeQuotes,
    removeBooleanAttributeQuotes: opts.removeBooleanAttributeQuotes,
    removeEmptyAttributes: opts.removeEmptyAttributes,
    removeHtmlComments: opts.removeHtmlComments,
    serializeShadowRoot: opts.serializeShadowRoot,
    fullDocument: opts.fullDocument
  });
}
function isValidDocument(doc2) {
  return doc2 != null && doc2.nodeType === 9 && doc2.documentElement != null && doc2.documentElement.nodeType === 1 && doc2.body != null && doc2.body.nodeType === 1;
}
function removeScripts(elm) {
  const children = elm.children;
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];
    removeScripts(child);
    if (child.nodeName === "SCRIPT" || child.nodeName === "LINK" && child.getAttribute("rel") === "modulepreload") {
      child.remove();
    }
  }
}

export { createWindowFromHtml, hydrateDocument, renderToString, serializeDocumentToString, streamToString };
