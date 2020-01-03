"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var parsers_1 = require("./parsers");
var display_1 = require("./display");
var formatNumber = function (screenWidth, input) {
    if (input.length < 1) {
        throw constants_1.ERRORS.TOO_FEW_ARGUMENTS;
    }
    else if (input.length > 1) {
        throw constants_1.ERRORS.TOO_MANY_ARGUMENTS;
    }
    else if (input[0] === '-h') {
        return { result: 'Formats a number into the corresponding characters, if the screen width is not enough the number will be outputted on multiples lines\n' +
                'Usage: \n' +
                '\tnode formatNumber.js numberToFormat\n' +
                'numberToFormat is the number that will be formatted on the output, can be integer or float\n',
        };
    }
    else if (isNaN(+input[0])) {
        throw constants_1.ERRORS.NOT_A_NUMBER;
    }
    else {
        var number = void 0;
        if (constants_1.REGEXP.NUMBER.FLOAT.test(input[0])) {
            number = parsers_1.handleFloat(input[0]);
        }
        else if (constants_1.REGEXP.NUMBER.EXPONENT.test(input[0])) {
            number = parsers_1.handleExponent(input[0]);
        }
        else if (constants_1.REGEXP.NUMBER.CUSTOM.test(input[0])) {
            number = (+input[0]).toString();
        }
        else {
            throw constants_1.ERRORS.INCORRECT_SYNTAX;
        }
        var result = display_1.displayCharacters(screenWidth, number);
        return { result: result };
    }
};
exports.formatNumber = formatNumber;
//# sourceMappingURL=formatter.js.map