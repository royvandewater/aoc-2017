const { expect } = require('chai')
const Grid = require('../lib/grid')

describe('Grid', () => {
  let t
  beforeEach(() => {
    t = {
      sut: new Grid(),
    }
  })

  describe('toString(n)', () => {
    describe('toString(0)', () => {
      it('should print the empty string', () => {
        expect(t.sut.toString(0)).to.deep.equal('')
      })
    })

    describe('toString(1)', () => {
      it('should print a string containing 1', () => {
        expect(t.sut.toString(1)).to.deep.equal('1')
      })
    })
  })
})
