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

/***/ "(app-client)/./src/components/ProductsList.tsx":
/*!*****************************************!*\
  !*** ./src/components/ProductsList.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/@apollo/client/react/hooks/useQuery.js\");\n/* harmony import */ var _utils_querys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/querys */ \"(app-client)/./src/utils/querys.ts\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"(app-client)/./src/components/ProductCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_filter_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/filter-context */ \"(app-client)/./src/context/filter-context.tsx\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/im */ \"(app-client)/./node_modules/react-icons/im/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ProductsList() {\n    _s();\n    const { category , priority , page , search , setNumberOfProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_filter_context__WEBPACK_IMPORTED_MODULE_4__.FilterContext);\n    const allProducts = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)((0,_utils_querys__WEBPACK_IMPORTED_MODULE_1__.getProducts)(category, priority)).data;\n    const { data , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)((0,_utils_querys__WEBPACK_IMPORTED_MODULE_1__.getProductsByPage)(category, priority, page));\n    setNumberOfProducts(allProducts === null || allProducts === void 0 ? void 0 : allProducts.allProducts.length);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        localStorage.setItem(\"carrinho\", JSON.stringify(\"teste\"));\n    });\n    const filteredProducts = data === null || data === void 0 ? void 0 : data.allProducts.filter((product)=>product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative h-screen bg-brand-orange\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImSpinner8, {\n                className: \"absolute top-20 h-12 w-12 animate-spin text-cart-orange\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\ProductsList.tsx\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\ProductsList.tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-4 gap-x-8 gap-y-6\",\n            children: filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.map((product)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    price: product.price_in_cents,\n                    image: product.image_url,\n                    title: product.name\n                }, product.id, false, {\n                    fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\ProductsList.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 15\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\ProductsList.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProductsList, \"lVAwtlO45cO/Y/O17BeAJcaGEoI=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = ProductsList;\nvar _c;\n$RefreshReg$(_c, \"ProductsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHNMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNzQjtBQUN4QjtBQUVNO0FBQ1c7QUFDYjtBQUU1QixTQUFTUTs7SUFDdEIsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUVDLG9CQUFtQixFQUFFLEdBQzdEVCxpREFBVUEsQ0FBQ0Usa0VBQWFBO0lBRTFCLE1BQU1RLGNBQWNkLHdEQUFRQSxDQUFDQywwREFBV0EsQ0FBQ1EsVUFBVUMsV0FBV0s7SUFDOUQsTUFBTSxFQUFFQSxLQUFJLEVBQUVDLFFBQU8sRUFBRSxHQUFHaEIsd0RBQVFBLENBQ2hDRSxnRUFBaUJBLENBQUNPLFVBQVVDLFVBQVVDO0lBR3hDRSxvQkFBb0JDLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUEsWUFBWUc7SUFFN0NaLGdEQUFTQSxDQUFDO1FBQ1JhLGFBQWFDLFFBQVEsWUFBWUMsS0FBS0MsVUFBVTtJQUNsRDtJQUVBLE1BQU1DLG1CQUF3Q1AsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRCxZQUFZUyxPQUM5RCxDQUFDQyxVQUNDQSxRQUFRQyxLQUFLQyxvQkFBb0JDLFNBQVNmLE9BQU9jO0lBR3JELHFCQUNFO2tCQUNHVix3QkFDQyw4REFBQ1k7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ3RCLHNEQUFVQTtnQkFBQ3NCLFdBQVU7Ozs7Ozs7Ozs7aUNBR3hCLDhEQUFDRDtZQUFJQyxXQUFVO3NCQUNaUCw2QkFBQUEsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFrQlEsSUFBSSxDQUFDTjtnQkFDdEIscUJBQ0UsOERBQUNyQixvREFBV0E7b0JBRVY0QixPQUFPUCxRQUFRUTtvQkFDZkMsT0FBT1QsUUFBUVU7b0JBQ2ZDLE9BQU9YLFFBQVFDO21CQUhWRCxRQUFRWTs7Ozs7WUFNbkI7Ozs7Ozs7QUFLVjtHQTFDd0I1Qjs7UUFJRlIsb0RBQVFBO1FBQ0ZBLG9EQUFRQTs7O0tBTFpRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdC50c3g/NDM4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0cywgZ2V0UHJvZHVjdHNCeVBhZ2UgfSBmcm9tICdAL3V0aWxzL3F1ZXJ5cydcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4vUHJvZHVjdENhcmQnXHJcbmltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gJ0AvdXRpbHMvaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvZmlsdGVyLWNvbnRleHQnXHJcbmltcG9ydCB7IEltU3Bpbm5lcjggfSBmcm9tICdyZWFjdC1pY29ucy9pbSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzTGlzdCgpIHtcclxuICBjb25zdCB7IGNhdGVnb3J5LCBwcmlvcml0eSwgcGFnZSwgc2VhcmNoLCBzZXROdW1iZXJPZlByb2R1Y3RzIH0gPVxyXG4gICAgdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KVxyXG5cclxuICBjb25zdCBhbGxQcm9kdWN0cyA9IHVzZVF1ZXJ5KGdldFByb2R1Y3RzKGNhdGVnb3J5LCBwcmlvcml0eSkpLmRhdGFcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgZ2V0UHJvZHVjdHNCeVBhZ2UoY2F0ZWdvcnksIHByaW9yaXR5LCBwYWdlKSxcclxuICApXHJcblxyXG4gIHNldE51bWJlck9mUHJvZHVjdHMoYWxsUHJvZHVjdHM/LmFsbFByb2R1Y3RzLmxlbmd0aClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaW5obycsIEpTT04uc3RyaW5naWZ5KCd0ZXN0ZScpKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHM6IEFycmF5PFByb2R1Y3RQcm9wcz4gPSBkYXRhPy5hbGxQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAocHJvZHVjdDogeyBuYW1lOiBzdHJpbmcgfSkgPT5cclxuICAgICAgcHJvZHVjdC5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG9jYWxlTG93ZXJDYXNlKCkpLFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gYmctYnJhbmQtb3JhbmdlXCI+XHJcbiAgICAgICAgICA8SW1TcGlubmVyOCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgaC0xMiB3LTEyIGFuaW1hdGUtc3BpbiB0ZXh0LWNhcnQtb3JhbmdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLXgtOCBnYXAteS02XCI+XHJcbiAgICAgICAgICB7ZmlsdGVyZWRQcm9kdWN0cz8ubWFwKChwcm9kdWN0OiBQcm9kdWN0UHJvcHMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8UHJvZHVjdENhcmRcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlX2luX2NlbnRzfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2VfdXJsfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJnZXRQcm9kdWN0cyIsImdldFByb2R1Y3RzQnlQYWdlIiwiUHJvZHVjdENhcmQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRmlsdGVyQ29udGV4dCIsIkltU3Bpbm5lcjgiLCJQcm9kdWN0c0xpc3QiLCJjYXRlZ29yeSIsInByaW9yaXR5IiwicGFnZSIsInNlYXJjaCIsInNldE51bWJlck9mUHJvZHVjdHMiLCJhbGxQcm9kdWN0cyIsImRhdGEiLCJsb2FkaW5nIiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsIm5hbWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJpY2UiLCJwcmljZV9pbl9jZW50cyIsImltYWdlIiwiaW1hZ2VfdXJsIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ProductsList.tsx\n"));

/***/ })

});