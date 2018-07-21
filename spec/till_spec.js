describe("Till", () => {
  var Till = require('../lib/till.js');

  beforeEach(() => {
    printer = jasmine.createSpyObj('printer', {'print_receipt': "The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nSam\nTea 1 X 3.65\nTax: $0.32\nTotal: $3.97\nCash: $5.00\nChange: $1.03"})
    class FakeShop {
      constructor() {
        this.menu = ({ 'Cafe Latte': 4.75,
                       'Flat White': 4.75,
                       'Cappucino': 3.85,
                       'Single Espresso': 2.05,
                       'Double Espresso': 3.75,
                       'Americano': 3.75,
                       'Cortado': 4.55,
                       'Tea': 3.65,
                       'Choc Mudcake': 6.4,
                       'Choc Mousse': 8.2,
                       'Affogato': 14.8,
                       'Tiramisu': 11.4,
                       'Blueberry Muffin': 4.05,
                       'Chocolate Chip Muffin': 4.05,
                       'Muffin Of The Day': 4.55
                     })
      }
    }
    fakeShop = new FakeShop();
    till = new Till(fakeShop, printer);
  });

  it("Returns an empty basket", () => {
    expect(till.basket.length).toEqual(0);
  });

  describe("#process_order", () => {
    it("Adds a Tea to the basket", () => {
      till.process_order('Tea', 1);
      expect(till.basket).toEqual([ { 'item': 'Tea', 'amount': 1, 'price': 3.65 } ])
    });

    it("Increases the basket length by 1", () => {
      till.process_order('Tea', 1);
      expect(till.basket.length).toEqual(1)
    });

    it("Increases the basket length by 2", () => {
      till.process_order('Tea', 1);
      till.process_order('Americano', 2);
      expect(till.basket.length).toEqual(2)
    });
  });

  describe("#return_receipt", () => {
    it("Calls print_receipt on printer", () => {
      till.return_receipt('Sam');
      expect(printer.print_receipt).toHaveBeenCalledWith(till.shop, till.basket, 'Sam')
    });

    it("Returns a pretty printed receipt", () => {
      till.process_order('Tea', 1);
      expect(till.return_receipt('Sam')).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nSam\nTea 1 X 3.65\nTax: $0.32\nTotal: $3.97\nCash: $5.00\nChange: $1.03")
    });

    it("Clears the basket after printing receipt", () => {
      till.process_order('Tea', 1);
      till.return_receipt('Sam');
      expect(till.basket).toEqual([])
    });
  });
});
