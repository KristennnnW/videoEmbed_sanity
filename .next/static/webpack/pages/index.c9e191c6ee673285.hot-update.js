"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Body.tsx":
/*!*********************************!*\
  !*** ./src/components/Body.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/index.js\");\n/* harmony import */ var _YouTubeEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YouTubeEmbed */ \"./src/components/YouTubeEmbed.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst components = {\n    types: {\n        youtube: (param)=>{\n            let { value } = param;\n            const { url } = value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_YouTubeEmbed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                url: url,\n                width: \"100%\",\n                height: \"auto\",\n                style: {\n                    margin: \"0 auto\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wangzi/Downloads/videoembed/src/components/Body.tsx\",\n                lineNumber: 9,\n                columnNumber: 14\n            }, undefined);\n        }\n    }\n};\nconst Body = (param)=>{\n    let { blocks } = param;\n    _s();\n    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setDomLoaded(true);\n    }, []);\n    if (!domLoaded) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n        value: blocks,\n        components: components\n    }, void 0, false, {\n        fileName: \"/Users/wangzi/Downloads/videoembed/src/components/Body.tsx\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Body, \"g3JnpRdQtWlWJYoR/ne40Sr+efY=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb2R5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDd0I7QUFDakM7QUFFMUMsTUFBTUssYUFBcUM7SUFDekNDLE9BQU87UUFDTEMsU0FBUztnQkFBQyxFQUFFQyxLQUFLLEVBQUU7WUFDakIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0Q7WUFDaEIscUJBQU8sOERBQUNKLHFEQUFZQTtnQkFBQ0ssS0FBS0E7Z0JBQUtDLE9BQU07Z0JBQU9DLFFBQU87Z0JBQU9DLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVM7Ozs7OztRQUN0RjtJQUNGO0FBQ0Y7QUFNQSxNQUFNQyxPQUE0QjtRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDM0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSZ0IsYUFBYTtJQUNmLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsV0FBVztRQUNkLE9BQU87SUFDVDtJQUVBLHFCQUFPLDhEQUFDYiw2REFBWUE7UUFBQ0ssT0FBT087UUFBUVYsWUFBWUE7Ozs7OztBQUNsRDtHQVpNUztLQUFBQTtBQWNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JvZHkudHN4Pzk1YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQsIFBvcnRhYmxlVGV4dENvbXBvbmVudHMgfSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0JztcbmltcG9ydCBZb3VUdWJlRW1iZWQgZnJvbSAnLi9Zb3VUdWJlRW1iZWQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBQb3J0YWJsZVRleHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIHlvdXR1YmU6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSB2YWx1ZSBhcyB7IHVybDogc3RyaW5nIH07XG4gICAgICByZXR1cm4gPFlvdVR1YmVFbWJlZCB1cmw9e3VybH0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiYXV0b1wiIHN0eWxlPXt7IG1hcmdpbjogJzAgYXV0bycgfX0gLz47XG4gICAgfSxcbiAgfSxcbn07XG5cbnR5cGUgQm9keVByb3BzID0ge1xuICBibG9ja3M6IGFueTsgLy8gUmVwbGFjZSAnYW55JyB3aXRoIHRoZSBhcHByb3ByaWF0ZSB0eXBlIGlmIGF2YWlsYWJsZVxufTtcblxuY29uc3QgQm9keTogUmVhY3QuRkM8Qm9keVByb3BzPiA9ICh7IGJsb2NrcyB9KSA9PiB7XG4gIGNvbnN0IFtkb21Mb2FkZWQsIHNldERvbUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREb21Mb2FkZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWRvbUxvYWRlZCkge1xuICAgIHJldHVybiBudWxsOyBcbiAgfVxuXG4gIHJldHVybiA8UG9ydGFibGVUZXh0IHZhbHVlPXtibG9ja3N9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9ydGFibGVUZXh0IiwiWW91VHViZUVtYmVkIiwiY29tcG9uZW50cyIsInR5cGVzIiwieW91dHViZSIsInZhbHVlIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpbiIsIkJvZHkiLCJibG9ja3MiLCJkb21Mb2FkZWQiLCJzZXREb21Mb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Body.tsx\n"));

/***/ })

});