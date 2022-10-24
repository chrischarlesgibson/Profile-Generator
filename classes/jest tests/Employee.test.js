const Employee = require("./classes/Employee.js.js.js");

//test to check if the employee object contains the necessary info like id, name and email
describe("Employee", function () {
  it("should contain the employee's name, id and email ", function () {
    const teamMember = new Employee("Tyler Durden", 4512, "tydurden@gmail.com");
    expect(teamMember.name).toEqual("Tyler Durden");
    expect(teamMember.id).toEqual(4512);
    expect(teamMember.gmail).toEqual("tydurden@gmail.com");
  });
});

//test to check if getID() function works properly
describe("getID function test", function () {
  it("should retrieve the employee's ID from the data object", function () {
    const id = 4512;
    const teamMember = new Employee(id);
    expect(teamMember.id).toEqual(4512);
  });
});

//test to check if getName() function works properly
describe("getName function test", function () {
  it("should retrieve the employee's name from the data object", function () {
    const name = "Tyler Durden";
    const teamMember = new Employee(name);
    expect(teamMember.name).toEqual("Tyler Durden");
  });
});

//test to check if getEmail() function works properly
describe("getEmail function test", function () {
  it("should retrieve the employee's email from the data object", function () {
    const email = "tydurden@gmail.com";
    const teamMember = new Employee(email);
    expect(teamMember.email).toEqual("tydurden@gmail.com");
  });
});
