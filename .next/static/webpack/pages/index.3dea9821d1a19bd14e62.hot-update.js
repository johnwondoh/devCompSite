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

/***/ "./assets/jss/principlesStyles.js":
/*!****************************************!*\
  !*** ./assets/jss/principlesStyles.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_johnwondoh_Documents_Projects_personalDevSite_personal_comp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar principlesStyles = function principlesStyles(theme) {\n  return {\n    layout: {\n      // background: \"linear-gradient(rgba(235, 236, 239, 1), rgba(235, 236, 239, 1) ), url('/collabs.png')\",\n      backgroundColor: \"rgba(156,156,156,0.1)\",\n      // backgroundImage: `linear-gradient(0deg, rgba(156,156,156,0.1), rgba(156,156,156,0.1)), url(people.png)`,\n      // backgroundPosition: 'center',\n      // backgroundSize: 'cover',\n      // backgroundRepeat: 'no-repeat',\n      // borderTop: '1px solid black',\n      // backgroundColor: \"rgba(235, 236, 239, 1)\",\n      // backgroundImage: \"url('/collabs.png')\",\n      // backgroundSize: '60%',\n      // backgroundRepeat: 'no-repeat',\n      // backgroundPosition: 'center bottom',\n      //  backgroundColor: 'rgb(25,58,75)',\n      paddingTop: '4em',\n      paddingBottom: '3em'\n    },\n    underline: {\n      width: 50,\n      height: 5,\n      backgroundColor: 'rgb(252,132,28)',\n      marginTop: 15,\n      marginBottom: '3em'\n    },\n    cardContainerBox: {\n      width: '60%'\n    },\n    gridItem: {\n      backgroundColor: 'transparent'\n    },\n    gridItemElement: {\n      display: 'flex',\n      justifyContent: 'center',\n      backgroundColor: 'transparent'\n    },\n    cardRoot: {\n      // padding: 0,\n      maxWidth: 400,\n      // backgroundColor: 'transparent',\n      backgroundColor: 'rgba(25,58,75, 1)',\n      height: '100%',\n      '& h6': {\n        // backgroundColor: 'rgba(235,236,239,255)',\n        backgroundColor: 'rgba(25,58,75, 1)',\n        color: '#fff',\n        marginBottom: 0,\n        // color: 'rgb(252,132,28)',\n        // color: 'rgb(256,108,56)',\n        padding: 5,\n        paddingLeft: 10,\n        paddingTop: 10,\n        paddingBottom: 10,\n        borderBottom: '2px solid white' // marginBottom: '0.5em'\n\n      },\n      '& strong': {// color: 'red'\n        // color: 'rgb(5, 117, 20)'\n      },\n      '& p': {\n        // fontSize: '1em',\n        padding: 5,\n        paddingLeft: 10,\n        // backgroundColor: 'rgba(25,58,75, 0.1)',\n        // border: '1px solid green',\n        // color: 'rgba(255, 255, 255, 0.7)',\n        color: '#aaaaaa',\n        paddingTop: 10,\n        paddingBottom: 10,\n        borderRadius: 5,\n        borderTopLeftRadius: 0,\n        borderTopRightRadius: 0\n      }\n    },\n    cardContent: {\n      padding: 0\n    },\n    collabImageBox: (0,_Users_johnwondoh_Documents_Projects_personalDevSite_personal_comp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      margin: 'auto auto',\n      width: '70%'\n    }, theme.breakpoints.down('lg'), {\n      // width: 0\n      // visibility: 'visible'\n      display: 'none'\n    }),\n    collabImage: {\n      width: '100%',\n      opacity: 0.6\n    },\n    sideBox: {\n      height: '100%' // backgroundColor: 'blue'\n\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (principlesStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBOUI7O0FBc0dBLCtEQUFlUixnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hc3NldHMvanNzL3ByaW5jaXBsZXNTdHlsZXMuanM/MzY5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cmxPYmplY3RLZXlzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzXCJcblxuY29uc3QgcHJpbmNpcGxlc1N0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgbGF5b3V0OiB7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMjM1LCAyMzYsIDIzOSwgMSksIHJnYmEoMjM1LCAyMzYsIDIzOSwgMSkgKSwgdXJsKCcvY29sbGFicy5wbmcnKVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxNTYsMTU2LDE1NiwwLjEpXCIsXG4gICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE1NiwxNTYsMTU2LDAuMSksIHJnYmEoMTU2LDE1NiwxNTYsMC4xKSksIHVybChwZW9wbGUucG5nKWAsXG4gICAgICAgIC8vIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIC8vIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAvLyBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgLy8gYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM1LCAyMzYsIDIzOSwgMSlcIixcbiAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBcInVybCgnL2NvbGxhYnMucG5nJylcIixcbiAgICAgICAgLy8gYmFja2dyb3VuZFNpemU6ICc2MCUnLFxuICAgICAgICAvLyBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgLy8gYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGJvdHRvbScsXG4gICAgICAgIC8vICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjUsNTgsNzUpJyxcbiAgICAgICAgcGFkZGluZ1RvcDogJzRlbScsXG4gICAgICAgIHBhZGRpbmdCb3R0b206ICczZW0nLFxuICAgIH0sXG5cbiAgICB1bmRlcmxpbmU6IHtcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTIsMTMyLDI4KScsXG4gICAgICAgIG1hcmdpblRvcDogMTUsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzNlbSdcbiAgICB9LFxuICAgIGNhcmRDb250YWluZXJCb3g6IHtcbiAgICAgICAgd2lkdGg6ICc2MCUnXG4gICAgfSxcbiAgICBncmlkSXRlbToge2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J30sXG4gICAgZ3JpZEl0ZW1FbGVtZW50OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9LFxuICAgIGNhcmRSb290OiB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDAsXG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNSw1OCw3NSwgMSknLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgJyYgaDYnOiB7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIzNSwyMzYsMjM5LDI1NSknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNSw1OCw3NSwgMSknLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICAgIC8vIGNvbG9yOiAncmdiKDI1MiwxMzIsMjgpJyxcbiAgICAgICAgICAgIC8vIGNvbG9yOiAncmdiKDI1NiwxMDgsNTYpJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOjEwLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgd2hpdGUnXG4gICAgICAgICAgICAvLyBtYXJnaW5Cb3R0b206ICcwLjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgc3Ryb25nJzoge1xuICAgICAgICAgICAgLy8gY29sb3I6ICdyZWQnXG4gICAgICAgICAgICAvLyBjb2xvcjogJ3JnYig1LCAxMTcsIDIwKSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgcCc6IHtcbiAgICAgICAgICAgIC8vIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1LDU4LDc1LCAwLjEpJyxcbiAgICAgICAgICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCBncmVlbicsXG4gICAgICAgICAgICAvLyBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgICAgICAgICBjb2xvcjogJyNhYWFhYWEnLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDoxMCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAwXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJkQ29udGVudDoge1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfSxcbiAgICBjb2xsYWJJbWFnZUJveDoge1xuICAgICAgICBtYXJnaW46ICdhdXRvIGF1dG8nLFxuICAgICAgICB3aWR0aDogJzcwJScsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdsZycpXToge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDBcbiAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIG9wYWNpdHk6IDAuNixcbiAgICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIC8vIGxlZnQ6IDAsXG4gICAgICAgIC8vIHRvcDogMCxcbiAgICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgLy8gaGVpZ2h0OiAnYXV0bydcbiAgICB9LFxuICAgIGNvbGxhYkltYWdlOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9wYWNpdHk6IDAuNlxuICAgIH0sXG4gICAgc2lkZUJveDoge1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnYmx1ZSdcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBwcmluY2lwbGVzU3R5bGVzIl0sIm5hbWVzIjpbInVybE9iamVjdEtleXMiLCJwcmluY2lwbGVzU3R5bGVzIiwidGhlbWUiLCJsYXlvdXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInVuZGVybGluZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiY2FyZENvbnRhaW5lckJveCIsImdyaWRJdGVtIiwiZ3JpZEl0ZW1FbGVtZW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY2FyZFJvb3QiLCJtYXhXaWR0aCIsImNvbG9yIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiY2FyZENvbnRlbnQiLCJjb2xsYWJJbWFnZUJveCIsIm1hcmdpbiIsImJyZWFrcG9pbnRzIiwiZG93biIsImNvbGxhYkltYWdlIiwib3BhY2l0eSIsInNpZGVCb3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/jss/principlesStyles.js\n");

/***/ })

});