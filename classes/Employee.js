//declaring a constructor function called Employee and giving it 3 properties and also 4 methods. this will be used as a template to make the employee subclasses of engineer,intern and manager
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
