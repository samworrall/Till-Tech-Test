class Till {
  constructor(shop, printer) {
    this.shop = shop
    this.printer = printer
    this.basket = []
  }

  process_order(item, amount) {
    const price = this.shop.menu[item];
    const order = {'item': item, 'amount': amount, 'price': price};
    this.basket.push(order);
  }

  return_receipt(customer) {
    let receipt = this.printer.print_receipt(this.shop, this.basket, customer);
    this.basket = [];
    return receipt
  }
}

module.exports = Till
