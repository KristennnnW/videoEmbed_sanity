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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Body */ \"./src/components/Body.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Home = (param)=>{\n    let { posts } = param;\n    _s();\n    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setDomLoaded(true);\n    }, []);\n    if (!domLoaded) {\n        return null; // or a loading spinner, or some fallback content\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/wangzi/Downloads/videoembed/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Body__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        blocks: post.body\n                    }, void 0, false, {\n                        fileName: \"/Users/wangzi/Downloads/videoembed/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, post._id, true, {\n                fileName: \"/Users/wangzi/Downloads/videoembed/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/wangzi/Downloads/videoembed/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Home, \"g3JnpRdQtWlWJYoR/ne40Sr+efY=\");\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUVWO0FBUXpDLE1BQU1JLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQ25CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUk0sYUFBYTtJQUNmLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsV0FBVztRQUNkLE9BQU8sTUFBTSxpREFBaUQ7SUFDaEU7SUFFQSxxQkFDRSw4REFBQ0U7a0JBQ0VILE1BQU1JLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNGOztrQ0FDQyw4REFBQ0c7a0NBQUlELEtBQUtFLEtBQUs7Ozs7OztrQ0FDZiw4REFBQ1QsNERBQUlBO3dCQUFDVSxRQUFRSCxLQUFLSSxJQUFJOzs7Ozs7O2VBRmZKLEtBQUtLLEdBQUc7Ozs7Ozs7Ozs7QUFPMUI7R0FyQklYO0tBQUFBOztBQXVCSiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtzYW5pdHlDbGllbnR9IGZyb20gJy4uL2xpYi9zYW5pdHknXG5pbXBvcnQgQm9keSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Cb2R5J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCJdey4uLiwgYm9keVtdey4uLiwgXCJ1cmxcIjogYXNzZXQtPnVybH19YFxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSlcbiAgcmV0dXJuIHtwcm9wczoge3Bvc3RzfX1cbn1cblxuY29uc3QgSG9tZSA9ICh7IHBvc3RzIH0pID0+IHtcbiAgICBjb25zdCBbZG9tTG9hZGVkLCBzZXREb21Mb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0RG9tTG9hZGVkKHRydWUpO1xuICAgIH0sIFtdKTtcbiAgXG4gICAgaWYgKCFkb21Mb2FkZWQpIHtcbiAgICAgIHJldHVybiBudWxsOyAvLyBvciBhIGxvYWRpbmcgc3Bpbm5lciwgb3Igc29tZSBmYWxsYmFjayBjb250ZW50XG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17cG9zdC5faWR9PlxuICAgICAgICAgICAgPGgyPntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8Qm9keSBibG9ja3M9e3Bvc3QuYm9keX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJvZHkiLCJIb21lIiwicG9zdHMiLCJkb21Mb2FkZWQiLCJzZXREb21Mb2FkZWQiLCJkaXYiLCJtYXAiLCJwb3N0IiwiaDIiLCJ0aXRsZSIsImJsb2NrcyIsImJvZHkiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});