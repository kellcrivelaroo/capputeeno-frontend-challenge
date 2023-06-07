"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/utils/querys.ts":
/*!*****************************!*\
  !*** ./src/utils/querys.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": function() { return /* binding */ getProducts; },\n/* harmony export */   \"getProductsByPage\": function() { return /* binding */ getProductsByPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"(app-client)/./src/utils/types.ts\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  query {\\n    allProducts(sortField: \"',\n        '\", sortOrder: \"',\n        '\", ',\n        \") {\\n      id\\n      name\\n      price_in_cents\\n      image_url\\n      category\\n    }\\n  }\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  query {\\n    allProducts(sortField: \"',\n        '\", sortOrder: \"',\n        '\", ',\n        \", \\n    page: \",\n        \", perPage: 12) {\\n      id\\n      name\\n      price_in_cents\\n      image_url\\n      category\\n    }\\n  }\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nfunction getCategoryByType(category) {\n    if (category === _types__WEBPACK_IMPORTED_MODULE_1__.FilterCategories.MUG) return 'filter: {category: \"mugs\"}';\n    if (category === _types__WEBPACK_IMPORTED_MODULE_1__.FilterCategories.SHIRT) return 'filter: {category: \"t-shirts\"}';\n    return \"\";\n}\nfunction getFieldByPriority(priority) {\n    if (priority === _types__WEBPACK_IMPORTED_MODULE_1__.FilterPriorities.POPULARITY) return {\n        field: \"sales\",\n        order: \"DSC\"\n    };\n    if (priority === _types__WEBPACK_IMPORTED_MODULE_1__.FilterPriorities.BIGGEST_PRICE) return {\n        field: \"price_in_cents\",\n        order: \"DSC\"\n    };\n    if (priority === _types__WEBPACK_IMPORTED_MODULE_1__.FilterPriorities.MINOR_PRICE) return {\n        field: \"price_in_cents\",\n        order: \"ASC\"\n    };\n    return {\n        field: \"created_at\",\n        order: \"DSC\"\n    };\n}\nfunction getProducts(category, priority) {\n    const sortSettings = getFieldByPriority(priority);\n    const categoryFilter = getCategoryByType(category);\n    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject(), sortSettings.field, sortSettings.order, categoryFilter);\n}\nfunction getProductsByPage(category, priority, page) {\n    const sortSettings = getFieldByPriority(priority);\n    const categoryFilter = getCategoryByType(category);\n    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject1(), sortSettings.field, sortSettings.order, categoryFilter, page);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3V0aWxzL3F1ZXJ5cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ3dCO0FBRTVELFNBQVNHLGtCQUFrQkMsUUFBMEI7SUFDbkQsSUFBSUEsYUFBYUgsd0RBQW9CSSxFQUFFLE9BQVE7SUFDL0MsSUFBSUQsYUFBYUgsMERBQXNCSyxFQUNyQyxPQUFRO0lBQ1YsT0FBTztBQUNUO0FBRUEsU0FBU0MsbUJBQW1CQyxRQUEwQjtJQUNwRCxJQUFJQSxhQUFhTiwrREFBMkJPLEVBQzFDLE9BQU87UUFBRUMsT0FBTztRQUFTQyxPQUFPO0lBQU07SUFDeEMsSUFBSUgsYUFBYU4sa0VBQThCVSxFQUM3QyxPQUFPO1FBQUVGLE9BQU87UUFBa0JDLE9BQU87SUFBTTtJQUNqRCxJQUFJSCxhQUFhTixnRUFBNEJXLEVBQzNDLE9BQU87UUFBRUgsT0FBTztRQUFrQkMsT0FBTztJQUFNO0lBQ2pELE9BQU87UUFBRUQsT0FBTztRQUFjQyxPQUFPO0lBQU07QUFDN0M7QUFFTyxTQUFTRyxZQUNkVixRQUEwQixFQUMxQkksUUFBMEI7SUFFMUIsTUFBTU8sZUFBZVIsbUJBQW1CQztJQUN4QyxNQUFNUSxpQkFBaUJiLGtCQUFrQkM7SUFFekMsT0FBT0osbURBQUdBLG9CQUVrQmUsYUFBYUwsT0FBdUJLLGFBQWFKLE9BQVdLO0FBUzFGO0FBRU8sU0FBU0Msa0JBQ2RiLFFBQTBCLEVBQzFCSSxRQUEwQixFQUMxQlUsSUFBWTtJQUVaLE1BQU1ILGVBQWVSLG1CQUFtQkM7SUFDeEMsTUFBTVEsaUJBQWlCYixrQkFBa0JDO0lBRXpDLE9BQU9KLG1EQUFHQSxxQkFFa0JlLGFBQWFMLE9BQXVCSyxhQUFhSixPQUFXSyxnQkFDOUVFO0FBU1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3F1ZXJ5cy50cz9hMGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyBGaWx0ZXJDYXRlZ29yaWVzLCBGaWx0ZXJQcmlvcml0aWVzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmZ1bmN0aW9uIGdldENhdGVnb3J5QnlUeXBlKGNhdGVnb3J5OiBGaWx0ZXJDYXRlZ29yaWVzKSB7XHJcbiAgaWYgKGNhdGVnb3J5ID09PSBGaWx0ZXJDYXRlZ29yaWVzLk1VRykgcmV0dXJuIGBmaWx0ZXI6IHtjYXRlZ29yeTogXCJtdWdzXCJ9YFxyXG4gIGlmIChjYXRlZ29yeSA9PT0gRmlsdGVyQ2F0ZWdvcmllcy5TSElSVClcclxuICAgIHJldHVybiBgZmlsdGVyOiB7Y2F0ZWdvcnk6IFwidC1zaGlydHNcIn1gXHJcbiAgcmV0dXJuICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpZWxkQnlQcmlvcml0eShwcmlvcml0eTogRmlsdGVyUHJpb3JpdGllcykge1xyXG4gIGlmIChwcmlvcml0eSA9PT0gRmlsdGVyUHJpb3JpdGllcy5QT1BVTEFSSVRZKVxyXG4gICAgcmV0dXJuIHsgZmllbGQ6ICdzYWxlcycsIG9yZGVyOiAnRFNDJyB9XHJcbiAgaWYgKHByaW9yaXR5ID09PSBGaWx0ZXJQcmlvcml0aWVzLkJJR0dFU1RfUFJJQ0UpXHJcbiAgICByZXR1cm4geyBmaWVsZDogJ3ByaWNlX2luX2NlbnRzJywgb3JkZXI6ICdEU0MnIH1cclxuICBpZiAocHJpb3JpdHkgPT09IEZpbHRlclByaW9yaXRpZXMuTUlOT1JfUFJJQ0UpXHJcbiAgICByZXR1cm4geyBmaWVsZDogJ3ByaWNlX2luX2NlbnRzJywgb3JkZXI6ICdBU0MnIH1cclxuICByZXR1cm4geyBmaWVsZDogJ2NyZWF0ZWRfYXQnLCBvcmRlcjogJ0RTQycgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoXHJcbiAgY2F0ZWdvcnk6IEZpbHRlckNhdGVnb3JpZXMsXHJcbiAgcHJpb3JpdHk6IEZpbHRlclByaW9yaXRpZXMsXHJcbikge1xyXG4gIGNvbnN0IHNvcnRTZXR0aW5ncyA9IGdldEZpZWxkQnlQcmlvcml0eShwcmlvcml0eSlcclxuICBjb25zdCBjYXRlZ29yeUZpbHRlciA9IGdldENhdGVnb3J5QnlUeXBlKGNhdGVnb3J5KVxyXG5cclxuICByZXR1cm4gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGFsbFByb2R1Y3RzKHNvcnRGaWVsZDogXCIke3NvcnRTZXR0aW5ncy5maWVsZH1cIiwgc29ydE9yZGVyOiBcIiR7c29ydFNldHRpbmdzLm9yZGVyfVwiLCAke2NhdGVnb3J5RmlsdGVyfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlX2luX2NlbnRzXHJcbiAgICAgIGltYWdlX3VybFxyXG4gICAgICBjYXRlZ29yeVxyXG4gICAgfVxyXG4gIH1cclxuICBgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0J5UGFnZShcclxuICBjYXRlZ29yeTogRmlsdGVyQ2F0ZWdvcmllcyxcclxuICBwcmlvcml0eTogRmlsdGVyUHJpb3JpdGllcyxcclxuICBwYWdlOiBudW1iZXIsXHJcbikge1xyXG4gIGNvbnN0IHNvcnRTZXR0aW5ncyA9IGdldEZpZWxkQnlQcmlvcml0eShwcmlvcml0eSlcclxuICBjb25zdCBjYXRlZ29yeUZpbHRlciA9IGdldENhdGVnb3J5QnlUeXBlKGNhdGVnb3J5KVxyXG5cclxuICByZXR1cm4gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGFsbFByb2R1Y3RzKHNvcnRGaWVsZDogXCIke3NvcnRTZXR0aW5ncy5maWVsZH1cIiwgc29ydE9yZGVyOiBcIiR7c29ydFNldHRpbmdzLm9yZGVyfVwiLCAke2NhdGVnb3J5RmlsdGVyfSwgXHJcbiAgICBwYWdlOiAke3BhZ2V9LCBwZXJQYWdlOiAxMikge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlX2luX2NlbnRzXHJcbiAgICAgIGltYWdlX3VybFxyXG4gICAgICBjYXRlZ29yeVxyXG4gICAgfVxyXG4gIH1cclxuICBgXHJcbn1cclxuIl0sIm5hbWVzIjpbImdxbCIsIkZpbHRlckNhdGVnb3JpZXMiLCJGaWx0ZXJQcmlvcml0aWVzIiwiZ2V0Q2F0ZWdvcnlCeVR5cGUiLCJjYXRlZ29yeSIsIk1VRyIsIlNISVJUIiwiZ2V0RmllbGRCeVByaW9yaXR5IiwicHJpb3JpdHkiLCJQT1BVTEFSSVRZIiwiZmllbGQiLCJvcmRlciIsIkJJR0dFU1RfUFJJQ0UiLCJNSU5PUl9QUklDRSIsImdldFByb2R1Y3RzIiwic29ydFNldHRpbmdzIiwiY2F0ZWdvcnlGaWx0ZXIiLCJnZXRQcm9kdWN0c0J5UGFnZSIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/utils/querys.ts\n"));

/***/ })

});