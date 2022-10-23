const inquirer = require("inquier");
const fs = require("fs");
const jest = require("jest");

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
const ManagerQuestions = [
  {
    type: "input",
    message: "Enter the mananger's full name",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter the mananger's ID",
    name: "managerId",
  },
  {
    type: "input",
    message: "Enter the mananger's email address",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter the mananger's office number",
    name: "managerOffice",
  },
];
// question array to be asked if users selects that they what to input intern info
const internQuestions = [
  {
    type: "input",
    message: "Enter the intern's full name",
    name: "internName",
  },
  {
    type: "input",
    message: "Enter the intern's ID",
    name: "internId",
  },
  {
    type: "input",
    message: "Enter the intern's email address",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter the intern's school",
    name: "internSchool",
  },
];
// question array to be asked if users selects that they what to input engineer info
const engineerQuestions = [
  {
    type: "input",
    message: "Enter the engineer's full name",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Enter the engineer's ID",
    name: "engineerId",
  },
  {
    type: "input",
    message: "Enter the engineer's email address",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Enter the engineer's Github username",
    name: "engineerGithub",
  },
];
