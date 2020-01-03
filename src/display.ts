import { TRANSLATION } from './constants';


/**
 *
 *
 * @param {number} screenWidth number of characters the screen has
 * @param {string} number string to write
 * @returns {string} string to display
 */
function displayCharacters(screenWidth: number, number: string): string {
  let result = '';
  // the calcul includes + 1 to eliminate the space character, ' ', if there is not enough space at the end of the line
  const charsPerLine: number = Math.floor(((screenWidth ? screenWidth : Infinity) + 1) / 4);
  const numberLines: number = Math.floor(number.length / charsPerLine) + 1;
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
  }
  result = result.substring(0, result.length - 1);
  return result;
}

export {
  displayCharacters,
};
