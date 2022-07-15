(function() {
var exports = {};
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ handler; }
});

;// CONCATENATED MODULE: external "luxon"
var external_luxon_namespaceObject = require("luxon");;
;// CONCATENATED MODULE: ./pages/api/invoices.js
const belvo = __webpack_require__(630).default;


const client = new belvo(process.env.BELVO_SECRET_ID, process.env.BELVO_SECRET_PASSWORD, process.env.BELVO_ENV_URL);
async function handler(req, res) {
  const {
    link
  } = req.query;

  try {
    await client.connect();
    const now = external_luxon_namespaceObject.DateTime.local();
    let invoices = []; // Fetch invoices for the past 5 years

    for (let i = 0; i < 5; i++) {
      const fromDate = now.minus({
        days: (i + 1) * 360
      }).toISODate();
      const toDate = now.minus({
        days: i * 360
      }).toISODate();
      const inflowInvoices = await client.invoices.retrieve(link, fromDate, toDate, 'INFLOW');
      const outflowInvoices = await client.invoices.retrieve(link, fromDate, toDate, 'OUTFLOW');
      invoices = [...invoices, ...inflowInvoices, ...outflowInvoices];
    }

    res.json(invoices);
    res.status(200).end();
  } catch (err) {
    res.status(500);
    return res.end();
  }
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
var __webpack_exports__ = (__webpack_exec__(880));
module.exports = __webpack_exports__;

})();