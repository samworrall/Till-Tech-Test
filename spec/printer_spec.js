describe("Printer", () => {
  var Printer = require('../lib/printer.js');

  beforeEach(() => {
    class FakeShop {
      constructor() {
        this.name = "The Coffee Connection";
        this.address = "123 Lakeside Way";
        this.phoneNumber = "16503600708";
      }
    }
    fakeShop = new FakeShop();
    log = [{'item': 'Tea', 'amount': 1, 'price': 3.65}]
    printer = new Printer();
  });

  describe("#print_receipt", () => {
    it("Returns a pretty printed receipt", () => {
      expect(printer.print_receipt(fakeShop, log)).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nTea 1 X 3.65\nTotal: $3.65")
    });

    it("Returns a pretty printed receipt with multiple items", () => {
      log.push({'item': 'Americano', 'amount': 2, 'price': 3.75});
      expect(printer.print_receipt(fakeShop, log)).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nTea 1 X 3.65\nAmericano 2 X 3.75\nTotal: $11.15")
    });
  });
});
