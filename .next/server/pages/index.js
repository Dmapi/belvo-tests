(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _observablehq_plot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @observablehq/plot */ "@observablehq/plot");
/* harmony import */ var _observablehq_plot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_observablehq_plot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var plot_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! plot-react */ "plot-react");
/* harmony import */ var plot_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(plot_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var arquero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! arquero */ "arquero");
/* harmony import */ var arquero__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(arquero__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/danos/ammper/test-1/tuto-360/pages/index.js";







const d3 = __webpack_require__(/*! d3 */ "d3");

const fetcher = url => fetch(url).then(res => res.json());

const getAverage = arr => Math.round(arr.reduce((p, c) => p + c, 0) / arr.length);

const getUniqueValues = arr => [...new Set(arr)];

function Home(props) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    taxStatus: null,
    taxComplianceStatus: null,
    invoices: [],
    taxReturns: null
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  const fetchFiscalData = async link => {
    setLoading(true);
    let [taxStatus, taxComplianceStatus, invoices, taxReturns] = await Promise.all([fetcher(`http://localhost:3000/api/tax-status?link=${link}`), fetcher(`http://localhost:3000/api/tax-compliance-status?link=${link}`), fetcher(`http://localhost:3000/api/invoices?link=${link}`), fetcher(`http://localhost:3000/api/tax-returns?link=${link}`)]);
    setData({
      taxStatus,
      taxComplianceStatus,
      invoices,
      taxReturns
    });
    setLoading(false);
  };

  let {
    taxStatus,
    taxComplianceStatus,
    invoices,
    taxReturns
  } = data;
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3025447587" + " " + "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-3025447587",
        children: "Fiscal guide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",
        rel: "stylesheet",
        className: "jsx-3025447587"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-3025447587",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jsx-3025447587",
        children: " SAT report for individuals"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        styles: {
          textAlign: 'center'
        },
        className: "jsx-3025447587" + " " + 'search',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Please insert the Belvo link_id",
          value: value,
          onChange: e => setValue(e.target.value),
          type: "text",
          className: "jsx-3025447587"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => fetchFiscalData(value),
          className: "jsx-3025447587",
          children: "Create report"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "...loading"
      }, void 0, false), taxStatus && taxComplianceStatus && invoices && taxReturns && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "jsx-3025447587",
          children: "You successfully loaded the app! Open the browser console and you will see all the data being retrieved from Belvo."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "jsx-3025447587",
          children: "In the next step, you will see the Tax status data appear here :) "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3776761162",
      children: ".shorten.jsx-3025447587{text-overflow:ellipsis;}.container.jsx-3025447587{min-height:100vh;padding:0 19rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#8a9aa8;}main.jsx-3025447587{width:800px;}p.jsx-3025447587{line-height:28px font-weight:400;}h1.jsx-3025447587,h2.jsx-3025447587{color:#161a1d;}em.jsx-3025447587{font-family:monospace;color:#3882fa;font-style:initial;}.search.jsx-3025447587{background-color:#f6ffed;border:1px solid #b7eb8f;padding:15px;}input.jsx-3025447587{font-family:\"Noto Sans\",Arial,Verdana;width:65%;}button.jsx-3025447587{font-family:\"Noto Sans\",Arial,Verdana;width:25%;}pre.jsx-3025447587{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rhbm9zL2FtbXBlci90ZXN0LTEvdHV0by0zNjAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQixBQUlRLEFBRW9CLEFBVXBCLEFBR21CLEFBR0YsQUFHUSxBQUtHLEFBS2EsQUFJQSxBQUk3QixTQUNYLEdBNUJBLEVBT0EsR0FoQmtCLEtBbUJGLENBdEJoQixFQTJCMkIsUUF2QlosQUFZZixHQU9xQixFQVNULEFBSUEsVUFIWixBQUlBLEVBUkQsS0FMQyxRQUtBLDRDQXhCd0IsOEVBQ0MsbUdBQ0osNkZBQ0wsY0FDaEIiLCJmaWxlIjoiL2hvbWUvZGFub3MvYW1tcGVyL3Rlc3QtMS90dXRvLTM2MC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFBsb3QgZnJvbSBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiO1xuaW1wb3J0IHtQbG90RmlndXJlfSBmcm9tICdwbG90LXJlYWN0J1xuaW1wb3J0ICogYXMgYXEgZnJvbSAnYXJxdWVybyc7XG5jb25zdCBkMyA9IHJlcXVpcmUoXCJkM1wiKVxuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5jb25zdCBnZXRBdmVyYWdlID0gYXJyID0+IE1hdGgucm91bmQoYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGgpO1xuY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gYXJyID0+IFsuLi5uZXcgU2V0KGFycildXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7dGF4U3RhdHVzOiBudWxsLCB0YXhDb21wbGlhbmNlU3RhdHVzOiBudWxsLCBpbnZvaWNlczogW10sIHRheFJldHVybnM6IG51bGwgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmZXRjaEZpc2NhbERhdGEgPSBhc3luYyAobGluaykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBsZXQgW3RheFN0YXR1cywgdGF4Q29tcGxpYW5jZVN0YXR1cywgaW52b2ljZXMsIHRheFJldHVybnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXgtc3RhdHVzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXgtY29tcGxpYW5jZS1zdGF0dXM/bGluaz0ke2xpbmt9YCksXG4gICAgICBmZXRjaGVyKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2ludm9pY2VzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXgtcmV0dXJucz9saW5rPSR7bGlua31gKSxcbiAgICAgXSk7XG4gICAgc2V0RGF0YSh7IFxuICAgICAgdGF4U3RhdHVzLFxuICAgICAgdGF4Q29tcGxpYW5jZVN0YXR1cyxcbiAgICAgIGludm9pY2VzLFxuICAgICAgdGF4UmV0dXJucyxcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgbGV0IHt0YXhTdGF0dXMsIHRheENvbXBsaWFuY2VTdGF0dXMsIGludm9pY2VzLCB0YXhSZXR1cm5zIH0gPSBkYXRhO1xuICBcbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZpc2NhbCBndWlkZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPiBTQVQgcmVwb3J0IGZvciBpbmRpdmlkdWFsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnIHN0eWxlcz17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnNlcnQgdGhlIEJlbHZvIGxpbmtfaWRcIiBcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAvPiBcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoRmlzY2FsRGF0YSh2YWx1ZSl9PkNyZWF0ZSByZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2xvYWRpbmcgJiYgPD4uLi5sb2FkaW5nPC8+fVxuXG4gICAgICAgIHsgdGF4U3RhdHVzICYmIHRheENvbXBsaWFuY2VTdGF0dXMgJiYgaW52b2ljZXMgJiYgdGF4UmV0dXJucyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPllvdSBzdWNjZXNzZnVsbHkgbG9hZGVkIHRoZSBhcHAhIE9wZW4gdGhlIGJyb3dzZXIgY29uc29sZSBhbmQgeW91IHdpbGwgc2VlIGFsbCB0aGUgZGF0YSBiZWluZyByZXRyaWV2ZWQgZnJvbSBCZWx2by48L3A+XG4gICAgICAgICAgICA8cD5JbiB0aGUgbmV4dCBzdGVwLCB5b3Ugd2lsbCBzZWUgdGhlIFRheCBzdGF0dXMgZGF0YSBhcHBlYXIgaGVyZSA6KSA8L3A+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNob3J0ZW4ge1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAxOXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzhhOWFhODtcbiAgICAgICAgfVxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogODAwcHggXG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHhcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBoMiB7XG4gICAgICAgICAgY29sb3I6ICMxNjFhMWQ7XG4gICAgICAgIH1cbiAgICAgICAgZW0ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgY29sb3I6ICMzODgyZmE7XG4gICAgICAgICAgZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmZmVkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2ViOGY7XG4gICAgICAgICAgcGFkZGluZzogMTVweFxuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsQXJpYWwsVmVyZGFuYTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiAjMTYxYTFkO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLCAucGxvdCB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/home/danos/ammper/test-1/tuto-360/pages/index.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1191650112",
      children: "html,body{font-family:\"Noto Sans\",Arial,Verdana;font-weight:400;color:#161a1d;}table,.plot{color:black;font-size:12px;}table{border-color:grey;}td{border:1px solid #eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rhbm9zL2FtbXBlci90ZXN0LTEvdHV0by0zNjAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0h5QixBQUlpRCxBQUsxQixBQUlNLEFBR0ksWUFOUCxNQUlqQixJQUdBLEtBTkEsV0FOa0IsZ0JBQ0YsY0FDaEIiLCJmaWxlIjoiL2hvbWUvZGFub3MvYW1tcGVyL3Rlc3QtMS90dXRvLTM2MC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFBsb3QgZnJvbSBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiO1xuaW1wb3J0IHtQbG90RmlndXJlfSBmcm9tICdwbG90LXJlYWN0J1xuaW1wb3J0ICogYXMgYXEgZnJvbSAnYXJxdWVybyc7XG5jb25zdCBkMyA9IHJlcXVpcmUoXCJkM1wiKVxuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5jb25zdCBnZXRBdmVyYWdlID0gYXJyID0+IE1hdGgucm91bmQoYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGgpO1xuY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gYXJyID0+IFsuLi5uZXcgU2V0KGFycildXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7dGF4U3RhdHVzOiBudWxsLCB0YXhDb21wbGlhbmNlU3RhdHVzOiBudWxsLCBpbnZvaWNlczogW10sIHRheFJldHVybnM6IG51bGwgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmZXRjaEZpc2NhbERhdGEgPSBhc3luYyAobGluaykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBsZXQgW3RheFN0YXR1cywgdGF4Q29tcGxpYW5jZVN0YXR1cywgaW52b2ljZXMsIHRheFJldHVybnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXgtc3RhdHVzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXgtY29tcGxpYW5jZS1zdGF0dXM/bGluaz0ke2xpbmt9YCksXG4gICAgICBmZXRjaGVyKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2ludm9pY2VzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90YXgtcmV0dXJucz9saW5rPSR7bGlua31gKSxcbiAgICAgXSk7XG4gICAgc2V0RGF0YSh7IFxuICAgICAgdGF4U3RhdHVzLFxuICAgICAgdGF4Q29tcGxpYW5jZVN0YXR1cyxcbiAgICAgIGludm9pY2VzLFxuICAgICAgdGF4UmV0dXJucyxcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgbGV0IHt0YXhTdGF0dXMsIHRheENvbXBsaWFuY2VTdGF0dXMsIGludm9pY2VzLCB0YXhSZXR1cm5zIH0gPSBkYXRhO1xuICBcbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZpc2NhbCBndWlkZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPiBTQVQgcmVwb3J0IGZvciBpbmRpdmlkdWFsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnIHN0eWxlcz17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnNlcnQgdGhlIEJlbHZvIGxpbmtfaWRcIiBcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAvPiBcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoRmlzY2FsRGF0YSh2YWx1ZSl9PkNyZWF0ZSByZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2xvYWRpbmcgJiYgPD4uLi5sb2FkaW5nPC8+fVxuXG4gICAgICAgIHsgdGF4U3RhdHVzICYmIHRheENvbXBsaWFuY2VTdGF0dXMgJiYgaW52b2ljZXMgJiYgdGF4UmV0dXJucyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPllvdSBzdWNjZXNzZnVsbHkgbG9hZGVkIHRoZSBhcHAhIE9wZW4gdGhlIGJyb3dzZXIgY29uc29sZSBhbmQgeW91IHdpbGwgc2VlIGFsbCB0aGUgZGF0YSBiZWluZyByZXRyaWV2ZWQgZnJvbSBCZWx2by48L3A+XG4gICAgICAgICAgICA8cD5JbiB0aGUgbmV4dCBzdGVwLCB5b3Ugd2lsbCBzZWUgdGhlIFRheCBzdGF0dXMgZGF0YSBhcHBlYXIgaGVyZSA6KSA8L3A+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNob3J0ZW4ge1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAxOXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzhhOWFhODtcbiAgICAgICAgfVxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogODAwcHggXG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHhcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIGgxLCBoMiB7XG4gICAgICAgICAgY29sb3I6ICMxNjFhMWQ7XG4gICAgICAgIH1cbiAgICAgICAgZW0ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgY29sb3I6ICMzODgyZmE7XG4gICAgICAgICAgZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmZmVkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2ViOGY7XG4gICAgICAgICAgcGFkZGluZzogMTVweFxuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsQXJpYWwsVmVyZGFuYTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiAjMTYxYTFkO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLCAucGxvdCB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/home/danos/ammper/test-1/tuto-360/pages/index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@observablehq/plot":
