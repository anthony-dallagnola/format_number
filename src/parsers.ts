import { REGEXP, ERRORS } from './constants';

/**
 * Parse float string into valid float written as string
 * Removes leading 0, trailing 0
 *
 * @param {string} inputNumber float number entered
 * @returns {string} number formatted in string
 */
function handleFloat(inputNumber: string): string {
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


/**
 * Parse exponent number string into plain number written as string
 *
 * @param {string} inputNumber exponent number entered
 * @returns {string} number formatted to string
 */
function handleExponent(inputNumber: string): string {
  if (+inputNumber === Infinity) {
    throw ERRORS.NUMBER_TOO_BIG;
  }
  let number = (+inputNumber).toString();
  if (!REGEXP.NUMBER.FLOAT.test(number)) {
    // Convertion into plain number didn't work because the number is too big, >= 1E+21 or <= 1E-7
    // the convertion changed the string into a number with at least a number before floating values
    const indexE: number = number.indexOf('e');
    const indexPoint: number = number.indexOf('.');
    const value: string = number.substring(0, indexE);
    const exponent: number = +number.substring(indexE + 1);
    if (indexPoint !== -1) {
      number = handleExponentFloat(indexE, indexPoint, exponent, value);
    } else {
      number = handleExponentInteger(value, exponent);
    }
  }
  return number;
}

/**
 * Extracts a plain number from value and exponent
 *
 * @param {string} value    value without exponent
 * @param {number} exponent exponent as number
 * @returns {string} plain number, without exponents, as string
 */
function handleExponentInteger(value: string, exponent: number): string {
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


/**
 * Extracts a floating number from value and exponent
 *
 * @param {number} indexE position of exponent
 * @param {number} indexPoint position of floating value
 * @param {number} exponent value of exponent
 * @param {string} value value of the mantice
 * @returns {string} plain number, without exponents, as string
 */
function handleExponentFloat(indexE: number, indexPoint: number, exponent: number, value: string): string {
  let number: string;
  const diff = indexE - indexPoint - 1;
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
  handleExponent,
};
