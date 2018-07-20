const json = require("../hipstercoffee.json")

class Shop {
  constructor() {
    this.name = json[0]['shopName'];
    this.address = json[0]['address'];
  }
}

module.exports = Shop
