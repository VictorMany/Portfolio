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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark, _nav = param.nav, nav = _nav === void 0 ? true : _nav;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', handleRouteChange);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: dark ? 'bg-dark' : '',\n        __source: {\n            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_Navbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                nav: nav,\n                __source: {\n                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4 col-12 col-md-8\",\n                __source: {\n                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                __source: {\n                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                    lineNumber: 25,\n                    columnNumber: 28\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"row\",\n                        __source: {\n                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"col-md-7 col-12\",\n                                __source: {\n                                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: \"Portafolio de V\\xedctor Manuel Vel\\xe1zquez Fuentes\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            \"2000-\",\n                                            new Date().getFullYear()\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: \"\\xa9Todos los derechos reservados\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"col-md-5 col-12 bg-light text-dark p-3\",\n                                style: {\n                                    borderRadius: '0.5rem'\n                                },\n                                __source: {\n                                    fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"row\",\n                                    __source: {\n                                        fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                            __source: {\n                                                fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 37\n                                            },\n                                            __self: _this,\n                                            children: \"Contacto\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/victormanuelvelazquezfuentes/Desktop/NEXTJS/portfolio/components/Layout.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            },\n                                            __self: _this,\n                                            children: \"victor.velazfuentez@gmail.com\"\n                                        })\n                                    ]\n                                })\n                            })\n                        ]\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDYztBQUNkOzs7QUFFakMsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxRQUFtRCxDQUFDO1FBQXpEQyxRQUFRLFNBQVJBLFFBQVEsa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBRyxJQUFJLDBCQUFFQyxJQUFJLEVBQUpBLElBQUksc0JBQUcsS0FBSyx1QkFBRUMsR0FBRyxFQUFIQSxHQUFHLHFCQUFHLElBQUk7O0lBRS9EUixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUssQ0FBQ1MsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBUkEsR0FBRyxFQUFJLENBQUM7WUFDOUJQLHNEQUFlO1FBQ25CLENBQUM7UUFDREYsNERBQWdCLENBQUMsQ0FBa0IsbUJBQUVRLGlCQUFpQjtRQUN0RFIsNERBQWdCLENBQUMsQ0FBcUIsc0JBQUUsUUFBUTtZQUFGRSxNQUFNLENBQU5BLHFEQUFjOztRQUM1RCxNQUFNLENBQUMsUUFDZixHQURxQixDQUFDO1lBQ1ZGLDZEQUFpQixDQUFDLENBQWtCLG1CQUFFUSxpQkFBaUI7UUFDM0QsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHVFQUNETyxDQUFHO1FBQUNDLFNBQVMsRUFBRVYsSUFBSSxHQUFHLENBQVMsV0FBRyxDQUFFOzs7Ozs7OztpRkFDaENSLGdEQUFNO2dCQUFDUyxHQUFHLEVBQUVBLEdBQUc7Ozs7Ozs7O2lGQUNmVSxDQUFJO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0M7Ozs7Ozs7MEJBQzNDWixRQUFROztZQUdUQyxNQUFNLHlFQUFNQSxDQUFNO2dCQUFDVyxTQUFTLEVBQUMsQ0FBZ0M7Ozs7Ozs7K0ZBQ3hERCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7OztvR0FDekJELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OztrR0FDZkQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQWlCOzs7Ozs7Ozt5R0FDM0JFLENBQUU7Ozs7Ozs7a0RBQUMsQ0FBNkM7OzBHQUNoREMsQ0FBQzs7Ozs7Ozs7NENBQUMsQ0FBSzs0Q0FBQyxHQUFHLENBQUNDLElBQUksR0FBR0MsV0FBVzs7O3lHQUM5QkYsQ0FBQzs7Ozs7OztrREFBQyxDQUFtQzs7OztpR0FHekNKLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUF3QztnQ0FBQ00sS0FBSyxFQUFFLENBQUNDO29DQUFBQSxZQUFZLEVBQUUsQ0FBUTtnQ0FBQSxDQUFDOzs7Ozs7O2dIQUNsRlIsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7OzZHQUNmRSxDQUFFOzs7Ozs7O3NEQUFDLENBQVE7OzZHQUNYQyxDQUFDOzs7Ozs7O3NEQUFDLENBQTZCOzs7Ozs7Ozs7OztBQWFwRSxDQUFDO0dBNUNLaEIsTUFBTTtLQUFOQSxNQUFNO0FBNkNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXIgPSB0cnVlLCBkYXJrID0gZmFsc2UsIG5hdiA9IHRydWUgfSkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFyayA/ICdiZy1kYXJrJyA6ICcnfSA+XG4gICAgICAgICAgICA8TmF2YmFyIG5hdj17bmF2fSAvPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTQgY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvb3RlciAmJiAoPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UG9ydGFmb2xpbyBkZSBWw61jdG9yIE1hbnVlbCBWZWzDoXpxdWV6IEZ1ZW50ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDAwLXtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4mY29weTtUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvczwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgY29sLTEyIGJnLWxpZ2h0IHRleHQtZGFyayBwLTNcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YWN0bzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD52aWN0b3IudmVsYXpmdWVudGV6QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsIm5hdiIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDMiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});