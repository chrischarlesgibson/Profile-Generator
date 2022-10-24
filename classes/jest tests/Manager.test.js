const Manager = require("../Manager");

//test to check if the intern object contains the necessary info like id, name and email
describe("Manager", function () {
  it("should contain the managers's name, id , email and office ", function () {
    const manager = new Manager(
      "Tyler Durden",
      4512,
      "tydurden@gmail.com",
      "b-13"
    );
    expect(manager.name).toEqual("Tyler Durden");
    expect(manager.id).toEqual(4512);
    expect(manager.email).toEqual("tydurden@gmail.com");
    expect(manager.office).toEqual("b-13");
  });
});
