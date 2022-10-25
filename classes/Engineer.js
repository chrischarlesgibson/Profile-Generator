const Employee = require("../classes/Employee");

//declaring a enginner constructor function that call on its parent constructor "Employee" to import the parents methods and properties. also added github method here specifily for enginneer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
