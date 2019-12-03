const { TRANSLATION, ERRORS } = require('./constants');
const { REGEXP } = require('./constants');

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
 */
outputFormattedNumber = (screenWidth, arguments) => {
  if (arguments.length < 1) {
    // less than 1 argument
    return { error: ERRORS[0] };
  } else if (arguments.length > 1) {
    // more than 1 arguments
    return { error: ERRORS[1] };
  } else if (arguments[0] === '-h') {
    // help 
    return { result:
      'Formats a number into the corresponding characters, if the screen width is not enough the number will be outputted on multiples lines\n' +
      'Usage: \n' +
      '\tnode formatNumber.js numberToFormat\n' +
      'numberToFormat is the number that will be formatted on the output, can be integer or float\n'
    }
  } else if (isNaN(arguments[0])) {
    // not a valid entered
    return { error: ERRORS[2] };
  } else {
    let number;
    if(REGEXP.FLOAT.test(arguments[0])) {
      if(arguments[0].includes('.')) {
        number = '0' + arguments[0].replace(/^0*(.*)0*/, '$1');
      } else {
        number = arguments[0].replace(/^0*(.*)/, '$1');
      }
    } else if(REGEXP.EXPONENT.test(arguments[0])) {
      if(+arguments[0] === Infinity) {
        return { error: ERRORS[3] }
      }
      number = (+arguments[0]).toString();
      if(!REGEXP.FLOAT.test(number)) {
        // Convertion into plain number didn't work because the number is too big, >= 1E+21 or <= 1E-7
        // the convertion changed the string into a number with at least a number before floating values
        let indexE = number.indexOf('e');
        let indexPoint = number.indexOf('.');
        let value = number.substring(0, indexE);
        let exponent = +number.substring(indexE + 1);
        if(indexPoint !== -1) {
          // we have a floating value
          let diff = indexE - indexPoint - 1;
          if(diff <= exponent) {
            // enough power to make the number whole
            number = value.replace(/\./, '');
            for(let i = 0; i < exponent - diff; i++) {
              number += '0';
            }
          } else {
            value = value.replace(/\./, '');
            number = '0.';
            for (let i = 0; i < -exponent - 1; i++) {
              number += '0';
            }
            number += value;
          }
        } else {
          // case only 1 digit before exponent
          if(value.length <= exponent) {
            // >= 1
            number = value;
            for (let i = 0; i < exponent - value.length; i++) {
              number += '0';
            }
          } else {
            // < 1
            number = '0.';
            for (let i = 0; i < -exponent - 1; i++) {
              number += '0';
            }
            number += value;
          }
        }
      }
    // } else {

    }
    // we translate it
    let result = '';
    // the calcul includes + 1 to eliminate the space character, ' ', if there is not enough space at the end of the line 
    let charsPerLine = Math.floor(((screenWidth ? screenWidth : Infinity) + 1) / 4);
    let numberLines = Math.floor(number.length / charsPerLine) + 1;

    // browsing lines
    for (let i = 0; i < numberLines; i++) {
      // browsing the 3 lines of a character
      for (let j = 0; j < 3; j++) {
        // displaying characters in the current line
        for (let k = 0; k < charsPerLine && i * charsPerLine + k < number.length; k++) {
          result += TRANSLATION[number[i * charsPerLine + k]][j] + ' ';
        }
        result = result.substring(0, result.length - 1) + '\n';
      }
      // result += '\n';
    }
    result = result.substring(0, result.length - 1);
    return { result };
  }
}

module.exports = {
  outputFormattedNumber
}