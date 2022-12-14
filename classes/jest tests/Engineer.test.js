const Engineer = require("../Engineer");

//test to check if the employee object contains the necessary info like id, name and email
describe("Engineer", function () {
  it("should contain the engineers's name, id , email and github ", function () {
    const engineer = new Engineer(
      "Tyler Durden",
      4512,
      "tydurden@gmail.com",
      "chrischarlesgibson"
    );
    expect(engineer.name).toEqual("Tyler Durden");
    expect(engineer.id).toEqual(4512);
    expect(engineer.email).toEqual("tydurden@gmail.com");
    expect(engineer.github).toEqual("chrischarlesgibson");
  });
});

//test to check if the github username function works properly
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
