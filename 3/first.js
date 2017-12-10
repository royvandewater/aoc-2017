#!/usr/bin/env node

const groupBy = require('lodash/fp/groupBy')

let index = 0
const row = 0
let column = 0
const memory = []

while (column < 2) {
  memory[index] = { row, column, value: index + 1 }
  column += 1
  index += 1
}

const rows = groupBy('row', memory)
console.log(rows)
