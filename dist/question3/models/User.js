"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.employeeId = null;
    this.customerId = null;
    this.isAffiliate = false;
  }

  _createClass(User, null, [{
    key: "assign",
    value: function assign(user) {
      var newObj = new User();
      newObj.id = user.id || newObj.id;
      newObj.firstName = user.firstName || newObj.firstName;
      newObj.lastName = user.lastName || newObj.lastName;
      newObj.employeeId = user.employeeId || newObj.employeeId;
      newObj.customerId = user.customerId || newObj.customerId;
      newObj.isAffiliate = user.isAffiliate || newObj.isAffiliate;
      return newObj;
    }
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;