const bindAll = require('lodash/fp/bindAll')
const join = require('lodash/fp/join')
const times = require('lodash/fp/times')

class Grid {
  constructor() {
    bindAll(Object.getOwnPropertyNames(Grid.prototype), this)
  }

  printNth(n) {
    return `${n + 1}`
  }

  toString(n) {
    return join('', times(this.printNth, n))
  }
}

module.exports = Grid
