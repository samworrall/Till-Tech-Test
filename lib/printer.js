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
    var tax = Math.round((total * shop.tax) * 100) / 100
    total += tax
    total = Math.round(total * 100) / 100
    var change = Math.round((cash - total) * 100) / 100
    receipt += `Tax: $${tax}\nTotal: $${total}\nCash: $${cash}\nChange: $${change}`
    return receipt
  }
}

module.exports = Printer
