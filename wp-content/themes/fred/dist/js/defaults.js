/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/fred/assets/js/defaults.ts":
/*!********************************************************!*\
  !*** ./wp-content/themes/fred/assets/js/defaults.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");

var focus_within_1 = __importDefault(__webpack_require__(/*! focus-within */ "./node_modules/focus-within/index.mjs"));

var zenscroll_1 = __importDefault(__webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js"));

var vanilla_lazyload_1 = __importDefault(__webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js"));

var baguettebox_js_1 = __importDefault(__webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js"));

focus_within_1["default"](document, {
  attr: false,
  className: 'focus-within'
});

if (document.querySelectorAll('.gallery')) {
  baguettebox_js_1["default"].run('.gallery');
}

var links = document.querySelectorAll('a');
links.forEach(function (link) {
  if (link.hostname != window.location.hostname) {
    link.setAttribute('rel', 'nofollow noopener');
  }
});
var lazyLoadImages = new vanilla_lazyload_1["default"]();
zenscroll_1["default"].setup(null, 0);

/***/ }),

/***/ "./node_modules/baguettebox.js/dist/baguetteBox.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/baguettebox.js/dist/baguetteBox.min.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){"use strict";var r,l,u,c,d,f='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',g='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',p='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',b={},v={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},m={},h=[],o=0,n=!1,i={},a=!1,y=/.+\.(gif|jpe?g|png|webp)/i,w={},k=[],s=null,x=function(e){-1!==e.target.id.indexOf("baguette-img")&&j()},E=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,D()},C=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,X()},B=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,j()},T=function(e){i.count++,1<i.count&&(i.multitouch=!0),i.startX=e.changedTouches[0].pageX,i.startY=e.changedTouches[0].pageY},N=function(e){if(!a&&!i.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-i.startX?(a=!0,D()):t.pageX-i.startX<-40?(a=!0,X()):100<i.startY-t.pageY&&j()}},L=function(){i.count--,i.count<=0&&(i.multitouch=!1),a=!1},A=function(){L()},P=function(e){"block"===r.style.display&&r.contains&&!r.contains(e.target)&&(e.stopPropagation(),Y())};function S(e){if(w.hasOwnProperty(e)){var t=w[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){W(e.imageElement,"click",e.eventHandler)}),h===e&&(h=[])}),delete w[e]}}function F(e){switch(e.keyCode){case 37:D();break;case 39:X();break;case 27:j();break;case 36:!function t(e){e&&e.preventDefault();return M(0)}(e);break;case 35:!function n(e){e&&e.preventDefault();return M(h.length-1)}(e)}}function H(e,t){if(h!==e){for(h=e,function s(e){e=e||{};for(var t in v)b[t]=v[t],"undefined"!=typeof e[t]&&(b[t]=e[t]);l.style.transition=l.style.webkitTransition="fadeIn"===b.animation?"opacity .4s ease":"slideIn"===b.animation?"":"none","auto"===b.buttons&&("ontouchstart"in window||1===h.length)&&(b.buttons=!1);u.style.display=c.style.display=b.buttons?"":"none";try{r.style.backgroundColor=b.overlayBackgroundColor}catch(n){}}(t);l.firstChild;)l.removeChild(l.firstChild);for(var n,o=[],i=[],a=k.length=0;a<e.length;a++)(n=J("div")).className="full-image",n.id="baguette-img-"+a,k.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),l.appendChild(k[a]);r.setAttribute("aria-labelledby",o.join(" ")),r.setAttribute("aria-describedby",i.join(" "))}}function I(e){b.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==r.style.display&&(U(document,"keydown",F),i={count:0,startX:null,startY:null},q(o=e,function(){z(o),V(o)}),R(),r.style.display="block",b.fullScreen&&function t(){r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.mozRequestFullScreen&&r.mozRequestFullScreen()}(),setTimeout(function(){r.className="visible",b.bodyClass&&document.body.classList&&document.body.classList.add(b.bodyClass),b.afterShow&&b.afterShow()},50),b.onChange&&b.onChange(o,k.length),s=document.activeElement,Y(),n=!0)}function Y(){b.buttons?u.focus():d.focus()}function j(){b.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==r.style.display&&(W(document,"keydown",F),r.className="",setTimeout(function(){r.style.display="none",document.fullscreen&&function e(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),b.bodyClass&&document.body.classList&&document.body.classList.remove(b.bodyClass),b.afterHide&&b.afterHide(),s&&s.focus(),n=!1},500))}function q(t,n){var e=k[t],o=h[t];if(void 0!==e&&void 0!==o)if(e.getElementsByTagName("img")[0])n&&n();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],s="function"==typeof b.captions?b.captions.call(h,i):i.getAttribute("data-caption")||i.title,r=function d(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;t=n[i[s]]||t}return t}(i),l=J("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',b.captions&&s){var u=J("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=s,l.appendChild(u)}e.appendChild(l);var c=J("img");c.onload=function(){var e=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(e),!b.async&&n&&n()},c.setAttribute("src",r),c.alt=a&&a.alt||"",b.titleTag&&s&&(c.title=s),l.appendChild(c),b.async&&n&&n()}}function X(){return M(o+1)}function D(){return M(o-1)}function M(e,t){return!n&&0<=e&&e<t.length?(H(t,b),I(e),!0):e<0?(b.animation&&O("left"),!1):e>=k.length?(b.animation&&O("right"),!1):(q(o=e,function(){z(o),V(o)}),R(),b.onChange&&b.onChange(o,k.length),!0)}function O(e){l.className="bounce-from-"+e,setTimeout(function(){l.className=""},400)}function R(){var e=100*-o+"%";"fadeIn"===b.animation?(l.style.opacity=0,setTimeout(function(){m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e,l.style.opacity=1},400)):m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e}function z(e){e-o>=b.preload||q(e+1,function(){z(e+1)})}function V(e){o-e>=b.preload||q(e-1,function(){V(e-1)})}function U(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)})}function W(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function G(e){return document.getElementById(e)}function J(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function K(e,t){return m.transforms=function n(){var e=J("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}(),m.svg=function o(){var e=J("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),m.passiveEvents=function i(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}(),function a(){if(r=G("baguetteBox-overlay"))return l=G("baguetteBox-slider"),u=G("previous-button"),c=G("next-button"),void(d=G("close-button"));(r=J("div")).setAttribute("role","dialog"),r.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(r),(l=J("div")).id="baguetteBox-slider",r.appendChild(l),(u=J("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=m.svg?f:"&lt;",r.appendChild(u),(c=J("button")).setAttribute("type","button"),c.id="next-button",c.setAttribute("aria-label","Next"),c.innerHTML=m.svg?g:"&gt;",r.appendChild(c),(d=J("button")).setAttribute("type","button"),d.id="close-button",d.setAttribute("aria-label","Close"),d.innerHTML=m.svg?p:"&times;",r.appendChild(d),u.className=c.className=d.className="baguetteBox-button",function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;U(r,"click",x),U(u,"click",E),U(c,"click",C),U(d,"click",B),U(l,"contextmenu",A),U(r,"touchstart",T,t),U(r,"touchmove",N,e),U(r,"touchend",L),U(document,"focus",P,!0)}()}(),S(e),function s(e,a){var t=document.querySelectorAll(e),n={galleries:[],nodeList:t};return w[e]=n,[].forEach.call(t,function(e){a&&a.filter&&(y=a.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,function(e){if(-1===e.className.indexOf(a&&a.ignoreClass))return y.test(e.href)})).length){var i=[];[].forEach.call(t,function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,H(i,a),I(t)},o={eventHandler:n,imageElement:e};U(e,"click",n),i.push(o)}),n.galleries.push(i)}}),n.galleries}(e,t)},show:M,showNext:X,showPrevious:D,hide:j,destroy:function e(){!function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;W(r,"click",x),W(u,"click",E),W(c,"click",C),W(d,"click",B),W(l,"contextmenu",A),W(r,"touchstart",T,t),W(r,"touchmove",N,e),W(r,"touchend",L),W(document,"focus",P,!0)}(),function t(){for(var e in w)w.hasOwnProperty(e)&&S(e)}(),W(document,"keydown",F),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),w={},h=[],o=0}}});

/***/ }),

/***/ "./node_modules/focus-visible/dist/focus-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
/***/ (function() {

(function (global, factory) {
   true ? factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
      if (
        el &&
        el !== document &&
        el.nodeName !== 'HTML' &&
        el.nodeName !== 'BODY' &&
        'classList' in el &&
        'contains' in el.classList
      ) {
        return true;
      }
      return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (
        e.target.classList.contains('focus-visible') ||
        e.target.hasAttribute('data-focus-visible-added')
      ) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
        addInitialPointerMoveListeners();
      }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  }

  // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }

})));


/***/ }),

/***/ "./node_modules/focus-within/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/focus-within/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function focusWithin(document, opts) {
  const className = Object(opts).className;
  const attr = Object(opts).attr || 'focus-within';
  const force = Object(opts).force;
  const lastElements = [];

  try {
    document.querySelector(':focus-within');

    if (!force) {
      return initialize;
    }
  } catch (ignoredError) {
    /* do nothing and continue */
  }

  function onfocuschange() {
    let lastElement;

    while (lastElement = lastElements.pop()) {
      if (attr) {
        lastElement.removeAttribute(attr);
      }

      if (className) {
        lastElement.classList.remove(className);
      }
    }

    let activeElement = document.activeElement; // only add focus if it has not been added and is not the document element

    if (!/^(#document|HTML|BODY)$/.test(Object(activeElement).nodeName)) {
      while (activeElement && activeElement.nodeType === 1) {
        if (attr) {
          activeElement.setAttribute(attr, '');
        }

        if (className) {
          activeElement.classList.add(className);
        }

        lastElements.push(activeElement);
        activeElement = activeElement.parentNode;
      }
    }
  }

  function initialize() {
    document.addEventListener('focus', onfocuschange, true);
    document.addEventListener('blur', onfocuschange, true);
  }
  /**
  * Callback wrapper for check loaded state
  */

  /* eslint-disable */


  !function load() {
    if (/m/.test(document.readyState)) {
      document.removeEventListener('readystatechange', load) | initialize();
    } else {
      document.addEventListener('readystatechange', load);
    }
  }();
  /* eslint-enable */

  return initialize;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (focusWithin);
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",p=function(t,n){return t.getAttribute(g+n)},b=function(t){return p(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===b(t)},y=function(t){return b(t)===_},A=[l,u,d,f],I=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},w=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},x=function(t,n){t&&(t.loadingCount+=n)},z=function(t,n){t&&(t.toLoadCount=n)},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e)},M=function(t,n){t.removeAttribute(n)},R=function(t){return!!t.llOriginalAttrs},G=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},T=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes)}},j=function(t,n){N(t,"sizes",p(t,n.data_sizes)),N(t,"srcset",p(t,n.data_srcset)),N(t,"src",p(t,n.data_src))},D=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},F=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n)},P={IMG:function(t,n){F(t,(function(t){G(t),j(t,n)})),G(t),j(t,n)},IFRAME:function(t,n){N(t,"src",p(t,n.data_src))},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",p(t,n.data_src))}))}(t),N(t,"poster",p(t,n.data_poster)),N(t,"src",p(t,n.data_src)),t.load()}},S=function(t,n){var e=P[t.tagName];e&&e(t,n)},V=function(t,n,e){x(e,1),L(t,n.class_loading),h(t,l),I(n.callback_loading,t,e)},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||I(t.callback_finish,n)},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},H=function(t,n,e){t.removeEventListener(n,e)},B=function(t){return!!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i)}delete t.llEvLisnrs}},K=function(t,n,e){!function(t){delete t.llTempImage}(t),x(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),w(t,n.class_loading),n.unobserve_completed&&O(t,e)},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e)}(i,(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_loaded),h(n,u),I(e.callback_loaded,n,i),o||$(e,i)}(0,t,n,e),J(i)}),(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_error),h(n,f),I(e.callback_error,n,i),o||$(e,i)}(0,t,n,e),J(i)}))},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),Q(t,n,e),function(t,n,e){var i=p(t,n.data_bg),o=p(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),V(t,n,e))}(t,n,e),function(t,n,e){var i=p(t,n.data_bg_multi),o=p(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,n,e){L(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),I(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),S(t,n),V(t,n,e)}(t,n,e)},Y=["IMG","IFRAME"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){h(t,"entered"),L(t,e.class_entered),w(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e)}(t,e,i),I(e.callback_enter,t,n,i),function(t){return A.indexOf(b(t))>=0}(t)||X(t,e,i)}(t.target,t,n,e):function(t,n,e,i){E(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return b(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){F(t,(function(t){D(t)})),D(t)}(t),function(t){F(t,(function(t){T(t)})),T(t)}(t),w(t,e.class_loading),x(i,-1),m(t),I(e.callback_cancel,t,n,i))}(t,n,e,i),I(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return b(t)===f}(t)},ot=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},rt=function(t,e){var o=c(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){w(n,t.class_error),m(n)})),n.update()}(t,e)}))}(o,this),this.update(e)};return rt.prototype={update:function(t){var n,o,r=this._settings,a=ot(t,r);z(this,a.length),!e&&i?Z(r)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){Q(t,n,e),S(t,n),h(t,_)}(t,n,e))})),z(e,0)}(a,r,this):(o=a,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;ot(t,e).forEach((function(t){O(t,n),X(t,e,n)}))}},rt.load=function(t,n){var e=c(n);X(t,e)},rt.resetStatus=function(t){m(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n)}(rt,window.lazyLoadOptions),rt}));


