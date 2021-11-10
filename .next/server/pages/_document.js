"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: external "@material-ui/styles"
const styles_namespaceObject = require("@material-ui/styles");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_document.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
// const theme = responsiveFontSizes(createMuiTheme())
// const theme = res




class MyDocument extends next_document.default {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Lato:wght@100;300;400;700;900&family=Source+Sans+Pro:wght@200;300;400;600&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Arimo&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400&display=swap",
          rel: "stylesheet",
          className: "jsx-2385668993"
        }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
          id: "2385668993",
          children: ["html,body{height:100%;width:100%;}", "*,*:after,*:before{box-sizing:border-box;}", "body{font-family:'Roboto','Helvetica','Arial',sans-serif;font-size:1rem;margin:0;}"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new styles_namespaceObject.ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect( /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({}, props)))
  });

  const initialProps = await next_document.default.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [initialProps.styles, sheets.getStyleElement()]
    }, "styles")]
  });
};

/* harmony default export */ const _document = (MyDocument);

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 44:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 98:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(502)));
module.exports = __webpack_exports__;

})();