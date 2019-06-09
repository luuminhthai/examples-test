class ProductModel {
  constructor() {
    this.id = null;
    this.name = '';
    this.price = 0;
    this.quanity = 0;
    this.storeId = null;
  }

  static assign(product) {
    let newObj = new ProductModel();
    newObj.id = product.id || newObj.id;
    newObj.name = product.name || newObj.name;
    newObj.price = product.price || newObj.price;
    newObj.quanity = product.quanity || newObj.quanity; 
    newObj.storeId = product.storeId || newObj.storeId;
    return newObj;
  }
}

export default ProductModel;