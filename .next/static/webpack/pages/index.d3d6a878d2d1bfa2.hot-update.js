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

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"skills\": function() { return /* binding */ skills; },\n/* harmony export */   \"experiences\": function() { return /* binding */ experiences; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"cursos\": function() { return /* binding */ cursos; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar skills = [\n    {\n        skill: 'Javascript',\n        percentage: 85,\n        image: 'logo/javascript.svg'\n    },\n    {\n        skill: 'HTML',\n        percentage: 80,\n        image: 'logo/html.svg'\n    },\n    {\n        skill: 'CSS',\n        percentage: 60,\n        image: 'logo/css.svg'\n    },\n    {\n        skill: 'Quasar Framework',\n        percentage: 70,\n        image: 'logo/quasar.svg'\n    },\n    {\n        skill: 'React',\n        percentage: 60,\n        image: 'logo/react.svg'\n    },\n    {\n        skill: 'Angular',\n        percentage: 60,\n        image: 'logo/angular.svg'\n    }, \n];\nvar experiences = [\n    {\n        title: 'Freelance',\n        from: 'Junio 2020',\n        to: 'Junio 2021',\n        description: 'Desarrollo frontend de sistema web desarrollado en Quasar Framework. Se trata de un CMMS dirigido a los departamentos de Ingenieria Biomedica para poder aumentar su productividad ayudando a generar reportes y mantenimientos a los activos biomedicos'\n    },\n    {\n        title: 'Practicante de ingeniero de Software en Valadevs',\n        from: 'Junio 2021',\n        to: 'Diciembre 2021',\n        description: 'Desarrollo frontend y backend, asi como mantenimiento de plataforma desarrollada en PHP'\n    }, \n];\nvar projects = [\n    {\n        name: 'Aprendiendo Ingl\\xe9s',\n        description: 'Aplicacion movil y web para que los ninos puedan aprender ingles basico',\n        image: 'le.png'\n    },\n    {\n        name: 'Aprendiendo matem\\xe1ticas',\n        description: 'Aplicacion movil y web para que los ninos puedan aprender ingles basico',\n        image: 'mat.png'\n    },\n    {\n        name: 'BMS',\n        description: 'Pagina web de publicidad para software del tipo CMMS',\n        image: 'bms.png'\n    }\n];\nvar cursos = [\n    {\n        name: 'PMI',\n        description: 'Administraci\\xf3n de proyectos aplicada',\n        image: 'admin.pdf'\n    },\n    {\n        name: 'SCRUM',\n        description: 'Aprende SCRUM (LinkedIn Learning)',\n        image: 'sql.png'\n    },\n    {\n        name: 'MongoDB',\n        description: 'MongoDB Basics (MongoDB University)',\n        image: 'javascript.png'\n    },\n    {\n        name: 'Javascript',\n        description: 'Javascript buenas pr\\xe1cticas (LinkedIn Learning)',\n        image: 'mongo.jpeg'\n    },\n    {\n        name: 'Javascript',\n        description: 'Javascript esencial (LinkedIn learning)',\n        image: 'mongo.jpeg'\n    },\n    {\n        name: 'Javascript',\n        description: 'Javascript expresiones regulares ',\n        image: 'mongo.jpeg'\n    }\n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbe1xuICAgIHNraWxsOiAnSmF2YXNjcmlwdCcsXG4gICAgcGVyY2VudGFnZTogODUsXG4gICAgaW1hZ2U6ICdsb2dvL2phdmFzY3JpcHQuc3ZnJ1xufSxcbntcbiAgICBza2lsbDogJ0hUTUwnLFxuICAgIHBlcmNlbnRhZ2U6IDgwLFxuICAgIGltYWdlOiAnbG9nby9odG1sLnN2ZydcblxufSxcbntcbiAgICBza2lsbDogJ0NTUycsXG4gICAgcGVyY2VudGFnZTogNjAsXG4gICAgaW1hZ2U6ICdsb2dvL2Nzcy5zdmcnXG5cbn0sXG57XG4gICAgc2tpbGw6ICdRdWFzYXIgRnJhbWV3b3JrJyxcbiAgICBwZXJjZW50YWdlOiA3MCxcbiAgICBpbWFnZTogJ2xvZ28vcXVhc2FyLnN2ZydcblxufSxcbntcbiAgICBza2lsbDogJ1JlYWN0JyxcbiAgICBwZXJjZW50YWdlOiA2MCxcbiAgICBpbWFnZTogJ2xvZ28vcmVhY3Quc3ZnJ1xuXG59LFxue1xuICAgIHNraWxsOiAnQW5ndWxhcicsXG4gICAgcGVyY2VudGFnZTogNjAsXG4gICAgaW1hZ2U6ICdsb2dvL2FuZ3VsYXIuc3ZnJ1xuXG59LFxuXVxuXG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFt7XG4gICAgdGl0bGU6ICdGcmVlbGFuY2UnLFxuICAgIGZyb206ICdKdW5pbyAyMDIwJyxcbiAgICB0bzogJ0p1bmlvIDIwMjEnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVzYXJyb2xsbyBmcm9udGVuZCBkZSBzaXN0ZW1hIHdlYiBkZXNhcnJvbGxhZG8gZW4gUXVhc2FyIEZyYW1ld29yay4gU2UgdHJhdGEgZGUgdW4gQ01NUyBkaXJpZ2lkbyBhIGxvcyBkZXBhcnRhbWVudG9zIGRlIEluZ2VuaWVyaWEgQmlvbWVkaWNhIHBhcmEgcG9kZXIgYXVtZW50YXIgc3UgcHJvZHVjdGl2aWRhZCBheXVkYW5kbyBhIGdlbmVyYXIgcmVwb3J0ZXMgeSBtYW50ZW5pbWllbnRvcyBhIGxvcyBhY3Rpdm9zIGJpb21lZGljb3MnXG59LFxue1xuICAgIHRpdGxlOiAnUHJhY3RpY2FudGUgZGUgaW5nZW5pZXJvIGRlIFNvZnR3YXJlIGVuIFZhbGFkZXZzJyxcbiAgICBmcm9tOiAnSnVuaW8gMjAyMScsXG4gICAgdG86ICdEaWNpZW1icmUgMjAyMScsXG4gICAgZGVzY3JpcHRpb246ICdEZXNhcnJvbGxvIGZyb250ZW5kIHkgYmFja2VuZCwgYXNpIGNvbW8gbWFudGVuaW1pZW50byBkZSBwbGF0YWZvcm1hIGRlc2Fycm9sbGFkYSBlbiBQSFAnXG59LFxuXG5dXG5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW3tcbiAgICBuYW1lOiAnQXByZW5kaWVuZG8gSW5nbMOpcycsXG4gICAgZGVzY3JpcHRpb246ICdBcGxpY2FjaW9uIG1vdmlsIHkgd2ViIHBhcmEgcXVlIGxvcyBuaW5vcyBwdWVkYW4gYXByZW5kZXIgaW5nbGVzIGJhc2ljbycsXG4gICAgaW1hZ2U6ICdsZS5wbmcnXG59LCB7XG4gICAgbmFtZTogJ0FwcmVuZGllbmRvIG1hdGVtw6F0aWNhcycsXG4gICAgZGVzY3JpcHRpb246ICdBcGxpY2FjaW9uIG1vdmlsIHkgd2ViIHBhcmEgcXVlIGxvcyBuaW5vcyBwdWVkYW4gYXByZW5kZXIgaW5nbGVzIGJhc2ljbycsXG4gICAgaW1hZ2U6ICdtYXQucG5nJ1xufSwgIHtcbiAgICBuYW1lOiAnQk1TJyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZ2luYSB3ZWIgZGUgcHVibGljaWRhZCBwYXJhIHNvZnR3YXJlIGRlbCB0aXBvIENNTVMnLFxuICAgIGltYWdlOiAnYm1zLnBuZydcbn1cbl1cblxuXG5leHBvcnQgY29uc3QgY3Vyc29zID0gW3tcbiAgICBuYW1lOiAnUE1JJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkbWluaXN0cmFjacOzbiBkZSBwcm95ZWN0b3MgYXBsaWNhZGEnLFxuICAgIGltYWdlOiAnYWRtaW4ucGRmJ1xufSwge1xuICAgIG5hbWU6ICdTQ1JVTScsXG4gICAgZGVzY3JpcHRpb246ICdBcHJlbmRlIFNDUlVNIChMaW5rZWRJbiBMZWFybmluZyknLFxuICAgIGltYWdlOiAnc3FsLnBuZydcbn0gLCB7XG4gICAgbmFtZTogJ01vbmdvREInLFxuICAgIGRlc2NyaXB0aW9uOiAnTW9uZ29EQiBCYXNpY3MgKE1vbmdvREIgVW5pdmVyc2l0eSknLFxuICAgIGltYWdlOiAnamF2YXNjcmlwdC5wbmcnXG59LCB7XG4gICAgbmFtZTogJ0phdmFzY3JpcHQnLFxuICAgIGRlc2NyaXB0aW9uOiAnSmF2YXNjcmlwdCBidWVuYXMgcHLDoWN0aWNhcyAoTGlua2VkSW4gTGVhcm5pbmcpJyxcbiAgICBpbWFnZTogJ21vbmdvLmpwZWcnXG59LCB7XG4gICAgbmFtZTogJ0phdmFzY3JpcHQnLFxuICAgIGRlc2NyaXB0aW9uOiAnSmF2YXNjcmlwdCBlc2VuY2lhbCAoTGlua2VkSW4gbGVhcm5pbmcpJyxcbiAgICBpbWFnZTogJ21vbmdvLmpwZWcnXG59LCB7XG4gICAgbmFtZTogJ0phdmFzY3JpcHQnLFxuICAgIGRlc2NyaXB0aW9uOiAnSmF2YXNjcmlwdCBleHByZXNpb25lcyByZWd1bGFyZXMgJyxcbiAgICBpbWFnZTogJ21vbmdvLmpwZWcnXG59XG5dIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImltYWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImZyb20iLCJ0byIsImRlc2NyaXB0aW9uIiwicHJvamVjdHMiLCJuYW1lIiwiY3Vyc29zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./profile.js\n");

/***/ })

});