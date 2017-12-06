#!/usr/bin/env node

const last = require('lodash/fp/last')
const size = require('lodash/fp/size')
const INPUT = require('./input.json')

let lastDigit = parseInt(last(INPUT))
let sum = 0

for (let i = 0; i < size(INPUT); i++) {
  const digit = parseInt(INPUT[i])

  if (lastDigit === digit) {
    console.log(lastDigit, '===', digit)
    sum += digit
  }
  lastDigit = digit
}

console.log('sum', sum)
