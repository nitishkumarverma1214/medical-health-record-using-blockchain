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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_record__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/record */ "./ethereum/record.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");









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
      console.log(this.props.NameAndImage, this.props.details, this.props.accounts);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h1", {
          children: "Your details are here!!"
        })
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var accounts, currentRecord, NameAndImage, details, prescriptionlength, reportLength, presciptions, i, reports;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                currentRecord = Object(_ethereum_record__WEBPACK_IMPORTED_MODULE_10__["default"])(props.query.address);
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
                presciptions = [];
                i = 0;

              case 18:
                if (!(i < prescriptionlength)) {
                  _context.next = 27;
                  break;
                }

                _context.t0 = presciptions;
                _context.next = 22;
                return currentRecord.methods.getPrescription().call({
                  from: accounts[0]
                });

              case 22:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

              case 24:
                i++;
                _context.next = 18;
                break;

              case 27:
                reports = [];
                i = 0;

              case 29:
                if (!(i < reportLength)) {
                  _context.next = 38;
                  break;
                }

                _context.t2 = presciptions;
                _context.next = 33;
                return reports.methods.getReport().call({
                  from: accounts[0]
                });

              case 33:
                _context.t3 = _context.sent;

                _context.t2.push.call(_context.t2, _context.t3);

              case 35:
                i++;
                _context.next = 29;
                break;

              case 38:
                return _context.abrupt("return", {
                  NameAndImage: NameAndImage,
                  details: details,
                  accounts: accounts
                });

              case 39:
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
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9zaG93LmpzIl0sIm5hbWVzIjpbInJlY29yZFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJOYW1lQW5kSW1hZ2UiLCJkZXRhaWxzIiwiYWNjb3VudHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJjdXJyZW50UmVjb3JkIiwicmVjb3JkIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldE5hbWVhbmRBZGRyZXNzIiwiY2FsbCIsImZyb20iLCJnZXREZXRhaWxzIiwiZ2V0UHJlc2NyaXB0aW9uTGVuZ3RoIiwicHJlc2NyaXB0aW9ubGVuZ3RoIiwiZ2V0UmVwb3J0TGVuZ3RoIiwicmVwb3J0TGVuZ3RoIiwicHJlc2NpcHRpb25zIiwiaSIsImdldFByZXNjcmlwdGlvbiIsInB1c2giLCJyZXBvcnRzIiwiZ2V0UmVwb3J0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs2QkFnQ0s7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQ0UsS0FBS0MsS0FBTCxDQUFXQyxZQURiLEVBRUUsS0FBS0QsS0FBTCxDQUFXRSxPQUZiLEVBR0UsS0FBS0YsS0FBTCxDQUFXRyxRQUhiO0FBS0EsMEJBQ0UsOERBQUMsMERBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFERixRQURGO0FBS0Q7Ozs7K05BMUM0QkgsSzs7Ozs7Ozt1QkFDSkksdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkgsd0I7QUFDQUksNkIsR0FBZ0JDLGlFQUFNLENBQUNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZQyxPQUFiLEM7O3VCQUNESCxhQUFhLENBQUNJLE9BQWQsQ0FDeEJDLGlCQUR3QixHQUV4QkMsSUFGd0IsQ0FFbkI7QUFBRUMsc0JBQUksRUFBRVgsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRm1CLEM7OztBQUFyQkYsNEI7O3VCQUdnQk0sYUFBYSxDQUFDSSxPQUFkLENBQ25CSSxVQURtQixHQUVuQkYsSUFGbUIsQ0FFZDtBQUFFQyxzQkFBSSxFQUFFWCxRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGYyxDOzs7QUFBaEJELHVCOzt1QkFHMkJLLGFBQWEsQ0FBQ0ksT0FBZCxDQUM5QksscUJBRDhCLEdBRTlCSCxJQUY4QixDQUV6QjtBQUFFQyxzQkFBSSxFQUFFWCxRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGeUIsQzs7O0FBQTNCYyxrQzs7dUJBR3FCVixhQUFhLENBQUNJLE9BQWQsQ0FDeEJPLGVBRHdCLEdBRXhCTCxJQUZ3QixDQUVuQjtBQUFFQyxzQkFBSSxFQUFFWCxRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGbUIsQzs7O0FBQXJCZ0IsNEI7QUFHQUMsNEIsR0FBZSxFO0FBQ1pDLGlCLEdBQUksQzs7O3NCQUFHQSxDQUFDLEdBQUdKLGtCOzs7Ozs4QkFDbEJHLFk7O3VCQUNRYixhQUFhLENBQUNJLE9BQWQsQ0FDSFcsZUFERyxHQUVIVCxJQUZHLENBRUU7QUFBRUMsc0JBQUksRUFBRVgsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRkYsQzs7Ozs7NEJBREtvQixJOzs7QUFEeUJGLGlCQUFDLEU7Ozs7O0FBT25DRyx1QixHQUFVLEU7QUFDUEgsaUIsR0FBSSxDOzs7c0JBQUdBLENBQUMsR0FBR0YsWTs7Ozs7OEJBQ2xCQyxZOzt1QkFDUUksT0FBTyxDQUFDYixPQUFSLENBQWdCYyxTQUFoQixHQUE0QlosSUFBNUIsQ0FBaUM7QUFBRUMsc0JBQUksRUFBRVgsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBQWpDLEM7Ozs7OzRCQURLb0IsSTs7O0FBRG1CRixpQkFBQyxFOzs7OztpREFLNUI7QUFBRXBCLDhCQUFZLEVBQVpBLFlBQUY7QUFBZ0JDLHlCQUFPLEVBQVBBLE9BQWhCO0FBQXlCQywwQkFBUSxFQUFSQTtBQUF6QixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlCY3VCLCtDOztBQThDVjdCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1JlY29yZHMvc2hvdy5iZTk0NDg4MGJiZWRkOTIzYWQyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgcmVjb3JkIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9yZWNvcmRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuXHJcbmNsYXNzIHJlY29yZFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRSZWNvcmQgPSByZWNvcmQocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBOYW1lQW5kSW1hZ2UgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldE5hbWVhbmRBZGRyZXNzKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldERldGFpbHMoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcHJlc2NyaXB0aW9ubGVuZ3RoID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXRQcmVzY3JpcHRpb25MZW5ndGgoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcmVwb3J0TGVuZ3RoID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXRSZXBvcnRMZW5ndGgoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcHJlc2NpcHRpb25zID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXNjcmlwdGlvbmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHByZXNjaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgIGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAgICAgLmdldFByZXNjcmlwdGlvbigpXHJcbiAgICAgICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXBvcnRzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcG9ydExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHByZXNjaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgIGF3YWl0IHJlcG9ydHMubWV0aG9kcy5nZXRSZXBvcnQoKS5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IE5hbWVBbmRJbWFnZSwgZGV0YWlscywgYWNjb3VudHMgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIHRoaXMucHJvcHMuTmFtZUFuZEltYWdlLFxyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbHMsXHJcbiAgICAgIHRoaXMucHJvcHMuYWNjb3VudHNcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5Zb3VyIGRldGFpbHMgYXJlIGhlcmUhITwvaDE+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlY29yZFNob3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=