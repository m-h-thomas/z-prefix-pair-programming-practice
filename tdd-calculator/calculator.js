class Calculator {
  constructor() {
    this.state = {
      current: 0
    }

  }

  getCurrentState = () => {
    return this.state.current; 
  }

  addInputs = (...args) => {
    let current = args.reduce((a, b) => a + b)
    this.state.current = current; 
    return current;
  }

  multiplyInputs = (...args) => {
    return args.reduce((a, b) => a * b)
  }
  
  divideInputs = (a, b=1) => {
    return a/b
  }

  subtractInputs = (...args) => {
    return args.reduce((a, b) => a-b)
  }

  toPower = (a, b) => {
    return Math.pow(a, b)
  }

  squareRoot = (a) => {
    return format(Math.sqrt(a), '.2f')
  }

  clearCurrentStatus = () => {
    this.state.current = 0; 
    return true; 
  }

  negPosReversal = (a) => {
    if(a > 0) {
      return a * -1
    } else {
      return Math.abs(a)
    }
  }

}

module.exports = Calculator