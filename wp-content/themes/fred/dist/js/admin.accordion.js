/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/fred/assets/js/admin.accordion.ts":
/*!*************************************************************!*\
  !*** ./wp-content/themes/fred/assets/js/admin.accordion.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! van11y-accessible-accordion-aria */ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js");
function initAccordion() {
  var accordion = van11yAccessibleAccordionAria({
    ACCORDION_JS: 'js-accordion'
  });
  accordion.attach();
}
if (window.acf) {
  document.addEventListener('DOMContentLoaded', function () {
    initAccordion();
  });
  window.acf.addAction('render_block_preview', initAccordion);
}

/***/ }),

/***/ "./wp-content/themes/fred/assets/sass/admin.scss":
/*!*******************************************************!*\
  !*** ./wp-content/themes/fred/assets/sass/admin.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/fred/assets/sass/global.scss":
/*!********************************************************!*\
  !*** ./wp-content/themes/fred/assets/sass/global.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/fred/assets/sass/print.scss":
/*!*******************************************************!*\
  !*** ./wp-content/themes/fred/assets/sass/print.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/fred/assets/css/tailwind.css":
/*!********************************************************!*\
  !*** ./wp-content/themes/fred/assets/css/tailwind.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js ***!
  \****************************************************************************************************/
/***/ (() => {

/**
 * van11y-accessible-accordion-aria - ES2015 accessible accordion system, using ARIA (compatible IE9+ when transpiled)
 * @version v3.0.1
 * @link https://van11y.net/accessible-accordion/
 * @license MIT : https://github.com/nico3333fr/van11y-accessible-accordion-aria/blob/master/LICENSE
 */
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},loadConfig=function(){var e={},t=function(t,r){e[t]=r},r=function(t){return e[t]},n=function(t){return e[t]};return{set:t,get:r,remove:n}},DATA_HASH_ID="data-hashaccordion-id",pluginConfig=loadConfig(),findById=function(e,t){return document.querySelector("#"+e+"["+DATA_HASH_ID+'="'+t+'"]')},addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setAttributes=function(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})},searchParentHashId=function(e,t){for(var r=!1,n=e;1===n.nodeType&&n&&r===!1;)n.hasAttribute(t)===!0?r=!0:n=n.parentNode;return r===!0?n.getAttribute(t):""},searchParent=function(e,t,r){for(var n=!1,A=e;A&&n===!1;)hasClass(A,t)===!0&&A.getAttribute(DATA_HASH_ID)===r?n=!0:A=A.parentNode;return n===!0?A.getAttribute("id"):""},unSelectHeaders=function(e,t){e.forEach(function(e){setAttributes(e,_defineProperty({},t,"false"))})},selectHeader=function(e,t){e.setAttribute(t,!0)},selectHeaderInList=function(e,t,r){var n=void 0;e.forEach(function(e,t){"true"===e.getAttribute(r)&&(n=t)}),"next"===t&&(selectHeader(e[n+1]),setTimeout(function(){e[n+1].focus()},0)),"prev"===t&&(selectHeader(e[n-1]),setTimeout(function(){e[n-1].focus()},0))},plugin=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=_extends({ACCORDION_JS:"js-accordion",ACCORDION_JS_HEADER:"js-accordion__header",ACCORDION_JS_PANEL:"js-accordion__panel",ACCORDION_DATA_PREFIX_CLASS:"data-accordion-prefix-classes",ACCORDION_DATA_OPENED:"data-accordion-opened",ACCORDION_DATA_MULTISELECTABLE:"data-accordion-multiselectable",ACCORDION_DATA_COOL_SELECTORS:"data-accordion-cool-selectors",ACCORDION_PREFIX_IDS:"accordion",ACCORDION_BUTTON_ID:"_tab",ACCORDION_PANEL_ID:"_panel",ACCORDION_STYLE:"accordion",ACCORDION_TITLE_STYLE:"accordion__title",ACCORDION_HEADER_STYLE:"accordion__header",ACCORDION_PANEL_STYLE:"accordion__panel",ACCORDION_ROLE_TABLIST:"tablist",ACCORDION_ROLE_TAB:"tab",ACCORDION_ROLE_TABPANEL:"tabpanel",ATTR_ROLE:"role",ATTR_MULTISELECTABLE:"aria-multiselectable",ATTR_EXPANDED:"aria-expanded",ATTR_LABELLEDBY:"aria-labelledby",ATTR_HIDDEN:"aria-hidden",ATTR_CONTROLS:"aria-controls",ATTR_SELECTED:"aria-selected"},e),r=Math.random().toString(32).slice(2,12);pluginConfig.set(r,t);var n=function(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS))},A=function(e){n(e).forEach(function(e){var n="z"+Math.random().toString(32).slice(2,12),A=e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS)===!0?e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS)+"-":"",a=e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS)===!0;"none"===e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE)?e.setAttribute(t.ATTR_MULTISELECTABLE,"false"):e.setAttribute(t.ATTR_MULTISELECTABLE,"true"),e.setAttribute(t.ATTR_ROLE,t.ACCORDION_ROLE_TABLIST),e.setAttribute("id",n),e.setAttribute(DATA_HASH_ID,r),addClass(e,A+t.ACCORDION_STYLE);var i=[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS_HEADER));i.forEach(function(i,_){var o,T;if(i.parentNode===e||a!==!1){var E=_+1,s=i.nextElementSibling,C=i.innerHTML,c=document.createElement("BUTTON"),D=i.hasAttribute(t.ACCORDION_DATA_OPENED)===!0?i.getAttribute(t.ACCORDION_DATA_OPENED):"";c.innerHTML=C,addClass(c,t.ACCORDION_JS_HEADER),addClass(c,A+t.ACCORDION_HEADER_STYLE),setAttributes(c,(o={},_defineProperty(o,t.ATTR_ROLE,t.ACCORDION_ROLE_TAB),_defineProperty(o,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(o,t.ATTR_CONTROLS,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(o,t.ATTR_SELECTED,"false"),_defineProperty(o,"type","button"),_defineProperty(o,DATA_HASH_ID,r),o)),i.innerHTML="",i.appendChild(c),addClass(i,A+t.ACCORDION_TITLE_STYLE),removeClass(i,t.ACCORDION_JS_HEADER),addClass(s,A+t.ACCORDION_PANEL_STYLE),setAttributes(s,(T={},_defineProperty(T,t.ATTR_ROLE,t.ACCORDION_ROLE_TABPANEL),_defineProperty(T,t.ATTR_LABELLEDBY,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(T,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(T,DATA_HASH_ID,r),T)),"true"===D?(c.setAttribute(t.ATTR_EXPANDED,"true"),i.removeAttribute(t.ACCORDION_DATA_OPENED),s.setAttribute(t.ATTR_HIDDEN,"false")):(c.setAttribute(t.ATTR_EXPANDED,"false"),s.setAttribute(t.ATTR_HIDDEN,"true"))}})})};return{attach:A}},main=function(){return["click","keydown","focus"].forEach(function(e){document.body.addEventListener(e,function(t){var r=searchParentHashId(t.target,DATA_HASH_ID);""!==r&&!function(){var n=pluginConfig.get(r);hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"focus"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER));a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),unSelectHeaders(i,n.ATTR_SELECTED),selectHeader(e,n.ATTR_SELECTED)}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"click"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER)),_=A.getAttribute(n.ATTR_MULTISELECTABLE),o=findById(e.getAttribute(n.ATTR_CONTROLS),r),T=e.getAttribute(n.ATTR_EXPANDED);a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),"false"===T?(e.setAttribute(n.ATTR_EXPANDED,!0),o.removeAttribute(n.ATTR_HIDDEN)):(e.setAttribute(n.ATTR_EXPANDED,!1),o.setAttribute(n.ATTR_HIDDEN,!0)),"false"===_&&i.forEach(function(t){var A=findById(t.getAttribute(n.ATTR_CONTROLS),r);t!==e?(t.setAttribute(n.ATTR_SELECTED,!1),t.setAttribute(n.ATTR_EXPANDED,!1),A.setAttribute(n.ATTR_HIDDEN,!0)):t.setAttribute(n.ATTR_SELECTED,!0)}),setTimeout(function(){e.focus()},0),t.preventDefault()}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"keydown"===e&&!function(){var e=t.target,A=searchParent(e,n.ACCORDION_JS,r),a=findById(A,r),i=a.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,_=[].slice.call(a.querySelectorAll("."+n.ACCORDION_JS_HEADER));i===!1&&(_=_.filter(function(e){return e.parentNode.parentNode===a})),36===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):35===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):37!==t.keyCode&&38!==t.keyCode||t.ctrlKey?40!==t.keyCode&&39!==t.keyCode||t.ctrlKey||("true"===_[_.length-1].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):(selectHeaderInList(_,"next",n.ATTR_SELECTED),t.preventDefault())):"true"===_[0].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):(selectHeaderInList(_,"prev",n.ATTR_SELECTED),t.preventDefault())}()}()},!0)}),plugin};window.van11yAccessibleAccordionAria=main();var onLoad=function e(){var t=window.van11yAccessibleAccordionAria();t.attach(),document.removeEventListener("DOMContentLoaded",e)};document.addEventListener("DOMContentLoaded",onLoad);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/admin.accordion": 0,
/******/ 			"css/tailwind": 0,
/******/ 			"css/print": 0,
/******/ 			"css/global": 0,
/******/ 			"css/admin": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfred"] = self["webpackChunkfred"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/js/admin.accordion.ts")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/sass/admin.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/sass/global.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/sass/print.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tailwind","css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/css/tailwind.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFcERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWQvLi93cC1jb250ZW50L3RoZW1lcy9mcmVkL2Fzc2V0cy9qcy9hZG1pbi5hY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vZnJlZC8uL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL3Nhc3MvYWRtaW4uc2Nzcz9hNmE0Iiwid2VicGFjazovL2ZyZWQvLi93cC1jb250ZW50L3RoZW1lcy9mcmVkL2Fzc2V0cy9zYXNzL2dsb2JhbC5zY3NzPzc3YmUiLCJ3ZWJwYWNrOi8vZnJlZC8uL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL3Nhc3MvcHJpbnQuc2Nzcz9kMjgwIiwid2VicGFjazovL2ZyZWQvLi93cC1jb250ZW50L3RoZW1lcy9mcmVkL2Fzc2V0cy9jc3MvdGFpbHdpbmQuY3NzP2VkZjgiLCJ3ZWJwYWNrOi8vZnJlZC8uL25vZGVfbW9kdWxlcy92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS9kaXN0L3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhLm1pbi5qcyIsIndlYnBhY2s6Ly9mcmVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9mcmVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZyZWQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZnJlZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZyZWQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEnXG5cbi8vIE1hbnVhbGx5IHJ1biBhY2NvcmRpb24gSlMgdG8gd29yayB3aXRoIEdCZXJnIHByZXZpZXdzXG5mdW5jdGlvbiBpbml0QWNjb3JkaW9uKCkge1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IGFjY29yZGlvbiA9IHZhbjExeUFjY2Vzc2libGVBY2NvcmRpb25BcmlhKHtcbiAgICBBQ0NPUkRJT05fSlM6ICdqcy1hY2NvcmRpb24nLFxuICB9KVxuICBhY2NvcmRpb24uYXR0YWNoKClcbn1cblxuLy8gSW5pdGlhbGl6ZSBkeW5hbWljIGJsb2NrIHByZXZpZXcgKGVkaXRvcilcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnlcblxuaWYgKHdpbmRvdy5hY2YpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpbml0QWNjb3JkaW9uKClcbiAgfSlcbiAgd2luZG93LmFjZi5hZGRBY3Rpb24oJ3JlbmRlcl9ibG9ja19wcmV2aWV3JywgaW5pdEFjY29yZGlvbilcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEgLSBFUzIwMTUgYWNjZXNzaWJsZSBhY2NvcmRpb24gc3lzdGVtLCB1c2luZyBBUklBIChjb21wYXRpYmxlIElFOSsgd2hlbiB0cmFuc3BpbGVkKVxuICogQHZlcnNpb24gdjMuMC4xXG4gKiBAbGluayBodHRwczovL3ZhbjExeS5uZXQvYWNjZXNzaWJsZS1hY2NvcmRpb24vXG4gKiBAbGljZW5zZSBNSVQgOiBodHRwczovL2dpdGh1Yi5jb20vbmljbzMzMzNmci92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmKGVbbl09cltuXSl9cmV0dXJuIGV9LGxvYWRDb25maWc9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PWZ1bmN0aW9uKHQscil7ZVt0XT1yfSxyPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSxuPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfTtyZXR1cm57c2V0OnQsZ2V0OnIscmVtb3ZlOm59fSxEQVRBX0hBU0hfSUQ9XCJkYXRhLWhhc2hhY2NvcmRpb24taWRcIixwbHVnaW5Db25maWc9bG9hZENvbmZpZygpLGZpbmRCeUlkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZStcIltcIitEQVRBX0hBU0hfSUQrJz1cIicrdCsnXCJdJyl9LGFkZENsYXNzPWZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKHQpOmUuY2xhc3NOYW1lKz1cIiBcIit0fSxyZW1vdmVDbGFzcz1mdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LnJlbW92ZSh0KTplLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcYnwkKVwiLFwiZ2lcIiksXCIgXCIpfSxoYXNDbGFzcz1mdW5jdGlvbihlLHQpe3JldHVybiBlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5jb250YWlucyh0KTpuZXcgUmVnRXhwKFwiKF58IClcIit0K1wiKCB8JClcIixcImdpXCIpLnRlc3QoZS5jbGFzc05hbWUpfSxzZXRBdHRyaWJ1dGVzPWZ1bmN0aW9uKGUsdCl7T2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihyKXtlLnNldEF0dHJpYnV0ZShyLHRbcl0pfSl9LHNlYXJjaFBhcmVudEhhc2hJZD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0hMSxuPWU7MT09PW4ubm9kZVR5cGUmJm4mJnI9PT0hMTspbi5oYXNBdHRyaWJ1dGUodCk9PT0hMD9yPSEwOm49bi5wYXJlbnROb2RlO3JldHVybiByPT09ITA/bi5nZXRBdHRyaWJ1dGUodCk6XCJcIn0sc2VhcmNoUGFyZW50PWZ1bmN0aW9uKGUsdCxyKXtmb3IodmFyIG49ITEsQT1lO0EmJm49PT0hMTspaGFzQ2xhc3MoQSx0KT09PSEwJiZBLmdldEF0dHJpYnV0ZShEQVRBX0hBU0hfSUQpPT09cj9uPSEwOkE9QS5wYXJlbnROb2RlO3JldHVybiBuPT09ITA/QS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTpcIlwifSx1blNlbGVjdEhlYWRlcnM9ZnVuY3Rpb24oZSx0KXtlLmZvckVhY2goZnVuY3Rpb24oZSl7c2V0QXR0cmlidXRlcyhlLF9kZWZpbmVQcm9wZXJ0eSh7fSx0LFwiZmFsc2VcIikpfSl9LHNlbGVjdEhlYWRlcj1mdW5jdGlvbihlLHQpe2Uuc2V0QXR0cmlidXRlKHQsITApfSxzZWxlY3RIZWFkZXJJbkxpc3Q9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXZvaWQgMDtlLmZvckVhY2goZnVuY3Rpb24oZSx0KXtcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKHIpJiYobj10KX0pLFwibmV4dFwiPT09dCYmKHNlbGVjdEhlYWRlcihlW24rMV0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlW24rMV0uZm9jdXMoKX0sMCkpLFwicHJldlwiPT09dCYmKHNlbGVjdEhlYWRlcihlW24tMV0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlW24tMV0uZm9jdXMoKX0sMCkpfSxwbHVnaW49ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/e306YXJndW1lbnRzWzBdLHQ9X2V4dGVuZHMoe0FDQ09SRElPTl9KUzpcImpzLWFjY29yZGlvblwiLEFDQ09SRElPTl9KU19IRUFERVI6XCJqcy1hY2NvcmRpb25fX2hlYWRlclwiLEFDQ09SRElPTl9KU19QQU5FTDpcImpzLWFjY29yZGlvbl9fcGFuZWxcIixBQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1M6XCJkYXRhLWFjY29yZGlvbi1wcmVmaXgtY2xhc3Nlc1wiLEFDQ09SRElPTl9EQVRBX09QRU5FRDpcImRhdGEtYWNjb3JkaW9uLW9wZW5lZFwiLEFDQ09SRElPTl9EQVRBX01VTFRJU0VMRUNUQUJMRTpcImRhdGEtYWNjb3JkaW9uLW11bHRpc2VsZWN0YWJsZVwiLEFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTOlwiZGF0YS1hY2NvcmRpb24tY29vbC1zZWxlY3RvcnNcIixBQ0NPUkRJT05fUFJFRklYX0lEUzpcImFjY29yZGlvblwiLEFDQ09SRElPTl9CVVRUT05fSUQ6XCJfdGFiXCIsQUNDT1JESU9OX1BBTkVMX0lEOlwiX3BhbmVsXCIsQUNDT1JESU9OX1NUWUxFOlwiYWNjb3JkaW9uXCIsQUNDT1JESU9OX1RJVExFX1NUWUxFOlwiYWNjb3JkaW9uX190aXRsZVwiLEFDQ09SRElPTl9IRUFERVJfU1RZTEU6XCJhY2NvcmRpb25fX2hlYWRlclwiLEFDQ09SRElPTl9QQU5FTF9TVFlMRTpcImFjY29yZGlvbl9fcGFuZWxcIixBQ0NPUkRJT05fUk9MRV9UQUJMSVNUOlwidGFibGlzdFwiLEFDQ09SRElPTl9ST0xFX1RBQjpcInRhYlwiLEFDQ09SRElPTl9ST0xFX1RBQlBBTkVMOlwidGFicGFuZWxcIixBVFRSX1JPTEU6XCJyb2xlXCIsQVRUUl9NVUxUSVNFTEVDVEFCTEU6XCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiLEFUVFJfRVhQQU5ERUQ6XCJhcmlhLWV4cGFuZGVkXCIsQVRUUl9MQUJFTExFREJZOlwiYXJpYS1sYWJlbGxlZGJ5XCIsQVRUUl9ISURERU46XCJhcmlhLWhpZGRlblwiLEFUVFJfQ09OVFJPTFM6XCJhcmlhLWNvbnRyb2xzXCIsQVRUUl9TRUxFQ1RFRDpcImFyaWEtc2VsZWN0ZWRcIn0sZSkscj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyLDEyKTtwbHVnaW5Db25maWcuc2V0KHIsdCk7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/ZG9jdW1lbnQ6YXJndW1lbnRzWzBdO3JldHVybltdLnNsaWNlLmNhbGwoZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3QuQUNDT1JESU9OX0pTKSl9LEE9ZnVuY3Rpb24oZSl7bihlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBuPVwielwiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIsMTIpLEE9ZS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1MpPT09ITA/ZS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1MpK1wiLVwiOlwiXCIsYT1lLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwO1wibm9uZVwiPT09ZS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9NVUxUSVNFTEVDVEFCTEUpP2Uuc2V0QXR0cmlidXRlKHQuQVRUUl9NVUxUSVNFTEVDVEFCTEUsXCJmYWxzZVwiKTplLnNldEF0dHJpYnV0ZSh0LkFUVFJfTVVMVElTRUxFQ1RBQkxFLFwidHJ1ZVwiKSxlLnNldEF0dHJpYnV0ZSh0LkFUVFJfUk9MRSx0LkFDQ09SRElPTl9ST0xFX1RBQkxJU1QpLGUuc2V0QXR0cmlidXRlKFwiaWRcIixuKSxlLnNldEF0dHJpYnV0ZShEQVRBX0hBU0hfSUQsciksYWRkQ2xhc3MoZSxBK3QuQUNDT1JESU9OX1NUWUxFKTt2YXIgaT1bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIi5cIit0LkFDQ09SRElPTl9KU19IRUFERVIpKTtpLmZvckVhY2goZnVuY3Rpb24oaSxfKXt2YXIgbyxUO2lmKGkucGFyZW50Tm9kZT09PWV8fGEhPT0hMSl7dmFyIEU9XysxLHM9aS5uZXh0RWxlbWVudFNpYmxpbmcsQz1pLmlubmVySFRNTCxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIiksRD1pLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCk9PT0hMD9pLmdldEF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCk6XCJcIjtjLmlubmVySFRNTD1DLGFkZENsYXNzKGMsdC5BQ0NPUkRJT05fSlNfSEVBREVSKSxhZGRDbGFzcyhjLEErdC5BQ0NPUkRJT05fSEVBREVSX1NUWUxFKSxzZXRBdHRyaWJ1dGVzKGMsKG89e30sX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUIpLF9kZWZpbmVQcm9wZXJ0eShvLFwiaWRcIix0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fQlVUVE9OX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9DT05UUk9MUyx0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fUEFORUxfSUQrRSksX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX1NFTEVDVEVELFwiZmFsc2VcIiksX2RlZmluZVByb3BlcnR5KG8sXCJ0eXBlXCIsXCJidXR0b25cIiksX2RlZmluZVByb3BlcnR5KG8sREFUQV9IQVNIX0lELHIpLG8pKSxpLmlubmVySFRNTD1cIlwiLGkuYXBwZW5kQ2hpbGQoYyksYWRkQ2xhc3MoaSxBK3QuQUNDT1JESU9OX1RJVExFX1NUWUxFKSxyZW1vdmVDbGFzcyhpLHQuQUNDT1JESU9OX0pTX0hFQURFUiksYWRkQ2xhc3MocyxBK3QuQUNDT1JESU9OX1BBTkVMX1NUWUxFKSxzZXRBdHRyaWJ1dGVzKHMsKFQ9e30sX2RlZmluZVByb3BlcnR5KFQsdC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUJQQU5FTCksX2RlZmluZVByb3BlcnR5KFQsdC5BVFRSX0xBQkVMTEVEQlksdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX0JVVFRPTl9JRCtFKSxfZGVmaW5lUHJvcGVydHkoVCxcImlkXCIsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX1BBTkVMX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShULERBVEFfSEFTSF9JRCxyKSxUKSksXCJ0cnVlXCI9PT1EPyhjLnNldEF0dHJpYnV0ZSh0LkFUVFJfRVhQQU5ERUQsXCJ0cnVlXCIpLGkucmVtb3ZlQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfT1BFTkVEKSxzLnNldEF0dHJpYnV0ZSh0LkFUVFJfSElEREVOLFwiZmFsc2VcIikpOihjLnNldEF0dHJpYnV0ZSh0LkFUVFJfRVhQQU5ERUQsXCJmYWxzZVwiKSxzLnNldEF0dHJpYnV0ZSh0LkFUVFJfSElEREVOLFwidHJ1ZVwiKSl9fSl9KX07cmV0dXJue2F0dGFjaDpBfX0sbWFpbj1mdW5jdGlvbigpe3JldHVybltcImNsaWNrXCIsXCJrZXlkb3duXCIsXCJmb2N1c1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihlLGZ1bmN0aW9uKHQpe3ZhciByPXNlYXJjaFBhcmVudEhhc2hJZCh0LnRhcmdldCxEQVRBX0hBU0hfSUQpO1wiXCIhPT1yJiYhZnVuY3Rpb24oKXt2YXIgbj1wbHVnaW5Db25maWcuZ2V0KHIpO2hhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJmb2N1c1wiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1maW5kQnlJZChzZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxyKSxhPUEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsaT1bXS5zbGljZS5jYWxsKEEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKTthPT09ITEmJihpPWkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PUF9KSksdW5TZWxlY3RIZWFkZXJzKGksbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoZSxuLkFUVFJfU0VMRUNURUQpfSgpLGhhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJjbGlja1wiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1maW5kQnlJZChzZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxyKSxhPUEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsaT1bXS5zbGljZS5jYWxsKEEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKSxfPUEuZ2V0QXR0cmlidXRlKG4uQVRUUl9NVUxUSVNFTEVDVEFCTEUpLG89ZmluZEJ5SWQoZS5nZXRBdHRyaWJ1dGUobi5BVFRSX0NPTlRST0xTKSxyKSxUPWUuZ2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCk7YT09PSExJiYoaT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1BfSkpLFwiZmFsc2VcIj09PVQ/KGUuc2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCwhMCksby5yZW1vdmVBdHRyaWJ1dGUobi5BVFRSX0hJRERFTikpOihlLnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITEpLG8uc2V0QXR0cmlidXRlKG4uQVRUUl9ISURERU4sITApKSxcImZhbHNlXCI9PT1fJiZpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIEE9ZmluZEJ5SWQodC5nZXRBdHRyaWJ1dGUobi5BVFRSX0NPTlRST0xTKSxyKTt0IT09ZT8odC5zZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVELCExKSx0LnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITEpLEEuc2V0QXR0cmlidXRlKG4uQVRUUl9ISURERU4sITApKTp0LnNldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQsITApfSksc2V0VGltZW91dChmdW5jdGlvbigpe2UuZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpfSgpLGhhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJrZXlkb3duXCI9PT1lJiYhZnVuY3Rpb24oKXt2YXIgZT10LnRhcmdldCxBPXNlYXJjaFBhcmVudChlLG4uQUNDT1JESU9OX0pTLHIpLGE9ZmluZEJ5SWQoQSxyKSxpPWEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsXz1bXS5zbGljZS5jYWxsKGEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKTtpPT09ITEmJihfPV8uZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PWF9KSksMzY9PT10LmtleUNvZGU/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bMF0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1swXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOjM1PT09dC5rZXlDb2RlPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfW18ubGVuZ3RoLTFdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bXy5sZW5ndGgtMV0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTozNyE9PXQua2V5Q29kZSYmMzghPT10LmtleUNvZGV8fHQuY3RybEtleT80MCE9PXQua2V5Q29kZSYmMzkhPT10LmtleUNvZGV8fHQuY3RybEtleXx8KFwidHJ1ZVwiPT09X1tfLmxlbmd0aC0xXS5nZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVEKT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1swXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfWzBdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6KHNlbGVjdEhlYWRlckluTGlzdChfLFwibmV4dFwiLG4uQVRUUl9TRUxFQ1RFRCksdC5wcmV2ZW50RGVmYXVsdCgpKSk6XCJ0cnVlXCI9PT1fWzBdLmdldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQpPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfW18ubGVuZ3RoLTFdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bXy5sZW5ndGgtMV0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTooc2VsZWN0SGVhZGVySW5MaXN0KF8sXCJwcmV2XCIsbi5BVFRSX1NFTEVDVEVEKSx0LnByZXZlbnREZWZhdWx0KCkpfSgpfSgpfSwhMCl9KSxwbHVnaW59O3dpbmRvdy52YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYT1tYWluKCk7dmFyIG9uTG9hZD1mdW5jdGlvbiBlKCl7dmFyIHQ9d2luZG93LnZhbjExeUFjY2Vzc2libGVBY2NvcmRpb25BcmlhKCk7dC5hdHRhY2goKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLG9uTG9hZCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2pzL2FkbWluLmFjY29yZGlvblwiOiAwLFxuXHRcImNzcy90YWlsd2luZFwiOiAwLFxuXHRcImNzcy9wcmludFwiOiAwLFxuXHRcImNzcy9nbG9iYWxcIjogMCxcblx0XCJjc3MvYWRtaW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZnJlZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtmcmVkXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3RhaWx3aW5kXCIsXCJjc3MvcHJpbnRcIixcImNzcy9nbG9iYWxcIixcImNzcy9hZG1pblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL2pzL2FkbWluLmFjY29yZGlvbi50c1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvdGFpbHdpbmRcIixcImNzcy9wcmludFwiLFwiY3NzL2dsb2JhbFwiLFwiY3NzL2FkbWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd3AtY29udGVudC90aGVtZXMvZnJlZC9hc3NldHMvc2Fzcy9hZG1pbi5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy90YWlsd2luZFwiLFwiY3NzL3ByaW50XCIsXCJjc3MvZ2xvYmFsXCIsXCJjc3MvYWRtaW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93cC1jb250ZW50L3RoZW1lcy9mcmVkL2Fzc2V0cy9zYXNzL2dsb2JhbC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy90YWlsd2luZFwiLFwiY3NzL3ByaW50XCIsXCJjc3MvZ2xvYmFsXCIsXCJjc3MvYWRtaW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93cC1jb250ZW50L3RoZW1lcy9mcmVkL2Fzc2V0cy9zYXNzL3ByaW50LnNjc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvdGFpbHdpbmRcIixcImNzcy9wcmludFwiLFwiY3NzL2dsb2JhbFwiLFwiY3NzL2FkbWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd3AtY29udGVudC90aGVtZXMvZnJlZC9hc3NldHMvY3NzL3RhaWx3aW5kLmNzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0QWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwidmFuMTF5QWNjZXNzaWJsZUFjY29yZGlvbkFyaWEiLCJBQ0NPUkRJT05fSlMiLCJhdHRhY2giLCJ3aW5kb3ciLCJhY2YiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRBY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9