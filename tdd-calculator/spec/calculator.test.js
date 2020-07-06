const Calculator = require('../calculator')

describe('Calculator', () => {
  it('initializes with 0', () => {
    let calculator = new Calculator();

    expect(calculator.getCurrentState()).toEqual(0)
  })


  it('will add two numbers together', () => {
    let calculator = new Calculator();

    expect(calculator.addInputs(2, 3).toEqual(5))
  })



  it('will add three numbers together', () => {
    let calculator = new Calculator();

    expect(calculator.addInputs(1, 3, 5).toEqual(8))
  })



  it('will add as many numbers together as are input', () => {
    let calculator = new Calculator() 

    expect(calculator.addInputs(1, 2, 3, 4, 5, 6, 7, 8).toEqual(36))
    expect(calculator.addInputs(1).toEqual(1))
    expect(calculator.addInputs(25, 25, 25, 25).toEqual(100))
  })



  it('will multiply two numbers together', () => {
    let calculator = new Calculator() 

    expect(calculator.multiplyInputs(3, 5).toEqual(15))
  })
  


  it('will multiply three numbers together', () => {
    let calculator = new Calculator()

    expect(calculator.multiplyInputs(2, 4, 6).toEqual(48))
  })


  it('will divide one number by another', () => {
    let calculator = new Calculator() 

    expect(calculator.divideInputs(10, 2).toEqual(5))
    expect(calculator.divideInputs(5).toEqual(5))
  })



  it('will subtract one number from the other', () => {
    let calculator = new Calculator()

    expect(calculator.subtractInputs(10, 4).toEqual(6))
  })



  it('will raise a number to the given power', () => {
    let calculator = new Calculator()

    expect(calculator.toPower(3, 2).toEqual(9))
    expect(calculator.toPower(2, 3).toEqual(8))
  })



  it('will give the square root of a number and round to 2 decimal places if not an integer', () => {
    let calculator = new Calculator()

    expect(calculator.squareRoot(4).toEqual(2))
    expect(calculator.squareRoot(9).toEqual(3)) 
    expect(calculator.squareRoot(10).toEqual(3.16))
  })



  it('will clear the status of the calculator when button clicks', ()=> {
    let calculator = new Calculator()

    expect(calculator.getCurrentState().toEqual(0))
    expect(calculator.clearCurrentStatus().toEqual(true))

    calculator.addInputs(1, 2, 3)
    expect(calculator.getCurrentState().toEqual(6))
    expect(calculator.clearCurrentStatus().toEqual(true))
    expect(calculator.getCurrentState().toEqual(0))
  })



  it('allows you to change the +/- of a number to the opposite', () => {
    let calculator = new Calculator()
    let positiveInput = 5
    let negativeInput = -10 

    expect(calculator.negPosReversal(positiveInput).toEqual(-5))
    expect(calculator.negPosReversal(negativeInput).toEqual(10))
  })


  it('can format fractions', () => {
    let calculator = new Calculator() 

    expect(calculator.fractionFormatter(0.25)).toEqual('1/4')
    expect(calculator.fractionFormatter(0.5)).toEqual('1/2')
    expect(calculator.fractionFormatter(1.33)).toEqual('1 1/3')
    expect(calculator.fractionFormatter(2.25)).toEqual('2 1/4')
  })

  
})