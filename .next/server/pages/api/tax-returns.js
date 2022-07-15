(function() {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 949:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const belvo = __webpack_require__(630).default;

const client = new belvo(process.env.BELVO_SECRET_ID, process.env.BELVO_SECRET_PASSWORD, process.env.BELVO_ENV_URL);
async function handler(req, res) {
  const {
    link
  } = req.query;
  client.connect().then(() => {
    // Here, as with our invoices.js wrapper, we create variables to calculate the current year
    // so that we can automatically retrieve the last five years of tax return data.
    const toDate = new Date().getFullYear();
    const fromDate = toDate - 5;
    client.taxReturns.retrieve(link, fromDate, toDate).then(response => {
      res.json(response);
    }).catch(function (error) {
      console.log('error', error);
      res.status(500).send({
        message: error.message
      });
    });
  });
}

/***/ }),

/***/ 630:
/***/ (function(module) {

"use strict";
module.exports = require("belvo");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(949));
module.exports = __webpack_exports__;

})();