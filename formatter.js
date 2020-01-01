import { REGEXP, ERRORS } from './constants.js';
import { handleFloat, handleExponent } from './parsers.js';
import { displayCharacters } from './display.js';

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
const formatNumber = (screenWidth, input) => {
  if (input.length < 1) {
    throw ERRORS.TOO_FEW_ARGUMENTS;
  } else if (input.length > 1) {
    throw ERRORS.TOO_MANY_ARGUMENTS;
  } else if (input[0] === '-h') {
    // help 
    return { result:
      'Formats a number into the corresponding characters, if the screen width is not enough the number will be outputted on multiples lines\n' +
      'Usage: \n' +
      '\tnode formatNumber.js numberToFormat\n' +
      'numberToFormat is the number that will be formatted on the output, can be integer or float\n'
    }
  } else if (isNaN(input[0])) {
    throw ERRORS.NOT_A_NUMBER;
  } else {
    let number;
    if(REGEXP.NUMBER.FLOAT.test(input[0])) {
      number = handleFloat(input[0]);
    } else if(REGEXP.NUMBER.EXPONENT.test(input[0])) {
      number = handleExponent(input[0]);
    } else if(REGEXP.NUMBER.CUSTOM.test(input[0])) {
      // HEXA or binary
      number = (+input[0]).toString();
    } else {
      throw ERRORS.INCORRECT_SYNTAX;
    }
    // we translate it
    let result = displayCharacters(screenWidth, number);
    return { result };
  }
}

export {
  formatNumber
}