const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Intern = require("./classes/Intern");
const Engineer = require("./classes/Engineer");
const Manager = require("./classes/Manager");
const generateHtml = require("./src/generateHtml");
const Employee = require("./classes/Employee");
const renderEngineer = require("./src/renderEngineer");
const renderIntern = require("./src/renderIntern");
const renderManager = require("./src/renderManager");
const path = require("path");
//setting empty array to store all the added teammembers
const teamMembersArray = [];

//question array to direct the user to the correct set of employee questions array
const typeOfEmployeeQuestion = [
  {
    type: "list",
    message: "Which type of team member do you want to add?",
    name: "teamMemberType",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "I'm finished, create my team page",
    ],
  },
];

// question array to be asked if users selects that they what to input manager info
const managerQuestions = [
  {
    type: "input",
    message: "Enter the mananger's full name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the mananger's ID",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the mananger's email address",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the mananger's office number",
    name: "office",
  },
];
// question array to be asked if users selects that they what to input intern info
const internQuestions = [
  {
    type: "input",
    message: "Enter the intern's full name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the intern's ID",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the intern's email address",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the intern's school",
    name: "school",
  },
];
// question array to be asked if users selects that they what to input engineer info
const engineerQuestions = [
  {
    type: "input",
    message: "Enter the engineer's full name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the engineer's ID",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the engineer's email address",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the engineer's Github username",
    name: "github",
  },
];

//function to direct user to correct set of questions based on which class of employee they choose in the typeOfEmployeeQuestion array
function questionDirectory() {
  inquirer.prompt(typeOfEmployeeQuestion).then(function (response) {
    console.log(response);
    let chosenRole = response.teamMemberType;
    if (chosenRole === "Engineer") {
      useEngineerQuestions();
    } else if (chosenRole === "Manager") {
      useManagerQuestions();
    } else if (chosenRole === "Intern") {
      useInternQuestions();
    } else if (chosenRole === "I'm finished, create my team page") {
      console.log(teamMembersArray);
      generateHtml();
    }
  });
}

//function to prompt user with questions realted to adding  a new manager and then storing the users input into the addmanagersobject and push that new manager into the team members array
function useManagerQuestions() {
  inquirer.prompt(managerQuestions).then(function (response) {
    const addedManagerObject = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    teamMembersArray.push(addedManagerObject);
    console.log(teamMembersArray);
    questionDirectory();
    console.log(teamMembersArray);
  });
}

//function to prompt user with questions realted to adding  a new intern and then storing the users input into the addinternsobject and push that new intern into the team members array
function useInternQuestions() {
  inquirer.prompt(internQuestions).then(function (response) {
    const addedInternObject = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    teamMembersArray.push(addedInternObject);
    console.log(teamMembersArray);
    questionDirectory();
    console.log(teamMembersArray);
  });
}

//function to prompt user with questions realted to adding  a new engineer and then storing the users input into the addengineerobject and push that new engineer into the team members array
function useEngineerQuestions() {
  inquirer.prompt(engineerQuestions).then(function (response) {
    const addedEngineerObject = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    teamMembersArray.push(addedEngineerObject);
    console.log(teamMembersArray);
    questionDirectory();
    console.log(teamMembersArray);
  });
}

function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log(
          "It's a success! Your team's profile has been generated! check for teamPage.html in you files."
        )
  );
}

function init() {
  questionDirectory();

  let storedUserInput = generateHtml(teamMembersArray);
  writeToFile("teamPage.html", JSON.stringify(storedUserInput));
  console.log(response);
}

init();
