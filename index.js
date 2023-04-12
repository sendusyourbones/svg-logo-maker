// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const Triangle = shapes.Triangle;
const Square = shapes.Square;
const Circle = shapes.Circle;

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
    ]).then((response) => {
        const { text, textColor, shape, shapeColor } = response;

        let newShape;

        if (shape === 'Circle') {
            newShape = new Circle();
        } else if (shape === 'Triangle') {
            newShape = new Triangle();
        } else if (shape === 'Square') {
            newShape = new Square();
        }
        
        newShape.setColor(shapeColor);

        const textForFile = 
`<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">
${newShape.render()}
${newShape.renderText(textColor, text)}
</svg>`

        writeToFile('logo.svg', textForFile);
    });
}

// Function call to initialize the application
init();
