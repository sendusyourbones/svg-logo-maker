const colorNames = require('./colorNames.js');

function validateText(input) {
    return input.length > 3 ? 'Please enter no more than 3 characters': true;
}

function validateColor(input) {
    // validHexRegEx is RegEx where:
    // ^# verifies the string begins with #
    // [A-Fa-f0-9] verifies uppercase letter or lowercase letter A-F or number 0-9
    // {X} verifies there are X of the characters in brackets
    // | means or
    // $ verifies end of string
    // In sum, this looks for # followed by 6 or 3 characters: uppercase or lowercase letters A-F or numbers 0-9
    const validHexRegEx = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const validHex = validHexRegEx.test(input);

    const validName = colorNames.indexOf(input.toLowerCase()) >= 0;

    return (validHex || validName) ? true : 'Please enter a valid color name or hexadecimal value\nColor name must match one of the names listed here: https://htmlcolorcodes.com/color-names/';
}

module.exports = {
    validateText,
    validateColor
};
