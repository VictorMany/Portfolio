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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark, _nav = param.nav, nav = _nav === void 0 ? true : _nav;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', handleRouteChange);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: dark ? 'bg-dark' : 'bg-light',\n        __source: {\n            fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4\",\n                style: {\n                    width: \"70%\"\n                },\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                __source: {\n                    fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 25,\n                    columnNumber: 28\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"Portafolio de Victor Manuel Velazquez Fuentes\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: [\n                                \"2000-\",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Valadevs\\\\Desktop\\\\portfolio\\\\components\\\\Layout.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"\\xa9Todos los derechos reservados\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNjO0FBQ2Q7OztBQUVqQyxHQUFLLENBQUNLLE1BQU0sR0FBRyxRQUFRLFFBQW1ELENBQUM7UUFBekRDLFFBQVEsU0FBUkEsUUFBUSxrQkFBRUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLElBQUksMEJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxLQUFLLHVCQUFFQyxHQUFHLEVBQUhBLEdBQUcscUJBQUcsSUFBSTs7SUFFL0RSLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixHQUFLLENBQUNTLGlCQUFpQixHQUFHQyxRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO1lBQzlCUCxzREFBZTtRQUNuQixDQUFDO1FBQ0RGLDREQUFnQixDQUFDLENBQWtCLG1CQUFFUSxpQkFBaUI7UUFDdERSLDREQUFnQixDQUFDLENBQXFCLHNCQUFFLFFBQVE7WUFBRkUsTUFBTSxDQUFOQSxxREFBYzs7UUFDNUQsTUFBTSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ1ZGLDZEQUFpQixDQUFDLENBQWtCLG1CQUFFUSxpQkFBaUI7UUFDM0QsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHVFQUNETyxDQUFHO1FBQUNDLFNBQVMsRUFBRVYsSUFBSSxHQUFHLENBQVMsV0FBRyxDQUFVOzs7Ozs7OztpRkFDeENSLCtDQUFNOzs7Ozs7OztpRkFDTm1CLENBQUk7Z0JBQUNELFNBQVMsRUFBQyxDQUFnQjtnQkFBQ0UsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFLO2dCQUFDLENBQUM7Ozs7Ozs7MEJBQ25EZixRQUFROztZQUdUQyxNQUFNLHlFQUFNQSxDQUFNO2dCQUFDVyxTQUFTLEVBQUMsQ0FBZ0M7Ozs7Ozs7Z0dBQ3hERCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs7NkZBQ3pCSSxDQUFFOzs7Ozs7O3NDQUFDLENBQTZDOzs4RkFDaERDLENBQUM7Ozs7Ozs7O2dDQUFDLENBQUs7Z0NBQUMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7Ozs2RkFDOUJGLENBQUM7Ozs7Ozs7c0NBQUMsQ0FBbUM7Ozs7Ozs7QUFPOUQsQ0FBQztHQTlCS2xCLE1BQU07S0FBTkEsTUFBTTtBQStCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZSwgbmF2ID0gdHJ1ZSB9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhcmsgPyAnYmctZGFyaycgOiAnYmctbGlnaHQnfT5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiIHN0eWxlPXt7IHdpZHRoOiBcIjcwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvb3RlciAmJiAoPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBvcnRhZm9saW8gZGUgVmljdG9yIE1hbnVlbCBWZWxhenF1ZXogRnVlbnRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwMDAte25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiZjb3B5O1RvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsIm5hdiIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3R5bGUiLCJ3aWR0aCIsImgzIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});