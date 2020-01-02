"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function displayCharacters(screenWidth, number) {
    var result = '';
    var charsPerLine = Math.floor(((screenWidth ? screenWidth : Infinity) + 1) / 4);
    var numberLines = Math.floor(number.length / charsPerLine) + 1;
    for (var i = 0; i < numberLines; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < charsPerLine && i * charsPerLine + k < number.length; k++) {
                result += constants_1.TRANSLATION[number[i * charsPerLine + k]][j] + ' ';
            }
            result = result.substring(0, result.length - 1) + '\n';
        }
    }
    result = result.substring(0, result.length - 1);
    return result;
}
exports.displayCharacters = displayCharacters;
//# sourceMappingURL=display.js.map