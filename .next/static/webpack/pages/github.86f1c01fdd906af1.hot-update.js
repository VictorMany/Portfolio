"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Github = function(param) {\n    var user = param.user, statusCode = param.statusCode;\n    console.log(user);\n    if (statusCode) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            statusCode: statusCode,\n            __source: {\n                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                lineNumber: 7,\n                columnNumber: 16\n            },\n            __self: _this\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"col-md-4 offset-md-4\",\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"card card-body text-center\",\n                    __source: {\n                        fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: user.avatar_url,\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: user.bio\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: user.blog,\n                            target: \"_blank\",\n                            className: \"btn btn-outline-secondary my-2\",\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"My Blog\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: user.html_url,\n                            target: \"_blank\",\n                            className: \"btn btn-outline-secondary\",\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\pages\\\\github.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"Go to Github\"\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = Github;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Github);\nvar _c;\n$RefreshReg$(_c, \"Github\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRodWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNiOztBQUU1QixHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBeEJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7SUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO0lBQ2hCLEVBQUUsRUFBRUMsVUFBVSxFQUFFLENBQUM7UUFDYixNQUFNLHNFQUFFSCw4Q0FBSztZQUFDRyxVQUFVLEVBQUVBLFVBQVU7Ozs7Ozs7O0lBQ3hDLENBQUM7SUFDRCxNQUFNLHNFQUNESiwwREFBTTs7Ozs7Ozt1RkFDRk8sQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7OzsyRkFDZkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7O2dHQUNoQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTRCOzs7Ozs7Ozs2RkFDdENDLENBQUU7Ozs7Ozs7c0NBQUVOLElBQUksQ0FBQ08sSUFBSTs7NkZBQ2JDLENBQUc7NEJBQUNDLEdBQUcsRUFBRVQsSUFBSSxDQUFDVSxVQUFVOzs7Ozs7Ozs2RkFDeEJDLENBQUM7Ozs7Ozs7c0NBQUVYLElBQUksQ0FBQ1ksR0FBRzs7NkZBQ1hDLENBQUM7NEJBQUNDLElBQUksRUFBRWQsSUFBSSxDQUFDZSxJQUFJOzRCQUFFQyxNQUFNLEVBQUMsQ0FBUTs0QkFBQ1gsU0FBUyxFQUFDLENBQWdDOzs7Ozs7O3NDQUFDLENBQU87OzZGQUNyRlEsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFZCxJQUFJLENBQUNpQixRQUFROzRCQUFFRCxNQUFNLEVBQUMsQ0FBUTs0QkFBQ1gsU0FBUyxFQUFDLENBQTJCOzs7Ozs7O3NDQUFDLENBQVk7Ozs7Ozs7QUFNbEgsQ0FBQztLQXBCS04sTUFBTTs7QUFvQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9naXRodWIuanM/MzU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vX2Vycm9yXCI7XHJcblxyXG5jb25zdCBHaXRodWIgPSAoeyB1c2VyLCBzdGF0dXNDb2RlIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICBpZiAoc3RhdHVzQ29kZSkge1xyXG4gICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0+PC9FcnJvcj5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgb2Zmc2V0LW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dXNlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuYmxvZ30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBteS0yXCI+TXkgQmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPkdvIHRvIEdpdGh1YjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1ZpY3Rvck1hbnknKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXMgPiAyMDAgPyByZXMuc3RhdHVzIDogZmFsc2U7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdXNlcjogZGF0YSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7Il0sIm5hbWVzIjpbIkxheW91dCIsIkVycm9yIiwiR2l0aHViIiwidXNlciIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsInAiLCJiaW8iLCJhIiwiaHJlZiIsImJsb2ciLCJ0YXJnZXQiLCJodG1sX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/github.js\n");

/***/ })

});