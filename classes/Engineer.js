const Employee = require("./Employee");

//declaring a enginner constructor function that call on its parent constructor "Employee" to import the parents methods and properties. also added github method here specifily for enginneer
function Engineer(name, id, email, github) {
  Employee.call(this, name, id, email);
  this.github = github;
  const role = "Engineer";
}
function getGithub() {
  return this.github;
}
function getRole() {
  return this.role;
}

module.exports = Engineer;
