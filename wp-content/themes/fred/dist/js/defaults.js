/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/fred/assets/js/defaults.ts":
/*!******************************************************!*\
  !*** ./wp-content/themes/fred/assets/js/defaults.ts ***!
  \******************************************************/
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
(0, focus_within_1["default"])(document, {
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

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,p,m],C=function(n,t,e,i){n&&"function"==typeof n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){""!==t&&(o?n.classList.add(t):n.className+=(n.className?" ":"")+t)},M=function(n,t){""!==t&&(o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""))},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,m),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},pn=function(n){return n.container.querySelectorAll(n.elements_selector)},mn=function(n){return function(n){return k(n)===m}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||pn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),pn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;pn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2RlZmF1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFBO0FBQ0EsSUFBQUMsY0FBQSxHQUFBQyxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBRCxlQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUksa0JBQUEsR0FBQUYsZUFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFLLGdCQUFBLEdBQUFILGVBQUEsQ0FBQUYsbUJBQUE7QUFLQSxJQUFBQyxjQUFBLFdBQVcsRUFBQ0ssUUFBUSxFQUFFO0VBQ3BCQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxTQUFTLEVBQUU7Q0FDWixDQUFDO0FBaUJGLElBQUlGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7RUFDekNKLGdCQUFBLFdBQVcsQ0FBQ0ssR0FBRyxDQUFDLFVBQVUsQ0FBQzs7QUFNN0IsSUFBTUMsS0FBSyxHQUFHTCxRQUFRLENBQUNHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztBQUU1Q0UsS0FBSyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBSTtFQUNoQixJQUFJQSxJQUFJLENBQUNDLFFBQVEsSUFBSUMsTUFBTSxDQUFDQyxRQUFRLENBQUNGLFFBQVEsRUFBRTtJQUM3Q0QsSUFBSSxDQUFDSSxZQUFZLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDOztBQUVqRCxDQUFDLENBQUM7QUFHRixJQUFNQyxjQUFjLEdBQUcsSUFBSWQsa0JBQUEsV0FBUSxFQUFFO0FBTXJDRCxXQUFBLFdBQVMsQ0FBQ2dCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDbkR4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWEsS0FBcUMsQ0FBQyxvQ0FBTyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQUMsQ0FBQyxDQUE2RCxDQUFDLGlCQUFpQixhQUFhLGlpQkFBaWlCLElBQUksNk5BQTZOLEtBQUssbUJBQW1CLHdDQUF3QywyQkFBMkIsOENBQThDLGVBQWUsNERBQTRELGVBQWUsNERBQTRELGVBQWUsNERBQTRELGVBQWUsNkdBQTZHLGVBQWUsc0JBQXNCLHFEQUFxRCx3Q0FBd0MsMEZBQTBGLGNBQWMsNkNBQTZDLGNBQWMsSUFBSSxlQUFlLHlGQUF5RixjQUFjLHdCQUF3QixxQkFBcUIsOEJBQThCLDhCQUE4Qix5Q0FBeUMsZ0JBQWdCLGVBQWUsY0FBYyxrQkFBa0IsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sdUJBQXVCLHNCQUFzQixZQUFZLElBQUksTUFBTSx1QkFBdUIsc0JBQXNCLHFCQUFxQixLQUFLLGdCQUFnQixVQUFVLHNCQUFzQixRQUFRLCtEQUErRCxvTUFBb00sb0RBQW9ELElBQUksaURBQWlELFdBQVcsSUFBSSxhQUFhLDZCQUE2QixpQ0FBaUMsV0FBVyxpS0FBaUssOEZBQThGLGNBQWMsa0tBQWtLLGdDQUFnQyxrQkFBa0IsVUFBVSx5REFBeUQsaUpBQWlKLHlCQUF5QixnSUFBZ0ksMkVBQTJFLGFBQWEsOEJBQThCLGFBQWEsK0xBQStMLHlEQUF5RCw2S0FBNkssa0lBQWtJLE9BQU8sZ0JBQWdCLGtCQUFrQixxRUFBcUUsS0FBSyxxS0FBcUssYUFBYSxjQUFjLFNBQVMsOEdBQThHLDRDQUE0QywwQ0FBMEMsa0RBQWtELHFCQUFxQixLQUFLLGFBQWEsU0FBUyxrQkFBa0IsaU1BQWlNLHNCQUFzQixnRUFBZ0UsaUJBQWlCLGVBQWUsb0JBQW9CLHlFQUF5RSxrQ0FBa0MseUdBQXlHLGFBQWEsY0FBYyxhQUFhLGNBQWMsZ0JBQWdCLHVJQUF1SSxVQUFVLDZDQUE2QyxjQUFjLG1EQUFtRCxlQUFlLE1BQU0sYUFBYSxpQkFBaUIsZ0VBQWdFLGlIQUFpSCxzR0FBc0csY0FBYyxpQ0FBaUMsT0FBTyxFQUFFLGNBQWMsaUNBQWlDLE9BQU8sRUFBRSxvQkFBb0IsOEVBQThFLHVEQUF1RCxFQUFFLG9CQUFvQiwyRUFBMkUsY0FBYyxrQ0FBa0MsY0FBYyxpQ0FBaUMseURBQXlELFlBQVksY0FBYyw2QkFBNkIseURBQXlELG9CQUFvQixXQUFXLHFDQUFxQyxTQUFTLEdBQUcsb0JBQW9CLGlDQUFpQyxlQUFlLDZGQUE2RixzQkFBc0IsZUFBZSxxR0FBcUcsZ0NBQWdDLFNBQVMsSUFBSSw4QkFBOEIsWUFBWSxlQUFlLE1BQU0sRUFBRSx1Q0FBdUMsVUFBVSxTQUFTLGdCQUFnQixtSUFBbUksMFRBQTBULGlKQUFpSixzSkFBc0oseUZBQXlGLHVCQUF1QixXQUFXLHlCQUF5QixXQUFXLE1BQU0sdUtBQXVLLEdBQUcsd0JBQXdCLHNDQUFzQyx5QkFBeUIsNENBQTRDLDBCQUEwQixTQUFTLHlGQUF5RixvRUFBb0UsV0FBVyxTQUFTLGdDQUFnQyxrQkFBa0IsaUVBQWlFLElBQUksK0JBQStCLHlCQUF5Qix1QkFBdUIsY0FBYyxNQUFNLDhEQUE4RCxjQUFjLHVCQUF1QixXQUFXLHlCQUF5QixXQUFXLE1BQU0sdUtBQXVLLGdCQUFnQix5Q0FBeUMsb0lBQW9JLFlBQVk7Ozs7Ozs7Ozs7QUNOcHZTO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLENBQ1c7QUFDYixDQUFDLHNCQUFzQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FB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QUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDO0FBQzNCOzs7Ozs7O1VDdkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZC8uL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL2pzL2RlZmF1bHRzLnRzIiwid2VicGFjazovL2ZyZWQvLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvZGlzdC9iYWd1ZXR0ZUJveC5taW4uanMiLCJ3ZWJwYWNrOi8vZnJlZC8uL25vZGVfbW9kdWxlcy9mb2N1cy12aXNpYmxlL2Rpc3QvZm9jdXMtdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9mcmVkLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vZnJlZC8uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzIiwid2VicGFjazovL2ZyZWQvLi9ub2RlX21vZHVsZXMvZm9jdXMtd2l0aGluL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9mcmVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcmVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJlZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm9jdXMtdmlzaWJsZSdcbmltcG9ydCBGb2N1c1dpdGhpbiBmcm9tICdmb2N1cy13aXRoaW4nXG5pbXBvcnQgemVuc2Nyb2xsIGZyb20gJ3plbnNjcm9sbCdcbmltcG9ydCBMYXp5TG9hZCBmcm9tICd2YW5pbGxhLWxhenlsb2FkJ1xuaW1wb3J0IGJhZ3VldHRlQm94IGZyb20gJ2JhZ3VldHRlYm94LmpzJ1xuXG4vKipcbiAqIEZvY3VzIHdpdGhpbiBwb2x5ZmlsbFxuICovXG5Gb2N1c1dpdGhpbihkb2N1bWVudCwge1xuICBhdHRyOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiAnZm9jdXMtd2l0aGluJyxcbn0pXG5cbi8qXG4gIEltYWdlIGdhbGxlcmllc1xuICB1cmw6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2ZsaWNraXR5XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgVXNhZ2U6XG4gIDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XG4gICAgICA8YSBocmVmPVwicGF0aC10by1sYXJnZS1pbWFnZVwiIGRhdGEtY2FwdGlvbj1cIlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwicGF0aC10by10aHVtYm5haWxcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9hPlxuICA8L2Rpdj5cblxuICBOb3RlOiBJZiBub3QgdXNpbmcsIHJlbW92ZSBAaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveFwiOyBmcm9tIGBhc3NldHMvc2Fzcy9nbG9iYWwuc2Nzc2BcbiovXG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeScpKSB7XG4gIGJhZ3VldHRlQm94LnJ1bignLmdhbGxlcnknKVxufVxuXG4vKlxuICBBdXRvbWF0aWNhbGx5IHNldCBleHRlcm5hbCBsaW5rcyB0byBoYXZlIG5vZm9sbG93L25vb3BlbmVyIGF0dHJzXG4qL1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgaWYgKGxpbmsuaG9zdG5hbWUgIT0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKSB7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub2ZvbGxvdyBub29wZW5lcicpXG4gIH1cbn0pXG5cbi8vIExhenlMb2FkXG5jb25zdCBsYXp5TG9hZEltYWdlcyA9IG5ldyBMYXp5TG9hZCgpXG5cbi8qXG4gIFplbnNjcm9sbFxuICAtIFNldCBlZGdlIG9mZnNldCB0byAwIHRvIHByZXZuZXQgYnJlYWtpbmcgdGFiIG9yZGVyXG4qL1xuemVuc2Nyb2xsLnNldHVwKG51bGwsIDApXG4iLCIvKiFcbiAqIGJhZ3VldHRlQm94LmpzXG4gKiBAYXV0aG9yICBmZWltb3NpXG4gKiBAdmVyc2lvbiAxLjExLjFcbiAqIEB1cmwgaHR0cHM6Ly9naXRodWIuY29tL2ZlaW1vc2kvYmFndWV0dGVCb3guanNcbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KCk6ZS5iYWd1ZXR0ZUJveD10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgcixsLHUsYyxkLGY9Jzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMwIDEwIDEwIDMwIDMwIDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwic3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLGc9Jzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+PHBvbHlsaW5lIHBvaW50cz1cIjE0IDEwIDM0IDMwIDE0IDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwic3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLHA9Jzxzdmcgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+PGcgc3Ryb2tlPVwicmdiKDE2MCwxNjAsMTYwKVwiIHN0cm9rZS13aWR0aD1cIjRcIj48bGluZSB4MT1cIjVcIiB5MT1cIjVcIiB4Mj1cIjI1XCIgeTI9XCIyNVwiLz48bGluZSB4MT1cIjVcIiB5MT1cIjI1XCIgeDI9XCIyNVwiIHkyPVwiNVwiLz48L2c+PC9zdmc+JyxiPXt9LHY9e2NhcHRpb25zOiEwLGJ1dHRvbnM6XCJhdXRvXCIsZnVsbFNjcmVlbjohMSxub1Njcm9sbGJhcnM6ITEsYm9keUNsYXNzOlwiYmFndWV0dGVCb3gtb3BlblwiLHRpdGxlVGFnOiExLGFzeW5jOiExLHByZWxvYWQ6MixhbmltYXRpb246XCJzbGlkZUluXCIsYWZ0ZXJTaG93Om51bGwsYWZ0ZXJIaWRlOm51bGwsb25DaGFuZ2U6bnVsbCxvdmVybGF5QmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuOClcIn0sbT17fSxoPVtdLG89MCxuPSExLGk9e30sYT0hMSx5PS8uK1xcLihnaWZ8anBlP2d8cG5nfHdlYnApL2ksdz17fSxrPVtdLHM9bnVsbCx4PWZ1bmN0aW9uKGUpey0xIT09ZS50YXJnZXQuaWQuaW5kZXhPZihcImJhZ3VldHRlLWltZ1wiKSYmaigpfSxFPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsRCgpfSxDPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsWCgpfSxCPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsaigpfSxUPWZ1bmN0aW9uKGUpe2kuY291bnQrKywxPGkuY291bnQmJihpLm11bHRpdG91Y2g9ITApLGkuc3RhcnRYPWUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsaS5zdGFydFk9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWX0sTj1mdW5jdGlvbihlKXtpZighYSYmIWkubXVsdGl0b3VjaCl7ZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMTt2YXIgdD1lLnRvdWNoZXNbMF18fGUuY2hhbmdlZFRvdWNoZXNbMF07NDA8dC5wYWdlWC1pLnN0YXJ0WD8oYT0hMCxEKCkpOnQucGFnZVgtaS5zdGFydFg8LTQwPyhhPSEwLFgoKSk6MTAwPGkuc3RhcnRZLXQucGFnZVkmJmooKX19LEw9ZnVuY3Rpb24oKXtpLmNvdW50LS0saS5jb3VudDw9MCYmKGkubXVsdGl0b3VjaD0hMSksYT0hMX0sQT1mdW5jdGlvbigpe0woKX0sUD1mdW5jdGlvbihlKXtcImJsb2NrXCI9PT1yLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMmJiFyLmNvbnRhaW5zKGUudGFyZ2V0KSYmKGUuc3RvcFByb3BhZ2F0aW9uKCksWSgpKX07ZnVuY3Rpb24gUyhlKXtpZih3Lmhhc093blByb3BlcnR5KGUpKXt2YXIgdD13W2VdLmdhbGxlcmllcztbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbihlKXtbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlKXtXKGUuaW1hZ2VFbGVtZW50LFwiY2xpY2tcIixlLmV2ZW50SGFuZGxlcil9KSxoPT09ZSYmKGg9W10pfSksZGVsZXRlIHdbZV19fWZ1bmN0aW9uIEYoZSl7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSAzNzpEKCk7YnJlYWs7Y2FzZSAzOTpYKCk7YnJlYWs7Y2FzZSAyNzpqKCk7YnJlYWs7Y2FzZSAzNjohZnVuY3Rpb24gdChlKXtlJiZlLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIE0oMCl9KGUpO2JyZWFrO2Nhc2UgMzU6IWZ1bmN0aW9uIG4oZSl7ZSYmZS5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBNKGgubGVuZ3RoLTEpfShlKX19ZnVuY3Rpb24gSChlLHQpe2lmKGghPT1lKXtmb3IoaD1lLGZ1bmN0aW9uIHMoZSl7ZT1lfHx7fTtmb3IodmFyIHQgaW4gdiliW3RdPXZbdF0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGVbdF0mJihiW3RdPWVbdF0pO2wuc3R5bGUudHJhbnNpdGlvbj1sLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJmYWRlSW5cIj09PWIuYW5pbWF0aW9uP1wib3BhY2l0eSAuNHMgZWFzZVwiOlwic2xpZGVJblwiPT09Yi5hbmltYXRpb24/XCJcIjpcIm5vbmVcIixcImF1dG9cIj09PWIuYnV0dG9ucyYmKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fDE9PT1oLmxlbmd0aCkmJihiLmJ1dHRvbnM9ITEpO3Uuc3R5bGUuZGlzcGxheT1jLnN0eWxlLmRpc3BsYXk9Yi5idXR0b25zP1wiXCI6XCJub25lXCI7dHJ5e3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yPWIub3ZlcmxheUJhY2tncm91bmRDb2xvcn1jYXRjaChuKXt9fSh0KTtsLmZpcnN0Q2hpbGQ7KWwucmVtb3ZlQ2hpbGQobC5maXJzdENoaWxkKTtmb3IodmFyIG4sbz1bXSxpPVtdLGE9ay5sZW5ndGg9MDthPGUubGVuZ3RoO2ErKykobj1KKFwiZGl2XCIpKS5jbGFzc05hbWU9XCJmdWxsLWltYWdlXCIsbi5pZD1cImJhZ3VldHRlLWltZy1cIithLGsucHVzaChuKSxvLnB1c2goXCJiYWd1ZXR0ZUJveC1maWd1cmUtXCIrYSksaS5wdXNoKFwiYmFndWV0dGVCb3gtZmlnY2FwdGlvbi1cIithKSxsLmFwcGVuZENoaWxkKGtbYV0pO3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsby5qb2luKFwiIFwiKSksci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaS5qb2luKFwiIFwiKSl9fWZ1bmN0aW9uIEkoZSl7Yi5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJzY3JvbGxcIiksXCJibG9ja1wiIT09ci5zdHlsZS5kaXNwbGF5JiYoVShkb2N1bWVudCxcImtleWRvd25cIixGKSxpPXtjb3VudDowLHN0YXJ0WDpudWxsLHN0YXJ0WTpudWxsfSxxKG89ZSxmdW5jdGlvbigpe3oobyksVihvKX0pLFIoKSxyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGIuZnVsbFNjcmVlbiYmZnVuY3Rpb24gdCgpe3IucmVxdWVzdEZ1bGxzY3JlZW4/ci5yZXF1ZXN0RnVsbHNjcmVlbigpOnIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4/ci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOnIubW96UmVxdWVzdEZ1bGxTY3JlZW4mJnIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKX0oKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5jbGFzc05hbWU9XCJ2aXNpYmxlXCIsYi5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYi5ib2R5Q2xhc3MpLGIuYWZ0ZXJTaG93JiZiLmFmdGVyU2hvdygpfSw1MCksYi5vbkNoYW5nZSYmYi5vbkNoYW5nZShvLGsubGVuZ3RoKSxzPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsWSgpLG49ITApfWZ1bmN0aW9uIFkoKXtiLmJ1dHRvbnM/dS5mb2N1cygpOmQuZm9jdXMoKX1mdW5jdGlvbiBqKCl7Yi5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiLGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiKSxcIm5vbmVcIiE9PXIuc3R5bGUuZGlzcGxheSYmKFcoZG9jdW1lbnQsXCJrZXlkb3duXCIsRiksci5jbGFzc05hbWU9XCJcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGRvY3VtZW50LmZ1bGxzY3JlZW4mJmZ1bmN0aW9uIGUoKXtkb2N1bWVudC5leGl0RnVsbHNjcmVlbj9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4/ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuJiZkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpfSgpLGIuYm9keUNsYXNzJiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGIuYm9keUNsYXNzKSxiLmFmdGVySGlkZSYmYi5hZnRlckhpZGUoKSxzJiZzLmZvY3VzKCksbj0hMX0sNTAwKSl9ZnVuY3Rpb24gcSh0LG4pe3ZhciBlPWtbdF0sbz1oW3RdO2lmKHZvaWQgMCE9PWUmJnZvaWQgMCE9PW8paWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSluJiZuKCk7ZWxzZXt2YXIgaT1vLmltYWdlRWxlbWVudCxhPWkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF0scz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmNhcHRpb25zP2IuY2FwdGlvbnMuY2FsbChoLGkpOmkuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXB0aW9uXCIpfHxpLnRpdGxlLHI9ZnVuY3Rpb24gZChlKXt2YXIgdD1lLmhyZWY7aWYoZS5kYXRhc2V0KXt2YXIgbj1bXTtmb3IodmFyIG8gaW4gZS5kYXRhc2V0KVwiYXQtXCIhPT1vLnN1YnN0cmluZygwLDMpfHxpc05hTihvLnN1YnN0cmluZygzKSl8fChuW28ucmVwbGFjZShcImF0LVwiLFwiXCIpXT1lLmRhdGFzZXRbb10pO2Zvcih2YXIgaT1PYmplY3Qua2V5cyhuKS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHBhcnNlSW50KGUsMTApPHBhcnNlSW50KHQsMTApPy0xOjF9KSxhPXdpbmRvdy5pbm5lcldpZHRoKndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLHM9MDtzPGkubGVuZ3RoLTEmJmlbc108YTspcysrO3Q9bltpW3NdXXx8dH1yZXR1cm4gdH0oaSksbD1KKFwiZmlndXJlXCIpO2lmKGwuaWQ9XCJiYWd1ZXR0ZUJveC1maWd1cmUtXCIrdCxsLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LXNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJcIj48L2Rpdj48L2Rpdj4nLGIuY2FwdGlvbnMmJnMpe3ZhciB1PUooXCJmaWdjYXB0aW9uXCIpO3UuaWQ9XCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK3QsdS5pbm5lckhUTUw9cyxsLmFwcGVuZENoaWxkKHUpfWUuYXBwZW5kQ2hpbGQobCk7dmFyIGM9SihcImltZ1wiKTtjLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFndWV0dGUtaW1nLVwiK3QrXCIgLmJhZ3VldHRlQm94LXNwaW5uZXJcIik7bC5yZW1vdmVDaGlsZChlKSwhYi5hc3luYyYmbiYmbigpfSxjLnNldEF0dHJpYnV0ZShcInNyY1wiLHIpLGMuYWx0PWEmJmEuYWx0fHxcIlwiLGIudGl0bGVUYWcmJnMmJihjLnRpdGxlPXMpLGwuYXBwZW5kQ2hpbGQoYyksYi5hc3luYyYmbiYmbigpfX1mdW5jdGlvbiBYKCl7cmV0dXJuIE0obysxKX1mdW5jdGlvbiBEKCl7cmV0dXJuIE0oby0xKX1mdW5jdGlvbiBNKGUsdCl7cmV0dXJuIW4mJjA8PWUmJmU8dC5sZW5ndGg/KEgodCxiKSxJKGUpLCEwKTplPDA/KGIuYW5pbWF0aW9uJiZPKFwibGVmdFwiKSwhMSk6ZT49ay5sZW5ndGg/KGIuYW5pbWF0aW9uJiZPKFwicmlnaHRcIiksITEpOihxKG89ZSxmdW5jdGlvbigpe3oobyksVihvKX0pLFIoKSxiLm9uQ2hhbmdlJiZiLm9uQ2hhbmdlKG8say5sZW5ndGgpLCEwKX1mdW5jdGlvbiBPKGUpe2wuY2xhc3NOYW1lPVwiYm91bmNlLWZyb20tXCIrZSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5jbGFzc05hbWU9XCJcIn0sNDAwKX1mdW5jdGlvbiBSKCl7dmFyIGU9MTAwKi1vK1wiJVwiO1wiZmFkZUluXCI9PT1iLmFuaW1hdGlvbj8obC5zdHlsZS5vcGFjaXR5PTAsc2V0VGltZW91dChmdW5jdGlvbigpe20udHJhbnNmb3Jtcz9sLnN0eWxlLnRyYW5zZm9ybT1sLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOmwuc3R5bGUubGVmdD1lLGwuc3R5bGUub3BhY2l0eT0xfSw0MDApKTptLnRyYW5zZm9ybXM/bC5zdHlsZS50cmFuc2Zvcm09bC5zdHlsZS53ZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIitlK1wiLDAsMClcIjpsLnN0eWxlLmxlZnQ9ZX1mdW5jdGlvbiB6KGUpe2Utbz49Yi5wcmVsb2FkfHxxKGUrMSxmdW5jdGlvbigpe3ooZSsxKX0pfWZ1bmN0aW9uIFYoZSl7by1lPj1iLnByZWxvYWR8fHEoZS0xLGZ1bmN0aW9uKCl7VihlLTEpfSl9ZnVuY3Rpb24gVShlLHQsbixvKXtlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKHQsbixvKTplLmF0dGFjaEV2ZW50KFwib25cIit0LGZ1bmN0aW9uKGUpeyhlPWV8fHdpbmRvdy5ldmVudCkudGFyZ2V0PWUudGFyZ2V0fHxlLnNyY0VsZW1lbnQsbihlKX0pfWZ1bmN0aW9uIFcoZSx0LG4sbyl7ZS5yZW1vdmVFdmVudExpc3RlbmVyP2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sbyk6ZS5kZXRhY2hFdmVudChcIm9uXCIrdCxuKX1mdW5jdGlvbiBHKGUpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKX1mdW5jdGlvbiBKKGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpfXJldHVybltdLmZvckVhY2h8fChBcnJheS5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dGhpcy5sZW5ndGg7bisrKWUuY2FsbCh0LHRoaXNbbl0sbix0aGlzKX0pLFtdLmZpbHRlcnx8KEFycmF5LnByb3RvdHlwZS5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4sbyxpKXtmb3Iobj10aGlzLG89W10saT0wO2k8bi5sZW5ndGg7aSsrKWUuY2FsbCh0LG5baV0saSxuKSYmby5wdXNoKG5baV0pO3JldHVybiBvfSkse3J1bjpmdW5jdGlvbiBLKGUsdCl7cmV0dXJuIG0udHJhbnNmb3Jtcz1mdW5jdGlvbiBuKCl7dmFyIGU9SihcImRpdlwiKTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS5wZXJzcGVjdGl2ZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuc3R5bGUud2Via2l0UGVyc3BlY3RpdmV9KCksbS5zdmc9ZnVuY3Rpb24gbygpe3ZhciBlPUooXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09KGUuZmlyc3RDaGlsZCYmZS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSl9KCksbS5wYXNzaXZlRXZlbnRzPWZ1bmN0aW9uIGkoKXt2YXIgZT0hMTt0cnl7dmFyIHQ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtlPSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLG51bGwsdCl9Y2F0Y2gobil7fXJldHVybiBlfSgpLGZ1bmN0aW9uIGEoKXtpZihyPUcoXCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIpKXJldHVybiBsPUcoXCJiYWd1ZXR0ZUJveC1zbGlkZXJcIiksdT1HKFwicHJldmlvdXMtYnV0dG9uXCIpLGM9RyhcIm5leHQtYnV0dG9uXCIpLHZvaWQoZD1HKFwiY2xvc2UtYnV0dG9uXCIpKTsocj1KKFwiZGl2XCIpKS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksci5pZD1cImJhZ3VldHRlQm94LW92ZXJsYXlcIixkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQociksKGw9SihcImRpdlwiKSkuaWQ9XCJiYWd1ZXR0ZUJveC1zbGlkZXJcIixyLmFwcGVuZENoaWxkKGwpLCh1PUooXCJidXR0b25cIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSx1LmlkPVwicHJldmlvdXMtYnV0dG9uXCIsdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJQcmV2aW91c1wiKSx1LmlubmVySFRNTD1tLnN2Zz9mOlwiJmx0O1wiLHIuYXBwZW5kQ2hpbGQodSksKGM9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuaWQ9XCJuZXh0LWJ1dHRvblwiLGMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiTmV4dFwiKSxjLmlubmVySFRNTD1tLnN2Zz9nOlwiJmd0O1wiLHIuYXBwZW5kQ2hpbGQoYyksKGQ9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGQuaWQ9XCJjbG9zZS1idXR0b25cIixkLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIkNsb3NlXCIpLGQuaW5uZXJIVE1MPW0uc3ZnP3A6XCImdGltZXM7XCIsci5hcHBlbmRDaGlsZChkKSx1LmNsYXNzTmFtZT1jLmNsYXNzTmFtZT1kLmNsYXNzTmFtZT1cImJhZ3VldHRlQm94LWJ1dHRvblwiLGZ1bmN0aW9uIG4oKXt2YXIgZT1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITF9Om51bGwsdD1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITB9Om51bGw7VShyLFwiY2xpY2tcIix4KSxVKHUsXCJjbGlja1wiLEUpLFUoYyxcImNsaWNrXCIsQyksVShkLFwiY2xpY2tcIixCKSxVKGwsXCJjb250ZXh0bWVudVwiLEEpLFUocixcInRvdWNoc3RhcnRcIixULHQpLFUocixcInRvdWNobW92ZVwiLE4sZSksVShyLFwidG91Y2hlbmRcIixMKSxVKGRvY3VtZW50LFwiZm9jdXNcIixQLCEwKX0oKX0oKSxTKGUpLGZ1bmN0aW9uIHMoZSxhKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpLG49e2dhbGxlcmllczpbXSxub2RlTGlzdDp0fTtyZXR1cm4gd1tlXT1uLFtdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe2EmJmEuZmlsdGVyJiYoeT1hLmZpbHRlcik7dmFyIHQ9W107aWYodD1cIkFcIj09PWUudGFnTmFtZT9bZV06ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksMCE9PSh0PVtdLmZpbHRlci5jYWxsKHQsZnVuY3Rpb24oZSl7aWYoLTE9PT1lLmNsYXNzTmFtZS5pbmRleE9mKGEmJmEuaWdub3JlQ2xhc3MpKXJldHVybiB5LnRlc3QoZS5ocmVmKX0pKS5sZW5ndGgpe3ZhciBpPVtdO1tdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSxIKGksYSksSSh0KX0sbz17ZXZlbnRIYW5kbGVyOm4saW1hZ2VFbGVtZW50OmV9O1UoZSxcImNsaWNrXCIsbiksaS5wdXNoKG8pfSksbi5nYWxsZXJpZXMucHVzaChpKX19KSxuLmdhbGxlcmllc30oZSx0KX0sc2hvdzpNLHNob3dOZXh0Olgsc2hvd1ByZXZpb3VzOkQsaGlkZTpqLGRlc3Ryb3k6ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbiBuKCl7dmFyIGU9bS5wYXNzaXZlRXZlbnRzP3twYXNzaXZlOiExfTpudWxsLHQ9bS5wYXNzaXZlRXZlbnRzP3twYXNzaXZlOiEwfTpudWxsO1cocixcImNsaWNrXCIseCksVyh1LFwiY2xpY2tcIixFKSxXKGMsXCJjbGlja1wiLEMpLFcoZCxcImNsaWNrXCIsQiksVyhsLFwiY29udGV4dG1lbnVcIixBKSxXKHIsXCJ0b3VjaHN0YXJ0XCIsVCx0KSxXKHIsXCJ0b3VjaG1vdmVcIixOLGUpLFcocixcInRvdWNoZW5kXCIsTCksVyhkb2N1bWVudCxcImZvY3VzXCIsUCwhMCl9KCksZnVuY3Rpb24gdCgpe2Zvcih2YXIgZSBpbiB3KXcuaGFzT3duUHJvcGVydHkoZSkmJlMoZSl9KCksVyhkb2N1bWVudCxcImtleWRvd25cIixGKSxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIpKSx3PXt9LGg9W10sbz0wfX19KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSA6Zm9jdXMtdmlzaWJsZSBwb2x5ZmlsbCBhdCB0aGUgZ2l2ZW4gc2NvcGUuXG4gICAqIEEgc2NvcGUgaW4gdGhpcyBjYXNlIGlzIGVpdGhlciB0aGUgdG9wLWxldmVsIERvY3VtZW50IG9yIGEgU2hhZG93IFJvb3QuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fFNoYWRvd1Jvb3QpfSBzY29wZVxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGVcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoc2NvcGUpIHtcbiAgICB2YXIgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG5cbiAgICB2YXIgaW5wdXRUeXBlc0FsbG93bGlzdCA9IHtcbiAgICAgIHRleHQ6IHRydWUsXG4gICAgICBzZWFyY2g6IHRydWUsXG4gICAgICB1cmw6IHRydWUsXG4gICAgICB0ZWw6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgbnVtYmVyOiB0cnVlLFxuICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgIG1vbnRoOiB0cnVlLFxuICAgICAgd2VlazogdHJ1ZSxcbiAgICAgIHRpbWU6IHRydWUsXG4gICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICdkYXRldGltZS1sb2NhbCc6IHRydWVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAgICogZWxlbWVudHMgbGlrZSBkb2N1bWVudCwgYm9keSwgYW5kIG5vbi1pbnRlcmFjdGl2ZSBTVkcuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb2N1c1RhcmdldChlbCkge1xuICAgICAgaWYgKFxuICAgICAgICBlbCAmJlxuICAgICAgICBlbCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgICAgZWwubm9kZU5hbWUgIT09ICdIVE1MJyAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAgICdjbGFzc0xpc3QnIGluIGVsICYmXG4gICAgICAgICdjb250YWlucycgaW4gZWwuY2xhc3NMaXN0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgICAqIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBiZWluZyBhZGRlZCwgaS5lLiB3aGV0aGVyIGl0IHNob3VsZCBhbHdheXMgbWF0Y2hcbiAgICAgKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgICAgdmFyIHR5cGUgPSBlbC50eXBlO1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzQWxsb3dsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90IGFkZGVkIGJ5XG4gICAgICogdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcsICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3RcbiAgICAgKiBvcmlnaW5hbGx5IGFkZGVkIGJ5IHRoZSBhdXRob3IuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAgICAgKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAqIEFwcGx5IGBmb2N1cy12aXNpYmxlYCB0byBhbnkgY3VycmVudCBhY3RpdmUgZWxlbWVudCBhbmQga2VlcCB0cmFja1xuICAgICAqIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gICAgICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBmb2N1c2AsIGFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSB0YXJnZXQgaWY6XG4gICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICogLSB0aGUgZXZlbnQgdGFyZ2V0IGlzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGxpa2VseSByZXF1aXJlIGludGVyYWN0aW9uXG4gICAgICogICB2aWEgdGhlIGtleWJvYXJkIChlLmcuIGEgdGV4dCBib3gpXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFkS2V5Ym9hcmRFdmVudCB8fCBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlLnRhcmdldCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBibHVyYCwgcmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSB8fFxuICAgICAgICBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpXG4gICAgICApIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAgICAgICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB1c2VyIGNoYW5nZXMgdGFicywga2VlcCB0cmFjayBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcHJldmlvdXNseVxuICAgICAqIGZvY3VzZWQgZWxlbWVudCBoYWQgLmZvY3VzLXZpc2libGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZShlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGJlY29tZXMgYWN0aXZlIGFnYWluLCB0aGUgYnJvd3NlciB3aWxsIGhhbmRsZSBjYWxsaW5nIGZvY3VzXG4gICAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgLy8gcmUtYXBwbHkgdGhlIGNsYXNzIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgYmFjayB0byB0aGUgdGFiLlxuICAgICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAqIFRoZXNlIGxpc3RlbmVycyB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHBvbHlmaWxsIGZpcnN0IGxvYWRzLCBhbmQgYW55dGltZVxuICAgICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICAgKiBmb2N1cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBwb2xmeWlsbCBmaXJzdCBsb2FkcywgYXNzdW1lIHRoZSB1c2VyIGlzIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogVGhpcyBhY2NvdW50cyBmb3Igc2l0dWF0aW9ucyB3aGVyZSBmb2N1cyBlbnRlcnMgdGhlIHBhZ2UgZnJvbSB0aGUgVVJMIGJhci5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsUG9pbnRlck1vdmUoZSkge1xuICAgICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICYmIGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEZvciBzb21lIGtpbmRzIG9mIHN0YXRlLCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBjaGFuZ2VzIGF0IHRoZSBnbG9iYWwgc2NvcGVcbiAgICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEZvciBmb2N1cyBhbmQgYmx1ciwgd2Ugc3BlY2lmaWNhbGx5IGNhcmUgYWJvdXQgc3RhdGUgY2hhbmdlcyBpbiB0aGUgbG9jYWxcbiAgICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAvLyB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gaXRzIG93biBzY29wZTpcbiAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuXG4gICAgLy8gV2UgZGV0ZWN0IHRoYXQgYSBub2RlIGlzIGEgU2hhZG93Um9vdCBieSBlbnN1cmluZyB0aGF0IGl0IGlzIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCBhbHNvIGhhcyBhIGhvc3QgcHJvcGVydHkuIFRoaXMgY2hlY2sgY292ZXJzIG5hdGl2ZVxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFuZCBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiB0cmFuc3BhcmVudGx5LiBJZiB3ZSBvbmx5IGNhcmVkXG4gICAgLy8gYWJvdXQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY291bGQganVzdCBjaGVjayBpZiB0aGUgc2NvcGUgd2FzXG4gICAgLy8gYW4gaW5zdGFuY2Ugb2YgYSBTaGFkb3dSb290LlxuICAgIGlmIChzY29wZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIHNjb3BlLmhvc3QpIHtcbiAgICAgIC8vIFNpbmNlIGEgU2hhZG93Um9vdCBpcyBhIHNwZWNpYWwga2luZCBvZiBEb2N1bWVudEZyYWdtZW50LCBpdCBkb2VzIG5vdFxuICAgICAgLy8gaGF2ZSBhIHJvb3QgZWxlbWVudCB0byBhZGQgYSBjbGFzcyB0by4gU28sIHdlIGFkZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGVcbiAgICAgIC8vIGhvc3QgZWxlbWVudCBpbnN0ZWFkOlxuICAgICAgc2NvcGUuaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9IGVsc2UgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqcy1mb2N1cy12aXNpYmxlJyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWpzLWZvY3VzLXZpc2libGUnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIHdyYXAgYWxsIHJlZmVyZW5jZXMgdG8gZ2xvYmFsIHdpbmRvdyBhbmQgZG9jdW1lbnQgaW5cbiAgLy8gdGhlc2UgY2hlY2tzIHRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHVzZSBjYXNlc1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvaXNzdWVzLzE5OVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE1ha2UgdGhlIHBvbHlmaWxsIGhlbHBlciBnbG9iYWxseSBhdmFpbGFibGUuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBzaWduYWxcbiAgICAvLyB0byBpbnRlcmVzdGVkIGxpYnJhcmllcyB0aGF0IHdpc2ggdG8gY29vcmRpbmF0ZSB3aXRoIHRoZSBwb2x5ZmlsbCBmb3IgZS5nLixcbiAgICAvLyBhcHBseWluZyB0aGUgcG9seWZpbGwgdG8gYSBzaGFkb3cgcm9vdDpcbiAgICB3aW5kb3cuYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCA9IGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGw7XG5cbiAgICAvLyBOb3RpZnkgaW50ZXJlc3RlZCBsaWJyYXJpZXMgb2YgdGhlIHBvbHlmaWxsJ3MgcHJlc2VuY2UsIGluIGNhc2UgdGhlXG4gICAgLy8gcG9seWZpbGwgd2FzIGxvYWRlZCBsYXppbHk6XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCB1c2luZyBDdXN0b21FdmVudCBhcyBhIGNvbnN0cnVjdG9yIGRpcmVjdGx5OlxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScsIGZhbHNlLCBmYWxzZSwge30pO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQXBwbHkgdGhlIHBvbHlmaWxsIHRvIHRoZSBnbG9iYWwgZG9jdW1lbnQsIHNvIHRoYXQgbm8gSmF2YVNjcmlwdFxuICAgIC8vIGNvb3JkaW5hdGlvbiBpcyByZXF1aXJlZCB0byB1c2UgdGhlIHBvbHlmaWxsIGluIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQ6XG4gICAgYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChkb2N1bWVudCk7XG4gIH1cblxufSkpKTtcbiIsIiFmdW5jdGlvbihuLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6bnx8c2VsZikuTGF6eUxvYWQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJihuW2ldPWVbaV0pfXJldHVybiBufSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9dCYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT10JiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz10JiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksYT10JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8dD9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX2JnX3NldDpcImJnLXNldFwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITEscmVzdG9yZV9vbl9lcnJvcjohMX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbih7fSxyLHQpfSxsPWZ1bmN0aW9uKG4sdCl7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IG4odCk7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaChuKXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSx1PVwic3JjXCIscz1cInNyY3NldFwiLGQ9XCJzaXplc1wiLGY9XCJwb3N0ZXJcIixfPVwibGxPcmlnaW5hbEF0dHJzXCIsZz1cImRhdGFcIix2PVwibG9hZGluZ1wiLGI9XCJsb2FkZWRcIixwPVwiYXBwbGllZFwiLG09XCJlcnJvclwiLGg9XCJuYXRpdmVcIixFPVwiZGF0YS1cIixJPVwibGwtc3RhdHVzXCIseT1mdW5jdGlvbihuLHQpe3JldHVybiBuLmdldEF0dHJpYnV0ZShFK3QpfSxrPWZ1bmN0aW9uKG4pe3JldHVybiB5KG4sSSl9LHc9ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obix0LGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT9uLnNldEF0dHJpYnV0ZShpLGUpOm4ucmVtb3ZlQXR0cmlidXRlKGkpfShuLDAsdCl9LEE9ZnVuY3Rpb24obil7cmV0dXJuIHcobixudWxsKX0sTD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PWsobil9LE89ZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1ofSx4PVt2LGIscCxtXSxDPWZ1bmN0aW9uKG4sdCxlLGkpe24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/bih0KTpuKHQsZSk6bih0LGUsaSkpfSxOPWZ1bmN0aW9uKG4sdCl7XCJcIiE9PXQmJihvP24uY2xhc3NMaXN0LmFkZCh0KTpuLmNsYXNzTmFtZSs9KG4uY2xhc3NOYW1lP1wiIFwiOlwiXCIpK3QpfSxNPWZ1bmN0aW9uKG4sdCl7XCJcIiE9PXQmJihvP24uY2xhc3NMaXN0LnJlbW92ZSh0KTpuLmNsYXNzTmFtZT1uLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIrdCtcIihcXFxccyt8JClcIiksXCIgXCIpLnJlcGxhY2UoL15cXHMrLyxcIlwiKS5yZXBsYWNlKC9cXHMrJC8sXCJcIikpfSx6PWZ1bmN0aW9uKG4pe3JldHVybiBuLmxsVGVtcEltYWdlfSxUPWZ1bmN0aW9uKG4sdCl7aWYodCl7dmFyIGU9dC5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUobil9fSxSPWZ1bmN0aW9uKG4sdCl7biYmKG4ubG9hZGluZ0NvdW50Kz10KX0sRz1mdW5jdGlvbihuLHQpe24mJihuLnRvTG9hZENvdW50PXQpfSxqPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxlPVtdLGk9MDt0PW4uY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09dC50YWdOYW1lJiZlLnB1c2godCk7cmV0dXJuIGV9LEQ9ZnVuY3Rpb24obix0KXt2YXIgZT1uLnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJmooZSkuZm9yRWFjaCh0KX0sSD1mdW5jdGlvbihuLHQpe2oobikuZm9yRWFjaCh0KX0sVj1bdV0sRj1bdSxmXSxCPVt1LHMsZF0sSj1bZ10sUD1mdW5jdGlvbihuKXtyZXR1cm4hIW5bX119LFM9ZnVuY3Rpb24obil7cmV0dXJuIG5bX119LFU9ZnVuY3Rpb24obil7cmV0dXJuIGRlbGV0ZSBuW19dfSwkPWZ1bmN0aW9uKG4sdCl7aWYoIVAobikpe3ZhciBlPXt9O3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT1uLmdldEF0dHJpYnV0ZSh0KX0pKSxuW19dPWV9fSxxPWZ1bmN0aW9uKG4sdCl7aWYoUChuKSl7dmFyIGU9UyhuKTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsZSl7ZT9uLnNldEF0dHJpYnV0ZSh0LGUpOm4ucmVtb3ZlQXR0cmlidXRlKHQpfShuLHQsZVt0XSl9KSl9fSxLPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19hcHBsaWVkKSx3KG4scCksZSYmKHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLHQpLEModC5jYWxsYmFja19hcHBsaWVkLG4sZSkpfSxRPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19sb2FkaW5nKSx3KG4sdiksZSYmKFIoZSwxKSxDKHQuY2FsbGJhY2tfbG9hZGluZyxuLGUpKX0sVz1mdW5jdGlvbihuLHQsZSl7ZSYmbi5zZXRBdHRyaWJ1dGUodCxlKX0sWD1mdW5jdGlvbihuLHQpe1cobixkLHkobix0LmRhdGFfc2l6ZXMpKSxXKG4scyx5KG4sdC5kYXRhX3NyY3NldCkpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFk9e0lNRzpmdW5jdGlvbihuLHQpe0QobiwoZnVuY3Rpb24obil7JChuLEIpLFgobix0KX0pKSwkKG4sQiksWChuLHQpfSxJRlJBTUU6ZnVuY3Rpb24obix0KXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24obix0KXtIKG4sKGZ1bmN0aW9uKG4peyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSkpLCQobixGKSxXKG4sZix5KG4sdC5kYXRhX3Bvc3RlcikpLFcobix1LHkobix0LmRhdGFfc3JjKSksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuLHQpeyQobixKKSxXKG4sZyx5KG4sdC5kYXRhX3NyYykpfX0sWj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIixcIk9CSkVDVFwiXSxubj1mdW5jdGlvbihuLHQpeyF0fHxmdW5jdGlvbihuKXtyZXR1cm4gbi5sb2FkaW5nQ291bnQ+MH0odCl8fGZ1bmN0aW9uKG4pe3JldHVybiBuLnRvTG9hZENvdW50PjB9KHQpfHxDKG4uY2FsbGJhY2tfZmluaXNoLHQpfSx0bj1mdW5jdGlvbihuLHQsZSl7bi5hZGRFdmVudExpc3RlbmVyKHQsZSksbi5sbEV2TGlzbnJzW3RdPWV9LGVuPWZ1bmN0aW9uKG4sdCxlKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX0sb249ZnVuY3Rpb24obil7cmV0dXJuISFuLmxsRXZMaXNucnN9LGFuPWZ1bmN0aW9uKG4pe2lmKG9uKG4pKXt2YXIgdD1uLmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07ZW4obixlLGkpfWRlbGV0ZSBuLmxsRXZMaXNucnN9fSxybj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe2RlbGV0ZSBuLmxsVGVtcEltYWdlfShuKSxSKGUsLTEpLGZ1bmN0aW9uKG4pe24mJihuLnRvTG9hZENvdW50LT0xKX0oZSksTShuLHQuY2xhc3NfbG9hZGluZyksdC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sZSl9LGNuPWZ1bmN0aW9uKG4sdCxlKXt2YXIgaT16KG4pfHxuO29uKGkpfHxmdW5jdGlvbihuLHQsZSl7b24obil8fChuLmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PW4udGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjt0bihuLGksdCksdG4obixcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19sb2FkZWQpLHcodCxiKSxDKGUuY2FsbGJhY2tfbG9hZGVkLHQsaSksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2Vycm9yKSx3KHQsbSksQyhlLmNhbGxiYWNrX2Vycm9yLHQsaSksZS5yZXN0b3JlX29uX2Vycm9yJiZxKHQsQiksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSl9LGxuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7cmV0dXJuIFouaW5kZXhPZihuLnRhZ05hbWUpPi0xfShuKT9mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe24ubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0obiksY24obix0LGUpLGZ1bmN0aW9uKG4pe1Aobil8fChuW19dPXtiYWNrZ3JvdW5kSW1hZ2U6bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2V9KX0obiksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmcpLG89eShuLHQuZGF0YV9iZ19oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLHoobikuc2V0QXR0cmlidXRlKHUsciksUShuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfbXVsdGkpLG89eShuLHQuZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixLKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19zZXQpO2lmKGkpe3ZhciBvPWkuc3BsaXQoXCJ8XCIpLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSxcIlwiPT09bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UmJihhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIi13ZWJraXQtaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKSxuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSksSyhuLHQsZSl9fShuLHQsZSl9KG4sdCxlKTpmdW5jdGlvbihuLHQsZSl7Y24obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1ZW24udGFnTmFtZV07aSYmKGkobix0KSxRKG4sdCxlKSl9KG4sdCxlKX0obix0LGUpfSx1bj1mdW5jdGlvbihuKXtuLnJlbW92ZUF0dHJpYnV0ZSh1KSxuLnJlbW92ZUF0dHJpYnV0ZShzKSxuLnJlbW92ZUF0dHJpYnV0ZShkKX0sc249ZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXtxKG4sQil9KSkscShuLEIpfSxkbj17SU1HOnNuLElGUkFNRTpmdW5jdGlvbihuKXtxKG4sVil9LFZJREVPOmZ1bmN0aW9uKG4pe0gobiwoZnVuY3Rpb24obil7cShuLFYpfSkpLHEobixGKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4pe3EobixKKX19LGZuPWZ1bmN0aW9uKG4sdCl7KGZ1bmN0aW9uKG4pe3ZhciB0PWRuW24udGFnTmFtZV07dD90KG4pOmZ1bmN0aW9uKG4pe2lmKFAobikpe3ZhciB0PVMobik7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2V9fShuKX0pKG4pLGZ1bmN0aW9uKG4sdCl7TChuKXx8TyhuKXx8KE0obix0LmNsYXNzX2VudGVyZWQpLE0obix0LmNsYXNzX2V4aXRlZCksTShuLHQuY2xhc3NfYXBwbGllZCksTShuLHQuY2xhc3NfbG9hZGluZyksTShuLHQuY2xhc3NfbG9hZGVkKSxNKG4sdC5jbGFzc19lcnJvcikpfShuLHQpLEEobiksVShuKX0sX249W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLGduPWZ1bmN0aW9uKG4pe3JldHVybiBuLnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHZuPWZ1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbi5pc0ludGVyc2VjdGluZ3x8bi5pbnRlcnNlY3Rpb25SYXRpbz4wfShuKT9mdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1mdW5jdGlvbihuKXtyZXR1cm4geC5pbmRleE9mKGsobikpPj0wfShuKTt3KG4sXCJlbnRlcmVkXCIpLE4obixlLmNsYXNzX2VudGVyZWQpLE0obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUpe3QudW5vYnNlcnZlX2VudGVyZWQmJlQobixlKX0obixlLGkpLEMoZS5jYWxsYmFja19lbnRlcixuLHQsaSksb3x8bG4obixlLGkpfShuLnRhcmdldCxuLHQsZSk6ZnVuY3Rpb24obix0LGUsaSl7TChuKXx8KE4obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT12fShuKSYmXCJJTUdcIj09PW4udGFnTmFtZSYmKGFuKG4pLGZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7dW4obil9KSksdW4obil9KG4pLHNuKG4pLE0obixlLmNsYXNzX2xvYWRpbmcpLFIoaSwtMSksQShuKSxDKGUuY2FsbGJhY2tfY2FuY2VsLG4sdCxpKSl9KG4sdCxlLGkpLEMoZS5jYWxsYmFja19leGl0LG4sdCxpKSl9KG4udGFyZ2V0LG4sdCxlKX0pKX0sYm49ZnVuY3Rpb24obil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pfSxwbj1mdW5jdGlvbihuKXtyZXR1cm4gbi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sbW49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09bX0obil9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBibihuKS5maWx0ZXIoTCl9KG58fHBuKHQpKX0sRW49ZnVuY3Rpb24obixlKXt2YXIgbz1jKG4pO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbihuLHQpe2kmJiFnbihuKSYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dm4oZSxuLHQpfSksZnVuY3Rpb24obil7cmV0dXJue3Jvb3Q6bi5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOm4uY29udGFpbmVyLHJvb3RNYXJnaW46bi50aHJlc2hvbGRzfHxuLnRocmVzaG9sZCtcInB4XCJ9fShuKSkpfShvLHRoaXMpLGZ1bmN0aW9uKG4sZSl7dCYmKGUuX29ubGluZUhhbmRsZXI9ZnVuY3Rpb24oKXshZnVuY3Rpb24obix0KXt2YXIgZTsoZT1wbihuKSxibihlKS5maWx0ZXIobW4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtNKHQsbi5jbGFzc19lcnJvciksQSh0KX0pKSx0LnVwZGF0ZSgpfShuLGUpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGUuX29ubGluZUhhbmRsZXIpKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIEVuLnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKG4pe3ZhciB0LG8sYT10aGlzLl9zZXR0aW5ncyxyPWhuKG4sYSk7Ryh0aGlzLHIubGVuZ3RoKSwhZSYmaT9nbihhKT9mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PV9uLmluZGV4T2Yobi50YWdOYW1lKSYmZnVuY3Rpb24obix0LGUpe24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxjbihuLHQsZSksZnVuY3Rpb24obix0KXt2YXIgZT1ZW24udGFnTmFtZV07ZSYmZShuLHQpfShuLHQpLHcobixoKX0obix0LGUpfSkpLEcoZSwwKX0ocixhLHRoaXMpOihvPXIsZnVuY3Rpb24obil7bi5kaXNjb25uZWN0KCl9KHQ9dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKG4sdCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9ic2VydmUodCl9KSl9KHQsbykpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksdCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIix0aGlzLl9vbmxpbmVIYW5kbGVyKSxwbih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24obil7VShuKX0pKSxkZWxldGUgdGhpcy5fb2JzZXJ2ZXIsZGVsZXRlIHRoaXMuX3NldHRpbmdzLGRlbGV0ZSB0aGlzLl9vbmxpbmVIYW5kbGVyLGRlbGV0ZSB0aGlzLmxvYWRpbmdDb3VudCxkZWxldGUgdGhpcy50b0xvYWRDb3VudH0sbG9hZEFsbDpmdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9dGhpcy5fc2V0dGluZ3M7aG4obixlKS5mb3JFYWNoKChmdW5jdGlvbihuKXtUKG4sdCksbG4obixlLHQpfSkpfSxyZXN0b3JlQWxsOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fc2V0dGluZ3M7cG4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm4odCxuKX0pKX19LEVuLmxvYWQ9ZnVuY3Rpb24obix0KXt2YXIgZT1jKHQpO2xuKG4sZSl9LEVuLnJlc2V0U3RhdHVzPWZ1bmN0aW9uKG4pe0Eobil9LHQmJmZ1bmN0aW9uKG4sdCl7aWYodClpZih0Lmxlbmd0aClmb3IodmFyIGUsaT0wO2U9dFtpXTtpKz0xKWwobixlKTtlbHNlIGwobix0KX0oRW4sd2luZG93LmxhenlMb2FkT3B0aW9ucyksRW59KSk7XG4iLCIvKipcbiAqIFplbnNjcm9sbCA0LjAuMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3plbmdhYm9yL3plbnNjcm9sbC9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNeKAkzIwMTggR2Fib3IgTGVuYXJkXG4gKlxuICogVGhpcyBpcyBmcmVlIGFuZCB1bmVuY3VtYmVyZWQgc29mdHdhcmUgcmVsZWFzZWQgaW50byB0aGUgcHVibGljIGRvbWFpbi5cbiAqIFxuICogQW55b25lIGlzIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBwdWJsaXNoLCB1c2UsIGNvbXBpbGUsIHNlbGwsIG9yXG4gKiBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUsIGVpdGhlciBpbiBzb3VyY2UgY29kZSBmb3JtIG9yIGFzIGEgY29tcGlsZWRcbiAqIGJpbmFyeSwgZm9yIGFueSBwdXJwb3NlLCBjb21tZXJjaWFsIG9yIG5vbi1jb21tZXJjaWFsLCBhbmQgYnkgYW55XG4gKiBtZWFucy5cbiAqIFxuICogSW4ganVyaXNkaWN0aW9ucyB0aGF0IHJlY29nbml6ZSBjb3B5cmlnaHQgbGF3cywgdGhlIGF1dGhvciBvciBhdXRob3JzXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGRlZGljYXRlIGFueSBhbmQgYWxsIGNvcHlyaWdodCBpbnRlcmVzdCBpbiB0aGVcbiAqIHNvZnR3YXJlIHRvIHRoZSBwdWJsaWMgZG9tYWluLiBXZSBtYWtlIHRoaXMgZGVkaWNhdGlvbiBmb3IgdGhlIGJlbmVmaXRcbiAqIG9mIHRoZSBwdWJsaWMgYXQgbGFyZ2UgYW5kIHRvIHRoZSBkZXRyaW1lbnQgb2Ygb3VyIGhlaXJzIGFuZFxuICogc3VjY2Vzc29ycy4gV2UgaW50ZW5kIHRoaXMgZGVkaWNhdGlvbiB0byBiZSBhbiBvdmVydCBhY3Qgb2ZcbiAqIHJlbGlucXVpc2htZW50IGluIHBlcnBldHVpdHkgb2YgYWxsIHByZXNlbnQgYW5kIGZ1dHVyZSByaWdodHMgdG8gdGhpc1xuICogc29mdHdhcmUgdW5kZXIgY29weXJpZ2h0IGxhdy5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1JcbiAqIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLFxuICogQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVmZXIgdG8gPGh0dHA6Ly91bmxpY2Vuc2Uub3JnPlxuICogXG4gKi9cblxuLypqc2hpbnQgZGV2ZWw6dHJ1ZSwgYXNpOnRydWUgKi9cblxuLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KCkpXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG5cdH0gZWxzZSB7XG5cdFx0KGZ1bmN0aW9uIGluc3RhbGwoKSB7XG5cdFx0XHQvLyBUbyBtYWtlIHN1cmUgWmVuc2Nyb2xsIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gdGhlIGhlYWRlciwgYmVmb3JlIGBib2R5YCBpcyBhdmFpbGFibGVcblx0XHRcdGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG5cdFx0XHRcdHJvb3QuemVuc2Nyb2xsID0gZmFjdG9yeSgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZXRyeSA5bXMgbGF0ZXJcblx0XHRcdFx0c2V0VGltZW91dChpbnN0YWxsLCA5KVxuXHRcdFx0fVxuXHRcdH0pKClcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiXG5cblxuXHQvLyBEZXRlY3QgaWYgdGhlIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBuYXRpdmUgc21vb3RoIHNjcm9sbGluZyAoZS5nLiwgRmlyZWZveCAzNisgYW5kIENocm9tZSA0OSspIGFuZCBpdCBpcyBlbmFibGVkOlxuXHR2YXIgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24gPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHJldHVybiBlbGVtICYmIFwiZ2V0Q29tcHV0ZWRTdHlsZVwiIGluIHdpbmRvdyAmJlxuXHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlbXCJzY3JvbGwtYmVoYXZpb3JcIl0gPT09IFwic21vb3RoXCJcblx0fVxuXG5cblx0Ly8gRXhpdCBpZiBpdOKAmXMgbm90IGEgYnJvd3NlciBlbnZpcm9ubWVudDpcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgIShcImRvY3VtZW50XCIgaW4gd2luZG93KSkge1xuXHRcdHJldHVybiB7fVxuXHR9XG5cblxuXHR2YXIgbWFrZVNjcm9sbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cblx0XHQvLyBVc2UgZGVmYXVsdHMgaWYgbm90IHByb3ZpZGVkXG5cdFx0ZGVmYXVsdER1cmF0aW9uID0gZGVmYXVsdER1cmF0aW9uIHx8IDk5OSAvL21zXG5cdFx0aWYgKCFlZGdlT2Zmc2V0ICYmIGVkZ2VPZmZzZXQgIT09IDApIHtcblx0XHRcdC8vIFdoZW4gc2Nyb2xsaW5nLCB0aGlzIGFtb3VudCBvZiBkaXN0YW5jZSBpcyBrZXB0IGZyb20gdGhlIGVkZ2VzIG9mIHRoZSBjb250YWluZXI6XG5cdFx0XHRlZGdlT2Zmc2V0ID0gOSAvL3B4XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxpbmcgdGhlIGxpZmUtY3ljbGUgb2YgdGhlIHNjcm9sbGVyXG5cdFx0dmFyIHNjcm9sbFRpbWVvdXRJZFxuXHRcdHZhciBzZXRTY3JvbGxUaW1lb3V0SWQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdHNjcm9sbFRpbWVvdXRJZCA9IG5ld1ZhbHVlXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU3RvcCB0aGUgY3VycmVudCBzbW9vdGggc2Nyb2xsIG9wZXJhdGlvbiBpbW1lZGlhdGVseVxuXHRcdCAqL1xuXHRcdHZhciBzdG9wU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXRJZClcblx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZCgwKVxuXHRcdH1cblxuXHRcdHZhciBnZXRUb3BXaXRoRWRnZU9mZnNldCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gZWRnZU9mZnNldClcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIGEgc3BlY2lmaWMgdmVydGljYWwgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHt0YXJnZXRZfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiAgICAgICAgSWYgbm90IHByb3ZpZGVkIHRoZSBkZWZhdWx0IGR1cmF0aW9uIGlzIHVzZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb1kgPSBmdW5jdGlvbiAodGFyZ2V0WSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c3RvcFNjcm9sbCgpXG5cdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgfHwgKGR1cmF0aW9uICYmIGR1cmF0aW9uIDwgMCkgfHwgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oY29udGFpbmVyLmJvZHkpKSB7XG5cdFx0XHRcdGNvbnRhaW5lci50b1kodGFyZ2V0WSlcblx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzdGFydFkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGgubWF4KDAsIHRhcmdldFkpIC0gc3RhcnRZXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKE1hdGguYWJzKGRpc3RhbmNlKSwgZGVmYXVsdER1cmF0aW9uKTtcblx0XHRcdFx0KGZ1bmN0aW9uIGxvb3BTY3JvbGwoKSB7XG5cdFx0XHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2U6XG5cdFx0XHRcdFx0XHR2YXIgcCA9IE1hdGgubWluKDEsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbilcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgdmVydGljYWwgcG9zaXRpb246XG5cdFx0XHRcdFx0XHR2YXIgeSA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc3RhcnRZICsgZGlzdGFuY2UqKHAgPCAwLjUgPyAyKnAqcCA6IHAqKDQgLSBwKjIpLTEpKSlcblx0XHRcdFx0XHRcdGNvbnRhaW5lci50b1koeSlcblx0XHRcdFx0XHRcdGlmIChwIDwgMSAmJiAoY29udGFpbmVyLmdldEhlaWdodCgpICsgeSkgPCBjb250YWluZXIuYm9keS5zY3JvbGxIZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0bG9vcFNjcm9sbCgpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHN0b3BTY3JvbGwsIDk5KSAvLyB3aXRoIGNvb2xkb3duIHRpbWVcblx0XHRcdFx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KSlcblx0XHRcdFx0fSkoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiBhIHNwZWNpZmljIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50IHRvIHNjcm9sbCB0by5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvRWxlbSA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyBhbiBlbGVtZW50IGludG8gdmlldyBpZiBuZWNlc3NhcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0dmFyIGVsZW1IZWlnaHQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdFx0dmFyIGVsZW1Cb3R0b20gPSBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgKyBlbGVtSGVpZ2h0XG5cdFx0XHR2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEhlaWdodCgpXG5cdFx0XHR2YXIgeSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdHZhciBjb250YWluZXJCb3R0b20gPSB5ICsgY29udGFpbmVySGVpZ2h0XG5cdFx0XHRpZiAoZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSkgPCB5IHx8IChlbGVtSGVpZ2h0ICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJIZWlnaHQpIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRvcCBvciBpcyBoaWdoZXIgdGhhbiBzY3JlZW4uXG5cdFx0XHRcdHNjcm9sbFRvRWxlbShlbGVtLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmICgoZWxlbUJvdHRvbSArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVyQm90dG9tKSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0aGUgYm90dG9tLlxuXHRcdFx0XHRzY3JvbGxUb1koZWxlbUJvdHRvbSAtIGNvbnRhaW5lckhlaWdodCArIGVkZ2VPZmZzZXQsIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKG9uRG9uZSkge1xuXHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIGNlbnRlciBvZiBhbiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29mZnNldH0gT3B0aW9uYWxseSB0aGUgb2Zmc2V0IG9mIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4uXG5cdFx0ICogICAgICAgIEEgdmFsdWUgb2YgMCBpcyBpZ25vcmVkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9DZW50ZXJPZiA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb2Zmc2V0LCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBjb250YWluZXIuZ2V0SGVpZ2h0KCkvMiArIChvZmZzZXQgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQvMikpLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoYW5nZXMgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBzY3JvbGxlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bmV3RGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0XHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcGFyYW0ge25ld0VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCB2YWx1ZXMuXG5cdFx0ICovXG5cdFx0dmFyIHNldHVwID0gZnVuY3Rpb24gKG5ld0RlZmF1bHREdXJhdGlvbiwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0aWYgKG5ld0RlZmF1bHREdXJhdGlvbiA9PT0gMCB8fCBuZXdEZWZhdWx0RHVyYXRpb24pIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uID0gbmV3RGVmYXVsdER1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3RWRnZU9mZnNldCA9PT0gMCB8fCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdGVkZ2VPZmZzZXQgPSBuZXdFZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb246IGRlZmF1bHREdXJhdGlvbixcblx0XHRcdFx0ZWRnZU9mZnNldDogZWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXR1cDogc2V0dXAsXG5cdFx0XHR0bzogc2Nyb2xsVG9FbGVtLFxuXHRcdFx0dG9ZOiBzY3JvbGxUb1ksXG5cdFx0XHRpbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG5cdFx0XHRjZW50ZXI6IHNjcm9sbFRvQ2VudGVyT2YsXG5cdFx0XHRzdG9wOiBzdG9wU2Nyb2xsLFxuXHRcdFx0bW92aW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXNjcm9sbFRpbWVvdXRJZCB9LFxuXHRcdFx0Z2V0WTogY29udGFpbmVyLmdldFksXG5cdFx0XHRnZXRUb3BPZjogY29udGFpbmVyLmdldFRvcE9mXG5cdFx0fVxuXG5cdH1cblxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdHZhciBnZXREb2NZID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgZG9jRWxlbS5zY3JvbGxUb3AgfVxuXG5cdC8vIENyZWF0ZSBhIHNjcm9sbGVyIGZvciB0aGUgZG9jdW1lbnQ6XG5cdHZhciB6ZW5zY3JvbGwgPSBtYWtlU2Nyb2xsZXIoe1xuXHRcdGJvZHk6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSxcblx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHdpbmRvdy5zY3JvbGxUbygwLCB5KSB9LFxuXHRcdGdldFk6IGdldERvY1ksXG5cdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfSxcblx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZ2V0RG9jWSgpIC0gZG9jRWxlbS5vZmZzZXRUb3AgfVxuXHR9KVxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzY3JvbGxlciBmcm9tIHRoZSBwcm92aWRlZCBjb250YWluZXIgZWxlbWVudCAoZS5nLiwgYSBESVYpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c2Nyb2xsQ29udGFpbmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0ICogQHBhcmFtIHtkZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIDAgb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEBwYXJhbSB7ZWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIFxuXHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHJldHVybnMgQSBzY3JvbGxlciBvYmplY3QsIHNpbWlsYXIgdG8gYHplbnNjcm9sbGAgYnV0IGNvbnRyb2xsaW5nIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuXHQgKi9cblx0emVuc2Nyb2xsLmNyZWF0ZVNjcm9sbGVyID0gZnVuY3Rpb24gKHNjcm9sbENvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cdFx0cmV0dXJuIG1ha2VTY3JvbGxlcih7XG5cdFx0XHRib2R5OiBzY3JvbGxDb250YWluZXIsXG5cdFx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSB5IH0sXG5cdFx0XHRnZXRZOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIH0sXG5cdFx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgubWluKHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCkgfSxcblx0XHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5vZmZzZXRUb3AgfVxuXHRcdH0sIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldClcblx0fVxuXG5cblx0Ly8gQXV0b21hdGljIGxpbmstc21vb3RoaW5nIG9uIGFjaG9yc1xuXHQvLyBFeGNsdWRlIElFOC0gb3Igd2hlbiBuYXRpdmUgaXMgZW5hYmxlZCBvciBaZW5zY3JvbGwgYXV0by0gaXMgZGlzYWJsZWRcblx0aWYgKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIHdpbmRvdyAmJiAhd2luZG93Lm5vWmVuc21vb3RoICYmICFpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihkb2N1bWVudC5ib2R5KSkge1xuXG5cdFx0dmFyIGlzSGlzdG9yeVN1cHBvcnRlZCA9IFwiaGlzdG9yeVwiIGluIHdpbmRvdyAmJiBcInB1c2hTdGF0ZVwiIGluIGhpc3Rvcnlcblx0XHR2YXIgaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCA9IGlzSGlzdG9yeVN1cHBvcnRlZCAmJiBcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeVxuXG5cdFx0Ly8gT24gZmlyc3QgbG9hZCAmIHJlZnJlc2ggbWFrZSBzdXJlIHRoZSBicm93c2VyIHJlc3RvcmVzIHRoZSBwb3NpdGlvbiBmaXJzdFxuXHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCJcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHQvLyBTZXQgaXQgdG8gbWFudWFsXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIiB9LCA5KVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGlmIChldmVudC5zdGF0ZSAmJiBcInplbnNjcm9sbFlcIiBpbiBldmVudC5zdGF0ZSkge1xuXHRcdFx0XHRcdFx0emVuc2Nyb2xsLnRvWShldmVudC5zdGF0ZS56ZW5zY3JvbGxZKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZmFsc2UpXG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlZGdlIG9mZnNldCBvbiBmaXJzdCBsb2FkIGlmIG5lY2Vzc2FyeVxuXHRcdFx0Ly8gVGhpcyBtYXkgbm90IHdvcmsgb24gSUUgKG9yIG9sZGVyIGNvbXB1dGVyPykgYXMgaXQgcmVxdWlyZXMgbW9yZSB0aW1lb3V0LCBhcm91bmQgMTAwIG1zXG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gQWRqdXN0bWVudCBpcyBvbmx5IG5lZWRlZCBpZiB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldDpcblx0XHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMV0pXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0WSA9IE1hdGgubWF4KDAsIHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0XHRcdHZhciBkaWZmID0gemVuc2Nyb2xsLmdldFkoKSAtIHRhcmdldFlcblx0XHRcdFx0XHRcdFx0Ly8gT25seSBkbyB0aGUgYWRqdXN0bWVudCBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IGNsb3NlIHRvIHRoZSBlbGVtZW50OlxuXHRcdFx0XHRcdFx0XHRpZiAoMCA8PSBkaWZmICYmIGRpZmYgPCA5ICkge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB0YXJnZXRZKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA5KVxuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpXG5cblx0XHQvLyBIYW5kbGluZyBjbGlja3Mgb24gYW5jaG9yc1xuXHRcdHZhciBSRV9ub1plbnNtb290aCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylub1plbnNtb290aChcXFxcc3wkKVwiKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgYW5jaG9yID0gZXZlbnQudGFyZ2V0XG5cdFx0XHR3aGlsZSAoYW5jaG9yICYmIGFuY2hvci50YWdOYW1lICE9PSBcIkFcIikge1xuXHRcdFx0XHRhbmNob3IgPSBhbmNob3IucGFyZW50Tm9kZVxuXHRcdFx0fVxuXHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgaXQgd2Fzbid0IHdpdGggdGhlIHByaW1hcnkgYnV0dG9uLCBvciB3aXRoIHNvbWUgbW9kaWZpZXIga2V5czpcblx0XHRcdGlmICghYW5jaG9yIHx8IGV2ZW50LndoaWNoICE9PSAxIHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbGluZyBwb3NpdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBmb3Igc2Nyb2xsIHJlc3RvcmF0aW9uOlxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0dmFyIGhpc3RvcnlTdGF0ZSA9IGhpc3Rvcnkuc3RhdGUgJiYgdHlwZW9mIGhpc3Rvcnkuc3RhdGUgPT09IFwib2JqZWN0XCIgPyBoaXN0b3J5LnN0YXRlIDoge31cblx0XHRcdFx0aGlzdG9yeVN0YXRlLnplbnNjcm9sbFkgPSB6ZW5zY3JvbGwuZ2V0WSgpXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiKVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gQXZvaWQgdGhlIENocm9tZSBTZWN1cml0eSBleGNlcHRpb24gb24gZmlsZSBwcm90b2NvbCwgZS5nLiwgZmlsZTovL2luZGV4Lmh0bWxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmluZCB0aGUgcmVmZXJlbmNlZCBJRDpcblx0XHRcdHZhciBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIlxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihcIiNcIikgPT09IDAgJiYgIVJFX25vWmVuc21vb3RoLnRlc3QoYW5jaG9yLmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0dmFyIHRhcmdldFkgPSAwXG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHJpbmcoMSkpXG5cdFx0XHRcdGlmIChocmVmICE9PSBcIiNcIikge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgdGhlIHRhcmdldCBJRCBpcyBub3QgZm91bmQuXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Ly8gQnkgZGVmYXVsdCB0cmlnZ2VyIHRoZSBicm93c2VyJ3MgYGhhc2hjaGFuZ2VgIGV2ZW50Li4uXG5cdFx0XHRcdHZhciBvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYgfVxuXHRcdFx0XHQvLyAuLi51bmxlc3MgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQgc3BlY2lmaWVkXG5cdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdHRhcmdldFkgPSBNYXRoLm1heCgwLCB0YXJnZXRZIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRpZiAoaXNIaXN0b3J5U3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0XHRvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBocmVmKSB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHplbnNjcm9sbC50b1kodGFyZ2V0WSwgbnVsbCwgb25Eb25lKVxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKVxuXG5cdH1cblxuXG5cdHJldHVybiB6ZW5zY3JvbGxcblxuXG59KSk7XG4iLCJmdW5jdGlvbiBmb2N1c1dpdGhpbihkb2N1bWVudCwgb3B0cykge1xuICBjb25zdCBjbGFzc05hbWUgPSBPYmplY3Qob3B0cykuY2xhc3NOYW1lO1xuICBjb25zdCBhdHRyID0gT2JqZWN0KG9wdHMpLmF0dHIgfHwgJ2ZvY3VzLXdpdGhpbic7XG4gIGNvbnN0IGZvcmNlID0gT2JqZWN0KG9wdHMpLmZvcmNlO1xuICBjb25zdCBsYXN0RWxlbWVudHMgPSBbXTtcblxuICB0cnkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cy13aXRoaW4nKTtcblxuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHJldHVybiBpbml0aWFsaXplO1xuICAgIH1cbiAgfSBjYXRjaCAoaWdub3JlZEVycm9yKSB7XG4gICAgLyogZG8gbm90aGluZyBhbmQgY29udGludWUgKi9cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZm9jdXNjaGFuZ2UoKSB7XG4gICAgbGV0IGxhc3RFbGVtZW50O1xuXG4gICAgd2hpbGUgKGxhc3RFbGVtZW50ID0gbGFzdEVsZW1lbnRzLnBvcCgpKSB7XG4gICAgICBpZiAoYXR0cikge1xuICAgICAgICBsYXN0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgbGFzdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDsgLy8gb25seSBhZGQgZm9jdXMgaWYgaXQgaGFzIG5vdCBiZWVuIGFkZGVkIGFuZCBpcyBub3QgdGhlIGRvY3VtZW50IGVsZW1lbnRcblxuICAgIGlmICghL14oI2RvY3VtZW50fEhUTUx8Qk9EWSkkLy50ZXN0KE9iamVjdChhY3RpdmVFbGVtZW50KS5ub2RlTmFtZSkpIHtcbiAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0RWxlbWVudHMucHVzaChhY3RpdmVFbGVtZW50KTtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25mb2N1c2NoYW5nZSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uZm9jdXNjaGFuZ2UsIHRydWUpO1xuICB9XG4gIC8qKlxuICAqIENhbGxiYWNrIHdyYXBwZXIgZm9yIGNoZWNrIGxvYWRlZCBzdGF0ZVxuICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cblxuICAhZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBpZiAoL20vLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsb2FkKSB8IGluaXRpYWxpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGxvYWQpO1xuICAgIH1cbiAgfSgpO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgcmV0dXJuIGluaXRpYWxpemU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvY3VzV2l0aGluO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL2pzL2RlZmF1bHRzLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJmb2N1c193aXRoaW5fMSIsIl9faW1wb3J0RGVmYXVsdCIsInplbnNjcm9sbF8xIiwidmFuaWxsYV9sYXp5bG9hZF8xIiwiYmFndWV0dGVib3hfanNfMSIsImRvY3VtZW50IiwiYXR0ciIsImNsYXNzTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJydW4iLCJsaW5rcyIsImZvckVhY2giLCJsaW5rIiwiaG9zdG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNldEF0dHJpYnV0ZSIsImxhenlMb2FkSW1hZ2VzIiwic2V0dXAiXSwic291cmNlUm9vdCI6IiJ9