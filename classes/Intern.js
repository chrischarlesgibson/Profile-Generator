const Employee = require("./Employee");

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
