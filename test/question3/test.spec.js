
import assert from 'assert';
import { Payment } from '../../src/question3';

describe('Test payment', function () {

  describe('Payment calculator bill', function(){

    it('should return true when discount not apply when store is groceries.', function(){
      const payment = new Payment();
      const order = {
        orderId: 123456,
        userId: 112,
        storeId: 2,
        productIds: [2, 3]
      }

      const result = payment.calculatorPayment(order);
      assert.equal(result, 1990);
    });

    it('should return true when discount with $5 per $100', function(){
      const payment = new Payment();
      const order = {
        orderId: 123456,
        userId: 114,
        storeId: 5,
        productIds: [7, 8, 9]
      }

      const result = payment.calculatorPayment(order);
      assert.equal(result, 11400);
    });

  });

});