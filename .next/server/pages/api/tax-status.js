(function() {
var exports = {};
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 537:
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
    client.taxStatus.retrieve(link).then(response => {
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
var __webpack_exports__ = (__webpack_exec__(537));
module.exports = __webpack_exports__;

})();