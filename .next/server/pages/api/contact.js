"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  __webpack_require__(/*! dotenv */ \"dotenv\").config(); // let nodemailer = require('nodemailer')\n\n\n  let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n  const transporter = nodemailer.createTransport({\n    port: 465,\n    host: \"smtp.gmail.com\",\n    auth: {\n      user: 'kwikcoderinfo@gmail.com',\n      pass: \"zatKo4-quktav-qekhux\"\n    },\n    secure: true\n  });\n  const mailData = {\n    from: 'kwikcoderinfo@gmail.com',\n    to: 'johnwondoh@gmail.com',\n    subject: `${req.body.topic} | Message From ${req.body.name}`,\n    text: req.body.enquiry + \" | Sent from: \" + req.body.email + \" | Phone Number: \" + req.body.phone,\n    html: `<div style=\"white-space: pre-wrap\">${req.body.enquiry}</div><p>Sent from:\n        ${req.body.email}</p><p>Phone number:\n        ${req.body.phone}</p>`\n  };\n  transporter.sendMail(mailData, function (err, info) {\n    if (err) console.log(err);else console.log(info);\n  });\n  res.status(200); // console.log(req.body)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsNkJBQWUsb0NBQVVBLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUMvQkMsRUFBQUEsa0RBQUEsR0FEK0IsQ0FFL0I7OztBQUNBLE1BQUlFLFVBQVUsR0FBR0YsbUJBQU8sQ0FBQyw4QkFBRCxDQUF4Qjs7QUFDQSxRQUFNRyxXQUFXLEdBQUdELFVBQVUsQ0FBQ0UsZUFBWCxDQUEyQjtBQUMzQ0MsSUFBQUEsSUFBSSxFQUFFLEdBRHFDO0FBRTNDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnFDO0FBRzNDQyxJQUFBQSxJQUFJLEVBQUU7QUFDRkMsTUFBQUEsSUFBSSxFQUFFLHlCQURKO0FBRUZDLE1BQUFBLElBQUksRUFBRUMsc0JBQWdDRTtBQUZwQyxLQUhxQztBQU8zQ0MsSUFBQUEsTUFBTSxFQUFFO0FBUG1DLEdBQTNCLENBQXBCO0FBVUEsUUFBTUMsUUFBUSxHQUFHO0FBQ2JDLElBQUFBLElBQUksRUFBRSx5QkFETztBQUViQyxJQUFBQSxFQUFFLEVBQUUsc0JBRlM7QUFHYkMsSUFBQUEsT0FBTyxFQUFHLEdBQUVuQixHQUFHLENBQUNvQixJQUFKLENBQVNDLEtBQU0sbUJBQWtCckIsR0FBRyxDQUFDb0IsSUFBSixDQUFTRSxJQUFLLEVBSDlDO0FBSWJDLElBQUFBLElBQUksRUFBRXZCLEdBQUcsQ0FBQ29CLElBQUosQ0FBU0ksT0FBVCxHQUFtQixnQkFBbkIsR0FBc0N4QixHQUFHLENBQUNvQixJQUFKLENBQVNLLEtBQS9DLEdBQXVELG1CQUF2RCxHQUE2RXpCLEdBQUcsQ0FBQ29CLElBQUosQ0FBU00sS0FKL0U7QUFLYkMsSUFBQUEsSUFBSSxFQUFHLHNDQUFxQzNCLEdBQUcsQ0FBQ29CLElBQUosQ0FBU0ksT0FBUTtBQUNyRSxVQUFVeEIsR0FBRyxDQUFDb0IsSUFBSixDQUFTSyxLQUFNO0FBQ3pCLFVBQVV6QixHQUFHLENBQUNvQixJQUFKLENBQVNNLEtBQU07QUFQSixHQUFqQjtBQVVBckIsRUFBQUEsV0FBVyxDQUFDdUIsUUFBWixDQUFxQlosUUFBckIsRUFBK0IsVUFBVWEsR0FBVixFQUFlQyxJQUFmLEVBQXFCO0FBQ2hELFFBQUlELEdBQUosRUFDSUUsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRUFESixLQUdJRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNQLEdBTEQ7QUFNQTdCLEVBQUFBLEdBQUcsQ0FBQ2dDLE1BQUosQ0FBVyxHQUFYLEVBOUIrQixDQStCL0I7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsX2NvbXAvLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcbiAgICAvLyBsZXQgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKVxuICAgIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIHBvcnQ6IDQ2NSxcbiAgICAgICAgaG9zdDogXCJzbXRwLmdtYWlsLmNvbVwiLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICB1c2VyOiAna3dpa2NvZGVyaW5mb0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfWU9VUl9LRVksXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICB9KVxuXG4gICAgY29uc3QgbWFpbERhdGEgPSB7XG4gICAgICAgIGZyb206ICdrd2lrY29kZXJpbmZvQGdtYWlsLmNvbScsXG4gICAgICAgIHRvOiAnam9obndvbmRvaEBnbWFpbC5jb20nLFxuICAgICAgICBzdWJqZWN0OiBgJHtyZXEuYm9keS50b3BpY30gfCBNZXNzYWdlIEZyb20gJHtyZXEuYm9keS5uYW1lfWAsXG4gICAgICAgIHRleHQ6IHJlcS5ib2R5LmVucXVpcnkgKyBcIiB8IFNlbnQgZnJvbTogXCIgKyByZXEuYm9keS5lbWFpbCArIFwiIHwgUGhvbmUgTnVtYmVyOiBcIiArIHJlcS5ib2R5LnBob25lLFxuICAgICAgICBodG1sOiBgPGRpdiBzdHlsZT1cIndoaXRlLXNwYWNlOiBwcmUtd3JhcFwiPiR7cmVxLmJvZHkuZW5xdWlyeX08L2Rpdj48cD5TZW50IGZyb206XG4gICAgICAgICR7cmVxLmJvZHkuZW1haWx9PC9wPjxwPlBob25lIG51bWJlcjpcbiAgICAgICAgJHtyZXEuYm9keS5waG9uZX08L3A+YFxuICAgIH1cblxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCBmdW5jdGlvbiAoZXJyLCBpbmZvKSB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgfSlcbiAgICByZXMuc3RhdHVzKDIwMClcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSlcbn0iXSwibmFtZXMiOlsicmVxIiwicmVzIiwicmVxdWlyZSIsImNvbmZpZyIsIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1lPVVJfS0VZIiwic2VjdXJlIiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiYm9keSIsInRvcGljIiwibmFtZSIsInRleHQiLCJlbnF1aXJ5IiwiZW1haWwiLCJwaG9uZSIsImh0bWwiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();