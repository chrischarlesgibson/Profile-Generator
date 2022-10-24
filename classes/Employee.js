//declaring a constructor function called EMployeed and giving it 3 properties and also 4 methods. using prototype type syntax so that I can us .call when making the engineer, manager and intern classes
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
}
Employee.prototype.getName = function () {
  return this.name;
};
Employee.prototype.getId = function () {
  return this.id;
};
Employee.prototype.getEmail = function () {
  return this.email;
};
Employee.prototype.getRole = function () {
  return this.role;
};

module.exports = Employee;
