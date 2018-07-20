const json = require("../hipstercoffee.json")

class Shop {
  constructor() {
    this.name = json[0]['shopName'];
    this.address = json[0]['address'];
    this.phoneNumber = json[0]['phone'];
    this.menu = json[0]['prices'][0];
  }
}

module.exports = Shop
