const { REGEXP, ERRORS } = require('./constants');
const { handleFloat, handleExponent } = require('./parsers');
const { displayCharacters } = require('./display');

/**
 * Formats a number and print it out
 * @param {string} number - number to be formatter
 * 
 * @example
 * npm start 123
 * @example 
 * npm start 12.3
 * @example 
 * npm start 189406549406232154897922065454630321654651
 * @example 
 * npm start 1E+31
 * @example 
 * npm start 0.3E-31
 * @example 
 * npm start 1.9E+15
 * @example 
 * npm start +12
 * @example 
 * npm start 0x20
 */
const formatNumber = (screenWidth, arguments) => {
  if (arguments.length < 1) {
    throw ERRORS.TOO_FEW_ARGUMENTS;
  } else if (arguments.length > 1) {
    throw ERRORS.TOO_MANY_ARGUMENTS;
  } else if (arguments[0] === '-h') {
    // help 
    return { result:
      'Formats a number into the corresponding characters, if the screen width is not enough the number will be outputted on multiples lines\n' +
      'Usage: \n' +
      '\tnode formatNumber.js numberToFormat\n' +
      'numberToFormat is the number that will be formatted on the output, can be integer or float\n'
    }
  } else if (isNaN(arguments[0])) {
    throw ERRORS.NOT_A_NUMBER;
  } else {
    let number;
    if(REGEXP.NUMBER.FLOAT.test(arguments[0])) {
      number = handleFloat(arguments[0]);
    } else if(REGEXP.NUMBER.EXPONENT.test(arguments[0])) {
      number = handleExponent(arguments[0]);
    } else if(REGEXP.NUMBER.CUSTOM.test(arguments[0])) {
      // HEXA or binary
      number = (+arguments[0]).toString();
    } else {
      throw ERRORS.INCORRECT_SYNTAX;
    }
    // we translate it
    let result = displayCharacters(screenWidth, number);
    return { result };
  }
}

module.exports = {
  formatNumber
}