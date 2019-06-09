class Employee {
  constructor() {
    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.storeId = null;
  }

  static assign(employee) {
    let newObj = new Employee();
    newObj.id = employee.id || newObj.id;
    newObj.firstName = employee.firstName || newObj.firstName;
    newObj.lastName = employee.lastName || newObj.lastName; 
    newObj.storeId = employee.storeId || newObj.storeId;
    return newObj;
  }
}

export default Employee;