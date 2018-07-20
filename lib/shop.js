const json = require("../hipstercoffee.json")

class Shop {
  constructor() {
    this.name = json[0]['shopName']
  }
}

module.exports = Shop
