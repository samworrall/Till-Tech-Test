class Printer {
  constructor() {
  }

  print_receipt(shop, log) {
    var total = 0
    var receipt = `${shop.name}\n${shop.address}\nPhone: ${shop.phoneNumber}\n`
    log.forEach((order) => {
      receipt += `${order['item']} ${order['amount']} X ${order['price']}\n`
      total += order['amount'] * order['price']
    });
    receipt += `Total: $${total}`
    return receipt
  }
}

module.exports = Printer
