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

/***/ "(app-client)/./src/components/CategoryBar.tsx":
/*!****************************************!*\
  !*** ./src/components/CategoryBar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_filter_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/filter-context */ \"(app-client)/./src/context/filter-context.tsx\");\n/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/types */ \"(app-client)/./src/utils/types.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CategoryBar() {\n    _s();\n    const { setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_filter_context__WEBPACK_IMPORTED_MODULE_1__.FilterContext);\n    const [selectedOptionInfo, setSelectedOptionInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    function handleOptionClick(event, selectedCategory) {\n        setSelectedOptionInfo({\n            width: event.currentTarget.offsetWidth,\n            x: event.currentTarget.offsetLeft - 1\n        });\n        setCategory(selectedCategory);\n        setPage(0);\n    }\n    const { category , setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_filter_context__WEBPACK_IMPORTED_MODULE_1__.FilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"relative flex gap-10 text-gray-light [&>li.selected]:font-bold [&>li]:cursor-pointer [&>li]:uppercase\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"\".concat(category === _utils_types__WEBPACK_IMPORTED_MODULE_2__.FilterCategories.ALL && \"selected\"),\n                onClick: (e)=>handleOptionClick(e, _utils_types__WEBPACK_IMPORTED_MODULE_2__.FilterCategories.ALL),\n                children: \"Todos os produtos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\CategoryBar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"\".concat(category === _utils_types__WEBPACK_IMPORTED_MODULE_2__.FilterCategories.SHIRT && \"selected\"),\n                onClick: (e)=>handleOptionClick(e, _utils_types__WEBPACK_IMPORTED_MODULE_2__.FilterCategories.SHIRT),\n                children: \"Camisetas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\CategoryBar.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"\".concat(category === _utils_types__WEBPACK_IMPORTED_MODULE_2__.FilterCategories.MUG && \"selected\"),\n                onClick: (e)=>handleOptionClick(e, _utils_types__WEBPACK_IMPORTED_MODULE_2__.FilterCategories.MUG),\n                children: \"Canecas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\CategoryBar.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -bottom-1 h-1 scale-x-[1.04] bg-cart-orange transition-all duration-500\",\n                style: {\n                    minWidth: \"\".concat((selectedOptionInfo === null || selectedOptionInfo === void 0 ? void 0 : selectedOptionInfo.width.toString().concat(\"px\")) || \"10.4375em\"),\n                    transform: \"translateX(\".concat(selectedOptionInfo === null || selectedOptionInfo === void 0 ? void 0 : selectedOptionInfo.x.toString(), \"px) scaleX(1.04)\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\CategoryBar.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kell\\\\Documents\\\\Projetos\\\\frontend-challenge\\\\src\\\\components\\\\CategoryBar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryBar, \"oM8JXcQ83qx+ACAat5RU0jVhIes=\");\n_c = CategoryBar;\nvar _c;\n$RefreshReg$(_c, \"CategoryBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ1I7QUFDYztBQU8vQyxTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsaURBQVVBLENBQUNILGtFQUFhQTtJQUM1QyxNQUFNLENBQUNPLG9CQUFvQkMsc0JBQXNCLEdBQy9DSiwrQ0FBUUEsQ0FBaUM7SUFFM0MsU0FBU0ssa0JBQ1BDLEtBQXNDLEVBQ3RDQyxnQkFBa0M7UUFFbENILHNCQUFzQjtZQUNwQkksT0FBT0YsTUFBTUcsY0FBY0M7WUFDM0JDLEdBQUdMLE1BQU1HLGNBQWNHLGFBQWE7UUFDdEM7UUFDQUMsWUFBWU47UUFDWkwsUUFBUTtJQUNWO0lBRUEsTUFBTSxFQUFFWSxTQUFRLEVBQUVELFlBQVcsRUFBRSxHQUFHZCxpREFBVUEsQ0FBQ0gsa0VBQWFBO0lBRTFELHFCQUNFLDhEQUFDbUI7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUNDRCxXQUFXLEdBQW1ELE9BQWhERixhQUFhakIsOERBQW9CcUIsSUFBSTtnQkFDbkRDLFNBQVMsQ0FBQ0MsSUFBTWYsa0JBQWtCZSxHQUFHdkIsOERBQW9CcUI7MEJBQzFEOzs7Ozs7MEJBR0QsOERBQUNEO2dCQUNDRCxXQUFXLEdBQXFELE9BQWxERixhQUFhakIsZ0VBQXNCd0IsSUFBSTtnQkFDckRGLFNBQVMsQ0FBQ0MsSUFBTWYsa0JBQWtCZSxHQUFHdkIsZ0VBQXNCd0I7MEJBQzVEOzs7Ozs7MEJBR0QsOERBQUNKO2dCQUNDRCxXQUFXLEdBQW1ELE9BQWhERixhQUFhakIsOERBQW9CeUIsSUFBSTtnQkFDbkRILFNBQVMsQ0FBQ0MsSUFBTWYsa0JBQWtCZSxHQUFHdkIsOERBQW9CeUI7MEJBQzFEOzs7Ozs7MEJBR0QsOERBQUNDO2dCQUNDUCxXQUFZO2dCQUNaUSxPQUFPO29CQUNMQyxVQUFVLEdBRVQsT0FEQ3RCLENBQUFBLCtCQUFBQSxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW9CSyxNQUFNa0IsV0FBV0MsT0FBTyxLQUFJLEtBQUs7b0JBRXZEQyxXQUFXLGNBQStDLE9BQWpDekIsK0JBQUFBLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBb0JRLEVBQUVlLFlBQVc7Z0JBQzVEOzs7Ozs7Ozs7Ozs7QUFJUjtHQWxEd0J6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeUJhci50c3g/OWUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9maWx0ZXItY29udGV4dCdcclxuaW1wb3J0IHsgRmlsdGVyQ2F0ZWdvcmllcyB9IGZyb20gJ0AvdXRpbHMvdHlwZXMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2Ugc2VsZWN0ZWRPcHRpb25JbmZvUHJvcHMge1xyXG4gIHdpZHRoOiBudW1iZXJcclxuICB4OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlCYXIoKSB7XHJcbiAgY29uc3QgeyBzZXRQYWdlIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpXHJcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uSW5mbywgc2V0U2VsZWN0ZWRPcHRpb25JbmZvXSA9XHJcbiAgICB1c2VTdGF0ZTxzZWxlY3RlZE9wdGlvbkluZm9Qcm9wcyB8IG51bGw+KG51bGwpXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9wdGlvbkNsaWNrKFxyXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExJRWxlbWVudD4sXHJcbiAgICBzZWxlY3RlZENhdGVnb3J5OiBGaWx0ZXJDYXRlZ29yaWVzLFxyXG4gICkge1xyXG4gICAgc2V0U2VsZWN0ZWRPcHRpb25JbmZvKHtcclxuICAgICAgd2lkdGg6IGV2ZW50LmN1cnJlbnRUYXJnZXQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIHg6IGV2ZW50LmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCAtIDEsXHJcbiAgICB9KVxyXG4gICAgc2V0Q2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeSlcclxuICAgIHNldFBhZ2UoMClcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgY2F0ZWdvcnksIHNldENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBnYXAtMTAgdGV4dC1ncmF5LWxpZ2h0IFsmPmxpLnNlbGVjdGVkXTpmb250LWJvbGQgWyY+bGldOmN1cnNvci1wb2ludGVyIFsmPmxpXTp1cHBlcmNhc2VcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXRlZ29yeSA9PT0gRmlsdGVyQ2F0ZWdvcmllcy5BTEwgJiYgJ3NlbGVjdGVkJ31gfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcHRpb25DbGljayhlLCBGaWx0ZXJDYXRlZ29yaWVzLkFMTCl9XHJcbiAgICAgID5cclxuICAgICAgICBUb2RvcyBvcyBwcm9kdXRvc1xyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NhdGVnb3J5ID09PSBGaWx0ZXJDYXRlZ29yaWVzLlNISVJUICYmICdzZWxlY3RlZCd9YH1cclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soZSwgRmlsdGVyQ2F0ZWdvcmllcy5TSElSVCl9XHJcbiAgICAgID5cclxuICAgICAgICBDYW1pc2V0YXNcclxuICAgICAgPC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXRlZ29yeSA9PT0gRmlsdGVyQ2F0ZWdvcmllcy5NVUcgJiYgJ3NlbGVjdGVkJ31gfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcHRpb25DbGljayhlLCBGaWx0ZXJDYXRlZ29yaWVzLk1VRyl9XHJcbiAgICAgID5cclxuICAgICAgICBDYW5lY2FzXHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSAtYm90dG9tLTEgaC0xIHNjYWxlLXgtWzEuMDRdIGJnLWNhcnQtb3JhbmdlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMGB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1pbldpZHRoOiBgJHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25JbmZvPy53aWR0aC50b1N0cmluZygpLmNvbmNhdCgncHgnKSB8fCAnMTAuNDM3NWVtJ1xyXG4gICAgICAgICAgfWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c2VsZWN0ZWRPcHRpb25JbmZvPy54LnRvU3RyaW5nKCl9cHgpIHNjYWxlWCgxLjA0KWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgPC91bD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkZpbHRlckNvbnRleHQiLCJGaWx0ZXJDYXRlZ29yaWVzIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDYXRlZ29yeUJhciIsInNldFBhZ2UiLCJzZWxlY3RlZE9wdGlvbkluZm8iLCJzZXRTZWxlY3RlZE9wdGlvbkluZm8iLCJoYW5kbGVPcHRpb25DbGljayIsImV2ZW50Iiwic2VsZWN0ZWRDYXRlZ29yeSIsIndpZHRoIiwiY3VycmVudFRhcmdldCIsIm9mZnNldFdpZHRoIiwieCIsIm9mZnNldExlZnQiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3J5IiwidWwiLCJjbGFzc05hbWUiLCJsaSIsIkFMTCIsIm9uQ2xpY2siLCJlIiwiU0hJUlQiLCJNVUciLCJkaXYiLCJzdHlsZSIsIm1pbldpZHRoIiwidG9TdHJpbmciLCJjb25jYXQiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/CategoryBar.tsx\n"));

/***/ })

});