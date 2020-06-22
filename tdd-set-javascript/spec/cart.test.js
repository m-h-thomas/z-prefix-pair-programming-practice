const Cart = require('../cart')
const Item = require('../item')

describe('Cart', () => {
  it('gets initialized without items or a total price', () => {
    let cart = new Cart()

    expect(cart.items).toEqual([])
    expect(cart.totalPrice).toEqual(0)
  })

  it('allows you to add items to the cart', () => {
    let fruit = new Item('Fruit', 4.50)
    let iceCream = new Item('Ice Cream', 5.50)
    let cart = new Cart()

    cart.addItem(fruit)
    expect(cart.totalPrice).toEqual(4.50)

    cart.addItem(iceCream)
    expect(cart.totalPrice).toEqual(10)
  })

  it('allows you to display an itemized list', () => {
    let coffee = new Item('Coffee', 2.5)
    let donuts = new Item('Donuts', 4.5)
    let cart = new Cart()

    expect(cart.itemizedList()).toEqual([])

    cart.addItem(coffee)
    cart.addItem(donuts)
    expect(cart.itemizedList()).toEqual(['Coffee - $2.5', 'Donuts - $4.5'])
  })

  it('allows you to add more than one of a given item to the cart', () => {
    let fruit = new Item('Fruit', 4.50)
    let iceCream = new Item('Ice Cream', 5.50)
    let cart = new Cart()

    cart.addItem(fruit, 2)
    expect(cart.totalPrice).toEqual(9)

    cart.addItem(iceCream, 4)
    expect(cart.totalPrice).toEqual(31)
  })

  // it('allows you to see how many of each item is in the cart', () => {
  //   let coffee = new Item('Coffee', 1.50)
  //   let cream = new Item('Cream', 0.50)
  //   let cart = new Cart()
  //
  //   expect(cart.itemQuantities()).toEqual([])
  //
  //   cart.addItem(coffee, 2)
  //   expect(cart.itemQuantities()).toEqual(['Coffee - 2'])
  //
  //   cart.addItem(cream, 4)
  //   expect(cart.itemQuantities()).toEqual(['Coffee - 2', 'Cream - 4'])
  // })
  //
  // it('allows you to display the names and prices of items that are on sale', () => {
  //   let pie = new Item('Pie', 5.5, false)
  //   let coffee = new Item('Coffee', 2.5, true)
  //   let donuts = new Item('Donuts', 4.5, true)
  //   let cart = new Cart()
  //
  //   cart.addItem(pie)
  //   expect(cart.onSaleItems()).toEqual([])
  //
  //   cart.addItem(coffee)
  //   expect(cart.onSaleItems()).toEqual(['Coffee - $2.5'])
  //
  //   cart.addItem(donuts)
  //   expect(cart.onSaleItems()).toEqual(['Coffee - $2.5', 'Donuts - $4.5'])
  // })
})