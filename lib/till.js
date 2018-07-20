const json = require("../hipstercoffee.json")

class Till {
  constructor(printer) {
    this.shopName = json[0]['shopName']
    this.menu = json[0]['prices'][0]
    this.basket = []
    this.printer = printer
  }

  process_order(item, amount) {
    const price = this.menu[item];
    const order = {'item': item, 'amount': amount, 'price': price};
    this.basket.push(order);
  }

  return_receipt() {
    var receipt = this.printer.print_receipt(this.basket);
    return receipt
  }
}

module.exports = Till
