const json = require("../hipstercoffee.json")

class Till {
  constructor() {
    this.menu = json[0]['prices'][0]
    this.basket = []
  }

  process_order(item, amount) {
    const price = this.menu[item];
    const order = {'item': item, 'amount': amount, 'price': price};
    this.basket.push(order);
  }
}

module.exports = Till
