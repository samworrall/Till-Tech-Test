describe("Printer", () => {
  var Printer = require('../lib/printer.js');

  beforeEach(() => {
    log = [{'item': 'Tea', 'amount': 1, 'price': 3.65}]
    printer = new Printer(log);
  });

  it("orderLog is an array", () => {
    expect(printer.orderLog).toEqual(log)
  });

  describe("#print_receipt", () => {
    it("Returns a pretty printed receipt", () => {
      expect(printer.print_receipt()).toEqual("Tea 1 X 3.65\nTotal: $3.65")
    });

    it("Returns a pretty printed receipt with multiple items", () => {
      printer.orderLog.push({'item': 'Americano', 'amount': 2, 'price': 3.75});
      expect(printer.print_receipt()).toEqual("Tea 1 X 3.65\nAmericano 2 X 3.75\nTotal: $11.15")
    });
  });
});
