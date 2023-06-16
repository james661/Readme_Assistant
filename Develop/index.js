// Variables used to store data packages and pathways.
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for each section of the README.
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Describe the reasoning behind your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "What steps are required to install your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "What are the instructions for the user?",
  },
  {
    name: "contributions",
    type: "input",
    message:
      "What are the guidelines if a user would like to contribute to the repository?",
  },
  {
    name: "testing",
    type: "input",
    message: "What are some of examples of tests to run on your app?",
  },
  {
    name: "license",
    type: "list",
    message: "What license would you like your application to have?",
    choices: ["None", "Apache_2.0-blue", "GPLv3-blue", "MIT-yellow"],
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
];

// Function that writes the README with what the user typed in.
writeToFile = (fileName, data) => {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(fileName, data);
};

// Function that initializes the app.
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.MD", generateMarkdown({ ...answers }));
  });
}

// Calling the initializing function.
init();
