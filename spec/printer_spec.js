describe("Printer", () => {
  var Printer = require('../lib/printer.js');

  beforeEach(() => {
    class FakeShop {
      constructor() {
        this.name = "The Coffee Connection";
        this.address = "123 Lakeside Way";
        this.phoneNumber = "16503600708";
        this.tax = 0.0864
      }
    }
    fakeShop = new FakeShop();
    log = [{'item': 'Tea', 'amount': 1, 'price': 3.65}]
    printer = new Printer();
    customer = 'Sam'
  });

  describe("#print_receipt", () => {
    it("Returns a pretty printed receipt", () => {
      expect(printer.print_receipt(fakeShop, log, customer, 5.00)).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nSam\nTea 1 X 3.65\nTax: $0.32\nTotal: $3.97\nCash: $5\nChange: $1.03")
    });

    it("Returns a pretty printed receipt with multiple items", () => {
      log.push({'item': 'Americano', 'amount': 2, 'price': 3.75});
      expect(printer.print_receipt(fakeShop, log, customer, 20.00)).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nSam\nTea 1 X 3.65\nAmericano 2 X 3.75\nTax: $0.96\nTotal: $12.11\nCash: $20\nChange: $7.89")
    });
  });

  describe("#check_for_valid_cash", () => {
    it("Throws an error if cash is less than total", () => {
      expect( () => { printer.check_for_valid_cash(5.50, 1.50) } ).toThrow("Total exceeds cash given")
    });
  });
});
