describe("Shop", () => {
  var Shop = require('../lib/shop.js')

  beforeEach(() => {
    shop = new Shop();
  });

  it("Returns the name of the shop", () => {
    expect(shop.name).toEqual("The Coffee Connection")
  });

  it("Returns the address of the shop", () => {
    expect(shop.address).toEqual("123 Lakeside Way")
  });

  it("Returns the phone number of the shop", () => {
    expect(shop.phoneNumber).toEqual("16503600708")
  });

  it("Returns the shop menu", () => {
    expect(shop.menu).toEqual(({ 'Cafe Latte': 4.75,
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
});
