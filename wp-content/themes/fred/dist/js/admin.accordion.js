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
/******/ 					result = fn();
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpippip_theme"] = self["webpackChunkpippip_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/js/admin.accordion.ts")))
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/sass/admin.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/sass/global.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/print","css/global","css/admin"], () => (__webpack_require__("./wp-content/themes/fred/assets/sass/print.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXBwaXAtdGhlbWUvLi93cC1jb250ZW50L3RoZW1lcy9mcmVkL2Fzc2V0cy9qcy9hZG1pbi5hY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvZnJlZC9hc3NldHMvc2Fzcy9hZG1pbi5zY3NzP2ZhZTMiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvZnJlZC9hc3NldHMvc2Fzcy9nbG9iYWwuc2Nzcz9kM2RjIiwid2VicGFjazovL3BpcHBpcC10aGVtZS8uL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL3Nhc3MvcHJpbnQuc2Nzcz8zYzAwIiwid2VicGFjazovL3BpcHBpcC10aGVtZS8uL25vZGVfbW9kdWxlcy92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS9kaXN0L3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhLm1pbi5qcyIsIndlYnBhY2s6Ly9waXBwaXAtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGlwcGlwLXRoZW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BpcHBpcC10aGVtZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLFNBQVMsYUFBVCxHQUFzQjtBQUVwQixNQUFNLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztBQUM5QyxnQkFBWSxFQUFF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cy9hZG1pbi5hY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhJ1xuXG4vLyBNYW51YWxseSBydW4gYWNjb3JkaW9uIEpTIHRvIHdvcmsgd2l0aCBHQmVyZyBwcmV2aWV3c1xuZnVuY3Rpb24gaW5pdEFjY29yZGlvbigpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBhY2NvcmRpb24gPSB2YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYSh7XG4gICAgQUNDT1JESU9OX0pTOiAnanMtYWNjb3JkaW9uJyxcbiAgfSlcbiAgYWNjb3JkaW9uLmF0dGFjaCgpXG59XG5cbi8vIEluaXRpYWxpemUgZHluYW1pYyBibG9jayBwcmV2aWV3IChlZGl0b3IpXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55XG5cbmlmICh3aW5kb3cuYWNmKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaW5pdEFjY29yZGlvbigpXG4gIH0pXG4gIHdpbmRvdy5hY2YuYWRkQWN0aW9uKCdyZW5kZXJfYmxvY2tfcHJldmlldycsIGluaXRBY2NvcmRpb24pXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIHZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhIC0gRVMyMDE1IGFjY2Vzc2libGUgYWNjb3JkaW9uIHN5c3RlbSwgdXNpbmcgQVJJQSAoY29tcGF0aWJsZSBJRTkrIHdoZW4gdHJhbnNwaWxlZClcbiAqIEB2ZXJzaW9uIHYzLjAuMVxuICogQGxpbmsgaHR0cHM6Ly92YW4xMXkubmV0L2FjY2Vzc2libGUtYWNjb3JkaW9uL1xuICogQGxpY2Vuc2UgTUlUIDogaHR0cHM6Ly9naXRodWIuY29tL25pY28zMzMzZnIvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfXZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1hcmd1bWVudHNbdF07Zm9yKHZhciBuIGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pfXJldHVybiBlfSxsb2FkQ29uZmlnPWZ1bmN0aW9uKCl7dmFyIGU9e30sdD1mdW5jdGlvbih0LHIpe2VbdF09cn0scj1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0sbj1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XX07cmV0dXJue3NldDp0LGdldDpyLHJlbW92ZTpufX0sREFUQV9IQVNIX0lEPVwiZGF0YS1oYXNoYWNjb3JkaW9uLWlkXCIscGx1Z2luQ29uZmlnPWxvYWRDb25maWcoKSxmaW5kQnlJZD1mdW5jdGlvbihlLHQpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UrXCJbXCIrREFUQV9IQVNIX0lEKyc9XCInK3QrJ1wiXScpfSxhZGRDbGFzcz1mdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmFkZCh0KTplLmNsYXNzTmFtZSs9XCIgXCIrdH0scmVtb3ZlQ2xhc3M9ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5yZW1vdmUodCk6ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXGJ8JClcIixcImdpXCIpLFwiIFwiKX0saGFzQ2xhc3M9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuY29udGFpbnModCk6bmV3IFJlZ0V4cChcIihefCApXCIrdCtcIiggfCQpXCIsXCJnaVwiKS50ZXN0KGUuY2xhc3NOYW1lKX0sc2V0QXR0cmlidXRlcz1mdW5jdGlvbihlLHQpe09iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24ocil7ZS5zZXRBdHRyaWJ1dGUocix0W3JdKX0pfSxzZWFyY2hQYXJlbnRIYXNoSWQ9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9ITEsbj1lOzE9PT1uLm5vZGVUeXBlJiZuJiZyPT09ITE7KW4uaGFzQXR0cmlidXRlKHQpPT09ITA/cj0hMDpuPW4ucGFyZW50Tm9kZTtyZXR1cm4gcj09PSEwP24uZ2V0QXR0cmlidXRlKHQpOlwiXCJ9LHNlYXJjaFBhcmVudD1mdW5jdGlvbihlLHQscil7Zm9yKHZhciBuPSExLEE9ZTtBJiZuPT09ITE7KWhhc0NsYXNzKEEsdCk9PT0hMCYmQS5nZXRBdHRyaWJ1dGUoREFUQV9IQVNIX0lEKT09PXI/bj0hMDpBPUEucGFyZW50Tm9kZTtyZXR1cm4gbj09PSEwP0EuZ2V0QXR0cmlidXRlKFwiaWRcIik6XCJcIn0sdW5TZWxlY3RIZWFkZXJzPWZ1bmN0aW9uKGUsdCl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3NldEF0dHJpYnV0ZXMoZSxfZGVmaW5lUHJvcGVydHkoe30sdCxcImZhbHNlXCIpKX0pfSxzZWxlY3RIZWFkZXI9ZnVuY3Rpb24oZSx0KXtlLnNldEF0dHJpYnV0ZSh0LCEwKX0sc2VsZWN0SGVhZGVySW5MaXN0PWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj12b2lkIDA7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShyKSYmKG49dCl9KSxcIm5leHRcIj09PXQmJihzZWxlY3RIZWFkZXIoZVtuKzFdKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZVtuKzFdLmZvY3VzKCl9LDApKSxcInByZXZcIj09PXQmJihzZWxlY3RIZWFkZXIoZVtuLTFdKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZVtuLTFdLmZvY3VzKCl9LDApKX0scGx1Z2luPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXSx0PV9leHRlbmRzKHtBQ0NPUkRJT05fSlM6XCJqcy1hY2NvcmRpb25cIixBQ0NPUkRJT05fSlNfSEVBREVSOlwianMtYWNjb3JkaW9uX19oZWFkZXJcIixBQ0NPUkRJT05fSlNfUEFORUw6XCJqcy1hY2NvcmRpb25fX3BhbmVsXCIsQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTOlwiZGF0YS1hY2NvcmRpb24tcHJlZml4LWNsYXNzZXNcIixBQ0NPUkRJT05fREFUQV9PUEVORUQ6XCJkYXRhLWFjY29yZGlvbi1vcGVuZWRcIixBQ0NPUkRJT05fREFUQV9NVUxUSVNFTEVDVEFCTEU6XCJkYXRhLWFjY29yZGlvbi1tdWx0aXNlbGVjdGFibGVcIixBQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUzpcImRhdGEtYWNjb3JkaW9uLWNvb2wtc2VsZWN0b3JzXCIsQUNDT1JESU9OX1BSRUZJWF9JRFM6XCJhY2NvcmRpb25cIixBQ0NPUkRJT05fQlVUVE9OX0lEOlwiX3RhYlwiLEFDQ09SRElPTl9QQU5FTF9JRDpcIl9wYW5lbFwiLEFDQ09SRElPTl9TVFlMRTpcImFjY29yZGlvblwiLEFDQ09SRElPTl9USVRMRV9TVFlMRTpcImFjY29yZGlvbl9fdGl0bGVcIixBQ0NPUkRJT05fSEVBREVSX1NUWUxFOlwiYWNjb3JkaW9uX19oZWFkZXJcIixBQ0NPUkRJT05fUEFORUxfU1RZTEU6XCJhY2NvcmRpb25fX3BhbmVsXCIsQUNDT1JESU9OX1JPTEVfVEFCTElTVDpcInRhYmxpc3RcIixBQ0NPUkRJT05fUk9MRV9UQUI6XCJ0YWJcIixBQ0NPUkRJT05fUk9MRV9UQUJQQU5FTDpcInRhYnBhbmVsXCIsQVRUUl9ST0xFOlwicm9sZVwiLEFUVFJfTVVMVElTRUxFQ1RBQkxFOlwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIixBVFRSX0VYUEFOREVEOlwiYXJpYS1leHBhbmRlZFwiLEFUVFJfTEFCRUxMRURCWTpcImFyaWEtbGFiZWxsZWRieVwiLEFUVFJfSElEREVOOlwiYXJpYS1oaWRkZW5cIixBVFRSX0NPTlRST0xTOlwiYXJpYS1jb250cm9sc1wiLEFUVFJfU0VMRUNURUQ6XCJhcmlhLXNlbGVjdGVkXCJ9LGUpLHI9TWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMiwxMik7cGx1Z2luQ29uZmlnLnNldChyLHQpO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP2RvY3VtZW50OmFyZ3VtZW50c1swXTtyZXR1cm5bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIi5cIit0LkFDQ09SRElPTl9KUykpfSxBPWZ1bmN0aW9uKGUpe24oZSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1cInpcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyLDEyKSxBPWUuaGFzQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTKT09PSEwP2UuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTKStcIi1cIjpcIlwiLGE9ZS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUyk9PT0hMDtcIm5vbmVcIj09PWUuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfTVVMVElTRUxFQ1RBQkxFKT9lLnNldEF0dHJpYnV0ZSh0LkFUVFJfTVVMVElTRUxFQ1RBQkxFLFwiZmFsc2VcIik6ZS5zZXRBdHRyaWJ1dGUodC5BVFRSX01VTFRJU0VMRUNUQUJMRSxcInRydWVcIiksZS5zZXRBdHRyaWJ1dGUodC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUJMSVNUKSxlLnNldEF0dHJpYnV0ZShcImlkXCIsbiksZS5zZXRBdHRyaWJ1dGUoREFUQV9IQVNIX0lELHIpLGFkZENsYXNzKGUsQSt0LkFDQ09SRElPTl9TVFlMRSk7dmFyIGk9W10uc2xpY2UuY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdC5BQ0NPUkRJT05fSlNfSEVBREVSKSk7aS5mb3JFYWNoKGZ1bmN0aW9uKGksXyl7dmFyIG8sVDtpZihpLnBhcmVudE5vZGU9PT1lfHxhIT09ITEpe3ZhciBFPV8rMSxzPWkubmV4dEVsZW1lbnRTaWJsaW5nLEM9aS5pbm5lckhUTUwsYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpLEQ9aS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpPT09ITA/aS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpOlwiXCI7Yy5pbm5lckhUTUw9QyxhZGRDbGFzcyhjLHQuQUNDT1JESU9OX0pTX0hFQURFUiksYWRkQ2xhc3MoYyxBK3QuQUNDT1JESU9OX0hFQURFUl9TVFlMRSksc2V0QXR0cmlidXRlcyhjLChvPXt9LF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCKSxfZGVmaW5lUHJvcGVydHkobyxcImlkXCIsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX0JVVFRPTl9JRCtFKSxfZGVmaW5lUHJvcGVydHkobyx0LkFUVFJfQ09OVFJPTFMsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX1BBTkVMX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9TRUxFQ1RFRCxcImZhbHNlXCIpLF9kZWZpbmVQcm9wZXJ0eShvLFwidHlwZVwiLFwiYnV0dG9uXCIpLF9kZWZpbmVQcm9wZXJ0eShvLERBVEFfSEFTSF9JRCxyKSxvKSksaS5pbm5lckhUTUw9XCJcIixpLmFwcGVuZENoaWxkKGMpLGFkZENsYXNzKGksQSt0LkFDQ09SRElPTl9USVRMRV9TVFlMRSkscmVtb3ZlQ2xhc3MoaSx0LkFDQ09SRElPTl9KU19IRUFERVIpLGFkZENsYXNzKHMsQSt0LkFDQ09SRElPTl9QQU5FTF9TVFlMRSksc2V0QXR0cmlidXRlcyhzLChUPXt9LF9kZWZpbmVQcm9wZXJ0eShULHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCUEFORUwpLF9kZWZpbmVQcm9wZXJ0eShULHQuQVRUUl9MQUJFTExFREJZLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9CVVRUT05fSUQrRSksX2RlZmluZVByb3BlcnR5KFQsXCJpZFwiLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9QQU5FTF9JRCtFKSxfZGVmaW5lUHJvcGVydHkoVCxEQVRBX0hBU0hfSUQsciksVCkpLFwidHJ1ZVwiPT09RD8oYy5zZXRBdHRyaWJ1dGUodC5BVFRSX0VYUEFOREVELFwidHJ1ZVwiKSxpLnJlbW92ZUF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCkscy5zZXRBdHRyaWJ1dGUodC5BVFRSX0hJRERFTixcImZhbHNlXCIpKTooYy5zZXRBdHRyaWJ1dGUodC5BVFRSX0VYUEFOREVELFwiZmFsc2VcIikscy5zZXRBdHRyaWJ1dGUodC5BVFRSX0hJRERFTixcInRydWVcIikpfX0pfSl9O3JldHVybnthdHRhY2g6QX19LG1haW49ZnVuY3Rpb24oKXtyZXR1cm5bXCJjbGlja1wiLFwia2V5ZG93blwiLFwiZm9jdXNcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZSxmdW5jdGlvbih0KXt2YXIgcj1zZWFyY2hQYXJlbnRIYXNoSWQodC50YXJnZXQsREFUQV9IQVNIX0lEKTtcIlwiIT09ciYmIWZ1bmN0aW9uKCl7dmFyIG49cGx1Z2luQ29uZmlnLmdldChyKTtoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwiZm9jdXNcIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9ZmluZEJ5SWQoc2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksciksYT1BLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLGk9W10uc2xpY2UuY2FsbChBLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSk7YT09PSExJiYoaT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1BfSkpLHVuU2VsZWN0SGVhZGVycyhpLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKGUsbi5BVFRSX1NFTEVDVEVEKX0oKSxoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwiY2xpY2tcIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9ZmluZEJ5SWQoc2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksciksYT1BLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLGk9W10uc2xpY2UuY2FsbChBLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSksXz1BLmdldEF0dHJpYnV0ZShuLkFUVFJfTVVMVElTRUxFQ1RBQkxFKSxvPWZpbmRCeUlkKGUuZ2V0QXR0cmlidXRlKG4uQVRUUl9DT05UUk9MUyksciksVD1lLmdldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQpO2E9PT0hMSYmKGk9aS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZS5wYXJlbnROb2RlPT09QX0pKSxcImZhbHNlXCI9PT1UPyhlLnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITApLG8ucmVtb3ZlQXR0cmlidXRlKG4uQVRUUl9ISURERU4pKTooZS5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCExKSxvLnNldEF0dHJpYnV0ZShuLkFUVFJfSElEREVOLCEwKSksXCJmYWxzZVwiPT09XyYmaS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBBPWZpbmRCeUlkKHQuZ2V0QXR0cmlidXRlKG4uQVRUUl9DT05UUk9MUykscik7dCE9PWU/KHQuc2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCwhMSksdC5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCExKSxBLnNldEF0dHJpYnV0ZShuLkFUVFJfSElEREVOLCEwKSk6dC5zZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVELCEwKX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKX0oKSxoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwia2V5ZG93blwiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1zZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxhPWZpbmRCeUlkKEEsciksaT1hLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLF89W10uc2xpY2UuY2FsbChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSk7aT09PSExJiYoXz1fLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1hfSkpLDM2PT09dC5rZXlDb2RlPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfWzBdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bMF0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTozNT09PXQua2V5Q29kZT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1tfLmxlbmd0aC0xXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfW18ubGVuZ3RoLTFdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6MzchPT10LmtleUNvZGUmJjM4IT09dC5rZXlDb2RlfHx0LmN0cmxLZXk/NDAhPT10LmtleUNvZGUmJjM5IT09dC5rZXlDb2RlfHx0LmN0cmxLZXl8fChcInRydWVcIj09PV9bXy5sZW5ndGgtMV0uZ2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCk/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bMF0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1swXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOihzZWxlY3RIZWFkZXJJbkxpc3QoXyxcIm5leHRcIixuLkFUVFJfU0VMRUNURUQpLHQucHJldmVudERlZmF1bHQoKSkpOlwidHJ1ZVwiPT09X1swXS5nZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVEKT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1tfLmxlbmd0aC0xXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfW18ubGVuZ3RoLTFdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6KHNlbGVjdEhlYWRlckluTGlzdChfLFwicHJldlwiLG4uQVRUUl9TRUxFQ1RFRCksdC5wcmV2ZW50RGVmYXVsdCgpKX0oKX0oKX0sITApfSkscGx1Z2lufTt3aW5kb3cudmFuMTF5QWNjZXNzaWJsZUFjY29yZGlvbkFyaWE9bWFpbigpO3ZhciBvbkxvYWQ9ZnVuY3Rpb24gZSgpe3ZhciB0PXdpbmRvdy52YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYSgpO3QuYXR0YWNoKCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixvbkxvYWQpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9hZG1pbi5hY2NvcmRpb25cIjogMCxcblx0XCJjc3MvcHJpbnRcIjogMCxcblx0XCJjc3MvZ2xvYmFsXCI6IDAsXG5cdFwiY3NzL2FkbWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdF9fd2VicGFja19yZXF1aXJlX18uTygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BpcHBpcF90aGVtZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwaXBwaXBfdGhlbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvcHJpbnRcIixcImNzcy9nbG9iYWxcIixcImNzcy9hZG1pblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL2pzL2FkbWluLmFjY29yZGlvbi50c1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvcHJpbnRcIixcImNzcy9nbG9iYWxcIixcImNzcy9hZG1pblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL3Nhc3MvYWRtaW4uc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvcHJpbnRcIixcImNzcy9nbG9iYWxcIixcImNzcy9hZG1pblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvcHJpbnRcIixcImNzcy9nbG9iYWxcIixcImNzcy9hZG1pblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dwLWNvbnRlbnQvdGhlbWVzL2ZyZWQvYXNzZXRzL3Nhc3MvcHJpbnQuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==