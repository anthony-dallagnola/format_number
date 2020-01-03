"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TRANSLATION = {
    '0': [
        ' _ ',
        '| |',
        '|_|',
    ],
    '1': [
        '   ',
        '  |',
        '  |',
    ],
    '2': [
        ' _ ',
        ' _|',
        '|_ ',
    ],
    '3': [
        ' _ ',
        ' _|',
        ' _|',
    ],
    '4': [
        '   ',
        '|_|',
        '  |',
    ],
    '5': [
        ' _ ',
        '|_ ',
        ' _|',
    ],
    '6': [
        ' _ ',
        '|_ ',
        '|_|',
    ],
    '7': [
        ' _ ',
        '  |',
        '  |',
    ],
    '8': [
        ' _ ',
        '|_|',
        '|_|',
    ],
    '9': [
        ' _ ',
        '|_|',
        '  |',
    ],
    '.': [
        '   ',
        '   ',
        ' . ',
    ],
};
exports.TRANSLATION = TRANSLATION;
var REGEXP = {
    NUMBER: {
        FLOAT: /^\+?[0-9]*\.?[0-9]+$/,
        EXPONENT: /^\+?[0-9]*\.?[0-9]+(E|e)\+|\-[1-9][0-9]*$/,
        CUSTOM: /^0(x|X|b|B)[0-9A-F]*$/,
    },
    ZEROS_TRIM: /^0*(.*)0*/,
    ZEROS_TRIM_LEADING: /^0*(.*)/,
};
exports.REGEXP = REGEXP;
var ERRORS = {
    TOO_FEW_ARGUMENTS: 'Too few arguments, launch `node formatNumber.js -h` to see the exact syntax',
    TOO_MANY_ARGUMENTS: 'Too many arguments, launch `node formatNumber.js -h` to see the exact syntax',
    NOT_A_NUMBER: 'Problem parameter is not a number',
    NUMBER_TOO_BIG: 'Number is too big >= E+309',
    INCORRECT_SYNTAX: 'Syntax not handled',
};
exports.ERRORS = ERRORS;
//# sourceMappingURL=constants.js.map