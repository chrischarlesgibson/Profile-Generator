const Employee = require("../classes/Employee");

//declaring a manager constructor function that calls on its parent constructor "Employee" to import the parents methods and properties.
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
