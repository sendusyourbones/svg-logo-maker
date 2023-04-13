// Packages / variables needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const validateInput = require('./lib/validateInput.js');
const { validateText, validateColor } = validateInput;
const shapes = require('./lib/shapes.js');
const { Triangle, Square, Circle } = shapes;

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
            type: 'input',
            validate: validateText
        },
        {
            name: 'textColor',
            message: 'Enter the name or hexadecimal number of the desired text color for the logo',
            type: 'input',
            validate: validateColor
        },
        {
            name: 'shape',
            message: 'What shape would you like the logo to be?',
            type: 'rawlist',
            choices: [
                {
                    name: 'Circle',
                    value: new Circle()
                },
                {
                    name: 'Triangle',
                    value: new Triangle()
                },
                {
                    name: 'Square',
                    value: new Square()
                }
            ]
        },
        {
            name: 'shapeColor',
            message: 'Enter the name or hexadecimal number of the desired color for the logo shape',
            type: 'input',
            validate: validateColor
        }
    ]).then((response) => {
        const { text, textColor, shape, shapeColor } = response;
        
        shape.setColor(shapeColor);

        const textForFile = 
`<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">
${shape.render()}
${shape.renderText(textColor, text)}
</svg>`

        writeToFile('logo.svg', textForFile);
    });
}

// Function call to initialize the application
init();
