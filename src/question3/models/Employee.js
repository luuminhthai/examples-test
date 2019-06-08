class Employee {
  constructor() {
    this.id = null;
    this.firstName = '';
    this.lastName = '';

  }

  static assign(employee) {
    let newObj = new Employee();
    newObj.id = employee.id || newObj.id;
    newObj.firstName = employee.firstName || newObj.firstName;
    newObj.lastName = employee.lastName || newObj.lastName; 
    return newObj;
  }
}

export default Employee;