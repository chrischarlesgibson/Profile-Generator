const Engineer = require("./classes/Engineer.js");

//test to check if the employee object contains the necessary info like id, name and email
describe("Engineer", function () {
  it("should contain the engineers's name, id , emailand github ", function () {
    const engineer = new Engineer("Tyler Durden", 4512, "tydurden@gmail.com");
    expect(engineer.name).toEqual("Tyler Durden");
    expect(engineer.id).toEqual(4512);
    expect(engineer.email).toEqual("tydurden@gmail.com");
    expect(engineer.github).toEqual("chrischarlesgibson");
  });
});

//test to check if the github username works properly
describe("test of getgithub funtion", function () {
  it("getGithub should return the inputted username", function () {
    let github = "chrischarlesgibson";
    let newEngineer = new Engineer(
      "Tyler Durden",
      4512,
      "tydurden@gmail.com",
      github
    );
    expect(newEngineer.github).toEqual("chrischarlesgibson");
  });
});
