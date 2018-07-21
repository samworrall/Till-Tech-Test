class Printer {
  constructor() {
  }

  print_receipt(shop, log, customer, cash) {
    var total = 0
    var receipt = `${shop.name}\n${shop.address}\nPhone: ${shop.phoneNumber}\n${customer}\n`
    log.forEach((order) => {
      receipt += `${order['item']} ${order['amount']} X ${order['price']}\n`
      total += order['amount'] * order['price']
    });
    var tax = this.round_to_two_decimal_places(total * shop.tax)
    total += tax
    total = this.round_to_two_decimal_places(total)
    var change = this.round_to_two_decimal_places(cash - total)
    receipt += `Tax: $${tax}\nTotal: $${total}\nCash: $${cash}\nChange: $${change}`
    return receipt
  }

  round_to_two_decimal_places(num) {
    return Math.round(num * 100) / 100
  }
}

module.exports = Printer
