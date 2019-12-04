const TRANSLATION = {
  // 0
  0: [
    ' _ ',
    '| |',
    '|_|'
  ],
  // 1
  1: [
    '   ',
    '  |',
    '  |'
  ],
  // 2
  2: [
    ' _ ',
    ' _|',
    '|_ '
  ],
  // 3
  3: [
    ' _ ',
    ' _|',
    ' _|'
  ],
  // 4
  4: [
    '   ',
    '|_|',
    '  |'
  ],
  // 5
  5: [
    ' _ ',
    '|_ ',
    ' _|'
  ],
  // 6
  6: [
    ' _ ',
    '|_ ',
    '|_|'
  ],
  // 7
  7: [
    ' _ ',
    '  |',
    '  |'
  ],
  // 8
  8: [
    ' _ ',
    '|_|',
    '|_|'
  ],
  // 9
  9: [
    ' _ ',
    '|_|',
    '  |'
  ],
  // added to handle all numbers integer and float
  // if not needed the object can be a simple array and the association will match
  '.': [
    '   ',
    '   ',
    ' . '
  ]
};


const REGEXP = {
  FLOAT: /^\+?[0-9]*\.?[0-9]+$/,
  EXPONENT: /^\+?[0-9]*\.?[0-9]+(E|e)\+|\-[1-9][0-9]*$/
}

const ERRORS = [
  'Too few arguments, launch `node formatNumber.js -h` to see the exact syntax',
  'Too many arguments, launch `node formatNumber.js -h` to see the exact syntax',
  'Problem parameter is not a number',
  'Number is too big >= E+309'
];

module.exports = {
  TRANSLATION,
  REGEXP,
  ERRORS
};