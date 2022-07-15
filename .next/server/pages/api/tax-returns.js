(function() {
var exports = {};
exports.id = "pages/api/tax-returns";
exports.ids = ["pages/api/tax-returns"];
exports.modules = {

/***/ "./pages/api/tax-returns.js":
/*!**********************************!*\
  !*** ./pages/api/tax-returns.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const belvo = __webpack_require__(/*! belvo */ "belvo").default;

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

/***/ "belvo":
/*!************************!*\
  !*** external "belvo" ***!
  \************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tax-returns.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzLy4vcGFnZXMvYXBpL3RheC1yZXR1cm5zLmpzIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJiZWx2b1wiIl0sIm5hbWVzIjpbImJlbHZvIiwicmVxdWlyZSIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJCRUxWT19TRUNSRVRfSUQiLCJCRUxWT19TRUNSRVRfUEFTU1dPUkQiLCJCRUxWT19FTlZfVVJMIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImxpbmsiLCJxdWVyeSIsImNvbm5lY3QiLCJ0aGVuIiwidG9EYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZnJvbURhdGUiLCJ0YXhSZXR1cm5zIiwicmV0cmlldmUiLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsaURBQWQ7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlGLEtBQUosQ0FDYkcsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBREMsRUFFYkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLHFCQUZDLEVBR2JILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxhQUhDLENBQWY7QUFNZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFFOUMsUUFBTTtBQUFFQztBQUFGLE1BQVdGLEdBQUcsQ0FBQ0csS0FBckI7QUFFQVYsUUFBTSxDQUFDVyxPQUFQLEdBQ0dDLElBREgsQ0FDUSxNQUFNO0FBQ1o7QUFDQTtBQUNFLFVBQU1DLE1BQU0sR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsV0FBYixFQUFmO0FBQ0EsVUFBTUMsUUFBUSxHQUFHSCxNQUFNLEdBQUcsQ0FBMUI7QUFDQWIsVUFBTSxDQUFDaUIsVUFBUCxDQUFrQkMsUUFBbEIsQ0FBMkJULElBQTNCLEVBQWlDTyxRQUFqQyxFQUEyQ0gsTUFBM0MsRUFDR0QsSUFESCxDQUNTTyxRQUFELElBQWM7QUFDaEJYLFNBQUcsQ0FBQ1ksSUFBSixDQUFTRCxRQUFUO0FBQ0gsS0FISCxFQUlHRSxLQUpILENBSVMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsS0FBckI7QUFDRWQsU0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxlQUFPLEVBQUVMLEtBQUssQ0FBQ0s7QUFERSxPQUFyQjtBQUdILEtBVEg7QUFVRCxHQWhCSDtBQWlCRCxDOzs7Ozs7Ozs7OztBQzdCRCxtQyIsImZpbGUiOiJwYWdlcy9hcGkvdGF4LXJldHVybnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiZWx2byA9IHJlcXVpcmUoJ2JlbHZvJykuZGVmYXVsdDtcblxuY29uc3QgY2xpZW50ID0gbmV3IGJlbHZvKFxuICBwcm9jZXNzLmVudi5CRUxWT19TRUNSRVRfSUQsXG4gIHByb2Nlc3MuZW52LkJFTFZPX1NFQ1JFVF9QQVNTV09SRCxcbiAgcHJvY2Vzcy5lbnYuQkVMVk9fRU5WX1VSTFxuKTsgICBcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIGNvbnN0IHsgbGluayB9ID0gcmVxLnF1ZXJ5XG5cbiAgY2xpZW50LmNvbm5lY3QoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAvLyBIZXJlLCBhcyB3aXRoIG91ciBpbnZvaWNlcy5qcyB3cmFwcGVyLCB3ZSBjcmVhdGUgdmFyaWFibGVzIHRvIGNhbGN1bGF0ZSB0aGUgY3VycmVudCB5ZWFyXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXV0b21hdGljYWxseSByZXRyaWV2ZSB0aGUgbGFzdCBmaXZlIHllYXJzIG9mIHRheCByZXR1cm4gZGF0YS5cbiAgICAgIGNvbnN0IHRvRGF0ZSA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpXG4gICAgICBjb25zdCBmcm9tRGF0ZSA9IHRvRGF0ZSAtIDVcbiAgICAgIGNsaWVudC50YXhSZXR1cm5zLnJldHJpZXZlKGxpbmssIGZyb21EYXRlLCB0b0RhdGUpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzLmpzb24ocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJlbHZvXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9