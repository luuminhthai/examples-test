class User {
  constructor() {
    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.employeeId = null;
    this.customerId = null;
    this.isAffiliate = false;
  }

  static assign(user) {
    let newObj = new User();
    newObj.id = user.id || newObj.id;
    newObj.firstName = user.firstName || newObj.firstName;
    newObj.lastName = user.lastName || newObj.lastName;
    newObj.employeeId = user.employeeId || newObj.employeeId;
    newObj.customerId = user.customerId || newObj.customerId;
    newObj.isAffiliate = user.isAffiliate || newObj.isAffiliate;
    return newObj;
  }
}

export default User;