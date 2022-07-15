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

const getComplianceCheckResult = outcome => {
  const statements = {
    'NEGATIVE': '❌ - Not complying to his tax obligations',
    'NO_OBLIGATIONS': '✅ Has no obligations',
    'POSITIVE': '✅ Complying to all tax obligations'
  };
  return statements[outcome];
};

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
  const payrollInvoices = invoices && invoices.filter(i => i.invoice_type == 'Nómina').sort((b, a) => new Date(b.invoice_date) - new Date(a.invoice_date));
  const totalEarningsPerYear = taxReturns && taxReturns.filter(tr => tr.hasOwnProperty('sueldos_salarios')).map(tr => tr.informacion_general.ejercicio + tr.servicios_profesionales.ingresos.total_ingresos);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3025447587" + " " + "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-3025447587",
        children: "Fiscal guide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",
        rel: "stylesheet",
        className: "jsx-3025447587"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-3025447587",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jsx-3025447587",
        children: " SAT report for individuals"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => fetchFiscalData(value),
          className: "jsx-3025447587",
          children: "Create report"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "...loading"
      }, void 0, false), taxStatus && taxComplianceStatus && invoices && taxReturns && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "jsx-3025447587",
          children: " Step #1 - Get to know the company "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "jsx-3025447587",
          children: " Taxpayer information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "jsx-3025447587",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Name: ", taxStatus.official_name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Location: ", taxStatus.address.locality, ", ", taxStatus.address.state]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Phone: ", taxStatus.tax_payer_information.phone]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Email: ", taxStatus.tax_payer_information.email]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Active taxpayer since: ", taxStatus.tax_payer_information.start_operations_date.substring(0, 10)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Economic activities: ", taxStatus.economic_activity.map(a => a.economic_activity).join(', ')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "jsx-3025447587",
          children: " Economic activites"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(plot_react__WEBPACK_IMPORTED_MODULE_5__.PlotFigure, {
          className: "plot",
          options: {
            marginLeft: 150,
            marks: [_observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.barX(taxStatus.economic_activity.map(a => ({
              activity: a.economic_activity,
              value: a.percentage
            })), {
              x: "value",
              y: "activity",
              fill: "#4E79A7"
            })],
            x: {
              label: "Percentage of income"
            },
            y: {
              label: "Business activity"
            },
            marginBottom: 40
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "jsx-3025447587",
          children: "Step #2 - Indicators of fraud & non-compliance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "jsx-3025447587",
          children: "Tax compliance status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "jsx-3025447587",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: getComplianceCheckResult(taxComplianceStatus.outcome)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "jsx-3025447587",
          children: "Step #3 - Identify the risk profile of the client"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "jsx-3025447587",
          children: "Historical payroll invoices"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "jsx-3025447587",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Average monthly paycheck: MXN ", getAverage(payrollInvoices.map(i => i.total_amount))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Number of employers during period: ", getUniqueValues(payrollInvoices.map(i => i.sender_id)).length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(plot_react__WEBPACK_IMPORTED_MODULE_5__.PlotFigure, {
          className: "plot",
          options: {
            marks: [_observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.barY(payrollInvoices, _observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.groupX({
              y: "sum"
            }, {
              x: d => new Date(d.invoice_date),
              y: "total_amount",
              thresholds: d3.timeMonth,
              fill: "sender_id"
            })), _observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.frame()],
            x: {
              tickRotate: -30,
              tickFormat: d => _observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.formatMonth()(d.getMonth()) + " " + d.getFullYear(),
              label: "Month of the year"
            },
            y: {
              label: "Income"
            },
            grid: true,
            marginBottom: 75,
            marginLeft: 100
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "jsx-3025447587",
          children: "Yearly total earnings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "jsx-3025447587",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "jsx-3025447587",
            children: ["Average yearly total earnings: MXN ", getAverage(totalEarningsPerYear)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(plot_react__WEBPACK_IMPORTED_MODULE_5__.PlotFigure, {
          className: "plot",
          options: {
            marks: [_observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.barY(taxReturns, _observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.groupX({
              y: "sum"
            }, {
              x: d => d.informacion_general.ejercicio,
              y: d => d.sueldos_salarios.ingreso_anual + d.servicios_profesionales.ingresos.total_ingresos,
              fill: "#4E79A7"
            })), _observablehq_plot__WEBPACK_IMPORTED_MODULE_4__.frame()],
            x: {
              tickRotate: -30,
              label: "Year"
            },
            y: {
              label: "Yearly income"
            },
            grid: true,
            marginBottom: 75,
            marginLeft: 100
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3776761162",
      children: ".shorten.jsx-3025447587{text-overflow:ellipsis;}.container.jsx-3025447587{min-height:100vh;padding:0 19rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#8a9aa8;}main.jsx-3025447587{width:800px;}p.jsx-3025447587{line-height:28px font-weight:400;}h1.jsx-3025447587,h2.jsx-3025447587{color:#161a1d;}em.jsx-3025447587{font-family:monospace;color:#3882fa;font-style:initial;}.search.jsx-3025447587{background-color:#f6ffed;border:1px solid #b7eb8f;padding:15px;}input.jsx-3025447587{font-family:\"Noto Sans\",Arial,Verdana;width:65%;}button.jsx-3025447587{font-family:\"Noto Sans\",Arial,Verdana;width:25%;}pre.jsx-3025447587{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rhbm9zL2FtbXBlci90ZXN0LTEvdHV0by0zNjAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk1rQixBQUlRLEFBRW9CLEFBVXBCLEFBR21CLEFBR0YsQUFHUSxBQUtHLEFBS2EsQUFJQSxBQUk3QixTQUNYLEdBNUJBLEVBT0EsR0FoQmtCLEtBbUJGLENBdEJoQixFQTJCMkIsUUF2QlosQUFZZixHQU9xQixFQVNULEFBSUEsVUFIWixBQUlBLEVBUkQsS0FMQyxRQUtBLDRDQXhCd0IsOEVBQ0MsbUdBQ0osNkZBQ0wsY0FDaEIiLCJmaWxlIjoiL2hvbWUvZGFub3MvYW1tcGVyL3Rlc3QtMS90dXRvLTM2MC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFBsb3QgZnJvbSBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiO1xuaW1wb3J0IHtQbG90RmlndXJlfSBmcm9tICdwbG90LXJlYWN0J1xuaW1wb3J0ICogYXMgYXEgZnJvbSAnYXJxdWVybyc7XG5jb25zdCBkMyA9IHJlcXVpcmUoXCJkM1wiKVxuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5jb25zdCBnZXRBdmVyYWdlID0gYXJyID0+IE1hdGgucm91bmQoYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGgpO1xuY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gYXJyID0+IFsuLi5uZXcgU2V0KGFycildXG5cbmNvbnN0IGdldENvbXBsaWFuY2VDaGVja1Jlc3VsdCA9IChvdXRjb21lKSA9PiB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSB7XG4gICAgJ05FR0FUSVZFJzogJ+KdjCAtIE5vdCBjb21wbHlpbmcgdG8gaGlzIHRheCBvYmxpZ2F0aW9ucycsXG4gICAgJ05PX09CTElHQVRJT05TJzogJ+KchSBIYXMgbm8gb2JsaWdhdGlvbnMnLFxuICAgICdQT1NJVElWRSc6ICfinIUgQ29tcGx5aW5nIHRvIGFsbCB0YXggb2JsaWdhdGlvbnMnXG4gIH1cbiAgcmV0dXJuIHN0YXRlbWVudHNbb3V0Y29tZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe3RheFN0YXR1czogbnVsbCwgdGF4Q29tcGxpYW5jZVN0YXR1czogbnVsbCwgaW52b2ljZXM6IFtdLCB0YXhSZXR1cm5zOiBudWxsIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hGaXNjYWxEYXRhID0gYXN5bmMgKGxpbmspID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IFt0YXhTdGF0dXMsIHRheENvbXBsaWFuY2VTdGF0dXMsIGludm9pY2VzLCB0YXhSZXR1cm5zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXN0YXR1cz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LWNvbXBsaWFuY2Utc3RhdHVzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbnZvaWNlcz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXJldHVybnM/bGluaz0ke2xpbmt9YCksXG4gICAgIF0pO1xuICAgIHNldERhdGEoeyBcbiAgICAgIHRheFN0YXR1cyxcbiAgICAgIHRheENvbXBsaWFuY2VTdGF0dXMsXG4gICAgICBpbnZvaWNlcyxcbiAgICAgIHRheFJldHVybnMsXG4gICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGxldCB7dGF4U3RhdHVzLCB0YXhDb21wbGlhbmNlU3RhdHVzLCBpbnZvaWNlcywgdGF4UmV0dXJucyB9ID0gZGF0YTtcblxuICBjb25zdCBwYXlyb2xsSW52b2ljZXMgPSBpbnZvaWNlcyAmJiBpbnZvaWNlcy5maWx0ZXIoaSA9PiBpLmludm9pY2VfdHlwZSA9PSAnTsOzbWluYScpLnNvcnQoKGIsYSkgPT4gbmV3IERhdGUoYi5pbnZvaWNlX2RhdGUpIC0gbmV3IERhdGUoYS5pbnZvaWNlX2RhdGUpKVxuXG4gIGNvbnN0IHRvdGFsRWFybmluZ3NQZXJZZWFyID0gdGF4UmV0dXJucyAmJiB0YXhSZXR1cm5zLmZpbHRlcih0ciA9PiB0ci5oYXNPd25Qcm9wZXJ0eSgnc3VlbGRvc19zYWxhcmlvcycpKS5tYXAodHIgPT4gdHIuaW5mb3JtYWNpb25fZ2VuZXJhbC5lamVyY2ljaW8gKyB0ci5zZXJ2aWNpb3NfcHJvZmVzaW9uYWxlcy5pbmdyZXNvcy50b3RhbF9pbmdyZXNvcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZpc2NhbCBndWlkZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPiBTQVQgcmVwb3J0IGZvciBpbmRpdmlkdWFsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnIHN0eWxlcz17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnNlcnQgdGhlIEJlbHZvIGxpbmtfaWRcIiBcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAvPiBcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoRmlzY2FsRGF0YSh2YWx1ZSl9PkNyZWF0ZSByZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2xvYWRpbmcgJiYgPD4uLi5sb2FkaW5nPC8+fVxuXG4gICAgICAgIHsgdGF4U3RhdHVzICYmIHRheENvbXBsaWFuY2VTdGF0dXMgJiYgaW52b2ljZXMgJiYgdGF4UmV0dXJucyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMj4gU3RlcCAjMSAtIEdldCB0byBrbm93IHRoZSBjb21wYW55IDwvaDI+XG4gICAgICAgICAgICA8aDM+IFRheHBheWVyIGluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBOYW1lOiB7dGF4U3RhdHVzLm9mZmljaWFsX25hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBMb2NhdGlvbjoge3RheFN0YXR1cy5hZGRyZXNzLmxvY2FsaXR5fSwge3RheFN0YXR1cy5hZGRyZXNzLnN0YXRlfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgUGhvbmU6IHt0YXhTdGF0dXMudGF4X3BheWVyX2luZm9ybWF0aW9uLnBob25lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgRW1haWw6IHt0YXhTdGF0dXMudGF4X3BheWVyX2luZm9ybWF0aW9uLmVtYWlsfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgQWN0aXZlIHRheHBheWVyIHNpbmNlOiB7dGF4U3RhdHVzLnRheF9wYXllcl9pbmZvcm1hdGlvbi5zdGFydF9vcGVyYXRpb25zX2RhdGUuc3Vic3RyaW5nKDAsMTApfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgRWNvbm9taWMgYWN0aXZpdGllczoge3RheFN0YXR1cy5lY29ub21pY19hY3Rpdml0eS5tYXAoYSA9PiBhLmVjb25vbWljX2FjdGl2aXR5KS5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8aDM+IEVjb25vbWljIGFjdGl2aXRlczwvaDM+ICBcbiAgICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwbG90JyBcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDoxNTAsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgUGxvdFxuICAgICAgICAgICAgICAgICAgICAgICAuYmFyWChcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXhTdGF0dXMuZWNvbm9taWNfYWN0aXZpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+ICh7YWN0aXZpdHk6IGEuZWNvbm9taWNfYWN0aXZpdHksIHZhbHVlOiBhLnBlcmNlbnRhZ2V9KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCJ2YWx1ZVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcImFjdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjNEU3OUE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBlcmNlbnRhZ2Ugb2YgaW5jb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCdXNpbmVzcyBhY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwLCBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxoMj5TdGVwICMyIC0gSW5kaWNhdG9ycyBvZiBmcmF1ZCAmIG5vbi1jb21wbGlhbmNlPC9oMj5cbiAgICAgICAgICAgIDxoMz5UYXggY29tcGxpYW5jZSBzdGF0dXM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAge2dldENvbXBsaWFuY2VDaGVja1Jlc3VsdCh0YXhDb21wbGlhbmNlU3RhdHVzLm91dGNvbWUpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGgyPlN0ZXAgIzMgLSBJZGVudGlmeSB0aGUgcmlzayBwcm9maWxlIG9mIHRoZSBjbGllbnQ8L2gyPlxuICAgICAgICAgICAgPGgzPkhpc3RvcmljYWwgcGF5cm9sbCBpbnZvaWNlczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBBdmVyYWdlIG1vbnRobHkgcGF5Y2hlY2s6IE1YTiB7Z2V0QXZlcmFnZShwYXlyb2xsSW52b2ljZXMubWFwKGkgPT4gaS50b3RhbF9hbW91bnQpKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE51bWJlciBvZiBlbXBsb3llcnMgZHVyaW5nIHBlcmlvZDoge2dldFVuaXF1ZVZhbHVlcyhwYXlyb2xsSW52b2ljZXMubWFwKGkgPT4gaS5zZW5kZXJfaWQpKS5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGxvdCcgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgIFBsb3QuYmFyWShwYXlyb2xsSW52b2ljZXMsIFxuICAgICAgICAgICAgICAgICAgICAgIFBsb3QuZ3JvdXBYKHt5OiBcInN1bVwiLCB9LCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZCA9PiBuZXcgRGF0ZShkLmludm9pY2VfZGF0ZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCJ0b3RhbF9hbW91bnRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRzOiBkMy50aW1lTW9udGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJzZW5kZXJfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBQbG90LmZyYW1lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgeDogeyBcbiAgICAgICAgICAgICAgICAgICAgdGlja1JvdGF0ZTogLTMwLCBcbiAgICAgICAgICAgICAgICAgICAgdGlja0Zvcm1hdDogZCA9PiBQbG90LmZvcm1hdE1vbnRoKCkoZC5nZXRNb250aCgpKSArIFwiIFwiICsgZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNb250aCBvZiB0aGUgeWVhclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSW5jb21lXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNzUsIFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMz5ZZWFybHkgdG90YWwgZWFybmluZ3M8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQXZlcmFnZSB5ZWFybHkgdG90YWwgZWFybmluZ3M6IE1YTiB7Z2V0QXZlcmFnZSh0b3RhbEVhcm5pbmdzUGVyWWVhcil9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGxvdCcgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgIFBsb3QuYmFyWSh0YXhSZXR1cm5zLCBcbiAgICAgICAgICAgICAgICAgICAgICBQbG90Lmdyb3VwWCh7eTogXCJzdW1cIiwgfSwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGQgPT4gZC5pbmZvcm1hY2lvbl9nZW5lcmFsLmVqZXJjaWNpbywgXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAoZCkgPT4gZC5zdWVsZG9zX3NhbGFyaW9zLmluZ3Jlc29fYW51YWwgKyBkLnNlcnZpY2lvc19wcm9mZXNpb25hbGVzLmluZ3Jlc29zLnRvdGFsX2luZ3Jlc29zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzRFNzlBN1wiXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUGxvdC5mcmFtZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHg6IHsgXG4gICAgICAgICAgICAgICAgICAgIHRpY2tSb3RhdGU6IC0zMCwgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlllYXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWWVhcmx5IGluY29tZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNzUsIFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2hvcnRlbiB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE5cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjOGE5YWE4O1xuICAgICAgICB9XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA4MDBweCBcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDEsIGgyIHtcbiAgICAgICAgICBjb2xvcjogIzE2MWExZDtcbiAgICAgICAgfVxuICAgICAgICBlbSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBjb2xvcjogIzM4ODJmYTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZmZWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3ZWI4ZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6ICMxNjFhMWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUsIC5wbG90IHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXX0= */\n/*@ sourceURL=/home/danos/ammper/test-1/tuto-360/pages/index.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1191650112",
      children: "html,body{font-family:\"Noto Sans\",Arial,Verdana;font-weight:400;color:#161a1d;}table,.plot{color:black;font-size:12px;}table{border-color:grey;}td{border:1px solid #eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rhbm9zL2FtbXBlci90ZXN0LTEvdHV0by0zNjAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVB5QixBQUlpRCxBQUsxQixBQUlNLEFBR0ksWUFOUCxNQUlqQixJQUdBLEtBTkEsV0FOa0IsZ0JBQ0YsY0FDaEIiLCJmaWxlIjoiL2hvbWUvZGFub3MvYW1tcGVyL3Rlc3QtMS90dXRvLTM2MC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFBsb3QgZnJvbSBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiO1xuaW1wb3J0IHtQbG90RmlndXJlfSBmcm9tICdwbG90LXJlYWN0J1xuaW1wb3J0ICogYXMgYXEgZnJvbSAnYXJxdWVybyc7XG5jb25zdCBkMyA9IHJlcXVpcmUoXCJkM1wiKVxuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5jb25zdCBnZXRBdmVyYWdlID0gYXJyID0+IE1hdGgucm91bmQoYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGgpO1xuY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gYXJyID0+IFsuLi5uZXcgU2V0KGFycildXG5cbmNvbnN0IGdldENvbXBsaWFuY2VDaGVja1Jlc3VsdCA9IChvdXRjb21lKSA9PiB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSB7XG4gICAgJ05FR0FUSVZFJzogJ+KdjCAtIE5vdCBjb21wbHlpbmcgdG8gaGlzIHRheCBvYmxpZ2F0aW9ucycsXG4gICAgJ05PX09CTElHQVRJT05TJzogJ+KchSBIYXMgbm8gb2JsaWdhdGlvbnMnLFxuICAgICdQT1NJVElWRSc6ICfinIUgQ29tcGx5aW5nIHRvIGFsbCB0YXggb2JsaWdhdGlvbnMnXG4gIH1cbiAgcmV0dXJuIHN0YXRlbWVudHNbb3V0Y29tZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe3RheFN0YXR1czogbnVsbCwgdGF4Q29tcGxpYW5jZVN0YXR1czogbnVsbCwgaW52b2ljZXM6IFtdLCB0YXhSZXR1cm5zOiBudWxsIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hGaXNjYWxEYXRhID0gYXN5bmMgKGxpbmspID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IFt0YXhTdGF0dXMsIHRheENvbXBsaWFuY2VTdGF0dXMsIGludm9pY2VzLCB0YXhSZXR1cm5zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXN0YXR1cz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LWNvbXBsaWFuY2Utc3RhdHVzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbnZvaWNlcz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXJldHVybnM/bGluaz0ke2xpbmt9YCksXG4gICAgIF0pO1xuICAgIHNldERhdGEoeyBcbiAgICAgIHRheFN0YXR1cyxcbiAgICAgIHRheENvbXBsaWFuY2VTdGF0dXMsXG4gICAgICBpbnZvaWNlcyxcbiAgICAgIHRheFJldHVybnMsXG4gICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGxldCB7dGF4U3RhdHVzLCB0YXhDb21wbGlhbmNlU3RhdHVzLCBpbnZvaWNlcywgdGF4UmV0dXJucyB9ID0gZGF0YTtcblxuICBjb25zdCBwYXlyb2xsSW52b2ljZXMgPSBpbnZvaWNlcyAmJiBpbnZvaWNlcy5maWx0ZXIoaSA9PiBpLmludm9pY2VfdHlwZSA9PSAnTsOzbWluYScpLnNvcnQoKGIsYSkgPT4gbmV3IERhdGUoYi5pbnZvaWNlX2RhdGUpIC0gbmV3IERhdGUoYS5pbnZvaWNlX2RhdGUpKVxuXG4gIGNvbnN0IHRvdGFsRWFybmluZ3NQZXJZZWFyID0gdGF4UmV0dXJucyAmJiB0YXhSZXR1cm5zLmZpbHRlcih0ciA9PiB0ci5oYXNPd25Qcm9wZXJ0eSgnc3VlbGRvc19zYWxhcmlvcycpKS5tYXAodHIgPT4gdHIuaW5mb3JtYWNpb25fZ2VuZXJhbC5lamVyY2ljaW8gKyB0ci5zZXJ2aWNpb3NfcHJvZmVzaW9uYWxlcy5pbmdyZXNvcy50b3RhbF9pbmdyZXNvcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZpc2NhbCBndWlkZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPiBTQVQgcmVwb3J0IGZvciBpbmRpdmlkdWFsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnIHN0eWxlcz17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnNlcnQgdGhlIEJlbHZvIGxpbmtfaWRcIiBcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAvPiBcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoRmlzY2FsRGF0YSh2YWx1ZSl9PkNyZWF0ZSByZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2xvYWRpbmcgJiYgPD4uLi5sb2FkaW5nPC8+fVxuXG4gICAgICAgIHsgdGF4U3RhdHVzICYmIHRheENvbXBsaWFuY2VTdGF0dXMgJiYgaW52b2ljZXMgJiYgdGF4UmV0dXJucyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMj4gU3RlcCAjMSAtIEdldCB0byBrbm93IHRoZSBjb21wYW55IDwvaDI+XG4gICAgICAgICAgICA8aDM+IFRheHBheWVyIGluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBOYW1lOiB7dGF4U3RhdHVzLm9mZmljaWFsX25hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBMb2NhdGlvbjoge3RheFN0YXR1cy5hZGRyZXNzLmxvY2FsaXR5fSwge3RheFN0YXR1cy5hZGRyZXNzLnN0YXRlfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgUGhvbmU6IHt0YXhTdGF0dXMudGF4X3BheWVyX2luZm9ybWF0aW9uLnBob25lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgRW1haWw6IHt0YXhTdGF0dXMudGF4X3BheWVyX2luZm9ybWF0aW9uLmVtYWlsfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgQWN0aXZlIHRheHBheWVyIHNpbmNlOiB7dGF4U3RhdHVzLnRheF9wYXllcl9pbmZvcm1hdGlvbi5zdGFydF9vcGVyYXRpb25zX2RhdGUuc3Vic3RyaW5nKDAsMTApfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgRWNvbm9taWMgYWN0aXZpdGllczoge3RheFN0YXR1cy5lY29ub21pY19hY3Rpdml0eS5tYXAoYSA9PiBhLmVjb25vbWljX2FjdGl2aXR5KS5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8aDM+IEVjb25vbWljIGFjdGl2aXRlczwvaDM+ICBcbiAgICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwbG90JyBcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDoxNTAsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgUGxvdFxuICAgICAgICAgICAgICAgICAgICAgICAuYmFyWChcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXhTdGF0dXMuZWNvbm9taWNfYWN0aXZpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+ICh7YWN0aXZpdHk6IGEuZWNvbm9taWNfYWN0aXZpdHksIHZhbHVlOiBhLnBlcmNlbnRhZ2V9KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCJ2YWx1ZVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcImFjdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjNEU3OUE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBlcmNlbnRhZ2Ugb2YgaW5jb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCdXNpbmVzcyBhY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwLCBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxoMj5TdGVwICMyIC0gSW5kaWNhdG9ycyBvZiBmcmF1ZCAmIG5vbi1jb21wbGlhbmNlPC9oMj5cbiAgICAgICAgICAgIDxoMz5UYXggY29tcGxpYW5jZSBzdGF0dXM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAge2dldENvbXBsaWFuY2VDaGVja1Jlc3VsdCh0YXhDb21wbGlhbmNlU3RhdHVzLm91dGNvbWUpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGgyPlN0ZXAgIzMgLSBJZGVudGlmeSB0aGUgcmlzayBwcm9maWxlIG9mIHRoZSBjbGllbnQ8L2gyPlxuICAgICAgICAgICAgPGgzPkhpc3RvcmljYWwgcGF5cm9sbCBpbnZvaWNlczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBBdmVyYWdlIG1vbnRobHkgcGF5Y2hlY2s6IE1YTiB7Z2V0QXZlcmFnZShwYXlyb2xsSW52b2ljZXMubWFwKGkgPT4gaS50b3RhbF9hbW91bnQpKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE51bWJlciBvZiBlbXBsb3llcnMgZHVyaW5nIHBlcmlvZDoge2dldFVuaXF1ZVZhbHVlcyhwYXlyb2xsSW52b2ljZXMubWFwKGkgPT4gaS5zZW5kZXJfaWQpKS5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGxvdCcgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgIFBsb3QuYmFyWShwYXlyb2xsSW52b2ljZXMsIFxuICAgICAgICAgICAgICAgICAgICAgIFBsb3QuZ3JvdXBYKHt5OiBcInN1bVwiLCB9LCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZCA9PiBuZXcgRGF0ZShkLmludm9pY2VfZGF0ZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCJ0b3RhbF9hbW91bnRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRzOiBkMy50aW1lTW9udGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJzZW5kZXJfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBQbG90LmZyYW1lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgeDogeyBcbiAgICAgICAgICAgICAgICAgICAgdGlja1JvdGF0ZTogLTMwLCBcbiAgICAgICAgICAgICAgICAgICAgdGlja0Zvcm1hdDogZCA9PiBQbG90LmZvcm1hdE1vbnRoKCkoZC5nZXRNb250aCgpKSArIFwiIFwiICsgZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNb250aCBvZiB0aGUgeWVhclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSW5jb21lXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNzUsIFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMz5ZZWFybHkgdG90YWwgZWFybmluZ3M8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQXZlcmFnZSB5ZWFybHkgdG90YWwgZWFybmluZ3M6IE1YTiB7Z2V0QXZlcmFnZSh0b3RhbEVhcm5pbmdzUGVyWWVhcil9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGxvdCcgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgIFBsb3QuYmFyWSh0YXhSZXR1cm5zLCBcbiAgICAgICAgICAgICAgICAgICAgICBQbG90Lmdyb3VwWCh7eTogXCJzdW1cIiwgfSwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGQgPT4gZC5pbmZvcm1hY2lvbl9nZW5lcmFsLmVqZXJjaWNpbywgXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAoZCkgPT4gZC5zdWVsZG9zX3NhbGFyaW9zLmluZ3Jlc29fYW51YWwgKyBkLnNlcnZpY2lvc19wcm9mZXNpb25hbGVzLmluZ3Jlc29zLnRvdGFsX2luZ3Jlc29zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzRFNzlBN1wiXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUGxvdC5mcmFtZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHg6IHsgXG4gICAgICAgICAgICAgICAgICAgIHRpY2tSb3RhdGU6IC0zMCwgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlllYXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWWVhcmx5IGluY29tZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNzUsIFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2hvcnRlbiB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE5cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjOGE5YWE4O1xuICAgICAgICB9XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA4MDBweCBcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDEsIGgyIHtcbiAgICAgICAgICBjb2xvcjogIzE2MWExZDtcbiAgICAgICAgfVxuICAgICAgICBlbSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBjb2xvcjogIzM4ODJmYTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZmZWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3ZWI4ZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6ICMxNjFhMWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUsIC5wbG90IHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXX0= */\n/*@ sourceURL=/home/danos/ammper/test-1/tuto-360/pages/index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWx2by1maXNjYWwtZ3VpZGVzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJhcnF1ZXJvXCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJwbG90LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVsdm8tZmlzY2FsLWd1aWRlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2JlbHZvLWZpc2NhbC1ndWlkZXMvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiZDMiLCJyZXF1aXJlIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRBdmVyYWdlIiwiYXJyIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwicCIsImMiLCJsZW5ndGgiLCJnZXRVbmlxdWVWYWx1ZXMiLCJTZXQiLCJnZXRDb21wbGlhbmNlQ2hlY2tSZXN1bHQiLCJvdXRjb21lIiwic3RhdGVtZW50cyIsIkhvbWUiLCJwcm9wcyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidGF4U3RhdHVzIiwidGF4Q29tcGxpYW5jZVN0YXR1cyIsImludm9pY2VzIiwidGF4UmV0dXJucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hGaXNjYWxEYXRhIiwibGluayIsIlByb21pc2UiLCJhbGwiLCJwYXlyb2xsSW52b2ljZXMiLCJmaWx0ZXIiLCJpIiwiaW52b2ljZV90eXBlIiwic29ydCIsImIiLCJhIiwiRGF0ZSIsImludm9pY2VfZGF0ZSIsInRvdGFsRWFybmluZ3NQZXJZZWFyIiwidHIiLCJoYXNPd25Qcm9wZXJ0eSIsIm1hcCIsImluZm9ybWFjaW9uX2dlbmVyYWwiLCJlamVyY2ljaW8iLCJzZXJ2aWNpb3NfcHJvZmVzaW9uYWxlcyIsImluZ3Jlc29zIiwidG90YWxfaW5ncmVzb3MiLCJ0ZXh0QWxpZ24iLCJlIiwidGFyZ2V0Iiwib2ZmaWNpYWxfbmFtZSIsImFkZHJlc3MiLCJsb2NhbGl0eSIsInN0YXRlIiwidGF4X3BheWVyX2luZm9ybWF0aW9uIiwicGhvbmUiLCJlbWFpbCIsInN0YXJ0X29wZXJhdGlvbnNfZGF0ZSIsInN1YnN0cmluZyIsImVjb25vbWljX2FjdGl2aXR5Iiwiam9pbiIsIm1hcmdpbkxlZnQiLCJtYXJrcyIsIlBsb3QiLCJhY3Rpdml0eSIsInBlcmNlbnRhZ2UiLCJ4IiwieSIsImZpbGwiLCJsYWJlbCIsIm1hcmdpbkJvdHRvbSIsInRvdGFsX2Ftb3VudCIsInNlbmRlcl9pZCIsImQiLCJ0aHJlc2hvbGRzIiwidGltZU1vbnRoIiwidGlja1JvdGF0ZSIsInRpY2tGb3JtYXQiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ3JpZCIsInN1ZWxkb3Nfc2FsYXJpb3MiLCJpbmdyZXNvX2FudWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBRUEsTUFBTUMsT0FBTyxHQUFJQyxHQUFELElBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBaUJDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQXpCLENBQXpCOztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsR0FBRyxJQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsR0FBRyxDQUFDRyxNQUFKLENBQVksQ0FBRUMsQ0FBRixFQUFLQyxDQUFMLEtBQVlELENBQUMsR0FBR0MsQ0FBNUIsRUFBK0IsQ0FBL0IsSUFBcUNMLEdBQUcsQ0FBQ00sTUFBcEQsQ0FBMUI7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHUCxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUlRLEdBQUosQ0FBUVIsR0FBUixDQUFKLENBQS9COztBQUVBLE1BQU1TLHdCQUF3QixHQUFJQyxPQUFELElBQWE7QUFDNUMsUUFBTUMsVUFBVSxHQUFHO0FBQ2pCLGdCQUFZLDBDQURLO0FBRWpCLHNCQUFrQixzQkFGRDtBQUdqQixnQkFBWTtBQUhLLEdBQW5CO0FBS0EsU0FBT0EsVUFBVSxDQUFDRCxPQUFELENBQWpCO0FBQ0QsQ0FQRDs7QUFTZSxTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDakMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDRCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLCtDQUFRLENBQUM7QUFBQ0csYUFBUyxFQUFFLElBQVo7QUFBa0JDLHVCQUFtQixFQUFFLElBQXZDO0FBQTZDQyxZQUFRLEVBQUUsRUFBdkQ7QUFBMkRDLGNBQVUsRUFBRTtBQUF2RSxHQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBRUEsUUFBTVMsZUFBZSxHQUFHLE1BQU9DLElBQVAsSUFBZ0I7QUFDdENGLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxRQUFJLENBQUNMLFNBQUQsRUFBWUMsbUJBQVosRUFBaUNDLFFBQWpDLEVBQTJDQyxVQUEzQyxJQUF5RCxNQUFNSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUM3RW5DLE9BQU8sQ0FBRSw2Q0FBNENpQyxJQUFLLEVBQW5ELENBRHNFLEVBRTdFakMsT0FBTyxDQUFFLHdEQUF1RGlDLElBQUssRUFBOUQsQ0FGc0UsRUFHN0VqQyxPQUFPLENBQUUsMkNBQTBDaUMsSUFBSyxFQUFqRCxDQUhzRSxFQUk3RWpDLE9BQU8sQ0FBRSw4Q0FBNkNpQyxJQUFLLEVBQXBELENBSnNFLENBQVosQ0FBbkU7QUFNQVIsV0FBTyxDQUFDO0FBQ05DLGVBRE07QUFFTkMseUJBRk07QUFHTkMsY0FITTtBQUlOQztBQUpNLEtBQUQsQ0FBUDtBQU1BRSxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FmRDs7QUFpQkEsTUFBSTtBQUFDTCxhQUFEO0FBQVlDLHVCQUFaO0FBQWlDQyxZQUFqQztBQUEyQ0M7QUFBM0MsTUFBMERMLElBQTlEO0FBRUEsUUFBTVksZUFBZSxHQUFHUixRQUFRLElBQUlBLFFBQVEsQ0FBQ1MsTUFBVCxDQUFnQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFlBQUYsSUFBa0IsUUFBdkMsRUFBaURDLElBQWpELENBQXNELENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFTLElBQUlDLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxZQUFYLElBQTJCLElBQUlELElBQUosQ0FBU0QsQ0FBQyxDQUFDRSxZQUFYLENBQTFGLENBQXBDO0FBRUEsUUFBTUMsb0JBQW9CLEdBQUdoQixVQUFVLElBQUlBLFVBQVUsQ0FBQ1EsTUFBWCxDQUFrQlMsRUFBRSxJQUFJQSxFQUFFLENBQUNDLGNBQUgsQ0FBa0Isa0JBQWxCLENBQXhCLEVBQStEQyxHQUEvRCxDQUFtRUYsRUFBRSxJQUFJQSxFQUFFLENBQUNHLG1CQUFILENBQXVCQyxTQUF2QixHQUFtQ0osRUFBRSxDQUFDSyx1QkFBSCxDQUEyQkMsUUFBM0IsQ0FBb0NDLGNBQWhKLENBQTNDO0FBRUEsc0JBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyw4RUFBWDtBQUEwRixXQUFHLEVBQUMsWUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUE7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUF3QixjQUFNLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaLFNBQWhDO0FBQUEsNENBQWUsUUFBZjtBQUFBLGdDQUNFO0FBQ0UscUJBQVcsRUFBQyxpQ0FEZDtBQUVFLGVBQUssRUFBRWpDLEtBRlQ7QUFHRSxrQkFBUSxFQUFFa0MsQ0FBQyxJQUFJakMsUUFBUSxDQUFDaUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNuQyxLQUFWLENBSHpCO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFRLGlCQUFPLEVBQUUsTUFBTVcsZUFBZSxDQUFDWCxLQUFELENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFZR1MsT0FBTyxpQkFBSTtBQUFBO0FBQUEsdUJBWmQsRUFjSUosU0FBUyxJQUFJQyxtQkFBYixJQUFvQ0MsUUFBcEMsSUFBZ0RDLFVBQWhELGlCQUNBO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBO0FBQUEsa0NBQ0k7QUFBQTtBQUFBLGlDQUNTSCxTQUFTLENBQUMrQixhQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFBO0FBQUEscUNBQ2EvQixTQUFTLENBQUNnQyxPQUFWLENBQWtCQyxRQUQvQixRQUMyQ2pDLFNBQVMsQ0FBQ2dDLE9BQVYsQ0FBa0JFLEtBRDdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQU9JO0FBQUE7QUFBQSxrQ0FDVWxDLFNBQVMsQ0FBQ21DLHFCQUFWLENBQWdDQyxLQUQxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFVSTtBQUFBO0FBQUEsa0NBQ1VwQyxTQUFTLENBQUNtQyxxQkFBVixDQUFnQ0UsS0FEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKLGVBYUk7QUFBQTtBQUFBLGtEQUMwQnJDLFNBQVMsQ0FBQ21DLHFCQUFWLENBQWdDRyxxQkFBaEMsQ0FBc0RDLFNBQXRELENBQWdFLENBQWhFLEVBQWtFLEVBQWxFLENBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiSixlQWdCSTtBQUFBO0FBQUEsZ0RBQ3dCdkMsU0FBUyxDQUFDd0MsaUJBQVYsQ0FBNEJsQixHQUE1QixDQUFnQ04sQ0FBQyxJQUFJQSxDQUFDLENBQUN3QixpQkFBdkMsRUFBMERDLElBQTFELENBQStELElBQS9ELENBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJGLGVBeUJJLDhEQUFDLGtEQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsaUJBQU8sRUFDTDtBQUNFQyxzQkFBVSxFQUFDLEdBRGI7QUFFRUMsaUJBQUssRUFBRSxDQUNMQyxvREFBQSxDQUVHNUMsU0FBUyxDQUFDd0MsaUJBQVYsQ0FDRWxCLEdBREYsQ0FDTU4sQ0FBQyxLQUFLO0FBQUM2QixzQkFBUSxFQUFFN0IsQ0FBQyxDQUFDd0IsaUJBQWI7QUFBZ0M3QyxtQkFBSyxFQUFFcUIsQ0FBQyxDQUFDOEI7QUFBekMsYUFBTCxDQURQLENBRkgsRUFJSTtBQUNFQyxlQUFDLEVBQUUsT0FETDtBQUVFQyxlQUFDLEVBQUUsVUFGTDtBQUdFQyxrQkFBSSxFQUFFO0FBSFIsYUFKSixDQURLLENBRlQ7QUFhRUYsYUFBQyxFQUFFO0FBQ0RHLG1CQUFLLEVBQUU7QUFETixhQWJMO0FBZ0JFRixhQUFDLEVBQUU7QUFDREUsbUJBQUssRUFBRTtBQUROLGFBaEJMO0FBbUJFQyx3QkFBWSxFQUFFO0FBbkJoQjtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJKLGVBb0RFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGLGVBcURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRGLGVBc0RFO0FBQUE7QUFBQSxpQ0FDRTtBQUFBO0FBQUEsc0JBQ0c3RCx3QkFBd0IsQ0FBQ1csbUJBQW1CLENBQUNWLE9BQXJCO0FBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRERixlQTRERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVERixlQTZERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdERixlQThERTtBQUFBO0FBQUEsa0NBQ0U7QUFBQTtBQUFBLHlEQUNpQ1gsVUFBVSxDQUFDOEIsZUFBZSxDQUFDWSxHQUFoQixDQUFvQlYsQ0FBQyxJQUFJQSxDQUFDLENBQUN3QyxZQUEzQixDQUFELENBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUE7QUFBQSw4REFDc0NoRSxlQUFlLENBQUNzQixlQUFlLENBQUNZLEdBQWhCLENBQW9CVixDQUFDLElBQUlBLENBQUMsQ0FBQ3lDLFNBQTNCLENBQUQsQ0FBZixDQUF1RGxFLE1BRDdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOURGLGVBc0VFLDhEQUFDLGtEQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsaUJBQU8sRUFDTDtBQUNFd0QsaUJBQUssRUFBRSxDQUNMQyxvREFBQSxDQUFVbEMsZUFBVixFQUNFa0Msc0RBQUEsQ0FBWTtBQUFDSSxlQUFDLEVBQUU7QUFBSixhQUFaLEVBQTBCO0FBQ3hCRCxlQUFDLEVBQUVPLENBQUMsSUFBSSxJQUFJckMsSUFBSixDQUFTcUMsQ0FBQyxDQUFDcEMsWUFBWCxDQURnQjtBQUV4QjhCLGVBQUMsRUFBRSxjQUZxQjtBQUd4Qk8sd0JBQVUsRUFBRW5GLEVBQUUsQ0FBQ29GLFNBSFM7QUFJeEJQLGtCQUFJLEVBQUU7QUFKa0IsYUFBMUIsQ0FERixDQURLLEVBUUxMLHFEQUFBLEVBUkssQ0FEVDtBQVdFRyxhQUFDLEVBQUU7QUFDRFUsd0JBQVUsRUFBRSxDQUFDLEVBRFo7QUFFREMsd0JBQVUsRUFBRUosQ0FBQyxJQUFJViwyREFBQSxHQUFtQlUsQ0FBQyxDQUFDSyxRQUFGLEVBQW5CLElBQW1DLEdBQW5DLEdBQXlDTCxDQUFDLENBQUNNLFdBQUYsRUFGekQ7QUFHRFYsbUJBQUssRUFBRTtBQUhOLGFBWEw7QUFnQkVGLGFBQUMsRUFBRTtBQUNERSxtQkFBSyxFQUFFO0FBRE4sYUFoQkw7QUFtQkVXLGdCQUFJLEVBQUUsSUFuQlI7QUFvQkVWLHdCQUFZLEVBQUUsRUFwQmhCO0FBcUJFVCxzQkFBVSxFQUFFO0FBckJkO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0RUYsZUFrR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsR0YsZUFtR0U7QUFBQTtBQUFBLGlDQUNFO0FBQUE7QUFBQSw4REFDc0M5RCxVQUFVLENBQUN1QyxvQkFBRCxDQURoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5HRixlQXdHRSw4REFBQyxrREFBRDtBQUNFLG1CQUFTLEVBQUMsTUFEWjtBQUVFLGlCQUFPLEVBQ0w7QUFDRXdCLGlCQUFLLEVBQUUsQ0FDTEMsb0RBQUEsQ0FBVXpDLFVBQVYsRUFDRXlDLHNEQUFBLENBQVk7QUFBQ0ksZUFBQyxFQUFFO0FBQUosYUFBWixFQUEwQjtBQUN4QkQsZUFBQyxFQUFFTyxDQUFDLElBQUlBLENBQUMsQ0FBQy9CLG1CQUFGLENBQXNCQyxTQUROO0FBRXhCd0IsZUFBQyxFQUFHTSxDQUFELElBQU9BLENBQUMsQ0FBQ1EsZ0JBQUYsQ0FBbUJDLGFBQW5CLEdBQW1DVCxDQUFDLENBQUM3Qix1QkFBRixDQUEwQkMsUUFBMUIsQ0FBbUNDLGNBRnhEO0FBR3hCc0Isa0JBQUksRUFBRTtBQUhrQixhQUExQixDQURGLENBREssRUFPTEwscURBQUEsRUFQSyxDQURUO0FBVUVHLGFBQUMsRUFBRTtBQUNEVSx3QkFBVSxFQUFFLENBQUMsRUFEWjtBQUVEUCxtQkFBSyxFQUFFO0FBRk4sYUFWTDtBQWNFRixhQUFDLEVBQUU7QUFDREUsbUJBQUssRUFBRTtBQUROLGFBZEw7QUFpQkVXLGdCQUFJLEVBQUUsSUFqQlI7QUFrQkVWLHdCQUFZLEVBQUUsRUFsQmhCO0FBbUJFVCxzQkFBVSxFQUFFO0FBbkJkO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4R0Y7QUFBQSxzQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZORCxDOzs7Ozs7Ozs7OztBQzdRRCxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFBsb3QgZnJvbSBcIkBvYnNlcnZhYmxlaHEvcGxvdFwiO1xuaW1wb3J0IHtQbG90RmlndXJlfSBmcm9tICdwbG90LXJlYWN0J1xuaW1wb3J0ICogYXMgYXEgZnJvbSAnYXJxdWVybyc7XG5jb25zdCBkMyA9IHJlcXVpcmUoXCJkM1wiKVxuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5jb25zdCBnZXRBdmVyYWdlID0gYXJyID0+IE1hdGgucm91bmQoYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGgpO1xuY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gYXJyID0+IFsuLi5uZXcgU2V0KGFycildXG5cbmNvbnN0IGdldENvbXBsaWFuY2VDaGVja1Jlc3VsdCA9IChvdXRjb21lKSA9PiB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSB7XG4gICAgJ05FR0FUSVZFJzogJ+KdjCAtIE5vdCBjb21wbHlpbmcgdG8gaGlzIHRheCBvYmxpZ2F0aW9ucycsXG4gICAgJ05PX09CTElHQVRJT05TJzogJ+KchSBIYXMgbm8gb2JsaWdhdGlvbnMnLFxuICAgICdQT1NJVElWRSc6ICfinIUgQ29tcGx5aW5nIHRvIGFsbCB0YXggb2JsaWdhdGlvbnMnXG4gIH1cbiAgcmV0dXJuIHN0YXRlbWVudHNbb3V0Y29tZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe3RheFN0YXR1czogbnVsbCwgdGF4Q29tcGxpYW5jZVN0YXR1czogbnVsbCwgaW52b2ljZXM6IFtdLCB0YXhSZXR1cm5zOiBudWxsIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hGaXNjYWxEYXRhID0gYXN5bmMgKGxpbmspID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IFt0YXhTdGF0dXMsIHRheENvbXBsaWFuY2VTdGF0dXMsIGludm9pY2VzLCB0YXhSZXR1cm5zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXN0YXR1cz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LWNvbXBsaWFuY2Utc3RhdHVzP2xpbms9JHtsaW5rfWApLFxuICAgICAgZmV0Y2hlcihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbnZvaWNlcz9saW5rPSR7bGlua31gKSxcbiAgICAgIGZldGNoZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGF4LXJldHVybnM/bGluaz0ke2xpbmt9YCksXG4gICAgIF0pO1xuICAgIHNldERhdGEoeyBcbiAgICAgIHRheFN0YXR1cyxcbiAgICAgIHRheENvbXBsaWFuY2VTdGF0dXMsXG4gICAgICBpbnZvaWNlcyxcbiAgICAgIHRheFJldHVybnMsXG4gICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGxldCB7dGF4U3RhdHVzLCB0YXhDb21wbGlhbmNlU3RhdHVzLCBpbnZvaWNlcywgdGF4UmV0dXJucyB9ID0gZGF0YTtcblxuICBjb25zdCBwYXlyb2xsSW52b2ljZXMgPSBpbnZvaWNlcyAmJiBpbnZvaWNlcy5maWx0ZXIoaSA9PiBpLmludm9pY2VfdHlwZSA9PSAnTsOzbWluYScpLnNvcnQoKGIsYSkgPT4gbmV3IERhdGUoYi5pbnZvaWNlX2RhdGUpIC0gbmV3IERhdGUoYS5pbnZvaWNlX2RhdGUpKVxuXG4gIGNvbnN0IHRvdGFsRWFybmluZ3NQZXJZZWFyID0gdGF4UmV0dXJucyAmJiB0YXhSZXR1cm5zLmZpbHRlcih0ciA9PiB0ci5oYXNPd25Qcm9wZXJ0eSgnc3VlbGRvc19zYWxhcmlvcycpKS5tYXAodHIgPT4gdHIuaW5mb3JtYWNpb25fZ2VuZXJhbC5lamVyY2ljaW8gKyB0ci5zZXJ2aWNpb3NfcHJvZmVzaW9uYWxlcy5pbmdyZXNvcy50b3RhbF9pbmdyZXNvcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZpc2NhbCBndWlkZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPiBTQVQgcmVwb3J0IGZvciBpbmRpdmlkdWFsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnIHN0eWxlcz17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnNlcnQgdGhlIEJlbHZvIGxpbmtfaWRcIiBcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAvPiBcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoRmlzY2FsRGF0YSh2YWx1ZSl9PkNyZWF0ZSByZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2xvYWRpbmcgJiYgPD4uLi5sb2FkaW5nPC8+fVxuXG4gICAgICAgIHsgdGF4U3RhdHVzICYmIHRheENvbXBsaWFuY2VTdGF0dXMgJiYgaW52b2ljZXMgJiYgdGF4UmV0dXJucyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMj4gU3RlcCAjMSAtIEdldCB0byBrbm93IHRoZSBjb21wYW55IDwvaDI+XG4gICAgICAgICAgICA8aDM+IFRheHBheWVyIGluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBOYW1lOiB7dGF4U3RhdHVzLm9mZmljaWFsX25hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBMb2NhdGlvbjoge3RheFN0YXR1cy5hZGRyZXNzLmxvY2FsaXR5fSwge3RheFN0YXR1cy5hZGRyZXNzLnN0YXRlfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgUGhvbmU6IHt0YXhTdGF0dXMudGF4X3BheWVyX2luZm9ybWF0aW9uLnBob25lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgRW1haWw6IHt0YXhTdGF0dXMudGF4X3BheWVyX2luZm9ybWF0aW9uLmVtYWlsfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgQWN0aXZlIHRheHBheWVyIHNpbmNlOiB7dGF4U3RhdHVzLnRheF9wYXllcl9pbmZvcm1hdGlvbi5zdGFydF9vcGVyYXRpb25zX2RhdGUuc3Vic3RyaW5nKDAsMTApfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgRWNvbm9taWMgYWN0aXZpdGllczoge3RheFN0YXR1cy5lY29ub21pY19hY3Rpdml0eS5tYXAoYSA9PiBhLmVjb25vbWljX2FjdGl2aXR5KS5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8aDM+IEVjb25vbWljIGFjdGl2aXRlczwvaDM+ICBcbiAgICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwbG90JyBcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDoxNTAsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgUGxvdFxuICAgICAgICAgICAgICAgICAgICAgICAuYmFyWChcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXhTdGF0dXMuZWNvbm9taWNfYWN0aXZpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+ICh7YWN0aXZpdHk6IGEuZWNvbm9taWNfYWN0aXZpdHksIHZhbHVlOiBhLnBlcmNlbnRhZ2V9KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCJ2YWx1ZVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcImFjdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjNEU3OUE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBlcmNlbnRhZ2Ugb2YgaW5jb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCdXNpbmVzcyBhY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwLCBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxoMj5TdGVwICMyIC0gSW5kaWNhdG9ycyBvZiBmcmF1ZCAmIG5vbi1jb21wbGlhbmNlPC9oMj5cbiAgICAgICAgICAgIDxoMz5UYXggY29tcGxpYW5jZSBzdGF0dXM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAge2dldENvbXBsaWFuY2VDaGVja1Jlc3VsdCh0YXhDb21wbGlhbmNlU3RhdHVzLm91dGNvbWUpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGgyPlN0ZXAgIzMgLSBJZGVudGlmeSB0aGUgcmlzayBwcm9maWxlIG9mIHRoZSBjbGllbnQ8L2gyPlxuICAgICAgICAgICAgPGgzPkhpc3RvcmljYWwgcGF5cm9sbCBpbnZvaWNlczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBBdmVyYWdlIG1vbnRobHkgcGF5Y2hlY2s6IE1YTiB7Z2V0QXZlcmFnZShwYXlyb2xsSW52b2ljZXMubWFwKGkgPT4gaS50b3RhbF9hbW91bnQpKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE51bWJlciBvZiBlbXBsb3llcnMgZHVyaW5nIHBlcmlvZDoge2dldFVuaXF1ZVZhbHVlcyhwYXlyb2xsSW52b2ljZXMubWFwKGkgPT4gaS5zZW5kZXJfaWQpKS5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGxvdCcgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgIFBsb3QuYmFyWShwYXlyb2xsSW52b2ljZXMsIFxuICAgICAgICAgICAgICAgICAgICAgIFBsb3QuZ3JvdXBYKHt5OiBcInN1bVwiLCB9LCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZCA9PiBuZXcgRGF0ZShkLmludm9pY2VfZGF0ZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCJ0b3RhbF9hbW91bnRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRzOiBkMy50aW1lTW9udGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJzZW5kZXJfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBQbG90LmZyYW1lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgeDogeyBcbiAgICAgICAgICAgICAgICAgICAgdGlja1JvdGF0ZTogLTMwLCBcbiAgICAgICAgICAgICAgICAgICAgdGlja0Zvcm1hdDogZCA9PiBQbG90LmZvcm1hdE1vbnRoKCkoZC5nZXRNb250aCgpKSArIFwiIFwiICsgZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNb250aCBvZiB0aGUgeWVhclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSW5jb21lXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNzUsIFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMz5ZZWFybHkgdG90YWwgZWFybmluZ3M8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQXZlcmFnZSB5ZWFybHkgdG90YWwgZWFybmluZ3M6IE1YTiB7Z2V0QXZlcmFnZSh0b3RhbEVhcm5pbmdzUGVyWWVhcil9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPFBsb3RGaWd1cmUgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGxvdCcgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgIFBsb3QuYmFyWSh0YXhSZXR1cm5zLCBcbiAgICAgICAgICAgICAgICAgICAgICBQbG90Lmdyb3VwWCh7eTogXCJzdW1cIiwgfSwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGQgPT4gZC5pbmZvcm1hY2lvbl9nZW5lcmFsLmVqZXJjaWNpbywgXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAoZCkgPT4gZC5zdWVsZG9zX3NhbGFyaW9zLmluZ3Jlc29fYW51YWwgKyBkLnNlcnZpY2lvc19wcm9mZXNpb25hbGVzLmluZ3Jlc29zLnRvdGFsX2luZ3Jlc29zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzRFNzlBN1wiXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUGxvdC5mcmFtZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHg6IHsgXG4gICAgICAgICAgICAgICAgICAgIHRpY2tSb3RhdGU6IC0zMCwgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlllYXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWWVhcmx5IGluY29tZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNzUsIFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2hvcnRlbiB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE5cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjOGE5YWE4O1xuICAgICAgICB9XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA4MDBweCBcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDEsIGgyIHtcbiAgICAgICAgICBjb2xvcjogIzE2MWExZDtcbiAgICAgICAgfVxuICAgICAgICBlbSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBjb2xvcjogIzM4ODJmYTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZmZWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3ZWI4ZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLEFyaWFsLFZlcmRhbmE7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIixBcmlhbCxWZXJkYW5hO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6ICMxNjFhMWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUsIC5wbG90IHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAb2JzZXJ2YWJsZWhxL3Bsb3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFycXVlcm9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImQzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBsb3QtcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=