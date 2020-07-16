class Calculator {
  constructor() {
    this.state = 0
  }

  getCurrentState() {
    return this.state
  }

  clearCurrentStatus(){
    this.state = 0
    return true
  }


  addInputs(...args) {
    this.state = args.reduce((e, g) => e + g)
    return args.reduce((e, g) => e + g)
  }

  negPosReversal(a) {
    let reverse = a * 2
    return a - reverse
  }

  multiplyInputs(...args) {
    let sum = 1;
    for(let i = 0; i < args.length; i++) {
      sum *= args[i]
    }
    return sum
  }

  divideInputs(a, b=1) {
    return a/b
  }

  subtractInputs(...args) {
    return args.reduce((e, g) => e - g)
  }

  toPower(a, b) {
    return a ** b
  }

  squareRoot(a) {
    return Number.parseFloat((a ** 0.5).toFixed(2))
  }
}

module.exports = Calculator