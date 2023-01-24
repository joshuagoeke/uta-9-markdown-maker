// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeToFile(README.md, questions(answers)))
        .then(() => console.log('Check out that slick new README.md over there! ;) '))
        .catch((err) => console.error(err));
};
// Function call to initialize app
init();
