// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const renderLicenseBadge = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log('running markdown-maker')

// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',

            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "You're not on GitHub? At least make something up. One character at least!";
                }
            }
        },
        {
            type: 'input',
            name: 'notEmail',
            message: 'What is your fake email that will be prominantly displayed where any bot or creep can find it in the plain view of the entire internet? (Please do not use your real email.)',
        
            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "Oh come on. Make something up. Mash the buttons. Go cr@zy.com!";
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?',

            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "Your project doesn't have a name? Seriously? At least one letter required.";
                }
            }
        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please tell us about your project: What does it do?',
            
            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "Your project doesn't do anything? What's your favorite letter?";
                }
            }

        },
        {
            type: 'checkbox',
            name: 'instructions',
            message: 'Please choose all that apply:',
            choices: [
                '- Install Node.js\n', '- run in VS integrated terminal: npm init -y\n', '- run in integrated terminal: npm i inquirer@8.2.4\n', '- run in integrated terminal: node index.js\n'
            ]
        },
        {
            type: 'input',
            name: 'use',
            message: 'How will people use this amazing product?',

            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "It's OK to say 'I don't know.' But you gotta write something here.";
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How will people help make this thing more awesome?',

            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "If you already think it's the bees knees, did you get any help? You could acknowledge your team here. But please, just give me something to work with!";
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How will people test this product?:',

            validate: userInput => {
                if (userInput){
                    return true;
                }else{
                    return "Just tell them to run it and see if it works. One character at least!";
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Pick one of these licenses.',
            choices: [
                'MIT', 'PPDL', 'The Unlicense',
            ]
        },
    ];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };

// TODO: Create a function to initialize app

const init = () => {
    const answers = inquirer.prompt(questions)
        .then((answers) => writeToFile('./dist/README.md', generateMarkdown({...answers})))
        .then(() => console.log(answers))
        .catch((err) => console.log(err));    
};


// Function call to initialize app
init();
