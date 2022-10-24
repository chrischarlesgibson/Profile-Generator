const Intern = require("./classes/Intern.js");

//test to check if the intern object contains the necessary info like id, name and email
describe("Intern", function () {
  it("should contain the intern's name, id , emailvand github ", function () {
    const intern = new Intern(
      "Tyler Durden",
      4512,
      "tydurden@gmail.com",
      "yale"
    );
    expect(intern.name).toEqual("Tyler Durden");
    expect(intern.id).toEqual(4512);
    expect(intern.email).toEqual("tydurden@gmail.com");
    expect(intern.school).toEqual("yale");
  });
});

//test to check if the getschool function works properly
describe("test of getSchool function", function () {
  it("getSchool should return the inputted school", function () {
    let school = "yale";
    let newIntern = new Intern(
      "Tyler Durden",
      4512,
      "tydurden@gmail.com",
      school
    );
    expect(newIntern.school).toEqual("yale");
  });
});
