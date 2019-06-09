import { DISCOUNT_RATE } from '../constants';
import moment from "moment";

class PaymentController {
  constructor(db) {
    this.db = db;
  }

  calculatorDiscountPerProduct(products, rate) {
    let totalDiscount = 0, totalPrice = 0;
    products.forEach(item => {
      totalDiscount += item.price * rate;
      totalPrice += item.price;
    })
    return { totalPrice, totalDiscount };
  }

  getDiscount(bill) {
    let minimum;
    const { user, store } = bill;
    if (
      user.employeeId &&
      user.employee &&
      user.employee.storeId === bill.storeId
    ) {
      minimum = DISCOUNT_RATE.IS_EMPLOYEE;
    }

    if (
      store &&
      store.ownerId == user.id &&
      store.id === bill.storeId &&
      (!minimum || (minimum && minimum > DISCOUNT_RATE.IS_AFFILIATE))
    ) {
      minimum = DISCOUNT_RATE.IS_AFFILIATE;
    }

    if (
      user.customerId &&
      user.customer
    ) {
      const twoYearAgo = moment().subtract(2, 'years');
      if (
        moment(user.customer.createdAt) <= twoYearAgo && 
        (!minimum || minimum > DISCOUNT_RATE.IS_CUSTOMER_FRIENDLY)
      ) {
        minimum = DISCOUNT_RATE.IS_CUSTOMER_FRIENDLY;
      }
    }

    let { totalPrice, totalDiscount } = this.calculatorDiscountPerProduct(bill.products, minimum);
    let checkDiscount = Math.floor(totalPrice / DISCOUNT_RATE.PERCENTAGE.TOTAL) * DISCOUNT_RATE.PERCENTAGE.RATE;

    if (store && store.isGrocery) {
      return totalPrice;
    }

    return totalPrice - (!isNaN(totalDiscount) && (totalDiscount < checkDiscount) ? totalDiscount : checkDiscount);
  }
  
  calculatorBill(bill) {
    if (!bill.user || !bill.products) {
      return 0;
    }
    return this.getDiscount(bill);
  }
}

export default PaymentController;