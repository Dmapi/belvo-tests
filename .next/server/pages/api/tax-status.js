(function() {
var exports = {};
exports.id = "pages/api/tax-status";
exports.ids = ["pages/api/tax-status"];
exports.modules = {

/***/ "./pages/api/tax-status.js":
/*!*********************************!*\
  !*** ./pages/api/tax-status.js ***!
  \*********************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tax-status.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzLy4vcGFnZXMvYXBpL3RheC1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcImJlbHZvXCIiXSwibmFtZXMiOlsiYmVsdm8iLCJyZXF1aXJlIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIkJFTFZPX1NFQ1JFVF9JRCIsIkJFTFZPX1NFQ1JFVF9QQVNTV09SRCIsIkJFTFZPX0VOVl9VUkwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibGluayIsInF1ZXJ5IiwiY29ubmVjdCIsInRoZW4iLCJ0YXhTdGF0dXMiLCJyZXRyaWV2ZSIsInJlc3BvbnNlIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxpREFBZDs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsS0FBSixDQUNiRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFEQyxFQUViRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUscUJBRkMsRUFHYkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGFBSEMsQ0FBZjtBQU1lLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUU5QyxRQUFNO0FBQUVDO0FBQUYsTUFBV0YsR0FBRyxDQUFDRyxLQUFyQjtBQUVBVixRQUFNLENBQUNXLE9BQVAsR0FDR0MsSUFESCxDQUNRLE1BQU07QUFDVlosVUFBTSxDQUFDYSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkwsSUFBMUIsRUFDR0csSUFESCxDQUNTRyxRQUFELElBQWM7QUFDaEJQLFNBQUcsQ0FBQ1EsSUFBSixDQUFTRCxRQUFUO0FBQ0gsS0FISCxFQUlHRSxLQUpILENBSVMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsS0FBckI7QUFDRVYsU0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLGVBQU8sRUFBRUwsS0FBSyxDQUFDSztBQURFLE9BQXJCO0FBR0gsS0FUSDtBQVVILEdBWkQ7QUFhRCxDOzs7Ozs7Ozs7OztBQ3pCRCxtQyIsImZpbGUiOiJwYWdlcy9hcGkvdGF4LXN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJlbHZvID0gcmVxdWlyZSgnYmVsdm8nKS5kZWZhdWx0O1xuXG5jb25zdCBjbGllbnQgPSBuZXcgYmVsdm8oXG4gIHByb2Nlc3MuZW52LkJFTFZPX1NFQ1JFVF9JRCxcbiAgcHJvY2Vzcy5lbnYuQkVMVk9fU0VDUkVUX1BBU1NXT1JELFxuICBwcm9jZXNzLmVudi5CRUxWT19FTlZfVVJMXG4pOyAgIFxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgeyBsaW5rIH0gPSByZXEucXVlcnlcblxuICBjbGllbnQuY29ubmVjdCgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY2xpZW50LnRheFN0YXR1cy5yZXRyaWV2ZShsaW5rKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKVxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmVsdm9cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=