import { formatNumber } from '../formatter.js';
import { ERRORS } from '../constants.js';
import chai from 'chai';
const should = chai.should();
const assert = chai.assert;

describe('Test script', () => {
  // it.only('should write the integer', done => {
  it('should write the integer', done => {
    let screenWidth = 50;
    let input = ['123456789'];
    let expected = 
    '     _   _       _   _   _   _   _ \n' +
    '  |  _|  _| |_| |_  |_    | |_| |_|\n' +
    '  | |_   _|   |  _| |_|   | |_|   |';
    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');
    
    done();
  });
  it('should write the integer on multiple lines and remove the 0 at the beginning', done => {
    let screenWidth = 11;
    let input = ['012345'];
    let expected = 
    '     _   _ \n' +
    '  |  _|  _|\n' +
    '  | |_   _|\n' +
    '     _ \n' +
    '|_| |_ \n' +
    '  |  _|';
    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer in hexa', done => {
    let screenWidth = 50;
    let input = ['0x1B'];
    let expected = 
    ' _   _ \n' +
    ' _|   |\n' +
    '|_    |';
    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer in binary', done => {
    let screenWidth = 50;
    let input = ['0b11'];
    let expected = 
    ' _ \n' +
    ' _|\n' +
    ' _|';
    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the integer and remove the + at the beginning', done => {
    let screenWidth = 50;
    let input = ['+12'];
    let expected = 
    '     _ \n' +
    '  |  _|\n' +
    '  | |_ ';
    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  // not in the specs but I thought it would be a nice addition
  it('should write the float', done => {
    let screenWidth = 50;
    let input = ['0.123'];
    let expected = 
    ' _           _   _ \n' +
    '| |       |  _|  _|\n' +
    '|_|  .    | |_   _|';

    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  // not in the specs but I thought it would be a nice addition
  it('should write the integer but convert it into a number', done => {
    let screenWidth = 50;
    let input = ['12E+3'];
    let expected = 
    '     _   _   _   _ \n' +
    '  |  _| | | | | | |\n' +
    '  | |_  |_| |_| |_|';

    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big integer but convert it into a number', done => {
    let screenWidth = 500;
    let input = ['1.486151E+30'];
    let expected = 
    '         _   _       _       _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _ \n' +
    '  | |_| |_| |_    | |_    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\n' +
    '  |   | |_| |_|   |  _|   | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|';

    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big integer but convert it into a number', done => {
    let screenWidth = 500;
    let input = ['1E+31'];
    let expected = 
      '     _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _ \n' +
      '  | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\n' +
      '  | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|';

    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big float < 1 but convert it into a number', done => {
    let screenWidth = 500;
    let input = ['1E-8'];
    let expected = 
      ' _       _   _   _   _   _   _   _     \n' +
      '| |     | | | | | | | | | | | | | |   |\n' +
      '|_|  .  |_| |_| |_| |_| |_| |_| |_|   |';

    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big float < 1 with floating point but convert it into a number', done => {
    let screenWidth = 500;
    let input = ['0.152E-25'];
    let expected = 
      ' _       _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _       _   _ \n' +
      '| |     | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |   | |_   _|\n' +
      '|_|  .  |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|   |  _| |_ ';

    let result = formatNumber(screenWidth, input);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should return error too few arguments', done => {
    let input = [];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    }
    catch (err) {
      err.should.be.equal(ERRORS.TOO_FEW_ARGUMENTS);
      done();
    }
  });
  it('should return error too many arguments', done => {
    let input = ['1','2'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    }
    catch (err) {
      err.should.be.equal(ERRORS.TOO_MANY_ARGUMENTS);
      done();
    }
  });
  it('should return error argument is not a number', done => {
    let input = ['abc123'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    }
    catch (err) {
      err.should.be.equal(ERRORS.NOT_A_NUMBER);
      done();
    }
  });
  it('should return error number is too big', done => {
    let input = ['1E+500'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    }
    catch (err) {
      err.should.be.equal(ERRORS.NUMBER_TOO_BIG);
      done();
    }
  });
  it('should return error incorrect syntax', done => {
    let input = ['1E500'];
    try {
      formatNumber(undefined, input);
      done('test failed to throw exception');
    }
    catch (err) {
      err.should.be.equal(ERRORS.INCORRECT_SYNTAX);
      done();
    }
  });
});