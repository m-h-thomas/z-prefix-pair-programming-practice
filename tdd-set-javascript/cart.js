const Item = require('./item')

class Cart {
  constructor() {
    this.items = []
    this.totalPrice = 0
  }

  addItem(item) {
    this.items.push(item)
    this.totalPrice += item.price
  }

  itemizedList() {
    let result = []
    for (let i = 0; i < this.items.length; i++) {
      result.push(`${this.items[i].name} - $${this.items[i].price}`)
    }
    return result
  }
}

module.exports = Cart