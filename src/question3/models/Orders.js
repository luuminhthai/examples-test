import Products from './Product';

class OrdersModel {
  constructor() {
    this.id = null;
    this.total = 0;
    this.user = {};
    this.products = [];
  }

  static assign(order) {
    let newObj = new OrdersModel();

    return newObj;
  }
}

export default OrdersModel;