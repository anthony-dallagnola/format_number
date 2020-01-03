const TRANSLATION = {
  // 0
  '0': [
    ' _ ',
    '| |',
    '|_|',
  ],
  // 1
  '1': [
    '   ',
    '  |',
    '  |',
  ],
  // 2
  '2': [
    ' _ ',
    ' _|',
    '|_ ',
  ],
  // 3
  '3': [
    ' _ ',
    ' _|',
    ' _|',
  ],
  // 4
  '4': [
    '   ',
    '|_|',
    '  |',
  ],
  // 5
  '5': [
    ' _ ',
    '|_ ',
    ' _|',
  ],
  // 6
  '6': [
    ' _ ',
    '|_ ',
    '|_|',
  ],
  // 7
  '7': [
    ' _ ',
    '  |',
    '  |',
  ],
  // 8
  '8': [
    ' _ ',
    '|_|',
    '|_|',
  ],
  // 9
  '9': [
    ' _ ',
    '|_|',
    '  |',
  ],
  // added to handle all numbers integer and float
  // if not needed the object can be a simple array and the association will match
  '.': [
    '   ',
    '   ',
    ' . ',
  ],
};


const REGEXP = {
  NUMBER: {
    FLOAT: /^\+?[0-9]*\.?[0-9]+$/,
    EXPONENT: /^\+?[0-9]*\.?[0-9]+(E|e)\+|\-[1-9][0-9]*$/,
    CUSTOM: /^0(x|X|b|B)[0-9A-F]*$/,
  },
  ZEROS_TRIM: /^0*(.*)0*/,
  ZEROS_TRIM_LEADING: /^0*(.*)/,
};

const ERRORS = {
  TOO_FEW_ARGUMENTS: 'Too few arguments, launch `node formatNumber.js -h` to see the exact syntax',
  TOO_MANY_ARGUMENTS: 'Too many arguments, launch `node formatNumber.js -h` to see the exact syntax',
  NOT_A_NUMBER: 'Problem parameter is not a number',
  NUMBER_TOO_BIG: 'Number is too big >= E+309',
  INCORRECT_SYNTAX: 'Syntax not handled',
};

export {
  TRANSLATION,
  REGEXP,
  ERRORS,
};
