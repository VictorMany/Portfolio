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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark, _nav = param.nav, nav = _nav === void 0 ? true : _nav;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', handleRouteChange);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: dark ? 'bg-dark' : '',\n        __source: {\n            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                nav: nav,\n                __source: {\n                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4 col-12 col-md-8\",\n                __source: {\n                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                __source: {\n                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                    lineNumber: 25,\n                    columnNumber: 28\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"row\",\n                        __source: {\n                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"col-md-7 col-12\",\n                                __source: {\n                                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: \"Portafolio de Victor Manuel Velazquez Fuentes\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            \"2000-\",\n                                            new Date().getFullYear()\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: \"\\xa9Todos los derechos reservados\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"col-md-5 col-12 bg-light text-dark p-3\",\n                                style: {\n                                    borderRadius: '0.5rem'\n                                },\n                                __source: {\n                                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"row\",\n                                    __source: {\n                                        fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                            __source: {\n                                                fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 37\n                                            },\n                                            __self: _this,\n                                            children: \"Contacto\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            },\n                                            __self: _this,\n                                            children: \"victor.velazfuentez@gmail.com\"\n                                        })\n                                    ]\n                                })\n                            })\n                        ]\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNjO0FBQ2Q7OztBQUVqQyxHQUFLLENBQUNLLE1BQU0sR0FBRyxRQUFRLFFBQW1ELENBQUM7UUFBekRDLFFBQVEsU0FBUkEsUUFBUSxrQkFBRUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLElBQUksMEJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxLQUFLLHVCQUFFQyxHQUFHLEVBQUhBLEdBQUcscUJBQUcsSUFBSTs7SUFFL0RSLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsR0FBSyxDQUFDUyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUM5QlAsc0RBQWU7UUFDbkIsQ0FBQztRQUNERiw0REFBZ0IsQ0FBQyxDQUFrQixtQkFBRVEsaUJBQWlCO1FBQ3REUiw0REFBZ0IsQ0FBQyxDQUFxQixzQkFBRSxRQUFRO1lBQUZFLE1BQU0sQ0FBTkEscURBQWM7O1FBQzVELE1BQU0sQ0FBQyxRQUNmLEdBRHFCLENBQUM7WUFDVkYsNkRBQWlCLENBQUMsQ0FBa0IsbUJBQUVRLGlCQUFpQjtRQUMzRCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sdUVBQ0RPLENBQUc7UUFBQ0MsU0FBUyxFQUFFVixJQUFJLEdBQUcsQ0FBUyxXQUFHLENBQUU7Ozs7Ozs7O2lGQUNoQ1IsK0NBQU07Z0JBQUNTLEdBQUcsRUFBRUEsR0FBRzs7Ozs7Ozs7aUZBQ2ZVLENBQUk7Z0JBQUNELFNBQVMsRUFBQyxDQUFnQzs7Ozs7OzswQkFDM0NaLFFBQVE7O1lBR1RDLE1BQU0seUVBQU1BLENBQU07Z0JBQUNXLFNBQVMsRUFBQyxDQUFnQzs7Ozs7OzsrRkFDeERELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFlOzs7Ozs7O29HQUN6QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7O2tHQUNmRCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O3lHQUMzQkUsQ0FBRTs7Ozs7OztrREFBQyxDQUE2Qzs7MEdBQ2hEQyxDQUFDOzs7Ozs7Ozs0Q0FBQyxDQUFLOzRDQUFDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxXQUFXOzs7eUdBQzlCRixDQUFDOzs7Ozs7O2tEQUFDLENBQW1DOzs7O2lHQUd6Q0osQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXdDO2dDQUFDTSxLQUFLLEVBQUUsQ0FBQ0M7b0NBQUFBLFlBQVksRUFBRSxDQUFRO2dDQUFBLENBQUM7Ozs7Ozs7Z0hBQ2xGUixDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7Ozs7NkdBQ2ZFLENBQUU7Ozs7Ozs7c0RBQUMsQ0FBUTs7NkdBQ1hDLENBQUM7Ozs7Ozs7c0RBQUMsQ0FBNkI7Ozs7Ozs7Ozs7O0FBYXBFLENBQUM7R0E1Q0toQixNQUFNO0tBQU5BLE1BQU07QUE2Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZSwgbmF2ID0gdHJ1ZSB9KSA9PiB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrID8gJ2JnLWRhcmsnIDogJyd9ID5cbiAgICAgICAgICAgIDxOYXZiYXIgbmF2PXtuYXZ9IC8+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNCBjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9vdGVyICYmICg8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTcgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Qb3J0YWZvbGlvIGRlIFZpY3RvciBNYW51ZWwgVmVsYXpxdWV6IEZ1ZW50ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDAwLXtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4mY29weTtUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvczwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgY29sLTEyIGJnLWxpZ2h0IHRleHQtZGFyayBwLTNcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YWN0bzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD52aWN0b3IudmVsYXpmdWVudGV6QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsIm5hdiIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDMiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});