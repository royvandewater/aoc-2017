const { expect } = require('chai')
const offset = require('../lib/offset')

xdescribe('-> offset', () => {
  describe('when given 1', () => {
    it('should return 0', () => {
      expect(offset(1)).to.equal(0)
    })
  })

  describe('when given 2', () => {
    it('should return 0', () => {
      expect(offset(2)).to.equal(0)
    })
  })

  describe('when given 3', () => {
    it('should return 1', () => {
      expect(offset(3)).to.equal(1)
    })
  })

  describe('when given 4', () => {
    it('should return 0', () => {
      expect(offset(4)).to.equal(0)
    })
  })

  describe('when given 12', () => {
    it('should return 1', () => {
      expect(offset(12)).to.equal(1)
    })
  })

  describe('when given 13', () => {
    it('should return 2', () => {
      expect(offset(13)).to.equal(2)
    })
  })

  describe('when given 25', () => {
    it('should return 2', () => {
      expect(offset(25)).to.equal(2)
    })
  })

  describe('when given 26', () => {
    it('should return 2', () => {
      expect(offset(26)).to.equal(2)
    })
  })

  describe('when given 27', () => {
    it('should return 1', () => {
      expect(offset(27)).to.equal(1)
    })
  })
})
