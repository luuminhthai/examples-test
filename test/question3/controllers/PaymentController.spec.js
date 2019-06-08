
var assert = require('assert');
var PaymemntController = require('../../../src/question3/PaymemntController');

describe('PaymemntController', function () {

  describe('calculatorBill', function(){

    it('should return true if valid user id', function(){
      var isValid = PaymemntController.calculatorBill(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      var isValid = PaymemntController.calculatorBill(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

  });

});