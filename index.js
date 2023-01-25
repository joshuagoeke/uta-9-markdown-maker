// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const renderLicenseBadge = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'notEmail',
            message: 'What is your fake email that will be prominantly displayed where any bot or creep can find it in the plain view of the entire internet? (Please do not use your real email.)'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please tell us about your project, especially since it is this program you are using. What are we doing right now?'
        },
        {
            type: 'checkbox',
            name: 'instructions',
            message: 'Please choose all that apply:',
            choices: [
                'Install Node.js', 'run in VS integrated terminal: npm init -y', 'run in integrated terminal: npm i inquirer@8.2.4', 'run in integrated terminal: node index.js'
            ]
        },
        {
            type: 'input',
            name: 'use',
            message: 'How will people use this amazing product?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How will people help make this thing more awesome?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How will people test this product?:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Pick one of these licenses.',
            choices: [
                'MIT', 'PPDL', 'The Unlicense',
            ]
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((response)=>{
        console.log(response)
        writeToFile("README.md", generateMarkdown(response))
    });    
};
// Function call to initialize app
init();
