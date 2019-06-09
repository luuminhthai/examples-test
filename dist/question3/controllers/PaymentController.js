"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PaymentController =
/*#__PURE__*/
function () {
  function PaymentController(db) {
    _classCallCheck(this, PaymentController);

    this.db = db;
  }

  _createClass(PaymentController, [{
    key: "calculatorDiscountPerProduct",
    value: function calculatorDiscountPerProduct(products, rate) {
      var totalDiscount = 0,
          totalPrice = 0;
      products.forEach(function (item) {
        totalDiscount += item.price * rate;
        totalPrice += item.price;
      });
      return {
        totalPrice: totalPrice,
        totalDiscount: totalDiscount
      };
    }
  }, {
    key: "getDiscount",
    value: function getDiscount(bill) {
      var minimum;
      var user = bill.user,
          store = bill.store;

      if (user.employeeId && user.employee && user.employee.storeId === bill.storeId) {
        minimum = _constants.DISCOUNT_RATE.IS_EMPLOYEE;
      }

      if (store && store.ownerId == user.id && store.id === bill.storeId && (!minimum || minimum && minimum > _constants.DISCOUNT_RATE.IS_AFFILIATE)) {
        minimum = _constants.DISCOUNT_RATE.IS_AFFILIATE;
      }

      if (user.customerId && user.customer) {
        var twoYearAgo = (0, _moment["default"])().subtract(2, 'years');

        if ((0, _moment["default"])(user.customer.createdAt) <= twoYearAgo && (!minimum || minimum > _constants.DISCOUNT_RATE.IS_CUSTOMER_FRIENDLY)) {
          minimum = _constants.DISCOUNT_RATE.IS_CUSTOMER_FRIENDLY;
        }
      }

      var _this$calculatorDisco = this.calculatorDiscountPerProduct(bill.products, minimum),
          totalPrice = _this$calculatorDisco.totalPrice,
          totalDiscount = _this$calculatorDisco.totalDiscount;

      var checkDiscount = Math.floor(totalPrice / _constants.DISCOUNT_RATE.PERCENTAGE.TOTAL) * _constants.DISCOUNT_RATE.PERCENTAGE.RATE;

      if (store && store.isGrocery) {
        return totalPrice;
      }

      return totalPrice - (!isNaN(totalDiscount) && totalDiscount < checkDiscount ? totalDiscount : checkDiscount);
    }
  }, {
    key: "calculatorBill",
    value: function calculatorBill(bill) {
      if (!bill.user || !bill.products) {
        return 0;
      }

      return this.getDiscount(bill);
    }
  }]);

  return PaymentController;
}();

var _default = PaymentController;
exports["default"] = _default;