const { expect } = require('chai')
const Grid = require('../lib/grid')

describe('Grid', () => {
  let t
  beforeEach(() => {
    t = {
      sut: new Grid(),
    }
  })

  describe('distanceToNth(n)', () => {
    describe('distanceToNth(1)', () => {
      it('should return 0', () => {
        expect(t.sut.distanceToNth(1)).to.deep.equal(0)
      })
    })

    describe('distanceToNth(2)', () => {
      it('should return 1', () => {
        expect(t.sut.distanceToNth(2)).to.deep.equal(1)
      })
    })

    describe('distanceToNth(12)', () => {
      it('should return 3', () => {
        expect(t.sut.distanceToNth(12)).to.deep.equal(3)
      })
    })

    describe('distanceToNth(23)', () => {
      it('should return 2', () => {
        expect(t.sut.distanceToNth(23)).to.deep.equal(2)
      })
    })

    describe('distanceToNth(1024)', () => {
      it('should return 31', () => {
        expect(t.sut.distanceToNth(1024)).to.deep.equal(31)
      })
    })
  })
})
