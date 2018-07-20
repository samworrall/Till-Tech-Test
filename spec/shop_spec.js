describe("Shop", () => {
  var Shop = require('../lib/shop.js')

  beforeEach(() => {
    shop = new Shop();
  });

  it("Returns the name of the shop", () => {
    expect(shop.name).toEqual("The Coffee Connection")
  });
});
