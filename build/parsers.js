"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function handleFloat(inputNumber) {
    var number = inputNumber.replace(/\+/, '');
    if (number.includes('.')) {
        number = number.replace(constants_1.REGEXP.ZEROS_TRIM, '$1');
        if (number[0] === '.') {
            number = '0' + number;
        }
    }
    else {
        number = number.replace(constants_1.REGEXP.ZEROS_TRIM_LEADING, '$1');
    }
    return number;
}
exports.handleFloat = handleFloat;
function handleExponent(inputNumber) {
    if (+inputNumber === Infinity) {
        throw constants_1.ERRORS.NUMBER_TOO_BIG;
    }
    var number = (+inputNumber).toString();
    if (!constants_1.REGEXP.NUMBER.FLOAT.test(number)) {
        var indexE = number.indexOf('e');
        var indexPoint = number.indexOf('.');
        var value = number.substring(0, indexE);
        var exponent = +number.substring(indexE + 1);
        if (indexPoint !== -1) {
            number = handleExponentFloat(indexE, indexPoint, exponent, value);
        }
        else {
            number = handleExponentInteger(value, exponent);
        }
    }
    return number;
}
exports.handleExponent = handleExponent;
function handleExponentInteger(value, exponent) {
    var number;
    if (value.length <= exponent) {
        number = value;
        for (var i = 0; i < exponent - value.length; i++) {
            number += '0';
        }
    }
    else {
        number = '0.';
        for (var i = 0; i < -exponent - 1; i++) {
            number += '0';
        }
        number += value;
    }
    return number;
}
function handleExponentFloat(indexE, indexPoint, exponent, value) {
    var number;
    var diff = indexE - indexPoint - 1;
    value = value.replace(/\./, '');
    if (diff <= exponent) {
        number = value;
        for (var i = 0; i < exponent - diff; i++) {
            number += '0';
        }
    }
    else {
        number = '0.';
        for (var i = 0; i < -exponent - 1; i++) {
            number += '0';
        }
        number += value;
    }
    return number;
}
//# sourceMappingURL=parsers.js.map