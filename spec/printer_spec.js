describe("Printer", () => {
  var Printer = require('../lib/printer.js');

  beforeEach(() => {
    log = [{'item': 'Tea', 'amount': 1, 'price': 3.65}]
    printer = new Printer(log);
  });

  it("orderLog is an array", () => {
    expect(printer.orderLog).toEqual(log)
  });
});
