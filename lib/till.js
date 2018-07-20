class Till {
  constructor(shop, printer) {
    this.shop = shop
    this.basket = []
    this.printer = printer
  }

  process_order(item, amount) {
    const price = this.shop.menu[item];
    const order = {'item': item, 'amount': amount, 'price': price};
    this.basket.push(order);
  }

  return_receipt() {
    var receipt = this.printer.print_receipt(this.shop, this.basket);
    return receipt
  }
}

module.exports = Till
