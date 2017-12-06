const fs = require('fs')
const flow = require('lodash/fp/flow')
const map = require('lodash/fp/map')
const max = require('lodash/fp/max')
const min = require('lodash/fp/min')
const split = require('lodash/fp/split')
const sumBy = require('lodash/fp/sumBy')
const trim = require('lodash/fp/trim')

const INPUT = fs.readFileSync('./input.tsv')

const splitInputIntoRows = flow(trim, split(/\n/))
const splitRowIntoColumns = flow(split(/\t/), map(parseInt))
const parseInput = flow(splitInputIntoRows, map(splitRowIntoColumns))

const minMaxDifference = row => max(row) - min(row)
const checkSum = sumBy(minMaxDifference)

console.log('sum', checkSum(parseInput(INPUT)))
