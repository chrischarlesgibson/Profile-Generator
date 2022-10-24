const Intern = require("../classes/Employee");

//declaring a intern constructor function that call on its parent constructor "Employee" to import the parents methods and properties. also added getSchool method here specifily for intern
function Intern(name, id, email, school) {
  Employee.call(this, name, id, email);
  this.school = school;
  const role = "Intern";
}
function getSchool() {
  return this.school;
}
function getRole() {
  return this.role;
}

module.exports = Intern;
