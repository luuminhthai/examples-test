"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductModel =
/*#__PURE__*/
function () {
  function ProductModel() {
    _classCallCheck(this, ProductModel);

    this.id = null;
    this.name = '';
    this.price = 0;
    this.quanity = 0;
    this.storeId = null;
  }

  _createClass(ProductModel, null, [{
    key: "assign",
    value: function assign(product) {
      var newObj = new ProductModel();
      newObj.id = product.id || newObj.id;
      newObj.name = product.name || newObj.name;
      newObj.price = product.price || newObj.price;
      newObj.quanity = product.quanity || newObj.quanity;
      newObj.storeId = product.storeId || newObj.storeId;
      return newObj;
    }
  }]);

  return ProductModel;
}();

var _default = ProductModel;
exports["default"] = _default;