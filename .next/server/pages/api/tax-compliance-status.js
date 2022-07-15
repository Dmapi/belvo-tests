(function() {
var exports = {};
exports.id = "pages/api/tax-compliance-status";
exports.ids = ["pages/api/tax-compliance-status"];
exports.modules = {

/***/ "./pages/api/tax-compliance-status.js":
/*!********************************************!*\
  !*** ./pages/api/tax-compliance-status.js ***!
  \********************************************/
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
    client.taxComplianceStatus.retrieve(link).then(response => {
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tax-compliance-status.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzLy4vcGFnZXMvYXBpL3RheC1jb21wbGlhbmNlLXN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzL2V4dGVybmFsIFwiYmVsdm9cIiJdLCJuYW1lcyI6WyJiZWx2byIsInJlcXVpcmUiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiQkVMVk9fU0VDUkVUX0lEIiwiQkVMVk9fU0VDUkVUX1BBU1NXT1JEIiwiQkVMVk9fRU5WX1VSTCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJsaW5rIiwicXVlcnkiLCJjb25uZWN0IiwidGhlbiIsInRheENvbXBsaWFuY2VTdGF0dXMiLCJyZXRyaWV2ZSIsInJlc3BvbnNlIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxpREFBZDs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsS0FBSixDQUNiRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFEQyxFQUViRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUscUJBRkMsRUFHYkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGFBSEMsQ0FBZjtBQU1lLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUU5QyxRQUFNO0FBQUVDO0FBQUYsTUFBV0YsR0FBRyxDQUFDRyxLQUFyQjtBQUVBVixRQUFNLENBQUNXLE9BQVAsR0FDR0MsSUFESCxDQUNRLE1BQU07QUFDVlosVUFBTSxDQUFDYSxtQkFBUCxDQUEyQkMsUUFBM0IsQ0FBb0NMLElBQXBDLEVBQ0dHLElBREgsQ0FDU0csUUFBRCxJQUFjO0FBQ2hCUCxTQUFHLENBQUNRLElBQUosQ0FBU0QsUUFBVDtBQUNILEtBSEgsRUFJR0UsS0FKSCxDQUlTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCO0FBQ0VWLFNBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxlQUFPLEVBQUVMLEtBQUssQ0FBQ0s7QUFERSxPQUFyQjtBQUdILEtBVEg7QUFVRCxHQVpIO0FBYUQsQzs7Ozs7Ozs7Ozs7QUN6QkQsbUMiLCJmaWxlIjoicGFnZXMvYXBpL3RheC1jb21wbGlhbmNlLXN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJlbHZvID0gcmVxdWlyZSgnYmVsdm8nKS5kZWZhdWx0O1xuXG5jb25zdCBjbGllbnQgPSBuZXcgYmVsdm8oXG4gIHByb2Nlc3MuZW52LkJFTFZPX1NFQ1JFVF9JRCxcbiAgcHJvY2Vzcy5lbnYuQkVMVk9fU0VDUkVUX1BBU1NXT1JELFxuICBwcm9jZXNzLmVudi5CRUxWT19FTlZfVVJMXG4pOyAgIFxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgeyBsaW5rIH0gPSByZXEucXVlcnlcblxuICBjbGllbnQuY29ubmVjdCgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY2xpZW50LnRheENvbXBsaWFuY2VTdGF0dXMucmV0cmlldmUobGluaylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXMuanNvbihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcilcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmVsdm9cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=