const { outputFormattedNumber } = require('../functions');
const { ERRORS } = require('../constants');
const chai = require('chai');
const should = chai.should();
const assert = chai.assert;

describe('Test script', () => {
  it('should write the integer', done => {
    let screenWidth = 50;
    let arguments = ['123456789'];
    let expected = 
    '     _   _       _   _   _   _   _ \n' +
    '  |  _|  _| |_| |_  |_    | |_| |_|\n' +
    '  | |_   _|   |  _| |_|   | |_|   |';
    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');
    
    done();
  });
  it('should write the integer on multiple lines and remove the 0 at the beginning', done => {
    let screenWidth = 11;
    let arguments = ['012345'];
    let expected = 
    '     _   _ \n' +
    '  |  _|  _|\n' +
    '  | |_   _|\n' +
    '     _ \n' +
    '|_| |_ \n' +
    '  |  _|';
    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  // not in the specs but I thought it would be a nice addition
  it('should write the float', done => {
    let screenWidth = 50;
    let arguments = ['0.123'];
    let expected = 
    ' _           _   _ \n' +
    '| |       |  _|  _|\n' +
    '|_|  .    | |_   _|';

    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  // not in the specs but I thought it would be a nice addition
  it('should write the integer but convert it into a number', done => {
    let screenWidth = 50;
    let arguments = ['12E+3'];
    let expected = 
    '     _   _   _   _ \n' +
    '  |  _| | | | | | |\n' +
    '  | |_  |_| |_| |_|';

    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big integer but convert it into a number', done => {
    let screenWidth = 500;
    let arguments = ['1.486151E+30'];
    let expected = 
    '         _   _       _       _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _ \n' +
    '  | |_| |_| |_    | |_    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\n' +
    '  |   | |_| |_|   |  _|   | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|';

    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big integer but convert it into a number', done => {
    let screenWidth = 500;
    let arguments = ['1E+31'];
    let expected = 
      '     _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _ \n' +
      '  | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\n' +
      '  | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|';

    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big float < 1 but convert it into a number', done => {
    let screenWidth = 500;
    let arguments = ['1E-8'];
    let expected = 
      ' _       _   _   _   _   _   _   _     \n' +
      '| |     | | | | | | | | | | | | | |   |\n' +
      '|_|  .  |_| |_| |_| |_| |_| |_| |_|   |';

    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should write the big float < 1 with floating point but convert it into a number', done => {
    let screenWidth = 500;
    let arguments = ['0.152E-25'];
    let expected = 
      ' _       _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _   _       _   _ \n' +
      '| |     | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |   | |_   _|\n' +
      '|_|  .  |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|   |  _| |_ ';

    let result = outputFormattedNumber(screenWidth, arguments);
    result.result.should.be.equal(expected);
    assert(typeof result.error, 'undefined');

    done();
  });
  it('should return error too few arguments', done => {
    let arguments = [];
    let result = outputFormattedNumber(undefined, arguments);

    result.error.should.be.equal(ERRORS[0]);
    assert(typeof result.result, 'undefined');

    done();
  });
  it('should return error too many arguments', done => {
    let arguments = [1,2];
    let result = outputFormattedNumber(undefined, arguments);

    result.error.should.be.equal(ERRORS[1]);
    assert(typeof result.result, 'undefined');

    done();
  });
  it('should return error argument is not a number', done => {
    let arguments = ['abc123'];
    let result = outputFormattedNumber(undefined, arguments);

    result.error.should.be.equal(ERRORS[2]);
    assert(typeof result.result, 'undefined');

    done();
  });
  it('should return error number is too big', done => {
    let arguments = ['1E+500'];
    let result = outputFormattedNumber(undefined, arguments);

    result.error.should.be.equal(ERRORS[3]);
    assert(typeof result.result, 'undefined');

    done();
  });
});