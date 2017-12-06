#!/usr/bin/env node

const size = require('lodash/fp/size')
const INPUT = require('./input.json')

let sum = 0

for (let i = 0; i < size(INPUT); i += 1) {
  const digit = parseInt(INPUT[i], 10)
  const halfSize = size(INPUT) / 2
  const otherIndex = (i + halfSize) % size(INPUT)
  const otherDigit = parseInt(INPUT[otherIndex], 10)

  if (digit === otherDigit) {
    sum += digit
  }
}

console.log('sum', sum)
