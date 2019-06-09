"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store(id, name, provinceId, isGrocery) {
    _classCallCheck(this, Store);

    this.id = id || null;
    this.name = name || '';
    this.provinceId = provinceId || null;
    this.isGrocery = isGrocery || false;
  }

  _createClass(Store, null, [{
    key: "assign",
    value: function assign(store) {
      var newObj = new Store();
      newObj.id = store.id || newObj.id;
      newObj.name = store.name || newObj.name;
      newObj.isGrocery = store.isGrocery || newObj.isGrocery;
      return newObj;
    }
  }]);

  return Store;
}();

var _default = Store;
exports["default"] = _default;