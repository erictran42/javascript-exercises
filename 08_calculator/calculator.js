const add = function (a, b) {
  return a + b;
}


const subtract = function (large, small) {
  return large - small;
}

const sum = function (arr) {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => {
    return total * current;
  }, 1)
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  let product = 1;
  for (let i = 2; i <= number; i++){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
