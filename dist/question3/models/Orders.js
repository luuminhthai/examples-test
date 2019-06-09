"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("./Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrdersModel =
/*#__PURE__*/
function () {
  function OrdersModel() {
    _classCallCheck(this, OrdersModel);

    this.id = null;
    this.total = 0;
    this.user = {};
    this.products = [];
  }

  _createClass(OrdersModel, null, [{
    key: "assign",
    value: function assign(order) {
      var newObj = new OrdersModel();
      return newObj;
    }
  }]);

  return OrdersModel;
}();

var _default = OrdersModel;
exports["default"] = _default;