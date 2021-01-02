webpackHotUpdate_N_E("pages/Records/show",{

/***/ "./pages/Records/show.js":
/*!*******************************!*\
  !*** ./pages/Records/show.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_record__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/record */ "./ethereum/record.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var recordShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(recordShow, _Component);

  var _super = _createSuper(recordShow);

  function recordShow() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, recordShow);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(recordShow, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
          columns: 1,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
              raised: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "red",
                ribbon: true,
                children: "Overview"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
                children: "Name and profile image"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
                children: this.props.NameAndImage[0]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Image"], {
                style: {
                  maxWidth: "150px",
                  maxHeight: "150px",
                  display: "block"
                },
                src: this.props.NameAndImage[1]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "blue",
                ribbon: true,
                children: "Details"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
                children: "your details"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("p", {
                children: ["Age: ", this.props.details[1]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("p", {
                children: ["height: ", this.props.details[2]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("p", {
                children: ["weight: ", this.props.details[3]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("p", {
                children: ["gender: ", this.props.details[4]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "orange",
                ribbon: true,
                children: "prescription links"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
                children: this.props.prescriptions
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "teal",
                ribbon: true,
                children: "report links"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
                children: this.props.reports
              })]
            })
          })
        })
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var accounts, currentRecord, NameAndImage, details, prescriptionlength, reportLength, prescriptions, i, prescriptionlink, reports, reportLink;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                currentRecord = Object(_ethereum_record__WEBPACK_IMPORTED_MODULE_12__["default"])(props.query.address);
                _context.next = 6;
                return currentRecord.methods.getNameandAddress().call({
                  from: accounts[0]
                });

              case 6:
                NameAndImage = _context.sent;
                _context.next = 9;
                return currentRecord.methods.getDetails().call({
                  from: accounts[0]
                });

              case 9:
                details = _context.sent;
                _context.next = 12;
                return currentRecord.methods.getPrescriptionLength().call({
                  from: accounts[0]
                });

              case 12:
                prescriptionlength = _context.sent;
                _context.next = 15;
                return currentRecord.methods.getReportLength().call({
                  from: accounts[0]
                });

              case 15:
                reportLength = _context.sent;
                prescriptions = [];
                i = 0;

              case 18:
                if (!(i < prescriptionlength)) {
                  _context.next = 26;
                  break;
                }

                _context.next = 21;
                return currentRecord.methods.getPrescription(i).call({
                  from: accounts[0]
                });

              case 21:
                prescriptionlink = _context.sent;
                prescriptions.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: prescriptionlink,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("a", {
                    target: "_blank",
                    children: ["prescription ", i + 1]
                  })
                }));

              case 23:
                i++;
                _context.next = 18;
                break;

              case 26:
                reports = [];
                i = 0;

              case 28:
                if (!(i < reportLength)) {
                  _context.next = 36;
                  break;
                }

                _context.next = 31;
                return currentRecord.methods.getReport(i).call({
                  from: accounts[0]
                });

              case 31:
                reportLink = _context.sent;
                reports.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: reportLink,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("a", {
                    target: "_blank",
                    children: ["report ", i + 1]
                  })
                }));

              case 33:
                i++;
                _context.next = 28;
                break;

              case 36:
                return _context.abrupt("return", {
                  NameAndImage: NameAndImage,
                  details: details,
                  accounts: accounts,
                  reports: reports,
                  prescriptions: prescriptions
                });

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return recordShow;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (recordShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9zaG93LmpzIl0sIm5hbWVzIjpbInJlY29yZFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJOYW1lQW5kSW1hZ2UiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJkZXRhaWxzIiwicHJlc2NyaXB0aW9ucyIsInJlcG9ydHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImN1cnJlbnRSZWNvcmQiLCJyZWNvcmQiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0TmFtZWFuZEFkZHJlc3MiLCJjYWxsIiwiZnJvbSIsImdldERldGFpbHMiLCJnZXRQcmVzY3JpcHRpb25MZW5ndGgiLCJwcmVzY3JpcHRpb25sZW5ndGgiLCJnZXRSZXBvcnRMZW5ndGgiLCJyZXBvcnRMZW5ndGgiLCJpIiwiZ2V0UHJlc2NyaXB0aW9uIiwicHJlc2NyaXB0aW9ubGluayIsInB1c2giLCJnZXRSZXBvcnQiLCJyZXBvcnRMaW5rIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7OzZCQXdDSztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUNBLDBCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFBTSxpQkFBTyxFQUFFLENBQWY7QUFBQSxpQ0FDRSw4REFBQyx1REFBRCxDQUFNLE1BQU47QUFBQSxtQ0FDRSwrREFBQywwREFBRDtBQUFTLG9CQUFNLE1BQWY7QUFBQSxzQ0FDRSw4REFBQyx3REFBRDtBQUFPLGtCQUFFLEVBQUMsR0FBVjtBQUFjLHFCQUFLLEVBQUMsS0FBcEI7QUFBMEIsc0JBQU0sTUFBaEM7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQTtB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QUksRUFBRUQsZ0JBQVo7QUFBQSx5Q0FDRTtBQUFHLDBCQUFNLEVBQUMsUUFBVjtBQUFBLGdEQUFpQ0YsQ0FBQyxHQUFHLENBQXJDO0FBQUE7QUFERixrQkFERjs7O0FBSnNDQSxpQkFBQyxFOzs7OztBQVVuQ2xCLHVCLEdBQVUsRTtBQUNQa0IsaUIsR0FBSSxDOzs7c0JBQUdBLENBQUMsR0FBR0QsWTs7Ozs7O3VCQUNPWixhQUFhLENBQUNJLE9BQWQsQ0FDdEJhLFNBRHNCLENBQ1pKLENBRFksRUFFdEJQLElBRnNCLENBRWpCO0FBQUVDLHNCQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGlCQUZpQixDOzs7QUFBbkJtQiwwQjtBQUdOdkIsdUJBQU8sQ0FBQ3FCLElBQVIsZUFDRSw4REFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUVFLFVBQVo7QUFBQSx5Q0FDRTtBQUFHLDBCQUFNLEVBQUMsUUFBVjtBQUFBLDBDQUEyQkwsQ0FBQyxHQUFHLENBQS9CO0FBQUE7QUFERixrQkFERjs7O0FBSmdDQSxpQkFBQyxFOzs7OztpREFVNUI7QUFBRXhCLDhCQUFZLEVBQVpBLFlBQUY7QUFBZ0JJLHlCQUFPLEVBQVBBLE9BQWhCO0FBQXlCTSwwQkFBUSxFQUFSQSxRQUF6QjtBQUFtQ0oseUJBQU8sRUFBUEEsT0FBbkM7QUFBNENELCtCQUFhLEVBQWJBO0FBQTVDLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdENjeUIsK0M7O0FBdUZWbEMseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUmVjb3Jkcy9zaG93LjVhZTNhNGNhMGU3MjJiOTVmZWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR3JpZCwgU2VnbWVudCwgTGFiZWwsIEltYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCByZWNvcmQgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3JlY29yZFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5cclxuY2xhc3MgcmVjb3JkU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgY29uc3QgY3VycmVudFJlY29yZCA9IHJlY29yZChwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgIGNvbnN0IE5hbWVBbmRJbWFnZSA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAuZ2V0TmFtZWFuZEFkZHJlc3MoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAuZ2V0RGV0YWlscygpXHJcbiAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCBwcmVzY3JpcHRpb25sZW5ndGggPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldFByZXNjcmlwdGlvbkxlbmd0aCgpXHJcbiAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCByZXBvcnRMZW5ndGggPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldFJlcG9ydExlbmd0aCgpXHJcbiAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCBwcmVzY3JpcHRpb25zID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXNjcmlwdGlvbmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByZXNjcmlwdGlvbmxpbmsgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgICAuZ2V0UHJlc2NyaXB0aW9uKGkpXHJcbiAgICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgICAgcHJlc2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3ByZXNjcmlwdGlvbmxpbmt9PlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+cHJlc2NyaXB0aW9uIHtpICsgMX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVwb3J0cyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXBvcnRMZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZXBvcnRMaW5rID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgICAgLmdldFJlcG9ydChpKVxyXG4gICAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIHJlcG9ydHMucHVzaChcclxuICAgICAgICA8TGluayBocmVmPXtyZXBvcnRMaW5rfT5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPnJlcG9ydCB7aSArIDF9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IE5hbWVBbmRJbWFnZSwgZGV0YWlscywgYWNjb3VudHMsIHJlcG9ydHMsIHByZXNjcmlwdGlvbnMgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxHcmlkIGNvbHVtbnM9ezF9PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8U2VnbWVudCByYWlzZWQ+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGFzPVwiYVwiIGNvbG9yPVwicmVkXCIgcmliYm9uPlxyXG4gICAgICAgICAgICAgICAgT3ZlcnZpZXdcclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5hbWUgYW5kIHByb2ZpbGUgaW1hZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLk5hbWVBbmRJbWFnZVswXX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLk5hbWVBbmRJbWFnZVsxXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICA8TGFiZWwgYXM9XCJhXCIgY29sb3I9XCJibHVlXCIgcmliYm9uPlxyXG4gICAgICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+eW91ciBkZXRhaWxzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICA8cD5BZ2U6IHt0aGlzLnByb3BzLmRldGFpbHNbMV19PC9wPlxyXG4gICAgICAgICAgICAgIDxwPmhlaWdodDoge3RoaXMucHJvcHMuZGV0YWlsc1syXX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+d2VpZ2h0OiB7dGhpcy5wcm9wcy5kZXRhaWxzWzNdfTwvcD5cclxuICAgICAgICAgICAgICA8cD5nZW5kZXI6IHt0aGlzLnByb3BzLmRldGFpbHNbNF19PC9wPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBhcz1cImFcIiBjb2xvcj1cIm9yYW5nZVwiIHJpYmJvbj5cclxuICAgICAgICAgICAgICAgIHByZXNjcmlwdGlvbiBsaW5rc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucHJlc2NyaXB0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGFzPVwiYVwiIGNvbG9yPVwidGVhbFwiIHJpYmJvbj5cclxuICAgICAgICAgICAgICAgIHJlcG9ydCBsaW5rc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucmVwb3J0c308L3A+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9