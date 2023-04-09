// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to write logo file logo.svg
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    });
}

// Function to initialize app with question prompts
function init() {
    inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters to include in the logo',
            type: 'input'
        },
        {
            name: 'textColor',
            message: 'Enter the name or hexadecimal number of the desired text color for the logo',
            type: 'input'
        },
        {
            name: 'shape',
            message: 'What shape would you like the logo to be?',
            type: 'rawlist',
            choices: [
                'Circle',
                'Triangle',
                'Square'
            ]
        },
        {
            name: 'shapeColor',
            message: 'Enter the name or hexadecimal number of the desired color for the logo shape',
            type: 'input'
        }
    ]).then((response) => console.log(response));
}

// Function call to initialize the application
init();
