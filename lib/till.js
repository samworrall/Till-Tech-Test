const json = require("../hipstercoffee.json")

class Till {
  constructor() {
    this.menu = json[0]['prices'][0]
    this.basket = []
  }
}

module.exports = Till
