class Store {
  constructor(id, name, provinceId, isGrocery) {
    this.id = id || null;
    this.name = name || '';
    this.provinceId = provinceId || null;
    this.isGrocery = isGrocery || false;
  }

  static assign(store) {
    let newObj = new Store();
    newObj.id = store.id || newObj.id;
    newObj.name = store.name || newObj.name;
    newObj.isGrocery = store.isGrocery || newObj.isGrocery;
    return newObj;
  }
}

export default Store;