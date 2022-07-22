const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const mandatoryQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your manager's id number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your manager's email?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your manager's office number?",
  },
  {
    type: "list",
    name: "moreEmployees",
    message: "What additional employee do you want to add?",
    choices: ["Engineer", "Employee", "Intern"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of your engineer?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is your engineer's id number?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's Github username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of your intern?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is your intern's id number?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does your intern go to?",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the name of your employee?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is your employee's id?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is your employee's email?",
  },
];

// Function to write HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("All employees have been added!")
  );
}

// Function to initialize app
function runQuestions() {
  inquirer.prompt(mandatoryQuestions).then((responses) => {
    console.log(responses);

    if ((mandatoryQuestions.choices = "Engineer")) {
      inquirer.prompt(engineerQuestions);
    } else if ((mandatoryQuestions.choices = "Intern")) {
      inquirer.prompt(internQuestions);
    } else if ((mandatoryQuestions.choices = "Employee")) {
      inquirer.prompt(employeeQuestions);
    }
    writeToFile("./dist/index.html");
  });
}

runQuestions();
