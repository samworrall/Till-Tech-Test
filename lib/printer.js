class Printer {
  constructor(log) {
    this.orderLog = log
  }

  print_receipt() {
    var total = 0
    var receipt = ''
    this.orderLog.forEach((order) => {
      receipt += `${order['item']} ${order['amount']} X ${order['price']}\n`
      total += order['amount'] * order['price']
    });
    receipt += `Total: $${total}`
    return receipt
  }
}

module.exports = Printer
