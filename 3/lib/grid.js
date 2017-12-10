const bindAll = require('lodash/fp/bindAll')

class Grid {
  constructor() {
    bindAll(Object.getOwnPropertyNames(Grid.prototype), this)
  }

  distanceToNth(n) {
    const ring = this.whichRing(n)
    const offset = this.offset(n)
    const stuff = {
      n,
      ring,
      offset,
    }
    console.log('distanceToNth', JSON.stringify(stuff, null, 2))
    return ring + offset
    // return n - 1
  }

  innerArea(ring) {
    if (ring === 0) return 1
    if (ring === 1) return 2
    if (ring === 2) return 9
    if (ring === 3) return 25
  }

  offset(n) {
    console.log('offset', n)
    const innerArea = this.innerArea(this.whichRing(n))

    if (n === 1) return 0
    if (n <= 9) return (n - innerArea) % 3
    if (n <= 25) return (n - innerArea) % 5
  }

  whichRing(n) {
    if (n === 1) {
      return 0
    }
    if (n <= 9) {
      return 1
    }
    if (n <= 25) {
      return 2
    }
    throw new Error('Unimplemented')
  }
}

module.exports = Grid
