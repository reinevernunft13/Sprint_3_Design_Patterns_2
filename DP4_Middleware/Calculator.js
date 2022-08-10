/*function add(a, b) {
    return a + b;
  }
  
function substract(a, b) {
    return a - b;
  }

function multiply(a, b) {
    return a * b;
  }
  
  module.exports = {
    add,
    substract,
    multiply,
};*/

//Class Calculator

class Calculator {
    constructor() {

    }
    add({a, b}) {
        return a + b;
    }

    substract({a, b}) {
        return a - b;
    }

    multiply({a, b}) {
        return a * b;
    }

}

module.exports = Calculator; 