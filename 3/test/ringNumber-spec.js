const { expect } = require('chai')
const ringNumber = require('../lib/ringNumber')

describe('-> ringNumber', () => {
  describe('when given 1', () => {
    it('should return 0', () => {
      expect(ringNumber(1)).to.equal(0)
    })
  })

  describe('when given 2', () => {
    it('should return 1', () => {
      expect(ringNumber(2)).to.equal(1)
    })
  })

  describe('when given 3', () => {
    it('should return 1', () => {
      expect(ringNumber(3)).to.equal(1)
    })
  })

  describe('when given 10', () => {
    it('should return 2', () => {
      expect(ringNumber(10)).to.equal(2)
    })
  })

  describe('when given 25', () => {
    it('should return 2', () => {
      expect(ringNumber(25)).to.equal(2)
    })
  })

  describe('when given 26', () => {
    it('should return 3', () => {
      expect(ringNumber(26)).to.equal(3)
    })
  })
})
