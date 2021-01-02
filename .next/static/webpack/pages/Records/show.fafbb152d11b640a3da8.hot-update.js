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
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Image"], {
                style: {
                  maxWidth: "150px",
                  maxHeight: "150px",
                  display: "block"
                },
                src: this.props.NameAndImage[1]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9zaG93LmpzIl0sIm5hbWVzIjpbInJlY29yZFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJOYW1lQW5kSW1hZ2UiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJkZXRhaWxzIiwicHJlc2NyaXB0aW9ucyIsInJlcG9ydHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImN1cnJlbnRSZWNvcmQiLCJyZWNvcmQiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0TmFtZWFuZEFkZHJlc3MiLCJjYWxsIiwiZnJvbSIsImdldERldGFpbHMiLCJnZXRQcmVzY3JpcHRpb25MZW5ndGgiLCJwcmVzY3JpcHRpb25sZW5ndGgiLCJnZXRSZXBvcnRMZW5ndGgiLCJyZXBvcnRMZW5ndGgiLCJpIiwiZ2V0UHJlc2NyaXB0aW9uIiwicHJlc2NyaXB0aW9ubGluayIsInB1c2giLCJnZXRSZXBvcnQiLCJyZXBvcnRMaW5rIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7OzZCQXdDSztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUNBLDBCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFBTSxpQkFBTyxFQUFFLENBQWY7QUFBQSxpQ0FDRSw4REFBQyx1REFBRCxDQUFNLE1BQU47QUFBQSxtQ0FDRSwrREFBQywwREFBRDtBQUFTLG9CQUFNLE1BQWY7QUFBQSxzQ0FDRSw4REFBQyx3REFBRDtBQUFPLGtCQUFFLEVBQUMsR0FBVjtBQUFjLHFCQUFLLEVBQUMsS0FBcEI7QUFBMEIsc0JBQU0sTUFBaEM7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQTtB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LEVBQUVELGdCQUFaO0FBQUEseUNBQ0U7QUFBRywwQkFBTSxFQUFDLFFBQVY7QUFBQSxnREFBaUNGLENBQUMsR0FBRyxDQUFyQztBQUFBO0FBREYsa0JBREY7OztBQUpzQ0EsaUJBQUMsRTs7Ozs7QUFVbkNsQix1QixHQUFVLEU7QUFDUGtCLGlCLEdBQUksQzs7O3NCQUFHQSxDQUFDLEdBQUdELFk7Ozs7Ozt1QkFDT1osYUFBYSxDQUFDSSxPQUFkLENBQ3RCYSxTQURzQixDQUNaSixDQURZLEVBRXRCUCxJQUZzQixDQUVqQjtBQUFFQyxzQkFBSSxFQUFFUixRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGaUIsQzs7O0FBQW5CbUIsMEI7QUFHTnZCLHVCQUFPLENBQUNxQixJQUFSLGVBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFFRSxVQUFaO0FBQUEseUNBQ0U7QUFBRywwQkFBTSxFQUFDLFFBQVY7QUFBQSwwQ0FBMkJMLENBQUMsR0FBRyxDQUEvQjtBQUFBO0FBREYsa0JBREY7OztBQUpnQ0EsaUJBQUMsRTs7Ozs7aURBVTVCO0FBQUV4Qiw4QkFBWSxFQUFaQSxZQUFGO0FBQWdCSSx5QkFBTyxFQUFQQSxPQUFoQjtBQUF5Qk0sMEJBQVEsRUFBUkEsUUFBekI7QUFBbUNKLHlCQUFPLEVBQVBBLE9BQW5DO0FBQTRDRCwrQkFBYSxFQUFiQTtBQUE1QyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRDY3lCLCtDOztBQXNGVmxDLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1JlY29yZHMvc2hvdy5mYWZiYjE1MmQxMWI2NDBhM2RhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdyaWQsIFNlZ21lbnQsIExhYmVsLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgcmVjb3JkIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9yZWNvcmRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuXHJcbmNsYXNzIHJlY29yZFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRSZWNvcmQgPSByZWNvcmQocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBOYW1lQW5kSW1hZ2UgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldE5hbWVhbmRBZGRyZXNzKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldERldGFpbHMoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcHJlc2NyaXB0aW9ubGVuZ3RoID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXRQcmVzY3JpcHRpb25MZW5ndGgoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcmVwb3J0TGVuZ3RoID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXRSZXBvcnRMZW5ndGgoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcHJlc2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVzY3JpcHRpb25sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcmVzY3JpcHRpb25saW5rID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgICAgLmdldFByZXNjcmlwdGlvbihpKVxyXG4gICAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIHByZXNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICA8TGluayBocmVmPXtwcmVzY3JpcHRpb25saW5rfT5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPnByZXNjcmlwdGlvbiB7aSArIDF9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcG9ydHMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVwb3J0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVwb3J0TGluayA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAgIC5nZXRSZXBvcnQoaSlcclxuICAgICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICByZXBvcnRzLnB1c2goXHJcbiAgICAgICAgPExpbmsgaHJlZj17cmVwb3J0TGlua30+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5yZXBvcnQge2kgKyAxfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBOYW1lQW5kSW1hZ2UsIGRldGFpbHMsIGFjY291bnRzLCByZXBvcnRzLCBwcmVzY3JpcHRpb25zIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsxfT5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPFNlZ21lbnQgcmFpc2VkPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBhcz1cImFcIiBjb2xvcj1cInJlZFwiIHJpYmJvbj5cclxuICAgICAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8c3Bhbj5OYW1lIGFuZCBwcm9maWxlIGltYWdlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5OYW1lQW5kSW1hZ2VbMF19PC9oMz5cclxuICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5OYW1lQW5kSW1hZ2VbMV19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TGFiZWwgYXM9XCJhXCIgY29sb3I9XCJibHVlXCIgcmliYm9uPlxyXG4gICAgICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+eW91ciBkZXRhaWxzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICA8cD5BZ2U6IHt0aGlzLnByb3BzLmRldGFpbHNbMV19PC9wPlxyXG4gICAgICAgICAgICAgIDxwPmhlaWdodDoge3RoaXMucHJvcHMuZGV0YWlsc1syXX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+d2VpZ2h0OiB7dGhpcy5wcm9wcy5kZXRhaWxzWzNdfTwvcD5cclxuICAgICAgICAgICAgICA8cD5nZW5kZXI6IHt0aGlzLnByb3BzLmRldGFpbHNbNF19PC9wPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBhcz1cImFcIiBjb2xvcj1cIm9yYW5nZVwiIHJpYmJvbj5cclxuICAgICAgICAgICAgICAgIHByZXNjcmlwdGlvbiBsaW5rc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucHJlc2NyaXB0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGFzPVwiYVwiIGNvbG9yPVwidGVhbFwiIHJpYmJvbj5cclxuICAgICAgICAgICAgICAgIHJlcG9ydCBsaW5rc1xyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucmVwb3J0c308L3A+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9