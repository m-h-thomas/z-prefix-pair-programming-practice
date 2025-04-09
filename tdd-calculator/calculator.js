class Calculator {
  constructor(inputs = [], currentState) {
    this.inputs = inputs
    this.currentState = 0;
  }

  getCurrentState(){
    return this.currentState;
  }

  addInputs(...inputs) {
    let val = inputs.reduce((acc, curr) => acc + curr, 0);
    this.currentState = val;
    return val;
  }

  multiplyInputs(...inputs) {
    return inputs.reduce((acc, curr) => acc * curr, 1);
  }

  divideInputs(...inputs) {
    return inputs.reduce((acc, curr) => acc / curr);
  }

  subtractInputs(...inputs) {
    return inputs.reduce((acc, curr) => acc - curr);
  }

  toPower(base, exponent) {
    return base ** exponent;
  }

  squareRoot(input) {
    const result = Math.sqrt(input);

    if (result % 1 === 0) {
      return result;
    } else {
      return parseFloat(result.toFixed(2));
    }
  }

  clearCurrentStatus() {
    this.currentState = 0;
    return true;
  }

  negPosReversal(input){
    return -input;
  }

}

module.exports = Calculator