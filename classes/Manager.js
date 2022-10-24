const Employee = require("../classes/Employee");

//declaring a manager constructor function that calls on its parent constructor "Employee" to import the parents methods and properties.
function Manager(name, id, email, office) {
  Employee.call(this, name, id, email);
  this.office = office;
  const role = "Manager";
}
function getRole() {
  return this.role;
}

module.exports = Manager;
