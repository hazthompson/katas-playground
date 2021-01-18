const fn = require('./intro');

describe('hello funtion', () => {
  it('should return the string hello', () => {
    const result = fn.hello();
    expect(result).toEqual('hello');
  });
});

describe('fizzbuzz funtion', () => {
  it('should return the number if not a multiple of 3, 5 or 15', () => {
    const result = fn.fizzBuzz(4);
    expect(result).toEqual(4);
  });
  it('should return the number if not a multiple of 3, 5 or 15', () => {
    const testNumbers = [4, 1, 2, 13, 17];
    testNumbers.forEach((testNumber) => {
      expect(fn.fizzBuzz(testNumber)).toEqual(testNumber);
    });
  });
  it('should return the fizz if a multiple of 3', () => {
    const testNumbers = [3, 6, 9, 12, 21];
    testNumbers.forEach((testNumber) => {
      expect(fn.fizzBuzz(testNumber)).toEqual('fizz');
    });
  });
  it('should return the buzz if a multiple of 5', () => {
    const testNumbers = [5, 10, 35, 20, 25];
    testNumbers.forEach((testNumber) => {
      expect(fn.fizzBuzz(testNumber)).toEqual('buzz');
    });
  });
  it('should return the fizzbuzz if a multiple of 5 and 3', () => {
    const testNumbers = [15, 30, 45, 60];
    testNumbers.forEach((testNumber) => {
      expect(fn.fizzBuzz(testNumber)).toEqual('fizzBuzz');
    });
  });
});
