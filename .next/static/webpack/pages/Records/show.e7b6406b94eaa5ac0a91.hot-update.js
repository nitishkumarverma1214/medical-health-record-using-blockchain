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
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
          columns: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
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
                src: this.props.NameAndImage[1]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "blue",
                ribbon: true,
                children: "Details"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
                children: "your details"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("h3", {
                children: ["Age: ", this.props.details[1]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("h3", {
                children: ["height: ", this.props.details[2]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("h3", {
                children: ["weight: ", this.props.details[3]]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("h3", {
                children: ["gender: ", this.props.details[4]]
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
              raised: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "orange",
                ribbon: "right",
                children: "prescription links"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
                children: this.props.prescriptions
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "teal",
                ribbon: "right",
                children: "report links"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
                children: this.props.reports
              })]
            })
          })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9zaG93LmpzIl0sIm5hbWVzIjpbInJlY29yZFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJOYW1lQW5kSW1hZ2UiLCJkZXRhaWxzIiwicHJlc2NyaXB0aW9ucyIsInJlcG9ydHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImN1cnJlbnRSZWNvcmQiLCJyZWNvcmQiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0TmFtZWFuZEFkZHJlc3MiLCJjYWxsIiwiZnJvbSIsImdldERldGFpbHMiLCJnZXRQcmVzY3JpcHRpb25MZW5ndGgiLCJwcmVzY3JpcHRpb25sZW5ndGgiLCJnZXRSZXBvcnRMZW5ndGgiLCJyZXBvcnRMZW5ndGgiLCJpIiwiZ2V0UHJlc2NyaXB0aW9uIiwicHJlc2NyaXB0aW9ubGluayIsInB1c2giLCJnZXRSZXBvcnQiLCJyZXBvcnRMaW5rIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7OzZCQXdDSztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUNBLDBCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsK0RBQUMsdURBQUQ7QUFBTSxpQkFBTyxFQUFFLENBQWY7QUFBQSxrQ0FDRSw4REFBQyx1REFBRCxDQUFNLE1BQU47QUFBQSxtQ0FDRSwrREFBQywwREFBRDtBQUFTLG9CQUFNLE1BQWY7QUFBQSxzQ0FDRSw4REFBQyx3REFBRDtBQUFPLGtCQUFFLEVBQUMsR0FBVjtBQUFjLHFCQUFLLEVBQUMsS0FBcEI7QUFBMEIsc0JBQU0sTUFBaEM7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQTtBQUFBLGdCQUpGLGVBS0U7QUFBQSwwQkFBSyxLQUFLQSxL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QUFDLEdBQUcsQ0FBckM7QUFBQTtBQURGLGtCQURGOzs7QUFKc0NBLGlCQUFDLEU7Ozs7O0FBVW5DbEIsdUIsR0FBVSxFO0FBQ1BrQixpQixHQUFJLEM7OztzQkFBR0EsQ0FBQyxHQUFHRCxZOzs7Ozs7dUJBQ09aLGFBQWEsQ0FBQ0ksT0FBZCxDQUN0QmEsU0FEc0IsQ0FDWkosQ0FEWSxFQUV0QlAsSUFGc0IsQ0FFakI7QUFBRUMsc0JBQUksRUFBRVIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRmlCLEM7OztBQUFuQm1CLDBCO0FBR052Qix1QkFBTyxDQUFDcUIsSUFBUixlQUNFLDhEQUFDLGdEQUFEO0FBQU0sc0JBQUksRUFBRUUsVUFBWjtBQUFBLHlDQUNFO0FBQUcsMEJBQU0sRUFBQyxRQUFWO0FBQUEsMENBQTJCTCxDQUFDLEdBQUcsQ0FBL0I7QUFBQTtBQURGLGtCQURGOzs7QUFKZ0NBLGlCQUFDLEU7Ozs7O2lEQVU1QjtBQUFFckIsOEJBQVksRUFBWkEsWUFBRjtBQUFnQkMseUJBQU8sRUFBUEEsT0FBaEI7QUFBeUJNLDBCQUFRLEVBQVJBLFFBQXpCO0FBQW1DSix5QkFBTyxFQUFQQSxPQUFuQztBQUE0Q0QsK0JBQWEsRUFBYkE7QUFBNUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0Q2N5QiwrQzs7QUFpRlYvQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZWNvcmRzL3Nob3cuZTdiNjQwNmI5NGVhYTVhYzBhOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHcmlkLCBTZWdtZW50LCBMYWJlbCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHJlY29yZCBmcm9tIFwiLi4vLi4vZXRoZXJldW0vcmVjb3JkXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcblxyXG5jbGFzcyByZWNvcmRTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBjdXJyZW50UmVjb3JkID0gcmVjb3JkKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3QgTmFtZUFuZEltYWdlID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXROYW1lYW5kQWRkcmVzcygpXHJcbiAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXREZXRhaWxzKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IHByZXNjcmlwdGlvbmxlbmd0aCA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAuZ2V0UHJlc2NyaXB0aW9uTGVuZ3RoKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IHJlcG9ydExlbmd0aCA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAuZ2V0UmVwb3J0TGVuZ3RoKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IHByZXNjcmlwdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlc2NyaXB0aW9ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJlc2NyaXB0aW9ubGluayA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAgIC5nZXRQcmVzY3JpcHRpb24oaSlcclxuICAgICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBwcmVzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJlc2NyaXB0aW9ubGlua30+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5wcmVzY3JpcHRpb24ge2kgKyAxfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXBvcnRzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcG9ydExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlcG9ydExpbmsgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgICAuZ2V0UmVwb3J0KGkpXHJcbiAgICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgICAgcmVwb3J0cy5wdXNoKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3JlcG9ydExpbmt9PlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+cmVwb3J0IHtpICsgMX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgTmFtZUFuZEltYWdlLCBkZXRhaWxzLCBhY2NvdW50cywgcmVwb3J0cywgcHJlc2NyaXB0aW9ucyB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWQgY29sdW1ucz17Mn0+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHJhaXNlZD5cclxuICAgICAgICAgICAgICA8TGFiZWwgYXM9XCJhXCIgY29sb3I9XCJyZWRcIiByaWJib24+XHJcbiAgICAgICAgICAgICAgICBPdmVydmlld1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+TmFtZSBhbmQgcHJvZmlsZSBpbWFnZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuTmFtZUFuZEltYWdlWzBdfTwvaDM+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGhpcy5wcm9wcy5OYW1lQW5kSW1hZ2VbMV19IC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGFzPVwiYVwiIGNvbG9yPVwiYmx1ZVwiIHJpYmJvbj5cclxuICAgICAgICAgICAgICAgIERldGFpbHNcclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnlvdXIgZGV0YWlsczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDM+QWdlOiB7dGhpcy5wcm9wcy5kZXRhaWxzWzFdfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGgzPmhlaWdodDoge3RoaXMucHJvcHMuZGV0YWlsc1syXX08L2gzPlxyXG4gICAgICAgICAgICAgIDxoMz53ZWlnaHQ6IHt0aGlzLnByb3BzLmRldGFpbHNbM119PC9oMz5cclxuICAgICAgICAgICAgICA8aDM+Z2VuZGVyOiB7dGhpcy5wcm9wcy5kZXRhaWxzWzRdfTwvaDM+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHJhaXNlZD5cclxuICAgICAgICAgICAgICA8TGFiZWwgYXM9XCJhXCIgY29sb3I9XCJvcmFuZ2VcIiByaWJib249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9uIGxpbmtzXHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wcmVzY3JpcHRpb25zfTwvcD5cclxuICAgICAgICAgICAgICA8TGFiZWwgYXM9XCJhXCIgY29sb3I9XCJ0ZWFsXCIgcmliYm9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIHJlcG9ydCBsaW5rc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucmVwb3J0c308L3A+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9