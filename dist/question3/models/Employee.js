"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employee =
/*#__PURE__*/
function () {
  function Employee() {
    _classCallCheck(this, Employee);

    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.storeId = null;
  }

  _createClass(Employee, null, [{
    key: "assign",
    value: function assign(employee) {
      var newObj = new Employee();
      newObj.id = employee.id || newObj.id;
      newObj.firstName = employee.firstName || newObj.firstName;
      newObj.lastName = employee.lastName || newObj.lastName;
      newObj.storeId = employee.storeId || newObj.storeId;
      return newObj;
    }
  }]);

  return Employee;
}();

var _default = Employee;
exports["default"] = _default;