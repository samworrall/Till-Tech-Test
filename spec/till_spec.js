describe("Till", () => {
  var Till = require('../lib/till.js');

  beforeEach(() => {
    printer = jasmine.createSpyObj('printer', ['print_receipt'])
    till = new Till(printer);
  });

  it("Returns the menu", () => {
    expect(till.menu).toEqual(({ 'Cafe Latte': 4.75,
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
                               }));
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
      till.return_receipt();
      expect(printer.print_receipt).toHaveBeenCalledWith(till.basket)
    });
  });
});
