"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Payment = void 0;

var _controllers = require("./controllers");

var _models = require("./models");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Payment =
/*#__PURE__*/
function () {
  function Payment() {
    _classCallCheck(this, Payment);

    this.db = {};
    this.initDB();
  }

  _createClass(Payment, [{
    key: "initDB",
    value: function initDB() {
      this.db.Customers = [_models.Customer.assign({
        id: 1,
        firstName: 'customer',
        lastName: 'A',
        email: 'test1@gmail.com',
        createdAt: new Date('2016-10-00T00:00:00')
      }), _models.Customer.assign({
        id: 2,
        firstName: 'customer',
        lastName: 'B',
        email: 'test2@gmail.com',
        createdAt: new Date('2016-10-00T00:00:00')
      }), _models.Customer.assign({
        id: 3,
        firstName: 'customer',
        lastName: 'C',
        email: 'test3@gmail.com',
        createdAt: new Date('2016-10-00T00:00:00')
      }), _models.Customer.assign({
        id: 4,
        firstName: 'customer',
        lastName: 'D',
        email: 'test4@gmail.com',
        createdAt: new Date('2016-10-00T00:00:00')
      }), _models.Customer.assign({
        id: 5,
        firstName: 'customer',
        lastName: 'E',
        email: 'test5@gmail.com',
        createdAt: new Date('2016-10-00T00:00:00')
      }), _models.Customer.assign({
        id: 6,
        firstName: 'customer',
        lastName: 'F',
        email: 'test6@gmail.com',
        createdAt: new Date('2016-10-00T00:00:00')
      })];
      this.db.Employees = [_models.Employee.assign({
        id: 1,
        firstName: 'Employee',
        lastName: '1',
        storeId: 1
      }), _models.Employee.assign({
        id: 2,
        firstName: 'Employee',
        lastName: '2',
        storeId: 2
      }), _models.Employee.assign({
        id: 3,
        firstName: 'Employee',
        lastName: '3',
        storeId: null
      }), _models.Employee.assign({
        id: 4,
        firstName: 'Employee',
        lastName: '4',
        storeId: null
      }), _models.Employee.assign({
        id: 5,
        firstName: 'Employee',
        lastName: '5',
        storeId: null
      }), _models.Employee.assign({
        id: 6,
        firstName: 'Employee',
        lastName: '6',
        storeId: null
      })];
      this.db.Products = [_models.Product.assign({
        id: 1,
        name: 'Product 1',
        price: 100,
        storeId: 1
      }), _models.Product.assign({
        id: 2,
        name: 'Product 2',
        price: 1000,
        storeId: 2
      }), _models.Product.assign({
        id: 3,
        name: 'Product 3',
        price: 990,
        storeId: 2
      }), _models.Product.assign({
        id: 4,
        name: 'Product 4',
        price: 2000,
        storeId: 2
      }), _models.Product.assign({
        id: 5,
        name: 'Product 5',
        price: 3000,
        storeId: 4
      }), _models.Product.assign({
        id: 6,
        name: 'Product 6',
        price: 4000,
        storeId: 5
      }), _models.Product.assign({
        id: 7,
        name: 'Product 7',
        price: 4000,
        storeId: 5
      }), _models.Product.assign({
        id: 8,
        name: 'Product 8',
        price: 4000,
        storeId: 5
      }), _models.Product.assign({
        id: 9,
        name: 'Product 9',
        price: 4000,
        storeId: 5
      })];
      this.db.Stores = [_models.Store.assign({
        id: 1,
        name: 'Store 1',
        isGrocery: false,
        ownerId: 114
      }), _models.Store.assign({
        id: 2,
        name: 'Store 2',
        isGrocery: true,
        ownerId: 112
      }), _models.Store.assign({
        id: 3,
        name: 'Store 3',
        isGrocery: true,
        ownerId: 111
      }), _models.Store.assign({
        id: 4,
        name: 'Store 4',
        isGrocery: false,
        ownerId: 116
      }), _models.Store.assign({
        id: 5,
        name: 'Store 5',
        isGrocery: false,
        ownerId: 117
      }), _models.Store.assign({
        id: 6,
        name: 'Store 6',
        isGrocery: true,
        ownerId: 118
      })];
      this.db.Users = [_models.User.assign({
        id: 111,
        firstName: 'Simi',
        lastName: 'A',
        employeeId: null,
        customerId: null
      }), _models.User.assign({
        id: 112,
        firstName: 'Simi',
        lastName: 'B',
        employeeId: 2,
        customerId: null
      }), _models.User.assign({
        id: 113,
        firstName: 'Simi',
        lastName: 'C',
        employeeId: 1,
        customerId: 2
      }), _models.User.assign({
        id: 114,
        firstName: 'Simi',
        lastName: 'D',
        employeeId: null,
        customerId: null
      })];
      this.PaymentController = new _controllers.PaymentController(this.db);
    }
  }, {
    key: "calculatorPayment",
    value: function calculatorPayment(bill) {
      var _this = this;

      var user = this.db.Users.find(function (item) {
        return item.id === bill.userId;
      });
      if (!user) return null;

      if (user.employeeId) {
        user.employee = this.db.Employees.find(function (item) {
          return item.id == user.employeeId;
        });
      }

      if (user.customerId) {
        user.customer = this.db.customer.find(function (item) {
          return item.id == user.customerId;
        });
      }

      if (!bill.productIds) {
        return null;
      }

      var store = {};

      if (bill.storeId) {
        store = this.db.Stores.find(function (item) {
          return item.id === bill.storeId;
        });
      }

      var products = bill.productIds.map(function (id) {
        var product = _this.db.Products.find(function (item) {
          return item.id == id;
        });

        if (!product) return null;
        return _objectSpread({}, product, {
          store: _this.db.Stores.find(function (item) {
            return item.id === product.storeId;
          })
        });
      });

      var billInfo = _objectSpread({}, bill, {
        user: user,
        store: store,
        products: products.filter(function (item) {
          return item;
        })
      });

      return this.PaymentController.calculatorBill(billInfo);
    }
  }]);

  return Payment;
}();

exports.Payment = Payment;

function main() {
  var payment = new Payment();
  var order = {
    orderId: 123456,
    userId: 112,
    storeId: 2,
    productIds: [2, 3, 4]
  };
  var billTotal = payment.calculatorPayment(order);
  console.log("=== final payment amount ====\n", billTotal);
}

main();