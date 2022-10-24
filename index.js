const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const renderEngineer = require("./classes/Engineer");
const renderIntern = require("./classes/Intern");
const renderManager = require("./classes/Manager");

//setting empty array to store all the added teammembers
const teamMembersArray = [];
//question array to direct the user to the correct set of employee questions array
const typeOfEmployeeQuestion = [
  {
    type: "list",
    message: "Which type of team member do you want to add?",
    name: "teamMemberType",
    choices: ["manager", "Egineer", "Intern"],
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
  inquirer.prompt(firstQuestion).then(function (response) {
    let chosenRole = response.teamMemberType;
    if (chosenRole === "Engineer") {
      useEngineerQuestions();
    } else if (chosenRole === "Manager") {
      useManagerQuestions();
    } else if (chosenRole === "Intern") {
      useInternQuestions();
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
  });
}

function init() {
  questionDirectory();
}

init();

// function writeToFile(fileName, data) {
//   console.log(data);
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }

// // TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((response) => {
//     let storedUserInput = generateMarkdown(response);
//     writeToFile("yourREADME.md", storedUserInput);
//     console.log(response);
//   });
// }

// // Function call to initialize app
// init();
