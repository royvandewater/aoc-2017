const bindAll = require('lodash/fp/bindAll')

class Grid {
  constructor() {
    bindAll(Object.getOwnPropertyNames(Grid.prototype), this)
  }
}

module.exports = Grid