/***/ }),

/***/ "./node_modules/zenscroll/zenscroll.js":
/*!*********************************************!*\
  !*** ./node_modules/zenscroll/zenscroll.js ***!
  \*********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./wp-content/themes/fred/assets/js/defaults.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXBwaXAtdGhlbWUvLi93cC1jb250ZW50L3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL2RlZmF1bHRzLnRzIiwid2VicGFjazovL3BpcHBpcC10aGVtZS8uL25vZGVfbW9kdWxlcy9iYWd1ZXR0ZWJveC5qcy9kaXN0L2JhZ3VldHRlQm94Lm1pbi5qcyIsIndlYnBhY2s6Ly9waXBwaXAtdGhlbWUvLi9ub2RlX21vZHVsZXMvZm9jdXMtdmlzaWJsZS9kaXN0L2ZvY3VzLXZpc2libGUuanMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLXdpdGhpbi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lLy4vbm9kZV9tb2R1bGVzL3plbnNjcm9sbC96ZW5zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BpcHBpcC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0EsMEJBQVksUUFBWixFQUFzQjtBQUNwQixNQUFJLEVBQUUsS0FEYztBQUVwQixXQUFTLEVBQUU7QUFGUyxDQUF0Qjs7QUFvQkEsSUFBSSxRQUFRLENB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Q0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdlREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQTs7O0FBR0EsQ0FBQzs7Ozs7OztVQ3BXRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiL2pzL2RlZmF1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmb2N1cy12aXNpYmxlJ1xuaW1wb3J0IEZvY3VzV2l0aGluIGZyb20gJ2ZvY3VzLXdpdGhpbidcbmltcG9ydCB6ZW5zY3JvbGwgZnJvbSAnemVuc2Nyb2xsJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3ZhbmlsbGEtbGF6eWxvYWQnXG5pbXBvcnQgYmFndWV0dGVCb3ggZnJvbSAnYmFndWV0dGVib3guanMnXG5cbi8qKlxuICogRm9jdXMgd2l0aGluIHBvbHlmaWxsXG4gKi9cbkZvY3VzV2l0aGluKGRvY3VtZW50LCB7XG4gIGF0dHI6IGZhbHNlLFxuICBjbGFzc05hbWU6ICdmb2N1cy13aXRoaW4nLFxufSlcblxuLypcbiAgSW1hZ2UgZ2FsbGVyaWVzXG4gIHVybDogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxpY2tpdHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBVc2FnZTpcbiAgPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgICAgIDxhIGhyZWY9XCJwYXRoLXRvLWxhcmdlLWltYWdlXCIgZGF0YS1jYXB0aW9uPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJwYXRoLXRvLXRodW1ibmFpbFwiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gIDwvZGl2PlxuXG4gIE5vdGU6IElmIG5vdCB1c2luZywgcmVtb3ZlIEBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvc3JjL2JhZ3VldHRlQm94XCI7IGZyb20gYGFzc2V0cy9zYXNzL2dsb2JhbC5zY3NzYFxuKi9cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5JykpIHtcbiAgYmFndWV0dGVCb3gucnVuKCcuZ2FsbGVyeScpXG59XG5cbi8qXG4gIEF1dG9tYXRpY2FsbHkgc2V0IGV4dGVybmFsIGxpbmtzIHRvIGhhdmUgbm9mb2xsb3cvbm9vcGVuZXIgYXR0cnNcbiovXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5saW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICBpZiAobGluay5ob3N0bmFtZSAhPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpIHtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vZm9sbG93IG5vb3BlbmVyJylcbiAgfVxufSlcblxuLy8gTGF6eUxvYWRcbmNvbnN0IGxhenlMb2FkSW1hZ2VzID0gbmV3IExhenlMb2FkKClcblxuLypcbiAgWmVuc2Nyb2xsXG4gIC0gU2V0IGVkZ2Ugb2Zmc2V0IHRvIDAgdG8gcHJldm5ldCBicmVha2luZyB0YWIgb3JkZXJcbiovXG56ZW5zY3JvbGwuc2V0dXAobnVsbCwgMClcbiIsIi8qIVxuICogYmFndWV0dGVCb3guanNcbiAqIEBhdXRob3IgIGZlaW1vc2lcbiAqIEB2ZXJzaW9uIDEuMTEuMVxuICogQHVybCBodHRwczovL2dpdGh1Yi5jb20vZmVpbW9zaS9iYWd1ZXR0ZUJveC5qc1xuICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLmJhZ3VldHRlQm94PXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciByLGwsdSxjLGQsZj0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMzAgMTAgMTAgMzAgMzAgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsZz0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMTQgMTAgMzQgMzAgMTQgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicscD0nPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj48ZyBzdHJva2U9XCJyZ2IoMTYwLDE2MCwxNjApXCIgc3Ryb2tlLXdpZHRoPVwiNFwiPjxsaW5lIHgxPVwiNVwiIHkxPVwiNVwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIvPjxsaW5lIHgxPVwiNVwiIHkxPVwiMjVcIiB4Mj1cIjI1XCIgeTI9XCI1XCIvPjwvZz48L3N2Zz4nLGI9e30sdj17Y2FwdGlvbnM6ITAsYnV0dG9uczpcImF1dG9cIixmdWxsU2NyZWVuOiExLG5vU2Nyb2xsYmFyczohMSxib2R5Q2xhc3M6XCJiYWd1ZXR0ZUJveC1vcGVuXCIsdGl0bGVUYWc6ITEsYXN5bmM6ITEscHJlbG9hZDoyLGFuaW1hdGlvbjpcInNsaWRlSW5cIixhZnRlclNob3c6bnVsbCxhZnRlckhpZGU6bnVsbCxvbkNoYW5nZTpudWxsLG92ZXJsYXlCYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC44KVwifSxtPXt9LGg9W10sbz0wLG49ITEsaT17fSxhPSExLHk9Ly4rXFwuKGdpZnxqcGU/Z3xwbmd8d2VicCkvaSx3PXt9LGs9W10scz1udWxsLHg9ZnVuY3Rpb24oZSl7LTEhPT1lLnRhcmdldC5pZC5pbmRleE9mKFwiYmFndWV0dGUtaW1nXCIpJiZqKCl9LEU9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxEKCl9LEM9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxYKCl9LEI9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxqKCl9LFQ9ZnVuY3Rpb24oZSl7aS5jb3VudCsrLDE8aS5jb3VudCYmKGkubXVsdGl0b3VjaD0hMCksaS5zdGFydFg9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxpLnN0YXJ0WT1lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZfSxOPWZ1bmN0aW9uKGUpe2lmKCFhJiYhaS5tdWx0aXRvdWNoKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExO3ZhciB0PWUudG91Y2hlc1swXXx8ZS5jaGFuZ2VkVG91Y2hlc1swXTs0MDx0LnBhZ2VYLWkuc3RhcnRYPyhhPSEwLEQoKSk6dC5wYWdlWC1pLnN0YXJ0WDwtNDA/KGE9ITAsWCgpKToxMDA8aS5zdGFydFktdC5wYWdlWSYmaigpfX0sTD1mdW5jdGlvbigpe2kuY291bnQtLSxpLmNvdW50PD0wJiYoaS5tdWx0aXRvdWNoPSExKSxhPSExfSxBPWZ1bmN0aW9uKCl7TCgpfSxQPWZ1bmN0aW9uKGUpe1wiYmxvY2tcIj09PXIuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyYmIXIuY29udGFpbnMoZS50YXJnZXQpJiYoZS5zdG9wUHJvcGFnYXRpb24oKSxZKCkpfTtmdW5jdGlvbiBTKGUpe2lmKHcuaGFzT3duUHJvcGVydHkoZSkpe3ZhciB0PXdbZV0uZ2FsbGVyaWVzO1tdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe1tdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUpe1coZS5pbWFnZUVsZW1lbnQsXCJjbGlja1wiLGUuZXZlbnRIYW5kbGVyKX0pLGg9PT1lJiYoaD1bXSl9KSxkZWxldGUgd1tlXX19ZnVuY3Rpb24gRihlKXtzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDM3OkQoKTticmVhaztjYXNlIDM5OlgoKTticmVhaztjYXNlIDI3OmooKTticmVhaztjYXNlIDM2OiFmdW5jdGlvbiB0KGUpe2UmJmUucHJldmVudERlZmF1bHQoKTtyZXR1cm4gTSgwKX0oZSk7YnJlYWs7Y2FzZSAzNTohZnVuY3Rpb24gbihlKXtlJiZlLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIE0oaC5sZW5ndGgtMSl9KGUpfX1mdW5jdGlvbiBIKGUsdCl7aWYoaCE9PWUpe2ZvcihoPWUsZnVuY3Rpb24gcyhlKXtlPWV8fHt9O2Zvcih2YXIgdCBpbiB2KWJbdF09dlt0XSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZVt0XSYmKGJbdF09ZVt0XSk7bC5zdHlsZS50cmFuc2l0aW9uPWwuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImZhZGVJblwiPT09Yi5hbmltYXRpb24/XCJvcGFjaXR5IC40cyBlYXNlXCI6XCJzbGlkZUluXCI9PT1iLmFuaW1hdGlvbj9cIlwiOlwibm9uZVwiLFwiYXV0b1wiPT09Yi5idXR0b25zJiYoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8MT09PWgubGVuZ3RoKSYmKGIuYnV0dG9ucz0hMSk7dS5zdHlsZS5kaXNwbGF5PWMuc3R5bGUuZGlzcGxheT1iLmJ1dHRvbnM/XCJcIjpcIm5vbmVcIjt0cnl7ci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9Yi5vdmVybGF5QmFja2dyb3VuZENvbG9yfWNhdGNoKG4pe319KHQpO2wuZmlyc3RDaGlsZDspbC5yZW1vdmVDaGlsZChsLmZpcnN0Q2hpbGQpO2Zvcih2YXIgbixvPVtdLGk9W10sYT1rLmxlbmd0aD0wO2E8ZS5sZW5ndGg7YSsrKShuPUooXCJkaXZcIikpLmNsYXNzTmFtZT1cImZ1bGwtaW1hZ2VcIixuLmlkPVwiYmFndWV0dGUtaW1nLVwiK2Esay5wdXNoKG4pLG8ucHVzaChcImJhZ3VldHRlQm94LWZpZ3VyZS1cIithKSxpLnB1c2goXCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK2EpLGwuYXBwZW5kQ2hpbGQoa1thXSk7ci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIixvLmpvaW4oXCIgXCIpKSxyLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmpvaW4oXCIgXCIpKX19ZnVuY3Rpb24gSShlKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiKSxcImJsb2NrXCIhPT1yLnN0eWxlLmRpc3BsYXkmJihVKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGk9e2NvdW50OjAsc3RhcnRYOm51bGwsc3RhcnRZOm51bGx9LHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLHIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsYi5mdWxsU2NyZWVuJiZmdW5jdGlvbiB0KCl7ci5yZXF1ZXN0RnVsbHNjcmVlbj9yLnJlcXVlc3RGdWxsc2NyZWVuKCk6ci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9yLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6ci5tb3pSZXF1ZXN0RnVsbFNjcmVlbiYmci5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpfSgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLmNsYXNzTmFtZT1cInZpc2libGVcIixiLmJvZHlDbGFzcyYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChiLmJvZHlDbGFzcyksYi5hZnRlclNob3cmJmIuYWZ0ZXJTaG93KCl9LDUwKSxiLm9uQ2hhbmdlJiZiLm9uQ2hhbmdlKG8say5sZW5ndGgpLHM9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxZKCksbj0hMCl9ZnVuY3Rpb24gWSgpe2IuYnV0dG9ucz91LmZvY3VzKCk6ZC5mb2N1cygpfWZ1bmN0aW9uIGooKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpLFwibm9uZVwiIT09ci5zdHlsZS5kaXNwbGF5JiYoVyhkb2N1bWVudCxcImtleWRvd25cIixGKSxyLmNsYXNzTmFtZT1cIlwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZG9jdW1lbnQuZnVsbHNjcmVlbiYmZnVuY3Rpb24gZSgpe2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuP2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk6ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbj9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk6ZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4mJmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCl9KCksYi5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYi5ib2R5Q2xhc3MpLGIuYWZ0ZXJIaWRlJiZiLmFmdGVySGlkZSgpLHMmJnMuZm9jdXMoKSxuPSExfSw1MDApKX1mdW5jdGlvbiBxKHQsbil7dmFyIGU9a1t0XSxvPWhbdF07aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09bylpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKW4mJm4oKTtlbHNle3ZhciBpPW8uaW1hZ2VFbGVtZW50LGE9aS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIGIuY2FwdGlvbnM/Yi5jYXB0aW9ucy5jYWxsKGgsaSk6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIil8fGkudGl0bGUscj1mdW5jdGlvbiBkKGUpe3ZhciB0PWUuaHJlZjtpZihlLmRhdGFzZXQpe3ZhciBuPVtdO2Zvcih2YXIgbyBpbiBlLmRhdGFzZXQpXCJhdC1cIiE9PW8uc3Vic3RyaW5nKDAsMyl8fGlzTmFOKG8uc3Vic3RyaW5nKDMpKXx8KG5bby5yZXBsYWNlKFwiYXQtXCIsXCJcIildPWUuZGF0YXNldFtvXSk7Zm9yKHZhciBpPU9iamVjdC5rZXlzKG4pLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gcGFyc2VJbnQoZSwxMCk8cGFyc2VJbnQodCwxMCk/LTE6MX0pLGE9d2luZG93LmlubmVyV2lkdGgqd2luZG93LmRldmljZVBpeGVsUmF0aW8scz0wO3M8aS5sZW5ndGgtMSYmaVtzXTxhOylzKys7dD1uW2lbc11dfHx0fXJldHVybiB0fShpKSxsPUooXCJmaWd1cmVcIik7aWYobC5pZD1cImJhZ3VldHRlQm94LWZpZ3VyZS1cIit0LGwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtc3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMlwiPjwvZGl2PjwvZGl2PicsYi5jYXB0aW9ucyYmcyl7dmFyIHU9SihcImZpZ2NhcHRpb25cIik7dS5pZD1cImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrdCx1LmlubmVySFRNTD1zLGwuYXBwZW5kQ2hpbGQodSl9ZS5hcHBlbmRDaGlsZChsKTt2YXIgYz1KKFwiaW1nXCIpO2Mub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWd1ZXR0ZS1pbWctXCIrdCtcIiAuYmFndWV0dGVCb3gtc3Bpbm5lclwiKTtsLnJlbW92ZUNoaWxkKGUpLCFiLmFzeW5jJiZuJiZuKCl9LGMuc2V0QXR0cmlidXRlKFwic3JjXCIsciksYy5hbHQ9YSYmYS5hbHR8fFwiXCIsYi50aXRsZVRhZyYmcyYmKGMudGl0bGU9cyksbC5hcHBlbmRDaGlsZChjKSxiLmFzeW5jJiZuJiZuKCl9fWZ1bmN0aW9uIFgoKXtyZXR1cm4gTShvKzEpfWZ1bmN0aW9uIEQoKXtyZXR1cm4gTShvLTEpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4hbiYmMDw9ZSYmZTx0Lmxlbmd0aD8oSCh0LGIpLEkoZSksITApOmU8MD8oYi5hbmltYXRpb24mJk8oXCJsZWZ0XCIpLCExKTplPj1rLmxlbmd0aD8oYi5hbmltYXRpb24mJk8oXCJyaWdodFwiKSwhMSk6KHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLGIub25DaGFuZ2UmJmIub25DaGFuZ2UobyxrLmxlbmd0aCksITApfWZ1bmN0aW9uIE8oZSl7bC5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1cIitlLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLmNsYXNzTmFtZT1cIlwifSw0MDApfWZ1bmN0aW9uIFIoKXt2YXIgZT0xMDAqLW8rXCIlXCI7XCJmYWRlSW5cIj09PWIuYW5pbWF0aW9uPyhsLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bS50cmFuc2Zvcm1zP2wuc3R5bGUudHJhbnNmb3JtPWwuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcIiwwLDApXCI6bC5zdHlsZS5sZWZ0PWUsbC5zdHlsZS5vcGFjaXR5PTF9LDQwMCkpOm0udHJhbnNmb3Jtcz9sLnN0eWxlLnRyYW5zZm9ybT1sLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOmwuc3R5bGUubGVmdD1lfWZ1bmN0aW9uIHooZSl7ZS1vPj1iLnByZWxvYWR8fHEoZSsxLGZ1bmN0aW9uKCl7eihlKzEpfSl9ZnVuY3Rpb24gVihlKXtvLWU+PWIucHJlbG9hZHx8cShlLTEsZnVuY3Rpb24oKXtWKGUtMSl9KX1mdW5jdGlvbiBVKGUsdCxuLG8pe2UuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIodCxuLG8pOmUuYXR0YWNoRXZlbnQoXCJvblwiK3QsZnVuY3Rpb24oZSl7KGU9ZXx8d2luZG93LmV2ZW50KS50YXJnZXQ9ZS50YXJnZXR8fGUuc3JjRWxlbWVudCxuKGUpfSl9ZnVuY3Rpb24gVyhlLHQsbixvKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbixvKTplLmRldGFjaEV2ZW50KFwib25cIit0LG4pfWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpfWZ1bmN0aW9uIEooZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSl9cmV0dXJuW10uZm9yRWFjaHx8KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspZS5jYWxsKHQsdGhpc1tuXSxuLHRoaXMpfSksW10uZmlsdGVyfHwoQXJyYXkucHJvdG90eXBlLmZpbHRlcj1mdW5jdGlvbihlLHQsbixvLGkpe2ZvcihuPXRoaXMsbz1bXSxpPTA7aTxuLmxlbmd0aDtpKyspZS5jYWxsKHQsbltpXSxpLG4pJiZvLnB1c2gobltpXSk7cmV0dXJuIG99KSx7cnVuOmZ1bmN0aW9uIEsoZSx0KXtyZXR1cm4gbS50cmFuc2Zvcm1zPWZ1bmN0aW9uIG4oKXt2YXIgZT1KKFwiZGl2XCIpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN0eWxlLnBlcnNwZWN0aXZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZX0oKSxtLnN2Zz1mdW5jdGlvbiBvKCl7dmFyIGU9SihcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8c3ZnLz5cIixcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT0oZS5maXJzdENoaWxkJiZlLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKX0oKSxtLnBhc3NpdmVFdmVudHM9ZnVuY3Rpb24gaSgpe3ZhciBlPSExO3RyeXt2YXIgdD1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe2U9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsbnVsbCx0KX1jYXRjaChuKXt9cmV0dXJuIGV9KCksZnVuY3Rpb24gYSgpe2lmKHI9RyhcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpcmV0dXJuIGw9RyhcImJhZ3VldHRlQm94LXNsaWRlclwiKSx1PUcoXCJwcmV2aW91cy1idXR0b25cIiksYz1HKFwibmV4dC1idXR0b25cIiksdm9pZChkPUcoXCJjbG9zZS1idXR0b25cIikpOyhyPUooXCJkaXZcIikpLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSxyLmlkPVwiYmFndWV0dGVCb3gtb3ZlcmxheVwiLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChyKSwobD1KKFwiZGl2XCIpKS5pZD1cImJhZ3VldHRlQm94LXNsaWRlclwiLHIuYXBwZW5kQ2hpbGQobCksKHU9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLHUuaWQ9XCJwcmV2aW91cy1idXR0b25cIix1LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlByZXZpb3VzXCIpLHUuaW5uZXJIVE1MPW0uc3ZnP2Y6XCImbHQ7XCIsci5hcHBlbmRDaGlsZCh1KSwoYz1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5pZD1cIm5leHQtYnV0dG9uXCIsYy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJOZXh0XCIpLGMuaW5uZXJIVE1MPW0uc3ZnP2c6XCImZ3Q7XCIsci5hcHBlbmRDaGlsZChjKSwoZD1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZC5pZD1cImNsb3NlLWJ1dHRvblwiLGQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiQ2xvc2VcIiksZC5pbm5lckhUTUw9bS5zdmc/cDpcIiZ0aW1lcztcIixyLmFwcGVuZENoaWxkKGQpLHUuY2xhc3NOYW1lPWMuY2xhc3NOYW1lPWQuY2xhc3NOYW1lPVwiYmFndWV0dGVCb3gtYnV0dG9uXCIsZnVuY3Rpb24gbigpe3ZhciBlPW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMX06bnVsbCx0PW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMH06bnVsbDtVKHIsXCJjbGlja1wiLHgpLFUodSxcImNsaWNrXCIsRSksVShjLFwiY2xpY2tcIixDKSxVKGQsXCJjbGlja1wiLEIpLFUobCxcImNvbnRleHRtZW51XCIsQSksVShyLFwidG91Y2hzdGFydFwiLFQsdCksVShyLFwidG91Y2htb3ZlXCIsTixlKSxVKHIsXCJ0b3VjaGVuZFwiLEwpLFUoZG9jdW1lbnQsXCJmb2N1c1wiLFAsITApfSgpfSgpLFMoZSksZnVuY3Rpb24gcyhlLGEpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSksbj17Z2FsbGVyaWVzOltdLG5vZGVMaXN0OnR9O3JldHVybiB3W2VdPW4sW10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSl7YSYmYS5maWx0ZXImJih5PWEuZmlsdGVyKTt2YXIgdD1bXTtpZih0PVwiQVwiPT09ZS50YWdOYW1lP1tlXTplLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSwwIT09KHQ9W10uZmlsdGVyLmNhbGwodCxmdW5jdGlvbihlKXtpZigtMT09PWUuY2xhc3NOYW1lLmluZGV4T2YoYSYmYS5pZ25vcmVDbGFzcykpcmV0dXJuIHkudGVzdChlLmhyZWYpfSkpLmxlbmd0aCl7dmFyIGk9W107W10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExLEgoaSxhKSxJKHQpfSxvPXtldmVudEhhbmRsZXI6bixpbWFnZUVsZW1lbnQ6ZX07VShlLFwiY2xpY2tcIixuKSxpLnB1c2gobyl9KSxuLmdhbGxlcmllcy5wdXNoKGkpfX0pLG4uZ2FsbGVyaWVzfShlLHQpfSxzaG93Ok0sc2hvd05leHQ6WCxzaG93UHJldmlvdXM6RCxoaWRlOmosZGVzdHJveTpmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uIG4oKXt2YXIgZT1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITF9Om51bGwsdD1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITB9Om51bGw7VyhyLFwiY2xpY2tcIix4KSxXKHUsXCJjbGlja1wiLEUpLFcoYyxcImNsaWNrXCIsQyksVyhkLFwiY2xpY2tcIixCKSxXKGwsXCJjb250ZXh0bWVudVwiLEEpLFcocixcInRvdWNoc3RhcnRcIixULHQpLFcocixcInRvdWNobW92ZVwiLE4sZSksVyhyLFwidG91Y2hlbmRcIixMKSxXKGRvY3VtZW50LFwiZm9jdXNcIixQLCEwKX0oKSxmdW5jdGlvbiB0KCl7Zm9yKHZhciBlIGluIHcpdy5oYXNPd25Qcm9wZXJ0eShlKSYmUyhlKX0oKSxXKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpLHc9e30saD1bXSxvPTB9fX0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIDpmb2N1cy12aXNpYmxlIHBvbHlmaWxsIGF0IHRoZSBnaXZlbiBzY29wZS5cbiAgICogQSBzY29wZSBpbiB0aGlzIGNhc2UgaXMgZWl0aGVyIHRoZSB0b3AtbGV2ZWwgRG9jdW1lbnQgb3IgYSBTaGFkb3cgUm9vdC5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8U2hhZG93Um9vdCl9IHNjb3BlXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChzY29wZSkge1xuICAgIHZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gbnVsbDtcblxuICAgIHZhciBpbnB1dFR5cGVzQWxsb3dsaXN0ID0ge1xuICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgIHNlYXJjaDogdHJ1ZSxcbiAgICAgIHVybDogdHJ1ZSxcbiAgICAgIHRlbDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICBudW1iZXI6IHRydWUsXG4gICAgICBkYXRlOiB0cnVlLFxuICAgICAgbW9udGg6IHRydWUsXG4gICAgICB3ZWVrOiB0cnVlLFxuICAgICAgdGltZTogdHJ1ZSxcbiAgICAgIGRhdGV0aW1lOiB0cnVlLFxuICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxlZ2FjeSBicm93c2VycyBhbmQgaWZyYW1lcyB3aGljaCBzb21ldGltZXMgZm9jdXNcbiAgICAgKiBlbGVtZW50cyBsaWtlIGRvY3VtZW50LCBib2R5LCBhbmQgbm9uLWludGVyYWN0aXZlIFNWRy5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvY3VzVGFyZ2V0KGVsKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsICYmXG4gICAgICAgIGVsICE9PSBkb2N1bWVudCAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmXG4gICAgICAgIGVsLm5vZGVOYW1lICE9PSAnQk9EWScgJiZcbiAgICAgICAgJ2NsYXNzTGlzdCcgaW4gZWwgJiZcbiAgICAgICAgJ2NvbnRhaW5zJyBpbiBlbC5jbGFzc0xpc3RcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gICAgICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICAgICAqIGA6Zm9jdXMtdmlzaWJsZWAgd2hlbiBmb2N1c2VkLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGVsKSB7XG4gICAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cbiAgICAgIGlmICh0YWdOYW1lID09PSAnSU5QVVQnICYmIGlucHV0VHlwZXNBbGxvd2xpc3RbdHlwZV0gJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJiAhZWwucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3QgYWRkZWQgYnlcbiAgICAgKiB0aGUgYXV0aG9yLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRGb2N1c1Zpc2libGVDbGFzcyhlbCkge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXZpc2libGUnKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJywgJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQgaWYgaXQgd2FzIG5vdFxuICAgICAqIG9yaWdpbmFsbHkgYWRkZWQgYnkgdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBtb3N0IHJlY2VudCB1c2VyIGludGVyYWN0aW9uIHdhcyB2aWEgdGhlIGtleWJvYXJkO1xuICAgICAqIGFuZCB0aGUga2V5IHByZXNzIGRpZCBub3QgaW5jbHVkZSBhIG1ldGEsIGFsdC9vcHRpb24sIG9yIGNvbnRyb2wga2V5O1xuICAgICAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gICAgICogQXBwbHkgYGZvY3VzLXZpc2libGVgIHRvIGFueSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGFuZCBrZWVwIHRyYWNrXG4gICAgICogb2Ygb3VyIGtleWJvYXJkIG1vZGFsaXR5IHN0YXRlIHdpdGggYGhhZEtleWJvYXJkRXZlbnRgLlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1ZhbGlkRm9jdXNUYXJnZXQoc2NvcGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3Moc2NvcGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIGF0IGFueSBwb2ludCBhIHVzZXIgY2xpY2tzIHdpdGggYSBwb2ludGluZyBkZXZpY2UsIGVuc3VyZSB0aGF0IHdlIGNoYW5nZVxuICAgICAqIHRoZSBtb2RhbGl0eSBhd2F5IGZyb20ga2V5Ym9hcmQuXG4gICAgICogVGhpcyBhdm9pZHMgdGhlIHNpdHVhdGlvbiB3aGVyZSBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBhbiBhbHJlYWR5IGZvY3VzZWRcbiAgICAgKiBlbGVtZW50LCBhbmQgdGhlbiBjbGlja3Mgb24gYSBkaWZmZXJlbnQgZWxlbWVudCwgZm9jdXNpbmcgaXQgd2l0aCBhXG4gICAgICogcG9pbnRpbmcgZGV2aWNlLCB3aGlsZSB3ZSBzdGlsbCB0aGluayB3ZSdyZSBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlKSB7XG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYGZvY3VzYCwgYWRkIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgdG8gdGhlIHRhcmdldCBpZjpcbiAgICAgKiAtIHRoZSB0YXJnZXQgcmVjZWl2ZWQgZm9jdXMgYXMgYSByZXN1bHQgb2Yga2V5Ym9hcmQgbmF2aWdhdGlvbiwgb3JcbiAgICAgKiAtIHRoZSBldmVudCB0YXJnZXQgaXMgYW4gZWxlbWVudCB0aGF0IHdpbGwgbGlrZWx5IHJlcXVpcmUgaW50ZXJhY3Rpb25cbiAgICAgKiAgIHZpYSB0aGUga2V5Ym9hcmQgKGUuZy4gYSB0ZXh0IGJveClcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICAvLyBQcmV2ZW50IElFIGZyb20gZm9jdXNpbmcgdGhlIGRvY3VtZW50IG9yIEhUTUwgZWxlbWVudC5cbiAgICAgIGlmICghaXNWYWxpZEZvY3VzVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGUudGFyZ2V0KSkge1xuICAgICAgICBhZGRGb2N1c1Zpc2libGVDbGFzcyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYGJsdXJgLCByZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSB0YXJnZXQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpIHx8XG4gICAgICAgIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJylcbiAgICAgICkge1xuICAgICAgICAvLyBUbyBkZXRlY3QgYSB0YWIvd2luZG93IHN3aXRjaCwgd2UgbG9vayBmb3IgYSBibHVyIGV2ZW50IGZvbGxvd2VkXG4gICAgICAgIC8vIHJhcGlkbHkgYnkgYSB2aXNpYmlsaXR5IGNoYW5nZS5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3Qgc2VlIGEgdmlzaWJpbGl0eSBjaGFuZ2Ugd2l0aGluIDEwMG1zLCBpdCdzIHByb2JhYmx5IGFcbiAgICAgICAgLy8gcmVndWxhciBmb2N1cyBjaGFuZ2UuXG4gICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQpO1xuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICByZW1vdmVGb2N1c1Zpc2libGVDbGFzcyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHVzZXIgY2hhbmdlcyB0YWJzLCBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBwcmV2aW91c2x5XG4gICAgICogZm9jdXNlZCBlbGVtZW50IGhhZCAuZm9jdXMtdmlzaWJsZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKGUpIHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAgICAgLy8gb24gdGhlIGVsZW1lbnQgKFNhZmFyaSBhY3R1YWxseSBjYWxscyBpdCB0d2ljZSkuXG4gICAgICAgIC8vIElmIHRoaXMgdGFiIGNoYW5nZSBjYXVzZWQgYSBibHVyIG9uIGFuIGVsZW1lbnQgd2l0aCBmb2N1cy12aXNpYmxlLFxuICAgICAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgICAgIGlmIChoYWRGb2N1c1Zpc2libGVSZWNlbnRseSkge1xuICAgICAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGdyb3VwIG9mIGxpc3RlbmVycyB0byBkZXRlY3QgdXNhZ2Ugb2YgYW55IHBvaW50aW5nIGRldmljZXMuXG4gICAgICogVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgcG9seWZpbGwgZmlyc3QgbG9hZHMsIGFuZCBhbnl0aW1lXG4gICAgICogdGhlIHdpbmRvdyBpcyBibHVycmVkLCBzbyB0aGF0IHRoZXkgYXJlIGFjdGl2ZSB3aGVuIHRoZSB3aW5kb3cgcmVnYWluc1xuICAgICAqIGZvY3VzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHBvbGZ5aWxsIGZpcnN0IGxvYWRzLCBhc3N1bWUgdGhlIHVzZXIgaXMgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogSWYgYW55IGV2ZW50IGlzIHJlY2VpdmVkIGZyb20gYSBwb2ludGluZyBkZXZpY2UgKGUuZy4gbW91c2UsIHBvaW50ZXIsXG4gICAgICogdG91Y2gpLCB0dXJuIG9mZiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBUaGlzIGFjY291bnRzIGZvciBzaXR1YXRpb25zIHdoZXJlIGZvY3VzIGVudGVycyB0aGUgcGFnZSBmcm9tIHRoZSBVUkwgYmFyLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkluaXRpYWxQb2ludGVyTW92ZShlKSB7XG4gICAgICAvLyBXb3JrIGFyb3VuZCBhIFNhZmFyaSBxdWlyayB0aGF0IGZpcmVzIGEgbW91c2Vtb3ZlIG9uIDxodG1sPiB3aGVuZXZlciB0aGVcbiAgICAgIC8vIHdpbmRvdyBibHVycywgZXZlbiBpZiB5b3UncmUgdGFiYmluZyBvdXQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgJiYgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgICAgcmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gRm9yIHNvbWUga2luZHMgb2Ygc3RhdGUsIHdlIGFyZSBpbnRlcmVzdGVkIGluIGNoYW5nZXMgYXQgdGhlIGdsb2JhbCBzY29wZVxuICAgIC8vIG9ubHkuIEZvciBleGFtcGxlLCBnbG9iYWwgcG9pbnRlciBpbnB1dCwgZ2xvYmFsIGtleSBwcmVzc2VzIGFuZCBnbG9iYWxcbiAgICAvLyB2aXNpYmlsaXR5IGNoYW5nZSBzaG91bGQgYWZmZWN0IHRoZSBzdGF0ZSBhdCBldmVyeSBzY29wZTpcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCB0cnVlKTtcblxuICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuXG4gICAgLy8gRm9yIGZvY3VzIGFuZCBibHVyLCB3ZSBzcGVjaWZpY2FsbHkgY2FyZSBhYm91dCBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBsb2NhbFxuICAgIC8vIHNjb3BlLiBUaGlzIGlzIGJlY2F1c2UgZm9jdXMgLyBibHVyIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZSBmcm9tIHdpdGhpbiBhXG4gICAgLy8gc2hhZG93IHJvb3QgYXJlIG5vdCByZS1kaXNwYXRjaGVkIGZyb20gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCB3YXMgYWxyZWFkeVxuICAgIC8vIHRoZSBhY3RpdmUgZWxlbWVudCBpbiBpdHMgb3duIHNjb3BlOlxuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cywgdHJ1ZSk7XG4gICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1ciwgdHJ1ZSk7XG5cbiAgICAvLyBXZSBkZXRlY3QgdGhhdCBhIG5vZGUgaXMgYSBTaGFkb3dSb290IGJ5IGVuc3VyaW5nIHRoYXQgaXQgaXMgYVxuICAgIC8vIERvY3VtZW50RnJhZ21lbnQgYW5kIGFsc28gaGFzIGEgaG9zdCBwcm9wZXJ0eS4gVGhpcyBjaGVjayBjb3ZlcnMgbmF0aXZlXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYW5kIHBvbHlmaWxsIGltcGxlbWVudGF0aW9uIHRyYW5zcGFyZW50bHkuIElmIHdlIG9ubHkgY2FyZWRcbiAgICAvLyBhYm91dCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCB3ZSBjb3VsZCBqdXN0IGNoZWNrIGlmIHRoZSBzY29wZSB3YXNcbiAgICAvLyBhbiBpbnN0YW5jZSBvZiBhIFNoYWRvd1Jvb3QuXG4gICAgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgJiYgc2NvcGUuaG9zdCkge1xuICAgICAgLy8gU2luY2UgYSBTaGFkb3dSb290IGlzIGEgc3BlY2lhbCBraW5kIG9mIERvY3VtZW50RnJhZ21lbnQsIGl0IGRvZXMgbm90XG4gICAgICAvLyBoYXZlIGEgcm9vdCBlbGVtZW50IHRvIGFkZCBhIGNsYXNzIHRvLiBTbywgd2UgYWRkIHRoaXMgYXR0cmlidXRlIHRvIHRoZVxuICAgICAgLy8gaG9zdCBlbGVtZW50IGluc3RlYWQ6XG4gICAgICBzY29wZS5ob3N0LnNldEF0dHJpYnV0ZSgnZGF0YS1qcy1mb2N1cy12aXNpYmxlJywgJycpO1xuICAgIH0gZWxzZSBpZiAoc2NvcGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzLWZvY3VzLXZpc2libGUnKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8gd3JhcCBhbGwgcmVmZXJlbmNlcyB0byBnbG9iYWwgd2luZG93IGFuZCBkb2N1bWVudCBpblxuICAvLyB0aGVzZSBjaGVja3MgdG8gc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgdXNlIGNhc2VzXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZS9pc3N1ZXMvMTk5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTWFrZSB0aGUgcG9seWZpbGwgaGVscGVyIGdsb2JhbGx5IGF2YWlsYWJsZS4gVGhpcyBjYW4gYmUgdXNlZCBhcyBhIHNpZ25hbFxuICAgIC8vIHRvIGludGVyZXN0ZWQgbGlicmFyaWVzIHRoYXQgd2lzaCB0byBjb29yZGluYXRlIHdpdGggdGhlIHBvbHlmaWxsIGZvciBlLmcuLFxuICAgIC8vIGFwcGx5aW5nIHRoZSBwb2x5ZmlsbCB0byBhIHNoYWRvdyByb290OlxuICAgIHdpbmRvdy5hcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsID0gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbDtcblxuICAgIC8vIE5vdGlmeSBpbnRlcmVzdGVkIGxpYnJhcmllcyBvZiB0aGUgcG9seWZpbGwncyBwcmVzZW5jZSwgaW4gY2FzZSB0aGVcbiAgICAvLyBwb2x5ZmlsbCB3YXMgbG9hZGVkIGxhemlseTpcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICB0cnkge1xuICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2ZvY3VzLXZpc2libGUtcG9seWZpbGwtcmVhZHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHVzaW5nIEN1c3RvbUV2ZW50IGFzIGEgY29uc3RydWN0b3IgZGlyZWN0bHk6XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5JywgZmFsc2UsIGZhbHNlLCB7fSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBBcHBseSB0aGUgcG9seWZpbGwgdG8gdGhlIGdsb2JhbCBkb2N1bWVudCwgc28gdGhhdCBubyBKYXZhU2NyaXB0XG4gICAgLy8gY29vcmRpbmF0aW9uIGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgcG9seWZpbGwgaW4gdGhlIHRvcC1sZXZlbCBkb2N1bWVudDpcbiAgICBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKGRvY3VtZW50KTtcbiAgfVxuXG59KSkpO1xuIiwiZnVuY3Rpb24gZm9jdXNXaXRoaW4oZG9jdW1lbnQsIG9wdHMpIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0KG9wdHMpLmNsYXNzTmFtZTtcbiAgY29uc3QgYXR0ciA9IE9iamVjdChvcHRzKS5hdHRyIHx8ICdmb2N1cy13aXRoaW4nO1xuICBjb25zdCBmb3JjZSA9IE9iamVjdChvcHRzKS5mb3JjZTtcbiAgY29uc3QgbGFzdEVsZW1lbnRzID0gW107XG5cbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMtd2l0aGluJyk7XG5cbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbGl6ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGlnbm9yZWRFcnJvcikge1xuICAgIC8qIGRvIG5vdGhpbmcgYW5kIGNvbnRpbnVlICovXG4gIH1cblxuICBmdW5jdGlvbiBvbmZvY3VzY2hhbmdlKCkge1xuICAgIGxldCBsYXN0RWxlbWVudDtcblxuICAgIHdoaWxlIChsYXN0RWxlbWVudCA9IGxhc3RFbGVtZW50cy5wb3AoKSkge1xuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgbGFzdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGxhc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IC8vIG9ubHkgYWRkIGZvY3VzIGlmIGl0IGhhcyBub3QgYmVlbiBhZGRlZCBhbmQgaXMgbm90IHRoZSBkb2N1bWVudCBlbGVtZW50XG5cbiAgICBpZiAoIS9eKCNkb2N1bWVudHxIVE1MfEJPRFkpJC8udGVzdChPYmplY3QoYWN0aXZlRWxlbWVudCkubm9kZU5hbWUpKSB7XG4gICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEVsZW1lbnRzLnB1c2goYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uZm9jdXNjaGFuZ2UsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbmZvY3VzY2hhbmdlLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgKiBDYWxsYmFjayB3cmFwcGVyIGZvciBjaGVjayBsb2FkZWQgc3RhdGVcbiAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cbiAgIWZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgaWYgKC9tLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbG9hZCkgfCBpbml0aWFsaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsb2FkKTtcbiAgICB9XG4gIH0oKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIHJldHVybiBpbml0aWFsaXplO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb2N1c1dpdGhpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PXR8fHNlbGYpLkxhenlMb2FkPW4oKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KCl7cmV0dXJuKHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIGU9YXJndW1lbnRzW25dO2Zvcih2YXIgaSBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiYodFtpXT1lW2ldKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9biYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT1uJiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz1uJiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikscj1uJiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLGE9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8bj9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX3Bvc3RlcjpcInBvc3RlclwiLGNsYXNzX2FwcGxpZWQ6XCJhcHBsaWVkXCIsY2xhc3NfbG9hZGluZzpcImxvYWRpbmdcIixjbGFzc19sb2FkZWQ6XCJsb2FkZWRcIixjbGFzc19lcnJvcjpcImVycm9yXCIsY2xhc3NfZW50ZXJlZDpcImVudGVyZWRcIixjbGFzc19leGl0ZWQ6XCJleGl0ZWRcIix1bm9ic2VydmVfY29tcGxldGVkOiEwLHVub2JzZXJ2ZV9lbnRlcmVkOiExLGNhbmNlbF9vbl9leGl0OiEwLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX2FwcGxpZWQ6bnVsbCxjYWxsYmFja19sb2FkaW5nOm51bGwsY2FsbGJhY2tfbG9hZGVkOm51bGwsY2FsbGJhY2tfZXJyb3I6bnVsbCxjYWxsYmFja19maW5pc2g6bnVsbCxjYWxsYmFja19jYW5jZWw6bnVsbCx1c2VfbmF0aXZlOiExfSxjPWZ1bmN0aW9uKG4pe3JldHVybiB0KHt9LGEsbil9LHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxpPVwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIsbz1uZXcgdChuKTt0cnl7ZT1uZXcgQ3VzdG9tRXZlbnQoaSx7ZGV0YWlsOntpbnN0YW5jZTpvfX0pfWNhdGNoKHQpeyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChpLCExLCExLHtpbnN0YW5jZTpvfSl9d2luZG93LmRpc3BhdGNoRXZlbnQoZSl9LGw9XCJsb2FkaW5nXCIsdT1cImxvYWRlZFwiLGQ9XCJhcHBsaWVkXCIsZj1cImVycm9yXCIsXz1cIm5hdGl2ZVwiLGc9XCJkYXRhLVwiLHY9XCJsbC1zdGF0dXNcIixwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuZ2V0QXR0cmlidXRlKGcrbil9LGI9ZnVuY3Rpb24odCl7cmV0dXJuIHAodCx2KX0saD1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbih0LG4sZSl7dmFyIGk9XCJkYXRhLWxsLXN0YXR1c1wiO251bGwhPT1lP3Quc2V0QXR0cmlidXRlKGksZSk6dC5yZW1vdmVBdHRyaWJ1dGUoaSl9KHQsMCxuKX0sbT1mdW5jdGlvbih0KXtyZXR1cm4gaCh0LG51bGwpfSxFPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09Yih0KX0seT1mdW5jdGlvbih0KXtyZXR1cm4gYih0KT09PV99LEE9W2wsdSxkLGZdLEk9ZnVuY3Rpb24odCxuLGUsaSl7dCYmKHZvaWQgMD09PWk/dm9pZCAwPT09ZT90KG4pOnQobixlKTp0KG4sZSxpKSl9LEw9ZnVuY3Rpb24odCxuKXtvP3QuY2xhc3NMaXN0LmFkZChuKTp0LmNsYXNzTmFtZSs9KHQuY2xhc3NOYW1lP1wiIFwiOlwiXCIpK259LHc9ZnVuY3Rpb24odCxuKXtvP3QuY2xhc3NMaXN0LnJlbW92ZShuKTp0LmNsYXNzTmFtZT10LmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIrbitcIihcXFxccyt8JClcIiksXCIgXCIpLnJlcGxhY2UoL15cXHMrLyxcIlwiKS5yZXBsYWNlKC9cXHMrJC8sXCJcIil9LGs9ZnVuY3Rpb24odCl7cmV0dXJuIHQubGxUZW1wSW1hZ2V9LE89ZnVuY3Rpb24odCxuKXtpZihuKXt2YXIgZT1uLl9vYnNlcnZlcjtlJiZlLnVub2JzZXJ2ZSh0KX19LHg9ZnVuY3Rpb24odCxuKXt0JiYodC5sb2FkaW5nQ291bnQrPW4pfSx6PWZ1bmN0aW9uKHQsbil7dCYmKHQudG9Mb2FkQ291bnQ9bil9LEM9ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9W10saT0wO249dC5jaGlsZHJlbltpXTtpKz0xKVwiU09VUkNFXCI9PT1uLnRhZ05hbWUmJmUucHVzaChuKTtyZXR1cm4gZX0sTj1mdW5jdGlvbih0LG4sZSl7ZSYmdC5zZXRBdHRyaWJ1dGUobixlKX0sTT1mdW5jdGlvbih0LG4pe3QucmVtb3ZlQXR0cmlidXRlKG4pfSxSPWZ1bmN0aW9uKHQpe3JldHVybiEhdC5sbE9yaWdpbmFsQXR0cnN9LEc9ZnVuY3Rpb24odCl7aWYoIVIodCkpe3ZhciBuPXt9O24uc3JjPXQuZ2V0QXR0cmlidXRlKFwic3JjXCIpLG4uc3Jjc2V0PXQuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpLG4uc2l6ZXM9dC5nZXRBdHRyaWJ1dGUoXCJzaXplc1wiKSx0LmxsT3JpZ2luYWxBdHRycz1ufX0sVD1mdW5jdGlvbih0KXtpZihSKHQpKXt2YXIgbj10LmxsT3JpZ2luYWxBdHRycztOKHQsXCJzcmNcIixuLnNyYyksTih0LFwic3Jjc2V0XCIsbi5zcmNzZXQpLE4odCxcInNpemVzXCIsbi5zaXplcyl9fSxqPWZ1bmN0aW9uKHQsbil7Tih0LFwic2l6ZXNcIixwKHQsbi5kYXRhX3NpemVzKSksTih0LFwic3Jjc2V0XCIscCh0LG4uZGF0YV9zcmNzZXQpKSxOKHQsXCJzcmNcIixwKHQsbi5kYXRhX3NyYykpfSxEPWZ1bmN0aW9uKHQpe00odCxcInNyY1wiKSxNKHQsXCJzcmNzZXRcIiksTSh0LFwic2l6ZXNcIil9LEY9ZnVuY3Rpb24odCxuKXt2YXIgZT10LnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJkMoZSkuZm9yRWFjaChuKX0sUD17SU1HOmZ1bmN0aW9uKHQsbil7Rih0LChmdW5jdGlvbih0KXtHKHQpLGoodCxuKX0pKSxHKHQpLGoodCxuKX0sSUZSQU1FOmZ1bmN0aW9uKHQsbil7Tih0LFwic3JjXCIscCh0LG4uZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24odCxuKXshZnVuY3Rpb24odCxlKXtDKHQpLmZvckVhY2goKGZ1bmN0aW9uKHQpe04odCxcInNyY1wiLHAodCxuLmRhdGFfc3JjKSl9KSl9KHQpLE4odCxcInBvc3RlclwiLHAodCxuLmRhdGFfcG9zdGVyKSksTih0LFwic3JjXCIscCh0LG4uZGF0YV9zcmMpKSx0LmxvYWQoKX19LFM9ZnVuY3Rpb24odCxuKXt2YXIgZT1QW3QudGFnTmFtZV07ZSYmZSh0LG4pfSxWPWZ1bmN0aW9uKHQsbixlKXt4KGUsMSksTCh0LG4uY2xhc3NfbG9hZGluZyksaCh0LGwpLEkobi5jYWxsYmFja19sb2FkaW5nLHQsZSl9LFU9W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLCQ9ZnVuY3Rpb24odCxuKXshbnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQubG9hZGluZ0NvdW50PjB9KG4pfHxmdW5jdGlvbih0KXtyZXR1cm4gdC50b0xvYWRDb3VudD4wfShuKXx8SSh0LmNhbGxiYWNrX2ZpbmlzaCxuKX0scT1mdW5jdGlvbih0LG4sZSl7dC5hZGRFdmVudExpc3RlbmVyKG4sZSksdC5sbEV2TGlzbnJzW25dPWV9LEg9ZnVuY3Rpb24odCxuLGUpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGUpfSxCPWZ1bmN0aW9uKHQpe3JldHVybiEhdC5sbEV2TGlzbnJzfSxKPWZ1bmN0aW9uKHQpe2lmKEIodCkpe3ZhciBuPXQubGxFdkxpc25ycztmb3IodmFyIGUgaW4gbil7dmFyIGk9bltlXTtIKHQsZSxpKX1kZWxldGUgdC5sbEV2TGlzbnJzfX0sSz1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe2RlbGV0ZSB0LmxsVGVtcEltYWdlfSh0KSx4KGUsLTEpLGZ1bmN0aW9uKHQpe3QmJih0LnRvTG9hZENvdW50LT0xKX0oZSksdyh0LG4uY2xhc3NfbG9hZGluZyksbi51bm9ic2VydmVfY29tcGxldGVkJiZPKHQsZSl9LFE9ZnVuY3Rpb24odCxuLGUpe3ZhciBpPWsodCl8fHQ7QihpKXx8ZnVuY3Rpb24odCxuLGUpe0IodCl8fCh0LmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PXQudGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjtxKHQsaSxuKSxxKHQsXCJlcnJvclwiLGUpfShpLChmdW5jdGlvbihvKXshZnVuY3Rpb24odCxuLGUsaSl7dmFyIG89eShuKTtLKG4sZSxpKSxMKG4sZS5jbGFzc19sb2FkZWQpLGgobix1KSxJKGUuY2FsbGJhY2tfbG9hZGVkLG4saSksb3x8JChlLGkpfSgwLHQsbixlKSxKKGkpfSksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbih0LG4sZSxpKXt2YXIgbz15KG4pO0sobixlLGkpLEwobixlLmNsYXNzX2Vycm9yKSxoKG4sZiksSShlLmNhbGxiYWNrX2Vycm9yLG4saSksb3x8JChlLGkpfSgwLHQsbixlKSxKKGkpfSkpfSxXPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7dC5sbFRlbXBJbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpfSh0KSxRKHQsbixlKSxmdW5jdGlvbih0LG4sZSl7dmFyIGk9cCh0LG4uZGF0YV9iZyksbz1wKHQsbi5kYXRhX2JnX2hpZHBpKSxhPXImJm8/bzppO2EmJih0LnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKFwiJy5jb25jYXQoYSwnXCIpJyksayh0KS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixhKSxWKHQsbixlKSl9KHQsbixlKSxmdW5jdGlvbih0LG4sZSl7dmFyIGk9cCh0LG4uZGF0YV9iZ19tdWx0aSksbz1wKHQsbi5kYXRhX2JnX211bHRpX2hpZHBpKSxhPXImJm8/bzppO2EmJih0LnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLGZ1bmN0aW9uKHQsbixlKXtMKHQsbi5jbGFzc19hcHBsaWVkKSxoKHQsZCksbi51bm9ic2VydmVfY29tcGxldGVkJiZPKHQsbiksSShuLmNhbGxiYWNrX2FwcGxpZWQsdCxlKX0odCxuLGUpKX0odCxuLGUpfSxYPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7cmV0dXJuIFUuaW5kZXhPZih0LnRhZ05hbWUpPi0xfSh0KT9XKHQsbixlKTpmdW5jdGlvbih0LG4sZSl7USh0LG4sZSksUyh0LG4pLFYodCxuLGUpfSh0LG4sZSl9LFk9W1wiSU1HXCIsXCJJRlJBTUVcIl0sWj1mdW5jdGlvbih0KXtyZXR1cm4gdC51c2VfbmF0aXZlJiZcImxvYWRpbmdcImluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlfSx0dD1mdW5jdGlvbih0LG4sZSl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQuaXNJbnRlcnNlY3Rpbmd8fHQuaW50ZXJzZWN0aW9uUmF0aW8+MH0odCk/ZnVuY3Rpb24odCxuLGUsaSl7aCh0LFwiZW50ZXJlZFwiKSxMKHQsZS5jbGFzc19lbnRlcmVkKSx3KHQsZS5jbGFzc19leGl0ZWQpLGZ1bmN0aW9uKHQsbixlKXtuLnVub2JzZXJ2ZV9lbnRlcmVkJiZPKHQsZSl9KHQsZSxpKSxJKGUuY2FsbGJhY2tfZW50ZXIsdCxuLGkpLGZ1bmN0aW9uKHQpe3JldHVybiBBLmluZGV4T2YoYih0KSk+PTB9KHQpfHxYKHQsZSxpKX0odC50YXJnZXQsdCxuLGUpOmZ1bmN0aW9uKHQsbixlLGkpe0UodCl8fChMKHQsZS5jbGFzc19leGl0ZWQpLGZ1bmN0aW9uKHQsbixlLGkpe2UuY2FuY2VsX29uX2V4aXQmJmZ1bmN0aW9uKHQpe3JldHVybiBiKHQpPT09bH0odCkmJlwiSU1HXCI9PT10LnRhZ05hbWUmJihKKHQpLGZ1bmN0aW9uKHQpe0YodCwoZnVuY3Rpb24odCl7RCh0KX0pKSxEKHQpfSh0KSxmdW5jdGlvbih0KXtGKHQsKGZ1bmN0aW9uKHQpe1QodCl9KSksVCh0KX0odCksdyh0LGUuY2xhc3NfbG9hZGluZykseChpLC0xKSxtKHQpLEkoZS5jYWxsYmFja19jYW5jZWwsdCxuLGkpKX0odCxuLGUsaSksSShlLmNhbGxiYWNrX2V4aXQsdCxuLGkpKX0odC50YXJnZXQsdCxuLGUpfSkpfSxudD1mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCl9LGV0PWZ1bmN0aW9uKHQpe3JldHVybiB0LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHQuZWxlbWVudHNfc2VsZWN0b3IpfSxpdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGIodCk9PT1mfSh0KX0sb3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG50KHQpLmZpbHRlcihFKX0odHx8ZXQobikpfSxydD1mdW5jdGlvbih0LGUpe3ZhciBvPWModCk7dGhpcy5fc2V0dGluZ3M9byx0aGlzLmxvYWRpbmdDb3VudD0wLGZ1bmN0aW9uKHQsbil7aSYmIVoodCkmJihuLl9vYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe3R0KGUsdCxuKX0pLGZ1bmN0aW9uKHQpe3JldHVybntyb290OnQuY29udGFpbmVyPT09ZG9jdW1lbnQ/bnVsbDp0LmNvbnRhaW5lcixyb290TWFyZ2luOnQudGhyZXNob2xkc3x8dC50aHJlc2hvbGQrXCJweFwifX0odCkpKX0obyx0aGlzKSxmdW5jdGlvbih0LGUpe24mJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsKGZ1bmN0aW9uKCl7IWZ1bmN0aW9uKHQsbil7dmFyIGU7KGU9ZXQodCksbnQoZSkuZmlsdGVyKGl0KSkuZm9yRWFjaCgoZnVuY3Rpb24obil7dyhuLHQuY2xhc3NfZXJyb3IpLG0obil9KSksbi51cGRhdGUoKX0odCxlKX0pKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIHJ0LnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBuLG8scj10aGlzLl9zZXR0aW5ncyxhPW90KHQscik7eih0aGlzLGEubGVuZ3RoKSwhZSYmaT9aKHIpP2Z1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpey0xIT09WS5pbmRleE9mKHQudGFnTmFtZSkmJih0LnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIixcImxhenlcIiksZnVuY3Rpb24odCxuLGUpe1EodCxuLGUpLFModCxuKSxoKHQsXyl9KHQsbixlKSl9KSkseihlLDApfShhLHIsdGhpcyk6KG89YSxmdW5jdGlvbih0KXt0LmRpc2Nvbm5lY3QoKX0obj10aGlzLl9vYnNlcnZlciksZnVuY3Rpb24odCxuKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3Qub2JzZXJ2ZShuKX0pKX0obixvKSk6dGhpcy5sb2FkQWxsKGEpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fb2JzZXJ2ZXImJnRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSxldCh0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZGVsZXRlIHQubGxPcmlnaW5hbEF0dHJzfSkpLGRlbGV0ZSB0aGlzLl9vYnNlcnZlcixkZWxldGUgdGhpcy5fc2V0dGluZ3MsZGVsZXRlIHRoaXMubG9hZGluZ0NvdW50LGRlbGV0ZSB0aGlzLnRvTG9hZENvdW50fSxsb2FkQWxsOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10aGlzLl9zZXR0aW5ncztvdCh0LGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe08odCxuKSxYKHQsZSxuKX0pKX19LHJ0LmxvYWQ9ZnVuY3Rpb24odCxuKXt2YXIgZT1jKG4pO1godCxlKX0scnQucmVzZXRTdGF0dXM9ZnVuY3Rpb24odCl7bSh0KX0sbiYmZnVuY3Rpb24odCxuKXtpZihuKWlmKG4ubGVuZ3RoKWZvcih2YXIgZSxpPTA7ZT1uW2ldO2krPTEpcyh0LGUpO2Vsc2Ugcyh0LG4pfShydCx3aW5kb3cubGF6eUxvYWRPcHRpb25zKSxydH0pKTtcbiIsIi8qKlxuICogWmVuc2Nyb2xsIDQuMC4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVuZ2Fib3IvemVuc2Nyb2xsL1xuICpcbiAqIENvcHlyaWdodCAyMDE14oCTMjAxOCBHYWJvciBMZW5hcmRcbiAqXG4gKiBUaGlzIGlzIGZyZWUgYW5kIHVuZW5jdW1iZXJlZCBzb2Z0d2FyZSByZWxlYXNlZCBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogXG4gKiBBbnlvbmUgaXMgZnJlZSB0byBjb3B5LCBtb2RpZnksIHB1Ymxpc2gsIHVzZSwgY29tcGlsZSwgc2VsbCwgb3JcbiAqIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSwgZWl0aGVyIGluIHNvdXJjZSBjb2RlIGZvcm0gb3IgYXMgYSBjb21waWxlZFxuICogYmluYXJ5LCBmb3IgYW55IHB1cnBvc2UsIGNvbW1lcmNpYWwgb3Igbm9uLWNvbW1lcmNpYWwsIGFuZCBieSBhbnlcbiAqIG1lYW5zLlxuICogXG4gKiBJbiBqdXJpc2RpY3Rpb25zIHRoYXQgcmVjb2duaXplIGNvcHlyaWdodCBsYXdzLCB0aGUgYXV0aG9yIG9yIGF1dGhvcnNcbiAqIG9mIHRoaXMgc29mdHdhcmUgZGVkaWNhdGUgYW55IGFuZCBhbGwgY29weXJpZ2h0IGludGVyZXN0IGluIHRoZVxuICogc29mdHdhcmUgdG8gdGhlIHB1YmxpYyBkb21haW4uIFdlIG1ha2UgdGhpcyBkZWRpY2F0aW9uIGZvciB0aGUgYmVuZWZpdFxuICogb2YgdGhlIHB1YmxpYyBhdCBsYXJnZSBhbmQgdG8gdGhlIGRldHJpbWVudCBvZiBvdXIgaGVpcnMgYW5kXG4gKiBzdWNjZXNzb3JzLiBXZSBpbnRlbmQgdGhpcyBkZWRpY2F0aW9uIHRvIGJlIGFuIG92ZXJ0IGFjdCBvZlxuICogcmVsaW5xdWlzaG1lbnQgaW4gcGVycGV0dWl0eSBvZiBhbGwgcHJlc2VudCBhbmQgZnV0dXJlIHJpZ2h0cyB0byB0aGlzXG4gKiBzb2Z0d2FyZSB1bmRlciBjb3B5cmlnaHQgbGF3LlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUlxuICogT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsXG4gKiBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byA8aHR0cDovL3VubGljZW5zZS5vcmc+XG4gKiBcbiAqL1xuXG4vKmpzaGludCBkZXZlbDp0cnVlLCBhc2k6dHJ1ZSAqL1xuXG4vKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSAqL1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkoKSlcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblx0fSBlbHNlIHtcblx0XHQoZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRcdC8vIFRvIG1ha2Ugc3VyZSBaZW5zY3JvbGwgY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaGVhZGVyLCBiZWZvcmUgYGJvZHlgIGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0cm9vdC56ZW5zY3JvbGwgPSBmYWN0b3J5KClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJldHJ5IDltcyBsYXRlclxuXHRcdFx0XHRzZXRUaW1lb3V0KGluc3RhbGwsIDkpXG5cdFx0XHR9XG5cdFx0fSkoKVxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCJcblxuXG5cdC8vIERldGVjdCBpZiB0aGUgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG5hdGl2ZSBzbW9vdGggc2Nyb2xsaW5nIChlLmcuLCBGaXJlZm94IDM2KyBhbmQgQ2hyb21lIDQ5KykgYW5kIGl0IGlzIGVuYWJsZWQ6XG5cdHZhciBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuIGVsZW0gJiYgXCJnZXRDb21wdXRlZFN0eWxlXCIgaW4gd2luZG93ICYmXG5cdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtcInNjcm9sbC1iZWhhdmlvclwiXSA9PT0gXCJzbW9vdGhcIlxuXHR9XG5cblxuXHQvLyBFeGl0IGlmIGl04oCZcyBub3QgYSBicm93c2VyIGVudmlyb25tZW50OlxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFwiZG9jdW1lbnRcIiBpbiB3aW5kb3cpKSB7XG5cdFx0cmV0dXJuIHt9XG5cdH1cblxuXG5cdHZhciBtYWtlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblxuXHRcdC8vIFVzZSBkZWZhdWx0cyBpZiBub3QgcHJvdmlkZWRcblx0XHRkZWZhdWx0RHVyYXRpb24gPSBkZWZhdWx0RHVyYXRpb24gfHwgOTk5IC8vbXNcblx0XHRpZiAoIWVkZ2VPZmZzZXQgJiYgZWRnZU9mZnNldCAhPT0gMCkge1xuXHRcdFx0Ly8gV2hlbiBzY3JvbGxpbmcsIHRoaXMgYW1vdW50IG9mIGRpc3RhbmNlIGlzIGtlcHQgZnJvbSB0aGUgZWRnZXMgb2YgdGhlIGNvbnRhaW5lcjpcblx0XHRcdGVkZ2VPZmZzZXQgPSA5IC8vcHhcblx0XHR9XG5cblx0XHQvLyBIYW5kbGluZyB0aGUgbGlmZS1jeWNsZSBvZiB0aGUgc2Nyb2xsZXJcblx0XHR2YXIgc2Nyb2xsVGltZW91dElkXG5cdFx0dmFyIHNldFNjcm9sbFRpbWVvdXRJZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0c2Nyb2xsVGltZW91dElkID0gbmV3VmFsdWVcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTdG9wIHRoZSBjdXJyZW50IHNtb290aCBzY3JvbGwgb3BlcmF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0ICovXG5cdFx0dmFyIHN0b3BTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dElkKVxuXHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKDApXG5cdFx0fVxuXG5cdFx0dmFyIGdldFRvcFdpdGhFZGdlT2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpYyB2ZXJ0aWNhbCBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3RhcmdldFl9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqICAgICAgICBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgZHVyYXRpb24gaXMgdXNlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvWSA9IGZ1bmN0aW9uICh0YXJnZXRZLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzdG9wU2Nyb2xsKClcblx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCB8fCAoZHVyYXRpb24gJiYgZHVyYXRpb24gPCAwKSB8fCBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihjb250YWluZXIuYm9keSkpIHtcblx0XHRcdFx0Y29udGFpbmVyLnRvWSh0YXJnZXRZKVxuXHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0YXJ0WSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSkgLSBzdGFydFlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oTWF0aC5hYnMoZGlzdGFuY2UpLCBkZWZhdWx0RHVyYXRpb24pO1xuXHRcdFx0XHQoZnVuY3Rpb24gbG9vcFNjcm9sbCgpIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgcGVyY2VudGFnZTpcblx0XHRcdFx0XHRcdHZhciBwID0gTWF0aC5taW4oMSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKVxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSB2ZXJ0aWNhbCBwb3NpdGlvbjpcblx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzdGFydFkgKyBkaXN0YW5jZSoocCA8IDAuNSA/IDIqcCpwIDogcCooNCAtIHAqMiktMSkpKVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnRvWSh5KVxuXHRcdFx0XHRcdFx0aWYgKHAgPCAxICYmIChjb250YWluZXIuZ2V0SGVpZ2h0KCkgKyB5KSA8IGNvbnRhaW5lci5ib2R5LnNjcm9sbEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRsb29wU2Nyb2xsKClcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoc3RvcFNjcm9sbCwgOTkpIC8vIHdpdGggY29vbGRvd24gdGltZVxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpKVxuXHRcdFx0XHR9KSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIGEgc3BlY2lmaWMgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIGFuIGVsZW1lbnQgaW50byB2aWV3IGlmIG5lY2Vzc2FyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHR2YXIgZWxlbUhlaWdodCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cdFx0XHR2YXIgZWxlbUJvdHRvbSA9IGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSArIGVsZW1IZWlnaHRcblx0XHRcdHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuZ2V0SGVpZ2h0KClcblx0XHRcdHZhciB5ID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0dmFyIGNvbnRhaW5lckJvdHRvbSA9IHkgKyBjb250YWluZXJIZWlnaHRcblx0XHRcdGlmIChnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSA8IHkgfHwgKGVsZW1IZWlnaHQgKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckhlaWdodCkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdG9wIG9yIGlzIGhpZ2hlciB0aGFuIHNjcmVlbi5cblx0XHRcdFx0c2Nyb2xsVG9FbGVtKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKChlbGVtQm90dG9tICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJCb3R0b20pIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRoZSBib3R0b20uXG5cdFx0XHRcdHNjcm9sbFRvWShlbGVtQm90dG9tIC0gY29udGFpbmVySGVpZ2h0ICsgZWRnZU9mZnNldCwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAob25Eb25lKSB7XG5cdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgY2VudGVyIG9mIGFuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b2Zmc2V0fSBPcHRpb25hbGx5IHRoZSBvZmZzZXQgb2YgdGhlIHRvcCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlbi5cblx0XHQgKiAgICAgICAgQSB2YWx1ZSBvZiAwIGlzIGlnbm9yZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0NlbnRlck9mID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvZmZzZXQsIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGNvbnRhaW5lci5nZXRIZWlnaHQoKS8yICsgKG9mZnNldCB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodC8yKSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhbmdlcyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIHNjcm9sbGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtuZXdEZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHRcdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEBwYXJhbSB7bmV3RWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcy5cblx0XHQgKi9cblx0XHR2YXIgc2V0dXAgPSBmdW5jdGlvbiAobmV3RGVmYXVsdER1cmF0aW9uLCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRpZiAobmV3RGVmYXVsdER1cmF0aW9uID09PSAwIHx8IG5ld0RlZmF1bHREdXJhdGlvbikge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb24gPSBuZXdEZWZhdWx0RHVyYXRpb25cblx0XHRcdH1cblx0XHRcdGlmIChuZXdFZGdlT2Zmc2V0ID09PSAwIHx8IG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdFx0ZWRnZU9mZnNldCA9IG5ld0VkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLFxuXHRcdFx0XHRlZGdlT2Zmc2V0OiBlZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldHVwOiBzZXR1cCxcblx0XHRcdHRvOiBzY3JvbGxUb0VsZW0sXG5cdFx0XHR0b1k6IHNjcm9sbFRvWSxcblx0XHRcdGludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcblx0XHRcdGNlbnRlcjogc2Nyb2xsVG9DZW50ZXJPZixcblx0XHRcdHN0b3A6IHN0b3BTY3JvbGwsXG5cdFx0XHRtb3Zpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhc2Nyb2xsVGltZW91dElkIH0sXG5cdFx0XHRnZXRZOiBjb250YWluZXIuZ2V0WSxcblx0XHRcdGdldFRvcE9mOiBjb250YWluZXIuZ2V0VG9wT2Zcblx0XHR9XG5cblx0fVxuXG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0dmFyIGdldERvY1kgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCBkb2NFbGVtLnNjcm9sbFRvcCB9XG5cblx0Ly8gQ3JlYXRlIGEgc2Nyb2xsZXIgZm9yIHRoZSBkb2N1bWVudDpcblx0dmFyIHplbnNjcm9sbCA9IG1ha2VTY3JvbGxlcih7XG5cdFx0Ym9keTogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LFxuXHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgd2luZG93LnNjcm9sbFRvKDAsIHkpIH0sXG5cdFx0Z2V0WTogZ2V0RG9jWSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB9LFxuXHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBnZXREb2NZKCkgLSBkb2NFbGVtLm9mZnNldFRvcCB9XG5cdH0pXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHNjcm9sbGVyIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50IChlLmcuLCBhIERJVilcblx0ICpcblx0ICogQHBhcmFtIHtzY3JvbGxDb250YWluZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHQgKiBAcGFyYW0ge2RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0ICogICAgICAgIElnbm9yZWQgaWYgMCBvciBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHBhcmFtIHtlZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcmV0dXJucyBBIHNjcm9sbGVyIG9iamVjdCwgc2ltaWxhciB0byBgemVuc2Nyb2xsYCBidXQgY29udHJvbGxpbmcgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG5cdCAqL1xuXHR6ZW5zY3JvbGwuY3JlYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoc2Nyb2xsQ29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblx0XHRyZXR1cm4gbWFrZVNjcm9sbGVyKHtcblx0XHRcdGJvZHk6IHNjcm9sbENvbnRhaW5lcixcblx0XHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHkgfSxcblx0XHRcdGdldFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfSxcblx0XHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5taW4oc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0KSB9LFxuXHRcdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLm9mZnNldFRvcCB9XG5cdFx0fSwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KVxuXHR9XG5cblxuXHQvLyBBdXRvbWF0aWMgbGluay1zbW9vdGhpbmcgb24gYWNob3JzXG5cdC8vIEV4Y2x1ZGUgSUU4LSBvciB3aGVuIG5hdGl2ZSBpcyBlbmFibGVkIG9yIFplbnNjcm9sbCBhdXRvLSBpcyBkaXNhYmxlZFxuXHRpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93ICYmICF3aW5kb3cubm9aZW5zbW9vdGggJiYgIWlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGRvY3VtZW50LmJvZHkpKSB7XG5cblx0XHR2YXIgaXNIaXN0b3J5U3VwcG9ydGVkID0gXCJoaXN0b3J5XCIgaW4gd2luZG93ICYmIFwicHVzaFN0YXRlXCIgaW4gaGlzdG9yeVxuXHRcdHZhciBpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkID0gaXNIaXN0b3J5U3VwcG9ydGVkICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5XG5cblx0XHQvLyBPbiBmaXJzdCBsb2FkICYgcmVmcmVzaCBtYWtlIHN1cmUgdGhlIGJyb3dzZXIgcmVzdG9yZXMgdGhlIHBvc2l0aW9uIGZpcnN0XG5cdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdC8vIFNldCBpdCB0byBtYW51YWxcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiIH0sIDkpXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnN0YXRlICYmIFwiemVuc2Nyb2xsWVwiIGluIGV2ZW50LnN0YXRlKSB7XG5cdFx0XHRcdFx0XHR6ZW5zY3JvbGwudG9ZKGV2ZW50LnN0YXRlLnplbnNjcm9sbFkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmYWxzZSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVkZ2Ugb2Zmc2V0IG9uIGZpcnN0IGxvYWQgaWYgbmVjZXNzYXJ5XG5cdFx0XHQvLyBUaGlzIG1heSBub3Qgd29yayBvbiBJRSAob3Igb2xkZXIgY29tcHV0ZXI/KSBhcyBpdCByZXF1aXJlcyBtb3JlIHRpbWVvdXQsIGFyb3VuZCAxMDAgbXNcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBBZGp1c3RtZW50IGlzIG9ubHkgbmVlZGVkIGlmIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0OlxuXHRcdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXSlcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0YXJnZXRZID0gTWF0aC5tYXgoMCwgemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRcdFx0dmFyIGRpZmYgPSB6ZW5zY3JvbGwuZ2V0WSgpIC0gdGFyZ2V0WVxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBhZGp1c3RtZW50IGlmIHRoZSBicm93c2VyIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGVsZW1lbnQ6XG5cdFx0XHRcdFx0XHRcdGlmICgwIDw9IGRpZmYgJiYgZGlmZiA8IDkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHRhcmdldFkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDkpXG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSlcblxuXHRcdC8vIEhhbmRsaW5nIGNsaWNrcyBvbiBhbmNob3JzXG5cdFx0dmFyIFJFX25vWmVuc21vb3RoID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKW5vWmVuc21vb3RoKFxcXFxzfCQpXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBhbmNob3IgPSBldmVudC50YXJnZXRcblx0XHRcdHdoaWxlIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUgIT09IFwiQVwiKSB7XG5cdFx0XHRcdGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlXG5cdFx0XHR9XG5cdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiBpdCB3YXNuJ3Qgd2l0aCB0aGUgcHJpbWFyeSBidXR0b24sIG9yIHdpdGggc29tZSBtb2RpZmllciBrZXlzOlxuXHRcdFx0aWYgKCFhbmNob3IgfHwgZXZlbnQud2hpY2ggIT09IDEgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsaW5nIHBvc2l0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBzY3JvbGwgcmVzdG9yYXRpb246XG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHR2YXIgaGlzdG9yeVN0YXRlID0gaGlzdG9yeS5zdGF0ZSAmJiB0eXBlb2YgaGlzdG9yeS5zdGF0ZSA9PT0gXCJvYmplY3RcIiA/IGhpc3Rvcnkuc3RhdGUgOiB7fVxuXHRcdFx0XHRoaXN0b3J5U3RhdGUuemVuc2Nyb2xsWSA9IHplbnNjcm9sbC5nZXRZKClcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBBdm9pZCB0aGUgQ2hyb21lIFNlY3VyaXR5IGV4Y2VwdGlvbiBvbiBmaWxlIHByb3RvY29sLCBlLmcuLCBmaWxlOi8vaW5kZXguaHRtbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGaW5kIHRoZSByZWZlcmVuY2VkIElEOlxuXHRcdFx0dmFyIGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKFwiI1wiKSA9PT0gMCAmJiAhUkVfbm9aZW5zbW9vdGgudGVzdChhbmNob3IuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0WSA9IDBcblx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSlcblx0XHRcdFx0aWYgKGhyZWYgIT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiB0aGUgdGFyZ2V0IElEIGlzIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXRZID0gemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHQvLyBCeSBkZWZhdWx0IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBgaGFzaGNoYW5nZWAgZXZlbnQuLi5cblx0XHRcdFx0dmFyIG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uID0gaHJlZiB9XG5cdFx0XHRcdC8vIC4uLnVubGVzcyB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldCBzcGVjaWZpZWRcblx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IE1hdGgubWF4KDAsIHRhcmdldFkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdGlmIChpc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHRcdG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGhyZWYpIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0emVuc2Nyb2xsLnRvWSh0YXJnZXRZLCBudWxsLCBvbkRvbmUpXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpXG5cblx0fVxuXG5cblx0cmV0dXJuIHplbnNjcm9sbFxuXG5cbn0pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93cC1jb250ZW50L3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL2RlZmF1bHRzLnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==