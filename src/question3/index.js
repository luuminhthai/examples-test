import { PaymentController } from "./controllers";
import {
  Customer,
  Employee,
  Product,
  Store,
  User
} from './models';

export class Payment {
  constructor() {
    this.db = {};
    this.initDB();
  }

  initDB() {
    this.db.Customers = [
      Customer.assign({ id: 1, firstName: 'customer', lastName: 'A', email: 'test1@gmail.com', createdAt: new Date('2016-10-00T00:00:00') }),
      Customer.assign({ id: 2, firstName: 'customer', lastName: 'B', email: 'test2@gmail.com', createdAt: new Date('2016-10-00T00:00:00') }),
      Customer.assign({ id: 3, firstName: 'customer', lastName: 'C', email: 'test3@gmail.com', createdAt: new Date('2016-10-00T00:00:00') }),
      Customer.assign({ id: 4, firstName: 'customer', lastName: 'D', email: 'test4@gmail.com', createdAt: new Date('2016-10-00T00:00:00') }),
      Customer.assign({ id: 5, firstName: 'customer', lastName: 'E', email: 'test5@gmail.com', createdAt: new Date('2016-10-00T00:00:00') }),
      Customer.assign({ id: 6, firstName: 'customer', lastName: 'F', email: 'test6@gmail.com', createdAt: new Date('2016-10-00T00:00:00') }),
    ];

    this.db.Employees = [
      Employee.assign({ id: 1, firstName: 'Employee', lastName: '1', storeId: 1 }),
      Employee.assign({ id: 2, firstName: 'Employee', lastName: '2', storeId: 2 }),
      Employee.assign({ id: 3, firstName: 'Employee', lastName: '3', storeId: null }),
      Employee.assign({ id: 4, firstName: 'Employee', lastName: '4', storeId: null }),
      Employee.assign({ id: 5, firstName: 'Employee', lastName: '5', storeId: null }),
      Employee.assign({ id: 6, firstName: 'Employee', lastName: '6', storeId: null }),
    ];

    this.db.Products = [
      Product.assign({ id: 1, name: 'Product 1', price: 100, storeId: 1 }),
      Product.assign({ id: 2, name: 'Product 2', price: 1000, storeId: 2 }),
      Product.assign({ id: 3, name: 'Product 3', price: 990, storeId: 2 }),
      Product.assign({ id: 4, name: 'Product 4', price: 2000, storeId: 2 }),
      Product.assign({ id: 5, name: 'Product 5', price: 3000, storeId: 4 }),
      Product.assign({ id: 6, name: 'Product 6', price: 4000, storeId: 5 }),
      Product.assign({ id: 7, name: 'Product 7', price: 4000, storeId: 5 }),
      Product.assign({ id: 8, name: 'Product 8', price: 4000, storeId: 5 }),
      Product.assign({ id: 9, name: 'Product 9', price: 4000, storeId: 5 }),
    ]

    this.db.Stores = [
      Store.assign({ id: 1, name: 'Store 1', isGrocery: false, ownerId: 114 }),
      Store.assign({ id: 2, name: 'Store 2', isGrocery: true, ownerId: 112 }),
      Store.assign({ id: 3, name: 'Store 3', isGrocery: true, ownerId: 111}),
      Store.assign({ id: 4, name: 'Store 4', isGrocery: false, ownerId: 116 }),
      Store.assign({ id: 5, name: 'Store 5', isGrocery: false, ownerId: 117 }),
      Store.assign({ id: 6, name: 'Store 6', isGrocery: true, ownerId: 118 }),
    ]

    this.db.Users = [
      User.assign({ id: 111, firstName: 'Simi', lastName: 'A', employeeId: null, customerId: null }),
      User.assign({ id: 112, firstName: 'Simi', lastName: 'B', employeeId: 2, customerId: null }),
      User.assign({ id: 113, firstName: 'Simi', lastName: 'C', employeeId: 1, customerId: 2 }),
      User.assign({ id: 114, firstName: 'Simi', lastName: 'D', employeeId: null, customerId: null }),
    ];

    this.PaymentController = new PaymentController(this.db);
  }

  calculatorPayment(bill) {
    let user = this.db.Users.find(item => item.id === bill.userId);
    if (!user) return null;
    if (user.employeeId) {
      user.employee = this.db.Employees.find(item => item.id == user.employeeId);
    }
    if (user.customerId) {
      user.customer = this.db.customer.find(item => item.id == user.customerId);
    }

    if (!bill.productIds) {
      return null;
    }
    let store = {};
    if (bill.storeId) {
      store = this.db.Stores.find(item => item.id === bill.storeId);
    }

    const products = bill.productIds.map(id => {
      let product = this.db.Products.find(item => item.id == id);
      if (!product) return null;
      return {
        ...product,
        store: this.db.Stores.find(item => item.id === product.storeId)
      }
    })
    let billInfo = {
      ...bill,
      user,
      store,
      products: products.filter(item => item)
    }
    return this.PaymentController.calculatorBill(billInfo);
  }
}

function main() {
  const payment = new Payment();
  const order = {
    orderId: 123456,
    userId: 112,
    storeId: 2,
    productIds: [2, 3, 4]
  }
  const billTotal = payment.calculatorPayment(order);
  console.log("=== final payment amount ====\n", billTotal);
}

main();