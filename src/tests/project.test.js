const {calculator, stringLength, reverseString, capitalize} = require('./project');

describe('Calculator', () => {
  describe('add', () => {
    test('should return the sum of two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should return the sum of a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('should return the sum of two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('should return the difference between two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should return the difference between a positive and a negative number', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should return the difference between two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  describe('divide', () => {
    test('should return the quotient of two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should return the quotient of a positive and a negative number', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should throw an error if dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should return the product of a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test('should return the product of two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});


describe('stringLength', () => {
  test('stringLength throws an error when the string is too short', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
  });

  test('stringLength throws an error when the string is too long', () => {
    expect(() => stringLength('0123456789a')).toThrow('String cannot be longer than 10 characters');
  });

  test('stringLength returns the correct length of the string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('12345')).toBe(5);
  });
});

describe('reverseString', () => {
  test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

describe('capitalize', () => {
  test('capitalize function should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('foo bar')).toBe('Foo bar');
  });  
});