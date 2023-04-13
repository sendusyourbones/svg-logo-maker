# SVG Logo Maker

## Description

This application asks a short series of questions so that a user can easily create an SVG logo file with up to 3 characters in either a circle, square, or triangle using colors of their choosing. This saves developers time and energy when they need to generate a simple logo for a project--instead of looking up the appropriate code for an SVG image, they only need to answer a few basic questions about their preferences and the code is generated for them.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

This application uses the Inquirer package to generate the prompts, and Jest to run tests in development. To install these, clone the repo, `cd` into it, then run the command `npm i`.

## Usage

Watch this demo video to see the application in action

1. `cd` into the repository in the command line and enter `node index`
2. Respond to each prompt as it appears in the command line
3. Once you respond to the final question, a `logo.svg` file should appear in the directory you are in

## Credits

Packages used in the application:
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Jest](https://www.npmjs.com/package/jest)

Tutorials:
- In addition to the Inquirer documentation link above, I referred to the following examples to learn how to use the `validate` feature of Inquirer:
    - [tabnine - how to use inquirer](https://www.tabnine.com/code/javascript/modules/inquirer)
    - [synkAdvisor - how to use the inquirer.prompt function in inquirer](https://snyk.io/advisor/npm-package/inquirer/functions/inquirer.prompt)
- My list of valid color names comes from [htmlcolorcodes.com](https://htmlcolorcodes.com/color-names/)
- I referred to [Geeks for Geeks - How to Validate Hexadecimal Color Code Using Regular Expression](https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/) to learn about the RegEx for validating hex color codes                    

## License

MIT License

## Tests

While in the repository, run the command `npm test` to test the code for rendering the shapes.

## Questions

For more information:
- View my [GitHub profile](https://github.com/sendusyourbones)
- Email me at [beckee.roos@gmail.com](mailto:beckee.roos@gmail.com)