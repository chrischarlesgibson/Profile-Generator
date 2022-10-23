const Employee = require("./Employee");

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
