/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', handleRouteChange);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-dark\",\n        __source: {\n            fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4\",\n                style: {\n                    width: \"70%\"\n                },\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 25,\n                    columnNumber: 28\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"\\xa9 Victor Manuel Velazquez Fuentes Portafolio\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: [\n                                \"2000-\",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"Todos los derechos reservados\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNjO0FBQ2Q7OztBQUVqQyxHQUFLLENBQUNLLE1BQU0sR0FBRyxRQUFRLFFBQXlCLENBQUM7UUFBL0JDLFFBQVEsU0FBUkEsUUFBUSxrQkFBRUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLElBQUk7O0lBRXJDTixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2IsR0FBSyxDQUFDTyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUM5Qkwsc0RBQWU7UUFDbkIsQ0FBQztRQUNERiw0REFBZ0IsQ0FBQyxDQUFrQixtQkFBRU0saUJBQWlCO1FBQ3RETiw0REFBZ0IsQ0FBQyxDQUFxQixzQkFBRSxRQUFRO1lBQUZFLE1BQU0sQ0FBTkEscURBQWM7O1FBQzVELE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNWRiw2REFBaUIsQ0FBQyxDQUFrQixtQkFBRU0saUJBQWlCO1FBQzNELENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSx1RUFDRE8sQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7aUZBQ25CaEIsK0NBQU07Ozs7Ozs7O2lGQUNOaUIsQ0FBSTtnQkFBQ0QsU0FBUyxFQUFDLENBQWdCO2dCQUFDRSxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFLENBQUs7Z0JBQUMsQ0FBQzs7Ozs7OzswQkFDbkRiLFFBQVE7O1lBR1RDLE1BQU0seUVBQU1BLENBQU07Z0JBQUNTLFNBQVMsRUFBQyxDQUFnQzs7Ozs7OztnR0FDeERELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFlOzs7Ozs7Ozs2RkFDekJJLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBaUQ7OzhGQUNwREMsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBSztnQ0FBQyxHQUFHLENBQUNDLElBQUksR0FBR0MsV0FBVzs7OzZGQUM5QkYsQ0FBQzs7Ozs7OztzQ0FBQyxDQUE2Qjs7Ozs7OztBQU94RCxDQUFDO0dBOUJLaEIsTUFBTTtLQUFOQSxNQUFNO0FBK0JaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZSB9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIiBzdHlsZT17eyB3aWR0aDogXCI3MCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIgJiYgKDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4mY29weTsgVmljdG9yIE1hbnVlbCBWZWxhenF1ZXogRnVlbnRlcyBQb3J0YWZvbGlvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAwMC17bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG9kb3MgbG9zIGRlcmVjaG9zIHJlc2VydmFkb3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJmb290ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInN0eWxlIiwid2lkdGgiLCJoMiIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error!":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error! ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/_error\",\n      function () {\n        return __webpack_require__(/*! private-next-pages/_error */ \"./pages/_error.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/_error\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZfZXJyb3ImYWJzb2x1dGVQYWdlUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZXJyb3IhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0RBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9hYzRlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19lcnJvclwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvX2Vycm9yXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error!\n");

/***/ })

});