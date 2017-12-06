const fs = require('fs')
const curry = require('lodash/fp/curry')
const flatMap = require('lodash/fp/flatMap')
const flow = require('lodash/fp/flow')
const find = require('lodash/fp/find')
const map = require('lodash/fp/map')
const split = require('lodash/fp/split')
const sumBy = require('lodash/fp/sumBy')
const trim = require('lodash/fp/trim')

const INPUT = fs.readFileSync('./input.tsv')

const splitInputIntoRows = flow(trim, split(/\n/))
const splitRowIntoCells = flow(split(/\t/), map(parseInt))
const parseInput = flow(splitInputIntoRows, map(splitRowIntoCells))

const cellPermutations = curry((row, cell1) => map(cell2 => [cell1, cell2], row))
const permutations = row => flatMap(cellPermutations(row), row)
const evenlyDivides = ([cell1, cell2]) => cell1 !== cell2 && cell1 % cell2 === 0

const divisible = (row) => {
  const [divident, divisor] = find(evenlyDivides, permutations(row))
  return divident / divisor
}

const checkSum = sumBy(divisible)

console.log('sum', checkSum(parseInput(INPUT))) // eslint-disable-line no-console
