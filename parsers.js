import { REGEXP, ERRORS } from './constants.js';

function handleFloat(inputNumber) {
  let number = inputNumber.replace(/\+/, '');
  if (number.includes('.')) {
    number = number.replace(REGEXP.ZEROS_TRIM, '$1');
    if (number[0] === '.') {
      number = '0' + number;
    }
  } else {
    number = number.replace(REGEXP.ZEROS_TRIM_LEADING, '$1');
  }
  return number;
}

function handleExponent(inputNumber) {
  if (+inputNumber === Infinity) {
    throw ERRORS.NUMBER_TOO_BIG;
  }
  let number = (+inputNumber).toString();
  if (!REGEXP.NUMBER.FLOAT.test(number)) {
    // Convertion into plain number didn't work because the number is too big, >= 1E+21 or <= 1E-7
    // the convertion changed the string into a number with at least a number before floating values
    let indexE = number.indexOf('e');
    let indexPoint = number.indexOf('.');
    let value = number.substring(0, indexE);
    let exponent = +number.substring(indexE + 1);
    if (indexPoint !== -1) {
      number = handleExponentFloat(indexE, indexPoint, exponent, value);
    } else {
      number = handleExponentInteger(value, exponent);
    }
  }
  return number;
}

function handleExponentInteger(value, exponent) {
  let number;
  if (value.length <= exponent) {
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
  return number;
}

function handleExponentFloat(indexE, indexPoint, exponent, value) {
  let number;
  let diff = indexE - indexPoint - 1;
  value = value.replace(/\./, '');
  if (diff <= exponent) {
    number = value;
    // enough power to make the number whole
    for (let i = 0; i < exponent - diff; i++) {
      number += '0';
    }
  } else {
    number = '0.';
    for (let i = 0; i < -exponent - 1; i++) {
      number += '0';
    }
    number += value;
  }
  return number;
}

export { 
  handleFloat,
  handleExponent
}