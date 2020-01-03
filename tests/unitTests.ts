import { formatNumber } from '../build/formatter.js';
import { ERRORS } from '../build/constants.js';
import { assert } from 'chai';
// imports should
import 'chai/register-should';

describe('Test script', () => {
  // it.only('should write the integer', done => {
  it('should write the integer', (done) => {
    const screenWidth = 50;
    const input = ['123456789'];
    const expected =
      '     _   _       _   _   _   _   _ \n' +
      '  |  _|  _| |_| |_  |_    | |_| |_|\n' +
      '  | |_   _|   |  _| |_|   | |_|   |';
    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer on multiple lines and remove the 0 at the beginning', (done) => {
    const screenWidth = 11;
    const input = ['012345'];
    const expected =
      '     _   _ \n' +
      '  |  _|  _|\n' +
      '  | |_   _|\n' +
      '     _ \n' +
      '|_| |_ \n' +
      '  |  _|';
    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer in hexa', (done) => {
    const screenWidth = 50;
    const input = ['0x1B'];
    const expected =
      ' _   _ \n' +
      ' _|   |\n' +
      '|_    |';
    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer in binary', (done) => {
    const screenWidth = 50;
    const input = ['0b11'];
    const expected =
      ' _ \n' +
      ' _|\n' +
      ' _|';
    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer and remove the + at the beginning', (done) => {
    const screenWidth = 50;
    const input = ['+12'];
    const expected =
      '     _ \n' +
      '  |  _|\n' +
      '  | |_ ';
    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  // not in the specs but I thought it would be a nice addition
  it('should write the float', (done) => {
    const screenWidth = 50;
    const input = ['0.123'];
    const expected =
      ' _           _   _ \n' +
      '| |       |  _|  _|\n' +
      '|_|  .    | |_   _|';

    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  // not in the specs but I thought it would be a nice addition
  it('should write the integer but convert it into a number', (done) => {
    const screenWidth = 50;
    const input = ['12E+3'];
    const expected =
      '     _   _   _   _ \n' +
      '  |  _| | | | | | |\n' +
      '  | |_  |_| |_| |_|';

    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big integer but convert it into a number', (done) => {
    const screenWidth = 500;
    const input = ['1.486151E+30'];
    const expected =
      '         _   _       _       _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _ \n' +
      '  | |_| |_| |_    | |_    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\n' +
      '  |   | |_| |_|   |  _|   | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|';

    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big integer but convert it into a number', (done) => {
    const screenWidth = 500;
    const input = ['1E+31'];
    const expected =
      '     _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _ \n' +
      '  | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\n' +
      '  | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|';

    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big float < 1 but convert it into a number', (done) => {
    const screenWidth = 500;
    const input = ['1E-8'];
    const expected =
      ' _       _   _   _   _   _   _   _     \n' +
      '| |     | | | | | | | | | | | | | |   |\n' +
      '|_|  .  |_| |_| |_| |_| |_| |_| |_|   |';

    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big float < 1 with floating point but convert it into a number', (done) => {
    const screenWidth = 500;
    const input = ['0.152E-25'];
    const expected =
      ' _       _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _       _   _ \n' +
      '| |     | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |   | |_   _|\n' +
      '|_|  .  |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|   |  _| |_ ';

    const result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should return error too few arguments', (done) => {
    const input = [];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    } catch (err) {
      err.should.be.equal(ERRORS.TOO_FEW_ARGUMENTS);
      done();
    }
  });
  it('should return error too many arguments', (done) => {
    const input = ['1', '2'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    } catch (err) {
      err.should.be.equal(ERRORS.TOO_MANY_ARGUMENTS);
      done();
    }
  });
  it('should return error argument is not a number', (done) => {
    const input = ['abc123'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    } catch (err) {
      err.should.be.equal(ERRORS.NOT_A_NUMBER);
      done();
    }
  });
  it('should return error number is too big', (done) => {
    const input = ['1E+500'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    } catch (err) {
      err.should.be.equal(ERRORS.NUMBER_TOO_BIG);
      done();
    }
  });
  it('should return error incorrect syntax', (done) => {
    const input = ['1E500'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    } catch (err) {
      err.should.be.equal(ERRORS.INCORRECT_SYNTAX);
      done();
    }
  });
});
