#!/usr/bin/env node

const offset = require('./lib/offset')
const ringNumber = require('./lib/ringNumber')

const input = 368078

const ring = ringNumber(input)
const bottomRightValue = ((ring * 2) + 1) ** 2 // prettier-ignore
const difference = bottomRightValue - input

console.log(JSON.stringify({
  input,
  ring,
  bottomRightValue,
  difference,
}))

// ring: 605
