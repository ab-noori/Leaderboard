class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

const calculator = new Calculator();

function stringLength(string) {
  if (string.length === 0) {
    throw new Error('String must be at least 1 character long');
  }
  if (string.length > 10) {
    throw new Error('String cannot be longer than 10 characters');
  }
  return string.length;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  calculator, stringLength, reverseString, capitalize,
};