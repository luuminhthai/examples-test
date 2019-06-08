import { PaymentController } from "./controllers";
import {
  Customer,
  Employee,
  Product,
  Store
} from './models';

class Payment {
  constructor() {
    this.db = {};
    this.initDB();
  }

  initDB() {
    this.db.Customers = [
      Customer.assign({ id: 1, firstName: 'customer', lastName: 'A', createdAt: (new Date('2016-10-00T00:00:00')) }),
      Customer.assign({ id: 2, firstName: 'customer', lastName: 'B', createdAt: (new Date('2016-10-00T00:00:00')) }),
      Customer.assign({ id: 3, firstName: 'customer', lastName: 'C', createdAt: (new Date('2016-10-00T00:00:00')) }),
      Customer.assign({ id: 4, firstName: 'customer', lastName: 'D', createdAt: (new Date('2016-10-00T00:00:00')) }),
      Customer.assign({ id: 5, firstName: 'customer', lastName: 'E', createdAt: (new Date('2016-10-00T00:00:00')) }),
      Customer.assign({ id: 6, firstName: 'customer', lastName: 'F', createdAt: (new Date('2016-10-00T00:00:00')) }),
    ];

    this.db.Employees = [
      Employee.assign({ id: 1, firstName: 'Employee', lastName: '1' }),
      Employee.assign({ id: 2, firstName: 'Employee', lastName: '2' }),
      Employee.assign({ id: 3, firstName: 'Employee', lastName: '3' }),
      Employee.assign({ id: 4, firstName: 'Employee', lastName: '4' }),
      Employee.assign({ id: 5, firstName: 'Employee', lastName: '5' }),
      Employee.assign({ id: 6, firstName: 'Employee', lastName: '6' }),
    ];

    this.db.Products = [
      Product.assign({ id: 1, name: 'Product 1', price: 100 }),
      Product.assign({ id: 2, name: 'Product 2', price: 1000 }),
      Product.assign({ id: 3, name: 'Product 3', price: 990 }),
      Product.assign({ id: 4, name: 'Product 4', price: 2000 }),
      Product.assign({ id: 5, name: 'Product 5', price: 3000 }),
      Product.assign({ id: 6, name: 'Product 6', price: 4000 }),
    ]

    this.db.Stores = [
      Store.assign({ id: 1, name: 'Store 1' }),
      Store.assign({ id: 2, name: 'Store 2' }),
      Store.assign({ id: 3, name: 'Store 3' }),
      Store.assign({ id: 4, name: 'Store 4' }),
      Store.assign({ id: 5, name: 'Store 5' }),
      Store.assign({ id: 6, name: 'Store 6' }),
    ]

    this.PaymentController = new PaymentController(this.db);
  }

  calculatorPayment(bill) {
    return this.PaymentController.calculatorBill(bill);
  }
}

const payment = new Payment();
const order = {
  userId: 2,
  productIds: [2, 3, 4],
  storeId: null,
  total: 3990
}
const billTotal = payment.calculatorPayment(order);
console.log("=== final payment amount ====", billTotal);

