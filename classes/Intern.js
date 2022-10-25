const Employee = require("../classes/Employee");

//declaring a intern constructor function that call on its parent constructor "Employee" to import the parents methods and properties. also added getSchool method here specifily for intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