/*!*************************************!*\
  !*** external "@observablehq/plot" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@observablehq/plot");;

/***/ }),

/***/ "arquero":
/*!**************************!*\
  !*** external "arquero" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("arquero");;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("d3");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "plot-react":
/*!*****************************!*\
  !*** external "plot-react" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("plot-react");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJhcnF1ZXJvXCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJwbG90LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiZDMiLCJyZXF1aXJlIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRBdmVyYWdlIiwiYXJyIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwicCIsImMiLCJsZW5ndGgiLCJnZXRVbmlxdWVWYWx1ZXMiLCJTZXQiLCJIb21lIiwicHJvcHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInRheFN0YXR1cyIsInRheENvbXBsaWFuY2VTdGF0dXMiLCJpbnZvaWNlcyIsInRheFJldHVybnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRmlzY2FsRGF0YSIsImxpbmsiLCJQcm9taXNlIiwiYWxsIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsImUiLCJ0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LFFBQVEsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTbkIsS0FBVixDQUh6QjtBQUlFLGNBQUksRUFBQyxNQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBUSxpQkFBTyxFQUFFLE1BQU1XLGVBQWUsQ0FBQ1gsS0FBRCxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBWUdTLE9BQU8saUJBQUk7QUFBQTtBQUFBLHVCQVpkLEVBY0lKLFNBQVMsSUFBSUMsbUJBQWIsSUFBb0NDLFFBQXBDLElBQWdEQyxVQUFoRCxpQkFDQTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsc0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RkQsQzs7Ozs7Ozs7Ozs7QUNwSUQsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBQbG90IGZyb20gXCJAb2JzZXJ2YWJsZWhxL3Bsb3RcIjtcbmltcG9ydCB7UGxvdEZpZ3VyZX0gZnJvbSAncGxvdC1yZWFjdCdcbmltcG9ydCAqIGFzIGFxIGZyb20gJ2FycXVlcm8nO1xuY29uc3QgZDMgPSByZXF1aXJlKFwiZDNcIilcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuY29uc3QgZ2V0QXZlcmFnZSA9IGFyciA9PiBNYXRoLnJvdW5kKGFyci5yZWR1Y2UoICggcCwgYyApID0+IHAgKyBjLCAwICkgLyBhcnIubGVuZ3RoKTtcbmNvbnN0IGdldFVuaXF1ZVZhbHVlcyA9IGFyciA9PiBbLi4ubmV3IFNldChhcnIpXVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIFx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe3RheFN0YXR1czogbnVsbCwgdGF4Q29tcGxpYW5jZVN0YXR1czogbnVsbCwgaW52b2ljZXM6IFtdLCB0YXhSZXR1cm5zOiBudWxsIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hGaXNjYWxEYXRhID0gYXN5bmMgKGxpbmspID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IFt0YXhTdGF0dXMsIHRheENvbXBsaWFuY2VTdGF0dXMsIGludm9pY2VzLCB0YXhSZXR1cm5zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXN0YXR1cz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LWNvbXBsaWFuY2Utc3RhdHVzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbnZvaWNlcz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXJldHVybnM/bGluaz0ke2xpbmt9YCksXG4gICAgIF0pO1xuICAgIHNldERhdGEoeyBcbiAgICAgIHRheFN0YXR1cyxcbiAgICAgIHRheENvbXBsaWFuY2VTdGF0dXMsXG4gICAgICBpbnZvaWNlcyxcbiAgICAgIHRheFJldHVybnMsXG4gICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGxldCB7dGF4U3RhdHVzLCB0YXhDb21wbGlhbmNlU3RhdHVzLCBpbnZvaWNlcywgdGF4UmV0dXJucyB9ID0gZGF0YTtcbiAgXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GaXNjYWwgZ3VpZGU8L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMT4gU0FUIHJlcG9ydCBmb3IgaW5kaXZpZHVhbHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJyBzdHlsZXM9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgaW5zZXJ0IHRoZSBCZWx2byBsaW5rX2lkXCIgXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgLz4gXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmZXRjaEZpc2NhbERhdGEodmFsdWUpfT5DcmVhdGUgcmVwb3J0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtsb2FkaW5nICYmIDw+Li4ubG9hZGluZzwvPn1cblxuICAgICAgICB7IHRheFN0YXR1cyAmJiB0YXhDb21wbGlhbmNlU3RhdHVzICYmIGludm9pY2VzICYmIHRheFJldHVybnMgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5Zb3Ugc3VjY2Vzc2Z1bGx5IGxvYWRlZCB0aGUgYXBwISBPcGVuIHRoZSBicm93c2VyIGNvbnNvbGUgYW5kIHlvdSB3aWxsIHNlZSBhbGwgdGhlIGRhdGEgYmVpbmcgcmV0cmlldmVkIGZyb20gQmVsdm8uPC9wPlxuICAgICAgICAgICAgPHA+SW4gdGhlIG5leHQgc3RlcCwgeW91IHdpbGwgc2VlIHRoZSBUYXggc3RhdHVzIGRhdGEgYXBwZWFyIGhlcmUgOikgPC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zaG9ydGVuIHtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTlyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM4YTlhYTg7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDgwMHB4IFxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgICBoMSwgaDIge1xuICAgICAgICAgIGNvbG9yOiAjMTYxYTFkO1xuICAgICAgICB9XG4gICAgICAgIGVtIHtcbiAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgIGNvbG9yOiAjMzg4MmZhO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmZlZDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdlYjhmO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHhcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsQXJpYWwsVmVyZGFuYTtcbiAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsQXJpYWwsVmVyZGFuYTtcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB9XG4gICAgICAgIHByZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogIzE2MWExZDtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSwgLnBsb3Qge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICAgICAgfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG9ic2VydmFibGVocS9wbG90XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcnF1ZXJvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkM1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwbG90LXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9