import { DISCOUNT_RATE } from '../constants';
import moment from "moment";

class PaymentController {
  constructor(db) {
    this.db = db;
  }

  getDiscount(bill) {
    const isEmployee = this.db.Employees.find(item => item.id == bill.userId);
    if (isEmployee) {
      return bill.total * DISCOUNT_RATE.IS_EMPLOYEE;
    }
    const isAffiliate = this.db.Stores.find(item => item.id === bill.storeId);
    if (isAffiliate) {
      return bill.total * DISCOUNT_RATE.IS_AFFILIATE;
    }
    const twoYearAgo = moment().subtract(2, 'years');
    const isCustomerOverTwoYear = this.db.Customers.find(item => item.id === bill.customerId && moment(bill.createdAt) < twoYearAgo)
    if (isCustomerOverTwoYear) {
      return bill.total * DISCOUNT_RATE.IS_CUSTOMER_FRIENDLY
    }
    if (bill.total > 100) {
      return bill.total * (Math.floor(bill.total / 100) * 5);
    }
  }
  
  calculatorBill(bill) {
    let discount = bill.total > 0 ? this.getDiscount(bill) : 0;
    bill.payAmount = bill.total - discount;
    return bill;
  }
}

export default PaymentController;