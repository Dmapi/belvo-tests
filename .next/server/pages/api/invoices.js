(function() {
var exports = {};
exports.id = "pages/api/invoices";
exports.ids = ["pages/api/invoices"];
exports.modules = {

/***/ "./pages/api/invoices.js":
/*!*******************************!*\
  !*** ./pages/api/invoices.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);
const belvo = __webpack_require__(/*! belvo */ "belvo").default;


const client = new belvo(process.env.BELVO_SECRET_ID, process.env.BELVO_SECRET_PASSWORD, process.env.BELVO_ENV_URL);
async function handler(req, res) {
  const {
    link
  } = req.query;

  try {
    await client.connect();
    const now = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local();
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

/***/ "belvo":
/*!************************!*\
  !*** external "belvo" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("belvo");;

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("luxon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/invoices.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzLy4vcGFnZXMvYXBpL2ludm9pY2VzLmpzIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJiZWx2b1wiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJsdXhvblwiIl0sIm5hbWVzIjpbImJlbHZvIiwicmVxdWlyZSIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJCRUxWT19TRUNSRVRfSUQiLCJCRUxWT19TRUNSRVRfUEFTU1dPUkQiLCJCRUxWT19FTlZfVVJMIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImxpbmsiLCJxdWVyeSIsImNvbm5lY3QiLCJub3ciLCJEYXRlVGltZSIsImludm9pY2VzIiwiaSIsImZyb21EYXRlIiwibWludXMiLCJkYXlzIiwidG9JU09EYXRlIiwidG9EYXRlIiwiaW5mbG93SW52b2ljZXMiLCJyZXRyaWV2ZSIsIm91dGZsb3dJbnZvaWNlcyIsImpzb24iLCJzdGF0dXMiLCJlbmQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLGlEQUFkOztBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlGLEtBQUosQ0FDYkcsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBREMsRUFFYkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLHFCQUZDLEVBR2JILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxhQUhDLENBQWY7QUFNZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsUUFBTTtBQUFFQztBQUFGLE1BQVdGLEdBQUcsQ0FBQ0csS0FBckI7O0FBRUEsTUFBSTtBQUNGLFVBQU1WLE1BQU0sQ0FBQ1csT0FBUCxFQUFOO0FBQ0EsVUFBTUMsR0FBRyxHQUFHQyxpREFBQSxFQUFaO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWYsQ0FIRSxDQUtGOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3pCLFlBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDSyxLQUFKLENBQVU7QUFBQ0MsWUFBSSxFQUFFLENBQUNILENBQUMsR0FBRyxDQUFMLElBQVU7QUFBakIsT0FBVixFQUFpQ0ksU0FBakMsRUFBakI7QUFDQSxZQUFNQyxNQUFNLEdBQUdSLEdBQUcsQ0FBQ0ssS0FBSixDQUFVO0FBQUNDLFlBQUksRUFBRUgsQ0FBQyxHQUFHO0FBQVgsT0FBVixFQUEyQkksU0FBM0IsRUFBZjtBQUNBLFlBQU1FLGNBQWMsR0FBRyxNQUFNckIsTUFBTSxDQUFDYyxRQUFQLENBQWdCUSxRQUFoQixDQUF5QmIsSUFBekIsRUFBK0JPLFFBQS9CLEVBQXlDSSxNQUF6QyxFQUFpRCxRQUFqRCxDQUE3QjtBQUNBLFlBQU1HLGVBQWUsR0FBRyxNQUFNdkIsTUFBTSxDQUFDYyxRQUFQLENBQWdCUSxRQUFoQixDQUF5QmIsSUFBekIsRUFBK0JPLFFBQS9CLEVBQXlDSSxNQUF6QyxFQUFpRCxTQUFqRCxDQUE5QjtBQUNBTixjQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFKLEVBQWMsR0FBR08sY0FBakIsRUFBaUMsR0FBR0UsZUFBcEMsQ0FBWDtBQUNEOztBQUVEZixPQUFHLENBQUNnQixJQUFKLENBQVNWLFFBQVQ7QUFDQU4sT0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsR0FoQkQsQ0FnQkUsT0FBTUMsR0FBTixFQUFXO0FBQ1huQixPQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWDtBQUNBLFdBQU9qQixHQUFHLENBQUNrQixHQUFKLEVBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDaENELG1DOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9pbnZvaWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJlbHZvID0gcmVxdWlyZSgnYmVsdm8nKS5kZWZhdWx0O1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBiZWx2byhcbiAgcHJvY2Vzcy5lbnYuQkVMVk9fU0VDUkVUX0lELFxuICBwcm9jZXNzLmVudi5CRUxWT19TRUNSRVRfUEFTU1dPUkQsXG4gIHByb2Nlc3MuZW52LkJFTFZPX0VOVl9VUkxcbik7ICAgXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBsaW5rIH0gPSByZXEucXVlcnlcblxuICB0cnkge1xuICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KClcbiAgICBjb25zdCBub3cgPSBEYXRlVGltZS5sb2NhbCgpXG4gICAgbGV0IGludm9pY2VzID0gW11cbiAgICBcbiAgICAvLyBGZXRjaCBpbnZvaWNlcyBmb3IgdGhlIHBhc3QgNSB5ZWFyc1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGNvbnN0IGZyb21EYXRlID0gbm93Lm1pbnVzKHtkYXlzOiAoaSArIDEpICogMzYwfSkudG9JU09EYXRlKClcbiAgICAgIGNvbnN0IHRvRGF0ZSA9IG5vdy5taW51cyh7ZGF5czogaSAqIDM2MH0pLnRvSVNPRGF0ZSgpXG4gICAgICBjb25zdCBpbmZsb3dJbnZvaWNlcyA9IGF3YWl0IGNsaWVudC5pbnZvaWNlcy5yZXRyaWV2ZShsaW5rLCBmcm9tRGF0ZSwgdG9EYXRlLCAnSU5GTE9XJylcbiAgICAgIGNvbnN0IG91dGZsb3dJbnZvaWNlcyA9IGF3YWl0IGNsaWVudC5pbnZvaWNlcy5yZXRyaWV2ZShsaW5rLCBmcm9tRGF0ZSwgdG9EYXRlLCAnT1VURkxPVycpXG4gICAgICBpbnZvaWNlcyA9IFsuLi5pbnZvaWNlcywgLi4uaW5mbG93SW52b2ljZXMsIC4uLm91dGZsb3dJbnZvaWNlc11cbiAgICB9XG5cbiAgICByZXMuanNvbihpbnZvaWNlcylcbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApXG4gICAgcmV0dXJuIHJlcy5lbmQoKVxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmVsdm9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImx1eG9uXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9